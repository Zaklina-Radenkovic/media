import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";
import { useThunk } from "../hooks/use-thunk";

function UsersList(props) {
  //   const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  //   const [loadingUsersError, setLoadingUsersError] = useState(null);

  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  //   const [isCreatingUser, setIsCreatingUser] = useState(false);
  //   const [creatingUserError, setCreatingUserError] = useState(null);

  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  //   const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users; //our state is {} that has data:[], isLoading: false, error:null, and we can all of them destructure; but for now we manage locally isloading and error
  });

  useEffect(() => {
    // //to indicate that we are about to start loading users and show the skeleton loader
    // //we set loading to true
    // setIsLoadingUsers(true);
    // dispatch(fetchUsers())
    //   //BAD:: setIsLoadingUsers(false)
    //   //after 'dispatch' immediatelly call setIsLoading(false), because dispatch is async and JS will start executing line 20, but then immediatelly go on line21

    //   //we need to detect when the reqest is finished:
    //   .unwrap()
    //   .then(() => setIsLoadingUsers(false))
    //   .catch((err) => {
    //     setLoadingUsersError(err);
    //     setIsLoadingUsers(false); //hiding spinner
    //   });

    //with custom hook
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    // setIsCreatingUser(true);
    // dispatch(addUser())
    //   .unwrap()
    //   .then(() => setIsCreatingUser(false))
    //   .catch((err) => {
    //     setCreatingUserError(err);
    //     setIsCreatingUser(false);
    //   });

    // with custom hook
    doCreateUser();
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl text-slate-400 font-semibold">Users</h1>

        {/* {isCreatingUser ? (
          "Creting User.."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )} */}

        {/* changing button not to show text but spinner and to disable it at some point;
        for that we add prop 'loading' which when is true will load spinner */}
        <Button
          loading={isCreatingUser}
          onClick={handleUserAdd}
          className="bg-slate-400 text-slate-100"
        >
          + Add User
        </Button>
        {creatingUserError && "Error creating User!"}
      </div>
      {data.map((user) => (
        <UsersListItem user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UsersList;
