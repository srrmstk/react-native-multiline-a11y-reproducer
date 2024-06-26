import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <TextInput
        value={value}
        multiline={true}
        numberOfLines={4}
        onChangeText={setValue}
        accessibilityLabel={'exampleLabel'}
        accessibilityValue={{text: value}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
