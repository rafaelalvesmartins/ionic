import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";


@Injectable()
export class ProdutoService{
    constructor(public http: HttpClient){

    }

    findBycategoria(categoria_id:string){
        return  this.http.get(`${API_CONFIG.baseUrl}/produtos?categorias=${categoria_id}`);
    }

    getSmallImageFromServer(id:string): Observable<any>{
        let url = `${API_CONFIG.serverBaseUrl}prod${id}-small.jpg`
        return this.http.get(url,{responseType: 'blob'});
    }

}