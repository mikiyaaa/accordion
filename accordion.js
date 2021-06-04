// 即時関数。グローバル汚染対策
(() => {

  class Accordion {
    // 初期化の呪文
    constructor(obj){

      console.log(obj.hookName);

      const $element = document.querySelector(obj.hookName);
      const $trigger = $element.getElementsByTagName(obj.tagName);
        
      const triggerLength = $trigger.length;
      let index = 0;
      while(index < triggerLength) {
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }

    // クリックしたら実行される処理
    clickHandler(e){
      e.preventDefault();

      const $target = e.currentTarget;

      const $content = $target.nextElementSibling;
      if($content.style.display === 'block') {
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    };
    
  }

  // インスタンスを生成・呼び出し
  const testAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const sampleAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
  })
  
  
})();