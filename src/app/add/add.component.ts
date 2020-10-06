import { music } from './../music.model';
import { MusicServiceService } from './../music-service.service';
import { Component, OnInit } from '@angular/core';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:MusicServiceService) { }

  ngOnInit(): void {
  }
  userModel:any={}
onsubmit(){
  this.service.addNewSong(new music(3,this.userModel.songName,this.userModel.songArtist,this.userModel.image,this.userModel.releaseDate));
}
addNew(){
  console.log("Button clicked");
}
}
