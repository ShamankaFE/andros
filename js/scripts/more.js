import { getRandomArrayElement } from "./util.js";
import { ARTICLES } from "./article-data.js";

const currentTitle = document.title;
console.log(ARTICLES);
const list = document.querySelector('#article-list');
const template = document.querySelector('#article-item').content;
// const items = document.querySelectorAll('.item-list--link');

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

  for (let i = 0; i < 3; i++) {
    const newItem = getRandomArrayElement(ARTICLES);
    const itemClone = renderItemClone(newItem);
    if (newItem.title === currentTitle) {
      i -= 1;
    // } else if (fragment.indexOf(itemClone) >= 0) {
    // } else if (fragment.find(el => el === newItem)) {
      // i -= 1;
    } else
      fragment.append(itemClone);
    }

  list.append(fragment);
};

export { renderMore };
