import { ApiModelProperty } from '@nestjs/swagger';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { ModelBase } from './ModelBase';

@Entity()
export class Launch extends ModelBase {

  @ApiModelProperty()
  @Column()
  badgeUrl: string;

  @ApiModelProperty()
  @Column()
  rocketName: string;

  @ApiModelProperty()
  @Column()
  rocketType: string;

  @ApiModelProperty()
  @Column()
  launchDate: Date;

  @ApiModelProperty()
  @Column({nullable: true})
  launchDetails: string;

  @ApiModelProperty()
  @Column()
  launchNumber: number;

  @ApiModelProperty()
  @Column({nullable: true})
  articleUrl: string;

  @ApiModelProperty()
  @Column()
  reused: boolean;

  @ApiModelProperty()
  @Column()
  reddit: boolean;
}
