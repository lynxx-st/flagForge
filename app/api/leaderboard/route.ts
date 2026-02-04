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

    // Optimized: Use aggregation to fetch top 50 users and their completed counts in a single query (1 vs 51 roundtrips)
    const leaderboardAggregation = await User.aggregate([
      { $sort: { totalScore: -1 } },
      { $limit: 50 },
      {
        $lookup: {
          from: UserQuestionModel.collection.name,
          localField: "_id",
          foreignField: "userId",
          as: "completedQuestions",
        },
      },
      {
        $project: {
          name: 1,
          totalScore: 1,
          image: 1,
          roomsCompleted: { $size: "$completedQuestions" },
        },
      },
    ]);

    // Add rank and slug properties to match the previous implementation
    const leaderboard = leaderboardAggregation.map((user, index) => ({
      ...user,
      rank: index + 1,
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
