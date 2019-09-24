CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria_padre` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_categoria`),
  KEY `categorias-categorias_idx` (`categoria_padre`),
  CONSTRAINT `categoria_padre` FOREIGN KEY (`categoria_padre`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
  KEY `comentario_padre_idx` (`comentario_padre`),
  KEY `usuario_idx` (`usuario`),
  KEY `comentario_posteo_idx` (`posteo`),
  CONSTRAINT `comentario_padre` FOREIGN KEY (`comentario_padre`) REFERENCES `comentario` (`id_comentario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `comentario_posteo` FOREIGN KEY (`posteo`) REFERENCES `posteo` (`id_posteo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuario_c` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
  KEY `posteo-categoria_idx` (`categoria`),
  KEY `posteo-usuario_idx` (`usuario`),
  CONSTRAINT `categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
