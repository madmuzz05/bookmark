import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      status: 200,
      msg: 'Test',
    };
  }

  register() {
    return {
      status: 200,
      msg: 'Oke',
    };
  }
}
