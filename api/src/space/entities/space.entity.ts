import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SpaceAddress } from './spaceAddress.entity';
import { SpaceCategory } from './spaceCategory.entity';
import { SpaceType } from './spaceType.entity';

@Entity()
export class Space {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  address_id?: string;

  @OneToOne(() => SpaceAddress, { cascade: true })
  @JoinColumn({ name: 'address_id' })
  address: SpaceAddress;

  @Column({ nullable: true })
  category_id?: string;

  @ManyToOne(() => SpaceCategory, { cascade: true })
  @JoinColumn({ name: 'category_id' })
  category: SpaceCategory;

  @Column({ nullable: true })
  type_id?: string;

  @ManyToOne(() => SpaceType, { cascade: true })
  @JoinColumn({ name: 'type_id' })
  type: SpaceType;

  @Column({ nullable: true })
  max_guests?: string;

  @Column({ nullable: true })
  property_size?: number;

  @Column({ nullable: true })
  parking_slots?: number;

  @Column({ nullable: true })
  parking_type?: 'onproperty' | 'street';

  @Column({ nullable: true, type: 'boolean' })
  parking_close?: boolean;

  @Column({ default: -1 })
  avg_rating?: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
