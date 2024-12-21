import axios from 'axios';
import { useState } from 'react';
import SearchBar from './SearchBar';
import DictionaryCard from './DictionaryCard';

function DictionaryApp() {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState(null);

  const fetchDictionary = async (text) => {
    setWord(text);
    if (text !== '') {
      try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
        const response = await axios.get(url);

        if (response.status === 200) {
          console.log(response.data);
          setWordData(response.data[0]); // Only fetch the first result for simplicity
          setError(null);
        }
      } catch (error) {
        console.error(error);
        setError('Word not found. Please try again.');
        setWordData(null);
      }
    }
  };

  return (
    <div className="App font-sans max-w-[700px] mx-auto border mt-10 p-5 rounded shadow-lg pb-10">
      <h1 className="text-center text-3xl font-extrabold mb-10">Dictionary App</h1>
      <SearchBar searchWord={fetchDictionary} />
      {word && <div className="my-3 text-2xl font-bold underline">{word}</div>}
      {!error && wordData && <DictionaryCard wordData={wordData} />}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default DictionaryApp;
