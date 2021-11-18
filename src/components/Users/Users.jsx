import Spinner from "../common/Spinner/Spinner";
import Paginator from "./Paginator";
import UserCard from "./UserCard";

export default function Users({
  users,
  toggleFollow,
  disabledFollowButtonList,
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  setPageSize,
  isFetching,
}) {
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
}
