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