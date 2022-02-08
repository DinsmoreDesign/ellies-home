import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface INewsArticle {
    title: string;
    url: string;
}

export interface INewsState {
    articles: INewsArticle[];
}

const initialState: INewsState = {
    articles: [
        {
            title: 'Fox 4 News - Death Investigate in Punta Gorda',
            url: 'http://www.fox4now.com/news/death-investigation-in-punta-gorda'
        },
        {
            title: 'WINK News - CCSO: Woman’s body identified, death is suspicious',
            url: 'http://www.winknews.com/2016/01/26/ccso-womans-body-identified-death-is-suspicious/'
        },
        {
            title: 'News Press - Charlotte County files murder charges in Punta Gorda death',
            url: 'http://www.news-press.com/story/news/crime/2016/05/20/charlotte-county-files-murder-charges-punta-gorda-death/84653292/'
        }
    ]
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addArticle: (state, action: PayloadAction<INewsArticle>) => {
            state.articles.push(action.payload);
        }
    }
});

export const selectNewsArticles = (state: RootState) => state.news.articles;

export const { addArticle } = newsSlice.actions;

export default newsSlice.reducer;
