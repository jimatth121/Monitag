import { Box, Burger, Drawer, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo (2).png";

// import { useEffect } from "react";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =useDisclosure(false);
  // const navigate = useNavigate();

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
const navigate = useNavigate();
function openInNewTab(url) {
  window.open(url, '_blank');
}

  return (
    <Box className=" bg-[rgba(255,255,255,0.6)] backdrop-blur-md text-white lg:px-32 md:py-3 fixed z-[1000] w-full">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <NavLink to={"/"}>
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="logo"
              className="logo-width cursor-pointer w-[130px] md:w-[200px]"
            />
          </NavLink>

          <Group h="100%" gap={50} visibleFrom="sm" >
            {/* Use NavLink for navigation buttons */}

            <NavLink
              onClick={() => scrollToDiv("banner2")}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}   `
                  : `${classes.link}  font-PoppinsLight`
              }
            >
              Monitag and You
            </NavLink>

            <NavLink
              onClick={() => scrollToDiv("banner3")}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}   `
                  : `${classes.link}  font-PoppinsLight`
              }
            >
              Why Monitag?
            </NavLink>

            <NavLink
              onClick={()=>openInNewTab("https://www.monitagtechnologies.com/")}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}   `
                  : `${classes.link}  font-PoppinsLight  tracking-wide`
              }
            >
              The Monitag Story
            </NavLink>
          </Group>

          {/* <button className=" hidden md:block py-3 px-6 border-white border-[1px] rounded-3xl">
            Create Account
          </button> */}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="#008CFF"
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
            src={Logo}
            alt="logo"
            className="logo-width cursor-pointer w-[130px]"
          />
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          {/* <Divider my="sm" /> */}
          <div className="flex flex-col gap-10 mt-10">
            <NavLink
      
              onClick={() => {
                closeDrawer();
                scrollToDiv("banner2");
              }}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : `${classes.link2}  font-PoppinsLight`
              }
            >
              Monitag and You
            </NavLink>
            <NavLink
              onClick={() => {
                closeDrawer();
                scrollToDiv("banner3");
              }}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : `${classes.link2}  font-PoppinsLight`
              }
            >
                   Why Monitag?
            </NavLink>

            <NavLink
               onClick={()=>openInNewTab("https://www.monitagtechnologies.com/")}
              // onClick={closeDrawer}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : `${classes.link2}  font-PoppinsLight`
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
