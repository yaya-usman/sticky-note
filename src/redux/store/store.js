import {configureStore} from '@reduxjs/toolkit'
import noteReducer from '../features/noteSlice'

export default configureStore({
    reducer: {
        notes: noteReducer
    }
})