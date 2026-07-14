import type { Metadata } from "next";

import RecentProjectsAppsComponent from "@/_components/recent-projects/apps/recent-projects-apps-component";

export const metadata: Metadata = {
  title: "Recent App Projects",
  description:
    "A portfolio of recent app and online solution projects built by The Wright Designs.",
};

export default function RecentProjectsAppsPage() {
  return <RecentProjectsAppsComponent />;
}
