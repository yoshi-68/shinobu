import { useState } from 'react';
import { Character, Characters } from 'types';

import { NUMBER_OF_SEARCH_TAB } from '../../settings';
import { CharaSearch, CharacterSelect } from '../model/character';

export const Index = () => {
  const [selectedSearchTabIndex, setSelectedSearchTabIndex] = useState(1);

  // const initSelectedCharacters = new Map<number, Character>();

  const [selectedCharacters, setSelectedCharacters] = useState<Characters[]>(
    Array<Characters>()
  );

  return (
    <>
      <CharacterSelect />
      <CharaSearch
        selectedSearchTabIndex={selectedSearchTabIndex}
        setSelectedSearchTabIndex={setSelectedSearchTabIndex}
        selectedCharacters={selectedCharacters}
        setSelectedCharacters={setSelectedCharacters}
      />
    </>
  );
};
