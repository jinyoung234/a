import Component from "../core/Component.js";
import { $ } from "../util/dom.js";

class ToDoButton extends Component {
  template() {
    return `
        <button
            type="button"
            name="submit"
            id="menu-submit-button"
            class="input-submit bg-green-600 ml-2"
        >
            확인
        </button>
    `;
  }
}

export default ToDoButton;
