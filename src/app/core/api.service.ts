import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { VehicleListing } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly carsUrl = '/data/cars.json';

  constructor(private readonly http: HttpClient) {}

  getCars(): Observable<VehicleListing[]> {
    return this.http.get<VehicleListing[]>(this.carsUrl);
  }
}
