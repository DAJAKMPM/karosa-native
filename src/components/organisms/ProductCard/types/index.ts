/**
 *
 * @format
 *
 */

export type PropsType = {
  variation: number;
  discount?: string;
  image?: string;
  name: string;
  wholesale?: boolean;
  currentPrice?: string;
  previousPrice?: string;
  sold?: string;
  buttonTitle?: string;
  onButtonClick?(): void;
  onHeartClick?(): void;
  heartFlag?: boolean;
  rating?: number;
  location?: string;
};
