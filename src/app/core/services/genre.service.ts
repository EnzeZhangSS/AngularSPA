import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from 'src/app/shared/models/Genre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }

  getAllGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>("https://movieshopapi.azurewebsites.net/api/Genres");
  }



}
