import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as types from '../actions/types';
import { loginAsync } from './authSaga';
import {
  verifyBroadcastInfoAsync,
  scanBroadcastAsync,
  initializeLockAsync,
  testHallAsync,
  testRTCAsync,
  testDoorSensorAsync,
  testTouchKeyAsync,
  testNfcChipAsync,
  testAutoLockAsync,
  testOfflineCodeAsync,
  uploadSerialNoAsync,
  // endTestAsync,
  uploadTestRecordAsync,
} from './testSaga';

import { getMaximumSerialNoAsync, updateLocksAsync } from './locksSaga';

export default function* rootSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginAsync);
  yield takeLatest(types.TEST_REQUEST, verifyBroadcastInfoAsync);
  yield takeLatest(types.SCAN_BROADCAST, scanBroadcastAsync);
  yield takeLatest(types.TEST_BROADCAST_INFO_SUCCESS, initializeLockAsync);
  yield takeEvery(types.INIT_LOCK_SUCCESS, testRTCAsync);
  yield takeEvery(types.TEST_RTC_SUCCESS, testHallAsync);
  yield takeEvery(types.TEST_HALL_SUCCESS, testDoorSensorAsync);
  yield takeEvery(types.TEST_DOOR_SENSOR_SUCCESS, testTouchKeyAsync);
  yield takeEvery(types.TEST_TOUCH_KEY_SUCCESS, testNfcChipAsync);
  yield takeEvery(types.TEST_NFC_CHIP_SUCCESS, testAutoLockAsync);
  yield takeEvery(types.TEST_AUTO_LOCK_SUCCESS, testOfflineCodeAsync);
  yield takeEvery(types.UPLOAD_SERIAL_N0_PENDING, uploadSerialNoAsync);
  // yield takeLatest(types.END_TEST_REQUEST, endTestAsync);
  yield takeEvery(types.END_TEST, uploadTestRecordAsync);
  yield takeEvery(types.FIND_LOCK, updateLocksAsync);
  yield takeEvery(types.GET_MAX_SERIAL_NUM_PENDING, getMaximumSerialNoAsync);
}
