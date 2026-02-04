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
  target?: string;
  buttonColor?: "blue" | "pink" | "beige";
  outline?: boolean;
  form?: boolean;
  disabled?: boolean;
}

const Button = ({
  url,
  children,
  cssClasses,
  form,
  onClick,
  target,
  buttonColor = "blue",
  disabled,
  outline,
}: Props) => {
  const { pending } = useFormStatus();

  const [arrowMove, setArrowMove] = useState(false);

  const buttonClasses = classNames(
    `flex gap-3 items-center justify-center px-5 py-[14px] rounded-xl drop-shadow-md uppercase tracking-[0.72px] font-medium text-[18px] ease-in-out duration-300 ${cssClasses}`,
    {
      "bg-pink tablet:hover:bg-pink/95 text-white":
        buttonColor === "pink" && !outline,
      "bg-blue tablet:hover:bg-blue/95 text-white":
        buttonColor === "blue" && !outline,
      "bg-beige tablet:hover:bg-beige/95 border-grey/50 text-blue":
        buttonColor === "beige" && !outline,
      "bg-transparent border-2 border-blue text-blue tablet:hover:bg-grey/10":
        outline && buttonColor === "blue",
      "bg-transparent border-2 border-pink text-pink":
        outline && buttonColor === "pink",
      "bg-transparent border-2 border-beige text-beige":
        outline && buttonColor === "beige",
    },
  );

  if (form) {
    return (
      <button
        type="submit"
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
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
      <Link href={url!} target={target}>
        <button
          className={buttonClasses}
          onClick={onClick}
          onMouseEnter={() => setArrowMove(true)}
          onMouseLeave={() => setArrowMove(false)}
          aria-label={children.toString()}
        >
          {children}
          <ArrowSvg
            outline={outline}
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
