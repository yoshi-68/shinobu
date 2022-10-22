import * as cheerio from "cheerio";
import * as ElectronLog from "electron-log";
import * as superagent from "superagent";

import { toOneline } from "./format";
import { charaDataURL, userAgent } from "../settings";

export interface ICharaData {
    id: number;
    name: string;
    imagePath: string;
    type: string;
    position: number;
}

export const getCharaData = (
    appLogger: ElectronLog.ElectronLog,
    charactersData: Array<ICharaData>
): boolean => {
    appLogger.info("キャラデータの取得を開始");
    superagent
        .get(charaDataURL)
        .set("User-Agent", userAgent)
        .end((err, res: superagent.Response) => {
            if (!res.ok) {
                appLogger.error("エラーが発生:", err);
                appLogger.error("キャラデータの取得に失敗");
                return false;
            }

            const $ = cheerio.load(res.text);
            const charaRawData = $("#char_selected").children("input");
            charaRawData.each((index, element) => {
                const attr = element["attribs"];
                const charaData = {
                    id: attr["value"],
                    name: attr["data-name"],
                    imagePath: attr["data-img"],
                    type: attr["data-type"],
                    position: attr["data-position"],
                };

                charactersData.push(charaData);
            });
            appLogger.info("キャラデータ:", toOneline(charactersData));
            appLogger.info("キャラデータの取得を完了");
        });

    return true;
};
