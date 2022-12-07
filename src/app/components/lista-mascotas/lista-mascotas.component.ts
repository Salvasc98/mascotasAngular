import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotasServiceService } from 'src/app/services/mascotas-service.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css'],
})
export class ListaMascotasComponent implements OnInit {
  constructor(private mService: MascotasServiceService) {}
  mascotas?: Mascota[];
  //Metodo para recoger las mascotas

  getMascotas() {
    this.mService.getMascota().subscribe((mascota) => {
      this.mascotas = mascota;
    });
  }

  async deleteMascota(mascota: Mascota) {
    await this.mService.deleteMascota(mascota);
  }
  ngOnInit(): void {
    this.getMascotas();
  }
}
