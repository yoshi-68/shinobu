import { Component } from "react";
import { characterData, charactersData } from "types";

import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from "../settings";

interface Props {}

class CharaSelect extends Component<{}, { charactersData: charactersData }> {
    /* @ts-ignore */
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
                <div id="charaSelect">
                    <div id="charaType">
                    <label><input type="radio" name="guardType" />全て</label>
                    <label><input type="radio" name="guardType" />{AVANT_GUARD}</label>
                    <label><input type="radio" name="guardType" />{MIDDLE_GUARD}</label>
                    <label><input type="radio" name="guardType" />{REAR_GUARD}</label>
                    </div>
                    <div id="charaSelect" className="chara-select-box">
                        <div id="allChara" className="chara-select-rows">
                            {this.state.charactersData.allCharaData.map(
                                (element: characterData) => (
                                    <input
                                        type="image"
                                        className="chara-icon"
                                        src={element.iconPath}
                                        alt={element.name}
                                        title={element.name}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CharaSelect;
