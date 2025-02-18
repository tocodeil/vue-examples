// Return data of the function is used in the components
export type TStarwarsCharacter = {
  name: string;
  birth_year: string;
  homeworld: string;
  films: Array<string>;
};

export async function getCharacter(id: number|string): Promise<TStarwarsCharacter> {
  const r = await fetch(`https://swapi.dev/api/people/${id}`);

  /*
  In case of error we can "throw" or return null.
  Throwing triggers retries by default

  if (!r.ok) {
    throw new Error(`Failed to fetch character with id ${id}`);
  }
  */

  return r.json();
}