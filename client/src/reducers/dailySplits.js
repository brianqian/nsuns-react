function dailySplits(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_REPS':
      console.log(state);
      return state;
    default:
      return state;
  }
}

export default dailySplits;
