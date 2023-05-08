const tagInput = document.querySelector('#tagInput');
const clearButton = document.querySelector('.search-block__clear');
const tagList = document.querySelector('#tagList');
const tags = tagList.querySelectorAll('.tag');

const clearInput = () => {
  tagInput.value = '';
  for (let i = 0; i < tags.length; i++) {
    tags[i].style.display = "inline";
  }
  clearButton.classList.remove('hover-effect');
};

const searchByTagName = () => {
  clearButton.classList.add('hover-effect');
  const formattedInput = tagInput.value.toLowerCase();
  for (let i = 0; i < tags.length; i++) {
    const tagLink = tags[i].querySelector('.tag-link');
    const tagValue = tagLink.textContent;
    if (tagValue.toLowerCase().indexOf(formattedInput) > -1) {
      tags[i].style.display = "inline";
    } else {
      tags[i].style.display = "none";
    }
    if (tagInput.value) {
      clearButton.addEventListener('click', clearInput);
    } else {
      clearButton.removeEventListener('click', clearInput);
    }
  }
};

if (tagInput) {
  tagInput.addEventListener('keyup', searchByTagName);
}
