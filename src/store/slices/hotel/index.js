import { hotelDataService } from "../../../services/hotel";
import { createSlice } from "@reduxjs/toolkit";

export const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    hotel: {
      data: [],
      loading: false,
      error: "",
    },
  },
  reducers: {
    setHotelDetail: (state, action) => {
      state.hotel.data = action.payload;
    },
    setLoading: (state, action) => {
      state.hotel.loading = action.payload;
    },
    setError: (state, action) => {
      state.hotel.error = action.payload;
    },
  },
});
export const { setHotelDetail, setLoading, setError } = hotelSlice.actions;
export const getHotelInfo = (data) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const hotelData = await hotelDataService(data);
      dispatch(setHotelDetail(hotelData));
    } catch (error) {
      dispatch(setError(JSON.stringify(error)));
    }
    dispatch(setLoading(false));
  };
};

export default hotelSlice.reducer;
