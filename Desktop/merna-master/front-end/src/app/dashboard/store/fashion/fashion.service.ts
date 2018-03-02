import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class FashionService {

    constructor(private httpClient: HttpClient) { }

    createProduct(name:string, price:number, seller:string) {
        return this.httpClient.post(environment.apiUrl + 'Merna/createProduct', {'name':name, 'price':price, 'seller':seller});
    }

    getProducts(){
        return this.httpClient.get(environment.apiUrl + 'Merna/getProducts');
    }

    updateProduct(id:object, name:string, price:number, seller:string) {
      return this.httpClient.patch(environment.apiUrl + 'Merna/updateProduct/'+id,{'name':name, 'price':price, 'seller':seller});
    }

    deleteProduct(id:object){
      return this.httpClient.delete(environment.apiUrl+ 'Merna/deleteProduct/'+id);
    }
}

@Injectable()
export class ToysService {

}
