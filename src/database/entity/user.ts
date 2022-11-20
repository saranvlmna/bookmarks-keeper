import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;
}
