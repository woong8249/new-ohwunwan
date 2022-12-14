import * as postServices from "../services/post.js";
export const getPost = (req, res) => {
  const { params, query } = req;
  return postServices
    .getPost(params, query) //
    .then(data => {
      if (data.length == 0) return res.status(204).json("no content");
      else if (data) return res.status(200).json(data);
    });
};

export const createPost = (req, res) => {
  const { params, body, files } = req;
  return postServices
    .createPost(params, body, files) //
    .then(data => {
      return res.status(201).json(data);
    });
};
export const updatePost = (req, res) => {
  const { params, body } = req;
  return postServices
    .updatePost(params, body) //
    .then(data => {
      if (data.length == 0) return res.status(204).json("no content");
      else if (data) return res.status(200).json(data);
    });
};

export const removePost = (req, res) => {
  const { params, query } = req;
  return postServices
    .removePost(params, query) //
    .then(result => {
      return res.status(200).json({ message: "ok" });
    });
};
