import { fetchGoogleRating } from "@/_actions/review-actions";
import StarRating from "./star-rating";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  cssClasses?: string;
}

export default async function GoogleRatingComponent({ cssClasses }: Props) {
  const { overallRating, totalReviews, reviewsUrl } = await fetchGoogleRating();

  if (totalReviews === 0) {
    return null;
  }

  return (
    <Link
      href={reviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "flex flex-col gap-1.5 self-start desktopSmall:hover:scale-102 desktopSmall:hover:opacity-80 desktopSmall:hover:cursor-pointer ease-in-out duration-300",
        cssClasses,
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-paragraph text-[20px] translate-y-[1px] font-medium">
          {overallRating.toFixed(1)}
        </span>
        <StarRating rating={overallRating} />
        <span className="text-paragraph text-grey">{totalReviews} reviews</span>
      </div>
      <div className="relative h-[18.757px] w-[138px]">
        <Image
          src="/assets/powered-by-google.png"
          alt="Powered by Google"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}
