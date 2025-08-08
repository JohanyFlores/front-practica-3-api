// src/spellscard.jsx

import styles from './spellscard.module.css';

// Importaciones de imágenes
import evocationIcon from './assets/icons/classes/wizard.png'; // Evocación
import abjurationIcon from './assets/icons/classes/cleric.png'; // Abjuración
import enchantmentIcon from './assets/icons/classes/bard.png';   // Encantamiento
import transmutationIcon from './assets/icons/classes/druid.png'; // Transmutación
import defaultIcon from './assets/icons/classes/sorcerer.png';   // Un ícono por defecto

// 1. El mapa ahora usa los nombres REALES de las escuelas de magia
const iconMap = {
  'Evocation': evocationIcon,
  'Abjuration': abjurationIcon,
  'Enchantment': enchantmentIcon,
  'Transmutation': transmutationIcon,
  // ...puedes añadir más escuelas aquí
};

// 1. La función ahora recibe 'spell', 'type', y 'onSelectSpell'
export function SpellsCard({ spell, type, onSelectSpell }) { 

  // Si no hay un hechizo, no renderizamos nada para evitar errores
  if (!spell) {
    return null;
  }

  return (
    // 2. El evento onClick ahora llama directamente a la función 'onSelectSpell'
    <div className={styles.element} onClick={onSelectSpell}>
      <img
        className={styles.icon}
        src={icon} // Usa el 'type' para el ícono
        alt={schoolName || 'Hechizo'}  />
      
      {/* 3. Accedemos a los datos a través del objeto 'spell' */}
      <p className={styles.spellName}>{spell.name}</p>

      <div className={styles.spellList}>
        <p><strong>Nivel:</strong> {spell.level}</p>
        <p><strong>Acción:</strong> {spell.action}</p>
        <p><strong>Rango:</strong> {spell.range}</p>
      </div>
    </div>
  );
}