//configuracion de persist
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import counterSlice from '../slice/counterSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

//agregamos todos nuestros slices
const rootReducer = combineReducers({
	counter: counterSlice,
});

const saveSubsetFilter = createWhitelistFilter('counter', ['value']);
// const saveSubsetFilterBlack = createBlackListtFilter('counter', ['value']);

//generamos una configuracion con nombre que asignamos y los slices que queremos que esten o no esten en el persist
const persistConfig = {
	key: 'root',
	storage,
	// whitelist:[""],
	// blacklist:["counter"]
	transforms: [saveSubsetFilter],
};

//configuramos el persist con la configuracion y los slices
const persistedReducer = persistReducer(persistConfig, rootReducer);

//configuracion del store
export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
