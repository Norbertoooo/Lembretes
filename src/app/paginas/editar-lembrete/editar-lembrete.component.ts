import {Component, OnInit, ViewChild} from '@angular/core';
import {ErrorMsgComponent} from '../../compartilhado/error-msg/error-msg.component';
import {LembreteService} from '../../services/lembrete.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Lembrete} from '../../interfaces/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {
  lembrete: Lembrete;
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor( private lembreteService: LembreteService, private router: Router, private activateRoute: ActivatedRoute) {
    this.getLembrete(this.activateRoute.snapshot.params.id);
  }

  getLembrete(id: number) {
    this.lembreteService.listarLembretePorId(id)
      .subscribe( (lembrete: Lembrete) => {this.lembrete = lembrete; },
        () => this.errorMsgComponent.setError('Falha ao buscar lembrete {}', id));
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizarLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao atualizar lembrete.'); });
  }

}
