import { Role } from "./role.model";

export interface User {
  id?: number;
  email: string;
  password?: string;
  rolesId?: Role[];
}
