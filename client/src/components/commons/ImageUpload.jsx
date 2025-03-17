import {cn} from "@/lib/utils";
import {Button, Input} from "@headlessui/react";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {PencilSquareIcon} from "@heroicons/react/20/solid";

function ImageUpload({children, onChange, onError, maxSize, defaultValue, maxFiles = 1, className, image}) {
    const firstRenderDefaultValue = useRef(defaultValue); // 🔥 Lưu giá trị `defaultValue` ban đầu
    const onChangeRef = useRef(onChange);
    const onErrorRef = useRef(onError);

    // Nếu `defaultValue` thay đổi sau render đầu tiên → Báo lỗi
    useEffect(() => {
        if (JSON.stringify(firstRenderDefaultValue.current) !== JSON.stringify(defaultValue)) {
            console.error("❌ ERROR: `defaultValue` should not change after first render!");
            throw new Error("❌ ERROR: `defaultValue` should not change after first render!");
        }
    }, [defaultValue]);

    // const uploadMutation = useUploadImage();

    const itemUpdateIndexRef = useRef(null);
    const inputRef = useRef(null);
    const [fileSelected, setFileSelected] = useState(defaultValue || null);

    const fileUploadedRef = useRef([]);
    const [fileUploaded, setFileUploaded] = useState(defaultValue || []);
    console.log("------> Line: 27 | ImageUpload.jsx fileUploaded: ", fileUploaded);

    const uploadFileAction = (itemUpdateIndex) => {
        inputRef?.current?.click(); // Kích hoạt click vào input bị ẩn
        itemUpdateIndexRef.current = itemUpdateIndex !== undefined ? itemUpdateIndex : null;
    };

    const handleError = useCallback((error) => {
        onErrorRef?.current?.(new Error(error));
    }, []);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;


        const fileArray = Array.from(files);
        setFileSelected(prev => {
            const updatedFiles = prev ? [...prev] : [];
            if (itemUpdateIndexRef.current !== null) {
                const index = itemUpdateIndexRef.current;

                updatedFiles[index] = fileArray[0];

                fileUploadedRef.current = fileUploadedRef.current.map((item, i) =>
                    i === index ? ({file: fileArray[0], imgSrc: null}) : item
                );

                setFileUploaded((prev) => {
                    const updatedFiles = prev ? [...prev] : [];
                    updatedFiles[index] = {file: fileArray[0], imgSrc: null};
                    return updatedFiles;
                });
            } else {
                updatedFiles.push(...fileArray);
            }
            return updatedFiles;
        });

        console.log("------> Line: 56 | ImageUpload.jsx Call api upload here", fileArray);
        console.log("------> Line: 57 | Open line 167 for loading upload file");
        // fileArray.forEach(file => {
        //     const fileSizeInMB = file.size / (1024 * 1024);
        //     if (maxSize && fileSizeInMB > maxSize) {
        //         handleError(`File size is too large. Maximum file size is ${maxSize} MB`);
        //         return;
        //     }
        //
        //     uploadMutation.mutateAsync({file: file}).then((res) => {
        //         const {file_url} = res;
        //         if (itemUpdateIndexRef.current !== null) {
        //             fileUploadedRef.current[itemUpdateIndexRef.current] = {file, imgSrc: file_url};
        //         } else {
        //             fileUploadedRef.current = [...fileUploadedRef.current, {file, imgSrc: file_url}];
        //         }
        //         setFileUploaded([...fileUploadedRef.current]);
        //     }).catch((error) => {
        //         console.error("Upload error", error);
        //         toast.error(`Upload error: ${file.name}`);
        //     });
        // })
        console.log("------> Line: 77 | ImageUpload.jsx Làm phần upload thì xóa bỏ phần này", fileArray);
        fileArray.forEach(file => {
            if (itemUpdateIndexRef.current !== null) {
                fileUploadedRef.current[itemUpdateIndexRef.current] = {file, imgSrc: file.imgSrc};
            } else {
                fileUploadedRef.current = [...fileUploadedRef.current, {file, imgSrc: file.imgSrc}];
            }
            setFileUploaded([...fileUploadedRef.current]);
        })
    };

    useEffect(() => {
        if (onChangeRef.current) {
            onChangeRef.current(
                fileUploaded.map((item) => item.imgSrc || ""),
                fileUploaded
            );
        }
    }, [fileUploaded]);

    const buttonCreateNewImage = useMemo(() => (
        children
            ? (
                <div onClick={() => uploadFileAction()}>
                    {children}
                </div>
            ) : (
                <div
                    className={cn(
                        "w-[571px] h-[498px] flex flex-col items-center justify-center gap-4",
                        image?.className
                    )}
                    onClick={() => uploadFileAction()}
                >
                    {/*<ImagePreview width={80} height={80}/>*/}

                    <div className={cn("flex flex-col items-center gap-2")}>
                        <p className={cn("text-xl/6 font-semibold")}>
                            Image preview
                        </p>

                        <p className={cn("text-[#666] text-sm/6 font-normal")}>
                            (Only one image file no more the 10 Mb in the format .jpg, .png)
                        </p>
                    </div>

                    <Button
                        className={cn(
                            "py-2.5 px-8 rounded-xl border border-[#222]",
                            "text-[#222] text-xl/8 font-semibold",
                            "hover:cursor-pointer hover:bg-[#7D3200] hover:text-white transition",
                            {hidden: fileSelected}
                        )}
                    >
                        Upload image
                    </Button>
                </div>
            )
    ), [children, fileSelected, image?.className]);

    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center gap-8",
                "bg-[#FAFAFA] border border-dashed border-[#0000003D] rounded-2xl",
                className
            )}
        >
            <Input
                ref={inputRef}
                type="file"
                name="file"
                placeholder="File upload"
                className="hidden"
                onChange={handleFileChange}
                multiple={maxFiles > 1}
            />

            {fileSelected ? (
                <div className={cn("flex gap-2")}>
                    {fileSelected.map((file, i) => {
                        return (
                            <div
                                key={i}
                                className={cn(
                                    "w-[571px] h-[498px] relative bg-[#FAFAFA] border border-dashed border-[#0000003D] rounded flex",
                                    image?.className
                                )}
                            >
                                <img
                                    src={fileUploaded?.[i]?.imgSrc || URL.createObjectURL(file)}
                                    alt="Preview"
                                    className={cn("object-contain")}
                                    // fill
                                    sizes="100%"
                                    // placeholder="blur"
                                    // blurDataURL={URL.createObjectURL(fileSelected?.[0])}
                                />

                                {/*Line 167*/}
                                {/*{!fileUploaded?.[i]?.imgSrc ? (*/}
                                {/*    <div*/}
                                {/*        className={cn(*/}
                                {/*            "absolute top-0 left-0 p-4 bg-[#0000003D] text-white h-full w-full"*/}
                                {/*        )}*/}
                                {/*    >*/}
                                {/*        <div className={cn("h-full flex items-center justify-center")}>*/}
                                {/*            /!*<Spinner isLoading={true}/>*!/*/}
                                {/*            <div>Loading...</div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*) : (*/}
                                <div
                                    className={cn(
                                        "opacity-0 hover:opacity-100 transition-opacity",
                                        "absolute top-0 left-0 p-4 bg-[#0000003D] text-white h-full w-full"
                                    )}
                                >
                                    <div className={cn("h-full flex items-center justify-center")}>
                                        <Button
                                            className={cn("flex gap-2 items-center")}
                                            onClick={() => uploadFileAction(i)}
                                        >
                                            <span className={cn("sr-only")}>Edit</span>
                                            <PencilSquareIcon className={cn("w-6 h-6")}/>
                                        </Button>
                                    </div>
                                </div>
                                {/*)}*/}
                            </div>
                        )
                    })}

                    {fileSelected.length < maxFiles && buttonCreateNewImage}
                </div>
            ) : buttonCreateNewImage}
        </div>
    );
}

export default ImageUpload;