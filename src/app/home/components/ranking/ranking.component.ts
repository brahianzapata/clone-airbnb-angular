import { Component, OnInit } from '@angular/core';
import { Iexperience } from 'src/app/shared/models/Iexperience.model';
import { ExperienceService } from '../../../services/experience/experience.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public experiences: Array<Iexperience>;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getExperiencesTop5().subscribe( res => {
      this.experiences = res.top5;
    });
  }

}
