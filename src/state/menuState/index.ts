import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '../store';
import { RootState, Thunk, Dispatch } from '../store';

export enum MenuState {
  OPEN = "open",
  CLOSE = "close"
}


interface BtnState {
  menuState: MenuState;
}

const initialState: BtnState = {
  menuState: MenuState.CLOSE
}

//Slice
const menuStateSlice = createSlice({
  name: 'menuState',
  initialState,
  reducers: {
    setBtnIcon: (state, action: PayloadAction<MenuState>) => {
      const { payload } = action;
      state.menuState = payload;
    }
  }
});

//Reducers
export default menuStateSlice.reducer;

//Selectors 
export const mobileBtnSelector = (state: RootState) => state.menu;

//Actions
const { setBtnIcon } = menuStateSlice.actions;

// Thunks
export const toogleBtnIcon = (): Thunk => (dispatch: Dispatch) => {
  const { menuState } = store.getState().menu;
  const icon = menuState === MenuState.OPEN ? MenuState.CLOSE : MenuState.OPEN;

  dispatch(setBtnIcon(icon));
}
export const switchOffMenu = (): Thunk => (dispatch: Dispatch) => {
  const icon = MenuState.CLOSE;
  dispatch(setBtnIcon(icon));
}