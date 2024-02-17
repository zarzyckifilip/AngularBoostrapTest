// src/app/simple-template/simple-template.component.ts
import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-simple-template',
  templateUrl: './simple-template.component.html',
  styleUrls: ['./simple-template.component.css'],
  imports: [DynamicComponent], // Import DynamicComponent here
  standalone: true
})
export class SimpleTemplateComponent {
  showDynamicComponent = false;

  toggleDynamicComponent(): void {
    this.showDynamicComponent = !this.showDynamicComponent;
  }
}
