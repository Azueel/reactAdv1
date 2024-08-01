//configuracion de persist
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import counterSlice from '../slice/counterSlice';
import { persistReducer, persistStore } from 'redux-persist';

//generamos una configuracion con nombre que asignamos y los slices que queremos que esten o no esten en el persist
const persistConfig = {
	key: 'root',
	storage,
	// whitelist:[""],
	// blacklist:["counter"]
};

//agregamos todos nuestros slices
const rootReducer = combineReducers({
	counter: counterSlice,
});

//configuramos el persist con la configuracion y los slices
const persistedReducer = persistReducer(persistConfig, rootReducer);

//configuracion del store
export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
