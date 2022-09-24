import React, { useState } from 'react'

const GenerateButton = (props) => {
  const [password, setPassword] = useState("")
  const generatePassword = () => {
    let chars = "";
    switch (props.casing) {
      case "lower":
        chars = "abcdefghijklmnopqrsuvwxyz"

        break;
      case "upper":
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        break;
      case "mixed":
        chars = "abcdefghijklmnopqrsuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        break
      default:
        chars = "abcdefghijklmnopqrsuvwxyz"
        break;
    }

    if (props.incNumber) {
      chars = chars + "1234567890"
    }

    if (props.incSplChars) {
      chars = chars + "_@#&%+$!"
    }

    const charCount = props.charCount;
    if (charCount > 16) { charCount = 16 }
    if (charCount < 1) { charCount = 1 }

    let pass = ""
    for (let i = 0; i < charCount; i++) {
      const index = Math.floor(Math.random() * chars.length)
      const singleChar = chars.charAt(index)
      pass = pass + singleChar
    }
    setPassword(pass)
  }
  return (
    <>
      <button className='action_btn' onClick={generatePassword}>Generate</button>
      <p className="op_pass">{password}</p>
    </>
  )
}

export default GenerateButton