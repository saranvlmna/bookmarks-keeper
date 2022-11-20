import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import database from "src/database/connection";
import { User } from "src/database/entity/user";
import { GoogleStrategy } from "./googleauth";

@Module({
  imports: [
    TypeOrmModule.forRoot(database.options),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
