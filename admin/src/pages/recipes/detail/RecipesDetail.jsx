import {Link, useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {useMainLayout} from "@/layouts/main-layout/context/hooks/useMainLayout";
import {ROUTES} from "@/routes/routes";
import {dataRecipes} from "@/utils/mock";
import {parseColorStatus, STATUS_LIST} from "@/utils/string";
import {cn} from "@/lib/utils";
import {ChatBubbleBottomCenterTextIcon, ClockIcon, PencilSquareIcon, UserIcon} from "@heroicons/react/24/outline";
import {Button, Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import DetailHeader from "@/pages/recipes/components/DetailHeader";

export default function RecipesDetail() {
    const {id} = useParams();

    const {setBreadcrumbs} = useMainLayout();

    const [detail, setDetail] = useState({});

    const changeStatus = (status) => {
        console.log("------> Line: 10 | RecipesDetail.jsx changeStatus");
        console.log("------> Line: 11 | RecipesDetail.jsx status: ", status);
    }

    useEffect(() => {
        console.log("------> Line: 10 | RecipesDetail.jsx fetchDataDetail");
        setBreadcrumbs(
            [{
                title: "Home",
                link: ROUTES.HOME,
            }, {
                title: "Recipes",
                link: ROUTES.RECIPES,
            }, {
                title: detail.title,
                link: ROUTES.RECIPES_DETAIL.replace(":id", id),
            }]
        );
    }, [detail.title, id, setBreadcrumbs]);

    useEffect(() => {
        console.log("------> Line: 10 | RecipesDetail.jsx fetchDataDetail");
        console.log("------> Line: 11 | RecipesDetail.jsx id: ", id);

        const res = dataRecipes.find((item) => {
            return item.id === Number(id);
        });

        const {statusColor, color} = parseColorStatus(res.status);

        setDetail({
            ...res,
            styleColor: {
                backgroundColor: statusColor,
                color: color,
            }
        });
    }, [id]);

    return (
        <div className={cn("grid grid-cols-12 justify-center")}>
            <div className={cn("col-span-10 col-start-2 relative")}>
                <div className={cn("sticky top-0 bg-white pb-2 flex justify-end gap-3")}>
                    <Link
                        to={ROUTES.RECIPES_COMMENTS.replace(":id", id)}
                        className={cn(
                            "rounded-lg p-1 font-semibold hover:cursor-pointer",
                            "border-2 border-orange-ff9933 text-orange-ff9933",
                            "transition hover:bg-orange-ff9933 hover:text-white",
                            "flex items-center justify-between gap-2 px-3 py-2 text-nowrap"
                        )}
                    >
                        <ChatBubbleBottomCenterTextIcon className={cn("size-6")}/>
                        Comment management
                    </Link>
                    <Button
                        className={cn(
                            "rounded-lg p-1 font-semibold hover:cursor-pointer",
                            "border-2 border-orange-ff9933 text-white",
                            "transition bg-orange-ff9933 hover:bg-orange-f09030",
                            "flex items-center justify-between px-3 py-2 text-nowrap"
                        )}
                    >
                        <PencilSquareIcon className={cn("size-6")}/>
                        Edit
                    </Button>
                    <div className={"w-full max-w-[120px]"}>
                        <Menu>
                            <MenuButton
                                className={cn(
                                    "rounded-lg p-1 bg-gray-700 w-full hover:cursor-pointer",
                                    "flex items-center justify-between px-3 py-2 border-2 font-bold"
                                )}
                                style={{
                                    backgroundColor: detail.styleColor?.backgroundColor,
                                    color: detail.styleColor?.color,
                                    borderColor: detail.styleColor?.backgroundColor,
                                }}
                            >
                                {detail.status}
                                <ChevronDownIcon className={cn("size-6")}/>
                            </MenuButton>

                            <MenuItems
                                transition
                                anchor="bottom end"
                                className={cn(
                                    "w-52 max-w-full bg-gray-100 rounded-xl border border-gray-200 shadow-lg",
                                    "mt-1 text-sm/6 text-black transition duration-100 ease-out",
                                    "[--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                                )}
                            >
                                {Object.entries(STATUS_LIST).map(([key, value]) => {
                                    const {statusColor, color} = parseColorStatus(value);
                                    return (
                                        <MenuItem key={key}>
                                            <Button
                                                className={cn(
                                                    "group flex w-full items-center gap-2 py-1.5 px-3 font-bold",
                                                    "hover:bg-gray-200 w-full hover:cursor-pointer hover:brightness-95"
                                                )}
                                                style={{
                                                    backgroundColor: statusColor,
                                                    color: color,
                                                }}
                                                onClick={() => changeStatus(value)}
                                            >
                                                {value}
                                            </Button>
                                        </MenuItem>
                                    )
                                })}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>

                <div className={"flex flex-col gap-4"}>
                    <DetailHeader detail={detail}/>

                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 md:col-span-4 flex flex-col gap-4"}>
                            <p className={cn("text-2xl font-semibold text-[#4a4a4a]")}>Ingredient</p>

                            <div className={cn("flex gap-1 items-center")}>
                                <UserIcon className={cn("size-5")}/>
                                {detail.ingredients?.ration}
                            </div>

                            <div className={cn("flex flex-col gap-4")}>
                                {detail.ingredients?.parts?.map((item, idx) => (
                                    <div key={idx} className={cn("flex flex-col gap-1 items-start")}>
                                        <p className={cn("font-semibold text-xl")}>{item.name}</p>

                                        <div className={cn("w-full pr-10")}>
                                            {item.ingredients.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={cn(
                                                        "flex gap-2 items-center text-gray-600",
                                                        "border-b border-dashed border-gray-300 py-3"
                                                    )}
                                                >
                                                    <span className={cn("font-bold")}>{item.amount}</span>
                                                    <span>{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={"col-span-12 md:col-span-8 flex flex-col gap-4"}>
                            <p className={cn("text-2xl font-semibold text-[#4a4a4a]")}>Instructions on how to do it</p>

                            <div className={cn("flex gap-2 items-center text-gray-600")}>
                                <ClockIcon className={cn("size-6")}/>
                                <p>{detail.instructions?.time}</p>
                            </div>

                            <div className={cn("flex flex-col gap-4")}>
                                {detail.instructions?.steps?.map((item, idx) => (
                                    <Fragment key={idx}>
                                        <div className={cn("text-[#4a4a4a] text-lg flex gap-2 items-center")}>
                                            <p
                                                className={cn(
                                                    "size-8 bg-[#4a4a4a] text-white rounded-full",
                                                    "flex justify-center items-center font-bold"
                                                )}
                                            >
                                                {idx + 1}
                                            </p>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className={cn("flex gap-4 pl-10")}>
                                            {item.imgList.map((item, idx) => (
                                                <img
                                                    key={idx}
                                                    src={item || ""}
                                                    alt={detail.title}
                                                    className={cn("object-contain w-auto rounded-lg h-[150px]")}
                                                />
                                            ))}
                                        </div>
                                    </Fragment>
                                ))}

                                <div className="h-px bg-gray-200"/>

                                <div className={cn("flex gap-2 items-center justify-center text-gray-600")}>
                                    ID: {detail.id}
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 h-px bg-gray-200"/>
                    </div>
                </div>
            </div>
        </div>
    )
}