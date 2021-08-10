export class Anime {
    episode: number;
    season: number;
    title: string;
    summary: string;
    type: string;
    picture: string;
    created: Date;
    link1: string;
    link2: string;
    link3: string;

constructor(
    episode: number = 0,
    season: number = 0,
    title: string = '',
    summary: string = '',
    type: string = '',
    picture: string = '',
    created: Date = new Date,
    link1: string = '',
    link2: string = '',
    link3: string = '',){

    this.episode = episode;
    this.season = season;
    this.title = title;
    this.summary = summary;
    this.type = type;
    this.picture = picture;
    this.created = created;
    this.link1 = link1;
    this.link2 = link2;
    this.link3 = link3;
}

}
