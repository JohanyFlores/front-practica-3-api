
import { useState, useEffect } from 'react';
import './App.css';
import { getClasses, getSpellsByClass, getSpellById } from './servicios/api.js';
import { SpellDetail } from "./spelldetail.jsx"; 
import { SpellList } from './spelllist.jsx';

function App() {
  const [classes, setClasses] = useState([]);
  const [spellIds, setSpellIds] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClassSelect = async (className) => {
    console.log('La función handleClassSelect recibió:', className);
    
    try {
      setIsLoading(true);
      setSpellIds([]); 
      setSelectedSpell(null);
  
      const ids = await getSpellsByClass(className);
      
      setSpellIds(ids); 
  
    } catch (error) {
      console.error("Falló la obtención de la lista de hechizos:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSpellNameClick = async (spellId) => {
    try {
      setIsLoading(true);
      const spellDetails = await getSpellById(spellId);
      setSelectedSpell(spellDetails); 
    } catch (error) {
      console.error("Error al obtener los detalles del hechizo:", error);
      alert("No se pudo cargar el hechizo. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleReturnToList = () => {;
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
          <SpellList 
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