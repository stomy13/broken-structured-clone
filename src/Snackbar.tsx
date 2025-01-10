import React, { useState, useEffect, FC } from "react";

interface SnackbarProps {
  message: string;
  duration?: number;
  onClose?: () => void;
  isOpen?: boolean;
  type?: "default" | "success" | "error" | "warning";
}

export const Snackbar: FC<SnackbarProps> = ({
  message,
  duration = 3000,
  onClose,
  isOpen = false,
  type = "default",
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);

    if (isOpen && duration !== Infinity) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isVisible) return null;

  const baseStyles: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "12px 24px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "300px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    animation: "slideIn 0.3s ease-out",
    zIndex: 1000,
  };

  const types: Record<string, React.CSSProperties> = {
    default: { background: "#333", color: "white" },
    success: { background: "#4caf50", color: "white" },
    error: { background: "#f44336", color: "white" },
    warning: { background: "#ff9800", color: "white" },
  };

  const closeButtonStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    color: "inherit",
    cursor: "pointer",
    marginLeft: "12px",
    padding: "4px",
    fontSize: "18px",
  };

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <div style={{ ...baseStyles, ...types[type] }}>
        <span>{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          style={closeButtonStyle}
        >
          ✕
        </button>
      </div>
    </>
  );
};
