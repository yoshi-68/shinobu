import '@/sass/character-search.sass';
import { NUMBER_OF_SEARCH_TAB } from '@/settings';
import {
  Character,
  CharacterIcons,
  SetSelectedSearchTabIndex,
  SetTeamCharacters,
} from '@types';

import { SearchPanel } from './SearchPanel';
import { SearchTabLabel } from './SearchTabLabel';
import { SearchTabRadio } from './SearchTabRadio';

type Props = {
  selectedSearchTabIndex: number;
  setSelectedSearchTabIndex: SetSelectedSearchTabIndex;
  team1Characters: Character[];
  setTeam1Characters: SetTeamCharacters;
  characterIcons: CharacterIcons;
};

export const CharacterSearch = (props: Props) => {
  const {
    selectedSearchTabIndex,
    setSelectedSearchTabIndex,
    team1Characters,
    setTeam1Characters,
    characterIcons,
  } = props;

  return (
    <>
      <div className="chara-search-tab-wrap">
        {NUMBER_OF_SEARCH_TAB.map((labelName, index) => {
          return (
            <SearchTabRadio
              key={'searchRadio' + index}
              index={index + 1}
              isChecked={index === 0}
            />
          );
        })}
        <div className="chara-search-tab-area">
          {NUMBER_OF_SEARCH_TAB.map((labelName, index) => {
            return (
              <SearchTabLabel
                key={'searchTabLabel' + index}
                index={index + 1}
                labelName={labelName}
                setSelectedSearchTabIndex={setSelectedSearchTabIndex}
              />
            );
          })}
        </div>
        <div className="chara-search-panel-area">
          {NUMBER_OF_SEARCH_TAB.map((labelName, index) => {
            return (
              <SearchPanel
                key={'searchPanel' + index}
                index={index + 1}
                teamCharacters={team1Characters}
                setTeamCharacters={setTeam1Characters}
                characterIcons={characterIcons}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
