"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import useModalBodyLock from "@/components/useModalBodyLock";

type ModalShellProps = {
  isOpen: boolean;
  onClose: () => void;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
};

export default function ModalShell({
  isOpen,
  onClose,
  labelledBy,
  children,
  className = "",
}: ModalShellProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useModalBodyLock(isOpen, onClose, panelRef);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[999] overflow-hidden overscroll-none bg-black/70 backdrop-blur-md touch-none"
          onClick={onClose}
        >
          <div className="flex min-h-[100dvh] items-start justify-center px-4 pb-6 pt-[5dvh] sm:items-center sm:pt-6">
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={labelledBy}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`relative max-h-[90dvh] w-full touch-pan-y overflow-y-auto overscroll-contain rounded-[2rem] [-webkit-overflow-scrolling:touch] ${className}`}
              onClick={(event) => event.stopPropagation()}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
