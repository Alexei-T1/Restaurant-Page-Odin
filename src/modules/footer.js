/* css styles*/
const footerSectionClass = "footerClass";
const imageLogoClass = "imageClass";
const textLogoClass = "textClass";
const textTClass = "textT";

const meContactsClass = "meContacts";
const odinContactsClass = "odinContacts";

/* images*/
import gitHubImage from "../assets/github-1.svg";
import odinImage from "../assets/odin-logo.svg";

export const footer = document.createElement('footer');

footer.classList.add(footerSectionClass);
const sectionMe = document.createElement('a');
sectionMe.classList.add(meContactsClass);
sectionMe.href = "https://github.com/Alexei-T1";

const logo = document.createElement('div');
logo.classList.add(imageLogoClass);
const imageLogo = document.createElement('img');
imageLogo.src = gitHubImage;

logo.append(imageLogo);

const textLogo = document.createElement('div');
textLogo.classList.add(textLogoClass);
const textT = document.createElement('span');
textT.classList.add(textTClass);
textT.textContent = 'T';
const textName = document.createElement('span');
textName.textContent = 'Alexey';

textLogo.append(textT, textName);

sectionMe.append(logo, textLogo);

const sectionOdin = document.createElement('a');
sectionOdin.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page";
sectionOdin.classList.add(odinContactsClass);
const logoOdin = document.createElement('div');
logoOdin.classList.add(imageLogoClass);
const imageLogoOdin = document.createElement('img');
imageLogoOdin.src = odinImage;
logoOdin.append(imageLogoOdin);

sectionOdin.append(logoOdin);


footer.append(sectionMe, sectionOdin);
