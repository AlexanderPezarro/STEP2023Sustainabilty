-- MariaDB dump 10.19  Distrib 10.11.4-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: STEP2023dev
-- ------------------------------------------------------
-- Server version	10.11.4-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `code`
--

DROP TABLE IF EXISTS `code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `code` (
  `code` varchar(32) NOT NULL,
  `module_code` char(6) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`code`,`module_code`),
  KEY `module_code` (`module_code`),
  CONSTRAINT `code_ibfk_1` FOREIGN KEY (`module_code`) REFERENCES `module` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `code`
--

LOCK TABLES `code` WRITE;
/*!40000 ALTER TABLE `code` DISABLE KEYS */;
INSERT INTO `code` VALUES
('ABCDE','CS1002','2023-07-18','2023-07-23');
/*!40000 ALTER TABLE `code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module`
--

DROP TABLE IF EXISTS `module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `module` (
  `code` char(6) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `school` varchar(50) NOT NULL,
  `secret_code` varchar(32) DEFAULT NULL,
  `surveyID` int(11) DEFAULT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `secret_code` (`secret_code`),
  KEY `fk_school_name` (`school`),
  KEY `surveyID` (`surveyID`),
  CONSTRAINT `fk_school_name` FOREIGN KEY (`school`) REFERENCES `school` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `module_ibfk_1` FOREIGN KEY (`surveyID`) REFERENCES `survey` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module`
--

LOCK TABLES `module` WRITE;
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
INSERT INTO `module` VALUES
('CS1002','Object-Oriented Programming','Computer Science','64440aeec56fef9d5f9efaedf73d0906',1),
('CS1003','Programming with Data','Computer Science','6cbf8dc8781a3d0a8f4c83330e0f36f9',1),
('CS1006','Programming Projects','Computer Science','a96522ac5b5cbf18b895446760c6236a',1),
('CS1007','Computer Systems Fundamentals','Computer Science','ed5c8145a271aabb25d395b0320a4e11',1),
('CS2001','Foundations of Computation','Computer Science','7e96ee414e9d175e27a37c49b5478178',1),
('CS2002','Computer Systems','Computer Science','1265355faf062c48b4d655b65de056d9',1),
('CS2003','The Internet and the Web: Concepts and Programming','Computer Science','bdad01c158a3ef0e3c75506cf34e534c',1),
('CS2006','Advanced Programming Projects','Computer Science','c5cca8f8e29bda88120884d8b1662580',1),
('CS2101','Foundations of Computation (Accelerated)','Computer Science','ea3c38e13065dc1716dc0b4a6cf16ab8',1);
/*!40000 ALTER TABLE `module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `rank_name` varchar(30) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `question` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES
(1,'Eco1','Eco1 is .....','What is question 1?'),
(2,'Eco2','Eco2 is .....','What is question 2?'),
(3,'Eco3','Eco3 is .....','What is question 3?');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `results` (
  `matric_num` varchar(9) NOT NULL,
  `module_code` char(6) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `question_num` int(11) NOT NULL,
  `result_number` int(11) DEFAULT NULL,
  `result_text` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`matric_num`,`module_code`,`survey_id`,`question_num`),
  KEY `fk_module_code` (`module_code`),
  KEY `fk_survey_id` (`survey_id`,`question_num`),
  CONSTRAINT `fk_module_code` FOREIGN KEY (`module_code`) REFERENCES `module` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_survey_id` FOREIGN KEY (`survey_id`, `question_num`) REFERENCES `survey` (`id`, `number`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES
('200015015','CS1002',1,1,1,NULL),
('200015015','CS1002',1,2,1,NULL),
('200015015','CS1002',1,3,1,NULL),
('200015015','CS1002',1,4,1,NULL),
('200015015','CS1002',1,5,1,NULL),
('200015015','CS1002',1,6,1,NULL),
('200015015','CS1002',1,7,1,NULL),
('200015015','CS1002',1,8,1,NULL),
('200015015','CS1002',1,9,1,NULL),
('200015015','CS1002',1,10,1,NULL),
('200015015','CS1002',1,11,1,NULL),
('200015015','CS1002',1,12,1,NULL),
('200015015','CS1002',1,13,1,NULL),
('200015015','CS1002',1,14,1,NULL),
('200015015','CS1003',1,1,2,NULL),
('200015015','CS1003',1,2,2,NULL),
('200015015','CS1003',1,3,2,NULL),
('200015015','CS1003',1,4,3,NULL),
('200015015','CS1003',1,5,3,NULL),
('200015015','CS1003',1,6,2,NULL),
('200015015','CS1003',1,7,3,NULL),
('200015015','CS1003',1,8,3,NULL),
('200015015','CS1003',1,9,4,NULL),
('200015015','CS1003',1,10,2,NULL),
('200015015','CS1003',1,11,2,NULL),
('200015015','CS1003',1,12,2,NULL),
('200015015','CS1003',1,13,2,NULL),
('200015015','CS1003',1,14,2,NULL),
('200015015','CS1003',1,15,NULL,'Very good!'),
('200015015','CS1003',1,16,NULL,'Make better');
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `school` (
  `name` varchar(50) NOT NULL,
  `code` char(2) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES
('Art History','AH'),
('Biology','BL'),
('Chemistry','CH'),
('Classics','AA'),
('Computer Science','CS'),
('Divinity','DI'),
('Earth and Environmental Sciences','ES'),
('Economics and Finance','EC'),
('English','EN'),
('Geography and Sustainable Development','GG'),
('History','EH'),
('International Education','ET'),
('International Relations','IR'),
('Management','MN'),
('Mathematics and Statistics','MT'),
('Medicine','MD'),
('Modern Languages','AP'),
('Music','MU'),
('Philosophical, Anthropological and Film studies','FS'),
('Physics and Astronomy','AS'),
('Psychology and Neuroscience','PN');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `score`
--

DROP TABLE IF EXISTS `score`;
/*!50001 DROP VIEW IF EXISTS `score`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `score` AS SELECT
 1 AS `module_code`,
  1 AS `survey_id`,
  1 AS `question_num`,
  1 AS `avg(result_text)` */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `survey`
--

DROP TABLE IF EXISTS `survey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `question` varchar(500) NOT NULL,
  `type` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`,`number`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey`
--

LOCK TABLES `survey` WRITE;
/*!40000 ALTER TABLE `survey` DISABLE KEYS */;
INSERT INTO `survey` VALUES
(1,1,'How frequently does the course incorporate sustainability topics into its curriculum?',2),
(1,2,'How well does the course integrate real-world examples and case studies to illustrate sustainability concepts?',2),
(1,3,'How often are sustainability-related assignments, projects, or exams included in the course?',2),
(1,4,'How well does the course promote efficient use of resources (e.g., paper, energy, water) within the classroom, and during assignments?',2),
(1,5,'How effectively does the course minimize waste and encourage recycling or reuse of materials?',2),
(1,6,'How well does the course align with the sustainability goals and initiatives of the University?',2),
(1,7,'How much do you believe the course contributes to raising awareness of and promoting sustainable practices?',2),
(1,8,'To what extent are you aware of the environmental and social impacts related to the topics covered in this course?',2),
(1,9,'How well do you believe the UN Sustainable Development Goals (SDGs) are applicable to the topics discussed in this course, even if they are not explicitly addressed?',2),
(1,10,'To what extent does this course encourage critical thinking, problem-solving, and ethical considerations that can be applied to sustainability challenges in other contexts?',2),
(1,11,'How effectively does this course promotes a mindset of responsibility, social awareness, and long-term thinking?',2),
(1,12,'How well does the course actively discuss the ethical considerations and social implications related to the content covered, even if sustainability is not the main emphasis?',2),
(1,13,'To what extent does the course encourage students to think about the social and environmental consequences of their actions beyond the immediate context of the course?',2),
(1,14,'How likely are you to incorporate sustainability principles and practices in your personal life as a result of taking this course?',2),
(1,15,'Please give any positive comments you would like to leave about the sustainability of your module',1),
(1,16,'Please give any comments you could make to help improve the sustainability of your module',1),
(1,17,'Please give any questions about/facets of sustainability that you think should be included when evaluating sustainability in your course',1),
(2,1,'When is question 1?',2),
(2,2,'When is question 2?',2);
/*!40000 ALTER TABLE `survey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `score`
--

/*!50001 DROP VIEW IF EXISTS `score`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50001 VIEW `score` AS select `results`.`module_code` AS `module_code`,`results`.`survey_id` AS `survey_id`,`results`.`question_num` AS `question_num`,avg(`results`.`result_text`) AS `avg(result_text)` from `results` where `results`.`question_num` <> '4' group by `results`.`module_code`,`results`.`question_num` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-25 14:12:33
