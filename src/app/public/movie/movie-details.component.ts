import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieDetials } from 'src/app/shared/models/MovieDetails';
import { ActivatedRoute } from '@angular/router';
import { formatCurrency, formatDate } from '@angular/common';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/models/User';
import { AccountService } from 'src/app/core/services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails!: MovieDetials;
  movieId!: number;

  isLoggedIn: boolean = false;
  currentUser: User;

  constructor(private movieService: MoviesService, private route: ActivatedRoute, private accountService: AccountService, private modalService: NgbModal, private userService:UserService) { }

  ngOnInit(): void {
    this.GetMovieDetails();
    this.accountService.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    });
    this.accountService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  GetMovieDetails() {
    this.route.params.subscribe(param => {
      this.movieId = param["movieId"];
      this.GetMovieDetailsByID();
      console.log(this.movieDetails);
    });
  }

  GetMovieDetailsByID() {
    this.movieService.getMovieDetails(this.movieId).subscribe(m => {
      this.movieDetails = m;
    });
  }

  GetDay(d: Date) {
    return formatDate(d, "M/d/yyyy", "en-US")
  }

  GetYear(d: Date) {
    return formatDate(d, "Y", "en-US")
  }

  GetMoney(m: number) {
    return formatCurrency(m, "en-US", "$")
  }

  open(BuyModal: any) {
    this.modalService.open(BuyModal, { ariaLabelledBy: 'modal-basic-title' }).result
  }

  PurchaseMovie() {
    console.log("Purchase Info: MovieID: " + this.movieId + " UserID: " + this.currentUser.nameid);

    this.userService.PurchaseMovie(this.movieId,this.currentUser.nameid).subscribe(data =>{
      console.log(data);
    });
    
  }

  faShareFromSquare = faShareFromSquare;
}
