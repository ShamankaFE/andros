const accordionModule = document.querySelector('#accordionModule');

const renderAccordion = () => {
  if (!accordionModule) {
    return;
  }

  const panels = document.querySelectorAll('.panel');

  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove('panel--active');
  }

  const openAccordion = (evt) => {
    if (!evt.target.classList.contains('accordion')) {
      return;
    }

    const activeTab = evt.target;
    const activeTabContent = activeTab.nextElementSibling;

    activeTab.classList.toggle("active");
    activeTabContent.classList.toggle('panel--active');
  };

  accordionModule.addEventListener('click', openAccordion);
};

export { renderAccordion };
