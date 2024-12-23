import { Box, Burger, Drawer, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
// import { useEffect } from "react";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  // const navigate = useNavigate();

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box className=" text-white lg:px-32 py-3 fixed z-50 w-full">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <NavLink to={"/"}>
            <img
              // onClick={() => handleNavigation("/")}
              src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734438614/cld-sample-4.png"
              alt="logo"
              className="logo-width cursor-pointer"
            />
          </NavLink>

          <Group h="100%" gap={50} visibleFrom="sm" className="text-white">
            {/* Use NavLink for navigation buttons */}

            <NavLink
              onClick={() => scrollToDiv("banner")}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}  font-PoppinsSemiBold `
                  : classes.link
              }
            >
              Monitag and You
            </NavLink>

            <NavLink
              onClick={() => scrollToDiv("questions")}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}  font-PoppinsSemiBold `
                  : classes.link
              }
            >
              How we Help
            </NavLink>

            <NavLink
              to="https://monitag-technologies-dev.vercel.app/"
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}  font-PoppinsSemiBold `
                  : classes.link
              }
            >
              The Monitag Story
            </NavLink>
          </Group>

          <button className=" hidden md:block py-3 px-6 border-white border-[1px] rounded-3xl">
            Create Account
          </button>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        color="black"
        size="100%"
        padding="md"
        title={
          <img
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734677320/samples/logo.png"
            alt="logo"
            className="logo-width cursor-pointer"
          />
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          {/* <Divider my="sm" /> */}
          <div className="flex flex-col gap-10 mt-10">
            <NavLink
              to="/"
              onClick={() => {
                closeDrawer();
                scrollToDiv("banner");
              }}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : classes.link2
              }
            >
              Monitag and You
            </NavLink>
            <NavLink
              onClick={() => {
                closeDrawer();
                scrollToDiv("questions");
              }}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : classes.link2
              }
            >
              How we Help
            </NavLink>

            <NavLink
              to="https://monitag-technologies-dev.vercel.app/"
              onClick={closeDrawer}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : classes.link2
              }
            >
              The Monitag Story
            </NavLink>
          </div>

          {/* <Divider my="sm" /> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
