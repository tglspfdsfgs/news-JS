import AppLoader from './appLoader';
import { ResponseCallback, Endpoints } from '@interfaces';

class AppController extends AppLoader {
    getSources(callback: ResponseCallback) {
        super.getResp(
            {
                endpoint: Endpoints.Sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: ResponseCallback) {
        if (e.target instanceof Element && e.currentTarget instanceof Element) {
            let target: Element = e.target;
            const newsContainer: Element = e.currentTarget;

            while (target !== newsContainer) {
                if (target?.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');

                    if (newsContainer.getAttribute('data-source') !== sourceId && typeof sourceId === 'string') {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: Endpoints.All,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                if (target.parentNode instanceof Element) {
                    target = target.parentNode;
                }
            }
        }
    }
}

export default AppController;
