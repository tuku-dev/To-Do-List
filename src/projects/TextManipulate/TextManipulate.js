import Button from "../../components/Button";
import { useState } from 'react';

export default function TextManipulate() {
  const toggleUpperCase = () => {
    let theText = upperCase ? text.toUpperCase() : text.toLowerCase()
    setText(theText)
    setUpperCase(!upperCase)
  }

  const copyText = () => navigator.clipboard.writeText(text)

  const clearText = () => setText('')

  const reverseText = () => setText(text.split('').reverse().join(''))

  const clearExtraSpace = () => setText(text.replace(/\s+/g, " ").trim())

  const capitalize = () => {
    setText(() => text
      .toLowerCase()
      .split(' ')
      .map(word => word
        .charAt(0)
        .toUpperCase() + word.slice(1)
      )
      .join(' '))
  }

  const [upperCase, setUpperCase] = useState(false)
  const [text, setText] = useState()
  const btnClasses = 'bg-blue-700 text-white';
  return (
    <>
      <div className="App font-sans max-w-[900px] mx-auto border mt-10 p-5 rounded shadow-lg pb-10">
        <h1 className="text-center text-3xl font-extrabold mb-10">Enter your text to analyze below</h1>
        <textarea name="myBox" id="myBox" className="border w-full h-[300px] mb-4 rounded shadow outline-none p-5" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="flex gap-2 mb-3">
          <Button classNames={btnClasses} text={upperCase ? "Uppercase" : "Lowercase"} onClick={toggleUpperCase} />
          <Button classNames={btnClasses} text="Capitalize" onClick={capitalize} />
          <Button classNames={btnClasses} text="Copy Text" onClick={copyText} />
          <Button classNames={btnClasses} text="Clear Text" onClick={clearText} />
          <Button classNames={btnClasses} text="Reverse Text" onClick={reverseText} />
          <Button classNames={btnClasses} text="Clear Extra Space" onClick={clearExtraSpace} />
        </div>
      </div>
    </>
  )
}