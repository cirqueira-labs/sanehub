import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICON_PATHS, IconShape } from './icon.registry';
import { IconName } from './icon.types';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size = 24;
  @Input() strokeWidth = 2;

  get shapes(): IconShape[] {
    return ICON_PATHS[this.name];
  }
}
