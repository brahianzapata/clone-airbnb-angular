import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { Iexperience } from 'src/app/shared/models/Iexperience.model';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss']
})
export class ExpListComponent implements OnInit, OnChanges {

  @Input() search: string = '';
  @Input() IsHome: boolean = true;
  pages: number = 1;
  showResult: boolean = false;

  public experiences: Array<Iexperience>;
  public experiences1;


  constructor(private experienceService: ExperienceService,
              private servicioexp: ExperienceService) { }

  ngOnInit(): void {
    console.log(this.search);
    if(this.search === ''){
      this.getAllExperiences();
      // this.getExperiences(this.pages);
    }
  }

  @HostListener('window: scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 900;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if(pos> max){
      this.pages = 1 + this.pages;
      // this.experiences.push(...this.experienceService.getExperiences(this.pages));
    }
  }

  
  ngOnChanges(): void{
    if(this.search === ''){
      this.getAllExperiences();
      // this.getExperiences(this.pages);
    }else{
      this.getExperiencesSearch();
    }
  }

  private getAllExperiences(): void{
    this.experienceService.getExperiencesAll().subscribe( res => {
      this.experiences = res.experiences;
      if(res.experiences.length > 0){
        this.showResult = true;
      }
    });
  }

  async getExperiencesSearch(){
    this.experiences1 =  await this.servicioexp.buscarExperience(this.search);
    this.experiences = this.experiences1 ;
    this.showResult = true;
  }


  private getExperiences(pages): void{
    this.experiences = this.experienceService.getExperiences(pages);
  }


}
