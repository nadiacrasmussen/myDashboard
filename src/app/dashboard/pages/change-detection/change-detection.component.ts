import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleComponent } from '../../../shared/tittle/tittle.component';

@Component({

  standalone: true,
  imports: [CommonModule,TittleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <app-title [title]="currentFramework()"/>
<pre>{{frameworkasSignal() | json }}</pre>
<pre>{{frameworkasProperty | json }}</pre>


  `

})
export default class ChangeDetectionComponent {

public currentFramework = computed(

  () => `Change detection - ${this.frameworkasSignal().name}`

  )

public frameworkasSignal = signal({
  name:'Angular',
  releaseDate:2016,
})
public frameworkasProperty= {
  name:'Angular',
  releaseDate:2016,
};
contructor(){
  setTimeout(()=>{

   // this.frameworkasProperty.name= 'React';
    this.frameworkasSignal.update(value=>({
      ...value,
      name: 'React'
    }))

    console.log('Hecho')
  },3000);
}
}
