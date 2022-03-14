import { UserType } from "../../redux/usersReducer";
import Spinner from "../common/Spinner/Spinner";
import Paginator from "./Paginator";
import UserCard from "./UserCard";

type PropTypes = {
  users: Array<UserType>;
  disabledFollowButtonList: Array<number>;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  setCurrentPage: (currentPage: number) => void;
  setPageSize: (currentPage: number, pageSize: number) => void;
  toggleFollow: (userId: number) => void;
};

const Users: React.FC<PropTypes> = ({
  users,
  toggleFollow,
  disabledFollowButtonList,
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  setPageSize,
  isFetching,
}) => {
  return (
    <div>
      {isFetching && <Spinner />}
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
      />
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          toggleFollow={toggleFollow}
          disabledFollowButtonList={disabledFollowButtonList}
        />
      ))}
    </div>
  );
};
export default Users;
