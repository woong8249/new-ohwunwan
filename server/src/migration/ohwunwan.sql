-- MySQL dump 10.13  Distrib 8.0.31, for macos12.6 (arm64)
--
-- Host: localhost    Database: ohwunwan
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admins`
DROP DATABASE IF EXISTS ohwunwan;
CREATE DATABASE ohwunwan;
USE ohwunwan
DROP TABLE IF EXISTS `Admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `userId` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admins`
--

LOCK TABLES `Admins` WRITE;
/*!40000 ALTER TABLE `Admins` DISABLE KEYS */;
/*!40000 ALTER TABLE `Admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comments_1rm`
--

DROP TABLE IF EXISTS `Comments_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments_1rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `1rm_id` int NOT NULL,
  `parent` int DEFAULT NULL,
  `text` varchar(2083) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `parent` (`parent`),
  KEY `user_id` (`user_id`),
  KEY `1rm_id` (`1rm_id`),
  CONSTRAINT `comments_1rm_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `Comments_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_1rm_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_1rm_ibfk_3` FOREIGN KEY (`1rm_id`) REFERENCES `Posts_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments_1rm`
--

LOCK TABLES `Comments_1rm` WRITE;
/*!40000 ALTER TABLE `Comments_1rm` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comments_1rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comments_feedback`
--

DROP TABLE IF EXISTS `Comments_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `feedback_id` int NOT NULL,
  `user_id` int NOT NULL,
  `parent` int DEFAULT NULL,
  `text` varchar(2083) NOT NULL,
  `selection` tinyint DEFAULT (NULL),
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `parent` (`parent`),
  KEY `user_id` (`user_id`),
  KEY `feedback_id` (`feedback_id`),
  CONSTRAINT `comments_feedback_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `Comments_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_feedback_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_feedback_ibfk_3` FOREIGN KEY (`feedback_id`) REFERENCES `Posts_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments_feedback`
--

LOCK TABLES `Comments_feedback` WRITE;
/*!40000 ALTER TABLE `Comments_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comments_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comments_ohwunwan`
--

DROP TABLE IF EXISTS `Comments_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments_ohwunwan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ohwunwan_id` int NOT NULL,
  `user_id` int NOT NULL,
  `parent` int DEFAULT NULL,
  `text` varchar(2083) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `parent` (`parent`),
  KEY `user_id` (`user_id`),
  KEY `ohwunwan_id` (`ohwunwan_id`),
  CONSTRAINT `comments_ohwunwan_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `Comments_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ohwunwan_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ohwunwan_ibfk_3` FOREIGN KEY (`ohwunwan_id`) REFERENCES `Posts_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments_ohwunwan`
--

LOCK TABLES `Comments_ohwunwan` WRITE;
/*!40000 ALTER TABLE `Comments_ohwunwan` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comments_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes_1rm`
--

DROP TABLE IF EXISTS `Likes_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes_1rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int  NOT NULL,
  `1rm_id` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `1rm_id` (`1rm_id`),
  CONSTRAINT `likes_1rm_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_1rm_ibfk_2` FOREIGN KEY (`1rm_id`) REFERENCES `Posts_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;







--
-- Dumping data for table `Likes_1rm`
--

LOCK TABLES `Likes_1rm` WRITE;
/*!40000 ALTER TABLE `Likes_1rm` DISABLE KEYS */;
/*!40000 ALTER TABLE `Likes_1rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes_comment_1rm`
--

DROP TABLE IF EXISTS `Likes_comment_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes_comment_1rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_1rm_id` int NOT NULL,
  `user_id` int  NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `comment_1rm_id` (`comment_1rm_id`),
  CONSTRAINT `likes_comment_1rm_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_comment_1rm_ibfk_2` FOREIGN KEY (`comment_1rm_id`) REFERENCES `Comments_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes_comment_1rm`
--

LOCK TABLES `Likes_comment_1rm` WRITE;
/*!40000 ALTER TABLE `Likes_comment_1rm` DISABLE KEYS */;
/*!40000 ALTER TABLE `Likes_comment_1rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes_comment_feedback`
--

DROP TABLE IF EXISTS `Likes_comment_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes_comment_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_feedback_id` int NOT NULL,
  `user_id` int   NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `comment_feedback_id` (`comment_feedback_id`),
  CONSTRAINT `likes_comment_feedback_ibfk_1` FOREIGN KEY (`comment_feedback_id`) REFERENCES `Comments_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_comment_feedback_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes_comment_feedback`
--

LOCK TABLES `Likes_comment_feedback` WRITE;
/*!40000 ALTER TABLE `Likes_comment_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `Likes_comment_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes_comment_ohwunwan`
--

DROP TABLE IF EXISTS `Likes_comment_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes_comment_ohwunwan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_ohwunwan_id` int NOT NULL,
  `user_id` int  NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `comment_ohwunwan_id` (`comment_ohwunwan_id`),
  CONSTRAINT `likes_comment_ohwunwan_ibfk_1` FOREIGN KEY (`comment_ohwunwan_id`) REFERENCES `Comments_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_comment_ohwunwan_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes_comment_ohwunwan`
--

LOCK TABLES `Likes_comment_ohwunwan` WRITE;
/*!40000 ALTER TABLE `Likes_comment_ohwunwan` DISABLE KEYS */;
/*!40000 ALTER TABLE `Likes_comment_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes_feedback`
--

DROP TABLE IF EXISTS `Likes_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `feedback_id` int NOT NULL,
  `user_id` int  NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `feedback_id` (`feedback_id`),
  CONSTRAINT `likes_feedback_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_feedback_ibfk_2` FOREIGN KEY (`feedback_id`) REFERENCES `Posts_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes_feedback`
--

LOCK TABLES `Likes_feedback` WRITE;
/*!40000 ALTER TABLE `Likes_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `Likes_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes_ohwunwan`
--

DROP TABLE IF EXISTS `Likes_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes_ohwunwan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ohwunwan_id` int NOT NULL,
  `user_id` int  NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `ohwunwan_id` (`ohwunwan_id`),
  CONSTRAINT `likes_ohwunwan_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ohwunwan_ibfk_2` FOREIGN KEY (`ohwunwan_id`) REFERENCES `Posts_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes_ohwunwan`
--

LOCK TABLES `Likes_ohwunwan` WRITE;
/*!40000 ALTER TABLE `Likes_ohwunwan` DISABLE KEYS */;
/*!40000 ALTER TABLE `Likes_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts_1rm`
--

DROP TABLE IF EXISTS `Posts_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Posts_1rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `kind1rm` varchar(20) NOT NULL COMMENT 'There are 3 types:bench,dead,squat',
  `content` varchar(6000) NOT NULL COMMENT 'There are 2 types: video, image',
  `text` varchar(2083) NOT NULL,
  `kg` int NOT NULL,
  `ranking` int NOT NULL DEFAULT '0',
  `infoS3` varchar(1000) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_1rm_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `posts_1rm`
--

LOCK TABLES `posts_1rm` WRITE;
/*!40000 ALTER TABLE `posts_1rm` DISABLE KEYS */;
INSERT INTO `Posts_1rm` 
VALUES 
(1,8,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671459500290_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',120,0,'[{\"key\":\"post-1rm/1671459500290_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:18:24','2022-12-19 14:18:24'),
(2,8,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671459729623_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',180,0,'[{\"key\":\"post-1rm/1671459729623_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:22:10','2022-12-19 14:22:10'),
(3,8,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671459775756_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',200,0,'[{\"key\":\"post-1rm/1671459775756_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:23:00','2022-12-19 14:23:00'),
(4,1,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671459862422_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',80,0,'[{\"key\":\"post-1rm/1671459862422_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:24:23','2022-12-19 14:24:23'),
(5,1,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671459887872_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',70,0,'[{\"key\":\"post-1rm/1671459887872_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:24:49','2022-12-19 14:24:49'),
(6,1,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671459911188_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',100,0,'[{\"key\":\"post-1rm/1671459911188_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:25:14','2022-12-19 14:25:14'),
(7,2,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460042953_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',100,0,'[{\"key\":\"post-1rm/1671460042953_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:27:25','2022-12-19 14:27:25'),
(8,2,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460132732_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',90,0,'[{\"key\":\"post-1rm/1671460132732_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:28:55','2022-12-19 14:28:55'),
(9,2,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460160433_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',110,0,'[{\"key\":\"post-1rm/1671460160433_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:29:23','2022-12-19 14:29:23'),
(10,3,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460566758_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',105,0,'[{\"key\":\"post-1rm/1671460566758_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:36:10','2022-12-19 14:36:10'),
(11,3,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460593765_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',65,0,'[{\"key\":\"post-1rm/1671460593765_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:36:37','2022-12-19 14:36:37'),
(12,3,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460622826_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',85,0,'[{\"key\":\"post-1rm/1671460622826_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:37:05','2022-12-19 14:37:05'),
(13,4,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460776101_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',185,0,'[{\"key\":\"post-1rm/1671460776101_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:39:38','2022-12-19 14:39:38'),
(14,4,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460800953_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',125,0,'[{\"key\":\"post-1rm/1671460800953_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:40:04','2022-12-19 14:40:04'),
(15,4,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460861743_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',100,0,'[{\"key\":\"post-1rm/1671460861743_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:41:04','2022-12-19 14:41:04'),
(16,6,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460918000_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',170,0,'[{\"key\":\"post-1rm/1671460918000_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:42:00','2022-12-19 14:42:00'),
(17,6,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460935672_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',110,0,'[{\"key\":\"post-1rm/1671460935672_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:42:18','2022-12-19 14:42:18'),
(18,6,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460959665_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',160,0,'[{\"key\":\"post-1rm/1671460959665_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:42:42','2022-12-19 14:42:42'),
(19,7,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671460999508_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',110,0,'[{\"key\":\"post-1rm/1671460999508_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:43:24','2022-12-19 14:43:24'),
(20,7,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461021448_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',55,0,'[{\"key\":\"post-1rm/1671461021448_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:43:43','2022-12-19 14:43:43'),
(21,7,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461043213_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',95,0,'[{\"key\":\"post-1rm/1671461043213_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:44:09','2022-12-19 14:44:09'),
(22,5,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461139556_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',220,0,'[{\"key\":\"post-1rm/1671461139556_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:45:43','2022-12-19 14:45:43'),
(23,5,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461158717_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',180,0,'[{\"key\":\"post-1rm/1671461158717_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:46:01','2022-12-19 14:46:01'),
(24,5,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461174538_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',220,0,'[{\"key\":\"post-1rm/1671461174538_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:46:19','2022-12-19 14:46:19'),
(25,9,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461507971_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',197,0,'[{\"key\":\"post-1rm/1671461507971_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:51:50','2022-12-19 14:51:50'),
(26,9,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461763585_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',129,0,'[{\"key\":\"post-1rm/1671461763585_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:56:07','2022-12-19 14:56:07'),
(27,9,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461804432_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',175,0,'[{\"key\":\"post-1rm/1671461804432_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:56:48','2022-12-19 14:56:48'),
(28,10,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461845748_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',140,0,'[{\"key\":\"post-1rm/1671461845748_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:57:26','2022-12-19 14:57:26'),
(29,10,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461863551_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',125,0,'[{\"key\":\"post-1rm/1671461863551_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:57:47','2022-12-19 14:57:47'),
(30,10,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1671461883643_test\"]','fafmkamskfmakdmvkfkejrn gkvjena bkjeakbjf akefjnbv jkaefnb kajef, vkjaf vkjaenrfkjanerkjvnaekja ekjv aekfjkjdnkwjenfkjnqekjnfjkwnfkjqnwkjfn',170,0,'[{\"key\":\"post-1rm/1671461883643_test\",\"bucket\":\"project-ohwunwan\"}]','2022-12-19 14:58:06','2022-12-19 14:58:06');

/*!40000 ALTER TABLE `posts_1rm` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `Posts_feedback`
--

DROP TABLE IF EXISTS `Posts_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Posts_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `content` varchar(6000) NOT NULL COMMENT 'There are 2 types: video, image',
  `text` varchar(2083) NOT NULL,
  `infoS3` varchar(1000) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_feedback_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts_feedback`
--

LOCK TABLES `Posts_feedback` WRITE;
/*!40000 ALTER TABLE `Posts_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `Posts_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts_ohwunwan`
--

DROP TABLE IF EXISTS `Posts_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Posts_ohwunwan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `content` varchar(6000) NOT NULL COMMENT 'There are 2 types: video, image',
  `text` varchar(2083) NOT NULL,
  `infoS3` varchar(1000) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ohwunwan_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts_ohwunwan`
--

LOCK TABLES `Posts_ohwunwan` WRITE;
/*!40000 ALTER TABLE `Posts_ohwunwan` DISABLE KEYS */;
INSERT INTO `Posts_ohwunwan` 
VALUES 
(1,7,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522226772_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A2%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A6%20%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%AB.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522226778_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%80%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A2%E1%86%BC.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522226772_심으뜸-오랜만에 전신.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522226778_심으뜸-궁댕.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:57:08','2022-12-08 17:57:08'),
(2,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522279900_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%80%E1%85%A1%E1%84%89%E1%85%B3%E1%86%B7%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522279900_윤성빈-오운완-가슴박살.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:58:00','2022-12-08 17:58:00'),
(3,9,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522341248_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522341258_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF2.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522341277_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF3.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522341248_지기-개박살.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522341258_지기-개박살2.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522341277_지기-개박살3.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:59:02','2022-12-08 17:59:02'),
(4,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522390873_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%82%E1%85%A9%E1%86%BC%E1%84%80%E1%85%AE.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522390873_윤성빈-오운완-농구.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:59:51','2022-12-08 17:59:51'),
(5,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522416365_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%86%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%80%E1%85%AE.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522416365_윤성빈-오운완-미식축구.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:00:17','2022-12-08 18:00:17'),
(6,6,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522454039_%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3+-%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A2%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A6130.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522454039_스윙스 -오랜만에130.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:00:56','2022-12-08 18:00:56'),
(7,10,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522501552_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2-%E1%84%92%E1%85%A6%E1%84%83%E1%85%B3%E1%84%89%E1%85%A6%E1%86%BA.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522501552_짱재-헤드셋.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:01:43','2022-12-08 18:01:43'),
(8,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522531898_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%8C%E1%85%A9%E1%86%A8%E1%84%80%E1%85%AE.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522531898_윤성빈-오운완-족구.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:02:12','2022-12-08 18:02:12'),
(9,7,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522648531_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%87%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A6.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522648531_심으뜸-발레.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:04:09','2022-12-08 18:04:09'),
(10,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522745409_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%86%BC.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522745416_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%91%E1%85%A1%E1%86%AF%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A9%E1%86%BC.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522745409_윤성빈-오운완-클라이밍.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522745416_윤성빈-오운완-팔운동.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:05:46','2022-12-08 18:05:46');
/*!40000 ALTER TABLE `Posts_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Repots`
--

DROP TABLE IF EXISTS `Repots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Repots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(30) NOT NULL COMMENT 'There are 2categorys: post,comment',
  `type` varchar(30) NOT NULL COMMENT 'There are 3 types: ohwunwan,feedback,1rm',
  `typeId` int NOT NULL COMMENT 'Unique number of the specified item',
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Repots`
--

LOCK TABLES `Repots` WRITE;
/*!40000 ALTER TABLE `Repots` DISABLE KEYS */;
/*!40000 ALTER TABLE `Repots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `picture` varchar(2083) DEFAULT NULL,
  `s3key` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES 
(1,'gamst','gamst1234','Gamest','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(2,'kinggihun','kinggihun1234','Kingbug','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%80%E1%85%B5%E1%84%92%E1%85%AE%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(3,'namsun','namsun1234',NULL,'https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%82%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(4,'hunman','hunmman1234','myeongseungsaja','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(5,'jaeyeong','jaeyeong1234','BornStrong','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(6,'swings','swings1234','Donkka','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(7,'bestsim','bestsim1234','Besthip','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(8,'seongbin','seongbin1234','Ironman','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(9,'jigi','jigi1234',NULL,'https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(10,'jjangjae','jjangjae1234',NULL,'https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png',NULL,'2022-12-08 16:53:35'),
(11,'jiwoong','$2b$10$7NWkXTiH4x8tV9yv/mZN9ulKpKk1d/gang/tK8qopTdt.4LlHyVWm','woonge_e',NULL,NULL,'2022-12-19 13:59:41');

/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-09 12:58:48
