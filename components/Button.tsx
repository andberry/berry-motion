import classNames from "classnames";
import { ReactNode } from "react";
export type TButtonVariant = "black" | "white" | "verb";
export const Button = ({
    href,
    children,
    variant = "black",
}: {
    href: string;
    children: ReactNode;
    variant?: TButtonVariant;
}) => {
    const bgClass =
        variant === "verb"
            ? `bg-verb hover:bg-black hover:text-verb`
            : variant === "black"
            ? "bg-black hover:bg-white hover:text-black"
            : "bg-white hover:bg-black hover:text-white";
    const textClass = variant === "white" ? "text-black" : "text-white";
    return (
        <button
            className={classNames(
                bgClass,
                textClass,
                "transition-all ease-linear duration-150",
                "font-playfair font-semibold uppercase",
                "py-3 px-4"
            )}
        >
            {children}
        </button>
    );
};
