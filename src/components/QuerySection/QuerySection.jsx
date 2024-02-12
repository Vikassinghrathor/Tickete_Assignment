import React from "react";

import { Button, Img, Line, List, Text } from "../CheckoutPay/export";

const DesktopFaqsection = (props) => {
  return (
    <>
      <div className={props.className}>
      <div style={{padding: '120px'}}> 
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-[486px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.14px] w-auto"
                  size="txtOpenSansSemiBold24"
                >
                  {props?.headingtext}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-[446px] sm:w-full">
                <Text
                  className="text-base text-gray-700_01 w-auto"
                  size="txtOpenSans16"
                >
                  {props?.paragraphtext}
                </Text>
              </div>
            </div>
            <div className="bg-gray-50_01 flex sm:flex-col flex-row gap-5 items-start justify-between p-6 sm:px-5 rounded-[16px] w-[446px] sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="leading-[26.00px] max-w-[240px] md:max-w-full text-gray-900_01 text-lg"
                  size="txtOpenSansSemiBold18"
                >
                  {props?.stillneedhelp}
                </Text>
                <Button
                  className="!text-blue_gray-50 cursor-pointer font-opensans font-semibold min-w-[129px] rounded-[12px] text-base text-center"
                  shape="round"
                  color="black_900"
                  size="md"
                  variant="fill"
                >
                  {props?.chatbuttontext}
                </Button>
              </div>
              <Img
                className="h-[100px] w-[157px]"
                src="images/img_aboutillustrations.svg"
                alt="aboutillustrati"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start max-w-[690px] w-full">
            <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus_gray_700_01.svg"
                    alt="plus_Two"
                  />
                  <Text
                    className="flex-1 text-gray-900_01 text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.herearesomeof}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_gray_700_01.svg"
                    alt="close_One"
                  />
                  <Text
                    className="flex-1 text-gray-900_01 text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.herearesomeofOne}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center pb-6 md:pl-10 pl-12 sm:pl-5 w-full">
                  <Text
                    className="leading-[24.00px] max-w-[586px] md:max-w-full text-base text-gray-700_01"
                    size="txtOpenSans16"
                  >
                    {props?.descriptionTwo}
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus_gray_700_01.svg"
                      alt="plus"
                    />
                    <Text
                      className="flex-1 text-gray-900_01 text-lg w-auto"
                      size="txtOpenSansSemiBold18"
                    >
                      {props?.herearesomeof1}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-6 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus_gray_700_01.svg"
                      alt="plus"
                    />
                    <Text
                      className="flex-1 text-gray-900_01 text-lg w-auto"
                      size="txtOpenSansSemiBold18"
                    >
                      {props?.herearesomeof2}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus_gray_700_01.svg"
                      alt="plus"
                    />
                    <Text
                      className="flex-1 text-gray-900_01 text-lg w-auto"
                      size="txtOpenSansSemiBold18"
                    >
                      {props?.herearesomeof3}
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <Line className="bg-gray-300_01 h-px w-full" />
        </div>
      </div>
    </>
  );
};

DesktopFaqsection.defaultProps = {
  headingtext: "Frequently asked questions",
  paragraphtext: "Here are some of our most asked questions. ",
  stillneedhelp: (
    <>
      Still need help? <br />
      We’re here for you.
    </>
  ),
  chatbuttontext: "Chat with us",
  herearesomeof: "What should I do on my first trip to Rome?",
  herearesomeofOne: "What are some hidden gems to see in Rome?",
  descriptionTwo: (
    <>
      Rome is packed with hidden gems. If you love art, don&#39;t miss the
      Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free
      museum and well worth a quick visit. If you love the ancient stuff,
      don&#39;t miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and
      the Baths of Caracalla. For even more hidden gems, take a tour of
      Trastevere, a fascinating neighborhood full of history and ambiance.
    </>
  ),
  herearesomeof1: "How much time should I spend in Rome?",
  herearesomeof2: "What food is Rome known for?",
  herearesomeof3: "What is the best way to get around Rome?",
};

export default DesktopFaqsection;
