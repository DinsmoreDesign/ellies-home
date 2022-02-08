import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IHomeState {
    title: string;
    subtitle: string;
    description: string[];
}

const initialState: IHomeState = {
    title: 'In Loving Memory of Eleanor Josephine Sciacca-Jones',
    subtitle: 'From the Father of Ellie Jo',
    description: [
        `My daughter whose name was Eleanor Josephine Sciacca (Maiden name) she was named after my mother and my
        grandmother.`,
        `She was my first born child and truly the light of my life.`,
        `I was a single dad and raised her largely on my own but never did I ever feel like she was a burden,
        quite the opposite.`,
        `Ellie-jo as we called her was the warmest, happiest person I ever knew, she had a smile that lit up the
        night, she melted the coldest ice with her love.`,
        `She never knew hatred because she was always so loving, she never was a stranger to anyone nor was
        anyone ever a stranger to her as she always saw everyone she ever met as a new friend.`,
        `Ellie was the kind of person everyone loved to be around and gravitated to.`,
        `My precious daughter always saw the good in everyone even when there was very little good in the person
        as is the case with the man who murdered her.`,
        `The person who murdered my daughter was her first high school love who she met when she was 14 years
        old.`,
        `Over the past holiday season her murderer had reached out to her and with the usual apologies and false
        promises of most abusers he had sweet talked her into going to see him after the New Year.`,
        `Agreeing to meet with him, against our warnings of his dangerous temper she went to meet with him on the
        afternoon of January 4, 2016 and that was the last any of us heard from my daughter ever again.`,
        `Her body was found 3 weeks later badly decomposed and largely consumed by animals having been buried in
        a remote wooded area in a shallow grave.`,
        `After months of investigation, search warrants and interrogations it was determined that he had taken my
        daughter to his apartment gaining her trust by stating that his live in pregnant fiancé would be there.`,
        `No one knows for sure what took place next but it's suspected that, despite his fiancé being there,
        he had wanted something more then she was willing to give and my daughter ended up in the fight of her
        life where this man strangled my daughter to death and he and his fiancé drove my daughter's lifeless
        body 22 miles and dumped her into a shallow grave, where she was left to rot.`,
        `He later confessed to luring her to his apartment where he and his girlfriend beat her and he strangled
        her to death.`
    ]
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        updateSubtitle: (state, action: PayloadAction<string>) => {
            state.subtitle = action.payload;
        },
        addDescription: (state, action: PayloadAction<string>) => {
            state.description.push(action.payload);
        }
    }
});

export const { updateTitle, updateSubtitle, addDescription } = homeSlice.actions;

export default homeSlice.reducer;
