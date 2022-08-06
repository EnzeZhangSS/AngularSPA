import { Trailer } from "./Trailer";
import { Genre } from "./Genre";
import { Cast } from "./Cast";

export interface MovieDetials {
    id:             number;
    title:          string;
    posterUrl:      string;
    backdropUrl:    string;
    rating?:        any;
    overview:       string;
    tagline:        string;
    budget:         number;
    revenue:        number;
    imdbUrl:        string;
    tmdbUrl:        string;
    releaseDate:    string;
    runTime:        number;
    price:          number;
    favoritesCount: number;
    casts:          Cast[];
    genres:         Genre[];
    reviews:        any[];
    trailers:       Trailer[];
}
