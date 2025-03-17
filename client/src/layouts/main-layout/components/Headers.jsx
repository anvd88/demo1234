import {cn} from "@/lib/utils";
import {
    ArrowLeftStartOnRectangleIcon,
    Cog6ToothIcon,
    PencilSquareIcon,
    UserCircleIcon
} from "@heroicons/react/20/solid";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {Link} from "react-router-dom";
import {ROUTES} from "@/routes/routes";

function Headers() {
    return (

        <div
            className={cn(
                "flex justify-end items-center py-1 px-4",
                "h-[var(--header-height)]"
            )}
        >
            <div className={cn("flex justify-end items-center bg-white rounded-lg h-full w-full px-4 gap-5")}>
                <div>
                    <Link
                        type="submit"
                        to={ROUTES.ARTICLE_POST}
                        className={cn(
                            "flex items-center gap-2 bg-white rounded-lg px-2.5 py-1.5",
                            "font-semibold text-gray-800 shadow-inner shadow-white/10 focus:outline-none transition-all",
                            "data-[focus]:outline-1 data-[focus]:outline-white",
                            "bg-[rgb(255,145,0)] data-[open]:bg-[rgb(255,145,0)] border border-solid border-[rgb(255,145,0)]-300",
                            "data-[hover]:text-neutral-200 data-[open]:text-neutral-200 text-[18px] w-[170px] text-white"
                        )}
                    >
                        <PencilSquareIcon className={cn("size-5 fill-white text-[rgb(255,145,0)]")}/>
                        Viết Món Mới
                    </Link>
                </div>
                <div>
                    <Menu>
                        <MenuButton
                            className="rounded-full p-1 bg-gray-700">
                            <UserCircleIcon className={cn("size-6 fill-white")}/>
                        </MenuButton>

                        <MenuItems
                            transition
                            modal={false}
                            anchor="bottom end"
                            className={cn(
                                "w-52 max-w-full bg-gray-100 rounded-xl border border-gray-200 shadow-2xl z-20",
                                "p-1 text-sm/6 text-black transition duration-100 ease-out",
                                "[--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                            )}
                        >
                            <MenuItem>
                                <Link
                                    to={ROUTES.ACCOUNT_SETTING}
                                    className={cn(
                                        "group flex w-full items-center gap-2 py-1.5 px-3",
                                        "hover:bg-gray-200 w-full rounded-lg"
                                    )}
                                >
                                    <Cog6ToothIcon className="size-4 fill-black"/>
                                    Account Setting
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    to={ROUTES.LOGOUT}
                                    className={cn(
                                        "group flex w-full items-center gap-2 py-1.5 px-3",
                                        "hover:bg-gray-200 w-full rounded-lg"
                                    )}
                                >
                                    <ArrowLeftStartOnRectangleIcon className="size-4 fill-black"/>
                                    Logout
                                </Link>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </div>

        /*<div className={cn("z-10 flex justify-end items-center",
            "h-[var(--header-height)] w-[calc(100%-var(--left-toolbar-width))] fixed top-0 right-0")}>


        </div>*/
    );
}

export default Headers;