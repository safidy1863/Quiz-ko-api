import { Module } from '@nestjs/common';
import { ExampleModule } from './example/example.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ExampleModule, UserModule],
})
export class AppModule {}
