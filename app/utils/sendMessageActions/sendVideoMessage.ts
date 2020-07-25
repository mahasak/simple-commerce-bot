import { callSendAPI } from '../callSendAPI';
import * as dotenv from "dotenv";

dotenv.config();
const SERVER_URL = process.env.SERVER_URL
/*
 * Send a video using the Send API.
 *
 */
export default function sendVideoMessage(recipientId: string) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "video",
        payload: {
          url: SERVER_URL + "/assets/allofus480.mov"
        }
      }
    }
  };

  callSendAPI(messageData);
}