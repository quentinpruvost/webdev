// src/lib/actions/viewport.ts
export function viewport(element: HTMLElement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.dispatchEvent(new CustomEvent('enterViewport'));
      }
    });
  });

  observer.observe(element);

  return {
    destroy() {
      observer.unobserve(element);
    }
  };
}