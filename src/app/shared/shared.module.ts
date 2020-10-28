import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ScoreComponent } from './component/score/score.component';
import { TitleComponent } from './component/title/title.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ToolbarComponent, 
    ScoreComponent, 
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent, 
    ScoreComponent,
    TitleComponent
  ]
})
export class SharedModule { }
