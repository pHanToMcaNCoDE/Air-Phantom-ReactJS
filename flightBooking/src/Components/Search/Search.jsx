import React from 'react'

const Search = () => {
  return (
    <div className='search container section'>
      <div className='sectionContainer grid'>

        <div className='btns flex'>

            <div className='singleBtn'>
                <span>Economy</span>
            </div>
            <div className='singleBtn'>
                <span>Business Class</span>
            </div>
            <div className='singleBtn'>
                <span>First Class</span>
            </div>
        </div>

        <div className='searchInputs flex'>
            <div className='singleInput flex'>
                <div className='iconDiv'>

                </div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Search
