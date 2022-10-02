import { Navbar } from "ui";
import { useRouter } from "next/router";

// icon
import {
  InfoRounded,
  InfoOutlined,
  ComputerOutlined,
  ComputerRounded,
  ContactsOutlined,
  ContactsRounded,
  PhotoLibraryOutlined,
  PhotoLibraryRounded,
  StoreOutlined,
  StoreRounded,
} from "@mui/icons-material";

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const defaultNav = [
    {
      title: "About",
      icon: {
        active: <InfoRounded />,
        inactive: <InfoOutlined />,
      },
    },
    {
      title: "Projects",
      icon: {
        active: <ComputerRounded />,
        inactive: <ComputerOutlined />,
      },
    },
    {
      title: "Contact",
      icon: {
        active: <ContactsRounded />,
        inactive: <ContactsOutlined />,
      },
    },
    {
      title: "Gallery",
      icon: {
        active: <PhotoLibraryRounded />,
        inactive: <PhotoLibraryOutlined />,
      },
    },
    {
      title: "Merch",
      icon: {
        active: <StoreRounded />,
        inactive: <StoreOutlined />,
      },
    },
  ];

  return (
    <>
      <Navbar navItems={defaultNav} curPath={router.asPath} />
      <div className="flex flex-col min-h-screen ml-24 mt-4">
        <main className="flex-grow font-roboto">{children}</main>
      </div>
    </>
  );
}
