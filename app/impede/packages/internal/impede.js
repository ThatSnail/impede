// Generated by CoffeeScript 1.10.0
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.init = function() {
    var CapacitorSprite, Configuration, DA, Drawable, Elements, Grid, InductorSprite, Metastate, ResistorSprite, SA, Sprite, State, WireGhostSprite, WireSprite;
    if (Meteor.isClient) {
      ({
        contains: function(array, element) {
          var i, j, k, l, ref, ref1;
          for (i = k = 0, ref = array.length; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
            for (j = l = 0, ref1 = element.length; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
              if (array[i][j] !== element[j]) {
                return false;
              }
            }
            return true;
          }
          return false;
        }
      });
      Elements = {
        WIRE: 0,
        RESISTOR: 1,
        CAPACITOR: 2,
        INDUCTOR: 3,
        OPAMP: 4,
        V_IN: 5,
        V_OUT: 6,
        V_SRC: 7
      };
      SA = new window.StatArea();
      DA = new window.DescArea();
      Drawable = window.Drawable;
      Grid = window.Grid;
      Configuration = window.Configuration;
      Metastate = new window.Metastate(new Configuration());
      Sprite = window.Sprite;
      WireSprite = window.WireSprite;
      WireGhostSprite = window.WireGhostSprite;
      ResistorSprite = window.ResistorSprite;
      InductorSprite = window.InductorSprite;
      CapacitorSprite = window.CapacitorSprite;
      State = window.State;
      Grid.initialize();
      return $("body").keydown(function(e) {
        switch (e.keyCode) {
          case 38:
            Grid.zoomIn();
            Grid.redraw();
            return Metastate.updateSVGs();
          case 40:
            Grid.zoomOut();
            Grid.redraw();
            return Metastate.updateSVGs();
          case 82:
            return Metastate.selected = Elements.RESISTOR;
          case 67:
            return Metastate.selected = Elements.CAPACITOR;
          case 76:
            return Metastate.selected = Elements.INDUCTOR;
        }
      });
    }
  };

}).call(this);