import { createElement } from "./Utils";
import { BAR_PADDING, PREVIEW_SIZE } from "./Constants";

export const Preview = createElement({
  border: '1px solid #ffffff',
  borderRadius: `${BAR_PADDING / 2}px`,
  width: `${PREVIEW_SIZE}px`,
  height: `${PREVIEW_SIZE}px`
});
