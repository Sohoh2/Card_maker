import React from 'react';
import styles from './card_edit_form.module.css'
import Button from '../button/button'
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
const {
    name,
    company, 
    title, 
    email, 
    message, 
    theme, 
    fileName, 
    fileURL
} = card;

const onSubmit = () => {
    deleteCard(card);
    
};

const onChange = (event) =>{
    if(event.currentTarget == null){
        return;
    }
    event.preventDefault();
    updateCard({
        ...card,
        [event.currentTarget.name]:event.currentTarget.value,

    })

}

return(
<form className={styles.form}>
    <input className={styles.input} type="text" name="name" value={name} onChange={onchange}/>
    <input className={styles.input} type="text" name="company" value={company} onChange={onchange}/>
    <select name="theme" value={theme} onChange={onchange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
    </select>
    <input className={styles.input} type="text" name="title" value={title} onChange={onchange}/>
    <input className={styles.input} type="text" name="email" value={email} onChange={onchange}/>
    <textarea className={styles.textarea} name="message" value={message} onChange={onchange}></textarea>
    <div className={styles.fileInput}>
    <ImageFileInput/>
    </div>

    <Button name='Delete' onClick={onSubmit}/>

</form>   
)         
};

export default CardEditForm;