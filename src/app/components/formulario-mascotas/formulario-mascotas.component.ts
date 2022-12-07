import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestMascotasService } from 'src/app/services/macotas.service';

@Component({
  selector: 'app-formulario-mascotas',
  templateUrl: './formulario-mascotas.component.html',
  styleUrls: ['./formulario-mascotas.component.css'],
})
export class FormularioMascotasComponent implements OnInit {
  formulario: FormGroup;
  constructor(private mService: GestMascotasService) {
    //formulario para añadir mascotas
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      especie: new FormControl(),
      raza: new FormControl(),
      sexo: new FormControl(),
      nombrePropietario: new FormControl(),
    });
  }

  ngOnInit(): void {}
  async onSubmit() {
    await this.mService.addMascota(this.formulario.value);
  }
}
