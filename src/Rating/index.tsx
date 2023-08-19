interface RatingProps {
  rating: number;
  setRating: (value: number) => void;
  size?: "xs" | "sm";
}

export default function Rating(props: RatingProps) {
  const { rating, setRating, size } = props;

  return (
    <div
      className={`rating ${
        size === "xs" ? "rating-xs" : "rating-md"
      } rating-half`}
    >
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        checked={rating === 1}
        onChange={() => setRating(1)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        checked={rating === 2}
        onChange={() => setRating(2)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        checked={rating === 3}
        onChange={() => setRating(3)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        checked={rating === 4}
        onChange={() => setRating(4)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        checked={rating === 5}
        onChange={() => setRating(5)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        checked={rating === 6}
        onChange={() => setRating(6)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        checked={rating === 7}
        onChange={() => setRating(7)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        checked={rating === 8}
        onChange={() => setRating(8)}
      />
      <input
        type="checkbox"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        checked={rating === 9}
        onChange={() => setRating(9)}
      />
      <input
        type="checkbox"
        name="rating-10"
        checked={rating === 10}
        onChange={() => setRating(10)}
        className="bg-orange-400 mask mask-star-2 mask-half-2"
      />
    </div>
  );
}
