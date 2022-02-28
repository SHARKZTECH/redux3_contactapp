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
    case "EDIT":
      const uState = state.contacts.map((contact) =>
        contact.id === payload.id ? payload : contact
      );

      return { ...state, contacts: uState };

    case "DELETE":
      const filteredCont = state.contacts.filter(
        (contact) => contact.id !== payload
      );
      return { ...state, contacts: filteredCont };
    default:
      return state;
  }
};
export default contactReducer;
