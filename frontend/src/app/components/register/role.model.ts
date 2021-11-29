import { Permission } from "./permission.model";

export interface Role {
  id?: number | null;
  name: string;
  permissionId?: Permission[];
}
