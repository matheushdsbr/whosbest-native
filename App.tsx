import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/pages/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}

export default App;
