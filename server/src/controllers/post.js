import * as postServices from "../services/post.js";
export const getposts = async (req, res) => {
  const { postType } = req.params;
  const { userId, kind1rm, number, limit } = req.query;
  const data = await postServices.getPosts(
    postType,
    kind1rm,
    userId,
    number,
    limit
  );
  if (data.length == 0) return res.status(204).json();
  if (data) return res.status(200).json(data);
  else return res.status(500).json({ message: "Something is wrong" });
};
