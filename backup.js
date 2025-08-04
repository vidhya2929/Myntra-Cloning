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

const tabs = document.querySelectorAll('#commonProp');
const filterOptionContainer = document.querySelector('.filterOption');
tabs.forEach(tab =>{
  tab.addEventListener('click', ()=>{
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabName = tab.textContent.trim();
    const items = filterData[tabName];

   
    if (items && items.length > 0) {
      const html = items.map((item, index) => {
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
    // else {
    //   filterOptionContainer.innerHTML = `<p style="padding: 20px; font-family: Assistant;">No options for "${tabName}".</p>`;
    // }
  });
});

filterOptionContainer.innerHTML = priceHTML;

function loadPriceFilter() {
  const priceHTML = `
    <div class="priceContainer">
      <div class="priceLabel">Selected price range</div>
      <div class="priceValue">₹<span id="minVal">0</span> - ₹<span id="maxVal">48,000+</span></div>
      <div class="productFound">269184 products found</div>

      <div class="priceHistogram">
        <!-- Placeholder for histogram bars -->
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="bar bar4"></div>
      </div>

      <div class="sliderWrapper">
        <input type="range" min="0" max="48000" value="0" id="rangeMin" class="rangeSlider" />
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











priceContainer {
  padding: 20px;
  font-family: "Assistant";
  background-color: white;
}

.priceLabel {
  font-size: 14px;
  margin-bottom: 4px;
  color: #3e4152;
}

.priceValue {
  font-size: 18px;
  font-weight: bold;
  color: #3e4152;
  margin-bottom: 4px;
}

.productFound {
  font-size: 12px;
  color: #94969f;
  margin-bottom: 20px;
}

.priceHistogram {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 40px;
  background-color: #f4f4f5;
  margin-bottom: 20px;
  border-radius: 2px;
  padding: 0 8px;
}

.priceHistogram .bar {
  width: 20%;
  background-color: #d4d4d4;
}

.bar1 { height: 30%; }
.bar2 { height: 60%; }
.bar3 { height: 45%; }
.bar4 { height: 25%; }

.sliderWrapper {
  position: relative;
  height: 40px;
}

.rangeSlider {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: #ff3e6c;
  border-radius: 5px;
  position: absolute;
  pointer-events: none;
}

.rangeSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background: #fff;
  border: 2px solid #ff3e6c;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  position: relative;
  z-index: 2;
}

.rangeSlider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  background: #fff;
  border: 2px solid #ff3e6c;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  position: relative;
  z-index: 2;
}


function colorFilter(){
  const colors = [
    {name: "Assorted", hex: "#3BA935", count: 40000},
    {name: "Beige", hex: "##F2E5B5", count: 40000},
    {name: "Black", hex: "#2E3335", count: 40000},
    {name: "Blue", hex: "#007BFF", count: 40000},
    {name: "Bronze", hex: "#CD7F32", count: 40000},
    {name: "Brown", hex: "#8B4513", count: 40000},
    {name: "Burgundy", hex: "#80020", count: 40000},
    {name: "Camel briwn", hex: "#C19A6B", count: 40000},
    {name: "Champagne", hex: "#F7E7CE", count: 40000},
    {name: "Charcoal", hex: "#36454F", count: 40000},
    {name: "COffee brown", hex: "#4B3621", count: 40000},
    {name: "Copper", hex: "#B87333", count: 40000},
    {name: "Coral", hex: "#FF7F50", count: 40000},
    {name: "Cream", hex: "#FFFDD0", count: 40000},
  ]
};