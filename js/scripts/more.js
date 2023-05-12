import { getRandomInteger } from "./util.js";
import { ARTICLES } from "./article-data.js";

const list = document.querySelector('#article-list');
const template = document.querySelector('#article-item').content;
const currentTitle = document.title;

const renderMore = () => {
  if (!list) {
    return;
  }

  const renderItemClone = ({ link, listedTitle }) => {
    const itemClone = template.cloneNode(true);

    const itemLink = itemClone.querySelector('.item-list--link');
    itemLink.href = link;
    itemLink.textContent = listedTitle;

    return itemClone;
  };

  const fragment = document.createDocumentFragment();
  const idArray = [];

  for (let i = 0; i < 3; i++) {
    const newItemID = getRandomInteger(0, ARTICLES.length - 1);
    const newItem = ARTICLES[newItemID];

    if (idArray.includes(newItemID)) {
      i -= 1;
    } else if (newItem.title === currentTitle) {
      i -= 1;
    } else {
      idArray.push(newItemID);
      const itemClone = renderItemClone(newItem);
      fragment.append(itemClone);
    }
  }

  list.append(fragment);
};

export { renderMore };
