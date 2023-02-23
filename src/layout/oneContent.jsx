import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card, Button, Cascader, Input, Select, Space } from 'antd';
const { Meta } = Card;
function OneContent() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [state, setState] = useState("")
  const [update, setupdate] = useState("12")
  const email = localStorage.getItem("email")

  useEffect(() => {
    axios
      .get(`http://167.235.158.238:3001/invoices/${id}`)
      .then(response => {
        setState(response.data)
      })
  }, [update])
function trash(){
  alert("delete un api yoq ekan")
}

  console.log(state);
  return (
    <div>

      <Card
        style={{
          width: 800,
        }}
        
        actions={[
          <div onClick={()=>trash()}><DeleteOutlined key="delete" /></div>,
          <div onClick={()=>{
            navigate(`/editcontent/${id}`)
           }}><EditOutlined key="edit" /></div>,
          
          <p onClick={() => { navigate(-1) }}>back</p>
        ]}
      >
        <div>
         <div><strong>to: {state.to}</strong></div>
         <div  style={{display:'flex',justifyContent:'space-between'}}>
         <p><strong>description: </strong>{state.description} </p>
         <p><strong>price: </strong>{state.price}</p>
         <p><strong>term: </strong>{state.term}</p>
         <p><strong>CreateDate: </strong>{state.createdDate}</p>
         <p><strong>Email: </strong>{email}</p>
         <p></p>
         </div>
        </div>
      </Card>
    </div>
  )
}
export default OneContent