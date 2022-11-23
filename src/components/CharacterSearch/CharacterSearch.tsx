import '../../css/style.css';
import { NUMBER_OF_SEARCH_TAB } from '../../settings';

type SearchRadioProps = {
  index: number;
  isChecked: boolean;
};

const SearchRadio = (props: SearchRadioProps) => {
  const { index, isChecked } = props;
  return (
    <input
      id={'chara_search_tab' + index}
      type="radio"
      name="chara_search_tab_btn"
      defaultChecked={isChecked}
    />
  );
};

type SearchTabLabelProps = {
  index: number;
  element: string;
};

const SearchTabLabel = (props: SearchTabLabelProps) => {
  const { index, element } = props;
  return (
    <label
      className={'chara-search-tab' + index + '-label'}
      htmlFor={'chara_search_tab' + index}
    >
      {element}
    </label>
  );
};

type SearchPanelProps = {
  index: number;
  element: string;
};

const SearchPanel = (props: SearchPanelProps) => {
  const { index, element } = props;
  return (
    <div
      id={'chara_search_tab' + index}
      className="chara-search-tab-panel chara-search-rows"
    >
      {element}
    </div>
  );
};

const CharaSearch = () => {
  return (
    <>
      <div className="chara-search-tab-wrap">
        {NUMBER_OF_SEARCH_TAB.map((element, index) => {
          return (
            <SearchRadio
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
                element={element}
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

export default CharaSearch;
