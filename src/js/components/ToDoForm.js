import Component from "../core/Component.js";
import { $, $target } from "../util/dom.js";
import ToDoButton from "./ToDoButton.js";
import ToDoInput from "./ToDoInput.js";

class ToDoForm extends Component {
  template() {
    return `
        <form id="menu-form">
            <div class="d-flex justify-between w-100">
                <div class="w-75" data-component="todoInput">
                    
                </div> 
                <div data-component="todoButton">
                    
                </div> 
            </div>
        </form>
    `;
  }

  mounted() {
    const $todoInput = $target(this.$target, '[data-component="todoInput"]');
    const $todoButton = $target(this.$target, '[data-component="todoButton"]');
    new ToDoInput($todoInput, this.props);
    new ToDoButton($todoButton, this.props);
  }

  setEvent() {
    $("#todoWrapper").addEventListener("submit", (e) => {
      const isForm = e.target.closest("form");
      if (isForm) {
        e.preventDefault();
      }
    });
  }
}

export default ToDoForm;
