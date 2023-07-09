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
}

export default ToDoInput;
