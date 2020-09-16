type trackTuple = [Track['id'], Track]

export interface Entity {
  id: number
  name: string
}

export interface Playlist extends Entity {
  public: boolean;
  description: string;
  tracks: Track[]
}

export interface Track extends Entity {
  duration: number
}

const playlist: Playlist = {
  id: 123,
  name: 'playlist',
  public: true,
  description: '',
  tracks: [
    {
      id: 123, name: 'Track', duration: 123
    }
  ]
}

/* export class Playlist implements Playlist{
  name: string;
  public: boolean;
  description: string;
} */

type ID = number | string;

const id!: ID;

/* .... */

if (typeof id == 'string') {
  id.italics()
} else {
  id.toFixed
}

interface Vector { whatIAm: 'Vector', x: number, y: number, length: number }
interface Point { whatIAm: 'Point', x: number, y: number }

let v: Vector = { whatIAm: 'Vector', x: 123, y: 123, length: 123 };
let p: Point = { whatIAm: 'Point', x: 123, y: 123 };
let pv!: Point | Vector;

if (pv.whatIAm == 'Vector') {
  pv.length
} else {
  pv.x
}

pv = v
pv = p
