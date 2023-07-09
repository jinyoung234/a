import Component from "../core/Component.js";
import { $target } from "../util/dom.js";
import ToDoForm from "./ToDoForm.js";
import ToDoTitle from "./ToDoTitle.js";

class ToDoWrapper extends Component {
  template() {
    return `
        <div class="wrapper bg-white p-10">
            <div class="heading d-flex justify-between">
                <div data-component="title"></div>
                <div data-component="todoCount"></div>
            </div>
            <div data-component="todoForm"></div>
            <ul id="menu-list" class="mt-3 pl-0"></ul>
        </div>
    `;
  }
  mounted() {
    const $title = $target(this.$target, '[data-component="title"]');
    const $todoForm = $target(this.$target, '[data-component="todoForm"]');
    new ToDoTitle($title, this.props);
    new ToDoForm($todoForm, this.props);
  }
}

export default ToDoWrapper;
