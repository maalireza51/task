export const initialState = {
  addedCities: [
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addNewCity":
      const newCity = action.payload;
      console.log(action);
      return {
        addedCities: [...state.addedCities, newCity],
      }
    case "deleteAddedCities":
      const id = action.payload;
      return {
        addedCities: state.addedCities.filter((item) => item.id !== id),
      }
    default:
      return state;
  }
};
