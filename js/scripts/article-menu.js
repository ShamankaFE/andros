const articleMenu = document.querySelector('#contents');

const renderArticleMenu = () => {
  if (!articleMenu) {
    return;
  }

  const list = articleMenu.querySelector('.contents__list');
  const template = document.querySelector('#article-menu').content;
  const chapters = document.querySelectorAll('.chapter');

  const renderItemClone = (el) => {
    const itemClone = template.cloneNode(true);

    const itemLink = itemClone.querySelector('.contents__link');
    itemLink.href = `#${el.id}`;
    itemLink.textContent = el.firstElementChild.textContent;

    return itemClone;
  };

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < chapters.length; i++) {
    const newItem = renderItemClone(chapters[i]);
    fragment.append(newItem);
  }

  list.append(fragment);
};

export { renderArticleMenu };
