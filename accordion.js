// 即時関数。グローバル汚染対策
(() => {
  const $element = document.querySelector('#js-accordion');
  const $trigger = $element.getElementsByTagName('a');
  
  const triggerLength = $trigger.length;
  let index = 0;
  while(index < triggerLength) {
    $trigger[index].addEventListener('click', (e) => clickHandler(e));
    index++;
  }
  
  const clickHandler = (e) => {
    e.preventDefault();

    const $target = e.currentTarget;

    const $content = $target.nextElementSibling;
    if($content.style.display === 'block') {
      $content.style.display = 'none';
    } else {
      $content.style.display = 'block';
    }
  };
})();