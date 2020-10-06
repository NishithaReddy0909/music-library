export class music{
  public songId:number;
  public songName:string;
  public songArtist:string;
   public releaseDate:Date;
   public image:string;
   constructor(songId:number,songName:string,songArtist:string,releaseDate:Date,image:string){
    this.songId=songId;
    this.songName=songName;
    this.songArtist=songArtist;
    this.releaseDate=releaseDate;
    this.image=image;
  }
}
