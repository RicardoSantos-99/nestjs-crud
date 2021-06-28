import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/crud'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
