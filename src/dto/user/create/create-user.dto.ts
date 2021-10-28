import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { UserDto } from '../user.dto';

export class CreateUserDto extends UserDto {
  @ApiProperty()
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Must be non empty' })
  addressPlain: string;
}
