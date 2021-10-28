import { Column, Entity, Index } from 'typeorm';

import { Gender } from '../../enum/gender.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';

@Entity({ name: 'users', schema: 'public' })
@Index('users-lastName-isactive-idx', ['lastName', 'isActive'])
@Index('users-email-isactive-idx', ['email', 'isActive'])
@Index('users-phone-isactive-idx', ['phone', 'isActive'])
export class UserEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'first_name', length: 65 })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 65 })
  @Index('users-last-name-idx', { unique: false })
  lastName: string;

  @Column({ type: 'varchar', name: 'email', length: 100, nullable: true })
  @Index('users-email-idx', { unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'phone', length: 20, nullable: true })
  @Index('users-phone-idx', { unique: true })
  phone: string;

  @Column({ type: 'varchar', name: 'password', length: 100, nullable: true })
  password: string;

  @Column({
    type: 'enum',
    name: 'gender',
    enum: Gender,
    default: `${Gender.Unknown}`,
  })
  gender: Gender;

  @Column({
    type: 'timestamp without time zone',
    name: 'date_of_birth',
    nullable: true,
  })
  dateOfBirth: Date | null;
}
