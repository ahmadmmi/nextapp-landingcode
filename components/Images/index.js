import Image from "next/image";

const Images = (props) => {
  const { className, src, alt } = props;
  return (
    <div className={className ? className : ""}>
      <Image
        src={src}
        alt={alt}
        fill
        objectFit='contain'
        placeholder='blur'
        blurDataURL={src}
      ></Image>
    </div>
  );
};

export default Images;
