

$(document).ready(function () {

  // $('[data-toggle="popover"]').popover();
  // load the correct resume
  let selectedVr = "";
  const vrDrop = $('#vr-drop-btn');
  const resumeFr = $('#resume-frame');
  const vrs = $('#vr-drop-btn + .dropdown-menu > .dropdown-item');
  const fragement = new window.URL(window.location.href).hash;
  const hasFrag = fragement && fragement.startsWith(`#resume-`);

  const selectedItem = hasFrag && vrs.toArray().find(e => $(e).data("date") === fragement.split(`#resume-`)[1]) || vrs.toArray().find(e => $(e).data("selected"));
  if (selectedItem) {
    selectedVr = $(selectedItem).text();
    setBtnFrame($(selectedItem));
  }

  function setBtnFrame(item) {
    vrDrop.text(item.text());
    resumeFr.prop("src", `resume-${item.data('date')}/index.html`);
  }
  $('#vr-drop-btn + .dropdown-menu > .dropdown-item').on('click', function () {
    if (selectedVr !== this.textContent) {
      selectedVr = this.textContent;
      setBtnFrame($(this));
    }
  });
  // set download
  let intId = NaN;
  $('#download-btn').on('click', function () {
    if (intId) {
      $(this).popover('dispose');
      $(this).find('i').each((_, e) => $(e).toggleClass('d-none'));
      clearInterval(intId);
      intId = NaN;
      return;
    }
    $(this).popover('show');
    $(this).find('i').each((_, e) => $(e).toggleClass('d-none'));
    let count = 3;
    $("#d-time").text(count);
    // remember that this timer will take 1000ms to start to initial 1sec delay
    intId = setInterval(() => {
      if (count === 1) {
        $(this).popover('dispose');
        $(this).find('i').each((_, e) => $(e).toggleClass('d-none'));
        window.print();
        clearInterval(intId);
        intId = NaN;
        return;
      }
      $("#d-time").text(--count);
    }, 1000);
  });

});
