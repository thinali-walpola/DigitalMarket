
function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("show");
}

const sidebar = document.getElementById("sidebar");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {

  const sidebarHeight = sidebar.offsetHeight;
  const footerTop = footer.getBoundingClientRect().top;
  const offset = 80;

  if (window.scrollY > 80) {
    sidebar.classList.add("sidebar-fixed");

    if (footerTop <= sidebarHeight + offset) {
      sidebar.classList.remove("sidebar-fixed");
      sidebar.classList.add("sidebar-bottom");
    } else {
      sidebar.classList.remove("sidebar-bottom");
    }

  } else {
    sidebar.classList.remove("sidebar-fixed");
    sidebar.classList.remove("sidebar-bottom");
  }

});

const searchInput = document.getElementById("mySearch");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const products = document.querySelectorAll(".card");

  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();

    if (name.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});


function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      openDropdown.classList.remove('show');
    }
  }
}


function sortByName() {
  let container = document.getElementById("products");
  let items = Array.from(container.getElementsByClassName("card"));

  items.sort((a, b) => {
    return a.dataset.name.localeCompare(b.dataset.name);
  });

  items.forEach(item => container.appendChild(item));
}

function sortLowHigh() {
  let container = document.getElementById("products");
  let items = Array.from(container.getElementsByClassName("card"));

  items.sort((a, b) => {
    return a.dataset.price - b.dataset.price;
  });

  items.forEach(item => container.appendChild(item));
}

function sortHighLow() {
  let container = document.getElementById("products");
  let items = Array.from(container.getElementsByClassName("card"));

  items.sort((a, b) => {
    return b.dataset.price - a.dataset.price;
  });

  items.forEach(item => container.appendChild(item));
}




// FILTER FUNCTION
const radios = document.querySelectorAll('input[name="category"]');
const cards = document.querySelectorAll(".card");

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const value = radio.value;

    cards.forEach(card => {
      if (value === "all" || card.dataset.category === value) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});



// Add active class to the current button (highlight it)
var header = document.getElementById("tabs");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


// Add active class to the current button (highlight it)
var header = document.getElementById("tabs");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


function removeBtn() {
  const element = document.getElementById("myButton");
  if (element) {
    element.remove(); // Direct removal
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("tabs");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}



