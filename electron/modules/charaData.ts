import * as cheerio from "cheerio";
import * as ElectronLog from "electron-log";
import * as superagent from "superagent";
import { charaData } from "types";

import { charaDataURL, userAgent } from "../settings";
import { toOneLine } from "./format";

export const getCharaData = (
    appLogger: ElectronLog.ElectronLog,
    charactersData: Array<charaData>
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
                    id: Number(attr["value"]),
                    name: attr["data-name"],
                    iconPath: attr["data-img"],
                    type: attr["data-type"],
                    position: attr["data-position"],
                };

                charactersData.push(charaData);
            });
            appLogger.info("キャラデータ:", toOneLine(charactersData));
            appLogger.info("キャラデータの取得を完了");
        });

    return true;
};
