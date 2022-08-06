import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from 'src/app/shared/models/Cast';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  getCastDetails(id: number): Observable<Cast> {
    return this.http.get<Cast>("https://movieshopapi.azurewebsites.net/api/Cast/" + id);
  }
}
