export const currentTabReducer = (state = null, action) => {
  switch (action.type) {
    case "1":
      return "Photos";
    case "2":
      return "Illustration";
    case "3":
      return "Music";
    case "4":
      return "Videos";
    case "5":
      return "About";
    case "reset":
      return null;
    default:
      return state;
  }
};
