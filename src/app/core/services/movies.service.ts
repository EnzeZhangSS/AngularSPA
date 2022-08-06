import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared/models/Movie';
import { HttpClient } from '@angular/common/http'
import { MovieDetials } from 'src/app/shared/models/MovieDetails';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getTopGrossingMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>("https://movieshopapi.azurewebsites.net/api/Movies/top-grossing");
  }

  getMovieDetails(id: number):Observable<MovieDetials> {
    return this.http.get<MovieDetials>("https://movieshopapi.azurewebsites.net/api/Movies/" + id);
  }

  getMovieByGenre(genreId: number):Observable<Movie[]> {
    return this.http.get<Movie[]>("https://movieshopapi.azurewebsites.net/api/Movies/genre/" + genreId + "?pageSize=30&pageIndex=1" );
  }

}
