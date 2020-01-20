import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AirplaneService } from 'src/app/services/airplane.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.less']
})
export class AirplaneComponent implements OnInit {
  public DATEMASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public DATE_REGEX: RegExp = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  public QTDPASS = [/\d/, /\d/, /\d/];
  public registerForm: FormGroup;
  public listSocialNetUser = [];

  constructor(
    private _crudService: AirplaneService
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      idAirPlane: new FormControl(
        { value: '', disabled: false }, Validators.required
      ),
      model: new FormControl(
        { value: '', disabled: false }, Validators.required
      ),
      countPassangers: new FormControl(
        { value: '', disabled: false }, Validators.required
      ),
      dtCreated: new FormControl(
        { value: '', disabled: false }, [Validators.required, Validators.pattern(this.DATE_REGEX)]
      )
    });
    this._crudService.getAirplanes().subscribe(resp => {
      if (resp.return) {
        this.listSocialNetUser = resp.data;
      } else {
        console.log('nenhum avião encontrado');
      }
    },
      err => {
        console.log('Erro', 'Ocorreu um erro inesperado. Atualize a página e tente novamente');
      }
    );
  }

  onSubmit() {
    this.insertAirplane();
  }

  insertAirplane() {
    const airplane = {
      Code: this.registerForm.controls.idAirPlane.value,
      Model: this.registerForm.controls.model.value,
      Quantity: this.registerForm.controls.countPassangers.value,
      Created: this.registerForm.controls.dtCreated.value
    };
    this._crudService.InsertAirplane(airplane).subscribe(response => {
      if (response.return) {
        console.log('Sucesso', response.msg);
      } else {
        console.log('Atenção', response.msg);
      }
    },
      err => {
        console.log('Erro', 'Ocorreu um erro inesperado. Atualize a página e tente novamente');
      }
    );
  }

  revomeAirplane(codAirplane) {
    this._crudService.deleteAirplane(codAirplane).subscribe(response => {
      if (response.return) {
        console.log('Sucesso', response.msg);
      } else {
        console.log('Atenção', response.msg);
      }
    },
      err => {
        console.log('Erro', 'Ocorreu um erro inesperado. Atualize a página e tente novamente');
      }
    );
  }
}
