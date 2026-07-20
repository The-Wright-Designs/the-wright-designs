import { StarRatingProps } from "@/_types/review-types";
import { Star, StarHalf } from "lucide-react";
import classNames from "classnames";

export default function StarRating({ rating, cssClasses }: StarRatingProps) {
  return (
    <div className={classNames("flex gap-0.5", cssClasses)}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFullStar = star <= Math.floor(rating);
        const isHalfStar = star === Math.ceil(rating) && rating % 1 >= 0.25;

        return isFullStar || isHalfStar ? (
          isFullStar ? (
            <Star
              key={star}
              strokeWidth={0.75}
              className="w-[18px] h-[18px] fill-[#FBBC05] text-[#FBBC05]"
            />
          ) : (
            <div className="relative" key={star}>
              <Star
                strokeWidth={0.75}
                className="w-[18px] absolute top-0 h-[18px] fill-none text-[#FBBC05]"
              />
              <StarHalf
                strokeWidth={0.75}
                className="w-[18px] h-[18px] fill-[#FBBC05] text-[#FBBC05]"
              />
            </div>
          )
        ) : (
          <Star
            key={star}
            strokeWidth={0.75}
            className="w-[18px] h-[18px] fill-none text-blue/75"
          />
        );
      })}
    </div>
  );
}
