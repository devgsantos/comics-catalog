import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity("users")
export class userList {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text', { nullable:true })
  name!: string;
}