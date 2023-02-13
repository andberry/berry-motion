import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="px-6 mx-auto max-w-screen-2xl">{children}</div>;
};
