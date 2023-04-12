import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '46f9f4feaa0c497e8c39f581e758d120',
        });
    }
}

export default AppLoader;
