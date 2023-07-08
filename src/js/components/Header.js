import Component from "../core/Component.js";

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
}

export default Header;
