import '@/sass/character-search.sass';
import { NUMBER_OF_SEARCH_TAB } from '@/settings';
import {
  CharacterIcons,
  SetSelectedSearchTabIndex,
  SetTeams,
  Teams,
} from '@types';

import { SearchPanel } from './SearchPanel';
import { SearchTabLabel } from './SearchTabLabel';
import { SearchTabRadio } from './SearchTabRadio';

type Props = {
  selectedSearchTabIndex: number;
  setSelectedSearchTabIndex: SetSelectedSearchTabIndex;
  teams: Teams;
  setTeams: SetTeams;
  characterIcons: CharacterIcons;
};

export const CharacterSearch = (props: Props) => {
  const {
    selectedSearchTabIndex,
    setSelectedSearchTabIndex,
    teams,
    setTeams,
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
                selectedSearchTabIndex={selectedSearchTabIndex}
                team={teams[index]}
                setTeams={setTeams}
                characterIcons={characterIcons}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
