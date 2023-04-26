import News from './news/news';
import Sources from './sources/sources';

import { Source, Arcticle, ResSrc, ResNews } from '@interfaces';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ResNews) {
        const values: Array<Arcticle> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResSrc) {
        const values: Array<Source> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
