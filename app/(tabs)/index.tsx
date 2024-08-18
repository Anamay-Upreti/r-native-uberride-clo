import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-center">Open up App.js to start working on your app!</Text>
        {/* Correct usage of StatusBar */}
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      </View>
    </SafeAreaView>
  );
}
