

const Configuration = (props) => {


  return (
    <>
      <div>
        <label htmlFor="no_of_chars">Number of Charecters</label>
        <input type="number" id="no_of_chars" className="f-right" onKeyUp={e => props.setCharCount(e.target.value)} />
      </div>

      <br></br>

      <div>
        <label htmlFor="include_number">Include Number</label>
        <input type="checkbox" id="include_numbers" className="f-right" onChange={e => props.setIncNumber(e.target.checked)} />
      </div>

      <br></br>

      <div>
        <label htmlFor="include_spl_chars">Include Special Charecters</label>
        <input type="checkbox" id="include_spl_chars" className="f-right" onChange={e => props.setIncSplChars(e.target.checked)} />
      </div>

      <br></br>

      <div>
        <label htmlFor="casing">Casing</label>
        <select defaultValue="" id="casing" className="f-right" onChange={e => props.setCasing(e.target.value)}>
          <option value="" disabled>Select Casing</option>
          <option value="lower">Lowercase</option>
          <option value="upper">Uppercase</option>
          <option value="mixed">Mixedcase</option>
        </select>
      </div>

    </>
  )
}

export default Configuration