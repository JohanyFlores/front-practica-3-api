// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import { getClasses, getSpellsByClass, getSpellById } from './servicios/api.js';
import { SpellDetail } from "./SpellDetail.jsx"; 
import { SpellListView } from './SpellListView.jsx'; // 1. IMPORTA EL NUEVO COMPONENTE DE LISTA
import { SpellsCard } from './spellscard.jsx'; // Asegúrate de que este componente esté disponible

function App() {
  // Toda la lógica y los estados se quedan aquí, en el componente padre
  const [classes, setClasses] = useState([]);
  const [spellIds, setSpellIds] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ... (todas tus funciones handle... no cambian)
  const handleClassSelect = async (className) => { /*...*/ };
  const handleSpellNameClick = async (spellId) => { /*...*/ };
  const handleReturnToList = () => { /*...*/ };

  useEffect(() => {
    const fetchClasses = async () => {
      const classData = await getClasses();
      setClasses(classData);
    };
    fetchClasses();
  }, []);

  return (
    <div className="App">
      {!selectedSpell && (
        <header>
          <h1>Libro de Hechizos</h1>
        </header>
      )}
      
      <main>
        {isLoading ? (
          <p>Cargando...</p>
        ) : selectedSpell ? (
          <SpellDetail spell={selectedSpell} onReturnToList={handleReturnToList} />
        ) : (
          // 2. USA TU NUEVO COMPONENTE AQUÍ, PASÁNDOLE LAS PROPS
          <SpellListView 
            classes={classes}
            spellIds={spellIds}
            onClassSelect={handleClassSelect}
            onSpellNameClick={handleSpellNameClick}
          />
        )}
      </main>
    </div>
  );
}

export default App;