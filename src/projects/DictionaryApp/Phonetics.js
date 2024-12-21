function Phonetics({ phonetics }) {
  return (
    <>
      {phonetics.map((phonetic, i) => (
        <div key={i} className="mb-3">
          {phonetic.text && <p><strong>Phonetic:</strong> {phonetic.text}</p>}
          {phonetic.audio && (
            <audio controls>
              <source src={phonetic.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </>
  )
}

export default Phonetics