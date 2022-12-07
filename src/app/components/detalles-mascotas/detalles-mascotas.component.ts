import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascotasInterface';
import { GestMascotasService } from 'src/app/services/macotas.service'
//import { MascotasServiceService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-detalles-mascotas',
  templateUrl: './detalles-mascotas.component.html',
  styleUrls: ['./detalles-mascotas.component.css'],
})
export class DetallesMascotasComponent implements OnInit {
  mascota?: Mascota;
  constructor(
    private route: ActivatedRoute,
    private mService: GestMascotasService
  ) {}

  getmascota() {
    this.mService.getMascota(this.route.snapshot.paramMap.get("id")!.toString())
  }

  ngOnInit(): void {this.getmascota()}
}
