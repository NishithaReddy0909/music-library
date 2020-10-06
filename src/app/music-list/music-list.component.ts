import { MusicServiceService } from './../music-service.service';
import { music } from './../music.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  //image="https://i.ytimg.com/vi/rUi6SxX-qYQ/maxresdefault.jpg";

  Songs:music[];
  AllMusic:music[]=[];
  constructor(private service:MusicServiceService) { }

  ngOnInit(): void {
    this.Songs=this.service.getMusic();
    this.GetAllMusic();
  }
  GetAllMusic(){
  this.AllMusic=this.service.getMusic();
  }







}
