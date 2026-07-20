"use server";

import { GooglePlacesRatingResponse } from "@/_types/review-types";

export async function fetchGoogleRating(): Promise<{
  overallRating: number;
  totalReviews: number;
  reviewsUrl: string;
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const fallbackUrl = "https://share.google/qyTtygf6wcOX5ennc";

  if (!apiKey || !placeId) {
    return { overallRating: 0, totalReviews: 0, reviewsUrl: fallbackUrl };
  }

  const reviewsUrl = `https://search.google.com/local/reviews?placeid=${placeId}`;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${apiKey}`,
      { next: { revalidate: 86400 } },
    );

    if (!response.ok) {
      return { overallRating: 0, totalReviews: 0, reviewsUrl };
    }

    const data: GooglePlacesRatingResponse = await response.json();

    return {
      overallRating: data.rating || 0,
      totalReviews: data.userRatingCount || 0,
      reviewsUrl,
    };
  } catch {
    return { overallRating: 0, totalReviews: 0, reviewsUrl };
  }
}
