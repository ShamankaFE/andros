    function openTab(evt, modelName) {
      var i, tabcontent, tablinks;
      tabcontent = document.querySelectorAll(".tab-content");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.querySelectorAll(".tab-block__link");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab-block__link--active", "");
      }
      document.getElementById(modelName).style.display = "block";
      evt.currentTarget.className += " tab-block__link--active";
    }
    document.querySelector("#defaultOpen").click();
