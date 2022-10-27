import * as cheerio from "cheerio";
import * as appLogger from "electron-log";
import * as superagent from "superagent";
import { characterData, charactersData } from "types";

import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from "../../settings";
import { GET_CHARA_DATA_URL, USER_AGENT } from "../../settings";

const setCharaData = (attr: cheerio.Element, array: characterData[]) => {
    array.push({
        id: Number(attr["value"]),
        name: attr["data-name"],
        iconPath: attr["data-img"],
        type: attr["data-type"],
        position: attr["data-position"],
    });
};

const createCharaData = (charaRawData: cheerio.Cheerio): charactersData => {
    const allCharaData: characterData[] = [];
    const avantGuard: characterData[] = [];
    const middleGuard: characterData[] = [];
    const rearGuard: characterData[] = [];

    charaRawData.each((index: number, element: cheerio.Element) => {
        const attr = element["attribs"];
        setCharaData(attr, allCharaData);
        
        const position = attr["data-position"];
        if (position === AVANT_GUARD) {
            setCharaData(attr, avantGuard);
        } else if (position === MIDDLE_GUARD) {
            setCharaData(attr, middleGuard);
        } else if (position === REAR_GUARD) {
            setCharaData(attr, rearGuard);
        }
    });

    return { allCharaData, avantGuard, middleGuard, rearGuard };
};

export const getCharaData = async (): Promise<charactersData> => {
    appLogger.info("キャラデータの取得を開始");
    let characterData: charactersData = {
        allCharaData: [],
        avantGuard: [],
        middleGuard: [],
        rearGuard: [],
    };
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
            characterData = createCharaData(charaRawData);
        })
        .catch((error) => {
            appLogger.error("エラーが発生:", error);
        });
    appLogger.info("キャラデータの取得を完了");

    return characterData;
};
