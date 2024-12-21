function Meanings({ meanings }) {
  return (
    <div className="mt-5">
      {meanings.map((meaning, i) => (
        <div key={i} className="mb-5">
          <div className="text-lg font-bold">{meaning.partOfSpeech}</div>
          {meaning.definitions.map((definition, j) => (
            <div key={j} className="ml-4">
              <strong>Definition:</strong> {definition.definition}
              {definition.example && (
                <div className="italic">
                  <strong>Example:</strong> "{definition.example}"
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Meanings;
