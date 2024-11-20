import ListItem from "../ListItem/ListItem";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DropdownNavItem = ({ item }) => {
  return (
    <NavigationMenuItem key={item?.label}>
      <NavigationMenuTrigger>{item?.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        {item?.content && Array.isArray(item.content) && (
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {item?.content.map((content) => (
              <ListItem
                key={content.title}
                title={content.title}
                to={content.href}
              >
                {content.description}
              </ListItem>
            ))}
          </ul>
        )}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default DropdownNavItem;
