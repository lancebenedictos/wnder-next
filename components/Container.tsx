import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: String;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`container w-[80%] mx-auto flex min-h-screen flex-col items-center ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
