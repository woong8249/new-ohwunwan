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
-- Table structure for table `admins`
DROP DATABASE IF EXISTS ohwunwan;
CREATE DATABASE ohwunwan;
USE ohwunwan
DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
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
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments_1rm`
--

DROP TABLE IF EXISTS `comments_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments_1rm` (
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
  CONSTRAINT `comments_1rm_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `comments_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_1rm_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_1rm_ibfk_3` FOREIGN KEY (`1rm_id`) REFERENCES `posts_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments_1rm`
--

LOCK TABLES `comments_1rm` WRITE;
/*!40000 ALTER TABLE `comments_1rm` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments_1rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments_feedback`
--

DROP TABLE IF EXISTS `comments_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `feedback_id` int NOT NULL,
  `user_id` int NOT NULL,
  `parent` int DEFAULT NULL,
  `text` varchar(2083) NOT NULL,
  `selection` tinyint NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `parent` (`parent`),
  KEY `user_id` (`user_id`),
  KEY `feedback_id` (`feedback_id`),
  CONSTRAINT `comments_feedback_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `comments_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_feedback_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_feedback_ibfk_3` FOREIGN KEY (`feedback_id`) REFERENCES `posts_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments_feedback`
--

LOCK TABLES `comments_feedback` WRITE;
/*!40000 ALTER TABLE `comments_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments_ohwunwan`
--

DROP TABLE IF EXISTS `comments_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments_ohwunwan` (
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
  CONSTRAINT `comments_ohwunwan_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `comments_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ohwunwan_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ohwunwan_ibfk_3` FOREIGN KEY (`ohwunwan_id`) REFERENCES `posts_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments_ohwunwan`
--

LOCK TABLES `comments_ohwunwan` WRITE;
/*!40000 ALTER TABLE `comments_ohwunwan` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_1rm`
--

DROP TABLE IF EXISTS `likes_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_1rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `1rm_id` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `1rm_id` (`1rm_id`),
  CONSTRAINT `likes_1rm_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_1rm_ibfk_2` FOREIGN KEY (`1rm_id`) REFERENCES `posts_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_1rm`
--

LOCK TABLES `likes_1rm` WRITE;
/*!40000 ALTER TABLE `likes_1rm` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes_1rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_comment_1rm`
--

DROP TABLE IF EXISTS `likes_comment_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_comment_1rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `likes_comment_1rm_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_comment_1rm_ibfk_2` FOREIGN KEY (`id`) REFERENCES `comments_1rm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_comment_1rm`
--

LOCK TABLES `likes_comment_1rm` WRITE;
/*!40000 ALTER TABLE `likes_comment_1rm` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes_comment_1rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_comment_feedback`
--

DROP TABLE IF EXISTS `likes_comment_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_comment_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `likes_comment_feedback_ibfk_1` FOREIGN KEY (`id`) REFERENCES `comments_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_comment_feedback_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_comment_feedback`
--

LOCK TABLES `likes_comment_feedback` WRITE;
/*!40000 ALTER TABLE `likes_comment_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes_comment_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_comment_ohwunwan`
--

DROP TABLE IF EXISTS `likes_comment_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_comment_ohwunwan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `comment_id` (`comment_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `likes_comment_ohwunwan_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `comments_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_comment_ohwunwan_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_comment_ohwunwan`
--

LOCK TABLES `likes_comment_ohwunwan` WRITE;
/*!40000 ALTER TABLE `likes_comment_ohwunwan` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes_comment_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_feedback`
--

DROP TABLE IF EXISTS `likes_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `feedback_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `feedback_id` (`feedback_id`),
  CONSTRAINT `likes_feedback_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_feedback_ibfk_2` FOREIGN KEY (`feedback_id`) REFERENCES `posts_feedback` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_feedback`
--

LOCK TABLES `likes_feedback` WRITE;
/*!40000 ALTER TABLE `likes_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_ohwunwan`
--

DROP TABLE IF EXISTS `likes_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes_ohwunwan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ohwunwan_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `ohwunwan_id` (`ohwunwan_id`),
  CONSTRAINT `likes_ohwunwan_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ohwunwan_ibfk_2` FOREIGN KEY (`ohwunwan_id`) REFERENCES `posts_ohwunwan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_ohwunwan`
--

LOCK TABLES `likes_ohwunwan` WRITE;
/*!40000 ALTER TABLE `likes_ohwunwan` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_1rm`
--

DROP TABLE IF EXISTS `posts_1rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_1rm` (
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
  CONSTRAINT `posts_1rm_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_1rm`
--

LOCK TABLES `posts_1rm` WRITE;
/*!40000 ALTER TABLE `posts_1rm` DISABLE KEYS */;
INSERT INTO `posts_1rm` VALUES (1,8,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670522872316_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5+120.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',120,0,'[{\"key\":\"post-1rm/1670522872316_윤성빈-벤치 120.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:07:54','2022-12-08 18:07:54'),(2,7,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670522920986_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B555.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',55,0,'[{\"key\":\"post-1rm/1670522920986_심으뜸-벤치55.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:08:43','2022-12-08 18:08:43'),(3,10,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670522963670_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5125.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',125,0,'[{\"key\":\"post-1rm/1670522963670_짱재-벤치125.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:09:27','2022-12-08 18:09:27'),(4,6,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670522997939_%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5110.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',110,0,'[{\"key\":\"post-1rm/1670522997939_스윙스-벤치110.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:10:00','2022-12-08 18:10:00'),(5,5,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670523056255_%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5180.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',180,0,'[{\"key\":\"post-1rm/1670523056255_재영-벤치180.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:11:00','2022-12-08 18:11:00'),(7,1,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670556748375_%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B570.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',70,0,'[{\"key\":\"post-1rm/1670556748375_감스트-벤치70.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:32:31','2022-12-09 03:32:31'),(8,3,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670556782478_%E1%84%82%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B5-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B565.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',65,0,'[{\"key\":\"post-1rm/1670556782478_남순이-벤치65.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:33:06','2022-12-09 03:33:06'),(9,4,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670556891143_%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5125.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',125,0,'[{\"key\":\"post-1rm/1670556891143_명현만-벤치125.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:34:54','2022-12-09 03:34:54'),(10,2,'bench','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557006661_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%80%E1%85%B5%E1%84%92%E1%85%AE%E1%86%AB-%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B590.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',90,0,'[{\"key\":\"post-1rm/1670557006661_김기훈-벤치90.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:36:49','2022-12-09 03:36:49'),(11,2,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557036404_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%80%E1%85%B5%E1%84%92%E1%85%AE%E1%86%AB-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3100.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',100,0,'[{\"key\":\"post-1rm/1670557036404_김기훈-데드100.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:37:19','2022-12-09 03:37:19'),(12,4,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557074811_%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3185.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',185,0,'[{\"key\":\"post-1rm/1670557074811_명현만-데드185.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:37:57','2022-12-09 03:37:57'),(13,9,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557114770_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3+197.3.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',197,0,'[{\"key\":\"post-1rm/1670557114770_지기-데드 197.3.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:38:39','2022-12-09 03:38:39'),(14,10,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557161686_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3140.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',140,0,'[{\"key\":\"post-1rm/1670557161686_짱재-데드140.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:39:24','2022-12-09 03:39:24'),(15,2,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557205313_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%80%E1%85%B5%E1%84%92%E1%85%AE%E1%86%AB-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3100.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',100,0,'[{\"key\":\"post-1rm/1670557205313_김기훈-데드100.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:40:07','2022-12-09 03:40:07'),(16,3,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557233936_%E1%84%82%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B5-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B380.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',80,0,'[{\"key\":\"post-1rm/1670557233936_남순이-데드80.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:40:37','2022-12-09 03:40:37'),(17,8,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557308984_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3%E1%84%90%E1%85%B3+180.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',180,0,'[{\"key\":\"post-1rm/1670557308984_윤성빈-데드리프트 180.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:41:51','2022-12-09 03:41:51'),(18,7,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557350193_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3110.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',110,0,'[{\"key\":\"post-1rm/1670557350193_심으뜸-데드110.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:42:34','2022-12-09 03:42:34'),(19,6,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557380725_%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3170.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',170,0,'[{\"key\":\"post-1rm/1670557380725_스윙스-데드170.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:43:03','2022-12-09 03:43:03'),(20,5,'dead','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557411244_%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC-%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3220.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',220,0,'[{\"key\":\"post-1rm/1670557411244_재영-데드220.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:43:34','2022-12-09 03:43:34'),(21,5,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557465363_%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3220.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',220,0,'[{\"key\":\"post-1rm/1670557465363_재영-스쿼트220.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:44:30','2022-12-09 03:44:30'),(22,9,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557529264_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3+174.6.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',175,0,'[{\"key\":\"post-1rm/1670557529264_지기-스쿼트 174.6.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:45:34','2022-12-09 03:45:34'),(23,8,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557553153_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3+200.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',200,0,'[{\"key\":\"post-1rm/1670557553153_윤성빈-스쿼트 200.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:45:56','2022-12-09 03:45:56'),(24,6,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557575175_%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3160.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',160,0,'[{\"key\":\"post-1rm/1670557575175_스윙스-스쿼트160.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:46:18','2022-12-09 03:46:18'),(25,7,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557603387_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B395.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',95,0,'[{\"key\":\"post-1rm/1670557603387_심으뜸-스쿼트95.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:46:49','2022-12-09 03:46:49'),(26,2,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557630635_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%80%E1%85%B5%E1%84%92%E1%85%AE%E1%86%AB-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3110.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',110,0,'[{\"key\":\"post-1rm/1670557630635_김기훈-스쿼트110.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:47:12','2022-12-09 03:47:12'),(27,10,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557668861_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3170.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',170,0,'[{\"key\":\"post-1rm/1670557668861_짱재-스쿼트170.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:47:50','2022-12-09 03:47:50'),(28,1,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557695186_%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B380.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',80,0,'[{\"key\":\"post-1rm/1670557695186_감스트-스쿼트80.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:48:17','2022-12-09 03:48:17'),(29,3,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557808808_%E1%84%82%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B5-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B380.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',80,0,'[{\"key\":\"post-1rm/1670557808808_남순이-스쿼트80.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:50:10','2022-12-09 03:50:10'),(30,4,'squat','[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-1rm/1670557833580_%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3100.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr',100,0,'[{\"key\":\"post-1rm/1670557833580_명현만-스쿼트100.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-09 03:50:36','2022-12-09 03:50:36');
/*!40000 ALTER TABLE `posts_1rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_feedback`
--

DROP TABLE IF EXISTS `posts_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_feedback` (
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
  CONSTRAINT `posts_feedback_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_feedback`
--

LOCK TABLES `posts_feedback` WRITE;
/*!40000 ALTER TABLE `posts_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts_ohwunwan`
--

DROP TABLE IF EXISTS `posts_ohwunwan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts_ohwunwan` (
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
  CONSTRAINT `posts_ohwunwan_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts_ohwunwan`
--

LOCK TABLES `posts_ohwunwan` WRITE;
/*!40000 ALTER TABLE `posts_ohwunwan` DISABLE KEYS */;
INSERT INTO `posts_ohwunwan` VALUES (1,4,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670521962414_%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB-%E1%84%82%E1%85%A5%E1%86%AB%E1%84%83%E1%85%B1%E1%84%8C%E1%85%A7%E1%86%BB%E1%84%84%E1%85%A1.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670521962427_%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB-%E1%84%89%E1%85%B3%E1%84%89%E1%85%B3%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7%E1%84%80%E1%85%AA.png\"]','asf am dsgken fsgkn eafn aejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670521962414_명현만-넌뒤졌따.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670521962427_명현만-스승님과.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:52:43','2022-12-08 17:52:43'),(2,6,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522107982_%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3-%E1%84%8C%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%A5%E1%86%A8.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522107982_스윙스-잘척.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:55:09','2022-12-08 17:55:09'),(3,7,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522226772_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A2%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A6%20%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%AB.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522226778_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%80%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A2%E1%86%BC.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522226772_심으뜸-오랜만에 전신.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522226778_심으뜸-궁댕.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:57:08','2022-12-08 17:57:08'),(4,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522279900_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%80%E1%85%A1%E1%84%89%E1%85%B3%E1%86%B7%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522279900_윤성빈-오운완-가슴박살.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:58:00','2022-12-08 17:58:00'),(5,9,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522341248_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522341258_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF2.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522341277_%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AF3.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522341248_지기-개박살.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522341258_지기-개박살2.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522341277_지기-개박살3.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:59:02','2022-12-08 17:59:02'),(6,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522390873_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%82%E1%85%A9%E1%86%BC%E1%84%80%E1%85%AE.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522390873_윤성빈-오운완-농구.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 17:59:51','2022-12-08 17:59:51'),(7,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522416365_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%86%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%8E%E1%85%AE%E1%86%A8%E1%84%80%E1%85%AE.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522416365_윤성빈-오운완-미식축구.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:00:17','2022-12-08 18:00:17'),(8,6,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522454039_%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3+-%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A2%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%A6130.mov\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522454039_스윙스 -오랜만에130.mov\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:00:56','2022-12-08 18:00:56'),(9,10,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522501552_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2-%E1%84%92%E1%85%A6%E1%84%83%E1%85%B3%E1%84%89%E1%85%A6%E1%86%BA.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522501552_짱재-헤드셋.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:01:43','2022-12-08 18:01:43'),(10,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522531898_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%8C%E1%85%A9%E1%86%A8%E1%84%80%E1%85%AE.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522531898_윤성빈-오운완-족구.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:02:12','2022-12-08 18:02:12'),(11,7,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522648531_%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7-%E1%84%87%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A6.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522648531_심으뜸-발레.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:04:09','2022-12-08 18:04:09'),(12,8,'[\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522745409_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%86%BC.png\",\"https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/post-ohwunwan/1670522745416_%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB-%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB-%E1%84%91%E1%85%A1%E1%86%AF%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A9%E1%86%BC.png\"]','asf am dsgfasasfasfken fsgkn eafn fgsdgsdgfsdafsasdaejkfneakfjnqeakjnfakjenfjkanefkjnadkjv ankjd fjknaekjgnjk wjkr','[{\"key\":\"post-ohwunwan/1670522745409_윤성빈-오운완-클라이밍.png\",\"bucket\":\"project-ohwunwan\"},{\"key\":\"post-ohwunwan/1670522745416_윤성빈-오운완-팔운동.png\",\"bucket\":\"project-ohwunwan\"}]','2022-12-08 18:05:46','2022-12-08 18:05:46');
/*!40000 ALTER TABLE `posts_ohwunwan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repots`
--

DROP TABLE IF EXISTS `repots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repots` (
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
-- Dumping data for table `repots`
--

LOCK TABLES `repots` WRITE;
/*!40000 ALTER TABLE `repots` DISABLE KEYS */;
/*!40000 ALTER TABLE `repots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `picture` varchar(2083) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gamst','gamst1234','Gamest','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(2,'kinggihun','kinggihun1234','Kingbug','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%80%E1%85%B5%E1%84%92%E1%85%AE%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(3,'namsun','namsun1234',NULL,'https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%82%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(4,'hunman','hunmman1234','myeongseungsaja','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB%E1%84%86%E1%85%A1%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(5,'jaeyeong','jaeyeong1234','BornStrong','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(6,'swings','swings1234','Donkka','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B1%E1%86%BC%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(7,'bestsim','bestsim1234','Besthip','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%84%84%E1%85%B3%E1%86%B7%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(8,'seongbin','seongbin1234','Ironman','https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%8B%E1%85%B2%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(9,'jigi','jigi1234',NULL,'https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35'),(10,'jjangjae','jjangjae1234',NULL,'https://project-ohwunwan.s3.ap-northeast-2.amazonaws.com/user-profile-picture/%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A2%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png','2022-12-08 16:53:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
