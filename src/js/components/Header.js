import Component from "../core/Component.js";
import { $target } from "../util/dom.js";
import NavButton from "./NavButton.js";

class Header extends Component {
  template() {
    return `
        <a href="/" class="text-black">
          <h1 class="text-center font-bold">🌝 문벅스 메뉴 관리</h1>
        </a>
        <nav data-component="header" class="d-flex justify-center flex-wrap">
          
        </nav>
        `;
  }
  mounted() {
    const $header = $target(this.$target, '[data-component="header"]');
    const categoryArr = ["espresso", "frappuccino", "blended", "teavana", "desert"];
    const navButtonProps = categoryArr.map((categoryName) => {
      return {
        ...this.props,
        categoryName,
      };
    });
    new NavButton($header, navButtonProps);
  }
}

export default Header;
