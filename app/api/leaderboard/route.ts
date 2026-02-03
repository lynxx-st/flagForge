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

    // Fetch top 50 users and calculate roomsCompleted using an aggregation pipeline
    // This avoids the N+1 query problem by performing a join and count in a single database roundtrip
    const leaderboardData = await User.aggregate([
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

    // Add rank and slug to the leaderboard data
    const leaderboard = leaderboardData.map((user, index) => ({
      name: user.name,
      totalScore: user.totalScore,
      image: user.image,
      roomsCompleted: user.roomsCompleted,
      rank: index + 1,
      slug: user.name.replace(/\s+/g, "-"),
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
