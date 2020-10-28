import { Component, OnInit, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges, AfterViewChecked {

  isToken: boolean = false;

  constructor(private router: Router,
              private userServices: UsersService){
                if(this.userServices.obtenerToken() !== null){
                  this.isToken = true;
                }
              }
  ngAfterViewChecked(): void {
    if(this.userServices.obtenerToken() !== null){
      this.isToken = true;
    }
  }

  ngOnChanges(): void {}

  ngOnInit(): void {}

  buscarExperiece(text: string ){
    if(text === ''){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/search',text]);
    }
  }

  logout(){
    this.userServices.clearToken();
    this.router.navigate(['/singin']);
  }

}
