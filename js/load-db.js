$.getJSON('./db/hot_list.json', function name(hot_list) {
  let hot_list_html = '';
  hot_list.forEach(function (hot) {
    hot_list_html += `
  <div class="col-md-4 hot-grid ${hot.kind}">
    <a href="${hot.href}" target="_blank">
      <div class="services-inner-box hot-single clearfix" ontouchstart="">
          <h2>${hot.title}</h2>
          <p>${hot.href}</p>
      </div>
  </a></div>`
  });
  $('.hot-list').html(hot_list_html);
});
