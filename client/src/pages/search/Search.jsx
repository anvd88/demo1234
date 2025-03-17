import {cn} from "@/lib/utils";
import bgImage3 from "@/assets/img-3.jpg";
import bgImage6 from "@/assets/img-6.jpg";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";
import {Button, Checkbox, Field, Input, Label} from "@headlessui/react";
// import Pagination from "@/components/commons/Pagination";

function Search() {
    
    return (
       <div className={cn("flex flex-wrap gap-6 text-black pt-5 w-full px-[200px]")}>
            <div className={cn("relative w-full max-w-md")}>
                <MagnifyingGlassIcon
                    className={cn("size-5 absolute top-1/2 -translate-y-1/2 left-0 ml-4 fill-orange-500")}/>
                <Input 
                    type="text" 
                    placeholder="Tìm kiếm món ăn, công thức..." 
                    className={cn("text-gray-800 w-full pl-10 pr-4 py-2 border border-gray-300",
                        "rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ")}
                />
            </div>
            <div className={cn("flex flex-col w-full justify-start border-b border-dashed border-gray-300 pb-5 gap-3")} >
                <p className={cn("flex text-[26px] font-semibold text-[rgba(96,96,96,0.9)]")}>
                    Kết Quả CookPad Dành Cho Bạn
                </p>
                <div className={cn("flex flex-wrap gap-4")}>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt=""  className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
                            </p>
                            <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                <UserIcon className={cn("size-5 mr-2 fill-black")}/>Ta Huynh Nhu 
                            </p>
                        </div>
                    </Link>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt=""  className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
                            </p>
                            <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                <UserIcon className={cn("size-5 mr-2 fill-black")}/>Ta Huynh Nhu 
                            </p>
                        </div>
                    </Link>
                    <Link className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                        <div className={cn("relative")}>
                            <img src={bgImage6} alt=""  className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                            <span className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                Dưa Chua Xào Lòng
                            </span>
                        </div>
                        <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                            <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm
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

export default Search;
