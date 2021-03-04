<?php
	require("conexao.php");//Importa a classe Conexao que utiliza o objeto PDO
	
	//Model ou Domain são a mesma camada, apenas nomes diferentes
	//Normalmente a classe DAO também faz parte da camada Model no padrão MVC

	class Usuario{//Classe modelo

		//Atributos
		var $idPessoa;
		var $login;
		var $senha;
		var $tipo;
		
		//Métodos GETs && SETs
		function getIdPessoa(){
			return $this->idPessoa;
		}
		function setIdPessoa($idPessoa){
			$this->idPessoa = $idPessoa;
		}
		function getLogin(){
			return $this->login;
		}
		function setLogin($login){
			$this->login = $login;
		}
		function getSenha(){
			return $this->senha;
		}
		function setSenha($senha){
			$this->senha = $senha;
		}
		function getTipo(){
			return $this->tipo;
		}
		function setTipo($tipo){
			$this->tipo = $tipo;
		}
	}
	
	class UsuarioDAO{//Classe DAO (Data Access Object) com os métodos CRUD

		function create($usuario){
			$resultado = array(); //Variável que servirá para retorno do sucesso ou fracasso do método
			$id = $usuario->getIdPessoa();
			$login = $usuario->getLogin();
			$senha = $usuario->getSenha();
			$tipo = $usuario->getTipo();
            $query = "INSERT INTO usuarios VALUES ($id,'$login',md5('$senha'),'$tipo')";
            try{//Tenta conectar ao BD e executar a query
                $con = new Conexao();//Inicia a conexão
                if(Conexao::getInstancia()->exec($query) >= 1){//O método exec de PDO retorna 0 = fracasso, 1 = sucesso, 2 = sucesso parcial
                    $resultado = $usuario;
                }else{
					$resultado["erro"] = "Erro criar usuário";
				}
                $con = null;//Fecha a conexão
            } catch (PDOException $e) {//Caso tenha problemas com a conexão retorna o erro abaixo
                $resultado["erro"] = "Erro ao conectar ao BD";
            }
            return $resultado;
		}
		function readAll(){//Lista toda a tabela usuários
			$usuarios = [];
			$query = "SELECT * FROM usuarios";
			try{
				$con = new Conexao();
				$resultSet = Conexao::getInstancia()->query($query);//O método query de PDO retorna uma tabela como resultSet
				while($linha = $resultSet->fetchObject()){
					$usuario = new Usuario();
					$usuario->setIdPessoa($linha->id_pessoa);
					$usuario->setLogin($linha->login);
					$usuario->setSenha($linha->senha);
					$usuario->setTipo($linha->tipo);
					$usuarios[] = $usuario;
				}
				$con = null;
			}catch(PDOException $e){
				$usuarios["erro"] = "Erro de conexão com BD";
			}
			return $usuarios;
		}
		function read($id){//Lista toda a tabela usuários
			$usuarios = [];
			$query = "SELECT * FROM usuarios WHERE id_pessoa = $id";
			try{
				$con = new Conexao();
				$resultSet = Conexao::getInstancia()->query($query);//O método query de PDO retorna uma tabela como resultSet
				while($linha = $resultSet->fetchObject()){
					$usuario = new Usuario();
					$usuario->setIdPessoa($linha->id_pessoa);
					$usuario->setLogin($linha->login);
					$usuario->setSenha($linha->senha);
					$usuario->setTipo($linha->tipo);
					$usuarios[] = $usuario;
				}
				$con = null;
			}catch(PDOException $e){
				$usuarios["erro"] = "Erro de conexão com BD";
			}
			return $usuarios;
		}
		function readLogin($login){//Lista toda a tabela usuários
			$usuarios = [];
			$query = "SELECT * FROM usuarios WHERE login like '$login%'";
			try{
				$con = new Conexao();
				$resultSet = Conexao::getInstancia()->query($query);//O método query de PDO retorna uma tabela como resultSet
				while($linha = $resultSet->fetchObject()){
					$usuario = new Usuario();
					$usuario->setIdPessoa($linha->id_pessoa);
					$usuario->setLogin($linha->login);
					$usuario->setSenha($linha->senha);
					$usuario->setTipo($linha->tipo);
					$usuarios[] = $usuario;
				}
				$con = null;
			}catch(PDOException $e){
				$usuarios["erro"] = "Erro de conexão com BD";
			}
			return $usuarios;
		}
		function update($usuario){//Atualiza os dados no Banco de dados na tabela de usuários
			$resultado = [];
			$login = $usuario->getLogin();//Configura os parâmetros para montar a query
			$senha = $usuario->getSenha();//Configura os parâmetros para montar a query
			$tipo = $usuario->getTipo();//Configura os parâmetros para montar a query
			$query = "UPDATE usuarios SET senha = md5('$senha'), tipo = '$tipo' WHERE login = '$login'";
			try{
                $con = new Conexao();
				$status = Conexao::getInstancia()->prepare($query);//O método prepare retorna um status se a query estiver correta
				if($status->execute()){//O método execute retorna um boolean true para sucesso e false para fracasso
					$resultado[] = $usuario;
				}
				$con = null;
			}catch(PDOException $e){
				$resultado["erro"] = "Erro de conexão com o BD";	
			}
			return $resultado;
		}
		function del($login){//Método que exclui dados
			$resultado = [];
			$query = "DELETE FROM usuarios WHERE login='$login'";
			try{
				$con = new Conexao();
				if(Conexao::getInstancia()->exec($query)>=1){
					$resultado["msg"] = "Usuário removido com sucesso";
				}
				$con = null;
			}catch(PDOException $e){
				$resultado["erro"] = "Erro de conexão com o BD";	
			}
			return $resultado;
		}
		function login($login,$senha){
			$usuario = null;
			$query = "SELECT * FROM usuarios WHERE login = '$login'";
			try{
				$con = new Conexao();
				$resultSet = Conexao::getInstancia()->query($query);
				if($resultSet->fetchObject()){	
					$query = "SELECT * FROM usuarios WHERE login = '$login' AND senha = md5('$senha')";
					$resultSet = Conexao::getInstancia()->query($query);
					if($dados = $resultSet->fetchObject()){
						$usuario = new Usuario();
						$usuario->setIdPessoa($dados->id_pessoa);
						$usuario->setLogin($dados->login);
						$usuario->setSenha($dados->senha);
						$usuario->setTipo($dados->tipo);
					} else {
						$usuario["erro"] = "A senha informada não confere";
					}
				}else{
					$usuario["erro"] = "Login não encontrado";	
				}
				$con = null;
			}catch(PDOException $e){
				$usuario["erro"] = "Erro de conexão com o BD";	
			}
			return $usuario;
		}
	}