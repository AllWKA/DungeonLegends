import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EngineService } from "../services/engine/engine.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private engine: EngineService) { }

  goToAdventure() {
    this.engine.gameMode("adventure");
    this.router.navigateByUrl('play-room');
  }
  goToArcade() {
    this.engine.gameMode("arcade");
    this.router.navigateByUrl('play-room');
  }
}
