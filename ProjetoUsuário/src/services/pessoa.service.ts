import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

// import { Observable } from "rxjs/Observable";
import { API_CONFIG } from "../config/api.config";
import { PessoaDTO } from "../models/pessoa.dto";
import { UsuarioDTO } from "../models/usuario.dto";

@Injectable()
export class PessoaService{
  
   
    constructor(public http: HttpClient){

    } 
    
    getPessoaInfo(usuario: UsuarioDTO):Observable<PessoaDTO[]>{
        var url = `${API_CONFIG.baseUrl}/usuarios/src/controll/processa.pessoa.php?id=${usuario.idPessoa}`;
         return this.http.get<PessoaDTO[]>(url);
    }
}