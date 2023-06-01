import {
  USER_SERVICE_NAME,
  User,
  UserServiceClient,
} from './../../../proto/user';
import { Observable } from 'rxjs';
import { Controller, Inject, Get } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common/interfaces';
import { ClientGrpc } from '@nestjs/microservices/interfaces';

@Controller('/api')
export class AppController implements OnModuleInit {
  private useService: UserServiceClient;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.useService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  @Get('/user')
  getUser(): Observable<User> {
    return this.useService.findOne({ id: 3 });
  }
}
