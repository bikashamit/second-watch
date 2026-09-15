import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import AuthButton from "../components/AuthButton";
import Image from "next/image";
import Link from "next/link";
import { submitQuestion, submitAnswer } from "./actions";

export default async function ForumPage() {
  const session = await getServerSession();

  const questions = await prisma.question.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      answers: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link href="/" className="text-orange-500 hover:underline text-sm">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold mt-2">Q/A Forum</h1>
          </div>
          <AuthButton />
        </div>

        {/* Ask Question Form */}
        {session ? (
          <div className="bg-slate-800 p-6 rounded-xl mb-10 border border-slate-700">
            <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
            <p className="text-slate-400 text-sm mb-4">
              Posting as <strong>{session.user?.name}</strong>
            </p>
            <form action={submitQuestion} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Question Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. How do I switch to the front camera?"
                  className="w-full p-3 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Details</label>
                <textarea
                  name="body"
                  required
                  rows={4}
                  placeholder="Describe your question in detail..."
                  className="w-full p-3 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 font-bold py-2 px-6 rounded"
              >
                Post Question
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-slate-800 p-6 rounded-xl mb-10 border border-slate-700 text-center">
            <p className="text-slate-400 mb-3">Sign in to ask or answer questions</p>
            <AuthButton />
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">
            All Questions ({questions.length})
          </h2>
          {questions.length === 0 ? (
            <p className="text-slate-500 text-center py-8">
              No questions yet. Be the first to ask!
            </p>
          ) : (
            questions.map((question) => (
              <div
                key={question.id}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex gap-4 mb-4">
                  {question.authorImage && (
                    <Image
                      src={question.authorImage}
                      alt={question.authorName}
                      width={40}
                      height={40}
                      className="rounded-full h-10 w-10"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">
                      {question.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Asked by {question.authorName} •{" "}
                      {new Date(question.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{question.body}</p>

                {question.answers.length > 0 && (
                  <div className="border-t border-slate-700 pt-4 mt-4">
                    <p className="text-sm text-slate-400 mb-3">
                      {question.answers.length}{" "}
                      {question.answers.length === 1 ? "answer" : "answers"}
                    </p>
                    <div className="space-y-4">
                      {question.answers.map((answer) => (
                        <div key={answer.id} className="flex gap-3">
                          {answer.authorImage && (
                            <Image
                              src={answer.authorImage}
                              alt={answer.authorName}
                              width={32}
                              height={32}
                              className="rounded-full h-8 w-8"
                            />
                          )}
                          <div className="flex-1">
                            <p className="text-white text-sm font-semibold">
                              {answer.authorName}
                            </p>
                            <p className="text-slate-300 text-sm">
                              {answer.body}
                            </p>
                            <p className="text-slate-500 text-xs mt-1">
                              {new Date(answer.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {session && (
                  <form
                    action={submitAnswer}
                    className="border-t border-slate-700 pt-4 mt-4 space-y-3"
                  >
                    <input
                      type="hidden"
                      name="questionId"
                      value={question.id}
                    />
                    <textarea
                      name="body"
                      required
                      rows={2}
                      placeholder="Write your answer..."
                      className="w-full p-3 rounded bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded text-sm"
                    >
                      Post Answer
                    </button>
                  </form>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}