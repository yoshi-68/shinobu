import { Character, CharacterGroup } from '@types';
import { useEffect, useState } from 'react';

import { CharacterSearch, CharacterSelect } from '../model/character';

export const Index = () => {
  const [selectedSearchTabIndex, setSelectedSearchTabIndex] = useState(1);
  const [characterGroup, setCharacterGroup] = useState<Partial<CharacterGroup>>(
    {}
  );

  // const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const [team1Characters, setTeam1Characters] = useState<Character[]>([]);
  // const [team2Characters, setTeam2Characters] = useState<number[]>()
  // const [team3Characters, setTeam3Characters] = useState<number[]>()
  // const [team4Characters, setTeam4Characters] = useState<number[]>()
  // const [team5Characters, setTeam5Characters] = useState<number[]>()

  // const onClickAddSelectedSeardhTabIndex = (character: Character) => {

  // }

  useEffect(() => {
    window.electron.getCharaData().then((res: CharacterGroup) => {
      setCharacterGroup(res);
    });
  }, []);

  return (
    <>
      <CharacterSelect
        characterGroup={characterGroup}
        setTeam1Characters={setTeam1Characters}
        team1Characters={team1Characters}
      />
      <CharacterSearch
        selectedSearchTabIndex={selectedSearchTabIndex}
        setSelectedSearchTabIndex={setSelectedSearchTabIndex}
        team1Characters={team1Characters}
        setTeam1Characters={setTeam1Characters}
      />
    </>
  );
};
