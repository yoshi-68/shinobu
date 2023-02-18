/**
 * キャラクタ情報
 */
export type Character = {
  id: number;
  name: string;
  iconPath: string;
  guardType: string;
  orderFormation: number;
};

/**
 * 選択できるキャラクタ情報
 * 前衛・中衛・後衛・全てのグループに分ける。
 */
export type CharacterGroup = {
  allTab: Character[];
  forwardTab: Character[];
  middleTab: Character[];
  backwardTab: Character[];
};

/**
 * 防衛突破編成の結果
 */
export type SearchResultOrganizations = {
  num_of_results: number;
  result?: [
    {
      id_data: string;
      comment_data: string;
      good: string;
      bad: string;
      update_datetime: string;
      atk_id_1: string;
      def_id_1: string;
      star_attack1: string;
      star_defense1: string;
      equip_attack1: string;
      equip_defense1: string;
      atk_id_2: string;
      def_id_2: string;
      star_attack2: string;
      star_defense2: string;
      equip_attack2: string;
      equip_defense2: string;
      atk_id_3: string;
      def_id_3: string;
      star_attack3: string;
      star_defense3: string;
      equip_attack3: string;
      equip_defense3: string;
      atk_id_4: string;
      def_id_4: string;
      star_attack4: string;
      star_defense4: string;
      equip_attack4: string;
      equip_defense4: string;
      atk_id_5: string;
      def_id_5: string;
      star_attack5: string;
      star_defense5: string;
      equip_attack5: string;
      equip_defense5: string;
    }
  ];
};

/**
 * 防衛突破編成の検索条件
 */
export type FetchOrganizationsRequest = {
  time_limit: string;
  sort_by: string;
  page_num: number;
  atk_length: number;
  def_length: number;
  'data_def_search[Search_DefenceChar1]'?: number;
  'data_def_search[Search_DefenceChar2]'?: number;
  'data_def_search[Search_DefenceChar3]'?: number;
  'data_def_search[Search_DefenceChar4]'?: number;
  'data_def_search[Search_DefenceChar5]'?: number;
};
