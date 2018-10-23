// Dropdown

const dropdownElement = (element, button, closest, active) => {
  element.onclick = function(event) {
    if (!event.target.hasAttribute(button)) return;
    if (!event.target.closest(closest)) return;
    event.target.closest(closest).classList.toggle(active);
    return false;
  }
}

const dropdownElements = (element, button, closest, active) => {
  var elements = document.querySelectorAll(element);
  for (var i = 0; i < elements.length; i++) {
    dropdownElement(elements[i], button, closest, active);
  }
}

export class Dropdown {
  constructor(props) {
    this.state = {
      element: props.element || null,
      button: props.button || 'data-dropdown-btn',
      closest: props.closest || '[data-dropdown]',
      active: props.active || 'dropdown_show',
    };
  }

  initDropdown() {
    const {element, button, closest, active} = this.state;
    dropdownElements(element, button, closest, active)
  }

}
