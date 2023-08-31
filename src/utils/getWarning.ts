import {Warnings} from '../types';

export const getWarning = (warnings: Warnings, ttn: string) =>
  warnings[0][`ID_${ttn}`];
