import { AppService } from './app.service';
import { User, UserById } from './../../../proto/user';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('user')
export class AppController {
  private readonly users: User[] = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '김길동' },
    { id: 3, name: '안길동' },
  ];

  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UserService', 'FindOne')
  findOne(data: UserById): User {
    return this.users.find(({ id }) => id === data.id);
  }

  @Get('hello')
  getHello(): { message: string } {
    return this.appService.getData();
  }
}
