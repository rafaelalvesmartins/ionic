import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";
import { ProdutoDTO } from "../../models/produto.dto";


@Injectable()
export class ProdutoService{
    constructor(public http: HttpClient){

    }

    findBycategoria(categoria_id:string){
        return  this.http.get(`${API_CONFIG.baseUrl}/produtos?categorias=${categoria_id}`);
    }


    findById(produto_id:string){
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produto_id}`);
    }


}