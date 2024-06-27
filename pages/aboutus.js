import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentindex";
import images from "../../iimg";

const aboutus = () => {
  const founderArray = [
    {
      name: "Russian Spy",
      position: "Co-founder and OFfical CEO overseaer Manager Chief Executive Predidental officer",
      images: images.provider1,
    },
    {
      name: "Peter Griffin",
      position: "Co-founder and Manager Chief Executive",
      images: images.provider1,
    },
    {
      name: "Trevor Phillips",
      position: "Co-founder, Lead Executive Offical Chairman",
      images: images.provider1,
    },
    {
      name: "Dora the Exploerer",
      position: "Co-Founder, Lead Manager Chief Executive Strategy Officer",
      images: images.provider1,
    },
  ];

  const factsArray = [
    {
      title: "20 million",
      info: "Articles have been public around the world (as of Sept. 30, 2024)",
    },
    {
      title: "500,000",
      info: "Registered users account (as of Sept. 30, 2024)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2024",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We’re impractical and independent, and every day we create
              distinctive, world-class programs and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impractical and independent, and every day we create
            distinctive, world-class programs and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={250}
                  height={250}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fun Facts</h2>
          <p>
            We’re impractical and independent, and every day we create
            distinctive, world-class programs and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;