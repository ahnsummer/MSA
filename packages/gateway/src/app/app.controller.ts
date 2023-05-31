import {
  USER_SERVICE_NAME,
  User,
  UserServiceClient
} from './../../../proto/user';
import { Controller, Inject } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common/interfaces';
import { ClientGrpc } from '@nestjs/microservices/interfaces';
import { Observable } from 'rxjs';

@Controller()
export class AppController implements OnModuleInit {
  private useService: UserServiceClient;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.useService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  getUser(): Observable<User> {
    return this.useService.findOne({ id: 1 });
  }
}
