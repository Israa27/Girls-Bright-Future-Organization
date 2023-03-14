import React ,{useState} from 'react'
import './search.scss'
export default function Search() {
  const [keyword,setKeyWord]= useState('')
  return (
    <form className='search-input '  >
    <input  type='text' placeholder=' Search...' value={keyword} onChange={(e)=> setKeyWord(e.target.value)}/>
    <button type='submit' className='search-btn'><i className="fas fa-search"></i></button>
  </form>
  )
}
