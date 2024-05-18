import items from "./menuItemsdata";
import NevBarButton from "./NavBarButton";

interface itemsType {
  title: string;
  link: string;
}
export default function MenuItems() {
  return (
    <div className="flex gap-2 justify-between">
      {items.map((singleItem: itemsType) => (
        <NevBarButton
          key={singleItem.title}
          buttonText={singleItem.title}
          pageLink={singleItem.link}
        />
      ))}
    </div>
  );
}
