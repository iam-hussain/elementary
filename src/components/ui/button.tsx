import { cva, type VariantProps } from "class-variance-authority";
import { styled } from "nativewind";
import * as React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";

import { classMerge } from "../../utils";

// Define the variants for the button using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        transparent: "bg-transparent",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        auto: "h-auto px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const textVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      destructive: "text-destructive-foreground",
      outline: "hover:text-accent-foreground",
      secondary: "text-secondary-foreground",
      ghost: "hover:text-accent-foreground",
      transparent: "",
      link: "text-primary underline-offset-4 hover:underline",
      accent: "text-accent-foreground",
    },
    size: {
      default: "",
      sm: "text-xs",
      lg: "",
      icon: "",
      auto: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface IconProps {
  Icon: React.ElementType;
  iconPlacement: "left" | "right";
}

interface IconRefProps {
  Icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: ViewStyle; // Use ViewStyle here
}

export type ButtonIconProps = IconProps | IconRefProps;

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

export const Button = React.forwardRef<any, ButtonProps & ButtonIconProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      Icon,
      iconPlacement,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? StyledView : StyledPressable;

    return (
      <Comp
        ref={ref}
        className={classMerge(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {Icon && iconPlacement === "left" && (
          <StyledView className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
            <Icon />
          </StyledView>
        )}
        <StyledText className={classMerge(textVariants({ variant, size }))}>
          {props.children}
        </StyledText>
        {Icon && iconPlacement === "right" && (
          <StyledView className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon />
          </StyledView>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

