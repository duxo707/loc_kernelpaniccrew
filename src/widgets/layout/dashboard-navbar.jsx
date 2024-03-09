import { useNavigate, useLocation, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLive = () => {
    navigate("/connect")
  }

  const handleHome = () => {
    navigate("/")
  }
  
  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "p-4"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <Typography variant="h3" color="blue-gray" className="ml-12" onClick={handleHome}>
            LearnX
        </Typography>
        <div className="flex flex-row mx-auto">
          <Typography variant="h6" color="blue-gray" className="ml-12 font-semibold hover:cursor-pointer hover:text-gray-600" onClick={handleLive}>
            Live
          </Typography>
          <Typography variant="h6" color="blue-gray" className="ml-12 font-semibold hover:cursor-pointer hover:text-gray-600">
            Notes Sharing
          </Typography>
          <Typography variant="h6" color="blue-gray" className="ml-12 font-semibold hover:cursor-pointer hover:text-gray-600">
            Community
          </Typography>
          <Typography variant="h6" color="blue-gray" className="ml-12 font-semibold hover:cursor-pointer hover:text-gray-600">
            Lectures
          </Typography>
        </div>
        <div className="flex items-center">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <GiHamburgerMenu className="text-lg text-black" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
