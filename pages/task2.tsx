import Head from "next/head";
import { useState } from "react";
import MyImageList from "../src/components/myImage/MyImageList";
import DefaultTheme from "../src/components/theme/DefaultTheme";
import { MyImageInterface } from "../src/interface/common/MyImageInterface.interface";


const imagesArr:MyImageInterface[] = [{src:"/images/task2Img.png"},{src:"/images/task2Img.png"},{src:"/images/task2Img.png"}];

function Task2() {
    const [images, useImages] = useState<MyImageInterface[]>(imagesArr);
    return (<DefaultTheme >
      <Head>
        <title>Task1-Remeber me </title>
        <meta name="description" content="Fair Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Task 2</h1>
        <MyImageList
            images={images} />
    </DefaultTheme>
    );
}
export default Task2;