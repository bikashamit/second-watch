"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitReview(formData: FormData) {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return { error: "You must be signed in to post a review." };
  }

  const rating = parseInt(formData.get("rating") as string, 10);
  const comment = formData.get("comment") as string;

  if (!rating || rating < 1 || rating > 5 || !comment.trim()) {
    return { error: "Please provide a valid rating and comment." };
  }

  try {
    await prisma.review.upsert({
      where: { email: session.user.email },
      update: {
        rating,
        comment,
        name: session.user.name || "Anonymous",
        image: session.user.image,
        createdAt: new Date(),
      },
      create: {
        email: session.user.email,
        name: session.user.name || "Anonymous",
        image: session.user.image,
        rating,
        comment,
      },
    });
  } catch (error) {
    console.error("Error saving review:", error);
    return { error: "Something went wrong. Please try again." };
  }

  revalidatePath("/reviews");
  return { success: true };
}