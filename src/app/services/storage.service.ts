// storage.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async saveUser(user: { name: string; email: string; password: string }) {
    await this._storage?.set(user.email, user);
  }

  async getUser(email: string) {
    return await this._storage?.get(email);
  }
  async validateLogin(email: string, password: string): Promise<boolean> {
    const user = await this._storage?.get(email);
    if (!user) return false;
    return user.password === password;
}
}