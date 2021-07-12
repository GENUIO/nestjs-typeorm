import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  async createUser(createUserDto : CreateUserDto): Promise<CreateUserDto> {
    const user = this.usersRepository.create(createUserDto);
    const result = await this.usersRepository.save(user);
    //let password, rest;
    let { password, ...rest } = result;
    return rest;
  }

  updateUser(id: string, userData: CreateUserDto): Promise<User> {
    return  this.usersRepository.save( {id: Number(id), ...userData} );
  }
  //async update
}