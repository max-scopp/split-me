import { Direction } from '../components/split-me/interfaces';

/**
 * Returns the computed base font-size for the document element.
 */
function getRemBase(): number {
  return getFontBase(document.documentElement);
}

/**
 * Returns the computed base font-size for the provided element.
 */
function getFontBase(target: HTMLElement): number {
  return parseInt(getComputedStyle(target)['font-size'], 10);
}

/**
 * 10rem -> 10
 * 10em -> 10
 * 10ch -> 10
 * etc.
 * @param unitValue
 */
function unitless(unitValue: string): number {
  return parseInt(unitValue.replace(/[^\d]/i, ''), 10);
}

function absoluteToRelativeDirectional(
  absoluteValue: number,
  rect: ClientRect,
  direction: Direction
) {
  const { width, height } = rect;

  if (direction === 'horizontal') {
    return absoluteValue / width;
  }

  return absoluteValue / height;
}

export function emToFract(
  em: string,
  element: HTMLElement,
  direction: Direction
) {
  const parentBase = getFontBase(element.parentElement);
  const absoluteValue = parentBase * unitless(em);

  return absoluteToRelativeDirectional(
    absoluteValue,
    element.getBoundingClientRect(),
    direction
  );
}

export function remToFract(
  rem: string,
  element: HTMLElement,
  direction: Direction
) {
  const absoluteValue = getRemBase() * unitless(rem);

  return absoluteToRelativeDirectional(
    absoluteValue,
    element.getBoundingClientRect(),
    direction
  );
}

export function pxToFract(
  px: string,
  element: HTMLElement,
  direction: Direction
) {
  const absoluteValue = unitless(px);

  return absoluteToRelativeDirectional(
    absoluteValue,
    element.getBoundingClientRect(),
    direction
  );
}
