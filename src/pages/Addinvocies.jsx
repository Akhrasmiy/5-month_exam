import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SettingOutlined } from '@ant-design/icons';
import { Button, Cascader, Input, Select, Space } from 'antd';

//Body: {
//"userId": userId,
//"paid": data.paid,
//"email": email,
//"to": data.to,
//"dueDate": date,
//"term": number,
//"createdDate": date,
//"description": string,
//"price": number
//}
//Headers: {
//	Authorization: `Bearer ${token}`
//}
//axios.post(url, {
//"userId": userId,
//"paid": data.paid,
//"email": email,
//"to": data.to,
//"dueDate": date,
//"term": number,
//"createdDate": date,
//"description": string,
//"price": number
//}, {
//  headers: {
//    Authorization: `Bearer ${token}`
//  }
//})
const userId = localStorage.getItem("userId")
const token = localStorage.getItem("Token")
const email = localStorage.getItem("email")
const { Option } = Select;
const Addelem = () => {
  const { t } = useTranslation()
  const { type } = useParams();
  const toref = useRef(null)
  const termref = useRef(null)
  const descriptionref = useRef(null)
  const paidref = useRef(null)
  const priceref = useRef(null)
  const dateref = useRef(null)
  const navigate = useNavigate()

  if (!token) {
    navigate("/login")
  }
  function abbos(data) {
    console.log(data)
    const src = "http://167.235.158.238:3001/invoices"
    axios.post(src, {
      "userId": userId,
      "paid": data.paid,
      "email": email,
      "to": data.to,
      "dueDate": data.date,
      "term": data.term,
      "createdDate": data.date,
      "description": data.description,
      "price": data.price
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response => {
      if (response.status === 201) { navigate('/') }
      console.log(response);
    }))
  }

  return <div className="addFed">
    <button onClick={() => navigate(-1)}>back</button>
    <div className='nomsiz'>
      <h1>{t("e'lon berish")}</h1>
      <label htmlFor="to">{t("To")}</label>
      <input placeholder='To' ref={toref} id="to" />
      <label htmlFor="description" >{t("Description")}</label>
      <input placeholder='description' ref={descriptionref} id="description" />
      <label htmlFor="term">{t("term")}</label>
      <input type={'number'} placeholder='term' id='term' ref={termref} />
      <label htmlFor="date">{t("date")}</label>
      <input type={'date'} placeholder='date' id='date' ref={dateref} />
      <label htmlFor="Paid">{t("Paid")}</label>
      <select name="Paid" id="Paid" ref={paidref}>
        <option value="true">true</option>
        <option value="false">false</option>

      </select>
      <label htmlFor="price">{t("price")}</label>
      <input type={'number'} placeholder='price' id='price' ref={priceref} />


      <Button type="primary" className='nomsizbutton' onClick={() => {
        const data = {
          to: toref.current.value,
          description: descriptionref.current.value,
          term: termref.current.value,
          paid: paidref.current.value,
          price: priceref.current.value,
          date: dateref.current.value,

        }
        abbos(data)
      }

      }>{t("Save")}</Button>

    </div>

  </div>
}

export default Addelem