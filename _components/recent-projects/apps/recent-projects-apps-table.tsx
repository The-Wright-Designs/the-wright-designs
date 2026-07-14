import Image from "next/image";

import classNames from "classnames";

import technicalList from "@/_data/technical-data.json";

const statusOrder = ["In development", "Ongoing", "Completed"];

const sortProjects = (projects) => {
  return projects.sort((a, b) => {
    const statusComparison =
      statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    if (statusComparison !== 0) {
      return statusComparison;
    }
    return b.year - a.year;
  });
};

const gridLayout = "grid grid-cols-[1fr_1fr_2.5fr_100px_150px]";
const rowItemBorders = "border-l border-blue/25";
const rowItemSpacing = "p-4";
const headingItemStyling =
  "px-3 py-4 border-l border-l-blue/25 border-b-4 border-b-white text-white";

const RecentProjectsAppsTable = () => {
  const sortedProjects = sortProjects(technicalList.projectsList.apps);

  return (
    <>
      <div className={classNames("bg-pink shadow-md", gridLayout)}>
        <h2 className={classNames(headingItemStyling, "border-l-0")}>Title</h2>
        <h2 className={headingItemStyling}>Client</h2>
        <h2 className={headingItemStyling}>Description</h2>
        <h2 className={headingItemStyling}>Year</h2>
        <h2 className={headingItemStyling}>Status</h2>
      </div>
      <ul className="grid">
        {sortedProjects
          .slice(0, 6)
          .map(({ title, client, year, description, status, image }, index) => {
            return (
              <li
                key={index}
                className={classNames(gridLayout, {
                  "bg-pink/90 shadow-md": index % 2 !== 0,
                })}
              >
                <h3
                  className={classNames(
                    "text-paragraph normal-case text-left border-l-0",
                    rowItemBorders,
                    rowItemSpacing,
                    { "text-white": index % 2 !== 0 },
                  )}
                >
                  {title}
                </h3>

                <div
                  className={classNames(
                    "grid grid-cols-[2fr_1fr] gap-4",
                    rowItemBorders,
                    rowItemSpacing,
                  )}
                >
                  <p
                    className={classNames("text-left", {
                      "text-white": index % 2 !== 0,
                    })}
                  >
                    {client}
                  </p>
                  {image && (
                    <Image
                      src={image}
                      alt={client}
                      width={30}
                      height={30}
                      className="h-[30px] w-auto justify-self-center"
                    />
                  )}
                </div>
                <p
                  className={classNames(rowItemBorders, rowItemSpacing, {
                    "text-white": index % 2 !== 0,
                  })}
                >
                  {description}
                </p>
                <p
                  className={classNames(rowItemBorders, rowItemSpacing, {
                    "text-white": index % 2 !== 0,
                  })}
                >
                  {year}
                </p>
                <p
                  className={classNames("text-left", rowItemBorders, rowItemSpacing, {
                    "text-white": index % 2 !== 0,
                  })}
                >
                  {status}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RecentProjectsAppsTable;
