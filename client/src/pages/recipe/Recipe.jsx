import {cn} from "@/lib/utils";
import bgImage3 from "@/assets/img-3.jpg";
import bgImage6 from "@/assets/img-6.jpg";
import {
    BookmarkIcon,
    ClockIcon,
    MapPinIcon,
    PencilSquareIcon,
    UserGroupIcon,
    UserIcon
} from "@heroicons/react/20/solid";
import {Button} from "@headlessui/react";
import {ROUTES} from "@/routes/routes";
import {Link} from "react-router-dom";
import RecipesComments from "@/pages/recipe/components/RecipesComments";

function Recipe() {
    return (
        <div className={cn("flex flex-wrap gap-6 text-black pt-5 w-full px-[200px]")}>
            <div className={cn("flex gap-3 mt-[20px] w-full justify-start")}>
                <img src={bgImage6} alt="" className={cn("rounded-2xl w-[300px] h-[425px]")}/>
                <div className={cn("flex flex-col bg-[rgba(255,255,255,0.8)] px-4 gap-4")}>
                    <h2 className={cn("text-[30px] font-bold flex items-center text-[rgba(96,96,96,0.9)]")}>
                        BẮP CẢI muối chua ngọt
                    </h2>
                    <div className={cn("flex items-center gap-4 text-[rgba(96,96,96,0.9)]")}>
                        <img src={bgImage6} alt="" className={cn("rounded-full w-[40px] h-[40px]")}/>
                        <div className={cn("flex flex-col")}>
                            <p className={cn("text-[16px] font-bold flex items-center")}>
                                Hoàng Thị Tố Hà
                            </p>
                            <p className={cn("text-[16px] font-normal flex items-center")}>
                                <MapPinIcon className={cn("size-5 mr-2 fill-black")}/>
                                Huế
                            </p>
                        </div>
                    </div>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)]")}>
                        Là món dưa chua đơn giản, dân dã nhưng rất đưa cơm ... Không những thơm ngon, giúp tiêu hóa tốt
                        hơn mà lại còn giải ngán rất hiệu quả nữa
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgb(255,145,0)]")}>
                        #thucphamlenmen
                    </p>
                    <Button
                        type="submit"
                        className={cn(
                            "inline-flex items-center justify-center gap-2 bg-white py-1.5 px-3 text-sm/6 rounded-lg",
                            "font-semibold text-gray-800 shadow-inner shadow-white/10 focus:outline-none transition-all",
                            "data-[focus]:outline-1 data-[focus]:outline-white mt-[20px]",
                            "data-[hover]:bg-[rgb(255,145,0)] data-[open]:bg-[rgb(255,145,0)] border border-solid border-[rgb(255,145,0)]-300",
                            "data-[hover]:text-neutral-200 data-[open]:text-neutral-200 text-[18px] w-[150px] text-[rgb(255,145,0)]"
                        )}
                    >
                        <BookmarkIcon className={cn("size-5 fill-[rgb(255,145,0)] text-[rgb(255,145,0)]")}/>
                        Lưu Món
                    </Button>
                    <Link
                        type="submit"
                        to={ROUTES.ARTICLE_UPDATE}
                        className={cn(
                            "flex items-center gap-2 bg-white rounded-lg px-2.5 py-1.5 justify-center",
                            "font-semibold text-gray-800 shadow-inner shadow-white/10 focus:outline-none transition-all",
                            "data-[focus]:outline-1 data-[focus]:outline-white",
                            "bg-gray-500 data-[open]:bg-[rgb(255,145,0)] border border-solid border-[rgb(255,145,0)]-300",
                            "data-[hover]:text-neutral-200 data-[open]:text-neutral-200 text-[18px] w-[150px] text-white"
                        )}
                    >
                        <PencilSquareIcon className={cn("size-5 fill-white text-[rgb(255,145,0)]")}/>
                        Chỉnh Sửa
                    </Link>
                </div>
            </div>
            <div className={cn("flex w-full justify-start border-b border-dashed border-gray-300")}>
                <div className={cn("flex flex-col gap-3 w-1/3 pr-[100px]")}>
                    <h2 className={cn("text-[26px] font-bold text-[rgb(255,145,0)]")}>
                        Nguyên Liệu
                    </h2>
                    <p className={cn("flex items-center text-[16px] font-semibold text-[rgba(96,96,96,0.9)] py-[10px]")}>
                        <UserGroupIcon className={cn("size-5 mr-2 fill-black")}/>Nhiều người
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        <strong className={cn("mr-[6px]")}>500 gr</strong> bắp cải trắng
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        <strong className={cn("mr-[6px]")}>500 gr</strong> cà rốt
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        <strong className={cn("mr-[6px]")}>500 gr</strong> đậu cô ve
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        <strong className={cn("mr-[6px]")}>7 củ</strong> hành tím
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        <strong className={cn("mr-[6px]")}>7 tép</strong> tỏi
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        <strong className={cn("mr-[6px]")}>4 trái</strong> ớt
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        <strong className={cn("mr-[6px]")}>1 củ </strong> gừng
                    </p>
                    <p className={cn("flex text-[16px] font-semibold text-[rgba(96,96,96,0.9)] border-b border-dashed border-gray-300 pb-3.5")}>
                        Nước ngâm rau củ: muối, đường, giấm
                    </p>
                </div>
                <div className={cn("flex flex-col gap-3")}>
                    <h2 className={cn("text-[26px] font-bold text-[rgb(255,145,0)]")}>
                        Hướng dẫn cách làm
                    </h2>
                    <p className={cn("flex items-center text-[16px] font-semibold text-[rgba(96,96,96,0.9)] py-[10px]")}>
                        <ClockIcon className={cn("size-5 mr-2 fill-black")}/>30 phút
                    </p>
                    <div className={cn("flex flex-col gap-2 text-[rgba(96,96,96,0.9)] mb-[15px]")}>
                        <div className={cn("flex items-center")}>
                            <p className={cn("w-6 h-6 flex items-center justify-center bg-gray-700 text-white text-sm font-semibold rounded-full mr-2.5 ")}>
                                1
                            </p>
                            <span className={cn("text-[16px] font-medium")}>
                                Sơ chế nguyên liệu
                            </span>
                        </div>
                        <div className={cn("flex flex-col gap-1 text-[16px] font-medium pl-[30px]")}>
                            <p className={cn("mr-1")}>
                                - <span>Tất cả rau củ gọt vỏ rửa sạch xong lấy: bắp cải cắt khối nhỏ, đậu cô ve cắt hai, cà rốt cắt thanh, hành tỏi-gừng lột bỏ vỏ </span>
                            </p>
                            <p className={cn("mr-1")}>
                                - <span>Nấu nồi nước sôi cùng ít muối rồi trụng nhanh rau củ, vớt ra ngâm nước có đá 5 phút, để ráo </span>
                            </p>
                        </div>
                        <div className={cn("flex flex-wrap gap-2 pl-[30px]")}>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                        </div>
                    </div>
                    <div className={cn("flex flex-col gap-2 text-[rgba(96,96,96,0.9)] mb-[15px]")}>
                        <div className={cn("flex items-center")}>
                            <p className={cn("w-6 h-6 flex items-center justify-center bg-gray-700 text-white text-sm font-semibold rounded-full mr-2.5 ")}>
                                2
                            </p>
                            <span className={cn("text-[16px] font-medium")}>
                                Chuẩn bị
                            </span>
                        </div>
                        <div className={cn("flex flex-col gap-1 text-[16px] font-medium pl-[30px]")}>
                            <p className={cn("mr-1")}>
                                - <span>Tỏi, hành, gừng cắt lát</span>
                            </p>
                            <p className={cn("mr-1")}>
                                - <span>Nấu nước chua ngọt để muối dưa: Để 400gr nước lọc vào nồi cùng 120gr đường + 150gr giấm + 1 muỗng cafe muối rồi nấu sôi cho hỗn hợp tan xong để nguội </span>
                            </p>
                        </div>
                        <div className={cn("flex flex-wrap gap-2 pl-[30px]")}>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                        </div>
                    </div>
                    <div className={cn("flex flex-col gap-2 text-[rgba(96,96,96,0.9)] mb-[15px]")}>
                        <div className={cn("flex items-center")}>
                            <p className={cn("w-6 h-6 flex items-center justify-center bg-gray-700 text-white text-sm font-semibold rounded-full mr-2.5 ")}>
                                3
                            </p>
                            <span className={cn("text-[16px] font-medium")}>
                                Muối rau củ
                            </span>
                        </div>
                        <div className={cn("flex flex-col gap-1 text-[16px] font-medium pl-[30px]")}>
                            <p className={cn("mr-1")}>
                                - <span>Để rau củ đã ráo vào hủ chuyên dụng muối dưa hoặc keo-lọ rồi xếp xen kẽ hành, tỏi, gừng, ớt xen kẽ với nhau. Cuối cùng để nước giấm-đường vào & dùng miếng chặn để dưa lúc nào cùng ở dưới nước</span>
                            </p>
                            <p className={cn("mr-1")}>
                                - <span>Hai ngày sau bắp cải thấm là dùng được, đem cất ngăn mát tủ lạnh ăn được rất lâu</span>
                            </p>
                        </div>
                        <div className={cn("flex flex-wrap gap-2 pl-[30px]")}>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                        </div>
                    </div>
                    <div className={cn("flex flex-col gap-2 text-[rgba(96,96,96,0.9)] mb-[15px]")}>
                        <div className={cn("flex items-center")}>
                            <p className={cn("w-6 h-6 flex items-center justify-center bg-gray-700 text-white text-sm font-semibold rounded-full mr-2.5 ")}>
                                4
                            </p>
                            <span className={cn("text-[16px] font-medium")}>
                                Thành phẩm
                            </span>
                        </div>
                        <div className={cn("flex flex-col gap-1 text-[16px] font-medium pl-[30px]")}>
                            <p className={cn("mr-1")}>
                                - <span>Bắp cải muối chua ngọt với nhiều loại rau củ rất giòn ngon, độ chua-ngọt-mặn hài hòa, tạo nên một món ăn kèm đơn giản nhưng hấp dẫn</span>
                            </p>
                        </div>
                        <div className={cn("flex flex-wrap gap-2 pl-[30px]")}>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                            <img src={bgImage6} alt=""
                                 className={cn("rounded-2xl w-[140px] h-[115px] bg-center bg-no-repeat bg-cover")}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn("flex flex-col w-full justify-start border-b border-dashed border-gray-300 pb-5 gap-3")}>
                <p className={cn("flex text-[26px] font-semibold text-[rgba(96,96,96,0.9)]")}>
                    Viết bởi
                </p>
                <div className={cn("flex items-center gap-4 text-[rgba(96,96,96,0.9)]")}>
                    <img src={bgImage6} alt="" className={cn("rounded-full w-[96px] h-[96px]")}/>
                    <div className={cn("flex flex-col")}>
                        <p className={cn("text-[16px] font-bold ")}>
                            Hoàng Thị Tố Hà
                        </p>
                        <p className={cn("text-[16px] font-normal")}>
                            vào 20 tháng 2 năm 2025
                        </p>
                        <p className={cn("text-[16px] font-normal flex items-center")}>
                            <MapPinIcon className={cn("size-5 mr-2 fill-black")}/>
                            Huế
                        </p>
                        <Button
                            type="submit"
                            className={cn(
                                "inline-flex items-center justify-center gap-2 bg-[rgba(96,96,96,0.9)] text-sm/6 rounded-lg",
                                "font-semibold text-gray-800 shadow-inner shadow-white/10 focus:outline-none transition-all",
                                "data-[focus]:outline-1 data-[focus]:outline-white text-[12px] w-[100px] py-[5px] text-white"
                            )}
                        >
                            Kết Bạn Bếp
                        </Button>
                    </div>
                </div>

                <p className={cn("flex text-[16px] font-semibold")}>
                    Được tự tay chế biến những món ăn ngon & cùng những người thân yêu trong gia đình thưởng thức chính
                    tác phẩm ấy. Đó là niềm vui, là hạnh phúc của tôi
                </p>
            </div>

            <div className={cn("w-full")}>
                <RecipesComments id={1}/>
            </div>

            <div className={cn("flex flex-col w-full justify-start border-b border-dashed border-gray-300 pb-5 gap-3")}>
                <p className={cn("flex text-[26px] font-semibold text-[rgba(96,96,96,0.9)]")}>
                    Các Món Tương Tự
                </p>
                <div className={cn("flex flex-wrap gap-4")}>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt="" className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span
                                className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt,
                                Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
                            </p>
                            <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                <UserIcon className={cn("size-5 mr-2 fill-black")}/>Ta Huynh Nhu
                            </p>
                        </div>
                    </Link>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt="" className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span
                                className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt,
                                Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
                            </p>
                            <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                <UserIcon className={cn("size-5 mr-2 fill-black")}/>Ta Huynh Nhu
                            </p>
                        </div>
                    </Link>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt="" className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span
                                className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt,
                                Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
                            </p>
                            <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                <UserIcon className={cn("size-5 mr-2 fill-black")}/>Ta Huynh Nhu
                            </p>
                        </div>
                    </Link>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt="" className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span
                                className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt,
                                Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
                            </p>
                            <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                <UserIcon className={cn("size-5 mr-2 fill-black")}/>Ta Huynh Nhu
                            </p>
                        </div>
                    </Link>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt="" className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span
                                className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt,
                                Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
                            </p>
                            <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                <UserIcon className={cn("size-5 mr-2 fill-black")}/>Ta Huynh Nhu
                            </p>
                        </div>
                    </Link>

                </div>
            </div>

            <p className={cn("text-[20px] font-bold")}>Về Cookpad</p>
            <span className={cn("text-[16px] font-semibold")}>Sứ mệnh của Cookpad là làm cho việc vào bếp vui hơn mỗi ngày, 
                vì chúng tôi tin rằng nấu nướng là chìa khoá cho một cuộc sống hạnh phúc hơn và khoẻ mạnh hơn cho con người, cộng đồng, và hành tinh này. 
                Chúng tôi muốn hỗ trợ các đầu bếp gia đình trên toàn thế giới để họ có thể giúp đỡ nhau qua việc chia sẻ các món ngon và kinh nghiệm nấu ăn của mình.</span>

            <div className={cn("bg-center bg-no-repeat bg-cover w-full h-[100px]")}
                 style={{backgroundImage: `url(${bgImage3})`}}/>
        </div>
    );
}

export default Recipe;
