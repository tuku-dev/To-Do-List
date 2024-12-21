import { useState } from 'react';

function SearchBar({ searchWord }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      searchWord(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center items-center border-b pb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a word"
        className="border text-2xl p-3 pl-6 outline-none rounded-l-full"
      />
      <button type="submit" className="border-blue-300 text-xl py-3 px-4 outline-none rounded-r-full bg-blue-200 text-blue-950">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
