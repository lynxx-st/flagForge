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

    // Fetch top 50 users sorted by totalScore in descending order
    const users = await User.find({})
      .sort({ totalScore: -1 })
      .limit(50) // Limit to top 50 users
      .select("name totalScore image _id");

    const userIds = users.map((user) => user._id);

    // Get completion counts for all top users in one query to fix N+1 problem
    const completionCounts = await UserQuestionModel.aggregate([
      { $match: { userId: { $in: userIds } } },
      { $group: { _id: "$userId", count: { $sum: 1 } } },
    ]);

    // Create a map for quick lookup of completion counts
    const countsMap = new Map(
      completionCounts.map((item) => [item._id.toString(), item.count])
    );

    // Map users to the final leaderboard format
    const leaderboard = users.map((user, index) => ({
      name: user.name,
      totalScore: user.totalScore,
      image: user.image,
      roomsCompleted: countsMap.get(user._id.toString()) || 0,
      rank: index + 1, // Rank starts from 1
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
