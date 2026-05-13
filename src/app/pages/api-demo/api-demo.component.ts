import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../core/api.service';
import { VehicleListing } from '../../models/car';

@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [CurrencyPipe, NgFor, NgIf],
  templateUrl: './api-demo.component.html',
  styleUrl: './api-demo.component.css'
})
export class ApiDemoComponent implements OnInit {
  cars: VehicleListing[] = [];
  loading = false;
  errorMessage = '';

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
        this.loading = false;
      },
      error: () => {
        this.cars = [];
        this.errorMessage = 'Stocul nu poate fi incarcat momentan. Incearca din nou peste cateva secunde.';
        this.loading = false;
      }
    });
  }
}
