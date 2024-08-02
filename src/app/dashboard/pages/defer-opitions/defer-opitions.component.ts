import { Component } from '@angular/core';
import { TittleComponent } from "../../../shared/tittle/tittle.component";
import { HeavyLoadersSlowComponent } from "../../../shared/heavy-loaders/heavy-loaders-slow.component";
import { HeavyLoadersfastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-opitions',
  standalone: true,
  imports: [TittleComponent, HeavyLoadersSlowComponent,HeavyLoadersfastComponent],
  templateUrl: './defer-opitions.component.html',

})
export default class DeferOpitionsComponent {

}
