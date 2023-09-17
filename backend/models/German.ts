import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

interface germanInfo {
    word: string,
    points: number
}

const germanSchema = new Schema<germanInfo>({
    word: {
        type: String,
        required: true,
        maxLength:70,
    },
    points: {
        type: Number,
        required: true,
        default: 0,
        max: 100,
        min: 0,
    },
});

const German = model<germanInfo>("German", germanSchema);

export default German;