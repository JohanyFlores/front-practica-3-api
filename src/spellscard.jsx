// src/spellscard.jsx

import styles from './spellscard.module.css';

// ¡YA NO NECESITAMOS IMPORTAR IMÁGENES NI TENER UN iconMap!

const API_BASE_URL = "https://inesdi2025-resources-p2.fly.dev/v1";


export function SpellsCard({ spell, onSelectSpell }) { 
  if (!spell) return null;

  // 1. Construimos la URL de la imagen del hechizo dinámicamente
  const imageUrl = `${API_BASE_URL}/assets/spells/${spell.id}`;

  return (
    <div className={styles.element} onClick={onSelectSpell}>
      <img
        className={styles.icon}
        src={imageUrl} // <-- 2. Asignamos la URL construida
        alt={spell.name} // Usamos el nombre del hechizo como texto alternativo
      />
      <p className={styles.spellName}>{spell.name}</p>
      <div className={styles.spellDetails}>
        <p><strong>Nivel:</strong> {spell.level}</p>
        <p><strong>Acción:</strong> {spell.action}</p>
        <p><strong>Rango:</strong> {spell.range}</p>
        <p><strong>Duracion:</strong> {spell.duration}</p>
        <p><strong>Tipo:</strong> {spell.type}</p>

      </div>
    </div>
    
  
  );
}