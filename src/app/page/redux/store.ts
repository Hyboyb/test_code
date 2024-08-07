'use client'

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import cartSlice from './slice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})

// định dạng kiểu dữ liệu cho selector vs dispatch
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>()
