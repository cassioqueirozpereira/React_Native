import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';


export default function App() {

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (!result.canceled) {
        setSelectedFile(result.uri);
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };
  
    return (
    <View style={styles.container}>
      <View style = {{flexDirection: 'row', gap: 14, marginTop: 14, marginBottom: 14}}>
        <Button title = "Adicionar arquivo" onPress={pickDocument} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});