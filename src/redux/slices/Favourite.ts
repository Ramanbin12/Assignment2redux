import { createSlice} from '@reduxjs/toolkit';
import { trendingMovieData } from '../../utilities/Contants/trendingMovieData';
const initialState={
    movies:trendingMovieData,
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
    }
}
});
export const {setLike}=Favourite.actions;
export default Favourite.reducer;