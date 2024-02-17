import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { SimpleTemplateComponent } from './simple-template/simple-template.component';


@Component({
  selector: 'app-simple-template',
  templateUrl: './simple-template.component.html',
  styleUrls: ['./simple-template.component.css'],
  standalone: true,
 imports: [DynamicComponent] // Uncomment if using Angular 14+ with standalone components
})
export class SimpleTemplateComponent {
  showDynamicComponent = false;

  toggleDynamicComponent(): void {
    this.showDynamicComponent = !this.showDynamicComponent;
  }
}
