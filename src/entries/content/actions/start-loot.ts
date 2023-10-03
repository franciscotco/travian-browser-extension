import { LootName } from '@src/interfaces/loot-name';

import { AUTO_LOOT } from '../models/auto-loot';
import { stopLoot } from './stop-loot';

const loot = (name: LootName) => {
  const [, id] = name.split(':');
  const button = document.querySelector<HTMLElement>(`#${id} > .raidListHeadline > form > button`);

  if (button) {
    button.click();
  }
};

interface StartLoopProps {
  name: LootName;
  timer: number;
}

export const startLoot = ({ name, timer }: StartLoopProps): boolean => {
  stopLoot({ name });
  loot(name);
  AUTO_LOOT[name] = window.setInterval(() => loot(name), 60 * 1000 * timer);
  return false;
};
