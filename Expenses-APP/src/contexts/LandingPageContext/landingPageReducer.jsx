import { v4 as uuidv4 } from 'uuid';

export function mainReducer(state, action) {
  switch (action.type) {
  /*   case 'logOut':
      return{
        ...state,
        loggedOut:false,
         
      }*/
      case 'logOut':
      return {
        ...state,
        loggedIn: false,
        activeUser: [],
      };
    case 'logIn':
      return {
        ...state,
        loggedIn: true,
        activeUser: state.users.find(
          (elem) =>
            (elem.password === Number(action.payload.password) &&
              elem.email === action.payload.email) ||
            elem.userName === action.payload.email
        ),
      };
    case 'signUp':
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: uuidv4() }],
      };
    default:
      return state;
  }
}

export const initialState = {
  users: [
    {
      userName: 'Ania',
      email: 'ania@o2.pl',
      password: 111,
      id: uuidv4(),
      userData:[]
    },
    {
      userName: 'Salma',
      email: 'salma@o2.pl',
      password: 222,
      id: uuidv4(),
    },
    {
      userName: 'Samuel',
      email: 'samuel@o2.pl',
      password: 333,
      id: uuidv4(),
    },
    {
      userName: 'Thulasi',
      email: 'thulasi@o2.pl',
      password: 444,
      id: uuidv4(),
    },
  ],
  loggedIn: false,
  loggedOut:true,
  activeUser: [],
};
