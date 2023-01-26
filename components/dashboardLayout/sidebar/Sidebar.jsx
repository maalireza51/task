import Link from "next/link";
import { useRouter } from "next/router";
import { HiChevronLeft, HiOutlineHome,HiOutlineInformationCircle } from "react-icons/hi2";

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className="bg-white shadow-md w-72">
      <div className="p-2">
        <ul>
          <li className={`${router.pathname === "/dashboard" &&"bg-blue-400 text-white"} hover:bg-blue-400 hover:text-white mb-1 rounded-md transition duration-300`}>
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
          <li className={`${router.pathname === "/dashboard/baseinfo"&&"bg-blue-400 text-white"} hover:bg-blue-400 hover:text-white rounded-md transition duration-300`}>
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
