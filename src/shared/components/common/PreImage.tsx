import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  layer?: boolean;
  cls?: string;
}

export function PreImage({ src, cls, layer, ...rest }: Props) {
  return (
    <div>
      {src ? (
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={src}
            className={`${cls}`}
            style={{ width: `${rest.width}px`, height: `${rest.height}px`}}
            {...rest}
          />
          {layer && (
            <div
              className={`${rest.className} absolute top-0 left-0 w-full h-full bg-black opacity-30`}
            ></div>
          )}
        </div>
      ) : (
        <div>
          <Image
            src="/images/default.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            {...rest}
          />
        </div>
      )}
    </div>
  );
}
