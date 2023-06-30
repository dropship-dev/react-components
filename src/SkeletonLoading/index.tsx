import { Skeleton as SkeletonLoading } from "./components/seketon";

export interface ISkeleton {
  className: string;
}

export function Skeleton(props: ISkeleton) {
  const { className } = props;
  return <SkeletonLoading className={className} />;
}
