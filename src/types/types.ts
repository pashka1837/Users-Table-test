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
  curPage: number;
};

export type T_FilterByField = {
  [prop: string]: string;
};

export type CounterState = {
  selectedUsers: T_User[];
  filterByFileld: T_FilterByField;
  search: string;
};

export type T_FetchError = {
  error: string;
};
