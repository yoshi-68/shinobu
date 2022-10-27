import { Component } from "react";
import { characterData, charactersData } from "types";

import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from "./settings";

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
                        <input type="button" value="ALL" />
                        <input type="button" value={AVANT_GUARD} />
                        <input type="button" value={MIDDLE_GUARD} />
                        <input type="button" value={REAR_GUARD} />
                    </div>
                    <div id="charaSelect" className="charaSelectBox">
                        <div id="allChara" className="charaSelect">
                            {this.state.charactersData.allCharaData.map(
                                (element: characterData) => (
                                    <input
                                        type="image"
                                        className="charaIcon"
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
