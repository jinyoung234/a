import Component from "../core/Component.js";

class ToDoItems extends Component {
  template() {
    const { menu, curCategory } = this.props;
    const isNotMenu = menu[curCategory].length < 1;
    return isNotMenu
      ? []
      : menu[curCategory]
          .map(({ name, isSoldOut }) => {
            return `
              <li class="menu-list-item d-flex items-center py-2">
                <span class="w-100 pl-2 menu-name ${isSoldOut && "sold-out"}">${name}</span>
                <button
                  type="button"
                  class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
                >
                  품절
                </button>
                <button
                  type="button"
                  class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                >
                  수정
                </button>
                <button
                  type="button"
                  class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                >
                  삭제
                </button>
              </li>
            `;
          })
          .join("");
  }
}

export default ToDoItems;
