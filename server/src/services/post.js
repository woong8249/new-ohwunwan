import * as data from "../data/index.js";
import s3 from "../utils/s3.js";

// get의 쿼리같은경우는 필드명만 살짝 수정해주면 되어서
// 그냥 변수를 한꺼번에 넣는 방식으로 쿼리 설정을 함
export async function getPost(params, query) {
  const { postType } = params;
  const { kind1rm, userId, number, limit } = query;
  const posts = await data.post.getPost(
    postType,
    kind1rm,
    userId,
    number,
    limit
  );

  return posts.map(post => {
    const location = JSON.parse(post.content);
    return { ...post, content: location };
  });
}

export async function createPost(params, query, files) {
  const infos3 = files.map(file => {
    const info = {
      key: file.key,
      bucket: file.bucket,
    };
    return info;
  });
  JSON.stringify(infos3);
  const { userId, text } = query;
  const user_id = (await data.user.findByUserId(userId)).id;
  const { postType } = params;
  const location = files.map(file => file.location);
  const content = await JSON.stringify(location);
  let post;
  if (postType === "ohwunwan" || postType === "feedback") {
    post = await data.post.createPost(
      postType,
      user_id,
      text,
      content,
      JSON.stringify(infos3)
    );
  }
  if (postType === "1rm") {
    const { kg, kind1rm } = query;
    post = await data.post.createPost1rm(
      postType,
      user_id,
      text,
      content,
      kg,
      kind1rm,
      JSON.stringify(infos3)
    );
  }
  return post.map(item => {
    return { ...item, content: JSON.parse(item.content) };
  });
}

export async function updatePost(params, body, post) {
  const { id, text } = body;
  const { postType } = params;
  let updatedPost;
  if (postType !== "1rm")
    updatedPost = await data.post.updatePost(postType, id, text);
  else {
    let { kg, text } = body;
    if (!kg) kg = post[0].kg;
    if (!text) text = post[0].text;
    updatedPost = await data.post.updatePost1rm(postType, id, text, kg);
  }
  return updatedPost.map(item => {
    return { ...item, content: JSON.parse(item.content) };
  })[0];
}

export async function removePost(params, query) {
  const { postType } = params;
  const { id } = query;
  const infoS3 = (await data.post.getinfoS3(postType, id)).infoS3;
  const parsed = JSON.parse(infoS3);

  await data.post.removePost(postType, id);

  // havetochage
  await parsed.forEach(async item => {
    await s3.deleteObject(
      {
        Bucket: item.bucket,
        Key: item.key,
      },
      function (err, data) {
        if (err) throw err;
      }
    );
  });
}
