import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Content from '../components/Content';

function Contents() {
  const [fikrs, setfikr] = useState([]);
  const [type, setType] = useState("topdim")
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    axios
      .get(`http://167.235.158.238:3001/invoices`)
      .then(response => {
        setfikr(response.data)
      })
  }, [update])
  return (
    <div className='Contents'>
      Contents
      <div className="mainMain">
        {fikrs.map((fikr, index) => {
          
            return (
              <Content fikr={fikr} key={index} setUpdate={setUpdate} />

            )
          
        })}

      </div>

    </div>
  )
}

export default Contents