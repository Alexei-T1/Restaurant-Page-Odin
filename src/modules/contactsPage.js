
/* css styles*/
import { titleText, pText } from './startPage'
const contactClass = "contactSection";
const timeClass = "timeSection";
const wishClass = "wishSection";


export const contactsMain = document.createElement('main');

const sectionContact = document.createElement('address');
sectionContact.classList.add(contactClass);

const aboutCont = document.createElement('div');
aboutCont.classList.add(titleText);
aboutCont.textContent = "Contact Information:";

const listContact = document.createElement('ul');

const liConcatAddress = document.createElement('li');
const address = document.createElement('div');
address.textContent = "Address: Wonderland Avenue, Land of Fools";
address.classList.add(pText);
liConcatAddress.append(address);

const liConcatPhone = document.createElement('li');
const phone = document.createElement('a');
phone.href = 'tel:+12345678910';
phone.textContent = "Phone: +1 234-567-8910";
phone.classList.add(pText);
liConcatPhone.append(phone);

const liConcatEmail = document.createElement('li');
const email = document.createElement('a');
email.href = 'mailto:info@alicethefoxandbasiliothecat.com';
email.textContent = "Email: info@alicethefoxandbasiliothecat.com";
email.classList.add(pText);
liConcatEmail.append(email);

const liConcatMedia = document.createElement('li');
const media = document.createElement('div');
media.textContent = 'Social Media: @AlicetheFoxandBasiliotheCatRestaurant';
media.classList.add(pText);
liConcatMedia.append(media);


listContact.append(liConcatAddress, liConcatPhone, liConcatEmail, liConcatMedia);


sectionContact.append(aboutCont, listContact);



const sectionTimeWork = document.createElement('section');
sectionTimeWork.classList.add(timeClass);
const aboutHours = document.createElement('div');
aboutHours.classList.add(titleText)
aboutHours.textContent = "Hours of Operation:";

const listHours = document.createElement('ul');
const liConcat1 = document.createElement('li');
const hours1 = document.createElement('div');
hours1.classList.add(pText);
hours1.textContent = "Monday - Thursday: 10:00am - 9:00pm";
liConcat1.append(hours1);

const liConcat2 = document.createElement('li');
const hours2 = document.createElement('div');
hours2.classList.add(pText);
hours2.textContent = "Friday - Saturday: 10:00am - 11:00pm";
liConcat2.append(hours2);

const liConcat3 = document.createElement('li');
const hours3 = document.createElement('div');
hours3.classList.add(pText);
hours3.textContent = "Sunday: 12:00pm - 8:00pm"; 
liConcat3.append(hours3);

listHours.append(liConcat1, liConcat2, liConcat3);

sectionTimeWork.append(aboutHours, listHours);


const sectionWish = document.createElement('section');
sectionWish.classList.add(wishClass);
const textWish = document.createElement('div');
textWish.classList.add(titleText)
textWish.textContent = "We look forward to hearing from you and welcoming you to our whimsical restaurant in the Land of Fools!";

sectionWish.append(textWish);


contactsMain.append(sectionContact, sectionTimeWork, sectionWish);