import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 启动参数校验 全局ValidatePipe
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // 设置uploads文件夹为静态文件目录
  app.useStaticAssets(join(__dirname, '../uploads'), { prefix: '/uploads' });
  await app.listen(3000);
}
bootstrap();
