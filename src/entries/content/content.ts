import { messageListener } from '@src/events/listeners/message-listener';
import { stopLoot } from './actions/stop-loot';
import { startLoot } from './actions/start-loot';

messageListener((message) => {
  switch (message.type) {
    case 'content:start-auto-loot':
      return startLoot(message);
    case 'content:stop-auto-loot':
      return stopLoot(message);
    default:
      return false;
  }
});
