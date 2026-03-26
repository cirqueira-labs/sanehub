import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/icon/icon.component';
import { IconName } from '../../../shared/icon/icon.types';
import { InViewDirective } from '../../../shared/in-view/in-view.directive';

interface Feature {
  icon: Extract<IconName, 'search' | 'upload-cloud' | 'code' | 'building-2'>;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, IconComponent, InViewDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'search',
      title: 'Consultas Rápidas',
      description:
        'Busque dados completos de qualquer CNPJ em milissegundos. Ideal para verificações pontuais.',
    },
    {
      icon: 'upload-cloud',
      title: 'Saneamento em Lote',
      description:
        'Faça upload de planilhas (CSV/Excel) e higienize milhares de registros de uma só vez.',
    },
    {
      icon: 'code',
      title: 'API Restful Nativa',
      description:
        'Integre o Sanehub ao seu sistema proprietário com nossa API moderna, rápida e bem documentada.',
    },
    {
      icon: 'building-2',
      title: 'Dados Padronizados',
      description:
        'Garantimos a formatação correta de endereços, CNAEs, natureza jurídica e quadro societário.',
    },
  ];
}
