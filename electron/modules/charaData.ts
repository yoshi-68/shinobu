import { Character, CharacterGroup } from '@types';
import * as cheerio from 'cheerio';
import * as appLogger from 'electron-log';
import * as superagent from 'superagent';

import { BACKWARD_GUARD, FORWARD_GUARD, MIDDLE_GUARD } from '../settings';
import { GET_CHARA_DATA_URL, USER_AGENT } from '../settings';

const setCharaData = (
  attr: cheerio.Element,
  characters: Character[],
  orderFormation: number
) => {
  characters.push({
    id: attr['value'],
    name: attr['data-name'],
    iconPath: attr['data-img'],
    guardType: attr['data-position'],
    orderFormation,
  });
};

const createCharaData = (charaRawData: cheerio.Cheerio) => {
  const allTab: Character[] = [];
  const forwardTab: Character[] = [];
  const middleTab: Character[] = [];
  const backwardTab: Character[] = [];

  charaRawData.each((index, element) => {
    const attr = element['attribs'];
    const orderFormation = index + 1;

    setCharaData(attr, allTab, orderFormation);

    const guardType = attr['data-position'];
    if (guardType === FORWARD_GUARD) {
      setCharaData(attr, forwardTab, orderFormation);
    } else if (guardType === MIDDLE_GUARD) {
      setCharaData(attr, middleTab, orderFormation);
    } else if (guardType === BACKWARD_GUARD) {
      setCharaData(attr, backwardTab, orderFormation);
    }
  });

  return { allTab, forwardTab, middleTab, backwardTab };
};

export const getCharaData = async (): Promise<CharacterGroup> => {
  appLogger.info('キャラデータの取得を開始');
  let characterGroup: CharacterGroup;
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

      // console.log('charaRowData', charaRawData);

      characterGroup = createCharaData(charaRawData);
    })
    .catch((error) => {
      appLogger.error('エラーが発生:', error);
    });
  appLogger.info('キャラデータの取得を完了');

  return characterGroup;
};
