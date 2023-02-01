import * as postServices from "../services/post.js";
import UsersService from "../services/usersService.js";

export const updateRanking = (req, res) => {
  const { post } = req;
  return postServices //
    .updateRanking(post)
    .then(message => res.json(message));
};
export const getRanking = (req, res) => {
  const { query, params } = req;
  return postServices //
    .getRanking(params, query)
    .then(list => {
      if (list.length !== 0) {
        const maping = list.map(item => {
          const content = JSON.parse(item.content);
          return { ...item, content };
        });
        return res.json(maping);
      } else return res.status(204).json({ message: "no content" });
    });
};
export const getPost = (req, res) => {
  const { params, query } = req;
  return postServices
    .getPost(params, query) //
    .then(posts => {
      if (posts.length == 0)
        return res.status(204).json({ message: "no content" });
      else if (posts) return res.status(200).json(posts);
    });
};

export const createPost = (req, res) => {
  const { params, query, files } = req;
  const { user } = req;
  return postServices
    .createPost(params, query, files, user) //
    .then(post => {
      return res.status(201).json(post);
    });
};
export const updatePost = (req, res) => {
  const { params, body, post } = req;
  return postServices
    .updatePost(params, body, post) //
    .then(post => res.status(200).json(post));
};

export const removePost = async (req, res) => {
  const { params, query } = req;
  await UsersService.removePost(params, query);
  return res.status(200).json({ message: "ok" });
};
