import { useState, useRef, useEffect } from "react";
import DestinasiCard from "@/Components/DestinasiCard";
import Navbar from "../Partials/Navbar";
import Heading from "@/Components/Heading";
import BreadCumbs from "@/Components/BreadCumbs";
import { Head } from "@inertiajs/react";
import { sortHighPrice, sortLowPrice, sortName } from "@/function/sortingBy";

// destinasi sultan
const Destinasi = (props) => {
    const [isActived, setIsActived] = useState("all");
    let [pageAll, setPageAll] = useState(0);
    let [pageGunung, setPageGunung] = useState(0);
    let [pageAirTerjun, setPageAirTerjun] = useState(0);
    let [pageDanau, setPageDanau] = useState(0);

    let [urutkan, setUrutkan] = useState("Berdasarkan");

    const [all, setAll] = useState(props.all);
    const [gunung, setGunung] = useState(props.gunung);
    const [airTerjun, setAirTerjun] = useState(props.air_terjun);
    const [danau, setDanau] = useState(props.danau);
    const [resultSearch, setResultSearch] = useState([]);

    const [search, setSearch] = useState(false);

    const handleActive = (kategori) => {
        setIsActived(kategori);
    };

    const handlePage = (page, kategori) => {
        if (kategori === "all") {
            setPageAll(page);
        } else if (kategori === "gunung") {
            setPageGunung(page);
        } else if (kategori === "air terjun") {
            setPageAirTerjun(page);
        } else if (kategori === "danau") {
            setPageDanau(page);
        }
    };

    const handleUrutkan = (urutkan) => {
        setUrutkan(urutkan);
        let data = [];
        if (urutkan == "Abjad A-Z") {
            if (isActived === "all") {
                data = all;
                setAll(sortName(data, 8));
            } else if (isActived === "gunung") {
                data = gunung;
                setGunung(sortName(data, 4));
            } else if (isActived === "air terjun") {
                data = airTerjun;
                setAirTerjun(sortName(data, 4));
            } else if (isActived === "danau") {
                data = danau;
                setDanau(sortName(data, 4));
            }
        } else if (urutkan == "Harga Terendah") {
            if (isActived == "all") {
                data = all;
                setAll(sortLowPrice(data, 8));
            } else if (isActived === "gunung") {
                data = gunung;
                setGunung(sortLowPrice(data, 4));
            } else if (isActived === "air terjun") {
                data = airTerjun;
                setAirTerjun(sortLowPrice(data, 4));
            } else if (isActived === "danau") {
                data = danau;
                setDanau(sortLowPrice(data, 4));
            }
        } else if (urutkan == "Harga Tertinggi") {
            if (isActived == "all") {
                data = all;
                setAll(sortHighPrice(data, 8));
            } else if (isActived === "gunung") {
                data = gunung;
                setGunung(sortHighPrice(data, 4));
            } else if (isActived === "air terjun") {
                data = airTerjun;
                setAirTerjun(sortHighPrice(data, 4));
            } else if (isActived === "danau") {
                data = danau;
                setDanau(sortHighPrice(data, 4));
            }
        }
    };

    const searchDestinasi = (searchValue) => {
        setTimeout(() => {
            searchValue && searchValue.length > 0
                ? setSearch(true)
                : setSearch(false);
            let result = [];
            for (let key in all) {
                for (let key2 in all[key]) {
                    if (
                        all[key][key2].nama
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    ) {
                        result.push(all[key][key2]);
                    } else if (
                        all[key][key2].kategori
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    ) {
                        result.push(all[key][key2]);
                    }
                }
            }
            setResultSearch(result);
        }, 500);
    };

    return (
        <div className="bg-[#FAFAFA] h-FULL">
            <Head title="Destinasi" />
            <Navbar user={props.auth.user} active={"destinasi"}>
                <div
                    id="destinasi"
                    className="mx-auto container max-md:pr-[20px] max-md:pl-[20px]  xl:pl-[100px] xl:pr-[100px] flex flex-col gap-[32px] lg:gap-[50px]"
                >
                    {/* Layout gambar diatas */}

                    <div className="flex flex-col gap-[32px] ">
                        <div className="flex flex-col gap-[12px]">
                            <BreadCumbs />
                            <Heading>
                                <Heading.Title
                                    text={
                                        "Eksplorasi & Nikmati Keindahan Alam Kota Wonosobo"
                                    }
                                />
                            </Heading>
                        </div>
                        <div className="grid md:grid-cols-[auto_auto] lg:grid-cols-[auto_420px] md:gap-5 h-[540px] max-md:rounded-3xl max-md:overflow-hidden  ">
                            <a
                                href="#kumpulan-destinasi"
                                className="flex hover:cursor-pointer transition  justify-center items-end md:rounded-[24px] bg-no-repeat bg-cover md:bg-top lg:bg-cover"
                                style={{
                                    backgroundImage: `url(../images/telaga2.jpg)`,
                                }}
                            >
                                <h1
                                    className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 md:rounded-3xl transition duration-400"
                                    onClick={() => {
                                        handleActive("danau");
                                    }}
                                >
                                    Danau
                                </h1>
                            </a>
                            <div className="grid grid-cols-2 md:grid-cols-1 md:gap-5">
                                <a
                                    href="#kumpulan-destinasi"
                                    className="hover:cursor-pointer bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]"
                                    style={{
                                        backgroundImage: `url(../images/gunung2.jpg)`,
                                    }}
                                >
                                    <h1
                                        className="md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 md:rounded-3xl transition duration-400"
                                        onClick={() => {
                                            handleActive("gunung");
                                        }}
                                    >
                                        Gunung
                                    </h1>
                                </a>
                                <a
                                    href="#kumpulan-destinasi"
                                    className="bg-no-repeat bg-cover md:bg-top lg:bg-center md:rounded-[24px]"
                                    style={{
                                        backgroundImage: `url(../images/curug.jpg)`,
                                    }}
                                >
                                    <h1
                                        className=" hover:cursor-pointer md:text-4xl text-white w-full h-full grid place-items-center lg:opacity-0 lg:hover:opacity-50 bg-black bg-opacity-50 lg:hover:bg-gray-900 md:rounded-3xl transition duration-400"
                                        onClick={() => {
                                            handleActive("air terjun");
                                        }}
                                    >
                                        Air Terjun
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* end of Layout gambar diatas */}
                    <div
                        className="flex flex-col my-auto items-center bgimg bg-cover"
                        id="destinasi-section"
                    >
                        <div className="flex flex-col text-center gap-[8px]">
                            <Heading.Tagline text={"Temukan Hidden Gems"} />
                            <Heading.Title text={"Kota Wisata Wonosobo"} />
                        </div>
                        {!search && (
                            <div className="flex gap-3 mt-8">
                                <button
                                    className={` ${
                                        isActived !== "all"
                                            ? "btn-notActive"
                                            : ""
                                    } btn-Active`}
                                    onClick={() => handleActive("all")}
                                >
                                    Semua Destinasi
                                </button>
                                <button
                                    className={` ${
                                        isActived !== "gunung"
                                            ? "btn-notActive"
                                            : ""
                                    } btn-Active`}
                                    onClick={() => handleActive("gunung")}
                                >
                                    Gunung
                                </button>
                                <button
                                    className={` ${
                                        isActived !== "danau"
                                            ? "btn-notActive"
                                            : ""
                                    } btn-Active`}
                                    onClick={() => handleActive("danau")}
                                >
                                    Danau
                                </button>
                                <button
                                    className={` ${
                                        isActived !== "air terjun"
                                            ? "btn-notActive"
                                            : ""
                                    } btn-Active`}
                                    onClick={() => handleActive("air terjun")}
                                >
                                    Air Terjun
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row gap-5">
                            <input
                                onChange={(e) => {
                                    searchDestinasi(e.target.value);
                                }}
                                type="text"
                                placeholder="Cari Destinasi"
                                className=" bg-white rounded-xl w-full border border-[#cecece]"
                            />
                            <div
                                className={`dropdown w-full flex flex-col items-end ${
                                    resultSearch.length > 0
                                        ? "justify-between"
                                        : "justify-end"
                                } `}
                            >
                                <label
                                    tabIndex={0}
                                    className={"flex gap-3 items-center"}
                                >
                                    <p className="text-base font-semibold">
                                        Urutkan :{" "}
                                    </p>
                                    <button
                                        id="dropdownHoverButton"
                                        data-dropdown-toggle="dropdownHover"
                                        data-dropdown-trigger="hover"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button"
                                    >
                                        {urutkan}
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li
                                        onClick={() => {
                                            handleUrutkan("Abjad A-Z");
                                        }}
                                    >
                                        <a>Abjad A-Z</a>
                                    </li>
                                    <li
                                        onClick={() => {
                                            handleUrutkan("Harga Terendah");
                                        }}
                                    >
                                        <a>Harga Terendah</a>
                                    </li>
                                    <li
                                        onClick={() => {
                                            handleUrutkan("Harga Tertinggi");
                                        }}
                                    >
                                        <a>Harga Tertinggi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            id="kumpulan-destinasi"
                            className={`grid gap-[16px] 
                            md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                        lg:gap-[20px] lg:flex-row lg:flex-wrap lg:items-stretch items-center  mt-10`}
                        >
                            {search ? (
                                resultSearch.length === 0 ? (
                                    <div className="flex justify-center items-center w-full">
                                        <h1 className="text-center text-2xl">
                                            Tidak ada destinasi yang ditemukan
                                        </h1>
                                    </div>
                                ) : (
                                    resultSearch.map((destinasi) => {
                                        return (
                                            <DestinasiCard
                                                auth={props.auth}
                                                key={destinasi.uuid}
                                                destinasi={destinasi}
                                            />
                                        );
                                    })
                                )
                            ) : isActived === "all" ? (
                                all[pageAll].map((destinasi) => {
                                    return (
                                        <DestinasiCard
                                            auth={props.auth}
                                            key={destinasi.id}
                                            destinasi={destinasi}
                                        />
                                    );
                                })
                            ) : isActived === "gunung" ? (
                                gunung[pageGunung].map((destinasi) => {
                                    return (
                                        <DestinasiCard
                                            auth={props.auth}
                                            key={destinasi.uuid}
                                            destinasi={destinasi}
                                        />
                                    );
                                })
                            ) : isActived === "danau" ? (
                                danau[pageDanau].map((destinasi) => {
                                    return (
                                        <DestinasiCard
                                            auth={props.auth}
                                            key={destinasi.uuid}
                                            destinasi={destinasi}
                                        />
                                    );
                                })
                            ) : isActived === "air terjun" ? (
                                airTerjun[pageAirTerjun].map((destinasi) => {
                                    return (
                                        <DestinasiCard
                                            auth={props.auth}
                                            key={destinasi.uuid}
                                            destinasi={destinasi}
                                        />
                                    );
                                })
                            ) : null}
                        </div>
                        {!search &&
                            ((isActived === "all" && (
                                <div className="flex justify-center items-center mt-6">
                                    <div className="btn-group">
                                        {all.map((group, i) => (
                                            <button
                                                key={i}
                                                className={`btn  ${
                                                    pageAll === i &&
                                                    "btn-active"
                                                }`}
                                                onClick={() =>
                                                    handlePage(i, "all")
                                                }
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )) ||
                                (isActived === "gunung" && (
                                    <div className="flex justify-center items-center mt-6">
                                        <div className="btn-group">
                                            {gunung.map((group, i) => (
                                                <button
                                                    key={i}
                                                    className={`btn ${
                                                        pageGunung === i &&
                                                        "btn-active"
                                                    }`}
                                                    onClick={() =>
                                                        handlePage(i, "gunung")
                                                    }
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )) ||
                                (isActived === "danau" && (
                                    <div className="flex justify-center items-center mt-6">
                                        <div className="btn-group">
                                            {danau.map((group, i) => (
                                                <button
                                                    key={i}
                                                    className={`btn ${
                                                        pageDanau === i &&
                                                        "btn-active"
                                                    }`}
                                                    onClick={() =>
                                                        handlePage(i, "danau")
                                                    }
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )) ||
                                (isActived === "air terjun" && (
                                    <div className="flex justify-center items-center mt-6">
                                        <div className="btn-group">
                                            {airTerjun.map((group, i) => (
                                                <button
                                                    key={i}
                                                    className={`btn ${
                                                        pageAirTerjun === i &&
                                                        "btn-active"
                                                    }`}
                                                    onClick={() =>
                                                        handlePage(
                                                            i,
                                                            "air terjun"
                                                        )
                                                    }
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )))}
                        <br />
                    </div>
                </div>{" "}
            </Navbar>
        </div>
    );
};

export default Destinasi;
