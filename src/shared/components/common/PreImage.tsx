interface Props {
  src: string;
  height: number;
}

export function PreImage({ src, height }: Props) {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {src ? (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div
            className="mobile:h-full w-full"
            style={{
              height: height,
              backgroundImage: `url(${src})`,
              backgroundOrigin: "initial",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: 1,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            style={{ height: height }}
          ></div>
        </div>
      ) : (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <div
            className="mobile:h-full w-full"
            style={{
              height: height,
              backgroundImage: `url(${src || "/images/default.png"})`,
              backgroundOrigin: "initial",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: 1,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            style={{ height: height }}
          ></div>
        </div>
      )}
    </div>
  );
}
