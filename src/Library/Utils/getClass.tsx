import clsx from 'clsx';

export const getClass = (...classes: any[]): string | undefined =>
  clsx(classes.filter(Boolean)).trim() || undefined;
