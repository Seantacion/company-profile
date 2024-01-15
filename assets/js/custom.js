$(document).ready(function () {
  $(".icon-box").hover(
    function () {
      //stuff to do on mouse enter
      $(this)
        .children(".label-highlight")
        .css({ "background-color": "white", color: "#ff2a04" });
    },
    function () {
      $(this)
        .children(".label-highlight")
        .css({ "background-color": "#ff2a04", color: "white" });
      //stuff to do on mouse leave
    }
  );
});
