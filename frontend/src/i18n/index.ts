export type { Lang, TranslationTree } from './types';
export { en } from './en';
export { fr } from './fr';

import { en } from './en';
import { fr } from './fr';
import type { Lang } from './types';

export const translations = { en, fr } satisfies Record<Lang, typeof en>;
