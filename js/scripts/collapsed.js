const collapsedModule = document.querySelector('#collapsed');

const renderCollapsed = () => {
  if (!collapsedModule) {
    return;
  }

  const colTabs = document.querySelectorAll('.collapsible');
  const colBlocks = document.querySelectorAll('.collapsible__content');

  for (let i = 0; i < colTabs.length; i++) {
      colBlocks[i].style.maxHeight = null;
  }

  const openColTab = (evt) => {
    if (!evt.target.classList.contains('collapsible')) {
      return;
    }

    const activeTab = evt.target;
    const activeTabContent = activeTab.nextElementSibling;

    activeTab.classList.toggle("active");
    if (activeTabContent.style.maxHeight) {
      activeTabContent.style.maxHeight = null;
    } else {
      activeTabContent.style.maxHeight = activeTabContent.scrollHeight + "px";
    }
  };

  collapsedModule.addEventListener('click', openColTab);
};

export { renderCollapsed };
