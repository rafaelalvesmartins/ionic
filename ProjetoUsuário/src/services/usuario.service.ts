import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

// import { Observable } from "rxjs/Observable";
import { API_CONFIG } from "../config/api.config";
import { UsuarioDTO } from "../models/usuario.dto";

@Injectable()
export class UsuarioService{
  
   
    constructor(public http: HttpClient){

    } 
    
    login(usuario: UsuarioDTO):Observable<any>{
        var url = `${API_CONFIG.baseUrl}/usuarios/src/controll/processa.usuario.php`;
         return this.http.post<any>(url,usuario);
    }
}