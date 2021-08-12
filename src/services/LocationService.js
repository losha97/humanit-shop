/*
* @Author: Aleksiej Kuncewicz
* @Date:   2021-08-11 16:18:50
* @Last Modified by:   Aleksiej Kuncewicz
* @Last Modified time: 2021-08-12 18:29:44
*/

function LocationFactory() {
  function getUrlParams(search) {
    if (!search) {
      return new URLSearchParams();
    }
    return new URLSearchParams(search);
  }

  function setLocation(path, history) {
    if (history) {
      history.push(path);
    } else {
      window.location.href = path;
    }
  }

  function getCurrentPathName() {
    return window.location.pathname;
  }

  function reloadWindow() {
    window.location.reload();
  }

  return  {
    getCurrentPathName: getCurrentPathName,
    getUrlParams: getUrlParams,
    setLocation: setLocation,
    reloadWindow: reloadWindow
  }
}

export const LocationService = new LocationFactory();