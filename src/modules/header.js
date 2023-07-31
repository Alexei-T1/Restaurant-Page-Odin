/* css styles*/


export const header = document.createElement('header');


const logo = document.createElement('div');
logo.textContent = "LOGO";

const nav = document.createElement('nav');
const ul = document.createElement('ul');
nav.append(ul);
const mainWrap = document.createElement('li');
const describeWrap = document.createElement('li');
const contactWrap = document.createElement('li');
ul.append(mainWrap, describeWrap, contactWrap);

header.append(logo, nav);