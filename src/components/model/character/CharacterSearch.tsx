import { SetSelectedSearchTabIndex } from 'types';

import '../../../sass/character-search.sass';
import { NUMBER_OF_SEARCH_TAB } from '../../../settings';
import { SearchPanel } from './SearchPanel';
import { SearchTabLabel } from './SearchTabLabel';
import { SearchTabRadio } from './SearchTabRadio';

type Props = {
  selectedSearchTabIndex: number;
  setSelectedSearchTabIndex: SetSelectedSearchTabIndex;
};

export const CharaSearch = (props: Props) => {
  return (
    <>
      <div className="chara-search-tab-wrap">
        {NUMBER_OF_SEARCH_TAB.map((element, index) => {
          return (
            <SearchTabRadio
              key={'searchRadio' + index}
              index={index + 1}
              isChecked={index === 0}
            />
          );
        })}
        <div className="chara-search-tab-area">
          {NUMBER_OF_SEARCH_TAB.map((element, index) => {
            return (
              <SearchTabLabel
                key={'searchTabLabel' + index}
                index={index + 1}
                labelName={element}
                setSelectedSearchTabIndex={props.setSelectedSearchTabIndex}
              />
            );
          })}
        </div>
        <div className="chara-search-panel-area">
          {NUMBER_OF_SEARCH_TAB.map((element, index) => {
            return (
              <SearchPanel
                key={'searchPanel' + index}
                index={index + 1}
                element={element}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
