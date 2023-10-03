import { messageListener } from '@src/events/listeners/message-listener';

messageListener((message) => {
  switch (message.type) {
    default:
      return false;
  }
});
