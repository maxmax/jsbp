/**
 * Returns Dropdown events
 *
 * @param Object
 * const dropdown = new Dropdown({
 *   element: 'body',
 *   button: 'data-dropdown-btn',
 *   closest: '[data-dropdown]',
 *   active: 'dropdown_show',
 * });
 * dropdown.init();
 */

import PropTypes from 'prop-types';

class Dropdown {
  constructor(props) {
    this.props = props;
  }

  init() {
    const {element, button, closest, active} = this.props;
    dropdownElements(element, button, closest, active);
  }

}

const dropdownElements = (element, button, closest, active) => {
  var elements = document.querySelectorAll(element);
  for (var i = 0; i < elements.length; i++) {
    dropdownElement(elements[i], button, closest, active);
  }
}

const dropdownElement = (element, button, closest, active) => {
  element.onclick = function(event) {
    if (!event.target.hasAttribute(button)) return;
    if (!event.target.closest(closest)) return;
    event.target.closest(closest).classList.toggle(active);
    return false;
  }
}

Dropdown.propTypes = {
  element: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  closest: PropTypes.string,
  active: PropTypes.string,
}

export default Dropdown;
