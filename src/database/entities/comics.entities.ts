// import { EntitySchema } from 'typeorm';

// export interface Result {
//     id?: number;
//     name?: string;
//     description?: string;
//     modified?: string;
//     thumbnail?: Thumbnail;
//     resourceURI?: string;
//     comics?: Comics[];
//     series?: Series[];
//     stories?: Stories[];
//     events?: Events[];
//     urls?: Url[];
// }

// export const ResultSchema = new EntitySchema<Result>({
//   name: 'Result',
//   columns: {
//       id: {
//           type: Number,
//           primary: true,
//           generated: true,
//       },
//       name: {
//           type: 'text',
//           nullable: true,
//       },
//       description: {
//           type: 'text',
//           nullable: true,
//       },
//       modified: {
//           type: 'text',
//           nullable: true,
//       },
//       resourceURI: {
//           type: 'text',
//           nullable: true,
//       },
//   },
//   relations: {
//       thumbnail: {
//           type: 'one-to-one',
//           target: () => 'Thumbnail',
//           cascade: true,
//           eager: true,
//       },
//       comics: {
//           type: 'one-to-many',
//           target: () => 'Comics',
//           cascade: true,
//       },
//       series: {
//           type: 'one-to-many',
//           target: () => 'Series',
//           cascade: true,
//       },
//       stories: {
//           type: 'one-to-many',
//           target: () => 'Stories',
//           cascade: true,
//       },
//       events: {
//           type: 'one-to-many',
//           target: () => 'Events',
//           cascade: true,
//       },
//       urls: {
//           type: 'one-to-many',
//           target: () => 'Url',
//           cascade: true,
//       },
//   },
// });

// export interface Thumbnail {
//     id?: number;
//     path?: string;
//     extension?: string;
// }

// export const ThumbnailSchema = new EntitySchema<Thumbnail>({
//     name: 'Thumbnail',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         path: {
//             type: 'text',
//             nullable: true,
//         },
//         extension: {
//             type: 'text',
//             nullable: true,
//         },
//     }
// });

// export interface Comics {
//     id?: number;
//     available?: number;
//     collectionURI?: string;
//     items?: Item[];
// }

// export const ComicsSchema = new EntitySchema<Comics>({
//     name: 'Comics',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         available: {
//             type: 'text',
//             nullable: true,
//         },
//         collectionURI: {
//             type: 'text',
//             nullable: true,
//         },
//     },
//     relations: {
//         items: {
//             type: 'one-to-many',
//             target: 'Item',
//             cascade: true,
//         },
//     },
// });

// export interface Item {
//     id?: number;
//     resourceURI?: string;
//     name?: string;
// }

// export const ItemSchema = new EntitySchema<Item>({
//     name: 'Item',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         resourceURI: {
//             type: 'text',
//             nullable: true,
//         },
//         name: {
//             type: 'text',
//             nullable: true,
//         },
//     }
// });

// // Definição para Series
// export interface Series {
//     id?: number;
//     available?: number;
//     collectionURI?: string;
//     items?: Item2[];
// }

// export const SeriesSchema = new EntitySchema<Series>({
//     name: 'Series',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         available: {
//             type: 'text',
//             nullable: true,
//         },
//         collectionURI: {
//             type: 'text',
//             nullable: true,
//         },
//     },
//     relations: {
//         items: {
//             type: 'one-to-many',
//             target: 'Item2',
//             cascade: true,
//         }
//     },
// });

// // Definição para Stories
// export interface Stories {
//     id?: number;
//     available?: number;
//     collectionURI?: string;
//     items?: Item3[];
// }

// export const StoriesSchema = new EntitySchema<Stories>({
//     name: 'Stories',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         available: {
//             type: 'text',
//             nullable: true,
//         },
//         collectionURI: {
//             type: 'text',
//             nullable: true,
//         },
//     },
//     relations: {
//         items: {
//             type: 'one-to-many',
//             target: 'Item3',
//             cascade: true,
//         }
//     },
// });

// // Definição para Events
// export interface Events {
//     id?: number;
//     available?: number;
//     collectionURI?: string;
//     items?: Item4[];
// }

// export const EventsSchema = new EntitySchema<Events>({
//     name: 'Events',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         available: {
//             type: 'text',
//             nullable: true,
//         },
//         collectionURI: {
//             type: 'text',
//             nullable: true,
//         },
//     },
//     relations: {
//         items: {
//             type: 'one-to-many',
//             target: 'Item4',
//             cascade: true,
//         }
//     },
// });

// // Definição para Item2
// export interface Item2 {
//     id?: number;
//     resourceURI?: string;
//     name?: string;
// }

// export const Item2Schema = new EntitySchema<Item2>({
//     name: 'Item2',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         resourceURI: {
//             type: 'text',
//             nullable: true,
//         },
//         name: {
//             type: 'text',
//             nullable: true,
//         },
//     }
// });

// // Definição para Item3
// export interface Item3 {
//     id?: number;
//     resourceURI?: string;
//     name?: string;
//     type?: string;
// }

// export const Item3Schema = new EntitySchema<Item3>({
//     name: 'Item3',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         resourceURI: {
//             type: 'text',
//             nullable: true,
//         },
//         name: {
//             type: 'text',
//             nullable: true,
//         },
//         type: {
//             type: 'text',
//             nullable: true,
//         },
//     }
// });

// // Definição para Url
// export interface Url {
//     id?: number;
//     type?: string;
//     url?: string;
// }


// export const UrlSchema = new EntitySchema<Url>({
//     name: 'Url',
//     columns: {
//         id: {
//             type: Number,
//             primary: true,
//             generated: true,
//         },
//         type: {
//             type: 'text',
//             nullable: true,
//         },
//         url: {
//             type: 'text',
//             nullable: true,
//         },
//     }
// });

// export interface Item4 {
//   id: number
//   resourceURI: string
//   name: string
// }

// export const Item4Schema = new EntitySchema<Item4>({
//   name: 'Item2',
//   columns: {
//       id: {
//           type: Number,
//           primary: true,
//           generated: true,
//       },
//       resourceURI: {
//           type: 'text',
//           nullable: true,
//       },
//       name: {
//           type: 'text',
//           nullable: true,
//       },
//   }
// });





import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';


@Entity('result')
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

@Entity({name: 'thumbnail'})
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

@Entity('comics')
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

@Entity('item')
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

@Entity('series')
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

@Entity('item2')
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

@Entity('stories')
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

@Entity('item3')
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

@Entity('events')
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

@Entity('item4')
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

@Entity('url')
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
