import {
  GetOrdersResponse,
  ORDER_PACKAGE_NAME,
  ORDER_SERVICE_NAME,
  OrderGRPC,
  OrderServiceClient,
  OrderServiceController,
  OrderServiceControllerMethods,
} from './order/order';

import {
  GetUsersResponse,
  USER_PACKAGE_NAME,
  USER_SERVICE_NAME,
  UserGRPC,
  UserServiceClient,
  UserServiceController,
  UserServiceControllerMethods,
} from './order/user';

export {
  // Order
  GetOrdersResponse,
  ORDER_PACKAGE_NAME,
  ORDER_SERVICE_NAME,
  OrderGRPC,
  OrderServiceClient,
  OrderServiceController,
  OrderServiceControllerMethods,

  // User
  GetUsersResponse,
  USER_PACKAGE_NAME,
  USER_SERVICE_NAME,
  UserGRPC,
  UserServiceClient,
  UserServiceController,
  UserServiceControllerMethods,
};

export * from './common';
