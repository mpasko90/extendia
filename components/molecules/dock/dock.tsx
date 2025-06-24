"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import React, { useRef } from "react";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex items-end gap-2 rounded-2xl border",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = 60,
      distance = 80,
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        return React.cloneElement(
          child as React.ReactElement<{
            mouseX?: MotionValue<number>;
            magnification?: number;
            distance?: number;
          }>,
          {
            mouseX: mouseX,
            magnification: magnification,
            distance: distance,
          },
        );
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - bounds.x);
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
        }}
        className={cn(dockVariants(), className)}
        {...props}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

interface DockIconProps extends Omit<React.ComponentProps<typeof motion.button>, 'style'> {
  className?: string;
  mouseX?: MotionValue<number>;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const DockIcon = ({
  children,
  mouseX,
  className,
  magnification = 2,
  distance = 80,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const defaultMouseX = useMotionValue(0);
  const activeMouseX = mouseX ?? defaultMouseX;

  const distanceFromMouse = useTransform<number, number>(activeMouseX, (val) => {
    if (!ref.current) return 0;
    const bounds = ref.current.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform<number, number>(distanceFromMouse, (val) => {
    return Math.max(magnification - (Math.abs(val) / distance) * magnification, 1);
  });

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.button
      ref={ref}
      style={{
        width: width.get() === 1 ? "auto" : width.get() * 32,
      }}
      className={cn(
        "aspect-square relative overflow-hidden rounded-lg outline-none hover:brightness-90 active:brightness-75 active:translate-y-px",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
