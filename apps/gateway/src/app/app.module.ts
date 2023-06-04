import {
  OrderGatewayController,
  consumers as orderConsumers,
} from '@istio-demo/order-gateway';
import {
  StockGatewayController,
  consumers as stockConsumers,
} from '@istio-demo/stock-gateway';
import { Module } from '@nestjs/common';

@Module({
  imports: [...orderConsumers, ...stockConsumers],
  controllers: [StockGatewayController, OrderGatewayController],
  providers: [],
})
export class AppModule {}
