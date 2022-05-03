import Head from "next/head";
import { useState } from "react";
import MyImageList from "../src/components/myImage/MyImageList";
import VanillaTheme from "../src/components/theme/VanillaTheme";
import { MyImageInterface } from "../src/interface/common/MyImageInterface.interface";


const imagesArr:MyImageInterface[] = [{
  src:"/images/task2Img.png",
  marginRight:49,
  },{src:"/images/task2Img.png", marginRight:59},{src:"/images/task2Img.png",marginRight:77},{src:"/images/task2Img.png",marginRight:30}];

function Task2() {
    const [images, useImages] = useState<MyImageInterface[]>(imagesArr);
    return (<VanillaTheme >
      <Head>
        <title>Task2-NFS </title>
        <meta name="description" content="Fair Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <img src="/images/logo.svg" className="pl-5 pt-5 pb-5 lg:pl-5 lg:pt-5 " />
        <MyImageList
            images={images} />
      </div>
    </VanillaTheme>
    );
}
export default Task2;