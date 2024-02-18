import './reset.css';
import './style.css';

import { mainStart } from './modules/startPage.js';
import { header, textMain as wellcome, textDescribe as describe, textContact as contact} from './modules/header.js';
import { footer } from './modules/footer.js';
import { contactsMain } from './modules/contactsPage.js';
import { describeMain } from './modules/recieptPage.js';

/* css styles */
const styleWrapper = "wrapper";
const backGroundClass = "backGroundImage";

const wrapper = document.createElement('div');
wrapper.classList.add(styleWrapper);
const backGround = document.createElement('div');
backGround.classList.add(backGroundClass);
window.onload = () => {
  const load = document.querySelector('.load');
  load.before(header);
  load.replaceWith(mainStart);
  mainStart.after(footer);
  footer.after(backGround);
}

wellcome.onclick = () => {
  document.querySelector('main').replaceWith(mainStart);
};
describe.onclick = () => {
  document.querySelector('main').replaceWith(describeMain);
};
contact.onclick = () => {
  document.querySelector('main').replaceWith(contactsMain);
};

