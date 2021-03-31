import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Sunny',
      company: 'ABC company',
      theme: 'light',
      title: 'Software Engineer',
      email: 'Sunny@gmail.com',
      message: 'I wanna go home..',
      fileName: 'Sun',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Joshua',
      company: 'Samsung',
      theme: 'dark',
      title: 'Trainer',
      email: 'josh@samsung.com',
      message: 'hello!!!',
      fileName: 'Gil',
      fileURL: 'ellie.png',
    },
    {
      id: '3',
      name: 'Edwin',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
