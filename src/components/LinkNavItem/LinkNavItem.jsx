import * as React from "react";
import { Link } from "react-router-dom";

import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const LinkNavItem = ({ item }) => {
  return (
    <NavigationMenuItem key={item?.label}>
      <Link to={item?.href} className={navigationMenuTriggerStyle()}>
        {item?.label}
      </Link>
    </NavigationMenuItem>
  );
};

export default LinkNavItem;
