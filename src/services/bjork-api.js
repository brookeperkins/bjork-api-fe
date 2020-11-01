import fetch from 'node-fetch';
const URL = process.env.REACT_APP_URL;

export const getOutfits = async() => {
  const res = await fetch(`${URL}/outfits`);
  const json = await res.json;

  if(!res.ok) throw 'Error: unable to fetch';

  return json.map(outfits => ({
    id: outfits.date,
    img: outfits.img,
    year: outfits.year,
    quote: outfits.quote
  }));
};
