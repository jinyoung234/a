import Component from "../core/Component.js";

class ToDoCount extends Component {
  template() {
    const { menu, curCategory } = this.props;
    const menuCount = menu[curCategory]?.length ?? 0;
    return `
            <p class="mr-2 mt-4 menu-count">총 ${menuCount} 개</p>
        `;
  }
}

export default ToDoCount;
