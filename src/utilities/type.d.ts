export interface movieType {
    id: number,
    img: string,
    moviename: string,
    releaseDate: number,
    movieType: string,
    favouritemovie: boolean
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
