import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center justify-center">
      <Image src={"/Bibhousing.png"} alt={"BiBHosing"} width={120} height={40} />
      {/* <span className="text-xl font-bold text-white">BiBHousing</span> */}
    </Link>
  );
}
