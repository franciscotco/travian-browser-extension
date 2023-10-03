import { type MessageEventRequest, type ExtractMessageEventReponse } from '../events.interfaces';

export const dispatchMessage = <
  RequestMessage extends MessageEventRequest,
  ResponseMessage = ExtractMessageEventReponse<RequestMessage>
>(
  request: RequestMessage
): Promise<ResponseMessage> => chrome.runtime.sendMessage(request);
