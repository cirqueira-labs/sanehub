import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/icon/icon.component';
import { IconName } from '../../../shared/icon/icon.types';
import { InViewDirective } from '../../../shared/in-view/in-view.directive';

interface IntegrationFeature {
  icon: Extract<IconName, 'server' | 'workflow' | 'shield-check'>;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-totvs-integration',
  standalone: true,
  imports: [CommonModule, IconComponent, InViewDirective],
  templateUrl: './totvs-integration.component.html',
  styleUrl: './totvs-integration.component.scss',
})
export class TotvsIntegrationComponent {
  features: IntegrationFeature[] = [
    {
      icon: 'server',
      title: 'Sincronização Bidirecional',
      desc: 'Atualize cadastros no Protheus automaticamente após o saneamento.',
    },
    {
      icon: 'workflow',
      title: 'Componentes PO-UI',
      desc: 'Interface familiar para seus usuários, reduzindo a curva de aprendizado.',
    },
    {
      icon: 'shield-check',
      title: 'Segurança e Compliance',
      desc: 'Tráfego de dados criptografado e aderência total à LGPD.',
    },
  ];
}
