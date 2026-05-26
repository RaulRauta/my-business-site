"use client";

import { useEffect } from "react";

export default function useModalBodyLock(
  isOpen: boolean,
  lockedScrollY: number,
  onEscape: () => void,
) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
    };

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onEscape();
      }
    }

    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.left = previousBodyStyles.left;
      document.body.style.right = previousBodyStyles.right;
      document.body.style.width = previousBodyStyles.width;
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);

      window.requestAnimationFrame(() => {
        window.scrollTo(0, lockedScrollY);
      });
    };
  }, [isOpen, lockedScrollY, onEscape]);
}
