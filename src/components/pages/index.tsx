import {
  CharacterGroup,
  CharacterIcons,
  CharacterId,
  IconPath,
  Teams,
} from '@types';
import { useEffect, useState } from 'react';

import { CharacterSearch, CharacterSelect } from '../model/character';

export const Index = () => {
  const [selectedSearchTabIndex, setSelectedSearchTabIndex] = useState(1);
  const [characterGroup, setCharacterGroup] = useState<Partial<CharacterGroup>>(
    {}
  );
  const [characterIcons, setCharacterIcons] = useState<CharacterIcons>(
    new Map<CharacterId, IconPath>()
  );
  const [teams, setTeams] = useState<Teams>([[], [], [], [], []]);

  useEffect(() => {
    window.electron.getCharaData().then((res: CharacterGroup) => {
      setCharacterGroup(res);
      res.allTab.forEach((chara) => {
        setCharacterIcons(characterIcons.set(chara.id, chara.iconPath));
      });
    });
  }, [characterIcons]);

  return (
    <>
      <CharacterSelect
        selectedSearchTabIndex={selectedSearchTabIndex}
        characterGroup={characterGroup}
        setTeams={setTeams}
      />
      <CharacterSearch
        selectedSearchTabIndex={selectedSearchTabIndex}
        setSelectedSearchTabIndex={setSelectedSearchTabIndex}
        teams={teams}
        setTeams={setTeams}
        characterIcons={characterIcons}
      />
    </>
  );
};
