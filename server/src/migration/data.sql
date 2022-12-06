USE ohwunwan

-- Users
INSERT INTO Users(userId,password,nickname,picture,createdAt) 
VALUES('hyae1','a369369@@','jiwoong1',null,now());

INSERT INTO Users(userId,password,nickname,picture,createdAt) 
VALUES('hyae2','a369369@@','jiwoong2',null, DATE_ADD(NOW(), INTERVAL 1 SECOND));

INSERT INTO Users(userId,password,nickname,picture,createdAt) 
VALUES('hyae3','a369369@@','jiwoong3',null, DATE_ADD(NOW(), INTERVAL 2 SECOND));

INSERT INTO Users(userId,password,nickname,picture,createdAt) 
VALUES('hyae4','a369369@@','jiwoong4',null, DATE_ADD(NOW(), INTERVAL 3 SECOND));

-- Posts_ohwunwan
 insert into  Posts_ohwunwan(user_id,content,text,createdAt,updatedAt) 
 values(1,'사진대용텍스트','오운완 파이팅',now(),now());

 insert into  Posts_ohwunwan(user_id,content,text,createdAt,updatedAt) 
 values(2,'사진대용텍스트','오운완 파이팅',DATE_ADD(NOW(), INTERVAL 1 SECOND),DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Posts_ohwunwan(user_id,content,text,createdAt,updatedAt) 
 values(3,'사진대용텍스트','오운완 파이팅',DATE_ADD(NOW(), INTERVAL 2 SECOND),DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Posts_ohwunwan(user_id,content,text,createdAt,updatedAt) 
 values(4,'사진대용텍스트','오운완 파이팅',DATE_ADD(NOW(), INTERVAL 3 SECOND),DATE_ADD(NOW(), INTERVAL 3 SECOND));

-- comments_ohwunwan
insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(1,1,null,'댓글1',now(),now());

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(1,2,null,'댓글2',DATE_ADD(NOW(), INTERVAL 1 SECOND),DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(1,3,null,'댓글3',DATE_ADD(NOW(), INTERVAL 2 SECOND),DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(1,4,null,'댓글4',DATE_ADD(NOW(), INTERVAL 3 SECOND),DATE_ADD(NOW(), INTERVAL 3 SECOND));

 
 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(2,1,null,'댓글1',now(),now());

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(2,2,null,'댓글2',DATE_ADD(NOW(), INTERVAL 1 SECOND),DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(2,3,null,'댓글3',DATE_ADD(NOW(), INTERVAL 2 SECOND),DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(2,4,null,'댓글4',DATE_ADD(NOW(), INTERVAL 3 SECOND),DATE_ADD(NOW(), INTERVAL 3 SECOND));


 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(3,1,null,'댓글1',now(),now());

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(3,2,null,'댓글2',DATE_ADD(NOW(), INTERVAL 1 SECOND),DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(3,3,null,'댓글3',DATE_ADD(NOW(), INTERVAL 2 SECOND),DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(3,4,null,'댓글4',DATE_ADD(NOW(), INTERVAL 3 SECOND),DATE_ADD(NOW(), INTERVAL 3 SECOND));

 
 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(4,1,null,'댓글1',now(),now());

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(4,2,null,'댓글2',DATE_ADD(NOW(), INTERVAL 1 SECOND),DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(4,3,null,'댓글3',DATE_ADD(NOW(), INTERVAL 2 SECOND),DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Comments_ohwunwan(ohwunwan_id,user_id,parent,text,createdAt,updatedAt) 
 values(4,4,null,'댓글4',DATE_ADD(NOW(), INTERVAL 3 SECOND),DATE_ADD(NOW(), INTERVAL 3 SECOND));


-- Likes_ohwunwan
insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(1,1,now());

insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(1,2,DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(1,3,DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(1,4,DATE_ADD(NOW(), INTERVAL 3 SECOND));


 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(2,1,now());

insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(2,2,DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(2,3,DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(2,4,DATE_ADD(NOW(), INTERVAL 3 SECOND));


 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(3,1,now());

insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(3,2,DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(3,3,DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(3,4,DATE_ADD(NOW(), INTERVAL 3 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(4,1,now());

insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(4,2,DATE_ADD(NOW(), INTERVAL 1 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(4,3,DATE_ADD(NOW(), INTERVAL 2 SECOND));

 insert into  Likes_ohwunwan(ohwunwan_id,user_id,createdAt) 
 values(4,4,DATE_ADD(NOW(), INTERVAL 3 SECOND));