export class List {
  constructor(props) {
    this.props = props;
  }

  render() {
    const {items, title} = this.props;

    const taxTitle = title ? '<h2>' + title + '</h2>' : '';

    const itemsList = items.map(function(item) {
      return `<li id="${'item-' + item.id}">${item.author} <strong>${item.subreddit}</strong></li>`;
    });

    const option = `
      <button data-async-app-feed-update>Update</button>
      <button data-async-app-feed-select="reactjs">Select React</button>
      <button data-async-app-feed-select="vue">Select Vue</button>
      <br />
    `;

    return `${taxTitle}${option}<ul>${itemsList.join('')}</ul>`;
  }

}
