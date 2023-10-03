import { type MessageEventRequest, type ExtractMessageEventReponse } from '../events.interfaces';

export const messageListener = (
  listener: (
    request: MessageEventRequest,
    messageSender: chrome.runtime.MessageSender,
    sendResponse: (response: ExtractMessageEventReponse<MessageEventRequest>) => void
  ) => boolean
): void => chrome.runtime.onMessage.addListener(listener);
