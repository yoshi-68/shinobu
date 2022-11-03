import { useEffect, useState } from 'react';
import { CharacterData, CharactersData } from 'types';

import '../css/CharaSelect.css';
import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from '../settings';

const showCharaList = (key: string, charaData?: CharacterData[]) => {
    return (
        <div id={key + 'characters'}>
            {charaData?.map((element) => (
                <input
                    type="image"
                    key={key + element.id}
                    className="chara-icon"
                    src={element.iconPath}
                    alt={element.name}
                    title={element.name}
                />
            ))}
        </div>
    );
};

const CharaSelect = () => {
    const [charactersData, setCharactersData] = useState({} as CharactersData);

    useEffect(() => {
        window.electron.getCharaData().then((res?: CharactersData) => {
            setCharactersData(res);
        });
    }, []);

    return (
        <>
            <div className="chara-select-tab-wrap">
                <input
                    id="chara_select_tab1"
                    type="radio"
                    name="tab_btn"
                    defaultChecked
                />
                <input id="chara_select_tab2" type="radio" name="tab_btn" />
                <input id="chara_select_tab3" type="radio" name="tab_btn" />
                <input id="chara_select_tab4" type="radio" name="tab_btn" />
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
                        {showCharaList(
                            'all_guard_',
                            charactersData?.allCharaData
                        )}
                    </div>
                    <div
                        id="chara_select_tab2"
                        className="chara-select-tab-panel chara-select-rows"
                    >
                        {showCharaList(
                            'avant_guard_',
                            charactersData?.avantGuard
                        )}
                    </div>
                    <div
                        id="chara_select_tab3"
                        className="chara-select-tab-panel chara-select-rows"
                    >
                        {showCharaList(
                            'middle_guard_',
                            charactersData?.middleGuard
                        )}
                    </div>
                    <div
                        id="chara_select_tab4"
                        className="chara-select-tab-panel chara-select-rows"
                    >
                        {showCharaList('rearGuard_', charactersData?.rearGuard)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CharaSelect;
