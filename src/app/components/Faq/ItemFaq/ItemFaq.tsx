import React from 'react';

import IitemFaqProps from './interfaceProps';
import styles from './Column.module.css';


const ItemFaq: React.FC<IitemFaqProps> = ({ pregunta, respuesta }) => {
  return (
    <>
      <div className={styles.column}>
        <h3>{pregunta}</h3>
        <p>{respuesta}</p>
      </div>
    </>
  );
};

export default ItemFaq;