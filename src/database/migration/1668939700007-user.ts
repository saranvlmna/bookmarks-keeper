import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class user1668939700007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "userId",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "picture",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "accessToken",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "refreshToken",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "date",
            default: `CURRENT_TIMESTAMP`,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
