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
    }
  };
}

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
  var addjs, bannerBottomHtml, bannerTopHtml, modalHtml, profile, promoPackage, promoPackageHtml, vid;
  if (window.location.host === "localhost:3000") {
    addjs = {
      trackCustomEvent: function(eventName, info) {
        return console.log("trackCustomEvent", eventName, info);
      },
      trackLink: function(el, eventName, info) {
        return console.log("trackLink", eventName, info);
      }
    };
  }
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
  bannerBottomHtml = "\n<div class=\"banner-bottom\">\n  <div class=\"user-strip\"></div>\n  <div class=\"wrap\">\n    <div class=\"col-left\">\n      <div class=\"title-main\">Need more help?</div>\n      <div class=\"title-sub\">\n        Receive help via video chat and screen sharing from thousands of experts <a class=\"btn-link\" href=\"http://airpair.com\">learn more</a>\n      </div>\n    </div>\n\n    <div class=\"col-right\">\n      <div class=\"offer-box\">\n        <div class=\"title-offer\">Limited time: <strong>$50/hr</strong></div>\n        <div class=\"title-offer-sub\">with any of our experts</div>\n        <div class=\"input-group\">\n          <input id=\"bannerBottomInput\" type=\"text\" class=\"form-control\" placeholder=\"Enter email to redeem\">\n          <span class=\"input-group-btn\">\n            <button id=\"bannerBottomBtn\" class=\"btn btn-default\" type=\"button\">Go</button>\n          </span>\n        </div>\n        <div id=\"error-bottom\" class=\"input-error\"></div>\n\n      </div> \n    </div>\n\n  <div class=\"diagram-how\">\n    <h2 class=\"\">How it works</h2>\n    <div class=\"row clearfix\">\n      <div class=\"col-sm-4\">\n        <div class=\"figure\">\n          <img src=\"http://airpair.com/images/pages/marketing/how-1.png\" alt=\"\">\n        </div>\n        <p>Tell Us What You Need</p>\n      </div>\n      <div class=\"col-sm-4 \">\n        <div class=\"figure p-t-1\">\n          <div class=\"img-overlap three\">\n            <img src=\"http://airpair.com/images/avatars/of.png\" alt=\"\" class=\"img-circle img-border\">\n            <img src=\"http://airpair.com/images/avatars/rb.png\" alt=\"\" class=\"img-circle img-border\">\n            <img src=\"http://airpair.com/images/avatars/ag.jpeg\" alt=\"\" class=\"img-circle img-border\">\n          </div>\n          <svg class=\"arrow arrow-right\" width=\"161px\" height=\"114px\" viewBox=\"0 0 161 114\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n              <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n                  <g id=\"Artboard-3\" sketch:type=\"MSArtboardGroup\" transform=\"translate(78.000000, -13.000000)\">\n                      <g id=\"arrow\" sketch:type=\"MSLayerGroup\" transform=\"translate(22.000000, 14.000000)\">\n                          <path d=\"M0.332,7.036 L49.568,7.036\" id=\"Stroke-1\" stroke=\"#E4E5E1\" stroke-width=\"3\" sketch:type=\"MSShapeGroup\"></path>\n                          <path d=\"M47.38,14.516 L60.332,7.037 L47.38,-0.443 L47.38,14.516\" id=\"Fill-2\" fill=\"#E4E5E1\" sketch:type=\"MSShapeGroup\"></path>\n                      </g>\n                  </g>\n              </g>\n          </svg>\n          <svg class=\"arrow arrow-left\" width=\"161px\" height=\"114px\" viewBox=\"0 0 161 114\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n              <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n                  <g id=\"Artboard-3\" sketch:type=\"MSArtboardGroup\" transform=\"translate(78.000000, -13.000000)\">\n                      <g id=\"arrow\" sketch:type=\"MSLayerGroup\" transform=\"translate(22.000000, 14.000000)\">\n                          <path d=\"M0.332,7.036 L49.568,7.036\" id=\"Stroke-1\" stroke=\"#E4E5E1\" stroke-width=\"3\" sketch:type=\"MSShapeGroup\"></path>\n                          <path d=\"M47.38,14.516 L60.332,7.037 L47.38,-0.443 L47.38,14.516\" id=\"Fill-2\" fill=\"#E4E5E1\" sketch:type=\"MSShapeGroup\"></path>\n                      </g>\n                  </g>\n              </g>\n          </svg>\n        </div>\n        <p>We'll Match You with 3 Experts</p>\n      </div>\n      <div class=\"col-sm-4 \">\n        <div class=\"figure\">\n          <img src=\"http://airpair.com/images/pages/marketing/how-2.png\" alt=\"\">\n        </div>\n        <p>You'll Choose One and Start a Video Call</p>\n      </div>\n    </div>\n  </div>\n\n  </div>\n</div>\n";
  $(".site-inner").append($(bannerBottomHtml));
  modalHtml = "\n<div class=\"modal modal-article\" id=\"modal-getoffer\">\n\n  <div class=\"modal-body animated bounceIn\">\n\n    <h1 class=\"text-blue\">You successfully redeemed the $50/hr flat rate!</h1>\n    <h2>Let's get started now - what can we help you with?</h2>\n    <a id=\"track-get-started\" href=\"http://www.airpair.com/auth/google?return_to=/find-an-expert\" target=\"_blank\" class=\"btn btn-primary\">Get Help via Video Chat</a>\n    <p class=\"text-small\">Note: We use Google Hangouts for AirPairs, so you'll be asked to provide your Google credentials.</p>\n    <a href=\"http://airpair.com\" target=\"_blank\">Learn more about how AirPair works</a>\n    <br>\n    <img class=\"user-images\" src=\"http://www.airpair.com/wp-content/themes/epik/images/usercircles-3.png\" alt=\"\">\n    <br>\n    <a href=\"http://www.airpair.com/promotion-terms\" target=\"_blank\" class=\"link-terms\" >Terms</a>\n\n\n  </div>\n\n</div>\n\n";
  $("html").append($(modalHtml));
  window.banner = {
    saveInfo: function(info) {
      if (!apArticle.validateEmail(info.email)) {
        this.showError(info, "Invalid email");
        return;
      }
      info.Tech = apArticle.findTech();
      return $.post("/api/landing/mailchimp/article", info, (function(_this) {
        return function(data) {
          apModals.open("#modal-getoffer");
          _this.hideErrors();
          return window.addjs.trackCustomEvent("getOfferFromArticle", {
            position: info.position,
            tech: info.Tech
          });
        };
      })(this));
    },
    showError: function(info, message) {
      return $("#error-" + info.position).text(message).show();
    },
    hideErrors: function() {
      return $(".input-error").hide();
    },
    insertTech: function() {
      return $("#tech-title").text(apArticle.findTech());
    }
  };
  banner.insertTech();
  setTimeout(function() {
    if (window.addjs) {
      return window.addjs.trackLink($("#track-get-started"), "findExpert", {
        tech: apArticle.findTech(),
        from: "offer"
      });
    } else {
      return console.log("addjs still not loaded.");
    }
  }, addjs ? 0 : 5000);
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
  if ($('.promo-expert')) {
    $('.promo-expert').each(function() {
      var el, expert;
      el = $(this);
      expert = el.data();
      el.html("<div class=\"promo-heading\">\n  Need help with this tutorial?\n</div>\n<div class=\"col-left\">\n  <img class=\"img-circle\" src=\"" + expert.img + "\" alt=\"\">\n  <div class=\"promo-title\">" + expert.title + "</div>\n</div>\n<div class=\"col-right\">\n  <div class=\"promo-name\">" + expert.nameFirst + " " + expert.nameLast + "</div>\n  <div class=\"promo-blurb\">" + expert.blurb + "</div>\n  <a href=\"" + expert.url + "\" id=\"track-getExpertPromoHelp\" class=\"btn btn-primary\">Get help from " + expert.nameFirst + "</a>\n</div>");
      return setTimeout(function() {
        if (window.addjs) {
          return window.addjs.trackLink($("#track-getExpertPromoHelp"), "getExpertPromoHelp", {
            tech: apArticle.findTech(),
            expert: "" + expert.nameFirst + " " + expert.nameLast
          });
        } else {
          return console.log("addjs still not loaded.");
        }
      }, addjs ? 0 : 3000);
    });
  }
  promoPackageHtml = function(expert) {
    return "<div class=\"promo-heading\">Next Steps: <span class=\"dark\">Learn " + expert.tech + " faster with " + expert.nameFirst + "'s help</span></div>\n<div class=\"col-left\">\n  <img class=\"img-circle\" src=\"" + expert.img + "\" alt=\"\"/> \n</div>\n<div class=\"col-right\">\n  <div class=\"promo-name\">" + expert.nameFirst + " " + expert.nameLast + "</div>\n  <div class=\"promo-title\">" + expert.title + "</div>\n  <div class=\"promo-blurb\">" + expert.blurb + "</div>\n</div>\n<div class=\"packages\">\n  <div class=\"package\">\n    <div class=\"package-title\">10 hour package</div>\n    <div class=\"package-desc\">\n      <ul>\n        <li>Work on several complex problems with " + expert.nameFirst + "</li>\n        <li>Learn the ins and outs of " + expert.tech + "  </li>\n      </ul>\n    </div>\n\n      \n    <div class=\"package-price\">\n      $70<small>/hr</small>\n    </div>\n    <button class=\"btn btn-primary purchase-package\" data-package=\"10\">Purchase</button>\n  </div>\n  <div class=\"package\">\n    <div class=\"package-title\">5 hour package</div>\n    <div class=\"package-desc\">\n      <ul>\n        <li>Work on a complex problem with " + expert.nameFirst + "</li>\n        <li>Dive deeper into " + expert.tech + " </li>\n      </ul>\n    </div>\n    <div class=\"package-price\">\n      $85<small>/hr</small>\n    </div>\n    <button class=\"btn btn-primary purchase-package\" data-package=\"5\">Purchase</button>\n  </div>\n  <div class=\"package\">\n    <div class=\"package-title\">1 hour package</div>\n    <div class=\"package-desc\">\n      <ul>\n        <li>Work on a simple problem with " + expert.nameFirst + "</li>\n        <li>Learn the basics of " + expert.tech + " </li>\n      </ul>\n    </div>\n    <div class=\"package-price\">\n      $100<small>/hr</small>\n    </div>\n    <button class=\"btn btn-primary purchase-package\" data-package=\"1\">Purchase</button>\n  </div>\n</div>";
  };
  modalHtml = "<div class=\"modal modal-article\" id=\"modal-purchaseComplete\">\n  <div class=\"modal-body animated bounceIn\">\n    <h1 class=\"text-blue\">Thank you for purchasing 1 hour with <span class=\"expert-name\"></span>!</h1>\n    <h2><span class=\"expert-name\"></span> has been notified and will be in touch with you shortly.</h2>\n    <h4>If you have any questions, don’t hesitate to contact us at team@airpair.com</h4>\n  </div>\n</div>";
  promoPackage = {
    el: $('.promo-package'),
    insert: function() {
      if (this.el.length) {
        this.expert = this.el.data();
        this.el.html(promoPackageHtml(this.expert));
        $("html").append($(modalHtml));
        return $(".purchase-package").click(function() {
          var info;
          info = $(this).data();
          return promoPackage.purchaseStart(info);
        });
      }
    },
    purchaseStart: function(info) {
      this.charge = {
        name: "" + info["package"] + "hr Package"
      };
      this["package"] = info["package"];
      switch (info["package"]) {
        case 10:
          this.charge.amount = 10 * 7000;
          this.charge.description = "Work with " + this.expert.nameFirst + " on a complex problem.";
          break;
        case 5:
          this.charge.amount = 5 * 8500;
          this.charge.description = "Work with " + this.expert.nameFirst + " on a simple problem.";
          break;
        case 1:
          this.charge.amount = 10000;
          this.charge.description = "Work with " + this.expert.nameFirst + " on a simple problem.";
          break;
        default:
          return;
      }
      stripe.open(this.charge);
      return window.addjs.trackCustomEvent("selectPackage" + this["package"]);
    },
    purchaseComplete: function(token) {
      var hostname, notifyInfo, purchase;
      purchase = {
        email: token.email,
        stripeToken: token,
        stripeCharge: this.charge
      };
      notifyInfo = {
        email: token.email,
        expert: "" + this.expert.nameFirst + " " + this.expert.nameLast,
        "package": this["package"] + "hr",
        price: "$" + (this.charge.amount * .01),
        url: location.href
      };
      hostname = location.host === "www.airpair.com" ? '' : 'http://localhost:3333';
      $.post("" + hostname + "/api/landing/purchase", purchase, function(data) {
        window.addjs.trackCustomEvent("buyPackage" + this["package"]);
        return $.post("" + hostname + "/api/landing/blog/signup", notifyInfo, function(data) {});
      });
      $("#modal-purchaseComplete .expert-name").text(this.expert.nameFirst);
      return apModals.open("#modal-purchaseComplete");
    }
  };
  if (promoPackage.el.length) {
    $.getScript("https://checkout.stripe.com/checkout.js").done(function(script, textStatus) {
      window.stripe = StripeCheckout.configure({
        key: location.host === "www.airpair.com" ? 'pk_live_FEGruKDm6OZyagTHqhXWvV8G' : 'pk_test_aj305u5jk2uN1hrDQWdH0eyl',
        image: 'http://airpair.com/images/icons/icon120.png',
        currency: 'usd',
        token: function(token) {
          return promoPackage.purchaseComplete(token);
        }
      });
      return promoPackage.insert();
    });
  }
});
