// IKImage.tsx
"use client";

import { Image } from "@imagekit/next";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
  fill?: boolean; // 👈 ADDED FILL PROP
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
console.log(urlEndpoint);

if (!urlEndpoint) {
  throw new Error("Error: Please add urlEndpoint to .env or .env.local");
}

const IKImage = ({ path, w, h, alt, className, tr, fill }: ImageType) => {
  const transformation = [];

  // Apply transformation logic based on w/h only if FILL is not requested
  if (w && !fill) {
    transformation.push({ width: `${w}` });
  }
  if (h && !fill) {
    transformation.push({ height: `${h}` });
  }

  // Determine props for the ImageKit component
  const imageProps = fill
    ? { layout: "fill", width: undefined, height: undefined } // Use fill layout
    : { width: w, height: h }; // Use fixed dimensions

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={path}
      transformation={tr ? transformation : undefined}
      alt={alt}
      className={className}
      {...imageProps} // Spread the determined layout/size props
    />
  );
};

export default IKImage;
