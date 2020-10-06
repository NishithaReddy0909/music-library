import { music } from './../music.model';
import { MusicServiceService } from './../music-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {
  id: string;
  Songs: music[];
  songById: music;


  constructor(private service: MusicServiceService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.Songs = this.service.getMusic();
    this.getsongById();
  }

  getsongById() {
    for (let songs of this.Songs) {
      if (songs.songId.toString() == this.id) {
        this.songById = songs;
      }
    }

  }

}
