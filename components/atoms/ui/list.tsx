import * as React from "react";
import { cn } from "@/lib/utils";

export const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("space-y-2 list-disc list-inside", className)}
    {...props}
  >
    {children}
  </ul>
));
List.displayName = "List";

export const ListItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li ref={ref} className={cn("text-sm leading-6", className)} {...props}>
    {children}
  </li>
));
ListItem.displayName = "ListItem";
