"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('open-ethereum-pool/app', ['exports', 'ember', 'open-ethereum-pool/resolver', 'ember-load-initializers', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolResolver, _emberLoadInitializers, _openEthereumPoolConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _openEthereumPoolConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _openEthereumPoolConfigEnvironment['default'].podModulePrefix,
    Resolver: _openEthereumPoolResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _openEthereumPoolConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("open-ethereum-pool/cldrs/en", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = [{ "locale": "en-IN", "parentLocale": "en-001" }, { "locale": "en-001", "parentLocale": "en" }, { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } }, { "locale": "en-US", "parentLocale": "en" }];
});
define('open-ethereum-pool/components/active-li', ['exports', 'ember'], function (exports, _ember) {
  var getOwner = _ember['default'].getOwner;
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNameBindings: ['isActive:active:inactive'],

    router: (function () {
      return getOwner(this).lookup('router:main');
    }).property(),

    isActive: (function () {
      var currentWhen = this.get('currentWhen');
      return this.get('router').isActive(currentWhen);
    }).property('router.url', 'currentWhen')
  });
});
define("open-ethereum-pool/components/submit_threshold", ["exports"], function (exports) {});
define('open-ethereum-pool/components/twbs-popover', ['exports', 'ember-cli-bootstrap3-popover/components/twbs-popover'], function (exports, _emberCliBootstrap3PopoverComponentsTwbsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliBootstrap3PopoverComponentsTwbsPopover['default'];
    }
  });
});
define('open-ethereum-pool/components/twbs-popover/content', ['exports', 'ember-cli-bootstrap3-popover/components/twbs-popover/content'], function (exports, _emberCliBootstrap3PopoverComponentsTwbsPopoverContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliBootstrap3PopoverComponentsTwbsPopoverContent['default'];
    }
  });
});
define('open-ethereum-pool/components/twbs-popover/title', ['exports', 'ember-cli-bootstrap3-popover/components/twbs-popover/title'], function (exports, _emberCliBootstrap3PopoverComponentsTwbsPopoverTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliBootstrap3PopoverComponentsTwbsPopoverTitle['default'];
    }
  });
});
define('open-ethereum-pool/components/twbs-popover/trigger', ['exports', 'ember-cli-bootstrap3-popover/components/twbs-popover/trigger'], function (exports, _emberCliBootstrap3PopoverComponentsTwbsPopoverTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliBootstrap3PopoverComponentsTwbsPopoverTrigger['default'];
    }
  });
});
define('open-ethereum-pool/components/twitter-feed', ['exports', 'ember-cli-twitter-feed/components/twitter-feed'], function (exports, _emberCliTwitterFeedComponentsTwitterFeed) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliTwitterFeedComponentsTwitterFeed['default'];
    }
  });
});
define('open-ethereum-pool/controllers/about', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
   exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
      config: {
         get: function get() {
            return _openEthereumPoolConfigEnvironment['default'].APP;
         },
         configurable: true,
         enumerable: true
      }
   }));
});
define('open-ethereum-pool/controllers/account', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend({
    applicationController: _ember['default'].inject.controller('application'),
    stats: _ember['default'].computed.reads('applicationController.model.stats'),
    config: _ember['default'].computed.reads('applicationController.config'),

    roundPercent: _ember['default'].computed('stats', 'model', {
      get: function get() {
        var percent = this.get('model.roundShares') / this.get('stats.nShares');
        if (!percent) {
          return 0;
        }
        if (percent > 100) {
          return 100;
        }

        return percent;
      }
    }),

    payoutthreshold: _ember['default'].computed('model', {
      get: function get() {
        var defaultThreshold = _openEthereumPoolConfigEnvironment['default'].APP.PayoutThreshold;
        var threshold = this.getWithDefault('model.stats.payoutthreshold', defaultThreshold);
        return threshold;
      }
    }),

    paymentPercent: _ember['default'].computed('model', {
      get: function get() {
        var defaultThreshold = _openEthereumPoolConfigEnvironment['default'].APP.PayoutThreshold;
        defaultThreshold = defaultThreshold * 1000000000;
        var threshold = this.getWithDefault('model.stats.payoutthreshold', defaultThreshold);
        var balance = this.get('model.stats.balance');

        var percent = 100;
        threshold = threshold * 0.000000001;
        balance = balance * 0.000000001;

        percent = balance * 100 / threshold;

        if (!percent) {
          return 0;
        } else if (percent > 100) {
          return 100;
        } else {
          return percent.toFixed(2);
        }

        return percent.toFixed(2);
      }
    })
  });
});
define('open-ethereum-pool/controllers/account/index', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/account/payouts', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/account/rewards', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/application', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
    exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({

        height: _ember['default'].computed('model.nodes', {
            get: function get() {
                var node = this.get('bestNode');
                if (node) {
                    return node.height;
                }
                return 0;
            }
        }),

        roundShares: _ember['default'].computed('model.stats', {
            get: function get() {
                return parseInt(this.get('model.stats.roundShares'));
            }
        }),

        ethinr: _ember['default'].computed('stats', {
            get: function get() {
                return parseFloat(this.get('model.exchangedata.price_inr'));
            }
        }),

        ethusd: _ember['default'].computed('stats', {
            get: function get() {
                return parseFloat(this.get('model.exchangedata.price_usd'));
            }
        }),

        difficulty: _ember['default'].computed('model.nodes', {
            get: function get() {
                var node = this.get('bestNode');
                if (node) {
                    return node.difficulty;
                }
                return 0;
            }
        }),

        hashrate: _ember['default'].computed('difficulty', {
            get: function get() {
                return this.getWithDefault('difficulty', 0) / _openEthereumPoolConfigEnvironment['default'].APP.BlockTime;
            }
        }),

        immatureTotal: _ember['default'].computed('model', {
            get: function get() {
                return this.getWithDefault('model.immatureTotal', 0) + this.getWithDefault('model.candidatesTotal', 0);
            }
        }),

        bestNode: _ember['default'].computed('model.nodes', {
            get: function get() {
                var node = null;
                this.get('model.nodes').forEach(function (n) {
                    if (!node) {
                        node = n;
                    }
                    if (node.height < n.height) {
                        node = n;
                    }
                });
                return node;
            }
        }),

        lastBlockFound: _ember['default'].computed('model', {
            get: function get() {
                return parseInt(this.get('model.lastBlockFound')) || 0;
            }
        }),

        roundVariance: _ember['default'].computed('model', {
            get: function get() {
                var percent = this.get('model.stats.currentRoundShares') * this.get('config').ShareDifficulty / this.get('difficulty');
                if (!percent) {
                    return 0;
                }
                return percent.toFixed(2);
            }
        }),

        nextEpoch: _ember['default'].computed('height', {
            get: function get() {
                var epochOffset = (30000 - this.getWithDefault('height', 1) % 30000) * 1000 * this.get('config').BlockTime;
                return Date.now() + epochOffset;
            }
        })
    }, {
        config: {
            get: function get() {
                return _openEthereumPoolConfigEnvironment['default'].APP;
            },
            configurable: true,
            enumerable: true
        }
    }));
});
define('open-ethereum-pool/controllers/blocks/block', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/blocks/immature', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/blocks/index', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/blocks/mature', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/blocks/pending', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
    config: {
      get: function get() {
        return _openEthereumPoolConfigEnvironment['default'].APP;
      },
      configurable: true,
      enumerable: true
    }
  }));
});
define('open-ethereum-pool/controllers/help', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    applicationController: _ember['default'].inject.controller('application'),
    config: _ember['default'].computed.reads('applicationController.config')
  });
});
define('open-ethereum-pool/controllers/index', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        applicationController: _ember['default'].inject.controller('application'),
        stats: _ember['default'].computed.reads('applicationController'),
        config: _ember['default'].computed.reads('applicationController.config'),

        cachedLogin: _ember['default'].computed('login', {
            get: function get() {
                return this.get('login') || _ember['default'].$.cookie('login');
            },
            set: function set(key, value) {
                _ember['default'].$.cookie('login', value);
                this.set('model.login', value);
                return value;
            }
        })
    });
});
define('open-ethereum-pool/controllers/payments', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
   exports['default'] = _ember['default'].Controller.extend(Object.defineProperties({}, {
      config: {
         get: function get() {
            return _openEthereumPoolConfigEnvironment['default'].APP;
         },
         configurable: true,
         enumerable: true
      }
   }));
});
define('open-ethereum-pool/formats', ['exports'], function (exports) {
  var hhmmss = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  exports['default'] = {
    time: {
      hhmmss: hhmmss
    },
    date: {
      hhmmss: hhmmss
    },
    number: {
      EUR: { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 },
      USD: { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 },
      INR: { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 2, useGrouping: false }
    }
  };
});
define('open-ethereum-pool/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/app-version', ['exports', 'ember', 'open-ethereum-pool/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _openEthereumPoolConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _openEthereumPoolConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('open-ethereum-pool/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/format-balance', ['exports', 'ember'], function (exports, _ember) {
	exports.formatBalance = formatBalance;

	function formatBalance(value) {
		value = value * 0.000000001;
		return value.toFixed(8);
	}

	exports['default'] = _ember['default'].Helper.helper(formatBalance);
});
define('open-ethereum-pool/helpers/format-date-locale', ['exports', 'ember'], function (exports, _ember) {
	exports.formatDateLocale = formatDateLocale;

	function formatDateLocale(ts) {
		var date = new Date(ts * 1000);
		return date.toLocaleString();
	}

	exports['default'] = _ember['default'].Helper.helper(formatDateLocale);
});
define('open-ethereum-pool/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _emberIntlHelpersFormatDate) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatDate['default'];
    }
  });
});
define('open-ethereum-pool/helpers/format-ethinr', ['exports', 'ember'], function (exports, _ember) {
       exports.formatEthInr = formatEthInr;

       function formatEthInr(params) {
              var value = params[0];
              var ethinr = params[1];
              var valueeth = value * 0.000000001;
              var inr = valueeth * ethinr;

              if (isNaN(inr)) {
                     return '';
              }

              return "₹" + inr.toFixed(2);
       }

       exports['default'] = _ember['default'].Helper.helper(formatEthInr);
});
define('open-ethereum-pool/helpers/format-ethusd', ['exports', 'ember'], function (exports, _ember) {
       exports.formatEthUsd = formatEthUsd;

       function formatEthUsd(params) {
              var value = params[0];
              var ethinr = params[1];
              var valueeth = value * 0.000000001;
              var inr = valueeth * ethinr;

              if (isNaN(inr)) {
                     return '';
              }

              return "US$" + inr.toFixed(2);
       }

       exports['default'] = _ember['default'].Helper.helper(formatEthUsd);
});
define('open-ethereum-pool/helpers/format-hashrate', ['exports', 'ember'], function (exports, _ember) {
  exports.formatHashrate = formatHashrate;

  function formatHashrate(params /*, hash*/) {
    var hashrate = params[0];
    var i = 0;
    var units = ['H', 'KH', 'MH', 'GH', 'TH', 'PH'];
    while (hashrate > 1000) {
      hashrate = hashrate / 1000;
      i++;
    }
    return hashrate.toFixed(2) + ' ' + units[i];
  }

  exports['default'] = _ember['default'].Helper.helper(formatHashrate);
});
define('open-ethereum-pool/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _emberIntlHelpersFormatHtmlMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatHtmlMessage['default'];
    }
  });
});
define('open-ethereum-pool/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _emberIntlHelpersFormatMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatMessage['default'];
    }
  });
});
define('open-ethereum-pool/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _emberIntlHelpersFormatNumber) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatNumber['default'];
    }
  });
});
define('open-ethereum-pool/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _emberIntlHelpersFormatRelative) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatRelative['default'];
    }
  });
});
define('open-ethereum-pool/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _emberIntlHelpersFormatTime) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatTime['default'];
    }
  });
});
define("open-ethereum-pool/helpers/format-tx", ["exports", "ember"], function (exports, _ember) {
  exports.formatTx = formatTx;

  function formatTx(value) {
    return value[0].substring(2, 26) + "..." + value[0].substring(42);
  }

  exports["default"] = _ember["default"].Helper.helper(formatTx);
});
define('open-ethereum-pool/helpers/format-txcharges', ['exports', 'ember'], function (exports, _ember) {
	exports.formatTxCharges = formatTxCharges;

	function formatTxCharges(value) {
		value = value * 0.000000001 * 0.000000001;
		return value.toFixed(8);
	}

	exports['default'] = _ember['default'].Helper.helper(formatTxCharges);
});
define('open-ethereum-pool/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _emberIntlHelpersIntlGet) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersIntlGet['default'];
    }
  });
});
define('open-ethereum-pool/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('open-ethereum-pool/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _emberIntlHelpersL) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersL['default'];
    }
  });
});
define('open-ethereum-pool/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/helpers/seconds-to-ms', ['exports', 'ember'], function (exports, _ember) {
	exports.secondsToMs = secondsToMs;

	function secondsToMs(value) {
		return value * 1000;
	}

	exports['default'] = _ember['default'].Helper.helper(secondsToMs);
});
define('open-ethereum-pool/helpers/string-to-int', ['exports', 'ember'], function (exports, _ember) {
	exports.stringToInt = stringToInt;

	function stringToInt(value) {
		return parseInt(value);
	}

	exports['default'] = _ember['default'].Helper.helper(stringToInt);
});
define('open-ethereum-pool/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _emberIntlHelpersT) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersT['default'];
    }
  });
});
define('open-ethereum-pool/helpers/with-metric-prefix', ['exports', 'ember'], function (exports, _ember) {
  exports.withMetricPrefix = withMetricPrefix;

  function withMetricPrefix(params /*, hash*/) {
    var n = params[0];

    if (n < 1000) {
      return n;
    }

    var i = 0;
    var units = ['K', 'M', 'G', 'T', 'P'];
    while (n > 1000) {
      n = n / 1000;
      i++;
    }
    return n.toFixed(3) + ' ' + units[i - 1];
  }

  exports['default'] = _ember['default'].Helper.helper(withMetricPrefix);
});
define('open-ethereum-pool/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('open-ethereum-pool/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'open-ethereum-pool/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _openEthereumPoolConfigEnvironment) {
  var _config$APP = _openEthereumPoolConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('open-ethereum-pool/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('open-ethereum-pool/initializers/cookie', ['exports', 'open-ethereum-pool/lib/cookie'], function (exports, _openEthereumPoolLibCookie) {
  exports['default'] = {
    name: 'cookie',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('cookie:main', _openEthereumPoolLibCookie['default']);
    }
  };
});
define('open-ethereum-pool/initializers/export-application-global', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_openEthereumPoolConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _openEthereumPoolConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_openEthereumPoolConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('open-ethereum-pool/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('open-ethereum-pool/instance-initializers/ember-intl', ['exports', 'ember', 'open-ethereum-pool/config/environment', 'ember-intl/utils/links'], function (exports, _ember, _openEthereumPoolConfigEnvironment, _emberIntlUtilsLinks) {
  exports.instanceInitializer = instanceInitializer;
  var warn = _ember['default'].warn;

  function filterBy(type) {
    return Object.keys(requirejs._eak_seen).filter(function (key) {
      return key.indexOf(_openEthereumPoolConfigEnvironment['default'].modulePrefix + '/' + type + '/') === 0;
    });
  }

  function instanceInitializer(instance) {
    var service = undefined;

    if (typeof instance.lookup === 'function') {
      service = instance.lookup('service:intl');
    } else {
      service = instance.container.lookup('service:intl');
    }

    if (typeof Intl === 'undefined') {
      warn('[ember-intl] Intl API is unavailable in this environment.\nSee: ' + _emberIntlUtilsLinks['default'].polyfill, false, {
        id: 'ember-intl-undefined-intljs'
      });
    }

    var cldrs = filterBy('cldrs');

    if (!cldrs.length) {
      warn('[ember-intl] project is missing CLDR data\nIf you are asynchronously loading translation, see: ${links.asyncTranslations}.', false, {
        id: 'ember-intl-missing-cldr-data'
      });
    } else {
      cldrs.map(function (moduleName) {
        return requirejs(moduleName, null, null, true)['default'];
      }).forEach(function (locale) {
        return locale.forEach(service.addLocaleData);
      });
    }

    filterBy('translations').forEach(function (moduleName) {
      var localeSplit = moduleName.split('\/');
      var localeName = localeSplit[localeSplit.length - 1];
      service.addTranslations(localeName, requirejs(moduleName, null, null, true)['default']);
    });
  }

  exports['default'] = {
    name: 'ember-intl',
    initialize: instanceInitializer
  };
});
/* globals requirejs, Intl */

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
define('open-ethereum-pool/lib/cookie', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Object.extend({
    setCookie: function setCookie(key, value, options) {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        try {
          _ember['default'].$.cookie(key, value, options);
          _ember['default'].run(null, resolve);
        } catch (e) {
          _ember['default'].run(null, reject, e);
        }
      });
    },

    getCookie: function getCookie(key) {
      return _ember['default'].$.cookie(key);
    },

    removeCookie: function removeCookie(key, options) {
      return _ember['default'].$.removeCookie(key, options);
    }
  });
});
define('open-ethereum-pool/models/block', ['exports', 'ember'], function (exports, _ember) {

	var Block = _ember['default'].Object.extend({
		variance: _ember['default'].computed('difficulty', 'shares', function () {
			var percent = this.get('shares') / this.get('difficulty');
			if (!percent) {
				return 0;
			}
			return percent;
		}),

		isLucky: _ember['default'].computed('variance', function () {
			return this.get('variance') <= 1.0;
		}),

		isOk: _ember['default'].computed('orphan', 'uncle', function () {
			return !this.get('orphan');
		}),

		formatReward: _ember['default'].computed('reward', function () {
			if (!this.get('orphan')) {
				var value = parseInt(this.get('reward')) * 0.000000000000000001;
				return value.toFixed(6);
			} else {
				return 0;
			}
		})
	});

	exports['default'] = Block;
});
define('open-ethereum-pool/models/payment', ['exports', 'ember'], function (exports, _ember) {

	var Payment = _ember['default'].Object.extend({
		formatAmount: _ember['default'].computed('amount', function () {
			var value = parseInt(this.get('amount')) * 0.000000001;
			return value.toFixed(8);
		})
	});

	exports['default'] = Payment;
});
define("open-ethereum-pool/models/settings", ["exports"], function (exports) {});
define('open-ethereum-pool/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('open-ethereum-pool/router', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _openEthereumPoolConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('account', { path: '/account/:login' }, function () {
      this.route('payouts');
      this.route('rewards');
      this.route('settings');
    });
    this.route('not-found');

    this.route('blocks', function () {
      this.route('mature');
      this.route('immature');
      this.route('pending');
    });

    this.route('help');
    this.route('payments');
    this.route('miners');
    this.route('exchange');
    this.route('about');
    this.route('helpdesk', { path: 'http://helpdesk.miningpoolindia.com' });
  });

  exports['default'] = Router;
});
define('open-ethereum-pool/routes/account', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            var url = _openEthereumPoolConfigEnvironment['default'].APP.ApiUrl + 'api/accounts/' + params.login;
            return _ember['default'].$.getJSON(url).then(function (data) {
                data.login = params.login;
                return _ember['default'].Object.create(data);
            });
        },

        setupController: function setupController(controller, model) {
            this._super(controller, model);
            _ember['default'].run.later(this, this.refresh, 5000);
        },

        actions: {
            error: function error(_error) {
                if (_error.status === 404) {
                    return this.transitionTo('not-found');
                }
            },
            saveSettings: function saveSettings() {}
        }
    });
});
define('open-ethereum-pool/routes/application', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
    exports['default'] = _ember['default'].Route.extend({
        intl: _ember['default'].inject.service(),
        beforeModel: function beforeModel() {
            this.get('intl').setLocale('en-in');
        },
        model: function model() {
            var url = _openEthereumPoolConfigEnvironment['default'].APP.ApiUrl + 'api/stats';
            return _ember['default'].$.getJSON(url).then(function (data) {
                return _ember['default'].Object.create(data);
            });
        },
        setupController: function setupController(controller, model) {
            this._super(controller, model);
            _ember['default'].run.later(this, this.refresh, 5000);
        }
    });
});
define('open-ethereum-pool/routes/blocks', ['exports', 'ember', 'open-ethereum-pool/models/block', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolModelsBlock, _openEthereumPoolConfigEnvironment) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			var url = _openEthereumPoolConfigEnvironment['default'].APP.ApiUrl + 'api/blocks';
			return _ember['default'].$.getJSON(url).then(function (data) {
				if (data.candidates) {
					data.candidates = data.candidates.map(function (b) {
						return _openEthereumPoolModelsBlock['default'].create(b);
					});
				}
				if (data.immature) {
					data.immature = data.immature.map(function (b) {
						return _openEthereumPoolModelsBlock['default'].create(b);
					});
				}
				if (data.matured) {
					data.matured = data.matured.map(function (b) {
						return _openEthereumPoolModelsBlock['default'].create(b);
					});
				}
				return data;
			});
		},

		setupController: function setupController(controller, model) {
			this._super(controller, model);
			_ember['default'].run.later(this, this.refresh, 5000);
		}
	});
});
define('open-ethereum-pool/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      lookup: function lookup(login) {
        if (!_ember['default'].isEmpty(login)) {
          return this.transitionTo('account', login);
        }
      }
    }
  });
});
define('open-ethereum-pool/routes/miners', ['exports', 'ember', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var url = _openEthereumPoolConfigEnvironment['default'].APP.ApiUrl + 'api/miners';
      return _ember['default'].$.getJSON(url).then(function (data) {
        if (data.miners) {
          // Convert map to array
          data.miners = Object.keys(data.miners).map(function (value) {
            var m = data.miners[value];
            m.login = value;
            return m;
          });
          // Sort miners by hashrate
          data.miners = data.miners.sort(function (a, b) {
            if (a.hr < b.hr) {
              return 1;
            }
            if (a.hr > b.hr) {
              return -1;
            }
            return 0;
          });
        }
        return data;
      });
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);
      _ember['default'].run.later(this, this.refresh, 5000);
    }
  });
});
define('open-ethereum-pool/routes/payments', ['exports', 'ember', 'open-ethereum-pool/models/payment', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolModelsPayment, _openEthereumPoolConfigEnvironment) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			var url = _openEthereumPoolConfigEnvironment['default'].APP.ApiUrl + 'api/payments';
			return _ember['default'].$.getJSON(url).then(function (data) {
				if (data.payments) {
					data.payments = data.payments.map(function (p) {
						return _openEthereumPoolModelsPayment['default'].create(p);
					});
				}
				return data;
			});
		},

		setupController: function setupController(controller, model) {
			this._super(controller, model);
			_ember['default'].run.later(this, this.refresh, 5000);
		}
	});
});
define('open-ethereum-pool/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('open-ethereum-pool/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _emberIntlServicesIntl) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlServicesIntl['default'];
    }
  });
});
define("open-ethereum-pool/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 29
            },
            "end": {
              "line": 35,
              "column": 29
            }
          },
          "moduleName": "open-ethereum-pool/templates/about.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                             ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "list-group-item");
          var el2 = dom.createTextNode("\n                                 Having the name india in the domain name, it doesnt state that the pool belongs to india, the customization of various values are done for the INR value . All the other country citizen can also participate in the pool. \n                                 \n                             ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 179,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-blue");
        dom.setAttribute(el4, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ");
        var el5 = dom.createTextNode("TERMS AND CONDITIONS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("       \n          ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-7");
        dom.setAttribute(el3, "style", "margin-bottom: 20px;");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Lobster; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("The following Terms and Condition apply to any use of the mining pool services (\"Services\") offered over the websites (\"");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\") mentioned above concerning the mining of the cryptocurrencies \"");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\". By accessing and using the Services, you confirm that you have read these Terms and Condition and accept and agree to be bound by its provisions. Any factual participation in the Services will constitute such acceptance. If you do not agree to abide by these Terms and Condition you are not allowed to use the Services.\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("In order to use the Services, a mining software working with the operating system on your computer is necessary. Download links are available directly on the Websites. .\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   \n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        dom.setAttribute(el2, "style", "max-height: 900px; overflow-y: scroll;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n               ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel panel-success");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-heading");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        dom.setAttribute(el7, "class", "panel-title");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "data-toggle", "collapse");
        dom.setAttribute(el8, "href", "#term");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-bullseye fa-fw");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode(" Liability");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" \n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "term");
        dom.setAttribute(el6, "class", "panel-collapse");
        var el7 = dom.createTextNode("\n                         ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "class", "list-group");
        var el8 = dom.createTextNode("\n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                 The pool is continually implementing security standards complying with the latest state-of-the-art technology. All operated servers are distributed-denial-of-service (DDOS) protected to ensure an incessant availability of the Services and a payout process without unwanted interruptions. The Services are also designed to pay out rewards as soon as possible in order to keep the pool balance low. \n                                 \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("                              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                   Despite such protective mechanisms, the pool cannot fully guarantee that the Websites will never be subject to hacker attacks or similar problems. Therefore, the pool shall not be obliged to compensate any losses due to stolen pool balance or temporary unavailability of the Services. The pool explicitly reserves the right to shut down services from time to time for maintenance reasons.\n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("                                 \n                             Furthermore, the pool shall not be liable for any damages of your hardware (computer and its components) or software (operating system, programs, stored data etc.) occurring while using the Services. The intensity of the mining tasks is highly demanding; hardware components may – exceptionally – be destroyed completely. As the hardware setup of each Worker is individually compiled, you must assess (and bear) the risk associated with such high electrical load by yourself. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                 Attacks on the system may also cause data loss. As far as sensitive data is collected ), the pool  shall not be held responsible for any loss that cannot be reduced to security issues or other culpability by the pool . \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode(" are highly experimental crypto software. Damages or loss of cryptocurrency units arising from software errors therefore remain possible. As the pool  has no influence on the underlying software, he shall not in any case be exposed to claims relating to such errors. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                           \n                             \n                         ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        dom.setAttribute(el2, "style", "max-height: 900px; overflow-y: scroll;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n               ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel panel-success");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-heading");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        dom.setAttribute(el7, "class", "panel-title");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "data-toggle", "collapse");
        dom.setAttribute(el8, "href", "#term1");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-credit-card-alt fa-fw");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode(" Terms of Payment ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" \n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "term1");
        dom.setAttribute(el6, "class", "panel-collapse collapse");
        var el7 = dom.createTextNode("\n                         ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "class", "list-group");
        var el8 = dom.createTextNode("\n                              \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                               \nAs mining is an intensive task for the hardware of your computer (CPU, GPU), the process can cause high costs for electricity. The pool shall not be responsible for any such costs. The Services are conducted at the sole discretion of the user in type, extent and frequency. All expenses arising are to be borne by the Worker.  \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                               \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                \nPool pays using the  Dynamic Pay-Per-Last-N-Shares (\"PPLNS\") payout scheme. This reward system is round based, whereby one round has an arbitrary number (N) of shares, N value are decided at the beginning of each round based on the Network difficulty, N = (2* Network Difficulty)/(Share Difficulty). When a block has been found by the pool, the block reward is distributed according to the number of the shares present in the last N Shares. Payout takes place immediately after the minimum payout has been reached. However, the payout threshold is customizable by sending mail to the pool helpdesk. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                               \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                               \n                            The pool fee is waived off as a introductory offer\n\n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n \n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                               \n                            Transaction fees of the block are retained by the pool till the pool fee is fixed \n \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                          \n                            Gas charges for the transaction will be deducted during the Payout, the gas charges are calculated automatically during the payout time with the scope of standard 21000 gas limit\n \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                               \n                            Mining into the contract account is not allowed, if found the miner will be banned and the extra transaction charges incured for the payout will be retained from the immature balance\n \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                             \n                            \n                          \n                         ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        dom.setAttribute(el2, "style", "max-height: 900px; overflow-y: scroll;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n               ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel panel-success");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "panel-heading");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h4");
        dom.setAttribute(el7, "class", "panel-title");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "data-toggle", "collapse");
        dom.setAttribute(el8, "href", "#term2");
        var el9 = dom.createElement("i");
        dom.setAttribute(el9, "class", "fa fa-user-secret fa-fw");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode(" Privacy Policy");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" \n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "term2");
        dom.setAttribute(el6, "class", "panel-collapse collapse");
        var el7 = dom.createTextNode("\n                         ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "class", "list-group");
        var el8 = dom.createTextNode("\n                                 \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                The Websites are designed as anonymous mining pools. The collection of personal data is strictly limited. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                               \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                By accessing the Websites, the external IP address of your computer and http specific information (request, referrer and user agent) will be logged for statistical purposes. By using the Services (mining on the pools), the external IP address of your computer will be logged for verification purposes as well as to allow you to change specific settings (indication of email  address, modification of minimum payout amount). Such data may potentially link to personally identifiable information. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                               \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                               Indicating your email or mobile number address is no requirement to use the Services. However, you may leave such address in order to get notified if, for example, the Services are temporarily unavailable or the mining pools are experiencing technical problems. Such data will not be shared with third parties as outlined below or used for any other purpose apart from providing relevant information concerning the Services or these Terms.  \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                               \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                The pool uses services of Twitter Inc., 1355 Market St, Suite 900, San Francisco, CA 94103, USA (\"Twitter\") on the Websites in order to provide important information by embedding his official Twitter account \"miningpoolindia\". The timeline is integrated as list template and allows the Workers to directly share or like tweets on Twitter. By accessing the Websites, your browser will instantly communicate with the servers of Twitter in the USA. Thereby, certain data will be transferred and stored. If you are not logged in to Twitter or do not have a Twitter account, the information solely refers to your IP address and the fact that the Websites have been visited. If you are logged in to Twitter, this information can be associated with your account and thus your person. If you do not want Twitter to allocate such collected data to your account, you must log out of your profile before visiting the Websites. When using the liking/sharing function information will be transmitted as well and furthermore visible on Twitter. For advice or information regarding the purpose and scope of data collection, further processing and use of data by Twitter as well as your specific rights and adjustable settings for privacy protection you may visit https://twitter.com/privacy?lang=en to review the privacy policy of Twitter. However, as an alternative, you can force your browser not to load the Twitter timeline by installing add-ons, for example, the script blocker \"NoScript\" available under http://noscript.net/. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                               \n                             ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                None of the information transmitted will be shared with third parties. However, you need to download and install third party software on your computer in order to use the Services and mine cryptocurrency. The pool has no influence on any data collected by these third parties. Hence, it is recommended to review available terms and conditions and privacy policies of such third parties carefully as well. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                             \n                               ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                So called botnets are strictly prohibited from participating in the mining pools. The term refers to computers used for mining, although their actual owners are unaware of it. Your computer may fall victim to a botnet due to insufficient security measures. It is hence recommended to \npay utmost attention to adequate protection. poolSP generally reserves the right to exclude Workers from using the Service without prior notice. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\n                                So called botnets are strictly prohibited from participating in the mining pools. The term refers to computers used for mining, although their actual owners are unaware of it. Your computer may fall victim to a botnet due to insufficient security measures. It is hence recommended to \npay utmost attention to adequate protection. poolSP generally reserves the right to exclude Workers from using the Service without prior notice. \n                             ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                             \n                               \n");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "list-group-item");
        var el9 = dom.createTextNode("\nThe pool may change these Terms and Condition if necessary. Your continued use of the Services will signify your acceptance to any adjustment of these terms. The fact that the text respectively content has been changed will be visibly announced on the Websites. You should read these Terms and Condition again on a regular basis. \n  ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                          \n                         ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 3, 1]);
        var element2 = dom.childAt(element0, [6, 1, 1, 1, 3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(element2, 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [11]), 1, 1);
        return morphs;
      },
      statements: [["content", "config.WebsiteName", ["loc", [null, [7, 207], [7, 229]]], 0, 0, 0, 0], ["content", "config.CoinName", ["loc", [null, [7, 295], [7, 314]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "eq", [["get", "config.Currency", ["loc", [null, [30, 39], [30, 54]]], 0, 0, 0, 0], "INR"], [], ["loc", [null, [30, 35], [30, 61]]], 0, 0]], [], 0, null, ["loc", [null, [30, 29], [35, 36]]]], ["content", "config.CoinName", ["loc", [null, [47, 32], [47, 51]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("open-ethereum-pool/templates/account", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 95,
              "column": 24
            },
            "end": {
              "line": 97,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "format-ethusd", [["get", "model.stats.paid", ["loc", [null, [96, 41], [96, 57]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_usd", ["loc", [null, [96, 58], [96, 86]]], 0, 0, 0, 0]], [], ["loc", [null, [96, 24], [96, 89]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 97,
              "column": 24
            },
            "end": {
              "line": 99,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "format-ethinr", [["get", "model.stats.paid", ["loc", [null, [98, 41], [98, 57]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_inr", ["loc", [null, [98, 58], [98, 86]]], 0, 0, 0, 0]], [], ["loc", [null, [98, 24], [98, 89]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 137,
              "column": 24
            },
            "end": {
              "line": 139,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("small");
          var el2 = dom.createTextNode("Payout threshold: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createMorphAt(element2, 2, 2);
          return morphs;
        },
        statements: [["inline", "format-balance", [["get", "model.stats.payoutthreshold", ["loc", [null, [138, 72], [138, 99]]], 0, 0, 0, 0]], [], ["loc", [null, [138, 55], [138, 101]]], 0, 0], ["content", "config.CoinShortName", ["loc", [null, [138, 101], [138, 125]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 139,
              "column": 24
            },
            "end": {
              "line": 141,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("small");
          var el2 = dom.createTextNode("Payout threshold: ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element1, 1, 1);
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          return morphs;
        },
        statements: [["content", "config.PayoutThreshold", ["loc", [null, [140, 55], [140, 81]]], 0, 0, 0, 0], ["content", "config.CoinShortName", ["loc", [null, [140, 82], [140, 106]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 144,
              "column": 20
            },
            "end": {
              "line": 150,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "href", "#");
          dom.setAttribute(el1, "class", "list-group-item");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-thumbs-up fa-fw");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Current Payment:\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "pull-right text-muted small");
          var el3 = dom.createElement("em");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3, 0]), 0, 0);
          return morphs;
        },
        statements: [["inline", "format-balance", [["get", "model.stats.pending", ["loc", [null, [147, 87], [147, 106]]], 0, 0, 0, 0]], [], ["loc", [null, [147, 70], [147, 108]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 199,
              "column": 20
            },
            "end": {
              "line": 201,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "twitter-timeline");
          var el2 = dom.createTextNode("Tweets by ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "config.TwitterURL", ["loc", [null, [200, 56], [200, 73]]], 0, 0, 0, 0], ["get", "config.TwitterHash", ["loc", [null, [200, 77], [200, 95]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "config.TwitterHash", ["loc", [null, [200, 109], [200, 131]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 220,
                "column": 24
              },
              "end": {
                "line": 220,
                "column": 124
              }
            },
            "moduleName": "open-ethereum-pool/templates/account.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Workers ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "badge alert-danger");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "model.workersOffline", ["loc", [null, [220, 93], [220, 117]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 219,
              "column": 24
            },
            "end": {
              "line": 221,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["account.index"], [], 0, null, ["loc", [null, [220, 24], [220, 136]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 223,
                "column": 24
              },
              "end": {
                "line": 223,
                "column": 61
              }
            },
            "moduleName": "open-ethereum-pool/templates/account.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Rewards");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 222,
              "column": 24
            },
            "end": {
              "line": 224,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["account.rewards"], [], 0, null, ["loc", [null, [223, 24], [223, 73]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child8 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 226,
                "column": 24
              },
              "end": {
                "line": 226,
                "column": 61
              }
            },
            "moduleName": "open-ethereum-pool/templates/account.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Payouts");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 225,
              "column": 24
            },
            "end": {
              "line": 227,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/account.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["account.payouts"], [], 0, null, ["loc", [null, [226, 24], [226, 73]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 241,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/account.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-blue");
        dom.setAttribute(el4, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px;");
        var el5 = dom.createTextNode("MINERS STATISTICS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-8 pull-left");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-green");
        dom.setAttribute(el4, "style", "font-family: 'Merriweather Sans';font-size: 25px;margin-top:50px;");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "fa fa-address-book-o");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "class", "text-green");
        dom.setAttribute(el5, "target", "_blank");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                                       \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.col-lg-12 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-3 col-md-6");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-blue");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        var el8 = dom.createTextNode("\n                         ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                     \n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("   ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("  ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("              \n\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-dashboard");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "text-blue");
        var el7 = dom.createTextNode("HASHRATE 1 Hour/ 30 Minute Avg");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clearfix");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-3 col-md-6");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-green");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode(" ACTIVE WORKERS   ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-server");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "text-green");
        var el7 = dom.createTextNode("ACTIVE WORKERS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clearfix");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-3 col-md-6");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-yellow");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        dom.setAttribute(el7, "style", "font-size: 30px;");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode(" \n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-clock-o");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Immature : ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-hourglass-half");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        dom.setAttribute(el5, "style", "margin:0px;padding:0px;");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "progress");
        dom.setAttribute(el6, "style", "margin:0px;height:40px;");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-center text-blue bold");
        dom.setAttribute(el7, "style", "margin-top:10px;");
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "progress-bar progress-bar-warning progress-bar-striped active");
        dom.setAttribute(el8, "role", "progressbar");
        dom.setAttribute(el8, "aria-valuenow", "9");
        dom.setAttribute(el8, "aria-valuemin", "0");
        dom.setAttribute(el8, "aria-valuemax", "100");
        var el9 = dom.createTextNode("    \n                            \n                        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                         \n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-3 col-md-6");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-red");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        dom.setAttribute(el7, "style", "font-size: 30px;");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("  ≅ \n                        \n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-credit-card");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "text-red");
        var el7 = dom.createTextNode("TOTAL PAYMENTS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clearfix");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-4");
        var el4 = dom.createTextNode("  \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-info");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-info-circle fa-fw");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" Miner Information Panel\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.panel-heading ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "list-group");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-hourglass-1 fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Immature Balance\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small align-middle");
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "");
        var el9 = dom.createElement("em");
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("small");
        var el8 = dom.createTextNode("Preliminary balance awaiting blocks to mature.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-hourglass-2 fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Pending Balance\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small align-middle");
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "");
        var el9 = dom.createElement("em");
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "href", "#");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-spinner fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Your contribution in Last 'N'\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small");
        var el8 = dom.createElement("em");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "href", "#");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-thermometer fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" My Shares in the last 'N'\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small");
        var el8 = dom.createElement("em");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    \n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "href", "#");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-cubes fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Blocks Found\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small");
        var el8 = dom.createElement("em");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "href", "#");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-share-square-o fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Last share submitted\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small");
        var el8 = dom.createElement("em");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "href", "#");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-money fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Total Payments\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small");
        var el8 = dom.createElement("em");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                  \n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "href", "#");
        dom.setAttribute(el6, "class", "list-group-item");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-clock-o fa-fw");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Epoch Switch\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "pull-right text-muted small");
        var el8 = dom.createElement("em");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.list-group ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                    \n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.panel-body ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "chat-panel panel panel-success hidden-md hidden-sm");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-twitter fa-fw");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" UPDATES\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "btn-group pull-right");
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.panel-heading ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body hidden-sm ");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.panel-body ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.panel-footer ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.panel .chat-panel ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.col-lg-4 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-8");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-success");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-database fa-fw");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" MINERS DEATAILED STATISTICS STATUS                    \n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6, "class", "nav nav-tabs");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("                        \n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.col-lg-8 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var element4 = dom.childAt(element3, [1, 3, 1, 2]);
        var element5 = dom.childAt(element3, [5]);
        var element6 = dom.childAt(element5, [1, 3, 1]);
        var element7 = dom.childAt(element5, [5, 3]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(element7, [5, 1, 0, 1]);
        var element10 = dom.childAt(element5, [7, 3, 1]);
        var element11 = dom.childAt(element3, [9]);
        var element12 = dom.childAt(element11, [1]);
        var element13 = dom.childAt(element12, [1, 5]);
        var element14 = dom.childAt(element13, [3]);
        var element15 = dom.childAt(element11, [5, 1, 3]);
        var element16 = dom.childAt(element15, [1]);
        var morphs = new Array(25);
        morphs[0] = dom.createAttrMorph(element4, 'href');
        morphs[1] = dom.createMorphAt(element4, 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element6, [1, 0]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element6, [3]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element5, [3, 3, 1, 1, 0]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element8, [1, 0]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element8, [3, 3]), 0, 0);
        morphs[7] = dom.createAttrMorph(element9, 'style');
        morphs[8] = dom.createMorphAt(dom.childAt(element10, [1, 0]), 1, 1);
        morphs[9] = dom.createMorphAt(dom.childAt(element10, [3]), 1, 1);
        morphs[10] = dom.createMorphAt(dom.childAt(element13, [1, 3, 0, 0]), 0, 0);
        morphs[11] = dom.createMorphAt(dom.childAt(element14, [3, 0, 0]), 0, 0);
        morphs[12] = dom.createMorphAt(element14, 5, 5);
        morphs[13] = dom.createMorphAt(element13, 5, 5);
        morphs[14] = dom.createMorphAt(dom.childAt(element13, [7, 3, 0]), 0, 0);
        morphs[15] = dom.createMorphAt(dom.childAt(element13, [9, 3, 0]), 0, 0);
        morphs[16] = dom.createMorphAt(dom.childAt(element13, [11, 3, 0]), 0, 0);
        morphs[17] = dom.createMorphAt(dom.childAt(element13, [13, 3, 0]), 0, 0);
        morphs[18] = dom.createMorphAt(dom.childAt(element13, [15, 3, 0]), 0, 0);
        morphs[19] = dom.createMorphAt(dom.childAt(element13, [17, 3, 0]), 0, 0);
        morphs[20] = dom.createMorphAt(dom.childAt(element12, [3, 5]), 1, 1);
        morphs[21] = dom.createMorphAt(element16, 1, 1);
        morphs[22] = dom.createMorphAt(element16, 2, 2);
        morphs[23] = dom.createMorphAt(element16, 3, 3);
        morphs[24] = dom.createMorphAt(element15, 3, 3);
        return morphs;
      },
      statements: [["attribute", "href", ["concat", [["get", "config.ChainAddress", ["loc", [null, [7, 178], [7, 197]]], 0, 0, 0, 0], ["get", "model.login", ["loc", [null, [7, 201], [7, 212]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.login", ["loc", [null, [7, 232], [7, 247]]], 0, 0, 0, 0], ["inline", "format-hashrate", [["get", "model.currentHashrate", ["loc", [null, [21, 43], [21, 64]]], 0, 0, 0, 0]], [], ["loc", [null, [21, 25], [21, 66]]], 0, 0], ["inline", "format-hashrate", [["get", "model.hashrate", ["loc", [null, [22, 44], [22, 58]]], 0, 0, 0, 0]], [], ["loc", [null, [22, 26], [22, 60]]], 0, 0], ["inline", "format-number", [["get", "model.workersOnline", ["loc", [null, [43, 44], [43, 63]]], 0, 0, 0, 0]], [], ["loc", [null, [43, 28], [43, 65]]], 0, 0], ["inline", "format-balance", [["get", "model.stats.balance", ["loc", [null, [64, 45], [64, 64]]], 0, 0, 0, 0]], [], ["loc", [null, [64, 28], [64, 66]]], 0, 0], ["inline", "format-balance", [["get", "model.stats.immature", ["loc", [null, [67, 88], [67, 108]]], 0, 0, 0, 0]], [], ["loc", [null, [67, 71], [67, 110]]], 0, 0], ["attribute", "style", ["concat", ["width:", ["get", "paymentPercent", ["loc", [null, [76, 101], [76, 115]]], 0, 0, 0, 0], "%"], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "format-balance", [["get", "model.stats.paid", ["loc", [null, [91, 45], [91, 61]]], 0, 0, 0, 0]], [], ["loc", [null, [91, 28], [91, 63]]], 0, 0], ["block", "if", [["subexpr", "eq", [["get", "config.Currency", ["loc", [null, [95, 34], [95, 49]]], 0, 0, 0, 0], "USD"], [], ["loc", [null, [95, 30], [95, 56]]], 0, 0]], [], 0, 1, ["loc", [null, [95, 24], [99, 31]]]], ["inline", "format-balance", [["get", "model.stats.immature", ["loc", [null, [128, 115], [128, 135]]], 0, 0, 0, 0]], [], ["loc", [null, [128, 98], [128, 137]]], 0, 0], ["inline", "format-balance", [["get", "model.stats.balance", ["loc", [null, [135, 115], [135, 134]]], 0, 0, 0, 0]], [], ["loc", [null, [135, 98], [135, 136]]], 0, 0], ["block", "if", [["get", "model.stats.payoutthreshold", ["loc", [null, [137, 30], [137, 57]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [137, 24], [141, 31]]]], ["block", "if", [["get", "model.stats.pending", ["loc", [null, [144, 26], [144, 45]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [144, 20], [150, 27]]]], ["inline", "format-number", [["get", "roundPercent", ["loc", [null, [154, 86], [154, 98]]], 0, 0, 0, 0]], ["style", "percent", "maximumFractionDigits", "6"], ["loc", [null, [154, 70], [154, 142]]], 0, 0], ["inline", "format-number", [["get", "model.roundShares", ["loc", [null, [159, 86], [159, 103]]], 0, 0, 0, 0]], [], ["loc", [null, [159, 70], [159, 105]]], 0, 0], ["inline", "format-number", [["get", "model.stats.blocksFound", ["loc", [null, [165, 86], [165, 109]]], 0, 0, 0, 0]], ["fallback", "0"], ["loc", [null, [165, 70], [165, 124]]], 0, 0], ["inline", "format-relative", [["subexpr", "seconds-to-ms", [["subexpr", "string-to-int", [["get", "model.stats.lastShare", ["loc", [null, [170, 118], [170, 139]]], 0, 0, 0, 0]], [], ["loc", [null, [170, 103], [170, 140]]], 0, 0]], [], ["loc", [null, [170, 88], [170, 141]]], 0, 0]], [], ["loc", [null, [170, 70], [170, 143]]], 0, 0], ["inline", "format-number", [["get", "model.paymentsTotal", ["loc", [null, [175, 86], [175, 105]]], 0, 0, 0, 0]], [], ["loc", [null, [175, 70], [175, 107]]], 0, 0], ["inline", "format-relative", [["get", "applicationController.nextEpoch", ["loc", [null, [180, 88], [180, 119]]], 0, 0, 0, 0]], ["units", "hour"], ["loc", [null, [180, 70], [180, 134]]], 0, 0], ["block", "twitter-feed", [], [], 5, null, ["loc", [null, [199, 20], [201, 37]]]], ["block", "active-li", [], ["currentWhen", "account.index", "role", "presentation"], 6, null, ["loc", [null, [219, 24], [221, 38]]]], ["block", "active-li", [], ["currentWhen", "account.rewards", "role", "presentation"], 7, null, ["loc", [null, [222, 24], [224, 38]]]], ["block", "active-li", [], ["currentWhen", "account.payouts", "role", "presentation"], 8, null, ["loc", [null, [225, 24], [227, 38]]]], ["content", "outlet", ["loc", [null, [232, 20], [232, 30]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
    };
  })());
});
define("open-ethereum-pool/templates/account/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 8
              },
              "end": {
                "line": 22,
                "column": 8
              }
            },
            "moduleName": "open-ethereum-pool/templates/account/index.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(5);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "v.offline", ["loc", [null, [16, 26], [16, 35]]], 0, 0, 0, 0], "warning", "success"], [], ["loc", [null, [16, 21], [16, 57]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "k", ["loc", [null, [17, 16], [17, 21]]], 0, 0, 0, 0], ["inline", "format-hashrate", [["get", "v.hr", ["loc", [null, [18, 34], [18, 38]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 16], [18, 40]]], 0, 0], ["inline", "format-hashrate", [["get", "v.hr2", ["loc", [null, [19, 34], [19, 39]]], 0, 0, 0, 0]], [], ["loc", [null, [19, 16], [19, 41]]], 0, 0], ["inline", "format-relative", [["subexpr", "seconds-to-ms", [["get", "v.lastBeat", ["loc", [null, [20, 49], [20, 59]]], 0, 0, 0, 0]], [], ["loc", [null, [20, 34], [20, 60]]], 0, 0]], [], ["loc", [null, [20, 16], [20, 62]]], 0, 0]],
          locals: ["k", "v"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 26,
              "column": 2
            }
          },
          "moduleName": "open-ethereum-pool/templates/account/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Your Workers");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("ID");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Hashrate (rough, short average)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Hashrate (accurate, long average)");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Last Share");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each-in", [["get", "model.workers", ["loc", [null, [15, 19], [15, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 8], [22, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 2
            },
            "end": {
              "line": 28,
              "column": 2
            }
          },
          "moduleName": "open-ethereum-pool/templates/account/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No workers online");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/account/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "max-height: 100%; overflow-y: scroll;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "alert alert-info");
        dom.setAttribute(el2, "role", "alert");
        var el3 = dom.createTextNode("\n    \n    Chain:  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "sr-only");
        var el4 = dom.createTextNode("Notice:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Your average hashrate will be smoothly adjusted until you have shares to fullfill estimation window.");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    There are two windows, long and short, first is equal to about 30 minutes and long window is usually equal to 3 hours.");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Dead (sick) workers will be highlighted in a table of workers if they didn't submit a share for 1/2 of short window,\n    so you can perform maintenance of your rigs.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "alert alert-info");
        dom.setAttribute(el2, "role", "alert");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("Your bulk stats JSON API URL:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("/api/accounts/");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3, 1]);
        var element3 = dom.childAt(element1, [5, 3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createAttrMorph(element2, 'href');
        morphs[2] = dom.createMorphAt(element2, 0, 0);
        morphs[3] = dom.createAttrMorph(element3, 'href');
        morphs[4] = dom.createMorphAt(element3, 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.workers", ["loc", [null, [2, 8], [2, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [28, 9]]]], ["attribute", "href", ["concat", [["get", "config.ChainAddress", ["loc", [null, [31, 23], [31, 42]]], 0, 0, 0, 0], ["get", "model.login", ["loc", [null, [31, 46], [31, 57]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.login", ["loc", [null, [31, 77], [31, 92]]], 0, 0, 0, 0], ["attribute", "href", ["concat", ["/api/accounts/", ["get", "model.login", ["loc", [null, [40, 76], [40, 87]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "model.login", ["loc", [null, [40, 105], [40, 120]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/account/payouts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3+c4330341",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 20
                  },
                  "end": {
                    "line": 23,
                    "column": 20
                  }
                },
                "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                      ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                dom.setAttribute(el1, "class", "label label-success");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                return morphs;
              },
              statements: [["inline", "format-balance", [["get", "tx.amount", ["loc", [null, [22, 73], [22, 82]]], 0, 0, 0, 0]], [], ["loc", [null, [22, 56], [22, 84]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3+c4330341",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 24,
                    "column": 20
                  },
                  "end": {
                    "line": 26,
                    "column": 20
                  }
                },
                "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                     TX Charges\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child2 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.3+c4330341",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 20
                  },
                  "end": {
                    "line": 31,
                    "column": 20
                  }
                },
                "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                        \n                            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n                      \n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "format-txcharges", [["get", "tx.txcost", ["loc", [null, [29, 47], [29, 56]]], 0, 0, 0, 0]], [], ["loc", [null, [29, 28], [29, 58]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 20,
                  "column": 16
                },
                "end": {
                  "line": 32,
                  "column": 18
                }
              },
              "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "popover.trigger", [], [], 0, null, ["loc", [null, [21, 20], [23, 40]]]], ["block", "popover.title", [], [], 1, null, ["loc", [null, [24, 20], [26, 38]]]], ["block", "popover.content", [], [], 2, null, ["loc", [null, [27, 20], [31, 40]]]]],
            locals: ["popover"],
            templates: [child0, child1, child2]
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 36,
                  "column": 24
                },
                "end": {
                  "line": 38,
                  "column": 24
                }
              },
              "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "format-ethusd", [["get", "tx.amount", ["loc", [null, [37, 41], [37, 50]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_usd", ["loc", [null, [37, 51], [37, 79]]], 0, 0, 0, 0]], [], ["loc", [null, [37, 24], [37, 82]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 38,
                  "column": 24
                },
                "end": {
                  "line": 40,
                  "column": 24
                }
              },
              "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "format-ethinr", [["get", "tx.amount", ["loc", [null, [39, 41], [39, 50]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_inr", ["loc", [null, [39, 51], [39, 79]]], 0, 0, 0, 0]], [], ["loc", [null, [39, 24], [39, 82]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 8
              },
              "end": {
                "line": 45,
                "column": 8
              }
            },
            "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "class", "hash");
            dom.setAttribute(el3, "rel", "nofollow");
            dom.setAttribute(el3, "target", "_blank");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                \n               ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createElement("small");
            var el5 = dom.createTextNode("≅ \n                        \n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                    \n                    ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [3, 1]);
            var element2 = dom.childAt(element0, [5]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createAttrMorph(element1, 'href');
            morphs[2] = dom.createMorphAt(element1, 0, 0);
            morphs[3] = dom.createMorphAt(element2, 1, 1);
            morphs[4] = dom.createMorphAt(dom.childAt(element2, [4, 0]), 1, 1);
            return morphs;
          },
          statements: [["inline", "format-date-locale", [["get", "tx.timestamp", ["loc", [null, [15, 37], [15, 49]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 16], [15, 51]]], 0, 0], ["attribute", "href", ["concat", [["get", "config.TransactionAddress", ["loc", [null, [17, 25], [17, 50]]], 0, 0, 0, 0], ["get", "tx.tx", ["loc", [null, [17, 54], [17, 59]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "tx.tx", ["loc", [null, [17, 107], [17, 116]]], 0, 0, 0, 0], ["block", "twbs-popover", [], ["popoverTrigger", "hover"], 0, null, ["loc", [null, [20, 16], [32, 35]]]], ["block", "if", [["subexpr", "eq", [["get", "config.Currency", ["loc", [null, [36, 34], [36, 49]]], 0, 0, 0, 0], "USD"], [], ["loc", [null, [36, 30], [36, 56]]], 0, 0]], [], 1, 2, ["loc", [null, [36, 24], [40, 31]]]]],
          locals: ["tx"],
          templates: [child0, child1, child2]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 49,
              "column": 2
            }
          },
          "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Your Latest Payouts");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Tx ID");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Amount");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.payments", ["loc", [null, [13, 16], [13, 30]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [13, 8], [45, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 2
            },
            "end": {
              "line": 51,
              "column": 2
            }
          },
          "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No payouts yet");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 53,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/account/payouts.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.payments", ["loc", [null, [1, 8], [1, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 2], [51, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/account/rewards", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 20,
                  "column": 24
                },
                "end": {
                  "line": 22,
                  "column": 24
                }
              },
              "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "format-ethusd", [["get", "sumreward.reward", ["loc", [null, [21, 41], [21, 57]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_usd", ["loc", [null, [21, 58], [21, 86]]], 0, 0, 0, 0]], [], ["loc", [null, [21, 24], [21, 89]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 24
                },
                "end": {
                  "line": 24,
                  "column": 24
                }
              },
              "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "format-ethinr", [["get", "sumreward.reward", ["loc", [null, [23, 41], [23, 57]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_inr", ["loc", [null, [23, 58], [23, 86]]], 0, 0, 0, 0]], [], ["loc", [null, [23, 24], [23, 89]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 16
              },
              "end": {
                "line": 28,
                "column": 16
              }
            },
            "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("em");
            var el4 = dom.createElement("small");
            var el5 = dom.createTextNode("≅ \n                                \n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("                        \n                            ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element1, [5, 0, 0]), 1, 1);
            return morphs;
          },
          statements: [["content", "sumreward.name", ["loc", [null, [16, 24], [16, 42]]], 0, 0, 0, 0], ["inline", "format-balance", [["get", "sumreward.reward", ["loc", [null, [17, 41], [17, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 24], [17, 59]]], 0, 0], ["block", "if", [["subexpr", "eq", [["get", "config.Currency", ["loc", [null, [20, 34], [20, 49]]], 0, 0, 0, 0], "USD"], [], ["loc", [null, [20, 30], [20, 56]]], 0, 0]], [], 0, 1, ["loc", [null, [20, 24], [24, 31]]]]],
          locals: ["sumreward"],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 45,
                  "column": 24
                },
                "end": {
                  "line": 47,
                  "column": 24
                }
              },
              "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "label label-default");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "format-balance", [["get", "tx.reward", ["loc", [null, [46, 75], [46, 84]]], 0, 0, 0, 0]], [], ["loc", [null, [46, 58], [46, 86]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 47,
                  "column": 24
                },
                "end": {
                  "line": 49,
                  "column": 24
                }
              },
              "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "label label-success");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "format-balance", [["get", "tx.reward", ["loc", [null, [48, 75], [48, 84]]], 0, 0, 0, 0]], [], ["loc", [null, [48, 58], [48, 86]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 16
              },
              "end": {
                "line": 53,
                "column": 16
              }
            },
            "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            return morphs;
          },
          statements: [["inline", "format-number", [["get", "tx.blockheight", ["loc", [null, [43, 41], [43, 55]]], 0, 0, 0, 0]], [], ["loc", [null, [43, 24], [43, 57]]], 0, 0], ["block", "if", [["get", "tx.immature", ["loc", [null, [45, 30], [45, 41]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [45, 24], [49, 31]]]], ["inline", "format-number", [["get", "tx.percent", ["loc", [null, [51, 40], [51, 50]]], 0, 0, 0, 0]], ["style", "percent", "maximumFractionDigits", "6"], ["loc", [null, [51, 24], [51, 94]]], 0, 0]],
          locals: ["tx"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 57,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Your Latest Rewards");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Timeline");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Reward");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("     \n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("≅ ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "label label-default");
          var el3 = dom.createTextNode("Immature");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "label label-success");
          var el3 = dom.createTextNode("Matured");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Block Height");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Reward");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Round Share");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [3]);
          var element3 = dom.childAt(element2, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element3, [1, 1, 5]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [7, 3]), 1, 1);
          return morphs;
        },
        statements: [["content", "config.Currency", ["loc", [null, [10, 26], [10, 45]]], 0, 0, 0, 0], ["block", "each", [["get", "model.sumrewards", ["loc", [null, [14, 24], [14, 40]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 16], [28, 25]]]], ["block", "each", [["get", "model.rewards", ["loc", [null, [41, 24], [41, 37]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [41, 16], [53, 25]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 57,
              "column": 4
            },
            "end": {
              "line": 59,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No rewards yet");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 60,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/account/rewards.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "height:650px;max-height:650px; overflow-y: scroll;");
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.rewards", ["loc", [null, [2, 10], [2, 23]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 4], [59, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/account/settings", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/account/settings.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "height:650px;max-height:650px; overflow-y: scroll;");
        var el2 = dom.createTextNode("  \n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("SETTINGS");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-12 disable");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "action", "");
        dom.setAttribute(el3, "method", "post");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "checkbox");
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "id", "monitor");
        dom.setAttribute(el6, "type", "checkbox");
        dom.setAttribute(el6, "name", "monitor");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("Send a mail if one of my workers goes offline (beta feature)");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "email");
        var el6 = dom.createTextNode("Email address (to prevent spam the first 3 characters are not shown):");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                 ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "threshold");
        var el6 = dom.createTextNode("Payment threshold in Ether (Min: 0.05 Ether, Max: 10 Ether, if set to less than 1 Ether a fixed tx fee of 0.001 Ether will be deducted from the paid amount).");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                 ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "ip");
        var el6 = dom.createTextNode("To save, validate your account by completing the IP given below (the IP corresponds to the public IP address of one of your workers):");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-default");
        var el5 = dom.createTextNode("Save");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 2, 2);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]), 2, 2);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [7]), 2, 2);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [11, 31], [11, 42]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control"], ["loc", [null, [11, 17], [11, 65]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.threshold", ["loc", [null, [14, 31], [14, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control"], ["loc", [null, [14, 17], [14, 69]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.threshold", ["loc", [null, [17, 30], [17, 45]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control"], ["loc", [null, [17, 16], [17, 68]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("open-ethereum-pool/templates/application-error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/application-error.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;font-size: 30px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-12 alert alert-warning");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "fa fa-warning");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "style", "font-family: Arvo; margin-top:80px; border-bottom: none;font-size: 30px;");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        var el7 = dom.createTextNode("Statistics API are Temporarily Down");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("Usually it's just a temporal issue and mining is not affected. ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("         \n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("open-ethereum-pool/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 10
              },
              "end": {
                "line": 22,
                "column": 10
              }
            },
            "moduleName": "open-ethereum-pool/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "fa fa-home");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Home\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "open-ethereum-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [20, 10], [22, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 12
                },
                "end": {
                  "line": 29,
                  "column": 12
                }
              },
              "moduleName": "open-ethereum-pool/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "badge alert-success");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 10
              },
              "end": {
                "line": 30,
                "column": 10
              }
            },
            "moduleName": "open-ethereum-pool/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "fa fa-cubes");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Blocks Found\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "immatureTotal", ["loc", [null, [27, 18], [27, 31]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [27, 12], [29, 19]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 8
            },
            "end": {
              "line": 31,
              "column": 8
            }
          },
          "moduleName": "open-ethereum-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["blocks"], [], 0, null, ["loc", [null, [25, 10], [30, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 10
              },
              "end": {
                "line": 35,
                "column": 10
              }
            },
            "moduleName": "open-ethereum-pool/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "fa fa-credit-card");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Payments\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 8
            },
            "end": {
              "line": 36,
              "column": 8
            }
          },
          "moduleName": "open-ethereum-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["payments"], [], 0, null, ["loc", [null, [33, 10], [35, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 10
              },
              "end": {
                "line": 40,
                "column": 10
              }
            },
            "moduleName": "open-ethereum-pool/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "fa fa-users");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Miners\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 8
            },
            "end": {
              "line": 41,
              "column": 8
            }
          },
          "moduleName": "open-ethereum-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["miners"], [], 0, null, ["loc", [null, [38, 10], [40, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 10
              },
              "end": {
                "line": 45,
                "column": 10
              }
            },
            "moduleName": "open-ethereum-pool/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "fa fa-bank");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Terms & Conditions\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 8
            },
            "end": {
              "line": 46,
              "column": 8
            }
          },
          "moduleName": "open-ethereum-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["about"], [], 0, null, ["loc", [null, [43, 10], [45, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 9
            },
            "end": {
              "line": 51,
              "column": 8
            }
          },
          "moduleName": "open-ethereum-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-life-ring");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" Helpdesk\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "config.SupportHelpdesk", ["loc", [null, [48, 37], [48, 59]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 63,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" Fixed navbar ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "navbar navbar-default navbar-fixed-top");
        dom.setAttribute(el1, "role", "navigation");
        var el2 = dom.createTextNode("\n    \n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "navbar-brand");
        var el3 = dom.createTextNode(" \n       ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/ethereum_logo.png");
        dom.setAttribute(el3, "alt", "ETHEREUM POOL");
        dom.setAttribute(el3, "style", "height:30px;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", ".navbar-collapse");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                  \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      \n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2, 3, 3, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 2, 2);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        morphs[4] = dom.createMorphAt(element1, 5, 5);
        morphs[5] = dom.createMorphAt(element1, 6, 6);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "active-li", [], ["currentWhen", "index"], 0, null, ["loc", [null, [19, 8], [23, 22]]]], ["block", "active-li", [], ["currentWhen", "blocks"], 1, null, ["loc", [null, [24, 8], [31, 22]]]], ["block", "active-li", [], ["currentWhen", "payments"], 2, null, ["loc", [null, [32, 8], [36, 22]]]], ["block", "active-li", [], ["currentWhen", "miners"], 3, null, ["loc", [null, [37, 8], [41, 22]]]], ["block", "active-li", [], ["currentWhen", "about"], 4, null, ["loc", [null, [42, 8], [46, 22]]]], ["block", "active-li", [], [], 5, null, ["loc", [null, [47, 9], [51, 22]]]], ["content", "outlet", ["loc", [null, [62, 0], [62, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("open-ethereum-pool/templates/blocks", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 89,
              "column": 4
            },
            "end": {
              "line": 109,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-lg-12");
          var el3 = dom.createTextNode("    \n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "panel-group");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "panel panel-success");
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "panel-heading");
          var el6 = dom.createTextNode("\n                        ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("h4");
          dom.setAttribute(el6, "class", "panel-title");
          var el7 = dom.createTextNode("\n                            ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("a");
          dom.setAttribute(el7, "data-toggle", "collapse");
          dom.setAttribute(el7, "href", "#collapse1");
          var el8 = dom.createElement("i");
          dom.setAttribute(el8, "class", "fa fa-magic fa-fw");
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode(" POOL LUCK STATISTICS");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode(" \n                        ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                    ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "id", "collapse1");
          dom.setAttribute(el5, "class", "panel-collapse collapse");
          var el6 = dom.createTextNode("\n                        ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "panel-body");
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n\n                    ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1, 1, 1, 3, 1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "partial", ["luck"], [], ["loc", [null, [101, 48], [101, 66]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 121,
                "column": 24
              },
              "end": {
                "line": 121,
                "column": 54
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("All");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 120,
              "column": 24
            },
            "end": {
              "line": 122,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["blocks.index"], [], 0, null, ["loc", [null, [121, 24], [121, 66]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 124,
                "column": 24
              },
              "end": {
                "line": 124,
                "column": 136
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Mature ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "badge alert-success");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "format-number", [["get", "model.maturedTotal", ["loc", [null, [124, 109], [124, 127]]], 0, 0, 0, 0]], [], ["loc", [null, [124, 93], [124, 129]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 123,
              "column": 24
            },
            "end": {
              "line": 125,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["blocks.mature"], [], 0, null, ["loc", [null, [124, 24], [124, 148]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 127,
                "column": 24
              },
              "end": {
                "line": 127,
                "column": 141
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Immature ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "badge alert-warning");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "format-number", [["get", "model.immatureTotal", ["loc", [null, [127, 113], [127, 132]]], 0, 0, 0, 0]], [], ["loc", [null, [127, 97], [127, 134]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 126,
              "column": 24
            },
            "end": {
              "line": 128,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["blocks.immature"], [], 0, null, ["loc", [null, [127, 24], [127, 153]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 130,
                "column": 24
              },
              "end": {
                "line": 130,
                "column": 143
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("New Blocks ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "badge alert-danger");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "format-number", [["get", "model.candidatesTotal", ["loc", [null, [130, 113], [130, 134]]], 0, 0, 0, 0]], [], ["loc", [null, [130, 97], [130, 136]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 129,
              "column": 24
            },
            "end": {
              "line": 131,
              "column": 24
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["blocks.pending"], [], 0, null, ["loc", [null, [130, 24], [130, 155]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 140,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/blocks.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-4");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-blue");
        dom.setAttribute(el4, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px;");
        var el5 = dom.createTextNode("BLOCKS STATISTICS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-8");
        dom.setAttribute(el3, "style", "margin-bottom: 20px;");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Pool always pay full block reward including uncle rewards.    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                                   \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Block maturity requires ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("u");
        var el7 = dom.createTextNode("up to");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "label label-success");
        var el6 = dom.createTextNode("120");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("blocks. Usually it's less indeed.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                                  \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.col-lg-12 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-4");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-red");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" \n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("BLOCKS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                    \n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-star-o");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "text-red");
        var el7 = dom.createTextNode("NEW BLOCKS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clearfix");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-4");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-yellow");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("BLOCKS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("   \n\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-star-half-full");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "text-yellow");
        var el7 = dom.createTextNode("IMMATURE BLOCKS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clearfix");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-4");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-green");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        dom.setAttribute(el7, "style", "font-size: 30px;");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("   \n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("BLOCKS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("   \n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-star");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "text-green");
        var el7 = dom.createTextNode("MATURE BLOCKS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clearfix");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.row ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-warning");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-cube fa-fw");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" DETAILED BLOCK STATISTICS                    \n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6, "class", "nav nav-tabs");
        var el7 = dom.createTextNode("   \n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5]);
        var element2 = dom.childAt(element0, [11, 1, 1, 3]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1, 3, 1, 1, 0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3, 3, 1, 1, 0]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [5, 3, 1, 1, 0]), 1, 1);
        morphs[3] = dom.createMorphAt(element0, 9, 9);
        morphs[4] = dom.createMorphAt(element3, 1, 1);
        morphs[5] = dom.createMorphAt(element3, 2, 2);
        morphs[6] = dom.createMorphAt(element3, 3, 3);
        morphs[7] = dom.createMorphAt(element3, 4, 4);
        morphs[8] = dom.createMorphAt(element2, 3, 3);
        return morphs;
      },
      statements: [["inline", "format-number", [["get", "model.candidatesTotal", ["loc", [null, [27, 44], [27, 65]]], 0, 0, 0, 0]], [], ["loc", [null, [27, 28], [27, 67]]], 0, 0], ["inline", "format-number", [["get", "model.immatureTotal", ["loc", [null, [48, 44], [48, 63]]], 0, 0, 0, 0]], [], ["loc", [null, [48, 28], [48, 65]]], 0, 0], ["inline", "format-number", [["get", "model.maturedTotal", ["loc", [null, [70, 44], [70, 62]]], 0, 0, 0, 0]], [], ["loc", [null, [70, 28], [70, 64]]], 0, 0], ["block", "if", [["get", "model.luck", ["loc", [null, [89, 10], [89, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [89, 4], [109, 11]]]], ["block", "active-li", [], ["currentWhen", "blocks.index", "role", "presentation"], 1, null, ["loc", [null, [120, 24], [122, 38]]]], ["block", "active-li", [], ["currentWhen", "blocks.mature", "role", "presentation"], 2, null, ["loc", [null, [123, 24], [125, 38]]]], ["block", "active-li", [], ["currentWhen", "blocks.immature", "role", "presentation"], 3, null, ["loc", [null, [126, 24], [128, 38]]]], ["block", "active-li", [], ["currentWhen", "blocks.pending", "role", "presentation"], 4, null, ["loc", [null, [129, 24], [131, 38]]]], ["content", "outlet", ["loc", [null, [133, 20], [133, 30]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("open-ethereum-pool/templates/blocks/block", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "rel", "nofollow");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element3, 'href');
          morphs[1] = dom.createMorphAt(element3, 0, 0);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "config.UncleAddress", ["loc", [null, [4, 17], [4, 36]]], 0, 0, 0, 0], ["get", "block.uncleHeight", ["loc", [null, [4, 40], [4, 57]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "format-number", [["get", "block.height", ["loc", [null, [4, 108], [4, 120]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 92], [4, 122]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "rel", "nofollow");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element2, 'href');
          morphs[1] = dom.createMorphAt(element2, 0, 0);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "config.BlockAddress", ["loc", [null, [6, 17], [6, 36]]], 0, 0, 0, 0], ["get", "block.height", ["loc", [null, [6, 40], [6, 52]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "format-number", [["get", "block.height", ["loc", [null, [6, 103], [6, 115]]], 0, 0, 0, 0]], [], ["loc", [null, [6, 87], [6, 117]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "hash");
          dom.setAttribute(el1, "rel", "nofollow");
          dom.setAttribute(el1, "target", "_blank");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'href');
          morphs[1] = dom.createMorphAt(element1, 0, 0);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "config.UncleAddress", ["loc", [null, [11, 17], [11, 36]]], 0, 0, 0, 0], ["get", "block.hash", ["loc", [null, [11, 40], [11, 50]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "block.hash", ["loc", [null, [11, 98], [11, 112]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 4
              },
              "end": {
                "line": 14,
                "column": 4
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "label label-danger");
            var el2 = dom.createTextNode("Orphan");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 4
              },
              "end": {
                "line": 16,
                "column": 4
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "class", "hash");
            dom.setAttribute(el1, "rel", "nofollow");
            dom.setAttribute(el1, "target", "_blank");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'href');
            morphs[1] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "config.BlockAddress", ["loc", [null, [15, 17], [15, 36]]], 0, 0, 0, 0], ["get", "block.hash", ["loc", [null, [15, 40], [15, 50]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "block.hash", ["loc", [null, [15, 98], [15, 112]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 16,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "block.orphan", ["loc", [null, [12, 14], [12, 26]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [12, 4], [16, 4]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 4
            },
            "end": {
              "line": 22,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "label label-success");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "format-number", [["get", "block.variance", ["loc", [null, [21, 56], [21, 70]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [21, 40], [21, 88]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 4
            },
            "end": {
              "line": 24,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "label label-info");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "format-number", [["get", "block.variance", ["loc", [null, [23, 53], [23, 67]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [23, 37], [23, 85]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 4
            },
            "end": {
              "line": 29,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "label label-default");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "block.formatReward", ["loc", [null, [28, 38], [28, 60]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 4
              },
              "end": {
                "line": 31,
                "column": 4
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "label label-primary");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "block.formatReward", ["loc", [null, [30, 38], [30, 60]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 4
            },
            "end": {
              "line": 31,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "block.isOk", ["loc", [null, [29, 14], [29, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [29, 4], [31, 4]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/blocks/block.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("tr");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element4, [5]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element4, [7]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element4, [9]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "block.uncle", ["loc", [null, [3, 10], [3, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]], ["block", "if", [["get", "block.uncle", ["loc", [null, [10, 10], [10, 21]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [10, 4], [16, 11]]]], ["inline", "format-date-locale", [["get", "block.timestamp", ["loc", [null, [18, 27], [18, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [18, 6], [18, 44]]], 0, 0], ["block", "if", [["get", "block.isLucky", ["loc", [null, [20, 10], [20, 23]]], 0, 0, 0, 0]], [], 4, 5, ["loc", [null, [20, 4], [24, 11]]]], ["block", "if", [["get", "block.uncle", ["loc", [null, [27, 10], [27, 21]]], 0, 0, 0, 0]], [], 6, 7, ["loc", [null, [27, 4], [31, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7]
    };
  })());
});
define("open-ethereum-pool/templates/blocks/immature", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 6
              },
              "end": {
                "line": 19,
                "column": 6
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/immature.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["blocks/block"], [], ["loc", [null, [18, 8], [18, 34]]], 0, 0]],
          locals: ["block"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 23,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/immature.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Immature Blocks");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Height");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Block Hash");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time Found");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Variance");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Reward");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.immature", ["loc", [null, [17, 14], [17, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [17, 6], [19, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/immature.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No immature blocks yet");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/blocks/immature.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "height:600px; overflow-y: scroll;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.immature", ["loc", [null, [2, 6], [2, 20]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/blocks/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 8
                },
                "end": {
                  "line": 21,
                  "column": 8
                }
              },
              "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "label label-success");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "format-number", [["get", "block.variance", ["loc", [null, [20, 58], [20, 72]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [20, 42], [20, 90]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 8
                },
                "end": {
                  "line": 23,
                  "column": 8
                }
              },
              "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "label label-info");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "format-number", [["get", "block.variance", ["loc", [null, [22, 55], [22, 69]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [22, 39], [22, 87]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 4
              },
              "end": {
                "line": 26,
                "column": 4
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "rel", "nofollow");
            dom.setAttribute(el3, "target", "_blank");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1, 0]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element1, 'href');
            morphs[1] = dom.createMorphAt(element1, 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "config.BlockAddress", ["loc", [null, [16, 21], [16, 40]]], 0, 0, 0, 0], ["get", "block.height", ["loc", [null, [16, 44], [16, 56]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "format-number", [["get", "block.height", ["loc", [null, [16, 107], [16, 119]]], 0, 0, 0, 0]], [], ["loc", [null, [16, 91], [16, 121]]], 0, 0], ["inline", "format-date-locale", [["get", "block.timestamp", ["loc", [null, [17, 31], [17, 46]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 10], [17, 48]]], 0, 0], ["block", "if", [["get", "block.isLucky", ["loc", [null, [19, 14], [19, 27]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [19, 8], [23, 15]]]]],
          locals: ["block"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Height");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time Found");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Variance");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.candidates", ["loc", [null, [14, 12], [14, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 4], [26, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 0
            },
            "end": {
              "line": 32,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("-");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 48,
                "column": 4
              },
              "end": {
                "line": 50,
                "column": 4
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["blocks/block"], [], ["loc", [null, [49, 6], [49, 32]]], 0, 0]],
          locals: ["block"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 0
            },
            "end": {
              "line": 54,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Height");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Block Hash");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time Found");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Variance");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Reward");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.immature", ["loc", [null, [48, 12], [48, 26]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [48, 4], [50, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 54,
              "column": 0
            },
            "end": {
              "line": 56,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No Immature Blocks");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 73,
                "column": 6
              },
              "end": {
                "line": 75,
                "column": 6
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["blocks/block"], [], ["loc", [null, [74, 8], [74, 34]]], 0, 0]],
          locals: ["block"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 59,
              "column": 0
            },
            "end": {
              "line": 79,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Matured Blocks");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Height");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Block Hash");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time Found");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Variance");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Reward");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.matured", ["loc", [null, [73, 14], [73, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [73, 6], [75, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 0
            },
            "end": {
              "line": 81,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No matured blocks yet");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 83,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/blocks/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "height:600px; overflow-y: scroll;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Recently Found Blocks:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Immature Blocks:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Matured Blocks:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element2, 3, 3);
        morphs[1] = dom.createMorphAt(element2, 7, 7);
        morphs[2] = dom.createMorphAt(element2, 11, 11);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.candidates", ["loc", [null, [3, 6], [3, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 0], [32, 7]]]], ["block", "if", [["get", "model.immature", ["loc", [null, [35, 6], [35, 20]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [35, 0], [56, 7]]]], ["block", "if", [["get", "model.matured", ["loc", [null, [59, 6], [59, 19]]], 0, 0, 0, 0]], [], 4, 5, ["loc", [null, [59, 0], [81, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("open-ethereum-pool/templates/blocks/mature", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 18,
                "column": 4
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/mature.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["blocks/block"], [], ["loc", [null, [17, 6], [17, 32]]], 0, 0]],
          locals: ["block"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/mature.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Matured Blocks");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Height");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Block Hash");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time Found");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Variance");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Reward");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.matured", ["loc", [null, [16, 12], [16, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [16, 4], [18, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 0
            },
            "end": {
              "line": 24,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/mature.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No matured blocks yet");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/blocks/mature.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "height:600px; overflow-y: scroll;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.matured", ["loc", [null, [2, 6], [2, 19]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [24, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/blocks/pending", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 10
                },
                "end": {
                  "line": 21,
                  "column": 10
                }
              },
              "moduleName": "open-ethereum-pool/templates/blocks/pending.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "label label-success");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "format-number", [["get", "block.variance", ["loc", [null, [20, 60], [20, 74]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [20, 44], [20, 92]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 10
                },
                "end": {
                  "line": 23,
                  "column": 10
                }
              },
              "moduleName": "open-ethereum-pool/templates/blocks/pending.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "label label-info");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["inline", "format-number", [["get", "block.variance", ["loc", [null, [22, 57], [22, 71]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [22, 41], [22, 89]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 6
              },
              "end": {
                "line": 26,
                "column": 6
              }
            },
            "moduleName": "open-ethereum-pool/templates/blocks/pending.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "rel", "nofollow");
            dom.setAttribute(el3, "target", "_blank");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1, 0]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element1, 'href');
            morphs[1] = dom.createMorphAt(element1, 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "config.BlockAddress", ["loc", [null, [16, 23], [16, 42]]], 0, 0, 0, 0], ["get", "block.height", ["loc", [null, [16, 46], [16, 58]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "format-number", [["get", "block.height", ["loc", [null, [16, 109], [16, 121]]], 0, 0, 0, 0]], [], ["loc", [null, [16, 93], [16, 123]]], 0, 0], ["inline", "format-date-locale", [["get", "block.timestamp", ["loc", [null, [17, 33], [17, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [17, 12], [17, 50]]], 0, 0], ["block", "if", [["get", "block.isLucky", ["loc", [null, [19, 16], [19, 29]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [19, 10], [23, 17]]]]],
          locals: ["block"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/pending.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Recently Found Blocks");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Height");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time Found");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Variance");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.candidates", ["loc", [null, [14, 14], [14, 30]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 6], [26, 15]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 0
            },
            "end": {
              "line": 32,
              "column": 0
            }
          },
          "moduleName": "open-ethereum-pool/templates/blocks/pending.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No new blocks yet");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/blocks/pending.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "height:600px; overflow-y: scroll;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.candidates", ["loc", [null, [2, 6], [2, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [32, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/components/active-li", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/components/active-li.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("open-ethereum-pool/templates/exchange", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 20
            },
            "end": {
              "line": 119,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/exchange.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                   \n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-striped table-bordered");
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          dom.setAttribute(el5, "class", "text-center");
          var el6 = dom.createTextNode("LEGEND");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          dom.setAttribute(el5, "class", "text-center");
          var el6 = dom.createTextNode("DATA");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("   \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("                              \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("COIN NAME");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("COIN RANK");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("COIN SYMBOL");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("PRICE IN USD");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("PRICE IN INR");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("PRICE IN BTC");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("TOTAL SUPPLY");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" ETH");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("MARKET CAPITAL IN INR");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                             \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("CHANGE IN 1 HOUR");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" %");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("CHANGE IN 24 HOURS");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" %");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                  ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("CHANGE IN 7 DAYS");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" %");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                \n                                \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("COIN NAME");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                                                              \n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          dom.setAttribute(el4, "class", "");
          var el5 = dom.createTextNode("                         \n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createTextNode("UPDATED ON");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("td");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("                                    \n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                              \n                                \n                               \n                            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1, 3]);
          var morphs = new Array(13);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 3]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7, 3]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9, 3]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [11, 3]), 0, 0);
          morphs[6] = dom.createMorphAt(dom.childAt(element0, [13, 3]), 0, 0);
          morphs[7] = dom.createMorphAt(dom.childAt(element0, [15, 3]), 0, 0);
          morphs[8] = dom.createMorphAt(dom.childAt(element0, [17, 3]), 0, 0);
          morphs[9] = dom.createMorphAt(dom.childAt(element0, [19, 3]), 0, 0);
          morphs[10] = dom.createMorphAt(dom.childAt(element0, [21, 3]), 0, 0);
          morphs[11] = dom.createMorphAt(dom.childAt(element0, [23, 3]), 0, 0);
          morphs[12] = dom.createMorphAt(dom.childAt(element0, [25, 3]), 0, 0);
          return morphs;
        },
        statements: [["content", "model.exchangedata.id", ["loc", [null, [42, 40], [42, 65]]], 0, 0, 0, 0], ["content", "model.exchangedata.rank", ["loc", [null, [48, 40], [48, 67]]], 0, 0, 0, 0], ["content", "model.exchangedata.symbol", ["loc", [null, [54, 40], [54, 69]]], 0, 0, 0, 0], ["inline", "format-number", [["get", "model.exchangedata.price_usd", ["loc", [null, [60, 58], [60, 86]]], 0, 0, 0, 0]], ["style", "currency", "currency", "USD"], ["loc", [null, [60, 40], [60, 120]]], 0, 0], ["inline", "format-number", [["get", "model.exchangedata.price_inr", ["loc", [null, [66, 58], [66, 86]]], 0, 0, 0, 0]], ["style", "currency", "currency", "INR"], ["loc", [null, [66, 40], [66, 120]]], 0, 0], ["inline", "format-number", [["get", "model.exchangedata.price_btc", ["loc", [null, [72, 58], [72, 86]]], 0, 0, 0, 0]], ["style", "currency", "currency", "BTC"], ["loc", [null, [72, 40], [72, 120]]], 0, 0], ["content", "model.exchangedata.total_supply", ["loc", [null, [77, 40], [77, 75]]], 0, 0, 0, 0], ["inline", "format-number", [["get", "model.exchangedata.market_cap_inr", ["loc", [null, [83, 58], [83, 91]]], 0, 0, 0, 0]], ["style", "currency", "currency", "INR"], ["loc", [null, [83, 40], [83, 125]]], 0, 0], ["content", "model.exchangedata.percent_change_1h", ["loc", [null, [89, 40], [89, 82]]], 0, 0, 0, 0], ["content", "model.exchangedata.percent_change_24h", ["loc", [null, [95, 40], [95, 82]]], 0, 0, 0, 0], ["content", "model.exchangedata.percent_change_7d", ["loc", [null, [100, 40], [100, 82]]], 0, 0, 0, 0], ["content", "model.exchangedata.id", ["loc", [null, [106, 40], [106, 65]]], 0, 0, 0, 0], ["inline", "format-date-locale", [["get", "model.exchangedata.last_updated", ["loc", [null, [111, 61], [111, 92]]], 0, 0, 0, 0]], [], ["loc", [null, [111, 40], [111, 95]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 119,
              "column": 20
            },
            "end": {
              "line": 121,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/exchange.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No Data");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 126,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/exchange.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-blue");
        dom.setAttribute(el4, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ");
        var el5 = dom.createTextNode("EXCHANGE STATISTICS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-7");
        dom.setAttribute(el3, "style", "margin-bottom: 20px;");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Data are updated once in 30 Minutes    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                                   \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Data are fetched from coinmarketcap.com ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            \n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.col-lg-12 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-info");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-money fa-fw");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" EXCHANGE DATA                    \n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3, 1, 1, 3]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.exchangedata", ["loc", [null, [28, 26], [28, 44]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [28, 20], [121, 27]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/help", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/help.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "page-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("How To Mine");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "lead");
        var el3 = dom.createTextNode("In order to mine on this pool you need to have an\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "https://github.com/ethereum/webthree-umbrella/releases");
        dom.setAttribute(el3, "rel", "nofollow");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createTextNode("ethminer");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" installation\n    pointed to");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("code");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(":");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("/YOUR_ETH_ADDRESS/RIG_ID");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Personal payout threshold");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n   To set the payout threshold level you have to ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/#/about");
        var el4 = dom.createTextNode("contact");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" me with our desire amount, account id and miner ip address.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Stratum Mining with Stratum Proxy for Ethereum");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "lead");
        var el3 = dom.createTextNode("Grab proxy from ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "https://github.com/Atrides/eth-proxy");
        dom.setAttribute(el3, "re", "nofollow");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createTextNode("eth-proxy GitHub repo");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "lead");
        var el3 = dom.createTextNode("Edit ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("code");
        var el4 = dom.createTextNode("eth-proxy.conf");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" and specify our pool's ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("code");
        var el4 = dom.createTextNode("HOST: ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(", ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("code");
        var el4 = dom.createTextNode("PORT: ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" and your ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("code");
        var el4 = dom.createTextNode("WALLET");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("PPLNS block reward");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n   There is no way to cheat the pool.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3, 4]);
        var element2 = dom.childAt(element0, [13]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1, 0, 0);
        morphs[1] = dom.createMorphAt(element1, 2, 2);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
        return morphs;
      },
      statements: [["content", "config.HttpHost", ["loc", [null, [7, 25], [7, 44]]], 0, 0, 0, 0], ["content", "config.HttpPort", ["loc", [null, [7, 45], [7, 64]]], 0, 0, 0, 0], ["content", "config.StratumHost", ["loc", [null, [17, 86], [17, 108]]], 0, 0, 0, 0], ["content", "config.StratumPort", ["loc", [null, [17, 129], [17, 151]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("open-ethereum-pool/templates/index",["exports"],function(exports){exports["default"] = Ember.HTMLBars.template((function(){var child0=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":26,"column":16},"end":{"line":32,"column":16}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                    ");dom.appendChild(el0,el1);var el1=dom.createElement("div");dom.setAttribute(el1,"class","panel-footer");var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-left");var el3=dom.createTextNode("View All Miners");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-right");var el3=dom.createElement("i");dom.setAttribute(el3,"class","fa fa-arrow-circle-right");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","clearfix");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                    ");dom.appendChild(el1,el2);dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(){return [];},statements:[],locals:[],templates:[]};})();var child1=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":48,"column":16},"end":{"line":54,"column":16}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                    ");dom.appendChild(el0,el1);var el1=dom.createElement("div");dom.setAttribute(el1,"class","panel-footer");var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-left");var el3=dom.createTextNode("View All Active Miners");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-right");var el3=dom.createElement("i");dom.setAttribute(el3,"class","fa fa-arrow-circle-right");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","clearfix");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                    ");dom.appendChild(el1,el2);dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(){return [];},statements:[],locals:[],templates:[]};})();var child2=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":65,"column":24},"end":{"line":67,"column":24}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("\n                        ");dom.appendChild(el0,el1);var el1=dom.createElement("i");dom.setAttribute(el1,"class","fa fa-clock-o");dom.appendChild(el0,el1);var el1=dom.createTextNode(" Last Block : ");dom.appendChild(el0,el1);var el1=dom.createElement("span");var el2=dom.createComment("");dom.appendChild(el1,el2);dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var morphs=new Array(1);morphs[0] = dom.createMorphAt(dom.childAt(fragment,[3]),0,0);return morphs;},statements:[["inline","format-relative",[["subexpr","seconds-to-ms",[["get","stats.model.stats.lastBlockFound",["loc",[null,[66,106],[66,138]]],0,0,0,0]],[],["loc",[null,[66,91],[66,139]]],0,0]],[],["loc",[null,[66,73],[66,141]]],0,0]],locals:[],templates:[]};})();var child3=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":67,"column":24},"end":{"line":69,"column":24}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                        NO NEW BLOCKS\n                        ");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(){return [];},statements:[],locals:[],templates:[]};})();var child4=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":73,"column":16},"end":{"line":79,"column":16}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                    ");dom.appendChild(el0,el1);var el1=dom.createElement("div");dom.setAttribute(el1,"class","panel-footer");var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-left");var el3=dom.createTextNode("View Pool Blocks");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-right");var el3=dom.createElement("i");dom.setAttribute(el3,"class","fa fa-arrow-circle-right");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","clearfix");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                    ");dom.appendChild(el1,el2);dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(){return [];},statements:[],locals:[],templates:[]};})();var child5=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":88,"column":28},"end":{"line":90,"column":28}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                            ");dom.appendChild(el0,el1);var el1=dom.createComment("");dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var morphs=new Array(1);morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);return morphs;},statements:[["inline","format-number",[["get","stats.model.exchangedata.price_usd",["loc",[null,[89,45],[89,79]]],0,0,0,0]],["style","currency","currency","USD"],["loc",[null,[89,28],[89,113]]],0,0]],locals:[],templates:[]};})();var child6=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":90,"column":28},"end":{"line":92,"column":28}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                            ");dom.appendChild(el0,el1);var el1=dom.createComment("");dom.appendChild(el0,el1);var el1=dom.createTextNode("                            \n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var morphs=new Array(1);morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);return morphs;},statements:[["inline","format-number",[["get","stats.model.exchangedata.price_inr",["loc",[null,[91,45],[91,79]]],0,0,0,0]],["style","currency","currency","INR"],["loc",[null,[91,28],[91,113]]],0,0]],locals:[],templates:[]};})();var child7=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":100,"column":28},"end":{"line":102,"column":28}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                            ");dom.appendChild(el0,el1);var el1=dom.createElement("i");dom.setAttribute(el1,"class","fa fa-usd");dom.appendChild(el0,el1);var el1=dom.createTextNode(" \n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(){return [];},statements:[],locals:[],templates:[]};})();var child8=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":102,"column":28},"end":{"line":104,"column":28}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                            ");dom.appendChild(el0,el1);var el1=dom.createElement("i");dom.setAttribute(el1,"class","fa fa-inr");dom.appendChild(el0,el1);var el1=dom.createTextNode("                         \n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(){return [];},statements:[],locals:[],templates:[]};})();var child9=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":106,"column":15},"end":{"line":112,"column":17}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                    ");dom.appendChild(el0,el1);var el1=dom.createElement("div");dom.setAttribute(el1,"class","panel-footer");var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-left");var el3=dom.createTextNode("View Exchange Data");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("span");dom.setAttribute(el2,"class","pull-right");var el3=dom.createElement("i");dom.setAttribute(el3,"class","fa fa-arrow-circle-right");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                        ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","clearfix");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n                    ");dom.appendChild(el1,el2);dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(){return [];},statements:[],locals:[],templates:[]};})();var child10=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":198,"column":28},"end":{"line":200,"column":28}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                            ");dom.appendChild(el0,el1);var el1=dom.createComment("");dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var morphs=new Array(1);morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);return morphs;},statements:[["inline","format-number",[["get","stats.model.exchangedata.price_usd",["loc",[null,[199,45],[199,79]]],0,0,0,0]],["style","currency","currency","USD"],["loc",[null,[199,28],[199,113]]],0,0]],locals:[],templates:[]};})();var child11=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":200,"column":28},"end":{"line":202,"column":28}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                            ");dom.appendChild(el0,el1);var el1=dom.createComment("");dom.appendChild(el0,el1);var el1=dom.createTextNode("                            \n                            ");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var morphs=new Array(1);morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);return morphs;},statements:[["inline","format-number",[["get","stats.model.exchangedata.price_inr",["loc",[null,[201,45],[201,79]]],0,0,0,0]],["style","currency","currency","INR"],["loc",[null,[201,28],[201,113]]],0,0]],locals:[],templates:[]};})();var child12=(function(){return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":220,"column":20},"end":{"line":222,"column":20}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createTextNode("                    ");dom.appendChild(el0,el1);var el1=dom.createElement("a");dom.setAttribute(el1,"class","twitter-timeline");var el2=dom.createTextNode("Tweets by ");dom.appendChild(el1,el2);var el2=dom.createComment("");dom.appendChild(el1,el2);dom.appendChild(el0,el1);var el1=dom.createTextNode("\n");dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var element0=dom.childAt(fragment,[1]);var morphs=new Array(2);morphs[0] = dom.createAttrMorph(element0,'href');morphs[1] = dom.createMorphAt(element0,1,1);return morphs;},statements:[["attribute","href",["concat",[["get","config.TwitterURL",["loc",[null,[221,56],[221,73]]],0,0,0,0],["get","config.TwitterHash",["loc",[null,[221,77],[221,95]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],["content","config.TwitterHash",["loc",[null,[221,109],[221,131]]],0,0,0,0]],locals:[],templates:[]};})();return {meta:{"revision":"Ember@2.8.3+c4330341","loc":{"source":null,"start":{"line":1,"column":0},"end":{"line":622,"column":6}},"moduleName":"open-ethereum-pool/templates/index.hbs"},isEmpty:false,arity:0,cachedFragment:null,hasRendered:false,buildFragment:function buildFragment(dom){var el0=dom.createDocumentFragment();var el1=dom.createElement("div");dom.setAttribute(el1,"id","page-wrapper");var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","row");dom.setAttribute(el2,"style","padding-top:50px;");var el3=dom.createTextNode("\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-4");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("span");dom.setAttribute(el4,"class","text-blue");dom.setAttribute(el4,"style","font-family: 'Fredericka the Great'; font-size: 35px;margin-top:50px;");var el5=dom.createTextNode("POOL STATISTICS");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-8");dom.setAttribute(el3,"style","margin-bottom: 20px;");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("span");dom.setAttribute(el4,"style","font-family: Lobster; margin-top:50px; border-bottom: none;");var el5=dom.createTextNode("Welcome to high performance ");dom.appendChild(el4,el5);var el5=dom.createComment("");dom.appendChild(el4,el5);var el5=dom.createTextNode(" mining pool. This pool provides higher profit in comparison to other popular pools for Miners who are not hopping the pool by employing Dynamic realtime PPLNS payments mode. Payouts are processed ");dom.appendChild(el4,el5);var el5=dom.createComment("");dom.appendChild(el4,el5);var el5=dom.createTextNode(".\n            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n        ");dom.appendChild(el2,el3);var el3=dom.createComment(" /.col-lg-12 ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n    ");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createComment(" /.row ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","row");var el3=dom.createTextNode("\n\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-3 col-md-6");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createComment(" small box ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","small-box bg-blue");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","inner ");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("h3");var el7=dom.createElement("span");dom.setAttribute(el7,"class","text-white");var el8=dom.createTextNode("\n                            ");dom.appendChild(el7,el8);var el8=dom.createComment("");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode(" POOL HASHRATE   ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","icon");var el6=dom.createTextNode(" ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-dashboard");dom.appendChild(el5,el6);var el6=dom.createTextNode(" ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment("");dom.appendChild(el4,el5);var el5=dom.createTextNode("            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-3 col-md-6");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createComment(" small box ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","small-box bg-green");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","inner ");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("h3");var el7=dom.createElement("span");dom.setAttribute(el7,"class","text-white");var el8=dom.createTextNode("\n                            ");dom.appendChild(el7,el8);var el8=dom.createComment("");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode(" ACTIVE MINERS   ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","icon");var el6=dom.createTextNode(" ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-users");dom.appendChild(el5,el6);var el6=dom.createTextNode(" ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment("");dom.appendChild(el4,el5);var el5=dom.createTextNode("            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-3 col-md-6");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createComment(" small box ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","small-box bg-yellow");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","inner ");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("h3");var el7=dom.createElement("span");dom.setAttribute(el7,"class","text-white");var el8=dom.createTextNode("\n                            ");dom.appendChild(el7,el8);var el8=dom.createComment("");dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);var el7=dom.createComment("");dom.appendChild(el6,el7);var el7=dom.createTextNode("    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","icon");var el6=dom.createTextNode(" ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-cubes");dom.appendChild(el5,el6);var el6=dom.createTextNode(" ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n");dom.appendChild(el4,el5);var el5=dom.createComment("");dom.appendChild(el4,el5);var el5=dom.createTextNode("            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-3 col-md-6");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createComment(" small box ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","small-box bg-red");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","inner ");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("h3");var el7=dom.createElement("span");dom.setAttribute(el7,"class","text-white");var el8=dom.createTextNode("\n");dom.appendChild(el7,el8);var el8=dom.createComment("");dom.appendChild(el7,el8);var el8=dom.createTextNode("                           \n                            \n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("p");var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);var el7=dom.createComment("");dom.appendChild(el6,el7);var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","icon");var el6=dom.createTextNode("  \n");dom.appendChild(el5,el6);var el6=dom.createComment("");dom.appendChild(el5,el6);var el6=dom.createTextNode("                            ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("  \n");dom.appendChild(el4,el5);var el5=dom.createComment("");dom.appendChild(el4,el5);var el5=dom.createTextNode("            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n    ");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createComment(" /.row ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createElement("div");dom.setAttribute(el2,"class","row");var el3=dom.createTextNode("\n\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-4");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","panel panel-info");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","panel-heading");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-info-circle fa-fw");dom.appendChild(el5,el6);var el6=dom.createTextNode(" Information Panel\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createComment(" /.panel-heading ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","list-group");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-trophy fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Rewards System\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("span");dom.setAttribute(el8,"class","label label-success");var el9=dom.createElement("em");var el10=dom.createTextNode("Dynamic PPL'N'S");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                            ");dom.appendChild(el7,el8);var el8=dom.createElement("a");dom.setAttribute(el8,"href","http://give-me-coins.com/support/faq/what-is-pplns/");dom.setAttribute(el8,"target","_blank");var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-question fa-fw");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                     ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-thermometer-full fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" 'N' Value for the current round\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("span");dom.setAttribute(el8,"class","label label-success");var el9=dom.createElement("em");var el10=dom.createComment("");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("                           \n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                     ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-thermometer-empty fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" 'N' shares buffered\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("span");dom.setAttribute(el8,"class","label label-success");var el9=dom.createElement("em");var el10=dom.createComment("");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("                           \n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    \n");dom.appendChild(el5,el6);var el6=dom.createComment("                     <a class=\"list-group-item\">\n                        <div class=\"progress\" style=\"margin:0px;height:20px;\">\n                            <span class=\"text-center text-aqua bold\" style=\"margin-top:10px;\">\n                        <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" aria-valuemax=\"1585\" style=\"width:60%\">    \n                            \n                        </div></span>\n                         \n                    </div>\n                    </a>");dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    \n                    \n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-money fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Pool Fee\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                     ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-sitemap fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Share Difficulty\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("span");dom.setAttribute(el8,"class","label label-success");var el9=dom.createElement("em");var el10=dom.createComment("");dom.appendChild(el9,el10);dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-unlock-alt fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Network Difficulty\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-dashboard fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Network Hashrate\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-sort-amount-asc fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Blockchain Height\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-clock-o fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Current Round Variance\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-ticket fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Payment Threshold\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);var el9=dom.createTextNode(" ");dom.appendChild(el8,el9);var el9=dom.createComment("");dom.appendChild(el8,el9);var el9=dom.createTextNode(" ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-money fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" Payout\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("a");dom.setAttribute(el6,"class","list-group-item");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("i");dom.setAttribute(el7,"class","fa fa-credit-card-alt fa-fw");dom.appendChild(el6,el7);var el7=dom.createTextNode(" ");dom.appendChild(el6,el7);var el7=dom.createComment("");dom.appendChild(el6,el7);var el7=dom.createTextNode("-");dom.appendChild(el6,el7);var el7=dom.createComment("");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","pull-right text-muted small text-blue");var el8=dom.createTextNode("≅ ");dom.appendChild(el7,el8);var el8=dom.createElement("em");var el9=dom.createTextNode("\n");dom.appendChild(el8,el9);var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createElement("br");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","text-muted small text-blue");var el8=dom.createElement("em");var el9=dom.createComment("");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createComment(" /.list-group ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n\n                ");dom.appendChild(el4,el5);var el5=dom.createComment(" /.panel-body ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","chat-panel panel panel-success");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","panel-heading");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-twitter fa-fw");dom.appendChild(el5,el6);var el6=dom.createTextNode(" UPDATES\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","btn-group pull-right");var el7=dom.createTextNode("\n\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createComment(" /.panel-heading ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","panel-body");var el6=dom.createTextNode("\n");dom.appendChild(el5,el6);var el6=dom.createComment("");dom.appendChild(el5,el6);var el6=dom.createTextNode("                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createComment(" /.panel-body ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n\n                ");dom.appendChild(el4,el5);var el5=dom.createComment(" /.panel-footer ");dom.appendChild(el4,el5);var el5=dom.createTextNode("\n            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createComment(" /.panel .chat-panel ");dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n        ");dom.appendChild(el2,el3);var el3=dom.createComment(" /.col-lg-4 ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-8");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","panel panel-success");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","panel-heading");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-user fa-fw");dom.appendChild(el5,el6);var el6=dom.createTextNode(" MINER STATUS\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","panel-body");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","input-group");var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createComment("");dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("span");dom.setAttribute(el7,"class","input-group-btn");var el8=dom.createTextNode("\n                            ");dom.appendChild(el7,el8);var el8=dom.createElement("button");dom.setAttribute(el8,"class","btn btn-primary");dom.setAttribute(el8,"type","button");var el9=dom.createTextNode("\n                                    ");dom.appendChild(el8,el9);var el9=dom.createElement("span");dom.setAttribute(el9,"style","display: inline;");var el10=dom.createElement("i");dom.setAttribute(el10,"class","fa fa-search");dom.appendChild(el9,el10);var el10=dom.createTextNode(" SEARCH");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                            ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n        ");dom.appendChild(el2,el3);var el3=dom.createComment(" /.col-lg-8 ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n        ");dom.appendChild(el2,el3);var el3=dom.createElement("div");dom.setAttribute(el3,"class","col-lg-8");var el4=dom.createTextNode("\n            ");dom.appendChild(el3,el4);var el4=dom.createElement("div");dom.setAttribute(el4,"class","panel panel-warning");var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","panel-heading");var el6=dom.createTextNode("\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("i");dom.setAttribute(el6,"class","fa fa-question-circle-o fa-fw");dom.appendChild(el5,el6);var el6=dom.createTextNode(" SETUP GUIDE\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n                ");dom.appendChild(el4,el5);var el5=dom.createElement("div");dom.setAttribute(el5,"class","panel-body");var el6=dom.createTextNode("\n\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("ul");dom.setAttribute(el6,"class","nav nav-tabs");dom.setAttribute(el6,"id","myTab");var el7=dom.createTextNode("\n                        \n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("li");dom.setAttribute(el7,"class","active");var el8=dom.createElement("a");dom.setAttribute(el8,"data-target","#general");dom.setAttribute(el8,"data-toggle","tab");var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-info fa-fw");dom.appendChild(el8,el9);var el9=dom.createTextNode(" INFORMATION");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("a");dom.setAttribute(el8,"data-target","#rent");dom.setAttribute(el8,"data-toggle","tab");var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-credit-card-alt fa-fw");dom.appendChild(el8,el9);var el9=dom.createTextNode(" RENTING");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("a");dom.setAttribute(el8,"data-target","#claymore");dom.setAttribute(el8,"data-toggle","tab");var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-download fa-fw");dom.appendChild(el8,el9);var el9=dom.createTextNode("CLAYMORE");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("a");dom.setAttribute(el8,"data-target","#stratumproxy");dom.setAttribute(el8,"data-toggle","tab");var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-download fa-fw");dom.appendChild(el8,el9);var el9=dom.createTextNode("STRATUM PROXY");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("li");var el8=dom.createElement("a");dom.setAttribute(el8,"data-target","#genoils");dom.setAttribute(el8,"data-toggle","tab");var el9=dom.createElement("i");dom.setAttribute(el9,"class","fa fa-download fa-fw");dom.appendChild(el8,el9);var el9=dom.createTextNode("CPP VERSION");dom.appendChild(el8,el9);dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n                    ");dom.appendChild(el5,el6);var el6=dom.createElement("div");dom.setAttribute(el6,"class","tab-content");var el7=dom.createTextNode("\n\n                         ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","tab-pane ");dom.setAttribute(el7,"id","rent");var el8=dom.createTextNode("\n                            ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","col-lg-12");var el9=dom.createTextNode("\n                                ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","panel");var el10=dom.createTextNode("\n                                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","panel-body");var el11=dom.createTextNode("\n                                      ");dom.appendChild(el10,el11);var el11=dom.createElement("div");dom.setAttribute(el11,"class","panel panel-success");var el12=dom.createTextNode("\n                                        ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-heading");var el13=dom.createTextNode(" ");dom.appendChild(el12,el13);var el13=dom.createElement("i");dom.setAttribute(el13,"class","fa fa-credit-card-alt fa-fw");dom.appendChild(el12,el13);var el13=dom.createTextNode(" MINING RENTAL RIG");dom.appendChild(el12,el13);var el13=dom.createElement("a");dom.setAttribute(el13,"href","https://www.miningrigrentals.com?ref=41914");dom.setAttribute(el13,"target","_blank");var el14=dom.createElement("i");dom.setAttribute(el14,"class","fa fa-link fa-fw");dom.appendChild(el13,el14);dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                        ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-body");dom.setAttribute(el12,"style","padding-top:0px;padding-bottom:0px");var el13=dom.createTextNode("\n\n                                          ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                              ");dom.appendChild(el13,el14);var el14=dom.createElement("h2");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-bolt fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Whether you're new to mining and want to try mining out before you buy mining rig");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createElement("br");dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                              ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-ticket fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Pool fully supports miningrigrentals");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                          ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                            ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                              ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://www.miningrigrentals.com/register?ref=41914");dom.setAttribute(el16,"target","_blank");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-sign-in fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("Register using this link to get new account");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode(" ");dom.appendChild(el17,el18);var el18=dom.createElement("i");dom.setAttribute(el18,"class","fa fa-user fa-fw");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                            ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                            ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                               ");dom.appendChild(el15,el16);var el16=dom.createElement("i");dom.setAttribute(el16,"class","fa fa-plus fa-fw");dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                            ");dom.appendChild(el15,el16);var el16=dom.createElement("strong");var el17=dom.createTextNode("Add the Pool using the following setting");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                            ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                              ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                                ");dom.appendChild(el15,el16);var el16=dom.createElement("span");dom.setAttribute(el16,"style","font-family: 'Anonymous Pro';");var el17=dom.createTextNode("                                                 \n                                                  Address = stratum+tcp://");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createTextNode(":");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  User = \"");dom.appendChild(el16,el17);var el17=dom.createElement("kbd");var el18=dom.createComment("");dom.appendChild(el17,el18);var el18=dom.createTextNode(" Address");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\"");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  Pass = x");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("                                                   \n                                                  Algorithm = Hasimotos");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                          ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                        ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n\n\n                                        ");dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                      ");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                                ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                            ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","tab-pane active");dom.setAttribute(el7,"id","general");dom.setAttribute(el7,"style","height:600px; overflow-y: scroll;");var el8=dom.createTextNode("\n                          ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","col-lg-12");var el9=dom.createTextNode("\n                            ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","panel");var el10=dom.createTextNode("\n                              ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","panel-body");dom.setAttribute(el10,"style","padding-top:0px;padding-bottom:0px");var el11=dom.createTextNode("\n ");dom.appendChild(el10,el11);var el11=dom.createElement("h3");dom.setAttribute(el11,"class","text-green");var el12=dom.createElement("i");dom.setAttribute(el12,"class","fa fa-ravelry fa-fw");dom.appendChild(el11,el12);var el12=dom.createTextNode("FEATURE");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                                ");dom.appendChild(el10,el11);var el11=dom.createElement("div");dom.setAttribute(el11,"class","panel-body bs-callout bs-callout-success");var el12=dom.createTextNode("\n                                  ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","");dom.setAttribute(el12,"id","callout-labels-inline-block");var el13=dom.createTextNode("\n                                    ");dom.appendChild(el12,el13);var el13=dom.createElement("ul");dom.setAttribute(el13,"class","list-group");var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-user-secret fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Anonymous mining, No Registration required\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-share-square-o fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Dynamic PPLNS payout scheme, 'N' Value is fixed at the beginning of each round as 2*Block chain Difficulty\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-credit-card fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Interface customized for ");dom.appendChild(el14,el15);var el15=dom.createComment("");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Values of corresponding ");dom.appendChild(el14,el15);var el15=dom.createComment("");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Values\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-credit-card fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" We pay all ");dom.appendChild(el14,el15);var el15=dom.createComment("");dom.appendChild(el14,el15);var el15=dom.createTextNode(" rewards (Blocks, Uncles)\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                         ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-sitemap fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Share Difficulty : ");dom.appendChild(el14,el15);var el15=dom.createComment("");dom.appendChild(el14,el15);var el15=dom.createTextNode(", Efficient for miners\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      \n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-download fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Payout are processed ");dom.appendChild(el14,el15);var el15=dom.createComment("");dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-sun-o fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Customizable minimum payment threshold, To customize, please send us email of your ");dom.appendChild(el14,el15);var el15=dom.createComment("");dom.appendChild(el14,el15);var el15=dom.createTextNode("Address, IP Address, Email and Payout threshold to ");dom.appendChild(el14,el15);var el15=dom.createComment("");dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("                                     \n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-sitemap fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Full stratum support (supports all type of miners)\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-fast-forward fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Efficient mining engine, low uncle rates\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-bar-chart fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Detailed global and per-worker statistics\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-envelope fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Professional Helpdesk  ");dom.appendChild(el14,el15);var el15=dom.createElement("a");dom.setAttribute(el15,"target","_blank");var el16=dom.createTextNode("  Helpdesk  ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n\n                                    ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n                                  ");dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                ");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n\n                              ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                            ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                          ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                          ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","col-lg-12");var el9=dom.createTextNode("\n                            ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","panel");var el10=dom.createTextNode("\n                              ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","panel-body");dom.setAttribute(el10,"style","padding-top:0px;padding-bottom:0px");var el11=dom.createTextNode("\n ");dom.appendChild(el10,el11);var el11=dom.createElement("h3");dom.setAttribute(el11,"class","text-orange");var el12=dom.createElement("i");dom.setAttribute(el12,"class","fa fa-calendar fa-fw");dom.appendChild(el11,el12);var el12=dom.createTextNode("FUTURE SCOPE");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                                ");dom.appendChild(el10,el11);var el11=dom.createElement("div");dom.setAttribute(el11,"class","panel-body bs-callout bs-callout-warning");var el12=dom.createTextNode("\n                                  ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","");dom.setAttribute(el12,"id","callout-labels-inline-block");var el13=dom.createTextNode("\n                                    ");dom.appendChild(el12,el13);var el13=dom.createElement("ul");dom.setAttribute(el13,"class","list-group");var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-mobile fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Email notification system and SMS Notification\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-android fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Third party Android Monitoring App, iOS Monitoring App, and Telegram Bot\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-compass fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode(" Multiple Servers at various Regions\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("                                     \n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("li");dom.setAttribute(el14,"class","list-group-item");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-language fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("  Various Language options\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                    ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n                                  ");dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                ");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n\n                              ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                            ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                          ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","tab-pane");dom.setAttribute(el7,"id","claymore");var el8=dom.createTextNode("\n                            ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","col-lg-12");var el9=dom.createTextNode("\n                                ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","panel");var el10=dom.createTextNode("\n                                    ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","panel-body");var el11=dom.createTextNode("\n                                      ");dom.appendChild(el10,el11);var el11=dom.createElement("div");dom.setAttribute(el11,"class","panel panel-success");var el12=dom.createTextNode("\n                                        ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-heading");var el13=dom.createTextNode(" ");dom.appendChild(el12,el13);var el13=dom.createElement("i");dom.setAttribute(el13,"class","fa fa-download fa-fw");dom.appendChild(el12,el13);var el13=dom.createTextNode(" Claymore's Dual GPU Miner.");dom.appendChild(el12,el13);var el13=dom.createElement("a");dom.setAttribute(el13,"href","https://bitcointalk.org/index.php?topic=1433925.0");dom.setAttribute(el13,"target","_blank");var el14=dom.createElement("i");dom.setAttribute(el14,"class","fa fa-link fa-fw");dom.appendChild(el13,el14);dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                        ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-body");var el13=dom.createTextNode("\n\n                                          ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                          ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-cloud-download fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Download  ");dom.appendChild(el14,el15);var el15=dom.createElement("span");dom.setAttribute(el15,"class","badge");var el16=dom.createTextNode("Latest version is v10.0");dom.appendChild(el15,el16);dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                          ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                            ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                              ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/techievee/Claymore-Dual-Miner/releases/download/10.0/Claymore.s.Dual.GPU.Miner.v10.0-Windows.zip");dom.setAttribute(el16,"target","_blank");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-windows fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("Claymore's. Dual Miner.v10.0.zip");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createElement("em");var el18=dom.createTextNode(" Use Internet Explorer for download ");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("13.1 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                              ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                            ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                            ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                              ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/techievee/Claymore-Dual-Miner/releases/download/10.0/Claymore.s.Dual.GPU.Miner.v10.0.-.LINUX.tar.gz");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-linux fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("Claymore's Dual Miner.v10.0-.LINUX.tar.gz");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("1.66 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                              ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                            ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                          ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                        ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n\n                                          ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                            ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-cogs fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Configuration File");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("Put the following commands into a file ");dom.appendChild(el13,el14);var el14=dom.createElement("kbd");var el15=dom.createTextNode("start.bat");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode(" and double click to start your miner\n                                            ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                              ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                                ");dom.appendChild(el15,el16);var el16=dom.createElement("span");dom.setAttribute(el16,"style","font-family: 'Anonymous Pro';");var el17=dom.createTextNode("\n                                                  setx GPU_FORCE_64BIT_PTR 0");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  setx GPU_MAX_HEAP_SIZE 100");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  setx GPU_USE_SYNC_OBJECTS 1");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  setx GPU_MAX_ALLOC_PERCENT 100");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  setx GPU_SINGLE_ALLOC_PERCENT 100");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  ");dom.appendChild(el16,el17);var el17=dom.createElement("h4");var el18=dom.createTextNode("EthDcrMiner64.exe -epool ");dom.appendChild(el17,el18);var el18=dom.createComment("");dom.appendChild(el17,el18);var el18=dom.createTextNode(":");dom.appendChild(el17,el18);var el18=dom.createComment("");dom.appendChild(el17,el18);var el18=dom.createTextNode(" -ewal ");dom.appendChild(el17,el18);var el18=dom.createElement("kbd");var el19=dom.createComment("");dom.appendChild(el18,el19);var el19=dom.createTextNode("Address");dom.appendChild(el18,el19);dom.appendChild(el17,el18);var el18=dom.createTextNode(" -eworker ");dom.appendChild(el17,el18);var el18=dom.createElement("kbd");var el19=dom.createTextNode("WORKERNAME");dom.appendChild(el18,el19);dom.appendChild(el17,el18);var el18=dom.createTextNode("   -allcoins 1 ");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                              ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                            ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                          ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n\n                                          ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                            Put the following commands into a file ");dom.appendChild(el13,el14);var el14=dom.createElement("kbd");var el15=dom.createTextNode("epools.txt");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode(" to automatically switch to backup server, The server may be added later depending upon the load\n                                            ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-database fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Backup Servers");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                            ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                              ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                                Backup 1 : ");dom.appendChild(el15,el16);var el16=dom.createComment("");dom.appendChild(el15,el16);var el16=dom.createTextNode(":");dom.appendChild(el15,el16);var el16=dom.createComment("");dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                              ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                              ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                                Backup 2 :");dom.appendChild(el15,el16);var el16=dom.createComment("");dom.appendChild(el15,el16);var el16=dom.createTextNode(":");dom.appendChild(el15,el16);var el16=dom.createComment("");dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                              ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                            ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                          ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n\n                                        ");dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                      ");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                                    ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                                ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                            ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","tab-pane");dom.setAttribute(el7,"id","stratumproxy");var el8=dom.createTextNode("\n                          ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","col-lg-12");var el9=dom.createTextNode("\n                            ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","panel");var el10=dom.createTextNode("\n                              ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","panel-body");var el11=dom.createTextNode("\n                                ");dom.appendChild(el10,el11);var el11=dom.createElement("div");dom.setAttribute(el11,"class","panel panel-success");var el12=dom.createTextNode("\n                                  ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-heading");var el13=dom.createTextNode(" ");dom.appendChild(el12,el13);var el13=dom.createElement("i");dom.setAttribute(el13,"class","fa fa-download fa-fw");dom.appendChild(el12,el13);var el13=dom.createTextNode(" Stratum mode using Stratum Proxy ");dom.appendChild(el12,el13);var el13=dom.createElement("a");dom.setAttribute(el13,"href","https://bitcointalk.org/index.php?topic=1200891");dom.setAttribute(el13,"target","_blank");var el14=dom.createElement("i");dom.setAttribute(el14,"class","fa fa-link fa-fw");dom.appendChild(el13,el14);dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                  ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-body");var el13=dom.createTextNode("\n\n                                    ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-cloud-download fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Download  ");dom.appendChild(el14,el15);var el15=dom.createElement("span");dom.setAttribute(el15,"class","badge");var el16=dom.createTextNode("Latest version is v0.05");dom.appendChild(el15,el16);dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                          ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/Atrides/eth-proxy/releases/download/0.0.5/eth-proxy-win.zip");dom.setAttribute(el16,"target","_blank");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-windows fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("Stratum Proxy.v0.0.5.zip");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("5.18 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                          ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/Atrides/eth-proxy/releases/download/0.0.5/eth-proxy.zip");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-linux fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("Linux Stratum Proxy.v0.0.5.zip");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("43.7 KB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                    ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n\n                                    ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-cogs fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Configuration File");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("Put the following commands into a file ");dom.appendChild(el13,el14);var el14=dom.createElement("kbd");var el15=dom.createTextNode("start.bat");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode(" and double click to start your miner ");dom.appendChild(el13,el14);var el14=dom.createElement("br");dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                                ");dom.appendChild(el15,el16);var el16=dom.createElement("span");dom.setAttribute(el16,"style","font-family: 'Anonymous Pro';");var el17=dom.createTextNode("\n                                                  ");dom.appendChild(el16,el17);var el17=dom.createElement("h4");var el18=dom.createTextNode("ethminer.exe --farm-recheck 200 -G -F http://");dom.appendChild(el17,el18);var el18=dom.createComment("");dom.appendChild(el17,el18);var el18=dom.createTextNode(":");dom.appendChild(el17,el18);var el18=dom.createComment("");dom.appendChild(el17,el18);var el18=dom.createTextNode("/");dom.appendChild(el17,el18);var el18=dom.createElement("kbd");var el19=dom.createTextNode("WORKERNAME");dom.appendChild(el18,el19);dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      Put the following commands into a file ");dom.appendChild(el13,el14);var el14=dom.createElement("kbd");var el15=dom.createTextNode("eth-proxy.conf");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode(" to add wallet and other configuration");dom.appendChild(el13,el14);var el14=dom.createElement("br");dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                                ");dom.appendChild(el15,el16);var el16=dom.createElement("span");dom.setAttribute(el16,"style","font-family: 'Anonymous Pro';");var el17=dom.createTextNode("\n                                                  COIN = \"");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createTextNode("\" ");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  HOST = \"0.0.0.0\"");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  PORT = ");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  WALLET = \"");dom.appendChild(el16,el17);var el17=dom.createElement("kbd");var el18=dom.createTextNode("ADDRESS");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\"");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  ENABLE_WORKER_ID = False");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  MONITORING = False");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  MONITORING_EMAIL = \"\"");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  # Main pool\n                                                  POOL_HOST = \"");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createTextNode("\"");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  POOL_PORT = ");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  POOL_FAILOVER_ENABLE = True");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  POOL_HOST_FAILOVER1 = \"");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createTextNode("\"");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  POOL_PORT_FAILOVER1 = ");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  POOL_HOST_FAILOVER2 = \"");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createTextNode("\"");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  POOL_PORT_FAILOVER2 = ");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  LOG_TO_FILE = True");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                  DEBUG = False");dom.appendChild(el16,el17);var el17=dom.createElement("br");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                    ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n                                  ");dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                ");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                              ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                            ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                          ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                        ");dom.appendChild(el6,el7);var el7=dom.createElement("div");dom.setAttribute(el7,"class","tab-pane");dom.setAttribute(el7,"id","genoils");var el8=dom.createTextNode("\n                          ");dom.appendChild(el7,el8);var el8=dom.createElement("div");dom.setAttribute(el8,"class","col-lg-12");var el9=dom.createTextNode("\n                            ");dom.appendChild(el8,el9);var el9=dom.createElement("div");dom.setAttribute(el9,"class","panel");var el10=dom.createTextNode("\n                              ");dom.appendChild(el9,el10);var el10=dom.createElement("div");dom.setAttribute(el10,"class","panel-body");var el11=dom.createTextNode("\n                                ");dom.appendChild(el10,el11);var el11=dom.createElement("div");dom.setAttribute(el11,"class","panel panel-success");var el12=dom.createTextNode("\n                                  ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-heading");var el13=dom.createTextNode(" ");dom.appendChild(el12,el13);var el13=dom.createElement("i");dom.setAttribute(el13,"class","fa fa-download fa-fw");dom.appendChild(el12,el13);var el13=dom.createTextNode(" CPP ETHEREUM CLIENT.");dom.appendChild(el12,el13);var el13=dom.createElement("a");dom.setAttribute(el13,"href","https://github.com/ethereum/webthree-umbrella/releases");dom.setAttribute(el13,"target","_blank");var el14=dom.createElement("i");dom.setAttribute(el14,"class","fa fa-link fa-fw");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode(" ");dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                  ");dom.appendChild(el11,el12);var el12=dom.createElement("div");dom.setAttribute(el12,"class","panel-body");var el13=dom.createTextNode("\n\n                                   ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-cloud-download fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Download  ");dom.appendChild(el14,el15);var el15=dom.createElement("span");dom.setAttribute(el15,"class","badge");var el16=dom.createTextNode("v1.29 (\"The Village Idiot\")");dom.appendChild(el15,el16);dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                          ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-windows-v1.2.9.zip");dom.setAttribute(el16,"target","_blank");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-windows fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("cpp-ethereum-miner v 1.2.9");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("32.1 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                          \n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                          ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-yosemite-v1.2.9.zip");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-apple fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("OS X Yosemite Source 1 ZIP");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("12.6 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                          \n                                          \n                                           ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                          ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-yosemite-v1.2.9.dmg");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-apple fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("OS X Yosemite Source 2 DMG");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("81 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                          \n                                          ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                          ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-elcapitan-v1.2.9.zip");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-apple fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("OS X El Capitan Source 1 ZIP");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("11.6 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n                                          \n                                          ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                          ");dom.appendChild(el15,el16);var el16=dom.createElement("a");dom.setAttribute(el16,"href","https://github.com/ethereum/webthree-umbrella/releases/download/v1.2.9/cpp-ethereum-osx-elcapitan-v1.2.9.dmg");dom.setAttribute(el16,"rel","nofollow");var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("i");dom.setAttribute(el17,"class","fa fa-apple fa-fw");dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("strong");var el18=dom.createTextNode("OS X El Capitan Source 2 DMG");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                            ");dom.appendChild(el16,el17);var el17=dom.createElement("small");dom.setAttribute(el17,"class","text-gray pull-right");var el18=dom.createTextNode("78 MB");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                          ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                    ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n\n                                    ");dom.appendChild(el12,el13);var el13=dom.createElement("div");dom.setAttribute(el13,"class","bs-callout bs-callout-info");dom.setAttribute(el13,"id","callout-labels-inline-block");var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("h4");var el15=dom.createElement("i");dom.setAttribute(el15,"class","fa fa-cogs fa-fw");dom.appendChild(el14,el15);var el15=dom.createTextNode("Configuration");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                      ");dom.appendChild(el13,el14);var el14=dom.createElement("ul");dom.setAttribute(el14,"class","list-group");var el15=dom.createTextNode("\n                                        ");dom.appendChild(el14,el15);var el15=dom.createElement("li");dom.setAttribute(el15,"class","list-group-item");var el16=dom.createTextNode("\n                                                ");dom.appendChild(el15,el16);var el16=dom.createElement("span");dom.setAttribute(el16,"style","font-family: 'Anonymous Pro';");var el17=dom.createTextNode("\n                                                  ethminer.exe http://");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createTextNode(":");dom.appendChild(el16,el17);var el17=dom.createComment("");dom.appendChild(el16,el17);var el17=dom.createTextNode("/");dom.appendChild(el16,el17);var el17=dom.createElement("kbd");var el18=dom.createTextNode("ADDRESS");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("/");dom.appendChild(el16,el17);var el17=dom.createElement("kbd");var el18=dom.createTextNode("WORKERNAME");dom.appendChild(el17,el18);dom.appendChild(el16,el17);var el17=dom.createTextNode("\n                                                ");dom.appendChild(el16,el17);dom.appendChild(el15,el16);var el16=dom.createTextNode("\n                                        ");dom.appendChild(el15,el16);dom.appendChild(el14,el15);var el15=dom.createTextNode("\n\n                                      ");dom.appendChild(el14,el15);dom.appendChild(el13,el14);var el14=dom.createTextNode("\n                                    ");dom.appendChild(el13,el14);dom.appendChild(el12,el13);var el13=dom.createTextNode("\n\n                               \n\n\n                                  ");dom.appendChild(el12,el13);dom.appendChild(el11,el12);var el12=dom.createTextNode("\n                                ");dom.appendChild(el11,el12);dom.appendChild(el10,el11);var el11=dom.createTextNode("\n                              ");dom.appendChild(el10,el11);dom.appendChild(el9,el10);var el10=dom.createTextNode("\n                            ");dom.appendChild(el9,el10);dom.appendChild(el8,el9);var el9=dom.createTextNode("\n                          ");dom.appendChild(el8,el9);dom.appendChild(el7,el8);var el8=dom.createTextNode("\n\n                        ");dom.appendChild(el7,el8);dom.appendChild(el6,el7);var el7=dom.createTextNode("\n                    ");dom.appendChild(el6,el7);dom.appendChild(el5,el6);var el6=dom.createTextNode("\n\n                ");dom.appendChild(el5,el6);dom.appendChild(el4,el5);var el5=dom.createTextNode("\n            ");dom.appendChild(el4,el5);dom.appendChild(el3,el4);var el4=dom.createTextNode("\n        ");dom.appendChild(el3,el4);dom.appendChild(el2,el3);var el3=dom.createTextNode("\n        ");dom.appendChild(el2,el3);var el3=dom.createComment(" /.col-lg-8 ");dom.appendChild(el2,el3);var el3=dom.createTextNode("\n\n    ");dom.appendChild(el2,el3);dom.appendChild(el1,el2);var el2=dom.createTextNode("\n    ");dom.appendChild(el1,el2);var el2=dom.createComment(" /.row ");dom.appendChild(el1,el2);var el2=dom.createTextNode("\n");dom.appendChild(el1,el2);dom.appendChild(el0,el1);return el0;},buildRenderNodes:function buildRenderNodes(dom,fragment,contextualElement){var element1=dom.childAt(fragment,[0]);var element2=dom.childAt(element1,[1,3,1]);var element3=dom.childAt(element1,[5]);var element4=dom.childAt(element3,[1,3]);var element5=dom.childAt(element3,[3,3]);var element6=dom.childAt(element3,[5,3]);var element7=dom.childAt(element6,[1]);var element8=dom.childAt(element3,[7,3]);var element9=dom.childAt(element8,[1]);var element10=dom.childAt(element1,[9]);var element11=dom.childAt(element10,[1]);var element12=dom.childAt(element11,[1,5]);var element13=dom.childAt(element12,[21,3,0]);var element14=dom.childAt(element12,[25]);var element15=dom.childAt(element10,[5,1,3,1]);var element16=dom.childAt(element15,[3,1]);var element17=dom.childAt(element10,[9,1,3,3]);var element18=dom.childAt(element17,[1,1,1,1,1,3,1,6,5,1]);var element19=dom.childAt(element17,[3,1,1,1,3,1,1]);var element20=dom.childAt(element19,[5]);var element21=dom.childAt(element19,[13]);var element22=dom.childAt(element19,[21,3]);var element23=dom.childAt(element17,[5,1,1,1,1,3]);var element24=dom.childAt(element23,[3,5,1,1,11]);var element25=dom.childAt(element23,[5,5]);var element26=dom.childAt(element25,[1]);var element27=dom.childAt(element25,[3]);var element28=dom.childAt(element17,[7,1,1,1,1,3,3]);var element29=dom.childAt(element28,[7,1,1,1]);var element30=dom.childAt(element28,[13,1,1]);var element31=dom.childAt(element17,[9,1,1,1,1,3,3,3,1,1]);var morphs=new Array(61);morphs[0] = dom.createMorphAt(element2,1,1);morphs[1] = dom.createMorphAt(element2,3,3);morphs[2] = dom.createMorphAt(dom.childAt(element4,[1,1,0]),1,1);morphs[3] = dom.createMorphAt(element4,5,5);morphs[4] = dom.createMorphAt(dom.childAt(element5,[1,1,0]),1,1);morphs[5] = dom.createMorphAt(element5,5,5);morphs[6] = dom.createMorphAt(dom.childAt(element7,[1,0]),1,1);morphs[7] = dom.createMorphAt(dom.childAt(element7,[3]),1,1);morphs[8] = dom.createMorphAt(element6,5,5);morphs[9] = dom.createMorphAt(dom.childAt(element9,[1,0]),1,1);morphs[10] = dom.createMorphAt(dom.childAt(element9,[3]),1,1);morphs[11] = dom.createMorphAt(dom.childAt(element8,[3]),1,1);morphs[12] = dom.createMorphAt(element8,5,5);morphs[13] = dom.createMorphAt(dom.childAt(element12,[3,3,0,0]),0,0);morphs[14] = dom.createMorphAt(dom.childAt(element12,[5,3,0,0]),0,0);morphs[15] = dom.createMorphAt(dom.childAt(element12,[9,3,0]),0,0);morphs[16] = dom.createMorphAt(dom.childAt(element12,[11,3,0,0]),0,0);morphs[17] = dom.createMorphAt(dom.childAt(element12,[13,3,0]),0,0);morphs[18] = dom.createMorphAt(dom.childAt(element12,[15,3,0]),0,0);morphs[19] = dom.createMorphAt(dom.childAt(element12,[17,3,0]),0,0);morphs[20] = dom.createMorphAt(dom.childAt(element12,[19,3,0]),0,0);morphs[21] = dom.createMorphAt(element13,0,0);morphs[22] = dom.createMorphAt(element13,2,2);morphs[23] = dom.createMorphAt(dom.childAt(element12,[23,3,0]),0,0);morphs[24] = dom.createMorphAt(element14,3,3);morphs[25] = dom.createMorphAt(element14,5,5);morphs[26] = dom.createMorphAt(dom.childAt(element14,[7,1]),1,1);morphs[27] = dom.createMorphAt(dom.childAt(element14,[9,0]),0,0);morphs[28] = dom.createMorphAt(dom.childAt(element11,[3,5]),1,1);morphs[29] = dom.createMorphAt(element15,1,1);morphs[30] = dom.createElementMorph(element16);morphs[31] = dom.createMorphAt(element18,1,1);morphs[32] = dom.createMorphAt(element18,3,3);morphs[33] = dom.createMorphAt(dom.childAt(element18,[6]),0,0);morphs[34] = dom.createMorphAt(element20,3,3);morphs[35] = dom.createMorphAt(element20,5,5);morphs[36] = dom.createMorphAt(dom.childAt(element19,[7]),3,3);morphs[37] = dom.createMorphAt(dom.childAt(element19,[9]),3,3);morphs[38] = dom.createMorphAt(dom.childAt(element19,[11]),3,3);morphs[39] = dom.createMorphAt(element21,3,3);morphs[40] = dom.createMorphAt(element21,5,5);morphs[41] = dom.createAttrMorph(element22,'href');morphs[42] = dom.createMorphAt(element24,1,1);morphs[43] = dom.createMorphAt(element24,3,3);morphs[44] = dom.createMorphAt(dom.childAt(element24,[5]),0,0);morphs[45] = dom.createMorphAt(element26,1,1);morphs[46] = dom.createMorphAt(element26,3,3);morphs[47] = dom.createMorphAt(element27,1,1);morphs[48] = dom.createMorphAt(element27,3,3);morphs[49] = dom.createMorphAt(element29,1,1);morphs[50] = dom.createMorphAt(element29,3,3);morphs[51] = dom.createMorphAt(element30,1,1);morphs[52] = dom.createMorphAt(element30,7,7);morphs[53] = dom.createMorphAt(element30,20,20);morphs[54] = dom.createMorphAt(element30,24,24);morphs[55] = dom.createMorphAt(element30,29,29);morphs[56] = dom.createMorphAt(element30,33,33);morphs[57] = dom.createMorphAt(element30,36,36);morphs[58] = dom.createMorphAt(element30,40,40);morphs[59] = dom.createMorphAt(element31,1,1);morphs[60] = dom.createMorphAt(element31,3,3);return morphs;},statements:[["content","config.CoinName",["loc",[null,[7,115],[7,134]]],0,0,0,0],["content","config.PaymentText",["loc",[null,[7,331],[7,353]]],0,0,0,0],["inline","format-hashrate",[["get","stats.model.hashrate",["loc",[null,[20,46],[20,66]]],0,0,0,0]],[],["loc",[null,[20,28],[20,68]]],0,0],["block","link-to",["miners"],[],0,null,["loc",[null,[26,16],[32,28]]]],["inline","format-number",[["get","stats.model.minersTotal",["loc",[null,[42,44],[42,67]]],0,0,0,0]],[],["loc",[null,[42,28],[42,69]]],0,0],["block","link-to",["miners"],[],1,null,["loc",[null,[48,16],[54,28]]]],["inline","format-number",[["get","model.maturedTotal",["loc",[null,[63,44],[63,62]]],0,0,0,0]],[],["loc",[null,[63,28],[63,65]]],0,0],["block","if",[["get","stats.model.stats.lastBlockFound",["loc",[null,[65,30],[65,62]]],0,0,0,0]],[],2,3,["loc",[null,[65,24],[69,31]]]],["block","link-to",["blocks"],[],4,null,["loc",[null,[73,16],[79,28]]]],["block","if",[["subexpr","eq",[["get","config.Currency",["loc",[null,[88,38],[88,53]]],0,0,0,0],"USD"],[],["loc",[null,[88,34],[88,60]]],0,0]],[],5,6,["loc",[null,[88,28],[92,35]]]],["inline","format-date-locale",[["get","stats.model.exchangedata.last_updated",["loc",[null,[96,45],[96,82]]],0,0,0,0]],[],["loc",[null,[96,24],[96,85]]],0,0],["block","if",[["subexpr","eq",[["get","config.Currency",["loc",[null,[100,38],[100,53]]],0,0,0,0],"USD"],[],["loc",[null,[100,34],[100,60]]],0,0]],[],7,8,["loc",[null,[100,28],[104,35]]]],["block","link-to",["exchange"],[],9,null,["loc",[null,[106,15],[112,29]]]],["inline","format-number",[["get","stats.model.stats.lastNValue",["loc",[null,[135,120],[135,148]]],0,0,0,0]],[],["loc",[null,[135,104],[135,150]]],0,0],["inline","format-number",[["get","stats.model.stats.nShares",["loc",[null,[140,120],[140,145]]],0,0,0,0]],[],["loc",[null,[140,104],[140,147]]],0,0],["content","config.PoolFee",["loc",[null,[157,70],[157,88]]],0,0,0,0],["inline","format-hashrate",[["get","config.ShareDifficulty",["loc",[null,[162,122],[162,144]]],0,0,0,0]],[],["loc",[null,[162,104],[162,146]]],0,0],["inline","with-metric-prefix",[["get","stats.difficulty",["loc",[null,[167,91],[167,107]]],0,0,0,0]],[],["loc",[null,[167,70],[167,109]]],0,0],["inline","format-hashrate",[["get","stats.hashrate",["loc",[null,[172,88],[172,102]]],0,0,0,0]],[],["loc",[null,[172,70],[172,104]]],0,0],["inline","format-number",[["get","stats.height",["loc",[null,[177,86],[177,98]]],0,0,0,0]],[],["loc",[null,[177,70],[177,100]]],0,0],["inline","format-number",[["get","stats.roundVariance",["loc",[null,[182,86],[182,105]]],0,0,0,0]],["style","percent"],["loc",[null,[182,70],[182,123]]],0,0],["content","config.PayoutThreshold",["loc",[null,[187,70],[187,96]]],0,0,0,0],["content","config.CoinShortName",["loc",[null,[187,97],[187,121]]],0,0,0,0],["content","config.PaymentText",["loc",[null,[192,70],[192,92]]],0,0,0,0],["content","config.CoinShortName",["loc",[null,[196,68],[196,92]]],0,0,0,0],["content","config.Currency",["loc",[null,[196,93],[196,112]]],0,0,0,0],["block","if",[["subexpr","eq",[["get","config.Currency",["loc",[null,[198,38],[198,53]]],0,0,0,0],"USD"],[],["loc",[null,[198,34],[198,60]]],0,0]],[],10,11,["loc",[null,[198,28],[202,35]]]],["inline","format-date-locale",[["get","stats.model.exchangedata.last_updated",["loc",[null,[203,102],[203,139]]],0,0,0,0]],[],["loc",[null,[203,81],[203,142]]],0,0],["block","twitter-feed",[],[],12,null,["loc",[null,[220,20],[222,37]]]],["inline","input",[],["value",["subexpr","@mut",[["get","cachedLogin",["loc",[null,[239,38],[239,49]]],0,0,0,0]],[],[],0,0],"class","form-control","placeholder","Enter Your Address"],["loc",[null,[239,24],[239,105]]],0,0],["element","action",["lookup",["get","cachedLogin",["loc",[null,[241,92],[241,103]]],0,0,0,0]],[],["loc",[null,[241,74],[241,105]]],0,0],["content","config.StratumHost",["loc",[null,[294,74],[294,96]]],0,0,0,0],["content","config.StratumPort",["loc",[null,[294,97],[294,119]]],0,0,0,0],["content","config.CoinName",["loc",[null,[295,63],[295,82]]],0,0,0,0],["content","config.Currency",["loc",[null,[327,105],[327,124]]],0,0,0,0],["content","config.CoinName",["loc",[null,[327,149],[327,168]]],0,0,0,0],["content","config.CoinName",["loc",[null,[330,91],[330,110]]],0,0,0,0],["content","config.ShareDifficulty",["loc",[null,[333,95],[333,121]]],0,0,0,0],["content","config.PaymentText",["loc",[null,[337,98],[337,120]]],0,0,0,0],["content","config.CoinShortName",["loc",[null,[340,156],[340,180]]],0,0,0,0],["content","config.SupportMail",["loc",[null,[340,231],[340,253]]],0,0,0,0],["attribute","href",["concat",[["get","config.SupportHelpdesk",["loc",[null,[352,127],[352,149]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],["content","config.StratumHost",["loc",[null,[432,79],[432,101]]],0,0,0,0],["content","config.StratumPort",["loc",[null,[432,102],[432,124]]],0,0,0,0],["content","config.CoinName",["loc",[null,[432,136],[432,155]]],0,0,0,0],["content","config.StratumHost1",["loc",[null,[445,59],[445,82]]],0,0,0,0],["content","config.StratumPort1",["loc",[null,[445,83],[445,106]]],0,0,0,0],["content","config.StratumHost2",["loc",[null,[448,58],[448,81]]],0,0,0,0],["content","config.StratumPort2",["loc",[null,[448,82],[448,105]]],0,0,0,0],["content","config.HttpHost",["loc",[null,[496,99],[496,118]]],0,0,0,0],["content","config.HttpPort",["loc",[null,[496,119],[496,138]]],0,0,0,0],["content","config.CoinName",["loc",[null,[505,58],[505,77]]],0,0,0,0],["content","config.StratumPort",["loc",[null,[507,57],[507,79]]],0,0,0,0],["content","config.StratumHost",["loc",[null,[513,63],[513,85]]],0,0,0,0],["content","config.StratumPort",["loc",[null,[514,62],[514,84]]],0,0,0,0],["content","config.StratumHost1",["loc",[null,[516,73],[516,96]]],0,0,0,0],["content","config.StratumPort1",["loc",[null,[517,72],[517,95]]],0,0,0,0],["content","config.StratumHost2",["loc",[null,[518,73],[518,96]]],0,0,0,0],["content","config.StratumPort2",["loc",[null,[519,72],[519,95]]],0,0,0,0],["content","config.HttpHost",["loc",[null,[596,70],[596,89]]],0,0,0,0],["content","config.HttpPort",["loc",[null,[596,90],[596,109]]],0,0,0,0]],locals:[],templates:[child0,child1,child2,child3,child4,child5,child6,child7,child8,child9,child10,child11,child12]};})());});
define("open-ethereum-pool/templates/luck", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 19,
              "column": 4
            }
          },
          "moduleName": "open-ethereum-pool/templates/luck.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
          return morphs;
        },
        statements: [["content", "total", ["loc", [null, [14, 10], [14, 19]]], 0, 0, 0, 0], ["inline", "format-number", [["get", "row.luck", ["loc", [null, [15, 26], [15, 34]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [15, 10], [15, 52]]], 0, 0], ["inline", "format-number", [["get", "row.uncleRate", ["loc", [null, [16, 26], [16, 39]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [16, 10], [16, 57]]], 0, 0], ["inline", "format-number", [["get", "row.orphanRate", ["loc", [null, [17, 26], [17, 40]]], 0, 0, 0, 0]], ["style", "percent"], ["loc", [null, [17, 10], [17, 58]]], 0, 0]],
        locals: ["total", "row"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/luck.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "table-responsive");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2, "class", "table table-condensed table-striped");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Blocks");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Shares/Diff");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Uncle Rate");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Orphan Rate");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 3]), 1, 1);
        return morphs;
      },
      statements: [["block", "each-in", [["get", "model.luck", ["loc", [null, [12, 15], [12, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [12, 4], [19, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("open-ethereum-pool/templates/miners", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 93,
                  "column": 40
                },
                "end": {
                  "line": 93,
                  "column": 94
                }
              },
              "moduleName": "open-ethereum-pool/templates/miners.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "m.login", ["loc", [null, [93, 83], [93, 94]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 91,
                "column": 32
              },
              "end": {
                "line": 97,
                "column": 32
              }
            },
            "moduleName": "open-ethereum-pool/templates/miners.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n                                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "m.offline", ["loc", [null, [92, 48], [92, 57]]], 0, 0, 0, 0], "warning"], [], ["loc", [null, [92, 43], [92, 69]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "link-to", ["account", ["get", "m.login", ["loc", [null, [93, 61], [93, 68]]], 0, 0, 0, 0]], ["class", "hash"], 0, null, ["loc", [null, [93, 40], [93, 106]]]], ["inline", "format-hashrate", [["get", "m.hr", ["loc", [null, [94, 58], [94, 62]]], 0, 0, 0, 0]], [], ["loc", [null, [94, 40], [94, 64]]], 0, 0], ["inline", "format-date-locale", [["get", "m.lastBeat", ["loc", [null, [95, 61], [95, 71]]], 0, 0, 0, 0]], [], ["loc", [null, [95, 40], [95, 73]]], 0, 0]],
          locals: ["m"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 20
            },
            "end": {
              "line": 101,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/miners.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Miners");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Login");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Hashrate");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Last Beat");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.miners", ["loc", [null, [91, 40], [91, 52]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [91, 32], [97, 41]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 101,
              "column": 20
            },
            "end": {
              "line": 103,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/miners.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No miners");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 108,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/miners.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-blue");
        dom.setAttribute(el4, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ");
        var el5 = dom.createTextNode("MINER STATISTICS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-7");
        dom.setAttribute(el3, "style", "margin-bottom: 20px;");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Anonymous mining    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                                   \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Stratum and TCP Support ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Efficient Mining pool  ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                  \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("All the statistics are available to all miners");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "label label-success");
        var el6 = dom.createTextNode("OPEN POOL");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                 \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.col-lg-12 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-6");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-blue");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        var el8 = dom.createTextNode("\n                            ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("  HASHES PER SECOND ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-dashboard");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-center");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        var el7 = dom.createTextNode("POOL HASHRATE");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-arrow-circle-right");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "clearfix");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-6");
        var el4 = dom.createTextNode(" \n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" small box ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "small-box bg-green");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "inner ");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "text-white");
        var el8 = dom.createTextNode("\n                           ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                        ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("  MINERS   ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "icon");
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-users");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-footer text-middle");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        var el7 = dom.createTextNode("Active Miners");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "pull-right");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                        \n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        dom.setAttribute(el2, "style", "max-height: 600px; overflow-y: scroll;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-warning");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-users fa-fw");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" DETAILED MINER STATISTICS                    \n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1, 3, 1, 1, 0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3, 3, 1, 1, 0]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [5, 1, 1, 3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "format-hashrate", [["get", "model.hashrate", ["loc", [null, [34, 46], [34, 60]]], 0, 0, 0, 0]], [], ["loc", [null, [34, 28], [34, 62]]], 0, 0], ["content", "model.minersTotal", ["loc", [null, [55, 27], [55, 48]]], 0, 0, 0, 0], ["block", "if", [["get", "model.miners", ["loc", [null, [79, 26], [79, 38]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [79, 20], [103, 27]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/templates/not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "open-ethereum-pool/templates/not-found.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;font-size: 30px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-12 alert alert-danger");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "fa fa-warning");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "style", "font-family: Arvo; margin-top:80px; border-bottom: none;font-size: 30px;");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("If you are looking for your account statistics, you need to submit at least a single share. Sorry no share found for the given Address, Please verify your address and try again");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("         \n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("open-ethereum-pool/templates/payments", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 50,
                  "column": 49
                },
                "end": {
                  "line": 52,
                  "column": 48
                }
              },
              "moduleName": "open-ethereum-pool/templates/payments.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "format-ethusd", [["get", "tx.amount", ["loc", [null, [51, 65], [51, 74]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_usd", ["loc", [null, [51, 75], [51, 103]]], 0, 0, 0, 0]], [], ["loc", [null, [51, 48], [51, 106]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.3+c4330341",
              "loc": {
                "source": null,
                "start": {
                  "line": 52,
                  "column": 48
                },
                "end": {
                  "line": 54,
                  "column": 48
                }
              },
              "moduleName": "open-ethereum-pool/templates/payments.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "format-ethinr", [["get", "tx.amount", ["loc", [null, [53, 65], [53, 74]]], 0, 0, 0, 0], ["get", "model.exchangedata.price_inr", ["loc", [null, [53, 75], [53, 103]]], 0, 0, 0, 0]], [], ["loc", [null, [53, 48], [53, 106]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.3+c4330341",
            "loc": {
              "source": null,
              "start": {
                "line": 46,
                "column": 32
              },
              "end": {
                "line": 64,
                "column": 32
              }
            },
            "moduleName": "open-ethereum-pool/templates/payments.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n                                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createElement("strong");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("em");
            var el4 = dom.createElement("small");
            var el5 = dom.createTextNode("≅ \n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("                                            \n                                            ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n                                        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "class", "hash");
            dom.setAttribute(el3, "rel", "nofollow");
            dom.setAttribute(el3, "target", "_blank");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n                                        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "class", "hash");
            dom.setAttribute(el3, "rel", "nofollow");
            dom.setAttribute(el3, "target", "_blank");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [3]);
            var element2 = dom.childAt(element0, [5, 1]);
            var element3 = dom.childAt(element0, [7, 1]);
            var morphs = new Array(7);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [0]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element1, [2, 0]), 1, 1);
            morphs[3] = dom.createAttrMorph(element2, 'href');
            morphs[4] = dom.createMorphAt(element2, 0, 0);
            morphs[5] = dom.createAttrMorph(element3, 'href');
            morphs[6] = dom.createMorphAt(element3, 0, 0);
            return morphs;
          },
          statements: [["inline", "format-date-locale", [["get", "tx.timestamp", ["loc", [null, [48, 61], [48, 73]]], 0, 0, 0, 0]], [], ["loc", [null, [48, 40], [48, 75]]], 0, 0], ["inline", "format-number", [["get", "tx.formatAmount", ["loc", [null, [49, 64], [49, 79]]], 0, 0, 0, 0]], [], ["loc", [null, [49, 48], [49, 81]]], 0, 0], ["block", "if", [["subexpr", "eq", [["get", "config.Currency", ["loc", [null, [50, 59], [50, 74]]], 0, 0, 0, 0], "USD"], [], ["loc", [null, [50, 55], [50, 81]]], 0, 0]], [], 0, 1, ["loc", [null, [50, 49], [54, 55]]]], ["attribute", "href", ["concat", [["get", "config.ChainAddress", ["loc", [null, [58, 51], [58, 70]]], 0, 0, 0, 0], ["get", "tx.address", ["loc", [null, [58, 74], [58, 84]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "tx.address", ["loc", [null, [58, 132], [58, 146]]], 0, 0, 0, 0], ["attribute", "href", ["concat", [["get", "config.TransactionAddress", ["loc", [null, [61, 51], [61, 76]]], 0, 0, 0, 0], ["get", "tx.tx", ["loc", [null, [61, 80], [61, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "format-tx", [["get", "tx.tx", ["loc", [null, [61, 145], [61, 150]]], 0, 0, 0, 0]], [], ["loc", [null, [61, 133], [61, 152]]], 0, 0]],
          locals: ["tx"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 20
            },
            "end": {
              "line": 68,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/payments.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("Latest Payouts");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "table-responsive");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "table table-condensed table-striped");
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("thead");
          var el4 = dom.createTextNode("\n                                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("tr");
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Time");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Amount");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Address");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                    ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("th");
          var el6 = dom.createTextNode("Tx ID");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                                ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3, 1, 3]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.payments", ["loc", [null, [46, 40], [46, 54]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [46, 32], [64, 41]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3+c4330341",
          "loc": {
            "source": null,
            "start": {
              "line": 68,
              "column": 20
            },
            "end": {
              "line": 70,
              "column": 20
            }
          },
          "moduleName": "open-ethereum-pool/templates/payments.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("No payouts yet");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3+c4330341",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 85,
            "column": 6
          }
        },
        "moduleName": "open-ethereum-pool/templates/payments.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "page-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row align-middle");
        dom.setAttribute(el2, "style", "padding-top:50px;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-5");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-blue");
        dom.setAttribute(el4, "style", "font-family: 'Fredericka the Great'; font-size: 30px;margin-top:50px; ");
        var el5 = dom.createTextNode("PAYMENT STATISTICS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-7");
        dom.setAttribute(el3, "style", "margin-bottom: 20px;");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Pool pays using the Highly Profitable Dynamic PPLNS Reward system    ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                                   \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Current Fool Fee is ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "label label-success");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" only                    \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Payouts are currently credited to miners account");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "label label-success");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "style", "font-family: Arvo; margin-top:50px; border-bottom: none;");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("strong");
        var el6 = dom.createTextNode("Total Payment Send :");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "label label-success");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.col-lg-12 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n        \n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        dom.setAttribute(el2, "style", "max-height: 600px; overflow-y: scroll;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-lg-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-warning");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "fa fa-credit-card-alt fa-fw");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" DETAILED PAYMENT STATISTICS                    \n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n\n\n\n\n\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0]);
        var element5 = dom.childAt(element4, [1, 3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element5, [5, 3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element5, [9, 3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [13, 3]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element4, [3, 1, 1, 3]), 1, 1);
        return morphs;
      },
      statements: [["content", "config.PoolFee", ["loc", [null, [12, 88], [12, 106]]], 0, 0, 0, 0], ["content", "config.PaymentText", ["loc", [null, [16, 116], [16, 138]]], 0, 0, 0, 0], ["content", "model.paymentsTotal", ["loc", [null, [20, 88], [20, 111]]], 0, 0, 0, 0], ["block", "if", [["get", "model.payments", ["loc", [null, [33, 26], [33, 40]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [33, 20], [70, 27]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("open-ethereum-pool/translations/en-in", ["exports"], function (exports) {
  exports["default"] = { "product": { "html": { "info": "<strong>{product}</strong> will cost <em>{price, number, USD}</em> if ordered by {deadline, date, time}" }, "info": "{product} will cost {price, number, USD} if ordered by {deadline, date, time}", "title": "Hello world!" } };
});
define("open-ethereum-pool/translations/en-us", ["exports"], function (exports) {
  exports["default"] = { "product": { "html": { "info": "<strong>{product}</strong> will cost <em>{price, number, USD}</em> if ordered by {deadline, date, time}" }, "info": "{product} will cost {price, number, USD} if ordered by {deadline, date, time}", "title": "Hello world!" } };
});
define('open-ethereum-pool/utils/intl/missing-message', ['exports', 'ember', 'ember-intl/utils/links'], function (exports, _ember, _emberIntlUtilsLinks) {
  exports['default'] = missingMessage;
  var warn = _ember['default'].warn;

  function missingMessage(key, locales) {
    if (!locales) {
      warn('[ember-intl] no locale has been set. Documentation: ' + _emberIntlUtilsLinks['default'].unsetLocale, false, {
        id: 'ember-intl-no-locale-set'
      });
    } else {
      warn('[ember-intl] translation: \'' + key + '\' on locale: \'' + locales.join(', ') + '\' was not found.', false, {
        id: 'ember-intl-missing-translation'
      });
    }

    return 'Missing translation: ' + key;
  }
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('open-ethereum-pool/config/environment', ['ember'], function(Ember) {
  var prefix = 'open-ethereum-pool';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("open-ethereum-pool/app")["default"].create({"ApiUrl":"https://eth.daggerpool.com/","HttpHost":"http://eth-us01.daggerpool.com","HttpPort":40001,"StratumHost":"eth-us01.daggerpool.com","StratumPort":40011,"StratumHost1":"eth-uk01.daggerpool.com","StratumPort1":40011,"NicehashHost":"eth-nh.daggerpool.com","NicehashPost":40021,"PoolFee":"0.99%","PayoutThreshold":"0.01","ShareDifficulty":"4000000000","Currency":"USD","CoinName":"Ethereum","CoinShortName":"ETH","PaymentText":"every 2 hours","SupportMail":"helpdesk@daggerpool.com","SupportHelpdesk":"http://helpdesk.daggerpool.com","WebsiteName":"eth.daggerpool.com","ChainAddress":"https://etherscan.io/address/","TransactionAddress":"https://etherscan.io/tx/","UncleAddress":"https://etherscan.io/uncle/","BlockAddress":"https://etherscan.io/block/","TwitterURL":"https://twitter.com/","TwitterHash":"daggerpool_com","BlockTime":15,"name":"open-ethereum-pool","version":"0.0.0+fb9b5fdc"});
}

/* jshint ignore:end */
//# sourceMappingURL=open-ethereum-pool.map
