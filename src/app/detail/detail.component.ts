import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from '../services/experience/experience.service';
import { Iexperience } from '../shared/models/Iexperience.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  experience : Iexperience;
  title: string;
  cargar: boolean = false;

  constructor(private route: ActivatedRoute,
              private experienceService: ExperienceService ) { 
                
              }

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(){
    this.route.params.subscribe(params => {
      const id = params.id;
      this.experienceService.getExperiencebyId(id).subscribe( res =>{
        this.experience = res.experience;
        this.title =  this.experience.title;
        this.cargar = true;
      });
    });
  }

}
