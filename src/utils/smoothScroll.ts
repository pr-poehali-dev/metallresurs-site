
/**
 * Инициализирует плавную прокрутку для всех ссылок с href, начинающимся с #
 */
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      }
    });
  });
};

/**
 * Удаляет обработчики событий плавной прокрутки
 */
export const cleanupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.removeEventListener('click', () => {});
  });
};
