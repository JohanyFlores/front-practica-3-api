// src/spelllist.jsx

import React from 'react';
import styles from './spelllist.module.css';

export function SpellList({ classes, spellIds, onClassSelect, onSpellNameClick }) {
  return (
    <>
      <div className={styles.classSelector}>
        {classes.map(className => (
          <button key={className} onClick={() => onClassSelect(className)}>
            {className}
          </button>
        ))}
      </div>
      
      <div className={styles.spellsList}>
        {spellIds.map(id => (
          <div 
            key={id} 
            className={styles.spellListItem}
            onClick={() => onSpellNameClick(id)}
          >
            {id.replace(/-/g, ' ')}
          </div>
        ))}
      </div>
    </>
  );
}