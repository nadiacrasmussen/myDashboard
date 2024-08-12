import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './options-bottom-sheet.component.html',
changeDetection:ChangeDetectionStrategy.OnPush
})
export class OptionsBottomSheetComponent {
opneLink(event:MouseEvent){
  console.log('opneLink')
}
}
