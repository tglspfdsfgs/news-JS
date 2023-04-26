import { ResponseCallback, ResObject, Endpoints } from '@interfaces';

interface APIOptions {
    [key: string]: string;
}
interface ReqOptions extends APIOptions {
    apiKey: string;
}

class Loader {
    private readonly baseLink: string;
    private readonly options: ReqOptions;

    constructor(baseLink: string, options: ReqOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoints; options?: APIOptions },
        callback: ResponseCallback = () => {
            console.error('No callback for response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: APIOptions, endpoint: string): string {
        const urlOptions: ReqOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: 'GET' | 'SET', endpoint: string, callback: ResponseCallback, options: APIOptions = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: ResObject) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
