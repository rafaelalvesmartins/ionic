import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { UsuarioDTO } from "../models/usuario.dto";

@Injectable()
export class StorageService{

    getUsuario() : UsuarioDTO {
        let str = localStorage.getItem(STORAGE_KEYS.user);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }
    
    setUsuario(obj : UsuarioDTO) {
        if (obj != null) {
            localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(obj));
            console.log(obj+STORAGE_KEYS.user);
        } 
        else {
            console.log('entrei aqui2');
            localStorage.removeItem(STORAGE_KEYS.user);
        }
    }
}

