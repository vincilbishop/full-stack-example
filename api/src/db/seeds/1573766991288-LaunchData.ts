import { MigrationInterface, QueryRunner } from 'typeorm';
import * as seedData from './seed-data.json';
import { Launch } from '../../models';
import { getConnection } from 'typeorm';
import * as _ from 'lodash';

export class LaunchData1573766991288 implements MigrationInterface {

  connection = getConnection('seed');

  public async up(queryRunner: QueryRunner): Promise<any> {

    const repo = this.connection.getRepository(Launch);

    const launches = [];

    while (seedData.length > 0) {

      const rawLaunch: any = seedData.shift();
      const launch = new Launch();

      launch.rocketName = rawLaunch.rocket.rocket_name;
      launch.rocketType = rawLaunch.rocket.rocket_type;
      launch.launchDate = rawLaunch.launch_date_utc;
      launch.launchDetails = rawLaunch.details;
      launch.launchNumber = rawLaunch.flight_number;
      launch.articleUrl = rawLaunch.links.article_link;
      launch.badgeUrl = rawLaunch.links.mission_patch_small;

      launch.reused = _.every(rawLaunch.reuse, value => !value );
      launch.reddit = _.some(rawLaunch.links, (value, key) => {
        if (key.startsWith('reddit_')) {
          return value;
        } else {
          return false;
        }
      });

      launches.push(launch);
    }

    await repo.save(launches);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
