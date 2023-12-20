import { Divider, Sheet, Stack, Typography } from "@mui/joy";
import { NoUsersBox } from ".";
import { useAppSelector } from "../hooks/reduxHooks";
import { Fragment } from "react";
import { SingleUser } from "./index";

export default function SelectedUsers() {
  const selectedUsers = useAppSelector((store) => store.users.selectedUsers);

  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6 }}>
      <Stack py={3} direction="row" justifyContent="center">
        <Typography level="h2">Selected Users</Typography>
      </Stack>
      <Divider />
      {selectedUsers.length ? (
        selectedUsers.map((user, i) => {
          return (
            <Fragment key={user._id + user.firstName}>
              <SingleUser
                isFunc={false}
                user={user}
                isDivider={i !== selectedUsers.length - 1}
              />
            </Fragment>
          );
        })
      ) : (
        <NoUsersBox msg="No selected users yet" />
      )}
    </Sheet>
  );
}
