import Component from "../core/Component.js";
import { CATEGORY_TABLE } from "../util/constants.js";

class ToDoTitle extends Component {
  template() {
    const { curCategory } = this.props;
    return `
        <h2 id="category-title" class="mt-1">${CATEGORY_TABLE[curCategory]} 메뉴 관리</h2>
    `;
  }
}

export default ToDoTitle;
