const block = document.querySelector('.block');

const addItemsToElem = (elem, items) => {
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.style.background = item.background
    elem.appendChild(div);
  });
};

const items = [
  {background: 'green'},
  {background: 'red'},
  {background: 'blue'},
  {background: 'yellow'},
];

let count = 0

function innerHtml (item) {
  item.innerHTML = ++count
}

const observer = new MutationObserver (
  (mutationList) => {
    mutationList.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        innerHtml(node)
      })
    })
  }
);

observer.observe(block, {childList: true});

setInterval(() => addItemsToElem(block, items), 3000);