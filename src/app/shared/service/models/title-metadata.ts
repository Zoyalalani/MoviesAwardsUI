export interface Genre {
    id: number
    name: string
}

export interface TitleGenre {
    id: number;
    titleId: number;
    genreId: number;
    genre: Genre;
}

export interface TitleParticipant {
    id: number;
    titleId: number;
    participantId: number;
    isKey: boolean;
    roleType: string;
    isOnScreen: boolean;
    participant: Participant;
}

export interface Awards {
    id: number;
    titleId: number,
    awardWon: string,
    awardYear: number,
    awardCompany: string,
    awardCategory: string
}

export interface StoryLines {
    id: number
    titleId: number,
    type: string,
    language: string,
    description: string
}

export interface OtherNames {
    id: number,
    titleId: number,
    titleNameLanguage: string,
    titleNameType: string;
    titleNameSortable: string,
    titleName: string
}

export interface Participant {
    id: number,
    name: string,
    participantType: string,
}