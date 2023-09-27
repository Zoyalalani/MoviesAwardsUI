import { TitleGenre } from "./title-metadata";
import { Awards } from "./title-metadata";
import { StoryLines } from "./title-metadata";
import { OtherNames } from "./title-metadata";
import { TitleParticipant } from "./title-metadata";

export interface Title {
    titleId: number,
    titleName: string,
    titleNameSortable: string,
    titleTypeId: number,
    releaseYear: number,
    processedDateTimeUTC: Date,
    titleGenres: TitleGenre[],
    awards: Awards[],
    storyLines: StoryLines[],
    otherNames: OtherNames[],
    titleParticipants: TitleParticipant[]
}
