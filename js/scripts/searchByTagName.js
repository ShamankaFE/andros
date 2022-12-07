    function searchByTagName() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.querySelector('#myInput');
      filter = input.value.toUpperCase();
      ul = document.querySelector(".myUL");
      li = ul.querySelectorAll('.tag');

      for (i = 0; i < li.length; i++) {
        a = li[i].querySelectorAll(".tag-link")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
