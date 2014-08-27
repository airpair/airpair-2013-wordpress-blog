jQuery(function($) {
  var _ref;
  if (!window.apArticle) {
    window.apArticle = {
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
        "swift": "Swift",
        "test-driven-development": "Test Driven Development",
        "tutorials": "Tutorials",
        "nginx": "Nginx",
        "go": "Golang",
        "excel": "Excel",
        "matlab": "Matlab",
        "neo4j": "Neo4J"
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
      validateEmail: function(email) {
        var re;
        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      info: {
        utm_source: "airpair",
        utm_term: ((_ref = location.pathname.split('/')) != null ? _ref[2] : void 0) || ""
      }
    };
  }
  if (location.origin === "http://localhost:3000") {
    return apArticle.info.utm_term = "extending-nginx-tutorial";
  }
});

jQuery(function($) {
  if (!window.apModals) {
    return window.apModals = {
      open: function(modalName) {
        $(modalName).show();
        $("body").addClass("no-scroll");
        return $(".modal").click((function(_this) {
          return function(e) {
            if ($(e.target).hasClass('modal')) {
              return _this.close();
            }
          };
        })(this));
      },
      close: function(modalName) {
        $("body").removeClass("no-scroll");
        $(".modal").hide();
        return $(".modal").off('click');
      }
    };
  }
});

jQuery(function($) {
  var host, layoutChanges;
  if (window.location.host === "localhost:3000") {
    window.addjs = {
      trackCustomEvent: function(eventName, info) {
        return console.log("[local] trackCustomEvent", eventName, info);
      },
      trackLink: function(el, eventName, info) {
        return console.log("[local] trackLink", eventName, info);
      }
    };
    $.post = function(url, info, cb) {
      console.log("[local] BYPASS POST");
      return cb({});
    };
  }
  host = window.location.host === "localhost:3000" ? '' : 'http://www.airpair.com/wp-content/themes/epik';
  $("a[href^='#']").click(function(e) {
    e.preventDefault();
    $("html,body").stop().animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });
  layoutChanges = {
    run: function() {
      this.fixTableofContents();
      this.addSocial();
      return this.hideByline();
    },
    fixTableofContents: function() {
      return setTimeout(function() {
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
            $("#table-of-contents").removeClass("affix");
            return $("#table-of-contents").css({
              top: 0
            });
          }
        });
      }, 2000);
    },
    hideByline: function() {
      return $(".entry-header .entry-meta").text('').css('padding', 0);
    },
    addSocial: function() {
      return $("#table-of-contents").prepend("<div class=\"social-btns\">\n  <div class=\"pw-widget pw-counter-vertical\">\n    <a class=\"pw-button-facebook pw-look-native\"></a>\n    <a class=\"pw-button-twitter pw-look-native\"></a>\n    <a class=\"pw-button-googleplus pw-look-native\"></a>\n    <a class=\"pw-button-linkedin pw-look-native\"></a>\n  </div>\n  <script src=\"http://i.po.st/static/v3/post-widget.js#publisherKey=miu9e01ukog3g0nk72m6&retina=true\" type=\"text/javascript\"></script>\n\n</div>");
    }
  };
  layoutChanges.run();
  window.promoFixedBanner = {
    add: function() {
      var $promo, $promo_location, $start_dom, i, option, services, _i, _len, _ref;
      this.expert = $('.promo-signature-location').data();
      this.expert.options = this.expert.options.split('|');
      services = '';
      _ref = this.expert.options;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        option = _ref[i];
        if (i > 0) {
          services += " <li><span class=\"arrow\">&rarr;</span> <span data-option=\"" + i + "\" class=\"link btn–promoBanner-get\">" + option + "</span></li> ";
        }
      }
      $('body').append("<div class=\"promo-signature-banner\">\n  <div class=\"wrap\">\n    <div class=\"col-left\">\n      <div class=\"user-info\">\n        <img class=\"img-circle\" src=\"" + this.expert.img + "\" alt=\"\"/> \n        <div class=\"user-title inline-only\">\n          <strong>" + this.expert.nameFirst + " " + this.expert.nameLast + "</strong>\n          <br>\n          " + this.expert.title + "\n        </div>\n      </div>\n      <div class=\"promo-info\">\n        <p> " + this.expert.options[0] + "</p>\n        <button class=\"btn btn-primary btn–promoBanner-get\" data-option=\"0\">Get help from " + this.expert.nameFirst + "</button>\n        <div class=\"services inline-only\">\n          <p>I also provide these additional services:</p>\n          <ul class=\"service-list\">\n            " + services + "\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-right\">\n      <div class=\"divider\">\n        <div class=\"or\">or</div>\n      </div>\n      <p>Get monthly " + this.expert.tech + " news and tutorials</p>\n      <div class=\"input-group\">\n        <input id=\"input–promoBanner-subscribe\" type=\"text\" class=\"form-control\" placeholder=\"Get " + this.expert.tech + " updates\">\n        <span class=\"error-text\"></span>\n        <span class=\"input-group-btn\">\n          <button id=\"btn–promoBanner-subscribe\" class=\"btn btn-default\" type=\"button\">Go</button>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>");
      $promo = $(".promo-signature-banner");
      $promo_location = $(".promo-signature-location");
      $start_dom = $('#content h2#sec-1') || $('.author-bio');
      $(window).scroll(function(e) {
        var $olark, promoInlinePos, promoShowPos;
        promoInlinePos = $promo_location.offset().top - ($(window).height() - 102);
        promoShowPos = $start_dom.offset().top;
        $olark = $('#habla_window_div');
        if (window.scrollY > promoInlinePos) {
          $promo.css("top", $promo_location.offset().top);
          $promo.addClass('inline');
          $promo.removeClass('affixed show');
          $promo.css("top", $promo_location.offset().top);
          return $olark.removeClass('banner-on');
        } else if (window.scrollY > promoShowPos) {
          $promo.removeClass('inline');
          $promo.addClass('affixed');
          $promo.addClass('show');
          $promo.css("top", 'auto');
          return $olark.addClass('banner-on');
        } else {
          $promo.addClass('affixed');
          $promo.removeClass('show inline');
          $promo.css("top", 'auto');
          return $olark.removeClass('banner-on');
        }
      });
      this.setUpModals();
      return this.emailSetup();
    },
    setUpModals: function() {
      var cta_url, self;
      cta_url = "http://www.airpair.com/auth/google?return_to=/find-an-expert&utm_content=help-video-chat&utm_source=" + window.apArticle.info.utm_source + "&utm_term=" + window.apArticle.info.utm_term + "&utm_campaign=getHelpFromModal";
      $("body").append($("<div class=\"modal modal-article\" id=\"modal-gethelp-fromBar\">\n  <div class=\"modal-body animated fadeInDown\">\n    <div class=\"modal-bubble-contain\">\n      <div class=\"modal-bubble\">\n        <h2 class=\"getHelpOption\"></h2>\n      </div>\n      <img class=\"img-circle\" src=\"" + this.expert.img + "\" alt=\"\"/> \n    </div>\n    \n    \n    <a id=\"track-getHelpFromModal-btn\" href=\"" + cta_url + "\" target=\"_blank\" class=\"btn btn-primary\" style=\"margin-bottom: 5px;\" >Get Help via Video Chat</a>\n    \n    <p class=\"text-small\">You will be connected with " + this.expert.nameFirst + " via Google Hangouts <br>where you can share your screen.</p>\n    <a class=\"track-getHelpFromModal-img\" href=\"" + cta_url + "\"><img src=\"" + host + "/video-1.jpg\" alt=\"\"></a>\n    <a class=\"track-getHelpFromModal-img\" href=\"" + cta_url + "\"><img src=\"" + host + "/video-2.jpg\" alt=\"\"></a>\n    <a class=\"track-getHelpFromModal-img\" href=\"" + cta_url + "\"><img src=\"" + host + "/video-3.jpg\" alt=\"\"></a>\n    <a class=\"track-getHelpFromModal-img\" href=\"" + cta_url + "\"><img src=\"" + host + "/video-4.jpg\" alt=\"\"></a>\n\n  </div>\n</div>\n<div class=\"modal modal-article\" id=\"modal-emailSubscribe-fromBar\">\n  <div class=\"modal-body animated fadeIn\">\n    <h1 class=\"text-blue\">Thanks for subscribing!</h1>\n    <h2>We'll send our latest " + this.expert.tech + " tips and tricks</h2>\n  </div>\n</div>"));
      self = this;
      $('.track-getHelpFromByline').click(function(e) {
        e.preventDefault();
        $("#modal-gethelp-fromBar .getHelpOption").text(self.expert.options[0]);
        apModals.open("#modal-gethelp-fromBar");
        return window.addjs.trackCustomEvent("getHelpFromByline", {
          option: 0,
          utm_source: apArticle.info.utm_source,
          utm_term: apArticle.info.utm_term,
          utm_content: "get-help-from-author",
          utm_campaign: "getHelpFromByline"
        });
      });
      $('.btn–promoBanner-get').click(function() {
        self.option = $(this).data().option;
        $("#modal-gethelp-fromBar .getHelpOption").text(self.expert.options[self.option]);
        apModals.open("#modal-gethelp-fromBar");
        return window.addjs.trackCustomEvent("getHelpFromDrawer", {
          option: self.option,
          utm_source: apArticle.info.utm_source,
          utm_term: apArticle.info.utm_term,
          utm_content: "get-help-from-author",
          utm_campaign: "getHelpFromDrawer"
        });
      });
      return setTimeout(function() {
        if (window.addjs) {
          window.addjs.trackLink($("#track-getHelpFromModal-btn"), "getHelpFromModal", {
            postion: 'button',
            utm_source: apArticle.info.utm_source,
            utm_term: apArticle.info.utm_term,
            utm_content: "help-video-chat",
            utm_campaign: "getHelpFromModal"
          });
          return window.addjs.trackLink($(".track-getHelpFromModal-img"), "getHelpFromModal", {
            postion: 'img',
            utm_source: apArticle.info.utm_source,
            utm_term: apArticle.info.utm_term,
            utm_content: "img",
            utm_campaign: "getHelpFromModal"
          });
        } else {
          return console.log("addjs still not loaded.");
        }
      }, addjs ? 0 : 3000);
    },
    emailSetup: function() {
      var onError, onSuccess, saveEmail;
      saveEmail = function(email) {
        var info;
        if (!apArticle.validateEmail(email)) {
          return onError("Invalid email");
        }
        info = {
          email: email,
          tech: apArticle.findTech()
        };
        return $.post("/api/landing/mailchimp/article", info, (function(_this) {
          return function(data) {
            apModals.open("#modal-emailSubscribe-fromBar");
            onSuccess();
            return window.addjs.trackCustomEvent("getEmailFromDrawer", {
              utm_source: apArticle.info.utm_source,
              utm_term: apArticle.info.utm_term,
              utm_content: "monthly-tech-updates",
              utm_campaign: "getEmailFromDrawer"
            });
          };
        })(this));
      };
      onError = function(message) {
        return $('.promo-signature-banner .error-text').text(message).show();
      };
      onSuccess = function() {
        $('.promo-signature-banner .error-text').hide();
        return $("#input–promoBanner-subscribe").val('');
      };
      $("#input–promoBanner-subscribe").keypress(function(e) {
        if (e.which === 13) {
          return saveEmail($(this).val());
        }
      });
      return $("#btn–promoBanner-subscribe").click(function(e) {
        return saveEmail($("#input–promoBanner-subscribe").val());
      });
    },
    showModal: function() {
      $("#modal-gethelp-fromBar .getHelpOption").text(this.expert.options[0]);
      return apModals.open("#modal-gethelp-fromBar");
    }
  };
  if ($('.promo-signature-location')) {
    promoFixedBanner.add();
  }
  if ($('.promo-expert')) {
    $('.promo-expert').each(function() {
      var el, expert;
      el = $(this);
      expert = el.data();
      el.html("<div class=\"promo-heading\">\n  Need help with this tutorial?\n</div>\n<div class=\"col-left\">\n  <img class=\"img-circle\" src=\"" + expert.img + "\" alt=\"\">\n  <div class=\"promo-title\">" + expert.title + "</div>\n</div>\n<div class=\"col-right\">\n  <div class=\"promo-name\">" + expert.nameFirst + " " + expert.nameLast + "</div>\n  <div class=\"promo-blurb\">" + expert.blurb + "</div>\n  <a href=\"" + expert.url + "\" id=\"track-getExpertPromoHelp\" class=\"btn btn-primary\">Get help from " + expert.nameFirst + "</a>\n</div>");
      return $('#track-getExpertPromoHelp').click(function(e) {
        e.preventDefault();
        $("#modal-gethelp-fromBar .getHelpOption").text(promoFixedBanner.expert.options[0]);
        apModals.open("#modal-gethelp-fromBar");
        return window.addjs.trackCustomEvent("getExpertPromoHelp", {
          option: 0,
          utm_source: apArticle.info.utm_source,
          utm_term: apArticle.info.utm_term,
          utm_content: "get-help-from-author",
          utm_campaign: "getExpertPromoHelp"
        });
      });
    });
  }
});
