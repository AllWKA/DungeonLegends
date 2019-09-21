import { Component, OnInit } from '@angular/core';
import { EngineService } from "../services/engine/engine.service";

@Component({
  selector: 'app-play-room',
  templateUrl: './play-room.page.html',
  styleUrls: ['./play-room.page.scss'],
})
export class PlayRoomPage implements OnInit {

  constructor(private engine: EngineService) { }

  monster: JSON;
  desc: String;
  menu: String

  storie: String;

  ngOnInit() {
    this.monster = this.engine.chooseMonster();
    this.menu = this.engine.getMenu();
    this.showDesc();
  }

  showDesc() {
    this.desc = ""
    let desc = this.monster["prologo"] + this.monster["desc"];
    for (let i = 0; i < desc.length; i++) {

      setTimeout(() => {
        if (i == this.monster["prologo"].length) {
          this.desc += '\n\n';
        }
        this.desc += desc.charAt(i);
      }, 100 * i);
    }
    this.storie += desc + "\n";
  }
}
