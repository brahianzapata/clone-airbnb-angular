import { Component, Input, OnInit } from '@angular/core';
import { Iexperience } from '../../../shared/models/Iexperience.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() experience: Iexperience;

  constructor() { }

  ngOnInit(): void {
  }

}
