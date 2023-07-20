import { Skeleton as SkeletonLoading } from "./components/skeleton";

export interface ISkeleton {
  className: string;
}

export default function Skeleton(props: ISkeleton) {
  const { className } = props;
  return <SkeletonLoading className={className} />;
}
