import Link from "next/link";
import { HiChevronLeft, HiOutlineHome,HiOutlineInformationCircle } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-md w-72">
      <div className="p-2">
        <ul>
          <li className="hover:bg-neutral-200 rounded-md transition duration-300">
            <Link
              href={"/dashboard"}
              className="flex justify-between p-3"
            >
              <HiChevronLeft className="w-5 h-5" />
              <div className="flex gap-2">
                <span>خانه</span>
                <HiOutlineHome  className="h-6 w-6"/>
              </div>
            </Link>
          </li>
          <li className="hover:bg-neutral-200 rounded-md transition duration-300">
            <Link
              href={"/dashboard/baseinfo"}
              className="flex justify-between p-3"
            >
              <HiChevronLeft className="w-5 h-5" />
              <div className="flex gap-2">
                <span>اطلاعات پایه</span>
                <HiOutlineInformationCircle  className="h-6 w-6"/>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
