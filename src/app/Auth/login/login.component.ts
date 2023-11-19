import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email : string = "";
  password : string ="";


  constructor(public authService : AuthService) {    
  }

  login()
  {
      
      this.authService.login().subscribe(data=>{
        console.log(data)
      })

  }
}
