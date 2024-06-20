import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


// const store = configureStore({
//     reducer:{
//         cart:cartSlice
//     }
// });

const reducers = combineReducers({
    cart: cartSlice,
  });
  
  const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
 export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
      serializableCheck: false
    }),
  
  });
  
  export const persistor = persistStore(store);


