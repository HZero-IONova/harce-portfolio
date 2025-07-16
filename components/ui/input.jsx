import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Custom Input component.
 * - Renders native <input> with styles.
 * - When type="number" it hides spinners and adds decimal support.
 */
export function Input({ className, type = "text", ...props }) {
  const isNumber = type === "number";

  return (
    <input
      // Use specified type (text, number, etc.)
      type={type}
      // If number: suggest decimal keyboard and restrict step/min
      {...(isNumber && { inputMode: "decimal", step: "0.01", min: "0" })}
      // Hide native spinner controls for number inputs
      style={
        isNumber
          ? {
              WebkitAppearance: "none",
              MozAppearance: "textfield",
              appearance: "none",
              margin: 0,
            }
          : undefined
      }
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
        className
      )}
      {...props}
    />
  );
}
