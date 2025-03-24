import React from "react";
import Button from "./Button";

export default function Hero({ title, description, Portrait }) {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center md:my-20 mx-4 md:mx-8">
        <div className="flex flex-col gap-y-4 max-w-[500px]">
          <h1 className="md:text-7xl text-3xl text-yellow-300 font-extrabold md:text-start text-center">
            {title}
          </h1>
          <h2 className="pt-2 text-white md:text-2xl text-xl font-semibold md:text-start text-center italic">
            {description}
          </h2>
          <Button
            variant="secondary"
            onClick={() => alert("Primary Button Clicked!")}
          >
            Primary Button
          </Button>
        </div>
        <div className="flex justify-center ">
          <img
            src={Portrait}
            alt="Portrait"
            className="object-cover rounded-xl md:max-w-96"
          />
        </div>
      </div>
    </>
  );
}
