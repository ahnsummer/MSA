import { User, UserById } from './../../../proto/user';
import { Controller } from '@nestjs/common';

import { GrpcMethod } from '@nestjs/microservices';

@Controller('user')
export class AppController {
  private readonly users: User[] = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '김길동' },
  ];

  @GrpcMethod('USER_SERVICE')
  findOne(data: UserById): User {
    return this.users.find(({ id }) => id === data.id);
  }
}
