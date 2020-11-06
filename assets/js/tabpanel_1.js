$(function() {

  function toggleAttrs(e, ariaSelected, tabIndex, ariaHidden, focus) {
    var target = e.target;
    var id = $(target).attr('href');
    $(target)
      .attr({
        'aria-selected': ariaSelected,
        'tabindex': tabIndex
      })
      .closest('.tab-control').find(id).attr({
        'aria-hidden': ariaHidden
      });
    if (focus === '1') {
      target.focus();
    }
  }
  $('.tab-control [data-toggle="tab"]')
    .on('shown.bs.tab', function(e) {
      toggleAttrs(e, 'true', '0', 'false', '1');
    })
    .on('hidden.bs.tab', function(e) {
      toggleAttrs(e, 'false', '-1', 'true', '0');
    });

  function keyCodes() {
    // Define values for keycodes
    this.left = 37;
    this.up = 38;
    this.right = 39;
    this.down = 40;
    this.end = 35;
    this.home = 36;
  }
  var keys = new keyCodes();
  $('.nav li a').on('keydown', function(e) {
    var currentTab = $(this).closest('li');
    if (e.which === keys.left || e.which === keys.up) {
      e.preventDefault();
      if (currentTab.prev().length === 0) {
        currentTab.nextAll().last().find('a').click()
      } else {
        currentTab.prev().find('a').click();
      }
    }
    if (e.which === keys.right || e.which === keys.down) {
      e.preventDefault();
      if (currentTab.next().length === 0) {
        currentTab.prevAll().last().find('a').click()
      } else {
        currentTab.next().find('a').click();
      }
    }
    if (e.which === keys.home && currentTab.prev().length > 0) {
      e.preventDefault();
      currentTab.prevAll().last().find('a').click();
    }
    if (e.which === keys.end && currentTab.next().length > 0) {
      e.preventDefault();
      currentTab.nextAll().last().find('a').click();
    }
  });
});
