import React from "react";
import Image from "next/image";
import classNames from "classnames";

const Subtitle: React.FC<{
  children: React.ReactNode;
  isTextColorBlack?: boolean;
}> = ({ children, isTextColorBlack }) => {
  const flowerPath = "flower1";
  const imgSize = 60;

  return (
    <div
      className={classNames("subtitle--flower", {
        "subtitle--flower--text-black": isTextColorBlack,
      })}
    >
      <Image
        src={`/home/${flowerPath}-l.svg`}
        alt="Decoration for the title"
        width={imgSize}
        height={imgSize}
        className="subtitle--flower-large__flower-l"
        style={{ objectFit: "fill" }}
      />
      <h2 className="subtitle--flower-large">
        <span className="subtitle--flower-large__main">{children}</span>
        {children}
      </h2>
      <Image
        src={`/home/${flowerPath}-r.svg`}
        alt="Decoration for the title"
        width={imgSize}
        height={imgSize}
        className="subtitle--flower-large__flower-r"
        style={{ objectFit: "fill" }}
      />
    </div>
  );
};

const DarkSubtitle: React.FC<{
  children: React.ReactNode;
  isTextColorBlack?: boolean;
}> = ({ children, isTextColorBlack }) => {
  const flowerPath = "flower2";
  const imgSizeW = 126;
  const imgSizeH = 142;

  return (
    <div
      className={classNames("dark-subtitle", {
        "dark-subtitle--text-black": isTextColorBlack,
      })}
    >
      <Image
        src={`/home/${flowerPath}-l.svg`}
        alt="Decoration for the title"
        width={imgSizeW}
        height={imgSizeH}
        className="dark-subtitle__flower-l"
        style={{ objectFit: "fill" }}
      />
      <h2 className="dark-subtitle--title">
        <span className="dark-subtitle--title__main">{children}</span>
        {children}
      </h2>
      <Image
        src={`/home/${flowerPath}-r.svg`}
        alt="Decoration for the title"
        width={imgSizeW}
        height={imgSizeH}
        className="dark-subtitle__flower-r"
        style={{ objectFit: "fill" }}
      />
    </div>
  );
};

export { Subtitle, DarkSubtitle };
