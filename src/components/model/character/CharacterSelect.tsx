import '@/sass/character-select.sass';
import { BACKWARD_GUARD, FORWARD_GUARD, MIDDLE_GUARD } from '@/settings';
import { CharacterGroup, SetTeams } from '@types';

import { CharacterIcon } from './CharacterIcons';

type CharacterSelectProps = {
  selectedSearchTabIndex: number;
  characterGroup: Partial<CharacterGroup>;
  setTeams: SetTeams;
};

export const CharacterSelect = (props: CharacterSelectProps) => {
  const { selectedSearchTabIndex, characterGroup, setTeams } = props;

  const allTab = characterGroup.allTab;
  const forwardTab = characterGroup.forwardTab;
  const middleTab = characterGroup.middleTab;
  const backwardTab = characterGroup.backwardTab;

  return (
    <>
      <div className="chara-select-tab-wrap">
        <input
          id="chara_select_tab1"
          type="radio"
          name="chara_select_tab_btn"
          defaultChecked
        />
        <input
          id="chara_select_tab2"
          type="radio"
          name="chara_select_tab_btn"
        />
        <input
          id="chara_select_tab3"
          type="radio"
          name="chara_select_tab_btn"
        />
        <input
          id="chara_select_tab4"
          type="radio"
          name="chara_select_tab_btn"
        />
        <div className="chara-select-tab-area">
          <label
            className="chara-select-tab1-label"
            htmlFor="chara_select_tab1"
          >
            全て
          </label>
          <label
            className="chara-select-tab2-label"
            htmlFor="chara_select_tab2"
          >
            {FORWARD_GUARD}
          </label>
          <label
            className="chara-select-tab3-label"
            htmlFor="chara_select_tab3"
          >
            {MIDDLE_GUARD}
          </label>
          <label
            className="chara-select-tab4-label"
            htmlFor="chara_select_tab4"
          >
            {BACKWARD_GUARD}
          </label>
        </div>
        <div className="chara-select-panel-area">
          <div
            id="chara_select_tab1"
            className="chara-select-tab-panel chara-select-rows"
          >
            <div id={'allGuardsCharacters'}>
              {allTab?.map((charaData, index) => (
                <CharacterIcon
                  key={`charactersIcon${index}`}
                  charaData={charaData}
                  selectedSearchTabIndex={selectedSearchTabIndex}
                  setTeams={setTeams}
                />
              ))}
            </div>
          </div>
          <div
            id="chara_select_tab2"
            className="chara-select-tab-panel chara-select-rows"
          >
            {forwardTab?.map((charaData, index) => (
              <CharacterIcon
                key={'charactersIcon' + index}
                charaData={charaData}
                selectedSearchTabIndex={selectedSearchTabIndex}
                setTeams={setTeams}
              />
            ))}
          </div>
          <div
            id="chara_select_tab3"
            className="chara-select-tab-panel chara-select-rows"
          >
            {middleTab?.map((charaData, index) => (
              <CharacterIcon
                key={'charactersIcon' + index}
                charaData={charaData}
                selectedSearchTabIndex={selectedSearchTabIndex}
                setTeams={setTeams}
              />
            ))}
          </div>
          <div
            id="chara_select_tab4"
            className="chara-select-tab-panel chara-select-rows"
          >
            {backwardTab?.map((charaData, index) => (
              <CharacterIcon
                key={'charactersIcon' + index}
                charaData={charaData}
                selectedSearchTabIndex={selectedSearchTabIndex}
                setTeams={setTeams}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
