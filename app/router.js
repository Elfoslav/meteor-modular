Router.route('/', {
  name: 'home'
});

Router.route('/404', {
  name: 'notFound'
});

Router.configure({
  layoutTemplate: 'mainLayout'
});