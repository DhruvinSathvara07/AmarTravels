import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: 'Google API key or Place ID is not configured.' },
        { status: 400 }
      );
    }

    // Google Places API (New) or standard Places Details API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url, {
      // Revalidate every 24 hours to keep fresh but avoid excessive API calls
      next: { revalidate: 86400 }
    });

    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google API Error: ${data.status} - ${data.error_message || ''}`);
    }

    if (!data.result || !data.result.reviews) {
      return NextResponse.json({ reviews: [] });
    }

    // Map Google reviews to match the existing schema in aboutData.js
    const formattedReviews = data.result.reviews.map((review, index) => ({
      id: `google-${index}`,
      name: review.author_name,
      location: "", // Google doesn't easily provide reviewer location here
      image: review.profile_photo_url || "/review1.webp",
      review: review.text,
      rating: review.rating,
      time: review.relative_time_description, // e.g., "a month ago"
    }));

    return NextResponse.json({ reviews: formattedReviews });
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
