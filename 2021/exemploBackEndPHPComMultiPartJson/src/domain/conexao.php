<?php
	class Conexao{//Classe que conecta e desconecta ao SGBD (Banco de dados)
		
		public static $instancia; //Atributo de controle da conexão
		//Como este atributo é static não precisamos instânciar a classe para executar queries

		public static function getInstancia(){//Método que executa as queries no Banco de dados
			//Parâmetros de configuração para a classe PDO
			$url = "mysql:host=localhost;port=3306;dbname=usuarios";
			$usuario = "root";
			$senha = "";
			$config = array(PDO::ATTR_PERSISTENT => true,PDO::ATTR_CASE => PDO::CASE_LOWER);
			if (!isset(self::$instancia)) {//Se a instância não foi configurada
				self::$instancia = new PDO($url, $usuario,$senha,$config); //configura a instância
				self::$instancia->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
			}
			return self::$instancia;//Retorna o status da conexão
		}
	}