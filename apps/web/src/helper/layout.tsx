import { Navbar } from "ui";
import { useRouter } from "next/router";

// icon
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ComputerIcon from "@mui/icons-material/Computer";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import StoreIcon from "@mui/icons-material/Store";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const defaultNav = [
    {
      title: "About",
      icon: {
        active: <InfoIcon />,
        inactive: <InfoOutlinedIcon />,
      },
    },
    {
      title: "Projects",
      icon: {
        active: <ComputerIcon />,
        inactive: <ComputerOutlinedIcon />,
      },
    },
    {
      title: "Contact",
      icon: {
        active: <ContactsIcon />,
        inactive: <ContactsOutlinedIcon />,
      },
    },
    {
      title: "Gallery",
      icon: {
        active: <PhotoLibraryIcon />,
        inactive: <PhotoLibraryOutlinedIcon />,
      },
    },
    {
      title: "Merch",
      icon: {
        active: <StoreIcon />,
        inactive: <StoreOutlinedIcon />,
      },
    },
  ];

  return (
    <>
      <Navbar navItems={defaultNav} curPath={router.asPath} />
      <div className="flex flex-row justify-center p-28">
        <main className="flex-grow font-roboto max-w-7xl">{children}</main>
      </div>
    </>
  );
}
