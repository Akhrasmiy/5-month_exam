import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import React from 'react'
import { useNavigate, } from 'react-router-dom';
const token = localStorage.getItem("Token")
function Nav() {
  const navigate = useNavigate()
  return (
    <div className='Nav'>
      {token
        ?
        <div onClick={()=>{
          localStorage.setItem("Token","")
          window.location.reload()
        }}>
          <p className='loginbormi'><UserOutlined /></p>
          outLogin
        </div>
        :
        <div onClick={() => {
          navigate("/login")
          window.location.reload()
        }}><p className='loginbormi'><UserAddOutlined /></p>
          login</div>

      }
    </div>
  )
}

export default Nav