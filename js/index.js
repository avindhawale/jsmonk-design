const toggleTheme = () => {
  const root = document.getElementById("main-container");
  console.log(root.className);
  if (root.className.includes("theme-default")) {
    root.className = "main-container theme-dracula";
  } else if (root.className.includes("theme-dracula")) {
    root.className = "main-container theme-light";
  } else {
    root.className = "main-container theme-default";
  }
};
