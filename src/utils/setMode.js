const setMode = (mode) => {
  if (mode === true) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('isLightMode', true);
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('isLightMode', false);
  }
};

export default setMode;
