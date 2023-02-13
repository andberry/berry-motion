import React from "react";

export type TBgTitleVariants = "white" | "black";
export const BgTitle = ({
    children,
    variant = "white",
}: {
    children: React.ReactNode;
    variant?: TBgTitleVariants;
}) => {
    const textColorClass = `text-${variant}`;
    const bgColorClass = variant === "white" ? `bg-black` : "bg-white";
    return (
        <h2>
            <span
                className={`${textColorClass} ${bgColorClass} px-4 py-0 uppercase font-playfair font-normal text-hero1 leading-snug box-decoration-clone`}
            >
                {children}
            </span>
        </h2>
    );
};
