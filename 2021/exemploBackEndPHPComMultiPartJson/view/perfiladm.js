tableUsuario = document.querySelector("#bodyUsuarios");
tablePessoa = document.querySelector("#bodyPessoas");
urlPessoa = "http://localhost/usuarios/src/controll/processa.pessoa.php?id=0";
urlUsuario = "http://localhost/usuarios/src/controll/processa.usuario.php?id=0";

function carregaPessoas() {
    fetch(urlPessoa)
        .then(function (resp) {
            //Obtem a resposta da URL no formato JSON
            if (!resp.ok)
                throw new Error("Erro ao executar requisição: " + resp.status);
            return resp.json();
        })
        .then(function (data) {
            //Se obteve a resposta explora os dados recebidos
            data.forEach((val) => {
                let row = document.createElement("tr");
                row.innerHTML = `<tr><td>${val.idPessoa}</td>`;
                row.innerHTML += `<td>${val.nome}</td>`;
                row.innerHTML += `<td>${val.telefone}</td>`;
                row.innerHTML += `<td style="padding:3px"><button onclick='editPessoa(this)'>Edit</button><button onclick='delPessoa(this)'>Del</button></td></tr>`;
                tablePessoa.appendChild(row);
            });
        }) //Se obteve erro no processo exibe no console do navegador
        .catch(function (error) {
            console.error(error.message);
        });
}

function carregaUsuarios() {
    fetch(urlUsuario)
        .then(function (resp) {
            //Obtem a resposta da URL no formato JSON
            if (!resp.ok)
                throw new Error("Erro ao executar requisição: " + resp.status);
            return resp.json();
        })
        .then(function (data) {
            //Se obteve a resposta explora os dados recebidos
            data.forEach((val) => {
                let row = document.createElement("tr");
                row.innerHTML = `<tr><td>${val.idPessoa}</td>`;
                row.innerHTML += `<td>${val.login}</td>`;
                row.innerHTML += `<td>${val.tipo}</td>`;
                row.innerHTML += `<td style="padding:3px"><button onclick='editUsuario(this)'>Edit</button><button onclick='delUsuario(this)'>Del</button></td></tr>`;
                tableUsuario.appendChild(row);
            });
        }) //Se obteve erro no processo exibe no console do navegador
        .catch(function (error) {
            console.error(error.message);
        });
}