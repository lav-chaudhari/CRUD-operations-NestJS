import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];

  private idCounter = 1;

  create(userToAdd: CreateUserDto): CreateUserDto {
    const existingUser = this.users.find(
      (user) =>
        user.email === userToAdd.email || user.mobile === userToAdd.mobile,
    );

    if (existingUser) {
      throw new ConflictException('Email or mobile number already exists');
    }

    const newUser: CreateUserDto = {
      ...userToAdd,
      id: this.idCounter++,
    };

    this.users.push(newUser);

    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`); // Throw an exception if not found
    }
    return user;
  }

  update(id: number, updateUser: UpdateUserDto) {
    const existingUser = this.findOne(id);

    if (existingUser) {
      Object.assign(existingUser, updateUser);

      return existingUser;
    }

    return null;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.users.splice(index, 1);
    return { message: `User with ID ${id} deleted successfully` };
  }
}
