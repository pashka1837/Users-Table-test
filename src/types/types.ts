export type T_User = {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  [prop: string]: string | number;
};

export type T_FetchedUsers = {
  users: T_User[];
};

export type T_ReturnData = {
  users: T_User[];
  totalPages: number;
};

export type T_FilterByField = {
  [prop: string]: string;
};

export type CounterState = {
  users: T_User[];
  filterByFileld: T_FilterByField;
  search: string;
  totalPages: number;
  curPage: number;
  isLoading: boolean;
  isError: boolean;
  error: string;
};
