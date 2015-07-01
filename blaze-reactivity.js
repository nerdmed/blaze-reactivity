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
    emptyHelper: function(){
      console.log('Hey Why am i running? Data context is not changing and i have no deps')
    },
    changingReactiveVar: function () {
      return Template.instance().changingReactiveVar.get();
    }
  });

}
