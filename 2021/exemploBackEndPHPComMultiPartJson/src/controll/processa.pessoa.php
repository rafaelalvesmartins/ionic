<?php
    require("../domain/pessoa.php"); //Funciona como import do JAVA requer o arquivo de modelo "pessoa.php"
	header("Content-type: application/json"); //Configura a resposta no formato universal JSON
	$pd = new PessoaDAO(); //Objeto da classe PessoaDAO para acesso ao Banco de Dados
	
	include("putdel.php"); //Inclui as variáveis de ambiente $_PUT e $_DELETE
	
	//Tratar as requisições HTTP REST (GET,POST,PUT,DELETE)
	if(!empty($_GET)){ //Se o verbo GET não estiver vazio
		//O id é auto_increment no banco de dados e inicia em 1
		if(isset($_GET["id"])){
			if($_GET["id"]=="0"){//Filtro, o id for igual a 0 vamos listar todas as pessoas
				echo json_encode($pd->readAll());
			} else { //Senão vamos listar somente a pessoa com o id informado
				echo json_encode($pd->read($_GET["id"]));
			}
		}
	}
	
	if(!empty($_POST)){ //Se o verbo POST não estiver vazio
		$pessoa = new Pessoa();//Cria um novo objeto Pessoa (modelo)
		$pessoa->setNome($_POST["nome"]);//Preenche o modelo
		$pessoa->setTelefone($_POST["telefone"]);//Preenche o modelo
		$sucesso = $pd->create($pessoa);
		if(!isset($sucesso["erro"])){
			http_response_code(201);
		}else{
			http_response_code(202);
		}
		echo json_encode($sucesso);
	}
	
	if(!empty($_PUT)){ //Se o verbo PUT não estiver vazio
		$pessoa = new Pessoa(); //Cria um novo objeto Pessoa (modelo)
		$pessoa->setIdPessoa($_PUT["id"]);//Preenche o modelo
		$pessoa->setNome($_PUT["nome"]);//Preenche o modelo
		$pessoa->setTelefone($_PUT["telefone"]);//Preenche o modelo
		echo json_encode($pd->update($pessoa));//Executa o método update de DAO passando o modelo como parâmetro
	}
	
	if(!empty($_DELETE)){ //Se o verbo DELETE não estiver vazio
		$id = $_DELETE["id"];//Recebe o id
		$sucesso = $pd->del($id);
		if(isset($sucesso["erro"])){
			http_response_code(405);
		}
		echo json_encode($sucesso);
	}
	
?>
	

