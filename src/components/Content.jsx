import React, { } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { use } from 'i18next';
import { useNavigate } from 'react-router-dom';
//"userId": 1,
//"paid": true,
//"email": "r@gmail.com",
//"to": "efeferfge",
//"dueDate": "2022-12-01",
//"term": "7",
//"createdDate": "2022-12-03T21:18:23.195Z",
//"description": "invoice",
//"price": "700",
//"id": 924
const MainElem = (props) => {
  
  const { paid, to, price, dueDate, userId, description, id, term } = props.fikr;
  const getType = props.type
  const navigate=useNavigate()

  const { t } = useTranslation()
  const changePageOnecontent =(id)=>{
    navigate(`/content/${id}`)
  }
  
  return <div style={{ display: "flex", justifyContent: "center" }}>
    <div className='mainelem' onClick={() => {changePageOnecontent(id)}}>
      <h3>#{id}</h3>
      <p>{description}</p>
      <p>{dueDate}</p>
      <p>{price}$</p>
      <p>{
        paid ? "Paid" : "Draft"
      }</p>


      {/* {tags} */}
    </div>
  </div>
}

export default MainElem