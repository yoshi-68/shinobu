import '../css/style.css';
import { NUMBER_OF_SEARCH_TAB } from '../settings';

const searchPanelJsx = () => {
  return (
    <div className="chara-search-panel-area">
      {NUMBER_OF_SEARCH_TAB.map((element, index) => {
        return (
          <div
            key={index}
            id={'chara_search_tab' + (index + 1)}
            className="chara-search-tab-panel chara-search-rows"
          >
            {element}
          </div>
        );
      })}
    </div>
  );
};

const searchTabLabelJsx = () => {
  return (
    <div className="chara-search-tab-area">
      {NUMBER_OF_SEARCH_TAB.map((element, index) => {
        return (
          <label
            key={index}
            className={'chara-search-tab' + (index + 1) + '-label'}
            htmlFor={'chara_search_tab' + (index + 1)}
          >
            {element}
          </label>
        );
      })}
    </div>
  );
};

const searchRadioJsx = () => {
  return NUMBER_OF_SEARCH_TAB.map((element, index) => {
    let isChecked = false;
    if (index === 0) {
      isChecked = true;
    }
    return (
      <input
        key={index}
        id={'chara_search_tab' + (index + 1)}
        type="radio"
        name="chara_search_tab_btn"
        defaultChecked={isChecked}
      />
    );
  });
};

const CharaSearch = () => {
  return (
    <>
      <div className="chara-search-tab-wrap">
        {searchRadioJsx()}
        {searchTabLabelJsx()}
        {searchPanelJsx()}
      </div>
    </>
  );
};

export default CharaSearch;
