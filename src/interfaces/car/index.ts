import { OrderInterface } from 'interfaces/order';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  organization?: OrganizationInterface;
  _count?: {
    order?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  organization_id?: string;
}
