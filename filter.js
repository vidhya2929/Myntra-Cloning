// const items = document.querySelectorAll('.genderTab');

// items.forEach(item => {
//   item.addEventListener('click', () =>{
//     items.forEach(el => el.classList,remove('active'));
//     // Add active class to the clicked one
//     item.classList.add('active');
//   });
//   });

const filterData = {
  Gender : [
    {label: "Boys", count: 1053 },
    {label: "Girls", count:63990},
    {label: "Women", count: 206681}
  ],
  Categories: [
    {label: "Dresses", count: 254285},
    {label: "Ethnic dresses", count:14532}
  ],
  Size: [
    {label:"3xs", count:163},
    {label:"Xxs", count:4860},
    {label:"Xs", count:66418},
    {label:"Xs/s", count:120},
    {label:"S", count:148138},
    {label:"S/m", count:304},
    {label:"M", count:148337},
    {label:"M/I", count:347},
    {label:"L", count:143153},
    {label:"L/xl", count:285},
    {label:"Xl", count:126290},
    {label:"Xl/xxl", count:78},
    {label:"Xxl", count:75197},
    {label:"3xl", count:23108},
    {label:"4xl", count:12446},
    {label:"5xl", count:9251},
    {label:"6xl", count:6192},
    {label:"7xl", count:2650},
    {label:"8xl", count:1911},
    {label:"9xl", count:728},
    {label:"10xl", count:461},
    {label:"11xl", count:1},
    {label:"12xl", count:1},
    {label:"13xl", count:1},
    {label:"14xl", count:1},
    {label:"15xl", count:1},
    {label:"Onesize", count:2752},
  ],
  Brand: [
    {label:"13-star", count:61},
    {label:"15-buttons", count:20},
    {label:"1st step", count:8},
    {label:"20dresses", count:562},
    {label:"250 designs", count:182},
    {label:"27 drapes", count:14},
    {label:"28 moons", count:23},
    {label:"30 looks", count:6},
    {label:"3pin", count:18},
    {label:"4wrd by dressberry", count:57},
    {label:"4you dresses", count:13},
    {label:"5.10.15", count:1},
    {label:"612 ivy league", count:1},
    {label:"612 league", count:8},
    {label:"7ounce", count:38},
    {label:"8seconds", count:3},
    {label:"9rasa", count:15},
    {label:"9shines label", count:30},
  ],
  "Discount Range": [
    {label: "10% and higher", count: 231103},
    {label: "20% and higher", count: 224582},
    {label: "30% and higher", count: 295147},
    {label: "40% and higher", count: 203714},
    {label: "50% and higher", count: 184173},
    {label: "60% and higher", count: 131933},
    {label: "70% and higher", count: 73510},
    {label: "80% and higher", count: 15661},
    {label: "90% and higher", count: 494},
  ],
  Bundles : [
    {label: "Bundles", count: 23},
    {label: "Single styles", count: 231103},
  ],
  "Country of Origin": [
    {label:"All countries", count:268817},
    {label:"Bangladesh", count:25},
    {label:"Cambodia", count:9},
    {label:"China", count:931},
    {label:"Egypt", count:1},
    {label:"Hong kong", count:15},
    {label:"India", count:268817},
    {label:"Indonesia", count:2},
    {label:"Italy", count:4},
    {label:"Morocco", count:18},
    {label:"Myanmar", count:1},
    {label:"Philippiens", count:1},
    {label:"Romania", count:1},
    {label:"Singapore", count:1},
    {label:"Sri Lanka", count:5},
    {label:"Turkey", count:219},
  ]
};

function priceFilter(){
  const priceHTML = `
  <div class="priceContainer">
  <div class="priceLabel">Selected price range</div>
  <div class="priceValue">₹<span id = "minVal">0 </span> - ₹<span id = "maxVal">48,000+</span></div>
  <div class="productFound">269199 products found</div>
  <div class="priceBar">
  <div class="hist1"></div>
  <div class="hist2"></div>
  <div class="hist3"></div>
  </div>
  <div class="sliderWrapper">
        <input type="range" min="0" max="48,000" value="0" id="rangeMin" class="rangeSlider" />
        <input type="range" min="0" max="48000" value="48000" id="rangeMax" class="rangeSlider" />
      </div>
    </div>
  `;
  filterOptionContainer.innerHTML = priceHTML;

  const rangeMin = document.getElementById('rangeMin');
  const rangeMax = document.getElementById('rangeMax');
  const minVal = document.getElementById('minVal');
  const maxVal = document.getElementById('maxVal');

  function updateValues() {
    let min = parseInt(rangeMin.value);
    let max = parseInt(rangeMax.value);
    if (min > max) [min, max] = [max, min];
    minVal.textContent = min;
    maxVal.textContent = max + '+';
  }

  rangeMin.addEventListener('input', updateValues);
  rangeMax.addEventListener('input', updateValues);
}
function moreFilters(){
const moreFilter = `
<div class="start">
<p class="heading1">Refine your Search</p>
<p class="subheading">Select any one category to view more filter(s).</p>
<div class= "selectCate">SELECT CATEGORY</div>
</div>
`;
filterOptionContainer.innerHTML = moreFilter;
}

const tabs = document.querySelectorAll('#commonProp');
const filterOptionContainer = document.querySelector('.filterOption');
tabs.forEach(tab =>{
  tab.addEventListener('click', ()=>{
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabName = tab.textContent.trim();
    if(tabName === "Price"){
      priceFilter();
      return;
    }
    if(tabName === "More Filters"){
      moreFilters();
      return;
    }
    const items = filterData[tabName];

    const searchInput = document.querySelector('.filterSearchInput');
  if(searchInput){
    searchInput.addEventListener('input', () =>{
      const searchTerm = searchInput.value.toLowerCase();
      const labels = filterOptionContainer.querySelectorAll('.labelBoys');
      labels.forEach(label => {
        const text = label.textContent.toLowerCase();
        label.parentElement.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
  }
    if (items && items.length > 0) {
      let html = '';
      if(tabName === "Size" || tabName === "Brand" || tabName=== "Color" || tabName === "Country of Origin"){
        html += `
        <div class="searchWrapper">
        <div class= "searchBox">
          <span class="searchIcon"><img src = "icons/search.svg" height = "14" width = "14"></span>
          <input type = "text" placeholder = "Search by ${tabName}" class = "filterSearchInput"/>
          </div>
          `;
      }
       html += items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemClass = isLast ? 'lastItem' : 'firstItem';
        return `
          <div class="${itemClass}">
            <label class="labelBoys">
              <input type="checkbox" class="checVisit" value="${item.label}">
              <div class="checkBoxInd"></div>
              ${item.label}
              <span class="count">${item.count}</span>
            </label>
          </div>
        `;
      }).join('');

      filterOptionContainer.innerHTML = html;
    }
    
    else {
      filterOptionContainer.innerHTML = `<p style="padding: 20px; font-family: Assistant;">No options for "${tabName}".</p>`;
    }

    // Set "Gender" tab as default on page load
    // window.addEventListener('DOMContentLoaded', () => {
      
    //   const defaultTab = Array.from(tabs).find(tab => tab.textContent.trim() === "Gender");
    //   if (defaultTab) {
    //     tabs.forEach(t => t.classList.remove('active')); // Remove active from all tabs
    //     defaultTab.classList.add('active'); // Add active to gender tab
    //     defaultTab.click(); // Trigger click
        
    //   }
    // });
  

  });
});

