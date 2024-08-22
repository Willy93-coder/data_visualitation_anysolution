import { TvIcon } from "@heroicons/react/24/solid";
import NavLinks from "../nav-links/nav-links";

/**
 * Displays a side navigation bar
 * @returns A side navigation bar
 */
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center gap-4 mb-12 md:p-2">
        <TvIcon className="w-8" />
        <p>Visualization data</p>
      </div>
      <NavLinks />
    </div>
  );
}
