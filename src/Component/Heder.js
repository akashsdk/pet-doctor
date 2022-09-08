import React from 'react';
import "./Styled/Heder.css";
import { LogoutOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
export default function Heder() {
  return (
    <div className='HeaderBody'>
      <div className='HeaderTite'>
        
        <Button className='HeaderTiteButton' icon={<LogoutOutlined  className='HeaderTiteIcon'/>} />
        <h1 style={{flexDirection: 'row',display: 'flex',}}>Admin <div className='HeaderTiteHide'>Deshbord</div>
          </h1>
      </div>
    </div>
  )
}
