import React, {useState} from 'react';
import axios from 'axios';


function useCreated() {
  const [generatedImage, setGeneratedImage] = useState(
    require('../assets/city.jpg'),
  );
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const CreatedImage = async () => {
    console.log('Button');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',

        {
          prompt: inputText,
        },

        {
          headers: {
            Authorization: 'Bearer ',
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

  return {loading, generatedImage, inputText};
}

export default useCreated;
