import { callSendAPI } from '../callSendAPI';
import * as dotenv from "dotenv";

dotenv.config();
const SERVER_URL = process.env.SERVER_URL

/*
 * Send a Gif using the Send API.
 *
 */
export default function sendGifMessage(recipientId: string) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: SERVER_URL + '/assets/instagram_logo.gif'
        }
      }
    }
  };

  callSendAPI(messageData);
}