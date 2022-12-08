import data from "../data/index.js";

// get의 쿼리같은경우는 필드명만 살짝 수정해주면 되어서
// 그냥 변수를 한꺼번에 넣는 방식으로 쿼리 설정을 함
export async function getPost(params, query) {
  const { postType } = params;
  const { kind1rm, userId, number, limit } = query;
  const posts = await data.postRepo.getPost(
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

export async function createPost(params, body, files) {
  const { userId, text } = body;
  const user_id = (await data.userReop.findByUserId(userId)).id;
  const { postType } = params;
  const location = files.map(file => file.location);
  const content = await JSON.stringify(location);
  let post;
  if (postType === "ohwunwan" || postType === "feedback") {
    post = await data.postRepo.createPost(postType, user_id, text, content);
  }
  if (postType === "1rm") {
    const { kg, kind1rm } = body;
    post = await data.postRepo.createPost1rm(
      postType,
      user_id,
      text,
      content,
      kg,
      kind1rm
    );
  }
  return post.map(item => {
    return { ...item, content: JSON.parse(item.content) };
  });
}

export async function updatePost(params, body) {
  const { id, text, kg } = body;
  // const user_id = (await data.userReop.findByUserId(userId)).id;
  // 로그인구현후 권한 확인 =>로그인정보와 게시물의 주인이 같은지 판별해야함
  const { postType } = params;
  const post = await data.postRepo.updatePost(postType, id, text, kg);
  return post.map(item => {
    return { ...item, content: JSON.parse(item.content) };
  });
}
