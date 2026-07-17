import { usePathname } from "next/navigation";
import Link from "next/link";

import data from "@/_data/general-data.json";
import classNames from "classnames";
import { normalizeNavUrl } from "@/_utils/normalize-nav-url";

const { navigation } = data;

interface Props {
  cssClasses?: string;
}

const DesktopMenu = ({ cssClasses }: Props) => {
  const currentRoute = usePathname();

  return (
    <nav
      className={classNames("hidden tablet:block ease-in-out duration-300", cssClasses)}
    >
      <ul className="flex gap-4 font-thin text-paragraph">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              href={normalizeNavUrl(item.url)}
              className={classNames(
                "desktopSmall:hover:cursor-pointer text-beige desktopSmall:hover:underline desktopSmall:hover:underline-offset-8 decoration-pink decoration-[2.5px]",
                {
                  "font-normal":
                    item.url === currentRoute ||
                    (item.title === "Recent Projects" &&
                      currentRoute === "/recent-projects/apps"),
                },
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
