// Return data of the function is used in the components
export type TStarwarsCharacter = {
  name: string;
  birth_year: string;
  homeworld: string;
  films: Array<string>;
};

export async function getCharacter(id: string|number): Promise<TStarwarsCharacter> {
  const res = await fetch(`https://swapi.dev/api/people/${id}`)
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(`Error: ${res.status}`);
  }
 
}