import './sources.css';
import { Source } from '@interfaces';

class Sources {
    draw(data: Array<Source>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content?.cloneNode(true) as DocumentFragment;

                (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
                (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            });

            document.querySelector('.sources')?.append(fragment);
        }
    }
}

export default Sources;
