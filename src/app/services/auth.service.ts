import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { ResponseModel } from '../models/responseModel';
import { Token } from '@angular/compiler';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl='https://localhost:44314/api/auth/';

  constructor(private httpClient:HttpClient) { }


  login(loginModel:LoginModel){
    let newPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }
    else{
      return false
    }
  }

}
