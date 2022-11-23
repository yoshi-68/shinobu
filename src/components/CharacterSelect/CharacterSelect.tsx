import { useEffect, useState } from 'react';
import { Character, Guards } from 'types';

import '../../css/style.css';
import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from '../../settings';
import { CharactersIcon } from './CharacterIcons';

export const CharacterSelect = () => {
  const [guards, setGuards] = useState<Guards>();

  useEffect(() => {
    window.electron.getCharaData().then((res?: Guards) => {
      setGuards(res);
    });
  }, []);

  const allGuards = guards?.allGuards.entries()
    ? Array.from(guards.allGuards.entries())
    : [];

  const avantGuards = guards?.avantGuards.entries()
    ? Array.from(guards.avantGuards.entries())
    : [];

  const middleGuards = guards?.middleGuards.entries()
    ? Array.from(guards.middleGuards.entries())
    : [];

  const rearGuards = guards?.rearGuards.entries()
    ? Array.from(guards.rearGuards.entries())
    : [];

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
            {AVANT_GUARD}
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
            {REAR_GUARD}
          </label>
        </div>
        <div className="chara-select-panel-area">
          <div
            id="chara_select_tab1"
            className="chara-select-tab-panel chara-select-rows"
          >
            <div id={'allGuards' + 'Characters'}>
              {allGuards.map((v, i) => (
                <CharactersIcon
                  key={'charactersIcon' + i}
                  charaName={v[1].name}
                  iconPath={v[1].iconPath}
                ></CharactersIcon>
              ))}
            </div>
          </div>
          <div
            id="chara_select_tab2"
            className="chara-select-tab-panel chara-select-rows"
          >
            {avantGuards.map((v, i) => (
              <CharactersIcon
                key={'charactersIcon' + i}
                charaName={v[1].name}
                iconPath={v[1].iconPath}
              ></CharactersIcon>
            ))}
          </div>
          <div
            id="chara_select_tab3"
            className="chara-select-tab-panel chara-select-rows"
          >
            {middleGuards.map((v, i) => (
              <CharactersIcon
                key={'charactersIcon' + i}
                charaName={v[1].name}
                iconPath={v[1].iconPath}
              ></CharactersIcon>
            ))}
          </div>
          <div
            id="chara_select_tab4"
            className="chara-select-tab-panel chara-select-rows"
          >
            {rearGuards.map((v, i) => (
              <CharactersIcon
                key={'charactersIcon' + i}
                charaName={v[1].name}
                iconPath={v[1].iconPath}
              ></CharactersIcon>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
