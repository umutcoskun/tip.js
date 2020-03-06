(function () {
  window.$tip = {
    element: null,
    init: function(options) {
      var self = this;
      if (typeof options == 'undefined') options = {};
      if (!options.hasOwnProperty('background')) options.background = '#212121';
      if (!options.hasOwnProperty('color')) options.color = '#FFFFFF';
      document.getElementsByTagName('body')[0].appendChild(
        document.createRange().createContextualFragment('<div id="tip"></div>')
      );
      document.getElementsByTagName('head')[0].appendChild(
        document.createRange().createContextualFragment('<style>#tip { position: fixed; background: ' + options.background + '; color: ' + options.color + '; z-index: 99; padding: .25rem .5rem; border-radius: 3px; font-size: .9rem; margin-top: .5rem; }</style>')
      );
      self.element = document.getElementById('tip');
      document.querySelectorAll('[data-tip]').forEach(function(item) {
        item.addEventListener('mouseover', function (event) {
          self.element.innerText = item.dataset.tip;
          self.element.style.display = 'block';
          var rect = event.target.getBoundingClientRect();
          self.element.style.top = rect.top + rect.height + 'px';
          self.element.style.left = (rect.left + rect.width / 2) - (self.element.getBoundingClientRect().width / 2) + 'px';
        });
        item.addEventListener('mouseout', function (event) {
          self.element.style.display = 'none';
        });
      });
    }
  };
})();
