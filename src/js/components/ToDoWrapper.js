import Component from "../core/Component.js";

class ToDoWrapper extends Component {
  template() {
    return `
        <div class="wrapper bg-white p-10">
            <div class="heading d-flex justify-between">
                <div data-component="title"></div>
                <div data-component="todoCount"></div>
            </div>
        </div>
        <div></div>
        <ul id="menu-list" class="mt-3 pl-0"></ul>
    `;
  }
}

export default ToDoWrapper;
