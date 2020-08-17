import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit() {
    
  }
  logIn(form) {
    let data = form.value;
    this.authService.logIn(data.email, data.password).then(result => console.log('Result is >>' + result)).then(()=>     this.router.navigate([''])
    )
    .catch(error => console.log('erors is >>' + error))
  }
      
    
    
  

}
