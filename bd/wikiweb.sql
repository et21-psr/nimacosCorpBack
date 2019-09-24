CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_padre` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_categoria`),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `comentario` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `texto` longtext,
  `archivo` varchar(45) DEFAULT NULL,
  `comentario_padre` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `posteo` int(11) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_comentario`),
 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `posteo` (
  `id_posteo` int(11) NOT NULL AUTO_INCREMENT,
  `texto` longtext,
  `archivo` varchar(45) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_posteo`),
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `contrasena` varchar(45) DEFAULT NULL,
  `nombre` char(25) DEFAULT NULL,
  `apellido` char(25) DEFAULT NULL,
  `foto` varchar(75) DEFAULT NULL,
  `rol` char(25) DEFAULT NULL,
  `clave_admin` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `usuario` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
