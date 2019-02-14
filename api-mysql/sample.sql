--
-- Table structure for table `todo`
--


CREATE TABLE `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `checkboxState` varchar(30),
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `todo`
--

INSERT INTO `todo` VALUES (1,'밥 먹기', '' , 2019 , 2 , 14, 'true' ,'2019-02-05 12:10:11');
INSERT INTO `todo` VALUES (2,'카페가기','3시까지 도착', 2019 , 2 , 16 , 'true' , '2019-02-05 12:55:36');
INSERT INTO `todo` VALUES (3,'db 공부하기','mysql 공부', 2019 , 2 , 14 , 'true' , '2019-02-06 18:11:21');
INSERT INTO `todo` VALUES (4,'계획1','계획1설명', 2019 , 2 , 18 , 'true' , '2019-02-07 21:16:29');
INSERT INTO `todo` VALUES (5,'계획2','계획2설명', 2019 , 2 , 16 , 'true' , '2019-02-07 21:16:29');
INSERT INTO `todo` VALUES (6,'계획3','계획3설명', 2019 , 2 , 17 , 'true' , '2019-02-07 21:16:29');
INSERT INTO `todo` VALUES (7,'계획4','계획4설명', 2019 , 2 , 19 , 'true' , '2019-02-07 21:16:29');



INSERT INTO `todo` VALUES (1,'밥 먹기', '' , 2019 , 2 , 28, 'false' ,'2019-02-05 12:10:11');
INSERT INTO `todo` VALUES (2,'카페가기','3시까지 도착', 2019 , 2 , 29 , 'false' , '2019-02-05 12:55:36');
INSERT INTO `todo` VALUES (3,'db 공부하기','mysql 공부', 2019 , 3 , 2 , 'false' , '2019-02-06 18:11:21');
INSERT INTO `todo` VALUES (4,'계획1','계획1설명', 2019 , 3 , 1 , 'false' , '2019-02-07 21:16:29');
INSERT INTO `todo` VALUES (5,'계획2','계획2설명', 2019 , 3 , 5 , 'false' , '2019-02-07 21:16:29');
INSERT INTO `todo` VALUES (6,'계획3','계획3설명', 2019 , 3 , 4 , 'false' , '2019-02-07 21:16:29');
INSERT INTO `todo` VALUES (7,'계획4','계획4설명', 2019 , 3 , 4 , 'false' , '2019-02-07 21:16:29');
