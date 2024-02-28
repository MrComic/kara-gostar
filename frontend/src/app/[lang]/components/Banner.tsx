export default function Banner(props: any) {
  return (
    <section
      className="relative"
      style={{
        background:
          "url('http://localhost:1337/uploads/20180220_093628_09030780df.jpg')",
        "background-blend-mode": "multiply",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "50%",
        "--tw-bg-opacity": "1",
        "background-color": "rgb(55 65 81/var(--tw-bg-opacity))",
      }}
    >
      {props.children}
    </section>
  );
}
