import { Injectable } from '@angular/core';
import gameConfig from "../../globalConfig/gameConfig.js";

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor() { }

  gameMode(mode: string) {
    gameConfig.a = mode
    console.log(gameConfig.a);
  }
}
