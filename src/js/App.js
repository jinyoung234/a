import Component from "./core/Component.js";
import MainPage from "./pages/MainPage.js";

class App extends Component {
  mounted() {
    const $app = this.$target;
    new MainPage($app);
  }
}

export default App;
