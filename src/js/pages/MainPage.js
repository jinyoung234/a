import Header from "../components/Header.js";
import ToDoWrapper from "../components/ToDoWrapper.js";
import Component from "../core/Component.js";
import { $target } from "../util/dom.js";

class MainPage extends Component {
  init() {
    this.state = {
      menu: {
        espresso: [],
        frappuccino: [],
        blended: [],
        teavana: [],
        desert: [],
      },
      curCategory: "espresso",
    };
  }
  mounted() {
    const $header = $target(this.$target, '[data-component="header"]');
    const $todoWrapper = $target(this.$target, '[data-component="todoWrapper"]');
    new Header($header, { ...this.state, updateCurCategory: this.updateCurCategory.bind(this) });
    new ToDoWrapper($todoWrapper, this.state);
  }
  template() {
    return `
        <div class="d-flex justify-center mt-5 w-100">
            <div data-component="main-page" class="w-100">
                 <header data-component="header"> </header>
                 <main data-component="todoWrapper" class="mt-10 d-flex justify-center"></main>
            <div/>
        </di>
    `;
  }
  updateCurCategory(categoryName) {
    this.setState({ ...this.state, curCategory: categoryName });
  }
}

export default MainPage;
