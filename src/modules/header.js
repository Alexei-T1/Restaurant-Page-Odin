/* css styles*/
const mainText = "mainText";
const headerClass = "headerSection";
const logoClass = "logoHeader";
const logoTextClass = "logoText";
const navClass = "navHeader";
const navTextClass = "navText";
const navWelcomeClass = "navWelcome";
const navDescribeClass = "navDescribe";
const navContactClass = "navContact";

/* images*/
import imageBread from "../assets/sliced-brown.jpg";

export const header = document.createElement('header');
header.classList.add(headerClass);

const logo = document.createElement('div');
logo.classList.add(logoClass);
const imageLogo = document.createElement('img')
imageLogo.src = imageBread;

const textWrapLogo = document.createElement('div');
textWrapLogo.classList.add(logoTextClass, mainText);
const firstText = document.createElement('span');
firstText.innerText = "Three";
const secondText = document.createElement('span');
secondText.innerText = "bread Crusts";
const threeText = document.createElement('span');
threeText.innerText = "restaurant";
textWrapLogo.append(firstText, secondText, threeText);
logo.append(imageLogo, textWrapLogo);


const nav = document.createElement('nav');
nav.classList.add(navClass);
const ul = document.createElement('ul');
nav.append(ul);

const mainWrap = document.createElement('li');
mainWrap.classList.add(navTextClass);
export const textMain = document.createElement('a');
textMain.classList.add(navWelcomeClass);
textMain.innerText = "Welcome";
mainWrap.append(textMain);

const describeWrap = document.createElement('li');
describeWrap.classList.add(navTextClass);
export const textDescribe = document.createElement('a');
textDescribe.classList.add(navDescribeClass);
textDescribe.innerText = "Describe";
describeWrap.append(textDescribe);

const contactWrap = document.createElement('li');
contactWrap.classList.add(navTextClass);
export const textContact = document.createElement('a');
textContact.classList.add(navContactClass);
textContact.innerText = "Contacts";
contactWrap.append(textContact);

ul.append(mainWrap, describeWrap, contactWrap);

header.append(logo, nav);