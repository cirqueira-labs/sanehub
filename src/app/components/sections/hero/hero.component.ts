import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, trigger, transition } from '@angular/animations';
import { IconComponent } from '../../../shared/icon/icon.component';
import { IconName } from '../../../shared/icon/icon.types';

interface Stat {
  label: string;
  value: string;
  icon: Extract<IconName, 'database' | 'file-spreadsheet' | 'check-circle-2'>;
  color: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInUpDelay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInUpDelay2', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInUpDelay3', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms 300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInUpDelay4', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('700ms 500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HeroComponent {
  stats: Stat[] = [
    { label: 'CNPJs Saneados', value: '142.893', icon: 'database', color: 'text-primary' },
    { label: 'Lotes Processados', value: '847', icon: 'file-spreadsheet', color: 'text-secondary' },
    { label: 'Taxa de Sucesso', value: '99.9%', icon: 'check-circle-2', color: 'text-green' },
  ];
}
