import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message!: string;
  username!: string;
  password!: string; 

  constructor(
    private toastController: ToastController,
    private router: Router,
    private loginService: LoginService

  ) { 
    this.message = 'Bienvenido'
  }

  ngOnInit() {
  }
  
  ressPass(){
    this.router.navigate(['/respass']);
  }

  validateLogin(){
    console.log("ejecutando validacion")
    const login = this.loginService.findByUsername(this.username);

    if(login === undefined){
      this.generateMessage('Usuario no existe', 'danger');
      return;
    }
    if (
      this.username === login.username &&
      this.password === login.password
    ) {
      this.generateMessage('Login correcto', 'success');
      this.loginService.registerLoggedUser(login);
      let extras: NavigationExtras = {
        state: { user: this.username }
      }
      this.router.navigate(['/home'], extras);
    } else {
      this.generateMessage('Login fallido', 'danger');
    }
  }
    async generateMessage(message: string, color: string){
      const toast = await this.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom',
        color: color
      });
      await toast.present();
    }
  }

