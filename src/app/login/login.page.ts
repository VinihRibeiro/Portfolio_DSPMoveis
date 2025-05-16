import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(
    private storageService: StorageService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  async login() {
    if (!this.email || !this.password) {
      const toast = await this.toastCtrl.create({
        message: 'Preencha todos os campos!',
        duration: 2000,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    const user = await this.storageService.getUser(this.email);

    if (user && user.password === this.password) {
      // Login válido, redireciona para controle de serviço
      this.navCtrl.navigateRoot('/tela-controle-servico');
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Email ou senha invalidos!',
        duration: 3000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
