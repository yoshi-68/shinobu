import * as cheerio from "cheerio";
import * as appLogger from "electron-log";
import * as superagent from "superagent";
import { charaData } from "types";

import { charaDataURL, userAgent } from "../../settings";

export const getCharaData = async () => {
    appLogger.info("キャラデータの取得を開始");
    const characterData: charaData[] = [];

    await superagent
        .get(charaDataURL)
        .set("User-Agent", userAgent)
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
            charaRawData.each((index, element) => {
                const attr = element["attribs"];
                characterData.push({
                    id: Number(attr["value"]),
                    name: attr["data-name"],
                    iconPath: attr["data-img"],
                    type: attr["data-type"],
                    position: attr["data-position"],
                });
            });

            return characterData;
        })
        .catch((error) => {
            appLogger.error("エラーが発生:", error);
        });
    appLogger.info("キャラデータの取得を完了");

    return characterData;
};
