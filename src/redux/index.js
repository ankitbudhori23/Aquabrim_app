import {combineReducers} from '@reduxjs/toolkit';
import InitialReducer from './slices/InitialSlice';
import ModalReducer from './slices/ModalSlice';

const RootReducer = combineReducers({
  initial: InitialReducer,
  modal: ModalReducer,
});

export default RootReducer;
