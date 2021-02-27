import React from 'react'

const SearchBar = ({onSearchChange}) => {
  return(
    <div>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search for a robot'
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBar
