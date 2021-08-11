import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from './compatilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'CRUD de lembretes com o Angular';
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  ngOnInit(){
    this.errorMsgComponent.setError('Mensagem de erro!');
  }
  
}
