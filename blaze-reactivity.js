if (Meteor.isClient) {
  // counter starts at 0

  Template.tmpl1.onCreated(function(){
    var tmpl = this;
    tmpl.changingReactiveVar = new ReactiveVar(0);

    setInterval(function(){
      var increased = tmpl.changingReactiveVar.get() + 1;
      tmpl.changingReactiveVar.set(increased)
    }, 1000);

  })

  Template.tmpl1.helpers({
    dataContextChanged: function(){
      Template.currentData();
      console.log('I will run if the Data Context for tmpl1 Changes');
    },
    // in reality this contains some more complex JS
    emptyHelper: function(){
      // From the docs: Under the hood, each helper starts a new Tracker.autorun.

      // 1. When its reactive dependencies change -> No Dependencys.
      // 2. Helpers depend on their data context ? Local Data Contenxt should not be the
      //    reason. the the helper above -> No
      // 3. passed arguments ? No.
      // 4. Reactive data sources accessed during execution ? No.
      console.log('Hey Why am i running?')
    },
    changingReactiveVar: function () {
      return Template.instance().changingReactiveVar.get();
    },
    log: function(arg1, arg2){
      // this will also happen if you execute  any helper and pass 2 paramter
      // at the same time- see commented html
    }

  });

}
