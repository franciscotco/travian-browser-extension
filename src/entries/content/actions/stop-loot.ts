import { LootName } from '@src/interfaces/loot-name';
import { AUTO_LOOT } from '../models/auto-loot';

interface StopLoopProps {
  name: LootName;
}

export const stopLoot = ({ name }: StopLoopProps): boolean => {
  if (AUTO_LOOT[name]) {
    window.clearInterval(AUTO_LOOT[name]);
  }
  return false;
};
