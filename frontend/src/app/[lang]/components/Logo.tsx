import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  lang,
  children,
}: {
  src: string | null;
  lang: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={`/${lang}`}
      aria-label="Back to homepage"
      className="flex items-center  "
    >
      {src && <img src={src} alt="logo" width={80} height={45} />}
      <div className="ml-2">{children}</div>
    </Link>
  );
}
