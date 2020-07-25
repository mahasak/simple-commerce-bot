import { callSendAPI } from '../callSendAPI';
import * as dotenv from "dotenv";

dotenv.config();
const SERVER_URL = process.env.SERVER_URL
/*
 * Send audio using the Send API.
 *
 */
export default function sendAudioMessage(recipientId: string) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "audio",
        payload: {
          url: SERVER_URL + "/assets/sample.mp3"
        }
      }
    }
  };

  callSendAPI(messageData);
}