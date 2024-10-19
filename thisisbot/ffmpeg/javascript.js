document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;

      // アコーディオンが開いているかどうかをチェック
      const isOpen = content.classList.contains('open');

      // アコーディオンを閉じる
      content.classList.toggle('open', !isOpen);

      // コンテンツの高さを動的に設定
      if (!isOpen) {
        // スタイルを一時的に適用して高さを取得
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        // 閉じる場合は高さを0に設定
        content.style.maxHeight = 0;
      }
    });
  });