export const SET_WORD = "SETWORD";
export const SET_CHAR = "SETCHAR";
export const TIMER_DECREMENT = "TIMERDECREMENT";
export const APPEND_TYPED_HISTORY = "APPENDTYPEDHISTORY";
export const TIMER_SET = "TIMERSET";
export const TIMER_RESET = "TIMERRESET";
export const TIMERID_SET = "TIMERIDSET";
export const PREV_WORD = "PREVWORD";
export const SET_WORDLIST = "SETWORDLIST";
export const SET_THEME = "SETTHEME";
export const SET_TIME = "SETTIME";

export const timerDecrement = () => ({ type: TIMER_DECREMENT });
export const timerSet = (payload: number) => ({ type: TIMER_SET, payload });
export const setTimerId = (payload: NodeJS.Timer | null) => ({
	type: TIMERID_SET,
	payload,
});
export const setWord = (payload: string) => ({ type: SET_WORD, payload });
export const setChar = (payload: string) => ({ type: SET_CHAR, payload });
export const setTypedWord = (payload: string) => ({ type: SET_CHAR, payload });
export const resetTimer = () => ({ type: TIMER_RESET });
export const appendTypedHistory = () => ({
	type: APPEND_TYPED_HISTORY,
});
export const backtrackWord = (payload: boolean) => ({
	type: PREV_WORD,
	payload,
});
export const setWordList = (payload: string[]) => ({
	type: SET_WORDLIST,
	payload,
});

export const setTheme = (payload: string) => ({ type: SET_THEME, payload });
export const setTime = (payload: number) => ({ type: SET_TIME, payload });