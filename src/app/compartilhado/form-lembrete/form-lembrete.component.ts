import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lembrete} from '../../interfaces/lembrete';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent implements OnInit {

  @Input() lembrete: Lembrete = {} as Lembrete;
  @Output() saidaLembrete: EventEmitter<Lembrete> = new EventEmitter<Lembrete>();
  constructor() { }

  onSubmit() {
    this.saidaLembrete.emit(this.lembrete);
  }
  ngOnInit() {
  }

}
