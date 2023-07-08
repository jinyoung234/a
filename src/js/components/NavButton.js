import Component from "../core/Component.js";
import { CATEGORY_TABLE } from "../util/constants.js";

class NavButton extends Component {
  template() {
    const element = this.props
      .map(({ categoryName }) => {
        return `
        <button
            data-category-name="${categoryName}"
            class="cafe-category-name btn bg-white shadow mx-1"
        >
            ${CATEGORY_TABLE[categoryName]}
        </button>
        `;
      })
      .join("");
    return element;
  }
}

export default NavButton;
