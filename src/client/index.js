import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import { checkLink } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

export { checkLink, handleSubmit }

const sectionItems = document.querySelectorAll("section");

for (const menuItem of sectionItems) {
    menuItem.addEventListener("click" , ( ) => {
        menuItem.classList.toggle("collapsible");
    });
}
