import { useLayoutEffect } from "react";

const revealSelector = "[data-animate]";

export function useScrollReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const animatedElements = new Set<HTMLElement>();

    root.classList.add("has-scroll-reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("has-scroll-reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14
      }
    );

    const observeElement = (element: HTMLElement) => {
      if (animatedElements.has(element) || element.classList.contains("is-visible")) {
        return;
      }

      animatedElements.add(element);
      observer.observe(element);
    };

    const observeTree = (node: ParentNode) => {
      if (node instanceof HTMLElement && node.matches(revealSelector)) {
        observeElement(node);
      }

      node.querySelectorAll<HTMLElement>(revealSelector).forEach(observeElement);
    };

    observeTree(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeTree(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.classList.remove("has-scroll-reveal");
    };
  }, []);
}
