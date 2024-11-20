import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import FeaturedDropdownNavItem from "../FeaturedDropdown/FeaturedDropdownNavItem";
import DropdownNavItem from "../DropdownNavItem/DropdownNavItem";
import LinkNavItem from "../LinkNavItem/LinkNavItem";

const NavItems = ({ navConfig }) => {
  const navItems = navConfig.map((item) => {
    if (
      (item?.type.toLowerCase().includes("feature") &&
        item?.type.toLowerCase().includes("drop")) ||
      item?.type.toLowerCase() === "featured dropdown"
    )
      return <FeaturedDropdownNavItem item={item} />;
    if (
      (!item?.type.toLowerCase().includes("feature") &&
        item?.type.toLowerCase().includes("drop")) ||
      item?.type.toLowerCase() === "dropdown"
    )
      return <DropdownNavItem item={item} />;
    if (item?.type.toLowerCase() === "link") return <LinkNavItem item={item} />;
  });

  return (
    <NavigationMenu>
      <NavigationMenuList>{navItems}</NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItems;
