import { Skeleton as SkeletonLoading } from "./components/seketon";

export interface ISkeleton {
  className: string;
}

export function Skeleton(props: ISkeleton) {
  const { className } = props;
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <SkeletonLoading className={className} />
      </div>
    </div>
  );
}
