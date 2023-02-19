import {
  Character,
  FetchOrganizationsRequest,
  SearchResultOrganizations,
} from '@types';
import * as appLogger from 'electron-log';
import * as superagent from 'superagent';

import { FEATCH_ORGANIZATIONS, USER_AGENT } from '../settings';
import { toOneLine } from './format';

/**
 * 防衛突破編成の検索のリクエストを生成する。
 *
 * @param {Character[]} teamCharacters 検索する防衛突破編成
 * @param {number} currentPage 検索するページ番号
 * @param {string} sortType ソートの種類
 * @returns リクエスト
 */
const createRequest = (
  teamCharacters: Character[],
  currentPage: number,
  sortType: string
) => {
  const request: FetchOrganizationsRequest = {
    time_limit: 'all',
    sort_by: sortType,
    page_num: currentPage - 1,
    atk_length: 0,
    def_length: teamCharacters.length,
  };

  teamCharacters.forEach((chara, index) => {
    request['data_def_search[Search_DefenceChar' + (index + 1) + ']'] =
      chara.id;
  });

  return request;
};

/**
 * 防衛突破編成の検索のリクエストを生成する。
 *
 * @param {Character[]} teamCharacters 検索する防衛突破編成
 * @param {number} currentPage 検索するページ番号
 * @param {string} sortType ソートの種類
 * @returns 防衛突破編成の検索結果
 */
export const fetchOrganizations = async (
  teamCharacters: Character[],
  currentPage: number,
  sortType: string
): Promise<SearchResultOrganizations> => {
  const request = createRequest(teamCharacters, currentPage, sortType);

  appLogger.log('キャラクターの編成検索を開始：', toOneLine(request));
  const { ok, status, headers, body } = await superagent
    .post(FEATCH_ORGANIZATIONS)
    .set('User-Agent', USER_AGENT)
    .type('form')
    .send(request);

  if (!ok) {
    appLogger.error('キャラデータの取得に失敗:', status, headers);
    return;
  }
  appLogger.log('検索の返却内容：', toOneLine(body));

  return body;
};
