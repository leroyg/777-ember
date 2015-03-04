import DS from 'ember-data';

export default DS.Model.extend({
  large_photo_url: DS.attr('string'),
  thumb_photo_url: DS.attr('string'),
  name: DS.attr('string')

});
