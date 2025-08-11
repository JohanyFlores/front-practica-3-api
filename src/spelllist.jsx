// src/SpellListView.jsx

import React from 'react';
import './App.css'; // Para los estilos de los botones y la lista

// Recibe como props los datos y las funciones que necesita desde App.jsx
export function SpellListView({ classes, spellIds, onClassSelect, onSpellNameClick }) {
  return (
    // Usamos un Fragmento (<>) porque devolvemos dos elementos principales
    <>
      <div className="class-selector">
        {classes.map(className => (
          <button key={className} onClick={() => {
  console.log('Botón de clase presionado en el hijo:', className);
  onClassSelect(className);
}}>
  {className}
</button>
        ))}
      </div>
      <div className="spells-list">
        {spellIds.map(id => (
          <div 
            key={id} 
            className="spell-list-item" 
            onClick={() => onSpellNameClick(id)}
          >
            {id.replace(/-/g, ' ')}
          </div>
        ))}
      </div>
    </>
  );
}