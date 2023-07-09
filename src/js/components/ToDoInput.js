import Component from "../core/Component.js";
import { $ } from "../util/dom.js";

class ToDoInput extends Component {
  template() {
    return `
        <input
            type="text"
            id="menu-name"
            name="menuName"
            class="input-field"
            placeholder="메뉴 이름"
            autocomplete="off"
        />
    `;
  }

  setEvent() {
    $("#menu-form").addEventListener("keypress", ({ target, key }) => {
      const isInput = target.closest("input");
      if (isInput && key === "Enter") {
        const { addMenu } = this.props;
        addMenu();
      }
    });
  }
}

export default ToDoInput;
