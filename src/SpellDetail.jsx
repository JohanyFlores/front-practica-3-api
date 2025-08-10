// src/SpellDetail.jsx

import { SpellsCard } from './spellscard.jsx';
import './App.css'; // Para los estilos del botón

// Recibe como props el hechizo a mostrar y la función para volver
export function SpellDetail({ spell, onReturnToList }) {
  return (
    <div className="detail-view">
      <SpellsCard
        spell={spell}
        onSelectSpell={() => {}} // El onClick no hace nada en la vista de detalle
      />
      <button className="back-button" onClick={onReturnToList}>
        Volver a la Lista
      </button>
    </div>
  );
}