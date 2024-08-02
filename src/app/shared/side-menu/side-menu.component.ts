import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
public menuItems = routes
.map((route)=>route.children ?? [])
.flat()
.filter((route)=> route && route.path)
.filter((route)=> !route.path?.includes(':'));
}
