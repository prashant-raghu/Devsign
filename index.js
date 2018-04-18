/* global Y, ace */

// initialize a shared object. This function call returns a promise!
Y({
  db: {
    name: 'memory'
  },
  connector: {
    name: 'websockets-client',
    room: 'Designer'
  },
  sourceDir: '/bower_components',
  share: {
    ace: 'Text' 
  }
}).then(function (y) {
  window.yAce = y
  var editor = ace.edit('Designer')
  editor.setTheme('ace/theme/vibrant_ink')
  editor.getSession().setMode('ace/mode/html')
  document.getElementById('Designer').style.fontSize='14px';
   editor.setValue("doc doc doc");
  y.share.ace.bindAce(editor)
})

Y({
  db: {
    name: 'memory'
  },
  connector: {
    name: 'websockets-client',
    room: 'Developer'
  },
  sourceDir: '/bower_components',
  share: {
    ace: 'Text' 
  }
}).then(function (y) {
  window.yAce = y
  var editor1 = ace.edit('Developer')
  editor1.setTheme('ace/theme/dracula')
  editor1.getSession().setMode('ace/mode/javascript')
  document.getElementById('Developer').style.fontSize='14px';
  editor1.setValue("the new text here");
  y.share.ace.bindAce(editor1)
})