import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}


  @Post() 
  create(@Body() createUser: CreateUserDto) {
    try {
      return this.userService.create(createUser); 
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT); 
    }
  }


  @Get() 
  findAll() {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR); 
    }
  }


  @Get(':id') 
  findOne(@Param('id') id: string) {
    try {
      return this.userService.findOne(+id); 
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND); 
    }
  }


  @Patch(':id') 
  update(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    try {
      return this.userService.update(+id, updateUser); 
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND); 
    }
  }


  @Delete(':id') 
  remove(@Param('id') id: string) {
    try {
      return this.userService.remove(+id); 
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND); 
    }
  }
}
