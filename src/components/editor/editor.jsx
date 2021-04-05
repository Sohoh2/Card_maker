import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map(key => (
      <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
    ))}
    {/* maker에서 받은 addCard를 onAdd로 넘겨줌  */}
    <CardAddForm onAdd={addCard} deleteCard={deleteCard} updateCard={updateCard}/>
  </section>
);

export default Editor;