import Meanings from './Meanings';
import Phonetics from './Phonetics';

function DictionaryCard({ wordData }) {
  const { phonetics, meanings, sourceUrls } = wordData;

  return (
    <div className="mt-5">
      {/* Phonetics */}
      <Phonetics phonetics={phonetics} />

      {/* Meanings */}
      <Meanings meanings={meanings} />

      {/* Source URL */}
      {sourceUrls && (
        <p className="mt-5">
          <strong>Source:</strong>{' '}
          <a href={sourceUrls[0]} target="_blank" rel="noreferrer" className="text-blue-500">
            {sourceUrls[0]}
          </a>
        </p>
      )}
    </div>
  );
}

export default DictionaryCard;
