import { Injectable } from '@angular/core';
import gameConfig from "../../globalConfig/gameConfig.js";
import monstersDB from "../../globalConfig/db/monsters.js";

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor() { }

  gameMode(mode: string): void {
    gameConfig.a = mode
    console.log(gameConfig.a);
  }
  chooseMonster(): JSON {
    let monsters = monstersDB[gameConfig.floor].monsters;
    return monsters[Math.round(Math.random() * monsters.length)];
  }
  getMenu(): String {
    return gameConfig.menu;
  }
  setMenu(menu: string): void {
    gameConfig.menu = menu;
  }
}
