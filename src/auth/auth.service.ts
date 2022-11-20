import { Injectable } from "@nestjs/common";
import { User } from "src/database/entity/user";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userModel: Repository<User>,
    private jwtService: JwtService
  ) {}

  async findOrCreate(req: any) {
    if (req.user) {
      let isExistUser: User;
      isExistUser = await this.userModel.findOne({
        where: {
          email: req.user.email,
        },
      });
      if (!isExistUser) {
        return await this.userModel.insert(req.user).then((res: any) => {
          if (res.raw[0]?.userId) {
            return {
              userId: res.raw[0]?.userId,
              ...req.user,
            };
          }
        });
      }
      return isExistUser;
    }
  }

  generateAuthToken(user: User) {
    let payload = { user };
    return this.jwtService.signAsync(payload, {
      secret: process.env.ACCESS_TOKEN_SECRET,
      expiresIn: "1h",
    });
  }

  generateRefreshToken(userId: any) {
    let payload = { userId };
    return this.jwtService.signAsync(payload, {
      secret: process.env.REFRESH_TOKEN_SECRET,
      expiresIn: "30d",
    });
  }
}
