import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import { checkLink } from './js/inputChecker'
import { handleSubmitLink } from './js/formHandler'
import { handleSubmitText } from './js/formHandler'

export { checkLink, handleSubmitLink, handleSubmitText }

const sectionItems = document.querySelectorAll("section");
const menuItemLink = document.getElementById("toLink");
const menuItemText = document.getElementById("toText");
const sectionLink = document.getElementById("sectionLink");
const sectionText = document.getElementById("sectionText");

for (const sectionItem of sectionItems) {
    const sectionName = sectionItem.children[0];
    sectionName.addEventListener("click" , ( ) => {
        sectionItem.classList.toggle("collapsible");
    });
}

menuItemLink.addEventListener("click" , ( ) => {
    sectionLink.classList.add("collapsible");
});

menuItemText.addEventListener("click" , ( ) => {
    sectionText.classList.add("collapsible");
});
