import type { Metadata } from "next";

import RecentProjectsWebsitesComponent from "@/_components/recent-projects/websites/recent-projects-websites-component";

export const metadata: Metadata = {
  title: "Recent Website Projects",
  description:
    "A portfolio of recent website design and development projects built by The Wright Designs.",
};

export default function RecentProjectsWebsitesPage() {
  return <RecentProjectsWebsitesComponent />;
}
