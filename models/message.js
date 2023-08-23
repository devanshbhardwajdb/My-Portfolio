import { Schema, model, models } from "mongoose";


const ContactSchema = new Schema ({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
    name:{
        type: String,
        required :[true,"Name is required."],
    },

    phone:{
        type:String,
        required:[true,"tag is required."],
    },
    email:{
        type:String,
        required:[true,"Email is required."],
    },
    message:{
        type:String,
        required:[true,"Message is required."],
    },
});

const Message = models.Message || model('Message', ContactSchema);

export default Message;