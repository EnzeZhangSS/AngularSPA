import { Component, OnInit } from '@angular/core';
import { CastService } from 'src/app/core/services/cast.service';
import { Cast } from 'src/app/shared/models/Cast';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  castDetails!: Cast;
  castId!: number;
  gender!: string;

  constructor(private castService: CastService) { }

  ngOnInit(): void {

  }
  GetCastDetailsByID() {
    this.castService.getCastDetails(this.castId).subscribe(c => {
      this.castDetails = c;
      console.log(this.castDetails);
      this.castDetails.gender = this.GetGenderByID();
    });
  }
  GetGenderByID(){
    if(this.castDetails.gender == "1"){
      return "Female"
    }
    else if(this.castDetails.gender == "2"){
      return "Male"
    }
    else{
      return "Non-Binary Gender"
    }
  }

}