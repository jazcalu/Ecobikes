-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Tienda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Tienda` (
  `id_tienda` INT NOT NULL,
  `nom_tienda` VARCHAR(45) NULL,
  `dir_tienda` VARCHAR(45) NULL,
  PRIMARY KEY (`id_tienda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Trabajador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Trabajador` (
  `id_trabajador` INT NOT NULL,
  `nom_trabajador` VARCHAR(45) NULL,
  `ape_trabajador` VARCHAR(45) NULL,
  `rol_trabajador` VARCHAR(45) NULL,
  `usu_trabajador` VARCHAR(45) NULL,
  `hash_trabajador` TEXT NULL,
  `salt_trabajador` TEXT NULL,
  `Tienda_id_tienda` INT NOT NULL,
  PRIMARY KEY (`id_trabajador`),
  INDEX `fk_Trabajador_Tienda1_idx` (`Tienda_id_tienda` ASC) VISIBLE,
  CONSTRAINT `fk_Trabajador_Tienda1`
    FOREIGN KEY (`Tienda_id_tienda`)
    REFERENCES `mydb`.`Tienda` (`id_tienda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Producto` (
  `id_producto` INT NOT NULL,
  `nom_producto` VARCHAR(45) NULL,
  `tipo_producto` VARCHAR(45) NULL,
  `prec_producto` DECIMAL(4,4) NULL,
  `peso_producto` DECIMAL(3,3) NULL,
  `dim_producto` VARCHAR(45) NULL,
  PRIMARY KEY (`id_producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ventas` (
  `Trabajador_id_trabajador` INT NOT NULL,
  `Producto_id_producto` INT NOT NULL,
  `cant_ventas` INT NULL,
  `fech_ventas` DATETIME NULL,
  INDEX `fk_Ventas_Trabajador1_idx` (`Trabajador_id_trabajador` ASC) VISIBLE,
  INDEX `fk_Ventas_Producto1_idx` (`Producto_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_Ventas_Trabajador1`
    FOREIGN KEY (`Trabajador_id_trabajador`)
    REFERENCES `mydb`.`Trabajador` (`id_trabajador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ventas_Producto1`
    FOREIGN KEY (`Producto_id_producto`)
    REFERENCES `mydb`.`Producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ventas tienda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ventas tienda` (
  `Tienda_id_tienda` INT NOT NULL,
  `cant_ventasf` VARCHAR(45) NULL,
  `fech_ventasf` DATETIME NULL,
  INDEX `fk_table2_Tienda1_idx` (`Tienda_id_tienda` ASC) VISIBLE,
  CONSTRAINT `fk_table2_Tienda1`
    FOREIGN KEY (`Tienda_id_tienda`)
    REFERENCES `mydb`.`Tienda` (`id_tienda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
