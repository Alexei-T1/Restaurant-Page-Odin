import './reset.css';
import './style.css';

import { mainStart } from './modules/startPage.js';
import { header } from './modules/header.js';
import { footer } from './modules/footer.js';

/* css styles */
const styleWrapper = "wrapper";

const wrapper = document.createElement('div');
wrapper.classList.add(styleWrapper);

window.onload = () => {
  const load = document.querySelector('.load');
  load.before(header);
  load.replaceWith(mainStart);
  mainStart.after(footer);
}

