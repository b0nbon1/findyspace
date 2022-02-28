import { PartialType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto
  extends PartialType(CreateUserDto)
  implements Partial<User>
{
  firstname?: string;
}
