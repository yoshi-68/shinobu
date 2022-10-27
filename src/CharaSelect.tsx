import { Component } from "react";
import { charaData } from "types";

interface Props {}

class CharaSelect extends Component<{}, { allChara: charaData[] }> {
    /* @ts-ignore */
    constructor(props: Props) {
        super(props);
        this.state = {
            allChara: [
                {
                    id: 0,
                    name: "",
                    iconPath: "",
                    type: "",
                    position: 0,
                },
            ],
        };
    }

    componentDidMount() {
        window.electron.getCharaData().then((res: charaData[]) => {
            this.setState({
                allChara: res,
            });
        });
    }

    render() {
        return (
            <>
                <div id="charaSelect">
                    <div id="allChara">
                        {this.state.allChara.map((element: charaData) => (
                            <span>
                                <input
                                    type="image"
                                    className="charaIcon"
                                    src={element.iconPath}
                                    alt={element.name}
                                    title={element.name}
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default CharaSelect;
