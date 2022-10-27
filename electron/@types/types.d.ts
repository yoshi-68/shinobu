export type characterData = {
    id: number;
    name: string;
    iconPath: string;
    type: string;
    position: number;
};

export type charactersData = {
    allCharaData: characterData[];
    avantGuard: characterData[];
    middleGuard: characterData[];
    rearGuard: characterData[];
};
