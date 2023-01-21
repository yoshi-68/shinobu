export type CharacterId = number;
export type IconPath = string;

export type Character = {
  id: CharacterId;
  name: string;
  iconPath: IconPath;
  guardType: string;
  orderFormation: number;
};

export type Team = Character[];
export type Teams = Team[];

export type SetTeams = React.Dispatch<React.SetStateAction<Teams>>;

export type CharacterGroup = {
  allTab: Character[];
  forwardTab: Character[];
  middleTab: Character[];
  backwardTab: Character[];
};

type TabIndex = number;

export type SearchRequest = {
  selectedTabIndex: number;
  charactersSelectedTabs: Map<TabIndex, Characters[]>;
};

export type SetSelectedSearchTabIndex = React.Dispatch<
  React.SetStateAction<number>
>;

export type SetTeams = React.Dispatch<
  React.SetStateAction<TeamsCharacters>
>;

export type CharacterIcons = Map<CharacterId, IconPath>;

export type Organization = {
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
};

export type SearchResultOrganizations = {
  num_of_results: number;
  result?: Organization[];
};
