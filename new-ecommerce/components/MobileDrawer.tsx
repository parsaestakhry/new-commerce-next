import { List } from "@phosphor-icons/react/dist/ssr";
import { CategoryItem } from "./NavBar";

export const MobileDrawer = (props : any) => {
    const categories = props.categories
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
            <List size={20} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-700 text-base-content">
            {/* Sidebar content here */}
            <div className="collapse collapse-arrow bg-black">
              <input type="radio" name="accordion" defaultChecked={false} />
              <div className="collapse-title text-xl font-medium">
                Categories
              </div>
              <div className="collapse-content">
                {categories.map((item: CategoryItem, index: number) => (
                  <div
                    key={index}
                    className="btn btn-ghost mt-2 text-slate-100 flex"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
