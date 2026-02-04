import classNames from "classnames";

interface Props {
  onClick: () => void;
  showMenuToggle: boolean;
  cssClasses?: string;
}

const MenuButton = ({ onClick, showMenuToggle, cssClasses }: Props) => {
  return (
    <button
      className={`relative px-4 py-5 -m-3 z-20 desktopSmall:hidden ease-in-out duration-300 ${cssClasses}`}
      onClick={onClick}
      aria-label="Open and close navigation menu"
    >
      <div className="grid gap-1.5 -mb-1">
        <div
          className={classNames(
            "w-[26px] h-[3px] bg-beige rounded bg-black ease-in-out duration-[400ms] transform origin-center",
            {
              "rotate-[225deg] translate-x-[0px] translate-y-[4px]":
                showMenuToggle,
            }
          )}
        ></div>
        <div
          className={classNames(
            "w-[26px] h-[3px] bg-beige rounded bg-black ease-in-out duration-[400ms] transform origin-center",
            {
              "rotate-[135deg] translate-x-[0px] -translate-y-[5px]":
                showMenuToggle,
            }
          )}
        ></div>
      </div>
    </button>
  );
};

export default MenuButton;
