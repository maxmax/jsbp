// UI Navigation
// export const uiNavigation = () => require('./ui.html');
// Example
// const topnavigation = new TopNavigation({items: [
//  {name: 'Home', to: '/'},
//  {name: 'Item 2', to: '/'},
//  {name: 'Item 3', to: '/'}
// ]});
// ${topnavigation.render()}

class TopNavigation {
  constructor(props) {
    this.props = props;
  }

  render() {
    this.topnavigation = getTopNavigation(this.props.items)
    return this.topnavigation;
  }
}

const getTopNavigation = (items = []) => {
  const itemsList = items.map(function(item) {
    return `<li class="navigation__menu__item"><a href=${item.to} class="navigation__menu__item__link">${item.name}</a></li>`;
  });
  const itemsWrapper = `
    <section class="navigation" data-navigation>
      <ul class="navigation__menu" data-navigation-menu>
        ${itemsList.join('')}
      </ul>
    </section>
  `;
  return itemsWrapper;
}

export default TopNavigation;
