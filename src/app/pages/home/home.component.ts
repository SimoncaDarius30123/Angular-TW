import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MarketplaceService } from '../../core/marketplace.service';
import { VehicleCategory, VehicleListing } from '../../models/car';
import { HighlightDirective } from '../../shared/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RouterLink, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly marketplaceService = inject(MarketplaceService);

  readonly categories = this.marketplaceService.getCategories();
  readonly featuredCars = this.marketplaceService.getFeaturedCars();
  readonly stats = this.marketplaceService.getStats();
  readonly appName = 'AutoDrive';

  selectedCategory = this.categories[0];
  private readonly savedCarIds = new Set<number>([101]);

  get savedPercent(): number {
    return Math.round((this.savedCarIds.size / this.featuredCars.length) * 100);
  }

  selectCategory(category: VehicleCategory): void {
    this.selectedCategory = category;
  }

  toggleSaved(car: VehicleListing): void {
    if (this.savedCarIds.has(car.id)) {
      this.savedCarIds.delete(car.id);
      return;
    }

    this.savedCarIds.add(car.id);
  }

  isSaved(carId: number): boolean {
    return this.savedCarIds.has(carId);
  }
}
