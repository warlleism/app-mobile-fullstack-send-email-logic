import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/pages/main';

export default function App() {
  return (
    <View style={styles.container}>
     <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 0,
    margin: 0,
    flex: 1,
  },
});
