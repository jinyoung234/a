import Header from "../components/Header.js";
import ToDoWrapper from "../components/ToDoWrapper.js";
import Component from "../core/Component.js";
import store from "../store/index.js";
import { $, $target } from "../util/dom.js";
import { genNewState } from "../util/mainpage.js";

class MainPage extends Component {
  init() {
    const initState = store.getLocalStorage()
      ? { ...store.getLocalStorage(), curCategory: "espresso" }
      : {
          menu: {
            espresso: [],
            frappuccino: [],
            blended: [],
            teavana: [],
            desert: [],
          },
          curCategory: "espresso",
        };
    this.state = initState;
  }

  mounted() {
    const $header = $target(this.$target, '[data-component="header"]');
    const $todoWrapper = $target(this.$target, '[data-component="todoWrapper"]');
    new Header($header, { ...this.state, updateCurCategory: this.updateCurCategory.bind(this) });
    new ToDoWrapper($todoWrapper, { ...this.state, addMenu: this.addMenu.bind(this) });
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

  addMenu() {
    const userMenuName = $("#menu-name").value;
    if (userMenuName === "") {
      alert("값을 입력해주세요.");
      return;
    }
    const newState = genNewState(this.state, userMenuName);
    store.setLocalStorage(newState);
    this.setState(newState);
    $("#menu-name").value = "";
  }
}

export default MainPage;
