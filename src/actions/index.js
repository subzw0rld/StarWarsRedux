import AppConstants from '../constants/appconstants';
import appconfig from '../constants/appconfig';

import "whatwg-fetch";

export function fetchPeople() {
  const PEOPLE_URL = appconfig.PEOPLE_URL;
  const PEOPLE_REQUEST = fetch(PEOPLE_URL);
  return {
    type: AppConstants.LOGIN,
    payload: PEOPLE_REQUEST
  }
}
