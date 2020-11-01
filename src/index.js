import './styles.css';
import changeTheme from "./js/change-theme";
import checkTheme from "./js/change-theme";
import menuItem from './templates/menu-items.hbs';
import menu from './menu.json';

const cardsMarkup = createCardsMarkup(menu);
const menuContainer = document.querySelector('.js-menu');

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(menu) {
    return menu.map(menuItem).join('');
}
