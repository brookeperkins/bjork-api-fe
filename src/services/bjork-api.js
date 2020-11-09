import fetch from 'node-fetch';
const URL = process.env.DATABASE_URL;

export const fetchOutfits = async() => {
  const res = await fetch(`${URL}/outfits`);
  const json = await res.json;
  console.log(json);

  if(!res.ok) throw 'Error: unable to fetch';

  return json.map(outfits => ({
    id: outfits.date,
    img: outfits.img,
    year: outfits.year,
    quote: outfits.quote
  }));
};

export const getOutfitById = async(id) => {
  const res = await fetch(`${URL}/outfits/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return {
    id: json.id,
    img: json.img,
    year: json.year,
    quote: json.quote
  };
};
