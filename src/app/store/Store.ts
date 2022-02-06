import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootReducer, RootState } from './RootReducer';


/**
 * Store holds root reducer where all the reducer combined together
 */
export const store = configureStore({
    reducer: rootReducer
})

/**
 * selector to select the state of the app
 */

export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;

export type AppDispatch = typeof store.dispatch;
