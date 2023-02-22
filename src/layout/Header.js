import React from 'react'
import { Link } from 'react-router-dom'
function Head() {
  return (
    <div className='Head'>
      <div className='headMain' >
        <ul>
          <li>birinchi</li>
          <li>ikkinchi</li>
          <li>   <Link to={"addelem"}>addinvocies</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Head