import { getStrapiMedia } from "../utils/api-helpers";

export default function Banner(props: any) {
  return (
    <section
      className="relative"
      style={{
        background: `url('${getStrapiMedia(
          "/uploads/20180220_093628_09030780df.jpg"
        )}')`,
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor: "rgba(55,65,81,0.6)",
      }}
    >
      {props.children}
    </section>
  );
}
