// tslint:disable:max-line-length
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Launch1574907062270 implements MigrationInterface {
  name = 'Launch1574907062270';

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "app_launch"`, undefined);
  }

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "app_launch" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "tag" character varying, "updated_at" TIMESTAMP DEFAULT now(), "articleUrl" character varying, "badgeUrl" character varying NOT NULL, "landed" boolean DEFAULT false, "launchDate" TIMESTAMP NOT NULL, "launchDetails" character varying, "launchNumber" integer NOT NULL, "reddit" boolean NOT NULL, "reused" boolean NOT NULL, "rocketName" character varying NOT NULL, "rocketType" character varying NOT NULL, CONSTRAINT "PK_2cea59037d197b791d57df5adf7" PRIMARY KEY ("id"))`,
      undefined,
    );
  }
}
