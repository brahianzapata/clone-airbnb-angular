import { Component, Input, OnInit } from '@angular/core';
import { Iexperience } from 'src/app/shared/models/Iexperience.model';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.scss']
})
export class ExpCardComponent implements OnInit {

  @Input() experience: Iexperience;

  constructor() { }

  ngOnInit(): void {
  }

}
