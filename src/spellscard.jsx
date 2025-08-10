// src/spellscard.jsx

import styles from './spellscard.module.css';

// 1. PRIMERO, LAS IMPORTACIONES DE IMÁGENES
import evocationIcon from './assets/icons/classes/wizard.png';
import abjurationIcon from './assets/icons/classes/cleric.png';
import enchantmentIcon from './assets/icons/classes/bard.png';
import transmutationIcon from './assets/icons/classes/druid.png';
import defaultIcon from './assets/icons/classes/sorcerer.png';

// 2. LUEGO, LA DEFINICIÓN DE 'iconMap' (ESTA ES LA PARTE QUE PROBABLEMENTE FALTA)
const iconMap = {
  'Evocation': evocationIcon,
  'Abjuration': abjurationIcon,
  'Enchantment': enchantmentIcon,
  'Transmutation': transmutationIcon,
};

// 3. FINALMENTE, EL COMPONENTE QUE USA 'iconMap'
export function SpellsCard({ spell, onSelectSpell }) { 
  if (!spell) return null;

  const schoolName = spell.school?.name;
  const icon = iconMap[schoolName] || defaultIcon;

  return (
    <div className={styles.element} onClick={onSelectSpell}>
      <img
        className={styles.icon}
        src={icon}
        alt={schoolName || 'Hechizo'}
      />
      <p className={styles.spellName}>{spell.name}</p>
      <div className={styles.spellDetails}>
        <p><strong>Nivel:</strong> {spell.level}</p>
        <p><strong>Acción:</strong> {spell.action}</p>
        <p><strong>Rango:</strong> {spell.range}</p>
      </div>
    </div>
  );
}