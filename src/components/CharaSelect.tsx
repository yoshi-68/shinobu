import { useEffect, useState } from 'react';
import { CharacterData, CharactersData } from 'types';

import '../css/CharaSelect.css';
import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from '../settings';

const showCharaList = (charaData: CharacterData[], key: string) => {
    return (
        <div id={key + 'characters'}>
            {charaData.map((element) => (
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
    const [charactersData, setCharactersData] = useState({
        allCharaData: [] as CharacterData[],
        avantGuard: [] as CharacterData[],
        middleGuard: [] as CharacterData[],
        rearGuard: [] as CharacterData[],
    });

    useEffect(() => {
        window.electron.getCharaData().then((res: CharactersData) => {
            setCharactersData(res);
        });
    }, []);

    return (
        <>
            <div className="tab_wrap">
                <input id="tab1" type="radio" name="tab_btn" defaultChecked />
                <input id="tab2" type="radio" name="tab_btn" />
                <input id="tab3" type="radio" name="tab_btn" />
                <input id="tab4" type="radio" name="tab_btn" />
                <div className="tab_area">
                    <label className="tab1_label" htmlFor="tab1">
                        全て
                    </label>
                    <label className="tab2_label" htmlFor="tab2">
                        {AVANT_GUARD}
                    </label>
                    <label className="tab3_label" htmlFor="tab3">
                        {MIDDLE_GUARD}
                    </label>
                    <label className="tab4_label" htmlFor="tab4">
                        {REAR_GUARD}
                    </label>
                </div>
                <div className="panel_area">
                    <div id="panel1" className="tab_panel chara-select-rows">
                        {showCharaList(
                            charactersData.allCharaData,
                            'all_guard_'
                        )}
                    </div>
                    <div id="panel2" className="tab_panel chara-select-rows">
                        {showCharaList(
                            charactersData.avantGuard,
                            'avant_guard_'
                        )}
                    </div>
                    <div id="panel3" className="tab_panel chara-select-rows">
                        {showCharaList(
                            charactersData.middleGuard,
                            'middle_guard_'
                        )}
                    </div>
                    <div id="panel4" className="tab_panel chara-select-rows">
                        {showCharaList(charactersData.rearGuard, 'rearGuard_')}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CharaSelect;
