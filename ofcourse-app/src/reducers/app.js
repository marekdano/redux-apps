import produce from 'immer';
import { TOGGLE_PREVIEW_MODE } from '../actions';

const initState = {
  previewMode: false
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_PREVIEW_MODE:
      draft.previewMode = !draft.previewMode;
      return;
    default:
      return;
  }
}, initState);

export default reducer;
