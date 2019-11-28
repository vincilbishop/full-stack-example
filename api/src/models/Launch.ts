import { ApiModelProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { ModelBase } from './ModelBase';

@Entity()
export class Launch extends ModelBase {
  @ApiModelProperty()
  @Column({ nullable: true })
  articleUrl: string;
  @ApiModelProperty()
  @Column()
  badgeUrl: string;

  @ApiModelProperty()
  @Column({ default: false, nullable: true })
  landed: boolean;

  @ApiModelProperty()
  @Column()
  launchDate: Date;

  @ApiModelProperty()
  @Column({ nullable: true })
  launchDetails: string;

  @ApiModelProperty()
  @Column()
  launchNumber: number;

  @ApiModelProperty()
  @Column()
  reddit: boolean;

  @ApiModelProperty()
  @Column()
  reused: boolean;

  @ApiModelProperty()
  @Column()
  rocketName: string;

  @ApiModelProperty()
  @Column()
  rocketType: string;
}
