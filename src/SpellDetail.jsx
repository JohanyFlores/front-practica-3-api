// src/SpellDetail.jsx

import { SpellsCard } from './spellscard.jsx';
import './App.css'; // Para los estilos del botón
import styles from './spelldetail.module.css'; // <-- Importa su CSS

// Recibe como props el hechizo a mostrar y la función para volver
export function SpellDetail({ spell, onReturnToList }) {
  return (
    <div className={styles.detailView}> {/* <-- Usa el objeto 'styles' */}
      <SpellsCard
        spell={spell}
        onSelectSpell={() => {}} // El onClick no hace nada en la vista de detalle
      />
      <button className={styles.backButton} onClick={onReturnToList}>
        Volver a la Lista
      </button>
    </div>
  );
}