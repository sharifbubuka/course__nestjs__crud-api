import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://bubukasharif:1q2w3e4r5t@nestjs-course-cluster.ijgep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        },
      },
    });
  }
}
