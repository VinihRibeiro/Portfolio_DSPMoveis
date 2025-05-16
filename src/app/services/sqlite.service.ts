import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  async getDB(): Promise<SQLiteObject> {
    if (this.dbInstance) {
      return this.dbInstance;
    }

    this.dbInstance = await this.sqlite.create({
      name: 'users.db',
      location: 'default'
    });

    // Criação das tabelas
      await this.dbInstance.executeSql(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
      )`, []);

    await this.dbInstance.executeSql(`
      CREATE TABLE IF NOT EXISTS servicos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    descricao TEXT,
    data TEXT,
    concluido INTEGER
      )`, []);

    return this.dbInstance;
  }

  async addUser(name: string, email: string, password: string): Promise<void> {
    const db = await this.getDB();
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    await db.executeSql(query, [name, email, password]);
  }

  async getAllUsers(): Promise<any[]> {
    const db = await this.getDB();
    const res = await this.dbInstance.executeSql(`SELECT * FROM users`, []);
    const users = [];
    for (let i = 0; i < res.rows.length; i++) {
      users.push(res.rows.item(i));
    }
    return users;
  }
}
