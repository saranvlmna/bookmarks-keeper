import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  userId: string;

  @Column()
  note: string;

  @Column()
  createdAt: Date;
}
