import {cn} from "@/lib/utils";
import {HandThumbUpIcon, ShareIcon} from "@heroicons/react/24/outline";
import {NumericFormat} from "react-number-format";

export default function DetailHeader({detail}) {
    return (
        <div className={"grid grid-cols-12 gap-4"}>
            <div className={"col-span-12 md:col-span-4"}>
                <img
                    src={detail.thumbnail}
                    alt={detail.title}
                    className={"object-cover w-full rounded-lg max-h-[250px]"}
                />
            </div>

            <div className={"col-span-12 md:col-span-8 flex flex-col gap-2"}>
                <div className={cn("font-bold text-3xl text-[#4a4a4a] inline-flex items-center")}>
                    <p
                        className={cn(
                            "bottom-2 rounded-full px-2 py-1 w-[100px] text-center",
                            "text-sm font-semibold inline-block mr-2"
                        )}
                        style={{
                            backgroundColor: detail.styleColor?.backgroundColor,
                            color: detail.styleColor?.color,
                        }}
                    >
                        {detail.status}
                    </p>
                    {detail.title}
                </div>

                <div className={cn("flex gap-2 items-center mt-3")}>
                    <img
                        src={detail.createBy?.avatar}
                        alt={detail.createBy?.username}
                        className={"size-12 rounded-full"}
                    />
                    <span className={cn("font-semibold text-xl leading-10")}>{detail.createBy?.name}</span>
                    <span className={cn("leading-10")}>{detail.createBy?.username}</span>
                </div>

                <div className={cn("flex gap-2 items-center mt-3")}>
                    <div className={cn("flex gap-2 items-center mt-3 text-gray-600")}>
                        <HandThumbUpIcon className={cn("size-5")}/>
                        <NumericFormat value={detail.like} thousandSeparator displayType="text"/>
                    </div>

                    <div className={cn("flex gap-2 items-center mt-3 text-gray-600")}>
                        <ShareIcon className={cn("size-5")}/>
                        <NumericFormat value={detail.share} thousandSeparator displayType="text"/>
                    </div>
                </div>
            </div>
        </div>
    )
}