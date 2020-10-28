import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iexperience } from '../shared/models/Iexperience.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  textSearch = '';
  experiences = new Array<Iexperience>();


  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( param =>{
      this.textSearch = param['text'];
      console.log('ngOnInit', this.textSearch);
    });
  }

}
