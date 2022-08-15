import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseDetails } from 'src/app/shared/models/PurchaseDetails';
import { PurchaseRequest } from 'src/app/shared/models/PurchaseRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //purchaseSuccess:boolean;
  constructor(private http: HttpClient) { }
  p:PurchaseRequest = {
      movieId:0,
      userId:0
  };
  PurchaseMovie(movieId: number, userId: number): Observable<PurchaseDetails> {
    console.log("Purchase Info: MovieID: " + movieId + " UserID: " + userId);
    this.p.movieId = movieId;
    this.p.userId = userId;
    return this.http.post<PurchaseDetails>("https://localhost:7140/api/User/purchase-movie?movieId=" + movieId + "&userId=" + userId,this.p);
  }




}
