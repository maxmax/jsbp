export class Wrapper {
  constructor(props) {
    this.props = props;
  }

  render() {
    const template = `<section>
      <div class="text-center">
        <div data-async-app-feed>${this.props.children}</div>
      </div>
      <br />
    </section>`;

    return template;
  }

}
