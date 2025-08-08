// src/servicios/api.js

const API_BASE_URL = "https://inesdi2025-resources-p2.fly.dev/v1";

// Función para obtener la lista de clases
export const getClasses = async () => {
  const response = await fetch(`${API_BASE_URL}/classes`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

// Función para obtener la lista de IDs de hechizos para una clase
export const getSpellsByClass = async (className) => {
  const response = await fetch(`${API_BASE_URL}/classes/${className}/spells`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

// Función para obtener la información completa de un hechizo por su ID
export const getSpellById = async (spellId) => {
  const response = await fetch(`${API_BASE_URL}/spells/${spellId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

// Función para obtener la información completa de un hechizo por nombre
export const getAssetsByClass = async (assetName) => {
    const response = await fetch(`${API_BASE_URL}/assets/classes/${assetName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  
// Función para obtener la información completa de un hechizo por nombre
export const getAssetsBySpell = async (spellId) => {
    const response = await fetch(`${API_BASE_URL}/assets/spells/${spellId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
    

// --- NO DEBE HABER NADA MÁS DESPUÉS DE ESTO ---