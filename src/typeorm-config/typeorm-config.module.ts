import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomBaseEntity } from '../entities/core/custom-base.entity';
import { UserEntity } from '../entities/user/user.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_DB'),
        schema: configService.get('DATABASE_SCHEMA'),
        entities: [UserEntity, CustomBaseEntity],
        synchronize: !!configService.get<boolean>('DATABASE_SYNCRONIZE'),
        logging: false, //!!configService.get<boolean>('DATABASE_LOGGING'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeormConfigModule {}
