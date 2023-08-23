import Message from "@models/message";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { name, phone, email, message} = await request.json();

    try {
        await connectToDB();
        const newMessage = new Message({ name, phone, email, message });

        await newMessage.save();
        return new Response(JSON.stringify(newMessage), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}