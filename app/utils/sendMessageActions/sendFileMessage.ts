import { callSendAPI } from '../callSendAPI';
import * as dotenv from "dotenv";

dotenv.config();
const SERVER_URL = process.env.SERVER_URL
/*
 * Send a file using the Send API.
 *
 */
export default function sendFileMessage(recipientId: string) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: "file",
        payload: {
          url: SERVER_URL + "/assets/test.txt"
        }
      }
    }
  };

  callSendAPI(messageData);
}