class Component {
  $target;
  props;
  state;
  constructor(target, props) {
    this.$target = target;
    this.props = props;
    this.init();
    this.setEvent();
    this.render();
  }
  init() {}
  mounted() {}
  template() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...newState };
    this.render();
  }
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}

export default Component;
