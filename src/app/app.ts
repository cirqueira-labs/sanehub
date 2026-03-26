import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { FeaturesComponent } from './components/sections/features/features.component';
import { TotvsIntegrationComponent } from './components/sections/totvs-integration/totvs-integration.component';
import { PricingComponent } from './components/sections/pricing/pricing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    TotvsIntegrationComponent,
    PricingComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
