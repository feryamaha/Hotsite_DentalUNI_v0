"use client";
import * as React from "react";

type AccordionContextValue = {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

type RootProps = React.PropsWithChildren<{ type?: "single" | "multiple" }>; 
export function Root({ children }: RootProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());
  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };
  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  );
}

export const Header = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={className}>{children}</div>
);

export const Item = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{ className?: string; value?: string }>>(
  ({ className, children }, ref) => (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
);
Item.displayName = "Item";

export const Trigger = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<{ className?: string; value?: string }>>(
  ({ className, children, value = "item" }, ref) => {
    const ctx = React.useContext(AccordionContext);
    const open = !!ctx?.openItems.has(value);
    return (
      <button
        ref={ref}
        className={className}
        data-state={open ? "open" : "closed"}
        onClick={() => ctx?.toggleItem(value)}
        type="button"
      >
        {children}
      </button>
    );
  }
);
Trigger.displayName = "Trigger";

export const Content = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{ className?: string; value?: string }>>(
  ({ className, children, value = "item" }, ref) => {
    const ctx = React.useContext(AccordionContext);
    const open = !!ctx?.openItems.has(value);
    return (
      <div ref={ref} className={className} data-state={open ? "open" : "closed"}>
        {open ? children : null}
      </div>
    );
  }
);
Content.displayName = "Content";
