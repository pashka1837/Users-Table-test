import { T_FilterByField, T_User } from "../types/types";

export function filterUsers(
  data: T_User[],
  filterByFileld: T_FilterByField
): T_User[] {
  let key = Object.keys(filterByFileld).at(0);
  let curFilter = filterByFileld[key!];
  return data.toSorted((a, b) => {
    let first = a[key!];
    let second = b[key!];
    if (key !== "_id")
      return curFilter === "min"
        ? (first as string).localeCompare(second as string)
        : (second as string).localeCompare(first as string);
    return curFilter === "min"
      ? (first as number) - (second as number)
      : (second as number) - (first as number);
  });
}

export function filterBySearch(data: T_User[], search: string): T_User[] {
  return data.filter((user) => {
    let values = Object.values(user);
    return values.some((v) => `${v}`.toLowerCase().includes(search));
  });
}
