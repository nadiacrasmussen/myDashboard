import { Component, inject } from '@angular/core';
import { TittleComponent } from "../../../shared/tittle/tittle.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,TittleComponent, RouterModule],
  templateUrl: './users.component.html',

})
export default class UsersComponent {
public UsersService = inject(UsersService)
}
