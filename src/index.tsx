import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './pages/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}

export default App;
