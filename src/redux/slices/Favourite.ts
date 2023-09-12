import { createSlice} from '@reduxjs/toolkit';
import { trendingMovieData } from '../../utilities/Contants/trendingMovieData';
const initialState={
    movies:trendingMovieData,
    user:{}

};
const Favourite=createSlice({
name:'like',
initialState,
reducers:{
    setLike:(state,action)=>{
        const index = trendingMovieData.findIndex(e => e.id === action.payload);
        
           state.movies[index]={
            ...state.movies[index],
            favouritemovie:!state.movies[index].favouritemovie,
           };
    },
    setDes: (state,action) => {
        const actionId=action.payload?action.payload: 1;
        const index = trendingMovieData.findIndex(e => e.id === actionId);
        state.user=trendingMovieData[index];
    }
}
});
export const {setLike,setDes}=Favourite.actions;
export default Favourite.reducer;
