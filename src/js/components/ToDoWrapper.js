import Component from "../core/Component.js";
import { $target } from "../util/dom.js";
import ToDoCount from "./ToDoCount.js";
import ToDoForm from "./ToDoForm.js";
import ToDoItems from "./ToDoItems.js";
import ToDoTitle from "./ToDoTitle.js";

class ToDoWrapper extends Component {
  template() {
    return `
        <div id="todoWrapper" class="wrapper bg-white p-10">
            <div class="heading d-flex justify-between">
                <div data-component="title"></div>
                <div data-component="todoCount"></div>
            </div>
            <div data-component="todoForm"></div>
            <ul data-component="todoItems" id="menu-list" class="mt-3 pl-0"></ul>
        </div>
    `;
  }
  mounted() {
    const $title = $target(this.$target, '[data-component="title"]');
    const $todoForm = $target(this.$target, '[data-component="todoForm"]');
    const $todoItems = $target(this.$target, '[data-component="todoItems"]');
    const $todoCount = $target(this.$target, '[data-component="todoCount"]');
    new ToDoTitle($title, this.props);
    new ToDoForm($todoForm, this.props);
    new ToDoItems($todoItems, this.props);
    new ToDoCount($todoCount, this.props);
  }
}

export default ToDoWrapper;
