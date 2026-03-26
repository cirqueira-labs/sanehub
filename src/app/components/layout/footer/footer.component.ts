import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/icon/icon.component';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  columns: FooterColumn[] = [
    {
      title: 'Produto',
      links: [
        { label: 'Funcionalidades', href: '#funcionalidades' },
        { label: 'Planos e Preços', href: '#planos' },
        { label: 'Integração TOTVS', href: '#integracao' },
        { label: 'API Documentation', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Carreiras', href: '#' },
        { label: 'Contato', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', href: '#' },
        { label: 'Termos de Uso', href: '#' },
        { label: 'LGPD', href: '#' },
      ],
    },
  ];
}
