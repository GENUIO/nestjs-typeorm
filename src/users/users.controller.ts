import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity'
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get('')
  getHello(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id : string) : Promise<User> {
    return this.UsersService.findOne(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto ) : Promise<User> {
    return this.UsersService.createUser(createUserDto);
  }

  /*
  @Delete(':id')
  removeUserById()
  */
}
