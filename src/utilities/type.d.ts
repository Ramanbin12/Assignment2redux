export interface movieType {
    id: number,
    img: string,
    moviename: string,
    releaseDate: number,
    movieType: string,
    favouritemovie: boolean,
    numOfHours:number,
    numOfMin:number,
    description:string,
    Ratings:number
}
export interface watchType {
    id: number,
    img: string,
    moviename: string,
    releaseDate: number,
    movieType: string,
    favouritemovie: boolean,
}
export interface movieStateType {
    user:{
    id: number,
    img: string,
    moviename: string,
    releaseDate: number,
    movieType: string,
    favouritemovie: boolean
    }
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type descriptionActionType={
payload:number
}