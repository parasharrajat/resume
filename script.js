

$(document).ready(function () {
  let selectedVr = "";
  const vrDrop = $('#vr-drop-btn');
  const resumeFr = $('#resume-frame');
  const vrs = $('#vr-drop-btn .dropdown-menu > .dropdown-item');
  const selectedItem = vrs.toArray().find(e => e.data("selected"));
  if (selectedItem) {
    selectedVr = selectedItem.text();
    setBtnFrame(selectedItem);
  }

  $('#vr-drop-btn + .dropdown-menu > .dropdown-item').on('click', function () {
    if (selectedVr !== this.textContent) {
      selectedVr = this.textContent;
      setBtnFrame($(this));
    }
  });
  function setBtnFrame(item) {
    vrDrop.text(item.text());
    resumeFr.prop("src", `resume-${item.data('date')}/index.html`);
  }
});
