const tabModule = document.querySelector('#tabModule');

const renderTabModule = () => {
  if (!tabModule) {
    return;
  }

  const tabBlock = tabModule.querySelector('.tab-block');
  const tabLinks = tabModule.querySelectorAll(".tab-block__link");
  const tabs = tabModule.querySelectorAll(".tab-content");

  const openTab = (evt) => {
    if (!evt.target.classList.contains('tab-block__link')) {
      return;
    }

    for (let i = 0; i < tabs.length; i++) {
      tabLinks[i].classList.remove('tab-block__link--active');
      tabs[i].classList.remove('tab-content--active');
    }

    const activeTab = evt.target;
    const activeTag = activeTab.id;
    const activeTabContent = tabModule.querySelector(`#${activeTag}-tab`);

    activeTab.classList.add('tab-block__link--active');
    activeTabContent.classList.add('tab-content--active');
  };

  tabBlock.addEventListener('click', openTab);
};

export { renderTabModule };
