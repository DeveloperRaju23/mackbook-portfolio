import React from "react";
import ReuseTitle from "../Reuse/ReuseTitle";

const Services = () => {
  return (
    <div className="bg-black">
      <div className="container">

        <div className="pt-[50px] pb-[30px]" data-aos="fade-right">
          <ReuseTitle heading5="Services" />
          <ReuseTitle
            heading1="We Provide User-friendly and 
Customized Services"
          />
          <ReuseTitle para1="Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private" />
        </div>
      </div>
    </div>
  );
};

export default Services;
