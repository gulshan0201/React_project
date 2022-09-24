import { useEffect, useState } from "react"
import emojiList from "../emojiList"
import EmojiContainer from "./EmojiContainer";

const Main = () => {

  const [list, setlist] = useState(emojiList);
  const [keyword, setKeyword] = useState("");

  const result = (e) => {
    setKeyword(e.target.value.toLowerCase())
  }

  useEffect(() => {
    const filterList = emojiList.filter(element => {
      if (element.emoji === keyword) {
        return true;
      }
      if (element.description.startsWith(keyword)) {
        return true;
      }
      if (element.category.startsWith(keyword)) {
        return true;
      }
      if (element.aliases.some(e => e.startsWith(keyword))) {
        return true;
      }
      return false;
    })
    setlist(filterList)
  }, [keyword])

  return (
    <main>
      <div className="search">
        <h4 className="caption">Search your favrouit emoji : -</h4>
        <input type="text" placeholder="Filter 🔎" onKeyUp={result} />
        {keyword === "" ? false : (<h4>Result for - {keyword}</h4>)}

      </div>


      <hr></hr>
      {list.length === 0 ? (<h3 className="empty">No emoji found</h3>) : (
        <EmojiContainer list={list} />
      )}

    </main>
  )
}

export default Main