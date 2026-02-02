import mongoose, { Schema, model } from "mongoose";
import { UserQuestion } from "@/interfaces";


const userQuestionSchema = new Schema<UserQuestion>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        questionId: {
            type: Schema.Types.ObjectId,
            ref: "Question",
            required: true,
        },
    },
    { timestamps: true }
);

// Index for faster lookups of user's completed questions
userQuestionSchema.index({ userId: 1 });

const UserQuestionModel =
    mongoose.models.UserQuestion || model("UserQuestion", userQuestionSchema);

export default UserQuestionModel;
