import { OrderProviderModule } from '@istio-demo/order-provider';
import { Module } from '@nestjs/common';

@Module({
  imports: [OrderProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
