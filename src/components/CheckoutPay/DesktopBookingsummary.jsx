import React from "react";

import { Button, Img, List, PagerIndicator, Text } from "./export";
import { Link } from "react-router-dom";

const DesktopBookingsummary = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start pt-4 px-4 w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="h-[198px] relative rounded-[16px] w-full">
                <Img
                  className="h-[198px] m-auto object-cover rounded-[16px] w-full"
                  src="images/Booking_Summary_carousel.png"
                  alt="rectangleSixtySix"
                />
                <div className="absolute inset-[0] justify-center m-auto rounded-[16px] w-full">
                  <Img
                    className="h-[198px] m-auto object-cover rounded-[16px] w-full"
                    src="images/Booking_Summary_carousel2.png"
                    alt="rectangleSixtyFive"
                  />
                  <div className="absolute bottom-[0] flex flex-col h-6 md:h-auto inset-x-[0] items-center justify-between mx-auto pb-4 px-3 w-[352px]">
                    <PagerIndicator
                      className="flex gap-1.5 h-2 items-center justify-start w-[108px]"
                      count={7}
                      activeCss="inline-block cursor-pointer h-2 bg-gray-50 w-7 rounded"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-gray-50_8c w-1.5"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                  <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto px-3 w-[352px]">
                    <Button
                      className="flex h-8 items-center justify-center w-8"
                      shape="circle"
                      color="gray_50_bf"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </Button>
                    <Button
                      className="flex h-8 items-center justify-center w-8"
                      shape="circle"
                      color="gray_50_bf"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                  <div className="absolute flex flex-col items-center justify-start left-[3%] top-[6%] w-auto">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[91px] rounded"
                      leftIcon={
                        <Img
                          className="h-3.5 mr-1 my-px"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                      }
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="!text-gray-900_01 font-opensans font-semibold text-left text-xs">
                        {props?.bestseller}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                <div className="flex flex-row gap-1 items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-right text-sm"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.fortynine}
                      </Text>
                      <Text
                        className="text-gray-700_01 text-right text-sm w-auto"
                        size="txtOpenSans14"
                      >
                        {props?.p45k}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-gray-700_01 text-right text-sm w-auto"
                    size="txtOpenSans14"
                  >
                    {props?.thirteen}
                  </Text>
                  <Text
                    className="flex-1 text-gray-700_01 text-sm w-auto"
                    size="txtOpenSans14"
                  >
                    {props?.category}
                  </Text>
                </div>
                <Text
                  className="leading-[22.00px] max-w-[352px] md:max-w-full text-base text-gray-900_01"
                  size="txtOpenSansSemiBold16Gray90001"
                >
                  {props?.experiencename}
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-2 w-full">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.textThirteen}
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[7px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtOpenSansSemiBold14"
                        >
                          {props?.text}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-700_01 text-xs w-auto"
                          size="txtOpenSans12"
                        >
                          {props?.hinttext}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtOpenSansSemiBold14"
                        >
                          {props?.text1}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-700_01 text-xs w-auto"
                          size="txtOpenSans12"
                        >
                          {props?.hinttext1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_users.svg"
                      alt="users"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-2 w-full">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.guestscounter}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start pb-5 w-full">
            <Img
              className="h-px w-full"
              src="images/img_divider_gray_300_01.svg"
              alt="divider_Three"
            />
            <div className="flex flex-row items-center justify-between px-4 w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-gray-700_01 text-sm underline w-auto"
                  size="txtOpenSansSemiBold14Gray70001"
                >
                  {props?.textFourteen}
                </Text>
              </div>
              <Img
                className="h-4 w-4"
                src="images/img_plus_blue_gray_400.svg"
                alt="plus_One"
              />
            </div>
          </div>
        </div>
        <div className="border-gray-300_01 border-solid border-t flex flex-col gap-8 items-start justify-start pb-8 pt-4 px-4 w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start pb-2 w-auto">
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.textFifteen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end pb-2 w-auto">
                  <Text
                    className="text-gray-900_01 text-lg text-right w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.priceFour}
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[135px] rounded-[11px]"
                leftIcon={
                  <Img
                    className="h-3.5 mb-[3px] mr-1"
                    src="images/img_user_green_600.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="green_50"
                size="xs"
                variant="fill"
              >
                <div className="!text-green-600 font-opensans font-semibold text-left text-xs">
                  {props?.youSavedPrice}
                </div>
              </Button>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="text-gray-700_01 text-xs underline w-auto"
                size="txtOpenSansRomanSemiBold12"
              >
                {props?.priceFive}
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_inbox_blue_gray_400.svg"
                alt="inbox_Three"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            {props?.termandconditionOne}
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[352px] rounded-[16px]"
              leftIcon={
                <Img
                  className="h-[22px] mb-[3px] mr-3"
                  src="images/img_location.svg"
                  alt="location"
                />
              }
              color="black_900"
              size="md"
              variant="fill"
            >
              <div className="!text-blue_gray-50 font-opensans font-semibold text-left text-lg">
                {props?.confirmPayTwo}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopBookingsummary.defaultProps = {
  bestseller: "Bestseller",
  fortynine: "4.9",
  p45k: "(4.5k)",
  thirteen: "•",
  category: <>&lt;category&gt;</>,
  experiencename:
    "Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef",
  textThirteen: <>&lt;ticket type - variant&gt;</>,
  text: <>&lt;day&gt;, &lt;month&gt; &lt;date&gt;</>,
  hinttext: <>Duration: &lt;duration&gt;</>,
  text1: <>&lt;time&gt;</>,
  hinttext1: <>Operating hours: &lt;time&gt; to &lt;time&gt;</>,
  guestscounter: "5 guests",
  textFourteen: "View payment summary",
  textFifteen: "Total payable",
  priceFour: "$XXX",
  youSavedPrice: <>You saved &lt;price&gt;</>,
  priceFive: "You will be charged in AED",
  termandconditionOne: (
    <Text
      className="leading-[20.00px] max-w-[352px] md:max-w-full text-gray-700_01 text-xs"
      size="txtOpenSans12"
    >
      <span className="text-gray-700_01 font-opensans text-left font-normal">
        By clicking “confirm & pay”, you agree to{" "}
      </span>
      <Link
        to="/terms-and-conditions"
        className="text-indigo-500 font-opensans text-left font-normal underline"
      >
        Tickete’s general terms and conditions
      </Link>
      <span className="text-gray-700_01 font-opensans text-left font-normal">
        {" "}
        and{" "}
      </span>
      <Link
        to="/cancellation-policy"
        className="text-indigo-500 font-opensans text-left font-normal underline"
      >
        cancellation policy
      </Link>
      <span className="text-gray-700_01 font-opensans text-left font-normal">
        .
      </span>
    </Text>
  ),
  confirmPayTwo: "Confirm & pay",
};

export default DesktopBookingsummary;
