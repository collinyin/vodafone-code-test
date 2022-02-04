/**
 * Please go to https://www.vodafone.com.au/nbn, and ONLY use your JavaScript snippet to run
 * in the console in order to make the following changes at once:
 */

/**
 * a. Hide hero banner
 */
const heroBanner = document.getElementsByClassName("carousel-container")[0];
heroBanner.style.display = "none";

/**
 * b. Re-layout feature list items as per requested on desktop view ONLY;
 *      - Make features (with icons) display as 2x2 instead of 1x4 on DESKTOP view only
 */
if (window.matchMedia("screen and (min-width:768px)").matches) {
  const nbnPlansGrid = document.getElementsByClassName("gklqxQ")[0];
  nbnPlansGrid.style.gridTemplateColumns = "repeat(2, minmax(100px, 225px))";
} else {
  const nbnPlansGrid = document.getElementsByClassName("gklqxQ")[0];
  nbnPlansGrid.style.gridTemplateColumns = "repeat(4, minmax(100px, 225px))";
}

/**
 * c. Automatically check address “Level 9 177 Pacific Highway, NORTH SYDNEY NSW 2060“ that
 *    has been provided in instruction
 */
const addressChecker = document.querySelector(
  "#input-typeahead-address-checker"
);
const address = "Level 9 177 Pacific Highway, NORTH SYDNEY NSW 2060";
addressChecker.click();
addressChecker.value = address;
addressChecker.addEventListener("click", () => {
  addressChecker.value = address;
  addressChecker.innerHTML = address;
  addressChecker.innerText = address;
});
addressChecker.click();

/* NOTE: Unsure how to initialise the address checking with pure javascript 
    - I tried clicking on the element before entering it's value but that didn't work
    - I also tried changing the display of the dropdown list however the dropdown list
        is created on the fly
*/

/**
 * d. Add “Most popular“ tag to Home Fast plan
 */
var tag = document.createElement("div");
tag.innerText = "Most Popular";
tag.style.backgroundColor = "#9400D3";
tag.style.width = "100%";
tag.style.fontWeight = "bold";
tag.style.color = "white";
tag.style.textAlign = "center";
tag.style.borderRadius = "4px";

var tag2 = document.createElement("div");
tag2.innerText = "Most Popular";
tag2.style.backgroundColor = "#9400D3";
tag2.style.width = "100%";
tag2.style.fontWeight = "bold";
tag2.style.color = "white";
tag2.style.textAlign = "center";
tag2.style.borderRadius = "4px";

/* For if window is 1024px or greater */
const slide = document.querySelector(
  "#nbn-plans > div.CardCarouselstyles__CarouselView-sc-13ydg5a-6.icIiYw > div > div.slick-list > div > div:nth-child(3) > div > div"
);
slide.prepend(tag);
/* For if window is less than 1024px */
const slide2 = document.querySelector(
  "#carousel-block-view-nbn-plans > div:nth-child(3)"
);
slide2.prepend(tag2);

/* NOTE: Need to figure out how to overlap instead of just putting it on the top*/

/**
 * e. Replacing existing HTML by below that we mimic the fetch from an API call :
 *  <p>Vodafone nbn™, with unlimited data, is designed to keep you GOING and GOING.
    <script>console.log("do you see me? what you should do to me?");</script> On plans with the Vodafone
    Wi-Fi Hub™ 2.0, you’ll be connected to the internet from day 1 and you can power on through
    interruptions with 4G Back-up. Get a nbn connection today with Vodafone nbn™ - winner of Australia’s
    best fixed broadband provider at the Telecommunication Industry’s CommsDay Edison Awards
    2020.</p><p>Sign up online below or call us on <a href="tel:1300808808">1300 808 808.</a></p>
 */
const paragraph = document.querySelector(
  "#__next > main > section.Sectionstyles__Section-sc-1u6q76v-0.esMa-DM > div > div > div > div > div"
);
paragraph.innerHTML =
  '<p>Vodafone nbn™, with unlimited data, is designed to keep you GOING and GOING.<script>console.log("do you see me? what you should do to me?");</script> On plans with the VodafoneWi-Fi Hub™ 2.0, you’ll be connected to the internet from day 1 and you can power on through interruptions with 4G Back-up. Get a nbn connection today with Vodafone nbn™ - winner of Australia’s best fixed broadband provider at the Telecommunication Industry’s CommsDay Edison Awards 2020.</p><p>Sign up online below or call us on <a href="tel:1300808808">1300 808 808.</a></p>';

/**
 * f. Expand “Terms and Conditions“ accordion
 */
const termsAndConds = document.querySelector(
  "#terms-and-conditions > div:nth-child(1) > button"
);
termsAndConds.click();
