import * as cheerio from "cheerio";
import * as appLogger from "electron-log";
import * as superagent from "superagent";
import { CharacterData, CharactersData } from "types";

import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from "../../settings";
import { GET_CHARA_DATA_URL, USER_AGENT } from "../../settings";

const setCharaData = (
    attr: cheerio.Element,
    array: CharacterData[],
    orderFormation: number
) => {
    array.push({
        id: Number(attr["value"]),
        name: attr["data-name"],
        iconPath: attr["data-img"],
        guardType: attr["data-position"],
        orderFormation,
    });
};

const createCharaData = (charaRawData: cheerio.Cheerio): CharactersData => {
    const allCharaData: CharacterData[] = [];
    const avantGuard: CharacterData[] = [];
    const middleGuard: CharacterData[] = [];
    const rearGuard: CharacterData[] = [];

    charaRawData.each((index: number, element: cheerio.Element) => {
        const attr = element["attribs"];
        setCharaData(attr, allCharaData, ++index);

        const guardType = attr["data-position"];
        if (guardType === AVANT_GUARD) {
            setCharaData(attr, avantGuard, ++index);
        } else if (guardType === MIDDLE_GUARD) {
            setCharaData(attr, middleGuard, ++index);
        } else if (guardType === REAR_GUARD) {
            setCharaData(attr, rearGuard, ++index);
        }
    });

    return { allCharaData, avantGuard, middleGuard, rearGuard };
};

export const getCharaData = async (): Promise<CharactersData> => {
    appLogger.info("キャラデータの取得を開始");
    let charactersData: CharactersData;
    await superagent
        .get(GET_CHARA_DATA_URL)
        .set("User-Agent", USER_AGENT)
        .then((res: superagent.Response) => {
            if (!res.ok) {
                appLogger.error(
                    "キャラデータの取得に失敗:",
                    res.status,
                    res.headers
                );
                return;
            }

            const $ = cheerio.load(res.text);
            const charaRawData = $("#char_selected").children("input");
            charactersData = createCharaData(charaRawData);
        })
        .catch((error) => {
            appLogger.error("エラーが発生:", error);
        });
    appLogger.info("キャラデータの取得を完了");

    return charactersData;
};
