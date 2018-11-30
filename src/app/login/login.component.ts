import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public utente: any;

  public credenziali = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  constructor(@Inject(DOCUMENT) private document, private utenteService: UserService) {
  }

  ngOnInit() {
    this.document.getElementById('style').setAttribute('href', 'assets/css/style_2.css');
    this.document.getElementById('responsive').setAttribute('href', 'assets/css/responsive_2.css');
  }

  onRegisterSubmit(formData) {

    this.credenziali.name = formData.value.email;
    this.credenziali.email = formData.value.email;
    this.credenziali.password = formData.value.password;
    this.credenziali.password_confirmation = formData.value.password_confirmation;

    console.log(this.credenziali);
    /*
    this.utenteService.register(this.credenziali)
      .subscribe(
        (response) => {
          this.utente = JSON.parse(response['_body']);
          this.utenteService.token = this.utente.api_token;
          this.utenteService.utente = this.utente;
          this.router.navigate(['home']);
        },
        (error) => console.log(error)
      );
      */
  }
}
