const add_ellipsis = (title, number) => {
  if (title.length > 0) {
    return title.slice(0, number) + "...";
  } else {
    return title;
  }
};
export default add_ellipsis;
