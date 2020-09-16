type trackTuple = [Track['id'], Track]

export interface Entity {
  id: number
  name: string
}
export interface Playlist extends Entity {
  type: 'Playlist'
  public: boolean;
  description: string;
  tracks?: Track[]
}

export interface Track extends Entity {
  type: 'Track'
  duration: number
}

// export const result: Playlist | Track = {} as any;


// class Dispatchr{

//   dispatch(e:Track):string
//   dispatch(e:Playlist):string
//   dispatch(e:Track|Playlist){
//     switch(result.type){
//       case 'Playlist':
//         result.tracks
//       break;
//       case 'Track':
//         result.duration
//       break;
//     }
//     return ''
//   }
// }


// const playlist: Playlist = {
//   id: 123,
//   type: 'Playlist',
//   name: 'playlist',
//   public: true,
//   description: '',
//   tracks: [
//     {
//       id: 123, name: 'Track', duration: 123, type: 'Track'
//     }
//   ]
// }

// if(playlist.tracks){
//   playlist.tracks[0].name
// }
// playlist.tracks && playlist.tracks[0].name;
// playlist.tracks && playlist.tracks.length
// playlist.tracks?.length

/* export class Playlist implements Playlist{
  name: string;
  public: boolean;
  description: string;
} */

// type ID = number | string;

// const id!: ID;

// /* .... */

// if (typeof id == 'string') {
//   id.italics()
// } else {
//   id.toFixed
// }

// interface Vector { whatIAm: 'Vector', x: number, y: number, length: number }
// interface Point { whatIAm: 'Point', x: number, y: number }

// let v: Vector = { whatIAm: 'Vector', x: 123, y: 123, length: 123 };
// let p: Point = { whatIAm: 'Point', x: 123, y: 123 };
// let pv!: Point | Vector;

// if (pv.whatIAm == 'Vector') {
//   pv.length
// } else {
//   pv.x
// }

// pv = v
// pv = p


// class Vector {
//   constructor(public x: number, public y: number) { }
//   multiply(){}
// }
// class Point {
//   constructor(public x: number, public y: number) { }
//   move(){}
// }

// const p = new Point(1,2)
// const v = new Vector(1,2)

// const pv: Point | Vector = v as any

// if(pv instanceof Point){
//   pv.move()
// }else{
//   // if(pv instanceof Vector)
//   pv.multiply()
// }