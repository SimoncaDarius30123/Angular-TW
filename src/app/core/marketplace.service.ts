import { Injectable } from '@angular/core';

import { MarketplaceStat, VehicleCategory, VehicleListing } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  private readonly categories: VehicleCategory[] = [
    {
      id: 'family',
      title: 'Masini de familie',
      description: 'Break-uri si SUV-uri cu spatiu bun, istoric verificat si costuri predictibile.',
      route: '/stoc',
      tags: ['SUV', 'break', 'siguranta'],
      count: 18
    },
    {
      id: 'city',
      title: 'Masini de oras',
      description: 'Modele compacte, usor de parcat, potrivite pentru naveta si consum mic.',
      route: '/stoc',
      tags: ['compact', 'benzina', 'hibrid'],
      count: 24
    },
    {
      id: 'premium',
      title: 'Premium rulate',
      description: 'Sedanuri si coupe-uri cu dotari bune, pregatite pentru test drive.',
      route: '/stoc',
      tags: ['automat', 'confort', 'leasing'],
      count: 11
    },
    {
      id: 'sell',
      title: 'Vinde prin AutoDrive',
      description: 'Trimiti datele masinii, primesti estimare si alegi daca o listam pentru tine.',
      route: '/vinde',
      tags: ['evaluare', 'consignatie', 'rapid'],
      count: 7
    }
  ];

  private readonly featuredCars: VehicleListing[] = [
    {
      id: 101,
      make: 'Volkswagen',
      model: 'Passat Variant',
      year: 2021,
      price: 21400,
      mileage: 76000,
      fuel: 'Diesel',
      transmission: 'Automata',
      city: 'Cluj-Napoca',
      status: 'Disponibila',
      highlight: 'Istoric service complet',
      imageUrl: '/cars/passat.svg'
    },
    {
      id: 102,
      make: 'Toyota',
      model: 'Corolla Hybrid',
      year: 2022,
      price: 19900,
      mileage: 42000,
      fuel: 'Hibrid',
      transmission: 'Automata',
      city: 'Bucuresti',
      status: 'Nou intrata',
      highlight: 'Consum mediu 4.7 l/100 km',
      imageUrl: '/cars/corolla.svg'
    },
    {
      id: 103,
      make: 'BMW',
      model: '320d xDrive',
      year: 2020,
      price: 27800,
      mileage: 88000,
      fuel: 'Diesel',
      transmission: 'Automata',
      city: 'Timisoara',
      status: 'Test drive',
      highlight: 'Pachet M interior',
      imageUrl: '/cars/bmw.svg'
    }
  ];

  private readonly stats: MarketplaceStat[] = [
    { label: 'Masini verificate', value: '53' },
    { label: 'Orase acoperite', value: '8' },
    { label: 'Finantare', value: '24h' },
    { label: 'Garantie inclusa', value: '12 luni' }
  ];

  getCategories(): VehicleCategory[] {
    return this.categories.map((category) => ({ ...category, tags: [...category.tags] }));
  }

  getFeaturedCars(): VehicleListing[] {
    return this.featuredCars.map((car) => ({ ...car }));
  }

  getStats(): MarketplaceStat[] {
    return this.stats.map((stat) => ({ ...stat }));
  }
}
