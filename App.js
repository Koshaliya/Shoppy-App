import React, //</> this syntax to work
{ useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font' 
import {enableScreens} from 'react-native-screens'
//import {composeWithDevTools} from 'redux-devtools-extension'

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';



enableScreens()


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
});

//const store = createStore(rootReducer,composeWithDevTools());
//only during development
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(error)=> console.log(error)}

    />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

//1.npm install --save redux react-redux react-navigation react-navigation-header-buttons
//  npm i --save @react-navigation/native
//2.expo install react-native-gesture-handler react-native-reanimated
//3.npm install --save react-navigation-stack
// npm install --save @react-navigation/drawer
// npm unistall react-native-reanimated , install @1.13.1 , expo start --clear
//4.npm install --save expo-font                       / expo install expo-font
//5.npm install --save expo-app-loading                / expo install expo-app-loading
//6.npm install --save-dev redux-devtools-extension
//7.npm install --save @expo/vector-icons
//8.npm install --save moment