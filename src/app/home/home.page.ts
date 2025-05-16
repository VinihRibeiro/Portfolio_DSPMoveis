import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage{
  name = '';
  email = '';
  password = '';

  constructor(
    private storageService: StorageService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  async cadastrar() {
    if (!this.name || !this.email || !this.password) {
      const toast = await this.toastCtrl.create({
        message: 'Preencha todos os campos!',
        duration: 2000,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    await this.storageService.saveUser({
      name: this.name,
      email: this.email,
      password: this.password,
    });

    const toast = await this.toastCtrl.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 2000,
      color: 'success'
    });
    await toast.present();

    this.navCtrl.navigateBack('/login');
  }
}
