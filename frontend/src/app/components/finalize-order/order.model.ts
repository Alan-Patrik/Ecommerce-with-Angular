import { Product } from 'src/app/components/product/product.model';

export interface Order {
  id?: number | string;
  timestamp?: Date | string;
  total?: number | null;
  products?: Product[];
}
