// components/Navigation.jsx
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation} from 'react-router-dom';
import {
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import styles from './Navigation.module.scss';


const Navigation = () => {
  const location = useLocation(); // получаем текущий путь из роутера
  const [current, setCurrent] = useState(location.pathname); // устанавливаем текущий путь в состояние

  const handleClick = (e) => {
    setCurrent(e.key); // обновляем состояние при клике на новый пункт меню
  };

  const defaultKey = current === '/' ? 'home' : current.slice(1);
  return (
    <div className={styles["navigation-container"]}>
       <Menu onClick={handleClick} selectedKeys={[defaultKey]} mode="horizontal" theme="dark">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          <Link to="/about">О StableDiffusion</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined />}>
          <Link to="/contact">Контакты</Link>
        </Menu.Item>
        {/* Остальные пункты навигации */}
      </Menu>
    </div>
  );
};

export default Navigation;
