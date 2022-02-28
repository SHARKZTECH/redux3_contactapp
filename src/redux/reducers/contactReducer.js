const initState = {
  contacts: [
    { id: 1, name: "Sharkz", email: "sharkz@gmail.com", number: 790454320 },
    { id: 2, name: "Reigns", email: "reigns@gmail.com", number: 707254130 }
  ]
};
const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return { ...state, contacts: [...state.contacts, payload] };
    default:
      return state;
  }
};
export default contactReducer;
