import "./featured.css"

import React from 'react'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/city/600x600/977192.jpg?k=9b5deb1736f05b131436cd8ee666e23a766e74c39720fce87cec8677238fe207&o=" 
            alt="" className="featuredImage" />
            <div className="featuredTitles">
              <h1>Rome 🇮🇹</h1>
            </div>
        </div>


        <div className="featuredItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/city/600x600/971374.jpg?k=95b428839d92c523c81fc50dd7158a9073bbdf92df2a5166748b2d396976ae32&o=" 
            alt="" className="featuredImage" />
            <div className="featuredTitles">
              <h1>Athens</h1>
            </div>
        </div>


        <div className="featuredItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/city/600x600/977242.jpg?k=72bfe23a6d7a496e0305b94bbb28ce197f3df2d6dd28986c3760a5f1c931664c&o=" 
            alt="" className="featuredImage" />
            <div className="featuredTitles">
              <h1>Paris</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured