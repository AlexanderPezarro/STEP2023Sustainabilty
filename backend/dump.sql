-- MariaDB dump 10.19  Distrib 10.5.16-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: yn27_STEP_sample_db
-- ------------------------------------------------------
-- Server version	10.5.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module`
--

LOCK TABLES `module` WRITE;
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
INSERT INTO `module` VALUES ('CS1002','Object-Oriented Programming','Computer Science','64440aeec56fef9d5f9efaedf73d0906',1),('CS1003','Programming with Data','Computer Science','6cbf8dc8781a3d0a8f4c83330e0f36f9',1),('CS1006','Programming Projects','Computer Science','a96522ac5b5cbf18b895446760c6236a',1),('CS1007','Computer Systems Fundamentals','Computer Science','ed5c8145a271aabb25d395b0320a4e11',1),('CS2001','Foundations of Computation','Computer Science','7e96ee414e9d175e27a37c49b5478178',1),('CS2002','Computer Systems','Computer Science','1265355faf062c48b4d655b65de056d9',1),('CS2003','The Internet and the Web: Concepts and Programming','Computer Science','bdad01c158a3ef0e3c75506cf34e534c',1),('CS2006','Advanced Programming Projects','Computer Science','c5cca8f8e29bda88120884d8b1662580',1),('CS2101','Foundations of Computation (Accelerated)','Computer Science','ea3c38e13065dc1716dc0b4a6cf16ab8',1);
/*!40000 ALTER TABLE `module` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES ('123456774','CS1002',1,1,NULL,'3'),('123456774','CS1002',1,2,NULL,'5'),('123456774','CS1002',1,3,NULL,'7'),('123456774','CS1002',1,4,NULL,''),('123456777','CS1002',1,1,NULL,'3'),('123456777','CS1002',1,2,NULL,'5'),('123456777','CS1002',1,3,NULL,'7'),('123456777','CS1002',1,4,NULL,'Hello'),('123456788','CS1002',1,1,NULL,'10'),('123456788','CS1002',1,2,NULL,'9'),('123456788','CS1002',1,3,NULL,'8'),('123456789','CS1002',1,1,NULL,'1'),('123456789','CS1002',1,2,NULL,'q2'),('123456789','CS1002',1,3,NULL,'3'),('3','CS1002',1,1,NULL,'4'),('3','CS1002',1,2,NULL,'5'),('3','CS1002',1,3,NULL,'');
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES ('Art History','AH'),('Biology','BL'),('Chemistry','CH'),('Classics','AA'),('Computer Science','CS'),('Divinity','DI'),('Earth and Environmental Sciences','ES'),('Economics and Finance','EC'),('English','EN'),('Geography and Sustainable Development','GG'),('History','EH'),('International Education','ET'),('International Relations','IR'),('Management','MN'),('Mathematics and Statistics','MT'),('Medicine','MD'),('Modern Languages','AP'),('Music','MU'),('Philosophical, Anthropological and Film studies','FS'),('Physics and Astronomy','AS'),('Psychology and Neuroscience','PN');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey`
--

LOCK TABLES `survey` WRITE;
/*!40000 ALTER TABLE `survey` DISABLE KEYS */;
INSERT INTO `survey` VALUES (1,1,'What is question 1?',2),(1,2,'What is question 2?',2),(1,3,'What is question 3?',2),(1,4,'Please write any comments',1),(2,1,'When is question 1?',2),(2,2,'When is question 2?',2);
/*!40000 ALTER TABLE `survey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'yn27_STEP_sample_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-24 16:03:00