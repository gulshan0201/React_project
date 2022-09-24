import Configuration from "./Configuration"
import { useState } from "react"
import GenerateButton from "./GenerateButton";

const Container = () => {
  const [charCount, setCharCount] = useState(0);
  const [incNumber, setIncNumber] = useState(false);
  const [incSplChars, setIncSplChars] = useState(false);
  const [casing, setCasing] = useState("")

  return (
    <div className="container">
      <h2 className="title">Password Generator</h2>
      <Configuration
        setCharCount={setCharCount}
        setIncNumber={setIncNumber}
        setIncSplChars={setIncSplChars}
        setCasing={setCasing} />
      <br />
      <GenerateButton
        charCount={charCount}
        incNumber={incNumber}
        incSplChars={incSplChars}
        casing={casing}
      />

    </div>
  )
}

export default Container