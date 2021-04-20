import {
  UPDATE_LOCK,
  CLEAR_LOCKS,
  SET_ENABLED,
  SET_THRESHOLD,
  GET_MAX_SERIAL_NUM_REQUEST,
  GET_MAX_SERIAL_NUM_SUCCESS,
  GET_MAX_SERIAL_NUM_FAILED,
  UPDATE_LOCKS,
} from '../actions/types';
import {
  OaksBleLockLibrary,
  PersistencePlugin,
  RNBlePlugin,
} from '../../utils/BleLibrary/lib';
import API from '../../services/API';

const libraryObj = new OaksBleLockLibrary(API.getDeviceToken, new RNBlePlugin(), new PersistencePlugin());
libraryObj.timezoneString = 'Pacific Time (US & Canada)';
const defaultState = {
  touchedLocks: [],
  settingLocks: [],
  nonSettingLocks: [],
  codes: {}, //TODO
  libraryObj,
  // isDevelopmentMode: false,
  checkEnabled: false,
  rssiThreshold: -100,
  maxSerialNumber: '',
  error: null,
};

export default (state = defaultState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case UPDATE_LOCK:
      return state;

    case UPDATE_LOCKS:
      return { ...state, ...payload };

    case CLEAR_LOCKS:
      return { ...state, touchedLocks: [], settingLocks: [], nonSettingLocks: [] };

    case SET_ENABLED:
      return { ...state, checkEnabled: !state.checkEnabled };

    case SET_THRESHOLD:
      return { ...state, rssiThreshold: payload };

    case GET_MAX_SERIAL_NUM_REQUEST:
      return { ...state, maxSerialNumber: -1 };

    case GET_MAX_SERIAL_NUM_SUCCESS:
      return { ...state, maxSerialNumber: payload };

    case GET_MAX_SERIAL_NUM_FAILED:
      return { ...state, error };

    default:
      return state;
  }
};
