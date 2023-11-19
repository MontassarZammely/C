import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
role =  role.organisateur

}

export enum role{
  admin = 'admin',
  user = 'user',
  organisateur = 'organisateur'
}
