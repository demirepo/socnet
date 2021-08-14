const TOGGLE_FOLLOWED = "toggleFollowed";
const SHOW_MORE = "showMore";
const SET_USERS = "setUsers";

//===================== INITIAL STATE ============================

const initialState = {
  users: [
    {
      id: 1,
      name: "Василий",
      location: { city: "Moscow", country: "Russia" },
      followed: false,
      avatar: "/img/ava.jpg ",
      age: "29",
      status: "Брат за брата - так за основу взято",
    },
    {
      id: 2,
      name: "Татьяна",
      location: { city: "Ростов-на-Дону", country: "Russia" },
      followed: true,
      avatar: "/img/ava.jpg ",
      age: "18",
      status: "Меня сложно найти, легко потерять и невозможно забыть",
    },
    {
      id: 3,
      name: "Eduard",
      location: { city: "Pattaya", country: "Thailand" },
      followed: false,
      avatar: "/img/ava.jpg ",
      age: "36",
      status: "One thousand",
    },
  ],
};
//===================== REDUCER ============================

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FOLLOWED:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: user.followed ? false : true };
          }
          return user;
        }),
      };
    case SET_USERS:
      console.log(action.users);
      let newUsers = action.users.map((user) => ({
        id: user.cell,
        name: user.name.first + " " + user.name.last,
        location: { city: user.location.city, country: user.location.country },
        followed: false,
        avatar: user.picture.large,
        age: user.dob.age,
        status: user.email,
      }));
      return { ...state, users: [...state.users, ...newUsers] };
    default:
      return state;
  }
}

//===================== ACTION CREATORS ============================

export function toggleFollowAC(userId) {
  return { type: TOGGLE_FOLLOWED, userId }; // значение userId присваивается автоматически называемому ключу userId
}

export function showMoreAC() {
  return { type: SHOW_MORE };
}

export function setUsersAC(users) {
  return { type: SET_USERS, users };
}
