import {Component, OnInit, ViewChild} from '@angular/core';
import {LembreteService} from '../../services/lembrete.service';
import {Router} from '@angular/router';
import {ErrorMsgComponent} from '../../compartilhado/error-msg/error-msg.component';
import {Lembrete} from '../../interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {

  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor( private lembreteService: LembreteService, private router: Router ) { }

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.adicionarLembrete(lembrete).subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => { this.errorMsgComponent.setError('Falha ao adicionar lembrete'); }
      );
  }

}
