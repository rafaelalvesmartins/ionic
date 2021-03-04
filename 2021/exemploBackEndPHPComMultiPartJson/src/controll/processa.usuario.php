<?php
    require("../domain/usuario.php"); //Funciona como import do JAVA requer o arquivo de modelo "pessoa.php"
	include("putdel.php"); //Inclui as variáveis de ambiente $_PUT e $_DELETE
	$ud = new UsuarioDAO(); //Objeto da classe PessoaDAO para acesso ao Banco de Dados
	// Criacão de arquivo para debugar o código
	$myFile = "saida.txt";
    $fh = fopen($myFile, 'a');
	// Tratamento das solicitações para o Insomonia
	$method = $_SERVER['REQUEST_METHOD'];
	
 
	 switch($method) {
        case 'GET' :
            break;
        case 'POST' :
			$postdata = file_get_contents("php://input");
			$request = json_decode($postdata);
			//fwrite($fh,json_encode($postdata));
			$login = $request->login;
			$senha = $request->senha;
			$status = $ud->login($login,$senha);
			echo json_encode($status);
			//fwrite($fh,json_encode($status));
			
            break;
        case 'PUT' :
            break;
        case 'DELETE' :
            break;
        default:
            var_dump(http_response_code(405));
            break;
    }
  
	
	//Tratar as requisições HTTP REST (GET,POST,PUT,DELETE)
	if(!empty($_GET)){ //Se o verbo GET não estiver vazio
		//O id é auto_increment no banco de dados e inicia em 1
		if($_GET["id"]=="0"){//Filtro, o id for igual a 0 vamos listar todas as pessoas
			if(empty($_GET["login"])){
				echo json_encode($ud->readAll());
			} else {
				echo json_encode($ud->readLogin($_GET["login"]));
			}			
		} else { //Senão vamos listar somente a pessoa com o id informado
			echo json_encode($ud->read($_GET["id"]));
		}
	}
	
	if(!empty($_POST)){ //Se o verbo POST não estiver vazio
		if(!empty($_POST["id"])){
			$usuario = new Usuario();//Cria um novo objeto Pessoa (modelo)
			$usuario->setIdPessoa($_POST["id"]);//Preenche o modelo
			$usuario->setLogin($_POST["login"]);//Preenche o modelo
			$usuario->setSenha($_POST["senha"]);//Preenche o modelo
			$usuario->setTipo($_POST["tipo"]);//Preenche o modelo
			$status = $ud->create($usuario);
			if(is_object($status)){
				http_response_code(201);
			}
			echo json_encode($status);
		}
		if(!empty($_POST["login"])&&!empty($_POST["senha"])&&empty($_POST["id"])){
			$login = $_POST["login"];
			$senha = $_POST["senha"];
			$status = $ud->login($login,$senha);
			if(is_object($status)){
				header("location:$urlFront?id=".$status->getIdPessoa());	
			} else {
				header("location:$urlFront?erro=".$status["erro"]);
			}
		}
	}
	
	if(!empty($_PUT)){ //Se o verbo PUT não estiver vazio
		$usuario = new Usuario();//Cria um novo objeto Pessoa (modelo)
		$usuario->setLogin($_PUT["login"]);//Preenche o modelo
		$usuario->setSenha($_PUT["senha"]);//Preenche o modelo
		$usuario->setTipo($_PUT["tipo"]);//Preenche o modelo
		echo json_encode($ud->update($usuario));//Executa o método update de DAO passando o modelo como parâmetro
	}
	
	if(!empty($_DELETE)){ //Se o verbo DELETE não estiver vazio
		$login = $_DELETE["login"];//Recebe o id
		echo json_encode($ud->del($login));//Executa o método del de DAO passando o login como parâmetro
	}
	
	fclose($fh);
?>