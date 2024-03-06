chrome.action.onClicked.addListener(function(tab) {
    chrome.storage.sync.get('enabled', function(data) {
      var enabled = data.enabled;
      chrome.storage.sync.set({enabled: !enabled}, function() {
        chrome.action.setIcon({path: enabled ? 'x_verified_badge_view_48.png' : 'x_verified_badge_48.png'});
      });
    });
  });