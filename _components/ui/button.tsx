"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";

import classNames from "classnames";

import ArrowSvg from "@/_lib/arrow-svg";

interface Props {
  url?: string;
  children: ReactNode;
  cssClasses?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonColor?: "blue" | "pink" | "beige";
  form?: boolean;
  newTab?: boolean;
}

const Button = ({
  url,
  children,
  cssClasses,
  form,
  onClick,
  buttonColor = "blue",
  newTab,
}: Props) => {
  const { pending } = useFormStatus();

  const [arrowMove, setArrowMove] = useState(false);

  const buttonClasses = classNames(
    "flex gap-3 items-center justify-center px-5 py-[14px] rounded-xl shadow-md uppercase tracking-[0.72px] font-medium text-[18px] ease-in-out duration-300 desktopSmall:hover:cursor-pointer",
    cssClasses,
    {
      "bg-pink desktopSmall:hover:bg-pink/95 text-white": buttonColor === "pink",
      "bg-blue desktopSmall:hover:bg-blue/95 text-white": buttonColor === "blue",
      "bg-beige desktopSmall:hover:bg-beige/95 border-grey/50 text-blue":
        buttonColor === "beige",
    },
  );

  if (form) {
    return (
      <button
        type="submit"
        className={buttonClasses}
        onClick={onClick}
        onMouseEnter={() => setArrowMove(true)}
        onMouseLeave={() => setArrowMove(false)}
      >
        {pending ? (
          <div className="spinner"></div>
        ) : (
          <>
            {children}
            <ArrowSvg
              buttonColor={buttonColor}
              cssClasses={classNames("transform ease-in-out duration-[400ms]", {
                "desktopSmall:translate-x-[2px] desktopSmall:scale-105":
                  arrowMove,
                "desktopSmall:translate-x-0": !arrowMove,
              })}
            />
          </>
        )}
      </button>
    );
  } else {
    return (
      <Link
        href={url!}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <button
          className={buttonClasses}
          onClick={onClick}
          onMouseEnter={() => setArrowMove(true)}
          onMouseLeave={() => setArrowMove(false)}
          aria-label={children.toString()}
        >
          {children}
          <ArrowSvg
            buttonColor={buttonColor}
            cssClasses={classNames("ease-in-out duration-[400ms]", {
              "desktopSmall:translate-x-[2px] desktopSmall:scale-105":
                arrowMove,
              "desktopSmall:translate-x-0": !arrowMove,
            })}
          />
        </button>
      </Link>
    );
  }
};

export default Button;
