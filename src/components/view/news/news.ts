import './news.css';
import { Arcticle } from '@interfaces';

class News {
    draw(data: Array<Arcticle>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                (<HTMLElement>newsClone.querySelector('.news__meta-author')).textContent =
                    item.author || item.source.name;
                (<HTMLElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
                (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
                (<HTMLElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
                (<HTMLElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

                fragment.append(newsClone);
            });
        }

        const newsElem = document.querySelector('.news');
        if (newsElem) {
            newsElem.innerHTML = '';
            newsElem.appendChild(fragment);
        }
    }
}

export default News;
