import React, { FC, SVGProps } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: FC<SVGProps<SVGSVGElement>>;
  color?: "blue" | "red" | "transparent";
};

export default function IconButtonComponent({
  type = "button",
  icon: Icon,
  color = "blue",
  onClick,
}: ButtonProps) {
  const colorVariants = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    transparent: "bg-inherit rounded-lg text-inherit hover:bg-gray-100",
  };
  return (
    <div className="w-full flex justify-end">
      <button
        type={type}
        className={`font-medium rounded-full px-4 py-4 focus:outline-none ${colorVariants[color]}`}
        onClick={onClick}
      >
        <Icon className="w-6" />
      </button>
    </div>
  );
}
