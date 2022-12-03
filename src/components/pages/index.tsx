import { useState } from 'react';
import { Characters, TabIndex } from 'types';

import { CharaSearch, CharacterSelect } from '../model/character';

export const Index = () => {
  const [selectedSearchTabIndex, setSelectedSearchTabIndex] = useState(1);
  const [selectedCharacters, setSelectedCharacters] = useState<
    Array<Characters>
  >(Array<Characters>());

  return (
    <>
      <CharacterSelect />
      <CharaSearch
        selectedSearchTabIndex={selectedSearchTabIndex}
        setSelectedSearchTabIndex={setSelectedSearchTabIndex}
      />
    </>
  );
};
