import Component from "../core/Component.js";

class MainPage extends Component {
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
}

export default MainPage;
