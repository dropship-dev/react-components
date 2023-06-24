import { Avatar, AvatarFallback, AvatarImage } from "./components/avatar";

export interface IAvatar {
  src: string;
  alt?: string;
  rounded?: boolean;
  size?: number;
}

export function AvatarBase(props: IAvatar) {
  let { src, alt, rounded, size } = props;
  if (size === undefined) size = 36;
  return (
    <Avatar rounded={rounded} size={size} className="">
      <AvatarImage src={src} alt={`@${alt}`} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
}
