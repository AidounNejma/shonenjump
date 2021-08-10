CREATE DATABASE shonenjump;

USE shonenjump;

CREATE TABLE subscribers (
    id_subscribers INT NOT NULL AUTO_INCREMENT,
    nickname VARCHAR(20) NOT NULL,
    gender ENUM('m','f') NOT NULL,
    service ENUM('admin', 'user') NOT NULL,
    inscription_date DATE NOT NULL,
    PRIMARY KEY (id_subscribers)
) ENGINE=InnoDB;

INSERT INTO employes (id_subscribers, nickname, gender, service, inscription_date) VALUES
(0001, 'Luffy', 'm', 'admin', '2010-12-09'),
(0002, 'Jotaro', 'm', 'user', '2010-12-15'),
(0003, 'Saitama', 'm', 'user', '2011-05-03'),
(0004, 'Mikasa','f', 'admin', '2011-09-05'),
(0005, 'ErzaScarlett','f', 'user', '2011-11-22'),
(0006, 'Sasuke', 'm', 'user', '2011-12-30'),
(0007, 'Sakura', 'f', 'user', '2012-01-08'),
(0008, 'Nami', 'f', 'user', '2012-05-09'),
(0009, 'LightYagami', 'm', 'admin', '2012-07-02'),
(0010, 'Hisoka', 'f', 'user', '2012-09-10'),
(0011, 'Guts', 'm', 'user', '2013-01-05'),
(0012, 'Naruto', 'm', 'user', '2013-04-03'),
(0013, 'Jiraya', 'm', 'user', '2013-07-17'),
(0014, 'LivaiAckerman', 'f', 'user', '2014-01-23'),
(0015, 'Kirua', 'm', 'user', '2014-07-05'),
(0016, 'IzukuMidoriya', 'm', 'admin', '2015-09-28'),
(0017, 'EdwardElric','f', 'user', '2016-01-12'),
(0018, 'Obito', 'm', 'user', '2016-06-03'),
(0019, 'NicoRobin', 'f', 'admin', '2017-01-11'),
(0020, 'GonFreecs', 'f', 'user', '2017-03-01');

CREATE TABLE comments (
    id_comment INT NOT NULL AUTO_INCREMENT,
    comment_text text NOT NULL,
    comment_date DATE NOT NULL,
    PRIMARY KEY (id_comment)
) ENGINE=InnoDB;
