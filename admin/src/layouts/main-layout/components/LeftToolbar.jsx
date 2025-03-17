import {cn} from "@/lib/utils";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import logoCircle from "@/assets/images/logo-circle.png";
import logoText from "@/assets/images/logo-text.png";
import {Link} from "react-router-dom";
import {ROUTES} from "@/routes/routes";

function LeftToolbar() {
    return (
        <div className={cn("bg-white rounded-lg min-w-[var(--left-toolbar-width)]")}>
            <div className={cn("h-[var(--header-height)] flex items-center justify-center gap-2")}>
                <img src={logoCircle || ""} alt="Logo page" className={cn("h-full max-h-[30px]")}/>
                <img src={logoText || ""} alt="Logo page" className={cn("h-full max-h-[30px]")}/>
            </div>

            <div className={cn("menu text-black px-2")}>
                <Link
                    to={ROUTES.RECIPES}
                    className={cn(
                        "text-sm/6 font-medium text-left line-clamp-1",
                        "px-2 py-2 flex w-full items-center justify-between hover:bg-gray-200"
                    )}
                >
                    Recipes
                </Link>
                <Disclosure as="div">
                    <DisclosureButton
                        className="group px-2 py-2 flex w-full items-center justify-between hover:bg-gray-200">
                        <span className="text-sm/6 font-medium text-left line-clamp-1">
                          Do you offer technical support?
                        </span>
                        <ChevronDownIcon className="size-5 text-black group-data-[open]:rotate-180 transition"/>
                    </DisclosureButton>
                    <DisclosurePanel className="text-sm/5 text-black pl-6 pr-2 py-2 hover:bg-gray-200">
                        No.
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    );
}

export default LeftToolbar;