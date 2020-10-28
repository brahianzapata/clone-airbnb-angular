import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public experiencesId:string;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.experiencesId = params.id;
    });
  }

  ngOnInit(): void {
  }

}
