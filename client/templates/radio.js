
Template.radio.onRendered(function(){

  Meteor.call('getTracksFromGenres', this.data, function(error, result) {
    console.log(result);
    createPlayer(result);
  });

});

Template.radio.events({
  "click #foo": function(event, template){

  }
});

function createPlayer(tracks){
  var stringOfTrackIds = "";

  _.each(tracks, function(track, index) {
    var id = track.track.id;
    if(index === 0) {
      stringOfTrackIds += id;
    }
    stringOfTrackIds += "," + id;
  });
  var playerIframe =
  '<iframe src="https://embed.spotify.com/?uri=spotify:trackset:MUSIXIM:|TRACKS|" frameborder="0" allowtransparency="true"></iframe>';

  playerIframe = playerIframe.replace('|TRACKS|', stringOfTrackIds);

  $('#radio-container').html(playerIframe);
}
