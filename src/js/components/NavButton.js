import Component from "../core/Component.js";
import { $ } from "../util/dom.js";
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
  setEvent() {
    $("nav").addEventListener("click", ({ target }) => {
      const isCategoryNameButton = target.classList.contains("cafe-category-name");
      if (isCategoryNameButton) {
        const categoryName = target.closest("[data-category-name]").dataset.categoryName;
        this.props[0].updateCurCategory(categoryName);
      }
    });
  }
}

export default NavButton;
