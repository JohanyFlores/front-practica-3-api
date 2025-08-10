// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';
// Asegúrate de que getSpellById esté importado
import { getClasses, getSpellsByClass, getSpellById } from './servicios/api.js';
import { SpellsCard } from './spellscard.jsx'; // Asegúrate de que tu componente de tarjeta se importe correctamente

function App() {
  const [classes, setClasses] = useState([]);
  const [spellIds, setSpellIds] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null); // El estado para el detalle
  const [isLoading, setIsLoading] = useState(false);
  
  // Carga las clases al iniciar
  useEffect(() => {
    const fetchClasses = async () => {
      const classData = await getClasses();
      setClasses(classData);
    };
    fetchClasses();
  }, []);

  // Carga la lista de nombres de hechizos cuando se selecciona una clase
  const handleClassSelect = async (className) => {
    setIsLoading(true);
    setSelectedSpell(null); // Limpia el detalle anterior
    const ids = await getSpellsByClass(className);
    setSpellIds(ids);
    setIsLoading(false);
  };

  // Carga los detalles de un hechizo cuando se hace clic en su nombre
  const handleSpellNameClick = async (spellId) => {
    setIsLoading(true);
    const spellDetails = await getSpellById(spellId);
    setSelectedSpell(spellDetails);
    setIsLoading(false);
  };

  // Vuelve a la lista de nombres de hechizos
  const handleReturnToSpellList = () => {
    setSelectedSpell(null);
  };

  return (
    <div className="App">
      <header>
      <h1>{selectedSpell ? selectedSpell.name : 'Libro de Hechizos'}</h1>

      {/* --- LÓGICA CORREGIDA --- */}
      {/* Solo muestra los botones si NO hay un hechizo seleccionado */}
      {!selectedSpell && (
        <div className="class-selector">
          {classes.map(className => (
            <button key={className} onClick={() => handleClassSelect(className)}>
              {className}
            </button>
          ))}
        </div>
      )}
            </header>

      <main>
        {isLoading ? (
          <p>Cargando...</p>
        ) : selectedSpell ? (
          // --- VISTA DE DETALLE ---
          <div className="detail-view">
            <SpellsCard spell={selectedSpell} onSelectSpell ={() => {}}/>
            <button className="back-button" onClick={handleReturnToSpellList}>
              Volver a la Lista
            </button>
          </div>
        ) : (
          // --- VISTA DE LISTA DE NOMBRES ---
          <div className="spells-list">
            {spellIds.map(id => (
              <div 
                key={id} 
                className="spell-list-item" 
                onClick={() => handleSpellNameClick(id)}
              >
                {id.replace(/-/g, ' ')}
              </div>
            ))}
            
          </div>
        )}
      </main>
    </div>
  );
}

export default App;