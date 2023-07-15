import { CarInterface } from 'interfaces/car';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  car_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  user?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  car_id?: string;
  user_id?: string;
}
