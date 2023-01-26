const { createSlice } = require("@reduxjs/toolkit");

const baseInfo = createSlice({
  name: "baseInformation",
  initialState: {
    addedCities: [],
  },
  reducers: {
    addNewCity(state, action) {
        state.addedCities.push(action.payload)
    },
    deleteAddedCities(state,action) {
        const id = action.payload;
        state.addedCities = state.addedCities.filter((item) => item.id !== id)
    }
  },
});

export const {addNewCity, deleteAddedCities} = baseInfo.actions
export default baseInfo.reducer