import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import AuthButton from "../components/AuthButton";
import Image from "next/image";
import Link from "next/link";
import { submitReview } from "./actions";

export default async function ReviewsPage() {
  const session = await getServerSession();

  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link href="/" className="text-orange-500 hover:underline text-sm">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold mt-2">User Reviews</h1>
          </div>
          <AuthButton />
        </div>

        {session ? (
          <div className="bg-slate-800 p-6 rounded-xl mb-10 border border-slate-700">
            <h2 className="text-xl font-bold mb-4">Share your experience</h2>
            <p className="text-slate-400 text-sm mb-4">
              You are posting as <strong>{session.user?.name}</strong>
            </p>
            <form action={submitReview} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Rating (1–5)</label>
                <select
                  name="rating"
                  required
                  className="w-full p-3 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="5">★★★★★ (5) - Excellent</option>
                  <option value="4">★★★★☆ (4) - Very Good</option>
                  <option value="3">★★★☆☆ (3) - Good</option>
                  <option value="2">★★☆☆☆ (2) - Fair</option>
                  <option value="1">★☆☆☆☆ (1) - Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Your Review</label>
                <textarea
                  name="comment"
                  required
                  rows={4}
                  placeholder="Tell others about your experience with Second Watch..."
                  className="w-full p-3 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 font-bold py-2 px-6 rounded"
              >
                Post Review
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-slate-800 p-6 rounded-xl mb-10 border border-slate-700 text-center">
            <p className="text-slate-400 mb-3">Sign in to leave a review</p>
            <AuthButton />
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">What people are saying</h2>
          {reviews.length === 0 ? (
            <p className="text-slate-500 text-center py-8">No reviews yet. Be the first!</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex gap-4">
                {review.image && (
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full h-12 w-12"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-yellow-400">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
                  </div>
                  <p className="text-slate-300">{review.comment}</p>
                  <p className="text-slate-500 text-xs mt-2">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}