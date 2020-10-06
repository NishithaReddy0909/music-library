import { music } from './music.model';

import { Injectable } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';


@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {


  constructor() {}
  music1:music[]=[

    new music(1,"Manasu mari","Naveen",new Date("5/09/2020"),"https://i.ytimg.com/vi/rUi6SxX-qYQ/maxresdefault.jpg"),
    new music(2,"Pilla ra","Anurag",new Date("5/2/2018"),"https://lillyrics.com/wp-content/uploads/2018/07/pilla-758x525.jpg")
    ];
    addNewSong(newSong:music){
      this.music1.push(newSong);
    }


    getMusic():music[] {
    return this.music1;
    }

}
