import { HTMLAttributes } from "react";

function Logo(props: HTMLAttributes<HTMLImageElement>) {
  const { style, ...rest } = props;
  return <img src="/logo.png" style={{ maxWidth: 200, ...style }} {...rest} />;
}

export default Logo;
