import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { TittleComponent } from '../../../shared/tittle/tittle.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule,HeavyLoadersSlowComponent,TittleComponent],
  templateUrl: './defer-views.component.html',

})
export default class DeferViewsComponent {

}
