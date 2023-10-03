import { type MessageEventRequest, type ExtractMessageEventReponse } from '../events.interfaces';

export const dispatchMessageTab = <
  RequestMessage extends MessageEventRequest,
  ResponseMessage = ExtractMessageEventReponse<RequestMessage>
>(
  tabId: number,
  request: RequestMessage
): Promise<ResponseMessage> => chrome.tabs.sendMessage(tabId, request);
