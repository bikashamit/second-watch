"use server";

import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitQuestion(formData: FormData): Promise<void> {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return;
  }

  const title = (formData.get("title") as string)?.trim();
  const body = (formData.get("body") as string)?.trim();

  if (!title || !body) {
    return;
  }

  try {
    await prisma.question.create({
      data: {
        title,
        body,
        authorEmail: session.user.email,
        authorName: session.user.name || "Anonymous",
        authorImage: session.user.image,
      },
    });
  } catch (error) {
    console.error("Error saving question:", error);
    return;
  }

  revalidatePath("/forum");
}

export async function submitAnswer(formData: FormData): Promise<void> {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return;
  }

  const questionId = formData.get("questionId") as string;
  const body = (formData.get("body") as string)?.trim();

  if (!questionId || !body) {
    return;
  }

  try {
    await prisma.answer.create({
      data: {
        questionId,
        body,
        authorEmail: session.user.email,
        authorName: session.user.name || "Anonymous",
        authorImage: session.user.image,
      },
    });
  } catch (error) {
    console.error("Error saving answer:", error);
    return;
  }

  revalidatePath("/forum");
}