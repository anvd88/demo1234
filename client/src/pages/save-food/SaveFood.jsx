import {cn} from "@/lib/utils";
import bgImage3 from "@/assets/img-3.jpg";
import bgImage6 from "@/assets/img-6.jpg";
import {UserIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import {ROUTES} from "@/routes/routes";
import Pagination from "@/components/commons/Pagination";
import {useEffect, useState} from "react";
// import Pagination from "@/components/commons/Pagination";

const dataRecipesMock = [
    {
        id: 1,
        title: "Dưa Chua Xào Lòng 1",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 2,
        title: "Dưa Chua Xào Lòng 2",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 3,
        title: "Dưa Chua Xào Lòng 3",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 4,
        title: "Dưa Chua Xào Lòng 4",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 5,
        title: "Dưa Chua Xào Lòng 5",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 6,
        title: "Dưa Chua Xào Lòng 6",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 7,
        title: "Dưa Chua Xào Lòng 7",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 8,
        title: "Dưa Chua Xào Lòng 8",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 9,
        title: "Dưa Chua Xào Lòng 9",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 10,
        title: "Dưa Chua Xào Lòng 10",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 11,
        title: "Dưa Chua Xào Lòng 11",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 12,
        title: "Dưa Chua Xào Lòng 12",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 13,
        title: "Dưa Chua Xào Lòng 13",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 14,
        title: "Dưa Chua Xào Lòng 14",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 15,
        title: "Dưa Chua Xào Lòng 15",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 16,
        title: "Dưa Chua Xào Lòng 16",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }, {
        id: 17,
        title: "Dưa Chua Xào Lòng 17",
        description: "lòng gà, Rượu trắng, gừng củ nhỏ,bắp cải trắng, cà rốt,rau răm,củ hành tím, tỏi, ớt, Nước trộn gỏi & nước mắm chấm: Chanh, muối, nước mắm, đường, giấm",
        image: bgImage6,
        user: {
            id: 1,
            name: "Ta Huynh Nhu"
        },
    }
]

const itemsPerPage = 10;

function SaveFood() {
    const [dataRecipes, setDataRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const onPageChange = (page) => {
        console.log("------> Line: 64 | Recipes.jsx page: ", page);
        setCurrentPage(page);
    }

    useEffect(() => {
        setDataRecipes(dataRecipesMock.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        setTotalPages(Math.ceil(dataRecipesMock.length / itemsPerPage));
    }, [currentPage]);

    return (
        <div className={cn("flex flex-wrap gap-6 text-black pt-5 w-full px-[200px]")}>
            <div className={cn("flex flex-col w-full justify-start border-b border-dashed border-gray-300 pb-5 gap-3")}>
                <p className={cn("flex text-[26px] font-semibold text-[rgba(96,96,96,0.9)]")}>
                    Kho Món Ngon Của Bạn
                </p>
                <div>
                    <Pagination
                        currentPage={currentPage}
                        totalPage={totalPages}
                        onPageChange={onPageChange}
                    />
                </div>
                <div className={cn("flex flex-wrap gap-4")}>
                    {dataRecipes.map((item, idx) => (
                        <Link key={idx} className={cn("w-[175px] shadow-md rounded-lg p-3")} to={ROUTES.RECIPE}>
                            <div className={cn("relative")}>
                                <img src={item.image} alt="" className={cn("rounded-t-[10px] w-[175px] h-[230px]")}/>
                                <span
                                    className={cn("absolute bottom-0 w-full py-4 px-2 text-[20px] leading-none font-semibold text-white bg-[rgba(74,74,74,0.4)]")}>
                                {item.title}
                            </span>
                            </div>
                            <div className={cn("p-2 bg-[rgba(255,255,255,0.8)] text-[rgba(96,96,96,0.9)]")}>
                                <p className={cn("text-[16px] font-semibold line-clamp-3")}>
                                    {item.description}
                                </p>
                                <p className={cn("text-[16px] font-semibold flex items-center pt-2")}>
                                    <UserIcon className={cn("size-5 mr-2 fill-black")}/> {item.user.name}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={cn("flex flex-col w-full justify-start border-b border-dashed border-gray-300 pb-5 gap-3")}>
                <p className={cn("flex text-[26px] font-semibold text-[rgba(96,96,96,0.9)]")}>
                    Các Món Bạn Đã Lưu
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
                    {/* <Pagination currentPage = "1" totalPage = "5" onPageChange="1"/> */}
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

export default SaveFood;
