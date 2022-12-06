DROP DATABASE IF EXISTS ohwunwan;
CREATE DATABASE ohwunwan;
USE ohwunwan;
CREATE TABLE `Repots` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL COMMENT 'There are 2categorys: post,comment',
  `type` varchar(30) NOT NULL COMMENT 'There are 3 types: ohwunwan,feedback,1rm',
  `typeId` int NOT NULL COMMENT 'Unique number of the specified item',
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Admins` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `userId` varchar(30) UNIQUE NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Users` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `userId` varchar(30) UNIQUE NOT NULL,
  `password` varchar(100) NOT NULL,
  `nickname` varchar(30) UNIQUE DEFAULT null,
  `picture` varchar(2083) DEFAULT null,
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Posts_ohwunwan` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `content` varchar(6000) NOT NULL COMMENT 'There are 2 types: video, image',
  `text` varchar(2083) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
);

CREATE TABLE `Likes_ohwunwan` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `ohwunwan_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Comments_ohwunwan` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `ohwunwan_id` int NOT NULL,
  `user_id` int NOT NULL,
  `parent` int DEFAULT null,
  `text` varchar(2083) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
);

CREATE TABLE `Likes_comment_ohwunwan` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Posts_feedback` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `content` varchar(6000) NOT NULL COMMENT 'There are 2 types: video, image',
  `text` varchar(2083) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
);

CREATE TABLE `Likes_feedback` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `feedback_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Comments_feedback` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `feedback_id` int NOT NULL,
  `user_id` int NOT NULL,
  `parent` int DEFAULT null,
  `text` varchar(2083) NOT NULL,
  `selection` tinyint NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
);

CREATE TABLE `Likes_comment_feedback` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Posts_1rm` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `kind` varchar(20) NOT NULL COMMENT 'There are 3 types:bench,dead,squat',
  `content` varchar(6000) NOT NULL COMMENT 'There are 2 types: video, image',
  `text` varchar(2083) NOT NULL,
  `kg` int NOT NULL,
  `ranking` int NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
);

CREATE TABLE `Likes_1rm` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `1rm_id` int NOT NULL,
  `createdAt` timestamp NOT NULL
);

CREATE TABLE `Comments_1rm` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `1rm_id` int NOT NULL,
  `parent` int DEFAULT null,
  `text` varchar(2083) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
);

CREATE TABLE `Likes_comment_1rm` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL
);

ALTER TABLE `Likes_comment_ohwunwan` ADD FOREIGN KEY (`comment_id`) REFERENCES `Comments_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_comment_ohwunwan` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_ohwunwan` ADD FOREIGN KEY (`parent`) REFERENCES `Comments_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_ohwunwan` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Posts_ohwunwan` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_ohwunwan` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_ohwunwan` ADD FOREIGN KEY (`ohwunwan_id`) REFERENCES `Posts_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_ohwunwan` ADD FOREIGN KEY (`ohwunwan_id`) REFERENCES `Posts_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_comment_feedback` ADD FOREIGN KEY (`id`) REFERENCES `Comments_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_comment_feedback` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_feedback` ADD FOREIGN KEY (`parent`) REFERENCES `Comments_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Posts_feedback` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_feedback` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_feedback` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_feedback` ADD FOREIGN KEY (`feedback_id`) REFERENCES `Posts_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_feedback` ADD FOREIGN KEY (`feedback_id`) REFERENCES `Posts_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_comment_1rm` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_comment_1rm` ADD FOREIGN KEY (`id`) REFERENCES `Comments_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_1rm` ADD FOREIGN KEY (`parent`) REFERENCES `Comments_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_1rm` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Posts_1rm` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_1rm` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Likes_1rm` ADD FOREIGN KEY (`1rm_id`) REFERENCES `Posts_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Comments_1rm` ADD FOREIGN KEY (`1rm_id`) REFERENCES `Posts_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
