import '../css/CharaSearch.css';

const CharaSearch = () => {
  return (
    <>
      <div className="chara-search-tab-wrap">
        <input
          id="chara_search_tab1"
          type="radio"
          name="chara_search_tab_btn"
          defaultChecked
        />
        <input
          id="chara_search_tab2"
          type="radio"
          name="chara_search_tab_btn"
        />
        <input
          id="chara_search_tab3"
          type="radio"
          name="chara_search_tab_btn"
        />
        <input
          id="chara_search_tab4"
          type="radio"
          name="chara_search_tab_btn"
        />
        <input
          id="chara_search_tab5"
          type="radio"
          name="chara_search_tab_btn"
        />
        <div className="chara-search-tab-area">
          <label
            className="chara-search-tab1-label"
            htmlFor="chara_search_tab1"
          >
            チーム1
          </label>
          <label
            className="chara-search-tab2-label"
            htmlFor="chara_search_tab2"
          >
            チーム2
          </label>
          <label
            className="chara-search-tab3-label"
            htmlFor="chara_search_tab3"
          >
            チーム3
          </label>
          <label
            className="chara-search-tab4-label"
            htmlFor="chara_search_tab4"
          >
            チーム4
          </label>
          <label
            className="chara-search-tab5-label"
            htmlFor="chara_search_tab5"
          >
            チーム5
          </label>
        </div>
        <div className="chara-search-panel-area">
          <div
            id="chara_search_tab1"
            className="chara-search-tab-panel chara-search-rows"
          >
            1番
          </div>
          <div
            id="chara_search_tab2"
            className="chara-search-tab-panel chara-search-rows"
          >
            2番
          </div>
          <div
            id="chara_search_tab3"
            className="chara-search-tab-panel chara-search-rows"
          >
            3番
          </div>
          <div
            id="chara_search_tab4"
            className="chara-search-tab-panel chara-search-rows"
          >
            4番
          </div>
          <div
            id="chara_search_tab5"
            className="chara-search-tab-panel chara-search-rows"
          >
            5番
          </div>
        </div>
      </div>
    </>
  );
};

export default CharaSearch;
