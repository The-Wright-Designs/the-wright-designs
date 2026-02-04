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
      <div className={`bg-pink drop-shadow-md ${gridLayout}`}>
        <h2 className={`${headingItemStyling} border-l-0`}>Title</h2>
        <h2 className={`${headingItemStyling}`}>Client</h2>
        <h2 className={`${headingItemStyling}`}>Description</h2>
        <h2 className={`${headingItemStyling}`}>Year</h2>
        <h2 className={`${headingItemStyling}`}>Status</h2>
      </div>
      <ul className="grid">
        {sortedProjects
          .slice(0, 6)
          .map(({ title, client, year, description, status, image }, index) => {
            return (
              <li
                key={index}
                className={classNames(`${gridLayout}`, {
                  "bg-pink/90 drop-shadow-md": index % 2 !== 0,
                })}
              >
                <h3
                  className={`text-paragraph normal-case text-left ${rowItemBorders} border-l-0 ${rowItemSpacing} ${
                    index % 2 !== 0 && "text-white"
                  }`}
                >
                  {title}
                </h3>

                <div
                  className={`grid grid-cols-[2fr_1fr] gap-4 ${rowItemBorders} ${rowItemSpacing}`}
                >
                  <p className={`text-left ${index % 2 !== 0 && "text-white"}`}>
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
                  className={`${rowItemBorders} ${rowItemSpacing} ${
                    index % 2 !== 0 && "text-white"
                  }`}
                >
                  {description}
                </p>
                <p
                  className={`${rowItemBorders} ${rowItemSpacing} ${
                    index % 2 !== 0 && "text-white"
                  }`}
                >
                  {year}
                </p>
                <p
                  className={`${rowItemBorders} ${rowItemSpacing} ${
                    index % 2 !== 0 && "text-white"
                  }`}
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
