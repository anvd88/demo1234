import {Link} from "react-router-dom";
import {ROUTES} from "@/routes/routes";
import {cn} from "@/lib/utils";
import {Input} from "@headlessui/react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useEffect, useState} from "react";
import {debounce} from "lodash";
import Pagination from "@/components/commons/Pagination";
import {useMainLayout} from "@/layouts/main-layout/context/hooks/useMainLayout";
import {parseColorStatus} from "@/utils/string";
import {dataRecipes as dataRecipesMock} from "@/utils/mock";

const itemsPerPage = 10;

const FormSchema = z.object({
    recipe: z.string(),
})

export default function Recipes() {
    const {setBreadcrumbs} = useMainLayout();

    useEffect(() => {
        setBreadcrumbs(
            [{
                title: "Home",
                link: ROUTES.HOME,
            }, {
                title: "Recipes",
                link: ROUTES.RECIPES,
            }]
        );
    }, [setBreadcrumbs]);

    const {control, handleSubmit, formState} = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            recipe: "",
        }
    })
    const {errors} = formState;
    console.log("------> Line: 42 | Recipes.jsx errors: ", errors);

    const [dataRecipes, setDataRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const onSearch = handleSubmit((data) => {
        console.log("------> Line: 52 | Recipes.jsx data: ", data);
    })

    const debouncedOnChange = debounce(() => {
        console.log("------> Line: 56 | Recipes.jsx debouncedOnChange");
        onSearch().then(r => r);
    }, 300);

    const onPageChange = (page) => {
        console.log("------> Line: 64 | Recipes.jsx page: ", page);
        setCurrentPage(page);
    }

    useEffect(() => {
        setDataRecipes(dataRecipesMock.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        setTotalPages(Math.ceil(dataRecipesMock.length / itemsPerPage));
    }, [currentPage]);

    return (
        <div className={cn("relative")}>
            <div className={cn("sticky top-0 z-10 bg-white flex flex-col gap-2 pb-2")}>
                <form className={cn("filter")} onSubmit={onSearch}>
                    <Controller
                        name="recipe"
                        control={control}
                        render={({field}) => (
                            <div className={cn("relative flex items-center gap-1 max-w-[400px]")}>
                                <Input
                                    {...field}
                                    placeholder={"Search recipes"}
                                    style={{paddingRight: "2.5rem"}}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        field.onChange(value);
                                        debouncedOnChange();
                                    }}
                                />

                                <MagnifyingGlassIcon className={cn("size-5 absolute right-3")}/>
                            </div>
                        )}
                    />
                </form>
            </div>

            <div className={cn("my-2 grid grid-cols-2 gap-4")}>
                {dataRecipes.map((item, idx) => {
                    const {statusColor, color} = parseColorStatus(item.status);
                    return (
                        <Link
                            key={idx}
                            to={ROUTES.RECIPES_DETAIL.replace(":id", String(idx + 1))}
                            className={cn(
                                "group flex gap-2 shadow-md hover:cursor-pointer hover:bg-[#f8f6f2]",
                                "transition rounded-lg overflow-hidden",
                                "border-gray-300 border-t-0 border-l-0 border-r-0 border-b "
                            )}
                        >
                            <div className={cn("relative overflow-hidden")}>
                                <img
                                    src={item.thumbnail || ""}
                                    alt="blankImage"
                                    className={cn("w-[120px] h-[170px] group-hover:scale-110 transition")}
                                />
                                <p
                                    className={cn(
                                        "absolute left-1/2 transform -translate-x-1/2",
                                        "bottom-2 rounded-full  px-2 py-1 w-[100px] text-center",
                                        "text-sm font-semibold "
                                    )}
                                    style={{backgroundColor: statusColor, color: color}}
                                >
                                    {item.status}
                                </p>
                            </div>
                            <div
                                className={cn(
                                    "flex flex-col gap-2 p-3 justify-between"
                                )}
                            >
                                <div>
                                    <p className={cn("text-2xl font-semibold line-clamp-1")}>
                                        {item.title}
                                    </p>
                                    <div className={cn("flex gap-2 items-center")}>
                                        <img
                                            src={item.createBy.avatar || ""}
                                            alt="Avatar"
                                            className={cn("size-8 rounded-full")}
                                        />
                                        <p>{item.createBy.name}</p>
                                    </div>
                                </div>
                                <div>
                                    Create at: {item.createAt}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className={cn("sticky bottom-0 bg-white p-2")}>
                <Pagination
                    currentPage={currentPage}
                    totalPage={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    )
}