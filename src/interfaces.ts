export enum Endpoints {
    All = 'everything',
    Top = 'top-headlines',
    Sources = 'sources',
}

export type Source = Readonly<{
    id: string;
    name: string;
    description: string;
    category: string;
    language: string;
    country: string;
}>;

export type Arcticle = Readonly<{
    source: { id: string; name: string };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}>;

export type ResObject = Readonly<{
    sources: Array<Source>;
    articles: Array<Arcticle>;
    status: 'ok' | 'error';
    totalResults: number;
}>;

export type ResSrc = Pick<ResObject, 'status' | 'sources'>;
export type ResNews = Pick<ResObject, 'status' | 'articles' | 'totalResults'>;

export type ResponseCallback = (data: ResObject) => void;
