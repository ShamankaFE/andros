const form = document.querySelector('.form');

const storeData = () => {
  if (!form) {
    return;
  }

  if (window.localStorage) {
    const elements = document.querySelectorAll('[name]');

    for (let i = 0, length = elements.length; i < length; i++) {
      (function(element) {
        const name = element.getAttribute('name');

        element.value = localStorage.getItem(name) || element.value;

        element.onkeyup = () => {
          localStorage.setItem(name, element.value);
        };
      })(elements[i]);
    }
  }
}

export { storeData };
