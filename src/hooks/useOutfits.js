import { useState, useEffect } from 'react';
import { fetchOutfits, getOutfitById } from '../services/bjork-api';

export const useOutfits = () => {
  const [loading, setLoading] = useState(true);
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    fetchOutfits()
      .then(fetchedOutfits => setOutfits(fetchedOutfits))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    outfits
  };
};

export const useOutfitById = (id) => {
  const [loading, setLoading] = useState(true);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    getOutfitById(id)
      .then(fetchedOutfit => setOutfit(fetchedOutfit))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    outfit
  };
};
