export type T_User = {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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

// export type T_FilterByField = {
//   _id: boolean;
//   firstName: boolean;
//   lastName: boolean;
//   email: boolean;
//   phone: boolean;
// };
