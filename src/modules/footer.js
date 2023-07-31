/* css styles*/


export const footer = document.createElement('footer');


const logo = document.createElement('div');
logo.textContent = "LOGO";

const footWrap = document.createElement('div');
const ul = document.createElement('ul');
footWrap.append(ul);
const link1Wrap = document.createElement('li');
const link2Wrap = document.createElement('li');
const link3Wrap = document.createElement('li');
ul.append(link1Wrap, link2Wrap, link3Wrap);

footer.append(logo, footWrap);