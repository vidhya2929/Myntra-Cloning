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
// finds all html elements with id commonprop and it returns a nodeList
const filterOptionContainer = document.querySelector('.filterOption');
// finding the element containing filterOption where the filter options will be shown
tabs.forEach(tab =>{
  // for each tab we add a click event listener
  tab.addEventListener('click', ()=>{
    // when click th tab, the fn iside will run
    tabs.forEach(t => t.classList.remove('active'));
    // remove the class active from all tabs  so only one can active at a time.
    // all are active due to #commonProp:active
    tab.classList.add('active');
    // add active class to the one which is clicked 

    const tabName = tab.textContent.trim();
    // gets the text inside the tab and trim the extra spaces at the beginning or end 
    const items = filterData[tabName];
    // get data from filterData using tabName
    // filterData is a js object
// const filterData = {
//   "Brand": [{ label: "Nike", count: 20 }, { label: "Adidas", count: 15 }],
//   "Size": [{ label: "M", count: 10 }, { label: "L", count: 12 }]
// };
// So filterData["Brand"] gives you the array of object under "Brand".

// display the data iniside the .filterOption container

if(items && items.length > 0){
  // check whether the items array exists and is not empty
  const html = items.map((items, index) =>{
    // map goes through each element in the "items" array and returns new HTML code for each item
    // item is each object
    // index is the position in the array
      const isLast = index === items.length - 1;
      // checks if this is the last item in the array
      // last index => items.length -1
      const itemClass = isLast ? 'lastItem' : 'firstItem';
      // if "isLast" true itemClass = 'lastItem' and if false it becomes firstItem

      //So all others except last item will have firstItem 


      // this section of code is part of a .map() function that creates HTML content dynamically for each filter option
      return`
      <div class ="${itemClass}">
      <label class= "labelBoys">
      <input type ="checkbox" class="checVisit" value="${itemClass.label}"> 
      <div class="checkBoxInd"></div>
              ${itemClass.label}
              <span class="count">${itemClass.count}</span>
            </label>
          </div>
      `;
    // div wraps one filter option
      // ${itemClasss} will be 'firstItem for most options 
      // and lastItem for last one
      

      // label makes the entire area clickable
      // If a checkbox is inside a <label> ,clicking anywhere in the label toggles the checkbox


      // this is the actual checkbox.
      // value="${item.label}" sets the value — so when it's selected, we  know which brand or size was chosen.

      //(checBoxInd) usually used for custom checkbox styling with CSS.


      // The resulting HTML will look like
    //   <div class="firstItem">
    //   <label class="labelBoys">
    //     <input type="checkbox" class="checVisit" value="Nike">
    //     <div class="checkBoxInd"></div>
    //     Nike
    //     <span class="count">20</span>
    //   </label>
    // </div>
    
    
  }).join('');
  // .map() returns an array of strings (each one is one filter option)
  // .join('')combines them into a single HTML string with no commas
}
    
  });
});

// items is an array.eg:
// [
  // { label: "Nike", count: 20 },
  // { label: "Adidas", count: 15 }
// ]

// .map() goes through each item in that array
// item = one obj like {label : "Nike", count: 20}
// index = its position (nike is 0, Adidas is 1)
// Goal of .map(): generate HTML foe each checkbox




// return  `.........`
// thee whole part inside the backtics(``) is a termperal literal. It allow us write multiline HTML with JavaScript values injected.