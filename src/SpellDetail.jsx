// src/SpellDetail.jsx

import { SpellsCard } from './spellscard.jsx';
import './App.css'; 
import styles from './spelldetail.module.css'; 

export function SpellDetail({ spell, onReturnToList }) {
  return (
    <div className={styles.detailView}> {}
      <SpellsCard
        spell={spell}
        onSelectSpell={() => {}} 
      />
      <button className={styles.backButton} onClick={onReturnToList}>
        Volver a la Lista
      </button>
    </div>
  );
}