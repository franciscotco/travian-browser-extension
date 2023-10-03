import { useEffect, type ReactElement, useState } from 'react';

import ButtonRaid from './button-raid';

const Popup = (): ReactElement | null => {
  const [tab, setTab] = useState<chrome.tabs.Tab>();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(async ([tab]) => {
      setTab(tab);
    });
  }, []);

  if (tab?.id) {
    return (
      <div style={{ width: '200px', height: '150px' }}>
        <ButtonRaid name="sero99:raidList2966" timer={15} title="Raid sero" tabId={tab.id} />
        <ButtonRaid name="fila:raidList2990" timer={60} title="Raid fila" tabId={tab.id} />
        <ButtonRaid
          name="alexandria:raidList2994"
          timer={90}
          title="Raid alexandria"
          tabId={tab.id}
        />
        <ButtonRaid name="dark:raidList2995" timer={100} title="Raid dark" tabId={tab.id} />
        <ButtonRaid name="octo:raidList3004" timer={40} title="Raid octo" tabId={tab.id} />
      </div>
    );
  } else {
    return null;
  }
};

export default Popup;
