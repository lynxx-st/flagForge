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

// Index userId for faster completion lookups
userQuestionSchema.index({ userId: 1 });
// Compound index for unique completions and faster lookups
userQuestionSchema.index({ userId: 1, questionId: 1 }, { unique: true });

const UserQuestionModel =
    mongoose.models.UserQuestion || model("UserQuestion", userQuestionSchema);

export default UserQuestionModel;
