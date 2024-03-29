import { useDispatch, useSelector } from 'react-redux';
import { store, RootState } from './store';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = () => useSelector((state: RootState) => state);