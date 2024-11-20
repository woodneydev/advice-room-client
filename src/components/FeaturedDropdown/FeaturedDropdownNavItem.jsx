import * as React from "react";
import { Link } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const FeaturedDropdownNavItem = ({ item }) => {
  const [firstContent, ...rest] = item.content;
  return (
    <>
      {item && (
        <NavigationMenuItem key={item?.label}>
          <NavigationMenuTrigger>{item?.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                {firstContent && typeof firstContent === "object" && (
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to={firstContent.href}
                    >
                      {firstContent?.icon && <img src={firstContent.icon} className={`h-6 w-6 ${firstContent?.className}`} />}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {firstContent?.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {firstContent?.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                )}
              </li>
              {rest.map((content) => {
                return (
                  <ListItem key={content?.title} to={content?.href} title={content?.title}>
                    {content?.description}
                  </ListItem>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )}
    </>
  );
};

export default FeaturedDropdownNavItem;
