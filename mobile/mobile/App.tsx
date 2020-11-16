import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const timeouter = () => {
      setSeconds((seconds) => seconds + 1);
    };
    if (isRunning) {
      const timerId = setInterval(timeouter, 1000);
      return () => {
        clearInterval(timerId);
      };
    }
  }, []);

  function handleStartTimeout() {
    setIsRunning(true);
  }

  function handleResumeTimeout() {
    setIsRunning(true);
  }

  function handlePauseTimeout() {
    setIsRunning(false);
  }

  function handleClearTimeout() {
    setIsRunning(false);
    setSeconds(0);
  }
  return (
    <View style={styles.container}>
      <Text>{seconds}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleStartTimeout}>
        <Text>Começar contador</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStartTimeout}>
        <Text>Pausar contador</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClearTimeout}>
        <Text>Parar contador</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
