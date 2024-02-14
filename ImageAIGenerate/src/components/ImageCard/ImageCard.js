import React, {useState} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from '../ImageCard/ImageCard.style';
import axios from 'axios';

import LoadingAnimation from '../Loading/loading';

function ImageCard() {
  const [generatedImage, setGeneratedImage] = useState(
    require('../../assets/city.jpg'),
  );
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <LoadingAnimation />;
  }

  const CreatedImage = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',

        {
          prompt: inputText,
        },

        {
          headers: {
            Authorization: 'Bearer `${API_KEY}`',
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('API response', response);
      console.log('Generated URL Image:', response.data.data[0].url);

      setGeneratedImage({uri: response.data.data[0].url});
    } catch (error) {
      console.log('API Request Error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.content_container}>
        <View>
          <View style={styles.image_container}>
            <Image style={styles.image} source={generatedImage} />
          </View>
          <View style={styles.search_container}>
            <TextInput
              placeholder="Describe What You Want To See"
              style={styles.textInput}
              value={inputText}
              onChangeText={text => setInputText(text)}
            />
            <TouchableOpacity style={styles.button} onPress={CreatedImage}>
              <Text style={styles.buttonText}>Generate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default ImageCard;
