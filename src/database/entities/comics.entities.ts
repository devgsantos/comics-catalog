import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class userList {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  name!: string;
}

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  name!: string;

  @Column('text',{ nullable:true })
  description!: string;

  @Column('text',{ nullable:true })
  modified!: string;

  @OneToOne(() => Thumbnail, { cascade: true, eager: true })
  @JoinColumn()
  thumbnail!: Thumbnail;

  @Column('text',{ nullable:true })
  resourceURI!: string;

  @OneToMany(() => Comics, comics => comics.result, { cascade: true })
  comics!: Comics[];

  @OneToMany(() => Series, series => series.result, { cascade: true })
  series!: Series[];

  @OneToMany(() => Stories, stories => stories.result, { cascade: true })
  stories!: Stories[];

  @OneToMany(() => Events, events => events.result, { cascade: true })
  events!: Events[];

  @OneToMany(() => Url, url => url.result, { cascade: true })
  urls!: Url[];
}

@Entity()
export class Thumbnail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  path!: string;

  @Column('text',{ nullable:true })
  extension!: string;

  @OneToOne(() => Result, result => result.thumbnail)
  result!: Result;
}

@Entity()
export class Comics {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  available!: number;

  @Column('text',{ nullable:true })
  collectionURI!: string;

  @OneToMany(() => Item, item => item.comics)
  items!: Item[];

  @ManyToOne(() => Result, result => result.comics)
  result!: Result;
}

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  resourceURI!: string;

  @Column('text',{ nullable:true })
  name!: string;

  @ManyToOne(() => Comics, comics => comics.items)
  comics!: Comics;
}

@Entity()
export class Series {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  available!: number;

  @Column('text',{ nullable:true })
  collectionURI!: string;

  @OneToMany(() => Item2, item => item.series)
  items!: Item2[];

  @ManyToOne(() => Result, result => result.series)
  result!: Result;
}

@Entity()
export class Item2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  resourceURI!: string;

  @Column('text',{ nullable:true })
  name!: string;

  @ManyToOne(() => Series, series => series.items)
  series!: Series;
}

@Entity()
export class Stories {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  available!: number;

  @Column('text',{ nullable:true })
  collectionURI!: string;

  @OneToMany(() => Item3, item => item.stories)
  items!: Item3[];

  @ManyToOne(() => Result, result => result.stories)
  result!: Result;
}

@Entity()
export class Item3 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  resourceURI!: string;

  @Column('text',{ nullable:true })
  name!: string;

  @Column('text',{ nullable:true })
  type!: string;

  @ManyToOne(() => Stories, stories => stories.items)
  stories!: Stories;
}

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  available!: number;

  @Column('text',{ nullable:true })
  collectionURI!: string;

  @OneToMany(() => Item4, item => item.events)
  items!: Item4[];

  @ManyToOne(() => Result, result => result.events)
  result!: Result;
}

@Entity()
export class Item4 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  resourceURI!: string;

  @Column('text',{ nullable:true })
  name!: string;

  @ManyToOne(() => Events, events => events.items)
  events!: Events;
}

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text',{ nullable:true })
  type!: string;

  @Column('text',{ nullable:true })
  url!: string;

  @ManyToOne(() => Result, result => result.urls)
  result!: Result;
}
