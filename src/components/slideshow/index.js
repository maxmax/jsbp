// Slideshow

const showContainer = (props) => {
  const {items, slide} = props;
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  items[slide].style.display = "block";
}

const slideshowElement = (element) => {

  let slideIndex = 0;
  const items = element.getElementsByClassName("slideshow__item");
  const prev = element.getElementsByClassName("slideshow__prev");
  const next = element.getElementsByClassName("slideshow__next");

  showContainer({
    items: items,
    slide: slideIndex
  });

  prev[0].onclick = function() {
    if (slideIndex < 1) {
      slideIndex = items.length - 1;
    } else {
      slideIndex += -1;
    }
    showContainer({items: items, slide: slideIndex});
  }

  next[0].onclick = function() {
    if (slideIndex + 1 > items.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex += 1;
    }
    showContainer({items: items, slide: slideIndex});
  }

}

const slideshowElements = (element) => {
  var elements = document.querySelectorAll(element);
  for (var i = 0; i < elements.length; i++) {
    slideshowElement(elements[i]);
  }
}

export class Slideshow {
  constructor(props) {
    // super(props);
    this.state = {
      element: props.element || null,
    };
  }

  initSlideshow() {
    const {element} = this.state;
    slideshowElements(element);
  }

}
