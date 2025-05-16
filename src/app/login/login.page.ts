import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage{
  email = '';
  password = '';

  constructor(  private storageService: StorageService,
    private alertController: AlertController) { }

  async login() {
    const isValid = await this.storageService.validateLogin(this.email, this.password);
    const alert = await this.alertController.create({
      header: isValid ? 'Sucesso' : 'Erro',
      message: isValid ? 'Login realizado com sucesso!' : 'Email ou senha inválidos.',
      buttons: ['OK']
    });
    await alert.present();
  }
}


