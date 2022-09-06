import { FilteredUser } from "./FilteredUser";

export type AuthUserResponse = {
  error: string | null;
  status: string | null;
  user: FilteredUser | null;
};
