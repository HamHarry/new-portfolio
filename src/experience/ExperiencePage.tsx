/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./Experience.css";
import "./Dialog.css";
import { mockUpProject } from "../data/MockUpProject";

export interface data {
  name: string;
  image: string;
  imageShow: string[];
  features: string;
  language: string;
  tools: string;
  link: string;
}

const Experience = () => {
  const [dataProject] = useState(mockUpProject);
  const [listData, setListData] = useState<data>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [slide, setSlide] = useState<number>(0);

  const renderDialog = () => {
    const leftSlide = () => {
      const number =
        slide === 0 ? (listData?.imageShow.length as any) - 1 : slide - 1;
      setSlide(number);
    };
    const rightSlide = () => {
      const number =
        slide === (listData?.imageShow.length as any) - 1 ? 0 : slide + 1;
      setSlide(number);
    };
    return (
      <dialog open={openDialog} className="container-Dialog">
        <div className="wrap-container-Dialog">
          <div className="nav-Dialog">
            <i
              className="fa-solid fa-circle-xmark"
              onClick={() => {
                setOpenDialog(!openDialog);
              }}
            ></i>
          </div>
          <h1>{listData?.name}</h1>
          <div className="image-slider">
            {listData?.imageShow.map((item, index) => {
              return (
                <img
                  src={item}
                  alt=""
                  key={index}
                  className={slide === index ? "slider" : "slider-hidden"}
                />
              );
            })}
          </div>
          <div className="control-Slider">
            <i
              className="fa-solid fa-circle-left"
              onClick={() => {
                leftSlide();
              }}
            ></i>
            <i
              className="fa-solid fa-circle-right"
              onClick={() => {
                rightSlide();
              }}
            ></i>
          </div>
          <div className="content">
            <div className="content-text">
              <p>
                <span className="text-yellow">features: </span>
                {listData?.features}
              </p>
              <p>
                <span className="text-yellow">language: </span>
                {listData?.language}
              </p>
              <p>
                <span className="text-yellow">tools: </span>
                {listData?.tools}
              </p>
            </div>
            <i
              className="fa-brands fa-github"
              onClick={() => {
                window.open(`${listData?.link}`);
              }}
            ></i>
          </div>
        </div>
      </dialog>
    );
  };
  return (
    <div className="container-experience">
      <div className="wrap-container-experience">
        <h1>Experience</h1>
        <div className="line"></div>
        <div className="card">
          {dataProject.map((item, index) => {
            return (
              <div key={index}>
                <div className="wrap-card">
                  <h2>{item.name}</h2>
                  <img src={item.image} alt="" />
                  <button
                    onClick={() => {
                      setListData(item);
                      setOpenDialog(!openDialog);
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {renderDialog()}
      </div>
    </div>
  );
};

export default Experience;
