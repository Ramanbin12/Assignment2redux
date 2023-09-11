import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    showNav: false,
};
const NavbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setShowNav: (state) => {
            state.showNav = !state.showNav;
        }
    }
});
export const { setShowNav } = NavbarSlice.actions;
export default NavbarSlice.reducer;