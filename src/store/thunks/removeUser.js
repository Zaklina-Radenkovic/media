import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  //FIX !!
  //Problem is that whatever we return is our payload, but whenever we send a delete request payload is empty {}
  //   return response.data = {}
  //that is why we will return our user who we took as an argument
  return user;
});

export { removeUser };
