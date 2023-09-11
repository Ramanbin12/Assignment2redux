import React,{useState}from 'react';
import { movieType } from '../../utilities/type';
import { continueWatching } from '../../utilities/Contants/continueWatching';
import { heart1,heart2 } from '../../assets/index';
import '../../common/Style.css';
const ComponentContWatch= () => {
    const [Movies, setMovie] = useState<movieType[]>(continueWatching);
    const setfavToggle = (id: number) => {
        setMovie((prevdata) =>
         prevdata.map((movie) =>
          movie.id === id ? { ...movie, favouritemovie : !movie.favouritemovie }:movie
          ));
    };
  return (
   <>
   <h1 className='text-white m-3 text-2xl '>Continue Watching</h1>
            <div className='flex custom-scrollbar overflow-x-auto gap-4 snap-x'>
                {
                    Movies.map((movie) => {
                        return (
                            <div key={movie.id} className=' flex flex-col '>
                                <div className="relative w-[348px] bg-slate-200 rounded-[20px] text-white " >
                                    <img src={movie.img} />
                                    <button onClick={() => setfavToggle(movie.id)} 
                                    className="p-[8px] absolute top-4  left-[300px] rounded-[8px] bg-white">
                                        {(movie.favouritemovie ?
                                             (<img src={heart2} /> 
                                             ): (<img src={heart1} />))}</button>
                                    <div className="p-5 text-black">
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

export default ComponentContWatch;
