import { Trailer } from "./Trailer";
import { Genre } from "./Genre";
import { Cast } from "./Cast";

export interface MovieDetials {
    id:             number;
    title:          string;
    overview:       string;   
    tagline:        string;
    budget:         number;
    revenue:        number;
    imdbUrl:        string;
    tmdbUrl:        string;
    posterUrl:      string;
    backdropUrl:    string;
    originalLanguage: string;
    releaseDate:    Date;
    runTime:        number;
    price:          number;
    rating?:        any;
    casts:          Cast[];
    genres:         Genre[];
    reviews:        any[];
    trailers:       Trailer[];
}
