export interface IResizeEvent {
  sizes: number[];
  divider: number;
  originalEvent: MouseEvent | TouchEvent;
}

export type Direction = 'horizontal' | 'vertical';
