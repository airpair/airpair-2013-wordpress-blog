// Generated by CoffeeScript 1.6.3
(function() {
  jQuery(function($) {
    var banner, bannerBottomHtml, bannerTopHtml, modalHtml, profile, vid;
    vid = $(".entry-content #featured-video").detach();
    $(".entry-header").prepend(vid);
    profile = $(".entry-content #profile-box").detach();
    $(".entry-header").prepend(profile);
    setTimeout((function() {
      var contentPos, footerPos, newTablePos, tableOfContents;
      tableOfContents = $("#table-of-contents").offset().top - 20;
      footerPos = $(".entry-footer").offset().top - $(window).height();
      contentPos = $("#content").offset().top;
      newTablePos = $("#content").height();
      return $(window).scroll(function(e) {
        if (window.scrollY > tableOfContents && window.scrollY < footerPos) {
          return $("#table-of-contents").addClass("affix").css({
            top: 31
          });
        } else if (window.scrollY > footerPos) {
          return $("#table-of-contents").removeClass("affix").css({
            top: footerPos - contentPos
          });
        } else {
          return $("#table-of-contents").removeClass("affix");
        }
      });
    }), 2000);
    $("a[href^='#']").click(function(e) {
      e.preventDefault();
      $("html,body").stop().animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
    });
    bannerTopHtml = "<div class=\"banner-top\">\n  <div class=\"wrap\">\n    <div class=\"col-left\">\n      <h3 class=\"title-main\">Live <span id=\"tech-title\">Programming</span> Help from Thousands of Experts</h3>\n      <h4 class=\"title-sub\">\n        Available to pair program live using video chat and screen sharing\n        <a class=\"btn-link\" href=\"http://airpair.com\">learn more</a>\n      </h4>\n    </div>\n    <div class=\"col-right\">\n      <h3 class=\"title-offer\">Limited time: <strong>$50/hr</strong></h3>\n      <h4 class=\"title-offer-sub\">with any of our experts</h3>\n\n\n      <div class=\"input-group\">\n        <input id=\"bannerTopInput\" type=\"text\" class=\"form-control\" placeholder=\"Enter email to redeem\">\n        <span class=\"input-group-btn\">\n          <button id=\"bannerTopBtn\" class=\"btn btn-default\" type=\"button\">Go</button>\n        </span>\n      </div><!-- /input-group -->\n      <div id=\"error-top\" class=\"input-error\"></div>\n    </div>\n\n  </div>\n  <div class=\"user-strip\"></div>\n</div>";
    $(".site-inner").prepend($(bannerTopHtml));
    bannerBottomHtml = "\n<div class=\"banner-bottom\">\n  <div class=\"user-strip\"></div>\n  <div class=\"wrap\">\n    <center>\n      <div class=\"title-main\">Need more help?</div>\n      <div class=\"title-sub\">\n        Receive help via video chat and screen sharing from thousands of experts\n      </div>\n      <a class=\"btn-link\" href=\"http://airpair.com\">learn more</a>\n    </center>\n\n\n  <div class=\"diagram-how\">\n    <h2 class=\"\">How it works</h2>\n    <div class=\"row clearfix\">\n      <div class=\"col-sm-4\">\n        <div class=\"figure\">\n          <img src=\"http://airpair.com/images/pages/marketing/how-1.png\" alt=\"\">\n        </div>\n        <p>Tell Us What You Need</p>\n      </div>\n      <div class=\"col-sm-4 \">\n        <div class=\"figure p-t-1\">\n          <div class=\"img-overlap three\">\n            <img src=\"http://airpair.com/images/avatars/of.png\" alt=\"\" class=\"img-circle img-border\">\n            <img src=\"http://airpair.com/images/avatars/rb.png\" alt=\"\" class=\"img-circle img-border\">\n            <img src=\"http://airpair.com/images/avatars/ag.jpeg\" alt=\"\" class=\"img-circle img-border\">\n          </div>\n          <svg class=\"arrow arrow-right\" width=\"161px\" height=\"114px\" viewBox=\"0 0 161 114\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n              <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n                  <g id=\"Artboard-3\" sketch:type=\"MSArtboardGroup\" transform=\"translate(78.000000, -13.000000)\">\n                      <g id=\"arrow\" sketch:type=\"MSLayerGroup\" transform=\"translate(22.000000, 14.000000)\">\n                          <path d=\"M0.332,7.036 L49.568,7.036\" id=\"Stroke-1\" stroke=\"#E4E5E1\" stroke-width=\"3\" sketch:type=\"MSShapeGroup\"></path>\n                          <path d=\"M47.38,14.516 L60.332,7.037 L47.38,-0.443 L47.38,14.516\" id=\"Fill-2\" fill=\"#E4E5E1\" sketch:type=\"MSShapeGroup\"></path>\n                      </g>\n                  </g>\n              </g>\n          </svg>\n          <svg class=\"arrow arrow-left\" width=\"161px\" height=\"114px\" viewBox=\"0 0 161 114\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n              <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n                  <g id=\"Artboard-3\" sketch:type=\"MSArtboardGroup\" transform=\"translate(78.000000, -13.000000)\">\n                      <g id=\"arrow\" sketch:type=\"MSLayerGroup\" transform=\"translate(22.000000, 14.000000)\">\n                          <path d=\"M0.332,7.036 L49.568,7.036\" id=\"Stroke-1\" stroke=\"#E4E5E1\" stroke-width=\"3\" sketch:type=\"MSShapeGroup\"></path>\n                          <path d=\"M47.38,14.516 L60.332,7.037 L47.38,-0.443 L47.38,14.516\" id=\"Fill-2\" fill=\"#E4E5E1\" sketch:type=\"MSShapeGroup\"></path>\n                      </g>\n                  </g>\n              </g>\n          </svg>\n        </div>\n        <p>We’ll Match You with 3 Experts</p>\n      </div>\n      <div class=\"col-sm-4 \">\n        <div class=\"figure\">\n          <img src=\"http://airpair.com/images/pages/marketing/how-2.png\" alt=\"\">\n        </div>\n        <p>You’ll Choose One and Start a Video Call</p>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"offer-box\">\n      <div class=\"title-offer\">Limited time offer: <strong>$50/hr</strong> with any of our experts</div>\n      <div class=\"input-group\">\n        <input id=\"bannerBottomInput\" type=\"text\" class=\"form-control\" placeholder=\"Enter email to redeem\">\n        <span class=\"input-group-btn\">\n          <button id=\"bannerBottomBtn\" class=\"btn btn-default\" type=\"button\">Go</button>\n        </span>\n      </div>\n      <div id=\"error-bottom\" class=\"input-error\"></div>\n\n    </div> \n  </div>\n</div>\n";
    $(".site-inner").append($(bannerBottomHtml));
    modalHtml = "\n<div class=\"modal modal-article\" id=\"modal-getoffer\">\n\n  <div class=\"modal-body animated bounceIn\">\n\n    <h1 class=\"text-blue\">You successfully redeemed the $50/hr flat rate!</h1>\n    <h2>Let's get started now - what can we help you with?</h2>\n    <a id=\"track-get-started\" href=\"http://www.airpair.com/find-an-expert\" target=\"_blank\" class=\"btn btn-primary\">Get Help via Video Chat</a>\n    <p class=\"text-small\">Note: We use Google Hangouts for AirPairs, so you'll be asked to provide your Google credentials.</p>\n    <a href=\"http://airpair.com\" target=\"_blank\">Learn more about how AirPair works</a>\n    <br>\n    <img class=\"user-images\" src=\"http://www.airpair.com/wp-content/themes/epik/images/usercircles-3.png\" alt=\"\">\n\n  </div>\n\n</div>\n\n<div class=\"modal modal-article\" id=\"modal-gethelp\">\n\n  <div class=\"modal-body animated bounceIn\">\n\n    <h1 class=\"text-blue\">Just one more step…</h1>\n    <h2>We use Google Hangouts for AirPairs, so you'll <br> be asked to provide your Google credentials</h2>\n    <a id=\"track-get-started-source\" href=\"http://www.airpair.com/find-an-expert\" target=\"_blank\" class=\"btn btn-primary\" style=\"margin-bottom: 40px;\" >Get Help via Video Chat</a>\n    <br>\n    <a href=\"http://airpair.com\" target=\"_blank\">Learn more about how AirPair works</a>\n    <br>\n    <img class=\"user-images\" src=\"http://www.airpair.com/wp-content/themes/epik/images/usercircles-3.png\" alt=\"\">\n\n  </div>\n\n</div>\n";
    $("html").append($(modalHtml));
    banner = {
      techList: {
        "android": "Android",
        "angularjs": "AngularJS",
        "backbone.js": "Backbone.js",
        "c-plus-plus": "C++",
        "devops": "DevOps",
        "ios": "iOS",
        "javascript": "Javascript",
        "microsoft.net": ".Net",
        "node.js": "Node.js",
        "php": "PHP",
        "python": "Python",
        "ruby-on-rails": "Rails",
        "wordpress": "Wordpress",
        "twilio": "Twilio",
        "django": "Django",
        "git": "Git",
        "hadoop": "Hadoop",
        "jquery": "jQuery",
        "rubymotion": "Ruby Motion",
        "selenium": "Selenium",
        "agile-software": "Agile Software",
        "conversion-rate-optimization": "Conversion Rate Optimization",
        "performance-testing": "Performance Testing",
        "seo": "Search Engine Optimization",
        "test-driven-development": "Test Driven Development",
        "tutorials": "Tutorials",
        "nginx": "Nginx",
        "go": "Golang",
        "excel": "Excel",
        "matlab": "Matlab"
      },
      validateEmail: function(email) {
        var re;
        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      saveInfo: function(info) {
        var _this = this;
        if (!this.validateEmail(info.email)) {
          this.showError(info, "Invalid email");
          return;
        }
        info.Tech = this.findTech();
        return $.post("/api/landing/mailchimp/article", info, function(data) {
          _this.openModal("#modal-getoffer", info);
          _this.hideErrors();
          return addjs.trackCustomEvent("getOfferFromArticle", {
            position: info.position,
            tech: info.Tech
          });
        });
      },
      openModal: function(modalName, info) {
        $(modalName).show();
        return $("body").addClass("no-scroll");
      },
      closeModal: function(modalName) {
        $("body").removeClass("no-scroll");
        return $(modalName).hide();
      },
      bindModals: function() {
        var _this = this;
        $(".modal").click(function(e) {
          if ($(e.target).hasClass('modal')) {
            return _this.closeModal(".modal");
          }
        });
        addjs.trackLink($("#track-get-started"), "findExpert", {
          tech: info.Tech,
          from: "offer"
        });
        return addjs.trackLink($("#track-get-started-source"), "findExpert", {
          tech: info.Tech,
          from: "code snippit"
        });
      },
      showError: function(info, message) {
        return $("#error-" + info.position).text(message).show();
      },
      hideErrors: function() {
        return $(".input-error").hide();
      },
      findTech: function() {
        var tech;
        tech = location.pathname.split('/')[1];
        if (this.techList[tech]) {
          return this.techList[tech];
        } else {
          return "Programming";
        }
      },
      insertTech: function() {
        return $("#tech-title").text(this.findTech());
      },
      insetCodeCta: function() {
        var srcCtaHtml,
          _this = this;
        srcCtaHtml = "<div class=\"src-cta\">\n  <span>Need help with this tutorial?</span><button class=\"modal-open-gethelp btn btn-primary\">Get help via AirPair</button>\n</div>";
        $("pre.src").each(function() {
          return $(this).after($(srcCtaHtml));
        });
        return $(".modal-open-gethelp").click(function() {
          return _this.openModal("#modal-gethelp");
        });
      }
    };
    banner.insertTech();
    banner.insetCodeCta();
    banner.bindModals();
    $("#bannerTopInput").keypress(function(e) {
      var email;
      if (e.which === 13) {
        email = $(this).val();
        return banner.saveInfo({
          email: email,
          position: "top"
        });
      }
    });
    $("#bannerTopBtn").click(function(e) {
      var email;
      email = $("#bannerTopInput").val();
      return banner.saveInfo({
        email: email,
        position: "top"
      });
    });
    $("#bannerBottomInput").keypress(function(e) {
      var email;
      if (e.which === 13) {
        email = $(this).val();
        return banner.saveInfo({
          email: email,
          position: "bottom"
        });
      }
    });
    $("#bannerBottomBtn").click(function(e) {
      var email;
      email = $("#bannerTopInput").val();
      return banner.saveInfo({
        email: email,
        position: "bottom"
      });
    });
  });

}).call(this);
