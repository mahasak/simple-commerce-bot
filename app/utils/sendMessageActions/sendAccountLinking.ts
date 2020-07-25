import { callSendAPI } from '../callSendAPI';
import * as dotenv from "dotenv";

dotenv.config();
const SERVER_URL = process.env.SERVER_URL
/*
 * Send a message with the account linking call-to-action
 *
 */
export default function sendAccountLinking(recipientId: string) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: 'Welcome. Link your account.',
          buttons: [
            {
              type: 'account_link',
              url: SERVER_URL + '/authorize'
            }
          ]
        }
      }
    }
  };

  callSendAPI(messageData);
}