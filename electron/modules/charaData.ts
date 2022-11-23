import * as cheerio from 'cheerio';
import * as appLogger from 'electron-log';
import * as superagent from 'superagent';
import { Character, Characters, Guards } from 'types';

import { AVANT_GUARD, MIDDLE_GUARD, REAR_GUARD } from '../../settings';
import { GET_CHARA_DATA_URL, USER_AGENT } from '../../settings';

const setCharaData = (
  attr: cheerio.Element,
  characters: Characters,
  orderFormation: number
) => {
  const character = {
    name: attr['data-name'],
    iconPath: attr['data-img'],
    guardType: attr['data-position'],
    orderFormation,
  };
  characters.set(Number(attr['value']), character);
};

const createCharaData = (charaRawData: cheerio.Cheerio): Guards => {
  const allGuards: Characters = new Map<number, Character>();
  const avantGuards: Characters = new Map<number, Character>();
  const middleGuards: Characters = new Map<number, Character>();
  const rearGuards: Characters = new Map<number, Character>();

  charaRawData.each((index: number, element: cheerio.Element) => {
    const attr = element['attribs'];
    const orderFormation = index + 1;
    setCharaData(attr, allGuards, orderFormation);

    const guardType = attr['data-position'];
    if (guardType === AVANT_GUARD) {
      setCharaData(attr, avantGuards, orderFormation);
    } else if (guardType === MIDDLE_GUARD) {
      setCharaData(attr, middleGuards, orderFormation);
    } else if (guardType === REAR_GUARD) {
      setCharaData(attr, rearGuards, orderFormation);
    }
  });

  return { allGuards, avantGuards, middleGuards, rearGuards };
};

export const getCharaData = async (): Promise<Guards> => {
  appLogger.info('キャラデータの取得を開始');
  let guards: Guards;
  await superagent
    .get(GET_CHARA_DATA_URL)
    .set('User-Agent', USER_AGENT)
    .then((res: superagent.Response) => {
      if (!res.ok) {
        appLogger.error('キャラデータの取得に失敗:', res.status, res.headers);
        return;
      }

      const $ = cheerio.load(res.text);
      const charaRawData = $('#char_selected').children('input');
      guards = createCharaData(charaRawData);
    })
    .catch((error) => {
      appLogger.error('エラーが発生:', error);
    });
  appLogger.info('キャラデータの取得を完了');

  return guards;
};
