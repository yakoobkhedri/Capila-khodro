document.addEventListener('DOMContentLoaded', function() {
  // انتخاب تمام دکمه‌ها و محتواها
  const buttons = document.querySelectorAll('.btnSlide');
  const contents = document.querySelectorAll('.slideContent');
  const forms = document.querySelectorAll('form.slideContent');
  
  // افزودن event listener به هر دکمه
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const contentId = this.getAttribute('data-id');
      
      // حذف کلاس active از همه دکمه‌ها
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // افزودن کلاس active به دکمه کلیک شده
      this.classList.add('active');
      
      // مخفی کردن همه محتواها
      contents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = '0';
        content.style.visibility = 'hidden';
        content.style.display = 'none';
      });
      
      // نمایش محتوای مربوطه
      const targetContents = document.querySelectorAll(`.slideContent[data-id="${contentId}"]`);
      targetContents.forEach(content => {
        content.classList.add('active');
        content.style.display = 'block';
        setTimeout(() => {
          content.style.opacity = '100%';
          content.style.visibility = 'visible';
        }, 10);
      });
    });
  });
});