import { type ReactElement, useCallback, useState } from 'react';

import { type LootName } from '@src/interfaces/loot-name';
import { dispatchMessageTab } from '@src/events/dispatchers/dispatch-message-tab';

interface ButtonRaidProps {
  name: LootName;
  timer: number;
  tabId: number;
  title: string;
}

const ButtonRaid = ({ name, timer, tabId, title }: ButtonRaidProps): ReactElement => {
  const [enabled, setEnabled] = useState(false);

  const handleClick = useCallback((): void => {
    setEnabled((prevState) => {
      if (prevState) {
        dispatchMessageTab(tabId, { type: 'content:stop-auto-loot', name });
      } else {
        dispatchMessageTab(tabId, { type: 'content:start-auto-loot', name, timer });
      }
      return !prevState;
    });
  }, [name, timer, tabId]);

  return (
    <button style={{ backgroundColor: enabled ? 'green' : 'red' }} onClick={handleClick}>
      {title}
    </button>
  );
};

export default ButtonRaid;
