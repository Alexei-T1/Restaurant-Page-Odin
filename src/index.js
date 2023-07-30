import './reset.css';
import './style.css';

import { mainStart } from './modules/startPage.js'

/* css styles */
const styleWrapper = "wrapper";

const wrapper = document.createElement('div');
wrapper.classList.add(styleWrapper);

window.onload = () => {
  const load = document.querySelector('.load');
  load.replaceWith(mainStart);
}

