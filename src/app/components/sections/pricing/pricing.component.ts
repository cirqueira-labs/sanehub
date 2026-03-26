import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/icon/icon.component';
import { InViewDirective } from '../../../shared/in-view/in-view.directive';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, IconComponent, InViewDirective],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  pricingItems: string[] = [
    'Consultas unitárias ilimitadas',
    'Saneamento em lote (até 100k/mês)',
    'Acesso completo à API Restful',
    'Plugin TOTVS Protheus (PO-UI)',
    'Suporte técnico prioritário',
    'SLA de 99.9% garantido',
  ];
}
