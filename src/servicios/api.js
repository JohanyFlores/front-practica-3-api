
const API_BASE_URL = "https://inesdi2025-resources-p2.fly.dev/v1";

export const getClasses = async () => {
  const response = await fetch(`${API_BASE_URL}/classes`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export const getSpellsByClass = async (className) => {
  const response = await fetch(`${API_BASE_URL}/classes/${className}/spells`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export const getSpellById = async (spellId) => {
  const response = await fetch(`${API_BASE_URL}/spells/${spellId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export const getAssetsByClass = async (assetName) => {
    const response = await fetch(`${API_BASE_URL}/assets/classes/${assetName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  
  export const getAssetsBySpell = async (spellId) => {
    const response = await fetch(`${API_BASE_URL}/assets/spells/${spellId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
    
