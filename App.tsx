import { StatusBar } from 'expo-status-bar';
import { NavigationProvider } from './src/contexts/NavigationContext';

import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#181a20" />

      <NavigationProvider>
        <Routes />
      </NavigationProvider>
    </>
  );
}
