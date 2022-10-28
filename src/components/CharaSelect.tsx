import { Component } from "react";
import { characterData, charactersData } from "types";

import "../css/CharaSelect.css";
import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from "../settings";

interface Props {}

const showCharaList = (charaData: characterData[], key: string) => {
    return (
        <span>
            {charaData.map((element: characterData) => (
                <input
                    type="image"
                    key={"key" + element.id}
                    className="chara-icon"
                    src={element.iconPath}
                    alt={element.name}
                    title={element.name}
                />
            ))}
        </span>
    );
};

class CharaSelect extends Component<{}, { charactersData: charactersData }> {
    constructor(props: Props) {
        super(props);
        this.state = {
            charactersData: {
                allCharaData: [],
                avantGuard: [],
                middleGuard: [],
                rearGuard: [],
            },
        };
    }

    componentDidMount() {
        window.electron.getCharaData().then((res: charactersData) => {
            this.setState({
                charactersData: res,
            });
        });
    }

    render() {
        return (
            <>
                <div className="tab_wrap">
                    <input
                        id="tab1"
                        type="radio"
                        name="tab_btn"
                        defaultChecked
                    />
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
                        <div
                            id="panel1"
                            className="tab_panel chara-select-rows"
                        >
                            {showCharaList(
                                this.state.charactersData.allCharaData,
                                "allGuard_"
                            )}
                        </div>
                        <div
                            id="panel2"
                            className="tab_panel chara-select-rows"
                        >
                            {showCharaList(
                                this.state.charactersData.avantGuard,
                                "avantGuard_"
                            )}
                        </div>
                        <div
                            id="panel3"
                            className="tab_panel chara-select-rows"
                        >
                            {showCharaList(
                                this.state.charactersData.middleGuard,
                                "middleGuard_"
                            )}
                        </div>
                        <div
                            id="panel4"
                            className="tab_panel chara-select-rows"
                        >
                            {showCharaList(
                                this.state.charactersData.rearGuard,
                                "rearGuard_"
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CharaSelect;
