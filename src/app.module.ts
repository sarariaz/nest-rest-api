import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ItemsController } from './items/items.controller';
// import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
//no need of { } because we exported as default


@Module({
  imports: [ ItemsModule , MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [  AppService ]
})
export class AppModule {}
