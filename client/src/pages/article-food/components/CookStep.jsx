import {cn} from "@/lib/utils";
import {Bars3Icon, CameraIcon, MinusIcon} from "@heroicons/react/20/solid";
import {Button, Input} from "@headlessui/react";
import ImageUpload from "@/components/commons/ImageUpload";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

export default function CookStep({form, item, index, field, removeIngredient_c}) {
    const {getValues} = form;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: item.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <div className={cn("flex flex-col mt-4 gap-4")} style={style} {...attributes}>
            <div className={cn("flex flex-wrap items-center gap-3")}>
                <div ref={setNodeRef} {...listeners}>
                    <Bars3Icon
                        className={cn("size-7 fill-gray-400 text-gray-500")}
                    />
                </div>
                <p className={cn("w-6 h-6 flex items-center justify-center bg-gray-700 text-white text-sm font-semibold",
                    "rounded-full mr-2.5 ")}>
                    {index + 1}
                </p>
                <Input
                    value={item.description || ""}
                    onChange={(e) => {
                        const arrayField = [...(getValues("cookSteps"))];
                        arrayField[index] = {
                            ...arrayField[index],
                            description: e.target.value
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

            <ImageUpload
                className={cn("rounded h-auto w-auto bg-transparent border-none items-start")}
                image={{
                    className: cn("h-[128px] w-[160px]")
                }}
                maxFiles={6}
                onChange={e => {
                    const updatedArray = [...(getValues("cookSteps"))]; // Tạo một bản sao mới
                    updatedArray[index] = {
                        ...updatedArray[index],
                        image_urls: e
                    };

                    field.onChange(updatedArray); // Cập nhật lại field
                }}
            >
                <div className={cn(
                    "flex items-center justify-center hover:cursor-pointer",
                    "h-[128px] w-[160px] bg-[#FAFAFA] border border-dashed border-[#0000003D]"
                )}>
                    <CameraIcon
                        className={cn("size-10 fill-gray-400 text-gray-500")}/>
                </div>
            </ImageUpload>
        </div>
    );
}