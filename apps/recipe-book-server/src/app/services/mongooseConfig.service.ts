import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb+srv://testuser:ChefPassword@masterchefcluster.8v9dw.mongodb.net/MasterChefDb?retryWrites=true&w=majority',
      connectionFactory: (connection, name) => {
        
        return;
      }
    };
  }

}