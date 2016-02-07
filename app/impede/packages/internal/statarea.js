// Generated by CoffeeScript 1.10.0
(function() {
  this.StatArea = (function() {
    var instance;

    instance = null;

    function StatArea() {
      if (instance) {
        return instance;
      } else {
        instance = this;
      }
      this.x = 0;
      this.y = 0;
      this.w = $(".leftArea").width();
      this.h = $(window).height();
      this.padding = 10;
      this.div = d3.select(".leftArea").append("div").classed("statArea", true);
      this._text = this.div.append("p").classed("text", true);
      this._text.html(["time: " + 0, "running: " + false, "continuous mode: " + "off"].join("<br>"));
    }

    StatArea.prototype.updateText = function() {
      var ref;
      return this._text.html([
        "time: " + State.time, "running: " + State.running, "continuous mode: " + ((ref = State.continuousTime) != null ? ref : {
          "on": "off"
        })
      ].join("<br>"));
    };

    return StatArea;

  })();

}).call(this);