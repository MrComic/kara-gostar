export default function Banner(props: any) {
  return (
    <section
      className="relative"
      style={{
        background:
          "url('http://localhost:1337/uploads/20180220_093628_09030780df.jpg')",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundColor: "rgb(55 65 81/1)",
      }}
    >
      {props.children}
    </section>
  );
}
