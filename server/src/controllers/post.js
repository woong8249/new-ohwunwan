import * as postServices from "../services/post.js";
export const getPost = async (req, res) => {
  const { params, query } = req;
  const data = await postServices.getPost(params, query);
  if (data.length == 0) return res.status(204).json();
  if (data) return res.status(200).json(data);
  else return res.status(500).json({ message: "Something is wrong" });
};

export const createPost = async (req, res) => {
  const { params, body, files } = req;
  const data = await postServices.createPost(params, body, files);
  if (data) return res.status(201).json(data);
  else return res.status(500).json({ message: "Something is wrong" });
};
export const updatePost = async (req, res) => {
  const { params, body } = req;
  const data = await postServices.updatePost(params, body);
  if (data.length == 0) return res.status(204).json();
  if (data) return res.status(201).json(data);
  else return res.status(500).json({ message: "Something is wrong" });
};
export const removePost = async (req, res) => {
  const { params, query } = req;
  postServices
    .removePost(params, query) //
    .then(result => {
      return res.status(200).json({ message: "ok" });
    })
    .catch(err => {
      if (err) return res.status(500).json({ message: "Something is wrong" });
    });
};
