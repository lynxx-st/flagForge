import { NextResponse } from "next/server";
import User from "@/models/userSchema";
import UserQuestionModel from "@/models/userQuestionSchema";
import connect from "@/utils/db";
export const runtime = "nodejs";

// GET /api/leaderboard
export async function GET() {
  try {
    // Connect to the database
    await connect();

    // Use aggregation to fetch top 50 users and count their completed questions in a single query.
    // This optimization replaces the N+1 query pattern (51 queries) with a single database round-trip.
    // We use a sub-pipeline in $lookup to count completed questions on the database side for better memory efficiency.
    const leaderboardData = await User.aggregate([
      { $sort: { totalScore: -1 } },
      { $limit: 50 },
      {
        $lookup: {
          from: UserQuestionModel.collection.name,
          let: { userId: "$_id" },
          pipeline: [
            { $match: { $expr: { $eq: ["$userId", "$$userId"] } } },
            { $count: "count" },
          ],
          as: "completedCount",
        },
      },
      {
        $addFields: {
          roomsCompleted: {
            $ifNull: [{ $arrayElemAt: ["$completedCount.count", 0] }, 0],
          },
        },
      },
      {
        $project: {
          name: 1,
          totalScore: 1,
          image: 1,
          roomsCompleted: 1,
        },
      },
    ]);

    // Map the results to include rank and slug, ensuring the same format as before.
    const leaderboard = leaderboardData.map((user, index) => ({
      name: user.name,
      totalScore: user.totalScore,
      image: user.image,
      roomsCompleted: user.roomsCompleted,
      rank: index + 1, // Rank starts from 1
      slug: (user.name || "").replace(/\s+/g, "-"),
    }));

    // Return the leaderboard as JSON
    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Leaderboard API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    );
  }
}
