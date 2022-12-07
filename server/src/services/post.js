import data from "../data/index.js";

// get의 쿼리같은경우는 필드명만 살짝 수정해주면 되어서 그냥 변수를 한꺼번에 넣는 방식으로
//쿼리 설정을 함
export async function getPost(postType, kind1rm, userId, number, limit) {
  return await data.postRepo.getPost(postType, kind1rm, userId, number, limit);
}

//
export async function createPost(params, body, files) {
  const { userId, text } = body;
  const user_id = (await data.userReop.findByUserId(userId)).id;

  const { postType } = params;
  const location = files.map(content => content.location);
  const content = await JSON.stringify(location);
  if (postType === "ohwunwan" || postType === "feedback") {
    return data.postRepo.createPost(postType, user_id, text, content);
  }
  if (postType === "1rm") {
    const { kg, kind1rm } = body;
    return data.postRepo.createPost1rm(
      postType,
      user_id,
      text,
      content,
      kg,
      kind1rm
    );
  }
}
