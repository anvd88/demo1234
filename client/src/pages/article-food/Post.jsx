import {cn} from "@/lib/utils";
import bgImage6 from "@/assets/img-6.jpg";
import {CameraIcon, MinusIcon, PencilSquareIcon, PlusIcon} from "@heroicons/react/20/solid";
import {Button, Input} from "@headlessui/react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ImageUpload from "@/components/commons/ImageUpload";
import {ROUTES} from "@/routes/routes";
import {Link} from "react-router-dom";
import {DndContext} from "@dnd-kit/core";
import {arrayMove, SortableContext} from "@dnd-kit/sortable";
import CookStep from "@/pages/article-food/components/CookStep";
import {v4 as uuidv4} from "uuid";

const FormSchema = z.object({
    ingredients: z.array(z.object({
        name: z.string(),
        quantity: z.string().optional()
    })).default([]), 
    cookSteps: z.array(z.object({
        id: z.string(),
        description: z.string(),
        image_urls: z.array(z.string()).default([])
    })).default([]), 
    image_urls: z.array(z.string().nonempty("Image URL cannot be empty")).default([]) 
});

const INITIAL_TASKS = [
    {
        id: '1',
        title: 'Research Project',
        description: 'Gather requirements and create initial documentation',
        status: 'TODO',
    },
    {
        id: '2',
        title: 'Design System',
        description: 'Create component library and design tokens',
        status: 'TODO',
    },
    {
        id: '3',
        title: 'API Integration',
        description: 'Implement REST API endpoints',
        status: 'IN_PROGRESS',
    },
    {
        id: '4',
        title: 'Testing',
        description: 'Write unit tests for core functionality',
        status: 'DONE',
    },
];

function Post() {
    const {
        control,
        handleSubmit,
        formState,
        getValues,
        watch,
        setValue,
        setError
    } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            ingredients: [{
                name: "",
                quantity: "",
            }],
            cookSteps: [{
                id: uuidv4(),
                description: "",
                image_urls: []
            }],
        }
    });
    const {defaultValues, errors} = formState;
    console.log("watch()", watch());

    const addIngredient = () => {
        setValue("ingredients", [...(getValues("ingredients") || []), {
            name: "",
            quantity: ""
        }]);
    }

    const removeIngredient = (indexToRemove) => {
        setValue("ingredients", getValues("ingredients").filter((_, index) => index !== indexToRemove));
    };

    const addIngredient_c = () => {
        setValue("cookSteps", [...(getValues("cookSteps") || []), {
            id: uuidv4(),
            description: "",
            image_urls: []
        }]);
    }

    const removeIngredient_c = (indexToRemove) => {
        setValue("cookSteps", getValues("cookSteps").filter((_, index) => index !== indexToRemove));
    };

    function handleDragEnd(event) {
        const {active, over} = event;

        if (!over || active.id === over.id) return;

        const items = getValues("cookSteps");
        // console.log("------> Line: 105 | Post.jsx : ", );
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newArrayMoved = arrayMove(items, oldIndex, newIndex);

        setValue("cookSteps", newArrayMoved);
    }

    return (
        <div className={cn("flex flex-wrap gap-6 text-black pt-5 w-full px-[200px]")}>
            <form className="w-full mt-5" onSubmit={handleSubmit()}>
                <div className={cn("flex flex-wrap w-full bg-white p-6 rounded-lg shadow-md")}>
                    <div className={cn("w-1/3 px-[20px]")}>

                        <ImageUpload
                            image={{
                                className: "w-full h-auto"
                            }}
                        >
                            <Button
                                type="submit"
                                className={cn(
                                    "max-w-full h-[400px]",
                                    "p-6 rounded-lg text-center bg-[#F8F6F2] flex flex-col justify-center items-center gap-4"
                                )}
                            >
                                <CameraIcon className={cn("size-10 fill-gray-400 text-gray-500")}/>
                                <p className={cn("text-gray-600 font-semibold")}>Bạn đã đăng hình món mình nấu ở đây
                                    chưa?</p>
                                <p className={cn("text-gray-400 text-sm")}>Chia sẻ với mọi người thành phẩm nấu nướng
                                    của bạn
                                    nào!</p>
                            </Button>
                        </ImageUpload>

                        <div className={cn("flex flex-col gap-2 mt-[40px] ")}>
                            <h2 className={cn("text-lg font-semibold text-gray-700 text-[20px]")}>Nguyên Liệu</h2>
                            <div className={cn("flex gap-8 items-center")}>
                                <p className={cn("text-semibold text-gray-500 text-[18px]")}>Khẩu phần:</p>
                                <Input type="text" placeholder="2 người"
                                       className={cn("p-2 rounded-lg mt-2 font-bold bg-[#F8F6F2]",
                                           "data-[focus]:outline-1 data-[focus]:outline-white text-gray-500")}/>
                            </div>
                            <div className={cn("mt-4")}>
                                <div className={cn("flex flex-col gap-4")}>
                                    <Controller
                                        control={control}
                                        name={`ingredients`}
                                        render={({field}) => {
                                            console.log("field Cahnge", field);
                                            return field.value.map((item, index) => {
                                                return (
                                                    <div key={index} className={cn("flex items-center gap-2 w-full")}>
                                                        <Input
                                                            type="text"
                                                            placeholder="250g bột"
                                                            value={item.name + (item.quantity ? " " + item.quantity : "")}
                                                            onBlur={(e) => {
                                                                const [name, ...restQuantity] = (e.target.value || "").trim().split(" ");
                                                                const quantity = restQuantity.join(" ");

                                                                const arrayField = field.value;
                                                                arrayField[index] = {
                                                                    ...arrayField[index],
                                                                    name,
                                                                    quantity
                                                                }
                                                                field.onChange(arrayField);
                                                            }}
                                                            onChange={(e) => {
                                                                const arrayField = field.value;
                                                                console.log("arrayField", arrayField);
                                                                arrayField[index] = {
                                                                    ...arrayField[index],
                                                                    name: e.target.value
                                                                }

                                                                field.onChange(arrayField);
                                                            }}
                                                            className={cn("p-2 rounded-lg font-bold bg-[#F8F6F2] data-[focus]:outline-1",
                                                                " data-[focus]:outline-white text-gray-500 flex-grow")}
                                                        />
                                                        <Button
                                                            className={cn(
                                                                "flex items-center font-semibold bg-white text-gray-500",
                                                                "hover:cursor-pointer hover:bg-gray-100 transition"
                                                            )}
                                                            onClick={() => removeIngredient(index)}
                                                        >
                                                            <MinusIcon className={cn("size-10 fill-gray-400")}/>
                                                        </Button>
                                                    </div>
                                                )
                                            })
                                        }}
                                    />
                                </div>

                                <Button
                                    className={cn("py-1 px-3 transition flex items-center font-semibold bg-white text-gray-500 mt-[20px] hover:cursor-pointer hover:bg-gray-100")}
                                    onClick={addIngredient}
                                >
                                    <PlusIcon className={cn("size-7 fill-gray-400 mr-1")}/>
                                    Phần nguyên liệu
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cn("flex flex-col w-2/3 px-[20px] gap-4")}>
                        <Input className={cn("text-2xl w-full p-2 font-bold bg-[#F8F6F2] data-[focus]:outline-1",
                            "data-[focus]:outline-white text-gray-500 rounded-lg")}
                               placeholder="Tên món: Món canh bí ngon nhất nhà mình"/>
                        <div className={cn("flex items-center mt-4 space-x-3")}>
                            <img src={bgImage6 || ""} alt="" className={cn("rounded-full w-[40px] h-[40px]")}/>
                            <div>
                                <p className={cn("text-sm font-semibold text-gray-700")}>Sơn Nguyễn</p>
                                <p className={cn("text-xs text-gray-400")}>Hãy chia sẻ với mọi người về món này...</p>
                            </div>
                        </div>
                        <Input
                            className={cn("text-2xl w-full p-2 font-bold bg-[#F8F6F2] data-[focus]:outline-1 rounded-lg",
                                "data-[focus]:outline-white text-gray-500 text-sm h-[60px] placeholder:whitespace-pre-line")}
                            placeholder="Hãy chia sẻ với mọi người về món này của bạn nhé - ai đã truyền cảm hứng cho bạn, tại sao nó đặc biệt, bạn thích thưởng thức nó thế nào?"/>
                        <div className={cn("mt-[20px]")}>
                            <h2 className={cn("text-lg font-semibold text-gray-700 text-[20px]")}>Các bước</h2>
                            <div className={cn("flex flex-wrap gap-8 items-center")}>
                                <p className={cn("text-semibold text-gray-500 text-[18px]")}>Thời gian nấu</p>
                                <Input type="text"
                                       className={cn("text-2xl p-2 font-bold bg-[#F8F6F2] data-[focus]:outline-1 rounded-lg",
                                           "data-[focus]:outline-white text-gray-500 text-sm placeholder:whitespace-pre-line whitespace-pre-line flex-grow-1")}
                                       placeholder="1 tiếng 30 phút"/>
                            </div>


                            <div className={cn("flex flex-col mt-4 gap-4")}>
                                <Controller
                                    control={control}
                                    name={"cookSteps"}
                                    render={({field}) => {
                                        return (
                                            <DndContext onDragEnd={handleDragEnd}>
                                                <SortableContext items={field.value}>
                                                    {field.value.map((item, index) => {
                                                        return (
                                                            <CookStep
                                                                form={{getValues}}
                                                                key={index}
                                                                item={item}
                                                                index={index}
                                                                field={field}
                                                                removeIngredient_c={removeIngredient_c}
                                                            />
                                                        );
                                                    })}
                                                </SortableContext>
                                            </DndContext>
                                        )
                                    }}
                                />
                                <Button
                                    className={cn("py-1 px-3 transition flex items-center justify-center font-semibold bg-white text-gray-500 mt-[20px] hover:cursor-pointer hover:bg-gray-100")}
                                    onClick={addIngredient_c}
                                >
                                    <PlusIcon className={cn("size-7 fill-gray-400 mr-1")}/>
                                    Thêm công thức
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={cn("mt-5 flex items-center justify-end gap-2")}>
                    <Link
                        to={ROUTES.HOME}
                        className={cn(
                            "flex items-center gap-2 bg-white rounded-lg px-2.5 py-1.5 text-center justify-center",
                            "font-semibold text-gray-800 shadow-inner shadow-white/10 focus:outline-none transition-all",
                            "data-[focus]:outline-1 data-[focus]:outline-white",
                            "bg-red-400 data-[open]:bg-[rgb(255,145,0)] border border-solid border-[rgb(255,145,0)]-300",
                            "data-[hover]:text-neutral-200 data-[open]:text-neutral-200 text-[18px] w-[200px] text-white"
                        )}>
                        Thoát
                    </Link>
                    <Button
                        type="submit"
                        className={cn(
                            "flex items-center gap-2 bg-white rounded-lg px-2.5 py-1.5 justify-center",
                            "font-semibold text-gray-800 shadow-inner shadow-white/10 focus:outline-none transition-all",
                            "data-[focus]:outline-1 data-[focus]:outline-white",
                            "bg-gray-500 data-[open]:bg-[rgb(255,145,0)] border border-solid border-[rgb(255,145,0)]-300",
                            "data-[hover]:text-neutral-200 data-[open]:text-neutral-200 text-[18px] w-[200px] text-white"
                        )}
                    >
                        <PencilSquareIcon className={cn("size-5 fill-white text-[rgb(255,145,0)]")}/>
                        Đăng Món Ăn
                    </Button>
                </div>
            </form>

            {/*<DevTool control={control}/>*/}
        </div>
    )
}

export default Post;
