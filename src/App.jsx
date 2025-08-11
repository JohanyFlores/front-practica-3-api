// src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import { getClasses, getSpellsByClass, getSpellById } from './servicios/api.js';
import { SpellDetail } from "./spelldetail.jsx"; 
import { SpellListView } from './spelllist.jsx'; // 1. IMPORTA EL NUEVO COMPONENTE DE LISTA

function App() {
  // Toda la lógica y los estados se quedan aquí, en el componente padre
  const [classes, setClasses] = useState([]);
  const [spellIds, setSpellIds] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ... (todas tus funciones handle... no cambian)
  const handleClassSelect = async (className) => {
    console.log('La función handleClassSelect recibió:', className);
    
    try {
      setIsLoading(true);
      setSpellIds([]); // Limpia la lista anterior para que el usuario vea que algo está cargando
      setSelectedSpell(null); // Si había un detalle abierto, lo cerramos
  
      // Pedimos solo la lista de IDs/nombres, que sabemos que funciona
      const ids = await getSpellsByClass(className);
      
      setSpellIds(ids); // Guardamos la lista de IDs/nombres en el estado
  
    } catch (error) {
      // Si algo falla en la llamada a la API, lo veremos en la consola sin romper el servidor
      console.error("Falló la obtención de la lista de hechizos:", error);
    } finally {
      // Esto se ejecuta siempre, haya habido un error o no
      setIsLoading(false);
    }
  };
  const handleSpellNameClick = async (spellId) => {
    try {
      setIsLoading(true);
      const spellDetails = await getSpellById(spellId);
      setSelectedSpell(spellDetails); // Guarda el hechizo detallado en el estado
    } catch (error) {
      console.error("Falló la obtención del detalle del hechizo:", error);
      alert("No se pudieron cargar los detalles para este hechizo. Puede que el ID de la API sea inconsistente.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleReturnToList = () => { console.log('1. La función en App.jsx se está ejecutando.');
    setSelectedSpell(null);};

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