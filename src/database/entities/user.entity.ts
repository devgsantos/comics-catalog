import { Entity, PrimaryGeneratedColumn, Column, EntitySchema } from 'typeorm';
import "reflect-metadata";


@Entity("users")
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable:true })
  name: string;
}

@Entity()
export class Davi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable:true })
  name: string;
}


// export const userList = new EntitySchema({
//   name: "users",
//   columns: {
//       id: {
//           type: Number,
//           primary: true,
//           generated: true,
//       },
//       name: {
//           type: String,
//       },
//       update: {
//         type: "timestamp with time zone",
//         updateDate: true,
//         generated: true,
//       },
//   },
// })