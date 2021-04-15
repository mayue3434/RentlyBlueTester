//auth
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

//locks
export const UPDATE_LOCK = 'UPDATE_LOCK';
export const CLEAR_LOCKS = 'CLEAR_LOCKS';

export const SET_RSSI_FILTER = 'SET_RSSI_FILTER';
export const SET_THRESHOLD = 'SET_THRESHOLD';

export const GET_MAX_SERIAL_NUM_REQUEST = 'GET_MAX_SERIAL_NUM_REQUEST';
export const GET_MAX_SERIAL_NUM_SUCCESS = 'GET_MAX_SERIAL_NUM_SUCCESS';
export const GET_MAX_SERIAL_NUM_FAILED = 'GET_MAX_SERIAL_NUM_FAILED';

//test
const stateEnum = {
  NOT_STARTED: 0,
  PENDING: 1,
  SUCCESS: 2,
  FAILED: 3,
};
export const { NOT_STARTED, PENDING, SUCCESS, FAILED } = stateEnum;

export const TEST_REQUEST = 'TEST_REQUEST';
export const TEST_SUCCESS = 'TEST_SUCCESS';
export const TEST_FAILED = 'TEST_FAILED';

export const TEST_BROADCAST_INFO_PENDING = 'TEST_BROADCAST_INFO_PENDING';
export const TEST_BROADCAST_INFO_SUCCESS = 'TEST_BROADCAST_INFO_SUCCESS';
export const TEST_BROADCAST_INFO_FAILED = 'TEST_BROADCAST_INFO_FAILED';

export const INIT_LOCK_PENDING = 'INIT_LOCK_PENDING';
export const INIT_LOCK_SUCCESS = 'INIT_LOCK_SUCCESS';
export const INIT_LOCK_FAILED = 'INIT_LOCK_FAILED';
