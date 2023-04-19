import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export interface IApp {
    start: () => void;
}

export class App implements IApp {
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            ?.querySelector('.sources')
            ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}
