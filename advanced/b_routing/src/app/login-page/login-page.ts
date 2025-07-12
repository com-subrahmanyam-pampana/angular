import { Component,inject  } from '@angular/core';
import { UserService } from './login-service';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  ngOnInit(): void {
    this.load();
    console.log("ngOnInit:Called on component init.....")
  }



  private userService = inject(UserService);
  user: any = {};

  load() {
    const credentials = {
      username: 'trump',
      password: 'makeUSAGreatAgain'
    };

    this.userService.login(credentials).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }
}


