import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

//'thunk' will be fnc that we will call from dispatch
export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  // this is the function that is going to run thunk and dispatch it and update the loading state
  const runThunk = useCallback(
    //arg is for argument (id) we need to pass to thunk when we delete user
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};
