export const addNewCity = (id,newCity) => ({
  type: "addNewCity",
  payload: { id, cityName: newCity },
});

export const deleteAddedCities = (id) => ({
  type: "deleteAddedCities",
  payload: id,
});
