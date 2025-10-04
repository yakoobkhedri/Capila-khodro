
// tab

document.addEventListener('DOMContentLoaded', function () {
  let tabs = Array.from(document.getElementsByClassName('tab'));
  let tabContent = Array.from(document.getElementsByClassName('tabContent'));

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      let tabId = tab.dataset.id;

      // غیرفعال کردن همه تب‌ها
      tabs.forEach((t) => {
        t.classList.remove('active');
      });

      // غیرفعال کردن همه محتواها
      tabContent.forEach((content) => {
        content.classList.remove('active');
      });

      // فعال کردن تب و محتوای مربوطه
      tab.classList.add('active');
      let correspondingContent = tabContent.find(content => content.dataset.id === tabId);
      if (correspondingContent) {
        correspondingContent.classList.add('active');
      }
    });
  });
});