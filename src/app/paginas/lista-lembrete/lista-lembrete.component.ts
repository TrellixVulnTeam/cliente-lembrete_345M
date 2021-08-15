import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/compatilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  public lembretes: Lembrete[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
  }

  getListaLembretes(){
    this.lembreteService.getListaLembretes()
    .subscribe((lembretes: Lembrete[])=> {
      this.lembretes = lembretes;
    }, () => { this.errorMsgComponent.setError('Falha ao buscar lembretes.'); });
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }
}
