/* eslint-disable camelcase */
import { View, StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { NativeBaseProvider } from 'native-base'
import { Loading } from '@components/Loading'
import { THEME } from './src/theme'
import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'
import { Routes } from '@routes/index'

import { AuthContextProvider } from '@contexts/authContext'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
      {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
