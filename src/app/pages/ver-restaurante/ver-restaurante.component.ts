import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-ver-restaurante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-restaurante.component.html',
  styleUrls: ['./ver-restaurante.component.css']
})
export class VerRestauranteComponent implements OnInit {
  restaurante: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    try {
      this.restaurante = await this.api.get(`/restaurant/${id}`);
    } catch (error) {
      console.error('Error al cargar restaurante:', error);
    }
  }
}
