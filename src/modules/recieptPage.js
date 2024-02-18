

export const describeMain = document.createElement('main');


const section1 = document.createElement('section');

const pharWho  = document.createElement('p');
pharWho.classList.add("pText", "paragraph");
pharWho.innerText = "Alice the Fox and Basilio the Cat's Restaurant is a whimsical and charming eatery located in the Land of Fools on the Field of Wonders. The restaurant is nestled within a magical forest and features a cozy and inviting atmosphere. The décor is eclectic, with mismatched chairs, colorful tablecloths, and whimsical artwork adorning the walls.";

const pharMenu  = document.createElement('p');
pharMenu.classList.add("pText", "paragraph");
pharMenu.innerText = "The menu offers a delightful array of dishes, drawing inspiration from both the local cuisine of the Land of Fools and international flavors. Guests can indulge in whimsical creations such as Cheshire Cat Cheshire, a playful take on a classic grilled cheese sandwich, and Mad Hatter's Tea Party Platter, featuring an assortment of miniature treats and sweets.";

const pharArt  = document.createElement('p');
pharArt.classList.add("pText", "paragraph");
pharArt.innerText = "The restaurant is adorned with twinkling fairy lights and features a stage for live performances, with entertainment provided by talented local musicians and performers. Guests are often treated to impromptu magic shows, storytelling sessions, and interactive performances that add to the enchanting atmosphere.";

const pharServ  = document.createElement('p');
pharServ.classList.add("pText", "paragraph", "paragraphEnd");
pharServ.innerText = "The staff, including Alice the Fox and Basilio the Cat, are known for their friendliness and hospitality, ensuring that every visitor feels welcome and well taken care of. Whether it's for a leisurely meal, a special occasion, or simply to immerse oneself in the whimsy and wonder of the Land of Fools, Alice the Fox and Basilio the Cat's Restaurant promises a memorable and enchanting dining experience";

section1.append(pharWho, pharMenu, pharArt, pharServ);

describeMain.append(section1)