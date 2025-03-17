import {cn} from "@/lib/utils";
import bgImage6 from "@/assets/img-6.jpg";
import {Bars3Icon, CameraIcon, MinusIcon, PencilSquareIcon, PlusIcon} from "@heroicons/react/20/solid";
import {Button, Field, Input} from "@headlessui/react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ImageUpload from "@/components/commons/ImageUpload";
import {ROUTES} from "@/routes/routes";
import {Link} from "react-router-dom";

const initialRecipe = {
    id: 1,
    title: "Dưa Chua Xào Lòng 1",
    description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
    image: bgImage6,
    ration: "2 người ăn",
    time: "30 phut",
    ingredients_c: [
        {
            id: 1,
            name: "Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
            image: [bgImage6, bgImage6]
        }, {
            id: 2,
            name: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
            image: [bgImage6]
        }
    ],
    user: {
        id: 1,
        name: "Ta Huynh Nhu",
        avt: bgImage6
    },
    ingredients: [
        {
            name: "500g bot ot",
            quantity: "",
        },
        {
            name: "600g hanh",
            quantity: "",
        }
    ],
    image_urls: [bgImage6, bgImage6]
}

const FormSchema = z.object({
    ingredients: z.array(z.string()),
    ingredients_c: z.array(z.string()),
    image_urls: z.array(z.string().nonempty("Image URL cannot be empty"))
        .min(1, "At least one image is required"),
})

function Update() {
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
        defaultValues: initialRecipe
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
        setValue("ingredients_c", [...(getValues("ingredients_c") || []), {
            name: "",
            quantity: ""
        }]);
    }

    const removeIngredient_c = (indexToRemove) => {
        setValue("ingredients_c", getValues("ingredients_c").filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className={cn("flex flex-wrap gap-6 text-black pt-5 w-full px-[200px]")}>
            <form className="w-full mt-5" onSubmit={handleSubmit()}>
                <div className={cn("flex flex-wrap w-full bg-white p-6 rounded-lg shadow-md")}>
                    <div className={cn("w-1/3 px-[20px]")}>
                        <Controller
                            control={control}
                            name="image"
                            render={({field}) => (
                                <Field>
                                    <ImageUpload
                                        defaultValue={[{imgSrc: defaultValues.image}]}
                                        image={{
                                            className: "w-full h-auto"
                                        }}
                                    >
                                        <Button
                                            {...field}
                                            type="submit"
                                            className={cn(
                                                "max-w-full h-[400px]",
                                                "p-6 rounded-lg text-center bg-[#F8F6F2] flex flex-col justify-center items-center gap-4"
                                            )}
                                        >
                                            <CameraIcon className={cn("size-10 fill-gray-400 text-gray-500")}/>
                                            <p className={cn("text-gray-600 font-semibold")}>Bạn đã đăng hình món mình
                                                nấu ở đây
                                                chưa?</p>
                                            <p className={cn("text-gray-400 text-sm")}>Chia sẻ với mọi người thành phẩm
                                                nấu nướng
                                                của bạn
                                                nào!</p>
                                        </Button>
                                    </ImageUpload>
                                </Field>
                            )}
                        />

                        <div className={cn("flex flex-col gap-2 mt-[40px] ")}>
                            <h2 className={cn("text-lg font-semibold text-gray-700 text-[20px]")}>Nguyên Liệu</h2>
                            <div className={cn("flex gap-8 items-center")}>
                                <p className={cn("text-semibold text-gray-500 text-[18px]")}>Khẩu phần:</p>
                                <Controller
                                    control={control}
                                    name="ration"
                                    render={({field}) => (
                                        <Field>
                                            <Input
                                                {...field}
                                                type="text" placeholder="2 người"
                                                className={cn("p-2 rounded-lg mt-2 font-bold bg-[#F8F6F2]",
                                                    "data-[focus]:outline-1 data-[focus]:outline-white text-gray-500")}/>
                                        </Field>
                                    )}
                                />
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
                        <Controller
                            control={control}
                            name="title"
                            render={({field}) => (
                                <Field>
                                    <Input
                                        {...field}
                                        className={cn("text-2xl w-full p-2 font-bold bg-[#F8F6F2] data-[focus]:outline-1",
                                            "data-[focus]:outline-white text-gray-500 rounded-lg")}
                                        placeholder="Tên món: Món canh bí ngon nhất nhà mình"/>
                                </Field>
                            )}
                        />
                        <div className={cn("flex items-center mt-4 space-x-3")}>
                            <img src={bgImage6 || ""} alt="" className={cn("rounded-full w-[40px] h-[40px]")}/>
                            <div>
                                <Controller
                                    control={control}
                                    name="user"
                                    render={({field}) => (
                                        <Field>
                                            <p className={cn("text-sm font-semibold text-gray-700")}>{initialRecipe.user.name}</p>
                                        </Field>
                                    )}
                                />
                                <p className={cn("text-xs text-gray-400")}>Hãy chia sẻ với mọi người về món này...</p>
                            </div>
                        </div>
                        <Controller
                            control={control}
                            name="description"
                            render={({field}) => (
                                <Field>
                                    <Input
                                        {...field}
                                        className={cn("text-2xl w-full p-2 font-bold bg-[#F8F6F2] data-[focus]:outline-1 rounded-lg",
                                            "data-[focus]:outline-white text-gray-500 text-sm h-[60px] placeholder:whitespace-pre-line w-auto min-w-full")}
                                        placeholder="Hãy chia sẻ với mọi người về món này của bạn nhé - ai đã truyền cảm hứng cho bạn, tại sao nó đặc biệt, bạn thích thưởng thức nó thế nào?"/>
                                </Field>
                            )}
                        />
                        <div className={cn("mt-[20px]")}>
                            <h2 className={cn("text-lg font-semibold text-gray-700 text-[20px]")}>Các bước</h2>
                            <div className={cn("flex flex-wrap gap-8 items-center")}>
                                <p className={cn("text-semibold text-gray-500 text-[18px]")}>Thời gian nấu</p>
                                <Controller
                                    control={control}
                                    name="time"
                                    render={({field}) => (
                                        <Field>
                                            <Input
                                                {...field}
                                                type="text"
                                                className={cn("text-2xl p-2 font-bold bg-[#F8F6F2] data-[focus]:outline-1 rounded-lg",
                                                    "data-[focus]:outline-white text-gray-500 text-sm placeholder:whitespace-pre-line whitespace-pre-line flex-grow-1")}
                                                placeholder="1 tiếng 30 phút"/>
                                        </Field>
                                    )}
                                />
                            </div>


                            <div className={cn("flex flex-col mt-4 gap-4")}>
                                <Controller
                                    control={control}
                                    name={`ingredients_c`}
                                    render={({field}) => {
                                        console.log("field Cahnge", field);
                                        return field.value.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={cn("flex flex-wrap items-center gap-3")}>
                                                        <Bars3Icon
                                                            className={cn("size-7 fill-gray-400 text-gray-500")}/>
                                                        <p className={cn("w-6 h-6 flex items-center justify-center bg-gray-700 text-white text-sm font-semibold",
                                                            "rounded-full mr-2.5 ")}>
                                                            {index + 1}
                                                        </p>
                                                        <Input
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
                                                            className={cn("text-2xl w-2/3 p-2 font-bold bg-[#F8F6F2] data-[focus]:outline-1 rounded-lg flex-grow",
                                                                "data-[focus]:outline-white text-gray-500 text-sm h-[60px] placeholder:whitespace-pre-line whitespace-pre-line")}
                                                            placeholder="Đậy kín hỗn hợp lại và để ở nhiệt độ phòng trong vòng 24-36 tiếng"/>
                                                        <Button
                                                            className={cn(
                                                                "flex items-center font-semibold bg-white text-gray-500",
                                                                "hover:cursor-pointer hover:bg-gray-100 transition"
                                                            )}
                                                            onClick={() => removeIngredient_c(index)}
                                                        >
                                                            <MinusIcon className={cn("size-10 fill-gray-400")}/>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }}
                                />
                                <div>
                                    <Controller
                                        control={control}
                                        name="image_urls"
                                        render={({field}) => (
                                            <ImageUpload
                                                defaultValue={defaultValues.image_urls.map((url) => ({imgSrc: url}))}
                                                // {...field}
                                                className={cn("rounded h-auto w-auto bg-transparent border-none items-start")}
                                                image={{
                                                    className: cn("h-[128px] w-[160px] justify-center")
                                                }}
                                                maxFiles={6}
                                                onChange={e => {
                                                    field.onChange([getValues("image_urls")?.[0] || "", ...(e || [])]);
                                                }}
                                                onError={(error) => {
                                                    setError("image_urls", {message: error.message});
                                                }}
                                            >
                                                <div className={cn(
                                                    "flex items-center justify-center hover:cursor-pointer",
                                                    "h-[128px] w-[160px] bg-[#FAFAFA] border border-dashed border-[#0000003D]"
                                                )}>
                                                    <CameraIcon className={cn("size-10 fill-gray-400 text-gray-500")}/>
                                                </div>
                                            </ImageUpload>
                                        )}
                                    />
                                </div>
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
                        Chỉnh Sửa
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default Update;
