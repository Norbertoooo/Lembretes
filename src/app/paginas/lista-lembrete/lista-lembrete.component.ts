import { Component, OnInit, ViewChild } from '@angular/core';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  public lembretes: Lembrete[];

  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes();
  }

  getListaLembretes() {
    this.lembreteService.listarLembretes()
      .subscribe((lembretes: Lembrete[]) => {
      this.lembretes = lembretes;
    }, () => {this.errorMsgComponent.setError('falha ai buscar lista de lembretes'); });
  }
  deletaLembrete( id: number) {
    this.lembreteService.deletarLembrete(id)
      .subscribe(() => {
        alert('Lembrete deletado com sucesso');
        this.getListaLembretes();
      }, () => {this.errorMsgComponent.setError('falha ao deletar de lembrete: {}' + id); });
  }
  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }
}
