import React from 'react';
import { heart1, heart2 } from '../../assets/index';
// import { trendingMovieData } from '../../utilities/Contants/trendingMovieData';
// import { AppContext } from '../index';
import '../../common/Style.css';
import { setLike } from '../../redux/slices/Favourite';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { movieType } from '../../utilities/type';
import {setDes} from '../../redux/slices/Favourite';
const ComponentTrending: React.FC = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.like);
    console.log(movies);
    console.log(typeof (movies));
    return (
        <>

            <h1 className='text-white font-poppins m-3 text-2xl '>Trending</h1>
            <div className='flex custom-scrollbar overflow-x-auto gap-4 snap-x'>
                {
                    movies.movies.map((movie: movieType) => {
                        return (
                            <div key={movie.id} onClick={()=>dispatch(setDes(movie.id))}  className=' flex flex-col '>
                                <div className=" relative w-[300px]  rounded-[23px]  text-white " >
                                    <img className="w-[300px]" src={movie.img} />


                                    <button onClick={() => dispatch(setLike(movie.id))}
                                        className="p-[8px] absolute top-4  left-[245px] rounded-[10px] bg-white">

                                        {(movie.favouritemovie ?
                                            (<img src={heart2} />
                                            ) : (<img src={heart1} />))}</button>
                                    <div className="p-5 bg-slate-200 relative bottom-4 rounded-b-[23px] text-black">
                                        <h3 className="text-2xl font-bold">{movie.moviename}</h3>
                                        <p >{movie.releaseDate} | {movie.movieType}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </>
    );
};

export default ComponentTrending;
