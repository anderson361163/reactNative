import React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';

import Cestas from './src/telas/Cestas.js';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return <View></View>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cestas />
    </SafeAreaView>
  );
}

