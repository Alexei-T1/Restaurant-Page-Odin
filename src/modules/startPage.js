
/* css styles*/
const welcomeSectionClass = "welcomeSection";
const aboutSectionClass = "aboutSection";
const auxiliarySectionClass = "auxiliarySection"; 
const pGeneral = "paragraph";
const pGreet = "paragraphGreet";
const pEnd = "paragraphEnd";
export const titleText = "titleText";
export const pText = "pText";
const textGreet = "textGreet";

export const mainStart = document.createElement('main');

const section1 = document.createElement('section');
section1.classList.add(welcomeSectionClass);
const paragraphWelcome = document.createElement('p');
paragraphWelcome.classList.add(pGreet, pText, pGeneral);
const greetVisitors = document.createElement('span');
greetVisitors.classList.add(titleText, textGreet);
greetVisitors.textContent = "Greetings, dear visitors,";
const greetText = document.createElement('span');
greetText.innerText = `welcome to Three Crusts of Bread, a gastronomic oasis nestled in the whimsical realm of Wonderland, 
right in the heart of the Land of Fools`;
paragraphWelcome.append(greetVisitors, greetText);
section1.append(paragraphWelcome);

const section2 = document.createElement('section');
section2.classList.add(aboutSectionClass);
const paragraphBegin = document.createElement('p');
paragraphBegin.classList.add(pText, pGeneral);
paragraphBegin.innerText = `Our restaurant is a captivating haven where culinary artistry dances with playful eccentricity. 
Step into a world where every dish is a masterpiece, crafted with passion and served with a dash of intrigue. 
Be prepared to embark on a delightful journey through flavors that will enchant your taste buds and leave you craving for more.`;
const paragraphNext = document.createElement('p');
paragraphNext.classList.add(pText, pGeneral);
paragraphNext.innerText = `At Three Crusts of Bread, we believe in the power of imagination and the joy of indulgence. 
Our menu, meticulously curated by our innovative chefs, reflects a fusion of traditional sophistication and fantastical innovation. 
From the mysteriously divine creations of the Mad Hatter \'s Roasted Coffee Duck to the whimsical Queen of Hearts\' Tarts, every dish is designed to stimulate your senses and ignite your imagination.`;
const paragraphEnd = document.createElement('p');
paragraphEnd.classList.add(pText, pGeneral, pEnd);
paragraphEnd.innerText = 'Join us at Three Crusts of Bread, where culinary fantasy becomes reality. Lose yourself in a world where flavors and imagination intertwine, and every bite becomes a captivating tale.';

section2.append(paragraphBegin, paragraphNext, paragraphEnd);
mainStart.append(section1, section2);

