import { Module } from "@nestjs/common";
import database from "src/database/connection";
import { Bookmark } from "src/database/entity/bookmark";
import { BookmarkController } from "./bookmark.controller";
import { BookmarkService } from "./bookmark.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot(database.options),
    TypeOrmModule.forFeature([Bookmark]),
  ],
  controllers: [BookmarkController],
  providers: [BookmarkService],
})
export class BookmarkModule {}
