var _0x2e71e2 = _0x3903;
function _0x3903(_0x2b4ecc, _0x3e339f) {
    var _0x3f6bf0 = _0x60e4();
    return _0x3903 = function(_0x5ae1d0, _0x595edf) {
        _0x5ae1d0 = _0x5ae1d0 - 0xd2;
        var _0x9e8651 = _0x3f6bf0[_0x5ae1d0];
        return _0x9e8651;
    }
    ,
    _0x3903(_0x2b4ecc, _0x3e339f);
}
(function(_0x1c6bf2, _0x6ee1db) {
    var _0x3b54fc = _0x3903
      , _0x36f563 = _0x1c6bf2();
    while (!![]) {
        try {
            var _0x53c899 = parseInt(_0x3b54fc(0x6f8)) / 0x1 * (-parseInt(_0x3b54fc(0x104)) / 0x2) + parseInt(_0x3b54fc(0x7a8)) / 0x3 * (parseInt(_0x3b54fc(0x278)) / 0x4) + -parseInt(_0x3b54fc(0x78d)) / 0x5 + -parseInt(_0x3b54fc(0x328)) / 0x6 + -parseInt(_0x3b54fc(0x2cc)) / 0x7 + -parseInt(_0x3b54fc(0x61e)) / 0x8 * (parseInt(_0x3b54fc(0x2c1)) / 0x9) + -parseInt(_0x3b54fc(0x7c0)) / 0xa * (-parseInt(_0x3b54fc(0x5a0)) / 0xb);
            if (_0x53c899 === _0x6ee1db)
                break;
            else
                _0x36f563['push'](_0x36f563['shift']());
        } catch (_0xb51c5e) {
            _0x36f563['push'](_0x36f563['shift']());
        }
    }
}(_0x60e4, 0xbb4cf));
var GoogleAuth, zE;
window['sectorSystem'] = {
    'settings': {
        'lineWidth': 0.15,
        'lineColor': 0xff0000,
        'lineAlpha': 0.3,
        'backgroundColor': 0x0,
        'backgroundAlpha': 0.6,
        'sectorTextStyle': {
            'fontFamily': _0x2e71e2(0x2ac),
            'fontSize': 0xe,
            'fill': 0xffffff
        },
        'quarterTextStyle': {
            'fontFamily': 'Arial',
            'fontSize': 0x14,
            'fill': 0xffffff
        },
        'showLines': !![]
    },
    'state': {
        'container': null,
        'graphics': null,
        'isActive': ![],
        'currentMode': null,
        'texts': [],
        'initialized': ![],
        'renderContainer': null,
        'restored': ![]
    },
    'findRenderContainer': function() {
        var _0x11e21f = _0x2e71e2;
        if (this[_0x11e21f(0x5ce)][_0x11e21f(0x35a)])
            return this[_0x11e21f(0x5ce)][_0x11e21f(0x35a)];
        if (window['laserGraphics']?.[_0x11e21f(0x53f)])
            return this[_0x11e21f(0x5ce)][_0x11e21f(0x35a)] = window['laserGraphics'][_0x11e21f(0x53f)],
            this[_0x11e21f(0x5ce)][_0x11e21f(0x35a)];
        if (window[_0x11e21f(0x6ff)]?.['Mh']?.['Lh']?.['Wf'])
            return this['state'][_0x11e21f(0x35a)] = window[_0x11e21f(0x6ff)]['Mh']['Lh']['Wf'],
            this['state'][_0x11e21f(0x35a)];
        const _0x376ded = (_0x27b2e4, _0x21e223=new Set(), _0x118a9f=0x0) => {
            var _0x5cc08c = _0x11e21f;
            if (!_0x27b2e4 || typeof _0x27b2e4 !== _0x5cc08c(0x44d) || _0x118a9f > 0x3 || _0x21e223[_0x5cc08c(0x27b)](_0x27b2e4))
                return null;
            _0x21e223[_0x5cc08c(0x5fb)](_0x27b2e4);
            if (_0x27b2e4['Wf']instanceof PIXI[_0x5cc08c(0x3b5)])
                return this['state'][_0x5cc08c(0x35a)] = _0x27b2e4['Wf'],
                _0x27b2e4['Wf'];
            for (let _0x3a8e4f in _0x27b2e4) {
                if (_0x3a8e4f !== _0x5cc08c(0x53f) && _0x3a8e4f !== _0x5cc08c(0x7ac) && _0x27b2e4[_0x3a8e4f] && typeof _0x27b2e4[_0x3a8e4f] === _0x5cc08c(0x44d)) {
                    const _0x40e4df = _0x376ded(_0x27b2e4[_0x3a8e4f], _0x21e223, _0x118a9f + 0x1);
                    if (_0x40e4df)
                        return _0x40e4df;
                }
            }
            return null;
        }
        ;
        return _0x376ded(window[_0x11e21f(0x6ff)]);
    },
    'cachedRadius': 0x0,
    'lastRadiusTime': 0x0,
    'getRadius': function() {
        var _0x1402cd = _0x2e71e2;
        const _0x53485d = Date['now']();
        return _0x53485d - this[_0x1402cd(0x540)] > 0x3e8 && (this['cachedRadius'] = window[_0x1402cd(0x6ff)]?.['Mh']?.['Qh']?.['gh'] || window[_0x1402cd(0x6ff)]?.['Mh']?.['Lh']?.['Qh']?.['gh'] || 0x1f4,
        this['lastRadiusTime'] = _0x53485d),
        this[_0x1402cd(0x235)];
    },
    'clearTexts': function() {
        var _0x142df1 = _0x2e71e2;
        this[_0x142df1(0x5ce)]['texts'][_0x142df1(0x151)](_0x3b4424 => {
            var _0x24aa1c = _0x142df1;
            _0x3b4424 && _0x3b4424[_0x24aa1c(0x53f)] && _0x3b4424[_0x24aa1c(0x53f)][_0x24aa1c(0x23c)](_0x3b4424);
        }
        ),
        this['state'][_0x142df1(0x617)] = [];
    },
    'initDrawing': function(_0x3c5de5) {
        var _0x2c62b0 = _0x2e71e2;
        return this[_0x2c62b0(0x4be)](),
        this[_0x2c62b0(0x5ce)][_0x2c62b0(0x37a)]['clear'](),
        this['state'][_0x2c62b0(0x37a)]['lineStyle'](this[_0x2c62b0(0x1f0)]['lineWidth'], this[_0x2c62b0(0x1f0)][_0x2c62b0(0x3d4)], this[_0x2c62b0(0x1f0)][_0x2c62b0(0x523)]),
        this['state'][_0x2c62b0(0x37a)][_0x2c62b0(0x33a)](this[_0x2c62b0(0x1f0)][_0x2c62b0(0x65c)], this[_0x2c62b0(0x1f0)][_0x2c62b0(0x5ac)]),
        this[_0x2c62b0(0x5ce)][_0x2c62b0(0x37a)][_0x2c62b0(0x21e)](0x0, 0x0, _0x3c5de5),
        this[_0x2c62b0(0x5ce)][_0x2c62b0(0x37a)]['endFill'](),
        _0x3c5de5;
    },
    'drawSectors': function() {
        var _0x27a3ce = _0x2e71e2;
        const _0x3fa712 = this[_0x27a3ce(0x5ca)](this[_0x27a3ce(0x47d)]())
          , _0x560d15 = _0x3fa712 / 0x3;
        if (this[_0x27a3ce(0x1f0)][_0x27a3ce(0x1d4)]) {
            for (let _0xf59ef7 = 0x1; _0xf59ef7 < 0x3; _0xf59ef7++) {
                this[_0x27a3ce(0x5ce)][_0x27a3ce(0x37a)][_0x27a3ce(0x21e)](0x0, 0x0, _0x3fa712 - _0xf59ef7 * _0x560d15);
            }
            for (let _0x55fbd4 = 0x0; _0x55fbd4 < 0x4; _0x55fbd4++) {
                const _0x803ce6 = _0x55fbd4 * Math['PI'] / 0x2;
                this[_0x27a3ce(0x5ce)][_0x27a3ce(0x37a)][_0x27a3ce(0x602)](0x0, 0x0),
                this[_0x27a3ce(0x5ce)][_0x27a3ce(0x37a)]['lineTo'](Math[_0x27a3ce(0x2b9)](_0x803ce6) * _0x3fa712, Math[_0x27a3ce(0x3c9)](_0x803ce6) * _0x3fa712);
            }
        }
        for (let _0x395465 = 0x0; _0x395465 < 0x4; _0x395465++) {
            const _0x224770 = _0x395465 * Math['PI'] / 0x2;
            for (let _0x9a75ae = 0x0; _0x9a75ae < 0x3; _0x9a75ae++) {
                const _0x498cef = _0x3fa712 - (_0x9a75ae * _0x560d15 + _0x560d15 / 0x2)
                  , _0x406242 = _0x224770 + Math['PI'] / 0x4
                  , _0x582e1e = ['S', 'D', 'F'][_0x9a75ae] + (_0x395465 + 0x1)
                  , _0x49719f = new PIXI['Text'](_0x582e1e,this[_0x27a3ce(0x1f0)][_0x27a3ce(0x47e)]);
                _0x49719f['anchor'][_0x27a3ce(0x421)](0.5),
                _0x49719f[_0x27a3ce(0x627)][_0x27a3ce(0x421)](Math[_0x27a3ce(0x2b9)](_0x406242) * _0x498cef, Math[_0x27a3ce(0x3c9)](_0x406242) * _0x498cef),
                this[_0x27a3ce(0x5ce)][_0x27a3ce(0x297)][_0x27a3ce(0x448)](_0x49719f),
                this[_0x27a3ce(0x5ce)][_0x27a3ce(0x617)][_0x27a3ce(0x731)](_0x49719f);
            }
        }
    },
    'drawQuarters': function() {
        var _0x435410 = _0x2e71e2;
        const _0x449a18 = this[_0x435410(0x5ca)](this[_0x435410(0x47d)]());
        this[_0x435410(0x1f0)][_0x435410(0x1d4)] && (this[_0x435410(0x5ce)]['graphics'][_0x435410(0x602)](-_0x449a18, 0x0),
        this['state']['graphics'][_0x435410(0x5fc)](_0x449a18, 0x0),
        this[_0x435410(0x5ce)]['graphics']['moveTo'](0x0, -_0x449a18),
        this[_0x435410(0x5ce)]['graphics'][_0x435410(0x5fc)](0x0, _0x449a18)),
        [{
            'n': _0x435410(0x1af),
            'x': 0x1,
            'y': -0x1
        }, {
            'n': _0x435410(0x237),
            'x': -0x1,
            'y': -0x1
        }, {
            'n': _0x435410(0x67f),
            'x': -0x1,
            'y': 0x1
        }, {
            'n': _0x435410(0x6fa),
            'x': 0x1,
            'y': 0x1
        }][_0x435410(0x151)](_0x1b49f8 => {
            var _0x819810 = _0x435410;
            const _0x35c42a = new PIXI[(_0x819810(0x2e7))](_0x1b49f8['n'],this['settings'][_0x819810(0x5c5)]);
            _0x35c42a[_0x819810(0x48d)][_0x819810(0x421)](0.5),
            _0x35c42a[_0x819810(0x627)]['set'](_0x1b49f8['x'] * _0x449a18 / 0x3, _0x1b49f8['y'] * _0x449a18 / 0x3),
            this['state']['container']['addChild'](_0x35c42a),
            this[_0x819810(0x5ce)][_0x819810(0x617)][_0x819810(0x731)](_0x35c42a);
        }
        );
    },
    'initGraphics': function() {
        var _0x166d54 = _0x2e71e2;
        if (this[_0x166d54(0x5ce)][_0x166d54(0x76d)])
            return !![];
        const _0x3efa7b = this[_0x166d54(0x3c3)]();
        if (!_0x3efa7b)
            return ![];
        return this['state'][_0x166d54(0x297)] = new PIXI[(_0x166d54(0x3b5))](),
        this[_0x166d54(0x5ce)]['graphics'] = new PIXI[(_0x166d54(0x2b5))](),
        this['state']['container'][_0x166d54(0x448)](this[_0x166d54(0x5ce)][_0x166d54(0x37a)]),
        _0x3efa7b[_0x166d54(0x448)](this[_0x166d54(0x5ce)][_0x166d54(0x297)]),
        this[_0x166d54(0x5ce)]['container'][_0x166d54(0x67c)] = 0xa,
        this[_0x166d54(0x5ce)][_0x166d54(0x297)][_0x166d54(0x712)] = ![],
        this[_0x166d54(0x5ce)]['initialized'] = !![],
        !![];
    },
    'toggleMode': function(_0x341947) {
        var _0x4a51c0 = _0x2e71e2;
        if (!this['initGraphics']())
            return;
        if (this[_0x4a51c0(0x5ce)]['isActive'] && this[_0x4a51c0(0x5ce)][_0x4a51c0(0x4e8)] === _0x341947) {
            this[_0x4a51c0(0x5ce)][_0x4a51c0(0x297)][_0x4a51c0(0x712)] = ![],
            this['state'][_0x4a51c0(0x392)] = ![],
            this[_0x4a51c0(0x5ce)][_0x4a51c0(0x4e8)] = null;
            document[_0x4a51c0(0x44f)]('sector_system_toggle') && (document[_0x4a51c0(0x44f)](_0x4a51c0(0x128))['checked'] = ![]);
            this[_0x4a51c0(0xe7)]();
            return;
        }
        this[_0x4a51c0(0x5ce)]['isActive'] = !![],
        this[_0x4a51c0(0x5ce)][_0x4a51c0(0x4e8)] = _0x341947,
        this[_0x4a51c0(0x5ce)][_0x4a51c0(0x297)][_0x4a51c0(0x712)] = !![],
        document['getElementById']('sector_system_toggle') && (document['getElementById'](_0x4a51c0(0x128))[_0x4a51c0(0x274)] = !![]),
        _0x341947 === _0x4a51c0(0x282) ? this[_0x4a51c0(0x52f)]() : this[_0x4a51c0(0x609)](),
        this[_0x4a51c0(0xe7)]();
    },
    'setupKeyboardEvents': function() {
        var _0x5b2c03 = _0x2e71e2;
        const _0x4d503a = {
            0x53: () => this['toggleMode'](_0x5b2c03(0x282)),
            0xbb: () => this[_0x5b2c03(0x5da)]('sectors'),
            0x3d: () => this[_0x5b2c03(0x5da)](_0x5b2c03(0x282)),
            0x58: () => this[_0x5b2c03(0x5da)](_0x5b2c03(0x3b6))
        };
        document['addEventListener']('keydown', _0x46538f => {
            var _0x23f3eb = _0x5b2c03;
            const _0x252dad = _0x46538f[_0x23f3eb(0x417)] || _0x46538f['which'];
            _0x4d503a[_0x252dad] && (_0x4d503a[_0x252dad](),
            typeof this[_0x23f3eb(0x105)] === 'function' && this[_0x23f3eb(0x105)]());
        }
        );
    },
    'saveSettings': function() {
        var _0x289ae7 = _0x2e71e2;
        try {
            localStorage[_0x289ae7(0x434)](_0x289ae7(0x4dc), JSON[_0x289ae7(0x6b1)](this[_0x289ae7(0x1f0)])),
            localStorage[_0x289ae7(0x434)](_0x289ae7(0x5ef), this['state'][_0x289ae7(0x392)] ? '1' : '0'),
            this[_0x289ae7(0x5ce)][_0x289ae7(0x4e8)] && localStorage[_0x289ae7(0x434)]('sectorSystemMode', this[_0x289ae7(0x5ce)][_0x289ae7(0x4e8)]),
            console[_0x289ae7(0x470)](_0x289ae7(0x6ac), {
                'active': this[_0x289ae7(0x5ce)]['isActive'],
                'mode': this[_0x289ae7(0x5ce)][_0x289ae7(0x4e8)]
            });
        } catch (_0x3e4d47) {
            console[_0x289ae7(0x39e)](_0x289ae7(0x241), _0x3e4d47);
        }
    },
    'loadSettings': function() {
        var _0x46206e = _0x2e71e2;
        try {
            const _0x16db7f = JSON['parse'](localStorage[_0x46206e(0x3af)]('sectorSystemSettings'));
            _0x16db7f && (this[_0x46206e(0x1f0)] = {
                ...this['settings'],
                ..._0x16db7f
            });
            const _0x351913 = localStorage[_0x46206e(0x3af)]('sectorSystemActive') === '1';
            let _0x2f37c9 = localStorage['getItem'](_0x46206e(0x5cf));
            !_0x2f37c9 && (_0x2f37c9 = _0x46206e(0x282)),
            this[_0x46206e(0x39b)] = {
                'isActive': _0x351913,
                'currentMode': _0x2f37c9
            };
        } catch (_0x5ac06d) {
            console[_0x46206e(0x39e)](_0x46206e(0x40c), _0x5ac06d);
        }
    },
    'applySettings': function() {
        var _0x58f3fb = _0x2e71e2;
        this[_0x58f3fb(0x5ce)][_0x58f3fb(0x392)] && this['state'][_0x58f3fb(0x4e8)] && (this['state'][_0x58f3fb(0x4e8)] === 'sectors' ? this['drawSectors']() : this[_0x58f3fb(0x609)]());
    },
    'init': function() {
        var _0x21b446 = _0x2e71e2;
        if (typeof PIXI === _0x21b446(0x111)) {
            setTimeout( () => this['init'](), 0x3e8);
            return;
        }
        this['loadSettings']();
        const _0x57305e = this[_0x21b446(0x57e)]();
        this[_0x21b446(0x215)]();
        if (!_0x57305e) {
            setTimeout( () => this[_0x21b446(0x5dc)](), 0x3e8);
            return;
        }
        setTimeout( () => {
            var _0x1ace71 = _0x21b446;
            this[_0x1ace71(0x39b)] && this[_0x1ace71(0x39b)][_0x1ace71(0x392)] && (this['state'][_0x1ace71(0x392)] = !![],
            this['state']['currentMode'] = this[_0x1ace71(0x39b)]['currentMode'],
            this[_0x1ace71(0x5ce)][_0x1ace71(0x297)][_0x1ace71(0x712)] = !![],
            this[_0x1ace71(0x5ce)][_0x1ace71(0x4e8)] === _0x1ace71(0x282) ? this[_0x1ace71(0x52f)]() : this[_0x1ace71(0x609)](),
            document['getElementById']('sector_system_toggle') && (document[_0x1ace71(0x44f)](_0x1ace71(0x128))[_0x1ace71(0x274)] = !![]),
            this[_0x1ace71(0x5ce)][_0x1ace71(0x412)] = !![],
            $(_0x1ace71(0x5b7))[_0x1ace71(0x454)] > 0x0 && this['initUserInterface']());
        }
        , 0x3e8);
    },
    'initUserInterface': function() {
        var _0x5c78cd = _0x2e71e2;
        function _0x3dd405(_0x24d863) {
            var _0x6054c9 = _0x3903;
            return '#' + _0x24d863['toString'](0x10)[_0x6054c9(0x66c)](0x6, '0');
        }
        function _0x58a492(_0x4c3f97) {
            var _0x3fe4e1 = _0x3903;
            return parseInt(_0x4c3f97[_0x3fe4e1(0xe3)]('#', ''), 0x10);
        }
        !this[_0x5c78cd(0x5ce)][_0x5c78cd(0x412)] && this[_0x5c78cd(0x39b)] && this[_0x5c78cd(0x39b)][_0x5c78cd(0x392)] && (console[_0x5c78cd(0x470)]('Restoring\x20state\x20from\x20UI\x20initialization'),
        this['toggleMode'](this['savedState'][_0x5c78cd(0x4e8)] || 'sectors'),
        this[_0x5c78cd(0x5ce)][_0x5c78cd(0x412)] = !![]);
        const _0x1fa9a5 = () => {
            var _0x23d56b = _0x5c78cd;
            $(_0x23d56b(0x5b7))[_0x23d56b(0x458)](_0x23d56b(0x274), this['state'][_0x23d56b(0x392)]),
            $(_0x23d56b(0x407))[_0x23d56b(0xfa)](this[_0x23d56b(0x5ce)]['currentMode'] || _0x23d56b(0x282)),
            $(_0x23d56b(0x703))[_0x23d56b(0xfa)](_0x3dd405(this['settings']['backgroundColor'])),
            $(_0x23d56b(0x429))[_0x23d56b(0xfa)](_0x3dd405(this[_0x23d56b(0x1f0)][_0x23d56b(0x3d4)])),
            $(_0x23d56b(0x462))[_0x23d56b(0xfa)](this['settings'][_0x23d56b(0x5ac)] * 0x64),
            $(_0x23d56b(0x49b))[_0x23d56b(0x2a7)](Math['round'](this[_0x23d56b(0x1f0)][_0x23d56b(0x5ac)] * 0x64) + '%'),
            $(_0x23d56b(0x660))['val'](this[_0x23d56b(0x1f0)]['lineAlpha'] * 0x64),
            $(_0x23d56b(0x409))[_0x23d56b(0x2a7)](Math[_0x23d56b(0x355)](this[_0x23d56b(0x1f0)][_0x23d56b(0x523)] * 0x64) + '%'),
            $(_0x23d56b(0x7c2))[_0x23d56b(0x458)](_0x23d56b(0x274), this['settings'][_0x23d56b(0x1d4)]),
            !this[_0x23d56b(0x1f0)][_0x23d56b(0x1d4)] ? $(_0x23d56b(0xe2))[_0x23d56b(0x368)](0xc8) : $(_0x23d56b(0xe2))[_0x23d56b(0xd3)](0xc8),
            this[_0x23d56b(0x5ce)][_0x23d56b(0x392)] ? $(_0x23d56b(0x7b5))[_0x23d56b(0xd3)](0x12c) : $('#sector_settings_panel')[_0x23d56b(0x368)](0xc8);
        }
        ;
        $(_0x5c78cd(0x5b7))[_0x5c78cd(0x44e)](_0x5c78cd(0x529))['on']('change', function() {
            var _0x2c2376 = _0x5c78cd;
            const _0x44d216 = $(this)[_0x2c2376(0x458)]('checked');
            if (_0x44d216) {
                const _0x4796df = $('#sector_display_mode')[_0x2c2376(0xfa)]() || _0x2c2376(0x282);
                window[_0x2c2376(0x420)][_0x2c2376(0x5da)](_0x4796df);
            } else
                window['sectorSystem'][_0x2c2376(0x5ce)][_0x2c2376(0x392)] && window[_0x2c2376(0x420)][_0x2c2376(0x5da)](window[_0x2c2376(0x420)][_0x2c2376(0x5ce)]['currentMode']);
            _0x1fa9a5();
        }),
        $(_0x5c78cd(0x407))['off'](_0x5c78cd(0x529))['on']('change', function() {
            var _0x593dfa = _0x5c78cd;
            const _0x2fdea1 = $(this)[_0x593dfa(0xfa)]();
            window[_0x593dfa(0x420)][_0x593dfa(0x5ce)][_0x593dfa(0x392)] && (window['sectorSystem']['toggleMode'](window[_0x593dfa(0x420)]['state'][_0x593dfa(0x4e8)]),
            window['sectorSystem']['toggleMode'](_0x2fdea1),
            _0x1fa9a5());
        }),
        $(_0x5c78cd(0x703))[_0x5c78cd(0x44e)](_0x5c78cd(0x529))['on'](_0x5c78cd(0x529), function() {
            var _0xc6d0e9 = _0x5c78cd;
            window['sectorSystem'][_0xc6d0e9(0x1f0)][_0xc6d0e9(0x65c)] = _0x58a492($(this)['val']()),
            window[_0xc6d0e9(0x420)]['applySettings'](),
            window[_0xc6d0e9(0x420)]['saveSettings']();
        }),
        $(_0x5c78cd(0x429))[_0x5c78cd(0x44e)]('change')['on'](_0x5c78cd(0x529), function() {
            var _0x43ff69 = _0x5c78cd;
            window['sectorSystem']['settings']['lineColor'] = _0x58a492($(this)[_0x43ff69(0xfa)]()),
            window[_0x43ff69(0x420)][_0x43ff69(0x72b)](),
            window['sectorSystem'][_0x43ff69(0xe7)]();
        }),
        $('#sector_bg_opacity')[_0x5c78cd(0x44e)]('input')['on'](_0x5c78cd(0x432), function() {
            var _0x4f28bb = _0x5c78cd;
            const _0x4a8e86 = parseInt($(this)[_0x4f28bb(0xfa)]()) / 0x64;
            window[_0x4f28bb(0x420)]['settings'][_0x4f28bb(0x5ac)] = _0x4a8e86,
            $(_0x4f28bb(0x49b))[_0x4f28bb(0x2a7)](Math['round'](_0x4a8e86 * 0x64) + '%'),
            window[_0x4f28bb(0x420)][_0x4f28bb(0x72b)](),
            window[_0x4f28bb(0x420)][_0x4f28bb(0xe7)]();
        }),
        $('#sector_line_opacity')[_0x5c78cd(0x44e)]('input')['on']('input', function() {
            var _0x447d6c = _0x5c78cd;
            const _0x52e9d8 = parseInt($(this)[_0x447d6c(0xfa)]()) / 0x64;
            window['sectorSystem'][_0x447d6c(0x1f0)][_0x447d6c(0x523)] = _0x52e9d8,
            $('#sector_line_opacity_value')[_0x447d6c(0x2a7)](Math[_0x447d6c(0x355)](_0x52e9d8 * 0x64) + '%'),
            window[_0x447d6c(0x420)]['applySettings'](),
            window[_0x447d6c(0x420)][_0x447d6c(0xe7)]();
        }),
        $(_0x5c78cd(0x7c2))['off'](_0x5c78cd(0x529))['on'](_0x5c78cd(0x529), function() {
            var _0x537956 = _0x5c78cd;
            window[_0x537956(0x420)][_0x537956(0x1f0)][_0x537956(0x1d4)] = $(this)[_0x537956(0x458)](_0x537956(0x274)),
            !window[_0x537956(0x420)][_0x537956(0x1f0)][_0x537956(0x1d4)] ? $(_0x537956(0xe2))[_0x537956(0x368)](0xc8) : $(_0x537956(0xe2))[_0x537956(0xd3)](0xc8),
            window['sectorSystem']['applySettings'](),
            window[_0x537956(0x420)][_0x537956(0xe7)]();
        }),
        _0x1fa9a5();
    }
};
function _0x60e4() {
    var _0x27b4e3 = ['/login', 'baseTexture', 'dynamic', 'highScore', 'target=\x22_black\x22\x20href', 'offsetWidth', '#food_size_slider', 'enabled', 'transition', '/images/cors-proxy.phpimg=cursors/27.png', 'Api_listServer', '0xffffff', '.servers-peru,\x20.servers-mexico,\x20.servers-eeuu,\x20.servers-canada,\x20.servers-germania,\x20.servers-francia,\x20.servers-singapur,\x20.servers-japon,\x20.servers-australia,\x20.servers-granbretana', '#loa831pibur0w4gv', '#fff', 'container_count', 'imageSrc', 'https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54', 'onmessage', '.settings-sidebar,\x20.settings-layout,\x20.settings-content', 'ccg_2', '#mobile-tab-item', '#kill_name_position', 'clientY', 'F_bg', 'rgba(0,\x200,\x200,\x200.7)', '#mm-player-info', 'client_id', 'success', '#popup-menu-coins-val', '#store-item-price', '0x0', 'hidden', 'https://25servan.github.io/Worm25/api/users.php', '❌\x20خطأ\x20في\x20تعديل\x20دالة\x20عرض\x20اسم\x20السيرفر:', '54287PCtzqg', '#congrats-bg', 'WFT\x204', 'dropShadowDistance', '_0x4c9ec5', '/images/cors-proxy.phpimg=flg/mx.png', '/wormy', 'ooo', '/pub/leaders', 'loginUser', 'precision\x20mediump\x20float;\x20attribute\x20vec2\x20', '#sector_bg_color', 'Nightdots', 'pageX', 'SaveGameXT', 'touchmove', 'stopPropagation', 'performance-monitor-style', 'isSignedIn', 'AIP_COMPLETE', 'message', '<ul\x20class=\x22dd-options\x22></ul>', 'sel_country', 'ccg', '_cpuMonitoringInterval', 'gdprConsent', 'visible', 'skins', '<br/>', '/get_store.phpitem=bg_sky_8.png', 'Estado\x20inicial\x20recibido:', 'from', '#final-continue', '#e03e42', 'textDict', 'currentFavSkinIndex', '#00a8ff', 'cpuUsage', 'signIn', 'window', 'padEnd', '<div>', '.dd-pointer', '#op_wft', 'arraybuffer', 'deltaY', '#modal_wft\x20.modal-content', 'PortionTransparent', 'index.game.result.place.i', 'v_z', 'ready', 'applySettings', 'writeText', 'DataView', 'mouthVariantArray', 'not_connect', 'glassesUnknown', 'push', 'event', 'keepJSONItemsOnTop', 'nonbuyable', '5px\x2010px', '1000', 'port_id_s', '-o-transform', '\x20dd-image-right', 'not_empty', 'div_speed', 'Spray\x20Can\x20Cursor', '\x22><img\x20src=\x22data:\x20image/svg+xml;\x20base64,\x20PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\x22/><span>', '_end', 'wftsw', '<div\x20id=\x22custom-tooltip\x22\x20style=\x22display:\x20none;\x20position:\x20absolute;\x20z-index:\x209999;\x20background:\x20rgba(0,0,0,0.9);\x20padding:\x205px\x2010px;\x20border-radius:\x204px;\x20font-size:\x2010px;\x20pointer-events:\x20none;\x20text-align:\x20center;\x22><div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x22><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20right;\x22>TimMap\x20Servers\x20</span><span\x20style=\x22color:\x20white;\x20margin:\x200\x205px;\x22>⟷\x20</span><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20left;\x22>WormWorld\x20Servers</span></div></div>', 'headshot', 'blanco', '#f9cc0b', 'bg_sky__2.png', '.reset-btn', '\x22\x20style=\x22max-width:\x20200px;\x20width:\x20200px\x20!important;\x20height:\x2022px\x20!important;\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20margin-right:\x2010px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27', '#mm-advice-cont', 'which', 'coins_7000', 's_n', '#pulse_effects_enabled', '.profile-user', 'value1_kill', 'Press\x20\x27(\x202\x20)\x27\x20to\x20toggle\x20hats\x20during\x20gameplay', 'custom_wear', 'cpuDisplay', '/get_store.phpitem=moi_2.png', '1\x20/\x20span\x202', 'addAttribute', '🟢\x20Gönderildi\x20HS:\x20', '_skin_g', 'anonymous', 'mouthUnknown', 'fadeIn', 'mouseenter', 'Beetle\x20Cursor', '/get_store.phpitem=mo_4.png', 'hatToggleButton', 'head', 'ARENA', 'bind', 'player', 'serverUrl', 'glow', 'El\x20jugador\x20', '\x22\x20style=\x22cursor:\x20pointer;\x20border:\x202px\x20solid\x20', 'audio', 'totalPlayTimeSec', 'done', 'https://wormx.store/2025/excel/name_banned_text.php', '#store-view-canv', 'document', 'beforeunload', '<button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27', 'initialized', '/get_store.phpitem=mo_2.png', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Pizza\x20Slice\x20Cursor\x20', 'item', '),\x20default', 'user_data', 'black', '#custom-tooltip', '/sdk.js', 'top', ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20margin:\x205px;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', 'hat-info-text', 'ccc', 'https://apis.google.com/js/platform.js', 'measureCpuUsage', 'div_killmsg', '/images/server-flags/tur.png', '270px', '#profile-level', 'tint', 'Rose\x20Branch\x20Cursor', '#markup-wrap', 'isFpsVisible', '22px', '[By\x20YıLdo\x20OWNER]', 'sort', 'textureDict', '#mm-action-guest', '#portion_size_value', 'pk6', 'empty', '4308915GamsJO', 'died', 'readAsText', ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20text-align:\x20center;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', '\x22\x20class=\x22toaster\x20toaster-consent-accepted\x22><img\x20class=\x22toaster-consent-accepted-logo\x22\x20src=\x22', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'mm-params-nickname', 'authResponse', 'server-status', '.flag', '/images/cors-proxy.phpimg=cursors/11.png', 'id_user', '#fileSkin', '.dd-option-text', '#final-score', 'kill', '_request', 'label_hs', '/images/bg-pattern-pow2-ARENA.png', 'data-server-name', 'hover', 'TEAM2', 'resource', 'removeHatButtons', '0lt2', '#popup-delete-account', 'FoodShadow', '3009QKyKBS', 'userAgent', 'dd-click-off-close', '#d4db19', 'children', '✅\x20تم\x20تعديل\x20دالة\x20عرض\x20اسم\x20السيرفر\x20بنجاح', 'imagesrc', 'VjI5eWJXRjBaUzVwYnc9PQ==', 'update', 'longitude', 'index.game.result.continue', 'ZDI5eWJYVnc=', 'destroy', '#sector_settings_panel', 'font', 'decoder', '#zoom_speed_slider', '#aaa', 'note', 's_h', 'click.ddslick', 'data-region-flag', '#mm-skin-next', 'white', '30WIhLgB', 'img_i_2', '#sector_show_lines', '#4CAF50', 'm_2', 'trigger', '0x2', 'https://wormx.store/images/arkaplan/bg1.jpg', 'zoom_speed', 'index.game.result.placeInBoard', 'openSettingsModal', '__proto__', 'pDc', 'wftPulseEnabled', 'Magic\x20Wand\x20with\x20Golden\x20Star\x20Cursor', 'eyesId', 'flag\x20', ';\x20void\x20main(){', '\x22\x20style=\x22width:\x20100%;\x20height:\x2065px;\x20object-fit:\x20cover;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x205px;\x20font-size:\x2010px;\x20color:\x20#ffffff;\x22>', 'slideDown', 'webWidget', 'unshift', '#popup-login-fb', 'startCpuMonitoring', '\x22\x20class=\x22toaster\x20toaster-coins\x22><img\x20class=\x22toaster-coins-img\x22\x20alt=\x22Wormate\x20Coin\x22\x20src=\x22/images/coin_320.png\x22\x20/><div\x20class=\x22toaster-coins-val\x22>', 'WellDone\x20!!', '82px', 'Error\x20loading\x20banned\x20words:', '#profile-stat-registrationDate', '.description-text', 'join', 'delete', '420px', '\x20\x20\x20\x20<button\x20id=\x22op_wft\x22\x20class=\x22op_wft\x22>', '#sector_lines_options', 'replace', '8px', 'min', 'playerY', 'saveSettings', 'portion', '#wear-view', 'getElementsByTagName', '#settings-show-names-switch', '/get_store.phpitem=bg_sky_7.png', '<img\x20class=\x22dd-selected-image', 'hatInfoText', 'toString', 'data-index', 'kills', 'data:image/png;base64,', 'c_5', '#mm-skin-over-button-list', 'visibility', 'charAt', 'performance-monitor-toggle', '#profile-stat-kills', 'split', 'val', 'shown', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '#fff009', 'addEventListener', 'طيبة', 'WFT', 'opera', 'shared', 'search', '8udgOcI', 'initUserInterface', '<span></span>', 'attr', '#laser_opacity_slider', '#Laserup', 'table', '<div\x20id=\x27modal_backdrop\x27></div>', 'velocity_ability', 'bg_sky_7.png', '-moz-transform', '000000', 'monsterKillSound', 'undefined', 'adplayer', '#final-caption', '📤\x20Veri\x20gönderiliyor:', '#open-favorites-btn', 'translationMatrix', 'onwheel', '/images/cors-proxy.phpimg=cursors/17.png', 'hskill', 'mousemove', 'game-wrap', 'Pink\x20Octopus\x20Cursor', 'call', '#css-ddslick', 'preroll', '#portion_aura_slider', '_complete', 'height', 'Crystalblue', 'size', '\x20copied!\x27));\x22>Copy</button>', '1eaom01c3pxu9wd3', '#mm-menu-cont', 'sector_system_toggle', 'addSelectedHatButton', 'indexOf', 'Favorite\x20Hats', '</span><a\x20class=\x22toaster-consent-accepted-link\x22\x20href=\x22/privacy-policy\x22>', 'hatCyclingInitialized', '470px', '<input\x20type=\x22text\x22\x20value=\x22', '#profile-experience-bar', '..9\x20..', 'currentUser', '9998', 'sfxEnabled', 'status', '#e74a94', 'game', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'getRegistrations', '.server-number', '\x22></div>', 'uri', 'account_type', 'pointer', 'index.game.social.shareResult.caption', 'splice', 'arc', '/dynamic/assets/registry.json', '32px', ';\x20gl_Position=vec4((', '#joystick_size', '/get_store.phpitem=bg_sky_11.png', '.settings-sidebar', '.player-tooltip', 'جحش', '0lt0', '#final-place', 'Name\x20Error*', '/images/lens.png', 'selected', ';\x20uniform\x20mat3\x20', 'u4_', 'forEach', 'CLOSED', 'fast', '<div\x20style=\x22border-color:\x20', 'async', 'endFill', 'symbol', 'killNamePos', '#store-buy-coins_50000', 'Portugal', 'soundVolume', 'قواد', 'none', '&nbsp;', 'right', 'server-region', '/images/cors-proxy.phpimg=clock/clock.png', 'backgroundArena', ':visible', 'text,\x20span,\x20div', 'portionDict', 'getImageData', '#spin_fast_slider', '500px', 'byHighScore', 'appendChild', '/get_store.phpitem=mpf_1.png', 'svg', '#mm-loading', 'custom', 'headshot-message', 'charCodeAt', '/images/linelogo-valday2024.png', '/buyProperty?id=', '/images/cors-proxy.phpimg=flg/jp.png', 'navigationStart', 'util.time.hours', '/images/cors-proxy.phpimg=cursors/16.png', 'inline-block', '#custom-messages-container', 'textAlign', 'servers-mexico', 'disableFlex', 'gg_116823912010482082044', 'server-score', 'modalFixed', 'title', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'Jugador\x20', 'btn_crsw', '#loading-progress-cont', '/get_store.phpitem=open_q.png', 'Red\x20Lipstick\x20Cursor', 'index.game.result.title', 'playerUpdate', '#delete-account-timer', '<div\x20class=\x22idwormate\x22>', 'new', '\x20Players)', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Loading\x20servers...\x20Please\x20wait.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20', 'offsetHeight', '\x20ha\x20muerto.', 'username', 'Press\x20\x27(\x201\x20)\x27\x20to\x20toggle\x20skins\x20during\x20gameplay', 'translate(-50%,\x20-50%)\x20scale(', 'scale', 'enableClasses', 'hat-favorites-button', 'fail', 'nonbuyableCause', 'nickname', 'removeChildren', 'clientX', '#popup-withdraw-consent', '0000', 'id_token', '..1\x20..', 'connected', 'div_background', '#div_server,\x20#div_save,\x20#div_sound,\x20#div_speed,\x20#div_zigzag,\x20#div_w1,\x20#div_top,\x20#div_killmsg,\x20#div_sm,\x20#div_pulse_effects,\x20#div_messages,\x20#div_background,\x20#div_game_enhancements,\x20#config_mobile,\x20#div_Laser,\x20#div_crsw', 'toUTCString', 'js$2', 'pointsContainer', '#mm-player-avatar', '\x20=\x20v2;\x20}', ';\x20varying\x20vec2\x20', '#game-settings-tab', 'index.game.popup.menu.profile.tab', 'text/javascript', 'cssText', 'showHeadshotMessage', 'script', '#store-groups', '#settings-music-enabled-switch', 'WFT\x201', 'cloneNode', 'data-server-number', '5px', 'dd-pointer-up', '110px', '/get_store.phpitem=open_w.png', '#store-view-next', '</small>', 'mobileconfig', 'pageY', 'radian', 'url', 'type', 'c_1', '.close', 'truncateDescription', '\x20no\x20tiene\x20teamCode.\x20No\x20se\x20enviará\x20la\x20actualización\x20de\x20posición.', '#mm-params-game-mode', '#headshot_custom_text', 'lineHeight', 'img_o_3', '.green-dot', '#loading-view', '.dd-option-description', 'touches', 'selectedIndex', 'You\x20don\x27t\x20have\x20any\x20favorite\x20hats\x20yet.', 'toggle', '&times;', 'favorites-overlay', 'fontStyle', 'label_kill', 'hatButtonContainer', '0x3', 'loaded', 'lastTime', 'showLines', 'JDHnkHtYwyXyVgG9', 'headShots', 'banner', 'base', 'data-imageSrc', '/consent/change?value=', 'defineProperty', '#joystick_checked', '#profile-stat-gamesPlayed', 'red', 'VlZBPQ==', 'byLevel', 'atan2', '#monster_kill_selector', 'coins_125000', 'rel', '2px', 'hat-toggle-button', '/images/cors-proxy.phpimg=flg/au.png', 'Servidor\x20', '\x20<input\x20class=\x22dd-option-value\x22\x20type=\x22hidden\x22\x20value=\x22', 'className', 'flex_ability', 'Current:\x20Default', 'Zoom\x20changing\x20from', '#leaders-view', '#wear-view-prev', 'settings', 'CPU\x20monitoring\x20stopped\x20because\x20it\x20was\x20disabled', 'eyesDict', '#f44336', '#sound-laser-settings-tab,\x20#sound_effect_selector,\x20#monster_kill_selector,\x20#volume_slider', '<div\x20id=\x22', 'eie', 'index.game.popup.menu.leaders.tab', '.sidebar-item[data-tab=\x27backgrounds\x27]', 'Game\x20data\x20not\x20available', '<h3>', ');\x20vec4\x20colorMix=', 'consented', 'fromCharCode', '.toaster-consent-close', 'onclickServer', 'WebSocket\x20bağlı\x20değil.', '/get_store.phpitem=mo_1.png', 'exitFullscreen', '#laser_color_picker', 'skinGroupArrayDict', 'files', 'concat', 'pressed', 'fr_FR', '<img\x20src=\x22', '10px', 'day', 'dropShadow', 'background-color', 'Dagger\x20Cursor', 'block', 'websockets', 'u6_', 'rgba(255,\x20255,\x20255,\x200.1)', 'https://wormate.io', '#chat-input', 'setupKeyboardEvents', 'get_group.phpimg=Group_customer.png', '.servers-', '/pub/wuid/', 'index.game.antiadblocker.msg4', 'location', ';\x20attribute\x20vec2\x20', '#wear-buy-button', 'close', 'drawCircle', 'onopen', 'TikTok\x20Cursor', 'soundEffect', 'keydown', 'messenger', 'gold', 'musicEnabled', 'containerImgS', 'خطأ\x20في\x20تحديث\x20عرض\x20اسم\x20السيرفر:', 'rgba(0,\x200,\x200,\x200.5)', 'antialias', '#skin-description-text', '.dd-selected-text', 'GET', 'tooltip', ',\x201.0)).xy,\x200.0,\x201.0);\x20}', '#server-link-tooltip', '#volume_slider', 'def_mouth', '#wear-hats-button', 'binaryType', 'propertyList', 'cachedRadius', '#loading-progress-text', 'WFT\x202', 'https://lh3.googleusercontent.com', '#ffffff', 'Stardust', '..4\x20..', 'removeChild', 'selectedHats', '/images/cors-proxy.phpimg=cursors/18.png', 'canvas', '/get_store.phpitem=', 'Error\x20saving\x20sector\x20system\x20settings:', 'devicePixelRatio', 'valid', 'No\x20Name\x20Player', 'pow', '.cursor-item', 'https://wormx.store/store/index.php', '✅\x20WebSocket\x20bağlı', 'border-color', '-</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22name\x22>', 'realServerName', 'avatarUrl', 'img_o_4', 'd_3', 'updateToggleButton', 'onload', 'There\x20was\x20a\x20problem\x20connecting!', '/images/cors-proxy.phpimg=cursors/22.png', '</a></div><div\x20class=\x22toaster-consent-close\x22>', 'coords', 'port_name_s', '<div><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20x=\x220\x22\x20y=\x220\x22\x20viewBox=\x220\x200\x20456\x20456\x22\x20xml:\x20space=\x22preserve\x22><rect\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22456\x22\x20height=\x22456\x22\x20fill=\x22#517AD1\x22/><path\x20d=\x22M242.7\x20456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9\x2035.6-79.5\x2079.5-79.5h62v64.6h-44.4c-13.9\x200-25.3\x2011.3-25.3\x2025.3v50h68.5l-9.5\x2071.9h-59.1V456z\x22\x20fill=\x22#fff\x22/></svg><span>', '-ms-transform', 'Error\x20loading\x20settings:', 'css', '.favorites-content', '.background-grid', 'playerDeath', '0xFFFFFF', 'selectedCursor', '/images/cors-proxy.phpimg=cursors/2.png', 'modal_wft', '#main-menu-view', 'util.time.sec', 'value', 'fuck', 'MULTIPLY', 'normal', '16px', 'then', '20px\x200', '\x20=\x20', 'regDate', '/images/cors-proxy.phpimg=flg/ca.png', 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09', '#FF0000', 'Rectangle', '#cursors-tab,\x20.cursor-container,\x20.cursor-item', 'constructor', 'EYES', '#profile-stat-highScore', 'checked', 'wftObjects', 'list', '.server-score', '28tBDzQI', 'year', '#joystick_position', 'has', 'beginPath', 'fn_o', 'Renderer', '#wear-mouths-button', ';\x20const\x20float\x20ROT_ANGLE_DEG\x20=\x207.5;\x20const\x20float\x20ROT_COS\x20=\x20cos(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20const\x20float\x20ROT_SIN\x20=\x20sin(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20void\x20main()\x20{\x20', '#mm-player-exp-bar', 'sectors', 'sessionsPlayed', 'application/json', 'isConsentGiven', '#skins-view', '#FFF', 'chatMessage', '\x22/></span><span>', ';path=/', '1\x20/\x20span\x203', 'Turkey', 'wear', 'atan', 'Current:\x20', 'FoodTransparent', 'isArray', 'nome', 'ctrl', '#mm-bottom-buttons', 'true', '30%', 'container', '/images/wear-ability.png', '{0}', 'Electrical\x20Plug\x20Cursor', '#game-cont,\x20#game-canvas,\x20body', ':nth-child(', '1px\x205px', 'reset', 'antiadblocker', 'https://wormate.io/images/og-share-img-new.jpg', '#popup-logout-container', 'timestamp', 'selectSala', '#final-share-fb', 'dsg', '#adbl-3', 'text', ':selected', 'image', 'wssServer', '\x20dd-selected-description-truncated', 'Arial', '#volume_value', 'Error\x20processing\x20file:', '<button\x20id=\x27add-to-favorites-skin\x27\x20class=\x27favorite-button2\x27\x20style=\x27background:#4CAF50;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x20margin:\x20410px\x2015px\x2015px\x205px;\x27><span\x20style=\x27font-size:14px;\x27>+</span>\x20Add</button>', 'pop', '.error,\x20.alert,\x20.modal,\x20.popup,\x20.notification', '18px\x20Arial', 'max', '<div\x20class=\x22div_FullScreen\x22><input\x20type=\x22button\x22\x20value=\x22', 'Graphics', 'cachedServers', 'console', 'innerHTML', 'cos', 'killCustomText', 'openDatabase', '</div></div>', 'Geometry', '<link\x20href=\x27https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\x27\x20rel=\x27stylesheet\x27/>\x0a<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\x22>\x0a<button\x20id=\x22btn_crsw\x22\x20style=\x22display:\x20none;\x22>💡</button>\x20\x0a<button\x20id=\x22op_wft\x22\x20class=\x22op_wft\x22>⚙️\x20Settings</button>\x20\x0a<div\x20id=\x22modal_wft\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20<div\x20class=\x22modal-content\x22>\x20\x0a\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22>&times;</span>\x20\x0a\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22>GAME\x20SETTINGS</h2>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wft_body\x22\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20layout\x20with\x20sidebar\x20and\x20content\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-layout\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sidebar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-sidebar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x20active\x22\x20data-tab=\x22game-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M14.7\x206.3a1\x201\x200\x200\x200\x200\x201.4l1.6\x201.6a1\x201\x200\x200\x200\x201.4\x200l3.77-3.77a6\x206\x200\x200\x201-7.94\x207.94l-6.91\x206.91a2.12\x202.12\x200\x200\x201-3-3l6.91-6.91a6\x206\x200\x200\x201\x207.94-7.94l-3.76\x203.76z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Game\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22mobile-settings\x22\x20id=\x22mobile-tab-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x225\x22\x20y=\x222\x22\x20width=\x2214\x22\x20height=\x2220\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2218\x22\x20x2=\x2212\x22\x20y2=\x2218\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Mobile\x20Controls</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22sound-laser-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M22\x2012h-4l-3\x209L9\x203l-3\x209H2\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Laser\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22power-ups\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Power-ups\x20&\x20Zoom</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015a2\x202\x200\x200\x201-2\x202H7l-4\x204V5a2\x202\x200\x200\x201\x202-2h14a2\x202\x200\x200\x201\x202\x202z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22backgrounds\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x223\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x228.5\x22\x20cy=\x228.5\x22\x20r=\x221.5\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2221\x2015\x2016\x2010\x205\x2021\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Backgrounds</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22cursors\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203l7.07\x2016.97\x202.51-7.39\x207.39-2.51L3\x203z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M13\x2013l6\x206\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Cursors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22about\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212\x22\x20y2=\x2212\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212\x22\x20y2=\x228\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>About</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Content\x20Area\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_server\x22\x20style=\x22position:\x20absolute;\x20opacity:\x200;\x20top:\x20-9999px;\x20left:\x20-9999px;\x20pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22sel_server\x22>Country</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_country\x22></select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Options\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Game\x20Options</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Fast\x20Eating\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bolt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Fast\x20Eating</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22eating_speed_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ZigZag\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_zigzag\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-eye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20ZigZag</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=img/zigzag.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22zigzagup\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_speed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-tachometer-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=img/speed.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftspeed\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Total\x20Kill-Headshot\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_save\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22saveGame\x22>Total\x20Kill/Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22saveGame\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20FPS/CPU\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-microchip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20FPS/CPU</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22performance-monitor-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Visual\x20Pulse\x20Effects\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_pulse_effects\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-wave-square\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Visual\x20Pulse\x20Effects</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22pulse_effects_enabled\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Screen\x20Mode\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_w1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-desktop\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Screen\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sc\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>100%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>75%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>Center</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Smooth\x20Level\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sliders-h\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Smooth\x20movement</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>Normal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>High</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Top\x20Players\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-trophy\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Top\x20Players</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>0</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>1</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>2</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x223\x22>3</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x224\x22>4</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x225\x22>5</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x226\x22>6</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x227\x22>7</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x228\x22>8</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x229\x22>9</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-settings-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Effects\x20Label\x20on\x20Left\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-volume-up\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-effects-title\x22>Sound\x20Effects</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Headshot\x20Sound\x20Selector\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sound_effect_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/hs_2.mp3\x22>Default\x20Headshot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\x22>Headshot\x20Sound</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/emaat.mp3\x22>Emaat</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/sniper-shot.mp3\x22>Sniper\x20Shot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/headshot_6.mp3\x22>Headshot\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\x22>Alqm</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\x22>Bye\x20Bye</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/Aelo-Adi.MP3\x22>Adelo\x20Adi</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/alalobee.mp3\x22>Ala\x20Loby</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/laugh.mp3\x22>Laugh</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/mario-jump.mp3\x22>Mario\x20Jump</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pew.mp3\x22>Pew</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pingo.mp3\x22>Pingo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/wak-wak.mp3\x22>Wak\x20Wak</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x2010th\x20Headshot\x20Sound\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22monster_kill_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/monster-kill-hahaha.MP3\x22>Monster\x20Kill</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/mk.mp3\x22>Monster\x20Kill\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\x22>Monster\x20Kill\x203</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Volume\x20Control\x20without\x20label\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22volume-slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22volume_slider\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22\x20value=\x2240\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22volume_value\x22\x20class=\x22slider-value\x22>40</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Toggle\x20Switch\x20on\x20far\x20right\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftsound\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x20round\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Custom\x20Skin\x20Upload\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Custom\x20Skin</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_crsw\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-file-image\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Skin\x20File....\x20Only\x20(skin.json)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-grow:\x201;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22file\x22\x20accept=\x22.json\x22\x20id=\x22fileSkin\x22\x20style=\x22flex-grow:\x201;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_clear_file\x22>Clear</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Audio\x20elements\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22s_h\x22><source\x20src=\x22https://wormx.store/video/hs_2.mp3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22monster_kill_sound\x22><source\x20src=\x22https://wormx.store/video/monster-kill-hahaha.MP3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22sound_test_audio\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Mobile\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mobile-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Mobile\x20Controls</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Joystick\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-gamepad\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_checked\x22>Enable\x20Joystick</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22joystick_checked\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_color\x22>Joystick\x20Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_color\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22red\x22>Red</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22blue\x22>Blue</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22green\x22>Green</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22yellow\x22>Yellow</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22purple\x22>Purple</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22orange\x22>Orange</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-cog\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_mode\x22>Joystick\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_mode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22static\x22>Static</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dynamic\x22>Dynamic</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-map-marker-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_position\x22>Position</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_position\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22L\x22>Left</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22R\x22>Right</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand-arrows-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_size\x22>Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_size\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_size_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_pxy\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_pxy\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_pxy_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22config_mobile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Additional\x20mobile\x20settings\x20will\x20be\x20loaded\x20here\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Laser\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sound-laser-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Laser\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Laser\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_Laser\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22Laserup\x22>Enable\x20Laser</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22Laserup\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_color_picker\x22>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22laser_color_picker\x22\x20value=\x22#FFD700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_opacity_slider\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22laser_opacity_slider\x22\x20min=\x2210\x22\x20max=\x22100\x22\x20step=\x2210\x22\x20value=\x2250\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22laser_opacity_value\x22\x20class=\x22slider-value\x22>50</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22reset_laser_settings\x22\x20class=\x22reset-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Keyboard\x20Shortcuts:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20text-align:\x20right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>O</strong>\x20-\x20Increase\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>P</strong>\x20-\x20Decrease\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22power-ups-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Power-ups\x20&\x20Zoom\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Advanced\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Spin\x20Fast\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sync-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spin_fast_slider\x22>Spin\x20Fast</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22spin_fast_slider\x22\x20min=\x220.3\x22\x20max=\x220.6\x22\x20step=\x220.1\x22\x20value=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22spin_fast_value\x22\x20class=\x22slider-value\x22>0.5</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22spin_fast\x22\x20data-default=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_size_slider\x22>Power-ups\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_size_slider\x22\x20min=\x221\x22\x20max=\x226\x22\x20step=\x221\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Aura\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-radiation-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_aura_slider\x22>Power-ups\x20Aura</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_aura_slider\x22\x20min=\x221.2\x22\x20max=\x223.2\x22\x20step=\x220.2\x22\x20value=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_aura_value\x22\x20class=\x22slider-value\x22>1.2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_aura\x22\x20data-default=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-apple-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_size_slider\x22>Food\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_size_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Shadow\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-moon\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_shadow_slider\x22>Food\x20Shadow</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_shadow_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_shadow_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_shadow\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Zoom\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Zoom\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-search-plus\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22zoom_speed_slider\x22>Zoom\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22zoom_speed_slider\x22\x20min=\x220.001\x22\x20max=\x220.01\x22\x20step=\x220.001\x22\x20value=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom_speed_value\x22\x20class=\x22slider-value\x22>0.003</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22zoom_speed\x22\x20data-default=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_game_enhancements\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Messages\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22messages-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Messages</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Default\x20Kill&Headshot\x20Toggle\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-with-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill&Headshot\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-skull\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Default\x20Kill&Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftiq\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20New\x20Messages\x20Layout\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Messages</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22messages-container\x22\x20id=\x22custom-messages-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Left\x20side:\x20Kill\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22KILLED\x22>KILLED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22WASTED\x22>WASTED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ELIMINATED\x22>ELIMINATED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22DESTROYED\x22>DESTROYED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22FINISHED\x22>FINISHED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22Well\x20Done!\x22>Well\x20Done!</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22kill_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22kill_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22kill_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Right\x20side:\x20Headshot\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Headshot\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22HEADSHOT\x22>HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BOOM!\x20HEADSHOT\x22>BOOM!\x20HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22PERFECT\x20AIM\x22>PERFECT\x20AIM</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22CRITICAL\x20HIT\x22>CRITICAL\x20HIT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BULLSEYE\x22>BULLSEYE</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22headshot_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22headshot_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22headshot_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_messages\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Backgrounds\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22backgrounds-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Backgrounds</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sector\x20System\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-system-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-toggle-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-th-large\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-label\x22>Enable\x20Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_system_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20Panel\x20-\x20Hidden\x20until\x20enabled\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_settings_panel\x22\x20class=\x22sector-settings-panel\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-main-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-grip-horizontal\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Display\x20Mode</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sector_display_mode\x22\x20class=\x22sector-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sectors\x22>Sectors\x20(12)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22quarters\x22>Quarters\x20(4)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-fill-drip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_bg_color\x22\x20value=\x22#000000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Opacity\x20-\x20Always\x20visible\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_bg_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2260\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_bg_opacity_value\x22>60%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-border-style\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Show\x20Lines</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_show_lines\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Lines\x20Options\x20-\x20Hidden\x20when\x20Show\x20Lines\x20is\x20off\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_lines_options\x22\x20class=\x22sector-lines-options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_line_color\x22\x20value=\x22#FF0000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-low-vision\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_line_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2230\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_line_opacity_value\x22>30%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-shortcuts\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-title\x22>Keyboard\x20Shortcuts:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>S</strong>\x20or\x20<strong>=</strong>\x20-\x20Toggle\x20Sectors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>X</strong>\x20-\x20Toggle\x20Quarters</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20items\x20will\x20be\x20added\x20dynamically\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Cursors\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cursors-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Cursors</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20العنوان\x20في\x20سطر\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-mouse-pointer\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Cursor\x20Selection</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20الزر\x20في\x20سطر\x20منفصل\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x20cursor-controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22default-cursor-btn\x22\x20class=\x22secondary-button\x22>Default\x20Cursor</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22current-cursor-name\x22>Current:\x20Electrical\x20Plug\x20Cursor</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20المؤشرات\x20ستضاف\x20ديناميكياً\x20هنا\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_cursors\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20About\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22about-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>About\x20WFT</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22about-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-info-circle\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WFT:\x20Enhance\x20Your\x20Wormate.io\x20Experience\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[WFT]\x20is\x20a\x20Chrome\x20extension\x20designed\x20to\x20improve\x20your\x20wormate.io\x20gameplay.\x20Quickly\x20select\x20rooms,\x20customize\x20your\x20worm\x20with\x20vibrant\x20skin\x20colors,\x20and\x20enjoy\x20extra\x20features\x20to\x20enhance\x20your\x20experience.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-calendar-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Release\x20Date:\x2030/03/2025.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-code-branch\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Version:\x202.0.1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22button-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22resetScript\x22\x20class=\x22reset-button\x22>Versiyon\x20Change</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-users\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Designed\x20by:\x20\x20WFT-Team\x20Team\x20!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Keyboard\x20Shortcuts:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>O</strong>\x20-\x20Increase\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>P</strong>\x20-\x20Decrease\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20User\x20ID\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-id-card\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22>ID:\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22', '#markup-header', 'myGameSettings', '342756ieBdwJ', 'pwr_flex', 'isBuyer', 'Customer', 'feed', 'd_5', '\x20<img\x20class=\x22dd-option-image', 'fps', '{}.constructor(\x22return\x20this\x22)(\x20)', 'original', 'mozRequestFullScreen', '352506gZGzwC', '/get_store.phpitem=mp_2.png', 'img_o_2', 'Clear\x20All', 'background', 'handleNicknameChange', 'defer', '\x22wear\x22:', 'reduce', 'wftit', 'pk5', 'bold', 'siblings', 'server-image', '<div\x20id=\x22idReplaceSkin\x22></div>', 'c_white', 'signOut', 'region', 'restricted', 'expToNext', '#add-to-favorites-skin', 'grid', '/dynamic/assets/revision.json', '.close-button', 'https://wormx.store/2025/check/check2.php', 'opacity', 'pk4', 'Text', '_start', '1px\x20solid\x20#333345', 'REPEAT', 'index.game.popup.menu.store.tab', '#coins-view', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x22\x20id=\x22btnFullScreen\x22/><input\x20type=\x22button\x22\x20value=\x22', 'catch', '#food_shadow_value', 'onchange', 'querySelectorAll', 'hatVariantArray', 'loading', 'facebook-jssdk', 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20hats?', 'fontWeight', 'setupKeyboardControls', 'keys', 'load', '.setting-item', ';\x20gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb,\x200.0);\x20}', 'OPEN', 'https://graph.facebook.com/me?access_token=', 'appendTo', '</div><div\x20class=\x22toaster-levelup-close\x22>', 'ajax', 'selectedServerInfo', '/getUserData', 'https://wormx.store/2025/css/gamenew.css', 'find', 'crossorigin', '<style>', '#f8d968', '<div\x20id=\x22server-link-tooltip\x22></div>', 'showHeadshotName', 'servers-canada', 'column', '&type=', 'data-hat-id', '.dd-click-off-close', '//apis.google.com/js/platform.js', '<div\x20class=\x27favorites-popup\x27\x20style=\x27display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px\x20solid\x20#333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0\x204px\x208px\x20rgba(0,0,0,0.5);color:white;\x27><div\x20style=\x27padding:15px\x2020px;background-color:#252538;border-bottom:1px\x20solid\x20#333345;position:relative;display:flex;justify-content:space-between;align-items:center;\x27><button\x20class=\x27close-favorites\x27\x20style=\x27position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0\x205px;line-height:1;font-weight:bold;\x27>&times;</button><h3\x20style=\x27margin:0\x200\x200\x205px;font-size:18px;color:white;padding-left:15px;\x27>Favorite</h3><button\x20class=\x27clear-all-favorites\x27\x20style=\x27padding:4px\x208px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;\x27>Clear\x20All</button></div><div\x20class=\x27favorites-content\x27\x20style=\x27padding:15px\x2020px;overflow-y:auto;max-height:330px;\x27><div\x20class=\x27favorites-grid\x27\x20style=\x27display:grid;grid-template-columns:1fr\x201fr;gap:15px;padding:0;margin:0;\x27></div></div></div>', 'lineStyle', 'portionUnknown', 'random', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'headshotMsgType', '#mm-skin-canv', 'ADD', 'servers-australia', '#modal_backdrop', 'dropShadowBlur', '#idReplaceSkin', 'space-between', 'setTime', '#eating_speed_toggle,\x20#performance-monitor-toggle,\x20#wftspeed,\x20#saveGame,\x20#pulse_effects_enabled', 'GLASSES', '_hasSetupKeyboardControls', '..3\x20..', 'revokeObjectURL', 'PortionAura', 'Hexvoid', 'Wormx\x20Error\x201', 'buttonMode', '4883460lgBxsb', 'customer', '#final-message', 'clipboard', 'index.game.main.menu.unlockSkins.comeAndPlay', 'blendMode', 'laserOptions', 'fontSize', '#wftiq', '#store-view', 'view', 'pk3', '❌\x20WebSocket\x20bağlantısı\x20kesildi.\x20Tekrar\x20bağlanılacak...', '/images/cors-proxy.phpimg=flg/gb.png', 'false', 'substr', 'img_4', 'savedData', 'beginFill', 'scriptSeleccionado', 'showSelectedHTML', '#joystick_mode', '\x20se\x20movió\x20a\x20(', 'cursor', 'login', 'Wormx\x20Error\x202', '#performance-monitor-toggle', '<div></div>', 'joystick_position', 'mouthDict', 'index.game.popup.menu.login.tab', 'readyState', '<div\x20class=\x22dd-select\x22><input\x20class=\x22dd-selected-value\x22\x20id=\x22backgroundArena-value\x22\x20type=\x22hidden\x22\x20/><a\x20class=\x22dd-selected\x22></a><span\x20class=\x22dd-pointer\x20dd-pointer-down\x22></span></div>', '/images/cors-proxy.phpimg=cursors/13.png', 'glassesVariantArray', '\x22\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20display:\x20inline-block;\x20margin:\x205px;\x20cursor:\x20pointer;\x20border:\x202px\x20solid\x20', 'return\x20(function()\x20', '#skin-info-text', 'cpuSampleSize', 'reverse', 'bg_sky_8.png', 'oco', 'Prism', 'target', 'restore', 'round', '-10px', '</div><div\x20class=\x22toaster-levelup-text\x22>', '#252538', 'pause', 'renderContainer', '.sidebar-item', 'headshotMsg', 'transparent', '.dd-selected-image', 'VkdWaGJWVlE=', '/get_store.phpitem=Galaxy-Star.png', '<div\x20style=\x27text-align:center;padding:10px;color:#aaa;margin:20px\x200;grid-column:1/span\x202;\x27>You\x20don\x27t\x20have\x20any\x20favorite\x20skins\x20yet.</div>', 'Watermelon\x20Cursor', '.dd-select', 'volume', 'scrollTop', 'logout', 'playHeadshotSound', 'slideUp', 'removeItem', 'PIXI', '</span>', 'zoomSpeed', 'not', 'select', 'saveGame', 'bg_sky__1.png', '.favorites-popup', '.dd-options', '#kill_show_name', 'hatHelp', '#settings-sfx-enabled-switch', 'mobile', 'outerWidth', 'a2_', '#store-buy-coins_16000', 'graphics', 'app', 'mo2', '75px', 'value2_hs', 'consent_state_2', 'c_3', 'Turquoise\x20Mouse\x20Pointer', '</button>\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wft\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x20wft-modal\x22\x20style=\x22max-width:\x20360px\x20!important;\x20width:\x20360px\x20!important;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22center\x20wft-header\x22\x20style=\x22background-color:\x20#ff8a18;\x20background:\x20linear-gradient(145deg,\x20rgb(255,\x20141,\x200),\x20rgb(255,\x20102,\x200));\x20padding:\x200\x2015px;\x20height:\x2036px;\x20line-height:\x2036px;\x20border-radius:\x208px\x208px\x200\x200;\x20position:\x20relative;\x20text-align:\x20center;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22\x20style=\x22position:\x20absolute;\x20left:\x2015px;\x20top:\x206px;\x20color:\x20white;\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x22>×</span>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22\x20style=\x22margin:\x200;\x20font-size:\x2018px;\x20color:\x20white;\x22>Settings</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modal_wft_body\x22\x20class=\x22modal-body\x20wft-body\x22\x20style=\x22padding:\x2015px;\x20background-color:\x20#1e2339;\x20color:\x20#fff;\x20border-radius:\x200\x200\x208px\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20سيتم\x20تحديث\x20المحتوى\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20', 'div_sound', 'showFpsCpu', 'overflow', 'positionMode', 'sel_top', '/get_store.phpitem=moi_3.png', 'flx', 'resolution', 'value2_kill', ',\x201.0)).xy,\x200.0,\x201.0);\x20vec4\x20ScreenParams\x20=\x20', '=;expires=', 'data:', '..10\x20..', 'btn_in_t', 'streamer', 'isActive', 'eyesUnknown', 'default_icon.png', 'mo1', 'SCREEN', 'fillRect', 'bg_sky__5.png', 'data', '#myTooltip', 'savedState', 'total', 'showKillName', 'error', '🛑\x20Pozisyon\x20güncellemesi\x20yapılmadı:\x20teamCode\x20yok.', 'servers-japon', 'Galaxy-Star.png', 'killMsgType', 'bkgnd0.png', '#mm-action-login', '..8\x20..', 'performance', 'style', 's_wft_', '&eyesId=', 'POST', 'getFloat32', 'stop', 'Octopus\x20Glove\x20Cursor', '#adbl-4', 'getItem', '#backgroundArena', 'html', '\x20ha\x20enviado\x20un\x20mensaje:\x20', 'options', 'textContent', 'Container', 'quarters', '#mm-action-play', 'PortionSize', 'index.game.social.shareResult.messGood', 'onprogress', 'fillStyle', '#div_customer', '<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22rank\x22>', 'precision\x20highp\x20float;\x20varying\x20vec2\x20', 'bestSurvivalTimeSec', '12px', '1fr\x201fr\x201fr', '.server-region', 'findRenderContainer', 'Headshot', 'webkitRequestFullScreen', 'no-js(\x5cs|$)', '#saveGame', 'initialState', 'sin', 'altKey', 'sqrt', '4px', 'tab', 'index.game.toaster.consent.iAccept', 'fadeOut', '#mm-loading-progress-bar', '★\x20Add', 's_kill', 'pulseEnabled', 'lineColor', 'Error\x20loading\x20wft\x20settings:', '/images/skins/', 'active', '/images/cors-proxy.phpimg=cursors/24.png', 'ze-snippet', 'selectedItem', 'click', '</table>', 'getInt16', 'index.game.popup.menu.settings.tab', 'trace', 's_headshot', '#profile-stat-bestSurvivalTime', 'accessToken', '#joystick_color', 'get', 'createDisplayElements', '&skinId=', 'each', 'documentElement', 'pk1', 'color', 'preset', '#port_name', 'loa831pibur0w4gv', 'activeFlex', '#btn_copy', '#store-buy-coins_3250', '46px', 'startAllMonitoring', '_pulseInterval', 'hasOwnProperty', 'lightblue', '.cursor-container', 'pwrFlex', 'Cherries\x20Cursor', 'WormWorld\x20Servers', 'img_1', '.switch,\x20.slider-control,\x20.section-title', '</span><span>', 'isCpuVisible', '_lastPulseTime', 'اختك', 'USA', '#port_id', 'Visit\x20', 'favorites-dialog', 'string', 'contextmenu', '#login-view', '#sector_display_mode', '<div\x20id=\x27', '#sector_line_opacity_value', 'globalGameData', 'teamDict', 'Error\x20loading\x20sector\x20system\x20settings:', '#store-buy-button', 'now', 'Brazil', 'c_v', 'a1_', 'restored', 'Flame\x20Cursor', 'mapText', 'relativePath', '/get_store.phpitem=mp_3.png', 'keyCode', 'append', 'fullscreen', '#div_Laser,\x20#Laserup,\x20#laser_color_picker,\x20#laser_opacity_slider', 'body', 'TextureCache', 'pointer-events', 'auto', '&mouthId=', 'sectorSystem', 'set', '_refresh', 'iterator', 'includes', 'id_customer', 'revision', 'fpsDisplay', '/images/def-look.png', '#sector_line_color', 'stopAllMonitoring', 'pk0', '#portion_size_slider', '#mm-store', '#FFFFFF', '/images/cors-proxy.phpimg=cursors/3.png', 'href', '#kill_custom_text', 'input', 'bg-name', 'setItem', 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20skins?', '#wear-view-next', 'textureCache', 'addTest', 'querySelector', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'guest', 'https://wormx.store/images/arkaplan/bg3.jpg', 'startPreRoll', 'closest', '2px\x202px\x204px\x20rgba(0,\x200,\x200,\x200.7)', 'teamwft', '.background-item[data-bg=\x22', '🧠\x20Player\x20state:', 'center', '#results-view', 'd_2', 'fuak', '#wear-locked-bar', 'addChild', '.selectSala', '.dd-selected', 'data-descriptione', 'indexedDB', 'object', 'off', 'getElementById', 'open', 'img_pf_1', 'rgba(0,0,0,0.9)', '<input\x20type=\x22hidden\x22\x20id=\x22port_name\x22\x20value=\x22\x22>', 'length', 'level', '999', 'servers', 'prop', '#port_id_s', 'hide', 'render', 'getCurrentPosition', 'byKillsAndHeadShots', 'Your\x20account\x20has\x20been\x20locked.', '#stretch-box', 'Mensaje\x20desconocido:', '.settings-sidebar,\x20.settings-layout,\x20.settings-content,\x20.settings-grid,\x20.tab-content,\x20.sidebar-item', '#sector_bg_opacity', 'embedCSS', 'scrollTo', 'trim', 'ccg_1', '_tick', '/images/cors-proxy.phpimg=cursors/14.png', 'lastCpuTime', 'ccg_0', 'loading\x20advertisement', 'cpuSamples', 'skinArrayDict', 'addClass', 'xfbml', 'log', '_frame', 'move', '50px', '#game-canvas', '.clear-all-favorites', 'index.game.social.shareResult.messNorm', 'dd-option-selected', '.background-item', '/images/cors-proxy.phpimg=cursors/1.png', 'colorDict', 'game-view', 'floor', 'getRadius', 'sectorTextStyle', '#toaster-stack', 'setAttribute', 'playerX', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20id=\x22', '#wear-view-canv', '\x20*\x20vec3(', '<button>', 'Default', '#FFD700', '#toaster-view', '<input\x20type=\x22hidden\x22\x20id=\x22port_id\x22\x20value=\x22\x22>', '#popup-menu-coins-box', 'Strawberry\x20and\x20Chocolate\x20Ice\x20Cream\x20Cursor', 'v1_', 'anchor', '#food_shadow_slider', '/images/cors-proxy.phpimg=flg/sg.png', 'cookie', 'http', '\x22\x20alt=\x22Wormate.io\x20logo\x22/><div\x20class=\x22toaster-consent-accepted-container\x22><span\x20class=\x22toaster-consent-accepted-text\x22>', 'custom_skin', 'btnRePlay', '/images/cors-proxy.phpimg=cursors/12.png', '#chat-history', 'server-image-with-link', '11px', 'interactive', '100%', '#sector_bg_opacity_value', 'd_1', '</div>', 'clear', '<style\x20id=\x22css-ddslick\x22\x20type=\x22text/css\x22>.dd-select{\x20border-radius:2px;\x20border:solid\x201px\x20#ccc;\x20position:relative;\x20cursor:pointer;}.dd-desc\x20{\x20color:#aaa;\x20display:block;\x20overflow:\x20hidden;\x20font-weight:normal;\x20line-height:\x201.4em;\x20}.dd-selected{\x20overflow:hidden;\x20display:block;\x20padding:2px;\x20font-weight:bold;}.dd-pointer{\x20width:0;\x20height:0;\x20position:absolute;\x20right:10px;\x20top:50%;\x20margin-top:-3px;}.dd-pointer-down{\x20border:solid\x205px\x20transparent;\x20border-top:solid\x205px\x20#000;\x20}.dd-pointer-up{border:solid\x205px\x20transparent\x20!important;\x20border-bottom:solid\x205px\x20#000\x20!important;\x20margin-top:-8px;}.dd-options{\x20border:solid\x201px\x20#ccc;\x20border-top:none;\x20list-style:none;\x20box-shadow:0px\x201px\x205px\x20#ddd;\x20display:none;\x20position:absolute;\x20z-index:2000;\x20margin:0;\x20padding:0;background:#fff;\x20overflow:auto;}.dd-option{\x20padding:2px;\x20display:block;\x20border-bottom:solid\x201px\x20#ddd;\x20overflow:hidden;\x20text-decoration:none;\x20color:#333;\x20cursor:pointer;-webkit-transition:\x20all\x200.25s\x20ease-in-out;\x20-moz-transition:\x20all\x200.25s\x20ease-in-out;-o-transition:\x20all\x200.25s\x20ease-in-out;-ms-transition:\x20all\x200.25s\x20ease-in-out;\x20}\x20ul.dd-options\x20{height:\x20130px;}\x20.dd-options\x20>\x20li:last-child\x20>\x20.dd-option{\x20border-bottom:none;}.dd-option:hover{\x20background:#f3f3f3;\x20color:#000;}.dd-selected-description-truncated\x20{\x20text-overflow:\x20ellipsis;\x20white-space:nowrap;\x20}.dd-option-selected\x20{\x20background:#f6f6f6;\x20}.dd-option-image,\x20.dd-selected-image\x20{\x20vertical-align:middle;\x20float:left;\x20margin-right:5px;\x20max-width:64px;}.dd-image-right\x20{\x20float:right;\x20margin-right:15px;\x20margin-left:5px;}.dd-container{display:\x20inline-block;\x20position:relative;}​\x20.dd-selected-text\x20{\x20font-weight:bold}​</style>', 'portion_aura', 'toFixed', 'setInt16', '{1}', 'div', 'img_i_3', 'hatId', 'FoodSize', 'server-info', 'sortableChildren', 'div_top', 'SaveGamewft', '<div\x20class=\x27fav-buttons-container\x27\x20style=\x27margin:10px;display:flex;gap:5px;position:fixed;left:270px;top:0px;z-index:1000;\x27></div>', 'defaultSelectedIndex', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-item\x20', ';\x20void\x20main()\x20{\x20gl_FragColor\x20=\x20texture2D(', 'Mesaj\x20işleme\x20hatası:', 'laserGraphics', 'sel_sc', '#settings-view', '🟡\x20sendHSKillUpdate\x20çağrıldı', '#store-go-coins-button', 'Timmap\x20Servers', '30px', 'name', '#headshot_name_position', 'regionDict', 'headshotCustomText', '\x22\x20data-cursor=\x22', 'setInt8', 'clearTexts', 'servers-eeuu', 'joystick', 'AIP_REMOVE', 'glassesDict', '\x22\x20style=\x22width:\x2032px;\x20height:\x2032px;\x20margin-top:\x2014px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ';\x20uniform\x20vec2\x20', 'shift', 'no-', 'angle', 'epx_time', '[id^=\x27skin-info-text\x27]', 'Thailand', 'I18N_MESSAGES', 'https://wormmedia.xyz:4000/api/live-scores?t=', 'PerformanceMonitor', '<div\x20style=\x27text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span\x202;\x27>Error\x20loading\x20favorites</div>', 'error-view', '/static/assets/', '#error-gateway-connection-retry', ';\x20vec2\x20mul\x20=\x200.5\x20*\x20vec2(ScreenParams.x\x20*\x20(ScreenParams.w\x20-\x201.0)\x20+\x201.0,\x20ScreenParams.y\x20*\x20(ScreenParams.z\x20-\x201.0)\x20+\x201.0);\x20vec2\x20v2\x20=\x20uv\x20*\x20vec2(1.0,\x201.0);\x20v2\x20=\x20v2\x20*\x20vec2(1.0,\x201.0);\x20', 'price', 'display', '#delete-account-yes', 'WRM_wormate-io_300x250', 'getTime', 'description', '#laser_opacity_value', '<input\x20type=\x22hidden\x22\x20id=\x22port_name_s\x22\x20value=\x22\x22>', 'Strawberry\x20Candy\x20Cursor', 'sectorSystemSettings', 'orig', 'showFavoritesDialog', 'playMonsterSound', 'wss://wormmedia.xyz:9800', '\x22\x20alt=\x22User\x20Icon\x22\x20style=\x22width:\x2020px;\x20height:\x2020px;\x20margin-right:\x205px;\x20border-radius:\x2050%;\x22>', 'getLoginStatus', '#mm-line-bottom', '/get_store.phpitem=bkgnd0.png', 'warn', 'SRV\x20UP', '<span\x20class=\x22score-display\x20', 'currentMode', 'index.game.antiadblocker.msg1', 'White\x20Mouse\x20Pointer', '/get_store.phpitem=close_z.png', 'clearRect', ';\x20uniform\x20vec4\x20', 'config', 'link', 'iscustom', 'hatFavoritesButton', 'green-dot', '#ff2222', 'mouthId', 'scroll', 'locale', 'count', 'popup', 'nowrap', '_init', 'expires_in', '/get_store.phpitem=z_o.png', 's11', 'onerror', 'left', '/get_store.phpitem=mp_1.png', 'slice', 'util.time.min', 'food_shadow', 'removeClass', 'projectionMatrix', 'keypress', '/images/bg-pattern-pow2-TEAM2.png', 'transform', '#eating_speed_toggle', '3px', 'values', 'Player_', '\x22\x20style=\x22max-width:\x20220px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tooltiptext\x22\x20id=\x22myTooltip\x22>id\x20copy</span>Copy\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20\x20\x20\x0a<!--\x20Headshot\x20Message\x20Display\x20-->\x0a<div\x20id=\x22headshot-message\x22></div>\x0a', '#reset_laser_settings', 'baseVal', 'PTSans', 'Shader', '</span><span><img\x20src=\x22', '#error-gateway-connection-view', 'utils', 'startMonitoring', 'onSelected', '#5dade6', 'Singapore', 'CLOSING', 'format', '.fav-buttons-container', 'ArrayBuffer', 'isIPInEEA', '#addflag', 'Error\x20saving\x20wft\x20settings:', '#sound_effect_selector', 'latitude', 'get_group.phpimg=Group_show_gif.png', 'lineAlpha', 'wftSettings', 'No\x20conectado,\x20esperando\x20a\x20que\x20se\x20restablezca\x20la\x20conexión...', 'img', 'index.game.toaster.continue', 'index.game.popup.menu.wear.tab', 'change', 'vendor', '..5\x20..', '.ui-tab', 'create', 'TeamWFT', 'drawSectors', 'Indonesia', '_originalColor', 'Galaxy\x20Star', 'data-server-image', 'Skin\x20list\x20not\x20found\x20in\x20game\x20data', 'pk2', 'امك', '#contact-support', 'merge', 'ملعون', 'Roasting\x20Marshmallow\x20Cursor', 'Three-colored\x20Glove\x20Cursor', '/images/guest-avatar-valday2024.png', 'server-number', 'Canada', 'parent', 'lastRadiusTime', '50%', 'btnFullScreen', 'xhrFields', '#profile-view', 'changedTouches', 'imagePosition', '_blank', 'detach', 'TextStyle', '#joystick_pxy_value', '#store-buy-coins_7000', '#ffcc00', '.toaster-levelup-close', 'bg_sky_11.png', '/get_store.phpitem=bg_sky__2.png', 'ابوك', 'prototype', 'alpha', 'mousedown', '-5px', 'lastRespawnTime', 'please\x20don\x27t\x20copy\x20my\x20code', 'fill', 'img_p_2', 'Germany', 'json', 'https://i.imgur.com/LFiCido.png', 'cmd', 'regular', 'eat_animation', '#current-cursor-name', '0x4', 'aliases', '#social-buttons', 'wormworld', '#store-locked-bar', 'currentTime', 'اخوك', 'csg', '.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.', '/get_store.phpitem=close_w.png', 'messages-disabled', '#wear-item-price', '</a></li>', '#mm-settings', '#delete-account-view', '#popup-logout', ',\x20Kill\x20', '#portion_aura_value', 'URL', '_pulseStarted', '.dd-option-image', 'England', '\x22\x20height=\x2240\x22\x20/>', '0lt1', 'https://wormx.store/video/hs_2.mp3', 'score', 'ddslick', 'mm-action-play', 'file', 'div_w1', 'initGraphics', '#relojHelp', '[data-index]', 'apply', 'keyup', 'obj', 'GIF\x20SKIN', 'teamColor', 'd_4', 'fileSize', '<table>', '#adbl-continue', 'wormate-io_970x250', '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com', 'img_2', '/start?gameMode=', 'texture', '_animFrameId', 'databases', 'return\x20', 'unlimitedRespawn', '\x22\x20alt=\x22', '#store-go-skins-button', 's_l', 'index.game.result.your', 'Sprite', 'width', '.favorites-grid', 'WRAP_MODES', 'pCc', '#333', '#food_size_value', 'wormate.io', '\x22\x20id=\x22btnRePlay\x22>', '13822281lkHNAc', 'data-skin-id', 'UAE', 'dispose', '#f00', '#kill_msg', 'isFinite', 'getInt32', '#joystick_size_value', 'replaceAll', 'كلب', '\x22\x20style=\x22max-width:\x20300px;\x20width:\x20350px\x20!important;\x20height:\x2022px\x20!important;\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20display:\x20inline-block;\x20margin-right:\x2010px;\x22/>', 'backgroundAlpha', 'skin-info-text', 'text/css', '/get_store.phpitem=close_q.png', 'joystick_size', 'before', 'magnet_ability', 'expOnLevel', '\x27).then(()=>\x20alert(\x27Your\x20ID\x20', 'timmap', '#sort-toggle', '#sector_system_toggle', 'img_f', 'skin', 'Error\x20loading\x20laser\x20options:', 'players', 'favoriteSkins', '#333333', '#fdbf5f', '\x22\x20class=\x22toaster\x20toaster-levelup\x22><img\x20class=\x22toaster-levelup-img\x22\x20alt=\x22Wormate\x20Level\x20Up\x20Star\x22\x20src=\x22/images/level-star.svg\x22\x20/><div\x20class=\x22toaster-levelup-val\x22>', 'https://wormx.store/2025/check/index.php', ';\x20void\x20main(){vec4\x20color=texture2D(', 'flag', 'خطأ\x20في\x20حفظ\x20اسم\x20السيرفر:', 'send', 'quarterTextStyle', 'mouseup', '</span></a>', 'serviceWorker', 'img_p_3', 'initDrawing', 'skinData', 'remove', 'index.game.antiadblocker.msg3', 'state', 'sectorSystemMode', 'createElement', '#final-replay', 'flex', '<input\x20type=\x22hidden\x22\x20id=\x22port_id_s\x22\x20value=\x22\x22>', '---', 'index.game.floating.wellDone', 'u5_', 'extension', 'isInitialized', '#unl6wj4czdl84o9b', 'toggleMode', '<style>#open-favorites-btn\x20{\x20position:\x20absolute;\x20top:\x2010px;\x20right:\x2010px;\x20background:\x20#4CAF50;\x20color:\x20white;\x20border:\x20none;\x20padding:\x205px\x2010px;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20z-index:\x201000;\x20}#open-favorites-btn:hover\x20{\x20background:\x20#45a049;\x20}</style>', 'init', '</span></div>', '.tab-content', '#backgrounds-tab,\x20.background-grid,\x20.background-item', '/get_store.phpitem=mof_1.png', 't_wft_', '#mm-skin-prev', 'coins_50000', 'lastBackground', 'createElementNS', 'index.game.popup.menu.coins.tab', 'unregister', '#joystick_pxy', 'glassesId', 'onclick', 'substring', 'teamCode', 'setSelectionRange', 'identifier', 'sectorSystemActive', 'selectText', 'getContext', '#mm-coins-val', 'soundEnabled', 'div_save', '[id^=\x22sel_\x22]', 'Add', 'Australia', '&glassesId=', 'prerollCount', '#zigzagup', 'add', 'lineTo', 'currentDisplayMode', 'c_4', 'uk_UA', '\x20HS/Kill\x20actualizado:\x20HS\x20', 'wfti', 'moveTo', '#error-game-connection-view', 'data-region-name', '0\x204px\x208px\x20rgba(0,\x200,\x200,\x200.5)', 'عرضك', 'code', 'parse', 'drawQuarters', '\x22\x20data-bg-name=\x22', 'get_skin.php', 'option', 'currentHatId', 'coins_16000', 'getAuthResponse', 'imageUrl', '<small\x20class=\x22dd-selected-description\x20dd-desc', 'portion_size', 'playerDisconnect', 'HAT', 'index.game.toaster.consent.link', '.sidebar-item.active', 'texts', 'img_3', '87px', 'Beach\x20Umbrella\x20Cursor', '#store-buy-coins_1250', '#wear-glasses-button', 'Texture', '224rwdbWo', 'function', 'Skin\x20not\x20found', '/get_store.phpitem=bg_sky_12.png', ',\x20Kill:\x20', '_config', '15px\x2020px', '6px', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x2010px\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22\x20style=\x22display:\x20block;\x20margin-bottom:\x205px;\x20font-weight:\x20bold;\x20color:\x20#ddd;\x20text-align:\x20center;\x22>User\x20ID</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20margin:\x200\x20auto;\x20justify-content:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22', 'position', '0\x205px', '#error-game-connection-retry', 'wftsle', 'test', '..7\x20..', 'relative', '\x22\x20style=\x22color:\x20', 'Mesh', 'extend', 'prime', 'BaseTexture', '\x27></div>', 'port_id', 'joystick_pxy', '&nickname=', 'show', 'headshotNamePos', 'server_url', '/get_store.phpitem=open_z.png', 'Continue\x20(Home)', 'def_skin_base', '<li><a\x20class=\x22dd-option\x22>', 'killMsg', 'save', 'pxy', '<div\x20id=\x27final-replay\x27>Replay</div>', 'displayNumber', 'Wormx\x20Error\x203', '#zoom_speed_value', 'insertAfter', '#config_mobile', 'currentHatIndex', 'play', '#skin-group-description-text', 'filter', 'https://wormate.io/images/confetti-valday2025.png', 'index.game.toaster.levelup', 'fillText', 'Method\x20', 'preventDefault', '#modal_wft', 'fixed', 'createObjectURL', 'listVariant', '#mm-loading-progress-text', 'France', 'smoothCamera', 'servers-francia', 'index.game.leader.top10', 'src', 'Server\x20', 'version', 'backgroundColor', 'es_ES', '/images/cors-proxy.phpimg=flg/default-server.png', '/images/cors-proxy.phpimg=flg/de.png', '#sector_line_opacity', '/images/cors-proxy.phpimg=cursors/25.png', 'div_zigzag', 'hatDict', 'abs', 'index.game.antiadblocker.continue', 'Pink\x20Hearts\x20Cursor', 's_w', '#headshot_show_name', '/images/cors-proxy.phpimg=cursors/23.png', 'favorites-grid', 'zero', 'padStart', 'domComplete', 'outerHeight', '/images/cors-proxy.phpimg=cursors/4.png', '99999', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'map', '#wear-description-text', '_originalFontSize', '.dd-option', 'coins_1250', '/images/confetti-valday2024.png', ':</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'absolute', 'source', 'drawImage', 'zIndex', '..2\x20..', '#store-view-prev', 'WFT\x203', 'globalHatTextureCache', '#popup-menu-back', 'util.time.days', 'after', '.toaster-coins-close', 'boolean', 'Vietnam', '\x22\x20>', 'frameCount', 'op_wft', 'img_p_1', '#wear-locked-bar-text', 'server-name', 'index', 'img_clock', 'runtimeHash', '#2196F3', 'updateDisplays', 'stylesheet', 'https://resources.wormate.io', '#btn_clear_file', 'settings-show-names-switch', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.performance-monitor-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.monitor-element\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x201px\x201px\x202px\x20rgba(0,0,0,0.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'CPU:\x20', '\x20/\x20', 'main', '#headshot_msg', '\x22\x20/>', 'Modernizr', '#adbl-1', 'setupToggleButton', 'enableJSClass', 'def_eyes', 'hsKillUpdate', 'lengthComputable', 'requestFullScreen', '#popup-login-gg', 'exception', 'userId', 'key', 'country', 'performance-monitor-container', '-tab', '<input\x20type=\x22button\x22\x20value=\x22', 'Saved\x20sector\x20system\x20state:', '/images/cors-proxy.phpimg=cursors/6.png', 'c_2', 'toLowerCase', 'anApp', 'stringify', '<button\x20id=\x27manage-favorites-skin\x27\x20class=\x27favorite-button\x27\x20style=\x27background:#2196F3;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x20margin:\x20412px\x2020px\x2020px\x208px;\x27><span\x20style=\x27font-size:14px;\x27>☰</span>\x20Favorite</button>', 'Kill\x20and\x20Headshot\x20stats\x20will\x20be\x20removed?', 'caches', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20', 'bg_sky__6.png', '&hatId=', 'fontFamily', '0x1', '#mm-params-nickname', 'reload', '/images/cors-proxy.phpimg=cursors/7.png', '360px', '#spin_fast_value', 'u3_', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '_pulseFunctionInstalled', '#port_name_s', ';\x20uniform\x20sampler2D\x20', '</div><div\x20class=\x22toaster-coins-close\x22>', 'savedGame', 'gameMode', 'value1_hs', 'wrapMode', 'ui-tab-active', 'timing', 'Stopping\x20FPS\x20monitoring\x20completely', 'Eski\x20bağlantı\x20kapatılıyor...', 'LOADING_TEXT', '/images/cors-proxy.phpimg=cursors/8.png', '.dd-selected-description', '.ui-tabs-nav\x20.ui-tab', 'enemyNameHs', 'canvastext', 'month', '_display'];
    _0x60e4 = function() {
        return _0x27b4e3;
    }
    ;
    return _0x60e4();
}
var StoreSkinID;
$(document)[_0x2e71e2(0x72a)](function() {
    var _0x4b3584 = _0x2e71e2;
    $('.store-view-cont')[_0x4b3584(0x454)] && ($('.store-view-cont')[_0x4b3584(0x418)](_0x4b3584(0x2da)),
    StoreSkinID = $(_0x4b3584(0x31c)));
});
var myGameSettings = {
    'unlimitedRespawn': ![],
    'respawnDelay': 0x32
};
window['laserOptions'] = {
    'enabled': ![],
    'color': 0xffd700,
    'opacity': 0.5,
    'thickness': 0.1
},
window[_0x2e71e2(0x4b1)] = null;
const ctx = {
    'fontStyle': {
        'blanco': new PIXI[(_0x2e71e2(0x549))]({
            'align': _0x2e71e2(0x443),
            'fill': '#FF0000',
            'fontSize': 0xe,
            'fontWeight': 'bold',
            'lineJoin': _0x2e71e2(0x355),
            'stroke': _0x2e71e2(0x42e),
            'strokeThickness': 1.5,
            'whiteSpace': 'normal',
            'wordWrap': !![]
        })
    }
};
ctx['pointsContainer'] = new PIXI['Container']();
let lastKnownCoords = {
    'x': null,
    'y': null
}
  , blinkTimerId = null
  , removeMarkTimerId = null;
const createCircle = function() {
    var _0x1bb317 = _0x2e71e2;
    if (!window[_0x1bb317(0x254)] || typeof window[_0x1bb317(0x254)][_0x1bb317(0x481)] === _0x1bb317(0x111) || typeof window['coords'][_0x1bb317(0xe6)] === _0x1bb317(0x111))
        return;
    let _0x24d21f = _0x1bb317(0x7c4);
    if (lastKnownCoords['x'] !== null) {
        const _0xf4085e = Math[_0x1bb317(0x3cb)](Math[_0x1bb317(0x245)](window[_0x1bb317(0x254)][_0x1bb317(0x481)] - lastKnownCoords['x'], 0x2) + Math[_0x1bb317(0x245)](window['coords'][_0x1bb317(0xe6)] - lastKnownCoords['y'], 0x2));
        _0xf4085e > 0x64 && (ctx[_0x24d21f] && (ctx[_0x1bb317(0x1a3)] && ctx[_0x1bb317(0x1a3)][_0x1bb317(0x7ac)]['includes'](ctx[_0x24d21f]) && ctx['pointsContainer'][_0x1bb317(0x23c)](ctx[_0x24d21f]),
        ctx[_0x24d21f] = null),
        blinkTimerId && (clearInterval(blinkTimerId),
        blinkTimerId = null),
        removeMarkTimerId && (clearTimeout(removeMarkTimerId),
        removeMarkTimerId = null));
    }
    lastKnownCoords['x'] = window['coords'][_0x1bb317(0x481)],
    lastKnownCoords['y'] = window[_0x1bb317(0x254)][_0x1bb317(0xe6)];
    if (!ctx[_0x24d21f]) {
        ctx[_0x24d21f] = new PIXI[(_0x1bb317(0x2e7))]('X',ctx[_0x1bb317(0x1ce)][_0x1bb317(0x742)]),
        ctx[_0x24d21f][_0x1bb317(0x67c)] = 0x2,
        ctx[_0x24d21f][_0x1bb317(0x552)] = 0.9,
        ctx[_0x24d21f][_0x1bb317(0x48d)][_0x1bb317(0x421)](0.5, 0.5);
        ctx[_0x1bb317(0x1a3)] && (ctx[_0x1bb317(0x1a3)][_0x1bb317(0x4a9)] = !![],
        ctx['pointsContainer']['zIndex'] = 0x2);
        if (!blinkTimerId) {
            let _0x2a60c5 = !![];
            blinkTimerId = setInterval( () => {
                var _0x174219 = _0x1bb317;
                ctx[_0x24d21f] ? (_0x2a60c5 = !_0x2a60c5,
                ctx[_0x24d21f][_0x174219(0x712)] = _0x2a60c5) : (clearInterval(blinkTimerId),
                blinkTimerId = null);
            }
            , 0x1f4);
        }
        !removeMarkTimerId && (removeMarkTimerId = setTimeout( () => {
            var _0x4ee179 = _0x1bb317;
            ctx[_0x24d21f] && (ctx[_0x4ee179(0x1a3)] && ctx[_0x4ee179(0x1a3)]['children'][_0x4ee179(0x424)](ctx[_0x24d21f]) && ctx['pointsContainer'][_0x4ee179(0x23c)](ctx[_0x24d21f]),
            ctx[_0x24d21f] = null),
            blinkTimerId && (clearInterval(blinkTimerId),
            blinkTimerId = null),
            removeMarkTimerId = null;
        }
        , 0x4e20));
    }
    ctx[_0x24d21f] && (ctx[_0x24d21f]['x'] = window[_0x1bb317(0x254)][_0x1bb317(0x481)],
    ctx[_0x24d21f]['y'] = window[_0x1bb317(0x254)][_0x1bb317(0xe6)],
    ctx[_0x1bb317(0x1a3)] && !ctx[_0x1bb317(0x1a3)][_0x1bb317(0x7ac)][_0x1bb317(0x424)](ctx[_0x24d21f]) && ctx[_0x1bb317(0x1a3)]['addChild'](ctx[_0x24d21f])),
    window['ooo'] && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['Ah'] && ooo['Xg']['Kf']['Wg']['Ah']['Sh'] && (ooo['Xg']['Kf']['Wg']['Ah']['Sh']['zIndex'] = 0x270f,
    ooo['Xg']['Kf']['Wg']['Ah'][_0x1bb317(0x4a9)] !== !![] && (ooo['Xg']['Kf']['Wg']['Ah']['sortableChildren'] = !![]),
    ooo['Xg']['Kf']['Wg'][_0x1bb317(0x4a9)] !== !![] && (ooo['Xg']['Kf']['Wg'][_0x1bb317(0x4a9)] = !![]));
};
function _typeof(_0x1f6025) {
    var _0x233e7e = _0x2e71e2;
    return (_typeof = typeof Symbol == _0x233e7e(0x61f) && typeof Symbol[_0x233e7e(0x423)] == _0x233e7e(0x157) ? function(_0x5ba50b) {
        return typeof _0x5ba50b;
    }
    : function(_0x3752c2) {
        var _0x8cbc2c = _0x233e7e;
        return _0x3752c2 && typeof Symbol == _0x8cbc2c(0x61f) && _0x3752c2[_0x8cbc2c(0x271)] === Symbol && _0x3752c2 !== Symbol['prototype'] ? 'symbol' : typeof _0x3752c2;
    }
    )(_0x1f6025);
}
(function() {
    var _0x5172d0 = _0x2e71e2
      , _0x21385e = {}
      , _0x52ace1 = {}
      , _0x5d1bbd = {}
      , _0x3f9428 = {};
    _0x5d1bbd['a'] = function(_0x53ea59) {
        var _0x3c2b2f = _0x3903
          , _0x26b9d4 = new String()
          , _0x3da263 = parseInt(_0x53ea59[_0x3c2b2f(0x5eb)](0x0, 0x2), 0x10);
        for (var _0x514f29 = 0x2; _0x514f29 < _0x53ea59[_0x3c2b2f(0x454)]; _0x514f29 += 0x2) {
            var _0x223573 = parseInt(_0x53ea59[_0x3c2b2f(0x5eb)](_0x514f29, _0x514f29 + 0x2), 0x10);
            _0x26b9d4 += String[_0x3c2b2f(0x1fd)](_0x223573 ^ (_0x3da263 = 0xed1 + _0x3da263 * 0x11a1 & 0xff));
        }
        ;return _0x26b9d4;
    }
    ,
    _0x5d1bbd['b'] = function(_0x1c4651) {
        var _0x205053 = _0x3903;
        return Function(_0x205053(0x591) + _0x1c4651 + ';\x20')();
    }
    ,
    _0x21385e['c'] = _0x5d1bbd['b'](_0x5172d0(0x71f)),
    _0x21385e['d'] = _0x21385e['c'][_0x5172d0(0x76a)],
    _0x5d1bbd['e'] = function() {
        var _0x116b2d = _0x5172d0;
        return _0x21385e['c'][_0x116b2d(0x242)] || 0x1;
    }
    ,
    _0x21385e['c'][_0x5172d0(0xfe)]('load', function() {
        var _0x2413a9 = _0x5172d0;
        let _0x36a055 = {
            'eie': null,
            'joystick': {
                'positionMode': 'L',
                'checked': !![],
                'size': 0x5a,
                'mode': _0x2413a9(0x6d7),
                'position': {
                    'left': _0x2413a9(0x1b4),
                    'bottom': '110px'
                },
                'color': _0x2413a9(0x1de),
                'pxy': 0x6e
            },
            'on': ![],
            'vj': null,
            'uj': null,
            'm': null,
            'n': null
        };
        var _0x221df5 = {
            'id_user': '',
            'nickname': _0x2413a9(0x100),
            'enemyNameHs': _0x2413a9(0x244),
            'teamCode': '',
            'playerX': 0x0,
            'playerY': 0x0,
            'hs': 0x0,
            'kill': 0x0,
            'message': '',
            'teamColor': localStorage['getItem'](_0x2413a9(0x585)) || _0x2413a9(0x6e0),
            'wssServer': ''
        };
        let _0x1b59ca = 0x0;
        const _0x2682b6 = 0x3e8;
        function _0x3412ba(_0x5753f7) {
            const _0x1114e5 = Date['now']();
            _0x1114e5 - _0x1b59ca > _0x2682b6 && (debugLog(_0x5753f7),
            _0x1b59ca = _0x1114e5);
        }
        let _0x36220d;
        const _0x25a720 = {
            'players': new Map()
        };
        function _0x23d25a() {
            var _0x69ffda = _0x2413a9;
            _0x36220d && _0x36220d[_0x69ffda(0x347)] !== WebSocket[_0x69ffda(0x152)] && (debugLog(_0x69ffda(0x6cc)),
            _0x36220d[_0x69ffda(0x21d)]()),
            _0x36220d = new WebSocket(_0x69ffda(0x4e0)),
            _0x36220d['addEventListener'](_0x69ffda(0x450), () => {
                var _0x4d96e0 = _0x69ffda;
                _0x34197b = !![],
                debugLog(_0x4d96e0(0x248));
            }
            ),
            _0x36220d['addEventListener'](_0x69ffda(0x21d), () => {
                var _0x5bf977 = _0x69ffda;
                _0x34197b = ![],
                debugLog(_0x5bf977(0x334)),
                _0x1631b8();
            }
            ),
            _0x36220d[_0x69ffda(0xfe)](_0x69ffda(0x70c), async _0x472755 => {
                var _0x4201ce = _0x69ffda;
                try {
                    const _0x109d4f = _0x472755['data']instanceof Blob ? JSON['parse'](await _0x472755['data'][_0x4201ce(0x2a7)]()) : JSON[_0x4201ce(0x608)](_0x472755['data']);
                    _0x109d4f[_0x4201ce(0x1bc)] === _0x4201ce(0x6a1) && (_0x25a720[_0x4201ce(0x5bb)][_0x4201ce(0x421)](_0x109d4f[_0x4201ce(0x798)], {
                        'nickname': _0x109d4f[_0x4201ce(0x197)],
                        'hskill': _0x109d4f[_0x4201ce(0x119)],
                        'teamColor': _0x109d4f['teamColor'] || 0xffffff
                    }),
                    updateTop8Hs()),
                    _0x5e4162(_0x109d4f);
                } catch (_0x1e7515) {
                    console[_0x4201ce(0x39e)](_0x4201ce(0x4b0), _0x1e7515);
                }
            }
            );
        }
        let _0x34197b = ![];
        const _0x1dde7f = 0x1388;
        function _0x1631b8() {
            !_0x34197b && setTimeout( () => {
                _0x23d25a();
            }
            , _0x1dde7f);
        }
        _0x23d25a(),
        window[_0x2413a9(0xfe)](_0x2413a9(0x76b), () => {
            var _0x2d381d = _0x2413a9;
            _0x36220d && _0x36220d[_0x2d381d(0x347)] === WebSocket[_0x2d381d(0x2fd)] && _0x36220d['close']();
        }
        );
        function _0x5e4162(_0x4a866f) {
            var _0x28ab34 = _0x2413a9;
            _0x4a866f[_0x28ab34(0x798)] === _0x28ab34(0x17c) && (createServerMessage(_0x28ab34(0x786), _0x4a866f[_0x28ab34(0x70c)]),
            debugLog(_0x28ab34(0x1e8) + _0x4a866f['id_user'] + _0x28ab34(0x3b2) + _0x4a866f[_0x28ab34(0x70c)]));
            if (_0x4a866f[_0x28ab34(0x2aa)] !== _0x221df5[_0x28ab34(0x2aa)])
                return;
            switch (_0x4a866f[_0x28ab34(0x1bc)]) {
            case _0x28ab34(0x3c8):
                _0x51e2a1(_0x4a866f[_0x28ab34(0x5bb)]);
                break;
            case _0x28ab34(0x187):
                _0x25af89(_0x4a866f);
                break;
            case _0x28ab34(0x6a1):
                _0x16a5d7(_0x4a866f);
                break;
            case _0x28ab34(0x25c):
                _0x2de8d5(_0x4a866f);
                break;
            case _0x28ab34(0x613):
                _0x1179d4(_0x4a866f['id']);
                break;
            default:
                debugLog(_0x28ab34(0x460), _0x4a866f);
            }
        }
        function _0x4e8cad() {
            var _0x27f286 = _0x2413a9;
            if (!_0x34197b) {
                debugLog(_0x27f286(0x525));
                return;
            }
            const _0x3cd01c = $(_0x27f286(0x214))[_0x27f286(0xfa)]()[_0x27f286(0x465)]();
            if (_0x3cd01c === '')
                return;
            const _0x511c7e = _0x221df5[_0x27f286(0x197)]['substring'](0x0, 0x10)
              , _0x727ed5 = getUserData(_0x221df5[_0x27f286(0x798)])
              , _0x4f9caa = {
                'type': _0x27f286(0x288),
                'id_user': _0x221df5['id_user'],
                'nickname': _0x511c7e,
                'message': _0x3cd01c,
                'wssServer': _0x221df5[_0x27f286(0x2aa)],
                'color': _0x727ed5 ? _0x727ed5['color'] : _0x27f286(0x212),
                'image': _0x727ed5 ? _0x727ed5[_0x27f286(0x2a9)] : _0x27f286(0x394)
            };
            _0x36220d[_0x27f286(0x5c4)](JSON[_0x27f286(0x6b1)](_0x4f9caa)),
            _0x5bdd76(_0x511c7e, _0x3cd01c, _0x221df5[_0x27f286(0x798)], _0x4f9caa[_0x27f286(0x3ea)], _0x4f9caa['image'], !![]),
            $('#chat-input')[_0x27f286(0xfa)]('');
        }
        function _0x5bdd76(_0x3aa53a, _0x250f16, _0x4dc693, _0x304f9a, _0xaaa7aa, _0x43ae3c=![]) {
            var _0x4fe3c0 = _0x2413a9;
            const _0x52a7d0 = _0xaaa7aa ? '<img\x20src=\x22' + _0xaaa7aa + _0x4fe3c0(0x4e1) : ''
              , _0x12d5b2 = _0x43ae3c ? _0x4fe3c0(0x3f5) : _0x4fe3c0(0x7bf)
              , _0x703431 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-message\x22\x20style=\x22background:\x20' + (_0x304f9a || 'rgba(255,\x20255,\x20255,\x200.1)') + _0x4fe3c0(0x315) + _0x52a7d0 + _0x4fe3c0(0x482) + _0x4dc693 + _0x4fe3c0(0x62e) + _0x12d5b2 + '\x22>' + _0x3aa53a + _0x4fe3c0(0x678) + _0x250f16 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
            $(_0x4fe3c0(0x496))[_0x4fe3c0(0x418)](_0x703431)[_0x4fe3c0(0x365)]($('#chat-history')[0x0]['scrollHeight']);
        }
        function _0x51e2a1(_0x3dc7a5) {
            var _0x43b5af = _0x2413a9;
            _0x3dc7a5[_0x43b5af(0x151)](_0x4ce192 => _0x25a720[_0x43b5af(0x5bb)][_0x43b5af(0x421)](_0x4ce192[_0x43b5af(0x798)], _0x4ce192)),
            debugLog(_0x43b5af(0x716), _0x3dc7a5);
        }
        function _0x25af89(_0x30fc91) {
            var _0x1dba44 = _0x2413a9;
            _0x25a720['players'][_0x1dba44(0x421)](_0x30fc91['id_user'], {
                ..._0x30fc91
            }),
            updateTop8Hs(),
            _0x30fc91['teamCode'] === _0x221df5[_0x1dba44(0x5ec)] && (createTeamUbication(_0x30fc91[_0x1dba44(0x5ec)], _0x30fc91[_0x1dba44(0x585)]),
            createTeamMessage(_0x30fc91[_0x1dba44(0x5ec)], _0x30fc91[_0x1dba44(0x197)], _0x30fc91[_0x1dba44(0x70c)]));
        }
        function _0x16a5d7(_0x2125fa) {
            var _0x2b1c01 = _0x2413a9;
            debugLog('🎯\x20HS\x20Güncelleme:\x20' + _0x2125fa['nickname']);
            const _0x24ea58 = _0x25a720[_0x2b1c01(0x5bb)][_0x2b1c01(0x3e4)](_0x2125fa[_0x2b1c01(0x798)]);
            _0x24ea58 ? (_0x24ea58['hskill']['hs'] += _0x2125fa[_0x2b1c01(0x119)]['hs'],
            _0x24ea58[_0x2b1c01(0x119)][_0x2b1c01(0x79c)] += _0x2125fa['hskill'][_0x2b1c01(0x79c)]) : _0x25a720['players'][_0x2b1c01(0x421)](_0x2125fa[_0x2b1c01(0x798)], {
                ..._0x2125fa,
                'hskill': {
                    ..._0x2125fa['hskill']
                },
                'position': {
                    'x': 0x0,
                    'y': 0x0
                }
            });
            const _0x343df6 = _0x25a720[_0x2b1c01(0x5bb)][_0x2b1c01(0x3e4)](_0x2125fa[_0x2b1c01(0x798)]);
            debugLog(_0x2b1c01(0x442), _0x343df6),
            updateTop8Hs();
        }
        function _0x2de8d5(_0xc8b360) {
            var _0x626301 = _0x2413a9;
            _0x25a720[_0x626301(0x5bb)]['delete'](_0xc8b360[_0x626301(0x798)]),
            debugLog(_0x626301(0x763) + _0xc8b360['nickname'] + _0x626301(0x18e)),
            updateTop8Hs(),
            clearTeamUbication();
        }
        function _0x1179d4(_0x51dc3d) {
            var _0x5b17d0 = _0x2413a9;
            _0x25a720['players'][_0x5b17d0(0xdf)](_0x51dc3d),
            debugLog('Jugador\x20' + _0x51dc3d + '\x20desconectado.');
        }
        function _0x5b2e89(_0x3f4b6d, _0x1333a0={}) {
            var _0x5caf53 = _0x2413a9;
            if (!_0x34197b) {
                debugLog(_0x5caf53(0x200));
                return;
            }
            if (_0x3f4b6d === _0x5caf53(0x187) && (!_0x221df5[_0x5caf53(0x5ec)] || _0x221df5[_0x5caf53(0x5ec)] === '')) {
                debugLog(_0x5caf53(0x39f));
                return;
            }
            const _0x556a2a = {
                'type': _0x3f4b6d,
                'id_user': _0x221df5['id_user'],
                'nickname': _0x221df5[_0x5caf53(0x197)],
                'enemyNameHs': _0x221df5[_0x5caf53(0x6d1)],
                'hskill': {
                    'hs': _0x221df5['hs'],
                    'kill': _0x221df5[_0x5caf53(0x79c)]
                },
                'position': {
                    'x': _0x221df5[_0x5caf53(0x481)],
                    'y': _0x221df5[_0x5caf53(0xe6)]
                },
                'message': _0x221df5[_0x5caf53(0x70c)],
                'teamCode': _0x221df5[_0x5caf53(0x5ec)],
                'teamColor': _0x221df5[_0x5caf53(0x585)],
                'wssServer': _0x221df5[_0x5caf53(0x2aa)],
                ..._0x1333a0
            };
            debugLog(_0x5caf53(0x114), _0x556a2a),
            _0x36220d[_0x5caf53(0x5c4)](JSON[_0x5caf53(0x6b1)](_0x556a2a));
        }
        let _0x1f9ad0 = 0x0
          , _0x587115 = [];
        const _0x58a71e = 0x64
          , _0x1d98af = 0xa;
        function _0x475044() {
            var _0x311388 = _0x2413a9;
            if (_0x587115[_0x311388(0x454)] > 0x0) {
                const _0x2f6836 = _0x587115[_0x311388(0x140)](0x0, _0x1d98af);
                _0x5b2e89(_0x311388(0x187), {
                    'batch': _0x2f6836
                });
            }
        }
        setInterval( () => {
            _0x475044();
        }
        , _0x58a71e);
        function _0x1e0ca9(_0x204515, _0x4674ed) {
            var _0x1d0e10 = _0x2413a9;
            const _0x562b0d = Date['now']();
            if (_0x562b0d - _0x1f9ad0 < 0x64)
                return;
            _0x1f9ad0 = _0x562b0d;
            if (!_0x221df5[_0x1d0e10(0x5ec)] || _0x221df5[_0x1d0e10(0x5ec)] === '') {
                debugLog(_0x1d0e10(0x181) + _0x221df5[_0x1d0e10(0x798)] + _0x1d0e10(0x1c0));
                return;
            }
            _0x221df5[_0x1d0e10(0x481)] = _0x204515,
            _0x221df5['playerY'] = _0x4674ed,
            _0x587115[_0x1d0e10(0x731)]({
                'x': _0x204515,
                'y': _0x4674ed
            }),
            debugLog(_0x1d0e10(0x181) + _0x221df5['id_user'] + _0x1d0e10(0x33e) + _0x204515 + ',\x20' + _0x4674ed + ')');
        }
        function _0x44b26d(_0x3290b4, _0x32aad2) {
            var _0x49b226 = _0x2413a9;
            _0x5b2e89('playerDeath', {
                'hskill': {
                    'hs': _0x3290b4,
                    'kill': _0x32aad2
                }
            }),
            debugLog('Jugador\x20' + _0x221df5[_0x49b226(0x798)] + _0x49b226(0x18e));
        }
        function _0x1b48b1(_0x6eb8ee, _0x1dfeb0) {
            var _0x48534c = _0x2413a9;
            debugLog(_0x48534c(0x4b4)),
            _0x5b2e89(_0x48534c(0x6a1), {
                'hskill': {
                    'hs': _0x6eb8ee,
                    'kill': _0x1dfeb0
                }
            }),
            debugLog(_0x48534c(0x754) + _0x6eb8ee + _0x48534c(0x622) + _0x1dfeb0),
            debugLog(_0x48534c(0x181) + _0x221df5[_0x48534c(0x798)] + _0x48534c(0x600) + _0x6eb8ee + _0x48534c(0x570) + _0x1dfeb0);
        }
        var _0x3e50a3;
        let _0x456264 = {
            's_l': 'https://wormx.store',
            'fullscreen': null,
            'headshot': 0x0,
            's_headshot': 0x0,
            'mobile': ![],
            'mo': 0x1,
            'mo1': {
                'x': -0x1,
                'y': -0x1
            },
            'mo2': {
                'x': -0x1,
                'y': -0x1
            },
            's_kill': 0x0,
            'kill': 0x0,
            'died': 0x0,
            'saveGame': ![],
            'forceUseLocalImages': ![],
            'localStorageEnabled': !![],
            'pm': {},
            'joystick': _0x36a055['joystick'],
            'j': null,
            'pk': 0x0,
            'pk0': '',
            'pk1': '',
            'pk2': '',
            'pk3': '',
            'pk4': '',
            'pk5': '',
            'pk6': '',
            'z': 0x1,
            'c_v': 0xde,
            'c_1': _0x2413a9(0x100),
            'c_2': _0x2413a9(0x52e),
            'c_3': _0x2413a9(0x440),
            'c_4': _0x2413a9(0x59e),
            'c_5': _0x2413a9(0x556),
            'd_1': _0x2413a9(0x1df),
            'd_2': _0x2413a9(0x35f),
            'd_3': _0x2413a9(0x7b3),
            'd_4': _0x2413a9(0x7af),
            'd_5': _0x2413a9(0x26d),
            'a': 0x0,
            'b': 0x0,
            'c': 0x0,
            'd': 0x0,
            'e': 0x0,
            'f': '',
            'g': 0x24,
            's_w': ![],
            's_n': '',
            'v_z': 0x0,
            'h': ![],
            'sn': !![],
            's': ![],
            'hz': ![],
            'fz': !![],
            'tt': ![],
            'vh': ![],
            'vp': ![],
            'iq': ![],
            'ctrl': ![],
            'r1': !![],
            'sc': 0x0,
            'wi': 0x0,
            'to': 0xa,
            'sm': 0x14,
            'pi': '',
            'pn': '',
            'se': {
                'a': [],
                'b': [],
                'c': [],
                'd': [],
                'e': [],
                'f': [],
                'g': [],
                'h': [],
                'i': [],
                'j': [],
                'k': []
            },
            'st': ![],
            'hh': 0x0,
            'sh': [],
            'ws': [],
            'we': [],
            'wm': [],
            'wg': [],
            'wh': [],
            'sg': [],
            'gg': null,
            'ig': -0x1,
            'so': 0x1,
            're': ![],
            'dg': null
        }
          , _0x451532 = localStorage['getItem']('SaveGamewft');
        if (_0x451532 && _0x451532 !== 'null') {
            let _0x52c822 = JSON[_0x2413a9(0x608)](_0x451532);
            for (let _0x5d6741 in _0x52c822) {
                _0x456264[_0x5d6741] = _0x52c822[_0x5d6741];
            }
        }
        ;!_0x456264[_0x2413a9(0x5bc)] && (_0x456264['favoriteSkins'] = [],
        localStorage['setItem'](_0x2413a9(0x4ab), JSON[_0x2413a9(0x6b1)](_0x456264)));
        _0x456264[_0x2413a9(0x71b)] === undefined && (_0x456264[_0x2413a9(0x71b)] = 0x0,
        localStorage[_0x2413a9(0x434)]('SaveGamewft', JSON[_0x2413a9(0x6b1)](_0x456264)));
        !_0x456264['selectedHats'] && (_0x456264[_0x2413a9(0x23d)] = [],
        localStorage[_0x2413a9(0x434)](_0x2413a9(0x4ab), JSON[_0x2413a9(0x6b1)](_0x456264)));
        _0x456264[_0x2413a9(0x647)] === undefined && (_0x456264[_0x2413a9(0x647)] = 0x0,
        localStorage[_0x2413a9(0x434)](_0x2413a9(0x4ab), JSON[_0x2413a9(0x6b1)](_0x456264)));
        !window[_0x2413a9(0x680)] && (window['globalHatTextureCache'] = {});
        try {
            if (localStorage[_0x2413a9(0x706)]) {
                const _0x9ec624 = JSON[_0x2413a9(0x608)](localStorage[_0x2413a9(0x706)]);
                for (const _0x2ac753 in _0x9ec624) {
                    wftObjects[_0x2413a9(0x3f4)](_0x2ac753) && (wftObjects[_0x2ac753] = _0x9ec624[_0x2ac753]);
                }
            }
        } catch (_0x4d431a) {
            console[_0x2413a9(0x39e)](_0x2413a9(0x258), _0x4d431a);
        }
        ;function _0x5027f5() {
            var _0x2bc800 = _0x2413a9;
            try {
                if (typeof localStorage === _0x2bc800(0x111))
                    return console[_0x2bc800(0x39e)](_0x2bc800(0x643)),
                    ![];
                var _0x7e664f = localStorage[_0x2bc800(0x3af)](_0x2bc800(0x601))
                  , _0x24594e = localStorage[_0x2bc800(0x3af)](_0x2bc800(0x2d5));
                return _0x7e664f && _0x24594e ? (typeof _0x456264 !== _0x2bc800(0x111) && (_0x456264[_0x2bc800(0x729)] = _0x24594e,
                _0x456264['forceUseLocalImages'] = !![],
                localStorage[_0x2bc800(0x434)]('SaveGamewft', JSON['stringify'](_0x456264))),
                !![]) : (console[_0x2bc800(0x470)](_0x2bc800(0x341)),
                ![]);
            } catch (_0x25fc03) {
                return console[_0x2bc800(0x39e)](_0x2bc800(0x326), _0x25fc03),
                ![];
            }
        }
        _0x5027f5();
        let _0x3891b7 = function() {
            var _0x4f6a1c = _0x2413a9;
            let _0x483eeb = ![];
            _0x456264[_0x4f6a1c(0x376)] = ![];
            var _0x45fc69 = navigator[_0x4f6a1c(0x7a9)] || navigator[_0x4f6a1c(0x52a)] || window[_0x4f6a1c(0x101)];
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i[_0x4f6a1c(0x62b)](_0x45fc69) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x4f6a1c(0x62b)](_0x45fc69['substr'](0x0, 0x4))) && (_0x483eeb = !![],
            _0x456264[_0x4f6a1c(0x376)] = !![]),
            _0x483eeb;
        }
          , _0x2b6ca3 = _0x456264['z'] || 0x1
          , _0x10626e = _0x456264['z'];
        Object[_0x2413a9(0x1db)](_0x456264, 'z', {
            'get': function() {
                return _0x10626e;
            },
            'set': function(_0x2b1126) {
                var _0xab6c8 = _0x2413a9;
                Math[_0xab6c8(0x664)](_0x2b1126 - _0x10626e) > 0.1 && (console['log'](_0xab6c8(0x1ed), _0x10626e, 'to', _0x2b1126),
                console[_0xab6c8(0x3df)]()),
                _0x10626e = _0x2b1126;
            }
        });
        let _0xa668f8 = function(_0x114f11) {
            var _0x15b9a3 = _0x2413a9;
            _0x456264['joystick'] ||= _0x36a055[_0x15b9a3(0x4c0)],
            _0x456264['joystick']['checked'] = _0x114f11[_0x15b9a3(0x274)],
            localStorage['setItem']('SaveGamewft', JSON['stringify'](_0x456264));
        }
          , _0x2ee544 = function(_0x49dde7) {
            var _0x1e242c = _0x2413a9;
            _0x456264['joystick'] ||= _0x36a055['joystick'],
            _0x456264[_0x1e242c(0x4c0)][_0x1e242c(0x3ea)] = _0x49dde7['value'],
            localStorage[_0x1e242c(0x434)](_0x1e242c(0x4ab), JSON[_0x1e242c(0x6b1)](_0x456264));
        }
          , _0x4e4225 = function(_0x328299) {
            var _0x1b7241 = _0x2413a9;
            _0x456264['joystick'] ||= _0x36a055[_0x1b7241(0x4c0)],
            _0x456264[_0x1b7241(0x4c0)]['mode'] = _0x328299[_0x1b7241(0x263)],
            localStorage[_0x1b7241(0x434)]('SaveGamewft', JSON[_0x1b7241(0x6b1)](_0x456264));
        }
          , _0x22dd30 = function(_0x29087c) {
            var _0x262b96 = _0x2413a9;
            _0x456264[_0x262b96(0x4c0)] ||= _0x36a055['joystick'],
            _0x456264['joystick'][_0x262b96(0x627)] = {
                'left': _0x262b96(0x37d),
                'bottom': _0x262b96(0x37d)
            },
            _0x29087c['value'] === 'R' && (_0x456264[_0x262b96(0x4c0)]['position'] = {
                'right': '75px',
                'bottom': _0x262b96(0x37d)
            }),
            _0x456264[_0x262b96(0x4c0)]['positionMode'] = _0x29087c[_0x262b96(0x263)],
            localStorage['setItem'](_0x262b96(0x4ab), JSON['stringify'](_0x456264));
        }
          , _0x1b8fb9 = function(_0x232d10) {
            var _0xd9401c = _0x2413a9;
            _0x456264['joystick'] ||= _0x36a055[_0xd9401c(0x4c0)],
            _0x456264['joystick'][_0xd9401c(0x627)] = {
                'left': (parseInt(_0x232d10[_0xd9401c(0x263)]) + 0xa)[_0xd9401c(0xef)]() + 'px',
                'bottom': _0x232d10[_0xd9401c(0x263)] + 'px'
            },
            _0x456264[_0xd9401c(0x4c0)][_0xd9401c(0x386)] === 'R' && (_0x456264[_0xd9401c(0x4c0)][_0xd9401c(0x627)] = {
                'right': (parseInt(_0x232d10[_0xd9401c(0x263)]) + 0xa)['toString']() + 'px',
                'bottom': _0x232d10[_0xd9401c(0x263)] + 'px'
            }),
            _0x456264[_0xd9401c(0x4c0)][_0xd9401c(0x640)] = _0x232d10['value'],
            localStorage[_0xd9401c(0x434)](_0xd9401c(0x4ab), JSON[_0xd9401c(0x6b1)](_0x456264));
        }
          , _0x25f0e7 = function(_0x30fc20) {
            var _0x4229d0 = _0x2413a9;
            _0x456264['joystick'] ||= _0x36a055[_0x4229d0(0x4c0)],
            _0x456264[_0x4229d0(0x4c0)][_0x4229d0(0x124)] = _0x30fc20['value'],
            localStorage[_0x4229d0(0x434)](_0x4229d0(0x4ab), JSON[_0x4229d0(0x6b1)](_0x456264));
        }
          , _0x52814f = function(_0xa1a3d, _0x471a32, _0x13e4a1, _0x1b88c4, _0x151331, _0x40fed2) {
            var _0x436f05 = _0x2413a9;
            let _0x507637 = {
                'a': '',
                'b': 0x0,
                'c': ''
            };
            _0xa1a3d > _0x456264['g'] * 0x64 + 0x64 || _0xa1a3d < _0x456264['g'] * 0xa || _0xa1a3d === undefined ? (_0x456264['a'] = _0xa1a3d,
            _0xa1a3d === undefined && (_0x456264['a'] = Math[_0x436f05(0x47c)](Math[_0x436f05(0x314)]() * (_0x456264['g'] / 0x9) + (_0x456264['g'] - _0x456264['g'] / 0x9))),
            _0x507637['a'] = '00') : (_0x456264['a'] = _0xa1a3d - _0x456264['g'] * 0xa,
            _0x507637['b'] = _0x456264['a'],
            _0x456264['a'] = _0x456264['a'] % (_0x456264['g'] / 0x9),
            _0x507637['b'] = (_0x507637['b'] - _0x456264['a']) / (_0x456264['g'] / 0x9) + 0x1,
            _0x456264['a'] = _0x456264['a'] + (_0x456264['g'] - _0x456264['g'] / 0x9),
            _0x507637['a'] = _0x507637['b'][_0x436f05(0xef)](_0x456264['g'])[_0x436f05(0x66c)](0x2, 0x0));
            _0x471a32 > _0x456264['g'] * 0x14 || _0x471a32 < _0x456264['g'] / 0x9 * 0x64 || _0x471a32 === undefined ? _0x471a32 > _0x456264['g'] * 0x14 && _0x471a32 < _0x456264['g'] * 0x1e ? (_0x456264['b'] = _0x471a32 - _0x456264['g'] * 0x14,
            _0x507637['a'] = _0x507637['a'] + _0x456264['b'][_0x436f05(0xef)](_0x456264['g']),
            _0x456264['b'] = 0x0,
            _0x507637['c'] = _0x507637['c'] + '1') : (_0x456264['b'] = _0x471a32,
            _0x471a32 === undefined && (_0x456264['b'] = 0x0),
            _0x507637['a'] = _0x507637['a'] + '0',
            _0x507637['c'] = _0x507637['c'] + '0') : (_0x456264['b'] = _0x471a32 - _0x456264['g'] / 0x9 * 0x64 + _0x456264['g'] / _0x456264['g'],
            _0x507637['a'] = _0x507637['a'] + _0x456264['b'][_0x436f05(0xef)](_0x456264['g']),
            _0x456264['b'] = 0x0,
            _0x507637['c'] = _0x507637['c'] + '0');
            _0x13e4a1 > _0x456264['g'] * 0x14 || _0x13e4a1 < _0x456264['g'] / 0x9 * 0x64 || _0x13e4a1 === undefined ? _0x13e4a1 > _0x456264['g'] * 0x14 && _0x13e4a1 < _0x456264['g'] * 0x1e ? (_0x456264['c'] = _0x13e4a1 - _0x456264['g'] * 0x14,
            _0x507637['a'] = _0x507637['a'] + _0x456264['c']['toString'](_0x456264['g']),
            _0x456264['c'] = 0x0,
            _0x507637['c'] = _0x507637['c'] + '1') : (_0x456264['c'] = _0x13e4a1,
            _0x13e4a1 === undefined && (_0x456264['c'] = 0x0),
            _0x507637['a'] = _0x507637['a'] + '0',
            _0x507637['c'] = _0x507637['c'] + '0') : (_0x456264['c'] = _0x13e4a1 - _0x456264['g'] / 0x9 * 0x64 + _0x456264['g'] / _0x456264['g'],
            _0x507637['a'] = _0x507637['a'] + _0x456264['c']['toString'](_0x456264['g']),
            _0x456264['c'] = 0x0,
            _0x507637['c'] = _0x507637['c'] + '0');
            _0x1b88c4 > _0x456264['g'] * 0x14 || _0x1b88c4 < _0x456264['g'] / 0x9 * 0x64 || _0x1b88c4 === undefined ? _0x1b88c4 > _0x456264['g'] * 0x14 && _0x1b88c4 < _0x456264['g'] * 0x1e ? (_0x456264['d'] = _0x1b88c4 - _0x456264['g'] * 0x14,
            _0x456264['d']['toString'](_0x456264['g']) === 'N' ? _0x507637['a'] = _0x507637['a'] + '0' : _0x507637['a'] = _0x507637['a'] + _0x456264['d'][_0x436f05(0xef)](_0x456264['g']),
            _0x456264['d'] = 0x0,
            _0x507637['c'] = _0x507637['c'] + '1') : (_0x456264['d'] = _0x1b88c4,
            _0x1b88c4 === undefined && (_0x456264['d'] = 0x0),
            _0x507637['a'] = _0x507637['a'] + '0',
            _0x507637['c'] = _0x507637['c'] + '0') : (_0x456264['d'] = _0x1b88c4 - _0x456264['g'] / 0x9 * 0x64 + _0x456264['g'] / _0x456264['g'],
            _0x456264['d']['toString'](_0x456264['g']) === 'N' ? _0x507637['a'] = _0x507637['a'] + '0' : _0x507637['a'] = _0x507637['a'] + _0x456264['d'][_0x436f05(0xef)](_0x456264['g']),
            _0x456264['d'] = 0x0,
            _0x507637['c'] = _0x507637['c'] + '0');
            if (_0x151331 > _0x456264['g'] * 0x14 || _0x151331 < _0x456264['g'] / 0x9 * 0x64 || _0x151331 === undefined) {
                if (_0x151331 > _0x456264['g'] * 0x14 && _0x151331 < _0x456264['g'] * 0x1e) {
                    _0x507637['b'] = _0x456264['g'] / _0x456264['g'];
                    if (_0x151331 <= _0x456264['g'] * 0x14 + (_0x456264['g'] - 0x1))
                        _0x456264['e'] = _0x151331 - _0x456264['g'] * 0x14;
                    else {
                        if (_0x151331 <= _0x456264['g'] * 0x14 + (_0x456264['g'] - 0x1) * 0x2)
                            _0x507637['b'] = _0x507637['b'] * 0x2,
                            _0x456264['e'] = _0x151331 - _0x456264['g'] * 0x14 - (_0x456264['g'] - 0x1);
                        else {
                            if (_0x151331 <= _0x456264['g'] * 0x14 + (_0x456264['g'] - 0x1) * 0x3)
                                _0x456264['e'] = _0x151331 - _0x456264['g'] * 0x14 - (_0x456264['g'] - 0x1) * 0x2;
                            else
                                _0x151331 <= _0x456264['g'] * 0x14 + (_0x456264['g'] - 0x1) * 0x4 ? (_0x507637['b'] = _0x507637['b'] * 0x2,
                                _0x456264['e'] = _0x151331 - _0x456264['g'] * 0x14 - (_0x456264['g'] - 0x1) * 0x3) : _0x456264['e'] = 0x0;
                        }
                    }
                    _0x456264['e'] >= _0x456264['g'] && (_0x507637['b'] = 0x2,
                    _0x456264['e'] = _0x456264['e'] - (_0x456264['g'] - 0x1)),
                    _0x507637['a'] = _0x507637['a'] + _0x456264['e'][_0x436f05(0xef)](_0x456264['g']),
                    _0x456264['e'] = 0x0,
                    _0x507637['c'] = _0x507637['c'] + '1';
                } else
                    _0x456264['e'] = _0x151331,
                    _0x151331 === undefined && (_0x456264['e'] = 0x0),
                    _0x507637['a'] = _0x507637['a'] + '0',
                    _0x507637['c'] = _0x507637['c'] + '0',
                    _0x507637['b'] = 0x0;
            } else
                _0x507637['b'] = _0x456264['g'] / _0x456264['g'],
                _0x151331 - _0x456264['g'] / 0x9 * 0x64 + 0x1 >= _0x456264['g'] ? (_0x456264['e'] = _0x151331 - (_0x456264['g'] / 0x9 * 0x64 + (_0x456264['g'] - 0x1)),
                _0x507637['b'] = _0x507637['b'] * 0x2) : _0x456264['e'] = _0x151331 - _0x456264['g'] / 0x9 * 0x64 + _0x507637['b'],
                _0x507637['a'] = _0x507637['a'] + _0x456264['e']['toString'](_0x456264['g']),
                _0x456264['e'] = 0x0,
                _0x507637['c'] = _0x507637['c'] + '0';
            if (_0x507637['a'] == _0x436f05(0x10f))
                _0x456264['f'] = _0x40fed2[_0x436f05(0x337)](0x0, 0x16)[_0x436f05(0x720)](0x16);
            else {
                let _0xd47fe6 = parseInt(_0x507637['c'], 0x2);
                _0x151331 > 0x316 && _0x151331 <= 0x35c && (_0xd47fe6 += 0x10),
                _0x507637['b'] <= 0x1 ? _0x507637['a'] = _0x507637['a']['substr'](0x0, 0x5) + '.' + _0x507637['a'][_0x436f05(0x337)](0x5, 0x1) : _0x507637['a'] = _0x507637['a'][_0x436f05(0x337)](0x0, 0x4) + '.' + _0x507637['a'][_0x436f05(0x337)](0x4, 0x2),
                _0x40fed2 == '' && (_0x40fed2 = _0x436f05(0x568)),
                _0x507637['c'] == _0x436f05(0x19b) ? (_0x40fed2[_0x436f05(0x337)](0x17, 0x1) == '.' && (_0x40fed2 = _0x40fed2[_0x436f05(0x337)](0x0, 0x17)['padEnd'](0x17) + '\x20' + _0x40fed2['substr'](0x18, 0x1)[_0x436f05(0x720)](0x1)),
                _0x456264['f'] = (_0x40fed2[_0x436f05(0x454)] >= 0x20 ? _0x40fed2[_0x436f05(0x337)](0x0, 0x19) : _0x40fed2['substr'](0x0, 0x19)[_0x436f05(0x720)](0x19)) + _0x507637['a']) : _0x456264['f'] = (_0x40fed2[_0x436f05(0x454)] >= 0x20 ? _0x40fed2[_0x436f05(0x337)](0x0, 0x17) : _0x40fed2['substr'](0x0, 0x17)[_0x436f05(0x720)](0x17)) + '.' + _0xd47fe6[_0x436f05(0xef)](_0x456264['g']) + _0x507637['a'],
                _0x456264['f'] = _0x456264['f'][_0x436f05(0x5a9)]('\x20', '_');
            }
        }
          , _0x4180af = function(_0x475d04) {
            var _0x3c50cd = _0x2413a9;
            let _0x29e985;
            try {
                return _0x456264[_0x3c50cd(0x4c0)] ||= _0x36a055['joystick'],
                _0x3891b7() && _0x475d04 && _0x456264[_0x3c50cd(0x4c0)][_0x3c50cd(0x274)] && (_0x29e985 = nipplejs[_0x3c50cd(0x52d)](_0x456264[_0x3c50cd(0x4c0)]))['on'](_0x3c50cd(0x472), function(_0x2e1161, _0x5db0bf) {
                    var _0x87fc78 = _0x3c50cd;
                    _0x36a055[_0x87fc78(0x1f6)]['fo'] = _0x5db0bf[_0x87fc78(0x4c7)]['radian'] <= Math['PI'] ? _0x5db0bf[_0x87fc78(0x4c7)][_0x87fc78(0x1ba)] * -0x1 : Math['PI'] - (_0x5db0bf[_0x87fc78(0x4c7)]['radian'] - Math['PI']);
                }),
                _0x29e985;
            } catch (_0x2c4ff2) {
                console['error'](_0x2c4ff2);
            }
        }
          , _0x26e9e6 = function(_0x184bd2) {
            var _0x24d562 = _0x2413a9;
            let _0x35e71e = {
                'a': 0x0,
                'b': 0x0,
                'c': 0x0,
                'd': 0x0,
                'e': 0x0,
                'f': '',
                'g': 0x0,
                'h': '',
                'i': ''
            }
              , _0x37319a = 0x0;
            _0x35e71e['h'] = _0x184bd2[_0x24d562(0x337)](-0x9);
            if (_0x35e71e['h'][_0x24d562(0x337)](0x0, 0x1) != '.')
                _0x35e71e['i'] = '0000';
            else
                (_0x37319a = parseInt(_0x35e71e['h']['substr'](0x1, 0x1), _0x456264['g'])) > 0xf ? (_0x37319a -= 0x10,
                _0x35e71e['i'] = _0x37319a[_0x24d562(0xef)](0x2)[_0x24d562(0x66c)](0x4, 0x0)) : (_0x35e71e['i'] = _0x37319a[_0x24d562(0xef)](0x2)[_0x24d562(0x66c)](0x4, 0x0),
                _0x37319a = 0x0);
            return _0x35e71e['f'] = _0x184bd2[_0x24d562(0x337)](-0x7),
            _0x35e71e['f']['substr'](0x0, 0x2) != '00' && (_0x35e71e['a'] = parseInt(_0x35e71e['f'][_0x24d562(0x337)](0x0, 0x2), _0x456264['g']),
            _0x35e71e['a'] = (_0x35e71e['a'] - 0x1) * (_0x456264['g'] / 0x9) + _0x456264['g'] * 0xa - (_0x456264['g'] - 0x4)),
            _0x35e71e['f'][_0x24d562(0x337)](0x5, 0x1) == '.' ? _0x35e71e['f'][_0x24d562(0x337)](0x6, 0x1) != '0' && (_0x35e71e['e'] = parseInt(_0x35e71e['f']['substr'](0x6, 0x1), _0x456264['g']),
            _0x35e71e['i'][_0x24d562(0x337)](0x3, 0x1) != '0' ? _0x37319a > 0x0 ? _0x35e71e['e'] = _0x35e71e['e'] + _0x456264['g'] * 0x14 + (_0x456264['g'] - 0x1) * 0x2 : _0x35e71e['e'] = _0x35e71e['e'] + _0x456264['g'] * 0x14 : _0x35e71e['e'] = _0x35e71e['e'] - 0x1 + _0x456264['g'] / 0x9 * 0x64) : (_0x35e71e['e'] = parseInt(_0x35e71e['f'][_0x24d562(0x337)](0x6, 0x1), _0x456264['g']),
            _0x35e71e['i']['substr'](0x3, 0x1) != '0' ? _0x37319a > 0x0 ? _0x35e71e['e'] = _0x35e71e['e'] + _0x456264['g'] * 0x14 + (_0x456264['g'] - 0x1) * 0x3 : _0x35e71e['e'] = _0x35e71e['e'] + _0x456264['g'] * 0x14 + (_0x456264['g'] - 0x1) : _0x35e71e['e'] = _0x35e71e['e'] + (_0x456264['g'] / 0x9 * 0x64 + (_0x456264['g'] - 0x1))),
            _0x35e71e['f'] = _0x35e71e['f']['replace']('.', ''),
            _0x35e71e['f']['substr'](0x2, 0x1) != '0' && (_0x35e71e['b'] = parseInt(_0x35e71e['f'][_0x24d562(0x337)](0x2, 0x1), _0x456264['g']),
            _0x35e71e['i'][_0x24d562(0x337)](0x0, 0x1) != '0' ? _0x35e71e['b'] = _0x35e71e['b'] + _0x456264['g'] * 0x14 : _0x35e71e['b'] = _0x35e71e['b'] - 0x1 + _0x456264['g'] / 0x9 * 0x64),
            _0x35e71e['f'][_0x24d562(0x337)](0x3, 0x1) != '0' && (_0x35e71e['c'] = parseInt(_0x35e71e['f'][_0x24d562(0x337)](0x3, 0x1), _0x456264['g']),
            _0x35e71e['i'][_0x24d562(0x337)](0x1, 0x1) != '0' ? _0x35e71e['c'] = _0x35e71e['c'] + _0x456264['g'] * 0x14 : _0x35e71e['c'] = _0x35e71e['c'] - 0x1 + _0x456264['g'] / 0x9 * 0x64),
            _0x35e71e['f'][_0x24d562(0x337)](0x4, 0x1) != '0' && (_0x35e71e['d'] = parseInt(_0x35e71e['f'][_0x24d562(0x337)](0x4, 0x1), _0x456264['g']),
            _0x35e71e['i'][_0x24d562(0x337)](0x2, 0x1) != '0' ? _0x35e71e['d'] = _0x35e71e['d'] + _0x456264['g'] * 0x14 : _0x35e71e['d'] = _0x35e71e['d'] - 0x1 + _0x456264['g'] / 0x9 * 0x64),
            _0x35e71e;
        }
          , _0x114236 = function(_0xb6cbc1) {
            return !(_0xb6cbc1 > _0x456264['g'] * 0x1e) && !(_0xb6cbc1 < _0x456264['g'] / 0x9 * 0x64) || _0xb6cbc1 == 0x0;
        }
          , _0x1f51ae = function(_0x2762b8) {
            var _0x520c8a = _0x2413a9;
            return /^(.{25})(\w{5}\.\w{1})$/[_0x520c8a(0x62b)](_0x2762b8) || /^(.{25})(\w{4}\.\w{2})$/[_0x520c8a(0x62b)](_0x2762b8);
        }
          , _0x42d009 = function(_0x4b2e2e) {
            var _0x3cd00e = _0x2413a9;
            _0x4b2e2e = _0x4b2e2e[_0x3cd00e(0x5a9)]('_', '\x20');
            if (/^(.{25})(\w{7})$/[_0x3cd00e(0x62b)](_0x4b2e2e)) {
                for (_0x4b2e2e = _0x4b2e2e[_0x3cd00e(0x337)](0x0, 0xf)[_0x3cd00e(0x465)](); _0x4b2e2e[_0x3cd00e(0x337)](_0x4b2e2e['length'] - 0x1, 0x1) == '.'; ) {
                    _0x4b2e2e = _0x4b2e2e[_0x3cd00e(0x337)](0x0, _0x4b2e2e[_0x3cd00e(0x454)] - 0x1);
                }
                ;return _0x4b2e2e;
            }
            ;return /^(.{25})(\w{5}\.\w{1})$/[_0x3cd00e(0x62b)](_0x4b2e2e) || /^(.{25})(\w{4}\.\w{2})$/[_0x3cd00e(0x62b)](_0x4b2e2e) ? _0x4b2e2e[_0x3cd00e(0x337)](-0x9)[_0x3cd00e(0x337)](0x0, 0x1) != '.' ? _0x4b2e2e[_0x3cd00e(0x337)](0x0, 0x19)[_0x3cd00e(0x465)]() : _0x4b2e2e[_0x3cd00e(0x337)](0x0, 0x17)[_0x3cd00e(0x465)]() : _0x4b2e2e;
        };
        _0x456264['loading'] = !![];
        var _0x391bb6 = localStorage[_0x2413a9(0x3af)](_0x2413a9(0x351));
        localStorage[_0x2413a9(0x434)](_0x2413a9(0x46a), _0x2413a9(0x6b3)),
        localStorage[_0x2413a9(0x434)](_0x2413a9(0x466), _0x2413a9(0x251)),
        localStorage[_0x2413a9(0x434)](_0x2413a9(0x6e9), _0x2413a9(0x45e));
        var _0x2a01fb = localStorage[_0x2413a9(0x3af)](_0x2413a9(0x73f))
          , _0x491056 = localStorage[_0x2413a9(0x3af)](_0x2413a9(0x601)) != null ? localStorage[_0x2413a9(0x3af)]('wfti')[_0x2413a9(0xf9)](',') : localStorage[_0x2413a9(0x3af)]('wfti')
          , _0x584a0d = localStorage[_0x2413a9(0x3af)]('wftit')
          , _0x2fae16 = localStorage[_0x2413a9(0x3af)](_0x2413a9(0x74f))
          , _0x385553 = localStorage[_0x2413a9(0x3af)](_0x2413a9(0x493));
        $(_0x2413a9(0x489))[_0x2413a9(0x645)]('.description-text'),
        $(_0x2413a9(0x5d3))[_0x2413a9(0x645)](_0x2413a9(0xdd)),
        $(_0x2413a9(0x453))[_0x2413a9(0x645)](_0x2413a9(0xdd)),
        $(_0x2413a9(0x4da))[_0x2413a9(0x645)](_0x2413a9(0xdd)),
        $('#mm-action-buttons')[_0x2413a9(0x7a1)](function() {
            var _0x29322a = _0x2413a9;
            $('#port_id')[_0x29322a(0xfa)](''),
            $(_0x29322a(0x3ec))[_0x29322a(0xfa)]('');
        }),
        $(_0x2413a9(0x2a4))[_0x2413a9(0x259)](_0x2413a9(0x4d4), _0x2413a9(0x15d)),
        $(_0x2413a9(0x5d9))[_0x2413a9(0x259)](_0x2413a9(0x4d4), 'none'),
        $(_0x2413a9(0x789))[_0x2413a9(0x259)](_0x2413a9(0x4d4), 'none'),
        $(_0x2413a9(0x127))[_0x2413a9(0x259)](_0x2413a9(0x4d4), _0x2413a9(0x20f)),
        $(_0x2413a9(0x294))['css'](_0x2413a9(0x4d4), _0x2413a9(0x20f)),
        $(_0x2413a9(0x6ef))[_0x2413a9(0x259)](_0x2413a9(0x4d4), _0x2413a9(0x20f)),
        $('#mm-player-avatar')[_0x2413a9(0x683)](),
        $(_0x2413a9(0x6ef))[_0x2413a9(0x259)](_0x2413a9(0x4d4), _0x2413a9(0x20f)),
        $(_0x2413a9(0x57f))[_0x2413a9(0x259)](_0x2413a9(0x627), _0x2413a9(0x679)),
        $(_0x2413a9(0x57f))[_0x2413a9(0x259)](_0x2413a9(0x777), _0x2413a9(0x3c0)),
        $(_0x2413a9(0x57f))['css'](_0x2413a9(0x4ff), _0x2413a9(0x1b2)),
        $(_0x2413a9(0x56e))['css'](_0x2413a9(0x4d4), _0x2413a9(0x15d));
        var _0x5a8046 = null
          , _0x5b773d = null
          , _0x48df10 = ![]
          , _0x747c75 = 0x37
          , _0xf48252 = 0x1
          , _0x3ff99d = !![];
        if (_0x491056 && _0x584a0d && _0x584a0d == _0x456264[_0x2413a9(0x729)])
            ;
        else
            fetch(_0x2413a9(0x247), {
                'headers': {
                    'Content-Type': _0x2413a9(0x284)
                },
                'method': _0x2413a9(0x3aa),
                'body': JSON[_0x2413a9(0x6b1)]({
                    'img': 'i2'
                })
            })[_0x2413a9(0x268)](async function(_0x354004) {
                var _0x241665 = _0x2413a9;
                _0x491056 = (_0x354004 = await _0x354004[_0x241665(0x55a)]())['i']['split']('.'),
                localStorage[_0x241665(0x434)]('wfti', _0x491056),
                localStorage['setItem'](_0x241665(0x2d5), _0x354004['vs']),
                _0x456264[_0x241665(0x729)] = _0x354004['vs'],
                window['location'][_0x241665(0x6bb)]();
            })['catch'](function(_0x4634b9) {});
        ;var _0x33acd6 = PIXI[_0x2413a9(0x61d)][_0x2413a9(0x717)](_0x456264[_0x2413a9(0x595)] + _0x2413a9(0x5af))
          , _0x49fe8a = PIXI[_0x2413a9(0x61d)][_0x2413a9(0x717)](_0x456264[_0x2413a9(0x595)] + _0x2413a9(0x184))
          , _0x24aaab = PIXI[_0x2413a9(0x61d)]['from'](_0x456264[_0x2413a9(0x595)] + _0x2413a9(0x569))
          , _0x5e2b4a = PIXI[_0x2413a9(0x61d)][_0x2413a9(0x717)](_0x456264[_0x2413a9(0x595)] + _0x2413a9(0x1b5))
          , _0x1f8aa4 = PIXI['Texture'][_0x2413a9(0x717)](_0x456264['s_l'] + _0x2413a9(0x4eb))
          , _0x2e6d64 = PIXI[_0x2413a9(0x61d)]['from'](_0x456264[_0x2413a9(0x595)] + _0x2413a9(0x63a))
          , _0x44344d = PIXI[_0x2413a9(0x61d)][_0x2413a9(0x717)](_0x456264[_0x2413a9(0x595)] + '/get_store.phpitem=z_i.png')
          , _0x3b5185 = PIXI[_0x2413a9(0x61d)][_0x2413a9(0x717)](_0x456264[_0x2413a9(0x595)] + _0x2413a9(0x4fc))
          , _0x2223f2 = new PIXI['Sprite'](_0x33acd6);
        _0x2223f2['buttonMode'] = !![],
        _0x2223f2[_0x2413a9(0x48d)][_0x2413a9(0x421)](0.5),
        _0x2223f2['x'] = -0x41,
        _0x2223f2['y'] = 0x19,
        _0x2223f2[_0x2413a9(0x499)] = !![],
        _0x2223f2[_0x2413a9(0x327)] = !![];
        var _0x475ab5 = new PIXI[(_0x2413a9(0x597))](_0x24aaab);
        _0x475ab5[_0x2413a9(0x327)] = !![],
        _0x475ab5[_0x2413a9(0x48d)][_0x2413a9(0x421)](0.5),
        _0x475ab5['x'] = -0x21,
        _0x475ab5['y'] = 0x19,
        _0x475ab5[_0x2413a9(0x499)] = !![],
        _0x475ab5['buttonMode'] = !![];
        var _0x2ca05e = new PIXI['Sprite'](_0x1f8aa4);
        _0x2ca05e[_0x2413a9(0x327)] = !![],
        _0x2ca05e['anchor'][_0x2413a9(0x421)](0.5),
        _0x2ca05e['x'] = -0x1,
        _0x2ca05e['y'] = 0x19,
        _0x2ca05e[_0x2413a9(0x499)] = !![],
        _0x2ca05e[_0x2413a9(0x327)] = !![];
        var _0x3f7e4f = new PIXI[(_0x2413a9(0x597))](_0x3b5185);
        _0x3f7e4f[_0x2413a9(0x327)] = !![],
        _0x3f7e4f['anchor'][_0x2413a9(0x421)](0.5),
        _0x3f7e4f['x'] = -0x1,
        _0x3f7e4f['y'] = 0x19,
        _0x3f7e4f[_0x2413a9(0x499)] = !![],
        _0x3f7e4f[_0x2413a9(0x327)] = !![];
        var _0x3dd9ba = new PIXI['Sprite'](_0x44344d);
        _0x3dd9ba[_0x2413a9(0x327)] = !![],
        _0x3dd9ba[_0x2413a9(0x48d)][_0x2413a9(0x421)](0.5),
        _0x3dd9ba['x'] = -0x21,
        _0x3dd9ba['y'] = 0x19,
        _0x3dd9ba[_0x2413a9(0x499)] = !![],
        _0x3dd9ba[_0x2413a9(0x327)] = !![],
        _0x475ab5['alpha'] = 0.25,
        _0x2223f2[_0x2413a9(0x552)] = 0.25,
        _0x2ca05e['alpha'] = 0.25,
        _0x3dd9ba[_0x2413a9(0x552)] = 0.25,
        _0x3f7e4f[_0x2413a9(0x552)] = 0.25;
        var _0x11ebb7 = new PIXI[(_0x2413a9(0x2e7))](_0x2413a9(0x4e6),{
            'fontFamily': _0x2413a9(0x510),
            'fill': _0x2413a9(0xfd),
            'fontSize': 0xc
        });
        _0x11ebb7['anchor']['x'] = 0.5,
        _0x11ebb7['position']['x'] = 0x6e;
        var _0x305126 = document[_0x2413a9(0x44f)]('game-cont')
          , _0x5c12d0 = document[_0x2413a9(0x44f)](_0x2413a9(0x47b))
          , _0x389528 = $(_0x2413a9(0x1c1));
        _0x21385e['d']['getElementById'](_0x2413a9(0x11b))['style'][_0x2413a9(0x4d4)] = _0x2413a9(0x20f),
        function(_0x5cba79, _0x357ef8, _0x1c6f91) {
            var _0x36cba8 = _0x2413a9;
            function _0x32353f(_0x254cf4, _0x1feed8) {
                return _typeof(_0x254cf4) === _0x1feed8;
            }
            function _0x3a588d() {
                var _0x428f62 = _0x3903;
                if (_typeof(_0x357ef8[_0x428f62(0x5d0)]) != _0x428f62(0x61f))
                    return _0x357ef8['createElement'](arguments[0x0]);
                else
                    return _0x1a4b31 ? _0x357ef8[_0x428f62(0x5e5)][_0x428f62(0x11d)](_0x357ef8, 'http://www.w3.org/2000/svg', arguments[0x0]) : _0x357ef8[_0x428f62(0x5d0)][_0x428f62(0x581)](_0x357ef8, arguments);
            }
            var _0x464a23 = []
              , _0x77b676 = []
              , _0x561d6e = {
                '_version': '3.3.1',
                '_config': {
                    'classPrefix': '',
                    'enableClasses': !![],
                    'enableJSClass': !![],
                    'usePrefixes': !![]
                },
                '_q': [],
                'on': function(_0x5d353d, _0x504537) {
                    var _0x61a6c9 = this;
                    setTimeout(function() {
                        _0x504537(_0x61a6c9[_0x5d353d]);
                    }, 0x0);
                },
                'addTest': function(_0x2e6b40, _0x1fe0f2, _0x27c64b) {
                    var _0x6fb259 = _0x3903;
                    _0x77b676[_0x6fb259(0x731)]({
                        'name': _0x2e6b40,
                        'fn': _0x1fe0f2,
                        'options': _0x27c64b
                    });
                },
                'addAsyncTest': function(_0x47aed6) {
                    var _0x42d0f2 = _0x3903;
                    _0x77b676[_0x42d0f2(0x731)]({
                        'name': null,
                        'fn': _0x47aed6
                    });
                }
            };
            function _0x568bd6() {}
            _0x568bd6['prototype'] = _0x561d6e,
            _0x568bd6 = new _0x568bd6();
            var _0x31f127 = ![];
            try {
                _0x31f127 = 'WebSocket'in _0x5cba79 && _0x5cba79['WebSocket'][_0x36cba8(0x519)] === 0x2;
            } catch (_0x43a833) {}
            ;_0x568bd6[_0x36cba8(0x438)](_0x36cba8(0x210), _0x31f127);
            var _0x1999fd = _0x357ef8[_0x36cba8(0x3e8)]
              , _0x1a4b31 = _0x1999fd['nodeName'][_0x36cba8(0x6af)]() === _0x36cba8(0x16c);
            _0x568bd6[_0x36cba8(0x438)](_0x36cba8(0x23f), function() {
                var _0x2c6b7c = _0x36cba8
                  , _0x268b4c = _0x3a588d(_0x2c6b7c(0x23f));
                return !!_0x268b4c['getContext'] && !!_0x268b4c[_0x2c6b7c(0x5f1)]('2d');
            }),
            _0x568bd6['addTest'](_0x36cba8(0x6d2), function() {
                var _0x3d21c0 = _0x36cba8;
                return _0x568bd6[_0x3d21c0(0x23f)] !== ![] && _typeof(_0x3a588d(_0x3d21c0(0x23f))[_0x3d21c0(0x5f1)]('2d')[_0x3d21c0(0x64d)]) == _0x3d21c0(0x61f);
            }),
            (function() {
                var _0x3a89cd = _0x36cba8, _0x1e0e46, _0x10a37f, _0x3a1cd8, _0x4a4d02, _0x1ba283, _0x405526, _0xcdeb8f;
                for (var _0x53b0e9 in _0x77b676) {
                    if (_0x77b676[_0x3a89cd(0x3f4)](_0x53b0e9)) {
                        _0x1e0e46 = [];
                        if ((_0x10a37f = _0x77b676[_0x53b0e9])[_0x3a89cd(0x4b8)] && (_0x1e0e46[_0x3a89cd(0x731)](_0x10a37f[_0x3a89cd(0x4b8)]['toLowerCase']()),
                        _0x10a37f[_0x3a89cd(0x3b3)] && _0x10a37f[_0x3a89cd(0x3b3)][_0x3a89cd(0x561)] && _0x10a37f['options']['aliases'][_0x3a89cd(0x454)]))
                            for (_0x3a1cd8 = 0x0; _0x3a1cd8 < _0x10a37f[_0x3a89cd(0x3b3)][_0x3a89cd(0x561)][_0x3a89cd(0x454)]; _0x3a1cd8++) {
                                _0x1e0e46[_0x3a89cd(0x731)](_0x10a37f['options']['aliases'][_0x3a1cd8][_0x3a89cd(0x6af)]());
                            }
                        ;_0x4a4d02 = _0x32353f(_0x10a37f['fn'], _0x3a89cd(0x61f)) ? _0x10a37f['fn']() : _0x10a37f['fn'],
                        _0x1ba283 = 0x0;
                        for (; _0x1ba283 < _0x1e0e46[_0x3a89cd(0x454)]; _0x1ba283++) {
                            (_0xcdeb8f = (_0x405526 = _0x1e0e46[_0x1ba283])[_0x3a89cd(0xf9)]('.'))[_0x3a89cd(0x454)] === 0x1 ? _0x568bd6[_0xcdeb8f[0x0]] = _0x4a4d02 : (!!_0x568bd6[_0xcdeb8f[0x0]] && !(_0x568bd6[_0xcdeb8f[0x0]]instanceof Boolean) && (_0x568bd6[_0xcdeb8f[0x0]] = new Boolean(_0x568bd6[_0xcdeb8f[0x0]])),
                            _0x568bd6[_0xcdeb8f[0x0]][_0xcdeb8f[0x1]] = _0x4a4d02),
                            _0x464a23[_0x3a89cd(0x731)]((_0x4a4d02 ? '' : _0x3a89cd(0x4c6)) + _0xcdeb8f[_0x3a89cd(0xde)]('-'));
                        }
                    }
                }
            }()),
            function(_0x147476) {
                var _0x2fb1fd = _0x36cba8
                  , _0x44d40e = _0x1999fd[_0x2fb1fd(0x1ea)]
                  , _0x1d02e7 = _0x568bd6[_0x2fb1fd(0x623)]['classPrefix'] || '';
                _0x1a4b31 && (_0x44d40e = _0x44d40e['baseVal']);
                if (_0x568bd6['_config'][_0x2fb1fd(0x69f)]) {
                    var _0x48bb3d = RegExp('(^|\x5cs)' + _0x1d02e7 + _0x2fb1fd(0x3c6));
                    _0x44d40e = _0x44d40e[_0x2fb1fd(0xe3)](_0x48bb3d, '$1' + _0x1d02e7 + _0x2fb1fd(0x1a2));
                }
                ;_0x568bd6[_0x2fb1fd(0x623)][_0x2fb1fd(0x193)] && (_0x44d40e += '\x20' + _0x1d02e7 + _0x147476[_0x2fb1fd(0xde)]('\x20' + _0x1d02e7),
                _0x1a4b31 ? _0x1999fd[_0x2fb1fd(0x1ea)][_0x2fb1fd(0x50f)] = _0x44d40e : _0x1999fd['className'] = _0x44d40e);
            }(_0x464a23),
            delete _0x561d6e[_0x36cba8(0x438)],
            delete _0x561d6e['addAsyncTest'];
            for (var _0x1733b7 = 0x0; _0x1733b7 < _0x568bd6['_q'][_0x36cba8(0x454)]; _0x1733b7++) {
                _0x568bd6['_q'][_0x1733b7]();
            }
            ;_0x5cba79[_0x36cba8(0x69c)] = _0x568bd6;
        }(window, document);
        if (!Modernizr[_0x2413a9(0x210)] || !Modernizr['canvas'] || !Modernizr[_0x2413a9(0x6d2)]) {
            _0x21385e['d'][_0x2413a9(0x44f)](_0x2413a9(0x4cf))[_0x2413a9(0x3a7)]['display'] = _0x2413a9(0x20f);
            return;
        }
        ;_0x3f9428['f'] = {
            'g': function(_0x5c2384, _0x30dbe0, _0x3f238e) {
                var _0x19866a = _0x2413a9;
                _0x5c2384[_0x19866a(0x3ac)](),
                _0x5c2384[_0x19866a(0x758)](_0x30dbe0, _0x3f238e);
            },
            'h': function(_0x5093cf, _0x42d8ae, _0x59c559) {
                var _0x491a08 = _0x2413a9;
                _0x5093cf[_0x491a08(0x3ac)](),
                _0x5093cf[_0x491a08(0x3cf)](_0x42d8ae, _0x59c559);
            }
        },
        _0x3f9428['i'] = _0x5d1bbd['b']('WebSocket'),
        _0x3f9428['j'] = _0x5d1bbd['b']('Float32Array'),
        _0x487ab5 = (_0x5a3b77 = _0x5d1bbd['b'](_0x2413a9(0x36a)))['BLEND_MODES'],
        _0xabc28b = _0x5a3b77[_0x2413a9(0x59a)],
        _0x3f9428['k'] = {
            'l': _0x5a3b77[_0x2413a9(0x3b5)],
            'm': _0x5a3b77[_0x2413a9(0x632)],
            'n': _0x5a3b77[_0x2413a9(0x61d)],
            'o': _0x5a3b77[_0x2413a9(0x27e)],
            'p': _0x5a3b77[_0x2413a9(0x2b5)],
            'q': _0x5a3b77[_0x2413a9(0x511)],
            'r': _0x5a3b77[_0x2413a9(0x26f)],
            's': _0x5a3b77[_0x2413a9(0x597)],
            't': _0x5a3b77[_0x2413a9(0x2e7)],
            'u': _0x5a3b77[_0x2413a9(0x2bd)],
            'v': _0x5a3b77[_0x2413a9(0x62f)],
            'w': {
                'z': _0x487ab5[_0x2413a9(0x318)],
                'A': _0x487ab5[_0x2413a9(0x396)],
                'B': _0x487ab5[_0x2413a9(0x265)]
            },
            'C': {
                'D': _0xabc28b[_0x2413a9(0x2ea)]
            },
            'F': {
                'G': function(_0x17e5d1) {
                    var _0xef997 = _0x2413a9
                      , _0x582442 = _0x17e5d1['parent'];
                    _0x582442 != null && _0x582442[_0xef997(0x23c)](_0x17e5d1);
                }
            }
        },
        _0x52ace1['H'] = {
            'I': _0x21385e['c'][_0x2413a9(0x68f)],
            'J': 'https://gateway.wormate.io',
            'K': 'https://resources.wormate.io',
            'L': _0x2413a9(0x171),
            'M': _0x2413a9(0x53c),
            'N': _0x2413a9(0x677),
            'O': _0x2413a9(0x180)
        },
        _0x52ace1['H']['P'] = ((_0x56e15d = _0x21385e['c']['I18N_LANG']) || (_0x56e15d = 'en'),
        _0x56e15d),
        _0x52ace1['H']['Q'] = (function() {
            var _0x5b9620 = _0x2413a9, _0x16d423;
            switch (_0x52ace1['H']['P']) {
            case 'uk':
                _0x16d423 = _0x5b9620(0x5ff);
                break;
            case 'de':
                _0x16d423 = 'de_DE';
                break;
            case 'fr':
                _0x16d423 = _0x5b9620(0x208);
                break;
            case 'es':
                _0x16d423 = _0x5b9620(0x65d);
                break;
            default:
                _0x16d423 = 'en_US';
            }
            ;return _0x16d423;
        }()),
        moment[_0x2413a9(0x4f6)](_0x52ace1['H']['Q']),
        ooo = null,
        _0x52ace1['S'] = 6.283185307179586,
        _0x52ace1['T'] = 3.141592653589793,
        _0x3f4c9f = _0x21385e['c'][_0x2413a9(0x4cb)],
        _0x5d1bbd['U'] = function(_0x2737e7) {
            return _0x3f4c9f[_0x2737e7];
        }
        ,
        _0x5d1bbd['V'] = function(_0xab157b) {
            if (_0xab157b[_0x52ace1['H']['P']])
                return _0xab157b[_0x52ace1['H']['P']];
            else
                return _0xab157b['en'] ? _0xab157b['en'] : _0xab157b['x'];
        }
        ,
        _0x5d1bbd['W'] = function(_0x155860) {
            return encodeURI(_0x155860);
        }
        ,
        _0x5d1bbd['X'] = function(_0x2cb896, _0x1beed9) {
            return setInterval(_0x2cb896, _0x1beed9);
        }
        ,
        _0x5d1bbd['Y'] = function(_0x2386c4, _0xbf35b1) {
            return setTimeout(_0x2386c4, _0xbf35b1);
        }
        ,
        _0x5d1bbd['Z'] = function(_0x32f240) {
            clearTimeout(_0x32f240);
        }
        ,
        _0x5d1bbd['$'] = function(_0xa613f2) {
            var _0x1717ac = _0x2413a9
              , _0x822765 = (_0x5d1bbd['_'](_0xa613f2) % 0x3c)['toString']()
              , _0x279f58 = (_0x5d1bbd['_'](_0xa613f2 / 0x3c) % 0x3c)[_0x1717ac(0xef)]()
              , _0x52a0fe = (_0x5d1bbd['_'](_0xa613f2 / 0xe10) % 0x18)[_0x1717ac(0xef)]()
              , _0x53c611 = _0x5d1bbd['_'](_0xa613f2 / 0x15180)[_0x1717ac(0xef)]()
              , _0x507898 = _0x5d1bbd['U'](_0x1717ac(0x682))
              , _0x482163 = _0x5d1bbd['U'](_0x1717ac(0x175))
              , _0x4200be = _0x5d1bbd['U'](_0x1717ac(0x502))
              , _0x525dbd = _0x5d1bbd['U'](_0x1717ac(0x262));
            if (_0x53c611 > 0x0)
                return _0x53c611 + '\x20' + _0x507898 + '\x20' + _0x52a0fe + '\x20' + _0x482163 + '\x20' + _0x279f58 + '\x20' + _0x4200be + '\x20' + _0x822765 + '\x20' + _0x525dbd;
            else {
                if (_0x52a0fe > 0x0)
                    return _0x52a0fe + '\x20' + _0x482163 + '\x20' + _0x279f58 + '\x20' + _0x4200be + '\x20' + _0x822765 + '\x20' + _0x525dbd;
                else
                    return _0x279f58 > 0x0 ? _0x279f58 + '\x20' + _0x4200be + '\x20' + _0x822765 + '\x20' + _0x525dbd : _0x822765 + '\x20' + _0x525dbd;
            }
        }
        ,
        _0x5d1bbd['aa'] = function(_0x5402eb) {
            var _0x41c82f = _0x2413a9;
            return _0x5402eb[_0x41c82f(0x424)]('href') ? _0x5402eb['replaceAll'](_0x41c82f(0x430), _0x41c82f(0x6d9)) : _0x5402eb;
        }
        ,
        _0x5d1bbd['ba'] = function(_0x4febda, _0x2504de, _0x5a13d1) {
            var _0x37f52d = _0x2413a9
              , _0x19e55f = _0x21385e['d']['createElement'](_0x37f52d(0x1ac))
              , _0x3a1db4 = !![];
            _typeof(_0x2504de) !== _0x37f52d(0x111) && _0x2504de !== null && (_typeof(_0x2504de['id']) !== 'undefined' && (_0x19e55f['id'] = _0x2504de['id']),
            _typeof(_0x2504de[_0x37f52d(0x155)]) !== _0x37f52d(0x111) && _0x2504de[_0x37f52d(0x155)] && (_0x19e55f[_0x37f52d(0x155)] = 'async'),
            _typeof(_0x2504de[_0x37f52d(0x2d2)]) !== 'undefined' && _0x2504de[_0x37f52d(0x2d2)] && (_0x19e55f['defer'] = _0x37f52d(0x2d2)),
            _typeof(_0x2504de[_0x37f52d(0x306)]) !== _0x37f52d(0x111) && (_0x19e55f[_0x37f52d(0x306)] = _0x2504de['crossorigin'])),
            _0x19e55f[_0x37f52d(0x1bc)] = _0x37f52d(0x1a9),
            _0x19e55f[_0x37f52d(0x659)] = _0x4febda,
            _0x5a13d1 && (_0x19e55f[_0x37f52d(0x250)] = _0x19e55f['onreadystatechange'] = function() {
                var _0xf64cdc = _0x37f52d;
                _0x3a1db4 = ![];
                try {
                    _0x5a13d1();
                } catch (_0x4a0691) {}
                ;_0x19e55f[_0xf64cdc(0x250)] = _0x19e55f['onreadystatechange'] = null;
            }
            ),
            (_0x21385e['d']['head'] || _0x21385e['d'][_0x37f52d(0xea)]('head')[0x0])['appendChild'](_0x19e55f);
        }
        ,
        _0x5d1bbd['ca'] = function(_0x4adb5f, _0x3d067c) {
            var _0x1e3bdb = _0x2413a9
              , _0x5e0437 = _0x3d067c;
            return _0x5e0437[_0x1e3bdb(0x551)] = Object[_0x1e3bdb(0x52d)](_0x4adb5f['prototype']),
            _0x5e0437['prototype'][_0x1e3bdb(0x271)] = _0x5e0437,
            _0x5e0437[_0x1e3bdb(0x53f)] = _0x4adb5f,
            _0x5e0437;
        }
        ,
        _0x5d1bbd['da'] = function(_0x8f537) {
            return (_0x8f537 %= _0x52ace1['S']) < 0x0 ? _0x8f537 + _0x52ace1['S'] : _0x8f537;
        }
        ,
        _0x5d1bbd['ea'] = function(_0x4d4be9, _0x10ccfa, _0x310593) {
            return _0x5d1bbd['fa'](_0x310593, _0x4d4be9, _0x10ccfa);
        }
        ,
        _0x5d1bbd['fa'] = function(_0x11f0a4, _0x1fe7d9, _0x3ec152) {
            var _0x583fa6 = _0x2413a9;
            if (_0x11f0a4 > _0x3ec152)
                return _0x3ec152;
            else {
                if (_0x11f0a4 < _0x1fe7d9)
                    return _0x1fe7d9;
                else
                    return Number[_0x583fa6(0x5a6)](_0x11f0a4) ? _0x11f0a4 : (_0x1fe7d9 + _0x3ec152) * 0.5;
            }
        }
        ,
        _0x5d1bbd['ga'] = function(_0x5dc9fe, _0x18ffcd, _0x54014b, _0x33874c) {
            return _0x18ffcd > _0x5dc9fe ? _0x5d1bbd['ha'](_0x18ffcd, _0x5dc9fe + _0x54014b * _0x33874c) : _0x5d1bbd['ia'](_0x18ffcd, _0x5dc9fe - _0x54014b * _0x33874c);
        }
        ,
        _0x5d1bbd['ja'] = function(_0x2500a6, _0x161a80, _0x166336, _0x51b903, _0x4ae9c6) {
            var _0x270032 = _0x2413a9;
            return _0x161a80 + (_0x2500a6 - _0x161a80) * Math[_0x270032(0x245)](0x1 - _0x51b903, _0x166336 / _0x4ae9c6);
        }
        ,
        _0x5d1bbd['ka'] = function(_0x2b309b, _0xd55603, _0x331965) {
            return _0x2b309b - (_0x2b309b - _0xd55603) * _0x331965;
        }
        ,
        _0x5d1bbd['la'] = function(_0x2a09f5, _0x15274a) {
            var _0xa2a88a = _0x2413a9;
            return Math[_0xa2a88a(0x3cb)](_0x2a09f5 * _0x2a09f5 + _0x15274a * _0x15274a);
        }
        ,
        _0x5d1bbd['ma'] = function() {
            var _0x52eb1a = _0x2413a9;
            return Math[_0x52eb1a(0x314)]();
        }
        ,
        _0x5d1bbd['_'] = function(_0x5c436d) {
            var _0x5e1cda = _0x2413a9;
            return Math[_0x5e1cda(0x47c)](_0x5c436d);
        }
        ,
        _0x5d1bbd['na'] = function(_0x31cc3a) {
            var _0x767672 = _0x2413a9;
            return Math[_0x767672(0x664)](_0x31cc3a);
        }
        ,
        _0x5d1bbd['ha'] = function(_0x66987f, _0x32f732) {
            var _0x382f86 = _0x2413a9;
            return Math[_0x382f86(0xe5)](_0x66987f, _0x32f732);
        }
        ,
        _0x5d1bbd['ia'] = function(_0x128b3c, _0x160d2a) {
            var _0x20e774 = _0x2413a9;
            return Math[_0x20e774(0x2b3)](_0x128b3c, _0x160d2a);
        }
        ,
        _0x5d1bbd['oa'] = function(_0x4d7d61) {
            var _0x3c90f7 = _0x2413a9;
            return Math[_0x3c90f7(0x3c9)](_0x4d7d61);
        }
        ,
        _0x5d1bbd['pa'] = function(_0x40f4dd) {
            var _0x32a2ef = _0x2413a9;
            return Math[_0x32a2ef(0x2b9)](_0x40f4dd);
        }
        ,
        _0x5d1bbd['qa'] = function(_0x4d50ed) {
            return Math['sqrt'](_0x4d50ed);
        }
        ,
        _0x5d1bbd['ra'] = function(_0x26408a, _0x23b733) {
            return Math['pow'](_0x26408a, _0x23b733);
        }
        ,
        _0x5d1bbd['sa'] = function(_0x21f5c7) {
            var _0x3aabd5 = _0x2413a9;
            return Math[_0x3aabd5(0x28e)](_0x21f5c7);
        }
        ,
        _0x5d1bbd['ta'] = function(_0x4da4d9, _0xb4592b) {
            return Math['atan2'](_0x4da4d9, _0xb4592b);
        }
        ,
        _0x5d1bbd['ua'] = function(_0x1b2d8b, _0x1223bd, _0x1f5083, _0x397e07) {
            var _0x11c772 = _0x2413a9
              , _0x4f8ea5 = _0x1223bd + _0x397e07;
            if (_0x1b2d8b == null)
                throw TypeError();
            ;var _0x19fb9b = _0x1b2d8b[_0x11c772(0x454)] >>> 0x0
              , _0xc8667 = _0x1f5083 >> 0x0
              , _0x102995 = _0xc8667 < 0x0 ? Math['max'](_0x19fb9b + _0xc8667, 0x0) : Math['min'](_0xc8667, _0x19fb9b)
              , _0x36be60 = _0x1223bd >> 0x0
              , _0x23cd2c = _0x36be60 < 0x0 ? Math[_0x11c772(0x2b3)](_0x19fb9b + _0x36be60, 0x0) : Math[_0x11c772(0xe5)](_0x36be60, _0x19fb9b)
              , _0x1f7664 = _0x4f8ea5 === undefined ? _0x19fb9b : _0x4f8ea5 >> 0x0
              , _0x28b1f1 = Math[_0x11c772(0xe5)]((_0x1f7664 < 0x0 ? Math[_0x11c772(0x2b3)](_0x19fb9b + _0x1f7664, 0x0) : Math[_0x11c772(0xe5)](_0x1f7664, _0x19fb9b)) - _0x23cd2c, _0x19fb9b - _0x102995)
              , _0x394d50 = 0x1;
            for (_0x23cd2c < _0x102995 && _0x102995 < _0x23cd2c + _0x28b1f1 && (_0x394d50 = -0x1,
            _0x23cd2c += _0x28b1f1 - 0x1,
            _0x102995 += _0x28b1f1 - 0x1); _0x28b1f1 > 0x0; ) {
                _0x23cd2c in _0x1b2d8b ? _0x1b2d8b[_0x102995] = _0x1b2d8b[_0x23cd2c] : delete _0x1b2d8b[_0x102995],
                _0x23cd2c += _0x394d50,
                _0x102995 += _0x394d50,
                _0x28b1f1--;
            }
            ;return _0x1b2d8b;
        }
        ,
        _0x5d1bbd['va'] = function(_0x1b8743, _0x46e2f0) {
            return _0x1b8743 + (_0x46e2f0 - _0x1b8743) * _0x5d1bbd['ma']();
        }
        ,
        _0x5d1bbd['wa'] = function(_0x3b8ef2) {
            var _0x97de = _0x2413a9;
            return _0x3b8ef2[parseInt(_0x5d1bbd['ma']() * _0x3b8ef2[_0x97de(0x454)])];
        }
        ,
        _0x4a018c = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']['map'](function(_0x78e944) {
            var _0x447a94 = _0x2413a9;
            return _0x78e944[_0x447a94(0x170)](0x0);
        }),
        _0x5d1bbd['xa'] = function(_0x481e7c) {
            var _0x1c938a = _0x2413a9;
            _typeof(_0x481e7c) == _0x1c938a(0x111) && (_0x481e7c = 0x10);
            var _0x59f997 = '';
            for (var _0x5b34ea = 0x0; _0x5b34ea < _0x481e7c; _0x5b34ea++) {
                _0x59f997 += String['fromCharCode'](_0x4a018c[_0x5d1bbd['_'](_0x5d1bbd['ma']() * _0x4a018c[_0x1c938a(0x454)])]);
            }
            ;return _0x59f997;
        }
        ,
        _0x5d1bbd['ya'] = function(_0x4bc076, _0x18b231, _0x15a734) {
            var _0x382316 = _0x15a734 * (0x1 - _0x18b231 * 0.5)
              , _0x2c1c2d = Math['min'](_0x382316, 0x1 - _0x382316);
            return _0x5d1bbd['za'](_0x4bc076, _0x2c1c2d ? (_0x15a734 - _0x382316) / _0x2c1c2d : 0x0, _0x382316);
        }
        ,
        _0x5d1bbd['za'] = function(_0x59a18b, _0x36bb3b, _0x9f7527) {
            var _0x1558b5 = (0x1 - _0x5d1bbd['na'](_0x9f7527 * 0x2 - 0x1)) * _0x36bb3b
              , _0x42eea8 = _0x1558b5 * (0x1 - _0x5d1bbd['na'](_0x59a18b / 0x3c % 0x2 - 0x1))
              , _0x274d9f = _0x9f7527 - _0x1558b5 / 0x2;
            if (_0x59a18b >= 0x0 && _0x59a18b < 0x3c)
                return [_0x274d9f + _0x1558b5, _0x274d9f + _0x42eea8, _0x274d9f];
            else {
                if (_0x59a18b >= 0x3c && _0x59a18b < 0x78)
                    return [_0x274d9f + _0x42eea8, _0x274d9f + _0x1558b5, _0x274d9f];
                else {
                    if (_0x59a18b >= 0x78 && _0x59a18b < 0xb4)
                        return [_0x274d9f, _0x274d9f + _0x1558b5, _0x274d9f + _0x42eea8];
                    else {
                        if (_0x59a18b >= 0xb4 && _0x59a18b < 0xf0)
                            return [_0x274d9f, _0x274d9f + _0x42eea8, _0x274d9f + _0x1558b5];
                        else
                            return _0x59a18b >= 0xf0 && _0x59a18b < 0x12c ? [_0x274d9f + _0x42eea8, _0x274d9f, _0x274d9f + _0x1558b5] : [_0x274d9f + _0x1558b5, _0x274d9f, _0x274d9f + _0x42eea8];
                    }
                }
            }
        }
        ,
        _0x5d1bbd['Aa'] = function(_0x5b684b, _0x5bf407, _0x118d80) {
            var _0x5059ce = _0x2413a9;
            $[_0x5059ce(0x3e4)](_0x5b684b)['fail'](_0x5bf407)['done'](_0x118d80);
        }
        ,
        _0x5d1bbd['Ba'] = function(_0x20d6e9, _0x1a2708, _0x29f067, _0x7f5a8a) {
            var _0x544850 = _0x2413a9
              , _0x2b4b02 = {
                'type': _0x544850(0x22c),
                'url': _0x20d6e9
            }
              , _0x108ee4 = {
                'responseType': _0x544850(0x724)
            };
            _0x108ee4[_0x544850(0x3ba)] = function(_0x1a9eea) {
                var _0x35dc33 = _0x544850;
                _0x1a9eea['lengthComputable'] && _0x7f5a8a(_0x1a9eea[_0x35dc33(0x1d2)] / _0x1a9eea[_0x35dc33(0x39c)] * 0x64);
            }
            ,
            _0x2b4b02[_0x544850(0x543)] = _0x108ee4,
            $['ajax'](_0x2b4b02)[_0x544850(0x195)](_0x1a2708)['done'](_0x29f067);
        }
        ,
        _0x5d1bbd['Ca'] = function() {
            return Date['now']();
        }
        ,
        _0x5d1bbd['Da'] = function(_0xb2832a, _0x58c934) {
            var _0x34b1f2 = _0x2413a9;
            for (var _0x3484bb in _0xb2832a) {
                _0xb2832a[_0x34b1f2(0x3f4)](_0x3484bb) && _0x58c934(_0x3484bb, _0xb2832a[_0x3484bb]);
            }
        }
        ,
        _0x5d1bbd['Ea'] = function(_0x4d1c50) {
            var _0x1a5ed7 = _0x2413a9;
            for (var _0x51d66c = _0x4d1c50[_0x1a5ed7(0x454)] - 0x1; _0x51d66c > 0x0; _0x51d66c--) {
                var _0x2c0d0a = _0x5d1bbd['_'](_0x5d1bbd['ma']() * (_0x51d66c + 0x1))
                  , _0x1ab762 = _0x4d1c50[_0x51d66c];
                _0x4d1c50[_0x51d66c] = _0x4d1c50[_0x2c0d0a],
                _0x4d1c50[_0x2c0d0a] = _0x1ab762;
            }
            ;return _0x4d1c50;
        }
        ,
        _0x21385e['Fa'] = _0x5d1bbd['b'](_0x2413a9(0x51c)),
        _0x21385e['Ga'] = _0x5d1bbd['b'](_0x2413a9(0x72d)),
        _0x21385e['Ha'] = (function() {
            var _0x317c68 = _0x2413a9;
            function _0x20a970(_0x5d2b97) {
                this['Ia'] = _0x5d2b97,
                this['Ja'] = 0x0;
            }
            var _0x31daba = 'getInt8';
            _0x20a970[_0x317c68(0x551)]['Ka'] = function() {
                var _0xf5fbee = this['Ia'][_0x31daba](this['Ja']);
                return this['Ja'] += 0x1,
                _0xf5fbee;
            }
            ;
            var _0x35b282 = _0x317c68(0x3dd);
            _0x20a970['prototype']['La'] = function() {
                var _0x4d3869 = this['Ia'][_0x35b282](this['Ja']);
                return this['Ja'] += 0x2,
                _0x4d3869;
            }
            ;
            var _0x2caf8c = _0x317c68(0x5a7);
            _0x20a970['prototype']['Ma'] = function() {
                var _0x234174 = this['Ia'][_0x2caf8c](this['Ja']);
                return this['Ja'] += 0x4,
                _0x234174;
            }
            ;
            var _0x1f4285 = _0x317c68(0x3ab);
            return _0x20a970[_0x317c68(0x551)]['Na'] = function() {
                var _0x86d039 = this['Ia'][_0x1f4285](this['Ja']);
                return this['Ja'] += 0x4,
                _0x86d039;
            }
            ,
            _0x20a970;
        }()),
        _0x21385e['Oa'] = (function() {
            var _0x544406 = _0x2413a9;
            function _0x504649(_0x363cb7) {
                this['Ia'] = _0x363cb7,
                this['Ja'] = 0x0;
            }
            var _0x58629e = _0x544406(0x4bd);
            _0x504649[_0x544406(0x551)]['Pa'] = function(_0x14c7ce) {
                this['Ia'][_0x58629e](this['Ja'], _0x14c7ce),
                this['Ja'] += 0x1;
            }
            ;
            var _0x2ab7fd = _0x544406(0x4a2);
            return _0x504649[_0x544406(0x551)]['Qa'] = function(_0x4a6a6d) {
                this['Ia'][_0x2ab7fd](this['Ja'], _0x4a6a6d),
                this['Ja'] += 0x2;
            }
            ,
            _0x504649;
        }()),
        _0x5d1bbd['Ra'] = function() {
            var _0x28b541 = _0x2413a9
              , _0x36287c = ![];
            function _0x2f3b1a() {}
            var _0x3b2330 = {}
              , _0x25cc58 = _0x28b541(0x126)
              , _0x4bcbbc = $('#' + _0x25cc58)
              , _0x368b05 = _0x28b541(0x1d5)
              , _0xabf8ad = $('#' + _0x368b05);
            return $(_0x28b541(0x589))[_0x28b541(0x3db)](function() {
                var _0x5cbe4 = _0x28b541;
                _0xabf8ad[_0x5cbe4(0x3cf)](0x1f4),
                _0x2f3b1a(![]);
            }),
            _0x3b2330['Sa'] = function(_0x27ee6c) {
                var _0x118db5 = _0x28b541;
                _0x2f3b1a = _0x27ee6c;
                if (!_0x36287c)
                    try {
                        aiptag[_0x118db5(0x55c)][_0x118db5(0x760)][_0x118db5(0x731)](function() {
                            var _0x2d7255 = _0x118db5
                              , _0x1cb1ba = {
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': !![],
                                'AD_CENTERPLAYER': ![]
                            };
                            _0x1cb1ba[_0x2d7255(0x6cd)] = _0x2d7255(0x46b),
                            _0x1cb1ba['PREROLL_ELEM'] = function() {
                                var _0x4f4bc8 = _0x2d7255;
                                return _0x21385e['d'][_0x4f4bc8(0x44f)](_0x25cc58);
                            }
                            ,
                            _0x1cb1ba[_0x2d7255(0x70b)] = function(_0x4ff8a7) {
                                var _0x4f75cc = _0x2d7255;
                                _0x2f3b1a(!![]),
                                _0x3f9428['f']['h'](_0x4bcbbc, 0x1),
                                _0x3f9428['f']['h'](_0xabf8ad, 0x1);
                                try {
                                    ga('send', _0x4f75cc(0x732), 'preroll', _0x52ace1['H']['I'] + _0x4f75cc(0x121));
                                } catch (_0x962922) {}
                            }
                            ,
                            _0x1cb1ba[_0x2d7255(0x4c1)] = function() {}
                            ,
                            aiptag[_0x2d7255(0x112)] = new aipPlayer(_0x1cb1ba);
                        }),
                        _0x36287c = !![];
                    } catch (_0x232e9e) {}
            }
            ,
            _0x3b2330['Ta'] = function() {
                var _0x1348aa = _0x28b541;
                if (_typeof(aiptag['adplayer']) !== _0x1348aa(0x111)) {
                    try {
                        ga(_0x1348aa(0x5c4), _0x1348aa(0x732), _0x1348aa(0x11f), _0x52ace1['H']['I'] + _0x1348aa(0x79d));
                    } catch (_0x22b984) {}
                    ;_0x3f9428['f']['g'](_0x4bcbbc, 0x1),
                    !_0x36a055['on'] && aiptag[_0x1348aa(0x55c)][_0x1348aa(0x760)][_0x1348aa(0x731)](function() {
                        var _0x234cf1 = _0x1348aa;
                        aiptag[_0x234cf1(0x112)][_0x234cf1(0x43d)]();
                    });
                } else {
                    try {
                        ga(_0x1348aa(0x5c4), 'event', 'antiadblocker', _0x52ace1['H']['I'] + _0x1348aa(0x2e8));
                    } catch (_0x3fa3ea) {}
                    ;(function _0x1181ab() {
                        var _0xa565cb = _0x1348aa;
                        $(_0xa565cb(0x69d))[_0xa565cb(0x2a7)](_0x5d1bbd['U'](_0xa565cb(0x4e9))),
                        $('#adbl-2')[_0xa565cb(0x2a7)](_0x5d1bbd['U']('index.game.antiadblocker.msg2')),
                        $(_0xa565cb(0x2a6))[_0xa565cb(0x2a7)](_0x5d1bbd['U'](_0xa565cb(0x5cd))),
                        $(_0xa565cb(0x3ae))[_0xa565cb(0x2a7)](_0x5d1bbd['U'](_0xa565cb(0x219))[_0xa565cb(0xe3)](_0xa565cb(0x299), 0xa)),
                        $('#adbl-continue\x20span')[_0xa565cb(0x2a7)](_0x5d1bbd['U'](_0xa565cb(0x665))),
                        _0x3f9428['f']['h']($(_0xa565cb(0x589)), 0x1),
                        _0x3f9428['f']['g'](_0xabf8ad, 0x1f4);
                        var _0x50e9d4 = 0xa;
                        for (var _0x124cdd = 0x0; _0x124cdd < 0xa; _0x124cdd++) {
                            _0x5d1bbd['Y'](function() {
                                var _0x4e2c39 = _0xa565cb;
                                _0x50e9d4--,
                                $(_0x4e2c39(0x3ae))['text'](_0x5d1bbd['U'](_0x4e2c39(0x219))[_0x4e2c39(0xe3)](_0x4e2c39(0x299), _0x50e9d4));
                                if (_0x50e9d4 === 0x0) {
                                    try {
                                        ga(_0x4e2c39(0x5c4), 'event', _0x4e2c39(0x29f), _0x52ace1['H']['I'] + '_complete');
                                    } catch (_0x451ea4) {}
                                    ;_0x3f9428['f']['g']($(_0x4e2c39(0x589)), 0xc8);
                                }
                            }, (_0x124cdd + 0x1) * 0x3e8);
                        }
                    }());
                }
            }
            ,
            _0x3b2330;
        }
        ,
        _0x5d1bbd['Ua'] = function(_0x4df55c, _0x1a8cd3) {
            var _0x4253d4 = $('#' + _0x4df55c)
              , _0x1c323b = _0x1a8cd3
              , _0x1b5236 = {}
              , _0x3e7d3e = ![];
            return _0x1b5236['Sa'] = function() {
                var _0x7c0a79 = _0x3903;
                if (!_0x3e7d3e) {
                    _0x4253d4[_0x7c0a79(0x78c)](),
                    _0x4253d4[_0x7c0a79(0x418)](_0x7c0a79(0x408) + _0x1c323b + _0x7c0a79(0x633));
                    try {
                        try {
                            ga(_0x7c0a79(0x5c4), 'event', _0x7c0a79(0x1d7), _0x52ace1['H']['I'] + _0x7c0a79(0x6d4));
                        } catch (_0x17c6ea) {}
                        ;!_0x36a055['on'] && aiptag[_0x7c0a79(0x55c)]['display'][_0x7c0a79(0x731)](function() {
                            var _0x2e7e93 = _0x7c0a79;
                            aipDisplayTag[_0x2e7e93(0x4d4)](_0x1c323b);
                        }),
                        _0x3e7d3e = !![];
                    } catch (_0x18aefa) {}
                }
            }
            ,
            _0x1b5236['Va'] = function() {
                var _0x2d0b9e = _0x3903;
                try {
                    try {
                        ga('send', _0x2d0b9e(0x732), 'banner', _0x52ace1['H']['I'] + _0x2d0b9e(0x422));
                    } catch (_0x10f58f) {}
                    ;!_0x36a055['on'] && aiptag['cmd'][_0x2d0b9e(0x4d4)]['push'](function() {
                        aipDisplayTag['display'](_0x1c323b);
                    });
                } catch (_0x169112) {}
            }
            ,
            _0x1b5236;
        }
        ,
        _0x21385e['Wa'] = (function() {
            var _0x1654a5 = _0x2413a9;
            function _0x3f4f5(_0x28b40c, _0x189e46, _0x2a602c, _0x44bf25, _0x3cece0, _0x57b267, _0x2a8369, _0x5becfd, _0x5f09ea, _0x3db979) {
                this['Xa'] = _0x28b40c,
                this['Ya'] = _0x189e46,
                this['Za'] = null,
                this['$a'] = ![],
                this['_a'] = _0x2a602c,
                this['ab'] = _0x44bf25,
                this['bb'] = _0x3cece0,
                this['cb'] = _0x57b267,
                this['db'] = _0x2a8369 || (_0x5f09ea || _0x3cece0) / 0x2,
                this['eb'] = _0x5becfd || (_0x3db979 || _0x57b267) / 0x2,
                this['fb'] = _0x5f09ea || _0x3cece0,
                this['gb'] = _0x3db979 || _0x57b267,
                this['hb'] = 0.5 - (this['db'] - this['fb'] * 0.5) / this['bb'],
                this['ib'] = 0.5 - (this['eb'] - this['gb'] * 0.5) / this['cb'],
                this['jb'] = this['bb'] / this['fb'],
                this['kb'] = this['cb'] / this['gb'];
            }
            return _0x3f4f5['lb'] = function() {
                return new _0x3f4f5('',null,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0);
            }
            ,
            _0x3f4f5['mb'] = function(_0x3b26f9, _0xa0d0ed, _0x1510d6) {
                return new _0x3f4f5(_0x3b26f9,_0xa0d0ed,_0x1510d6['x'],_0x1510d6['y'],_0x1510d6['w'],_0x1510d6['h'],_0x1510d6['px'],_0x1510d6['py'],_0x1510d6['pw'],_0x1510d6['ph']);
            }
            ,
            _0x3f4f5[_0x1654a5(0x551)]['nb'] = function() {
                return !this['$a'] && (this['Ya'] != null && (this['Za'] = new _0x3f9428['k']['n'](this['Ya'],new _0x3f9428['k']['r'](this['_a'],this['ab'],this['bb'],this['cb']))),
                this['$a'] = !![]),
                this['Za'];
            }
            ,
            _0x3f4f5[_0x1654a5(0x551)]['ob'] = function() {
                var _0x293b63 = _0x1654a5;
                this['Za'] != null && this['Za'][_0x293b63(0x7b4)]();
            }
            ,
            _0x3f4f5;
        }()),
        _0x21385e['pb'] = (function() {
            var _0x3171ef = _0x2413a9;
            function _0x553fbd(_0x4e2525, _0x2cb396, _0x4d65f1, _0x356fa6, _0x826865, _0x2d7561, _0x3bb3dc, _0x4d8ba9, _0x5908de, _0x4de8a3, _0x36068e, _0x2efd09, _0x3b3729, _0x383732, _0x2ed935, _0x2b5da8, _0x3887dd, _0x1a4b57) {
                this['qb'] = _0x4e2525,
                this['rb'] = _0x2cb396,
                this['sb'] = _0x4d65f1,
                this['tb'] = _0x356fa6,
                this['ub'] = _0x826865,
                this['vb'] = _0x2d7561,
                this['wb'] = _0x3bb3dc,
                this['xb'] = _0x4d8ba9,
                this['yb'] = _0x5908de,
                this['zb'] = _0x4de8a3,
                this['Ab'] = _0x36068e,
                this['Bb'] = _0x2efd09,
                this['Cb'] = _0x3b3729,
                this['Db'] = _0x383732,
                this['Eb'] = _0x2ed935,
                this['Fb'] = _0x2b5da8,
                this['Gb'] = _0x3887dd,
                this['Hb'] = _0x1a4b57;
            }
            return _0x553fbd['prototype']['ob'] = function() {
                var _0x2ffc00 = _0x3903;
                for (var _0x50b266 = 0x0; _0x50b266 < this['qb']['length']; _0x50b266++) {
                    this['qb'][_0x50b266][_0x2ffc00(0x5a3)](),
                    this['qb'][_0x50b266][_0x2ffc00(0x7b4)]();
                }
                ;this['qb'] = [];
                for (var _0x598353 = 0x0; _0x598353 < this['rb'][_0x2ffc00(0x454)]; _0x598353++) {
                    this['rb'][_0x598353]['ob']();
                }
                ;this['rb'] = [];
            }
            ,
            _0x553fbd['lb'] = function() {
                var _0x137682 = _0x3903
                  , _0x1ddc40 = new _0x553fbd['Ib'](_0x21385e['Kb']['Jb'],_0x21385e['Kb']['Jb'])
                  , _0x27d858 = new _0x553fbd['Lb'](_0x137682(0x239),[_0x21385e['Kb']['Jb']],[_0x21385e['Kb']['Jb']]);
                return new _0x553fbd([],[],{},_0x1ddc40,{},new _0x553fbd['Mb'](_0x21385e['Kb']['Jb']),{},_0x27d858,{},new _0x553fbd['Nb']('',_0x27d858,_0x1ddc40),{},new _0x553fbd['Ob']([_0x21385e['Kb']['Jb']]),{},new _0x553fbd['Ob']([_0x21385e['Kb']['Jb']]),{},new _0x553fbd['Ob']([_0x21385e['Kb']['Jb']]),{},new _0x553fbd['Ob']([_0x21385e['Kb']['Jb']]));
            }
            ,
            _0x553fbd['Pb'] = function(_0xe6dbf, _0x2c2e43, _0x44f93c, _0x5edc1c) {
                var _0x4721d8 = _0x3903
                  , _0xe81eba = new _0x553fbd['Ib'](_0x21385e['Kb']['Jb'],_0x21385e['Kb']['Jb'])
                  , _0x1752c8 = new _0x553fbd['Lb'](_0x4721d8(0x239),[_0xe6dbf],[_0x2c2e43]);
                return new _0x553fbd([],[],{},_0xe81eba,{},new _0x553fbd['Mb'](_0x21385e['Kb']['Jb']),{},_0x1752c8,{},new _0x553fbd['Nb']('',_0x1752c8,_0xe81eba),{},new _0x553fbd['Ob']([_0x44f93c]),{},new _0x553fbd['Ob']([_0x5edc1c]),{},new _0x553fbd['Ob']([_0x21385e['Kb']['Jb']]),{},new _0x553fbd['Ob']([_0x21385e['Kb']['Jb']]));
            }
            ,
            _0x553fbd['Qb'] = function(_0x26d8be, _0x346b4d, _0x423162, _0x3f64e3) {
                var _0x511ef1 = _0x3903
                  , _0x246afb = {};
                _0x5d1bbd['Da'](_0x26d8be[_0x511ef1(0x47a)], function(_0x3cb216, _0x12a560) {
                    _0x246afb[_0x3cb216] = '#' + _0x12a560;
                });
                var _0x40769c = {};
                for (var _0x11d9a6 = 0x0; _0x11d9a6 < _0x26d8be[_0x511ef1(0x46d)]['length']; _0x11d9a6++) {
                    var _0x3d2704 = _0x26d8be[_0x511ef1(0x46d)][_0x11d9a6];
                    _0x40769c[_0x3d2704['id']] = new _0x553fbd['Lb'](_0x246afb[_0x3d2704['prime']],_0x3d2704[_0x511ef1(0x1d8)][_0x511ef1(0x672)](function(_0x3fa782) {
                        return _0x346b4d[_0x3fa782];
                    }),_0x3d2704['glow']['map'](function(_0x30bd46) {
                        return _0x346b4d[_0x30bd46];
                    }));
                }
                ;var _0x5626de, _0x20ea46 = _0x26d8be['skinUnknown'];
                _0x5626de = new _0x553fbd['Lb'](_0x246afb[_0x20ea46[_0x511ef1(0x631)]],_0x20ea46[_0x511ef1(0x1d8)]['map'](function(_0x493e68) {
                    return _0x346b4d[_0x493e68];
                }),_0x20ea46['glow'][_0x511ef1(0x672)](function(_0x2fbb93) {
                    return _0x346b4d[_0x2fbb93];
                }));
                var _0x57499e = {};
                _0x5d1bbd['Da'](_0x26d8be[_0x511ef1(0x1f2)], function(_0x4eb469, _0x1ea1ba) {
                    var _0x14904f = _0x511ef1;
                    _0x57499e[parseInt(_0x4eb469)] = new _0x553fbd['Ob'](_0x1ea1ba['base'][_0x14904f(0x672)](function(_0x2397bc) {
                        var _0x419aad = _0x14904f;
                        return _0x346b4d[_0x2397bc[_0x419aad(0x2dd)]];
                    }));
                });
                var _0x6eb700 = new _0x553fbd['Ob'](_0x26d8be[_0x511ef1(0x393)][_0x511ef1(0x1d8)][_0x511ef1(0x672)](function(_0x341bca) {
                    var _0x5f1194 = _0x511ef1;
                    return _0x346b4d[_0x341bca[_0x5f1194(0x2dd)]];
                }))
                  , _0x8b697a = {};
                _0x5d1bbd['Da'](_0x26d8be[_0x511ef1(0x345)], function(_0x12a4ec, _0x564ba4) {
                    var _0x4e67cf = _0x511ef1;
                    _0x8b697a[parseInt(_0x12a4ec)] = new _0x553fbd['Ob'](_0x564ba4[_0x4e67cf(0x1d8)][_0x4e67cf(0x672)](function(_0x194c90) {
                        var _0x501548 = _0x4e67cf;
                        return _0x346b4d[_0x194c90[_0x501548(0x2dd)]];
                    }));
                });
                var _0x24bd80 = new _0x553fbd['Ob'](_0x26d8be[_0x511ef1(0x757)][_0x511ef1(0x1d8)]['map'](function(_0x582198) {
                    return _0x346b4d[_0x582198['region']];
                }))
                  , _0x15a95c = {};
                _0x5d1bbd['Da'](_0x26d8be['hatDict'], function(_0x29c723, _0x8da6bd) {
                    var _0x4e3e50 = _0x511ef1;
                    _0x15a95c[parseInt(_0x29c723)] = new _0x553fbd['Ob'](_0x8da6bd[_0x4e3e50(0x1d8)][_0x4e3e50(0x672)](function(_0x582325) {
                        return _0x346b4d[_0x582325['region']];
                    }));
                });
                var _0x49bc5d = new _0x553fbd['Ob'](_0x26d8be['hatUnknown']['base']['map'](function(_0x4a0c05) {
                    var _0x4b627b = _0x511ef1;
                    return _0x346b4d[_0x4a0c05[_0x4b627b(0x2dd)]];
                }))
                  , _0xc8ec70 = {};
                _0x5d1bbd['Da'](_0x26d8be[_0x511ef1(0x4c2)], function(_0x52d01f, _0x1893bc) {
                    var _0x4a931f = _0x511ef1;
                    _0xc8ec70[parseInt(_0x52d01f)] = new _0x553fbd['Ob'](_0x1893bc[_0x4a931f(0x1d8)]['map'](function(_0xaf29dd) {
                        var _0xa50feb = _0x4a931f;
                        return _0x346b4d[_0xaf29dd[_0xa50feb(0x2dd)]];
                    }));
                });
                var _0x240a46 = new _0x553fbd['Ob'](_0x26d8be[_0x511ef1(0x730)]['base']['map'](function(_0x36bb75) {
                    return _0x346b4d[_0x36bb75['region']];
                }))
                  , _0x38439a = {};
                _0x5d1bbd['Da'](_0x26d8be[_0x511ef1(0x165)], function(_0x3853f8, _0x31ae0a) {
                    var _0x382e3f = _0x511ef1;
                    _0x38439a[_0x3853f8 = parseInt(_0x3853f8)] = new _0x553fbd['Ib'](_0x346b4d[_0x31ae0a['base']],_0x346b4d[_0x31ae0a[_0x382e3f(0x762)]]);
                });
                var _0x237235, _0x568306 = _0x26d8be[_0x511ef1(0x313)];
                _0x237235 = new _0x553fbd['Ib'](_0x346b4d[_0x568306[_0x511ef1(0x1d8)]],_0x346b4d[_0x568306[_0x511ef1(0x762)]]);
                var _0xd28938 = {};
                _0x5d1bbd['Da'](_0x26d8be['abilityDict'], function(_0x53155a, _0x354188) {
                    _0xd28938[_0x53155a = parseInt(_0x53155a)] = new _0x553fbd['Mb'](_0x346b4d[_0x354188['base']]);
                });
                var _0x443629, _0x223cfd = _0x26d8be['abilityUnknown'];
                _0x443629 = new _0x553fbd['Mb'](_0x346b4d[_0x223cfd[_0x511ef1(0x1d8)]]);
                var _0x2aac97 = {};
                _0x5d1bbd['Da'](_0x26d8be[_0x511ef1(0x40b)], function(_0x4cae5b, _0x49bd3d) {
                    var _0x8ef04 = _0x511ef1;
                    _0x2aac97[_0x4cae5b = parseInt(_0x4cae5b)] = new _0x553fbd['Nb'](_0x49bd3d[_0x8ef04(0x17f)],new _0x553fbd['Lb'](_0x246afb[_0x49bd3d[_0x8ef04(0x5b9)][_0x8ef04(0x631)]],null,_0x49bd3d[_0x8ef04(0x5b9)][_0x8ef04(0x762)]['map'](function(_0x1141b2) {
                        return _0x346b4d[_0x1141b2];
                    })),new _0x553fbd['Ib'](null,_0x346b4d[_0x49bd3d[_0x8ef04(0xe8)][_0x8ef04(0x762)]]));
                });
                var _0x211710 = new _0x553fbd['Nb']({},_0x5626de,_0x237235);
                return new _0x553fbd(_0x423162,_0x3f64e3,_0x38439a,_0x237235,_0xd28938,_0x443629,_0x40769c,_0x5626de,_0x2aac97,_0x211710,_0x57499e,_0x6eb700,_0x8b697a,_0x24bd80,_0x15a95c,_0x49bc5d,_0xc8ec70,_0x240a46);
            }
            ,
            _0x553fbd['prototype']['Rb'] = function(_0xe0e8aa) {
                var _0x25b4f4 = _0x3903
                  , _0xc8d4f2 = _0x5d1bbd['Ea'](Object[_0x25b4f4(0x2f9)](this['wb']))[_0x25b4f4(0x501)](0x0, _0xe0e8aa)
                  , _0x22a6ba = _0x5d1bbd['Ea'](Object[_0x25b4f4(0x2f9)](this['Ab']))['slice'](0x0, _0xe0e8aa)
                  , _0x484785 = _0x5d1bbd['Ea'](Object[_0x25b4f4(0x2f9)](this['Cb']))['slice'](0x0, _0xe0e8aa)
                  , _0x196039 = _0x5d1bbd['Ea'](Object[_0x25b4f4(0x2f9)](this['Eb']))['slice'](0x0, _0xe0e8aa)
                  , _0x1555b4 = _0x5d1bbd['Ea'](Object[_0x25b4f4(0x2f9)](this['Gb']))[_0x25b4f4(0x501)](0x0, _0xe0e8aa)
                  , _0x726159 = [];
                for (var _0x4a474d = 0x0; _0x4a474d < _0xe0e8aa; _0x4a474d++) {
                    var _0x457d8e = _0xc8d4f2[_0x25b4f4(0x454)] > 0x0 ? _0xc8d4f2[_0x4a474d % _0xc8d4f2[_0x25b4f4(0x454)]] : 0x0
                      , _0x2ef73d = _0x22a6ba[_0x25b4f4(0x454)] > 0x0 ? _0x22a6ba[_0x4a474d % _0x22a6ba['length']] : 0x0
                      , _0x148b3b = _0x484785[_0x25b4f4(0x454)] > 0x0 ? _0x484785[_0x4a474d % _0x484785[_0x25b4f4(0x454)]] : 0x0
                      , _0x1190fa = _0x196039['length'] > 0x0 ? _0x196039[_0x4a474d % _0x196039['length']] : 0x0
                      , _0x163490 = _0x1555b4[_0x25b4f4(0x454)] > 0x0 ? _0x1555b4[_0x4a474d % _0x1555b4[_0x25b4f4(0x454)]] : 0x0;
                    _0x726159[_0x25b4f4(0x731)](new _0x21385e['Sb'](_0x457d8e,_0x2ef73d,_0x148b3b,_0x1190fa,_0x163490));
                }
                ;return _0x726159;
            }
            ,
            _0x553fbd[_0x3171ef(0x551)]['Tb'] = function(_0xf5e62e) {
                return this['wb']['hasOwnProperty'](_0xf5e62e) ? this['wb'][_0xf5e62e] : this['xb'];
            }
            ,
            _0x553fbd['prototype']['Ub'] = function(_0x17db06) {
                return this['yb']['hasOwnProperty'](_0x17db06) ? this['yb'][_0x17db06] : this['zb'];
            }
            ,
            _0x553fbd[_0x3171ef(0x551)]['Vb'] = function(_0x55961e) {
                var _0x55c694 = _0x3171ef;
                return this['Ab'][_0x55c694(0x3f4)](_0x55961e) ? this['Ab'][_0x55961e] : this['Bb'];
            }
            ,
            _0x553fbd[_0x3171ef(0x551)]['Wb'] = function(_0x199bc4) {
                var _0x31082e = _0x3171ef;
                return this['Cb'][_0x31082e(0x3f4)](_0x199bc4) ? this['Cb'][_0x199bc4] : this['Db'];
            }
            ,
            _0x553fbd['prototype']['Xb'] = function(_0x1e1861) {
                var _0x30887e = _0x3171ef;
                return this['Gb'][_0x30887e(0x3f4)](_0x1e1861) ? this['Gb'][_0x1e1861] : this['Hb'];
            }
            ,
            _0x553fbd['prototype']['Yb'] = function(_0x493711) {
                return this['Eb']['hasOwnProperty'](_0x493711) ? this['Eb'][_0x493711] : this['Fb'];
            }
            ,
            _0x553fbd[_0x3171ef(0x551)]['Zb'] = function(_0x48509e) {
                var _0x360875 = _0x3171ef;
                return this['sb'][_0x360875(0x3f4)](_0x48509e) ? this['sb'][_0x48509e] : this['tb'];
            }
            ,
            _0x553fbd[_0x3171ef(0x551)]['$b'] = function(_0x3d94f4) {
                var _0x4d06b7 = _0x3171ef;
                return this['ub'][_0x4d06b7(0x3f4)](_0x3d94f4) ? this['ub'][_0x3d94f4] : this['vb'];
            }
            ,
            _0x553fbd['Nb'] = function _0x4fe31f(_0x2dff39, _0x178ef2, _0x33ceef) {
                this['_b'] = _0x2dff39,
                this['ac'] = _0x178ef2,
                this['bc'] = _0x33ceef;
            }
            ,
            _0x553fbd['Lb'] = function _0x1db2cc(_0x552825, _0x5d2e17, _0x33aeaa) {
                this['cc'] = _0x552825,
                this['dc'] = _0x5d2e17,
                this['ec'] = _0x33aeaa;
            }
            ,
            _0x553fbd['Ob'] = function _0x19f8fb(_0x231ac8) {
                this['dc'] = _0x231ac8;
            }
            ,
            _0x553fbd['Ib'] = function _0x36cef5(_0x4f2314, _0x285bdc) {
                this['dc'] = _0x4f2314,
                this['ec'] = _0x285bdc;
            }
            ,
            _0x553fbd['Mb'] = function _0x52322a(_0x24379b) {
                this['dc'] = _0x24379b;
            }
            ,
            _0x553fbd;
        }()),
        _0x21385e['Kb'] = (function() {
            var _0x37d98c = _0x2413a9;
            function _0x21198e() {
                var _0x4add10 = _0x3903
                  , _0x982faa = _0x3f9428['k']['m'][_0x4add10(0x717)](_0x4add10(0x298));
                this['fc'] = new _0x21385e['Wa'](_0x4add10(0x5b2),_0x982faa,0x9e,0x56,0x43,0x7c,0x94,63.5,0x80,0x80),
                this['gc'] = new _0x21385e['Wa'](_0x4add10(0x10c),_0x982faa,0x9e,0x4,0x57,0x4a,0xcb,63.5,0x80,0x80),
                this['hc'] = new _0x21385e['Wa'](_0x4add10(0x1eb),_0x982faa,0x4,0x4,0x92,0x92,63.5,63.5,0x80,0x80);
                var _0x2544df = _0x3f9428['k']['m'][_0x4add10(0x717)](_0x4add10(0x55b));
                this[_0x4add10(0x3f7)] = new _0x21385e['Wa'](_0x4add10(0x1eb),_0x2544df,0x9c,0x8c,0x57,0x3c,0xaa,128.5,0x80,0x80);
                var _0x417221, _0x3ecd28 = _0x3f9428['k']['m'][_0x4add10(0x717)](_0x4add10(0x428)), _0x3b3e92 = new _0x21385e['Wa'](_0x4add10(0x6a0),_0x3ecd28,0x0,0x0,0x2a,0x50,0x4b,0x40,0x80,0x80), _0xf4567 = new _0x21385e['Wa'](_0x4add10(0x231),_0x3ecd28,0x2e,0x0,0x14,0x30,0x6d,0x3f,0x80,0x80), _0x493259 = new _0x21385e['Wa']('def_skin_glow',_0x3ecd28,0x46,0x0,0x20,0x20,0x0,0x0,0x0,0x0), _0x10f50c = new _0x21385e['Wa'](_0x4add10(0x63c),_0x3ecd28,0x2e,0x34,0x40,0x40,0x0,0x0,0x0,0x0), _0x261af4 = _0x21385e['pb']['Pb'](_0x10f50c, _0x493259, _0x3b3e92, _0xf4567);
                this['ic'] = new _0x21385e['jc']({},_0x261af4),
                this['kc'] = -0x2710,
                this['lc'] = -0x2710,
                this['mc'] = ((_0x417221 = _0x21385e['c'][_0x4add10(0x76a)][_0x4add10(0x5d0)]('canvas'))[_0x4add10(0x598)] = 0x50,
                _0x417221[_0x4add10(0x122)] = 0x50,
                {
                    'nc': _0x417221,
                    'oc': _0x417221[_0x4add10(0x5f1)]('2d'),
                    'Za': new _0x3f9428['k']['n'](_0x3f9428['k']['m']['from'](_0x417221))
                }),
                this['pc'] = null,
                this['qc'] = [];
            }
            return _0x21198e['Jb'] = _0x21385e['Wa']['lb'](),
            _0x21198e[_0x37d98c(0x551)]['Sa'] = function() {}
            ,
            _0x21198e['prototype']['rc'] = function(_0x377ff1, _0x3f483e, _0x5c2d30) {
                var _0x535b45 = this
                  , _0xdd6e65 = this['ic']['sc']();
                if (_0xdd6e65 > 0x0 && _0x5d1bbd['Ca']() - this['kc'] < 0x124f80) {
                    _0x377ff1 != null && _0x377ff1();
                    return;
                }
                ;if (this['pc'] != null && !this['pc']['tc']()) {
                    if (_0x5d1bbd['Ca']() - this['kc'] < 0x493e0) {
                        _0x377ff1 != null && _0x377ff1();
                        return;
                    }
                    ;this['pc']['uc'](),
                    this['pc'] = null;
                }
                ;var _0x13f80b = new _0x21385e['vc'](_0xdd6e65);
                _0x13f80b['wc'](function(_0x1f6c6d, _0x19b78f) {
                    _0x13f80b === _0x535b45['pc'] && _0x5c2d30 != null && _0x5c2d30(_0x1f6c6d, _0x19b78f);
                }),
                _0x13f80b['xc'](function(_0x7b2d73) {
                    _0x13f80b === _0x535b45['pc'] && _0x3f483e != null && _0x3f483e(_0x7b2d73);
                }),
                _0x13f80b['yc'](function() {
                    _0x13f80b === _0x535b45['pc'] && _0x3f483e != null && _0x3f483e(Error());
                }),
                _0x13f80b['zc'](function() {
                    _0x13f80b === _0x535b45['pc'] && _0x377ff1 != null && _0x377ff1();
                }),
                _0x13f80b['Ac'](function(_0x22e17c) {
                    if (_0x13f80b === _0x535b45['pc']) {
                        _0x535b45['lc'] = _0x5d1bbd['Ca'](),
                        _0x535b45['pc'] = null,
                        _0x535b45['Bc'](),
                        _0x535b45['ic']['Cc']()['ob'](),
                        _0x535b45['ic'] = _0x22e17c;
                        _0x377ff1 != null && _0x377ff1();
                        _0x535b45['Dc']();
                        return;
                    }
                    ;try {
                        _0x22e17c['Cc']()['ob']();
                    } catch (_0x2fab31) {}
                }),
                _0x13f80b['Ec'](),
                this['kc'] = _0x5d1bbd['Ca'](),
                this['pc'] = _0x13f80b;
            }
            ,
            _0x21198e[_0x37d98c(0x551)]['Bc'] = function() {}
            ,
            _0x21198e['prototype']['Fc'] = function() {
                return this['ic']['sc']() > 0x0;
            }
            ,
            _0x21198e[_0x37d98c(0x551)]['Gc'] = function() {
                return this['ic']['Hc']();
            }
            ,
            _0x21198e['prototype']['Ic'] = function() {
                return this['mc'];
            }
            ,
            _0x21198e[_0x37d98c(0x551)]['Jc'] = function(_0x11fe64) {
                this['qc']['push'](_0x11fe64);
            }
            ,
            _0x21198e[_0x37d98c(0x551)]['Dc'] = function() {
                var _0x4911a9 = _0x37d98c;
                for (var _0x2d3a56 = 0x0; _0x2d3a56 < this['qc'][_0x4911a9(0x454)]; _0x2d3a56++) {
                    this['qc'][_0x2d3a56]();
                }
            }
            ,
            _0x21198e['prototype']['Cc'] = function() {
                return this['ic']['Cc']();
            }
            ,
            _0x21198e;
        }()),
        _0x21385e['Kc'] = (function() {
            var _0x310af8 = _0x2413a9;
            function _0x3590e0(_0x3eec77) {
                this['Lc'] = _0x3eec77;
            }
            return _0x3590e0[_0x310af8(0x551)]['Mc'] = function(_0x2a0d4a) {
                return this['Lc'][_0x2a0d4a];
            }
            ,
            _0x3590e0['Nc'] = (function() {
                var _0x13d2e8 = _0x310af8;
                function _0x508ab1() {
                    this['Oc'] = [];
                }
                return _0x508ab1[_0x13d2e8(0x551)]['Pc'] = function(_0x12c716, _0x5de9f9) {
                    var _0x2d7841 = _0x13d2e8;
                    for (var _0x1aed5b = 0x0; _0x1aed5b < this['Oc'][_0x2d7841(0x454)]; _0x1aed5b++) {
                        if (this['Oc'][_0x1aed5b]['Qc'] === _0x12c716)
                            throw Error();
                    }
                    ;return this['Oc'][_0x2d7841(0x731)](new _0x3590e0['Rc'](_0x12c716,_0x5de9f9)),
                    this;
                }
                ,
                _0x508ab1[_0x13d2e8(0x551)]['Sc'] = function() {
                    var _0x9d9724 = _0x13d2e8
                      , _0x29c098 = 0x0;
                    for (var _0x4f6816 = 0x0; _0x4f6816 < this['Oc']['length']; _0x4f6816++) {
                        _0x29c098 += this['Oc'][_0x4f6816]['Tc'];
                    }
                    ;var _0x234c3d = {}
                      , _0x1cef2c = 0x0;
                    for (var _0x4eb4cd = 0x0; _0x4eb4cd < this['Oc'][_0x9d9724(0x454)]; _0x4eb4cd++) {
                        var _0x51fc81 = this['Oc'][_0x4eb4cd];
                        _0x51fc81['Tc'] = _0x51fc81['Tc'] / _0x29c098,
                        _0x51fc81['Uc'] = _0x1cef2c,
                        _0x51fc81['Vc'] = _0x1cef2c + _0x51fc81['Tc'],
                        _0x1cef2c = _0x51fc81['Vc'],
                        _0x234c3d[_0x51fc81['Qc']] = _0x51fc81;
                    }
                    ;return new _0x3590e0(_0x234c3d);
                }
                ,
                _0x508ab1;
            }()),
            _0x3590e0['Rc'] = (function() {
                function _0x1a7e4d(_0x8f993a, _0x48cbd7) {
                    this['Qc'] = _0x8f993a,
                    this['Tc'] = _0x48cbd7,
                    this['Uc'] = 0x0,
                    this['Vc'] = 0x0;
                }
                return _0x1a7e4d['prototype']['Wc'] = function(_0xec8945) {
                    return this['Uc'] + (this['Vc'] - this['Uc']) * _0xec8945;
                }
                ,
                _0x1a7e4d;
            }()),
            _0x3590e0;
        }()),
        _0x21385e['Xc'] = (function() {
            var _0x325998 = _0x2413a9;
            function _0x30288b() {
                var _0x3f5546 = _0x3903;
                this['Yc'] = new _0x3f9428['k']['l'](),
                this['Yc'][_0x3f5546(0x4a9)] = !![],
                this['Zc'] = new _0x458b32(),
                this['Zc'][_0x3f5546(0x67c)] = _0x1844e8 * ((_0xc52ff4 + 0x1) * 0x2 + 0x1 + 0x3),
                this['$c'] = 0x0,
                this['_c'] = Array(_0xc52ff4),
                this['_c'][0x0] = this['ad'](0x0, new _0x21385e['bd'](), new _0x21385e['bd']());
                for (var _0x53d41c = 0x1; _0x53d41c < _0xc52ff4; _0x53d41c++) {
                    this['_c'][_0x53d41c] = this['ad'](_0x53d41c, new _0x21385e['bd'](), new _0x21385e['bd']());
                }
                ;this['cd'] = 0x0,
                this['dd'] = 0x0,
                this['ed'] = 0x0;
            }
            var _0x255f5b, _0x1844e8 = 0.001, _0xc52ff4 = 0x31d, _0x45d710 = _0x52ace1['T'] * 0.1;
            _0x30288b['fd'] = _0xc52ff4,
            _0x30288b['prototype']['ad'] = function(_0x4a56c3, _0x4e82d3, _0x5263d) {
                var _0x2f6117 = _0x3903
                  , _0x122cbe = new _0x31c3f9(_0x4e82d3,_0x5263d);
                return _0x4e82d3['gd'][_0x2f6117(0x67c)] = _0x1844e8 * ((_0xc52ff4 - _0x4a56c3) * 0x2 + 0x1 + 0x3),
                _0x5263d['gd'][_0x2f6117(0x67c)] = _0x1844e8 * ((_0xc52ff4 - _0x4a56c3) * 0x2 - 0x2 + 0x3),
                _0x122cbe;
            }
            ,
            _0x30288b['prototype']['hd'] = function(_0x4fbd25, _0x5d23d5, _0x3a413f, _0x23b142, _0x23706b, _0x5c3960, _0x115997, _0x316bc8) {
                var _0x2133f6 = _0x3903
                  , _0x32bad4 = _0x3a413f['dc']
                  , _0x3ea9c1 = _0x4fbd25 === _0x21385e['jd']['id'] ? _0x5d23d5['ac']['ec'] : _0x3a413f['ec'];
                if (_0x32bad4[_0x2133f6(0x454)] > 0x0 && _0x3ea9c1['length'] > 0x0)
                    for (var _0xd0ad8c = 0x0; _0xd0ad8c < this['_c'][_0x2133f6(0x454)]; _0xd0ad8c++) {
                        this['_c'][_0xd0ad8c]['ld']['kd'](_0x32bad4[_0xd0ad8c % _0x32bad4[_0x2133f6(0x454)]]),
                        this['_c'][_0xd0ad8c]['md']['kd'](_0x3ea9c1[_0xd0ad8c % _0x3ea9c1['length']]),
                        this['_c'][_0xd0ad8c]['ld']['nd'](_0x316bc8),
                        this['_c'][_0xd0ad8c]['md']['nd'](_0x316bc8);
                    }
                ;this['Zc']['hd'](_0x23b142, _0x23706b, _0x5c3960, _0x115997);
            }
            ,
            (_0x255f5b = _0x5d1bbd['ca'](_0x3f9428['k']['l'], function() {
                var _0x267266 = _0x3903;
                _0x3f9428['k']['l']['call'](this),
                this[_0x267266(0x4a9)] = !![],
                this['od'] = [],
                this['pd'] = [],
                this['qd'] = [],
                this['rd'] = [],
                this['sd'] = new _0x3f9428['k']['l'](),
                this['td'] = [];
                for (var _0x34c47c = 0x0; _0x34c47c < 0x4; _0x34c47c++) {
                    var _0x47d79c = new _0x21385e['bd']();
                    _0x47d79c['kd'](ooo['ud']['fc']),
                    this['sd'][_0x267266(0x448)](_0x47d79c['gd']),
                    this['td']['push'](_0x47d79c);
                }
                ;this['sd']['zIndex'] = 0.0011,
                this['addChild'](this['sd']),
                this['vd'](),
                this['wd'] = new _0x21385e['bd'](),
                this['wd']['kd'](ooo['ud']['gc']),
                this['wd']['gd'][_0x267266(0x67c)] = 0.001,
                this[_0x267266(0x448)](this['wd']['gd']),
                this['xd'](),
                this['pwr_flex'] = new _0x21385e['bd'](),
                this[_0x267266(0x2c2)]['kd'](ooo['ud'][_0x267266(0x3f7)]),
                this[_0x267266(0x2c2)]['gd'][_0x267266(0x67c)] = 0.001,
                this[_0x267266(0x448)](this[_0x267266(0x2c2)]['gd']),
                this[_0x267266(0x17b)]();
            }))[_0x325998(0x551)]['hd'] = function(_0x4c36d4, _0x4ac219, _0x564b15, _0x5c88d0) {
                this['yd'](0.002, this['od'], _0x4c36d4['dc']),
                this['yd'](0.003, this['pd'], _0x4ac219['dc']),
                this['yd'](0.004, this['rd'], _0x5c88d0['dc']),
                this['yd'](0.005, this['qd'], _0x564b15['dc']);
            }
            ,
            _0x255f5b[_0x325998(0x551)]['yd'] = function(_0x40c97f, _0xd3dc4f, _0xa409d8) {
                var _0x4d6c5e = _0x325998;
                while (_0xa409d8[_0x4d6c5e(0x454)] > _0xd3dc4f[_0x4d6c5e(0x454)]) {
                    var _0x6703a1 = new _0x21385e['bd']();
                    _0xd3dc4f['push'](_0x6703a1),
                    this[_0x4d6c5e(0x448)](_0x6703a1['zd']());
                }
                ;while (_0xa409d8['length'] < _0xd3dc4f[_0x4d6c5e(0x454)]) {
                    _0xd3dc4f[_0x4d6c5e(0x2b0)]()['G']();
                }
                ;var _0x124ce1 = _0x40c97f;
                for (var _0x3b5e88 = 0x0; _0x3b5e88 < _0xa409d8[_0x4d6c5e(0x454)]; _0x3b5e88++) {
                    _0x124ce1 += 0.0001;
                    var _0x249a6e = _0xd3dc4f[_0x3b5e88];
                    _0x249a6e['kd'](_0xa409d8[_0x3b5e88]),
                    _0x249a6e['gd']['zIndex'] = _0x124ce1;
                }
            }
            ,
            _0x255f5b[_0x325998(0x551)]['Ad'] = function(_0x402f2b, _0xe1af04, _0x510b78, _0x30e69e) {
                var _0x5d73ab = _0x325998;
                this[_0x5d73ab(0x712)] = !![],
                this['position']['set'](_0x402f2b, _0xe1af04),
                this['rotation'] = _0x30e69e;
                for (var _0x1b0307 = 0x0; _0x1b0307 < this['od'][_0x5d73ab(0x454)]; _0x1b0307++) {
                    this['od'][_0x1b0307]['Bd'](_0x510b78);
                }
                ;for (var _0x2372b5 = 0x0; _0x2372b5 < this['pd'][_0x5d73ab(0x454)]; _0x2372b5++) {
                    this['pd'][_0x2372b5]['Bd'](_0x510b78);
                }
                ;for (var _0x2d752c = 0x0; _0x2d752c < this['qd'][_0x5d73ab(0x454)]; _0x2d752c++) {
                    this['qd'][_0x2d752c]['Bd'](_0x510b78);
                }
                ;for (var _0x1e80f2 = 0x0; _0x1e80f2 < this['rd'][_0x5d73ab(0x454)]; _0x1e80f2++) {
                    this['rd'][_0x1e80f2]['Bd'](_0x510b78);
                }
            }
            ,
            _0x255f5b['prototype']['Cd'] = function() {
                var _0x594aa6 = _0x325998;
                this[_0x594aa6(0x712)] = ![];
            }
            ,
            _0x255f5b[_0x325998(0x551)]['Dd'] = function(_0x1d4c17, _0x1121bd, _0x143a93, _0x1d6df6) {
                var _0x3860f5 = _0x325998;
                this['sd'][_0x3860f5(0x712)] = !![];
                var _0x237e0e = _0x143a93 / 0x3e8
                  , _0x2895d6 = 0x1 / this['td'][_0x3860f5(0x454)];
                for (var _0x1874a1 = 0x0; _0x1874a1 < this['td']['length']; _0x1874a1++) {
                    var _0x37c75a = 0x1 - (_0x237e0e + _0x2895d6 * _0x1874a1) % 0x1;
                    this['td'][_0x1874a1]['gd'][_0x3860f5(0x552)] = 0x1 - _0x37c75a,
                    this['td'][_0x1874a1]['Bd'](_0x1121bd * (0.5 + _0x37c75a * 4.5));
                }
            }
            ,
            _0x255f5b[_0x325998(0x551)]['vd'] = function() {
                var _0x3b4076 = _0x325998;
                this['sd'][_0x3b4076(0x712)] = ![];
            }
            ,
            _0x255f5b['prototype']['Ed'] = function(_0x123f18, _0x8324d3, _0x16bd27, _0x3ae5f7) {
                var _0x5bb5ad = _0x325998;
                this['wd']['gd'][_0x5bb5ad(0x712)] = _0x456264['vp'],
                this['wd']['gd']['alpha'] = _0x5d1bbd['ga'](this['wd']['gd'][_0x5bb5ad(0x552)], _0x123f18['Fd'] ? 0.9 : 0.2, _0x3ae5f7, 0.0025),
                this['wd']['Bd'](_0x8324d3);
            }
            ,
            _0x255f5b[_0x325998(0x551)]['xd'] = function() {
                this['wd']['gd']['visible'] = ![];
            }
            ,
            _0x255f5b[_0x325998(0x551)][_0x325998(0x3ee)] = function(_0x2eba6a, _0x1c4830, _0x4143ec, _0x3b4b51) {
                var _0x128090 = _0x325998;
                this[_0x128090(0x2c2)]['gd'][_0x128090(0x712)] = _0x456264[_0x128090(0x389)],
                this[_0x128090(0x2c2)]['gd'][_0x128090(0x552)] = _0x5d1bbd['ga'](this['wd']['gd']['alpha'], _0x2eba6a['Fd'] ? 0.9 : 0.2, _0x3b4b51, 0.0025),
                this[_0x128090(0x2c2)]['Bd'](_0x1c4830);
            }
            ,
            _0x255f5b[_0x325998(0x551)][_0x325998(0x17b)] = function() {
                var _0x55fb69 = _0x325998;
                this[_0x55fb69(0x2c2)]['gd'][_0x55fb69(0x712)] = ![];
            }
            ;
            var _0x458b32 = _0x255f5b;
            _0x30288b[_0x325998(0x551)]['Gd'] = function(_0x121991) {
                return this['dd'] + this['ed'] * _0x5d1bbd['oa'](_0x121991 * _0x45d710 - this['cd']);
            }
            ,
            _0x30288b[_0x325998(0x551)]['Hd'] = function(_0x223fd7, _0x2cb05a, _0x46bfdc, _0x56d43e) {
                var _0x153b72 = _0x325998, _0x52b58a, _0x1b1f56, _0xc22f5, _0x253ee8, _0x3b1f65, _0x24ea08, _0xbaf32c, _0x3bf6d4, _0x812e80 = _0x223fd7['Id'] * 0x2, _0x1a4131 = _0x223fd7['Jd'], _0x2e3c97 = _0x223fd7['Kd'], _0xbfd2a1 = _0x2e3c97 * 0x4 - 0x3, _0x144f8c = _0xbfd2a1;
                this['cd'] = _0x2cb05a / 0x190 * _0x52ace1['T'],
                this['dd'] = _0x812e80 * 1.5,
                this['ed'] = _0x812e80 * 0.15 * _0x223fd7['Ld'];
                if (_0x56d43e(_0x1b1f56 = _0x1a4131[0x0], _0x24ea08 = _0x1a4131[0x1])) {
                    _0xc22f5 = _0x1a4131[0x2],
                    _0xbaf32c = _0x1a4131[0x3],
                    _0x253ee8 = _0x1a4131[0x4],
                    _0x3bf6d4 = _0x1a4131[0x5];
                    var _0x17f377 = _0x5d1bbd['ta'](_0x3bf6d4 + _0x24ea08 * 0x2 - _0xbaf32c * 0x3, _0x253ee8 + _0x1b1f56 * 0x2 - _0xc22f5 * 0x3);
                    this['Zc']['Ad'](_0x1b1f56, _0x24ea08, _0x812e80, _0x17f377),
                    this['_c'][0x0]['Ad'](_0x1b1f56, _0x24ea08, _0x812e80, this['Gd'](0x0), _0x17f377),
                    this['_c'][0x1]['Ad'](_0x1b1f56 * 0.64453125 + _0xc22f5 * 0.45703125 + _0x253ee8 * -0.1015625, _0x24ea08 * 0.64453125 + _0xbaf32c * 0.45703125 + _0x3bf6d4 * -0.1015625, _0x812e80, this['Gd'](0x1), _0x31c3f9['Md'](this['_c'][0x0], this['_c'][0x2])),
                    this['_c'][0x2]['Ad'](_0x1b1f56 * 0.375 + _0xc22f5 * 0.75 + _0x253ee8 * -0.125, _0x24ea08 * 0.375 + _0xbaf32c * 0.75 + _0x3bf6d4 * -0.125, _0x812e80, this['Gd'](0x2), _0x31c3f9['Md'](this['_c'][0x1], this['_c'][0x3])),
                    this['_c'][0x3]['Ad'](_0x1b1f56 * 0.15234375 + _0xc22f5 * 0.94921875 + _0x253ee8 * -0.1015625, _0x24ea08 * 0.15234375 + _0xbaf32c * 0.94921875 + _0x3bf6d4 * -0.1015625, _0x812e80, this['Gd'](0x3), _0x31c3f9['Md'](this['_c'][0x2], this['_c'][0x4]));
                } else
                    this['Zc']['Cd'](),
                    this['_c'][0x0]['Cd'](),
                    this['_c'][0x1]['Cd'](),
                    this['_c'][0x2]['Cd'](),
                    this['_c'][0x3]['Cd']();
                ;var _0x26d96a = 0x4;
                for (var _0x445fda = 0x2, _0x4a4569 = _0x2e3c97 * 0x2 - 0x4; _0x445fda < _0x4a4569; _0x445fda += 0x2) {
                    _0x56d43e(_0x1b1f56 = _0x1a4131[_0x445fda], _0x24ea08 = _0x1a4131[_0x445fda + 0x1]) ? (_0x52b58a = _0x1a4131[_0x445fda - 0x2],
                    _0x3b1f65 = _0x1a4131[_0x445fda - 0x1],
                    _0xc22f5 = _0x1a4131[_0x445fda + 0x2],
                    _0xbaf32c = _0x1a4131[_0x445fda + 0x3],
                    _0x253ee8 = _0x1a4131[_0x445fda + 0x4],
                    _0x3bf6d4 = _0x1a4131[_0x445fda + 0x5],
                    this['_c'][_0x26d96a]['Ad'](_0x1b1f56, _0x24ea08, _0x812e80, this['Gd'](_0x26d96a), _0x31c3f9['Md'](this['_c'][_0x26d96a - 0x1], this['_c'][_0x26d96a + 0x1])),
                    _0x26d96a++,
                    this['_c'][_0x26d96a]['Ad'](_0x52b58a * -0.06640625 + _0x1b1f56 * 0.84375 + _0xc22f5 * 0.2578125 + _0x253ee8 * -0.03515625, _0x3b1f65 * -0.06640625 + _0x24ea08 * 0.84375 + _0xbaf32c * 0.2578125 + _0x3bf6d4 * -0.03515625, _0x812e80, this['Gd'](_0x26d96a), _0x31c3f9['Md'](this['_c'][_0x26d96a - 0x1], this['_c'][_0x26d96a + 0x1])),
                    _0x26d96a++,
                    this['_c'][_0x26d96a]['Ad'](_0x52b58a * -0.0625 + _0x1b1f56 * 0.5625 + _0xc22f5 * 0.5625 + _0x253ee8 * -0.0625, _0x3b1f65 * -0.0625 + _0x24ea08 * 0.5625 + _0xbaf32c * 0.5625 + _0x3bf6d4 * -0.0625, _0x812e80, this['Gd'](_0x26d96a), _0x31c3f9['Md'](this['_c'][_0x26d96a - 0x1], this['_c'][_0x26d96a + 0x1])),
                    _0x26d96a++,
                    this['_c'][_0x26d96a]['Ad'](_0x52b58a * -0.03515625 + _0x1b1f56 * 0.2578125 + _0xc22f5 * 0.84375 + _0x253ee8 * -0.06640625, _0x3b1f65 * -0.03515625 + _0x24ea08 * 0.2578125 + _0xbaf32c * 0.84375 + _0x3bf6d4 * -0.06640625, _0x812e80, this['Gd'](_0x26d96a), _0x31c3f9['Md'](this['_c'][_0x26d96a - 0x1], this['_c'][_0x26d96a + 0x1])),
                    _0x26d96a++) : (this['_c'][_0x26d96a]['Cd'](),
                    _0x26d96a++,
                    this['_c'][_0x26d96a]['Cd'](),
                    _0x26d96a++,
                    this['_c'][_0x26d96a]['Cd'](),
                    _0x26d96a++,
                    this['_c'][_0x26d96a]['Cd'](),
                    _0x26d96a++);
                }
                ;_0x56d43e(_0x1b1f56 = _0x1a4131[_0x2e3c97 * 0x2 - 0x4], _0x24ea08 = _0x1a4131[_0x2e3c97 * 0x2 - 0x3]) ? (_0x52b58a = _0x1a4131[_0x2e3c97 * 0x2 - 0x6],
                _0x3b1f65 = _0x1a4131[_0x2e3c97 * 0x2 - 0x5],
                _0xc22f5 = _0x1a4131[_0x2e3c97 * 0x2 - 0x2],
                _0xbaf32c = _0x1a4131[_0x2e3c97 * 0x2 - 0x1],
                this['_c'][_0xbfd2a1 - 0x5]['Ad'](_0x1b1f56, _0x24ea08, _0x812e80, this['Gd'](_0xbfd2a1 - 0x5), _0x31c3f9['Md'](this['_c'][_0xbfd2a1 - 0x6], this['_c'][_0xbfd2a1 - 0x4])),
                this['_c'][_0xbfd2a1 - 0x4]['Ad'](_0x52b58a * -0.1015625 + _0x1b1f56 * 0.94921875 + _0xc22f5 * 0.15234375, _0x3b1f65 * -0.1015625 + _0x24ea08 * 0.94921875 + _0xbaf32c * 0.15234375, _0x812e80, this['Gd'](_0xbfd2a1 - 0x4), _0x31c3f9['Md'](this['_c'][_0xbfd2a1 - 0x5], this['_c'][_0xbfd2a1 - 0x3])),
                this['_c'][_0xbfd2a1 - 0x3]['Ad'](_0x52b58a * -0.125 + _0x1b1f56 * 0.75 + _0xc22f5 * 0.375, _0x3b1f65 * -0.125 + _0x24ea08 * 0.75 + _0xbaf32c * 0.375, _0x812e80, this['Gd'](_0xbfd2a1 - 0x3), _0x31c3f9['Md'](this['_c'][_0xbfd2a1 - 0x4], this['_c'][_0xbfd2a1 - 0x2])),
                this['_c'][_0xbfd2a1 - 0x2]['Ad'](_0x52b58a * -0.1015625 + _0x1b1f56 * 0.45703125 + _0xc22f5 * 0.64453125, _0x3b1f65 * -0.1015625 + _0x24ea08 * 0.45703125 + _0xbaf32c * 0.64453125, _0x812e80, this['Gd'](_0xbfd2a1 - 0x2), _0x31c3f9['Md'](this['_c'][_0xbfd2a1 - 0x3], this['_c'][_0xbfd2a1 - 0x1])),
                this['_c'][_0xbfd2a1 - 0x1]['Ad'](_0xc22f5, _0xbaf32c, _0x812e80, this['Gd'](_0xbfd2a1 - 0x1), _0x31c3f9['Md'](this['_c'][_0xbfd2a1 - 0x2], this['_c'][_0xbfd2a1 - 0x1]))) : (this['_c'][_0xbfd2a1 - 0x5]['Cd'](),
                this['_c'][_0xbfd2a1 - 0x4]['Cd'](),
                this['_c'][_0xbfd2a1 - 0x3]['Cd'](),
                this['_c'][_0xbfd2a1 - 0x2]['Cd'](),
                this['_c'][_0xbfd2a1 - 0x1]['Cd']());
                this['$c'] === 0x0 && _0x144f8c > 0x0 && this['Yc']['addChild'](this['Zc']);
                this['$c'] > 0x0 && _0x144f8c === 0x0 && _0x3f9428['k']['F']['G'](this['Zc']);
                while (this['$c'] < _0x144f8c) {
                    this['Yc']['addChild'](this['_c'][this['$c']]['ld']['zd']()),
                    this['Yc']['addChild'](this['_c'][this['$c']]['md']['zd']()),
                    this['$c'] += 0x1;
                }
                ;while (this['$c'] > _0x144f8c) {
                    this['$c'] -= 0x1,
                    this['_c'][this['$c']]['md']['G'](),
                    this['_c'][this['$c']]['ld']['G']();
                }
                ;var _0x2e2ee7 = _0x223fd7['Nd'][_0x21385e['Pd']['Od']];
                this['_c'][0x0]['Qd']() && _0x2e2ee7 != null && _0x2e2ee7['Rd'] ? this['Zc']['Dd'](_0x223fd7, _0x812e80, _0x2cb05a, _0x46bfdc) : this['Zc']['vd']();
                var _0x7e67bf = _0x223fd7['Nd'][_0x21385e['Pd']['Sd']];
                this['_c'][0x0]['Qd']() && _0x7e67bf != null && _0x7e67bf['Rd'] ? this['Zc']['Ed'](_0x223fd7, _0x812e80, _0x2cb05a, _0x46bfdc) : this['Zc']['xd']();
                var _0x55511a = _0x223fd7['Nd'][_0x21385e['Pd']['Yd']];
                this['_c'][0x0]['Qd']() && _0x55511a != null && _0x55511a['Rd'] ? this['Zc'][_0x153b72(0x3ee)](_0x223fd7, _0x812e80, _0x2cb05a, _0x46bfdc) : this['Zc'][_0x153b72(0x17b)]();
            }
            ;
            var _0x31c3f9 = (function() {
                var _0x400522 = _0x325998;
                function _0x39013a(_0xf73ccb, _0x570f05) {
                    this['ld'] = _0xf73ccb,
                    this['ld']['Td'](![]),
                    this['md'] = _0x570f05,
                    this['md']['Td'](![]);
                }
                return _0x39013a[_0x400522(0x551)]['Ad'] = function(_0x3a56bd, _0xd7bd6e, _0x5db651, _0x54c9ab, _0x45497d) {
                    this['ld']['Td'](!![]),
                    this['ld']['Ud'](_0x3a56bd, _0xd7bd6e),
                    this['ld']['Bd'](_0x5db651),
                    this['ld']['Vd'](_0x45497d),
                    this['md']['Td'](!![]),
                    this['md']['Ud'](_0x3a56bd, _0xd7bd6e),
                    this['md']['Bd'](_0x54c9ab),
                    this['md']['Vd'](_0x45497d);
                }
                ,
                _0x39013a[_0x400522(0x551)]['Cd'] = function() {
                    this['ld']['Td'](![]),
                    this['md']['Td'](![]);
                }
                ,
                _0x39013a[_0x400522(0x551)]['Qd'] = function() {
                    return this['ld']['Qd']();
                }
                ,
                _0x39013a['Md'] = function(_0x57833e, _0x445c33) {
                    var _0x1f197a = _0x400522;
                    return _0x5d1bbd['ta'](_0x57833e['ld']['gd'][_0x1f197a(0x627)]['y'] - _0x445c33['ld']['gd'][_0x1f197a(0x627)]['y'], _0x57833e['ld']['gd']['position']['x'] - _0x445c33['ld']['gd']['position']['x']);
                }
                ,
                _0x39013a;
            }());
            return _0x30288b;
        }()),
        _0x21385e['Pd'] = (function() {
            function _0x4edb8b(_0x4c5487) {
                this['Wd'] = _0x4c5487,
                this['Rd'] = ![],
                this['Xd'] = 0x1;
            }
            return _0x4edb8b['Sd'] = 0x0,
            _0x4edb8b['Yd'] = 0x1,
            _0x4edb8b['Od'] = 0x2,
            _0x4edb8b['Zd'] = 0x6,
            _0x4edb8b['$d'] = 0x3,
            _0x4edb8b['_d'] = 0x4,
            _0x4edb8b['ae'] = 0x5,
            _0x4edb8b;
        }()),
        _0x21385e['jc'] = (function() {
            var _0x13c66a = _0x2413a9;
            function _0x19a1bc(_0x2d79d2, _0x547821) {
                this['be'] = _0x2d79d2,
                this['ce'] = _0x547821;
            }
            return _0x19a1bc['de'] = new _0x19a1bc({},_0x21385e['pb']['lb']()),
            _0x19a1bc[_0x13c66a(0x551)]['sc'] = function() {
                var _0x75fcac = _0x13c66a;
                return this['be'][_0x75fcac(0x426)];
            }
            ,
            _0x19a1bc['prototype']['Hc'] = function() {
                return this['be'];
            }
            ,
            _0x19a1bc[_0x13c66a(0x551)]['Cc'] = function() {
                return this['ce'];
            }
            ,
            _0x19a1bc;
        }()),
        _0x21385e['vc'] = (function() {
            var _0x285d30 = _0x2413a9;
            function _0x2c1f0e(_0x354c99) {
                this['ee'] = (++_0x2c1f0e['fe'],
                function(_0x148dee, _0xd1b1cb) {}
                ),
                this['ge'] = _0x354c99,
                this['he'] = null,
                this['ie'] = null,
                this['je'] = null,
                this['ke'] = null,
                this['le'] = null,
                this['me'] = ![],
                this['ne'] = ![],
                this['oe'] = ![];
            }
            return _0x2c1f0e['pe'] = {
                'qe': _0x285d30(0x6f4),
                're': _0x285d30(0x6b9),
                'se': _0x285d30(0x7c6),
                'te': _0x285d30(0x1d1),
                'ue': _0x285d30(0x560)
            },
            _0x2c1f0e['fe'] = 0x186a0,
            _0x2c1f0e['ve'] = new _0x21385e['Kc']['Nc']()['Pc'](_0x2c1f0e['pe']['qe'], 0x1)['Pc'](_0x2c1f0e['pe']['re'], 0xa)['Pc'](_0x2c1f0e['pe']['se'], 0x32)['Pc'](_0x2c1f0e['pe']['te'], 0xf)['Pc'](_0x2c1f0e['pe']['ue'], 0x5)['Sc'](),
            _0x2c1f0e[_0x285d30(0x551)]['Ac'] = function(_0x43b604) {
                this['he'] = _0x43b604;
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['zc'] = function(_0x4eb311) {
                this['ie'] = _0x4eb311;
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['xc'] = function(_0x20e1aa) {
                this['je'] = _0x20e1aa;
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['yc'] = function(_0x2c8070) {
                this['ke'] = _0x2c8070;
            }
            ,
            _0x2c1f0e['prototype']['wc'] = function(_0x44c8c7) {
                this['le'] = _0x44c8c7;
            }
            ,
            _0x2c1f0e['prototype']['tc'] = function() {
                return this['oe'];
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['uc'] = function() {
                this['me'] = !![];
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['Ec'] = function() {
                if (!this['ne']) {
                    this['ne'] = !![];
                    if (this['me']) {
                        this['we']();
                        return;
                    }
                    ;this['xe']();
                }
            }
            ,
            _0x2c1f0e['prototype']['xe'] = function() {
                var _0x17b726 = _0x285d30
                  , _0x1ff00b = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;$[_0x17b726(0x301)]({
                    'type': _0x17b726(0x22c),
                    'url': _0x52ace1['H']['K'] + _0x17b726(0x2e2),
                    'xhrFields': {
                        'onprogress': function(_0x125def) {
                            var _0x1cff7a = _0x17b726, _0x1dc2b1, _0x375ee0;
                            _0x125def['lengthComputable'] && (_0x1dc2b1 = _0x125def['loaded'] / _0x125def[_0x1cff7a(0x39c)],
                            _0x375ee0 = _0x2c1f0e['pe']['qe'],
                            _0x1ff00b['ye'](_0x375ee0, _0x2c1f0e['ve']['Mc'](_0x375ee0)['Wc'](_0x1dc2b1)));
                        }
                    }
                })[_0x17b726(0x195)](function() {
                    _0x1ff00b['ze'](Error());
                })[_0x17b726(0x767)](function(_0x3eeb51) {
                    if (_0x3eeb51 <= _0x1ff00b['ge']) {
                        _0x1ff00b['Ae']();
                        return;
                    }
                    ;_0x1ff00b['Be']();
                });
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['Be'] = function() {
                var _0x41d853 = _0x285d30
                  , _0x54ca86 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;$[_0x41d853(0x301)]({
                    'type': _0x41d853(0x22c),
                    'url': _0x52ace1['H']['K'] + _0x41d853(0x142),
                    'xhrFields': {
                        'onprogress': function(_0x15c109) {
                            var _0x1a488b = _0x41d853, _0x393aa2, _0x28efc0;
                            _0x15c109['lengthComputable'] && (_0x393aa2 = _0x15c109[_0x1a488b(0x1d2)] / _0x15c109[_0x1a488b(0x39c)],
                            _0x28efc0 = _0x2c1f0e['pe']['re'],
                            _0x54ca86['ye'](_0x28efc0, _0x2c1f0e['ve']['Mc'](_0x28efc0)['Wc'](_0x393aa2)));
                        }
                    }
                })[_0x41d853(0x195)](function() {
                    _0x54ca86['ze'](Error());
                })['done'](function(_0x4d4e80) {
                    var _0x43d10e = _0x41d853;
                    if (_0x4d4e80[_0x43d10e(0x426)] <= _0x54ca86['ge']) {
                        _0x54ca86['Ae']();
                        return;
                    }
                    ;var _0x1a83d8 = {}
                      , _0x46f58e = {
                        'country': 'gb',
                        'v': 'v2'
                    };
                    _0x391bb6 && _0x391bb6 != 'gb' && (_0x46f58e['country'] = _0x391bb6),
                    _0x1a83d8 = _0x4d4e80,
                    _0x2a01fb && _0x584a0d && _0x584a0d == _0x456264[_0x43d10e(0x729)] ? (_0x1a83d8 = JSON[_0x43d10e(0x608)](_0x2a01fb),
                    (async function() {
                        var _0x46f42e = _0x43d10e;
                        (_0x385553 || _0x2fae16 || Array[_0x46f42e(0x291)](_0x456264['dg']) && _0x456264['dg'][_0x46f42e(0x454)] > 0x0) && (_0x1a83d8 = await Ysw(_0x1a83d8));
                        for (let _0x477766 in _0x1a83d8) {
                            Array[_0x46f42e(0x291)](_0x1a83d8[_0x477766]) ? _0x4d4e80[_0x477766] = _0x4d4e80[_0x477766]['concat'](_0x1a83d8[_0x477766]) : _0x4d4e80[_0x477766] = {
                                ..._0x4d4e80[_0x477766],
                                ..._0x1a83d8[_0x477766]
                            };
                        }
                        ;_0x54ca86['Ce'](_0x4d4e80);
                    }())) : fetch(_0x43d10e(0x247), {
                        'headers': {
                            'Content-Type': _0x43d10e(0x284)
                        },
                        'method': _0x43d10e(0x3aa),
                        'body': JSON[_0x43d10e(0x6b1)](_0x46f58e)
                    })[_0x43d10e(0x268)](async function(_0x5ee3ac) {
                        var _0x1c6f2e = _0x43d10e;
                        for (let _0x119757 in (_0x5ee3ac = await _0x5ee3ac[_0x1c6f2e(0x55a)]())[_0x1c6f2e(0x788)]) {
                            for (let _0x541a43 in _0x5ee3ac[_0x1c6f2e(0x788)][_0x119757]) {
                                _0x541a43 === _0x1c6f2e(0x57c) && (_0x5ee3ac[_0x1c6f2e(0x788)][_0x119757][_0x541a43] = _0x1c6f2e(0xf2) + _0x5ee3ac['textureDict'][_0x119757][_0x541a43][_0x1c6f2e(0x337)](_0x5ee3ac[_0x1c6f2e(0x788)][_0x119757][_0x541a43][_0x1c6f2e(0x454)] - _0x456264[_0x1c6f2e(0x410)], _0x456264[_0x1c6f2e(0x410)]) + _0x5ee3ac[_0x1c6f2e(0x788)][_0x119757][_0x541a43]['substr'](0x0, _0x5ee3ac[_0x1c6f2e(0x788)][_0x119757][_0x541a43][_0x1c6f2e(0x454)] - _0x456264[_0x1c6f2e(0x410)]));
                            }
                        }
                        ;localStorage[_0x1c6f2e(0x434)](_0x1c6f2e(0x2d5), _0x456264[_0x1c6f2e(0x729)]);
                        (_0x385553 || _0x2fae16 || Array['isArray'](_0x456264['dg']) && _0x456264['dg'][_0x1c6f2e(0x454)] > 0x0) && (_0x5ee3ac = await Ysw(_0x5ee3ac));
                        for (let _0x41258a in _0x5ee3ac) {
                            Array[_0x1c6f2e(0x291)](_0x5ee3ac[_0x41258a]) ? _0x4d4e80[_0x41258a] = _0x4d4e80[_0x41258a][_0x1c6f2e(0x206)](_0x5ee3ac[_0x41258a]) : _0x4d4e80[_0x41258a] = {
                                ..._0x4d4e80[_0x41258a],
                                ..._0x5ee3ac[_0x41258a]
                            };
                        }
                        ;_0x54ca86['Ce'](_0x4d4e80);
                    })[_0x43d10e(0x2ef)](function(_0x200843) {
                        var _0x3dad52 = _0x43d10e;
                        localStorage[_0x3dad52(0x369)](_0x3dad52(0x74f)),
                        localStorage[_0x3dad52(0x369)](_0x3dad52(0x493)),
                        _0x54ca86['Ce'](_0x4d4e80);
                    });
                });
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['Ce'] = function(_0x283a72) {
                var _0x684256 = _0x285d30
                  , _0x133858 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;var _0x12b210 = []
                  , _0x24d64f = []
                  , _0xef7545 = 0x0;
                for (var _0x2af997 in _0x283a72[_0x684256(0x788)]) {
                    if (_0x283a72[_0x684256(0x788)]['hasOwnProperty'](_0x2af997)) {
                        var _0x4d98b5 = _0x283a72[_0x684256(0x788)][_0x2af997];
                        if (_0x4d98b5[_0x684256(0x16e)]) {
                            var _0x31a874 = '';
                            _0x4d98b5[_0x684256(0x415)] && (_0x31a874 = _0x4d98b5['relativePath']['search'](_0x684256(0x238)) != -0x1 ? _0x4d98b5[_0x684256(0x415)] : _0x456264[_0x684256(0x595)] + _0x4d98b5[_0x684256(0x415)]);
                            var _0x27179f = _0x4d98b5['file'] || _0x31a874
                              , _0x276ed5 = 0x0
                              , _0x4de2a8 = ''
                              , _0x407102 = new _0x2c1f0e['De'](_0x2af997,_0x27179f,_0x276ed5,_0x4de2a8);
                            _0x12b210[_0x684256(0x731)](_0x407102),
                            _0x24d64f[_0x684256(0x731)](_0x407102);
                        } else {
                            var _0x27179f = _0x52ace1['H']['K'] + _0x4d98b5[_0x684256(0x415)]
                              , _0x276ed5 = _0x4d98b5[_0x684256(0x587)]
                              , _0x4de2a8 = _0x4d98b5['sha256']
                              , _0x407102 = new _0x2c1f0e['De'](_0x2af997,_0x27179f,_0x276ed5,_0x4de2a8);
                            _0x12b210[_0x684256(0x731)](_0x407102),
                            _0x24d64f[_0x684256(0x731)](_0x407102),
                            _0xef7545 += _0x276ed5;
                        }
                    }
                }
                ;var _0x1df198, _0x37eec6 = 0x0;
                function _0xc9c8ea(_0x5c0eb5) {
                    var _0x10415c = _0x684256;
                    for (var _0x2602aa = 0x0; _0x2602aa < _0x24d64f[_0x10415c(0x454)]; _0x2602aa++) {
                        try {
                            _0x21385e['c'][_0x10415c(0x572)][_0x10415c(0x323)](_0x24d64f[_0x2602aa]['Ee']);
                        } catch (_0x5da23c) {}
                    }
                    ;_0x133858['ze'](_0x5c0eb5);
                }
                function _0x5a3684(_0x53a4ae) {
                    var _0x1caa3e, _0x1f25bc;
                    _0x1caa3e = (_0x37eec6 + _0x5d1bbd['_'](_0x1df198['Fe'] * _0x53a4ae)) / _0xef7545,
                    _0x1f25bc = _0x2c1f0e['pe']['se'],
                    _0x133858['ye'](_0x1f25bc, _0x2c1f0e['ve']['Mc'](_0x1f25bc)['Wc'](_0x1caa3e));
                }
                function _0x1166d9(_0x4416ef) {
                    var _0x326b98 = _0x684256
                      , _0x4981be = new Blob([_0x4416ef]);
                    _0x1df198['Ee'] = _0x21385e['c'][_0x326b98(0x572)][_0x326b98(0x652)](_0x4981be),
                    _0x37eec6 += _0x1df198['Fe'],
                    _0xd8694b();
                }
                function _0xd8694b() {
                    var _0x149ebb = _0x684256;
                    if (_0x422e46 < _0x24d64f[_0x149ebb(0x454)]) {
                        _0x1df198 = _0x24d64f[_0x422e46++],
                        _0x133858['Ge'](_0x1df198, _0xc9c8ea, _0x1166d9, _0x5a3684);
                        return;
                    }
                    ;_0x5d1bbd['Y'](function() {
                        return _0x133858['He'](_0x283a72, _0x12b210);
                    }, 0x0);
                }
                var _0x422e46 = 0x0;
                _0xd8694b();
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['Ge'] = function(_0x1ff074, _0x4980ea, _0x1b5975, _0x3e483f) {
                var _0x20e89a = _0x285d30;
                $[_0x20e89a(0x301)]({
                    'type': _0x20e89a(0x22c),
                    'url': _0x1ff074['Ie'],
                    'xhrFields': {
                        'responseType': _0x20e89a(0x724),
                        'onprogress': function(_0x163e57) {
                            var _0x3bb421 = _0x20e89a;
                            _0x163e57[_0x3bb421(0x6a2)] && _0x3e483f(_0x163e57[_0x3bb421(0x1d2)] / _0x163e57[_0x3bb421(0x39c)]);
                        }
                    }
                })[_0x20e89a(0x195)](function() {
                    _0x4980ea(Error());
                })['done'](function(_0x180010) {
                    _0x1b5975(_0x180010);
                });
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['He'] = function(_0x42006b, _0x4fef88) {
                var _0x2ff31 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;var _0x344962, _0x430334, _0xb6e545 = {};
                function _0x595852() {
                    var _0xc5af4c = _0x3903;
                    for (var _0x44834d = 0x0; _0x44834d < _0x4fef88[_0xc5af4c(0x454)]; _0x44834d++) {
                        try {
                            _0x21385e['c'][_0xc5af4c(0x572)][_0xc5af4c(0x323)](_0x4fef88[_0x44834d]['Ee']);
                        } catch (_0x581787) {}
                    }
                    ;_0x2ff31['ze'](Error());
                }
                function _0x19d74b() {
                    var _0x195500 = _0x3903, _0x24d77a, _0x1bd939;
                    _0x24d77a = _0x37fe69 / _0x4fef88[_0x195500(0x454)],
                    _0x1bd939 = _0x2c1f0e['pe']['te'],
                    _0x2ff31['ye'](_0x1bd939, _0x2c1f0e['ve']['Mc'](_0x1bd939)['Wc'](_0x24d77a)),
                    _0xb6e545[_0x344962['Je']] = new _0x21385e['Ke'](_0x344962['Ee'],_0x430334),
                    _0x462424();
                }
                function _0x462424() {
                    var _0x2357a9 = _0x3903;
                    if (_0x37fe69 < _0x4fef88[_0x2357a9(0x454)]) {
                        _0x344962 = _0x4fef88[_0x37fe69++],
                        (_0x430334 = _0x3f9428['k']['m']['from'](_0x344962['Ee']))['on']('error', _0x595852),
                        _0x430334['on']('loaded', _0x19d74b);
                        return;
                    }
                    ;_0x5d1bbd['Y'](function() {
                        return _0x2ff31['Le'](_0x42006b, _0xb6e545);
                    }, 0x0);
                }
                var _0x37fe69 = 0x0;
                _0x462424();
            }
            ,
            _0x2c1f0e['prototype']['Le'] = function(_0x5ed85c, _0x502c2e) {
                var _0x404598 = _0x285d30
                  , _0x2529c7 = this
                  , _0x3e9495 = {}
                  , _0x4d4b0f = 0x0
                  , _0x547bc6 = Object[_0x404598(0x50b)](_0x5ed85c[_0x404598(0x4ba)])[_0x404598(0x454)];
                _0x5d1bbd['Da'](_0x5ed85c[_0x404598(0x4ba)], function(_0x1cfadf, _0x30efa2) {
                    var _0x4eea70 = _0x404598, _0x2327f6, _0x310d2a, _0xfaa884 = _0x21385e['Wa']['mb'](_0x30efa2[_0x4eea70(0x58e)] + ':\x20' + _0x1cfadf, _0x502c2e[_0x30efa2[_0x4eea70(0x58e)]]['Za'], _0x30efa2);
                    _0x3e9495[_0x1cfadf] = _0xfaa884,
                    ++_0x4d4b0f % 0xa == 0x0 && (_0x2327f6 = _0x4d4b0f / _0x547bc6,
                    _0x310d2a = _0x2c1f0e['pe']['ue'],
                    _0x2529c7['ye'](_0x310d2a, _0x2c1f0e['ve']['Mc'](_0x310d2a)['Wc'](_0x2327f6)));
                });
                var _0x592cd0 = Object[_0x404598(0x50b)](_0x502c2e)[_0x404598(0x672)](function(_0x571a90) {
                    return _0x571a90['Za'];
                })
                  , _0x5377a1 = Object[_0x404598(0x50b)](_0x3e9495)
                  , _0x37906e = new _0x21385e['jc'](_0x5ed85c,_0x21385e['pb']['Qb'](_0x5ed85c, _0x3e9495, _0x592cd0, _0x5377a1));
                _0x5d1bbd['Y'](function() {
                    return _0x2529c7['Me'](_0x37906e);
                }, 0x0);
            }
            ,
            _0x2c1f0e['De'] = function _0x5b8313(_0x31294b, _0x1f1baf, _0x31e268, _0x40c9fd) {
                this['Je'] = _0x31294b,
                this['Ie'] = _0x1f1baf,
                this['Fe'] = _0x31e268,
                this['Ne'] = _0x40c9fd,
                this['Ee'] = '';
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['Me'] = function(_0x5374cf) {
                if (this['oe']) {
                    _0x5374cf['Cc']()['ob']();
                    return;
                }
                ;this['oe'] = !![];
                var _0xf3542 = this;
                _0x5d1bbd['Y'](function() {
                    return _0xf3542['he'](_0x5374cf);
                }, 0x0);
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['Ae'] = function() {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x5a6acb = this;
                    _0x5d1bbd['Y'](function() {
                        return _0x5a6acb['ie']();
                    }, 0x0);
                }
            }
            ,
            _0x2c1f0e[_0x285d30(0x551)]['ze'] = function(_0x10ed4a) {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x3ea104 = this;
                    _0x5d1bbd['Y'](function() {
                        return _0x3ea104['je'](_0x10ed4a);
                    }, 0x0);
                }
            }
            ,
            _0x2c1f0e['prototype']['we'] = function() {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x276b54 = this;
                    _0x5d1bbd['Y'](function() {
                        return _0x276b54['ke']();
                    }, 0x0);
                }
            }
            ,
            _0x2c1f0e['prototype']['ye'] = function(_0x269548, _0x1ec115) {
                if (!this['oe'] && !this['me']) {
                    var _0x4b9971 = this;
                    _0x5d1bbd['Y'](function() {
                        return _0x4b9971['le'](_0x269548, _0x1ec115);
                    }, 0x0);
                }
            }
            ,
            _0x2c1f0e;
        }()),
        _0x21385e['Oe'] = {},
        _0x21385e['Pe'] = (function() {
            var _0xcc34b = _0x2413a9;
            function _0x22a507() {
                this['Qe'] = _0x21385e['Pe']['Se']['Re'],
                this['Te'] = ![],
                this['Ue'] = ![],
                this['Ve'] = null,
                this['We'] = null;
            }
            return _0x22a507[_0xcc34b(0x551)]['Sa'] = function() {}
            ,
            _0x22a507[_0xcc34b(0x551)]['Xe'] = function(_0x11baf2) {
                this['Ue'] = _0x11baf2;
            }
            ,
            _0x22a507[_0xcc34b(0x551)]['Ye'] = function(_0x1e65bb) {
                this['Qe'] = _0x1e65bb,
                this['Ze']();
            }
            ,
            _0x22a507[_0xcc34b(0x551)]['$e'] = function(_0x5b092e) {
                this['Te'] = _0x5b092e,
                this['Ze']();
            }
            ,
            _0x22a507[_0xcc34b(0x551)]['Ze'] = function() {}
            ,
            _0x22a507[_0xcc34b(0x551)]['_e'] = function(_0x303ef0, _0x3ae9ac) {
                var _0x2fb9cd = _0xcc34b;
                if (!ooo['ud']['Fc']())
                    return null;
                ;var _0x4a9605 = _0x303ef0[_0x3ae9ac];
                return _0x4a9605 == null || _0x4a9605[_0x2fb9cd(0x454)] === 0x0 ? null : _0x4a9605[_0x5d1bbd['_'](_0x5d1bbd['ma']() * _0x4a9605[_0x2fb9cd(0x454)])][_0x2fb9cd(0x1b0)]();
            }
            ,
            _0x22a507[_0xcc34b(0x551)]['af'] = function(_0x4aec10, _0x12c7e5, _0x1136c9) {
                var _0x3b66b5 = _0xcc34b;
                if (this['Ue'] && !(_0x1136c9 <= 0x0)) {
                    var _0x17d6e9 = this['_e'](_0x4aec10, _0x12c7e5);
                    _0x17d6e9 != null && (_0x17d6e9[_0x3b66b5(0x364)] = _0x5d1bbd['ha'](0x1, _0x1136c9),
                    _0x17d6e9[_0x3b66b5(0x648)]());
                }
            }
            ,
            _0x22a507[_0xcc34b(0x551)]['bf'] = function(_0x2a9cab, _0x1c3c3a) {
                this['Qe']['cf'] && this['af'](_0x2a9cab['ef']['df'], _0x2a9cab, _0x1c3c3a);
            }
            ,
            _0x22a507[_0xcc34b(0x551)]['ff'] = function(_0x3ac64b, _0x253e0c) {
                this['Qe']['gf'] && this['af'](_0x3ac64b['ef']['hf'], _0x3ac64b, _0x253e0c);
            }
            ,
            _0x22a507[_0xcc34b(0x551)]['if'] = function() {}
            ,
            _0x22a507[_0xcc34b(0x551)]['jf'] = function() {}
            ,
            _0x22a507[_0xcc34b(0x551)]['kf'] = function() {}
            ,
            _0x22a507[_0xcc34b(0x551)]['lf'] = function() {}
            ,
            _0x22a507['prototype']['mf'] = function() {}
            ,
            _0x22a507['prototype']['nf'] = function() {}
            ,
            _0x22a507[_0xcc34b(0x551)]['pf'] = function(_0x5b6272, _0x4144, _0x4d7d97) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['qf'] = function(_0x40588b) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['rf'] = function(_0x31d568) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['sf'] = function(_0xbb7df8) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['tf'] = function(_0x2344f1) {}
            ,
            _0x22a507['prototype']['uf'] = function(_0x2782d1) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['vf'] = function(_0x2a8f61) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['wf'] = function(_0x171d4d) {}
            ,
            _0x22a507['prototype']['xf'] = function(_0x4506d6) {}
            ,
            _0x22a507['prototype']['yf'] = function(_0x5314b3) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['zf'] = function(_0x26a329) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['Af'] = function(_0x28da1f) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['Bf'] = function(_0x3c3ed1) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['Cf'] = function(_0x4647d3) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['Df'] = function(_0x55088c) {}
            ,
            _0x22a507['prototype']['Ef'] = function(_0x4b4a72, _0x21f17c) {}
            ,
            _0x22a507[_0xcc34b(0x551)]['Ff'] = function(_0x2efe3c) {}
            ,
            _0x22a507['prototype']['Gf'] = function(_0x42228f, _0x30ac4d, _0x4e296c) {}
            ,
            _0x22a507['Se'] = {
                'Re': {
                    'Hf': ![],
                    'If': ![],
                    'gf': !![],
                    'cf': ![]
                },
                'Jf': {
                    'Hf': ![],
                    'If': !![],
                    'gf': !![],
                    'cf': ![]
                },
                'Kf': {
                    'Hf': !![],
                    'If': ![],
                    'gf': ![],
                    'cf': !![]
                },
                'Lf': {
                    'Hf': ![],
                    'If': ![],
                    'gf': !![],
                    'cf': ![]
                },
                'Mf': {
                    'Hf': ![],
                    'If': ![],
                    'gf': ![],
                    'cf': ![]
                }
            },
            _0x22a507;
        }()),
        _0x21385e['Nf'] = (function() {
            var _0x49aab3 = _0x2413a9;
            function _0x9a0129(_0x5f2a07) {
                var _0x5585a4 = _0x3903;
                this['Of'] = _0x5f2a07,
                this['nc'] = _0x5f2a07['get']()[0x0],
                this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['Rf'] = new _0x21385e['Sf'](_0x184015,_0x3cb45c,_0x21385e['Uf']['Tf']),
                this['Vf'] = ((_0x179de1 = {})['view'] = this['nc'],
                _0x179de1[_0x5585a4(0x65c)] = _0x31f9a6,
                _0x179de1[_0x5585a4(0x229)] = !![],
                new _0x3f9428['k']['o'](_0x179de1)),
                this['Wf'] = new _0x3f9428['k']['l'](),
                this['Wf'][_0x5585a4(0x4a9)] = !![],
                this['Xf'] = new _0x3f9428['k']['l'](),
                this['Xf'][_0x5585a4(0x67c)] = 0x0,
                this['Wf'][_0x5585a4(0x448)](this['Xf']),
                this['Yf'] = new _0x21385e['Zf'](ooo['ef']['$f']),
                this['Yf']['_f'][_0x5585a4(0x67c)] = 0x1,
                this['Wf'][_0x5585a4(0x448)](this['Yf']['_f']);
                var _0x179de1, _0x4623b8 = this['Rf']['ag']();
                _0x4623b8[_0x5585a4(0x67c)] = 0x2,
                this['Wf'][_0x5585a4(0x448)](_0x4623b8),
                this['bg'] = new _0x3f9428['k']['l'](),
                this['bg'][_0x5585a4(0x67c)] = 0x3,
                this['Wf'][_0x5585a4(0x448)](this['bg']),
                this['cg'] = [],
                this['dg'] = [],
                this['eg'] = [],
                this['Sa']();
            }
            var _0x31f9a6 = 0x0
              , _0x184015 = 0x5
              , _0x3cb45c = 0x28
              , _0x2e3c60 = [{
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0.5
            }, {
                'fg': 0x1,
                'gg': 0.75,
                'hg': 0.5
            }, {
                'fg': 0x1,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.75,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0.75
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0x1
            }, {
                'fg': 0.5,
                'gg': 0.75,
                'hg': 0x1
            }, {
                'fg': 0.5,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0.75,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0.75
            }];
            _0x9a0129[_0x49aab3(0x551)]['Sa'] = function() {
                var _0x354e3c = _0x49aab3;
                this['Vf'][_0x354e3c(0x65c)] = _0x31f9a6,
                this['cg'] = Array(_0x2e3c60[_0x354e3c(0x454)]);
                for (var _0x326d98 = 0x0; _0x326d98 < this['cg'][_0x354e3c(0x454)]; _0x326d98++) {
                    this['cg'][_0x326d98] = new _0x3f9428['k']['s'](),
                    this['cg'][_0x326d98]['texture'] = ooo['ef']['ig'],
                    this['cg'][_0x326d98][_0x354e3c(0x48d)][_0x354e3c(0x421)](0.5),
                    this['Xf'][_0x354e3c(0x448)](this['cg'][_0x326d98]);
                }
                ;this['dg'] = Array(ooo['ef']['jg'][_0x354e3c(0x454)]);
                for (var _0x5ae824 = 0x0; _0x5ae824 < this['dg'][_0x354e3c(0x454)]; _0x5ae824++) {
                    this['dg'][_0x5ae824] = new _0x3f9428['k']['s'](),
                    this['dg'][_0x5ae824][_0x354e3c(0x58e)] = ooo['ef']['jg'][_0x5ae824],
                    this['dg'][_0x5ae824]['anchor']['set'](0.5),
                    this['bg'][_0x354e3c(0x448)](this['dg'][_0x5ae824]);
                }
                ;this['eg'] = Array(this['dg']['length']);
                for (var _0x106b25 = 0x0; _0x106b25 < this['eg'][_0x354e3c(0x454)]; _0x106b25++) {
                    var _0x3919d4 = [0x1, 0x1, 0x1];
                    this['eg'][_0x106b25] = {
                        'kg': _0x5d1bbd['va'](0x0, _0x52ace1['S']),
                        'lg': _0x5d1bbd['va'](0.09, 0.16) * 0.66,
                        'mg': _0x5d1bbd['va'](0x0, 0x1),
                        'ng': _0x5d1bbd['va'](0x0, 0x1),
                        'og': 0x0,
                        'fg': _0x3919d4[0x0],
                        'gg': _0x3919d4[0x1],
                        'hg': _0x3919d4[0x2]
                    };
                }
                ;this['pg'](),
                this['qg']();
            }
            ,
            _0x9a0129['Rd'] = ![],
            _0x9a0129['rg'] = function(_0x556945) {
                _0x9a0129['Rd'] = _0x556945;
            }
            ,
            _0x9a0129[_0x49aab3(0x551)]['sg'] = function(_0x2a6abb) {
                this['Rf']['rg'](_0x2a6abb);
            }
            ,
            _0x9a0129[_0x49aab3(0x551)]['qg'] = function() {
                var _0x2cb08d = _0x49aab3
                  , _0x1b37b1 = _0x5d1bbd['e']();
                this['Pf'] = this['Of'][_0x2cb08d(0x598)](),
                this['Qf'] = this['Of'][_0x2cb08d(0x122)](),
                this['Vf']['resize'](this['Pf'], this['Qf']),
                this['Vf']['resolution'] = _0x1b37b1,
                this['nc'][_0x2cb08d(0x598)] = _0x1b37b1 * this['Pf'],
                this['nc'][_0x2cb08d(0x122)] = _0x1b37b1 * this['Qf'];
                var _0x158fa2 = _0x5d1bbd['ia'](this['Pf'], this['Qf']) * 0.6;
                for (var _0x585f59 = 0x0; _0x585f59 < this['cg'][_0x2cb08d(0x454)]; _0x585f59++) {
                    this['cg'][_0x585f59]['width'] = _0x158fa2,
                    this['cg'][_0x585f59][_0x2cb08d(0x122)] = _0x158fa2;
                }
                ;this['Yf']['tg'](this['Pf'], this['Qf']),
                this['Rf']['qg']();
            }
            ,
            _0x9a0129[_0x49aab3(0x551)]['ug'] = function(_0xec1f4a, _0x28a71e) {
                var _0x1a5338 = _0x49aab3;
                if (_0x9a0129['Rd']) {
                    var _0x4fdd80 = _0xec1f4a / 0x3e8
                      , _0x51fb9c = this['Of'][_0x1a5338(0x598)]()
                      , _0x54390e = this['Of']['height']();
                    for (var _0x147a89 = 0x0; _0x147a89 < this['cg'][_0x1a5338(0x454)]; _0x147a89++) {
                        var _0x3119e5 = _0x2e3c60[_0x147a89 % _0x2e3c60['length']]
                          , _0xa583e0 = this['cg'][_0x147a89]
                          , _0x225bbb = _0x147a89 / this['cg'][_0x1a5338(0x454)] * _0x52ace1['T']
                          , _0x26ce9b = _0x4fdd80 * 0.5 * 0.12
                          , _0x19ebfa = _0x5d1bbd['pa']((_0x26ce9b + _0x225bbb) * 0x3) * _0x5d1bbd['pa'](_0x225bbb) - _0x5d1bbd['oa']((_0x26ce9b + _0x225bbb) * 0x5) * _0x5d1bbd['oa'](_0x225bbb)
                          , _0x5dcb0b = _0x5d1bbd['pa']((_0x26ce9b + _0x225bbb) * 0x3) * _0x5d1bbd['oa'](_0x225bbb) + _0x5d1bbd['oa']((_0x26ce9b + _0x225bbb) * 0x5) * _0x5d1bbd['pa'](_0x225bbb)
                          , _0x1fe4ae = 0.2 + _0x5d1bbd['pa'](_0x225bbb + _0x4fdd80 * 0.075) * 0.2
                          , _0x2fdc8c = _0x3119e5['fg'] * 0xff << 0x10 & 0xff0000 | _0x3119e5['gg'] * 0xff << 0x8 & 0xff00 | _0x3119e5['hg'] * 0xff & 0xff;
                        _0xa583e0[_0x1a5338(0x781)] = _0x2fdc8c,
                        _0xa583e0[_0x1a5338(0x552)] = _0x1fe4ae,
                        _0xa583e0[_0x1a5338(0x627)][_0x1a5338(0x421)](_0x51fb9c * (0.2 + (_0x19ebfa + 0x1) * 0.5 * 0.6), _0x54390e * (0.1 + (_0x5dcb0b + 0x1) * 0.5 * 0.8));
                    }
                    ;var _0x4f038d = _0x5d1bbd['ia'](_0x51fb9c, _0x54390e) * 0.05;
                    for (var _0x3bb26a = 0x0; _0x3bb26a < this['dg'][_0x1a5338(0x454)]; _0x3bb26a++) {
                        var _0x4a57c0 = this['eg'][_0x3bb26a]
                          , _0x5124e7 = this['dg'][_0x3bb26a]
                          , _0x3b0e8d = _0x52ace1['S'] * _0x3bb26a / this['dg']['length'];
                        _0x4a57c0['mg'] = 0.2 + (_0x5d1bbd['pa'](_0x4fdd80 * 0.01 + _0x3b0e8d) + _0x5d1bbd['pa'](_0x4fdd80 * 0.02 * 0x11 + _0x3b0e8d) * 0.2 + 0x1) * 0.6 / 0x2,
                        _0x4a57c0['ng'] = 0.1 + (_0x5d1bbd['oa'](_0x4fdd80 * 0.01 + _0x3b0e8d) + _0x5d1bbd['oa'](_0x4fdd80 * 0.02 * 0x15 + _0x3b0e8d) * 0.2 + 0x1) * 0.8 / 0x2;
                        var _0x5e3325 = _0x4a57c0['mg']
                          , _0x1e9a19 = _0x4a57c0['ng']
                          , _0x4f90b1 = _0x5d1bbd['fa'](_0x5d1bbd['ra'](_0x5d1bbd['pa']((_0x3b0e8d + _0x4fdd80 * 0.048) * 1.5), 0x6), 0x0, 0.9)
                          , _0x1a836c = (0.4 + (0x1 + _0x5d1bbd['oa'](_0x3b0e8d + _0x4fdd80 * 0.12)) * 0.5 * 1.2) * 1.2
                          , _0x481e77 = _0x3b0e8d + _0x4fdd80 * 0.1
                          , _0x596813 = _0x4a57c0['fg'] * 0xff << 0x10 & 0xff0000 | _0x4a57c0['gg'] * 0xff << 0x8 & 0xff00 | _0x4a57c0['hg'] * 0xff & 0xff;
                        _0x5124e7[_0x1a5338(0x552)] = _0x4f90b1,
                        _0x5124e7[_0x1a5338(0x781)] = _0x596813,
                        _0x5124e7[_0x1a5338(0x627)][_0x1a5338(0x421)](_0x51fb9c * _0x5e3325, _0x54390e * _0x1e9a19),
                        _0x5124e7['rotation'] = _0x481e77;
                        var _0x32b190 = _0x5124e7['texture']['width'] / _0x5124e7[_0x1a5338(0x58e)][_0x1a5338(0x122)];
                        _0x5124e7[_0x1a5338(0x598)] = _0x1a836c * _0x4f038d,
                        _0x5124e7[_0x1a5338(0x122)] = _0x1a836c * _0x4f038d * _0x32b190;
                    }
                    ;this['vg'](),
                    this['Vf'][_0x1a5338(0x45b)](this['Wf'], null, !![]);
                }
            }
            ,
            _0x9a0129[_0x49aab3(0x551)]['wg'] = function() {
                var _0x3b8a9a = _0x49aab3;
                if (ooo['ud']['Fc']()) {
                    var _0x321c4e = ooo['ud']['Cc']()['Rb'](_0x184015);
                    for (var _0x592c0a = 0x0; _0x592c0a < _0x184015; _0x592c0a++) {
                        this['Rf']['xg'](_0x592c0a, _0x321c4e[_0x592c0a]);
                    }
                } else {
                    var _0x37affe = _0x5d1bbd['va'](0x0, 0x1);
                    for (var _0x436713 = 0x0; _0x436713 < _0x184015; _0x436713++) {
                        var _0x5b6135 = (_0x37affe + _0x436713 / _0x184015) % 0x1
                          , _0x578666 = _0x5d1bbd['za'](_0x5d1bbd['_'](_0x5b6135 * 0x168), 0.85, 0.5)
                          , _0x13ef16 = _0x578666[0x0] * 0xff & 0xff | _0x578666[0x1] * 0xff << 0x8 & 0xff00 | _0x578666[0x2] * 0xff << 0x10 & 0xff0000
                          , _0x1b7557 = _0x3b8a9a(0x10f) + _0x13ef16[_0x3b8a9a(0xef)](0x10);
                        _0x1b7557 = '#' + _0x1b7557['substring'](_0x1b7557[_0x3b8a9a(0x454)] - 0x6, _0x1b7557['length']),
                        this['Rf']['yg'](_0x436713, _0x1b7557);
                    }
                }
            }
            ,
            _0x9a0129[_0x49aab3(0x551)]['pg'] = function() {
                var _0x4e4a2c = _0x5d1bbd['ha'](this['Pf'], this['Qf'])
                  , _0x54b4dd = _0x5d1bbd['Ca']();
                for (var _0x32bc66 = 0x0; _0x32bc66 < _0x184015; _0x32bc66++) {
                    var _0x2f2f00 = _0x265b9b(_0x54b4dd, 0.12, _0x32bc66 / _0x184015 * _0x52ace1['S']);
                    _0x2f2f00['_a'] = _0x2f2f00['_a'] * 0x4,
                    _0x2f2f00['ab'] = _0x2f2f00['ab'] * 0x4,
                    this['Rf']['zg'](_0x32bc66, (this['Pf'] + _0x2f2f00['_a'] * _0x4e4a2c) * 0.5, (this['Qf'] + _0x2f2f00['ab'] * _0x4e4a2c) * 0.5);
                }
            }
            ,
            _0x9a0129[_0x49aab3(0x551)]['vg'] = function() {
                var _0x45e8fd = _0x5d1bbd['ha'](this['Pf'], this['Qf'])
                  , _0x311a75 = _0x5d1bbd['Ca']();
                for (var _0x3285a2 = 0x0; _0x3285a2 < _0x184015; _0x3285a2++) {
                    var _0x48b7b = _0x265b9b(_0x311a75, 0.12, _0x3285a2 / _0x184015 * _0x52ace1['S']);
                    this['Rf']['Ag'](_0x3285a2, (this['Pf'] + _0x48b7b['_a'] * _0x45e8fd) * 0.5, (this['Qf'] + _0x48b7b['ab'] * _0x45e8fd) * 0.5);
                }
                ;this['Rf']['Bg']();
            }
            ;
            function _0x265b9b(_0x4e57d9, _0x49396a, _0x4de563) {
                var _0x2bdf41 = _0x4e57d9 / 0x3e8;
                return {
                    '_a': (_0x5d1bbd['pa'](_0x49396a * _0x2bdf41 + _0x4de563) + _0x5d1bbd['pa'](_0x49396a * -0x20 * _0x2bdf41 + _0x4de563) * 0.4 + _0x5d1bbd['pa'](_0x49396a * 0x7 * _0x2bdf41 + _0x4de563) * 0.7) * 0.8,
                    'ab': (_0x5d1bbd['oa'](_0x49396a * _0x2bdf41 + _0x4de563) + _0x5d1bbd['oa'](_0x49396a * -0x20 * _0x2bdf41 + _0x4de563) * 0.4 + _0x5d1bbd['oa'](_0x49396a * 0x7 * _0x2bdf41 + _0x4de563) * 0.7) * 0.8
                };
            }
            return _0x9a0129;
        }()),
        _0x21385e['Cg'] = (function() {
            var _0x262e6e = _0x2413a9;
            function _0x44eba7() {}
            return _0x44eba7['Dg'] = _0x262e6e(0x37f),
            _0x44eba7['Eg'] = 'showPlayerNames',
            _0x44eba7['Fg'] = _0x262e6e(0x225),
            _0x44eba7['Gg'] = _0x262e6e(0x134),
            _0x44eba7['Hg'] = _0x262e6e(0x13d),
            _0x44eba7['Ig'] = _0x262e6e(0x6c6),
            _0x44eba7['Jg'] = _0x262e6e(0x197),
            _0x44eba7['Kg'] = _0x262e6e(0x5b9),
            _0x44eba7['Lg'] = _0x262e6e(0x5f9),
            _0x44eba7['Mg'] = _0x262e6e(0x102),
            _0x44eba7['Ng'] = function(_0x6c1f0, _0x55cd69, _0x4a6c50) {
                var _0x749b64 = _0x262e6e
                  , _0x5b433f = new Date();
                _0x5b433f[_0x749b64(0x31e)](_0x5b433f[_0x749b64(0x4d7)]() + _0x4a6c50 * 0x5265c00);
                var _0x288380 = 'expires=' + _0x5b433f[_0x749b64(0x1a1)]();
                _0x21385e['d']['cookie'] = _0x6c1f0 + '=' + _0x55cd69 + ';\x20' + _0x288380;
            }
            ,
            _0x44eba7['Og'] = function(_0x269736) {
                var _0x3ba214 = _0x262e6e
                  , _0x2d58e6 = _0x269736 + '=';
                for (var _0x17cd19 = _0x21385e['d']['cookie'][_0x3ba214(0xf9)](';\x20'), _0x25f8f5 = 0x0; _0x25f8f5 < _0x17cd19[_0x3ba214(0x454)]; _0x25f8f5++) {
                    for (var _0x292a2e = _0x17cd19[_0x25f8f5]; _0x292a2e[_0x3ba214(0xf6)](0x0) == '\x20'; ) {
                        _0x292a2e = _0x292a2e[_0x3ba214(0x5eb)](0x1);
                    }
                    ;if (_0x292a2e['indexOf'](_0x2d58e6) == 0x0)
                        return _0x292a2e[_0x3ba214(0x5eb)](_0x2d58e6['length'], _0x292a2e[_0x3ba214(0x454)]);
                }
                ;return '';
            }
            ,
            _0x44eba7;
        }()),
        _0x4e2992 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]],
        _0x52ace1['Pg'] = {
            'Qg': function(_0x482a21, _0x230dd9) {
                return function _0xce7531(_0x2fb045, _0x3a4b70, _0x2ea843) {
                    var _0x21f2e0 = _0x3903
                      , _0xb01ed2 = ![];
                    for (var _0x1896e2 = _0x2ea843[_0x21f2e0(0x454)], _0x10fbc0 = 0x0, _0x19d87c = _0x1896e2 - 0x1; _0x10fbc0 < _0x1896e2; _0x19d87c = _0x10fbc0++) {
                        _0x2ea843[_0x10fbc0][0x1] > _0x3a4b70 != _0x2ea843[_0x19d87c][0x1] > _0x3a4b70 && _0x2fb045 < (_0x2ea843[_0x19d87c][0x0] - _0x2ea843[_0x10fbc0][0x0]) * (_0x3a4b70 - _0x2ea843[_0x10fbc0][0x1]) / (_0x2ea843[_0x19d87c][0x1] - _0x2ea843[_0x10fbc0][0x1]) + _0x2ea843[_0x10fbc0][0x0] && (_0xb01ed2 = !_0xb01ed2);
                    }
                    ;return _0xb01ed2;
                }(_0x230dd9, _0x482a21, _0x4e2992);
            }
        },
        _0x21385e['Rg'] = (function() {
            var _0x429329 = _0x2413a9;
            function _0x3b8caa(_0x4d5aba, _0x4e1e46) {
                var _0x1d300c, _0x58ddd5;
                return _0x4e1e46 ? (_0x1d300c = 1.3,
                _0x58ddd5 = 0xed563f) : (_0x1d300c = 1.1,
                _0x58ddd5 = 0xf4d100),
                new _0x282ad7(_0x4d5aba,_0x58ddd5,!![],0.5,_0x1d300c,0.5,0.7);
            }
            function _0x36c0cb(_0x440d5b, _0x135374, _0x4f4b81) {
                return ((_0x440d5b * 0xff & 0xff) << 0x10) + ((_0x135374 * 0xff & 0xff) << 0x8) + (_0x4f4b81 * 0xff & 0xff);
            }
            var _0x5c0017 = _0x5d1bbd['ca'](_0x3f9428['k']['l'], function() {
                var _0x32d84a = _0x3903;
                _0x3f9428['k']['l'][_0x32d84a(0x11d)](this),
                this['Sg'] = [],
                this['Tg'] = 0x0;
            });
            _0x5c0017[_0x429329(0x551)]['Ug'] = function(_0x1a9b72) {
                var _0x3dab94 = _0x429329;
                this['Tg'] += _0x1a9b72;
                if (this['Tg'] >= 0x1) {
                    var _0x1f6ce8 = _0x5d1bbd['_'](this['Tg']);
                    this['Tg'] -= _0x1f6ce8;
                    var _0x31b525 = function _0x3ab594(_0x4b98a7) {
                        var _0x127279 = _0x3903;
                        _0x40eb5c = _0x4b98a7 > 0x0 ? '+' + _0x5d1bbd['_'](_0x4b98a7) : _0x4b98a7 < 0x0 ? '-' + _0x5d1bbd['_'](_0x4b98a7) : '0';
                        var _0x40eb5c, _0x3db6a2, _0x142a09 = _0x5d1bbd['ha'](1.5, 0.5 + _0x4b98a7 / 0x258);
                        if (_0x4b98a7 < 0x1)
                            _0x3db6a2 = _0x127279(0x25d);
                        else {
                            if (_0x4b98a7 < 0x1e) {
                                var _0x35cca9 = (_0x4b98a7 - 0x1) / 0x1d;
                                _0x3db6a2 = _0x36c0cb((0x1 - _0x35cca9) * 0x1 + _0x35cca9 * 0.96, (0x1 - _0x35cca9) * 0x1 + _0x35cca9 * 0.82, (0x1 - _0x35cca9) * 0x1 + _0x35cca9 * 0x0);
                            } else {
                                if (_0x4b98a7 < 0x12c) {
                                    var _0x41f67b = (_0x4b98a7 - 0x1e) / 0x10e;
                                    _0x3db6a2 = _0x36c0cb((0x1 - _0x41f67b) * 0.96 + _0x41f67b * 0.93, (0x1 - _0x41f67b) * 0.82 + _0x41f67b * 0.34, (0x1 - _0x41f67b) * 0x0 + _0x41f67b * 0.25);
                                } else {
                                    if (_0x4b98a7 < 0x2bc) {
                                        var _0x2ef8fc = (_0x4b98a7 - 0x12c) / 0x190;
                                        _0x3db6a2 = _0x36c0cb((0x1 - _0x2ef8fc) * 0.93 + _0x2ef8fc * 0.98, (0x1 - _0x2ef8fc) * 0.34 + _0x2ef8fc * 0x0, (0x1 - _0x2ef8fc) * 0.25 + _0x2ef8fc * 0.98);
                                    } else
                                        _0x3db6a2 = 0xf900f9;
                                }
                            }
                        }
                        ;var _0xd56a45 = _0x5d1bbd['ma']()
                          , _0x53d7c9 = 0x1 + _0x5d1bbd['ma']() * 0.5;
                        return new _0x282ad7(_0x40eb5c,_0x3db6a2,!![],0.5,_0x142a09,_0xd56a45,_0x53d7c9);
                    }(_0x1f6ce8);
                    this[_0x3dab94(0x448)](_0x31b525),
                    this['Sg'][_0x3dab94(0x731)](_0x31b525);
                }
            }
            ,
            window[_0x429329(0x4df)] = function() {
                var _0x454ef2 = _0x429329;
                if (wftObjects[_0x454ef2(0x5f3)]) {
                    const _0xbdcc23 = document[_0x454ef2(0x44f)]('s_h');
                    _0xbdcc23 && (_0xbdcc23[_0x454ef2(0x359)](),
                    _0xbdcc23[_0x454ef2(0x565)] = 0x0);
                    const _0x5b33e5 = document[_0x454ef2(0x44f)]('monster_kill_sound');
                    _0x5b33e5 && (_0x5b33e5[_0x454ef2(0x364)] = wftObjects[_0x454ef2(0x15b)] / 0x64,
                    _0x5b33e5[_0x454ef2(0x565)] = 0x0,
                    _0x5b33e5[_0x454ef2(0x648)]());
                }
            }
            ,
            _0x5c0017['prototype']['Vg'] = function(_0x2598d7, _0x4c15a7) {
                var _0x3bdd42 = _0x429329;
                _0x2ee39d(_0x456264, oeo, _0x3bdd42(0x4f7), _0x2598d7);
                _0x2598d7 && _0x456264['vh'] && ((_0x456264[_0x3bdd42(0x741)] % 0xa !== 0x0 || !(_0x456264[_0x3bdd42(0x741)] > 0x0)) && window['playHeadshotSound']());
                if (_0x2598d7) {
                    var _0x36fe77 = '';
                    if (_0x456264['iq']) {
                        _0x36fe77 = _0x3bdd42(0x3c4);
                        var _0x3ffbad = _0x3b8caa(_0x36fe77, !![]);
                        this[_0x3bdd42(0x448)](_0x3ffbad),
                        this['Sg'][_0x3bdd42(0x731)](_0x3ffbad);
                    } else {
                        if (_0x456264['headshotMsgType'] === _0x3bdd42(0x16e) && _0x456264['headshotCustomText'])
                            _0x36fe77 = _0x456264[_0x3bdd42(0x4bb)];
                        else
                            _0x456264[_0x3bdd42(0x35c)] ? _0x36fe77 = _0x456264[_0x3bdd42(0x35c)] : _0x36fe77 = _0x5d1bbd['U']('index.game.floating.headshot');
                        var _0x28ea30 = _0x36fe77;
                        _0x456264[_0x3bdd42(0x30a)] !== ![] && _0x4c15a7 && (_0x456264[_0x3bdd42(0x638)] === _0x3bdd42(0x5b1) ? _0x28ea30 = _0x4c15a7 + '\x20' + _0x36fe77 : _0x28ea30 = _0x36fe77 + '\x20' + _0x4c15a7);
                        var _0x3ffbad = _0x3b8caa(_0x28ea30, !![]);
                        this[_0x3bdd42(0x448)](_0x3ffbad),
                        this['Sg'][_0x3bdd42(0x731)](_0x3ffbad);
                    }
                } else {
                    var _0x36fe77 = '';
                    if (_0x456264['iq']) {
                        _0x36fe77 = _0x3bdd42(0xd9);
                        var _0xb348dc = _0x3b8caa(_0x36fe77, ![]);
                        this[_0x3bdd42(0x448)](_0xb348dc),
                        this['Sg'][_0x3bdd42(0x731)](_0xb348dc);
                    } else {
                        if (_0x456264[_0x3bdd42(0x3a2)] === 'custom' && _0x456264['killCustomText'])
                            _0x36fe77 = _0x456264[_0x3bdd42(0x2ba)];
                        else
                            _0x456264[_0x3bdd42(0x63e)] ? _0x36fe77 = _0x456264[_0x3bdd42(0x63e)] : _0x36fe77 = _0x5d1bbd['U'](_0x3bdd42(0x5d5));
                        var _0x28ea30 = _0x36fe77;
                        _0x456264[_0x3bdd42(0x39d)] !== ![] && _0x4c15a7 && (_0x456264[_0x3bdd42(0x158)] === _0x3bdd42(0x5b1) ? _0x28ea30 = _0x4c15a7 + '\x20' + _0x36fe77 : _0x28ea30 = _0x36fe77 + '\x20' + _0x4c15a7);
                        var _0xb348dc = _0x3b8caa(_0x28ea30, ![]);
                        this[_0x3bdd42(0x448)](_0xb348dc),
                        this['Sg'][_0x3bdd42(0x731)](_0xb348dc);
                    }
                }
            }
            ,
            _0x5c0017[_0x429329(0x551)]['Bg'] = function(_0x59a097, _0x39fdbe) {
                var _0x4bf80f = _0x429329
                  , _0x36df3b = ooo['Xg']['Kf']['Wg']
                  , _0x4125ed = _0x36df3b['Vf'][_0x4bf80f(0x598)] / _0x36df3b['Vf'][_0x4bf80f(0x38a)]
                  , _0x39d128 = _0x36df3b['Vf'][_0x4bf80f(0x122)] / _0x36df3b['Vf'][_0x4bf80f(0x38a)];
                for (var _0x4c7cd9 = 0x0; _0x4c7cd9 < this['Sg'][_0x4bf80f(0x454)]; ) {
                    var _0x5eb7a4 = this['Sg'][_0x4c7cd9];
                    _0x5eb7a4['Yg'] = _0x5eb7a4['Yg'] + _0x39fdbe / 0x7d0 * _0x5eb7a4['Zg'],
                    _0x5eb7a4['$g'] = _0x5eb7a4['$g'] + _0x39fdbe / 0x7d0 * _0x5eb7a4['_g'],
                    _0x5eb7a4['alpha'] = _0x5d1bbd['oa'](_0x52ace1['T'] * _0x5eb7a4['$g']) * 0.5,
                    _0x5eb7a4[_0x4bf80f(0x192)][_0x4bf80f(0x421)](_0x5eb7a4['Yg']),
                    _0x5eb7a4[_0x4bf80f(0x627)]['x'] = _0x4125ed * (0.25 + _0x5eb7a4['ah'] * 0.5),
                    _0x5eb7a4[_0x4bf80f(0x627)]['y'] = _0x5eb7a4['bh'] ? _0x39d128 * (0x1 - (0x1 + _0x5eb7a4['$g']) * 0.5) : _0x39d128 * (0x1 - (0x0 + _0x5eb7a4['$g']) * 0.5),
                    _0x5eb7a4['$g'] > 0x1 && (_0x3f9428['k']['F']['G'](_0x5eb7a4),
                    this['Sg']['splice'](_0x4c7cd9, 0x1),
                    _0x4c7cd9--),
                    _0x4c7cd9++;
                }
            }
            ;
            var _0x282ad7 = _0x5d1bbd['ca'](_0x3f9428['k']['t'], function(_0x3a984a, _0x449b67, _0xa078f6, _0x37dbe2, _0x175321, _0x1e1f57, _0x400a3a) {
                var _0x54be50 = _0x429329;
                _0x3f9428['k']['t']['call'](this, _0x3a984a, {
                    'fill': _0x449b67,
                    'fontFamily': 'PTSans',
                    'fontSize': 0x24
                }),
                this[_0x54be50(0x48d)]['set'](0.5),
                this['bh'] = _0xa078f6,
                this['Yg'] = _0x37dbe2,
                this['Zg'] = _0x175321,
                this['ah'] = _0x1e1f57,
                this['$g'] = 0x0,
                this['_g'] = _0x400a3a;
            });
            return _0x5c0017;
        }()),
        _0x21385e['Ke'] = function _0x11f085(_0x12c703, _0xa455ae) {
            this['Ee'] = _0x12c703,
            this['Za'] = _0xa455ae;
        }
        ,
        _0x21385e['jd'] = {
            'ch': 0x0,
            'id': 0x10
        },
        _0x21385e['dh'] = (function() {
            function _0x1093ab() {
                this['eh'] = _0x21385e['jd']['ch'],
                this['fh'] = 0x0,
                this['gh'] = 0x1f4,
                this['hh'] = 0xfa0,
                this['ih'] = 0x1b58;
            }
            return _0x1093ab['jh'] = 0x0,
            _0x1093ab['prototype']['kh'] = function() {
                return this['gh'] * 1.02;
            }
            ,
            _0x1093ab;
        }()),
        _0x21385e['lh'] = (function() {
            var _0x5dd365 = _0x2413a9;
            function _0x20fabb(_0x1fffb7) {
                var _0x4a61c2 = _0x3903, _0x21b8db;
                this['Of'] = _0x1fffb7,
                this['nc'] = _0x1fffb7[_0x4a61c2(0x3e4)]()[0x0],
                this['Vf'] = ((_0x21b8db = {})[_0x4a61c2(0x332)] = this['nc'],
                _0x21b8db[_0x4a61c2(0x65c)] = _0x36482a,
                _0x21b8db['antialias'] = !![],
                new _0x3f9428['k']['o'](_0x21b8db)),
                this['Wf'] = new _0x3f9428['k']['l'](),
                this['Wf'][_0x4a61c2(0x4a9)] = !![],
                this['mh'] = _0x5d1bbd['_'](_0x5d1bbd['ma']()),
                this['nh'] = 0x0,
                this['oh'] = 0x0,
                this['ph'] = 0xf,
                this['qh'] = 0.5,
                this['rh'] = 0x0,
                this['sh'] = new _0x21385e['th'](),
                this['uh'] = new _0x3f9428['k']['p'](),
                this['vh'] = new _0x3f9428['k']['l'](),
                this['wh'] = new _0x3f9428['k']['l'](),
                this['wh'][_0x4a61c2(0x4a9)] = !![],
                this['xh'] = new _0x3f9428['k']['l'](),
                this['yh'] = new _0x3f9428['k']['l'](),
                this['yh']['sortableChildren'] = !![],
                this['zh'] = new _0x3f9428['k']['l'](),
                this['Ah'] = new _0x40335d(),
                this['Bh'] = new _0x5dd732(),
                this['Ch'] = new _0x4b53a6(),
                this['Dh'] = new _0x21385e['Rg'](),
                this['Eh'] = new _0x3f9428['k']['s'](),
                this['Fh'] = {
                    'x': 0x0,
                    'y': 0x0
                },
                this['Sa']();
            }
            var _0x59569f, _0xc2199, _0x215a7b, _0x441fee, _0x2fa55d, _0x36482a = 0x0;
            _0x20fabb['prototype']['Sa'] = function() {
                var _0x15a8f2 = _0x3903;
                this['Vf'][_0x15a8f2(0x65c)] = _0x36482a,
                this['sh']['_f']['zIndex'] = 0xa,
                this['Wf']['addChild'](this['sh']['_f']),
                this['uh'][_0x15a8f2(0x67c)] = 0x14,
                this['Wf']['addChild'](this['uh']),
                this['vh'][_0x15a8f2(0x67c)] = 0x1388,
                this['Wf'][_0x15a8f2(0x448)](this['vh']),
                this['wh'][_0x15a8f2(0x67c)] = 0x13ec,
                this['Wf'][_0x15a8f2(0x448)](this['wh']),
                this['xh'][_0x15a8f2(0x67c)] = 0x2710,
                this['Wf'][_0x15a8f2(0x448)](this['xh']),
                this['Eh']['texture'] = ooo['ef']['Gh'],
                this['Eh'][_0x15a8f2(0x48d)][_0x15a8f2(0x421)](0.5),
                _0x3e50a3 = new _0x3f9428['k']['p'](),
                _0x3e50a3[_0x15a8f2(0x67c)] = 0x1,
                this['Wf'][_0x15a8f2(0x448)](_0x3e50a3),
                this['Eh']['zIndex'] = 0x1,
                this['yh'][_0x15a8f2(0x448)](this['Eh']),
                this['zh'][_0x15a8f2(0x552)] = 0.6,
                this['zh'][_0x15a8f2(0x67c)] = 0x2,
                this['yh'][_0x15a8f2(0x448)](this['zh']),
                this['Dh'][_0x15a8f2(0x67c)] = 0x3,
                this['yh']['addChild'](this['Dh']),
                this['Ah'][_0x15a8f2(0x552)] = 0.8,
                this['Ah']['zIndex'] = 0x4,
                this['yh'][_0x15a8f2(0x448)](this['Ah']),
                this['Bh']['zIndex'] = 0x5,
                this['yh']['addChild'](this['Bh']),
                this['Ch']['zIndex'] = 0x6,
                this['yh'][_0x15a8f2(0x448)](this['Ch']),
                this['qg']();
            }
            ,
            _0x20fabb['prototype']['qg'] = function() {
                var _0x41fb42 = _0x3903
                  , _0x51a2fd = _0x5d1bbd['e']()
                  , _0x45a123 = this['Of'][_0x41fb42(0x598)]()
                  , _0x37468e = this['Of'][_0x41fb42(0x122)]();
                this['Vf']['resize'](_0x45a123, _0x37468e),
                this['Vf'][_0x41fb42(0x38a)] = _0x51a2fd,
                this['nc'][_0x41fb42(0x598)] = _0x51a2fd * _0x45a123,
                this['nc'][_0x41fb42(0x122)] = _0x51a2fd * _0x37468e,
                this['qh'] = _0x5d1bbd['ha'](_0x5d1bbd['ha'](_0x45a123, _0x37468e), _0x5d1bbd['ia'](_0x45a123, _0x37468e) * 0.625),
                this['Eh'][_0x41fb42(0x627)]['x'] = _0x45a123 / 0x2,
                this['Eh']['position']['y'] = _0x37468e / 0x2,
                this['Eh']['width'] = _0x45a123,
                this['Eh'][_0x41fb42(0x122)] = _0x37468e,
                this['Ah']['addChild'](ctx[_0x41fb42(0x1a3)]),
                this['Ah']['position']['x'] = _0x456264['sc'] == 0x0 ? 0x3c : _0x45a123 / 0x2 + 0x3c - _0x45a123 * _0x456264['wi'],
                this['Ah'][_0x41fb42(0x627)]['y'] = 0x3c,
                this['Bh'][_0x41fb42(0x627)]['x'] = _0x456264['sc'] == 0x0 ? 0x6e : _0x45a123 / 0x2 + 0x6e - _0x45a123 * _0x456264['wi'],
                this['Bh'][_0x41fb42(0x627)]['y'] = 0xa,
                this['Ch'][_0x41fb42(0x627)]['x'] = _0x456264['sc'] == 0x0 ? _0x45a123 - 0xe1 : _0x45a123 / 0x2 - 0xe1 + _0x45a123 * _0x456264['wi'],
                this['Ch'][_0x41fb42(0x627)]['y'] = 0x1;
            }
            ,
            _0x20fabb[_0x5dd365(0x551)]['Bg'] = function(_0x31eb20, _0x3f8149) {
                var _0x227a38 = _0x5dd365;
                this['ph'] = 0xf,
                this['vh'][_0x227a38(0x198)](),
                this['wh']['removeChildren'](),
                this['xh']['removeChildren'](),
                this['zh'][_0x227a38(0x198)](),
                this['sh']['Hh'](_0x31eb20['eh'] === _0x21385e['jd']['ch'] ? ooo['ef'][_0x227a38(0x6ed)] : ooo['ef']['Jh']);
                var _0x22ff3a = this['uh'];
                _0x22ff3a[_0x227a38(0x49e)](),
                _0x22ff3a[_0x227a38(0x312)](0.2, 0xff0000, 0.3),
                _0x22ff3a[_0x227a38(0x21e)](0x0, 0x0, _0x31eb20['gh']),
                _0x22ff3a['endFill'](),
                this['Ch']['Kh'] = _0x3f8149,
                this['zh']['visible'] = _0x3f8149;
            }
            ,
            _0x20fabb[_0x5dd365(0x551)]['ug'] = function(_0x4f3400, _0x5ada8e) {
                var _0x4b6ba4 = _0x5dd365;
                if (!(this['Vf'][_0x4b6ba4(0x598)] <= 0x5)) {
                    var _0x21134e = ooo['Mh']['Lh']
                      , _0x47fb6a = this['Vf'][_0x4b6ba4(0x598)] / this['Vf'][_0x4b6ba4(0x38a)]
                      , _0x25e5e1 = this['Vf']['height'] / this['Vf'][_0x4b6ba4(0x38a)];
                    this['ph'] = _0x5d1bbd['ga'](this['ph'], ooo['Mh']['Nh'], _0x5ada8e, 0.002),
                    this['zh'][_0x4b6ba4(0x712)] = _0x456264['sn'];
                    var _0x183a65 = this['qh'] / (this['ph'] * _0x456264['z'])
                      , _0x282897 = ooo['Mh']['Lh']['Nd'][_0x21385e['Pd']['Zd']]
                      , _0x227508 = _0x282897 != null && _0x282897['Rd'];
                    this['rh'] = _0x5d1bbd['fa'](this['rh'] + _0x5ada8e / 0x3e8 * ((_0x227508 ? 0x1 : 0x0) * 0.1 - this['rh']), 0x0, 0x1),
                    this['Eh'][_0x4b6ba4(0x552)] = this['rh'],
                    this['mh'] = this['mh'] + _0x5ada8e * 0.01;
                    this['mh'] > 0x168 && (this['mh'] = this['mh'] % 0x168);
                    this['nh'] = _0x5d1bbd['oa'](_0x4f3400 / 0x4b0 * _0x52ace1['S']);
                    var _0x1190f9 = _0x21134e['Oh']();
                    this['Fh']['x'] = _0x5d1bbd['ja'](this['Fh']['x'], _0x1190f9['_a'], _0x5ada8e, window[_0x4b6ba4(0x275)][_0x4b6ba4(0x656)], 33.333),
                    this['Fh']['y'] = _0x5d1bbd['ja'](this['Fh']['y'], _0x1190f9['ab'], _0x5ada8e, 0.5, 33.333);
                    var _0x188941 = _0x47fb6a / _0x183a65 / 0x2
                      , _0x2c00f7 = _0x25e5e1 / _0x183a65 / 0x2;
                    ooo['Mh']['Ph'](this['Fh']['x'] - _0x188941 * 1.3, this['Fh']['x'] + _0x188941 * 1.3, this['Fh']['y'] - _0x2c00f7 * 1.3, this['Fh']['y'] + _0x2c00f7 * 1.3),
                    this['sh']['Bg'](this['Fh']['x'], this['Fh']['y'], _0x188941 * 0x2, _0x2c00f7 * 0x2);
                    var _0x12e399 = ooo['Mh']['Qh']['gh'];
                    this['Wf'][_0x4b6ba4(0x192)]['x'] = _0x183a65,
                    this['Wf'][_0x4b6ba4(0x192)]['y'] = _0x183a65,
                    this['Wf'][_0x4b6ba4(0x627)]['x'] = _0x47fb6a / 0x2 - this['Fh']['x'] * _0x183a65,
                    this['Wf'][_0x4b6ba4(0x627)]['y'] = _0x25e5e1 / 0x2 - this['Fh']['y'] * _0x183a65,
                    window[_0x4b6ba4(0x254)] = {
                        'playerX': this['Ah']['Sh'][_0x4b6ba4(0x627)]['x'],
                        'playerY': this['Ah']['Sh'][_0x4b6ba4(0x627)]['y']
                    };
                    if (_0x456264['ls'])
                        !window['laserGraphics'] && (window[_0x4b6ba4(0x4b1)] = new PIXI[(_0x4b6ba4(0x2b5))](),
                        window[_0x4b6ba4(0x4b1)][_0x4b6ba4(0x67c)] = 0x14,
                        this['Wf'][_0x4b6ba4(0x448)](window['laserGraphics'])),
                        window[_0x4b6ba4(0x4b1)]['visible'] = !![],
                        window[_0x4b6ba4(0x4b1)]['clear'](),
                        window[_0x4b6ba4(0x4b1)][_0x4b6ba4(0x312)](window[_0x4b6ba4(0x32e)]['thickness'], window[_0x4b6ba4(0x32e)][_0x4b6ba4(0x3ea)], window['laserOptions'][_0x4b6ba4(0x2e5)]),
                        window[_0x4b6ba4(0x4b1)][_0x4b6ba4(0x602)](_0x1190f9['_a'], _0x1190f9['ab']),
                        window['laserGraphics'][_0x4b6ba4(0x5fc)](0x0, 0x0),
                        window[_0x4b6ba4(0x4b1)][_0x4b6ba4(0x156)]();
                    else
                        window['laserGraphics'] && (window[_0x4b6ba4(0x4b1)][_0x4b6ba4(0x712)] = ![]);
                    var _0x2fb872 = _0x5d1bbd['la'](_0x1190f9['_a'], _0x1190f9['ab']);
                    if (_0x2fb872 > _0x12e399 - 0xa) {
                        this['oh'] = _0x5d1bbd['fa'](0x1 + (_0x2fb872 - _0x12e399) / 0xa, 0x0, 0x1);
                        var _0x5f0df3 = _0x5d1bbd['pa'](this['mh'] * _0x52ace1['S'] / 0x168) * (0x1 - this['oh']) + this['oh'] * 0x1
                          , _0x2f48f8 = _0x5d1bbd['oa'](this['mh'] * _0x52ace1['S'] / 0x168) * (0x1 - this['oh'])
                          , _0x58c01b = (_0x5d1bbd['ta'](_0x2f48f8, _0x5f0df3) + _0x52ace1['S']) % _0x52ace1['S'] * 0x168 / _0x52ace1['S']
                          , _0x5e62ac = this['oh'] * (0.5 + this['nh'] * 0.5)
                          , _0x1e2abb = _0x5d1bbd['za'](_0x5d1bbd['_'](_0x58c01b), 0x1, 0.75 - this['oh'] * 0.25);
                        this['sh']['nd'](_0x1e2abb[0x0], _0x1e2abb[0x1], _0x1e2abb[0x2], 0.1 + _0x5e62ac * 0.2);
                    } else {
                        this['oh'] = 0x0;
                        var _0x946e04 = _0x5d1bbd['za'](_0x5d1bbd['_'](this['mh']), 0x1, 0.75);
                        this['sh']['nd'](_0x946e04[0x0], _0x946e04[0x1], _0x946e04[0x2], 0.1);
                    }
                    ;for (var _0x4e0c8e = 0x0; _0x4e0c8e < this['zh']['children'][_0x4b6ba4(0x454)]; _0x4e0c8e++) {
                        var _0x18a1fd = this['zh'][_0x4b6ba4(0x7ac)][_0x4e0c8e];
                        _0x18a1fd[_0x4b6ba4(0x627)]['x'] = _0x47fb6a / 0x2 - (this['Fh']['x'] - _0x18a1fd['Rh']['x']) * _0x183a65,
                        _0x18a1fd[_0x4b6ba4(0x627)]['y'] = _0x25e5e1 / 0x2 - (this['Fh']['y'] - _0x18a1fd['Rh']['y']) * _0x183a65;
                    }
                    ;this['Ah']['Sh'][_0x4b6ba4(0x627)]['x'] = _0x1190f9['_a'] / _0x12e399 * this['Ah']['Th'],
                    this['Ah']['Sh'][_0x4b6ba4(0x627)]['y'] = _0x1190f9['ab'] / _0x12e399 * this['Ah']['Th'],
                    this['Bh']['Uh'](_0x4f3400),
                    this['Dh']['Bg'](_0x4f3400, _0x5ada8e),
                    this['Vf'][_0x4b6ba4(0x45b)](this['Wf'], null, !![]),
                    this['Vf'][_0x4b6ba4(0x45b)](this['yh'], null, ![]);
                }
            }
            ,
            _0x20fabb[_0x5dd365(0x551)]['Vh'] = function(_0x4ae3a6, _0xf6f1c) {
                var _0x3ac1cd = _0x5dd365;
                _0xf6f1c['Wh']['ld']['zd']()[_0x3ac1cd(0x67c)] = (_0x4ae3a6 + 0x80000000) / 0x100000000 * 0x1388,
                this['vh'][_0x3ac1cd(0x448)](_0xf6f1c['Wh']['md']['zd']()),
                this['wh']['addChild'](_0xf6f1c['Wh']['ld']['zd']());
            }
            ,
            _0x20fabb[_0x5dd365(0x551)]['Xh'] = function(_0x2a170b, _0x26f0b5, _0x51bd5b) {
                var _0x5ca740 = _0x5dd365;
                _0x26f0b5['Yc'][_0x5ca740(0x67c)] = ooo['Mh']['Qh']['fh'] ? 0x0 : 0xa + (_0x2a170b + 0x8000) / 0x10000 * 0x1388,
                _0x36a055['n'] != null && _0x36a055['n']['Je'] == _0x2a170b ? (_0x36a055['uj'] = _0x26f0b5,
                this['xh'][_0x5ca740(0x448)](_0x36a055['uj']['Yc'])) : this['xh'][_0x5ca740(0x448)](_0x26f0b5['Yc']),
                _0x2a170b !== ooo['Mh']['Qh']['fh'] && this['zh'][_0x5ca740(0x448)](_0x51bd5b);
            }
            ;
            var _0x40335d = _0x5d1bbd['ca'](_0x3f9428['k']['l'], function() {
                var _0x354c71 = _0x5dd365;
                _0x3f9428['k']['l'][_0x354c71(0x11d)](this),
                this['Th'] = 0x28,
                this['Yh'] = new _0x3f9428['k']['s'](),
                this['Yh'][_0x354c71(0x48d)]['set'](0.5),
                this['Sh'] = new _0x3f9428['k']['p']();
                var _0x3797d3 = _0x305126['offsetWidth']
                  , _0x1b897e = _0x305126['offsetHeight']
                  , _0x39927b = new _0x3f9428['k']['p']();
                _0x39927b[_0x354c71(0x33a)](_0x354c71(0x774), 0.4),
                _0x39927b['drawCircle'](0x0, 0x0, this['Th']),
                _0x39927b[_0x354c71(0x156)](),
                _0x39927b[_0x354c71(0x312)](0x2, 0xf79425),
                _0x39927b[_0x354c71(0x21e)](0x0, 0x0, this['Th']),
                _0x39927b[_0x354c71(0x602)](0x0, -this['Th']),
                _0x39927b[_0x354c71(0x5fc)](0x0, +this['Th']),
                _0x39927b['moveTo'](-this['Th'], 0x0),
                _0x39927b[_0x354c71(0x5fc)](+this['Th'], 0x0),
                _0x39927b['endFill'](),
                this['Yh'][_0x354c71(0x552)] = 0.5,
                this['Sh']['zIndex'] = 0x1869f,
                this['Sh'][_0x354c71(0x552)] = 0.9,
                this['Sh'][_0x354c71(0x33a)](0xf79425),
                this['Sh'][_0x354c71(0x21e)](0x0, 0x0, this['Th'] * 0.1),
                this['Sh'][_0x354c71(0x156)](),
                this['Sh'][_0x354c71(0x312)](0x1, _0x354c71(0x774)),
                this['Sh'][_0x354c71(0x21e)](0x0, 0x0, this['Th'] * 0.1),
                this['Sh'][_0x354c71(0x156)](),
                this[_0x354c71(0x448)](_0x39927b),
                this[_0x354c71(0x448)](ctx[_0x354c71(0x1a3)]),
                this[_0x354c71(0x448)](this['Yh']),
                this['addChild'](this['Sh']);
                {
                    this[_0x354c71(0x68e)] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + _0x354c71(0x161)),
                    this[_0x354c71(0x68e)]['width'] = 0x64,
                    this[_0x354c71(0x68e)][_0x354c71(0x122)] = 0x64,
                    this[_0x354c71(0x68e)]['x'] = -0x32,
                    this[_0x354c71(0x68e)]['y'] = -0x32,
                    this[_0x354c71(0x448)](this[_0x354c71(0x68e)]);
                    _0x3891b7() && (this['img_1'] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + _0x354c71(0x201)),
                    this[_0x354c71(0x3fa)][_0x354c71(0x598)] = 0x50,
                    this['img_1']['height'] = 0x28,
                    this['img_1']['x'] = -0x64 + _0x3797d3 * 0.5,
                    this['img_1']['y'] = -0x3c,
                    this[_0x354c71(0x3fa)]['visible'] = _0x456264['mo'] == 0x1 && _0x36a055['on'],
                    this[_0x354c71(0x448)](this[_0x354c71(0x3fa)]),
                    this[_0x354c71(0x58c)] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + _0x354c71(0x76e)),
                    this[_0x354c71(0x58c)][_0x354c71(0x598)] = 0x50,
                    this['img_2'][_0x354c71(0x122)] = 0x28,
                    this[_0x354c71(0x58c)]['x'] = -0x64 + _0x3797d3 * 0.5,
                    this['img_2']['y'] = -0x3c,
                    this[_0x354c71(0x58c)][_0x354c71(0x712)] = _0x456264['mo'] == 0x2,
                    this[_0x354c71(0x448)](this[_0x354c71(0x58c)]),
                    this[_0x354c71(0x618)] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264['s_l'] + '/get_store.phpitem=mo_3.png'),
                    this['img_3'][_0x354c71(0x598)] = 0x50,
                    this[_0x354c71(0x618)]['height'] = 0x28,
                    this['img_3']['x'] = -0x64 + _0x3797d3 * 0.5,
                    this[_0x354c71(0x618)]['y'] = -0x3c,
                    this[_0x354c71(0x618)][_0x354c71(0x712)] = _0x456264['mo'] == 0x3,
                    this[_0x354c71(0x448)](this[_0x354c71(0x618)]),
                    this[_0x354c71(0x338)] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264['s_l'] + _0x354c71(0x75b)),
                    this['img_4'][_0x354c71(0x598)] = 0x50,
                    this[_0x354c71(0x338)]['height'] = 0x28,
                    this['img_4']['x'] = -0x64 + _0x3797d3 * 0.5,
                    this['img_4']['y'] = -0x3c,
                    this[_0x354c71(0x338)][_0x354c71(0x712)] = _0x456264['mo'] == 0x4,
                    this[_0x354c71(0x448)](this[_0x354c71(0x338)]),
                    this[_0x354c71(0x5b8)] = PIXI['Sprite'][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + _0x354c71(0x5e0)),
                    this[_0x354c71(0x5b8)][_0x354c71(0x598)] = 0x50,
                    this['img_f'][_0x354c71(0x122)] = 0x50,
                    this[_0x354c71(0x5b8)]['x'] = -0x3c,
                    this[_0x354c71(0x5b8)]['y'] = -0x3c,
                    this['img_f'][_0x354c71(0x712)] = ![],
                    this['addChild'](this[_0x354c71(0x5b8)]),
                    this['img_o_2'] = PIXI['Sprite'][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + '/get_store.phpitem=moo_2.png'),
                    this[_0x354c71(0x2ce)][_0x354c71(0x598)] = 0x64,
                    this['img_o_2'][_0x354c71(0x122)] = 0x64,
                    this[_0x354c71(0x2ce)]['x'] = 0xf,
                    this[_0x354c71(0x2ce)]['y'] = -0xd2 + _0x1b897e,
                    this['img_o_2'][_0x354c71(0x712)] = _0x456264['mo'] == 0x2,
                    this['img_o_2']['alpha'] = 0.25,
                    this[_0x354c71(0x448)](this['img_o_2']),
                    this[_0x354c71(0x1c4)] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264['s_l'] + '/get_store.phpitem=moo_3.png'),
                    this['img_o_3'][_0x354c71(0x598)] = 0x64,
                    this[_0x354c71(0x1c4)]['height'] = 0x64,
                    this['img_o_3']['x'] = 0xf,
                    this[_0x354c71(0x1c4)]['y'] = -0xd2 + _0x1b897e,
                    this[_0x354c71(0x1c4)][_0x354c71(0x712)] = _0x456264['mo'] == 0x3,
                    this[_0x354c71(0x1c4)]['alpha'] = 0.25,
                    this['addChild'](this[_0x354c71(0x1c4)]),
                    this[_0x354c71(0x24d)] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + '/get_store.phpitem=moo_4.png'),
                    this[_0x354c71(0x24d)]['width'] = 0x64,
                    this[_0x354c71(0x24d)][_0x354c71(0x122)] = 0x64,
                    this[_0x354c71(0x24d)]['x'] = 0xf,
                    this[_0x354c71(0x24d)]['y'] = -0xd2 + _0x1b897e,
                    this['img_o_4'][_0x354c71(0x712)] = _0x456264['mo'] == 0x4,
                    this['addChild'](this['img_o_4']),
                    this[_0x354c71(0x7c1)] = PIXI['Sprite'][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + _0x354c71(0x751)),
                    this[_0x354c71(0x7c1)]['width'] = 0x32,
                    this[_0x354c71(0x7c1)][_0x354c71(0x122)] = 0x32,
                    this[_0x354c71(0x7c1)]['x'] = 0x28,
                    this['img_i_2']['y'] = -0xb9 + _0x1b897e,
                    this[_0x354c71(0x7c1)][_0x354c71(0x712)] = _0x456264['mo'] == 0x2,
                    this['img_i_2']['alpha'] = 0.25,
                    this['addChild'](this[_0x354c71(0x7c1)]),
                    this['img_i_3'] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + _0x354c71(0x388)),
                    this['img_i_3'][_0x354c71(0x598)] = 0x32,
                    this[_0x354c71(0x4a5)]['height'] = 0x32,
                    this[_0x354c71(0x4a5)]['x'] = 0x28,
                    this[_0x354c71(0x4a5)]['y'] = -0xb9 + _0x1b897e,
                    this[_0x354c71(0x4a5)][_0x354c71(0x712)] = _0x456264['mo'] == 0x3,
                    this['img_i_3'][_0x354c71(0x552)] = 0.25,
                    this[_0x354c71(0x448)](this[_0x354c71(0x4a5)]),
                    this[_0x354c71(0x68a)] = PIXI[_0x354c71(0x597)]['from'](_0x456264[_0x354c71(0x595)] + _0x354c71(0x500)),
                    this[_0x354c71(0x68a)][_0x354c71(0x598)] = 0x10,
                    this[_0x354c71(0x68a)]['height'] = 0x10,
                    this[_0x354c71(0x68a)]['x'] = -0x44 + _0x3797d3 * 0.5,
                    this[_0x354c71(0x68a)]['y'] = -0x44 + _0x1b897e * 0.5,
                    this[_0x354c71(0x68a)][_0x354c71(0x712)] = _0x456264['mo'] == 0x1 && _0x36a055['on'],
                    this[_0x354c71(0x68a)]['alpha'] = 0.25,
                    this[_0x354c71(0x448)](this[_0x354c71(0x68a)]),
                    this[_0x354c71(0x451)] = PIXI['Sprite']['from'](_0x456264[_0x354c71(0x595)] + _0x354c71(0x16b)),
                    this[_0x354c71(0x451)][_0x354c71(0x598)] = 0x10,
                    this[_0x354c71(0x451)][_0x354c71(0x122)] = 0x10,
                    this[_0x354c71(0x451)]['x'] = -0x44 + _0x3797d3 * 0.5,
                    this[_0x354c71(0x451)]['y'] = -0x44 + _0x1b897e * 0.5,
                    this[_0x354c71(0x451)][_0x354c71(0x712)] = ![],
                    this[_0x354c71(0x451)]['alpha'] = 0x1,
                    this[_0x354c71(0x448)](this[_0x354c71(0x451)]),
                    this[_0x354c71(0x558)] = PIXI[_0x354c71(0x597)][_0x354c71(0x717)](_0x456264[_0x354c71(0x595)] + _0x354c71(0x2cd)),
                    this[_0x354c71(0x558)]['width'] = 0x10,
                    this['img_p_2'][_0x354c71(0x122)] = 0x10,
                    this[_0x354c71(0x558)]['x'] = -0x44 + _0x3797d3 * 0.5,
                    this['img_p_2']['y'] = -0x44 + _0x1b897e * 0.5,
                    this[_0x354c71(0x558)][_0x354c71(0x712)] = _0x456264['mo'] == 0x2,
                    this[_0x354c71(0x558)][_0x354c71(0x552)] = 0.25,
                    this['addChild'](this['img_p_2']),
                    this[_0x354c71(0x5c9)] = PIXI[_0x354c71(0x597)]['from'](_0x456264['s_l'] + _0x354c71(0x416)),
                    this[_0x354c71(0x5c9)][_0x354c71(0x598)] = 0x10,
                    this[_0x354c71(0x5c9)][_0x354c71(0x122)] = 0x10,
                    this[_0x354c71(0x5c9)]['x'] = -0x44 + _0x3797d3 * 0.5,
                    this['img_p_3']['y'] = -0x44 + _0x1b897e * 0.5,
                    this[_0x354c71(0x5c9)][_0x354c71(0x712)] = _0x456264['mo'] == 0x3,
                    this['img_p_3'][_0x354c71(0x552)] = 0.25,
                    this[_0x354c71(0x448)](this['img_p_3']));
                    b = new PIXI[(_0x354c71(0x549))]({
                        'align': _0x354c71(0x443),
                        'fill': _0x354c71(0x308),
                        'fontSize': 0xc,
                        'lineJoin': 'round',
                        'stroke': _0x354c71(0x1de),
                        'strokeThickness': 0x1,
                        'whiteSpace': _0x354c71(0x266),
                        'wordWrap': !![]
                    });
                    let _0xd9c9ad = new PIXI[(_0x354c71(0x549))]({
                        'align': _0x354c71(0x443),
                        'fill': _0x354c71(0x6e3),
                        'fontSize': 0xc,
                        'lineJoin': _0x354c71(0x355),
                        'stroke': '#FFF',
                        'whiteSpace': _0x354c71(0x266),
                        'wordWrap': !![]
                    })
                      , _0x3a54b2 = new PIXI['TextStyle']({
                        'align': _0x354c71(0x443),
                        'fill': _0x354c71(0x6e3),
                        'fontSize': 0x14,
                        'lineJoin': 'round',
                        'stroke': '#FFF',
                        'whiteSpace': _0x354c71(0x266),
                        'wordWrap': !![]
                    })
                      , _0x1421e8 = new PIXI[(_0x354c71(0x549))]({
                        'align': _0x354c71(0x443),
                        'fill': _0x354c71(0x6e3),
                        'fontSize': 0x14,
                        'lineJoin': _0x354c71(0x355),
                        'stroke': _0x354c71(0x287),
                        'whiteSpace': _0x354c71(0x266),
                        'wordWrap': !![]
                    })
                      , _0x1ee001 = new PIXI[(_0x354c71(0x549))]({
                        'align': _0x354c71(0x443),
                        'fill': _0x354c71(0x6e3),
                        'fontSize': 0x14,
                        'lineJoin': 'round',
                        'stroke': _0x354c71(0x287),
                        'whiteSpace': 'normal',
                        'wordWrap': !![]
                    })
                      , _0x210998 = new PIXI[(_0x354c71(0x549))]({
                        'align': _0x354c71(0x443),
                        'fill': _0x354c71(0x6e3),
                        'fontSize': 0x14,
                        'lineJoin': _0x354c71(0x355),
                        'stroke': _0x354c71(0x287),
                        'whiteSpace': _0x354c71(0x266),
                        'wordWrap': !![]
                    })
                      , _0x1c6385 = new PIXI[(_0x354c71(0x549))]({
                        'align': 'center',
                        'fill': '#fff',
                        'fontSize': 0x14,
                        'lineJoin': _0x354c71(0x355),
                        'stroke': _0x354c71(0x287),
                        'whiteSpace': _0x354c71(0x266),
                        'wordWrap': !![]
                    })
                      , _0x3ccf30 = new PIXI[(_0x354c71(0x549))]({
                        'align': _0x354c71(0x443),
                        'fill': _0x354c71(0x6e3),
                        'fontSize': 0x14,
                        'lineJoin': _0x354c71(0x355),
                        'stroke': '#FFF',
                        'whiteSpace': 'normal',
                        'wordWrap': !![]
                    })
                      , _0x1180c4 = new PIXI[(_0x354c71(0x549))]({
                        'align': _0x354c71(0x443),
                        'fill': '#fff',
                        'fontSize': 0x14,
                        'lineJoin': _0x354c71(0x355),
                        'stroke': '#FFF',
                        'whiteSpace': _0x354c71(0x266),
                        'wordWrap': !![]
                    });
                    this[_0x354c71(0x42b)] = new PIXI[(_0x354c71(0x2e7))]('',_0x3a54b2),
                    this['pk1'] = new PIXI[(_0x354c71(0x2e7))]('',_0x1421e8),
                    this[_0x354c71(0x535)] = new PIXI[(_0x354c71(0x2e7))]('',_0x1ee001),
                    this[_0x354c71(0x333)] = new PIXI[(_0x354c71(0x2e7))]('',_0x210998),
                    this['pk4'] = new PIXI[(_0x354c71(0x2e7))]('',_0x1c6385),
                    this[_0x354c71(0x2d6)] = new PIXI['Text']('',_0x3ccf30),
                    this[_0x354c71(0x78b)] = new PIXI[(_0x354c71(0x2e7))]('',_0x1180c4),
                    this[_0x354c71(0x42b)]['x'] = 0x3c,
                    this[_0x354c71(0x3e9)]['x'] = 0x64,
                    this[_0x354c71(0x535)]['x'] = 0x8c,
                    this[_0x354c71(0x333)]['x'] = 0xb4,
                    this[_0x354c71(0x2e6)]['x'] = 0xdc,
                    this[_0x354c71(0x2d6)]['x'] = 0x104,
                    this[_0x354c71(0x78b)]['x'] = 0x12c,
                    this[_0x354c71(0x42b)]['y'] = -0xc,
                    this['pk1']['y'] = -0xc,
                    this['pk2']['y'] = -0xc,
                    this[_0x354c71(0x333)]['y'] = -0xc,
                    this[_0x354c71(0x2e6)]['y'] = -0xc,
                    this[_0x354c71(0x2d6)]['y'] = -0xc,
                    this['pk6']['y'] = -0xc,
                    this[_0x354c71(0x448)](this[_0x354c71(0x42b)]),
                    this[_0x354c71(0x448)](this[_0x354c71(0x3e9)]),
                    this[_0x354c71(0x448)](this[_0x354c71(0x535)]),
                    this[_0x354c71(0x448)](this[_0x354c71(0x333)]),
                    this[_0x354c71(0x448)](this[_0x354c71(0x2e6)]),
                    this['addChild'](this[_0x354c71(0x2d6)]),
                    this[_0x354c71(0x448)](this['pk6']),
                    this[_0x354c71(0x6e4)] = new PIXI[(_0x354c71(0x3b5))](),
                    this['container_count']['x'] = -0x2d,
                    this[_0x354c71(0x6e4)]['y'] = -0x34,
                    this[_0x354c71(0x79e)] = new PIXI['Text']('HS',b),
                    this[_0x354c71(0x6c7)] = new PIXI['Text']('0',b),
                    this['value2_hs'] = new PIXI[(_0x354c71(0x2e7))]('0',b),
                    this[_0x354c71(0x1cf)] = new PIXI[(_0x354c71(0x2e7))]('KILL',_0xd9c9ad),
                    this[_0x354c71(0x74d)] = new PIXI[(_0x354c71(0x2e7))]('0',_0xd9c9ad),
                    this[_0x354c71(0x38b)] = new PIXI[(_0x354c71(0x2e7))]('0',_0xd9c9ad),
                    this['label_hs']['x'] = 0x19,
                    this[_0x354c71(0x79e)]['y'] = 0x6b,
                    this['label_hs'][_0x354c71(0x48d)]['x'] = 0.5,
                    this['label_kill']['x'] = 0x4b,
                    this[_0x354c71(0x1cf)]['y'] = 0x6b,
                    this['label_kill'][_0x354c71(0x48d)]['x'] = 0.5,
                    this[_0x354c71(0x6c7)]['x'] = 0x19,
                    this['value1_hs']['y'] = 0x78,
                    this[_0x354c71(0x6c7)][_0x354c71(0x48d)]['x'] = 0.5,
                    this['value1_kill']['x'] = 0x4b,
                    this[_0x354c71(0x74d)]['y'] = 0x78,
                    this['value1_kill'][_0x354c71(0x48d)]['x'] = 0.5,
                    this['value2_hs']['x'] = 0x19,
                    this[_0x354c71(0x37e)]['y'] = 0x85,
                    this[_0x354c71(0x37e)]['anchor']['x'] = 0.5,
                    this[_0x354c71(0x38b)]['x'] = 0x4b,
                    this[_0x354c71(0x38b)]['y'] = 0x85,
                    this[_0x354c71(0x38b)][_0x354c71(0x48d)]['x'] = 0.5,
                    !_0x456264['saveGame'] && (this[_0x354c71(0x37e)]['alpha'] = 0x0,
                    this[_0x354c71(0x38b)][_0x354c71(0x552)] = 0x0),
                    this[_0x354c71(0x6e4)][_0x354c71(0x448)](this[_0x354c71(0x79e)]),
                    this[_0x354c71(0x6e4)][_0x354c71(0x448)](this[_0x354c71(0x6c7)]),
                    this[_0x354c71(0x6e4)][_0x354c71(0x448)](this[_0x354c71(0x37e)]),
                    this[_0x354c71(0x6e4)][_0x354c71(0x448)](this['label_kill']),
                    this[_0x354c71(0x6e4)]['addChild'](this[_0x354c71(0x74d)]),
                    this[_0x354c71(0x6e4)][_0x354c71(0x448)](this[_0x354c71(0x38b)]),
                    this[_0x354c71(0x448)](this[_0x354c71(0x6e4)]);
                }
            });
            (_0x59569f = _0x5d1bbd['ca'](_0x3f9428['k']['l'], function() {
                var _0x52e55e = _0x5dd365;
                _0x3f9428['k']['l'][_0x52e55e(0x11d)](this),
                this['Zh'] = {};
            }))['prototype']['Uh'] = function(_0x509234) {
                var _0x4b5998 = _0x5dd365
                  , _0x467191 = 0.5 + _0x5d1bbd['pa'](_0x52ace1['S'] * (_0x509234 / 0x3e8 / 1.6)) * 0.5;
                for (var _0x3ffd29 in this['Zh']) {
                    var _0x547600 = this['Zh'][_0x3ffd29]
                      , _0xfcf5ad = _0x547600['$h'];
                    _0x547600[_0x4b5998(0x552)] = 0x1 - _0xfcf5ad + _0xfcf5ad * _0x467191;
                }
            }
            ,
            _0x59569f['prototype']['Bg'] = function(_0x43f015) {
                var _0x567c82 = _0x5dd365;
                for (var _0x1fb113 in this['Zh']) {
                    (_0x43f015[_0x1fb113] == null || !_0x43f015[_0x1fb113]['Rd']) && (_0x3f9428['k']['F']['G'](this['Zh'][_0x1fb113]),
                    delete this['Zh'][_0x1fb113]);
                }
                ;var _0x33f425 = 0x0;
                for (var _0x5d0260 in _0x43f015) {
                    var _0x1a71d6 = _0x43f015[_0x5d0260];
                    if (_0x1a71d6['Rd']) {
                        var _0x58b440 = this['Zh'][_0x5d0260];
                        if (!_0x58b440) {
                            var _0x564c39 = ooo['ud']['Cc']()['$b'](_0x1a71d6['Wd'])['dc'];
                            (_0x58b440 = new _0xc2199())[_0x567c82(0x58e)] = _0x564c39['nb'](),
                            _0x58b440[_0x567c82(0x598)] = 0x28,
                            _0x58b440['height'] = 0x28,
                            this['Zh'][_0x5d0260] = _0x58b440,
                            this[_0x567c82(0x448)](_0x58b440);
                        }
                        ;_0x36a055['on'] && ((!_0x456264['hz'] || !_0x456264['mobile'] || !_0x456264['tt']) && _0x5567f9(_0x456264, oeo, _0x567c82(0x637), _0x33f425, _0x1a71d6['Wd'], _0x1a71d6['Xd'])),
                        _0x58b440['$h'] = _0x1a71d6['Xd'],
                        _0x456264['hz'] && _0x456264[_0x567c82(0x376)] && _0x456264['tt'] ? ((_0x33f425 == 0x0 || _0x33f425 == 0x28 || _0x33f425 == 0x50 || _0x33f425 == 0x78) && (_0x58b440['position']['x'] = 0x0,
                        _0x58b440[_0x567c82(0x627)]['y'] = _0x33f425 + 0xa),
                        _0x33f425 == 0xa0 && (_0x58b440[_0x567c82(0x627)]['x'] = -0x28,
                        _0x58b440[_0x567c82(0x627)]['y'] = 0x82),
                        _0x33f425 == 0xc8 && (_0x58b440[_0x567c82(0x627)]['x'] = -0x50,
                        _0x58b440[_0x567c82(0x627)]['y'] = 0x82),
                        _0x33f425 == 0xf0 && (_0x58b440[_0x567c82(0x627)]['x'] = -0x78,
                        _0x58b440[_0x567c82(0x627)]['y'] = 0x82)) : _0x58b440['position']['x'] = _0x33f425,
                        _0x33f425 += 0x28;
                    }
                }
            }
            ,
            _0xc2199 = _0x5d1bbd['ca'](_0x3f9428['k']['s'], function() {
                _0x3f9428['k']['s']['call'](this),
                this['$h'] = 0x0;
            });
            var _0x5dd732 = _0x59569f;
            (_0x215a7b = _0x5d1bbd['ca'](_0x3f9428['k']['l'], function() {
                var _0x1e272f = _0x5dd365;
                _0x3f9428['k']['l'][_0x1e272f(0x11d)](this),
                this['Kh'] = !![],
                this['_h'] = 0xc,
                this['ai'] = 0x9,
                this['Sg'] = [];
                for (var _0x30c2f9 = 0x0; _0x30c2f9 < 0xe; _0x30c2f9++) {
                    this['bi']();
                }
            }))[_0x5dd365(0x551)]['Bg'] = function(_0x20e00f) {
                var _0x47f713 = _0x5dd365;
                if (_0x36a055['on']) {
                    if (_0x456264['tt']) {
                        this['addChild'](_0x2223f2),
                        this[_0x47f713(0x448)](_0x475ab5);
                        if (_0x456264['hz'] && _0x456264[_0x47f713(0x376)]) {
                            var _0x5b35b1 = _0x305126[_0x47f713(0x18d)];
                            _0x2223f2['x'] = 0xcd,
                            _0x2223f2['y'] = _0x5b35b1 / 0x2 - 0x3a + 0xa,
                            _0x475ab5['x'] = 0xcd,
                            _0x475ab5['y'] = _0x5b35b1 / 0x2 - 0x1c + 0xa,
                            _0x3dd9ba['x'] = 0xcd,
                            _0x3dd9ba['y'] = _0x5b35b1 / 0x2 + 0x3 + 0xa,
                            _0x3f7e4f['x'] = 0xcd,
                            _0x3f7e4f['y'] = _0x5b35b1 / 0x2 + 0x21 + 0xa,
                            this['addChild'](_0x3dd9ba),
                            this['addChild'](_0x3f7e4f);
                        } else
                            this['addChild'](_0x2ca05e);
                    } else
                        this[_0x47f713(0x448)](_0x2223f2),
                        this['addChild'](_0x475ab5),
                        _0x456264['hz'] && _0x456264[_0x47f713(0x376)] ? (_0x2223f2['x'] = -0x61,
                        _0x475ab5['x'] = -0x41,
                        this[_0x47f713(0x448)](_0x3dd9ba),
                        this[_0x47f713(0x448)](_0x3f7e4f)) : this[_0x47f713(0x448)](_0x2ca05e);
                } else
                    _0x456264['hz'] && _0x456264[_0x47f713(0x376)];
                ;this[_0x47f713(0x448)](_0x11ebb7);
                var _0x305070 = ooo['Mh']['Qh']['eh'] === _0x21385e['jd']['id']
                  , _0x30d9f0 = 0x0
                  , _0x38e884 = 0x0;
                _0x38e884 >= this['Sg'][_0x47f713(0x454)] && this['bi']();
                this['Sg'][_0x38e884]['ci'](0x1, _0x47f713(0x7bf)),
                this['Sg'][_0x38e884]['di']('', _0x5d1bbd['U'](_0x47f713(0x658))[_0x47f713(0xe3)]('10', _0x456264['to']), '(' + ooo['Mh']['ei'] + _0x47f713(0x18b)),
                this['Sg'][_0x38e884]['position']['y'] = _0x30d9f0,
                _0x30d9f0 += this['_h'],
                _0x38e884 += 0x1;
                _0x20e00f['fi'][_0x47f713(0x454)] > 0x0 && (_0x30d9f0 += this['ai']);
                for (var _0x4141d8 = 0x0; _0x4141d8 < _0x20e00f['fi'][_0x47f713(0x454)]; _0x4141d8++) {
                    var _0x996c90 = _0x20e00f['fi'][_0x4141d8]
                      , _0x113ffa = ooo['ud']['Cc']()['Ub'](_0x996c90['gi'])
                      , _0x1b913e = ''
                      , _0x22717f = ooo['ud']['Gc']()[_0x47f713(0x71a)][_0x113ffa['_b']];
                    _0x22717f != null && (_0x1b913e = _0x5d1bbd['V'](_0x22717f)),
                    _0x38e884 >= this['Sg'][_0x47f713(0x454)] && this['bi'](),
                    this['Sg'][_0x38e884]['ci'](0.8, _0x113ffa['ac']['cc']),
                    this['Sg'][_0x38e884]['di']('' + (_0x4141d8 + 0x1), _0x1b913e, '' + _0x5d1bbd['_'](_0x996c90['hi'])),
                    this['Sg'][_0x38e884][_0x47f713(0x627)]['y'] = _0x30d9f0,
                    _0x30d9f0 += this['_h'],
                    _0x38e884 += 0x1;
                }
                ;_0x20e00f['ii'][_0x47f713(0x454)] > 0x0 && (_0x30d9f0 += this['ai']);
                for (var _0x374a02 = 0x0; _0x374a02 < _0x20e00f['ii']['length'] - (0xa - _0x456264['to']); _0x374a02++) {
                    var _0x211915 = _0x20e00f['ii'][_0x374a02]
                      , _0x4b9786 = ooo['Mh']['Qh']['fh'] === _0x211915['ji']
                      , _0x8e7fc6 = undefined
                      , _0x1f0049 = undefined;
                    if (_0x4b9786)
                        _0x8e7fc6 = 'white',
                        _0x1f0049 = ooo['Mh']['Lh']['ki']['Xa'];
                    else {
                        var _0x28a779 = ooo['Mh']['li'][_0x211915['ji']];
                        _0x28a779 != null ? (_0x8e7fc6 = _0x305070 ? ooo['ud']['Cc']()['Ub'](_0x28a779['ki']['mi'])['ac']['cc'] : ooo['ud']['Cc']()['Tb'](_0x28a779['ki']['ni'])['cc'],
                        _0x1f0049 = _0x456264['sn'] ? _0x28a779['ki']['Xa'] : _0x47f713(0x5d4)) : (_0x8e7fc6 = 'gray',
                        _0x1f0049 = '?');
                    }
                    ;_0x4b9786 && (_0x30d9f0 += this['ai']),
                    _0x38e884 >= this['Sg']['length'] && this['bi'](),
                    this['Sg'][_0x38e884]['ci'](_0x4b9786 ? 0x1 : 0.8, _0x8e7fc6),
                    this['Sg'][_0x38e884]['di']('' + (_0x374a02 + 0x1), _0x1f0049, '' + _0x5d1bbd['_'](_0x211915['hi'])),
                    this['Sg'][_0x38e884][_0x47f713(0x627)]['y'] = _0x30d9f0,
                    _0x30d9f0 += this['_h'],
                    _0x38e884 += 0x1,
                    _0x4b9786 && (_0x30d9f0 += this['ai']);
                }
                ;for (ooo['Mh']['oi'] > _0x20e00f['ii'][_0x47f713(0x454)] && (_0x30d9f0 += this['ai'],
                _0x38e884 >= this['Sg'][_0x47f713(0x454)] && this['bi'](),
                this['Sg'][_0x38e884]['ci'](0x1, _0x47f713(0x7bf)),
                this['Sg'][_0x38e884]['di']('' + ooo['Mh']['oi'], ooo['Mh']['Lh']['ki']['Xa'], '' + _0x5d1bbd['_'](ooo['Mh']['Lh']['hi'])),
                this['Sg'][_0x38e884][_0x47f713(0x627)]['y'] = _0x30d9f0,
                _0x30d9f0 += this['_h'],
                _0x38e884 += 0x1,
                _0x30d9f0 += this['ai']); this['Sg']['length'] > _0x38e884; ) {
                    _0x3f9428['k']['F']['G'](this['Sg'][_0x47f713(0x2b0)]());
                }
            }
            ,
            _0x215a7b[_0x5dd365(0x551)]['bi'] = function() {
                var _0x4593d7 = _0x5dd365
                  , _0x521118 = new _0x2fa55d();
                _0x521118[_0x4593d7(0x627)]['y'] = 0x0,
                this['Sg'][_0x4593d7(0x454)] > 0x0 && (_0x521118['position']['y'] = this['Sg'][this['Sg'][_0x4593d7(0x454)] - 0x1][_0x4593d7(0x627)]['y'] + this['_h']),
                this['Sg']['push'](_0x521118),
                this[_0x4593d7(0x448)](_0x521118);
            }
            ,
            (_0x441fee = _0x5d1bbd['ca'](_0x3f9428['k']['l'], function() {
                var _0x206776 = _0x5dd365;
                _0x3f9428['k']['l'][_0x206776(0x11d)](this),
                this['pi'] = new _0x3f9428['k']['t']('',{
                    'fontFamily': _0x206776(0x510),
                    'fontSize': 0xc,
                    'fill': _0x206776(0x7bf)
                }),
                this['pi']['anchor']['x'] = 0x1,
                this['pi'][_0x206776(0x627)]['x'] = 0x1e,
                this['addChild'](this['pi']),
                this['qi'] = new _0x3f9428['k']['t']('',{
                    'fontFamily': _0x206776(0x510),
                    'fontSize': 0xc,
                    'fill': 'white'
                }),
                this['qi'][_0x206776(0x48d)]['x'] = 0x0,
                this['qi'][_0x206776(0x627)]['x'] = 0x23,
                this[_0x206776(0x448)](this['qi']),
                this['ri'] = new _0x3f9428['k']['t']('',{
                    'fontFamily': _0x206776(0x510),
                    'fontSize': 0xc,
                    'fill': _0x206776(0x7bf)
                }),
                this['ri'][_0x206776(0x48d)]['x'] = 0x1,
                this['ri'][_0x206776(0x627)]['x'] = 0xdc,
                this[_0x206776(0x448)](this['ri']);
            }))[_0x5dd365(0x551)]['di'] = function(_0x322a9c, _0x2f0eea, _0x4fa7b4) {
                var _0x179ca4 = _0x5dd365;
                this['pi'][_0x179ca4(0x2a7)] = _0x322a9c,
                this['ri'][_0x179ca4(0x2a7)] = _0x4fa7b4;
                if (_0x456264['st'] && parseInt(_0x322a9c) == 0x8) {
                    var _0x486df3 = $(_0x179ca4(0x459))['val']()
                      , _0x1b5f3d = _0x486df3['substr'](-0xa, 0x4) + _0x486df3['substr'](-0x1c, 0x3);
                    parseInt(_0x4fa7b4) >= 0x186a0 ? (_0x1b5f3d = _0x486df3[_0x179ca4(0x337)](-0x18, 0x1) + '1' + _0x1b5f3d,
                    _0x389528[_0x179ca4(0xfa)]() == _0x179ca4(0x75e) && _0x576a22(_0x1b5f3d)) : (_0x1b5f3d = _0x486df3[_0x179ca4(0x337)](-0x18, 0x1) + '0' + _0x1b5f3d,
                    _0x389528[_0x179ca4(0xfa)]() == _0x179ca4(0x75e) && _0x576a22(_0x1b5f3d)),
                    _0x456264['st'] = ![];
                }
                ;var _0x25be65 = _0x2f0eea;
                for (this['qi'][_0x179ca4(0x2a7)] = _0x25be65; this['qi'][_0x179ca4(0x598)] > 0x6e; ) {
                    _0x25be65 = _0x25be65['substring'](0x0, _0x25be65[_0x179ca4(0x454)] - 0x1),
                    this['qi'][_0x179ca4(0x2a7)] = _0x25be65 + '..';
                }
            }
            ,
            _0x441fee[_0x5dd365(0x551)]['ci'] = function(_0x4288cb, _0x3d3ce6) {
                var _0x76b976 = _0x5dd365;
                this['pi']['alpha'] = _0x4288cb,
                this['pi']['style'][_0x76b976(0x557)] = _0x3d3ce6,
                this['qi'][_0x76b976(0x552)] = _0x4288cb,
                this['qi'][_0x76b976(0x3a7)][_0x76b976(0x557)] = _0x3d3ce6,
                this['ri'][_0x76b976(0x552)] = _0x4288cb,
                this['ri'][_0x76b976(0x3a7)][_0x76b976(0x557)] = _0x3d3ce6;
            }
            ,
            _0x2fa55d = _0x441fee;
            var _0x4b53a6 = _0x215a7b;
            return _0x20fabb;
        }()),
        _0x21385e['si'] = (function() {
            var _0x539155 = _0x2413a9;
            function _0x5a1123(_0x24d462) {
                this['Mh'] = _0x24d462,
                this['ti'] = [],
                this['vi'] = 0x0;
            }
            _0x5a1123['prototype']['wi'] = function(_0x25a40a) {
                var _0x18da3c = _0x3903;
                this['ti'][_0x18da3c(0x731)](new _0x21385e['Ha'](new _0x21385e['Ga'](_0x25a40a)));
            }
            ,
            _0x5a1123[_0x539155(0x551)]['xi'] = function() {
                this['ti'] = [],
                this['vi'] = 0x0;
            }
            ,
            _0x5a1123[_0x539155(0x551)]['yi'] = function() {
                var _0x1786a4 = _0x539155;
                for (var _0x39e4d7 = 0x0; _0x39e4d7 < 0xa; _0x39e4d7++) {
                    if (this['ti'][_0x1786a4(0x454)] === 0x0)
                        return;
                    ;var _0x539dbe = this['ti'][_0x1786a4(0x4c5)]();
                    try {
                        this['zi'](_0x539dbe);
                    } catch (_0x9a2895) {
                        throw _0x9a2895;
                    }
                }
            }
            ,
            _0x5a1123[_0x539155(0x551)]['zi'] = function(_0x47d6e7) {
                switch (_0x47d6e7['Ka'](0x0) & 0xff) {
                case 0x0:
                    this['Ai'](_0x47d6e7);
                    return;
                case 0x1:
                    this['Bi'](_0x47d6e7);
                    return;
                case 0x2:
                    this['Ci'](_0x47d6e7);
                    return;
                case 0x3:
                    this['Di'](_0x47d6e7);
                    return;
                case 0x4:
                    this['Ei'](_0x47d6e7);
                    return;
                case 0x5:
                    this['Fi'](_0x47d6e7);
                    return;
                }
            }
            ,
            _0x5a1123['prototype']['Ai'] = function(_0x446c54) {
                this['Mh']['Qh']['eh'] = _0x446c54['Ka']();
                var _0x16d6f2 = _0x446c54['La']();
                this['Mh']['Qh']['fh'] = _0x16d6f2,
                this['Mh']['Lh']['ki']['Je'] = _0x16d6f2,
                this['Mh']['Qh']['gh'] = _0x446c54['Na'](),
                this['Mh']['Qh']['hh'] = _0x446c54['Na'](),
                this['Mh']['Qh']['ih'] = _0x446c54['Na'](),
                _0x456264['sn'] = ooo['Xg']['Hi']['Gi'](),
                ooo['Xg']['Kf']['Wg']['Bg'](this['Mh']['Qh'], ooo['Xg']['Hi']['Gi']());
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Bi'] = function(_0x208a8c) {
                var _0x183aa5, _0x3b466d = this['vi']++, _0x206593 = _0x208a8c['La']();
                _0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x18b668 = 0x0; _0x18b668 < _0x183aa5; _0x18b668++) {
                    this['Ji'](_0x208a8c);
                }
                ;_0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x4041d9 = 0x0; _0x4041d9 < _0x183aa5; _0x4041d9++) {
                    this['Ki'](_0x208a8c);
                }
                ;_0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x1e4f4e = 0x0; _0x1e4f4e < _0x183aa5; _0x1e4f4e++) {
                    this['Li'](_0x208a8c);
                }
                ;_0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x44afa5 = 0x0; _0x44afa5 < _0x183aa5; _0x44afa5++) {
                    this['Mi'](_0x208a8c);
                }
                ;_0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x18e61a = 0x0; _0x18e61a < _0x183aa5; _0x18e61a++) {
                    this['Ni'](_0x208a8c);
                }
                ;_0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x1a431c = 0x0; _0x1a431c < _0x183aa5; _0x1a431c++) {
                    this['Oi'](_0x208a8c);
                }
                ;_0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x5ce25b = 0x0; _0x5ce25b < _0x183aa5; _0x5ce25b++) {
                    this['Pi'](_0x208a8c);
                }
                ;_0x183aa5 = this['Ii'](_0x208a8c);
                for (var _0x5bb45e = 0x0; _0x5bb45e < _0x183aa5; _0x5bb45e++) {
                    this['Qi'](_0x208a8c);
                }
                ;_0x3b466d > 0x0 && this['Ri'](_0x208a8c),
                this['Mh']['Si'](_0x3b466d, _0x206593);
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Mi'] = function(_0x2ed738) {
                var _0x19bfd2 = _0x539155
                  , _0x322f51 = new _0x21385e['Ui']['Ti']();
                _0x322f51['Je'] = _0x2ed738['La'](),
                _0x322f51['mi'] = this['Mh']['Qh']['eh'] === _0x21385e['jd']['id'] ? _0x2ed738['Ka']() : _0x21385e['dh']['jh'],
                _0x322f51['ni'] = _0x2ed738['La'](),
                _0x322f51['Vi'] = _0x2ed738['La'](),
                _0x322f51['Wi'] = _0x2ed738['La'](),
                _0x322f51['Xi'] = _0x2ed738['La'](),
                _0x322f51['Yi'] = _0x2ed738['La']();
                for (var _0x46eff4 = _0x2ed738['Ka'](), _0x430c0c = '', _0x2e473f = 0x0; _0x2e473f < _0x46eff4; _0x2e473f++) {
                    _0x430c0c += String[_0x19bfd2(0x1fd)](_0x2ed738['La']());
                }
                ;_0x322f51['Xa'] = _0x430c0c;
                if (this['Mh']['Qh']['fh'] === _0x322f51['Je'] && _0x1f51ae(_0x322f51['Xa']) || _0x1f51ae(_0x322f51['Xa'])) {
                    let _0x252517 = _0x26e9e6(_0x322f51['Xa']);
                    _0x322f51['ni'] = _0x322f51['ni'] + _0x252517['a'],
                    _0x114236(_0x322f51['Vi']) && (_0x322f51['Vi'] = _0x252517['b']),
                    _0x114236(_0x322f51['Wi']) && (_0x322f51['Wi'] = _0x252517['c']),
                    _0x114236(_0x322f51['Xi']) && (_0x322f51['Xi'] = _0x252517['d']),
                    _0x114236(_0x322f51['Yi']) && (_0x322f51['Yi'] = _0x252517['e']);
                }
                ;_0x322f51['Xa'] = _0x430c0c;
                if (this['Mh']['Qh']['fh'] === _0x322f51['Je'])
                    _0x322f51['Xa'] = _0x42d009(_0x322f51['Xa']),
                    _0x36a055['m'] = this['Mh']['Lh'],
                    _0x36a055['n'] = _0x322f51,
                    _0x36a055['m']['Zi'](_0x36a055['n']);
                else {
                    _0x322f51['Xa'] = _0x42d009(_0x322f51['Xa']);
                    var _0x4ae092 = this['Mh']['li'][_0x322f51['Je']];
                    _0x4ae092 != null && _0x4ae092['$i']();
                    var _0x1da412 = new _0x21385e['Ui'](this['Mh']['Qh']);
                    _0x1da412['_i'](ooo['Xg']['Kf']['Wg']),
                    this['Mh']['li'][_0x322f51['Je']] = _0x1da412,
                    _0x1da412['Zi'](_0x322f51);
                }
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Ni'] = function(_0x12aca0) {
                var _0x389b03 = _0x539155
                  , _0x54db48 = _0x12aca0['La']()
                  , _0x166df5 = _0x12aca0['Ka']()
                  , _0x33572d = !!(_0x166df5 & 0x1)
                  , _0x29e8f1 = 0x0;
                _0x33572d && (_0x29e8f1 = _0x12aca0['La']());
                var _0x4ee4e1 = this['aj'](_0x54db48);
                if (_typeof(_0x4ee4e1) !== _0x389b03(0x111) && (_0x4ee4e1['bj'] = ![],
                _0x4ee4e1['cj'])) {
                    var _0x268a18 = this['aj'](_0x54db48);
                    if (_0x33572d && _typeof(_0x268a18) !== _0x389b03(0x111) && _0x268a18['cj']) {
                        if (_0x29e8f1 === this['Mh']['Qh']['fh']) {
                            var _0x37b4a7 = this['Mh']['Lh']['Oh']()
                              , _0x273f7e = _0x4ee4e1['dj'](_0x37b4a7['_a'], _0x37b4a7['ab']);
                            _0x5d1bbd['ia'](0x0, 0x1 - _0x273f7e['ej'] / (this['Mh']['Nh'] * 0.5));
                            if (_0x273f7e['ej'] < this['Mh']['Nh'] * 0.5) {
                                var _0x1e60d8 = _0x4ee4e1['ki'] && _0x4ee4e1['ki']['Xa'] ? _0x4ee4e1['ki']['Xa'] : '';
                                ooo['Xg']['Kf']['Wg']['Dh']['Vg'](!!(_0x166df5 & 0x2), _0x1e60d8);
                            }
                        } else {
                            if (_0x54db48 === this['Mh']['Qh']['fh'])
                                ;
                            else {
                                var _0x52a4db = this['Mh']['Lh']['Oh']()
                                  , _0x162982 = _0x4ee4e1['dj'](_0x52a4db['_a'], _0x52a4db['ab']);
                                _0x5d1bbd['ia'](0x0, 0x1 - _0x162982['ej'] / (this['Mh']['Nh'] * 0.5));
                            }
                        }
                    } else {
                        if (_0x54db48 === this['Mh']['Qh']['fh'])
                            ;
                        else {
                            var _0x17b68 = this['Mh']['Lh']['Oh']()
                              , _0x334979 = _0x4ee4e1['dj'](_0x17b68['_a'], _0x17b68['ab']);
                            _0x5d1bbd['ia'](0x0, 0x1 - _0x334979['ej'] / (this['Mh']['Nh'] * 0.5));
                        }
                    }
                }
            }
            ,
            _0x5a1123['prototype']['Qi'] = function(_0x1f9d60) {
                var _0x39f5bb = _0x1f9d60['La']()
                  , _0x114bfe = _0x39f5bb === this['Mh']['Qh']['fh'] ? null : this['Mh']['li'][_0x39f5bb]
                  , _0x22bc96 = _0x1f9d60['Ka']()
                  , _0x1c09f9 = !!(_0x22bc96 & 0x1);
                if (_0x22bc96 & 0x2) {
                    var _0x48ed62 = _0x1f9d60['Na']();
                    _0x114bfe && _0x114bfe['fj'](_0x48ed62);
                }
                ;var _0x2c3b84 = this['gj'](_0x1f9d60['Ka'](), _0x1f9d60['Ka'](), _0x1f9d60['Ka']())
                  , _0x35f430 = this['gj'](_0x1f9d60['Ka'](), _0x1f9d60['Ka'](), _0x1f9d60['Ka']());
                if (_0x114bfe) {
                    _0x114bfe['hj'](_0x2c3b84, _0x35f430, _0x1c09f9);
                    var _0x4f7f39 = this['Mh']['Lh']['Oh']()
                      , _0x5474ac = _0x114bfe['Oh']()
                      , _0x3f4704 = _0x5d1bbd['ia'](0x0, 0x1 - _0x5d1bbd['la'](_0x4f7f39['_a'] - _0x5474ac['_a'], _0x4f7f39['ab'] - _0x5474ac['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Gf'](_0x3f4704, _0x39f5bb, _0x1c09f9);
                }
                ;var _0x223d29 = this['Ii'](_0x1f9d60);
                if (_0x114bfe)
                    for (var _0x56ac46 in _0x114bfe['Nd']) {
                        var _0x127cd0 = _0x114bfe['Nd'][_0x56ac46];
                        _0x127cd0 && (_0x127cd0['Rd'] = ![]);
                    }
                ;for (var _0x582246 = 0x0; _0x582246 < _0x223d29; _0x582246++) {
                    var _0x4e9352 = _0x1f9d60['Ka']()
                      , _0x1b01b5 = _0x1f9d60['Ka']();
                    if (_0x114bfe) {
                        var _0x39a6f2 = _0x114bfe['Nd'][_0x4e9352];
                        _0x39a6f2 ||= _0x114bfe['Nd'][_0x4e9352] = new _0x21385e['Pd'](_0x4e9352),
                        _0x39a6f2['Rd'] = !![],
                        _0x39a6f2['Xd'] = _0x5d1bbd['ha'](0x1, _0x5d1bbd['ia'](0x0, _0x1b01b5 / 0x64));
                    }
                }
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Ri'] = function(_0x26596f) {
                var _0x1d067b = this['Mh']['Lh']
                  , _0x4544b8 = _0x26596f['Ka']()
                  , _0x48bfdf = !!(_0x4544b8 & 0x1);
                if (_0x4544b8 & 0x2) {
                    var _0x724ddf = _0x1d067b['hi'];
                    _0x1d067b['fj'](_0x26596f['Na']()),
                    (_0x724ddf = _0x1d067b['hi'] - _0x724ddf) > 0x0 && ooo['Xg']['Kf']['Wg']['Dh']['Ug'](_0x724ddf);
                }
                ;_0x4544b8 & 0x4 && (this['Mh']['jj'] = _0x26596f['Na']());
                var _0x43f5ef = this['gj'](_0x26596f['Ka'](), _0x26596f['Ka'](), _0x26596f['Ka']())
                  , _0x118581 = this['gj'](_0x26596f['Ka'](), _0x26596f['Ka'](), _0x26596f['Ka']());
                _0x1d067b['hj'](_0x43f5ef, _0x118581, _0x48bfdf),
                ooo['ij']['Gf'](0.5, this['Mh']['Qh']['fh'], _0x48bfdf);
                var _0x5dd9a9 = this['Ii'](_0x26596f);
                for (var _0x568492 in _0x1d067b['Nd']) {
                    var _0x1e4022 = _0x1d067b['Nd'][_0x568492];
                    _0x1e4022 && (_0x1e4022['Rd'] = ![]);
                }
                ;for (var _0x2b132d = 0x0; _0x2b132d < _0x5dd9a9; _0x2b132d++) {
                    var _0x3a86a9 = _0x26596f['Ka']()
                      , _0x5dce8e = _0x26596f['Ka']()
                      , _0xa6d850 = _0x1d067b['Nd'][_0x3a86a9];
                    !_0xa6d850 && (_0xa6d850 = new _0x21385e['Pd'](_0x3a86a9),
                    _0x1d067b['Nd'][_0x3a86a9] = _0xa6d850),
                    _0xa6d850['Rd'] = !![],
                    _0xa6d850['Xd'] = _0x5d1bbd['ha'](0x1, _0x5d1bbd['ia'](0x0, _0x5dce8e / 0x64));
                }
                ;ooo['Xg']['Kf']['Wg']['Bh']['Bg'](_0x1d067b['Nd']);
            }
            ,
            _0x5a1123['prototype']['Oi'] = function(_0x126fee) {
                var _0x2de3d0 = this
                  , _0x3a15a9 = _0x126fee['La']()
                  , _0x32e3e7 = this['aj'](_0x3a15a9)
                  , _0x149b3f = _0x126fee['Na']()
                  , _0x3b800b = this['Ii'](_0x126fee);
                if (_0x32e3e7) {
                    _0x32e3e7['fj'](_0x149b3f),
                    _0x32e3e7['kj'](function() {
                        return _0x2de3d0['gj'](_0x126fee['Ka'](), _0x126fee['Ka'](), _0x126fee['Ka']());
                    }, _0x3b800b),
                    _0x32e3e7['Td'](!![]);
                    var _0x48e79a = this['Mh']['Lh']['Oh']()
                      , _0x92cd27 = _0x32e3e7['Oh']()
                      , _0x182a1b = _0x5d1bbd['ia'](0x0, 0x1 - _0x5d1bbd['la'](_0x48e79a['_a'] - _0x92cd27['_a'], _0x48e79a['ab'] - _0x92cd27['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Ef'](_0x182a1b, _0x3a15a9);
                } else
                    for (var _0x28bb54 = 0x0; _0x28bb54 < _0x3b800b * 0x6; _0x28bb54++) {
                        _0x126fee['Ka']();
                    }
            }
            ,
            _0x5a1123['prototype']['Pi'] = function(_0x4c7b9b) {
                var _0x1dc36e = _0x4c7b9b['La']()
                  , _0x24b8a9 = this['Mh']['li'][_0x1dc36e];
                _0x24b8a9 && _0x24b8a9['bj'] && _0x24b8a9['Td'](![]),
                ooo['ij']['Ff'](_0x1dc36e);
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Ji'] = function(_0xdc9f94) {
                var _0x32055f = new _0x21385e['lj']['Ti']();
                _0x32055f['Je'] = _0xdc9f94['Ma'](),
                _0x32055f['mi'] = this['Mh']['Qh']['eh'] === _0x21385e['jd']['id'] ? _0xdc9f94['Ka']() : _0x21385e['dh']['jh'],
                _0x32055f['mj'] = this['gj'](_0xdc9f94['Ka'](), _0xdc9f94['Ka'](), _0xdc9f94['Ka']()),
                _0x32055f['ni'] = _0xdc9f94['Ka']();
                var _0x3dcdb4 = this['Mh']['nj'][_0x32055f['Je']];
                _0x3dcdb4 != null && _0x3dcdb4['$i']();
                var _0x469c29 = new _0x21385e['lj'](_0x32055f,ooo['Xg']['Kf']['Wg']);
                _0x469c29['oj'](this['pj'](_0x32055f['Je']), this['qj'](_0x32055f['Je']), !![]),
                this['Mh']['nj'][_0x32055f['Je']] = _0x469c29;
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Ki'] = function(_0x989319) {
                var _0x331a7d = _0x989319['Ma']()
                  , _0x1c2777 = this['Mh']['nj'][_0x331a7d];
                _0x1c2777 && (_0x1c2777['rj'] = 0x0,
                _0x1c2777['sj'] = _0x1c2777['sj'] * 1.5,
                _0x1c2777['tj'] = !![]);
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Li'] = function(_0x38a011) {
                var _0x25d64b = _0x38a011['Ma']()
                  , _0xd82246 = _0x38a011['La']()
                  , _0x2716aa = this['Mh']['nj'][_0x25d64b];
                if (_0x2716aa) {
                    _0x2716aa['rj'] = 0x0,
                    _0x2716aa['sj'] = _0x2716aa['sj'] * 0.1,
                    _0x2716aa['tj'] = !![];
                    var _0x3d6b6d = this['aj'](_0xd82246);
                    if (_0x3d6b6d && _0x3d6b6d['cj']) {
                        this['Mh']['Qh']['fh'];
                        var _0x41b165 = _0x3d6b6d['Oh']();
                        _0x2716aa['oj'](_0x41b165['_a'], _0x41b165['ab'], ![]);
                    }
                }
            }
            ;
            var _0x3d22ba = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            return _0x5a1123[_0x539155(0x551)]['Ci'] = function(_0x3373ad) {
                var _0x56abd7 = _0x539155
                  , _0x33dc3c = ooo['ud']['Ic']()['oc']
                  , _0x51465b = _0x33dc3c[_0x56abd7(0x166)](0x0, 0x0, 0x50, 0x50)
                  , _0x346072 = _0x3d22ba[0x0]
                  , _0x42927e = 0x50 - _0x346072
                  , _0x3f3dc2 = 0x0;
                for (var _0x556c7a = 0x0; _0x556c7a < 0x274; _0x556c7a++) {
                    var _0x5e611d = _0x3373ad['Ka']();
                    for (var _0x34baf6 = 0x0; _0x34baf6 < 0x8; _0x34baf6++) {
                        var _0x25d284 = (_0x346072 + _0x3f3dc2 * 0x50) * 0x4;
                        (_0x5e611d >> _0x34baf6 & 0x1) != 0x0 ? (_0x51465b[_0x56abd7(0x399)][_0x25d284] = 0xff,
                        _0x51465b[_0x56abd7(0x399)][_0x25d284 + 0x1] = 0xff,
                        _0x51465b[_0x56abd7(0x399)][_0x25d284 + 0x2] = 0xff,
                        _0x51465b[_0x56abd7(0x399)][_0x25d284 + 0x3] = 0xff) : _0x51465b[_0x56abd7(0x399)][_0x25d284 + 0x3] = 0x0,
                        ++_0x346072 >= _0x42927e && ++_0x3f3dc2 < 0x50 && (_0x42927e = 0x50 - (_0x346072 = _0x3d22ba[_0x3f3dc2]));
                    }
                }
                ;_0x33dc3c['putImageData'](_0x51465b, 0x0, 0x0);
                var _0x2156d8 = ooo['Xg']['Kf']['Wg']['Ah']['Yh'];
                _0x2156d8['texture'] = ooo['ud']['Ic']()['Za'],
                _0x2156d8[_0x56abd7(0x58e)][_0x56abd7(0x7b0)]();
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Ei'] = function(_0x319452) {
                _0x319452['Ma']();
            }
            ,
            _0x5a1123['prototype']['Fi'] = function(_0x505f42) {
                createCircle(),
                this['Mh']['uj']();
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Di'] = function(_0x1cd47a) {
                var _0xffa2d2 = _0x539155;
                this['Mh']['ei'] = _0x1cd47a['La'](),
                this['Mh']['oi'] = _0x1cd47a['La']();
                var _0xc0c0db = new _0x21385e['vj']();
                _0xc0c0db['ii'] = [];
                for (var _0x340a52 = _0x1cd47a['Ka'](), _0x566eb6 = 0x0; _0x566eb6 < _0x340a52; _0x566eb6++) {
                    var _0x33891e = _0x1cd47a['La']()
                      , _0x464658 = _0x1cd47a['Na']();
                    _0xc0c0db['ii'][_0xffa2d2(0x731)](_0x21385e['vj']['wj'](_0x33891e, _0x464658));
                }
                ;_0xc0c0db['fi'] = [];
                if (this['Mh']['Qh']['eh'] === _0x21385e['jd']['id'])
                    for (var _0xe78fbf = _0x1cd47a['Ka'](), _0x5d415a = 0x0; _0x5d415a < _0xe78fbf; _0x5d415a++) {
                        var _0x131945 = _0x1cd47a['Ka']()
                          , _0x506c4e = _0x1cd47a['Na']();
                        _0xc0c0db['fi'][_0xffa2d2(0x731)](_0x21385e['vj']['xj'](_0x131945, _0x506c4e));
                    }
                ;ooo['Xg']['Kf']['Wg']['Ch']['Bg'](_0xc0c0db);
            }
            ,
            _0x5a1123['prototype']['aj'] = function(_0x391b05) {
                return _0x391b05 === this['Mh']['Qh']['fh'] ? this['Mh']['Lh'] : this['Mh']['li'][_0x391b05];
            }
            ,
            _0x5a1123[_0x539155(0x551)]['gj'] = function(_0x49491b, _0x3a5361, _0x46ffe1) {
                return (((_0x46ffe1 & 0xff | _0x3a5361 << 0x8 & 0xff00 | _0x49491b << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
            }
            ,
            _0x5a1123['prototype']['pj'] = function(_0x4e5f0f) {
                return ((_0x4e5f0f & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }
            ,
            _0x5a1123[_0x539155(0x551)]['qj'] = function(_0x2d1db9) {
                return ((_0x2d1db9 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }
            ,
            _0x5a1123[_0x539155(0x551)]['Ii'] = function(_0x3d3b63) {
                var _0x1464b2 = _0x3d3b63['Ka']();
                if ((_0x1464b2 & 0x80) == 0x0)
                    return _0x1464b2;
                ;var _0x4652f1 = _0x3d3b63['Ka']();
                if ((_0x4652f1 & 0x80) == 0x0)
                    return _0x4652f1 | _0x1464b2 << 0x7 & 0x3f80;
                ;var _0x55b541 = _0x3d3b63['Ka']();
                if ((_0x55b541 & 0x80) == 0x0)
                    return _0x55b541 | _0x4652f1 << 0x7 & 0x3f80 | _0x1464b2 << 0xe & 0x1fc000;
                ;var _0x280636 = _0x3d3b63['Ka']();
                return (_0x280636 & 0x80) == 0x0 ? _0x280636 | _0x55b541 << 0x7 & 0x3f80 | _0x4652f1 << 0xe & 0x1fc000 | _0x1464b2 << 0x15 & 0xfe00000 : undefined;
            }
            ,
            _0x5a1123;
        }()),
        _0x21385e['yj'] = (function() {
            var _0x3ea387 = _0x2413a9;
            function _0x2b6fc1(_0x4871ea) {
                this['zj'] = _0x4871ea;
            }
            return _0x2b6fc1['Aj'] = function() {
                return new _0x21385e['yj'](null);
            }
            ,
            _0x2b6fc1['Bj'] = function(_0xe600ca) {
                return new _0x21385e['yj'](_0xe600ca);
            }
            ,
            _0x2b6fc1[_0x3ea387(0x551)]['Mc'] = function() {
                return this['zj'];
            }
            ,
            _0x2b6fc1[_0x3ea387(0x551)]['Cj'] = function() {
                return this['zj'] != null;
            }
            ,
            _0x2b6fc1[_0x3ea387(0x551)]['Dj'] = function(_0x1a68f8) {
                this['zj'] != null && _0x1a68f8(this['zj']);
            }
            ,
            _0x2b6fc1;
        }()),
        _0x21385e['lj'] = (function() {
            var _0x250aa2 = _0x2413a9;
            function _0x4397cf(_0x530ecf, _0x19d9b7) {
                this['ki'] = _0x530ecf,
                this['Ej'] = _0x530ecf['ni'] >= 0x50,
                this['Fj'] = 0x0,
                this['Gj'] = 0x0,
                this['Hj'] = 0x0,
                this['Ij'] = 0x0,
                this['sj'] = this['Ej'] ? 0x1 : _0x530ecf['mj'],
                this['rj'] = 0x1,
                this['tj'] = ![],
                this['Jj'] = 0x0,
                this['Kj'] = 0x0,
                this['Lj'] = 0x1,
                this['Mj'] = _0x52ace1['S'] * _0x5d1bbd['ma'](),
                this['Nj'] = new _0x21385e['Oj'](),
                this['Nj']['hd'](ooo['Mh']['Qh']['eh'], this['ki']['mi'] === _0x21385e['dh']['jh'] ? null : ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Zb'](this['ki']['ni'])),
                _0x19d9b7['Vh'](_0x530ecf['Je'], this['Nj']);
            }
            return _0x4397cf[_0x250aa2(0x551)]['$i'] = function() {
                this['Nj']['Wh']['md']['G'](),
                this['Nj']['Wh']['ld']['G']();
            }
            ,
            _0x4397cf['prototype']['oj'] = function(_0x4d68eb, _0x5645a0, _0x5c253e) {
                this['Fj'] = _0x4d68eb,
                this['Gj'] = _0x5645a0,
                _0x5c253e && (this['Hj'] = _0x4d68eb,
                this['Ij'] = _0x5645a0);
            }
            ,
            _0x4397cf['prototype']['Pj'] = function(_0x4784e9, _0x460672) {
                var _0x377e7f = _0x5d1bbd['ha'](0.5, this['sj'] * 0x1)
                  , _0x1165b6 = _0x5d1bbd['ha'](2.5, this['sj'] * 1.5);
                this['Jj'] = _0x5d1bbd['ga'](this['Jj'], _0x377e7f, _0x460672, 0.0025),
                this['Kj'] = _0x5d1bbd['ga'](this['Kj'], _0x1165b6, _0x460672, 0.0025),
                this['Lj'] = _0x5d1bbd['ga'](this['Lj'], this['rj'], _0x460672, 0.0025);
            }
            ,
            _0x4397cf[_0x250aa2(0x551)]['Qj'] = function(_0xe027e2, _0x3008b1, _0x2934d0) {
                var _0x17a480 = _0x250aa2;
                this['Hj'] = _0x5d1bbd['ga'](this['Hj'], this['Fj'], _0x3008b1, window[_0x17a480(0x275)][_0x17a480(0x55e)]),
                this['Ij'] = _0x5d1bbd['ga'](this['Ij'], this['Gj'], _0x3008b1, 0.0025),
                this['Nj']['Bg'](this, _0xe027e2, _0x3008b1, _0x2934d0);
            }
            ,
            _0x4397cf['Ti'] = function _0x460ff6() {
                this['Je'] = 0x0,
                this['mi'] = _0x21385e['dh']['jh'],
                this['mj'] = 0x0,
                this['ni'] = 0x0;
            }
            ,
            _0x4397cf;
        }()),
        _0x21385e['Oj'] = (function() {
            var _0x3e7558 = _0x2413a9;
            function _0x50607c() {
                var _0xc02720 = _0x3903;
                this['Wh'] = new _0x5b7b1b(new _0x21385e['bd'](),new _0x21385e['bd']()),
                this['Wh']['md']['gd']['blendMode'] = _0x3f9428['k']['w']['z'],
                this['Wh']['md']['gd'][_0xc02720(0x67c)] = _0x588338,
                this['Wh']['ld']['gd'][_0xc02720(0x67c)] = _0x1a08a1;
            }
            var _0x1a08a1 = 0x1f4
              , _0x588338 = 0x64;
            _0x50607c[_0x3e7558(0x551)]['hd'] = function(_0x5a1770, _0x275ac4, _0x530119) {
                var _0x94d371 = _0x530119['dc'];
                _0x94d371 != null && this['Wh']['ld']['kd'](_0x94d371);
                var _0xab4ea6 = _0x5a1770 === _0x21385e['jd']['id'] && _0x275ac4 != null ? _0x275ac4['bc']['ec'] : _0x530119['ec'];
                _0xab4ea6 != null && this['Wh']['md']['kd'](_0xab4ea6);
            }
            ,
            _0x50607c[_0x3e7558(0x551)]['Bg'] = function(_0x27151d, _0x53b299, _0x1af05f, _0x5e7b21) {
                var _0x3487e6 = _0x3e7558;
                if (!_0x5e7b21(_0x27151d['Hj'], _0x27151d['Ij'])) {
                    this['Wh']['Cd']();
                    return;
                }
                var _0x49e056 = _0x27151d['Kj'] * (0x1 + _0x5d1bbd['pa'](_0x27151d['Mj'] + _0x53b299 / 0xc8) * 0.3);
                _0x27151d['Ej'] ? this['Wh']['Ad'](_0x27151d['Hj'], _0x27151d['Ij'], window[_0x3487e6(0x275)][_0x3487e6(0x3b8)] * _0x27151d['Jj'], _0x27151d['Lj'] * 0x1, window[_0x3487e6(0x275)]['PortionAura'] * _0x49e056, window[_0x3487e6(0x275)][_0x3487e6(0x727)] * _0x27151d['Lj']) : this['Wh']['Ad'](_0x27151d['Hj'], _0x27151d['Ij'], window[_0x3487e6(0x275)][_0x3487e6(0x4a7)] * _0x27151d['Jj'], _0x27151d['Lj'] * 0x1, window[_0x3487e6(0x275)][_0x3487e6(0x7a7)] * _0x49e056, window[_0x3487e6(0x275)]['FoodTransparent'] * _0x27151d['Lj']);
            }
            ;
            var _0x5b7b1b = (function() {
                var _0x1468cd = _0x3e7558;
                function _0x109bf5(_0x5eed8d, _0x5f3c8f) {
                    this['ld'] = _0x5eed8d,
                    this['md'] = _0x5f3c8f;
                }
                return _0x109bf5[_0x1468cd(0x551)]['Ad'] = function(_0xee3001, _0xba197c, _0x851dc, _0x5101b9, _0x5031c2, _0x409390) {
                    this['ld']['Td'](!![]),
                    this['ld']['Ud'](_0xee3001, _0xba197c),
                    this['ld']['Bd'](_0x851dc),
                    this['ld']['Rj'](_0x5101b9),
                    this['md']['Td'](!![]),
                    this['md']['Ud'](_0xee3001, _0xba197c),
                    this['md']['Bd'](_0x5031c2),
                    this['md']['Rj'](_0x409390);
                }
                ,
                _0x109bf5[_0x1468cd(0x551)]['Cd'] = function() {
                    this['ld']['Td'](![]),
                    this['md']['Td'](![]);
                }
                ,
                _0x109bf5;
            }());
            return _0x50607c;
        }()),
        _0x21385e['Sj'] = (function() {
            var _0x5b7536 = _0x2413a9;
            function _0x585230() {
                this['Tj'] = 0x0,
                this['Uj'] = 0x0,
                this['Vj'] = 0x0,
                this['Wj'] = 0x0,
                this['Xj'] = 0x0,
                this['Yj'] = [];
            }
            function _0x419276(_0x1fa6df, _0x44fded) {
                var _0x525855 = _0x3903;
                for (var _0x55db36 = 0x0; _0x55db36 < _0x1fa6df[_0x525855(0x454)]; _0x55db36++) {
                    if (parseInt(_0x1fa6df[_0x55db36]['id']) === _0x44fded)
                        return _0x55db36;
                }
                ;return -0x1;
            }
            return _0x585230['prototype']['Sa'] = function() {}
            ,
            _0x585230[_0x5b7536(0x551)]['Zj'] = function(_0x313a9f) {
                var _0x5554ef = _0x5b7536;
                !_0x456264[_0x5554ef(0x2f4)] && (_0x456264['pm'] = {
                    ...this
                },
                localStorage[_0x5554ef(0x434)]('SaveGamewft', JSON['stringify'](_0x456264)));
                switch (_0x313a9f) {
                case _0x21385e['_j']['$j']:
                    return this['Tj'];
                case _0x21385e['_j']['ak']:
                    return this['Uj'];
                case _0x21385e['_j']['bk']:
                    return this['Vj'];
                case _0x21385e['_j']['ck']:
                    return this['Wj'];
                case _0x21385e['_j']['dk']:
                    return this['Xj'];
                }
                ;return 0x0;
            }
            ,
            _0x585230[_0x5b7536(0x551)]['ek'] = function() {
                return new _0x21385e['Sb'](this['Tj'],this['Uj'],this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x585230[_0x5b7536(0x551)]['fk'] = function(_0xad1c63) {
                var _0x30b80c = _0x5b7536;
                this['Yj'][_0x30b80c(0x731)](_0xad1c63),
                this['gk']();
            }
            ,
            _0x585230[_0x5b7536(0x551)]['hk'] = function() {
                var _0xd60643 = _0x5b7536;
                if (!ooo['ud']['Fc']())
                    return _0x5d1bbd['wa']([0x20, 0x21, 0x22, 0x23]);
                ;var _0x4e680c = [];
                for (var _0x68fdb7 = ooo['ud']['Gc']()[_0xd60643(0x46d)], _0x16f6d4 = 0x0; _0x16f6d4 < _0x68fdb7['length']; _0x16f6d4++) {
                    var _0x464a6f = _0x68fdb7[_0x16f6d4];
                    this['ik'](_0x464a6f['id'], _0x21385e['_j']['$j']) && _0x4e680c[_0xd60643(0x731)](_0x464a6f);
                }
                ;return _0x4e680c[_0xd60643(0x454)] === 0x0 ? 0x0 : _0x4e680c[parseInt(_0x4e680c[_0xd60643(0x454)] * _0x5d1bbd['ma']())]['id'];
            }
            ,
            _0x585230[_0x5b7536(0x551)]['jk'] = function() {
                var _0x312994 = _0x5b7536;
                if (ooo['ud']['Fc']()) {
                    var _0x4f3539 = ooo['ud']['Gc']()['skinArrayDict']
                      , _0x17d213 = _0x419276(_0x4f3539, this['Tj']);
                    if (!(_0x17d213 < 0x0)) {
                        for (var _0x13f2c9 = _0x17d213 + 0x1; _0x13f2c9 < _0x4f3539[_0x312994(0x454)]; _0x13f2c9++) {
                            if (this['ik'](_0x4f3539[_0x13f2c9]['id'], _0x21385e['_j']['$j']) && _0x4f3539[_0x13f2c9]['g'] !== !![]) {
                                this['Tj'] = _0x4f3539[_0x13f2c9]['id'],
                                this['gk']();
                                return;
                            }
                        }
                        ;for (var _0x3706d2 = 0x0; _0x3706d2 < _0x17d213; _0x3706d2++) {
                            if (this['ik'](_0x4f3539[_0x3706d2]['id'], _0x21385e['_j']['$j']) && _0x4f3539[_0x3706d2]['g'] !== !![]) {
                                this['Tj'] = _0x4f3539[_0x3706d2]['id'],
                                this['gk']();
                                return;
                            }
                        }
                    }
                }
            }
            ,
            _0x585230[_0x5b7536(0x551)]['kk'] = function() {
                var _0x5276a8 = _0x5b7536;
                if (ooo['ud']['Fc']) {
                    var _0x2ee4d0 = ooo['ud']['Gc']()[_0x5276a8(0x46d)]
                      , _0x5e8820 = _0x419276(_0x2ee4d0, this['Tj']);
                    if (!(_0x5e8820 < 0x0)) {
                        for (var _0x5e3152 = _0x5e8820 - 0x1; _0x5e3152 >= 0x0; _0x5e3152--) {
                            if (this['ik'](_0x2ee4d0[_0x5e3152]['id'], _0x21385e['_j']['$j']) && _0x2ee4d0[_0x5e3152]['g'] !== !![]) {
                                this['Tj'] = _0x2ee4d0[_0x5e3152]['id'],
                                this['gk']();
                                return;
                            }
                        }
                        ;for (var _0x22cfd0 = _0x2ee4d0[_0x5276a8(0x454)] - 0x1; _0x22cfd0 > _0x5e8820; _0x22cfd0--) {
                            if (this['ik'](_0x2ee4d0[_0x22cfd0]['id'], _0x21385e['_j']['$j']) && _0x2ee4d0[_0x22cfd0]['g'] !== !![]) {
                                this['Tj'] = _0x2ee4d0[_0x22cfd0]['id'],
                                this['gk']();
                                return;
                            }
                        }
                    }
                }
            }
            ,
            _0x585230['prototype']['lk'] = function(_0x1db878, _0x5b63a7) {
                if (!ooo['ud']['Fc']() || this['ik'](_0x1db878, _0x5b63a7))
                    switch (_0x5b63a7) {
                    case _0x21385e['_j']['$j']:
                        this['Tj'] !== _0x1db878 && (this['Tj'] = _0x1db878,
                        this['gk']());
                        return;
                    case _0x21385e['_j']['ak']:
                        this['Uj'] !== _0x1db878 && (this['Uj'] = _0x1db878,
                        this['gk']());
                        return;
                    case _0x21385e['_j']['bk']:
                        this['Vj'] !== _0x1db878 && (this['Vj'] = _0x1db878,
                        this['gk']());
                        return;
                    case _0x21385e['_j']['ck']:
                        this['Wj'] !== _0x1db878 && (this['Wj'] = _0x1db878,
                        this['gk']());
                        return;
                    case _0x21385e['_j']['dk']:
                        this['Xj'] !== _0x1db878 && (this['Xj'] = _0x1db878,
                        this['gk']());
                        return;
                    }
            }
            ,
            _0x585230[_0x5b7536(0x551)]['ik'] = function(_0x371c30, _0xa35505) {
                var _0x25f679 = this['mk'](_0x371c30, _0xa35505);
                return _0x25f679 != null && (ooo['ok']['nk']() ? _0x25f679['pk']() === 0x0 && !_0x25f679['qk']() || ooo['ok']['rk'](_0x371c30, _0xa35505) : _0x25f679['sk']());
            }
            ,
            _0x585230[_0x5b7536(0x551)]['mk'] = function(_0x5d8bf5, _0xa44010) {
                var _0x531992 = _0x5b7536;
                if (!ooo['ud']['Fc']())
                    return null;
                ;var _0x4790bf = ooo['ud']['Gc']();
                if (_0xa44010 === _0x21385e['_j']['$j']) {
                    var _0x368051 = _0x419276(_0x4790bf[_0x531992(0x46d)], _0x5d8bf5);
                    return _0x368051 < 0x0 ? null : _0x21385e['uk']['tk'](_0x4790bf['skinArrayDict'][_0x368051]);
                }
                ;var _0x3ae1a7 = null;
                switch (_0xa44010) {
                case _0x21385e['_j']['ak']:
                    _0x3ae1a7 = _0x4790bf[_0x531992(0x1f2)][_0x5d8bf5];
                    break;
                case _0x21385e['_j']['bk']:
                    _0x3ae1a7 = _0x4790bf[_0x531992(0x345)][_0x5d8bf5];
                    break;
                case _0x21385e['_j']['ck']:
                    _0x3ae1a7 = _0x4790bf['hatDict'][_0x5d8bf5];
                    break;
                case _0x21385e['_j']['dk']:
                    _0x3ae1a7 = _0x4790bf[_0x531992(0x4c2)][_0x5d8bf5];
                }
                ;return _0x3ae1a7 != null ? _0x21385e['uk']['vk'](_0x3ae1a7) : null;
            }
            ,
            _0x585230[_0x5b7536(0x551)]['gk'] = function() {
                for (var _0x1ec6fe = 0x0; _0x1ec6fe < this['Yj']['length']; _0x1ec6fe++) {
                    this['Yj'][_0x1ec6fe]();
                }
            }
            ,
            _0x585230;
        }()),
        _0x21385e['_j'] = (function() {
            var _0xe76d14 = _0x2413a9;
            function _0x909899() {}
            return _0x909899['$j'] = 'SKIN',
            _0x909899['ak'] = _0xe76d14(0x272),
            _0x909899['bk'] = 'MOUTH',
            _0x909899['dk'] = _0xe76d14(0x320),
            _0x909899['ck'] = _0xe76d14(0x614),
            _0x909899;
        }()),
        _0x21385e['wk'] = (function() {
            var _0x59bdc4 = _0x2413a9;
            function _0x257c4c() {
                var _0x44677c = _0x3903;
                this['fn_o'] = _0x5e8dda,
                this['ig'] = new _0x3f9428['k']['n'](_0x3f9428['k']['m'][_0x44677c(0x717)]('/images/bg-obstacle.png')),
                this[_0x44677c(0x6ed)] = new _0x3f9428['k']['n'](_0x5e8dda());
                var _0xd6f95b, _0x7eeaf7, _0x5b224e, _0x325ca1, _0x456772 = _0x3f9428['k']['m'][_0x44677c(0x717)](_0x44677c(0x64b) || _0x52ace1['H']['N']), _0x4975a2 = new _0x3f9428['k']['n'](_0x456772,new _0x3f9428['k']['r'](0x0,0x0,0x100,0x100)), _0x451d2e = new _0x3f9428['k']['n'](_0x456772,new _0x3f9428['k']['r'](0x160,0x60,0x40,0x40));
                this['jg'] = Array(0x10);
                for (var _0x18f5d6 = 0x0; _0x18f5d6 < this['jg'][_0x44677c(0x454)]; _0x18f5d6++) {
                    this['jg'][_0x18f5d6] = _0x18f5d6 % 0x2 == 0x0 ? _0x4975a2 : _0x451d2e;
                }
                ;this['Ih'] = new _0x3f9428['k']['n'](((_0xd6f95b = _0x3f9428['k']['m'][_0x44677c(0x717)]('/images/bg-pattern-pow2-ARENA.png'))[_0x44677c(0x6c8)] = _0x3f9428['k']['C']['D'],
                _0xd6f95b)),
                this['Jh'] = new _0x3f9428['k']['n'](((_0x7eeaf7 = _0x3f9428['k']['m'][_0x44677c(0x717)](_0x44677c(0x507)))['wrapMode'] = _0x3f9428['k']['C']['D'],
                _0x7eeaf7)),
                this['Gh'] = new _0x3f9428['k']['n'](_0x3f9428['k']['m'][_0x44677c(0x717)](_0x44677c(0x14d))),
                this['$f'] = new _0x3f9428['k']['n'](((_0x5b224e = _0x3f9428['k']['m']['from'](_0x52ace1['H']['O']))[_0x44677c(0x6c8)] = _0x3f9428['k']['C']['D'],
                _0x5b224e)),
                this['mc'] = ((_0x325ca1 = _0x21385e['d'][_0x44677c(0x5d0)]('canvas'))[_0x44677c(0x598)] = 0x50,
                _0x325ca1[_0x44677c(0x122)] = 0x50,
                {
                    'nc': _0x325ca1,
                    'oc': _0x325ca1['getContext']('2d'),
                    'Za': new _0x3f9428['k']['n'](_0x3f9428['k']['m'][_0x44677c(0x717)](_0x325ca1))
                }),
                this['hf'] = {},
                this['df'] = {},
                this['xk'] = [],
                this['yk'] = null;
            }
            function _0x5e8dda(_0x5c92c8) {
                var _0x234ed9 = _0x3903;
                return (_0x5c92c8 = _0x3f9428['k']['m'][_0x234ed9(0x717)](_0x5c92c8 || _0x456264[_0x234ed9(0x2d0)] || _0x234ed9(0x79f)))[_0x234ed9(0x6c8)] = _0x3f9428['k']['C']['D'],
                _0x5c92c8;
            }
            return _0x257c4c[_0x59bdc4(0x551)]['Sa'] = function(_0x389a45) {
                function _0x272a5e() {
                    --_0x3dac39 == 0x0 && _0x389a45();
                }
                var _0x3dac39 = 0x4;
                this['hf'] = {},
                _0x272a5e(),
                this['df'] = {},
                _0x272a5e(),
                this['xk'] = [],
                _0x272a5e(),
                this['yk'] = null,
                _0x272a5e();
            }
            ,
            _0x257c4c;
        }()),
        _0x21385e['zk'] = (function() {
            var _0x29af1d = _0x2413a9;
            function _0x1182ff() {
                this['Ak'] = null,
                this['Kf'] = new _0x21385e['Bk'](),
                this['Jf'] = new _0x21385e['Ck'](),
                this['Dk'] = new _0x21385e['Ek'](),
                this['Fk'] = new _0x21385e['Gk'](),
                this['Hk'] = new _0x21385e['Ik'](),
                this['Jk'] = new _0x21385e['Kk'](),
                this['Lk'] = new _0x21385e['Mk'](),
                this['Nk'] = new _0x21385e['Ok'](),
                this['Hi'] = new _0x21385e['Pk'](),
                this['Qk'] = new _0x21385e['Rk'](),
                this['Sk'] = new _0x21385e['Tk'](),
                this['Uk'] = new _0x21385e['Vk'](),
                this['Wk'] = new _0x21385e['Xk'](),
                this['Yk'] = new _0x21385e['Zk'](),
                this['Re'] = new _0x21385e['$k'](),
                this['_k'] = new _0x21385e['al'](),
                this['bl'] = new _0x21385e['cl'](),
                this['dl'] = new _0x21385e['el'](),
                this['fl'] = [];
            }
            function _0x1ce6a7(_0x18cba5, _0x344016) {
                var _0x266ffe = _0x3903;
                if (_0x344016 !== _0x18cba5[_0x266ffe(0x454)] + 0x1) {
                    var _0x735f8f = _0x18cba5[_0x344016];
                    _0x5d1bbd['ua'](_0x18cba5, _0x344016 + 0x1, _0x344016, _0x18cba5[_0x266ffe(0x454)] - _0x344016 - 0x1),
                    _0x18cba5[_0x18cba5['length'] - 0x1] = _0x735f8f;
                }
            }
            return _0x1182ff[_0x29af1d(0x551)]['Sa'] = function() {
                var _0x406e70 = _0x29af1d;
                this['Ak'] = new _0x21385e['Nf'](_0x21385e['Uf']['Tf']),
                this['fl'] = [this['Kf'], this['Jf'], this['Dk'], this['Fk'], this['Hk'], this['Jk'], this['Lk'], this['Nk'], this['Hi'], this['Qk'], this['Sk'], this['Uk'], this['Wk'], this['Yk'], this['Re'], this['_k'], this['bl'], this['dl']];
                for (var _0x50391c = 0x0; _0x50391c < this['fl'][_0x406e70(0x454)]; _0x50391c++) {
                    this['fl'][_0x50391c]['Sa']();
                }
            }
            ,
            _0x1182ff[_0x29af1d(0x551)]['Uh'] = function(_0x2d73ad, _0x3b7197) {
                var _0x30e3bf = _0x29af1d;
                for (var _0x32f5b0 = this['fl'][_0x30e3bf(0x454)] - 0x1; _0x32f5b0 >= 0x0; _0x32f5b0--) {
                    this['fl'][_0x32f5b0]['ug'](_0x2d73ad, _0x3b7197);
                }
                ;this['fl'][0x0] !== this['Kf'] && this['fl'][0x0] !== this['dl'] && this['Ak'] != null && this['Ak']['ug'](_0x2d73ad, _0x3b7197);
            }
            ,
            _0x1182ff[_0x29af1d(0x551)]['qg'] = function() {
                for (var _0x506489 = this['fl']['length'] - 0x1; _0x506489 >= 0x0; _0x506489--) {
                    this['fl'][_0x506489]['qg']();
                }
                ;this['Ak'] != null && this['Ak']['qg']();
            }
            ,
            _0x1182ff[_0x29af1d(0x551)]['gl'] = function(_0xe0f1b1) {
                var _0xce69be = function _0x2f4b5a(_0x1ac6d5, _0x1c5bd9) {
                    var _0x1cdfaf = _0x3903;
                    for (var _0x1a4435 = 0x0; _0x1a4435 < _0x1ac6d5[_0x1cdfaf(0x454)]; _0x1a4435++) {
                        if (_0x1ac6d5[_0x1a4435] === _0x1c5bd9)
                            return _0x1a4435;
                    }
                    ;return -0x1;
                }(this['fl'], _0xe0f1b1);
                !(_0xce69be < 0x0) && (this['fl'][0x0]['hl'](),
                function _0x26f742(_0x5e1093, _0x32a43b) {
                    if (_0x32a43b !== 0x0) {
                        var _0x57410e = _0x5e1093[_0x32a43b];
                        _0x5d1bbd['ua'](_0x5e1093, 0x0, 0x1, _0x32a43b),
                        _0x5e1093[0x0] = _0x57410e;
                    }
                }(this['fl'], _0xce69be),
                this['il']());
            }
            ,
            _0x1182ff['prototype']['jl'] = function() {
                this['fl'][0x0]['hl']();
                do {
                    _0x1ce6a7(this['fl'], 0x0);
                } while (this['fl'][0x0]['Wd'] !== _0x21385e['ll']['kl']);
                ;this['il']();
            }
            ,
            _0x1182ff[_0x29af1d(0x551)]['il'] = function() {
                var _0x10d4f7 = this['fl'][0x0];
                _0x10d4f7['ml'](),
                _0x10d4f7['nl'](),
                this['ol']();
            }
            ,
            _0x1182ff[_0x29af1d(0x551)]['pl'] = function() {
                var _0xf9607 = _0x29af1d;
                return this['fl'][_0xf9607(0x454)] !== 0x0 && this['fl'][0x0]['Wd'] === _0x21385e['ll']['kl'] && this['Yk']['ql']();
            }
            ,
            _0x1182ff['prototype']['rl'] = function() {
                var _0x91e43 = _0x29af1d;
                return this['fl'][_0x91e43(0x454)] === 0x0 ? null : this['fl'][0x0];
            }
            ,
            _0x1182ff[_0x29af1d(0x551)]['ol'] = function() {
                this['pl']() && this['gl'](this['Yk']);
            }
            ,
            _0x1182ff;
        }()),
        _0x21385e['vj'] = (function() {
            function _0xd40053() {
                this['ii'] = [],
                this['fi'] = [];
            }
            return _0xd40053['wj'] = function(_0x360cc2, _0x2bf015) {
                return {
                    'ji': _0x360cc2,
                    'hi': _0x2bf015
                };
            }
            ,
            _0xd40053['xj'] = function(_0x46fd1f, _0x6d2b50) {
                return {
                    'gi': _0x46fd1f,
                    'hi': _0x6d2b50
                };
            }
            ,
            _0xd40053;
        }()),
        _0x21385e['sl'] = (function() {
            var _0x1a1417 = _0x2413a9;
            function _0x47422d() {
                this['tl'] = [],
                this['ul'] = [],
                this['vl'] = ![],
                this['wl'] = _0x3a19f7,
                this['xl'] = {};
            }
            var _0x3a19f7 = _0x1a1417(0x43b)
              , _0x4df4f1 = 'guest'
              , _0x4f0677 = 'fb'
              , _0x370026 = 'gg';
            return _0x47422d['yl'] = new (function() {
                var _0x1b7c02 = _0x1a1417;
                function _0x4845cb() {}
                return _0x4845cb['zl'] = function _0x375465(_0x48ebb4) {
                    this['Al'] = _0x48ebb4;
                }
                ,
                _0x4845cb[_0x1b7c02(0x551)]['Bl'] = function() {
                    var _0x58147a = _0x1b7c02;
                    return (typeof FB == _0x58147a(0x111) ? _0x58147a(0x111) : _typeof(FB)) != _0x58147a(0x111);
                }
                ,
                _0x4845cb[_0x1b7c02(0x551)]['Cl'] = function(_0x24785e, _0x4b5a7e, _0x5b1111) {
                    var _0x3f6c78 = _0x1b7c02
                      , _0x331584 = _0x3f6c78(0x2fe) + _0x24785e;
                    $[_0x3f6c78(0x3e4)](_0x331584)[_0x3f6c78(0x195)](function() {
                        _0x4b5a7e();
                    })[_0x3f6c78(0x767)](function() {
                        _0x5b1111();
                    });
                }
                ,
                _0x4845cb[_0x1b7c02(0x551)]['Dl'] = function(_0x3a6204, _0x259729) {
                    if (!this['Bl']()) {
                        _0x3a6204();
                        return;
                    }
                    ;this['El'](function() {
                        var _0x5c9155 = _0x3903;
                        FB[_0x5c9155(0x340)](function(_0x2cac74) {
                            var _0x375e44 = _0x5c9155;
                            if (_0x2cac74[_0x375e44(0x135)] !== _0x375e44(0x19e)) {
                                _0x3a6204();
                                return;
                            }
                            ;var _0x173c14 = _0x2cac74[_0x375e44(0x794)][_0x375e44(0x3e2)];
                            _0x259729(new _0x4845cb['zl'](_0x173c14));
                        });
                    }, function(_0x383af1) {
                        _0x259729(_0x383af1);
                    });
                }
                ,
                _0x4845cb['prototype']['El'] = function(_0x451863, _0x549103) {
                    var _0x57ce01 = _0x1b7c02
                      , _0x33d842 = this;
                    if (!this['Bl']()) {
                        _0x451863();
                        return;
                    }
                    ;FB[_0x57ce01(0x4e2)](function(_0x314f0e) {
                        var _0x2343d5 = _0x57ce01;
                        if (_0x314f0e[_0x2343d5(0x135)] !== _0x2343d5(0x19e)) {
                            _0x451863();
                            return;
                        }
                        ;var _0x34c88e = _0x314f0e[_0x2343d5(0x794)][_0x2343d5(0x3e2)];
                        _0x33d842['Cl'](_0x34c88e, function() {
                            _0x451863();
                        }, function() {
                            _0x549103(new _0x4845cb['zl'](_0x34c88e));
                        });
                    });
                }
                ,
                _0x4845cb[_0x1b7c02(0x551)]['Fl'] = function() {
                    var _0x4058e0 = _0x1b7c02;
                    this['Bl']() && FB[_0x4058e0(0x366)]();
                }
                ,
                _0x4845cb;
            }())(),
            _0x47422d['Gl'] = new (function() {
                var _0x44c51c = _0x1a1417;
                function _0x34fb7f() {}
                return _0x34fb7f['Hl'] = function _0x164ab8(_0x3a6500, _0xf4a1b8) {
                    this['Al'] = _0x3a6500,
                    this['Il'] = _0xf4a1b8;
                }
                ,
                _0x34fb7f[_0x44c51c(0x551)]['Bl'] = function() {
                    var _0x372e8a = _0x44c51c;
                    return _typeof(GoogleAuth) != _0x372e8a(0x111);
                }
                ,
                _0x34fb7f['prototype']['Dl'] = function(_0x2051dc, _0x139c48) {
                    var _0x3767b9 = _0x44c51c;
                    if (_typeof(GoogleAuth) == _0x3767b9(0x111)) {
                        _0x2051dc();
                        return;
                    }
                    ;GoogleAuth[_0x3767b9(0x268)](function() {
                        var _0x2569c8 = _0x3767b9;
                        if (GoogleAuth[_0x2569c8(0x70a)][_0x2569c8(0x3e4)]()) {
                            var _0x279767 = GoogleAuth[_0x2569c8(0x132)][_0x2569c8(0x3e4)]()
                              , _0x4d3948 = _0x279767[_0x2569c8(0x60f)]()[_0x2569c8(0x19c)]
                              , _0x4af34a = new Date()[_0x2569c8(0x4d7)]() + _0x279767[_0x2569c8(0x60f)]()[_0x2569c8(0x4fb)] * 0x3e8;
                            if (new Date()[_0x2569c8(0x4d7)]() < _0x4af34a) {
                                _0x139c48(new _0x34fb7f['Hl'](_0x4d3948,_0x4af34a));
                                return;
                            }
                        }
                        ;GoogleAuth[_0x2569c8(0x71e)]()['then'](function(_0x15f202) {
                            var _0x421574 = _0x2569c8;
                            if (_typeof(_0x15f202['error']) !== _0x421574(0x111) || !_0x15f202['isSignedIn']()) {
                                _0x2051dc();
                                return;
                            }
                            ;var _0x252c48 = _0x15f202[_0x421574(0x60f)]()[_0x421574(0x19c)]
                              , _0x49b314 = new Date()[_0x421574(0x4d7)]() + _0x15f202['getAuthResponse']()[_0x421574(0x4fb)] * 0x3e8;
                            _0x139c48(new _0x34fb7f['Hl'](_0x252c48,_0x49b314));
                        });
                    });
                }
                ,
                _0x34fb7f[_0x44c51c(0x551)]['El'] = function(_0x1d868a, _0x4cddbc) {
                    var _0x3a3658 = _0x44c51c;
                    if (_typeof(GoogleAuth) == _0x3a3658(0x111)) {
                        _0x1d868a();
                        return;
                    }
                    ;GoogleAuth['then'](function() {
                        var _0x1cca9f = _0x3a3658;
                        if (GoogleAuth[_0x1cca9f(0x70a)][_0x1cca9f(0x3e4)]()) {
                            var _0x1366b4 = GoogleAuth['currentUser'][_0x1cca9f(0x3e4)]()
                              , _0x218afc = _0x1366b4['getAuthResponse']()[_0x1cca9f(0x19c)]
                              , _0x4fa3e1 = new Date()[_0x1cca9f(0x4d7)]() + _0x1366b4[_0x1cca9f(0x60f)]()[_0x1cca9f(0x4fb)] * 0x3e8;
                            if (new Date()['getTime']() < _0x4fa3e1) {
                                _0x4cddbc(new _0x34fb7f['Hl'](_0x218afc,_0x4fa3e1));
                                return;
                            }
                        }
                        ;_0x1d868a();
                    });
                }
                ,
                _0x34fb7f['prototype']['Fl'] = function() {
                    var _0x1a98f9 = _0x44c51c;
                    _typeof(GoogleAuth) != _0x1a98f9(0x111) && GoogleAuth[_0x1a98f9(0x2dc)]();
                }
                ,
                _0x34fb7f;
            }())(),
            _0x47422d[_0x1a1417(0x551)]['Sa'] = function() {
                this['Jl']();
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Kl'] = function() {
                return this['vl'] ? this['xl']['userId'] : '';
            }
            ,
            _0x47422d['prototype']['Ll'] = function() {
                var _0x3fa02e = _0x1a1417;
                return this['vl'] ? this['xl'][_0x3fa02e(0x18f)] : '';
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Ml'] = function() {
                return this['vl'] ? this['xl']['nickname'] : '';
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Nl'] = function() {
                var _0x2e7a31 = _0x1a1417;
                return this['vl'] ? this['xl'][_0x2e7a31(0x24c)] : _0x52ace1['H']['M'];
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Ol'] = function() {
                var _0x207ea8 = _0x1a1417;
                return this['vl'] && this['xl'][_0x207ea8(0x2c3)];
            }
            ,
            _0x47422d['prototype']['Pl'] = function() {
                var _0x359543 = _0x1a1417;
                return this['vl'] && this['xl'][_0x359543(0x285)];
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Ql'] = function() {
                return this['vl'] ? this['xl']['coins'] : 0x0;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Rl'] = function() {
                var _0x22fb5a = _0x1a1417;
                return this['vl'] ? this['xl'][_0x22fb5a(0x455)] : 0x1;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Sl'] = function() {
                var _0x4f72ab = _0x1a1417;
                return this['vl'] ? this['xl'][_0x4f72ab(0x5b3)] : 0x0;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Tl'] = function() {
                var _0x47550a = _0x1a1417;
                return this['vl'] ? this['xl'][_0x47550a(0x2df)] : 0x32;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Ul'] = function() {
                return this['vl'] ? this['xl']['skinId'] : 0x0;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Vl'] = function() {
                var _0x2af7e2 = _0x1a1417;
                return this['vl'] ? this['xl'][_0x2af7e2(0x7cf)] : 0x0;
            }
            ,
            _0x47422d['prototype']['Wl'] = function() {
                return this['vl'] ? this['xl']['mouthId'] : 0x0;
            }
            ,
            _0x47422d['prototype']['Xl'] = function() {
                var _0xac95e6 = _0x1a1417;
                return this['vl'] ? this['xl'][_0xac95e6(0x5e9)] : 0x0;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Yl'] = function() {
                var _0x10b727 = _0x1a1417;
                return this['vl'] ? this['xl'][_0x10b727(0x4a6)] : 0x0;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Zl'] = function() {
                var _0x17f67d = _0x1a1417;
                return this['vl'] ? this['xl'][_0x17f67d(0x6d8)] : 0x0;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['$l'] = function() {
                var _0x91710 = _0x1a1417;
                return this['vl'] ? this['xl'][_0x91710(0x3bf)] : 0x0;
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['_l'] = function() {
                return this['vl'] ? this['xl']['kills'] : 0x0;
            }
            ,
            _0x47422d['prototype']['am'] = function() {
                var _0x178315 = _0x1a1417;
                return this['vl'] ? this['xl'][_0x178315(0x1d6)] : 0x0;
            }
            ,
            _0x47422d['prototype']['bm'] = function() {
                var _0x50296a = _0x1a1417;
                return this['vl'] ? this['xl'][_0x50296a(0x283)] : 0x0;
            }
            ,
            _0x47422d['prototype']['cm'] = function() {
                var _0x1a7c0c = _0x1a1417;
                return this['vl'] ? this['xl'][_0x1a7c0c(0x766)] : 0x0;
            }
            ,
            _0x47422d['prototype']['dm'] = function() {
                var _0x55feab = _0x1a1417;
                return this['vl'] ? this['xl'][_0x55feab(0x26b)] : {};
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['em'] = function(_0x55766e) {
                var _0xa4c0d7 = _0x1a1417;
                this['tl'][_0xa4c0d7(0x731)](_0x55766e),
                _0x55766e();
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['fm'] = function(_0x502199) {
                var _0xa29a54 = _0x1a1417;
                this['ul'][_0xa29a54(0x731)](_0x502199),
                _0x502199();
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['rk'] = function(_0x204ed4, _0x308f96) {
                var _0x5ab18e = _0x1a1417
                  , _0x5a785e = this['xl'][_0x5ab18e(0x234)][_0x5ab18e(0x206)](_0x456264['pL'] || []);
                if (_0x5a785e == null)
                    return ![];
                ;for (_0x4df4f1 = 0x0; _0x4df4f1 < _0x5a785e[_0x5ab18e(0x454)]; _0x4df4f1++) {
                    var _0x557657 = _0x5a785e[_0x4df4f1];
                    if (_0x557657['id'] == _0x204ed4 && _0x557657['type'] === _0x308f96)
                        return !![];
                }
                ;return ![];
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['nk'] = function() {
                return this['vl'];
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['gm'] = function() {
                return this['wl'];
            }
            ,
            _0x47422d['prototype']['hm'] = function(_0x417e44) {
                var _0x1690e5 = this
                  , _0x478ada = this['Kl']()
                  , _0x51ea47 = this['Ql']()
                  , _0x3527e1 = this['Rl']();
                this['im'](function() {
                    _0x417e44 != null && _0x417e44();
                }, function(_0x5a80c9) {
                    var _0x546fe7 = _0x3903;
                    _0x1690e5['xl'] = _0x5a80c9[_0x546fe7(0x773)],
                    _0x1690e5['jm']();
                    var _0x211ca2 = _0x1690e5['Kl']()
                      , _0x50364b = _0x1690e5['Ql']()
                      , _0x1d73b2 = _0x1690e5['Rl']();
                    if (_0x478ada === _0x211ca2) {
                        _0x1d73b2 > 0x1 && _0x1d73b2 !== _0x3527e1 && ooo['Xg']['Yk']['km'](new _0x21385e['lm'](_0x1d73b2));
                        var _0x23304f = _0x50364b - _0x51ea47;
                        _0x23304f >= 0x14 && ooo['Xg']['Yk']['km'](new _0x21385e['mm'](_0x23304f));
                    }
                    ;_0x417e44 != null && _0x417e44();
                });
            }
            ,
            _0x47422d['prototype']['im'] = function(_0x609d19, _0x28a046) {
                var _0x2f22bb = _0x1a1417
                  , _0xe5b974 = _0x52ace1['H']['J'] + '/pub/wuid/' + this['wl'] + _0x2f22bb(0x303);
                _0x5d1bbd['Aa'](_0xe5b974, _0x609d19, function(_0x416f41) {
                    var _0x57b538 = _0x2f22bb;
                    _0x416f41[_0x57b538(0x607)] !== 0x4b0 ? _0x609d19() : _0x28a046(_0x416f41);
                });
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['nm'] = function(_0xa1af40, _0x406a0d, _0x256f36, _0x3734c6) {
                var _0x494c3a = _0x1a1417
                  , _0x148ee4 = _0x52ace1['H']['J'] + '/pub/wuid/' + this['wl'] + _0x494c3a(0x172) + _0xa1af40 + _0x494c3a(0x30d) + _0x406a0d;
                _0x5d1bbd['Aa'](_0x148ee4, function() {
                    _0x256f36();
                }, function(_0x5026b6) {
                    var _0xe241 = _0x494c3a;
                    _0x5026b6[_0xe241(0x607)] !== 0x4b0 ? _0x256f36() : _0x3734c6();
                });
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['om'] = function(_0x3d5312, _0x12199e) {
                var _0x9759d3 = _0x52ace1['H']['J'] + '/pub/wuid/' + this['wl'] + '/deleteAccount';
                _0x5d1bbd['Aa'](_0x9759d3, _0x3d5312, function(_0x2dd855) {
                    var _0xfcf715 = _0x3903;
                    _0x2dd855[_0xfcf715(0x607)] !== 0x4b0 ? _0x3d5312() : _0x12199e();
                });
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['pm'] = function(_0x22151a) {
                var _0x42ac99 = this;
                this['vl'] && this['qm'](),
                _0x47422d['yl']['Dl'](function() {
                    _0x22151a();
                }, function(_0x5b25c7) {
                    _0x42ac99['rm'](_0x4f0677, _0x5b25c7['Al'], _0x22151a);
                });
            }
            ,
            _0x47422d['prototype']['sm'] = function(_0x1c112d) {
                var _0x4091e4 = this;
                this['vl'] && this['qm'](),
                _0x47422d['Gl']['Dl'](function() {
                    _0x1c112d();
                }, function(_0x15928b) {
                    _0x4091e4['rm'](_0x370026, _0x15928b['Al'], _0x1c112d);
                });
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['rm'] = function(_0x542fc2, _0x24c967, _0x3bab14) {
                var _0x372b38 = _0x1a1417
                  , _0x3f52d1 = this
                  , _0x1569ed = _0x542fc2 + '_' + _0x24c967
                  , _0x7699d5 = _0x52ace1['H']['J'] + _0x372b38(0x218) + _0x1569ed + _0x372b38(0x6d5);
                _0x5d1bbd['Aa'](_0x7699d5, function() {
                    _0x3f52d1['tm']();
                }, function(_0x1fb00b) {
                    var _0x34b3a6 = _0x372b38;
                    _0x1fb00b[_0x34b3a6(0x607)] !== 0x4b0 ? _0x3f52d1['tm']() : (_0x3f52d1['um'](_0x542fc2, _0x24c967, _0x1fb00b['user_data']),
                    _0x3bab14 != null && _0x3bab14());
                });
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['qm'] = function() {
                try {
                    this['vm'](),
                    this['wm']();
                } catch (_0x23a98e) {}
                ;this['xm']();
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['ym'] = function() {
                this['vl'] && this['om'](function() {}, function() {});
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['tm'] = function() {
                ooo['Xg']['gl'](ooo['Xg']['_k']);
            }
            ,
            _0x47422d['prototype']['um'] = function(_0x5ab68c, _0x96ba71, _0x57b6f8) {
                var _0x5ea640 = this;
                _0x13b572(_0x57b6f8, function(_0x1adc3d) {
                    var _0x2aeb09 = _0x3903
                      , _0x8b731c = _0x5ea640['vl'] ? _0x5ea640['xl']['userId'] : _0x1adc3d;
                    _0x5ea640['vl'] = !![],
                    _0x5ea640['wl'] = _0x5ab68c + '_' + _0x96ba71,
                    _0x5ea640['xl'] = _0x1adc3d,
                    _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Hg'], _0x5ab68c, 0x3c),
                    _0x8b731c !== _0x5ea640['xl']['userId'] ? _0x5ea640['zm']() : _0x5ea640['jm'](),
                    ooo['Xp'](!![], !![]),
                    _0x456264[_0x2aeb09(0x2f4)] = ![];
                });
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['xm'] = function() {
                var _0x26ea01 = _0x1a1417
                  , _0x183a81 = this['vl'] ? this['xl'][_0x26ea01(0x6a6)] : _0x4df4f1;
                this['vl'] = ![],
                this['wl'] = _0x3a19f7,
                this['xl'] = {},
                _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Hg'], '', 0x3c),
                _0x183a81 !== this['xl'][_0x26ea01(0x6a6)] ? this['zm']() : this['jm']();
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['Jl'] = function() {
                var _0x4ce875 = _0x21385e['Cg']['Og'](_0x21385e['Cg']['Hg'])
                  , _0x55e712 = this;
                if (_0x4f0677 === _0x4ce875) {
                    var _0x1ec011 = 0x1;
                    (function _0x547ee4() {
                        if (!_0x47422d['yl']['Bl']() && _0x1ec011++ < 0x5) {
                            _0x5d1bbd['Y'](_0x547ee4, 0x3e8);
                            return;
                        }
                        ;_0x47422d['yl']['El'](function() {}, function(_0x37d035) {
                            _0x55e712['rm'](_0x4f0677, _0x37d035['Al']);
                        });
                    }());
                } else {
                    if (_0x370026 === _0x4ce875) {
                        var _0x34809d = 0x1;
                        (function _0x4b4d04() {
                            if (!_0x47422d['Gl']['Bl']() && _0x34809d++ < 0x5) {
                                _0x5d1bbd['Y'](_0x4b4d04, 0x3e8);
                                return;
                            }
                            ;_0x47422d['Gl']['El'](function() {}, function(_0x593c89) {
                                _0x55e712['rm'](_0x370026, _0x593c89['Al']);
                            });
                        }());
                    }
                }
            }
            ,
            _0x47422d['prototype']['zm'] = function() {
                var _0x458302 = _0x1a1417;
                for (var _0x3ca5ba = 0x0; _0x3ca5ba < this['tl'][_0x458302(0x454)]; _0x3ca5ba++) {
                    this['tl'][_0x3ca5ba]();
                }
                ;this['jm']();
            }
            ,
            _0x47422d['prototype']['jm'] = function() {
                var _0x507731 = _0x1a1417;
                for (var _0x34f076 = 0x0; _0x34f076 < this['ul'][_0x507731(0x454)]; _0x34f076++) {
                    this['ul'][_0x34f076]();
                }
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['vm'] = function() {
                _0x47422d['yl']['Fl']();
            }
            ,
            _0x47422d[_0x1a1417(0x551)]['wm'] = function() {
                _0x47422d['Gl']['Fl']();
            }
            ,
            _0x47422d;
        }()),
        _0x21385e['Sf'] = (function() {
            var _0x7f5022 = _0x2413a9;
            function _0x2b6821(_0x4ad3f3, _0x20db0a, _0x39bd0e) {
                var _0xfd0a7e = _0x3903;
                this['Of'] = _0x39bd0e,
                this['Rd'] = ![],
                this['Yc'] = new _0x3f9428['k']['l'](),
                this['Yc'][_0xfd0a7e(0x712)] = ![],
                this['Am'] = Array(_0x4ad3f3);
                for (var _0x1d708a = 0x0; _0x1d708a < this['Am'][_0xfd0a7e(0x454)]; _0x1d708a++) {
                    var _0x31e8c7 = new _0x21385e['Bm'](new _0x3f9428['j'](_0x20db0a * 0x3));
                    _0x31e8c7['Cm'](_0x20db0a),
                    this['Am'][_0x1d708a] = _0x31e8c7,
                    this['Yc'][_0xfd0a7e(0x448)](_0x31e8c7['ag']());
                }
                ;this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['qg']();
            }
            return _0x2b6821['prototype']['ag'] = function() {
                return this['Yc'];
            }
            ,
            _0x2b6821['prototype']['rg'] = function(_0x40a3a4) {
                var _0x3a9b25 = _0x3903;
                this['Rd'] = _0x40a3a4,
                this['Yc'][_0x3a9b25(0x712)] = _0x40a3a4;
            }
            ,
            _0x2b6821[_0x7f5022(0x551)]['qg'] = function() {
                var _0x2e1004 = _0x7f5022;
                this['Pf'] = this['Of'][_0x2e1004(0x598)](),
                this['Qf'] = this['Of']['height']();
                var _0x409e86 = this['Qf'] / 0x1e;
                for (var _0x22d2fa = 0x0; _0x22d2fa < this['Am']['length']; _0x22d2fa++) {
                    this['Am'][_0x22d2fa]['Dm'](_0x409e86);
                }
            }
            ,
            _0x2b6821[_0x7f5022(0x551)]['Bg'] = function() {
                var _0x2a2df8 = _0x7f5022;
                if (this['Rd'])
                    for (var _0x59c890 = 0x0; _0x59c890 < this['Am'][_0x2a2df8(0x454)]; _0x59c890++) {
                        this['Am'][_0x59c890]['Bg'](this['Vf']);
                    }
            }
            ,
            _0x2b6821[_0x7f5022(0x551)]['Em'] = function() {
                return this['Pf'];
            }
            ,
            _0x2b6821[_0x7f5022(0x551)]['Fm'] = function() {
                return this['Qf'];
            }
            ,
            _0x2b6821[_0x7f5022(0x551)]['xg'] = function(_0x16b0d9, _0x208515) {
                this['Am'][_0x16b0d9]['Gm'](_0x208515);
            }
            ,
            _0x2b6821[_0x7f5022(0x551)]['yg'] = function(_0x35db7f, _0x3ff597) {
                this['Am'][_0x35db7f]['Hm'](_0x3ff597);
            }
            ,
            _0x2b6821['prototype']['zg'] = function(_0x193766, _0xd34eb3, _0x1f2fc4) {
                var _0x4d40a7 = this['Am'][_0x193766];
                for (var _0x3f4a89 = _0x4d40a7['Im'](), _0x204bd2 = _0x4d40a7['Jm'], _0x5b399f = 0x0; _0x5b399f < _0x3f4a89; _0x5b399f++) {
                    _0x204bd2[_0x5b399f * 0x3] = _0xd34eb3,
                    _0x204bd2[_0x5b399f * 0x3 + 0x1] = _0x1f2fc4,
                    _0x204bd2[_0x5b399f * 0x3 + 0x2] = 0x0;
                }
            }
            ,
            _0x2b6821[_0x7f5022(0x551)]['Ag'] = function(_0x167475, _0x49912b, _0x1feffc) {
                var _0x196bf3, _0x7bff77, _0x19febf = this['Am'][_0x167475], _0x1b9d6b = _0x19febf['Im'](), _0x5edb9c = _0x19febf['Jm'], _0x351365 = _0x19febf['Km'](), _0x5373f8 = _0x5edb9c[0x0], _0xf7a70d = _0x5edb9c[0x1], _0x5ca985 = _0x49912b - _0x5373f8, _0x2cdbe8 = _0x1feffc - _0xf7a70d, _0x436b38 = _0x5d1bbd['la'](_0x5ca985, _0x2cdbe8);
                if (_0x436b38 > 0x0) {
                    _0x5edb9c[0x0] = _0x49912b,
                    _0x5edb9c[0x1] = _0x1feffc,
                    _0x5edb9c[0x2] = _0x5d1bbd['ta'](_0x2cdbe8, _0x5ca985);
                    var _0x136516 = _0x351365 * 0.25 / (_0x351365 * 0.25 + _0x436b38)
                      , _0x2296df = 0x1 - _0x136516 * 0x2;
                    for (var _0x2e5668 = 0x1, _0x187ff9 = _0x1b9d6b; _0x2e5668 < _0x187ff9; _0x2e5668++) {
                        _0x196bf3 = _0x5edb9c[_0x2e5668 * 0x3],
                        _0x5edb9c[_0x2e5668 * 0x3] = _0x5edb9c[_0x2e5668 * 0x3 - 0x3] * _0x2296df + (_0x196bf3 + _0x5373f8) * _0x136516,
                        _0x5373f8 = _0x196bf3,
                        _0x7bff77 = _0x5edb9c[_0x2e5668 * 0x3 + 0x1],
                        _0x5edb9c[_0x2e5668 * 0x3 + 0x1] = _0x5edb9c[_0x2e5668 * 0x3 - 0x2] * _0x2296df + (_0x7bff77 + _0xf7a70d) * _0x136516,
                        _0xf7a70d = _0x7bff77,
                        _0x5edb9c[_0x2e5668 * 0x3 + 0x2] = _0x5d1bbd['ta'](_0x5edb9c[_0x2e5668 * 0x3 - 0x2] - _0x5edb9c[_0x2e5668 * 0x3 + 0x1], _0x5edb9c[_0x2e5668 * 0x3 - 0x3] - _0x5edb9c[_0x2e5668 * 0x3]);
                    }
                }
            }
            ,
            _0x2b6821;
        }()),
        _0x21385e['Lm'] = (function() {
            var _0x360c6e = _0x2413a9;
            function _0x16995a(_0x4f3543) {
                var _0x1b12a4 = _0x3903, _0x1d0d7c, _0x5be326 = this;
                this['Of'] = _0x4f3543,
                this['nc'] = _0x4f3543[_0x1b12a4(0x3e4)]()[0x0],
                this['Vf'] = ((_0x1d0d7c = {})[_0x1b12a4(0x332)] = _0x5be326['nc'],
                _0x1d0d7c['transparent'] = !![],
                new _0x3f9428['k']['o'](_0x1d0d7c)),
                this['Rd'] = ![],
                this['Mm'] = new _0x21385e['Bm'](new _0x3f9428['j'](_0x4c074a * 0x3)),
                this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['Nm'] = _0x3af1b8['Om'],
                this['Pm'] = _0x3af1b8['Om'],
                this['Qm'] = _0x3af1b8['Om'],
                this['Rm'] = _0x3af1b8['Om'],
                this['Sm'] = _0x3af1b8['Om'],
                this['qg'](),
                ooo['ud']['Jc'](function() {
                    _0x5be326['Mm']['Tm']();
                });
            }
            var _0x4c074a = _0x5d1bbd['ha'](0x64, _0x21385e['Xc']['fd'])
              , _0x3af1b8 = {
                'Om': _0x360c6e(0x14a),
                'Um': _0x360c6e(0x577),
                'Vm': _0x360c6e(0x7a5)
            };
            return _0x16995a[_0x360c6e(0x551)]['rg'] = function(_0x275717) {
                this['Rd'] = _0x275717;
            }
            ,
            _0x16995a[_0x360c6e(0x551)]['qg'] = function() {
                var _0xb9d456 = _0x360c6e
                  , _0x285d4c = _0x5d1bbd['e']();
                this['Pf'] = this['Of'][_0xb9d456(0x598)](),
                this['Qf'] = this['Of']['height'](),
                this['Vf']['resize'](this['Pf'], this['Qf']),
                this['Vf']['resolution'] = _0x285d4c,
                this['nc'][_0xb9d456(0x598)] = _0x285d4c * this['Pf'],
                this['nc']['height'] = _0x285d4c * this['Qf'];
                var _0x3a3d55 = this['Qf'] / 0x4;
                this['Mm']['Dm'](_0x3a3d55);
                var _0x21508a = _0x5d1bbd['fa'](_0x5d1bbd['_'](this['Pf'] / _0x3a3d55) * 0x2 - 0x5, 0x1, _0x4c074a);
                this['Mm']['Cm'](_0x21508a);
            }
            ,
            _0x16995a['prototype']['ug'] = function() {
                if (this['Rd']) {
                    var _0x1e2e57 = _0x5d1bbd['Ca']() / 0xc8
                      , _0x248144 = _0x5d1bbd['oa'](_0x1e2e57);
                    this['Mm']['Wm'](this['Xm'](this['Nm'], _0x248144), this['Ym'](this['Nm'], _0x248144)),
                    this['Mm']['Zm'](this['$m'](this['Pm'], _0x248144), this['$m'](this['Qm'], _0x248144), this['$m'](this['Rm'], _0x248144), this['$m'](this['Sm'], _0x248144));
                    var _0x51803c = this['Mm']['Km']();
                    for (var _0x317d11 = this['Mm']['Im'](), _0x4311c7 = this['Mm']['Jm'], _0x500afd = this['Pf'] - (this['Pf'] - _0x51803c * 0.5 * (_0x317d11 - 0x1)) * 0.5, _0x540d37 = this['Qf'] * 0.5, _0x355f62 = 0x0, _0x4e8ae5 = 0x0, _0x16f76d = -0x1; _0x16f76d < _0x317d11; _0x16f76d++) {
                        var _0x17e93d = _0x16f76d
                          , _0x4f6a2e = _0x5d1bbd['pa'](_0x17e93d * 0x1 / 0xc * _0x52ace1['T'] - _0x1e2e57) * (0x1 - _0x5d1bbd['ra'](0x10, _0x17e93d * -0x1 / 0xc));
                        _0x16f76d >= 0x0 && (_0x4311c7[_0x16f76d * 0x3] = _0x500afd - _0x51803c * 0.5 * _0x17e93d,
                        _0x4311c7[_0x16f76d * 0x3 + 0x1] = _0x540d37 + _0x51803c * 0.5 * _0x4f6a2e,
                        _0x4311c7[_0x16f76d * 0x3 + 0x2] = _0x5d1bbd['ta'](_0x4e8ae5 - _0x4f6a2e, _0x17e93d - _0x355f62)),
                        _0x355f62 = _0x17e93d,
                        _0x4e8ae5 = _0x4f6a2e;
                    }
                    ;this['Mm']['Bg'](),
                    this['Mm']['_m'](this['Vf']);
                }
            }
            ,
            _0x16995a[_0x360c6e(0x551)]['Gm'] = function(_0xec3324) {
                this['Mm']['Gm'](_0xec3324);
            }
            ,
            _0x16995a['prototype']['an'] = function(_0x3fc0c6) {
                this['Nm'] = _0x3fc0c6 ? _0x3af1b8['Vm'] : _0x3af1b8['Um'],
                this['Pm'] = _0x3af1b8['Om'],
                this['Qm'] = _0x3af1b8['Om'],
                this['Rm'] = _0x3af1b8['Om'],
                this['Sm'] = _0x3af1b8['Om'];
            }
            ,
            _0x16995a[_0x360c6e(0x551)]['bn'] = function(_0x9d6da9) {
                this['Nm'] = _0x3af1b8['Om'],
                this['Pm'] = _0x9d6da9 ? _0x3af1b8['Vm'] : _0x3af1b8['Um'],
                this['Qm'] = _0x3af1b8['Om'],
                this['Rm'] = _0x3af1b8['Om'],
                this['Sm'] = _0x3af1b8['Om'];
            }
            ,
            _0x16995a[_0x360c6e(0x551)]['cn'] = function(_0xb49525) {
                this['Nm'] = _0x3af1b8['Om'],
                this['Pm'] = _0x3af1b8['Om'],
                this['Qm'] = _0xb49525 ? _0x3af1b8['Vm'] : _0x3af1b8['Um'],
                this['Rm'] = _0x3af1b8['Om'],
                this['Sm'] = _0x3af1b8['Om'];
            }
            ,
            _0x16995a['prototype']['dn'] = function(_0x397daf) {
                this['Nm'] = _0x3af1b8['Om'],
                this['Pm'] = _0x3af1b8['Om'],
                this['Qm'] = _0x3af1b8['Om'],
                this['Rm'] = _0x397daf ? _0x3af1b8['Vm'] : _0x3af1b8['Um'],
                this['Sm'] = _0x3af1b8['Om'];
            }
            ,
            _0x16995a[_0x360c6e(0x551)]['en'] = function(_0x2161a5) {
                this['Nm'] = _0x3af1b8['Om'],
                this['Pm'] = _0x3af1b8['Om'],
                this['Qm'] = _0x3af1b8['Om'],
                this['Rm'] = _0x3af1b8['Om'],
                this['Sm'] = _0x2161a5 ? _0x3af1b8['Vm'] : _0x3af1b8['Um'];
            }
            ,
            _0x16995a['prototype']['Xm'] = function(_0x2a0bba, _0x121c74) {
                switch (_0x2a0bba) {
                case _0x3af1b8['Um']:
                    return 0.9 + _0x121c74 * 0.1;
                case _0x3af1b8['Vm']:
                    return 0.4 + _0x121c74 * 0.3;
                }
                ;return 0x1;
            }
            ,
            _0x16995a['prototype']['Ym'] = function(_0x14e327, _0x2b4cba) {
                switch (_0x14e327) {
                case _0x3af1b8['Um']:
                    return 0.6 + _0x2b4cba * 0.5;
                case _0x3af1b8['Vm']:
                    return 0.3 + _0x2b4cba * 0.3;
                }
                ;return 0x1;
            }
            ,
            _0x16995a[_0x360c6e(0x551)]['$m'] = function(_0x2aaf15, _0x47004a) {
                switch (_0x2aaf15) {
                case _0x3af1b8['Um']:
                    return 0.9 + _0x47004a * 0.1;
                case _0x3af1b8['Vm']:
                    return 0.6 + _0x47004a * 0.4;
                }
                ;return 0x1;
            }
            ,
            _0x16995a;
        }()),
        _0x21385e['uk'] = (function() {
            var _0x11ffd2 = _0x2413a9;
            function _0x3d3bfe(_0x48372d, _0x21293e, _0x59fa68, _0xbd3289, _0x32936d) {
                this['gn'] = _0x48372d,
                this['hn'] = _0x21293e,
                this['in'] = _0x59fa68,
                this['jn'] = _0xbd3289,
                this['kn'] = _0x32936d;
            }
            return _0x3d3bfe['tk'] = function(_0x11d9ee) {
                var _0x325473 = _0x3903;
                return new _0x3d3bfe(_0x11d9ee[_0x325473(0x4d3)],_0x11d9ee[_0x325473(0x43b)],_0x11d9ee[_0x325473(0x734)],_0x11d9ee[_0x325473(0x196)],_0x11d9ee[_0x325473(0x4d8)]);
            }
            ,
            _0x3d3bfe['vk'] = function(_0x9211cd) {
                var _0x1e8011 = _0x3903;
                return new _0x3d3bfe(_0x9211cd['price'],_0x9211cd[_0x1e8011(0x43b)],_0x9211cd['nonbuyable'],_0x9211cd['nonbuyableCause'],_0x9211cd[_0x1e8011(0x4d8)]);
            }
            ,
            _0x3d3bfe[_0x11ffd2(0x551)]['pk'] = function() {
                return this['gn'];
            }
            ,
            _0x3d3bfe[_0x11ffd2(0x551)]['sk'] = function() {
                return this['hn'];
            }
            ,
            _0x3d3bfe[_0x11ffd2(0x551)]['qk'] = function() {
                return this['in'];
            }
            ,
            _0x3d3bfe[_0x11ffd2(0x551)]['ln'] = function() {
                return this['jn'];
            }
            ,
            _0x3d3bfe[_0x11ffd2(0x551)]['mn'] = function() {
                return this['kn'];
            }
            ,
            _0x3d3bfe;
        }()),
        _0x21385e['Zf'] = (function() {
            var _0x599a3c = _0x2413a9;
            function _0x18bd50(_0x3fd6ab) {
                var _0x1e5d5c = _0x3903;
                this['nn'] = {};
                function _0x298ee3() {
                    var _0x11144e = _0x3903
                      , _0x407eca = [_0x11144e(0x7c7), 'https://wormx.store/images/arkaplan/bg2.jpg', _0x11144e(0x43c)]
                      , _0x1fc948 = localStorage['getItem'](_0x11144e(0x5e4))
                      , _0x42ae47 = _0x407eca[_0x11144e(0x64a)](_0x13c65e => _0x13c65e !== _0x1fc948)
                      , _0x364317 = _0x42ae47[Math[_0x11144e(0x47c)](Math[_0x11144e(0x314)]() * _0x42ae47[_0x11144e(0x454)])];
                    return localStorage[_0x11144e(0x434)]('lastBackground', _0x364317),
                    _0x364317;
                }
                var _0xf65b2a = _0x3f9428['k']['m'][_0x1e5d5c(0x717)](_0x298ee3());
                this['nn'][_0x1d3a68] = _0xf65b2a;
                var _0x108729 = _0x3f9428['k']['q'][_0x1e5d5c(0x717)](_0x3d77ee, _0x28c001, this['nn']);
                this['_f'] = new _0x3f9428['k']['v'](_0x2da2e6,_0x108729),
                this['_f'][_0x1e5d5c(0x32d)] = _0x3f9428['k']['w']['B'],
                this['_f'][_0x1e5d5c(0x552)] = 0.6;
            }
            var _0x3ebdd1 = _0x599a3c(0x411) + _0x5d1bbd['xa']()
              , _0x3d68a9 = _0x599a3c(0x378) + _0x5d1bbd['xa']()
              , _0x1de8da = _0x599a3c(0x116)
              , _0x35651e = _0x599a3c(0x505)
              , _0x1d3a68 = _0x599a3c(0x6bf) + _0x5d1bbd['xa']()
              , _0x24f857 = _0x599a3c(0x150) + _0x5d1bbd['xa']()
              , _0x36daa4 = _0x599a3c(0x48c) + _0x5d1bbd['xa']()
              , _0x2da2e6 = new _0x3f9428['k']['u']()[_0x599a3c(0x753)](_0x3ebdd1, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)[_0x599a3c(0x753)](_0x3d68a9, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)
              , _0x3d77ee = _0x599a3c(0x702) + _0x3ebdd1 + _0x599a3c(0x21b) + _0x3d68a9 + _0x599a3c(0x14f) + _0x1de8da + _0x599a3c(0x14f) + _0x35651e + _0x599a3c(0x4ed) + _0x24f857 + ';\x20varying\x20vec2\x20' + _0x36daa4 + _0x599a3c(0x280) + _0x36daa4 + _0x599a3c(0x26a) + _0x3d68a9 + ';\x20gl_Position\x20=\x20vec4((' + _0x35651e + '\x20*\x20' + _0x1de8da + _0x599a3c(0x484) + _0x3ebdd1 + _0x599a3c(0x38c) + _0x24f857 + ';\x20vec2\x20uv\x20=\x20' + _0x3d68a9 + _0x599a3c(0x4d2) + _0x36daa4 + _0x599a3c(0x1a5)
              , _0x28c001 = 'precision\x20highp\x20float;\x20varying\x20vec2\x20' + _0x36daa4 + _0x599a3c(0x6c3) + _0x1d3a68 + _0x599a3c(0x4af) + _0x1d3a68 + ',\x20' + _0x36daa4 + ');\x20}';
            return _0x18bd50[_0x599a3c(0x551)]['tg'] = function(_0x427ace, _0x13d789) {
                var _0x1006fb = _0x599a3c;
                this['_f'][_0x1006fb(0x192)]['x'] = _0x427ace,
                this['_f'][_0x1006fb(0x192)]['y'] = _0x13d789,
                this['nn'][_0x24f857] = [_0x427ace, _0x13d789, 0x1 / _0x427ace + 0x1, 0x1 / _0x13d789 + 0x1];
            }
            ,
            _0x18bd50;
        }()),
        _0x21385e['th'] = (function() {
            var _0x3d9558 = _0x2413a9;
            function _0x2dda9c() {
                var _0x57b218 = _0x3903;
                this['nn'] = {},
                this['nn'][_0x367c22] = [0x1, 0.5, 0.25, 0.5],
                this['nn'][_0xbd3a53] = _0x3f9428['k']['n']['WHITE'],
                this['nn'][_0x46b417] = [0x0, 0x0],
                this['nn'][_0x4af3aa] = [0x0, 0x0];
                var _0x10106e = _0x3f9428['k']['q'][_0x57b218(0x717)](_0x88ee15, _0x433989, this['nn']);
                this['_f'] = new _0x3f9428['k']['v'](_0x1fc0ba,_0x10106e);
            }
            var _0x2a83a9 = _0x3d9558(0x411) + _0x5d1bbd['xa']()
              , _0x53aa02 = _0x3d9558(0x378) + _0x5d1bbd['xa']()
              , _0x56cbcf = 'translationMatrix'
              , _0xea9e66 = _0x3d9558(0x505)
              , _0x367c22 = 'u3_' + _0x5d1bbd['xa']()
              , _0xbd3a53 = _0x3d9558(0x150) + _0x5d1bbd['xa']()
              , _0x46b417 = _0x3d9558(0x5d6) + _0x5d1bbd['xa']()
              , _0x4af3aa = _0x3d9558(0x211) + _0x5d1bbd['xa']()
              , _0x530582 = 'v1_' + _0x5d1bbd['xa']()
              , _0x1fc0ba = new _0x3f9428['k']['u']()[_0x3d9558(0x753)](_0x2a83a9, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x3d9558(0x753)](_0x53aa02, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)
              , _0x88ee15 = _0x3d9558(0x702) + _0x2a83a9 + _0x3d9558(0x21b) + _0x53aa02 + ';\x20uniform\x20mat3\x20' + _0x56cbcf + _0x3d9558(0x14f) + _0xea9e66 + _0x3d9558(0x1a6) + _0x530582 + _0x3d9558(0x7d1) + _0x530582 + '=' + _0x53aa02 + _0x3d9558(0x144) + _0xea9e66 + '*' + _0x56cbcf + '*vec3(' + _0x2a83a9 + _0x3d9558(0x22e)
              , _0x433989 = _0x3d9558(0x3be) + _0x530582 + ';\x20uniform\x20vec4\x20' + _0x367c22 + _0x3d9558(0x6c3) + _0xbd3a53 + ';\x20uniform\x20vec2\x20' + _0x46b417 + _0x3d9558(0x4c4) + _0x4af3aa + _0x3d9558(0x5c1) + _0xbd3a53 + ',\x20' + _0x530582 + '*' + _0x46b417 + '+' + _0x4af3aa + _0x3d9558(0x1fb) + _0x367c22 + _0x3d9558(0x2fc);
            return _0x2dda9c[_0x3d9558(0x551)]['nd'] = function(_0x53bdb3, _0x32a6f1, _0x1e11c3, _0x262f2b) {
                var _0x415c8a = this['nn'][_0x367c22];
                _0x415c8a[0x0] = _0x53bdb3,
                _0x415c8a[0x1] = _0x32a6f1,
                _0x415c8a[0x2] = _0x1e11c3,
                _0x415c8a[0x3] = _0x262f2b;
            }
            ,
            _0x2dda9c[_0x3d9558(0x551)]['Hh'] = function(_0xd81c27) {
                this['nn'][_0xbd3a53] = _0xd81c27;
            }
            ,
            _0x2dda9c['prototype']['Bg'] = function(_0x1b0f68, _0xf3a92c, _0x278685, _0x5eb68c) {
                var _0x3d2d79 = _0x3d9558;
                this['_f'][_0x3d2d79(0x627)]['x'] = _0x1b0f68,
                this['_f'][_0x3d2d79(0x627)]['y'] = _0xf3a92c,
                this['_f'][_0x3d2d79(0x192)]['x'] = _0x278685,
                this['_f']['scale']['y'] = _0x5eb68c;
                var _0x304472 = this['nn'][_0x46b417];
                _0x304472[0x0] = _0x278685 * 0.2520615384615385,
                _0x304472[0x1] = _0x5eb68c * 0.4357063736263738;
                var _0x195d5c = this['nn'][_0x4af3aa];
                _0x195d5c[0x0] = _0x1b0f68 * 0.2520615384615385,
                _0x195d5c[0x1] = _0xf3a92c * 0.4357063736263738;
            }
            ,
            _0x2dda9c;
        }()),
        _0x21385e['bd'] = (function() {
            var _0x35426a = _0x2413a9;
            function _0xc0ca45() {
                this['gd'] = new _0x3f9428['k']['s'](),
                this['pn'] = 0x0,
                this['qn'] = 0x0;
            }
            return _0xc0ca45[_0x35426a(0x551)]['kd'] = function(_0x1be43e) {
                var _0x5609f8 = _0x35426a;
                this['gd'][_0x5609f8(0x58e)] = _0x1be43e['nb'](),
                this['gd'][_0x5609f8(0x48d)][_0x5609f8(0x421)](_0x1be43e['hb'], _0x1be43e['ib']),
                this['pn'] = _0x1be43e['jb'],
                this['qn'] = _0x1be43e['kb'];
            }
            ,
            _0xc0ca45[_0x35426a(0x551)]['nd'] = function(_0x469ead) {
                var _0x23be32 = _0x35426a;
                this['gd'][_0x23be32(0x781)] = parseInt(_0x469ead[_0x23be32(0x5eb)](0x1), 0x10);
            }
            ,
            _0xc0ca45[_0x35426a(0x551)]['Bd'] = function(_0x300177) {
                this['gd']['width'] = _0x300177 * this['pn'],
                this['gd']['height'] = _0x300177 * this['qn'];
            }
            ,
            _0xc0ca45[_0x35426a(0x551)]['Vd'] = function(_0x4e65b5) {
                this['gd']['rotation'] = _0x4e65b5;
            }
            ,
            _0xc0ca45[_0x35426a(0x551)]['Ud'] = function(_0x2cb76e, _0x29f628) {
                var _0x534c1a = _0x35426a;
                this['gd'][_0x534c1a(0x627)][_0x534c1a(0x421)](_0x2cb76e, _0x29f628);
            }
            ,
            _0xc0ca45[_0x35426a(0x551)]['Td'] = function(_0x23cd44) {
                var _0xd91b27 = _0x35426a;
                this['gd'][_0xd91b27(0x712)] = _0x23cd44;
            }
            ,
            _0xc0ca45[_0x35426a(0x551)]['Qd'] = function() {
                var _0x5877b7 = _0x35426a;
                return this['gd'][_0x5877b7(0x712)];
            }
            ,
            _0xc0ca45['prototype']['Rj'] = function(_0x59976e) {
                var _0x35a25a = _0x35426a;
                this['gd'][_0x35a25a(0x552)] = _0x59976e;
            }
            ,
            _0xc0ca45['prototype']['zd'] = function() {
                return this['gd'];
            }
            ,
            _0xc0ca45[_0x35426a(0x551)]['G'] = function() {
                _0x3f9428['k']['F']['G'](this['gd']);
            }
            ,
            _0xc0ca45;
        }()),
        _0x21385e['Ui'] = (function() {
            var _0x416cc0 = _0x2413a9;
            function _0x160946(_0x496d9f) {
                this['Qh'] = _0x496d9f,
                this['ki'] = new _0x21385e['Ui']['Ti'](),
                this['cj'] = ![],
                this['bj'] = !![],
                this['Fd'] = ![],
                this['Id'] = 0x0,
                this['rn'] = 0x0,
                this['Lj'] = 0x1,
                this['Ld'] = 0x0,
                this['hi'] = 0x0,
                this['Nd'] = {},
                this['Kd'] = 0x0,
                this['sn'] = new _0x3f9428['j'](_0x2f29bd * 0x2),
                this['tn'] = new _0x3f9428['j'](_0x2f29bd * 0x2),
                this['Jd'] = new _0x3f9428['j'](_0x2f29bd * 0x2),
                this['un'] = null,
                this['vn'] = null,
                this['wn'] = null,
                this['xn']();
            }
            var _0x2f29bd = 0xc8;
            return _0x160946[_0x416cc0(0x551)]['$i'] = function() {
                this['vn'] != null && _0x3f9428['k']['F']['G'](this['vn']['Yc']),
                this['wn'] != null && _0x3f9428['k']['F']['G'](this['wn']);
            }
            ,
            _0x160946[_0x416cc0(0x551)]['xn'] = function() {
                this['fj'](0.25),
                this['ki']['Xa'] = '',
                this['bj'] = !![],
                this['Nd'] = {},
                this['Td'](![]);
            }
            ,
            _0x160946['prototype']['Zi'] = function(_0x46c7ba) {
                this['ki'] = _0x46c7ba,
                this['yn'](this['cj']);
            }
            ,
            _0x160946[_0x416cc0(0x551)]['Td'] = function(_0x3ac322) {
                var _0x3482cb = this['cj'];
                this['cj'] = _0x3ac322,
                this['yn'](_0x3482cb);
            }
            ,
            _0x160946[_0x416cc0(0x551)]['fj'] = function(_0x3919d6) {
                this['hi'] = _0x3919d6 * 0x32;
                var _0x5f21ca = _0x3919d6;
                _0x3919d6 > this['Qh']['hh'] && (_0x5f21ca = _0x5d1bbd['sa']((_0x3919d6 - this['Qh']['hh']) / this['Qh']['ih']) * this['Qh']['ih'] + this['Qh']['hh']);
                var _0x159f74 = _0x5d1bbd['qa'](_0x5d1bbd['ra'](_0x5f21ca * 0x5, 0.707106781186548) * 0x4 + 0x19)
                  , _0x181f88 = _0x5d1bbd['ha'](_0x2f29bd, _0x5d1bbd['ia'](0x3, (_0x159f74 - 0x5) * 0x5 + 0x1))
                  , _0x406fbf = this['Kd'];
                this['Id'] = (0x5 + _0x159f74 * 0.9) * 0.025,
                this['Kd'] = _0x5d1bbd['_'](_0x181f88),
                this['rn'] = _0x181f88 - this['Kd'];
                if (_0x406fbf > 0x0 && _0x406fbf < this['Kd']) {
                    var _0x3f0ea1 = this['sn'][_0x406fbf * 0x2 - 0x2]
                      , _0x275243 = this['sn'][_0x406fbf * 0x2 - 0x1]
                      , _0x57cfaa = this['tn'][_0x406fbf * 0x2 - 0x2]
                      , _0x2a6a71 = this['tn'][_0x406fbf * 0x2 - 0x1]
                      , _0x56963a = this['Jd'][_0x406fbf * 0x2 - 0x2]
                      , _0x58d601 = this['Jd'][_0x406fbf * 0x2 - 0x1];
                    for (var _0x51bbc1 = _0x406fbf; _0x51bbc1 < this['Kd']; _0x51bbc1++) {
                        this['sn'][_0x51bbc1 * 0x2] = _0x3f0ea1,
                        this['sn'][_0x51bbc1 * 0x2 + 0x1] = _0x275243,
                        this['tn'][_0x51bbc1 * 0x2] = _0x57cfaa,
                        this['tn'][_0x51bbc1 * 0x2 + 0x1] = _0x2a6a71,
                        this['Jd'][_0x51bbc1 * 0x2] = _0x56963a,
                        this['Jd'][_0x51bbc1 * 0x2 + 0x1] = _0x58d601;
                    }
                }
            }
            ,
            _0x160946[_0x416cc0(0x551)]['kj'] = function(_0x551f8b, _0x493981) {
                this['Kd'] = _0x493981;
                for (var _0x336a00 = 0x0; _0x336a00 < this['Kd']; _0x336a00++) {
                    this['sn'][_0x336a00 * 0x2] = this['tn'][_0x336a00 * 0x2] = this['Jd'][_0x336a00 * 0x2] = _0x551f8b(),
                    this['sn'][_0x336a00 * 0x2 + 0x1] = this['tn'][_0x336a00 * 0x2 + 0x1] = this['Jd'][_0x336a00 * 0x2 + 0x1] = _0x551f8b();
                }
            }
            ,
            _0x160946[_0x416cc0(0x551)]['hj'] = function(_0x20a5a6, _0x49ba9c, _0x713185) {
                this['Fd'] = _0x713185;
                for (var _0x378a5c = 0x0; _0x378a5c < this['Kd']; _0x378a5c++) {
                    this['sn'][_0x378a5c * 0x2] = this['tn'][_0x378a5c * 0x2],
                    this['sn'][_0x378a5c * 0x2 + 0x1] = this['tn'][_0x378a5c * 0x2 + 0x1];
                }
                ;var _0x9ab341 = _0x20a5a6 - this['tn'][0x0]
                  , _0x210e02 = _0x49ba9c - this['tn'][0x1];
                this['zn'](_0x9ab341, _0x210e02, this['Kd'], this['tn']);
            }
            ,
            _0x160946[_0x416cc0(0x551)]['zn'] = function(_0x24db42, _0x1a52ee, _0x4d3b72, _0x13e6f9) {
                var _0x4f659b = _0x5d1bbd['la'](_0x24db42, _0x1a52ee);
                if (!(_0x4f659b <= 0x0)) {
                    var _0x5e95e6, _0xfef873 = _0x13e6f9[0x0];
                    _0x13e6f9[0x0] += _0x24db42;
                    var _0x2c95a9, _0x19535a = _0x13e6f9[0x1];
                    _0x13e6f9[0x1] += _0x1a52ee;
                    var _0x15a923 = this['Id'] / (this['Id'] + _0x4f659b)
                      , _0x5201a0 = 0x1 - _0x15a923 * 0x2;
                    for (var _0x35bce9 = 0x1, _0x58d4de = _0x4d3b72 - 0x1; _0x35bce9 < _0x58d4de; _0x35bce9++) {
                        _0x5e95e6 = _0x13e6f9[_0x35bce9 * 0x2],
                        _0x13e6f9[_0x35bce9 * 0x2] = _0x13e6f9[_0x35bce9 * 0x2 - 0x2] * _0x5201a0 + (_0x5e95e6 + _0xfef873) * _0x15a923,
                        _0xfef873 = _0x5e95e6,
                        _0x2c95a9 = _0x13e6f9[_0x35bce9 * 0x2 + 0x1],
                        _0x13e6f9[_0x35bce9 * 0x2 + 0x1] = _0x13e6f9[_0x35bce9 * 0x2 - 0x1] * _0x5201a0 + (_0x2c95a9 + _0x19535a) * _0x15a923,
                        _0x19535a = _0x2c95a9;
                    }
                    ;_0x5201a0 = 0x1 - (_0x15a923 = this['rn'] * this['Id'] / (this['rn'] * this['Id'] + _0x4f659b)) * 0x2,
                    _0x13e6f9[_0x4d3b72 * 0x2 - 0x2] = _0x13e6f9[_0x4d3b72 * 0x2 - 0x4] * _0x5201a0 + (_0x13e6f9[_0x4d3b72 * 0x2 - 0x2] + _0xfef873) * _0x15a923,
                    _0x13e6f9[_0x4d3b72 * 0x2 - 0x1] = _0x13e6f9[_0x4d3b72 * 0x2 - 0x3] * _0x5201a0 + (_0x13e6f9[_0x4d3b72 * 0x2 - 0x1] + _0x19535a) * _0x15a923;
                }
            }
            ,
            _0x160946[_0x416cc0(0x551)]['Oh'] = function() {
                return {
                    '_a': this['Jd'][0x0],
                    'ab': this['Jd'][0x1]
                };
            }
            ,
            _0x160946[_0x416cc0(0x551)]['dj'] = function(_0x38a075, _0x169551) {
                var _0x4d2737 = 0xf4240
                  , _0x5a563a = _0x38a075
                  , _0x44ef9c = _0x169551;
                for (var _0x4e9520 = 0x0; _0x4e9520 < this['Kd']; _0x4e9520++) {
                    var _0x2bd5e3 = this['Jd'][_0x4e9520 * 0x2]
                      , _0xa76ee2 = this['Jd'][_0x4e9520 * 0x2 + 0x1]
                      , _0x4867b2 = _0x5d1bbd['la'](_0x38a075 - _0x2bd5e3, _0x169551 - _0xa76ee2);
                    _0x4867b2 < _0x4d2737 && (_0x4d2737 = _0x4867b2,
                    _0x5a563a = _0x2bd5e3,
                    _0x44ef9c = _0xa76ee2);
                }
                ;return {
                    '_a': _0x5a563a,
                    'ab': _0x44ef9c,
                    'ej': _0x4d2737
                };
            }
            ,
            _0x160946[_0x416cc0(0x551)]['_i'] = function(_0x1ae60c) {
                this['un'] = _0x1ae60c;
            }
            ,
            _0x160946[_0x416cc0(0x551)]['Pj'] = function(_0x5790e6, _0x26acc4) {
                var _0x1490f3 = _0x416cc0;
                this['Lj'] = _0x5d1bbd['ga'](this['Lj'], this['bj'] ? this['Fd'] ? 0.9 + _0x5d1bbd['pa'](_0x5790e6 / 0x190 * _0x52ace1['T']) * 0.1 : 0x1 : 0x0, _0x26acc4, 0x1 / 0x320),
                this['Ld'] = _0x5d1bbd['ga'](this['Ld'], this['bj'] ? this['Fd'] ? 0x1 : 0x0 : 0x1, _0x26acc4, 0.0025),
                this['vn'] != null && (this['vn']['Yc'][_0x1490f3(0x552)] = this['Lj']),
                this['wn'] != null && (this['wn'][_0x1490f3(0x552)] = this['Lj']);
            }
            ,
            _0x160946[_0x416cc0(0x551)]['Qj'] = function(_0x364e37, _0x3e7634, _0x19b633, _0x273118) {
                if (this['cj'] && this['bj']) {
                    var _0x527a54 = _0x5d1bbd['ra'](0.11112, _0x3e7634 / 0x5f);
                    for (var _0xac40b = 0x0; _0xac40b < this['Kd']; _0xac40b++) {
                        var _0x5978b0 = _0x5d1bbd['ka'](this['sn'][_0xac40b * 0x2], this['tn'][_0xac40b * 0x2], _0x19b633)
                          , _0x515862 = _0x5d1bbd['ka'](this['sn'][_0xac40b * 0x2 + 0x1], this['tn'][_0xac40b * 0x2 + 0x1], _0x19b633);
                        this['Jd'][_0xac40b * 0x2] = _0x5d1bbd['ka'](_0x5978b0, this['Jd'][_0xac40b * 0x2], _0x527a54),
                        this['Jd'][_0xac40b * 0x2 + 0x1] = _0x5d1bbd['ka'](_0x515862, this['Jd'][_0xac40b * 0x2 + 0x1], _0x527a54);
                    }
                }
                ;this['vn'] != null && this['cj'] && this['vn']['Hd'](this, _0x364e37, _0x3e7634, _0x273118),
                this['wn'] != null && (this['wn']['Rh']['x'] = this['Jd'][0x0],
                this['wn']['Rh']['y'] = this['Jd'][0x1] - this['Id'] * 0x3);
            }
            ,
            _0x160946[_0x416cc0(0x551)]['yn'] = function(_0xddf80e) {
                this['cj'] ? !_0xddf80e && this['An']() : (this['vn'] != null && _0x3f9428['k']['F']['G'](this['vn']['Yc']),
                this['wn'] != null && _0x3f9428['k']['F']['G'](this['wn']));
            }
            ,
            _0x160946['prototype']['An'] = function() {
                var _0x2cd38a = _0x416cc0;
                this['vn'] == null ? this['vn'] = new _0x21385e['Xc']() : _0x3f9428['k']['F']['G'](this['vn']['Yc']);
                this['vn']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Tb'](this['ki']['ni']), ooo['ud']['Cc']()['Vb'](this['ki']['Vi']), ooo['ud']['Cc']()['Wb'](this['ki']['Wi']), ooo['ud']['Cc']()['Xb'](this['ki']['Xi']), ooo['ud']['Cc']()['Yb'](this['ki']['Yi']), _0x2cd38a(0x239));
                this['wn'] == null ? (this['wn'] = new _0x21385e['Bn'](''),
                this['wn'][_0x2cd38a(0x3a7)][_0x2cd38a(0x6b8)] = _0x2cd38a(0x510),
                this['wn'][_0x2cd38a(0x48d)]['set'](0.5)) : _0x3f9428['k']['F']['G'](this['wn']);
                this['wn'][_0x2cd38a(0x3a7)][_0x2cd38a(0x32f)] = 0xe,
                this['wn'][_0x2cd38a(0x3a7)]['fill'] = ooo['ud']['Cc']()['Tb'](this['ki']['ni'])['cc'],
                this['wn'][_0x2cd38a(0x2a7)] = this['ki']['Xa'],
                this['un']['Xh'](this['ki']['Je'], this['vn'], this['wn']);
                if (_0x36a055['n'] != null && _0x36a055['n']['Je'] == this['ki']['Je']) {
                    _0x36a055['vj'] = this['wn'];
                    let _0x3d3433 = _0x456264['sg'][_0x2cd38a(0x12a)](_0x36a055['n']['ni']);
                    _0x3d3433 == -0x1 ? _0x456264['ig'] != -0x1 && (_0x456264['ig'] = -0x1) : (_0x456264['ig'] = _0x456264['gg'][_0x3d3433]['s'],
                    _0x456264['re'] = ![],
                    _0x366966());
                }
            }
            ,
            _0x160946['Ti'] = function _0xacc488() {
                this['Je'] = 0x0,
                this['mi'] = _0x21385e['dh']['jh'],
                this['ni'] = 0x0,
                this['Vi'] = 0x0,
                this['Wi'] = 0x0,
                this['Xi'] = 0x0,
                this['Yi'] = 0x0,
                this['Xa'] = '';
            }
            ,
            _0x160946;
        }()),
        _0x21385e['Bn'] = _0x5d1bbd['ca'](_0x3f9428['k']['t'], function(_0x55d4bb, _0x34a2c1, _0x2289bf) {
            var _0x131f5f = _0x2413a9;
            _0x3f9428['k']['t'][_0x131f5f(0x11d)](this, _0x55d4bb, _0x34a2c1, _0x2289bf),
            this['Rh'] = {
                'x': 0x0,
                'y': 0x0
            };
        }),
        _0x21385e['Sb'] = (function() {
            var _0x19120e = _0x2413a9;
            function _0x2f5a73(_0x45809b, _0x4bf3e7, _0x2f9c34, _0x2be6f7, _0x453e75) {
                this['Tj'] = _0x45809b,
                this['Uj'] = _0x4bf3e7,
                this['Vj'] = _0x2f9c34,
                this['Wj'] = _0x2be6f7,
                this['Xj'] = _0x453e75;
            }
            return _0x2f5a73['prototype']['Cn'] = function(_0x479bef) {
                return new _0x2f5a73(_0x479bef,this['Uj'],this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x2f5a73['prototype']['Dn'] = function(_0x4e3c4f) {
                return new _0x2f5a73(this['Tj'],_0x4e3c4f,this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x2f5a73[_0x19120e(0x551)]['En'] = function(_0x2a0017) {
                return new _0x2f5a73(this['Tj'],this['Uj'],_0x2a0017,this['Wj'],this['Xj']);
            }
            ,
            _0x2f5a73[_0x19120e(0x551)]['Fn'] = function(_0x46118c) {
                return new _0x2f5a73(this['Tj'],this['Uj'],this['Vj'],_0x46118c,this['Xj']);
            }
            ,
            _0x2f5a73[_0x19120e(0x551)]['Gn'] = function(_0x2d13f5) {
                return new _0x2f5a73(this['Tj'],this['Uj'],this['Vj'],this['Wj'],_0x2d13f5);
            }
            ,
            _0x2f5a73;
        }()),
        _0x21385e['Bm'] = (function() {
            var _0x408dfc = _0x2413a9;
            function _0xe58ca0(_0x1bda62) {
                var _0x3b729a = _0x3903;
                this['Hn'] = new _0x21385e['Xc'](),
                this['Hn']['Yc'][_0x3b729a(0x448)](this['Hn']['Zc']),
                this['In'] = null,
                this['Jn'] = null,
                this['Jm'] = _0x1bda62,
                this['$c'] = 0x0,
                this['mj'] = 0x1,
                this['Kn'] = 0x1,
                this['Ln'] = 0x1,
                this['Mn'] = 0x1,
                this['Nn'] = 0x1,
                this['On'] = 0x1,
                this['Pn'] = 0x1,
                this['Hm']('#ffffff');
            }
            var _0x3b153d = new _0x21385e['Sb'](0x0,0x0,0x0,0x0,0x0);
            return _0xe58ca0[_0x408dfc(0x551)]['ag'] = function() {
                return this['Hn']['Yc'];
            }
            ,
            _0xe58ca0[_0x408dfc(0x551)]['Cm'] = function(_0x2f5b56) {
                var _0x1fd59a = _0x408dfc;
                this['$c'] = _0x2f5b56;
                if (this['Hn']['$c'] !== _0x2f5b56) {
                    for (var _0x2f757c = _0x2f5b56; _0x2f757c < this['Hn']['_c'][_0x1fd59a(0x454)]; _0x2f757c++) {
                        this['Hn']['_c'][_0x2f757c]['Cd']();
                    }
                    ;while (this['Hn']['$c'] > _0x2f5b56) {
                        this['Hn']['$c'] -= 0x1;
                        var _0x4771c2 = this['Hn']['_c'][this['Hn']['$c']];
                        _0x4771c2['md']['G'](),
                        _0x4771c2['ld']['G']();
                    }
                    ;while (this['Hn']['$c'] < _0x2f5b56) {
                        var _0x3f076c = this['Hn']['_c'][this['Hn']['$c']];
                        this['Hn']['$c'] += 0x1,
                        this['Hn']['Yc']['addChild'](_0x3f076c['ld']['zd']()),
                        this['Hn']['Yc'][_0x1fd59a(0x448)](_0x3f076c['md']['zd']()),
                        _0x3f076c['ld']['Rj'](this['Kn']),
                        _0x3f076c['md']['Rj'](this['Ln']);
                    }
                    ;for (var _0x2a422 = 0x0; _0x2a422 < this['Hn']['Zc']['od'][_0x1fd59a(0x454)]; _0x2a422++) {
                        this['Hn']['Zc']['od'][_0x2a422]['Rj'](this['Mn']);
                    }
                    ;for (var _0x1da705 = 0x0; _0x1da705 < this['Hn']['Zc']['pd'][_0x1fd59a(0x454)]; _0x1da705++) {
                        this['Hn']['Zc']['pd'][_0x1da705]['Rj'](this['Nn']);
                    }
                    ;for (var _0x546d6d = 0x0; _0x546d6d < this['Hn']['Zc']['rd'][_0x1fd59a(0x454)]; _0x546d6d++) {
                        this['Hn']['Zc']['rd'][_0x546d6d]['Rj'](this['On']);
                    }
                    ;for (var _0x3e24b4 = 0x0; _0x3e24b4 < this['Hn']['Zc']['qd'][_0x1fd59a(0x454)]; _0x3e24b4++) {
                        this['Hn']['Zc']['qd'][_0x3e24b4]['Rj'](this['Pn']);
                    }
                }
            }
            ,
            _0xe58ca0['prototype']['Im'] = function() {
                return this['$c'];
            }
            ,
            _0xe58ca0['prototype']['Gm'] = function(_0x3e91ef) {
                this['In'] = _0x3e91ef,
                this['Jn'] = '#ffffff',
                this['Tm']();
            }
            ,
            _0xe58ca0[_0x408dfc(0x551)]['Hm'] = function(_0x10fe49) {
                this['In'] = _0x3b153d,
                this['Jn'] = _0x10fe49,
                this['Tm']();
            }
            ,
            _0xe58ca0[_0x408dfc(0x551)]['Tm'] = function() {
                this['Hn']['hd'](_0x21385e['jd']['ch'], null, ooo['ud']['Cc']()['Tb'](this['In']['Tj']), ooo['ud']['Cc']()['Vb'](this['In']['Uj']), ooo['ud']['Cc']()['Wb'](this['In']['Vj']), ooo['ud']['Cc']()['Xb'](this['In']['Xj']), ooo['ud']['Cc']()['Yb'](this['In']['Wj']), this['Jn']);
            }
            ,
            _0xe58ca0['prototype']['Dm'] = function(_0x5eb5cd) {
                this['mj'] = _0x5eb5cd;
            }
            ,
            _0xe58ca0[_0x408dfc(0x551)]['Km'] = function() {
                return this['mj'];
            }
            ,
            _0xe58ca0[_0x408dfc(0x551)]['Wm'] = function(_0x20e735, _0x4225f7) {
                this['Kn'] = _0x20e735,
                this['Ln'] = _0x4225f7;
                for (var _0x33fae8 = 0x0; _0x33fae8 < this['$c']; _0x33fae8++) {
                    var _0x51d4ef = this['Hn']['_c'][_0x33fae8];
                    _0x51d4ef['ld']['Rj'](this['Kn']),
                    _0x51d4ef['md']['Rj'](this['Ln']);
                }
            }
            ,
            _0xe58ca0['prototype']['Zm'] = function(_0x3df052, _0x5a8c3e, _0x4f9d98, _0x1fdd88) {
                var _0x30002c = _0x408dfc;
                this['Mn'] = _0x3df052,
                this['Nn'] = _0x5a8c3e,
                this['On'] = _0x4f9d98,
                this['Pn'] = _0x1fdd88;
                for (var _0x5db34c = 0x0; _0x5db34c < this['Hn']['Zc']['od']['length']; _0x5db34c++) {
                    this['Hn']['Zc']['od'][_0x5db34c]['Rj'](this['Mn']);
                }
                ;for (var _0x53132d = 0x0; _0x53132d < this['Hn']['Zc']['pd'][_0x30002c(0x454)]; _0x53132d++) {
                    this['Hn']['Zc']['pd'][_0x53132d]['Rj'](this['Nn']);
                }
                ;for (var _0x31925f = 0x0; _0x31925f < this['Hn']['Zc']['rd'][_0x30002c(0x454)]; _0x31925f++) {
                    this['Hn']['Zc']['rd'][_0x31925f]['Rj'](this['On']);
                }
                ;for (var _0x247bbc = 0x0; _0x247bbc < this['Hn']['Zc']['qd']['length']; _0x247bbc++) {
                    this['Hn']['Zc']['qd'][_0x247bbc]['Rj'](this['Pn']);
                }
            }
            ,
            _0xe58ca0[_0x408dfc(0x551)]['Bg'] = function() {
                var _0x306d6c = this['mj'] * 0x2
                  , _0x49702e = this['mj'] * 0x2 * 1.5;
                if (this['$c'] > 0x0) {
                    var _0x15d491 = this['Jm'][0x0]
                      , _0x10d3fa = this['Jm'][0x1]
                      , _0x45f9b1 = this['Jm'][0x2];
                    this['Hn']['_c'][0x0]['Ad'](_0x15d491, _0x10d3fa, _0x306d6c, _0x49702e, _0x45f9b1),
                    this['Hn']['Zc']['Ad'](_0x15d491, _0x10d3fa, _0x306d6c, _0x45f9b1);
                }
                ;for (var _0x12728c = 0x1; _0x12728c < this['$c']; _0x12728c++) {
                    var _0x125e5c = this['Jm'][_0x12728c * 0x3]
                      , _0x310883 = this['Jm'][_0x12728c * 0x3 + 0x1]
                      , _0x4b2422 = this['Jm'][_0x12728c * 0x3 + 0x2];
                    this['Hn']['_c'][_0x12728c]['Ad'](_0x125e5c, _0x310883, _0x306d6c, _0x49702e, _0x4b2422);
                }
            }
            ,
            _0xe58ca0[_0x408dfc(0x551)]['_m'] = function(_0x455540) {
                var _0x5eaf3e = _0x408dfc;
                _0x455540[_0x5eaf3e(0x45b)](this['Hn']['Yc']);
            }
            ,
            _0xe58ca0;
        }()),
        _0x21385e['Uf'] = (function() {
            var _0x3a4003 = _0x2413a9;
            function _0x1a3909(_0xfa9806) {
                this['Wd'] = _0xfa9806;
            }
            return _0x1a3909['Tf'] = $('#background-canvas'),
            _0x1a3909['Qn'] = $(_0x3a4003(0x45f)),
            _0x1a3909['Rn'] = $(_0x3a4003(0x562)),
            _0x1a3909['Sn'] = $(_0x3a4003(0x783)),
            _0x1a3909['Tn'] = $('#game-view'),
            _0x1a3909['Un'] = $(_0x3a4003(0x444)),
            _0x1a3909['Vn'] = $(_0x3a4003(0x261)),
            _0x1a3909['Wn'] = $('#popup-view'),
            _0x1a3909['Xn'] = $(_0x3a4003(0x488)),
            _0x1a3909['Yn'] = $(_0x3a4003(0x1c6)),
            _0x1a3909['Zn'] = $('#restricted-view'),
            _0x1a3909['$n'] = $(_0x3a4003(0x513)),
            _0x1a3909['_n'] = $(_0x3a4003(0x603)),
            _0x1a3909[_0x3a4003(0x551)]['Sa'] = function() {}
            ,
            _0x1a3909[_0x3a4003(0x551)]['ml'] = function() {}
            ,
            _0x1a3909['prototype']['nl'] = function() {}
            ,
            _0x1a3909[_0x3a4003(0x551)]['hl'] = function() {}
            ,
            _0x1a3909[_0x3a4003(0x551)]['qg'] = function() {}
            ,
            _0x1a3909[_0x3a4003(0x551)]['ug'] = function(_0x2c1633, _0x58331b) {}
            ,
            _0x1a3909;
        }()),
        _0x18e745 = $(_0x2413a9(0x113)),
        _0x409484 = $(_0x2413a9(0x718)),
        _0x25352f = $(_0x2413a9(0x6f9)),
        _0x289bfd = $(_0x2413a9(0x5d9)),
        _0x5bf774 = $('#final-share-fb'),
        _0x142d97 = $(_0x2413a9(0x32a)),
        _0x3ed9c8 = $(_0x2413a9(0x79b)),
        _0x26ed4a = $(_0x2413a9(0x14b)),
        _0x582aa7 = $('#final-board'),
        _0x157aa5 = $(_0x2413a9(0x474)),
        (_0x58d58f = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            var _0x38a7eb = _0x2413a9;
            _0x21385e['Uf'][_0x38a7eb(0x11d)](this, _0x21385e['ll']['ao']);
            var _0x79316f = this
              , _0x4809b8 = _0x157aa5[_0x38a7eb(0x3e4)]()[0x0];
            _0x5bf774['toggle'](_0x52ace1['co']['bo']),
            _0x18e745[_0x38a7eb(0x2a7)](_0x5d1bbd['U'](_0x38a7eb(0x186))),
            _0x409484[_0x38a7eb(0x2a7)](_0x5d1bbd['U'](_0x38a7eb(0x7b2))),
            _0x409484['html'](_0x38a7eb(0x63b)),
            _0x409484['after'](_0x38a7eb(0x641)),
            _0x409484[_0x38a7eb(0x3db)](function() {
                ooo['ij']['if'](),
                _0x52ace1['co']['do']['Va'](),
                ooo['ij']['Ye'](_0x21385e['Pe']['Se']['Jf']),
                ooo['Xg']['gl'](ooo['Xg']['Jf']);
            }),
            $(_0x38a7eb(0x5d1))[_0x38a7eb(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['to']();
            });
            var _0x19bd13 = [{
                'url': _0x38a7eb(0x3a3)
            }, {
                'url': _0x38a7eb(0x6b6)
            }, {
                'url': _0x38a7eb(0x10d)
            }, {
                'url': _0x38a7eb(0x3a1)
            }, {
                'url': 'bg_sky_10.png'
            }, {
                'url': 'bg_sky_9.png'
            }, {
                'url': _0x38a7eb(0x744)
            }, {
                'url': _0x38a7eb(0x370)
            }, {
                'url': _0x38a7eb(0x350)
            }, {
                'url': _0x38a7eb(0x398)
            }, {
                'url': _0x38a7eb(0x54e)
            }, {
                'url': 'bg_sky_12.png'
            }]
              , _0xa44051 = 0x0;
            function _0x32f558() {
                var _0x466291 = _0x38a7eb;
                _0xa44051 = (_0xa44051 + 0x1) % _0x19bd13[_0x466291(0x454)];
                var _0x5ebadc = _0x19bd13[_0xa44051][_0x466291(0x1bb)]
                  , _0x512791 = _0x456264[_0x466291(0x595)] + _0x466291(0x240) + _0x5ebadc;
                _0x456264[_0x466291(0x2d0)] = _0x512791,
                localStorage['setItem']('SaveGamewft', JSON[_0x466291(0x6b1)](_0x456264));
                try {
                    PIXI[_0x466291(0x514)][_0x466291(0x41c)][_0x512791] && (PIXI['utils']['TextureCache'][_0x512791]['destroy'](!![]),
                    delete PIXI[_0x466291(0x514)]['TextureCache'][_0x512791]);
                    if (typeof ooo !== _0x466291(0x111) && ooo['ef'] && ooo['ef'][_0x466291(0x27d)]) {
                        var _0x1adfd5 = ooo['ef'][_0x466291(0x27d)](_0x512791);
                        ooo['ef'][_0x466291(0x6ed)] = new PIXI[(_0x466291(0x61d))](_0x1adfd5);
                    } else
                        typeof PIXI !== 'undefined' && (ooo['ef'][_0x466291(0x6ed)] = PIXI['Texture'][_0x466291(0x717)](_0x512791));
                    ooo && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['sh'] && ooo['Xg']['Kf']['Wg']['sh']['Hh'](ooo['ef'][_0x466291(0x6ed)]);
                } catch (_0x4d862d) {
                    console[_0x466291(0x470)]('Background\x20change\x20error:', _0x4d862d);
                }
            }
            let _0x139990 = {
                'left': ![],
                'right': ![]
            };
            function _0x483c80() {
                var _0x1dfbe3 = _0x38a7eb;
                _0x456264['hz'] && !_0x456264[_0x1dfbe3(0x376)] && (_0x139990[_0x1dfbe3(0x4ff)] && _0x456264['z'] >= 0.2 && (_0x456264['z'] = _0x456264['z'] - 0.05),
                _0x139990[_0x1dfbe3(0x15f)] && _0x456264['z'] <= 0x19 && (_0x456264['z'] = _0x456264['z'] + 0.05)),
                requestAnimationFrame(_0x483c80);
            }
            $(_0x38a7eb(0x3b1))['keydown'](function(_0x39242c) {
                var _0x844606 = _0x38a7eb;
                (_0x39242c[_0x844606(0x417)] !== 0x11 || !(_0x456264[_0x844606(0x293)] = !![])) && (_0x39242c['keyCode'] !== 0x11 && (_0x456264[_0x844606(0x293)] = ![]));
                _0x39242c['keyCode'] === 0x35 && ((_0x456264['s'] || _0x36a055['on']) && _0x32f558());
                (_0x39242c['keyCode'] == 0xbc || _0x39242c[_0x844606(0x417)] == 0x25) && (_0x139990[_0x844606(0x4ff)] = !![]);
                (_0x39242c['keyCode'] == 0xbe || _0x39242c[_0x844606(0x417)] == 0x27) && (_0x139990[_0x844606(0x15f)] = !![]);
                _0x39242c[_0x844606(0x417)] === 0x20 && (_0x79316f['eo'] = !![]);
                _0x39242c['keyCode'] === 0x31 && _0x4d6a51();
                if (_0x39242c[_0x844606(0x417)] === 0x32) {
                    if (_0x36a055['on'] && _0x456264['s']) {
                        if (_0x456264[_0x844606(0x23d)] && _0x456264[_0x844606(0x23d)][_0x844606(0x454)] > 0x0) {
                            _0x456264[_0x844606(0x647)] = (_0x456264['currentHatIndex'] + 0x1) % _0x456264['selectedHats'][_0x844606(0x454)];
                            let _0x238045 = _0x456264[_0x844606(0x23d)][_0x456264[_0x844606(0x647)]];
                            _0x5ceb41(_0x238045),
                            localStorage[_0x844606(0x434)](_0x844606(0x4ab), JSON[_0x844606(0x6b1)](_0x456264));
                        }
                    }
                }
            })[_0x38a7eb(0x582)](function(_0x597b17) {
                var _0x4c7a80 = _0x38a7eb;
                _0x456264[_0x4c7a80(0x293)] = ![];
                (_0x597b17[_0x4c7a80(0x417)] == 0xbc || _0x597b17['keyCode'] == 0x25) && (_0x139990[_0x4c7a80(0x4ff)] = ![]);
                (_0x597b17[_0x4c7a80(0x417)] == 0xbe || _0x597b17[_0x4c7a80(0x417)] == 0x27) && (_0x139990['right'] = ![]);
                _0x36a055['on'] && _0x456264['s'] && (_0x597b17[_0x4c7a80(0x417)] == 0x51 || _0x597b17[_0x4c7a80(0x417)] == 0x57 ? (_0x597b17[_0x4c7a80(0x417)] == 0x51 && (_0x2223f2[_0x4c7a80(0x58e)] = _0x49fe8a,
                _0x475ab5[_0x4c7a80(0x58e)] = _0x24aaab,
                _0x2223f2[_0x4c7a80(0x552)] = 0x1,
                _0x475ab5[_0x4c7a80(0x552)] = 0.25,
                _0x3f4365()),
                _0x597b17[_0x4c7a80(0x417)] == 0x57 && (_0x475ab5['texture'] = _0x5e2b4a,
                _0x2223f2[_0x4c7a80(0x58e)] = _0x33acd6,
                _0x2223f2[_0x4c7a80(0x552)] = 0.25,
                _0x475ab5[_0x4c7a80(0x552)] = 0x1,
                _0x4c237f())) : (_0x475ab5['texture'] = _0x24aaab,
                _0x2223f2[_0x4c7a80(0x58e)] = _0x33acd6,
                _0x475ab5[_0x4c7a80(0x552)] = 0.25,
                _0x2223f2[_0x4c7a80(0x552)] = 0.25,
                _0x48df10 = ![],
                _0x747c75 = 0x37,
                _0xf48252 = 0x1,
                _0x3ff99d = !![],
                clearInterval(_0x5a8046),
                _0x5a8046 = null),
                _0x597b17['keyCode'] == 0x5a && (_0x456264['z'] == 0x1 ? (_0x456264['h'] ? _0x456264['z'] = 1.6 : _0x456264['z'] = 1.2,
                _0x2ca05e[_0x4c7a80(0x58e)] = _0x2e6d64,
                _0x2ca05e[_0x4c7a80(0x552)] = 0x1) : (_0x456264['z'] = 0x1,
                _0x2ca05e[_0x4c7a80(0x58e)] = _0x1f8aa4,
                _0x2ca05e[_0x4c7a80(0x552)] = 0.25)));
                if (_0x36a055['on'] && _0x597b17[_0x4c7a80(0x417)] == 0x52) {
                    !window[_0x4c7a80(0x555)] && (window['lastRespawnTime'] = 0x0);
                    const _0x3bca02 = new Date()['getTime']()
                      , _0x4cfe5a = _0x3bca02 - window[_0x4c7a80(0x555)];
                    if (_0x4cfe5a < 0x3e8)
                        return;
                    window['lastRespawnTime'] = _0x3bca02;
                    _0x456264['pi'] && _0x456264['pn'] && ($(_0x4c7a80(0x459))[_0x4c7a80(0xfa)](_0x456264['pi']),
                    $(_0x4c7a80(0x6c2))[_0x4c7a80(0xfa)](_0x456264['pn']),
                    $(_0x4c7a80(0x401))[_0x4c7a80(0xfa)]($(_0x4c7a80(0x459))[_0x4c7a80(0xfa)]()),
                    $(_0x4c7a80(0x3ec))[_0x4c7a80(0xfa)]($(_0x4c7a80(0x6c2))['val']()));
                    _0x456264['r1'] = !![];
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['uj'] === _0x4c7a80(0x61f)) {
                            ooo['Mh']['uj'](),
                            setTimeout(function() {
                                var _0x45ac17 = _0x4c7a80;
                                document['getElementById'](_0x45ac17(0x57b))[_0x45ac17(0x3db)]();
                            }, 0x12c);
                            return;
                        }
                    } catch (_0x5a9c01) {}
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['gr'] === _0x4c7a80(0x61f))
                            ooo['Mh']['gr']();
                        else {
                            if (ooo['Mh'] && ooo['Mh']['Rq']) {
                                try {
                                    ooo['Mh']['go'] = 0x3;
                                } catch (_0x2ae8cd) {}
                                ooo['Mh']['Rq'][_0x4c7a80(0x21d)]();
                            }
                        }
                        setTimeout(function() {
                            var _0x4361b7 = _0x4c7a80;
                            try {
                                const _0x3e8020 = document[_0x4361b7(0x2f2)](_0x4361b7(0x2b1));
                                _0x3e8020[_0x4361b7(0x151)](_0x17280b => {
                                    var _0x11f505 = _0x4361b7;
                                    try {
                                        _0x17280b[_0x11f505(0x3a7)]['display'] = _0x11f505(0x15d);
                                    } catch (_0x54ecff) {}
                                }
                                );
                            } catch (_0x2d5d81) {}
                            document['getElementById']('mm-action-play')[_0x4361b7(0x3db)]();
                        }, 0x15e);
                    } catch (_0x3e6bc9) {
                        document['getElementById'](_0x4c7a80(0x57b))[_0x4c7a80(0x3db)]();
                    }
                }
                _0x36a055['on'] && _0x597b17[_0x4c7a80(0x417)] == 0x38 && (document['getElementById'](_0x4c7a80(0x695))[_0x4c7a80(0x3db)](),
                _0x456264['sn'] ? _0x456264['sn'] = ![] : _0x456264['sn'] = !![]),
                _0x597b17[_0x4c7a80(0x417)] === 0x20 && (_0x79316f['eo'] = ![]);
            }),
            _0x483c80(),
            window[_0x38a7eb(0xfe)]('load', function() {
                var _0x1767e3 = _0x38a7eb;
                if (_0x456264[_0x1767e3(0x2d0)]) {
                    var _0x41e32a = _0x456264[_0x1767e3(0x2d0)];
                    for (var _0x3fabb1 = 0x0; _0x3fabb1 < _0x19bd13[_0x1767e3(0x454)]; _0x3fabb1++) {
                        if (_0x19bd13[_0x3fabb1][_0x1767e3(0x1bb)] === _0x41e32a) {
                            _0xa44051 = _0x3fabb1;
                            break;
                        }
                    }
                }
            }),
            _0x4809b8[_0x38a7eb(0xfe)](_0x38a7eb(0x707), function(_0x38bf3f) {
                var _0x2a6199 = _0x38a7eb;
                if (_0x36a055['on'] && _0x456264[_0x2a6199(0x376)] && _0x456264['mo'] != 0x6 && _0x456264['s']) {
                    var _0x254a8c = btoa(_0x456264[_0x2a6199(0x1bd)]);
                    if (_0x456264[_0x2a6199(0x395)]['x'] != -0x1 && _0x456264[_0x2a6199(0x395)]['y'] == -0x1 && btoa(_0x254a8c) == _0x456264[_0x2a6199(0x49c)] || _0x456264[_0x2a6199(0x37c)]['x'] == -0x1 && _0x456264['mo2']['y'] != -0x1 && btoa(_0x254a8c) == _0x456264['d_1']) {
                        var _0x18b44c = ooo['Xg']['Kf']['Wg']['Ah']
                          , _0x27b5c5 = _0x4809b8[_0x2a6199(0x18d)]
                          , _0x4fa95f = _0x4809b8['offsetWidth']
                          , _0x134c54 = _0x27b5c5 * 0.5
                          , _0x1a793b = _0x4fa95f * 0.5
                          , _0x44d799 = btoa(_0x456264[_0x2a6199(0x6ae)]);
                        for (let _0x2f4f95 = 0x0; _0x2f4f95 < _0x38bf3f[_0x2a6199(0x545)][_0x2a6199(0x454)]; _0x2f4f95++) {
                            var _0x39138b = _0x38bf3f[_0x2a6199(0x545)][_0x2f4f95][_0x2a6199(0x705)]
                              , _0x3f9a81 = _0x38bf3f[_0x2a6199(0x545)][_0x2f4f95]['pageY']
                              , _0x1b97f8 = _0x38bf3f[_0x2a6199(0x545)][_0x2f4f95][_0x2a6199(0x5ee)];
                            _0x456264['mo'] == 0x1 && btoa(_0x44d799) == _0x456264['d_2'] && (_0x27b5c5 *= 0.5,
                            _0x4fa95f *= 0.5);
                            _0x456264['mo'] == 0x2 && btoa(_0x44d799) == _0x456264['d_2'] && (_0x27b5c5 = _0x18b44c[_0x2a6199(0x2ce)]['y'] + 0x6e,
                            _0x4fa95f = _0x18b44c[_0x2a6199(0x2ce)]['x'] + 0x6e);
                            _0x456264['mo'] == 0x3 && btoa(_0x44d799) == _0x456264[_0x2a6199(0x445)] && (_0x27b5c5 = _0x18b44c['img_o_3']['y'] + 0x6e,
                            _0x4fa95f = _0x18b44c[_0x2a6199(0x1c4)]['x'] + 0x6e);
                            (_0x456264['mo'] == 0x4 && btoa(_0x44d799) == _0x456264[_0x2a6199(0x445)] || _0x456264['mo'] == 0x5 && btoa(_0x44d799) == _0x456264[_0x2a6199(0x445)]) && (_0x27b5c5 = _0x18b44c[_0x2a6199(0x24d)]['y'] + 0x6e,
                            _0x4fa95f = _0x18b44c[_0x2a6199(0x24d)]['x'] + 0x6e);
                            var _0x206fbd = btoa(_0x456264[_0x2a6199(0xf3)])
                              , _0x2748e2 = Math[_0x2a6199(0x1e1)](_0x3f9a81 - _0x27b5c5, _0x39138b - _0x4fa95f)
                              , _0xe6819 = Math[_0x2a6199(0x2b9)](_0x2748e2)
                              , _0x58b568 = Math[_0x2a6199(0x3c9)](_0x2748e2)
                              , _0xa6f3e4 = btoa(_0x456264['c_4'])
                              , _0x1c521c = _0x456264[_0x2a6199(0x395)]['x'] == _0x1b97f8;
                            btoa(_0x456264[_0x2a6199(0x380)]);
                            if (_0x1c521c && btoa(_0xa6f3e4) == _0x456264['d_4']) {
                                if (_0x39138b <= 0x0 || _0x3f9a81 <= 0x0)
                                    _0x456264[_0x2a6199(0x395)]['x'] = -0x1,
                                    _0x456264['mo'] == 0x1 && (_0x18b44c[_0x2a6199(0x68a)][_0x2a6199(0x552)] = 0.25),
                                    _0x456264['mo'] == 0x2 && (_0x18b44c['img_o_2']['alpha'] = 0.25,
                                    _0x18b44c[_0x2a6199(0x7c1)][_0x2a6199(0x552)] = 0.25,
                                    _0x18b44c[_0x2a6199(0x558)]['alpha'] = 0.25),
                                    _0x456264['mo'] == 0x3 && (_0x18b44c[_0x2a6199(0x1c4)][_0x2a6199(0x552)] = 0.25,
                                    _0x18b44c['img_i_3'][_0x2a6199(0x552)] = 0.25,
                                    _0x18b44c[_0x2a6199(0x5c9)][_0x2a6199(0x552)] = 0.25),
                                    (_0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x18b44c[_0x2a6199(0x558)]['alpha'] = 0.25);
                                else {
                                    _0x79316f['fo'] = _0x2748e2;
                                    var _0x3a27f3 = 0x32;
                                    (_0x456264['mo'] == 0x1 || _0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x3a27f3 = 0x6e);
                                    var _0x578c17 = _0x4fa95f - _0x39138b
                                      , _0x392676 = _0x27b5c5 - _0x3f9a81
                                      , _0x4dc16a = Math['sqrt'](_0x578c17 * _0x578c17 + _0x392676 * _0x392676)
                                      , _0x4208ed = _0x1a793b + _0x4dc16a * _0xe6819 - 0x44
                                      , _0x4a6db0 = _0x134c54 + _0x4dc16a * _0x58b568 - 0x44
                                      , _0x155028 = _0x1a793b + _0x3a27f3 * _0xe6819 - 0x44
                                      , _0x52d009 = _0x134c54 + _0x3a27f3 * _0x58b568 - 0x44
                                      , _0x3cc247 = _0x1a793b + _0xe6819 * 0x4b - 0x44
                                      , _0x12e5d0 = _0x134c54 + _0x58b568 * 0x4b - 0x44
                                      , _0x3672b5 = _0x39138b - 0x55
                                      , _0x2355c7 = _0x3f9a81 - 0x55
                                      , _0x151be4 = _0x4fa95f + _0x3a27f3 * _0xe6819 - 0x55
                                      , _0x168645 = _0x27b5c5 + _0x3a27f3 * _0x58b568 - 0x55
                                      , _0x575684 = _0x4fa95f + _0xe6819 * 0x3 - 0x6e
                                      , _0x2d1bca = _0x27b5c5 + _0x58b568 * 0x3 - 0x6e;
                                    _0x4dc16a < _0x3a27f3 ? (_0x456264[_0x2a6199(0x37c)]['x'] == -0x1 && _0x456264[_0x2a6199(0x37c)]['y'] != -0x1 ? (_0x18b44c['img_pf_1']['x'] = _0x4208ed,
                                    _0x18b44c[_0x2a6199(0x451)]['y'] = _0x4a6db0) : (_0x456264['mo'] == 0x1 && (_0x18b44c[_0x2a6199(0x68a)]['x'] = _0x4208ed,
                                    _0x18b44c[_0x2a6199(0x68a)]['y'] = _0x4a6db0),
                                    (_0x456264['mo'] == 0x2 || _0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x18b44c[_0x2a6199(0x558)]['x'] = _0x4208ed,
                                    _0x18b44c['img_p_2']['y'] = _0x4a6db0),
                                    _0x456264['mo'] == 0x3 && (_0x18b44c['img_p_3']['x'] = _0x4208ed,
                                    _0x18b44c[_0x2a6199(0x5c9)]['y'] = _0x4a6db0)),
                                    _0x456264['mo'] == 0x2 && (_0x18b44c[_0x2a6199(0x7c1)]['y'] = _0x2355c7,
                                    _0x18b44c[_0x2a6199(0x7c1)]['x'] = _0x3672b5),
                                    _0x456264['mo'] == 0x3 && (_0x18b44c[_0x2a6199(0x4a5)]['y'] = _0x2355c7,
                                    _0x18b44c['img_i_3']['x'] = _0x3672b5)) : (_0x456264[_0x2a6199(0x37c)]['x'] == -0x1 && _0x456264[_0x2a6199(0x37c)]['y'] != -0x1 ? (_0x18b44c['img_pf_1']['x'] = _0x155028,
                                    _0x18b44c[_0x2a6199(0x451)]['y'] = _0x52d009,
                                    (_0x456264['mo'] == 0x2 || _0x456264['mo'] == 0x3) && (_0x4dc16a < 0x4b ? (_0x18b44c[_0x2a6199(0x451)]['x'] = _0x4208ed,
                                    _0x18b44c[_0x2a6199(0x451)]['y'] = _0x4a6db0) : (_0x18b44c[_0x2a6199(0x451)]['x'] = _0x3cc247,
                                    _0x18b44c['img_pf_1']['y'] = _0x12e5d0))) : (_0x456264['mo'] == 0x1 && (_0x18b44c[_0x2a6199(0x68a)]['x'] = _0x155028,
                                    _0x18b44c[_0x2a6199(0x68a)]['y'] = _0x52d009),
                                    (_0x456264['mo'] == 0x2 || _0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x18b44c[_0x2a6199(0x558)]['x'] = _0x155028,
                                    _0x18b44c[_0x2a6199(0x558)]['y'] = _0x52d009,
                                    _0x456264['mo'] == 0x2 && (_0x4dc16a < 0x4b ? (_0x18b44c['img_p_2']['x'] = _0x4208ed,
                                    _0x18b44c['img_p_2']['y'] = _0x4a6db0) : (_0x18b44c[_0x2a6199(0x558)]['x'] = _0x3cc247,
                                    _0x18b44c[_0x2a6199(0x558)]['y'] = _0x12e5d0))),
                                    _0x456264['mo'] == 0x3 && (_0x4dc16a < 0x4b ? (_0x18b44c[_0x2a6199(0x5c9)]['x'] = _0x4208ed,
                                    _0x18b44c[_0x2a6199(0x5c9)]['y'] = _0x4a6db0) : (_0x18b44c[_0x2a6199(0x5c9)]['x'] = _0x3cc247,
                                    _0x18b44c['img_p_3']['y'] = _0x12e5d0))),
                                    _0x456264['mo'] == 0x2 && (_0x18b44c[_0x2a6199(0x7c1)]['y'] = _0x168645,
                                    _0x18b44c[_0x2a6199(0x7c1)]['x'] = _0x151be4),
                                    _0x456264['mo'] == 0x3 && (_0x18b44c[_0x2a6199(0x4a5)]['y'] = _0x168645,
                                    _0x18b44c[_0x2a6199(0x4a5)]['x'] = _0x151be4,
                                    _0x18b44c[_0x2a6199(0x1c4)]['y'] = _0x2d1bca,
                                    _0x18b44c[_0x2a6199(0x1c4)]['x'] = _0x575684));
                                }
                            } else {
                                if ((_0x1c521c = _0x456264[_0x2a6199(0x37c)]['y'] == _0x1b97f8) && btoa(_0x206fbd) == _0x456264['d_5']) {
                                    if (_0x39138b <= 0x0 || _0x3f9a81 <= 0x0)
                                        _0x456264[_0x2a6199(0x37c)]['y'] = -0x1,
                                        _0x18b44c['img_f'][_0x2a6199(0x712)] = ![],
                                        _0x18b44c[_0x2a6199(0x451)][_0x2a6199(0x712)] = ![],
                                        _0x456264['mo'] == 0x1 && (_0x18b44c[_0x2a6199(0x68a)][_0x2a6199(0x712)] = !![]),
                                        (_0x456264['mo'] == 0x2 || _0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x18b44c['img_p_2'][_0x2a6199(0x712)] = !![]),
                                        _0x456264['mo'] == 0x3 && (_0x18b44c[_0x2a6199(0x5c9)][_0x2a6199(0x712)] = !![]),
                                        (_0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x18b44c['img_f'][_0x2a6199(0x712)] = !![]),
                                        _0x79316f['eo'] = ![];
                                    else {
                                        if (_0x456264['mo'] == 0x3) {
                                            _0xe6819 = Math[_0x2a6199(0x2b9)](_0x2748e2 = Math[_0x2a6199(0x1e1)](_0x3f9a81 - (_0x27b5c5 = _0x18b44c[_0x2a6199(0x5b8)]['y'] + 0x64), _0x39138b - (_0x4fa95f = _0x18b44c[_0x2a6199(0x5b8)]['x'] + 0x64))),
                                            _0x58b568 = Math[_0x2a6199(0x3c9)](_0x2748e2);
                                            var _0x3672b5 = _0x4fa95f + _0xe6819 * 0x3 - 0x64
                                              , _0x2355c7 = _0x27b5c5 + _0x58b568 * 0x3 - 0x64
                                              , _0x578c17 = _0x4fa95f - _0x39138b
                                              , _0x392676 = _0x27b5c5 - _0x3f9a81
                                              , _0x4dc16a = Math[_0x2a6199(0x3cb)](_0x578c17 * _0x578c17 + _0x392676 * _0x392676);
                                            _0x4dc16a >= 0x28 && (_0x18b44c[_0x2a6199(0x5b8)]['y'] = _0x3672b5,
                                            _0x18b44c['img_f']['x'] = _0x2355c7);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else
                    (!_0x3891b7() || !_0x456264[_0x2a6199(0x4c0)]['checked']) && ((_0x38bf3f = _0x38bf3f || window[_0x2a6199(0x732)]) && ((_0x38bf3f = _0x38bf3f[_0x2a6199(0x1c8)][0x0])[_0x2a6199(0x199)] !== undefined ? _0x79316f['fo'] = Math[_0x2a6199(0x1e1)](_0x38bf3f[_0x2a6199(0x6ec)] - _0x4809b8[_0x2a6199(0x18d)] * 0.5, _0x38bf3f['clientX'] - _0x4809b8[_0x2a6199(0x6da)] * 0.5) : _0x79316f['fo'] = Math['atan2'](_0x38bf3f['pageY'] - _0x4809b8['offsetHeight'] * 0.5, _0x38bf3f[_0x2a6199(0x705)] - _0x4809b8[_0x2a6199(0x6da)] * 0.5)));
            }, !![]),
            _0x4809b8['addEventListener']('touchstart', function(_0xea273d) {
                var _0x24e4df = _0x38a7eb;
                if (_0x36a055['on'] && _0x456264[_0x24e4df(0x376)] && _0x456264['mo'] != 0x6 && _0x456264['s']) {
                    var _0x27afd9 = ooo['Xg']['Kf']['Wg']['Ah']
                      , _0x169f43 = btoa(_0x456264[_0x24e4df(0x5fe)])
                      , _0x4560c5 = _0x4809b8[_0x24e4df(0x18d)]
                      , _0xf6f55f = btoa(_0x456264[_0x24e4df(0x380)])
                      , _0x393302 = _0x4809b8[_0x24e4df(0x6da)]
                      , _0x2efcff = btoa(_0x456264['c_5'])
                      , _0x5bbe53 = (_0xea273d = _0xea273d || window['event'])[_0x24e4df(0x1c8)][_0x24e4df(0x771)](0x0)['pageX']
                      , _0x2327f2 = btoa(_0x456264['c_2'])
                      , _0x1971f0 = _0xea273d[_0x24e4df(0x1c8)][_0x24e4df(0x771)](0x0)['pageY']
                      , _0x10fdcc = _0xea273d['touches'][_0x24e4df(0x454)]
                      , _0x3503b0 = btoa(_0x456264[_0x24e4df(0x1bd)])
                      , _0x5f921d = _0xea273d['touches']['item'](0x0)[_0x24e4df(0x5ee)];
                    for (let _0xe258da = 0x0; _0xe258da < _0x10fdcc; _0xe258da++) {
                        _0x456264[_0x24e4df(0x37c)]['x'] == -0x1 && _0x456264[_0x24e4df(0x37c)]['y'] != -0x1 ? _0xea273d[_0x24e4df(0x1c8)]['item'](_0xe258da)[_0x24e4df(0x5ee)] != _0x456264[_0x24e4df(0x37c)]['y'] && (_0x5bbe53 = _0xea273d[_0x24e4df(0x1c8)]['item'](_0xe258da)[_0x24e4df(0x705)],
                        _0x1971f0 = _0xea273d[_0x24e4df(0x1c8)][_0x24e4df(0x771)](_0xe258da)[_0x24e4df(0x1b9)],
                        _0x5f921d = _0xea273d[_0x24e4df(0x1c8)]['item'](_0xe258da)['identifier']) : (_0x5bbe53 = _0xea273d[_0x24e4df(0x1c8)][_0x24e4df(0x771)](_0xe258da)[_0x24e4df(0x705)],
                        _0x1971f0 = _0xea273d[_0x24e4df(0x1c8)][_0x24e4df(0x771)](_0xe258da)[_0x24e4df(0x1b9)],
                        _0x5f921d = _0xea273d[_0x24e4df(0x1c8)][_0x24e4df(0x771)](_0xe258da)[_0x24e4df(0x5ee)]);
                    }
                    ;var _0x3eb8b6 = 0x0;
                    (_0x456264['mo'] == 0x4 && btoa(_0x2efcff) == _0x456264['d_5'] || _0x456264['mo'] == 0x5 && btoa(_0x169f43) == _0x456264[_0x24e4df(0x586)]) && (_0x3eb8b6 = Math[_0x24e4df(0x3cb)]((_0x5bbe53 - _0x27afd9['img_f']['x'] - 0x64) * (_0x5bbe53 - _0x27afd9[_0x24e4df(0x5b8)]['x'] - 0x64) + (_0x1971f0 - _0x27afd9[_0x24e4df(0x5b8)]['y'] - 0x64) * (_0x1971f0 - _0x27afd9['img_f']['y'] - 0x64)));
                    _0x10fdcc == 0x1 && (_0x456264['mo'] == 0x4 && _0x3eb8b6 > 0x28 || _0x456264['mo'] != 0x4) && (_0x456264['mo'] == 0x5 && _0x3eb8b6 > 0x28 || _0x456264['mo'] != 0x5) && (_0x456264[_0x24e4df(0x37c)]['y'] = -0x1,
                    _0x27afd9[_0x24e4df(0x5b8)]['visible'] = ![],
                    _0x27afd9[_0x24e4df(0x451)][_0x24e4df(0x712)] = ![],
                    _0x456264['mo'] == 0x1 && (_0x27afd9[_0x24e4df(0x68a)]['alpha'] = 0.25,
                    _0x27afd9['img_p_1'][_0x24e4df(0x712)] = !![]),
                    _0x456264['mo'] == 0x2 && (_0x27afd9['img_o_2'][_0x24e4df(0x552)] = 0.25,
                    _0x27afd9[_0x24e4df(0x7c1)][_0x24e4df(0x552)] = 0.25,
                    _0x27afd9[_0x24e4df(0x558)][_0x24e4df(0x552)] = 0.25,
                    _0x27afd9[_0x24e4df(0x558)]['visible'] = !![]),
                    _0x456264['mo'] == 0x3 && (_0x27afd9[_0x24e4df(0x1c4)][_0x24e4df(0x552)] = 0.25,
                    _0x27afd9['img_i_3'][_0x24e4df(0x552)] = 0.25,
                    _0x27afd9['img_p_3']['alpha'] = 0.25,
                    _0x27afd9[_0x24e4df(0x5c9)][_0x24e4df(0x712)] = !![]),
                    (_0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x27afd9[_0x24e4df(0x558)][_0x24e4df(0x552)] = 0.25,
                    _0x27afd9[_0x24e4df(0x558)][_0x24e4df(0x712)] = !![],
                    _0x27afd9[_0x24e4df(0x5b8)][_0x24e4df(0x712)] = !![]),
                    _0x79316f['eo'] = ![]);
                    if (_0x456264[_0x24e4df(0x395)]['x'] == -0x1 && _0x456264['mo1']['y'] == -0x1 && btoa(_0x169f43) == _0x456264['d_4'] && (_0x456264['mo'] == 0x4 && _0x3eb8b6 > 0x28 || _0x456264['mo'] != 0x4 && btoa(_0xf6f55f) == _0x456264[_0x24e4df(0x24e)]) && (_0x456264['mo'] == 0x5 && _0x3eb8b6 > 0x28 || _0x456264['mo'] != 0x5 && btoa(_0x2327f2) == _0x456264[_0x24e4df(0x445)])) {
                        _0x456264[_0x24e4df(0x395)]['x'] = _0x5f921d;
                        _0x456264[_0x24e4df(0x395)]['x'] == _0x456264[_0x24e4df(0x37c)]['y'] && _0x456264[_0x24e4df(0x395)]['y'] == _0x456264['mo2']['x'] && (_0x5bbe53 = _0xea273d[_0x24e4df(0x1c8)][_0x24e4df(0x771)](0x1)['pageX'],
                        _0x1971f0 = _0xea273d[_0x24e4df(0x1c8)][_0x24e4df(0x771)](0x1)[_0x24e4df(0x1b9)]);
                        var _0x569770 = _0x393302 * 0.5 - 0x44
                          , _0xf7e6da = _0x4560c5 * 0.5 - 0x44
                          , _0x329420 = _0x5bbe53 - 0x6e
                          , _0x360abd = _0x1971f0 - 0x6e
                          , _0x2bffdc = _0x5bbe53 - 0x55
                          , _0x4ac225 = _0x1971f0 - 0x55;
                        _0x456264['mo'] == 0x1 && _0x456264[_0x24e4df(0x37c)]['x'] == -0x1 && _0x456264['mo2']['y'] == -0x1 && (_0x27afd9['img_p_1'][_0x24e4df(0x552)] = 0x1,
                        _0x27afd9[_0x24e4df(0x68a)]['x'] = _0x569770,
                        _0x27afd9[_0x24e4df(0x68a)]['y'] = _0xf7e6da,
                        _0x27afd9[_0x24e4df(0x68a)][_0x24e4df(0x712)] = !![]),
                        _0x456264['mo'] == 0x2 && (_0x27afd9[_0x24e4df(0x2ce)][_0x24e4df(0x552)] = 0x1,
                        _0x27afd9['img_o_2']['x'] = _0x329420,
                        _0x27afd9[_0x24e4df(0x2ce)]['y'] = _0x360abd,
                        _0x27afd9[_0x24e4df(0x7c1)]['alpha'] = 0x1,
                        _0x27afd9[_0x24e4df(0x7c1)]['x'] = _0x2bffdc,
                        _0x27afd9[_0x24e4df(0x7c1)]['y'] = _0x4ac225,
                        _0x456264[_0x24e4df(0x37c)]['x'] == -0x1 && _0x456264[_0x24e4df(0x37c)]['y'] == -0x1 && (_0x27afd9[_0x24e4df(0x558)][_0x24e4df(0x552)] = 0x1,
                        _0x27afd9[_0x24e4df(0x558)]['x'] = _0x569770,
                        _0x27afd9[_0x24e4df(0x558)]['y'] = _0xf7e6da,
                        _0x27afd9[_0x24e4df(0x558)][_0x24e4df(0x712)] = !![])),
                        _0x456264['mo'] == 0x3 && btoa(_0x2efcff) == _0x456264[_0x24e4df(0x2c6)] && (_0x27afd9[_0x24e4df(0x1c4)][_0x24e4df(0x552)] = 0x1,
                        _0x27afd9[_0x24e4df(0x1c4)]['x'] = _0x329420,
                        _0x27afd9[_0x24e4df(0x1c4)]['y'] = _0x360abd,
                        _0x27afd9[_0x24e4df(0x4a5)]['alpha'] = 0x1,
                        _0x27afd9[_0x24e4df(0x4a5)]['x'] = _0x2bffdc,
                        _0x27afd9[_0x24e4df(0x4a5)]['y'] = _0x4ac225,
                        _0x456264[_0x24e4df(0x37c)]['x'] == -0x1 && _0x456264[_0x24e4df(0x37c)]['y'] == -0x1 && (_0x27afd9[_0x24e4df(0x5c9)][_0x24e4df(0x552)] = 0x1,
                        _0x27afd9['img_p_3']['x'] = _0x569770,
                        _0x27afd9['img_p_3']['y'] = _0xf7e6da,
                        _0x27afd9['img_p_3']['visible'] = !![])),
                        _0x456264['mo'] == 0x4 && btoa(_0x2327f2) == _0x456264['d_2'] && _0x456264[_0x24e4df(0x37c)]['x'] == -0x1 && _0x456264['mo2']['y'] == -0x1 && (_0x27afd9[_0x24e4df(0x558)][_0x24e4df(0x552)] = 0x1,
                        _0x27afd9[_0x24e4df(0x558)]['x'] = _0x569770,
                        _0x27afd9[_0x24e4df(0x558)]['y'] = _0xf7e6da,
                        _0x27afd9['img_p_2'][_0x24e4df(0x712)] = !![]),
                        _0x456264['mo'] == 0x5 && btoa(_0xf6f55f) == _0x456264[_0x24e4df(0x24e)] && _0x456264[_0x24e4df(0x37c)]['x'] == -0x1 && _0x456264[_0x24e4df(0x37c)]['y'] == -0x1 && (_0x27afd9[_0x24e4df(0x558)][_0x24e4df(0x552)] = 0x1,
                        _0x27afd9['img_p_2']['x'] = _0x569770,
                        _0x27afd9[_0x24e4df(0x558)]['y'] = _0xf7e6da,
                        _0x27afd9['img_p_2'][_0x24e4df(0x712)] = !![]);
                    } else
                        (_0x10fdcc >= 0x2 && _0x456264[_0x24e4df(0x37c)]['x'] == -0x1 && _0x456264[_0x24e4df(0x37c)]['y'] == -0x1 && btoa(_0xf6f55f) == _0x456264['d_3'] || _0x10fdcc == 0x1 && _0x456264['mo'] == 0x4 && _0x3eb8b6 <= 0x28 && btoa(_0x3503b0) == _0x456264['d_1'] || _0x10fdcc == 0x1 && _0x456264['mo'] == 0x5 && _0x3eb8b6 <= 0x28 && btoa(_0x2327f2) == _0x456264['d_2']) && (_0x456264[_0x24e4df(0x37c)]['y'] = _0x5f921d,
                        _0x27afd9[_0x24e4df(0x5b8)][_0x24e4df(0x712)] = !![],
                        _0x27afd9['img_pf_1']['visible'] = !![],
                        _0x456264['mo'] == 0x1 && (_0x27afd9[_0x24e4df(0x68a)][_0x24e4df(0x712)] = ![],
                        _0x27afd9[_0x24e4df(0x451)]['x'] = _0x27afd9['img_p_1']['x'],
                        _0x27afd9[_0x24e4df(0x451)]['y'] = _0x27afd9['img_p_1']['y']),
                        (_0x456264['mo'] == 0x2 || _0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x27afd9[_0x24e4df(0x558)]['visible'] = ![],
                        _0x27afd9[_0x24e4df(0x451)]['x'] = _0x27afd9['img_p_2']['x'],
                        _0x27afd9[_0x24e4df(0x451)]['y'] = _0x27afd9[_0x24e4df(0x558)]['y']),
                        _0x456264['mo'] == 0x3 && btoa(_0xf6f55f) == _0x456264[_0x24e4df(0x24e)] && (_0x27afd9[_0x24e4df(0x5c9)][_0x24e4df(0x712)] = ![],
                        _0x27afd9[_0x24e4df(0x451)]['x'] = _0x27afd9[_0x24e4df(0x5c9)]['x'],
                        _0x27afd9[_0x24e4df(0x451)]['y'] = _0x27afd9[_0x24e4df(0x5c9)]['y']),
                        _0x456264['mo'] != 0x4 && _0x456264['mo'] != 0x5 && (_0x27afd9[_0x24e4df(0x5b8)]['x'] = _0x5bbe53 - 0x64,
                        _0x27afd9[_0x24e4df(0x5b8)]['y'] = _0x1971f0 - 0x64),
                        _0x79316f['eo'] = !![]);
                    ;_0xea273d[_0x24e4df(0x64f)]();
                } else
                    (_0xea273d = _0xea273d || window[_0x24e4df(0x732)]) && (_0x79316f['eo'] = _0xea273d[_0x24e4df(0x1c8)]['length'] >= 0x2),
                    _0xea273d['preventDefault']();
            }, !![]),
            _0x4809b8[_0x38a7eb(0xfe)]('touchend', function(_0x4d2fd4) {
                var _0x315493 = _0x38a7eb;
                if (_0x36a055['on'] && _0x456264[_0x315493(0x376)] && _0x456264['mo'] != 0x6 && _0x456264['s']) {
                    var _0x8b37b0 = ooo['Xg']['Kf']['Wg']['Ah']
                      , _0x27fa30 = btoa(_0x456264[_0x315493(0x1bd)]);
                    (_0x4d2fd4 = _0x4d2fd4 || window[_0x315493(0x732)]) && ((_0x4d2fd4 = _0x4d2fd4[_0x315493(0x545)][0x0])[_0x315493(0x199)] !== undefined ? _0x4858a3(_0x4d2fd4[_0x315493(0x199)], _0x4d2fd4[_0x315493(0x6ec)]) : _0x4858a3(_0x4d2fd4[_0x315493(0x705)], _0x4d2fd4[_0x315493(0x1b9)]));
                    var _0x22899e = btoa(_0x456264['c_2'])
                      , _0x6b11d9 = _0x4d2fd4['identifier'];
                    _0x6b11d9 == _0x456264[_0x315493(0x395)]['x'] && _0x456264[_0x315493(0x395)]['y'] == -0x1 && btoa(_0x22899e) == _0x456264[_0x315493(0x445)] && (_0x456264[_0x315493(0x395)]['x'] = -0x1,
                    _0x456264['mo'] == 0x1 && (_0x8b37b0['img_p_1'][_0x315493(0x552)] = 0.25),
                    _0x456264['mo'] == 0x2 && (_0x8b37b0[_0x315493(0x2ce)][_0x315493(0x552)] = 0.25,
                    _0x8b37b0[_0x315493(0x7c1)]['alpha'] = 0.25,
                    _0x8b37b0[_0x315493(0x558)][_0x315493(0x552)] = 0.25),
                    _0x456264['mo'] == 0x3 && btoa(_0x27fa30) == _0x456264[_0x315493(0x49c)] && (_0x8b37b0[_0x315493(0x1c4)][_0x315493(0x552)] = 0.25,
                    _0x8b37b0[_0x315493(0x4a5)][_0x315493(0x552)] = 0.25,
                    _0x8b37b0[_0x315493(0x5c9)]['alpha'] = 0.25),
                    _0x456264['mo'] == 0x4 && (_0x8b37b0[_0x315493(0x558)][_0x315493(0x552)] = 0.25),
                    _0x456264['mo'] == 0x5 && (_0x8b37b0[_0x315493(0x558)]['alpha'] = 0.25));
                    var _0x3ade4f = btoa(_0x456264[_0x315493(0x380)]);
                    _0x456264['mo2']['x'] == -0x1 && _0x6b11d9 == _0x456264[_0x315493(0x37c)]['y'] && btoa(_0x3ade4f) == _0x456264[_0x315493(0x24e)] && (_0x456264[_0x315493(0x37c)]['y'] = -0x1,
                    _0x8b37b0[_0x315493(0x5b8)][_0x315493(0x712)] = ![],
                    _0x8b37b0[_0x315493(0x451)]['visible'] = ![],
                    _0x456264['mo'] == 0x1 && (_0x8b37b0['img_p_1']['visible'] = !![]),
                    (_0x456264['mo'] == 0x2 || _0x456264['mo'] == 0x4 && btoa(_0x22899e) == _0x456264[_0x315493(0x445)] || _0x456264['mo'] == 0x5 && btoa(_0x3ade4f) == _0x456264[_0x315493(0x24e)]) && (_0x8b37b0['img_p_2'][_0x315493(0x712)] = !![]),
                    _0x456264['mo'] == 0x3 && (_0x8b37b0[_0x315493(0x5c9)]['visible'] = !![]),
                    (_0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5) && (_0x8b37b0['img_f'][_0x315493(0x712)] = !![]),
                    _0x79316f['eo'] = ![]);
                } else
                    (_0x4d2fd4 = _0x4d2fd4 || window[_0x315493(0x732)]) && (_0x79316f['eo'] = _0x4d2fd4[_0x315493(0x1c8)][_0x315493(0x454)] >= 0x2),
                    _0x456264['mobile'] && _0x456264['s'] && (_0x4d2fd4 = _0x4d2fd4 || window[_0x315493(0x732)]) && ((_0x4d2fd4 = _0x4d2fd4['changedTouches'][0x0])[_0x315493(0x199)] !== undefined ? _0x4858a3(_0x4d2fd4[_0x315493(0x199)], _0x4d2fd4['clientY']) : _0x4858a3(_0x4d2fd4[_0x315493(0x705)], _0x4d2fd4[_0x315493(0x1b9)]));
            }, !![]),
            _0x4809b8[_0x38a7eb(0xfe)](_0x38a7eb(0x11a), function(_0x554b44) {
                var _0x357815 = _0x38a7eb;
                (_0x554b44 = _0x554b44 || _0x21385e['c'][_0x357815(0x732)] && _typeof(_0x554b44['clientX']) != 'undefined') && (_0x79316f['fo'] = _0x5d1bbd['ta'](_0x554b44[_0x357815(0x6ec)] - _0x4809b8['offsetHeight'] * 0.5, _0x554b44[_0x357815(0x199)] - _0x4809b8[_0x357815(0x6da)] * 0.5));
            }, !![]),
            _0x4809b8[_0x38a7eb(0xfe)]('mousedown', function(_0x5c3752) {
                _0x79316f['eo'] = !![];
            }, !![]),
            _0x4809b8['addEventListener'](_0x38a7eb(0x5c6), function(_0xecbb26) {
                _0x79316f['eo'] = ![];
            }, !![]),
            this['Wg'] = new _0x21385e['lh'](_0x157aa5),
            this['go'] = _0x46328c['ho'],
            this['fo'] = 0x0,
            this['eo'] = ![],
            _0x36a055[_0x38a7eb(0x1f6)] = _0x79316f;
        }))['prototype']['Sa'] = function() {}
        ,
        _0x58d58f[_0x2413a9(0x551)]['ml'] = function() {
            _0x21385e['Nf']['rg'](![]),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tf'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Rn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Sn'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tn'], 0x1f4),
            this['go'] === _0x46328c['ho'] ? _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x1) : _0x3f9428['f']['g'](_0x21385e['Uf']['Un'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0x32);
        }
        ,
        _0x58d58f[_0x2413a9(0x551)]['ho'] = function() {
            return this['go'] = _0x46328c['ho'],
            this;
        }
        ,
        _0x58d58f['prototype']['io'] = function() {
            return _0x3f9428['f']['h'](_0x25352f, 0x1),
            _0x5d1bbd['Y'](function() {
                _0x3f9428['f']['g'](_0x25352f, 0x1f4);
            }, 0xbb8),
            _0x3f9428['f']['h'](_0x289bfd, 0x1),
            _0x5d1bbd['Y'](function() {
                _0x3f9428['f']['g'](_0x289bfd, 0x1f4);
            }, 0x1f4),
            this['go'] = _0x46328c['io'],
            this;
        }
        ,
        _0x58d58f[_0x2413a9(0x551)]['nl'] = function() {
            this['eo'] = ![],
            this['Wg']['qg'](),
            this['go'] === _0x46328c['io'] && ooo['ij']['mf']();
        }
        ,
        _0x58d58f[_0x2413a9(0x551)]['qg'] = function() {
            this['Wg']['qg']();
        }
        ,
        _0x58d58f[_0x2413a9(0x551)]['ug'] = function(_0x35a222, _0x4fe482) {
            this['Wg']['ug'](_0x35a222, _0x4fe482);
        }
        ,
        _0x58d58f[_0x2413a9(0x551)]['jo'] = function(_0x55307a, _0x40b898, _0x5f4649) {
            var _0x27f5dc = _0x2413a9, _0x5140b7, _0x5eaed6, _0x176d1d;
            _0x40b898 >= 0x1 && _0x40b898 <= 0xa ? (_0x5140b7 = _0x5d1bbd['U'](_0x27f5dc(0x728) + _0x40b898),
            _0x5eaed6 = _0x5d1bbd['U'](_0x27f5dc(0x7c9)),
            _0x176d1d = _0x5d1bbd['U'](_0x27f5dc(0x3b9))[_0x27f5dc(0xe3)](_0x27f5dc(0x299), _0x5f4649)['replace']('{1}', _0x55307a)[_0x27f5dc(0xe3)]('{2}', _0x5140b7)) : (_0x5140b7 = '',
            _0x5eaed6 = _0x5d1bbd['U']('index.game.result.tryHit'),
            _0x176d1d = _0x5d1bbd['U'](_0x27f5dc(0x476))['replace'](_0x27f5dc(0x299), _0x5f4649)[_0x27f5dc(0xe3)](_0x27f5dc(0x4a3), _0x55307a));
            _0x142d97[_0x27f5dc(0x3b1)](_0x5d1bbd['U'](_0x27f5dc(0x596))),
            _0x3ed9c8[_0x27f5dc(0x3b1)](_0x55307a),
            _0x26ed4a[_0x27f5dc(0x3b1)](_0x5140b7),
            _0x582aa7[_0x27f5dc(0x3b1)](_0x5eaed6);
            if (_0x52ace1['co']['bo']) {
                var _0x2c10e1, _0x52a8d6, _0x56c900, _0x336734, _0x594b6a, _0x11728b, _0x2e6ec2, _0x46bd10 = _0x5d1bbd['U']('index.game.result.share');
                _0x5d1bbd['U'](_0x27f5dc(0x13f)),
                _0x5bf774[_0x27f5dc(0x78c)]()['append']((_0x2c10e1 = _0x46bd10,
                _0x52a8d6 = _0x27f5dc(0x213),
                _0x56c900 = _0x27f5dc(0x59e),
                _0x336734 = _0x176d1d,
                _0x594b6a = _0x176d1d,
                _0x11728b = _0x27f5dc(0x2a0),
                (_0x2e6ec2 = $(_0x27f5dc(0x256) + _0x2c10e1 + _0x27f5dc(0x5dd)))[_0x27f5dc(0x3db)](function() {
                    var _0x18bd65 = _0x27f5dc;
                    (typeof FB == 'undefined' ? _0x18bd65(0x111) : _typeof(FB)) !== 'undefined' && _typeof(FB['ui']) != 'undefined' && FB['ui']({
                        'method': _0x18bd65(0x2c5),
                        'display': _0x18bd65(0x4f8),
                        'link': _0x52a8d6,
                        'name': _0x56c900,
                        'caption': _0x336734,
                        'description': _0x594b6a,
                        'picture': _0x11728b
                    }, function() {});
                }),
                _0x2e6ec2));
            }
        }
        ,
        _0x58d58f[_0x2413a9(0x551)]['ko'] = function() {
            return this['fo'];
        }
        ,
        _0x58d58f['prototype']['lo'] = function() {
            return this['eo'];
        }
        ,
        _0x46328c = {
            'ho': 0x0,
            'io': 0x1
        },
        _0x21385e['Bk'] = _0x58d58f,
        _0x23c875 = $(_0x2413a9(0x183)),
        _0x593878 = $('#loading-progress-bar'),
        _0x31e094 = $(_0x2413a9(0x236)),
        (_0xf71ea = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            _0x21385e['Uf']['call'](this, _0x21385e['ll']['ao']),
            this['mo'] = -0x1,
            this['no'] = '';
        }))[_0x2413a9(0x551)]['Sa'] = function() {}
        ,
        _0xf71ea[_0x2413a9(0x551)]['ml'] = function() {
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tf'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Rn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Sn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Yn'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0x32);
        }
        ,
        _0xf71ea[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['Ye'](_0x21385e['Pe']['Se']['Re']),
            ooo['Xg']['Ak']['wg'](),
            ooo['Xg']['Ak']['sg'](!![]);
        }
        ,
        _0xf71ea[_0x2413a9(0x551)]['hl'] = function() {
            ooo['Xg']['Ak']['sg'](![]);
        }
        ,
        _0xf71ea[_0x2413a9(0x551)]['oo'] = function() {
            this['po']('', 0x0),
            _0x3f9428['f']['g'](_0x23c875, 0x64);
        }
        ,
        _0xf71ea['prototype']['qo'] = function() {
            _0x3f9428['f']['h'](_0x23c875, 0x64);
        }
        ,
        _0xf71ea[_0x2413a9(0x551)]['po'] = function(_0xe5d6f0, _0x44f2be) {
            var _0x4127b7 = _0x2413a9;
            this['no'] !== _0xe5d6f0 && (this['no'] = _0xe5d6f0);
            var _0x55ce23 = _0x5d1bbd['fa'](_0x5d1bbd['_'](_0x44f2be * 0x64), 0x0, 0x64);
            this['mo'] !== _0x55ce23 && (_0x593878['css']('width', _0x55ce23 + '%'),
            _0x31e094[_0x4127b7(0x3b1)](_0x55ce23 + '\x20%'));
        }
        ,
        _0x21385e['$k'] = _0xf71ea,
        _0x593e4b = $('#mm-line-top'),
        $('#mm-line-center'),
        $(_0x2413a9(0x4e3)),
        _0x3dbf8f = $('#mm-bottom-buttons'),
        _0x1b2666 = $(_0x2413a9(0x127)),
        _0x473852 = $(_0x2413a9(0x16d)),
        _0x3a012b = $(_0x2413a9(0x3d0)),
        _0x1109fd = $(_0x2413a9(0x654)),
        $('#mm-event-text'),
        _0x143e51 = $('#mm-skin-canv'),
        _0x5f4125 = $(_0x2413a9(0x5e2)),
        _0x1a2c78 = $(_0x2413a9(0x7be)),
        _0x459abd = $('#mm-skin-over'),
        _0x136e99 = $(_0x2413a9(0xf4)),
        _0x2c6650 = $(_0x2413a9(0x6ba)),
        _0x18dcea = $(_0x2413a9(0x1c1)),
        _0x184079 = $(_0x2413a9(0x3b7)),
        _0x20d681 = $('#mm-action-guest'),
        _0x4de3dc = $(_0x2413a9(0x3a4)),
        _0x5c423a = $(_0x2413a9(0x6ef)),
        _0xd35179 = $(_0x2413a9(0x42d)),
        _0x16eb20 = $('#mm-leaders'),
        _0x2dfda6 = $(_0x2413a9(0x56d)),
        _0xe825f0 = $('#mm-coins-box'),
        _0x15591b = $(_0x2413a9(0x1a4)),
        _0x23b74d = $('#mm-player-username'),
        _0x43805b = $(_0x2413a9(0x5f2)),
        _0x3dd236 = $(_0x2413a9(0x281)),
        _0x1ac9bc = $('#mm-player-exp-val'),
        _0x14d2ad = $('#mm-player-level'),
        (_0x260ca0 = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            var _0x588c3e = _0x2413a9;
            _0x21385e['Uf'][_0x588c3e(0x11d)](this, _0x21385e['ll']['kl']),
            this['mo'] = -0x1,
            this['no'] = '';
            var _0x1196ec = [_0x588c3e(0x5aa), _0x588c3e(0x264), _0x588c3e(0x446), _0x588c3e(0x149), 'Name\x20Error', _0x588c3e(0x606), 'نظيف', _0x588c3e(0xff), _0x588c3e(0x566), _0x588c3e(0x3ff), _0x588c3e(0x536), _0x588c3e(0x550), _0x588c3e(0x15c), _0x588c3e(0x539)];
            function _0x58c883(_0x2b8221) {
                var _0x34c6db = _0x588c3e;
                if (!_0x2b8221)
                    return '';
                return _0x2b8221[_0x34c6db(0x6af)]()[_0x34c6db(0xe3)](/[^a-zA-Z0-9\u0600-\u06FF*]/g, '')[_0x34c6db(0xe3)](/[ـ]/g, '')['replace'](/[ًٌٍَُِّْ]/g, '')[_0x34c6db(0xe3)](/[أإآا]/g, 'ا')['replace'](/[ىي]/g, 'ي')[_0x34c6db(0xe3)](/[ة]/g, 'ه');
            }
            function _0x1bbae7(_0x23a81c, _0x325a6f) {
                var _0x11d9a5 = _0x588c3e;
                if (!_0x23a81c)
                    return ![];
                var _0x5c87eb = _0x23a81c[_0x11d9a5(0xe3)](/\*$/, '')
                  , _0x1e181a = _0x58c883(_0x5c87eb)
                  , _0x1fdd48 = Array[_0x11d9a5(0x291)](_0x325a6f) ? _0x325a6f : Object[_0x11d9a5(0x50b)](_0x325a6f);
                return _0x1fdd48['some'](function(_0x472f1f) {
                    var _0x2ba1d9 = _0x11d9a5
                      , _0x32e99f = _0x58c883(_0x472f1f);
                    return _0x1e181a[_0x2ba1d9(0x424)](_0x32e99f);
                });
            }
            window['handleNicknameChange'] = function(_0x5d7d2d) {
                var _0x8f95c7 = _0x588c3e;
                if (!_0x5d7d2d || _0x5d7d2d[_0x8f95c7(0x465)]() === '')
                    return '';
                if (_0x1bbae7(_0x5d7d2d, _0x1196ec))
                    return _0x8f95c7(0x14c);
                return _0x5d7d2d;
            }
            ,
            fetch(_0x588c3e(0x768))[_0x588c3e(0x268)](_0x4b4ff1 => _0x4b4ff1[_0x588c3e(0x55a)]())[_0x588c3e(0x268)](_0x143a6d => {
                var _0x1b75aa = _0x588c3e;
                _0x1196ec = Array[_0x1b75aa(0x291)](_0x143a6d) ? _0x143a6d : Object[_0x1b75aa(0x50b)](_0x143a6d);
            }
            )[_0x588c3e(0x2ef)](_0x548789 => {
                var _0x2cca68 = _0x588c3e;
                console[_0x2cca68(0x39e)](_0x2cca68(0xdb), _0x548789);
            }
            ),
            this['ro'] = new _0x21385e['Lm'](_0x143e51),
            _0x18dcea['click'](function() {
                ooo['ij']['if']();
            }),
            _0x143e51[_0x588c3e(0x3db)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Qk']));
            }),
            _0x5f4125[_0x588c3e(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['so']['kk']();
            }),
            _0x1a2c78[_0x588c3e(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['so']['jk']();
            }),
            _0x2c6650[_0x588c3e(0x506)](function(_0x528379) {
                _0x456264['r1'] = ![],
                _0x528379['keyCode'] === 0xd && ooo['to']();
            }),
            _0x184079['click'](function() {
                var _0x5600eb = _0x588c3e
                  , _0x55a896 = _0x2c6650[_0x5600eb(0xfa)]();
                _0x55a896 && _0x55a896['trim']() !== '' && _0x2c6650[_0x5600eb(0xfa)](window[_0x5600eb(0x2d1)](_0x55a896)),
                ooo['ij']['if'](),
                ooo['to']();
            }),
            _0x20d681['click'](function() {
                var _0x3d4beb = _0x588c3e
                  , _0x33d9db = _0x2c6650[_0x3d4beb(0xfa)]();
                _0x33d9db && _0x33d9db[_0x3d4beb(0x465)]() !== '' && _0x2c6650[_0x3d4beb(0xfa)](window['handleNicknameChange'](_0x33d9db)),
                ooo['ij']['if'](),
                ooo['to']();
            }),
            _0x4de3dc[_0x588c3e(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Nk']);
            }),
            _0x2dfda6[_0x588c3e(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hi']);
            }),
            _0x5c423a['click'](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Lk']));
            }),
            _0x16eb20[_0x588c3e(0x3db)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Jk']));
            }),
            _0xd35179[_0x588c3e(0x3db)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Sk']));
            }),
            _0xe825f0[_0x588c3e(0x3db)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hk']));
            }),
            this['uo'](),
            this['vo']();
            var _0x202895 = _0x21385e['Cg']['Og'](_0x21385e['Cg']['Ig']);
            _0x202895 !== _0x588c3e(0x75e) && _0x202895 !== _0x588c3e(0x7a2) && (_0x202895 = _0x588c3e(0x75e)),
            _0x18dcea[_0x588c3e(0xfa)](_0x202895);
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x4d2e46 = this;
            function _0x3910d5(_0x3220cf, _0x30750c) {
                var _0x5c1968 = _0x3903;
                _0x3220cf['pm'] && (_0x30750c['skinId'] = _0x3220cf['pm']['Tj'],
                _0x30750c['eyesId'] = _0x3220cf['pm']['Uj'],
                _0x30750c[_0x5c1968(0x4f4)] = _0x3220cf['pm']['Vj'],
                _0x30750c[_0x5c1968(0x4a6)] = _0x3220cf['pm']['Wj'],
                _0x30750c[_0x5c1968(0x5e9)] = _0x3220cf['pm']['Xj']);
            }
            ooo['ok']['fm'](function() {
                ooo['ok']['nk']() ? (_0x3910d5(_0x456264, ooo['ok']['xl']),
                ooo['so']['lk'](ooo['ok']['Ul'](), _0x21385e['_j']['$j']),
                ooo['so']['lk'](ooo['ok']['Vl'](), _0x21385e['_j']['ak']),
                ooo['so']['lk'](ooo['ok']['Wl'](), _0x21385e['_j']['bk']),
                ooo['so']['lk'](ooo['ok']['Xl'](), _0x21385e['_j']['dk']),
                ooo['so']['lk'](ooo['ok']['Yl'](), _0x21385e['_j']['ck'])) : (ooo['so']['lk'](ooo['wo'](), _0x21385e['_j']['$j']),
                ooo['so']['lk'](0x0, _0x21385e['_j']['ak']),
                ooo['so']['lk'](0x0, _0x21385e['_j']['bk']),
                ooo['so']['lk'](0x0, _0x21385e['_j']['dk']),
                ooo['so']['lk'](0x0, _0x21385e['_j']['ck']));
            }),
            ooo['ok']['fm'](function() {
                var _0x3b1894 = _0x3903;
                _0x184079[_0x3b1894(0x1cb)](ooo['ok']['nk']()),
                _0x4de3dc[_0x3b1894(0x1cb)](!ooo['ok']['nk']()),
                _0x20d681['toggle'](!ooo['ok']['nk']()),
                _0x16eb20[_0x3b1894(0x1cb)](ooo['ok']['nk']()),
                _0xd35179[_0x3b1894(0x1cb)](ooo['ok']['nk']()),
                _0xe825f0[_0x3b1894(0x1cb)](ooo['ok']['nk']()),
                _0x5c423a[_0x3b1894(0x1cb)](!![]),
                _0x2dfda6[_0x3b1894(0x1cb)](!![]),
                ooo['ok']['nk']() ? (_0x459abd[_0x3b1894(0x45a)](),
                _0x23b74d[_0x3b1894(0x3b1)](ooo['ok']['Ll']()),
                _0x15591b[_0x3b1894(0x107)]('src', ooo['ok']['Nl']()),
                _0x43805b[_0x3b1894(0x3b1)](ooo['ok']['Ql']()),
                _0x3dd236['width'](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'),
                _0x1ac9bc[_0x3b1894(0x3b1)](ooo['ok']['Sl']() + _0x3b1894(0x698) + ooo['ok']['Tl']()),
                _0x14d2ad[_0x3b1894(0x3b1)](ooo['ok']['Rl']()),
                _0x2c6650[_0x3b1894(0xfa)](ooo['ok']['Ml']())) : (_0x459abd['toggle'](_0x52ace1['co']['bo'] && !ooo['xo']()),
                _0x23b74d[_0x3b1894(0x3b1)](_0x23b74d[_0x3b1894(0x399)](_0x3b1894(0x43b))),
                _0x15591b[_0x3b1894(0x107)]('src', _0x52ace1['H']['M']),
                _0x43805b[_0x3b1894(0x3b1)]('10'),
                _0x3dd236[_0x3b1894(0x598)]('0'),
                _0x1ac9bc[_0x3b1894(0x3b1)](''),
                _0x14d2ad[_0x3b1894(0x3b1)](0x1),
                _0x2c6650[_0x3b1894(0xfa)](_0x21385e['Cg']['Og'](_0x21385e['Cg']['Jg'])));
            }),
            ooo['so']['fk'](function() {
                _0x4d2e46['ro']['Gm'](ooo['so']['ek']());
            });
        }
        ,
        _0x260ca0['prototype']['ml'] = function() {
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tf'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Rn'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Sn'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Vn'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0x32);
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['yo'] = function() {
            _0x3f9428['f']['g'](_0x593e4b, 0x1f4),
            _0x3f9428['f']['g'](_0x3dbf8f, 0x1f4),
            _0x3f9428['f']['g'](_0x1b2666, 0x1f4),
            _0x3f9428['f']['h'](_0x473852, 0x64);
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['zo'] = function() {
            _0x3f9428['f']['h'](_0x593e4b, 0x64),
            _0x3f9428['f']['h'](_0x3dbf8f, 0x64),
            _0x3f9428['f']['h'](_0x1b2666, 0x64),
            _0x3f9428['f']['g'](_0x473852, 0x1f4);
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['po'] = function(_0x51de8c, _0x5d18cd) {
            var _0xc4621a = _0x2413a9;
            this['no'] !== _0x51de8c && (this['no'] = _0x51de8c);
            var _0x38ae3b = _0x5d1bbd['fa'](_0x5d1bbd['_'](_0x5d18cd * 0x64), 0x0, 0x64);
            this['mo'] !== _0x38ae3b && (_0x3a012b['css'](_0xc4621a(0x598), _0x38ae3b + '%'),
            _0x1109fd[_0xc4621a(0x3b1)](_0x38ae3b + '\x20%'));
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['jf'](),
            this['ro']['rg'](!![]);
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['hl'] = function() {
            this['ro']['rg'](![]);
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['qg'] = function() {
            this['ro']['qg']();
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['ug'] = function(_0x16708d, _0x1a55d0) {
            this['ro']['ug']();
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['Ml'] = function() {
            var _0x174023 = _0x2413a9;
            return _0x2c6650[_0x174023(0xfa)]();
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['Ao'] = function() {
            return _0x18dcea['val']();
        }
        ,
        _0x260ca0[_0x2413a9(0x551)]['uo'] = function() {
            var _0x3ac9c3 = _0x2413a9
              , _0x42996d = $(_0x3ac9c3(0x747))[_0x3ac9c3(0x7ac)]()
              , _0x227600 = 0x0;
            _0x5d1bbd['X'](function() {
                var _0x37316c = _0x3ac9c3;
                _0x42996d['eq'](_0x227600)[_0x37316c(0x3cf)](0x1f4, function() {
                    var _0x5860df = _0x37316c;
                    ++_0x227600 >= _0x42996d[_0x5860df(0x454)] && (_0x227600 = 0x0),
                    _0x42996d['eq'](_0x227600)[_0x5860df(0x758)](0x1f4)[_0x5860df(0x259)](_0x5860df(0x4d4), 'inline-block');
                });
            }, 0xbb8);
        }
        ,
        _0x260ca0['prototype']['vo'] = function() {
            var _0x57dbb1 = _0x2413a9;
            if (_0x52ace1['co']['bo'] && !ooo['xo']()) {
                _0x459abd[_0x57dbb1(0x637)]();
                var _0x5f3f7c = _0x5d1bbd['U']('index.game.main.menu.unlockSkins.share')
                  , _0x990c8c = encodeURIComponent(_0x5d1bbd['U'](_0x57dbb1(0x32c)));
                _0x136e99['append']($('<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-fb\x22\x20target=\x22_blank\x22\x20href=\x22https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + _0x990c8c + _0x57dbb1(0x73d) + _0x5f3f7c + _0x57dbb1(0x5c7))['click'](function _0x54c76a() {
                    ooo['Bo'](!![]),
                    _0x5d1bbd['Y'](function() {
                        var _0x5503e4 = _0x3903;
                        _0x459abd[_0x5503e4(0x45a)]();
                    }, 0xbb8);
                }));
            }
        }
        ,
        _0x21385e['Ck'] = _0x260ca0,
        (_0x1d6aeb = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            var _0x488e70 = _0x2413a9;
            _0x21385e['Uf'][_0x488e70(0x11d)](this, _0x21385e['ll']['ao']);
        }))[_0x2413a9(0x551)]['Sa'] = function() {}
        ,
        _0x1d6aeb[_0x2413a9(0x551)]['ml'] = function() {
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tf'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Rn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Sn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0x32);
        }
        ,
        _0x21385e['el'] = _0x1d6aeb,
        (_0x4e37a4 = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            var _0x424a96 = _0x2413a9;
            _0x21385e['Uf'][_0x424a96(0x11d)](this, _0x21385e['ll']['ao']);
        }))[_0x2413a9(0x551)]['Sa'] = function() {}
        ,
        _0x4e37a4[_0x2413a9(0x551)]['ml'] = function() {
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tf'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Rn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Sn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Zn'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0x32);
        }
        ,
        _0x4e37a4[_0x2413a9(0x551)]['nl'] = function() {}
        ,
        _0x21385e['Xk'] = _0x4e37a4,
        _0x2cf622 = $(_0x2413a9(0x47f)),
        (_0x5ae334 = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            var _0x7c923d = _0x2413a9;
            _0x21385e['Uf'][_0x7c923d(0x11d)](this, _0x21385e['ll']['ao']),
            this['Co'] = [],
            this['Do'] = null;
        }))[_0x2413a9(0x551)]['Sa'] = function() {}
        ,
        _0x5ae334[_0x2413a9(0x551)]['ml'] = function() {
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tf'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Rn'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Sn'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Xn'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0x32);
        }
        ,
        _0x5ae334[_0x2413a9(0x551)]['nl'] = function() {
            this['Eo']();
        }
        ,
        _0x5ae334['prototype']['ql'] = function() {
            var _0x11ca9b = _0x2413a9;
            return this['Do'] != null || this['Co'][_0x11ca9b(0x454)] > 0x0;
        }
        ,
        _0x5ae334[_0x2413a9(0x551)]['Fo'] = function(_0x32ad81) {
            var _0x189b38 = _0x2413a9;
            this['Co'][_0x189b38(0xd5)](_0x32ad81),
            _0x5d1bbd['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }
        ,
        _0x5ae334[_0x2413a9(0x551)]['km'] = function(_0x251410) {
            this['Co']['push'](_0x251410),
            _0x5d1bbd['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }
        ,
        _0x5ae334['prototype']['Eo'] = function() {
            var _0x189378 = _0x2413a9
              , _0xb272c0 = this;
            if (this['Do'] == null) {
                if (this['Co'][_0x189378(0x454)] === 0x0) {
                    ooo['Xg']['jl']();
                    return;
                }
                ;var _0x212978 = this['Co']['shift']();
                this['Do'] = _0x212978;
                var _0x2a0fde = _0x212978['ag']();
                _0x3f9428['f']['g'](_0x2a0fde, 0x12c),
                _0x2cf622[_0x189378(0x418)](_0x2a0fde),
                _0x212978['Go'] = function() {
                    var _0x10110b = _0x189378;
                    _0x2a0fde[_0x10110b(0x3cf)](0x12c),
                    _0x5d1bbd['Y'](function() {
                        var _0x58eaaf = _0x10110b;
                        _0x2a0fde[_0x58eaaf(0x5cc)]();
                    }, 0x12c),
                    _0xb272c0['Do'] === _0x212978 && (_0xb272c0['Do'] = null),
                    _0xb272c0['Eo']();
                }
                ,
                _0x212978['nl']();
            }
        }
        ,
        _0x21385e['Zk'] = _0x5ae334,
        _0x21385e['ll'] = {
            'ao': 0x0,
            'kl': 0x1
        },
        _0x566fac = $('#popup-menu-label'),
        _0x17836a = $(_0x2413a9(0x48a)),
        _0x3125f8 = $(_0x2413a9(0x6f2)),
        $(_0x2413a9(0x681))[_0x2413a9(0x3db)](function() {
            ooo['ij']['if'](),
            ooo['Xg']['jl']();
        }),
        _0x17836a[_0x2413a9(0x3db)](function() {
            ooo['ok']['nk']() && (ooo['ij']['if'](),
            ooo['Xg']['gl'](ooo['Xg']['Hk']));
        }),
        (_0x3297ec = _0x5d1bbd['ca'](_0x21385e['Uf'], function(_0x52918f, _0x3300d9) {
            _0x21385e['Uf']['call'](this, _0x21385e['ll']['kl']),
            this['Xa'] = _0x52918f,
            this['Io'] = _0x3300d9,
            this['Jo'] = [];
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x407f2d = _0x2413a9;
            _0x3297ec['parent'][_0x407f2d(0x551)]['Sa'][_0x407f2d(0x11d)](this),
            !_0x3297ec['Ko'] && (_0x3297ec['Ko'] = !![],
            ooo['ok']['fm'](function() {
                var _0x35e581 = _0x407f2d;
                ooo['ok']['nk']() ? _0x3125f8[_0x35e581(0x3b1)](ooo['ok']['Ql']()) : _0x3125f8[_0x35e581(0x3b1)]('0');
            })),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Lo'], 0x64);
        }
        ,
        _0x3297ec['Mo'] = $(_0x2413a9(0x2ec)),
        _0x3297ec['No'] = $(_0x2413a9(0x1ee)),
        _0x3297ec['Oo'] = $(_0x2413a9(0x544)),
        _0x3297ec['Po'] = $(_0x2413a9(0x406)),
        _0x3297ec['Qo'] = $(_0x2413a9(0x4b3)),
        _0x3297ec['Ro'] = $(_0x2413a9(0x286)),
        _0x3297ec['So'] = $(_0x2413a9(0x331)),
        _0x3297ec['To'] = $(_0x2413a9(0xe9)),
        _0x3297ec['Uo'] = $('#withdraw-consent-view'),
        _0x3297ec['Vo'] = $('#delete-account-view'),
        _0x3297ec['Lo'] = $('#please-wait-view'),
        _0x3297ec[_0x2413a9(0x551)]['ml'] = function() {
            var _0x2616c9 = _0x2413a9;
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tf'], 0x1),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Qn'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Rn'], 0xc8),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Sn'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0xc8),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Wn'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0xc8),
            _0x566fac[_0x2616c9(0x3b1)](this['Xa']),
            _0x17836a[_0x2616c9(0x1cb)](this['Io']),
            this['Wo']();
        }
        ,
        _0x3297ec[_0x2413a9(0x551)]['Wo'] = function() {}
        ,
        _0x3297ec[_0x2413a9(0x551)]['Xo'] = function(_0x45b507) {
            var _0x5406f4 = _0x2413a9
              , _0x68cfe3 = this
              , _0x57ddf6 = _0x5d1bbd['va'](0x0, 0x7fffffff) & 0x7fffffff;
            return this['Jo'][_0x5406f4(0x731)](_0x57ddf6),
            _0x3f9428['f']['g'](_0x21385e['Ho']['Lo'], 0x64),
            _0x5d1bbd['Y'](function() {
                _0x68cfe3['Yo'](_0x57ddf6);
            }, _0x45b507),
            new _0x15d5fb(this,_0x57ddf6);
        }
        ,
        _0x3297ec[_0x2413a9(0x551)]['Yo'] = function(_0x50c072) {
            var _0x59c549 = _0x2413a9
              , _0x2143a3 = this['Jo'][_0x59c549(0x12a)](_0x50c072);
            !(_0x2143a3 < 0x0) && (this['Jo']['splice'](_0x2143a3, 0x1),
            this['Jo']['length'] === 0x0 && _0x3f9428['f']['h'](_0x21385e['Ho']['Lo'], 0x64));
        }
        ,
        _0x21385e['Ho'] = _0x3297ec;
        var _0x5a3b77, _0x487ab5, _0xabc28b, _0x56e15d, _0x3f4c9f, _0x4a018c, _0x4e2992, _0x18e745, _0x409484, _0x25352f, _0x289bfd, _0x5bf774, _0x142d97, _0x3ed9c8, _0x26ed4a, _0x582aa7, _0x157aa5, _0x58d58f, _0x46328c, _0x23c875, _0x593878, _0x31e094, _0xf71ea, _0x593e4b, _0x3dbf8f, _0x1b2666, _0x473852, _0x3a012b, _0x1109fd, _0x143e51, _0x5f4125, _0x1a2c78, _0x459abd, _0x136e99, _0x2c6650, _0x18dcea, _0x184079, _0x20d681, _0x4de3dc, _0x5c423a, _0xd35179, _0x16eb20, _0x2dfda6, _0xe825f0, _0x15591b, _0x23b74d, _0x43805b, _0x3dd236, _0x1ac9bc, _0x14d2ad, _0x260ca0, _0x1d6aeb, _0x4e37a4, _0x2cf622, _0x5ae334, _0x566fac, _0x17836a, _0x3125f8, _0x3297ec, _0x2bb3df, _0x58b3e4, _0x2c0668, _0x503b71, _0xd57d5e, _0x36b579, _0x20662f, _0x4cf64e, _0x56d87e, _0x5b06ab, _0x213d95, _0x5f874a, _0x42e395, _0x3fae41, _0x335b9c, _0x581d60, _0x3557b7, _0xf043d7, _0x5afe44, _0x2daee, _0xa9f7bb, _0x3d0208, _0x46ce86, _0x15d37e, _0xc85e3c, _0x59aa2e, _0x50060d, _0x2ba5b2, _0xa84ffe, _0x1b6578, _0x45cbfc, _0x39cdd4, _0x645b8b, _0x332406, _0x16240e, _0x205d82, _0xbea20a, _0x4abf9b, _0x4081ca, _0x5aaab6, _0x29b8aa, _0x50024a, _0x114537, _0x474d60, _0x58aae8, _0x6ba7d4, _0x46448c, _0x504b55, _0x4bf526, _0x33d7a7, _0x59e8ba, _0x3e9f16, _0x401df0, _0x423c5c, _0x62c9fd, _0x4f95b1, _0x8afc15, _0x24ca64, _0x120d25, _0x39e8a2, _0x30c8c1, _0x40a00c, _0x39cf3d, _0x19dcfa, _0x1e347e, _0x373291, _0xc173b7, _0x6652d8, _0x45ac50, _0x50c922, _0x36e272, _0x5bf01e, _0x1e2062, _0x2270ec, _0x4ad5be, _0x55f718, _0x54a232, _0x537f79, _0x3537ef, _0x168cec, _0xcaf4ab, _0xe60e3f, _0x4d6097, _0x47f52d, _0x2d8a94, _0x4438ba, _0xc8e456, _0x29a5b3, _0x4f1b50, _0x569775, _0x3845d6, _0x2a0ae9, _0x15d5fb = (function() {
            var _0x1fc3ae = _0x2413a9;
            function _0x318ebb(_0x4b1262, _0x58ed3f) {
                this['Zo'] = _0x4b1262,
                this['$o'] = _0x58ed3f;
            }
            return _0x318ebb[_0x1fc3ae(0x551)]['_o'] = function() {
                this['Zo']['Yo'](this['$o']);
            }
            ,
            _0x318ebb;
        }());
        _0x2bb3df = $('#store-buy-coins_125000'),
        _0x58b3e4 = $(_0x2413a9(0x159)),
        _0x2c0668 = $(_0x2413a9(0x379)),
        _0x503b71 = $(_0x2413a9(0x54b)),
        _0xd57d5e = $(_0x2413a9(0x3f0)),
        _0x36b579 = $(_0x2413a9(0x61b)),
        (_0x20662f = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x2207c8 = _0x2413a9;
            _0x21385e['Ho']['call'](this, _0x5d1bbd['U'](_0x2207c8(0x5e6)), ![]);
            var _0x25abfd = this;
            _0x2bb3df[_0x2207c8(0x3db)](function() {
                var _0x4054bf = _0x2207c8;
                ooo['ij']['if'](),
                _0x25abfd['ap'](_0x4054bf(0x1e3));
            }),
            _0x58b3e4[_0x2207c8(0x3db)](function() {
                var _0x1f8cee = _0x2207c8;
                ooo['ij']['if'](),
                _0x25abfd['ap'](_0x1f8cee(0x5e3));
            }),
            _0x2c0668['click'](function() {
                var _0x12095e = _0x2207c8;
                ooo['ij']['if'](),
                _0x25abfd['ap'](_0x12095e(0x60e));
            }),
            _0x503b71[_0x2207c8(0x3db)](function() {
                var _0x159937 = _0x2207c8;
                ooo['ij']['if'](),
                _0x25abfd['ap'](_0x159937(0x749));
            }),
            _0xd57d5e[_0x2207c8(0x3db)](function() {
                ooo['ij']['if'](),
                _0x25abfd['ap']('coins_3250');
            }),
            _0x36b579['click'](function() {
                var _0x915534 = _0x2207c8;
                ooo['ij']['if'](),
                _0x25abfd['ap'](_0x915534(0x676));
            });
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x74649 = _0x2413a9;
            _0x20662f[_0x74649(0x53f)]['prototype']['Sa'][_0x74649(0x11d)](this);
        }
        ,
        _0x20662f['prototype']['Wo'] = function() {
            _0x3f9428['f']['g'](_0x21385e['Ho']['Mo'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x20662f[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x20662f[_0x2413a9(0x551)]['ap'] = function(_0x52da18) {}
        ,
        _0x21385e['Ik'] = _0x20662f,
        _0x4cf64e = $('#highscore-table'),
        _0x56d87e = $('#leaders-button-level'),
        _0x5b06ab = $('#leaders-button-highscore'),
        _0x213d95 = $('#leaders-button-kills'),
        _0x5f874a = _0x2413a9(0x1e0),
        _0x42e395 = _0x2413a9(0x169),
        _0x3fae41 = _0x2413a9(0x45d),
        (_0x335b9c = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x8ff230 = _0x2413a9;
            _0x21385e['Ho']['call'](this, _0x5d1bbd['U'](_0x8ff230(0x1f7)), !![]);
            var _0x326d7d = this;
            this['bp'] = {},
            this['cp'] = {
                'dp': {
                    'ep': _0x56d87e,
                    'fp': _0x5f874a
                },
                'gp': {
                    'ep': _0x5b06ab,
                    'fp': _0x42e395
                },
                'hp': {
                    'ep': _0x213d95,
                    'fp': _0x3fae41
                }
            },
            _0x56d87e[_0x8ff230(0x3db)](function() {
                ooo['ij']['if'](),
                _0x326d7d['ip'](_0x326d7d['cp']['dp']);
            }),
            _0x5b06ab['click'](function() {
                ooo['ij']['if'](),
                _0x326d7d['ip'](_0x326d7d['cp']['gp']);
            }),
            _0x213d95[_0x8ff230(0x3db)](function() {
                ooo['ij']['if'](),
                _0x326d7d['ip'](_0x326d7d['cp']['hp']);
            });
        }))['prototype']['Sa'] = function() {
            var _0x1633cf = _0x2413a9;
            _0x335b9c[_0x1633cf(0x53f)][_0x1633cf(0x551)]['Sa'][_0x1633cf(0x11d)](this);
        }
        ,
        _0x335b9c['prototype']['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['No'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x335b9c['prototype']['nl'] = function() {
            var _0x4dffb4 = _0x2413a9
              , _0xc5dec = this;
            ooo['ij']['jf']();
            var _0x4f6e22 = this['Xo'](0x1388)
              , _0x3a1f00 = _0x52ace1['H']['J'] + _0x4dffb4(0x700);
            _0x5d1bbd['Aa'](_0x3a1f00, function() {
                var _0x2c79ba = {
                    [_0x5f874a]: [],
                    [_0x42e395]: [],
                    [_0x3fae41]: []
                };
                _0xc5dec['bp'] = _0x2c79ba,
                _0xc5dec['ip'](_0xc5dec['jp'] ?? _0xc5dec['cp']['dp']),
                _0x4f6e22['_o']();
            }, function(_0x51eb25) {
                _0xc5dec['bp'] = _0x51eb25,
                _0xc5dec['ip'](_0xc5dec['jp'] ?? _0xc5dec['cp']['dp']),
                _0x4f6e22['_o']();
            });
        }
        ,
        _0x335b9c[_0x2413a9(0x551)]['ip'] = function(_0x28a638) {
            var _0x13ca41 = _0x2413a9;
            this['jp'] = _0x28a638;
            for (var _0x10e14f in this['cp']) {
                this['cp'][_0x13ca41(0x3f4)](_0x10e14f) && this['cp'][_0x10e14f]['ep']['removeClass'](_0x13ca41(0x207));
            }
            ;this['jp']['ep']['addClass'](_0x13ca41(0x207));
            for (var _0x1b91a4 = this['bp'][this['jp']['fp']], _0x64b066 = '', _0x374726 = 0x0; _0x374726 < _0x1b91a4['length']; _0x374726++) {
                var _0x127cce = _0x1b91a4[_0x374726];
                _0x64b066 += '<div\x20class=\x22table-row\x22><span>' + (_0x374726 + 0x1) + _0x13ca41(0x512) + _0x127cce[_0x13ca41(0x24c)] + _0x13ca41(0x289) + _0x127cce[_0x13ca41(0x18f)] + '</span><span>' + _0x127cce[_0x13ca41(0x455)] + _0x13ca41(0x3fc) + _0x127cce[_0x13ca41(0x6d8)] + _0x13ca41(0x3fc) + _0x127cce[_0x13ca41(0x1d6)] + _0x13ca41(0x698) + _0x127cce[_0x13ca41(0xf1)] + _0x13ca41(0x5dd);
            }
            ;_0x4cf64e['empty'](),
            _0x4cf64e[_0x13ca41(0x418)](_0x64b066);
        }
        ,
        _0x21385e['Kk'] = _0x335b9c,
        _0x581d60 = $(_0x2413a9(0x6a4)),
        _0x3557b7 = $(_0x2413a9(0xd6)),
        (_0xf043d7 = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x39d6da = _0x2413a9
              , _0x2db6d7 = this;
            _0x21385e['Ho'][_0x39d6da(0x11d)](this, _0x5d1bbd['U'](_0x39d6da(0x346)), ![]),
            _0x581d60[_0x39d6da(0x3db)](function() {
                ooo['ij']['if']();
                var _0x5c5a28 = _0x2db6d7['Xo'](0x2710);
                _0x5d1bbd['Y'](function() {
                    ooo['ok']['sm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](),
                        _0x5c5a28['_o']();
                    });
                }, 0x1f4);
            }),
            _0x3557b7[_0x39d6da(0x3db)](function() {
                ooo['ij']['if']();
                var _0x162b5e = _0x2db6d7['Xo'](0x2710);
                _0x5d1bbd['Y'](function() {
                    ooo['ok']['pm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](),
                        _0x162b5e['_o']();
                    });
                }, 0x1f4);
            });
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x382518 = _0x2413a9;
            _0xf043d7[_0x382518(0x53f)][_0x382518(0x551)]['Sa'][_0x382518(0x11d)](this);
        }
        ,
        _0xf043d7['prototype']['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['Po'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0xf043d7[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x21385e['Ok'] = _0xf043d7,
        _0x5afe44 = $('#profile-avatar'),
        _0x2daee = $('#profile-username'),
        _0xa9f7bb = $(_0x2413a9(0x130)),
        _0x3d0208 = $('#profile-experience-val'),
        _0x46ce86 = $(_0x2413a9(0x780)),
        _0x15d37e = $(_0x2413a9(0x273)),
        _0xc85e3c = $(_0x2413a9(0x3e1)),
        _0x59aa2e = $(_0x2413a9(0xf8)),
        _0x50060d = $('#profile-stat-headshots'),
        _0x2ba5b2 = $(_0x2413a9(0x1dd)),
        _0xa84ffe = $('#profile-stat-totalTimeSpent'),
        _0x1b6578 = $(_0x2413a9(0xdc)),
        (_0x45cbfc = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x6b267b = _0x2413a9;
            _0x21385e['Ho'][_0x6b267b(0x11d)](this, _0x5d1bbd['U'](_0x6b267b(0x1a8)), !![]);
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x45db73 = _0x2413a9;
            _0x45cbfc[_0x45db73(0x53f)][_0x45db73(0x551)]['Sa'][_0x45db73(0x11d)](this);
        }
        ,
        _0x45cbfc[_0x2413a9(0x551)]['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['Oo'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x45cbfc[_0x2413a9(0x551)]['nl'] = function() {
            var _0x284441 = _0x2413a9;
            ooo['ij']['jf']();
            var _0x2e948f = ooo['ok']['dm']()
              , _0x226ca5 = moment([_0x2e948f[_0x284441(0x279)], _0x2e948f[_0x284441(0x6d3)] - 0x1, _0x2e948f[_0x284441(0x20b)]])[_0x284441(0x51a)]('LL');
            _0x2daee['html'](ooo['ok']['Ll']()),
            _0x5afe44[_0x284441(0x107)](_0x284441(0x659), ooo['ok']['Nl']()),
            _0xa9f7bb[_0x284441(0x598)](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'),
            _0x3d0208[_0x284441(0x3b1)](ooo['ok']['Sl']() + _0x284441(0x698) + ooo['ok']['Tl']()),
            _0x46ce86[_0x284441(0x3b1)](ooo['ok']['Rl']()),
            _0x15d37e[_0x284441(0x3b1)](ooo['ok']['Zl']()),
            _0xc85e3c['html'](_0x5d1bbd['$'](ooo['ok']['$l']())),
            _0x59aa2e[_0x284441(0x3b1)](ooo['ok']['_l']()),
            _0x50060d[_0x284441(0x3b1)](ooo['ok']['am']()),
            _0x2ba5b2[_0x284441(0x3b1)](ooo['ok']['bm']()),
            _0xa84ffe[_0x284441(0x3b1)](_0x5d1bbd['$'](ooo['ok']['cm']())),
            _0x1b6578['html'](_0x226ca5);
        }
        ,
        _0x21385e['Mk'] = _0x45cbfc,
        _0x39cdd4 = $(_0x2413a9(0x1ae)),
        _0x645b8b = $(_0x2413a9(0x375)),
        _0x332406 = $(_0x2413a9(0xeb)),
        _0x16240e = $(_0x2413a9(0x56f)),
        _0x205d82 = $(_0x2413a9(0x2a1)),
        _0xbea20a = $(_0x2413a9(0x7a6)),
        _0x4abf9b = $('#popup-delete-account-container'),
        _0x4081ca = $(_0x2413a9(0x19a)),
        (_0x5aaab6 = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x423ca4 = _0x2413a9;
            _0x21385e['Ho'][_0x423ca4(0x11d)](this, _0x5d1bbd['U'](_0x423ca4(0x3de)), ![]);
            var _0x3e821e = this;
            _0x39cdd4[_0x423ca4(0x3db)](function() {
                var _0xc0c3df = _0x423ca4
                  , _0x540367 = !!_0x39cdd4[_0xc0c3df(0x458)]('checked');
                _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Fg'], _0x540367, 0x1e),
                ooo['ij']['$e'](_0x540367),
                ooo['ij']['if']();
            }),
            _0x645b8b[_0x423ca4(0x3db)](function() {
                var _0x2093c7 = _0x423ca4
                  , _0x187bcb = !!_0x645b8b[_0x2093c7(0x458)](_0x2093c7(0x274));
                _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Gg'], _0x187bcb, 0x1e),
                ooo['ij']['Xe'](_0x187bcb),
                ooo['ij']['if']();
            }),
            _0x332406[_0x423ca4(0x3db)](function() {
                ooo['ij']['if']();
            }),
            _0x16240e['click'](function() {
                ooo['ij']['if'](),
                _0x3e821e['Xo'](0x1f4),
                ooo['ok']['qm']();
            }),
            _0xbea20a[_0x423ca4(0x3db)](function() {
                ooo['ok']['nk']() ? (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Fk'])) : ooo['ij']['nf']();
            }),
            _0x4081ca[_0x423ca4(0x3db)](function() {
                ooo['kp']() ? (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Dk'])) : ooo['ij']['nf']();
            });
        }))['prototype']['Sa'] = function() {
            var _0x43b22f = _0x2413a9, _0x4ab3ae, _0x3ee6a4, _0x281fef;
            _0x5aaab6[_0x43b22f(0x53f)][_0x43b22f(0x551)]['Sa'][_0x43b22f(0x11d)](this),
            _0x4ab3ae = _0x21385e['Cg']['Og'](_0x21385e['Cg']['Fg']) !== 'false',
            _0x39cdd4['prop'](_0x43b22f(0x274), _0x4ab3ae),
            ooo['ij']['$e'](_0x4ab3ae),
            _0x3ee6a4 = _0x21385e['Cg']['Og'](_0x21385e['Cg']['Gg']) !== 'false',
            _0x645b8b['prop'](_0x43b22f(0x274), _0x3ee6a4),
            ooo['ij']['Xe'](_0x3ee6a4),
            _0x281fef = _0x21385e['Cg']['Og'](_0x21385e['Cg']['Eg']) !== _0x43b22f(0x336),
            _0x332406[_0x43b22f(0x458)](_0x43b22f(0x274), _0x281fef),
            ooo['ok']['em'](function() {
                var _0xd10f75 = _0x43b22f;
                _0x205d82['toggle'](ooo['ok']['nk']()),
                _0x4abf9b[_0xd10f75(0x1cb)](ooo['ok']['nk']());
            });
        }
        ,
        _0x5aaab6[_0x2413a9(0x551)]['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['Qo'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x5aaab6['prototype']['nl'] = function() {
            var _0x3a1238 = _0x2413a9;
            ooo['ij']['jf'](),
            ooo['kp']() ? _0x4081ca[_0x3a1238(0x637)]() : _0x4081ca['hide']();
        }
        ,
        _0x5aaab6[_0x2413a9(0x551)]['Gi'] = function() {
            var _0x9ccd4f = _0x2413a9;
            return _0x332406[_0x9ccd4f(0x458)](_0x9ccd4f(0x274));
        }
        ,
        _0x21385e['Pk'] = _0x5aaab6,
        _0x29b8aa = $(_0x2413a9(0x769)),
        _0x50024a = $(_0x2413a9(0x22a)),
        _0x114537 = $(_0x2413a9(0x649)),
        _0x474d60 = $(_0x2413a9(0x564)),
        _0x58aae8 = $('#store-locked-bar-text'),
        _0x6ba7d4 = $(_0x2413a9(0x40d)),
        _0x46448c = $(_0x2413a9(0x6f3)),
        _0x504b55 = $(_0x2413a9(0x1ad)),
        _0x4bf526 = $(_0x2413a9(0x67e)),
        _0x33d7a7 = $(_0x2413a9(0x1b6)),
        (_0x59e8ba = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x22831d = _0x2413a9;
            _0x21385e['Ho']['call'](this, _0x5d1bbd['U']('index.game.popup.menu.skins.tab'), !![]);
            var _0x274646 = this;
            this['lp'] = null,
            this['mp'] = [],
            this['np'] = {},
            this['op'] = new _0x21385e['Lm'](_0x29b8aa),
            _0x6ba7d4['click'](function() {
                ooo['ij']['if'](),
                _0x274646['pp']();
            }),
            _0x4bf526[_0x22831d(0x3db)](function() {
                ooo['ij']['if'](),
                _0x274646['lp']['qp']();
            }),
            _0x33d7a7[_0x22831d(0x3db)](function() {
                ooo['ij']['if'](),
                _0x274646['lp']['rp']();
            });
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0xe973a5 = _0x2413a9;
            _0x59e8ba[_0xe973a5(0x53f)][_0xe973a5(0x551)]['Sa'][_0xe973a5(0x11d)](this);
            var _0x286073 = this;
            ooo['ud']['Jc'](function() {
                var _0x598c7c = _0xe973a5
                  , _0xd97656 = ooo['ud']['Gc']();
                _0x286073['mp'] = [];
                for (var _0x153ca5 = 0x0; _0x153ca5 < _0xd97656['skinGroupArrayDict'][_0x598c7c(0x454)]; _0x153ca5++) {
                    _0x286073['mp'][_0x598c7c(0x731)](new _0x3e9f16(_0x286073,_0xd97656[_0x598c7c(0x204)][_0x153ca5]));
                }
                ;_0x286073['np'] = {};
                for (var _0x19a555 = 0x0; _0x19a555 < _0xd97656['skinArrayDict'][_0x598c7c(0x454)]; _0x19a555++) {
                    var _0x59fe45 = _0xd97656[_0x598c7c(0x46d)][_0x19a555];
                    _0x286073['np'][_0x59fe45['id']] = _0x59fe45;
                }
                ;_0x286073['sp']();
            }),
            this['tp'](![]),
            ooo['so']['fk'](function() {
                _0x286073['tp'](![]);
            });
        }
        ,
        _0x59e8ba[_0x2413a9(0x551)]['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['Ro'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x59e8ba[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['Ye'](_0x21385e['Pe']['Se']['Jf']),
            ooo['ij']['jf'](),
            this['sp'](),
            this['op']['rg'](!![]);
        }
        ,
        _0x59e8ba[_0x2413a9(0x551)]['hl'] = function() {
            this['op']['rg'](![]);
        }
        ,
        _0x59e8ba['prototype']['qg'] = function() {
            this['op']['qg']();
        }
        ,
        _0x59e8ba[_0x2413a9(0x551)]['ug'] = function(_0x51d954, _0x4e616d) {
            this['op']['ug']();
        }
        ,
        _0x59e8ba[_0x2413a9(0x551)]['sp'] = function() {
            var _0x3e9460 = _0x2413a9
              , _0x3ce35b = this
              , _0x2e0776 = this;
            _0x504b55[_0x3e9460(0x78c)]();
            for (var _0x2c92da = 0x0; _0x2c92da < this['mp'][_0x3e9460(0x454)]; _0x2c92da++) {
                (function(_0x4139c5) {
                    var _0x3a4c00 = _0x3e9460
                      , _0x4856fe = _0x3ce35b['mp'][_0x4139c5]
                      , _0x1a48c7 = _0x21385e['d'][_0x3a4c00(0x5d0)]('li');
                    _0x504b55['append'](_0x1a48c7);
                    var _0x1b7617 = $(_0x1a48c7);
                    _0x2e0776['xp'] && _0x2e0776['xp']['isCustom'] && _0x1b7617[_0x3a4c00(0x46e)](_0x3a4c00(0x4f0)),
                    _0x1b7617[_0x3a4c00(0x3b1)](_0x4856fe['up']()),
                    _0x1b7617[_0x3a4c00(0x3db)](function() {
                        ooo['ij']['if'](),
                        _0x2e0776['vp'](_0x4856fe);
                    }),
                    _0x4856fe['wp'] = _0x1b7617;
                }(_0x2c92da));
            }
            ;if (this['mp'][_0x3e9460(0x454)] > 0x0) {
                var _0xdabc8d = ooo['so']['Zj'](_0x21385e['_j']['$j']);
                for (var _0x224130 = 0x0; _0x224130 < this['mp'][_0x3e9460(0x454)]; _0x224130++) {
                    var _0x1a2de8 = this['mp'][_0x224130];
                    for (var _0x11a593 = _0x1a2de8['xp']['list'], _0x2ec055 = 0x0; _0x2ec055 < _0x11a593['length']; _0x2ec055++) {
                        if (_0x11a593[_0x2ec055] === _0xdabc8d) {
                            _0x1a2de8['yp'] = _0x2ec055,
                            this['vp'](_0x1a2de8);
                            return;
                        }
                    }
                }
                ;this['vp'](this['mp'][0x0]);
            }
        }
        ,
        _0x59e8ba[_0x2413a9(0x551)]['vp'] = function(_0x44dcd0) {
            var _0xbd3600 = _0x2413a9;
            if (this['lp'] !== _0x44dcd0) {
                this['lp'] = _0x44dcd0,
                _0x504b55['children']()[_0xbd3600(0x504)](_0xbd3600(0x207));
                this['lp']['wp'] && this['lp']['wp'][_0xbd3600(0x46e)]('pressed');
                _0x114537[_0xbd3600(0x3b1)]('');
                if (_0x44dcd0['xp'] != null) {
                    var _0x35044f = ooo['ud']['Gc']()[_0xbd3600(0x71a)][_0x44dcd0['xp'][_0xbd3600(0x4d8)]];
                    _0x35044f != null && _0x114537[_0xbd3600(0x3b1)](_0x5d1bbd['aa'](_0x5d1bbd['V'](_0x35044f)));
                }
                ;this['tp'](!![]);
            }
        }
        ,
        _0x59e8ba['prototype']['zp'] = function() {
            return this['lp'] == null ? _0x21385e['yj']['Aj']() : this['lp']['Ap']();
        }
        ,
        _0x59e8ba[_0x2413a9(0x551)]['pp'] = function() {
            var _0x2d9f96 = this['zp']();
            if (_0x2d9f96['Cj']()) {
                var _0x3836dc = _0x2d9f96['Mc']();
                this['Bp'](_0x3836dc);
            }
        }
        ,
        _0x59e8ba['prototype']['Bp'] = function(_0x3292dc) {
            var _0x17f3d3 = ooo['so']['mk'](_0x3292dc, _0x21385e['_j']['$j']);
            if (_0x17f3d3 != null) {
                var _0x17b8e7 = _0x17f3d3['pk']();
                if (!(ooo['ok']['Ql']() < _0x17b8e7)) {
                    var _0x13ddf8 = ooo['so']['Zj'](_0x21385e['_j']['$j'])
                      , _0x390aa2 = ooo['so']['Zj'](_0x21385e['_j']['ak'])
                      , _0x5ccb04 = ooo['so']['Zj'](_0x21385e['_j']['bk'])
                      , _0x585733 = ooo['so']['Zj'](_0x21385e['_j']['dk'])
                      , _0x2139fd = ooo['so']['Zj'](_0x21385e['_j']['ck'])
                      , _0x4df4fe = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x3292dc, _0x21385e['_j']['$j'], function() {
                        _0x4df4fe['_o'](),
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x13ddf8, _0x21385e['_j']['$j']),
                            ooo['so']['lk'](_0x390aa2, _0x21385e['_j']['ak']),
                            ooo['so']['lk'](_0x5ccb04, _0x21385e['_j']['bk']),
                            ooo['so']['lk'](_0x585733, _0x21385e['_j']['dk']),
                            ooo['so']['lk'](_0x2139fd, _0x21385e['_j']['ck']),
                            ooo['so']['lk'](_0x3292dc, _0x21385e['_j']['$j']),
                            _0x4df4fe['_o']();
                        });
                    });
                }
            }
        }
        ,
        _0x59e8ba['prototype']['tp'] = function(_0x4e3034) {
            var _0x5d11df = _0x2413a9
              , _0x470519 = ooo['so']['ek']()
              , _0x359d4f = this['zp']();
            if (_0x359d4f['Cj']()) {
                var _0x53aa0e = _0x359d4f['Mc']()
                  , _0x3dced1 = ooo['so']['mk'](_0x53aa0e, _0x21385e['_j']['$j'])
                  , _0x108371 = ![];
                $(_0x5d11df(0x2e0))[_0x5d11df(0x5cc)](),
                $('#manage-favorites-skin')[_0x5d11df(0x5cc)](),
                $(_0x5d11df(0x34d))[_0x5d11df(0x5cc)](),
                $(_0x5d11df(0x51b))['remove'](),
                $(_0x5d11df(0x371))[_0x5d11df(0x5cc)]();
                if (ooo['so']['ik'](_0x53aa0e, _0x21385e['_j']['$j'])) {
                    _0x474d60[_0x5d11df(0x45a)](),
                    _0x6ba7d4[_0x5d11df(0x45a)]();
                    var _0x2e4531 = $(_0x5d11df(0x4ac))
                      , _0x240062 = $(_0x5d11df(0x2af))
                      , _0x419a94 = $(_0x5d11df(0x6b2));
                    _0x2e4531['append'](_0x240062),
                    _0x2e4531[_0x5d11df(0x418)](_0x419a94),
                    _0x504b55[_0x5d11df(0x418)](_0x2e4531);
                    var _0x3620e6 = $(_0x5d11df(0x721))[_0x5d11df(0x107)]('id', _0x5d11df(0x5ad))[_0x5d11df(0x259)]({
                        'position': _0x5d11df(0x651),
                        'left': _0x5d11df(0x77f),
                        'top': _0x5d11df(0x12e),
                        'font-size': _0x5d11df(0x3c0),
                        'color': _0x5d11df(0x6e3),
                        'z-index': _0x5d11df(0x736)
                    })[_0x5d11df(0x2a7)](_0x5d11df(0x190))['appendTo'](_0x504b55)
                      , _0x360896 = $(_0x5d11df(0x311));
                    $(_0x5d11df(0x41b))['append'](_0x360896),
                    $('.close-favorites')[_0x5d11df(0x3db)](function() {
                        var _0x4d48d0 = _0x5d11df;
                        $(_0x4d48d0(0x371))[_0x4d48d0(0x45a)]();
                    }),
                    $(document)[_0x5d11df(0x5c6)](function(_0x189545) {
                        var _0x18d9ca = _0x5d11df
                          , _0x5bb950 = $(_0x18d9ca(0x371));
                        !_0x5bb950['is'](_0x189545[_0x18d9ca(0x353)]) && _0x5bb950[_0x18d9ca(0x27b)](_0x189545['target'])[_0x18d9ca(0x454)] === 0x0 && _0x5bb950['hide']();
                    }),
                    $[_0x5d11df(0x3e7)]($(_0x5d11df(0x4c9)), function() {
                        var _0x21258e = _0x5d11df;
                        $(this)[_0x21258e(0x107)]('id') !== 'skin-info-text' && $(this)['remove']();
                    }),
                    $('.favorites-content')['on'](_0x5d11df(0x4f5), function() {
                        var _0x3a1815 = _0x5d11df;
                        $(this)[_0x3a1815(0x259)](_0x3a1815(0x41d), _0x3a1815(0x41e));
                    }),
                    $(_0x5d11df(0x371))['on'](_0x5d11df(0xfb), function() {
                        setTimeout(function() {
                            var _0x479e02 = _0x3903;
                            $(_0x479e02(0x25a))[_0x479e02(0x365)](0x0);
                        }, 0x64);
                    }),
                    $(_0x5d11df(0x475))[_0x5d11df(0x3db)](function() {
                        var _0x5ab1c4 = _0x5d11df;
                        confirm(_0x5ab1c4(0x435)) && (_0x456264['favoriteSkins'] = [],
                        localStorage[_0x5ab1c4(0x434)](_0x5ab1c4(0x4ab), JSON['stringify'](_0x456264)),
                        _0x4e5a94(),
                        _0x240062 && _0x240062['is'](_0x5ab1c4(0x163)) && _0x240062['text'](_0x5ab1c4(0x3d1))['css']('background-color', _0x5ab1c4(0x7c3)));
                    }),
                    _0x240062[_0x5d11df(0x3db)](function() {
                        var _0x199c60 = _0x5d11df
                          , _0x5b3117 = _0x53aa0e;
                        !_0x456264[_0x199c60(0x5bc)] && (_0x456264[_0x199c60(0x5bc)] = []);
                        var _0x51b528 = ![];
                        try {
                            for (var _0x5dab3d = 0x0; _0x5dab3d < _0x456264[_0x199c60(0x5bc)][_0x199c60(0x454)]; _0x5dab3d++) {
                                if (_0x456264[_0x199c60(0x5bc)][_0x5dab3d] === _0x5b3117) {
                                    _0x51b528 = !![];
                                    break;
                                }
                            }
                        } catch (_0x241e6a) {
                            _0x456264['favoriteSkins'] = [];
                        }
                        if (!_0x51b528)
                            _0x456264['favoriteSkins'][_0x199c60(0x731)](_0x5b3117),
                            localStorage[_0x199c60(0x434)](_0x199c60(0x4ab), JSON[_0x199c60(0x6b1)](_0x456264)),
                            $(this)['text']('X')[_0x199c60(0x259)](_0x199c60(0x20d), '#f44336');
                        else {
                            var _0x44a42a = _0x456264[_0x199c60(0x5bc)][_0x199c60(0x12a)](_0x5b3117);
                            _0x456264[_0x199c60(0x5bc)][_0x199c60(0x140)](_0x44a42a, 0x1),
                            localStorage[_0x199c60(0x434)](_0x199c60(0x4ab), JSON[_0x199c60(0x6b1)](_0x456264)),
                            $(this)[_0x199c60(0x2a7)](_0x199c60(0x3d1))[_0x199c60(0x259)](_0x199c60(0x20d), _0x199c60(0x7c3));
                        }
                    }),
                    _0x419a94[_0x5d11df(0x3db)](function() {
                        var _0x170e54 = _0x5d11df;
                        $[_0x170e54(0x3e7)]($(_0x170e54(0x4c9)), function(_0x39c339) {
                            var _0x51a68e = _0x170e54;
                            _0x39c339 > 0x0 && $(this)[_0x51a68e(0x5cc)]();
                        }),
                        _0x4e5a94(),
                        $('.favorites-popup')[_0x170e54(0x637)]();
                    });
                } else {
                    if (_0x3dced1 == null || _0x3dced1['qk']()) {
                        _0x108371 = !![],
                        _0x474d60[_0x5d11df(0x637)](),
                        _0x6ba7d4[_0x5d11df(0x45a)](),
                        _0x58aae8[_0x5d11df(0x2a7)](_0x5d1bbd['U']('index.game.popup.menu.store.locked'));
                        if (_0x3dced1 != null && _0x3dced1['qk']()) {
                            var _0x22d4c8 = ooo['ud']['Gc']()[_0x5d11df(0x71a)][_0x3dced1['ln']()];
                            _0x22d4c8 != null && _0x58aae8[_0x5d11df(0x2a7)](_0x5d1bbd['V'](_0x22d4c8));
                        }
                    } else
                        _0x474d60[_0x5d11df(0x45a)](),
                        _0x6ba7d4[_0x5d11df(0x637)](),
                        _0x46448c['html'](_0x3dced1['pk']());
                }
                _0x50024a['html']('');
                if (_0x3dced1 != null && _0x3dced1['mn']() != null) {
                    var _0x1aeff9 = ooo['ud']['Gc']()[_0x5d11df(0x71a)][_0x3dced1['mn']()];
                    _0x1aeff9 != null && _0x50024a[_0x5d11df(0x3b1)](_0x5d1bbd['aa'](_0x5d1bbd['V'](_0x1aeff9)));
                }
                StoreSkinID && _0x53aa0e && StoreSkinID[_0x5d11df(0x3b1)](_0x53aa0e),
                this['op']['Gm'](_0x470519['Cn'](_0x53aa0e)),
                this['op']['an'](_0x108371),
                _0x4e3034 && ooo['so']['lk'](_0x53aa0e, _0x21385e['_j']['$j']);
            }
        }
        ;
        function _0x4d6a51() {
            var _0x24eba4 = _0x2413a9;
            !_0x456264['favoriteSkins'] && (_0x456264[_0x24eba4(0x5bc)] = [],
            localStorage[_0x24eba4(0x434)](_0x24eba4(0x4ab), JSON[_0x24eba4(0x6b1)](_0x456264)));
            if (_0x456264[_0x24eba4(0x5bc)][_0x24eba4(0x454)] > 0x0) {
                _0x456264[_0x24eba4(0x71b)] === undefined ? _0x456264['currentFavSkinIndex'] = 0x0 : _0x456264[_0x24eba4(0x71b)] = (_0x456264[_0x24eba4(0x71b)] + 0x1) % _0x456264[_0x24eba4(0x5bc)][_0x24eba4(0x454)];
                var _0x26574b = _0x456264[_0x24eba4(0x5bc)][_0x456264['currentFavSkinIndex']];
                _0x2dbb86(_0x26574b),
                localStorage[_0x24eba4(0x434)](_0x24eba4(0x4ab), JSON['stringify'](_0x456264));
            }
        }
        function _0x2dbb86(_0x3751ef) {
            var _0x722de0 = _0x2413a9;
            ooo['so']['lk'](_0x3751ef, _0x21385e['_j']['$j']);
            if (_0x36a055 && _0x36a055['n'] && _0x36a055['n']['Je']) {
                var _0x25699e = ooo['ud']['Cc']()['Tb'](_0x3751ef);
                _0x36a055['uj'] && _0x25699e && _0x36a055['uj']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](_0x36a055['n']['mi']), _0x25699e, ooo['ud']['Cc']()['Vb'](_0x36a055['n']['Vi']), ooo['ud']['Cc']()['Wb'](_0x36a055['n']['Wi']), ooo['ud']['Cc']()['Xb'](_0x36a055['n']['Xi']), ooo['ud']['Cc']()['Yb'](_0x36a055['n']['Yi']), _0x722de0(0x239));
            }
        }
        function _0x47683c(_0x1557e0, _0x421922) {
            var _0x42be40 = _0x2413a9;
            if (!_0x1557e0)
                return '';
            if (_0x1557e0['startsWith'](_0x42be40(0x38e)))
                return _0x1557e0;
            if (_0x1557e0['includes'](_0x42be40(0x60b)))
                return _0x1557e0['startsWith']('http') ? _0x1557e0['replace'](/https?:\/\/[^\/]+/, _0x456264[_0x42be40(0x595)]) : _0x456264[_0x42be40(0x595)] + _0x1557e0;
            if (_0x1557e0[_0x42be40(0x424)]('/images/skins/'))
                return _0x456264[_0x42be40(0x595)] + '/' + _0x1557e0;
            if (_0x1557e0[_0x42be40(0x424)](_0x42be40(0x4d0)))
                return _0x42be40(0x693) + _0x1557e0;
            if (_0x1557e0['includes'](_0x42be40(0x3d6)))
                return _0x456264[_0x42be40(0x595)] + _0x1557e0;
            if (!_0x1557e0['startsWith'](_0x42be40(0x491)))
                return _0x42be40(0x213) + _0x1557e0;
            return _0x1557e0;
        }
        function _0x67ac4f(_0x4d2631) {
            var _0xdc7a5a = _0x2413a9;
            !_0x456264[_0xdc7a5a(0x5bc)] && (_0x456264['favoriteSkins'] = []);
            var _0x345066 = ![];
            for (var _0x348029 = 0x0; _0x348029 < _0x456264[_0xdc7a5a(0x5bc)][_0xdc7a5a(0x454)]; _0x348029++) {
                if (_0x456264[_0xdc7a5a(0x5bc)][_0x348029] === _0x4d2631) {
                    _0x345066 = !![];
                    break;
                }
            }
            !_0x345066 && (_0x456264[_0xdc7a5a(0x5bc)]['push'](_0x4d2631),
            localStorage['setItem']('SaveGamewft', JSON[_0xdc7a5a(0x6b1)](_0x456264)));
        }
        function _0x5310a0() {
            var _0x36203c = _0x2413a9;
            if ($(_0x36203c(0x115))[_0x36203c(0x454)] === 0x0) {
                var _0x792046 = $('<button\x20id=\x27open-favorites-btn\x27\x20class=\x27favorites-button\x27>عرض\x20السكنات\x20المفضلة</button>');
                $(_0x36203c(0x5db))[_0x36203c(0x2ff)](_0x36203c(0x75d)),
                _0x792046[_0x36203c(0x3db)](function() {
                    _0x4e5a94(),
                    $('.favorites-popup')['show']();
                }),
                $(_0x36203c(0x317))[_0x36203c(0x454)] > 0x0 && ($('#mm-skin-canv')['parent']()[_0x36203c(0x259)]('position', 'relative'),
                $(_0x36203c(0x317))['parent']()[_0x36203c(0x418)](_0x792046));
            }
        }
        function _0x3a2910(_0x20d6e5) {
            var _0x5f039c = _0x2413a9;
            _0x456264[_0x5f039c(0x5bc)] && _0x20d6e5 >= 0x0 && _0x20d6e5 < _0x456264[_0x5f039c(0x5bc)][_0x5f039c(0x454)] && (_0x456264[_0x5f039c(0x5bc)][_0x5f039c(0x140)](_0x20d6e5, 0x1),
            localStorage[_0x5f039c(0x434)](_0x5f039c(0x4ab), JSON[_0x5f039c(0x6b1)](_0x456264)),
            _0x4e5a94());
        }
        function _0x4e5a94() {
            var _0x319b98 = _0x2413a9
              , _0x5cb4ba = $(_0x319b98(0x599));
            _0x5cb4ba[_0x319b98(0x78c)]();
            !_0x456264[_0x319b98(0x5bc)] && (_0x456264[_0x319b98(0x5bc)] = [],
            localStorage['setItem'](_0x319b98(0x4ab), JSON[_0x319b98(0x6b1)](_0x456264)));
            try {
                if (_0x456264[_0x319b98(0x5bc)][_0x319b98(0x454)] > 0x0)
                    for (var _0x2e94da = 0x0; _0x2e94da < _0x456264[_0x319b98(0x5bc)][_0x319b98(0x454)]; _0x2e94da++) {
                        var _0x12b723 = _0x456264[_0x319b98(0x5bc)][_0x2e94da]
                          , _0x58e857 = $('<div>')['attr'](_0x319b98(0xf0), _0x2e94da)[_0x319b98(0x107)](_0x319b98(0x5a1), _0x12b723)[_0x319b98(0x259)]({
                            'display': 'flex',
                            'flex-direction': _0x319b98(0x30c),
                            'align-items': _0x319b98(0x443),
                            'padding': _0x319b98(0x1e5),
                            'background': _0x319b98(0x358),
                            'border-radius': _0x319b98(0x625),
                            'position': _0x319b98(0x62d),
                            'height': _0x319b98(0x473),
                            'width': _0x319b98(0x49a)
                        })
                          , _0x54847f = $(_0x319b98(0x721))['css']({
                            'width': _0x319b98(0x49a),
                            'height': _0x319b98(0x3f1),
                            'background': _0x319b98(0x35d),
                            'border-radius': '4px',
                            'overflow': 'visible',
                            'position': 'relative',
                            'display': _0x319b98(0x5d2),
                            'justify-content': _0x319b98(0x443),
                            'align-items': _0x319b98(0x443)
                        })[_0x319b98(0x2ff)](_0x58e857)
                          , _0x120c82 = $('<button>')[_0x319b98(0x2a7)]('X')[_0x319b98(0x259)]({
                            'position': 'absolute',
                            'top': _0x319b98(0x50a),
                            'right': '3px',
                            'background': _0x319b98(0x1f3),
                            'color': _0x319b98(0x7bf),
                            'border': _0x319b98(0x15d),
                            'padding': _0x319b98(0x29d),
                            'border-radius': _0x319b98(0x50a),
                            'cursor': _0x319b98(0x13e),
                            'font-size': '11px',
                            'z-index': '20'
                        })[_0x319b98(0x2ff)](_0x58e857)
                          , _0x51aab6 = _0x14a8d8(_0x12b723);
                        _0x54847f[_0x319b98(0x418)](_0x51aab6),
                        _0x5cb4ba['append'](_0x58e857),
                        _0x120c82[_0x319b98(0x3db)](function() {
                            var _0xaa1eef = _0x319b98
                              , _0x4148cd = $(this)['closest'](_0xaa1eef(0x580))
                              , _0x14d5c9 = parseInt(_0x4148cd[_0xaa1eef(0x107)]('data-index'));
                            _0x456264[_0xaa1eef(0x5bc)] && _0x14d5c9 >= 0x0 && _0x14d5c9 < _0x456264[_0xaa1eef(0x5bc)][_0xaa1eef(0x454)] && (_0x456264[_0xaa1eef(0x5bc)][_0xaa1eef(0x140)](_0x14d5c9, 0x1),
                            localStorage[_0xaa1eef(0x434)](_0xaa1eef(0x4ab), JSON[_0xaa1eef(0x6b1)](_0x456264)),
                            _0x4148cd[_0xaa1eef(0x3cf)](0x12c, function() {
                                var _0x1d15e3 = _0xaa1eef;
                                $(this)['remove'](),
                                _0x5cb4ba['find'](_0x1d15e3(0x580))['each'](function(_0x30ba14) {
                                    var _0x2532ff = _0x1d15e3;
                                    $(this)[_0x2532ff(0x107)](_0x2532ff(0xf0), _0x30ba14);
                                }),
                                _0x456264[_0x1d15e3(0x5bc)][_0x1d15e3(0x454)] === 0x0 && _0x9143a5(_0x5cb4ba);
                            }));
                        });
                    }
                else
                    _0x9143a5(_0x5cb4ba);
            } catch (_0x5eacbc) {
                _0x5cb4ba[_0x319b98(0x418)](_0x319b98(0x4ce));
            }
        }
        function _0x9143a5(_0x35ee7b) {
            var _0x1a1a3d = _0x2413a9;
            _0x35ee7b[_0x1a1a3d(0x418)](_0x1a1a3d(0x361));
        }
        function _0x14a8d8(_0x105077) {
            var _0x2ffe27 = _0x2413a9;
            !window[_0x2ffe27(0x437)] && (window[_0x2ffe27(0x437)] = {});
            try {
                let _0x3038d8 = null;
                if (typeof ooo !== 'undefined') {
                    if (ooo['ud'] && ooo['ud']['Gc'])
                        _0x3038d8 = ooo['ud']['Gc']();
                    else {
                        if (ooo['ok'] && ooo['ok']['xl'] && ooo['ok']['xl'][_0x2ffe27(0x5cb)])
                            _0x3038d8 = ooo['ok']['xl'][_0x2ffe27(0x5cb)];
                        else
                            window[_0x2ffe27(0x40a)] && (_0x3038d8 = window[_0x2ffe27(0x40a)]);
                    }
                }
                if (!_0x3038d8) {
                    const _0x296730 = localStorage[_0x2ffe27(0x3af)](_0x2ffe27(0x73f));
                    if (_0x296730)
                        try {
                            _0x3038d8 = JSON[_0x2ffe27(0x608)](_0x296730);
                        } catch (_0xe76d96) {}
                }
                if (!_0x3038d8)
                    throw new Error(_0x2ffe27(0x1f9));
                let _0x57890c = null;
                if (_0x3038d8[_0x2ffe27(0x46d)] && Array[_0x2ffe27(0x291)](_0x3038d8[_0x2ffe27(0x46d)]))
                    _0x57890c = _0x3038d8['skinArrayDict'];
                else {
                    if (_0x3038d8['skins'] && Array[_0x2ffe27(0x291)](_0x3038d8[_0x2ffe27(0x713)]))
                        _0x57890c = _0x3038d8[_0x2ffe27(0x713)];
                    else
                        throw new Error(_0x2ffe27(0x534));
                }
                let _0xb15684 = null;
                for (let _0x2d3496 = 0x0; _0x2d3496 < _0x57890c['length']; _0x2d3496++) {
                    if (_0x57890c[_0x2d3496] && _0x57890c[_0x2d3496]['id'] === _0x105077) {
                        _0xb15684 = _0x57890c[_0x2d3496];
                        break;
                    }
                }
                if (!_0xb15684)
                    throw new Error(_0x2ffe27(0x620));
                const _0x4a4ff7 = document[_0x2ffe27(0x5d0)](_0x2ffe27(0x4a4));
                _0x4a4ff7[_0x2ffe27(0x3a7)][_0x2ffe27(0x1aa)] = _0x2ffe27(0x792);
                const _0x6f3d5b = document[_0x2ffe27(0x5d0)]('div');
                _0x6f3d5b['textContent'] = '#' + _0x105077,
                _0x6f3d5b[_0x2ffe27(0x3a7)][_0x2ffe27(0x1aa)] = _0x2ffe27(0xfc),
                _0x4a4ff7[_0x2ffe27(0x16a)](_0x6f3d5b);
                const _0x656292 = document[_0x2ffe27(0x5d0)](_0x2ffe27(0x23f));
                _0x656292[_0x2ffe27(0x598)] = 0x258,
                _0x656292[_0x2ffe27(0x122)] = 0x50,
                _0x656292[_0x2ffe27(0x3a7)][_0x2ffe27(0x1aa)] = _0x2ffe27(0x76f),
                _0x4a4ff7['appendChild'](_0x656292);
                const _0x7580e9 = _0x656292[_0x2ffe27(0x5f1)]('2d');
                _0x7580e9[_0x2ffe27(0x4ec)](0x0, 0x0, _0x656292[_0x2ffe27(0x598)], _0x656292[_0x2ffe27(0x122)]);
                if (_0xb15684['base'] && Array[_0x2ffe27(0x291)](_0xb15684[_0x2ffe27(0x1d8)]) && _0xb15684['base'][_0x2ffe27(0x454)] > 0x0) {
                    let _0x2f3117 = {}
                      , _0x526e05 = [];
                    _0xb15684[_0x2ffe27(0x1d8)][_0x2ffe27(0x151)](_0x21fdc5 => {
                        var _0x31d470 = _0x2ffe27;
                        if (!_0x21fdc5)
                            return;
                        if (_0x3038d8['regionDict'] && _0x3038d8[_0x31d470(0x4ba)][_0x21fdc5]) {
                            const _0x28f9c6 = _0x3038d8[_0x31d470(0x4ba)][_0x21fdc5];
                            if (_0x3038d8['textureDict'] && _0x28f9c6[_0x31d470(0x58e)] && _0x3038d8[_0x31d470(0x788)][_0x28f9c6[_0x31d470(0x58e)]]) {
                                const _0x5f62c8 = _0x3038d8[_0x31d470(0x788)][_0x28f9c6['texture']];
                                if (_0x5f62c8 && (_0x5f62c8[_0x31d470(0x57c)] || _0x5f62c8[_0x31d470(0x415)])) {
                                    let _0x4bb9f1 = _0x47683c(_0x5f62c8[_0x31d470(0x415)] || _0x5f62c8[_0x31d470(0x57c)], _0x28f9c6[_0x31d470(0x58e)]);
                                    !_0x2f3117[_0x4bb9f1] && (_0x2f3117[_0x4bb9f1] = []),
                                    _0x2f3117[_0x4bb9f1][_0x31d470(0x731)]({
                                        'id': _0x21fdc5,
                                        'region': _0x28f9c6
                                    }),
                                    _0x526e05[_0x31d470(0x731)]({
                                        'id': _0x21fdc5,
                                        'region': _0x28f9c6
                                    });
                                }
                            }
                        }
                    }
                    );
                    const _0x2fe53b = [..._0x526e05][_0x2ffe27(0x34f)]();
                    let _0x55161 = [..._0x2fe53b];
                    while (_0x55161[_0x2ffe27(0x454)] < 0x1b) {
                        const _0x2a3f6e = 0x1b - _0x55161[_0x2ffe27(0x454)]
                          , _0x3a6ab9 = _0x2fe53b[_0x2ffe27(0x501)](0x0, Math['min'](_0x2a3f6e, _0x2fe53b['length']));
                        _0x55161 = [..._0x55161, ..._0x3a6ab9];
                    }
                    const _0x1e0c0d = 0x50
                      , _0x50f0ac = _0x1e0c0d / 0x2
                      , _0x4e3f03 = 0.2
                      , _0x4f33d8 = _0x1e0c0d * _0x4e3f03 * _0x55161[_0x2ffe27(0x454)] + _0x1e0c0d * 0.75;
                    _0x656292[_0x2ffe27(0x598)] = Math[_0x2ffe27(0x2b3)](0x258, _0x4f33d8),
                    _0x7580e9[_0x2ffe27(0x4ec)](0x0, 0x0, _0x656292[_0x2ffe27(0x598)], _0x656292[_0x2ffe27(0x122)]);
                    let _0x1cf289 = 0x0;
                    const _0x15792d = Object[_0x2ffe27(0x2f9)](_0x2f3117)['length'];
                    function _0x73f28c(_0x3c805a) {
                        _0x329f32(_0x3c805a);
                    }
                    function _0x329f32(_0x1fb930) {
                        var _0x4403ef = _0x2ffe27;
                        const _0x3dcf30 = _0x656292[_0x4403ef(0x122)] / 0x2;
                        _0x55161[_0x4403ef(0x151)]( (_0x25c5a1, _0x1749ea) => {
                            var _0x5b5070 = _0x4403ef;
                            if (!_0x25c5a1)
                                return;
                            const _0x5ba27f = _0x25c5a1[_0x5b5070(0x2dd)]
                              , _0x4dcd28 = _0x50f0ac + _0x1749ea * _0x50f0ac * 0x2 * _0x4e3f03;
                            _0x7580e9[_0x5b5070(0x63f)](),
                            _0x7580e9[_0x5b5070(0x27c)](),
                            _0x7580e9[_0x5b5070(0x141)](_0x4dcd28, _0x3dcf30, _0x50f0ac, 0x0, Math['PI'] * 0x2),
                            _0x7580e9['clip']();
                            const _0x3ff2b7 = Math[_0x5b5070(0x2b3)](_0x5ba27f['w'], _0x5ba27f['h'])
                              , _0xfcd24a = _0x50f0ac * 0x2 / _0x3ff2b7
                              , _0x323b04 = _0x4dcd28 - _0x5ba27f['w'] * _0xfcd24a / 0x2
                              , _0x4af369 = _0x3dcf30 - _0x5ba27f['h'] * _0xfcd24a / 0x2;
                            _0x7580e9[_0x5b5070(0x67b)](_0x1fb930, _0x5ba27f['x'], _0x5ba27f['y'], _0x5ba27f['w'], _0x5ba27f['h'], _0x323b04, _0x4af369, _0x5ba27f['w'] * _0xfcd24a, _0x5ba27f['h'] * _0xfcd24a),
                            _0x7580e9[_0x5b5070(0x354)]();
                        }
                        );
                    }
                    return Object[_0x2ffe27(0x2f9)](_0x2f3117)[_0x2ffe27(0x151)](_0x66e6ca => {
                        var _0x11df34 = _0x2ffe27;
                        if (window[_0x11df34(0x437)][_0x66e6ca]) {
                            _0x73f28c(window[_0x11df34(0x437)][_0x66e6ca]);
                            return;
                        }
                        const _0x462ae0 = new Image();
                        _0x462ae0[_0x11df34(0x250)] = () => {
                            var _0x1144e0 = _0x11df34;
                            window[_0x1144e0(0x437)][_0x66e6ca] = _0x462ae0,
                            _0x73f28c(_0x462ae0),
                            _0x1cf289++;
                        }
                        ,
                        _0x462ae0['onerror'] = () => {
                            _0x1cf289++;
                        }
                        ,
                        _0x462ae0[_0x11df34(0x659)] = _0x66e6ca;
                    }
                    ),
                    _0x4a4ff7;
                }
            } catch (_0xf0b28) {
                const _0x1c2cf1 = document[_0x2ffe27(0x5d0)](_0x2ffe27(0x4a4));
                return _0x1c2cf1[_0x2ffe27(0x3a7)][_0x2ffe27(0x1aa)] = _0x2ffe27(0x43a),
                _0x1c2cf1['textContent'] = '⚠️',
                _0x1c2cf1;
            }
            const _0x39e672 = document['createElement'](_0x2ffe27(0x4a4));
            return _0x39e672[_0x2ffe27(0x3a7)][_0x2ffe27(0x1aa)] = _0x2ffe27(0x6b5),
            _0x39e672[_0x2ffe27(0x3b4)] = '🎮',
            _0x39e672;
        }
        _0x3e9f16 = (function() {
            var _0x30f529 = _0x2413a9;
            function _0x1347d1(_0x24dbcc, _0x2d7bc1) {
                this['Cp'] = _0x24dbcc,
                this['yp'] = 0x0,
                this['xp'] = _0x2d7bc1;
            }
            return _0x1347d1[_0x30f529(0x551)]['qp'] = function() {
                var _0x305e43 = _0x30f529;
                --this['yp'] < 0x0 && (this['yp'] = this['xp'][_0x305e43(0x276)]['length'] - 0x1),
                this['Cp']['tp'](!![]);
            }
            ,
            _0x1347d1['prototype']['rp'] = function() {
                var _0x25e553 = _0x30f529;
                ++this['yp'] >= this['xp']['list'][_0x25e553(0x454)] && (this['yp'] = 0x0),
                this['Cp']['tp'](!![]);
            }
            ,
            _0x1347d1[_0x30f529(0x551)]['up'] = function() {
                var _0x13e529 = _0x30f529;
                let _0x1eba45 = _0x5d1bbd['V'](this['xp'][_0x13e529(0x4b8)]);
                return this['xp'][_0x13e529(0x526)] && ((this['xp'][_0x13e529(0x526)][_0x13e529(0x103)]('data:image/png;base64,') == -0x1 || !(_0x1eba45 = '<img\x20src=\x22' + this['xp'][_0x13e529(0x526)] + _0x13e529(0x576))) && (this['xp']['img'][_0x13e529(0x103)](_0x13e529(0x238)) == -0x1 || !(_0x1eba45 = _0x13e529(0x209) + this['xp'][_0x13e529(0x526)] + _0x13e529(0x576))) && (_0x1eba45 = _0x13e529(0x209) + _0x456264[_0x13e529(0x595)] + '/images/' + this['xp'][_0x13e529(0x526)] + _0x13e529(0x576))),
                _0x1eba45;
            }
            ,
            _0x1347d1[_0x30f529(0x551)]['Ap'] = function() {
                var _0x5f41f6 = _0x30f529;
                return this['yp'] >= this['xp'][_0x5f41f6(0x276)][_0x5f41f6(0x454)] ? _0x21385e['yj']['Aj']() : _0x21385e['yj']['Bj'](this['xp']['list'][this['yp']]);
            }
            ,
            _0x1347d1;
        }()),
        _0x21385e['Rk'] = _0x59e8ba,
        _0x401df0 = $(_0x2413a9(0x4b5)),
        _0x423c5c = $(_0x2413a9(0x594)),
        _0x62c9fd = $('#store-go-wear-button'),
        (_0x4f95b1 = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x571654 = _0x2413a9;
            _0x21385e['Ho'][_0x571654(0x11d)](this, _0x5d1bbd['U'](_0x571654(0x2eb)), !![]),
            _0x401df0[_0x571654(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hk']);
            }),
            _0x423c5c[_0x571654(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Qk']);
            }),
            _0x62c9fd[_0x571654(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Uk']);
            });
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x3a480b = _0x2413a9;
            _0x4f95b1[_0x3a480b(0x53f)]['prototype']['Sa'][_0x3a480b(0x11d)](this);
        }
        ,
        _0x4f95b1[_0x2413a9(0x551)]['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['So'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x4f95b1[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x21385e['Tk'] = _0x4f95b1,
        _0x8afc15 = $(_0x2413a9(0x483)),
        _0x24ca64 = $(_0x2413a9(0x673)),
        _0x120d25 = $(_0x2413a9(0x447)),
        _0x39e8a2 = $(_0x2413a9(0x68b)),
        _0x30c8c1 = $(_0x2413a9(0x21c)),
        _0x40a00c = $(_0x2413a9(0x56b)),
        _0x39cf3d = $('#wear-eyes-button'),
        _0x19dcfa = $(_0x2413a9(0x27f)),
        _0x1e347e = $(_0x2413a9(0x61c)),
        _0x373291 = $(_0x2413a9(0x232)),
        _0xc173b7 = $('#wear-tint-chooser'),
        _0x6652d8 = $(_0x2413a9(0x1ef)),
        _0x45ac50 = $(_0x2413a9(0x436)),
        (_0x50c922 = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x381f29 = _0x2413a9
              , _0x2c64d4 = this;
            _0x21385e['Ho'][_0x381f29(0x11d)](this, _0x5d1bbd['U'](_0x381f29(0x528)), !![]);
            var _0x1c00ac = this;
            this['Dp'] = [],
            this['ak'] = new _0x36e272(this,_0x21385e['_j']['ak'],_0x39cf3d),
            this['bk'] = new _0x36e272(this,_0x21385e['_j']['bk'],_0x19dcfa),
            this['dk'] = new _0x36e272(this,_0x21385e['_j']['dk'],_0x1e347e),
            this['ck'] = new _0x36e272(this,_0x21385e['_j']['ck'],_0x373291),
            this['Ep'] = null,
            this['Fp'] = null,
            this['Gp'] = null,
            this['Hp'] = null,
            this['Ip'] = null,
            this['Jp'] = null,
            this['op'] = new _0x21385e['Lm'](_0x8afc15),
            _0x30c8c1['click'](function() {
                ooo['ij']['if'](),
                _0x1c00ac['Kp']();
            }),
            _0x6652d8['click'](function() {
                ooo['ij']['if'](),
                _0x1c00ac['Ep']['Lp']();
            }),
            _0x45ac50[_0x381f29(0x3db)](function() {
                ooo['ij']['if'](),
                _0x1c00ac['Ep']['Mp']();
            }),
            _0x39cf3d[_0x381f29(0x3db)](function() {
                ooo['ij']['if'](),
                _0x1c00ac['Np'](_0x2c64d4['ak']);
            }),
            _0x19dcfa[_0x381f29(0x3db)](function() {
                ooo['ij']['if'](),
                _0x1c00ac['Np'](_0x2c64d4['bk']);
            }),
            _0x1e347e[_0x381f29(0x3db)](function() {
                ooo['ij']['if'](),
                _0x1c00ac['Np'](_0x2c64d4['dk']);
            }),
            _0x373291[_0x381f29(0x3db)](function() {
                ooo['ij']['if'](),
                _0x1c00ac['Np'](_0x2c64d4['ck']);
            }),
            this['Dp'][_0x381f29(0x731)](this['ak']),
            this['Dp'][_0x381f29(0x731)](this['bk']),
            this['Dp'][_0x381f29(0x731)](this['dk']),
            this['Dp']['push'](this['ck']);
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x1c78cd = _0x2413a9;
            _0x50c922[_0x1c78cd(0x53f)][_0x1c78cd(0x551)]['Sa'][_0x1c78cd(0x11d)](this);
            var _0x26190e = this;
            ooo['ud']['Jc'](function() {
                var _0x1a1b5e = _0x1c78cd
                  , _0x1c7ddd = ooo['ud']['Gc']();
                _0x26190e['Fp'] = _0x1c7ddd[_0x1a1b5e(0x1f2)],
                _0x26190e['Gp'] = _0x1c7ddd['mouthDict'],
                _0x26190e['Hp'] = _0x1c7ddd['glassesDict'],
                _0x26190e['Ip'] = _0x1c7ddd[_0x1a1b5e(0x663)],
                _0x26190e['Jp'] = _0x1c7ddd[_0x1a1b5e(0x47a)],
                _0x26190e['ak']['Op'](_0x1c7ddd['eyesVariantArray']),
                _0x26190e['ak']['Pp'](_0x26190e['Fp']),
                _0x26190e['bk']['Op'](_0x1c7ddd[_0x1a1b5e(0x72e)]),
                _0x26190e['bk']['Pp'](_0x26190e['Gp']),
                _0x26190e['dk']['Op'](_0x1c7ddd[_0x1a1b5e(0x34a)]),
                _0x26190e['dk']['Pp'](_0x26190e['Hp']),
                _0x26190e['ck']['Op'](_0x1c7ddd[_0x1a1b5e(0x2f3)]),
                _0x26190e['ck']['Pp'](_0x26190e['Ip']);
            }),
            this['tp'](![]),
            ooo['so']['fk'](function() {
                _0x26190e['tp'](![]);
            });
        }
        ,
        _0x50c922[_0x2413a9(0x551)]['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['To'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x50c922[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['Ye'](_0x21385e['Pe']['Se']['Jf']),
            ooo['ij']['jf'](),
            this['Np'](this['Ep'] ?? this['ak']),
            this['op']['rg'](!![]);
        }
        ,
        _0x50c922[_0x2413a9(0x551)]['hl'] = function() {
            this['op']['rg'](![]);
        }
        ,
        _0x50c922['prototype']['qg'] = function() {
            this['op']['qg']();
        }
        ,
        _0x50c922[_0x2413a9(0x551)]['ug'] = function(_0x56f1d3, _0x3a0eb9) {
            this['op']['ug']();
        }
        ,
        _0x50c922[_0x2413a9(0x551)]['Np'] = function(_0x1df8a8) {
            var _0x2c16b3 = _0x2413a9;
            this['Ep'] = _0x1df8a8;
            for (var _0xa4ea8d = 0x0; _0xa4ea8d < this['Dp']['length']; _0xa4ea8d++) {
                this['Dp'][_0xa4ea8d]['ep'][_0x2c16b3(0x504)](_0x2c16b3(0x207));
            }
            ;this['Ep']['ep'][_0x2c16b3(0x46e)]('pressed'),
            this['Ep']['ml']();
        }
        ,
        _0x50c922['prototype']['Qp'] = function() {
            return this['Ep'] == null ? _0x21385e['yj']['Aj']() : _0x21385e['yj']['Bj']({
                'Je': this['Ep']['Ap'](),
                'Wd': this['Ep']['Wd']
            });
        }
        ,
        _0x50c922['prototype']['Kp'] = function() {
            var _0x3fcceb = this['Qp']();
            if (_0x3fcceb['Cj']()) {
                var _0x41f8be = _0x3fcceb['Mc']();
                this['Rp'](_0x41f8be['Je'], _0x41f8be['Wd']);
            }
        }
        ,
        _0x50c922[_0x2413a9(0x551)]['Rp'] = function(_0x2f2e8c, _0x2fe437) {
            var _0xeb1c01 = ooo['so']['mk'](_0x2f2e8c, _0x2fe437);
            if (_0xeb1c01 != null) {
                var _0x3d640f = _0xeb1c01['pk']();
                if (!(ooo['ok']['Ql']() < _0x3d640f)) {
                    var _0x5b5ad5 = ooo['so']['Zj'](_0x21385e['_j']['$j'])
                      , _0x1d6a26 = ooo['so']['Zj'](_0x21385e['_j']['ak'])
                      , _0x17b7ce = ooo['so']['Zj'](_0x21385e['_j']['bk'])
                      , _0x1bd78b = ooo['so']['Zj'](_0x21385e['_j']['dk'])
                      , _0x70b66c = ooo['so']['Zj'](_0x21385e['_j']['ck'])
                      , _0x34cd87 = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x2f2e8c, _0x2fe437, function() {
                        _0x34cd87['_o'](),
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x5b5ad5, _0x21385e['_j']['$j']),
                            ooo['so']['lk'](_0x1d6a26, _0x21385e['_j']['ak']),
                            ooo['so']['lk'](_0x17b7ce, _0x21385e['_j']['bk']),
                            ooo['so']['lk'](_0x1bd78b, _0x21385e['_j']['dk']),
                            ooo['so']['lk'](_0x70b66c, _0x21385e['_j']['ck']),
                            ooo['so']['lk'](_0x2f2e8c, _0x2fe437),
                            _0x34cd87['_o']();
                        });
                    });
                }
            }
        }
        ,
        window[_0x2413a9(0x680)] = window['globalHatTextureCache'] || {},
        _0x50c922[_0x2413a9(0x551)]['tp'] = function(_0xad377e) {
            var _0x48144b = _0x2413a9
              , _0x1074b7 = ooo['so']['ek']()
              , _0x582a08 = this['Qp']();
            if (_0x582a08['Cj']()) {
                var _0x2e4687 = _0x582a08['Mc']()
                  , _0x575d07 = ooo['so']['mk'](_0x2e4687['Je'], _0x2e4687['Wd'])
                  , _0x32e30e = ![];
                !_0x2e4687['selectedHats'] && (_0x2e4687[_0x48144b(0x23d)] = []);
                if (ooo['so']['ik'](_0x2e4687['Je'], _0x2e4687['Wd']))
                    _0x120d25[_0x48144b(0x45a)](),
                    _0x30c8c1['hide'](),
                    _0x2e4687['Wd'] === _0x48144b(0x614) ? this[_0x48144b(0x129)](_0x2e4687['Je']) : this[_0x48144b(0x7a4)]();
                else {
                    if (_0x575d07 == null || _0x575d07['qk']()) {
                        _0x32e30e = !![],
                        _0x120d25[_0x48144b(0x637)](),
                        _0x30c8c1[_0x48144b(0x45a)](),
                        _0x39e8a2['text'](_0x5d1bbd['U']('index.game.popup.menu.store.locked'));
                        if (_0x575d07 != null && _0x575d07['qk']()) {
                            var _0x2f976e = ooo['ud']['Gc']()[_0x48144b(0x71a)][_0x575d07['ln']()];
                            _0x2f976e != null && _0x39e8a2['text'](_0x5d1bbd['V'](_0x2f976e));
                        }
                        this[_0x48144b(0x7a4)]();
                    } else
                        _0x120d25[_0x48144b(0x45a)](),
                        _0x30c8c1['show'](),
                        _0x40a00c['html'](_0x575d07['pk']()),
                        this[_0x48144b(0x7a4)]();
                }
                _0x24ca64[_0x48144b(0x3b1)]('');
                if (_0x575d07 != null && _0x575d07['mn']() != null) {
                    var _0x1254fb = ooo['ud']['Gc']()[_0x48144b(0x71a)][_0x575d07['mn']()];
                    _0x1254fb != null && _0x24ca64[_0x48144b(0x3b1)](_0x5d1bbd['aa'](_0x5d1bbd['V'](_0x1254fb)));
                }
                var _0x774bf5 = this['op'];
                switch (_0x2e4687['Wd']) {
                case 'EYES':
                    _0x774bf5['Gm'](_0x1074b7['Dn'](_0x2e4687['Je'])),
                    _0x774bf5['bn'](_0x32e30e);
                    break;
                case 'MOUTH':
                    _0x774bf5['Gm'](_0x1074b7['En'](_0x2e4687['Je'])),
                    _0x774bf5['cn'](_0x32e30e);
                    break;
                case _0x48144b(0x320):
                    _0x774bf5['Gm'](_0x1074b7['Gn'](_0x2e4687['Je'])),
                    _0x774bf5['en'](_0x32e30e);
                    break;
                case _0x48144b(0x614):
                    _0x774bf5['Gm'](_0x1074b7['Fn'](_0x2e4687['Je'])),
                    _0x774bf5['dn'](_0x32e30e);
                    break;
                }
                _0xad377e && ooo['so']['lk'](_0x2e4687['Je'], _0x2e4687['Wd']);
            }
        }
        ,
        _0x50c922[_0x2413a9(0x551)][_0x2413a9(0x129)] = function(_0x2138a6) {
            var _0x271022 = _0x2413a9;
            this[_0x271022(0x60d)] = _0x2138a6;
            if (!this[_0x271022(0x1d0)]) {
                this[_0x271022(0x1d0)] = $('<div>')[_0x271022(0x107)]('id', 'hat-button-container')[_0x271022(0x259)]({
                    'position': _0x271022(0x679),
                    'bottom': _0x271022(0x4b7),
                    'left': _0x271022(0x356),
                    'display': _0x271022(0x5d2),
                    'gap': _0x271022(0x1b2)
                })[_0x271022(0x2ff)](_0x271022(0xe9)),
                this[_0x271022(0x75c)] = $('<button>')[_0x271022(0x107)]('id', _0x271022(0x1e6))[_0x271022(0x259)]({
                    'padding': _0x271022(0x735),
                    'background-color': _0x271022(0x7c3),
                    'color': _0x271022(0x7bf),
                    'border': _0x271022(0x15d),
                    'border-radius': _0x271022(0x3cc),
                    'cursor': _0x271022(0x13e),
                    'min-width': _0x271022(0x143)
                })[_0x271022(0x2ff)](this[_0x271022(0x1d0)]),
                this[_0x271022(0x4f1)] = $('<button>')[_0x271022(0x107)]('id', _0x271022(0x194))[_0x271022(0x259)]({
                    'padding': _0x271022(0x735),
                    'background-color': _0x271022(0x690),
                    'color': 'white',
                    'border': 'none',
                    'border-radius': _0x271022(0x3cc),
                    'cursor': _0x271022(0x13e)
                })[_0x271022(0x2a7)]('☰\x20Favorites')[_0x271022(0x2ff)](this[_0x271022(0x1d0)]),
                this['hatInfoText'] = $(_0x271022(0x721))[_0x271022(0x107)]('id', _0x271022(0x779))[_0x271022(0x259)]({
                    'position': _0x271022(0x679),
                    'bottom': _0x271022(0x20a),
                    'left': _0x271022(0x554),
                    'font-size': _0x271022(0x3c0),
                    'color': _0x271022(0x6e3)
                })[_0x271022(0x2a7)](_0x271022(0x74e))[_0x271022(0x2ff)](_0x271022(0xe9));
                var _0x3b4901 = this;
                this['hatFavoritesButton']['on'](_0x271022(0x3db), function() {
                    _0x3b4901['showFavoritesDialog']();
                });
            }
            let _0x6cc8a0 = _0x456264[_0x271022(0x23d)][_0x271022(0x424)](_0x2138a6);
            this[_0x271022(0x75c)]['text'](_0x6cc8a0 ? 'X' : _0x271022(0x3d1)),
            this[_0x271022(0x75c)]['css'](_0x271022(0x20d), _0x6cc8a0 ? _0x271022(0x1f3) : _0x271022(0x7c3)),
            this['hatToggleButton'][_0x271022(0x44e)](_0x271022(0x3db));
            var _0x3b4901 = this;
            this[_0x271022(0x75c)]['on'](_0x271022(0x3db), function() {
                var _0xec7e2e = _0x271022;
                let _0x5beb72 = _0x456264[_0xec7e2e(0x23d)][_0xec7e2e(0x12a)](_0x2138a6);
                _0x5beb72 >= 0x0 ? (_0x456264[_0xec7e2e(0x23d)][_0xec7e2e(0x140)](_0x5beb72, 0x1),
                $(this)[_0xec7e2e(0x2a7)](_0xec7e2e(0x5f6))['css'](_0xec7e2e(0x20d), _0xec7e2e(0x7c3))) : (_0x456264['selectedHats'][_0xec7e2e(0x731)](_0x2138a6),
                $(this)['text']('X')['css'](_0xec7e2e(0x20d), _0xec7e2e(0x1f3))),
                localStorage['setItem']('SaveGamewft', JSON[_0xec7e2e(0x6b1)](_0x456264));
            }),
            this[_0x271022(0x1d0)]['show'](),
            this['hatInfoText'][_0x271022(0x637)]();
        }
        ,
        _0x50c922[_0x2413a9(0x551)][_0x2413a9(0x7a4)] = function() {
            var _0x65a5e5 = _0x2413a9;
            this[_0x65a5e5(0x1d0)] && this['hatButtonContainer'][_0x65a5e5(0x45a)](),
            this[_0x65a5e5(0xee)] && this[_0x65a5e5(0xee)]['hide']();
        }
        ;
        function _0x4aa8ac(_0x2d4774) {
            var _0x4b7522 = _0x2413a9;
            try {
                if (window[_0x4b7522(0x680)][_0x2d4774] && window[_0x4b7522(0x680)][_0x2d4774][_0x4b7522(0x243)])
                    return window[_0x4b7522(0x680)][_0x2d4774];
                const _0x2416a0 = ooo['ud']['Cc']()['Yb'](_0x2d4774);
                if (!_0x2416a0 || !_0x2416a0['dc'] || !_0x2416a0['dc'][_0x4b7522(0x454)])
                    return null;
                const _0x5c08cd = _0x2416a0['dc'][0x0];
                let _0x4a86a3 = null;
                if (_0x5c08cd['_a'] !== undefined)
                    _0x4a86a3 = {
                        'x': _0x5c08cd['_a'] || 0x0,
                        'y': _0x5c08cd['ab'] || 0x0,
                        'width': _0x5c08cd['bb'] || 0x0,
                        'height': _0x5c08cd['cb'] || 0x0
                    };
                else {
                    if (_0x5c08cd[_0x4b7522(0x471)])
                        _0x4a86a3 = {
                            'x': _0x5c08cd[_0x4b7522(0x471)]['x'] || 0x0,
                            'y': _0x5c08cd[_0x4b7522(0x471)]['y'] || 0x0,
                            'width': _0x5c08cd[_0x4b7522(0x471)][_0x4b7522(0x598)] || 0x0,
                            'height': _0x5c08cd[_0x4b7522(0x471)][_0x4b7522(0x122)] || 0x0
                        };
                    else {
                        if (_0x5c08cd[_0x4b7522(0x4dd)])
                            _0x4a86a3 = {
                                'x': _0x5c08cd[_0x4b7522(0x4dd)]['x'] || 0x0,
                                'y': _0x5c08cd['orig']['y'] || 0x0,
                                'width': _0x5c08cd[_0x4b7522(0x4dd)][_0x4b7522(0x598)] || 0x0,
                                'height': _0x5c08cd[_0x4b7522(0x4dd)]['height'] || 0x0
                            };
                        else
                            _0x5c08cd['va'] && _0x5c08cd['va'][_0x4b7522(0x454)] >= 0x4 && (_0x4a86a3 = {
                                'x': _0x5c08cd['va'][0x0] || 0x0,
                                'y': _0x5c08cd['va'][0x1] || 0x0,
                                'width': _0x5c08cd['va'][0x2] || 0x0,
                                'height': _0x5c08cd['va'][0x3] || 0x0
                            });
                    }
                }
                let _0x182b81 = null;
                if (_0x5c08cd['Za'] && _0x5c08cd['Za']['baseTexture'] && _0x5c08cd['Za']['baseTexture'][_0x4b7522(0x7a3)] && _0x5c08cd['Za'][_0x4b7522(0x6d6)][_0x4b7522(0x7a3)][_0x4b7522(0x67a)])
                    _0x182b81 = _0x5c08cd['Za'][_0x4b7522(0x6d6)][_0x4b7522(0x7a3)][_0x4b7522(0x67a)];
                else {
                    if (_0x5c08cd[_0x4b7522(0x6d6)] && _0x5c08cd[_0x4b7522(0x6d6)][_0x4b7522(0x7a3)] && _0x5c08cd[_0x4b7522(0x6d6)][_0x4b7522(0x7a3)][_0x4b7522(0x67a)])
                        _0x182b81 = _0x5c08cd['baseTexture'][_0x4b7522(0x7a3)][_0x4b7522(0x67a)];
                    else {
                        if (_0x5c08cd[_0x4b7522(0x6d6)] && _0x5c08cd['baseTexture'][_0x4b7522(0x7a3)] && _0x5c08cd['baseTexture'][_0x4b7522(0x7a3)][_0x4b7522(0x399)])
                            _0x182b81 = _0x5c08cd[_0x4b7522(0x6d6)][_0x4b7522(0x7a3)][_0x4b7522(0x399)];
                        else
                            _0x5c08cd[_0x4b7522(0x6d6)] && _0x5c08cd['baseTexture']['source'] && (_0x182b81 = _0x5c08cd[_0x4b7522(0x6d6)][_0x4b7522(0x67a)]);
                    }
                }
                const _0x1ce44b = {
                    'hatId': _0x2d4774,
                    'image': _0x182b81 || null,
                    'coords': _0x4a86a3 || null,
                    'textureData': _0x5c08cd,
                    'hatData': _0x2416a0,
                    'valid': _0x182b81 && _0x4a86a3 ? !![] : ![]
                };
                return window['globalHatTextureCache'][_0x2d4774] = _0x1ce44b,
                _0x1ce44b;
            } catch (_0x47bc54) {
                return null;
            }
        }
        function _0x4bd7fe(_0x49f8db) {
            var _0x167dca = _0x2413a9;
            try {
                const _0x563696 = document['createElement'](_0x167dca(0x4a4));
                _0x563696[_0x167dca(0x3a7)]['cssText'] = _0x167dca(0x2ed);
                const _0x2bb36b = document['createElement'](_0x167dca(0x4a4));
                _0x2bb36b[_0x167dca(0x3b4)] = '#' + _0x49f8db,
                _0x2bb36b[_0x167dca(0x3a7)][_0x167dca(0x1aa)] = _0x167dca(0x138),
                _0x563696[_0x167dca(0x16a)](_0x2bb36b);
                const _0x3d5337 = document[_0x167dca(0x5d0)](_0x167dca(0x23f));
                _0x3d5337[_0x167dca(0x598)] = 0x50,
                _0x3d5337[_0x167dca(0x122)] = 0x50,
                _0x3d5337[_0x167dca(0x3a7)][_0x167dca(0x1aa)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
                _0x563696[_0x167dca(0x16a)](_0x3d5337);
                const _0x49a64d = _0x3d5337[_0x167dca(0x5f1)]('2d', {
                    'willReadFrequently': !![]
                });
                _0x49a64d[_0x167dca(0x4ec)](0x0, 0x0, _0x3d5337[_0x167dca(0x598)], _0x3d5337[_0x167dca(0x122)]);
                const _0x23b75f = _0x4aa8ac(_0x49f8db);
                if (!_0x23b75f || !_0x23b75f['image'] || !_0x23b75f['coords'])
                    return _0x49a64d[_0x167dca(0x3bb)] = _0x167dca(0x59c),
                    _0x49a64d[_0x167dca(0x397)](0x0, 0x0, _0x3d5337[_0x167dca(0x598)], _0x3d5337['height']),
                    _0x49a64d[_0x167dca(0x3bb)] = _0x167dca(0x7bf),
                    _0x49a64d['font'] = _0x167dca(0x2b2),
                    _0x49a64d[_0x167dca(0x179)] = 'center',
                    _0x49a64d[_0x167dca(0x64d)]('#' + _0x49f8db, _0x3d5337['width'] / 0x2, _0x3d5337['height'] / 0x2),
                    _0x563696;
                try {
                    if (_0x23b75f[_0x167dca(0x254)]) {
                        _0x49a64d[_0x167dca(0x63f)]();
                        const _0x5e8cfc = Math[_0x167dca(0xe5)]((_0x3d5337['width'] - 0xa) / _0x23b75f['coords']['width'], (_0x3d5337[_0x167dca(0x122)] - 0xa) / _0x23b75f[_0x167dca(0x254)][_0x167dca(0x122)]) * 0.9
                          , _0x5a19d4 = _0x23b75f['coords'][_0x167dca(0x598)] * _0x5e8cfc
                          , _0x4d81f1 = _0x23b75f['coords'][_0x167dca(0x122)] * _0x5e8cfc
                          , _0x192c30 = (_0x3d5337[_0x167dca(0x598)] - _0x5a19d4) / 0x2
                          , _0x38b41e = (_0x3d5337[_0x167dca(0x122)] - _0x4d81f1) / 0x2;
                        _0x49a64d[_0x167dca(0x67b)](_0x23b75f[_0x167dca(0x2a9)], _0x23b75f[_0x167dca(0x254)]['x'], _0x23b75f['coords']['y'], _0x23b75f[_0x167dca(0x254)][_0x167dca(0x598)], _0x23b75f[_0x167dca(0x254)]['height'], _0x192c30, _0x38b41e, _0x5a19d4, _0x4d81f1),
                        _0x49a64d['restore']();
                    } else {
                        const _0x4d7d8d = Math['min']((_0x3d5337[_0x167dca(0x598)] - 0xa) / _0x23b75f[_0x167dca(0x2a9)][_0x167dca(0x598)], (_0x3d5337[_0x167dca(0x122)] - 0xa) / _0x23b75f[_0x167dca(0x2a9)]['height']) * 0.8
                          , _0x202bbf = _0x23b75f[_0x167dca(0x2a9)]['width'] * _0x4d7d8d
                          , _0x18ed21 = _0x23b75f[_0x167dca(0x2a9)][_0x167dca(0x122)] * _0x4d7d8d
                          , _0x5151c9 = (_0x3d5337[_0x167dca(0x598)] - _0x202bbf) / 0x2
                          , _0x15a57e = (_0x3d5337[_0x167dca(0x122)] - _0x18ed21) / 0x2;
                        _0x49a64d[_0x167dca(0x67b)](_0x23b75f[_0x167dca(0x2a9)], _0x5151c9, _0x15a57e, _0x202bbf, _0x18ed21);
                    }
                } catch (_0x1b255c) {
                    _0x49a64d['fillStyle'] = _0x167dca(0x59c),
                    _0x49a64d['fillRect'](0x0, 0x0, _0x3d5337[_0x167dca(0x598)], _0x3d5337[_0x167dca(0x122)]),
                    _0x49a64d[_0x167dca(0x3bb)] = _0x167dca(0x7bf),
                    _0x49a64d[_0x167dca(0x7b6)] = _0x167dca(0x2b2),
                    _0x49a64d['textAlign'] = 'center',
                    _0x49a64d['fillText']('#' + _0x49f8db, _0x3d5337[_0x167dca(0x598)] / 0x2, _0x3d5337[_0x167dca(0x122)] / 0x2);
                }
                return _0x563696;
            } catch (_0x1e2024) {
                const _0x1e5fcb = document[_0x167dca(0x5d0)](_0x167dca(0x4a4));
                return _0x1e5fcb[_0x167dca(0x3a7)]['cssText'] = _0x167dca(0x43a),
                _0x1e5fcb['textContent'] = '#' + _0x49f8db,
                _0x1e5fcb;
            }
        }
        _0x50c922[_0x2413a9(0x551)][_0x2413a9(0x4de)] = function() {
            var _0x3e8ec6 = _0x2413a9;
            $('#favorites-dialog,\x20#favorites-overlay')[_0x3e8ec6(0x5cc)]();
            var _0x3a877e = $('<div>')[_0x3e8ec6(0x107)]('id', _0x3e8ec6(0x1cd))[_0x3e8ec6(0x259)]({
                'position': _0x3e8ec6(0x651),
                'top': '0',
                'left': '0',
                'width': _0x3e8ec6(0x49a),
                'height': '100%',
                'background-color': _0x3e8ec6(0x228),
                'z-index': _0x3e8ec6(0x456)
            })[_0x3e8ec6(0x2ff)](_0x3e8ec6(0x41b))
              , _0x1152b1 = $(_0x3e8ec6(0x721))[_0x3e8ec6(0x107)]('id', _0x3e8ec6(0x403))[_0x3e8ec6(0x259)]({
                'position': _0x3e8ec6(0x651),
                'top': _0x3e8ec6(0x541),
                'left': '50%',
                'transform': 'translate(-50%,\x20-50%)',
                'background-color': '#1e1e2f',
                'border-radius': _0x3e8ec6(0xe4),
                'box-shadow': _0x3e8ec6(0x605),
                'z-index': '1000',
                'width': _0x3e8ec6(0x168),
                'overflow': _0x3e8ec6(0x6f5),
                'color': _0x3e8ec6(0x7bf)
            })['appendTo'](_0x3e8ec6(0x41b))
              , _0x1fc0df = $(_0x3e8ec6(0x721))[_0x3e8ec6(0x259)]({
                'padding': _0x3e8ec6(0x624),
                'background-color': _0x3e8ec6(0x358),
                'border-bottom': _0x3e8ec6(0x2e9),
                'position': 'relative',
                'display': 'flex',
                'justify-content': _0x3e8ec6(0x31d),
                'align-items': _0x3e8ec6(0x443)
            })[_0x3e8ec6(0x2ff)](_0x1152b1);
            $(_0x3e8ec6(0x1fa))['text'](_0x3e8ec6(0x12b))[_0x3e8ec6(0x259)]({
                'margin': '0\x200\x200\x205px',
                'font-size': '18px',
                'color': _0x3e8ec6(0x7bf),
                'padding-left': '15px'
            })[_0x3e8ec6(0x2ff)](_0x1fc0df);
            var _0x39ccf8 = $(_0x3e8ec6(0x485))[_0x3e8ec6(0x3b1)](_0x3e8ec6(0x1cc))[_0x3e8ec6(0x259)]({
                'position': _0x3e8ec6(0x679),
                'top': _0x3e8ec6(0xe4),
                'left': _0x3e8ec6(0x20a),
                'font-size': _0x3e8ec6(0x785),
                'background': 'none',
                'border': _0x3e8ec6(0x15d),
                'color': '#aaa',
                'cursor': _0x3e8ec6(0x13e),
                'padding': _0x3e8ec6(0x628),
                'line-height': '1',
                'font-weight': 'bold'
            })[_0x3e8ec6(0x2ff)](_0x1fc0df)
              , _0x3b26df = $(_0x3e8ec6(0x485))[_0x3e8ec6(0x2a7)](_0x3e8ec6(0x2cf))[_0x3e8ec6(0x259)]({
                'padding': '4px\x208px',
                'background-color': '#f44336',
                'color': _0x3e8ec6(0x7bf),
                'border': _0x3e8ec6(0x15d),
                'border-radius': _0x3e8ec6(0x3cc),
                'cursor': 'pointer',
                'font-size': _0x3e8ec6(0x3c0)
            })[_0x3e8ec6(0x2ff)](_0x1fc0df)
              , _0xa78f1c = $(_0x3e8ec6(0x721))[_0x3e8ec6(0x107)]('id', 'favorites-content')[_0x3e8ec6(0x259)]({
                'padding': _0x3e8ec6(0x624),
                'max-height': _0x3e8ec6(0xe0),
                'overflow-y': _0x3e8ec6(0x41e)
            })[_0x3e8ec6(0x2ff)](_0x1152b1)
              , _0xbb336b = $(_0x3e8ec6(0x721))[_0x3e8ec6(0x107)]('class', _0x3e8ec6(0x66a))[_0x3e8ec6(0x259)]({
                'display': _0x3e8ec6(0x2e1),
                'grid-template-columns': _0x3e8ec6(0x3c1),
                'gap': _0x3e8ec6(0x3c0),
                'padding': '0',
                'margin': '0'
            })[_0x3e8ec6(0x2ff)](_0xa78f1c)
              , _0x1d3bc3 = this;
            _0x3b26df['on'](_0x3e8ec6(0x3db), function() {
                var _0x14e3b0 = _0x3e8ec6;
                confirm(_0x14e3b0(0x2f6)) && (_0x456264[_0x14e3b0(0x23d)] = [],
                localStorage[_0x14e3b0(0x434)]('SaveGamewft', JSON[_0x14e3b0(0x6b1)](_0x456264)),
                _0xbb336b[_0x14e3b0(0x78c)](),
                $(_0x14e3b0(0x721))[_0x14e3b0(0x259)]({
                    'text-align': 'center',
                    'padding': _0x14e3b0(0x20a),
                    'color': _0x14e3b0(0x7b9),
                    'margin': _0x14e3b0(0x269),
                    'grid-column': _0x14e3b0(0x28b)
                })['text'](_0x14e3b0(0x1ca))[_0x14e3b0(0x2ff)](_0xbb336b),
                _0x1d3bc3[_0x14e3b0(0x75c)] && _0x1d3bc3[_0x14e3b0(0x75c)]['is'](_0x14e3b0(0x163)) && _0x1d3bc3[_0x14e3b0(0x75c)][_0x14e3b0(0x2a7)](_0x14e3b0(0x3d1))['css']('background-color', _0x14e3b0(0x7c3)));
            });
            function _0x4b2341() {
                var _0x595287 = _0x3e8ec6;
                _0x1152b1[_0x595287(0x5cc)](),
                _0x3a877e[_0x595287(0x5cc)]();
            }
            _0x39ccf8['on'](_0x3e8ec6(0x3db), _0x4b2341),
            _0x3a877e['on'](_0x3e8ec6(0x3db), _0x4b2341),
            !_0x456264[_0x3e8ec6(0x23d)] || _0x456264['selectedHats'][_0x3e8ec6(0x454)] === 0x0 ? $(_0x3e8ec6(0x721))[_0x3e8ec6(0x259)]({
                'text-align': _0x3e8ec6(0x443),
                'padding': '10px',
                'color': '#aaa',
                'margin': _0x3e8ec6(0x269),
                'grid-column': _0x3e8ec6(0x752)
            })[_0x3e8ec6(0x2a7)](_0x3e8ec6(0x1ca))['appendTo'](_0xbb336b) : (_0x456264[_0x3e8ec6(0x23d)][_0x3e8ec6(0x151)](function(_0x4f5f98) {
                _0x4aa8ac(_0x4f5f98);
            }),
            _0x456264['selectedHats'][_0x3e8ec6(0x151)](function(_0x5395ce, _0x1875ad) {
                var _0x43ea03 = _0x3e8ec6
                  , _0x4ebdf0 = $(_0x43ea03(0x721))[_0x43ea03(0x107)]('data-index', _0x1875ad)['attr'](_0x43ea03(0x30e), _0x5395ce)[_0x43ea03(0x259)]({
                    'display': _0x43ea03(0x5d2),
                    'flex-direction': _0x43ea03(0x30c),
                    'align-items': _0x43ea03(0x443),
                    'padding': _0x43ea03(0x1e5),
                    'background': _0x43ea03(0x358),
                    'border-radius': _0x43ea03(0x625),
                    'position': _0x43ea03(0x62d),
                    'height': _0x43ea03(0x619),
                    'width': _0x43ea03(0x49a)
                })[_0x43ea03(0x2ff)](_0xbb336b)
                  , _0x3baf61 = $(_0x43ea03(0x721))[_0x43ea03(0x259)]({
                    'width': _0x43ea03(0x49a),
                    'height': _0x43ea03(0xda),
                    'background': _0x43ea03(0x35d),
                    'border-radius': _0x43ea03(0x3cc),
                    'overflow': _0x43ea03(0x712),
                    'position': _0x43ea03(0x62d),
                    'display': 'flex',
                    'justify-content': _0x43ea03(0x443),
                    'align-items': 'center'
                })['appendTo'](_0x4ebdf0)
                  , _0x2fd53d = $('<button>')[_0x43ea03(0x2a7)]('X')['css']({
                    'position': _0x43ea03(0x679),
                    'top': _0x43ea03(0x3cc),
                    'right': '4px',
                    'background': _0x43ea03(0x1f3),
                    'color': _0x43ea03(0x7bf),
                    'border': _0x43ea03(0x15d),
                    'padding': '2px\x206px',
                    'border-radius': _0x43ea03(0x50a),
                    'cursor': _0x43ea03(0x13e),
                    'font-size': '12px',
                    'z-index': '20'
                })['appendTo'](_0x4ebdf0)
                  , _0x92d9fc = _0x4bd7fe(_0x5395ce);
                _0x3baf61[_0x43ea03(0x418)](_0x92d9fc),
                _0x2fd53d['on'](_0x43ea03(0x3db), function(_0x529541) {
                    var _0x3c4e89 = _0x43ea03;
                    _0x529541[_0x3c4e89(0x708)]();
                    var _0x254995 = $(this)[_0x3c4e89(0x43e)]('[data-index]')
                      , _0x104c1d = parseInt(_0x254995['attr'](_0x3c4e89(0xf0)))
                      , _0xf53436 = _0x254995[_0x3c4e89(0x107)](_0x3c4e89(0x30e));
                    _0x456264[_0x3c4e89(0x23d)] && _0x104c1d >= 0x0 && _0x104c1d < _0x456264[_0x3c4e89(0x23d)]['length'] && (_0x456264[_0x3c4e89(0x23d)][_0x3c4e89(0x140)](_0x104c1d, 0x1),
                    localStorage['setItem'](_0x3c4e89(0x4ab), JSON[_0x3c4e89(0x6b1)](_0x456264)),
                    _0x254995[_0x3c4e89(0x3cf)](0x12c, function() {
                        var _0x339183 = _0x3c4e89;
                        $(this)[_0x339183(0x5cc)](),
                        _0xbb336b[_0x339183(0x305)](_0x339183(0x580))[_0x339183(0x3e7)](function(_0x336404) {
                            var _0x56124c = _0x339183;
                            $(this)[_0x56124c(0x107)](_0x56124c(0xf0), _0x336404);
                        }),
                        _0x456264[_0x339183(0x23d)]['length'] === 0x0 && (_0xbb336b[_0x339183(0x78c)](),
                        $(_0x339183(0x721))['css']({
                            'text-align': _0x339183(0x443),
                            'padding': _0x339183(0x20a),
                            'color': '#aaa',
                            'margin': _0x339183(0x269),
                            'grid-column': _0x339183(0x28b)
                        })[_0x339183(0x2a7)](_0x339183(0x1ca))[_0x339183(0x2ff)](_0xbb336b)),
                        _0x1d3bc3[_0x339183(0x60d)] === _0xf53436 && _0x1d3bc3[_0x339183(0x75c)] && _0x1d3bc3[_0x339183(0x75c)]['text'](_0x339183(0x3d1))['css']('background-color', _0x339183(0x7c3));
                    }));
                });
            })),
            $('.favorites-content')['on'](_0x3e8ec6(0x4f5), function() {
                var _0x53328e = _0x3e8ec6;
                $(this)['css'](_0x53328e(0x41d), 'auto');
            }),
            $(_0x3e8ec6(0x371))['on'](_0x3e8ec6(0xfb), function() {
                setTimeout(function() {
                    var _0x4f14d1 = _0x3903;
                    $(_0x4f14d1(0x25a))['scrollTop'](0x0);
                }, 0x64);
            });
        }
        ;
        function _0x5ceb41(_0x2192c5) {
            try {
                if (ooo && ooo['Mh'] && ooo['Mh']['Lh'] && ooo['Mh']['Lh']['ki']) {
                    const _0x2c5708 = ooo['Mh']['Lh']['ki']['Yi'];
                    ooo['Mh']['Lh']['ki']['Yi'] = _0x2192c5;
                    ooo['Mh']['Qh'] && ooo['Mh']['Qh']['fh'] && ooo['Mh']['li'] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki'] && (ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki']['Yi'] = _0x2192c5);
                    if (_0x36a055 && _0x36a055['uj'] && _0x36a055['n']) {
                        const _0x3f3774 = _0x5cc7b8(_0x36a055['uj']);
                        if (_0x3f3774)
                            return _0x529fc4(_0x3f3774, _0x2192c5),
                            !![];
                        else {
                            const _0x35b500 = ooo['ud']['Cc']()['Yb'](_0x2192c5);
                            if (_0x35b500)
                                return _0x82eb36(_0x36a055['uj'], _0x35b500),
                                !![];
                        }
                    }
                    return !![];
                }
            } catch (_0x58017a) {}
            return ![];
        }
        function _0x5cc7b8(_0x438206) {
            if (_0x438206['Zc'] && _0x438206['Zc']['rd'])
                return _0x438206['Zc']['rd'];
            return null;
        }
        function _0x529fc4(_0x473921, _0x47120e) {
            var _0x34496e = _0x2413a9;
            if (_0x473921 && _0x473921[_0x34496e(0x454)] > 0x0) {
                const _0x257e39 = ooo['ud']['Cc']()['Yb'](_0x47120e);
                if (_0x257e39 && _0x257e39['dc'] && _0x257e39['dc'][_0x34496e(0x454)] > 0x0)
                    try {
                        return _0x473921[0x0]['kd'](_0x257e39['dc'][0x0]),
                        !![];
                    } catch (_0x3ec1d6) {}
            }
            return ![];
        }
        function _0x82eb36(_0xfbb4b4, _0x207466) {
            if (_0xfbb4b4 && _0xfbb4b4['Zc'] && _0x207466)
                try {
                    return _0xfbb4b4['Zc']['yd'](0.004, _0xfbb4b4['Zc']['rd'], _0x207466),
                    !![];
                } catch (_0x156c7b) {}
            return ![];
        }
        function _0x4bc9a4() {
            var _0x2b02de = _0x2413a9;
            if (!_0x456264['selectedHats']) {
                _0x456264[_0x2b02de(0x23d)] = [],
                localStorage[_0x2b02de(0x434)](_0x2b02de(0x4ab), JSON[_0x2b02de(0x6b1)](_0x456264));
                return;
            }
            if (_0x456264['selectedHats'][_0x2b02de(0x454)] > 0x0) {
                _0x456264[_0x2b02de(0x647)] === undefined ? _0x456264['currentHatIndex'] = 0x0 : _0x456264[_0x2b02de(0x647)] = (_0x456264[_0x2b02de(0x647)] + 0x1) % _0x456264[_0x2b02de(0x23d)][_0x2b02de(0x454)];
                let _0x2fddd2 = _0x456264[_0x2b02de(0x23d)][_0x456264[_0x2b02de(0x647)]];
                const _0x32c40b = _0x5ceb41(_0x2fddd2);
                localStorage[_0x2b02de(0x434)](_0x2b02de(0x4ab), JSON[_0x2b02de(0x6b1)](_0x456264));
            }
        }
        function _0x5c5eb9() {
            var _0x3b0f9f = _0x2413a9;
            if (window[_0x3b0f9f(0x12d)])
                return;
            $(document)['on'](_0x3b0f9f(0x222), function(_0x51b537) {
                (_0x51b537['keyCode'] === 0x32 || _0x51b537['which'] === 0x32) && _0x4bc9a4();
            }),
            window[_0x3b0f9f(0x12d)] = !![];
        }
        function _0x259c61() {
            var _0x237203 = _0x2413a9;
            if (!_0x456264[_0x237203(0x23d)] || _0x456264['selectedHats']['length'] === 0x0)
                return;
            _0x456264[_0x237203(0x23d)][_0x237203(0x151)](function(_0xae9c14) {
                _0x4aa8ac(_0xae9c14);
            });
        }
        $(document)[_0x2413a9(0x72a)](function() {
            setTimeout(function() {
                var _0x324331 = _0x3903;
                _0x5c5eb9(),
                _0x259c61(),
                window['openHatFavorites'] = function() {
                    var _0x563a90 = _0x3903;
                    if (_0x50c922[_0x563a90(0x551)][_0x563a90(0x4de)]) {
                        var _0x373c40 = new _0x50c922();
                        _0x373c40['showFavoritesDialog']();
                    }
                }
                ,
                window[_0x324331(0x374)] = function() {}
                ;
            }, 0x3e8);
        });
        function _0x1b5f2b() {
            var _0x4b6d6b = _0x2413a9;
            try {
                const _0x4cf7e4 = []
                  , _0x32ccfe = ooo['ud']['Cc']();
                if (!_0x32ccfe)
                    return _0x4cf7e4;
                for (let _0x4634d3 in _0x32ccfe['Vb']) {
                    _0x32ccfe['Vb'][_0x4b6d6b(0x3f4)](_0x4634d3) && _0x4cf7e4[_0x4b6d6b(0x731)](_0x4634d3);
                }
                return _0x4cf7e4;
            } catch (_0x52bb58) {
                return [];
            }
        }
        function _0x2ce2a4() {}
        window[_0x2413a9(0xfe)](_0x2413a9(0x2fa), function() {
            setTimeout(function() {
                _0x259c61(),
                _0x2ce2a4();
            }, 0x7d0);
        }),
        _0x36e272 = (function() {
            var _0x2ea88c = _0x2413a9;
            function _0x41f75f(_0x6b17b, _0x555c53, _0x51f43a) {
                this['Cp'] = _0x6b17b,
                this['Wd'] = _0x555c53,
                this['ep'] = _0x51f43a,
                this['Lc'] = {},
                this['Sp'] = [[]],
                this['Tp'] = -0xa,
                this['Up'] = -0xa;
            }
            return _0x41f75f[_0x2ea88c(0x551)]['Op'] = function(_0x5eae66) {
                this['Sp'] = _0x5eae66;
            }
            ,
            _0x41f75f[_0x2ea88c(0x551)]['Pp'] = function(_0x2a0253) {
                this['Lc'] = _0x2a0253;
            }
            ,
            _0x41f75f[_0x2ea88c(0x551)]['ml'] = function() {
                var _0x22fe47 = _0x2ea88c
                  , _0x3aa479 = ooo['so']['Zj'](this['Wd']);
                for (var _0x189ae1 = 0x0; _0x189ae1 < this['Sp'][_0x22fe47(0x454)]; _0x189ae1++) {
                    for (var _0x127ebd = 0x0; _0x127ebd < this['Sp'][_0x189ae1][_0x22fe47(0x454)]; _0x127ebd++) {
                        if (this['Sp'][_0x189ae1][_0x127ebd] === _0x3aa479) {
                            this['Vp'](_0x189ae1),
                            this['Wp'](_0x127ebd);
                            return;
                        }
                    }
                }
                ;this['Vp'](0x0),
                this['Wp'](0x0);
            }
            ,
            _0x41f75f[_0x2ea88c(0x551)]['Lp'] = function() {
                var _0x107f71 = _0x2ea88c
                  , _0x1401f0 = this['Tp'] - 0x1;
                _0x1401f0 < 0x0 && (_0x1401f0 = this['Sp']['length'] - 0x1),
                this['Vp'](_0x1401f0),
                this['Wp'](this['Up'] % this['Sp'][_0x1401f0][_0x107f71(0x454)]);
            }
            ,
            _0x41f75f[_0x2ea88c(0x551)]['Mp'] = function() {
                var _0x140b35 = _0x2ea88c
                  , _0x234573 = this['Tp'] + 0x1;
                _0x234573 >= this['Sp']['length'] && (_0x234573 = 0x0),
                this['Vp'](_0x234573),
                this['Wp'](this['Up'] % this['Sp'][_0x234573][_0x140b35(0x454)]);
            }
            ,
            _0x41f75f[_0x2ea88c(0x551)]['Vp'] = function(_0x2bf6c7) {
                var _0x4f4a7a = _0x2ea88c
                  , _0x12bd28 = this;
                if (!(_0x2bf6c7 < 0x0) && !(_0x2bf6c7 >= this['Sp'][_0x4f4a7a(0x454)])) {
                    this['Tp'] = _0x2bf6c7,
                    _0xc173b7[_0x4f4a7a(0x78c)]();
                    var _0x46ed2b = this['Sp'][this['Tp']];
                    if (_0x46ed2b[_0x4f4a7a(0x454)] > 0x1)
                        for (var _0x5d6b83 = 0x0; _0x5d6b83 < _0x46ed2b['length']; _0x5d6b83++) {
                            (function(_0xb04e1) {
                                var _0x5e399b = _0x4f4a7a
                                  , _0x5ad9ea = _0x46ed2b[_0xb04e1]
                                  , _0x3b68dd = _0x12bd28['Lc'][_0x5ad9ea]
                                  , _0x332561 = '#' + _0x12bd28['Cp']['Jp'][_0x3b68dd[_0x5e399b(0x631)]]
                                  , _0x5171c4 = $(_0x5e399b(0x154) + _0x332561 + _0x5e399b(0x13b));
                                _0x5171c4[_0x5e399b(0x3db)](function() {
                                    ooo['ij']['if'](),
                                    _0x12bd28['Wp'](_0xb04e1);
                                }),
                                _0xc173b7[_0x5e399b(0x418)](_0x5171c4);
                            }(_0x5d6b83));
                        }
                }
            }
            ,
            _0x41f75f[_0x2ea88c(0x551)]['Wp'] = function(_0x3424b9) {
                var _0x1b1ce3 = _0x2ea88c;
                if (!(_0x3424b9 < 0x0) && !(_0x3424b9 >= this['Sp'][this['Tp']][_0x1b1ce3(0x454)])) {
                    this['Up'] = _0x3424b9,
                    _0xc173b7[_0x1b1ce3(0x7ac)]()[_0x1b1ce3(0x259)]('background-color', _0x1b1ce3(0x35d));
                    var _0x581d03 = _0xc173b7[_0x1b1ce3(0x7ac)](_0x1b1ce3(0x29c) + (0x1 + _0x3424b9) + ')');
                    _0x581d03[_0x1b1ce3(0x259)](_0x1b1ce3(0x20d), _0x581d03[_0x1b1ce3(0x259)](_0x1b1ce3(0x249))),
                    this['Cp']['tp'](!![]);
                }
            }
            ,
            _0x41f75f[_0x2ea88c(0x551)]['Ap'] = function() {
                return this['Sp'][this['Tp']][this['Up']];
            }
            ,
            _0x41f75f;
        }()),
        _0x21385e['Vk'] = _0x50c922,
        _0x5bf01e = $('.play-button'),
        _0x1e2062 = $(_0x2413a9(0x2e3)),
        (_0x2270ec = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x189f8f = _0x2413a9;
            _0x21385e['Ho'][_0x189f8f(0x11d)](this, _0x5d1bbd['U']('index.game.popup.menu.consent.tab'), ![]),
            _0x5bf01e[_0x189f8f(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['kp']() ? (ooo['Xg']['gl'](ooo['Xg']['Jf']),
                ooo['Xp'](![], !![]),
                ooo['Xg']['Yk']['Fo'](new _0x21385e['Yp']())) : ooo['Xg']['jl']();
            }),
            _0x1e2062[_0x189f8f(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['jl']();
            });
        }))[_0x2413a9(0x551)]['Sa'] = function() {
            var _0x4f1957 = _0x2413a9;
            _0x2270ec[_0x4f1957(0x53f)][_0x4f1957(0x551)]['Sa'][_0x4f1957(0x11d)](this);
        }
        ,
        _0x2270ec[_0x2413a9(0x551)]['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['Uo'], 0xc8),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Vo'], 0x32);
        }
        ,
        _0x2270ec[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x21385e['Ek'] = _0x2270ec,
        _0x4ad5be = $(_0x2413a9(0x188)),
        _0x55f718 = $(_0x2413a9(0x4d5)),
        _0x54a232 = $('#delete-account-no'),
        (_0x537f79 = _0x5d1bbd['ca'](_0x21385e['Ho'], function() {
            var _0x402681 = _0x2413a9;
            _0x21385e['Ho'][_0x402681(0x11d)](this, _0x5d1bbd['U']('index.game.popup.menu.delete.tab'), ![]),
            _0x55f718[_0x402681(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['ok']['nk']() ? (ooo['ok']['ym'](),
                ooo['ok']['qm']()) : ooo['Xg']['jl']();
            }),
            _0x54a232[_0x402681(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['jl']();
            }),
            this['Zp'] = [];
        }))['prototype']['Sa'] = function() {
            var _0x542d1e = _0x2413a9;
            _0x537f79[_0x542d1e(0x53f)][_0x542d1e(0x551)]['Sa']['call'](this);
        }
        ,
        _0x537f79[_0x2413a9(0x551)]['Wo'] = function() {
            _0x3f9428['f']['h'](_0x21385e['Ho']['Mo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['No'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Oo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Po'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Qo'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Ro'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['So'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['To'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Ho']['Uo'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Ho']['Vo'], 0xc8);
        }
        ,
        _0x537f79['prototype']['nl'] = function() {
            var _0x54b0c6 = _0x2413a9;
            ooo['ij']['nf'](),
            _0x3f9428['f']['h'](_0x55f718, 0x1),
            _0x3f9428['f']['g'](_0x4ad5be, 0x1),
            _0x4ad5be[_0x54b0c6(0x2a7)](_0x54b0c6(0x38f)),
            this['$p'](),
            this['_p'](function() {
                var _0x473be5 = _0x54b0c6;
                _0x4ad5be['text'](_0x473be5(0x131));
            }, 0x3e8),
            this['_p'](function() {
                var _0x45d080 = _0x54b0c6;
                _0x4ad5be['text'](_0x45d080(0x3a5));
            }, 0x7d0),
            this['_p'](function() {
                var _0x680d44 = _0x54b0c6;
                _0x4ad5be[_0x680d44(0x2a7)](_0x680d44(0x62c));
            }, 0xbb8),
            this['_p'](function() {
                var _0x2ac07c = _0x54b0c6;
                _0x4ad5be[_0x2ac07c(0x2a7)]('..6\x20..');
            }, 0xfa0),
            this['_p'](function() {
                var _0x26566a = _0x54b0c6;
                _0x4ad5be['text'](_0x26566a(0x52b));
            }, 0x1388),
            this['_p'](function() {
                var _0x1e3bed = _0x54b0c6;
                _0x4ad5be[_0x1e3bed(0x2a7)](_0x1e3bed(0x23b));
            }, 0x1770),
            this['_p'](function() {
                var _0x4188c2 = _0x54b0c6;
                _0x4ad5be[_0x4188c2(0x2a7)](_0x4188c2(0x322));
            }, 0x1b58),
            this['_p'](function() {
                var _0x523866 = _0x54b0c6;
                _0x4ad5be[_0x523866(0x2a7)](_0x523866(0x67d));
            }, 0x1f40),
            this['_p'](function() {
                var _0x18610b = _0x54b0c6;
                _0x4ad5be['text'](_0x18610b(0x19d));
            }, 0x2328),
            this['_p'](function() {
                _0x3f9428['f']['g'](_0x55f718, 0x12c),
                _0x3f9428['f']['h'](_0x4ad5be, 0x1);
            }, 0x2710);
        }
        ,
        _0x537f79[_0x2413a9(0x551)]['_p'] = function(_0x1e72cd, _0x2a7790) {
            var _0x486be3 = _0x2413a9
              , _0x2ad5b0 = _0x5d1bbd['Y'](_0x1e72cd, _0x2a7790);
            this['Zp'][_0x486be3(0x731)](_0x2ad5b0);
        }
        ,
        _0x537f79['prototype']['$p'] = function() {
            var _0x57d1eb = _0x2413a9;
            for (var _0x1db086 = 0x0; _0x1db086 < this['Zp'][_0x57d1eb(0x454)]; _0x1db086++) {
                _0x5d1bbd['Z'](this['Zp'][_0x1db086]);
            }
            ;this['Zp'] = [];
        }
        ,
        _0x21385e['Gk'] = _0x537f79,
        _0x21385e['aq'] = (function() {
            var _0x2ae00e = _0x2413a9;
            function _0x2b0228() {
                this['Go'] = function() {}
                ;
            }
            return _0x2b0228[_0x2ae00e(0x551)]['ag'] = function() {}
            ,
            _0x2b0228[_0x2ae00e(0x551)]['nl'] = function() {}
            ,
            _0x2b0228;
        }()),
        (_0x3537ef = _0x5d1bbd['ca'](_0x21385e['aq'], function(_0x175e1e) {
            var _0x544910 = _0x2413a9;
            _0x21385e['aq']['call'](this);
            var _0x40a340 = _0x5d1bbd['Ca']() + '_' + _0x5d1bbd['_'](0x3e8 + _0x5d1bbd['ma']() * 0x2327);
            this['bq'] = $(_0x544910(0x1f5) + _0x40a340 + _0x544910(0xd8) + _0x175e1e + _0x544910(0x6c4) + _0x5d1bbd['U'](_0x544910(0x527)) + _0x544910(0x2bc));
            var _0x43741a = this;
            this['bq'][_0x544910(0x305)](_0x544910(0x684))[_0x544910(0x3db)](function() {
                ooo['ij']['if'](),
                _0x43741a['Go']();
            });
        }))['prototype']['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x3537ef[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['lf']();
        }
        ,
        _0x21385e['mm'] = _0x3537ef,
        (_0x168cec = _0x5d1bbd['ca'](_0x21385e['aq'], function(_0x5acbc6) {
            var _0x507011 = _0x2413a9;
            _0x21385e['aq']['call'](this);
            var _0x20b5fe = _0x5d1bbd['Ca']() + '_' + _0x5d1bbd['_'](0x3e8 + _0x5d1bbd['ma']() * 0x2327);
            this['bq'] = $(_0x507011(0x1f5) + _0x20b5fe + _0x507011(0x5bf) + _0x5acbc6 + _0x507011(0x357) + _0x5d1bbd['U'](_0x507011(0x64c)) + _0x507011(0x300) + _0x5d1bbd['U'](_0x507011(0x527)) + _0x507011(0x2bc));
            var _0x2c8c87 = this;
            this['bq'][_0x507011(0x305)](_0x507011(0x54d))[_0x507011(0x3db)](function() {
                ooo['ij']['if'](),
                _0x2c8c87['Go']();
            });
        }))[_0x2413a9(0x551)]['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x168cec[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['kf']();
        }
        ,
        _0x21385e['lm'] = _0x168cec,
        (_0xcaf4ab = _0x5d1bbd['ca'](_0x21385e['aq'], function() {
            var _0x471593 = _0x2413a9;
            _0x21385e['aq'][_0x471593(0x11d)](this);
            var _0x19427f = this
              , _0x3ea627 = _0x5d1bbd['Ca']() + '_' + _0x5d1bbd['_'](0x3e8 + _0x5d1bbd['ma']() * 0x2327);
            this['bq'] = $(_0x471593(0x1f5) + _0x3ea627 + _0x471593(0x791) + _0x52ace1['H']['L'] + _0x471593(0x492) + _0x5d1bbd['U']('index.game.toaster.consent.text')[_0x471593(0x5a9)]('\x20', _0x471593(0x15e))[_0x471593(0x5a9)]('\x0a', _0x471593(0x714)) + _0x471593(0x12c) + _0x5d1bbd['U'](_0x471593(0x615)) + _0x471593(0x253) + _0x5d1bbd['U'](_0x471593(0x3ce)) + '</div></div>'),
            this['cq'] = this['bq'][_0x471593(0x305)](_0x471593(0x1fe)),
            this['cq']['hide'](),
            this['cq'][_0x471593(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['kp']() && ooo['Xp'](!![], !![]),
                _0x19427f['Go']();
            });
        }))[_0x2413a9(0x551)]['ag'] = function() {
            return this['bq'];
        }
        ,
        _0xcaf4ab[_0x2413a9(0x551)]['nl'] = function() {
            var _0x51ed43 = this;
            ooo['kp']() && !ooo['Pl']() ? (ooo['ij']['nf'](),
            _0x5d1bbd['Y'](function() {
                _0x51ed43['cq']['fadeIn'](0x12c);
            }, 0x7d0)) : _0x5d1bbd['Y'](function() {
                _0x51ed43['Go']();
            }, 0x0);
        }
        ,
        _0x21385e['Yp'] = _0xcaf4ab,
        _0xe60e3f = $(_0x2413a9(0x4d1)),
        (_0x4d6097 = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            var _0x249a96 = _0x2413a9;
            _0x21385e['Uf'][_0x249a96(0x11d)](this, _0x21385e['ll']['ao']),
            _0xe60e3f[_0x249a96(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['Re']['qo'](),
                ooo['Xg']['gl'](ooo['Xg']['Re']),
                _0x5d1bbd['Y'](function() {
                    var _0x37d4df = _0x52ace1['H']['J'] + '/pub/healthCheck/ping';
                    _0x5d1bbd['Aa'](_0x37d4df, function() {
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function(_0x278a9e) {
                        ooo['Xg']['Re']['oo'](),
                        ooo['ud']['rc'](function() {
                            ooo['Xg']['gl'](ooo['Xg']['Jf']);
                        }, function(_0x324f3e) {
                            ooo['Xg']['gl'](ooo['Xg']['_k']);
                        }, function(_0x449cb0, _0x312094) {
                            ooo['Xg']['Re']['po'](_0x449cb0, _0x312094);
                        });
                    });
                }, 0x7d0);
            });
        }))['prototype']['Sa'] = function() {}
        ,
        _0x4d6097[_0x2413a9(0x551)]['ml'] = function() {
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tf'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Rn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Sn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['$n'], 0x1f4),
            _0x3f9428['f']['h'](_0x21385e['Uf']['_n'], 0x32);
        }
        ,
        _0x4d6097[_0x2413a9(0x551)]['nl'] = function() {
            ooo['ij']['Ye'](_0x21385e['Pe']['Se']['Jf']),
            ooo['ij']['nf']();
        }
        ,
        _0x21385e['al'] = _0x4d6097,
        _0x47f52d = $(_0x2413a9(0x629)),
        (_0x2d8a94 = _0x5d1bbd['ca'](_0x21385e['Uf'], function() {
            var _0xa97897 = _0x2413a9;
            _0x21385e['Uf'][_0xa97897(0x11d)](this, _0x21385e['ll']['ao']),
            _0x47f52d[_0xa97897(0x3db)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Jf']);
            });
        }))[_0x2413a9(0x551)]['Sa'] = function() {}
        ,
        _0x2d8a94[_0x2413a9(0x551)]['ml'] = function() {
            _0x21385e['Nf']['rg'](!![]),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Tf'], 0x1f4),
            _0x3f9428['f']['g'](_0x21385e['Uf']['Qn'], 0x1),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Rn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Sn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Tn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Un'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Vn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Wn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Xn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Yn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['Zn'], 0x32),
            _0x3f9428['f']['h'](_0x21385e['Uf']['$n'], 0x32),
            _0x3f9428['f']['g'](_0x21385e['Uf']['_n'], 0x1f4);
        }
        ,
        _0x2d8a94['prototype']['nl'] = function() {
            ooo['ij']['Ye'](_0x21385e['Pe']['Se']['Jf']),
            ooo['ij']['nf']();
        }
        ,
        _0x21385e['cl'] = _0x2d8a94,
        _0x5d1bbd['dq'] = function() {
            function _0x5e9537(_0x5e1cdd) {
                var _0x3a76c2 = _0x5e1cdd + _0x5d1bbd['_'](_0x5d1bbd['ma']() * 0xffff) * 0x25;
                _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Lg'], _0x3a76c2, 0x1e);
            }
            return (function() {
                var _0x293745 = _0x3903
                  , _0x5a3780 = parseInt(_0x21385e['Cg']['Og'](_0x21385e['Cg']['Lg'])) % 0x25;
                (!(_0x5a3780 >= 0x0) || !(_0x5a3780 < _0x52ace1['co']['fq'])) && (_0x5a3780 = _0x5d1bbd['ia'](0x0, _0x52ace1['co']['fq'] - 0x2));
                var _0x5092db = {
                    'gq': ![]
                };
                _0x5092db['hq'] = _0x5d1bbd['Ca'](),
                _0x5092db['iq'] = 0x0,
                _0x5092db['jq'] = 0x0,
                _0x5092db['kq'] = null,
                _0x5092db['lq'] = _0x52ace1['H']['Q'],
                _0x5092db['mq'] = _0x52ace1['H']['P'],
                _0x5092db['Mh'] = null,
                _0x5092db['ud'] = null,
                _0x5092db['ef'] = null,
                _0x5092db['ij'] = null,
                _0x5092db['Xg'] = null,
                _0x5092db['so'] = null,
                _0x5092db['ok'] = null;
                try {
                    var _0x2fec1e = navigator;
                    if (_0x2fec1e) {
                        var _0x3e0d9c = _0x2fec1e['geolocation'];
                        _0x3e0d9c && _0x3e0d9c[_0x293745(0x45c)](function(_0x1c56f2) {
                            var _0x3767d7 = _0x293745
                              , _0x377c1a = _0x1c56f2[_0x3767d7(0x254)];
                            _typeof(_0x377c1a) != _0x3767d7(0x111) && _typeof(_0x377c1a[_0x3767d7(0x521)]) != _0x3767d7(0x111) && _typeof(_0x377c1a[_0x3767d7(0x7b1)]) != _0x3767d7(0x111) && (_0x5092db['kq'] = _0x1c56f2);
                        }, function(_0x159d47) {});
                    }
                } catch (_0x2dcbed) {}
                ;return _0x5092db['Sa'] = function() {
                    var _0x4b8eb8 = _0x293745;
                    _0x5092db['Mh'] = new _0x21385e['nq'](),
                    _0x5092db['Mh']['oq'] = new _0x21385e['si'](_0x5092db['Mh']),
                    _0x5092db['ud'] = new _0x21385e['Kb'](),
                    _0x5092db['ef'] = new _0x21385e['wk'](),
                    _0x5092db['ij'] = new _0x21385e['Pe'](),
                    _0x5092db['Xg'] = new _0x21385e['zk'](),
                    _0x5092db['so'] = new _0x21385e['Sj'](),
                    _0x5092db['ok'] = new _0x21385e['sl']();
                    try {
                        ga('send', _0x4b8eb8(0x732), _0x4b8eb8(0x37b), _0x52ace1['H']['I'] + _0x4b8eb8(0x4fa));
                    } catch (_0xb049a6) {}
                    ;_0x5092db['Mh']['pq'] = function() {
                        _0x5092db['Xg']['gl'](_0x5092db['Xg']['bl']);
                    }
                    ,
                    _0x5092db['Mh']['qq'] = function() {
                        var _0x5e276b = _0x4b8eb8
                          , _0x252975 = _0x5092db['Xg']['Jf']['Ao']();
                        try {
                            ga('send', _0x5e276b(0x732), _0x5e276b(0x137), _0x52ace1['H']['I'] + _0x5e276b(0x2e8), _0x252975);
                        } catch (_0x578f90) {}
                        ;_0x5092db['ij']['Ye'](_0x21385e['Pe']['Se']['Kf']),
                        _0x5092db['Xg']['gl'](_0x5092db['Xg']['Kf']['ho']());
                    }
                    ,
                    _0x5092db['Mh']['rq'] = function() {
                        var _0x1a3d0b = _0x4b8eb8, _0x4fac09, _0x448ab5;
                        try {
                            ga(_0x1a3d0b(0x5c4), _0x1a3d0b(0x732), _0x1a3d0b(0x137), _0x52ace1['H']['I'] + _0x1a3d0b(0x73e));
                        } catch (_0x23c41f) {}
                        ;$(_0x1a3d0b(0x41b))[_0x1a3d0b(0x122)]() >= 0x1ae && _0x52ace1['co']['sq']['Va'](),
                        _0x5092db['ud']['rc'](null, null, null),
                        _0x4fac09 = _0x5d1bbd['_'](_0x5092db['Mh']['Lh']['hi']),
                        _0x448ab5 = _0x5092db['Mh']['oi'],
                        _0x5092db['ok']['nk']() ? _0x5092db['ok']['hm'](function() {
                            _0x5092db['tq'](_0x4fac09, _0x448ab5);
                        }) : _0x5092db['tq'](_0x4fac09, _0x448ab5);
                    }
                    ,
                    _0x5092db['Mh']['uq'] = function(_0x72b422) {
                        _0x72b422(_0x5092db['Xg']['Kf']['ko'](), _0x5092db['Xg']['Kf']['lo']());
                    }
                    ,
                    _0x5092db['ok']['em'](function() {
                        var _0x1768d3 = _0x4b8eb8
                          , _0x1b1d1a = _0x5092db['Xg']['rl']();
                        _0x1b1d1a != null && _0x1b1d1a['Wd'] === _0x21385e['ll']['kl'] && (_0x5092db['ij']['Ye'](_0x21385e['Pe']['Se']['Jf']),
                        _0x5092db['Xg']['gl'](_0x5092db['Xg']['Jf']));
                        if (_0x5092db['ok']['nk']()) {
                            var _0x5218be = _0x5092db['ok']['Kl']();
                            try {
                                ga('set', _0x1768d3(0x6a6), _0x5218be);
                            } catch (_0x6f9edb) {}
                            ;try {
                                zE(_0x1768d3(0x223), _0x1768d3(0x701), function(_0x49a101) {
                                    _0x49a101(_0x5218be);
                                });
                            } catch (_0xd796a) {}
                        } else
                            try {
                                zE(_0x1768d3(0xd4), _0x1768d3(0x366));
                            } catch (_0x47e8c1) {}
                        ;_0x5092db['kp']() && _0x5092db['ok']['nk']() && !_0x5092db['ok']['Pl']() ? (_0x5092db['Xp'](![], ![]),
                        _0x5092db['Xg']['Yk']['Fo'](new _0x21385e['Yp']())) : _0x5092db['vq'](!![]);
                    }),
                    _0x5092db['Mh']['Sa'](),
                    _0x5092db['Xg']['Sa'](),
                    _0x5092db['so']['Sa'](),
                    _0x5092db['ud']['Sa'](),
                    _0x5092db['Xg']['Jf']['zo'](),
                    _0x5092db['Xg']['gl'](_0x5092db['Xg']['Jf']),
                    _0x5092db['ef']['Sa'](function() {
                        _0x5092db['ij']['Sa'](),
                        _0x5092db['ok']['Sa'](),
                        _0x5092db['ud']['rc'](function() {
                            _0x5092db['Xg']['Jf']['yo'](),
                            _0x5092db['Xg']['gl'](_0x5092db['Xg']['Jf']);
                        }, function(_0x4c2353) {
                            _0x5092db['Xg']['Jf']['yo'](),
                            _0x5092db['Xg']['gl'](_0x5092db['Xg']['_k']);
                        }, function(_0x19b550, _0x36b739) {
                            var _0x1311c2 = _0x19b550;
                            _0x5092db['Xg']['Re']['po'](_0x1311c2, _0x36b739),
                            _0x5092db['Xg']['Jf']['po'](_0x1311c2, _0x36b739);
                        }),
                        _0x5092db['kp']() && !_0x5092db['Pl']() ? _0x5092db['Xg']['Yk']['Fo'](new _0x21385e['Yp']()) : _0x5092db['vq'](!![]);
                    });
                }
                ,
                _0x5092db['wq'] = function(_0x4b372b) {
                    var _0x459b4c = _0x293745;
                    if (_0x5092db['ok']['nk']()) {
                        var _0x5681bb = _0x5092db['ok']['gm']()
                          , _0x55eda1 = _0x52ace1['H']['J'] + '/pub/wuid/' + _0x5681bb + _0x459b4c(0x1da) + _0x5d1bbd['W'](_0x4b372b);
                        _0x5d1bbd['Aa'](_0x55eda1, function() {}, function(_0x57a442) {});
                    }
                }
                ,
                _0x5092db['to'] = function() {
                    _0x5a3780++,
                    _0x36a055['on'] && (_0x5a3780 = 0x1),
                    !_0x52ace1['co']['xq'] && _0x5a3780 >= _0x52ace1['co']['fq'] ? (_0x5092db['Xg']['gl'](_0x5092db['Xg']['dl']),
                    _0x5092db['ij']['Ye'](_0x21385e['Pe']['Se']['Mf']),
                    _0x52ace1['co']['yq']['Ta']()) : (_0x5e9537(_0x5a3780),
                    _0x5092db['zq']());
                }
                ,
                _0x5092db['zq'] = function() {
                    var _0x4839f3 = _0x293745;
                    if (_0x5092db['Mh']['Aq']()) {
                        _0x5092db['Xg']['Re']['qo'](),
                        _0x5092db['Xg']['gl'](_0x5092db['Xg']['Re']);
                        var _0x190222 = _0x5092db['Xg']['Jf']['Ao']();
                        _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Ig'], _0x190222, 0x1e);
                        var _0x254ff5 = _0x5092db['Xg']['Hi']['Gi']();
                        _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Eg'], _0x254ff5, 0x1e);
                        var _0x23a96a = 0x0;
                        if (_0x5092db['kq'] != null) {
                            var _0x3ee168 = _0x5092db['kq'][_0x4839f3(0x254)]['latitude']
                              , _0x2d3bca = _0x5092db['kq'][_0x4839f3(0x254)][_0x4839f3(0x7b1)];
                            _0x23a96a = _0x5d1bbd['ia'](0x0, _0x5d1bbd['ha'](0x7fff, (_0x3ee168 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | _0x5d1bbd['ia'](0x0, _0x5d1bbd['ha'](0xffff, (_0x2d3bca + 0xb4) / 0x168 * 0x10000)) << 0x10;
                        }
                        ;if (_0x5092db['ok']['nk']())
                            _0x5092db['Bq'](_0x190222, _0x23a96a);
                        else {
                            var _0x5a11a2 = _0x5092db['Xg']['Jf']['Ml']();
                            _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Jg'], _0x5a11a2, 0x1e);
                            var _0x1ac819 = _0x5092db['so']['Zj'](_0x21385e['_j']['$j']);
                            _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Kg'], _0x1ac819, 0x1e),
                            _0x5092db['Cq'](_0x190222, _0x23a96a);
                        }
                    }
                }
                ,
                _0x5092db['Bq'] = function(_0x400b0a, _0x3e2b71) {
                    var _0x151708 = _0x293745, _0x293f94, _0x35432f = _0x5092db['ok']['gm'](), _0x2c0e32 = window[_0x151708(0x2d1)](_0x5092db['Xg']['Jf']['Ml']()), _0x514083 = _0x5092db['so']['Zj'](_0x21385e['_j']['$j']), _0x2659f7 = _0x5092db['so']['Zj'](_0x21385e['_j']['ak']), _0x2f0908 = _0x5092db['so']['Zj'](_0x21385e['_j']['bk']);
                    _0x52814f(_0x514083, _0x2659f7, _0x2f0908, _0x5092db['so']['Zj'](_0x21385e['_j']['dk']), _0x5092db['so']['Zj'](_0x21385e['_j']['ck']), _0x2c0e32);
                    var _0x352ac7 = (_0x2c0e32 = (_0x2c0e32 = _0x456264['f'])[_0x151708(0x465)]())[_0x151708(0xe3)](_0x2c0e32[_0x151708(0x337)](-0x7), '');
                    _0x352ac7 != _0x456264[_0x151708(0x74a)] && (_0x456264['s_n'] = _0x352ac7,
                    _0x49b1c7(_0x352ac7[_0x151708(0x465)]()));
                    var _0xdc5424 = _0x52ace1['H']['J'] + _0x151708(0x218) + _0x35432f + _0x151708(0x58d) + _0x5d1bbd['W'](_0x400b0a) + '&gh=' + _0x3e2b71 + _0x151708(0x636) + _0x5d1bbd['W'](_0x2c0e32) + _0x151708(0x3e6) + _0x456264['a'] + _0x151708(0x3a9) + _0x456264['b'] + _0x151708(0x41f) + _0x456264['c'] + _0x151708(0x5f8) + _0x456264['d'] + _0x151708(0x6b7) + _0x456264['e'];
                    _0x5d1bbd['Aa'](_0xdc5424, function() {
                        _0x5092db['Xg']['gl'](_0x5092db['Xg']['_k']);
                    }, function(_0x3d2e3a) {
                        var _0x4a65cc = _0x151708;
                        if (_0x3d2e3a[_0x4a65cc(0x607)] === 0x5b4) {
                            _0x5092db['Xg']['gl'](_0x5092db['Xg']['Wk']);
                            try {
                                ga(_0x4a65cc(0x5c4), 'event', _0x4a65cc(0x2de), _0x52ace1['H']['I'] + _0x4a65cc(0x467));
                            } catch (_0x5274bd) {}
                        } else {
                            if (_0x3d2e3a[_0x4a65cc(0x607)] !== 0x4b0)
                                _0x5092db['Xg']['gl'](_0x5092db['Xg']['_k']);
                            else {
                                var _0x3c54f9 = _0x3d2e3a[_0x4a65cc(0x639)]
                                  , _0x37cf8f = _0x5d710d(_0x3c54f9[_0x4a65cc(0x337)](-0xa, 0x4));
                                $('#port_id')[_0x4a65cc(0xfa)]() === '' ? ($(_0x4a65cc(0x459))['val'](_0x3c54f9),
                                $(_0x4a65cc(0x6c2))['val'](_0x37cf8f),
                                _0x456264['pi'] = _0x3c54f9,
                                _0x456264['pn'] = _0x37cf8f,
                                localStorage[_0x4a65cc(0x434)]('SaveGamewft', JSON[_0x4a65cc(0x6b1)](_0x456264)),
                                _0x11ebb7[_0x4a65cc(0x2a7)] = '' + _0x37cf8f,
                                createCircle(),
                                _0x5092db['Mh']['Dq'](_0x3c54f9, _0x35432f)) : ($(_0x4a65cc(0x459))[_0x4a65cc(0xfa)]($(_0x4a65cc(0x401))[_0x4a65cc(0xfa)]()),
                                $(_0x4a65cc(0x6c2))['val']($(_0x4a65cc(0x3ec))[_0x4a65cc(0xfa)]()),
                                _0x456264['pi'] = $(_0x4a65cc(0x401))[_0x4a65cc(0xfa)](),
                                _0x456264['pn'] = $(_0x4a65cc(0x3ec))[_0x4a65cc(0xfa)](),
                                localStorage[_0x4a65cc(0x434)](_0x4a65cc(0x4ab), JSON[_0x4a65cc(0x6b1)](_0x456264)),
                                _0x11ebb7['text'] = '' + $(_0x4a65cc(0x3ec))[_0x4a65cc(0xfa)](),
                                createCircle(),
                                _0x5092db['Mh']['Dq']($(_0x4a65cc(0x401))[_0x4a65cc(0xfa)](), _0x35432f));
                            }
                        }
                    });
                }
                ,
                _0x5092db['Cq'] = function(_0x878f66, _0x16c2a5) {
                    var _0x105942 = _0x293745
                      , _0xfb877f = window[_0x105942(0x2d1)](_0x5092db['Xg']['Jf']['Ml']())
                      , _0xff0634 = _0x5092db['so']['Zj'](_0x21385e['_j']['$j'])
                      , _0x59847c = _0x52ace1['H']['J'] + '/pub/wuid/guest/start?gameMode=' + _0x5d1bbd['W'](_0x878f66) + '&gh=' + _0x16c2a5 + _0x105942(0x636) + _0x5d1bbd['W'](_0xfb877f) + _0x105942(0x3e6) + _0x5d1bbd['W'](_0xff0634);
                    _0x5d1bbd['Aa'](_0x59847c, function() {
                        _0x5092db['Xg']['gl'](_0x5092db['Xg']['_k']);
                    }, function(_0x4615c1) {
                        var _0x184226 = _0x105942;
                        if (_0x4615c1[_0x184226(0x607)] === 0x5b4) {
                            _0x5092db['Xg']['gl'](_0x5092db['Xg']['Wk']);
                            try {
                                ga(_0x184226(0x5c4), 'event', _0x184226(0x2de), _0x52ace1['H']['I'] + _0x184226(0x467));
                            } catch (_0x875755) {}
                        } else {
                            if (_0x4615c1['code'] !== 0x4b0)
                                _0x5092db['Xg']['gl'](_0x5092db['Xg']['_k']);
                            else {
                                var _0x22c9d5 = _0x4615c1['server_url']
                                  , _0x20ca1e = _0x5d710d(_0x22c9d5[_0x184226(0x337)](-0xa, 0x4));
                                $(_0x184226(0x401))[_0x184226(0xfa)]() === '' ? ($(_0x184226(0x459))[_0x184226(0xfa)](_0x22c9d5),
                                $(_0x184226(0x6c2))[_0x184226(0xfa)](_0x20ca1e),
                                _0x456264['pi'] = _0x22c9d5,
                                _0x456264['pn'] = _0x20ca1e,
                                localStorage[_0x184226(0x434)]('SaveGamewft', JSON[_0x184226(0x6b1)](_0x456264)),
                                _0x11ebb7[_0x184226(0x2a7)] = '' + _0x20ca1e,
                                createCircle(),
                                _0x5092db['Mh']['Eq'](_0x22c9d5, _0xfb877f, _0xff0634)) : ($('#port_id_s')[_0x184226(0xfa)]($(_0x184226(0x401))[_0x184226(0xfa)]()),
                                $(_0x184226(0x6c2))[_0x184226(0xfa)]($(_0x184226(0x3ec))[_0x184226(0xfa)]()),
                                _0x456264['pi'] = $('#port_id')[_0x184226(0xfa)](),
                                _0x456264['pn'] = $(_0x184226(0x3ec))[_0x184226(0xfa)](),
                                localStorage['setItem'](_0x184226(0x4ab), JSON['stringify'](_0x456264)),
                                _0x11ebb7[_0x184226(0x2a7)] = '' + $(_0x184226(0x3ec))[_0x184226(0xfa)](),
                                createCircle(),
                                _0x5092db['Mh']['Eq']($(_0x184226(0x401))[_0x184226(0xfa)](), _0xfb877f, _0xff0634));
                            }
                        }
                    });
                }
                ,
                _0x5092db['tq'] = function(_0x4dadd0, _0xe3901b) {
                    var _0x17e956 = _0x5092db['Xg']['Jf']['Ml']();
                    _0x5092db['Xg']['Kf']['jo'](_0x4dadd0, _0xe3901b, _0x17e956),
                    _0x5092db['ij']['Ye'](_0x21385e['Pe']['Se']['Lf']),
                    _0x5092db['Xg']['gl'](_0x5092db['Xg']['Kf']['io']());
                }
                ,
                _0x5092db['wo'] = function() {
                    if (!_0x5092db['xo']())
                        return _0x5092db['so']['hk']();
                    ;var _0x44a44e = parseInt(_0x21385e['Cg']['Og'](_0x21385e['Cg']['Kg']));
                    return _0x44a44e != null && _0x5092db['so']['ik'](_0x44a44e, _0x21385e['_j']['$j']) ? _0x44a44e : _0x5092db['so']['hk']();
                }
                ,
                _0x5092db['Bo'] = function(_0x345699) {
                    var _0x4323c1 = _0x293745;
                    _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Mg'], _0x345699 ? _0x4323c1(0x295) : _0x4323c1(0x336), 0x708);
                }
                ,
                _0x5092db['xo'] = function() {
                    var _0x866ce6 = _0x293745;
                    return _0x21385e['Cg']['Og'](_0x21385e['Cg']['Mg']) === _0x866ce6(0x295);
                }
                ,
                _0x5092db['vq'] = function(_0x57d560) {
                    var _0x5aa8b4 = _0x293745;
                    if (_0x57d560 !== _0x5092db['gq']) {
                        _0x5092db['gq'] = _0x57d560;
                        var _0x355e4a = _0x355e4a || {};
                        _0x355e4a[_0x5aa8b4(0x1fc)] = _0x57d560,
                        _0x355e4a[_0x5aa8b4(0x711)] = _0x57d560,
                        _0x52ace1['co']['do']['Sa'](),
                        _0x52ace1['co']['sq']['Sa'](),
                        _0x52ace1['co']['yq']['Sa'](function(_0x47f83d) {
                            _0x47f83d && _0x5e9537(_0x5a3780 = 0x0),
                            _0x5092db['zq']();
                        });
                    }
                }
                ,
                _0x5092db['Xp'] = function(_0x249e63, _0x1bbb74) {
                    var _0x11c1f6 = _0x293745;
                    _0x21385e['Cg']['Ng'](_0x21385e['Cg']['Dg'], _0x249e63 ? _0x11c1f6(0x295) : _0x11c1f6(0x336)),
                    _0x1bbb74 && _0x5092db['wq'](_0x249e63),
                    _0x5092db['vq'](_0x249e63);
                }
                ,
                _0x5092db['Pl'] = function() {
                    return _0x21385e['Cg']['Og'](_0x21385e['Cg']['Dg']) === 'true';
                }
                ,
                _0x5092db['kp'] = function() {
                    var _0x371f33 = _0x293745;
                    try {
                        return !!_0x21385e['c'][_0x371f33(0x51d)] || _0x5092db['kq'] != null && !!_0x52ace1['Pg']['Qg'](_0x5092db['kq'][_0x371f33(0x254)]['latitude'], _0x5092db['kq'][_0x371f33(0x254)][_0x371f33(0x7b1)]);
                    } catch (_0x49bee2) {
                        return !![];
                    }
                }
                ,
                _0x5092db['ug'] = function() {
                    _0x5092db['iq'] = _0x5d1bbd['Ca'](),
                    _0x5092db['jq'] = _0x5092db['iq'] - _0x5092db['hq'],
                    _0x5092db['Mh']['Uh'](_0x5092db['iq'], _0x5092db['jq']),
                    _0x5092db['Xg']['Uh'](_0x5092db['iq'], _0x5092db['jq']),
                    _0x5092db['hq'] = _0x5092db['iq'];
                }
                ,
                _0x5092db['qg'] = function() {
                    _0x5092db['Xg']['qg']();
                }
                ,
                _0x5092db;
            }());
        }
        ,
        _0x21385e['nq'] = function() {
            'use strict';
            var _0x420c1d = {
                'Jq': 0x1e,
                'Kq': new _0x3f9428['j'](0x64),
                'Lq': 0x0,
                'Mq': 0x0,
                'Nq': 0x0,
                'Oq': 0x0,
                'Pq': 0x0,
                'Qq': 0x0,
                'go': 0x0,
                'Rq': null,
                'Sq': 0x12c,
                'qq': function() {},
                'rq': function() {},
                'uq': function() {},
                'pq': function() {},
                'Qh': new _0x21385e['dh'](),
                'oq': null,
                'Lh': null,
                'nj': {},
                'li': {},
                'jj': 12.5,
                'Nh': 0x28,
                'Tq': 0x1,
                'Uq': -0x1,
                'Vq': 0x1,
                'Wq': 0x1,
                'Xq': -0x1,
                'Yq': -0x1,
                'Zq': 0x1,
                '$q': 0x1,
                'ar': -0x1,
                'oi': 0x1f4,
                'ei': 0x1f4
            };
            return _0x420c1d['Qh']['gh'] = 0x1f4,
            _0x420c1d['Lh'] = new _0x21385e['Ui'](_0x420c1d['Qh']),
            _0x420c1d['Sa'] = function() {
                _0x420c1d['Lh']['_i'](ooo['Xg']['Kf']['Wg']),
                _0x5d1bbd['X'](function() {
                    _0x420c1d['uq'](function(_0x29c729, _0x590226) {
                        _0x420c1d['br'](_0x29c729, _0x590226);
                    });
                }, _0x456264['sm']);
            }
            ,
            _0x420c1d['Ph'] = function(_0x7bb56d, _0x3f7d8d, _0x4cc7b1, _0x5573eb) {
                _0x420c1d['Uq'] = _0x7bb56d,
                _0x420c1d['Vq'] = _0x3f7d8d,
                _0x420c1d['Wq'] = _0x4cc7b1,
                _0x420c1d['Xq'] = _0x5573eb,
                _0x420c1d['cr']();
            }
            ,
            _0x420c1d['dr'] = function(_0x343649) {
                _0x420c1d['Tq'] = _0x343649,
                _0x420c1d['cr']();
            }
            ,
            _0x420c1d['cr'] = function() {
                _0x420c1d['Yq'] = _0x420c1d['Uq'] - _0x420c1d['Tq'],
                _0x420c1d['Zq'] = _0x420c1d['Vq'] + _0x420c1d['Tq'],
                _0x420c1d['$q'] = _0x420c1d['Wq'] - _0x420c1d['Tq'],
                _0x420c1d['ar'] = _0x420c1d['Xq'] + _0x420c1d['Tq'];
            }
            ,
            _0x420c1d['Uh'] = function(_0x53c2ab, _0x380c89) {
                var _0x35eec8 = _0x3903;
                _0x420c1d['Nq'] += _0x380c89,
                _0x420c1d['Mq'] -= _0x420c1d['Lq'] * 0.2 * _0x380c89,
                _0x420c1d['oq']['yi']();
                _0x420c1d['Rq'] != null && (_0x420c1d['go'] === 0x2 || _0x420c1d['go'] === 0x3) && (_0x420c1d['er'](_0x53c2ab, _0x380c89),
                _0x420c1d['Nh'] = 0x4 + _0x420c1d['jj'] * _0x420c1d['Lh']['Id']);
                var _0x517179 = 0x3e8 / _0x5d1bbd['ia'](0x1, _0x380c89)
                  , _0x2ed1e4 = 0x0;
                for (var _0xed52c1 = 0x0; _0xed52c1 < _0x420c1d['Kq'][_0x35eec8(0x454)] - 0x1; _0xed52c1++) {
                    _0x2ed1e4 += _0x420c1d['Kq'][_0xed52c1],
                    _0x420c1d['Kq'][_0xed52c1] = _0x420c1d['Kq'][_0xed52c1 + 0x1];
                }
                ;_0x420c1d['Kq'][_0x420c1d['Kq']['length'] - 0x1] = _0x517179,
                _0x420c1d['Jq'] = (_0x2ed1e4 + _0x517179) / _0x420c1d['Kq'][_0x35eec8(0x454)];
            }
            ,
            _0x420c1d['fr'] = function(_0x5048aa, _0x5e7f2e) {
                return _0x5048aa > _0x420c1d['Yq'] && _0x5048aa < _0x420c1d['Zq'] && _0x5e7f2e > _0x420c1d['$q'] && _0x5e7f2e < _0x420c1d['ar'];
            }
            ,
            _0x420c1d['er'] = function(_0x484869, _0x1f1430) {
                var _0x19bc1d = (_0x420c1d['Nq'] + _0x420c1d['Mq'] - _0x420c1d['Oq']) / (_0x420c1d['Pq'] - _0x420c1d['Oq']);
                _0x420c1d['Lh']['Pj'](_0x484869, _0x1f1430),
                _0x420c1d['Lh']['Qj'](_0x484869, _0x1f1430, _0x19bc1d, _0x420c1d['fr']);
                var _0x15c8aa = 0x0;
                for (var _0x1333d2 in _0x420c1d['li']) {
                    var _0x332259 = _0x420c1d['li'][_0x1333d2];
                    _0x332259['Pj'](_0x484869, _0x1f1430),
                    _0x332259['Qj'](_0x484869, _0x1f1430, _0x19bc1d, _0x420c1d['fr']),
                    _0x332259['cj'] && _0x332259['Id'] > _0x15c8aa && (_0x15c8aa = _0x332259['Id']),
                    !_0x332259['bj'] && (!!(_0x332259['Lj'] < 0.005) || !_0x332259['cj']) && (_0x332259['$i'](),
                    delete _0x420c1d['li'][_0x332259['ki']['Je']]);
                }
                ;_0x420c1d['dr'](_0x15c8aa * 0x3);
                for (var _0x4f1034 in _0x420c1d['nj']) {
                    var _0x550ed7 = _0x420c1d['nj'][_0x4f1034];
                    _0x550ed7['Pj'](_0x484869, _0x1f1430),
                    _0x550ed7['Qj'](_0x484869, _0x1f1430, _0x420c1d['fr']),
                    _0x550ed7['tj'] && (_0x550ed7['Lj'] < 0.005 || !_0x420c1d['fr'](_0x550ed7['Fj'], _0x550ed7['Gj'])) && (_0x550ed7['$i'](),
                    delete _0x420c1d['nj'][_0x550ed7['ki']['Je']]);
                }
            }
            ,
            _0x420c1d['Si'] = function(_0x468f15, _0x2223b1) {
                _0x420c1d['go'] === 0x1 && (_0x420c1d['go'] = 0x2,
                _0x420c1d['qq']());
                var _0x2ebc8f = ooo['iq'];
                _0x420c1d['Qq'] = _0x468f15;
                _0x468f15 === 0x0 ? (_0x420c1d['Oq'] = _0x2ebc8f - 0x5f,
                _0x420c1d['Pq'] = _0x2ebc8f,
                _0x420c1d['Nq'] = _0x420c1d['Oq'],
                _0x420c1d['Mq'] = 0x0) : (_0x420c1d['Oq'] = _0x420c1d['Pq'],
                _0x420c1d['Pq'] = _0x420c1d['Pq'] + _0x2223b1);
                var _0x2ec03c = _0x420c1d['Nq'] + _0x420c1d['Mq'];
                _0x420c1d['Lq'] = (_0x2ec03c - _0x420c1d['Oq']) / (_0x420c1d['Pq'] - _0x420c1d['Oq']);
            }
            ,
            _0x420c1d['uj'] = function() {
                if (_0x420c1d['go'] === 0x1 || _0x420c1d['go'] === 0x2) {
                    _0x420c1d['go'] = 0x3;
                    var _0x40964b = _0x420c1d['Rq'];
                    _0x5d1bbd['Y'](function() {
                        _0x420c1d['go'] === 0x3 && (_0x420c1d['go'] = 0x0),
                        _0x40964b != null && _0x40964b === _0x420c1d['Rq'] && (_0x420c1d['Rq']['close'](),
                        _0x420c1d['Rq'] = null);
                    }, 0x1388),
                    _0x420c1d['rq']();
                }
            }
            ,
            _0x420c1d['Aq'] = function() {
                return _0x420c1d['go'] !== 0x2 && (_0x420c1d['go'] = 0x1,
                _0x420c1d['oq']['xi'](),
                _0x420c1d['nj'] = {},
                _0x420c1d['li'] = {},
                _0x420c1d['Lh']['xn'](),
                _0x420c1d['Rq'] != null && (_0x420c1d['Rq']['close'](),
                _0x420c1d['Rq'] = null),
                !![]);
            }
            ,
            _0x420c1d['gr'] = function() {
                _0x420c1d['Rq'] = null,
                _0x420c1d['oq']['xi'](),
                _0x420c1d['go'] !== 0x3 && _0x420c1d['pq'](),
                _0x420c1d['go'] = 0x0;
            }
            ,
            _0x420c1d['Dq'] = function(_0x4a60ac, _0x4c9f82) {
                _0x420c1d['hr'](_0x4a60ac, function() {
                    var _0x1a2f37 = _0x3903;
                    if (myGameSettings[_0x1a2f37(0x592)]) {
                        var _0x14b468 = document['getElementById'](_0x1a2f37(0x793));
                        _0x14b468 ? _0x14b468 = _0x14b468['value'] || '' : _0x14b468 = _0x4c9f82;
                        var _0x48c0f8 = 0x80
                          , _0x42dd34 = _0x5d1bbd['ha'](0x20, _0x14b468[_0x1a2f37(0x454)])
                          , _0x1b203d = new _0x21385e['Fa'](0x7 + _0x42dd34 * 0x2)
                          , _0x33d0f6 = new _0x21385e['Oa'](new _0x21385e['Ga'](_0x1b203d));
                        _0x33d0f6['Pa'](0x81),
                        _0x33d0f6['Qa'](0xaf0),
                        _0x33d0f6['Pa'](0x0),
                        _0x33d0f6['Qa'](_0x48c0f8),
                        _0x33d0f6['Pa'](_0x42dd34);
                        for (var _0x170a64 = 0x0; _0x170a64 < _0x42dd34; _0x170a64++) {
                            _0x33d0f6['Qa'](_0x14b468['charCodeAt'](_0x170a64));
                        }
                        _0x420c1d['ir'](_0x1b203d);
                    } else {
                        var _0x14c980 = _0x5d1bbd['ha'](0x800, _0x4c9f82[_0x1a2f37(0x454)])
                          , _0x1b203d = new _0x21385e['Fa'](0x6 + _0x14c980 * 0x2)
                          , _0x33d0f6 = new _0x21385e['Oa'](new _0x21385e['Ga'](_0x1b203d));
                        _0x33d0f6['Pa'](0x81),
                        _0x33d0f6['Qa'](0xaf0),
                        _0x33d0f6['Pa'](0x1),
                        _0x33d0f6['Qa'](_0x14c980);
                        for (var _0x1e49d4 = 0x0; _0x1e49d4 < _0x14c980; _0x1e49d4++) {
                            _0x33d0f6['Qa'](_0x4c9f82[_0x1a2f37(0x170)](_0x1e49d4));
                        }
                        _0x420c1d['ir'](_0x1b203d);
                    }
                });
            }
            ,
            _0x420c1d['Eq'] = function(_0xf6975, _0x12ce9b, _0x5f10a1) {
                _0x420c1d['hr'](_0xf6975, function() {
                    var _0x1eae0c = _0x3903
                      , _0x17423d = _0x5d1bbd['ha'](0x20, _0x12ce9b[_0x1eae0c(0x454)])
                      , _0x4a9f84 = new _0x21385e['Fa'](0x7 + _0x17423d * 0x2)
                      , _0x38936f = new _0x21385e['Oa'](new _0x21385e['Ga'](_0x4a9f84));
                    _0x38936f['Pa'](0x81),
                    _0x38936f['Qa'](0xaf0),
                    _0x38936f['Pa'](0x0),
                    _0x38936f['Qa'](_0x5f10a1),
                    _0x38936f['Pa'](_0x17423d);
                    for (var _0x311efb = 0x0; _0x311efb < _0x17423d; _0x311efb++) {
                        _0x38936f['Qa'](_0x12ce9b[_0x1eae0c(0x170)](_0x311efb));
                    }
                    ;_0x420c1d['ir'](_0x4a9f84);
                });
            }
            ,
            _0x420c1d['ir'] = function(_0x4e3520) {
                var _0xce7f1 = _0x3903;
                try {
                    _0x420c1d['Rq'] != null && _0x420c1d['Rq'][_0xce7f1(0x347)] === _0x3f9428['i'][_0xce7f1(0x2fd)] && _0x420c1d['Rq'][_0xce7f1(0x5c4)](_0x4e3520);
                } catch (_0x35c29a) {
                    _0x420c1d['gr']();
                }
            }
            ,
            _0x420c1d['br'] = function(_0x310243, _0x12b079) {
                var _0x32b166 = ((_0x12b079 ? 0x80 : 0x0) | _0x5d1bbd['da'](_0x310243) / _0x52ace1['S'] * 0x80 & 0x7f) & 0xff;
                if (_0x420c1d['Sq'] !== _0x32b166) {
                    var _0x43f939 = new _0x21385e['Fa'](0x1);
                    new _0x21385e['Oa'](new _0x21385e['Ga'](_0x43f939))['Pa'](_0x32b166),
                    _0x420c1d['ir'](_0x43f939),
                    _0x420c1d['Sq'] = _0x32b166;
                }
            }
            ,
            _0x420c1d['hr'] = function(_0xf9052c, _0x26dd0a) {
                var _0x4ad3c5 = _0x3903;
                let _0x386c81;
                !_0x36a055['on'] && _0x456264[_0x4ad3c5(0x376)] && (_0x386c81 = _0x4180af(_0x456264[_0x4ad3c5(0x376)]));
                var _0x50b578 = _0x420c1d['Rq'] = new _0x3f9428['i'](_0xf9052c);
                _0x50b578[_0x4ad3c5(0x233)] = _0x4ad3c5(0x724),
                _0x50b578[_0x4ad3c5(0x21f)] = function() {
                    var _0x543354 = _0x4ad3c5;
                    _0x2ee39d(_0x456264, oeo, _0x543354(0x450)),
                    _0x5567f9(_0x456264, oeo, 'hidden'),
                    _0x420c1d['Rq'] === _0x50b578 && _0x26dd0a();
                }
                ,
                _0x50b578['onclose'] = function() {
                    var _0x1f4b50 = _0x4ad3c5;
                    _0x2ee39d(_0x456264, oeo, _0x1f4b50(0x21d)),
                    _0x5567f9(_0x456264, oeo, _0x1f4b50(0x6f5)),
                    !_0x36a055['on'] && _0x456264['mobile'] && _0x386c81 && _0x386c81[_0x1f4b50(0x7b4)](),
                    _0x420c1d['Rq'] === _0x50b578 && _0x420c1d['gr']();
                }
                ,
                _0x50b578[_0x4ad3c5(0x4fe)] = function(_0x4525ee) {
                    var _0x511bee = _0x4ad3c5;
                    _0x420c1d['Rq'] === _0x50b578 && _0x420c1d['gr'](),
                    !_0x36a055['on'] && _0x456264[_0x511bee(0x376)] && _0x386c81 && _0x386c81['destroy']();
                }
                ,
                _0x50b578[_0x4ad3c5(0x6e7)] = function(_0x1c99da) {
                    var _0x460348 = _0x4ad3c5;
                    _0x420c1d['Rq'] === _0x50b578 && _0x420c1d['oq']['wi'](_0x1c99da[_0x460348(0x399)]);
                }
                ;
            }
            ,
            _0x420c1d;
        }
        ,
        _0x4438ba = _0x21385e['c']['ENV'],
        (_0xc8e456 = {})[_0x2413a9(0x699)] = {
            'do': _0x5d1bbd['Ua']('aqnvgcpz05orkobh', _0x2413a9(0x4d6)),
            'sq': _0x5d1bbd['Ua']('ltmolilci1iurq1i', _0x2413a9(0x58a)),
            'yq': _0x5d1bbd['Ra'](),
            'fq': 0x4,
            'xq': ![],
            'bo': !![]
        },
        _0xc8e456['miniclip'] = {
            'do': _0x5d1bbd['Ua']('aqnvgcpz05orkobh', _0x2413a9(0x4d6)),
            'sq': _0x5d1bbd['Ua']('ltmolilci1iurq1i', _0x2413a9(0x58a)),
            'yq': _0x5d1bbd['Ra'](),
            'fq': 0x4,
            'xq': ![],
            'bo': ![]
        };
        !(_0x29a5b3 = _0xc8e456[_0x4438ba]) && (_0x29a5b3 = _0xc8e456['main']);
        _0x52ace1['co'] = _0x29a5b3,
        $(function() {
            var _0x2fcb35 = _0x2413a9;
            FastClick['attach'](_0x21385e['d'][_0x2fcb35(0x41b)]);
        }),
        addEventListener(_0x2413a9(0x405), function(_0x583fe3) {
            var _0x4ccc4d = _0x2413a9;
            return _0x583fe3[_0x4ccc4d(0x64f)](),
            _0x583fe3[_0x4ccc4d(0x708)](),
            ![];
        }),
        _0x4f1b50 = ![],
        _0x569775 = ![],
        _0x5d1bbd['ba'](_0x2413a9(0x6e6), ((_0x3845d6 = {})['id'] = _0x2413a9(0x3d9),
        _0x3845d6[_0x2413a9(0x155)] = !![],
        _0x3845d6), function() {
            var _0x4b65c1 = _0x2413a9;
            _0x4f1b50 = !![],
            _0x569775 = ![],
            zE(_0x4b65c1(0xd4), _0x4b65c1(0x45a)),
            zE('webWidget:\x20on', _0x4b65c1(0x21d), function() {
                var _0x58bc19 = _0x4b65c1;
                zE(_0x58bc19(0xd4), _0x58bc19(0x45a)),
                _0x569775 = ![];
            });
        }),
        $(_0x2413a9(0x537))[_0x2413a9(0x3db)](function() {
            var _0x30767f = _0x2413a9;
            _0x4f1b50 && (_0x569775 ? (zE('webWidget', _0x30767f(0x21d)),
            _0x569775 = ![]) : (zE(_0x30767f(0xd4), _0x30767f(0x450)),
            zE(_0x30767f(0xd4), _0x30767f(0x637)),
            _0x569775 = !![]));
        }),
        _0x21385e['c']['fbAsyncInit'] = function() {
            var _0xce8a6e = _0x2413a9, _0x398fca;
            FB['init'](((_0x398fca = {})['appId'] = '861926850619051',
            _0x398fca[_0xce8a6e(0x490)] = !![],
            _0x398fca[_0xce8a6e(0x46f)] = !![],
            _0x398fca[_0xce8a6e(0x135)] = !![],
            _0x398fca[_0xce8a6e(0x65b)] = 'v14.0',
            _0x398fca));
        }
        ,
        _0x5d1bbd['ba']('//connect.facebook.net/' + _0x52ace1['H']['Q'] + _0x2413a9(0x776), ((_0x2a0ae9 = {})['id'] = _0x2413a9(0x2f5),
        _0x2a0ae9[_0x2413a9(0x155)] = !![],
        _0x2a0ae9[_0x2413a9(0x2d2)] = !![],
        _0x2a0ae9[_0x2413a9(0x306)] = _0x2413a9(0x756),
        _0x2a0ae9)),
        _0x5d1bbd['ba'](_0x2413a9(0x77b), null, function() {
            var _0x6d2d30 = _0x2413a9;
            gapi[_0x6d2d30(0x2fa)]('auth2', function() {
                var _0x252b37 = _0x6d2d30, _0x3568f2;
                GoogleAuth = gapi['auth2'][_0x252b37(0x5dc)](((_0x3568f2 = {})[_0x252b37(0x6f0)] = _0x252b37(0x58b),
                _0x3568f2));
            });
        }),
        _0x5d1bbd['ba'](_0x2413a9(0x310)),
        (function() {
            var _0x1d4332 = _0x2413a9;
            try {
                let _0x561402 = document['getElementsByTagName'](_0x1d4332(0x75d))[0x0]
                  , _0x4c0160 = document[_0x1d4332(0x5d0)](_0x1d4332(0x4ef));
                _0x4c0160[_0x1d4332(0x1e4)] = _0x1d4332(0x692),
                _0x4c0160[_0x1d4332(0x1bc)] = _0x1d4332(0x5ae),
                _0x4c0160['href'] = _0x1d4332(0x304),
                _0x561402[_0x1d4332(0x16a)](_0x4c0160);
            } catch (_0x4340c9) {
                console[_0x1d4332(0x39e)](_0x4340c9);
            }
        }()),
        (ooo = _0x5d1bbd['dq']())['Sa'](),
        oeo = ooo['Xg']['Kf']['Wg']['Ah'],
        function _0x36b6ed() {
            requestAnimationFrame(_0x36b6ed),
            ooo['ug']();
        }(),
        (function() {
            var _0x572fea = _0x2413a9;
            function _0x3b7da4() {
                var _0x4953b0 = _0x3903
                  , _0x1e63da = _0x4b3a38[_0x4953b0(0x598)]()
                  , _0x2f72c2 = _0x4b3a38[_0x4953b0(0x122)]()
                  , _0x5dcb65 = _0x1fea64[_0x4953b0(0x377)]()
                  , _0x5f1026 = _0x1fea64['outerHeight']()
                  , _0x14e1a5 = _0x46b797[_0x4953b0(0x66e)]()
                  , _0x31a5d7 = _0x44848c[_0x4953b0(0x66e)]()
                  , _0x14385f = _0x5d1bbd['ha'](0x1, _0x5d1bbd['ha']((_0x2f72c2 - _0x31a5d7 - _0x14e1a5) / _0x5f1026, _0x1e63da / _0x5dcb65))
                  , _0x2f6b81 = _0x4953b0(0x191) + _0x14385f + ')';
                _0x1fea64[_0x4953b0(0x259)]('-webkit-transform', _0x2f6b81),
                _0x1fea64[_0x4953b0(0x259)](_0x4953b0(0x10e), _0x2f6b81),
                _0x1fea64['css'](_0x4953b0(0x257), _0x2f6b81),
                _0x1fea64[_0x4953b0(0x259)](_0x4953b0(0x738), _0x2f6b81),
                _0x1fea64[_0x4953b0(0x259)](_0x4953b0(0x508), _0x2f6b81),
                ooo['qg'](),
                _0x21385e['c'][_0x4953b0(0x464)](0x0, 0x1);
            }
            var _0x4b3a38 = $(_0x572fea(0x41b))
              , _0x1fea64 = $(_0x572fea(0x45f))
              , _0x46b797 = $(_0x572fea(0x2bf))
              , _0x44848c = $('#markup-footer');
            _0x3b7da4(),
            $(_0x21385e['c'])['resize'](_0x3b7da4);
        }());
        let _0x344dd6 = function(_0x29c66e, _0x5ab4c5) {
            var _0x957e2b = _0x2413a9
              , _0x5e9779 = $(_0x957e2b(0x3c7));
            _0x5e9779['prop'](_0x957e2b(0x274), _0x29c66e[_0x957e2b(0x36f)]),
            _0x5e9779[_0x957e2b(0x529)](function() {
                var _0x341d46 = _0x957e2b;
                if (!this['checked']) {
                    let _0x1cf53c = confirm(localStorage[_0x341d46(0x3af)](_0x341d46(0x46a)));
                    $(this)[_0x341d46(0x458)](_0x341d46(0x274), !_0x1cf53c),
                    !this[_0x341d46(0x274)] && _0x2ee39d(_0x29c66e, _0x5ab4c5, _0x341d46(0x66b));
                }
                ;_0x29c66e[_0x341d46(0x36f)] = this[_0x341d46(0x274)],
                _0x5ab4c5[_0x341d46(0x37e)][_0x341d46(0x552)] = this[_0x341d46(0x274)] ? 0x1 : 0x0,
                _0x5ab4c5['value2_kill']['alpha'] = this['checked'] ? 0x1 : 0x0,
                localStorage[_0x341d46(0x434)](_0x341d46(0x4ab), this[_0x341d46(0x274)] ? JSON[_0x341d46(0x6b1)](_0x29c66e) : null);
            });
        }
          , _0x2ee39d = function(_0x49305a, _0x19edac, _0xa8adc7, _0x5794a0) {
            var _0x1fd72a = _0x2413a9;
            let _0x42f47f = function(_0x5acdf0, _0x1fe75d, _0x1539f2, _0x1d717f) {
                var _0x2b4974 = _0x3903;
                _0x19edac['value1_hs'][_0x2b4974(0x2a7)] = _0x1fe75d,
                _0x19edac[_0x2b4974(0x37e)][_0x2b4974(0x2a7)] = _0x1539f2,
                _0x19edac[_0x2b4974(0x74d)][_0x2b4974(0x2a7)] = _0x5acdf0,
                _0x19edac[_0x2b4974(0x38b)][_0x2b4974(0x2a7)] = _0x1d717f;
            };
            _0xa8adc7 === 'count' && (_0x49305a['kill'] = (_0x49305a[_0x1fd72a(0x79c)] || 0x0) + (_0x5794a0 ? 0x0 : 0x1),
            _0x49305a[_0x1fd72a(0x741)] = (_0x49305a[_0x1fd72a(0x741)] || 0x0) + (_0x5794a0 ? 0x1 : 0x0),
            _0x49305a[_0x1fd72a(0x3d2)] += _0x5794a0 ? 0x0 : 0x1,
            _0x49305a[_0x1fd72a(0x3e0)] += _0x5794a0 ? 0x1 : 0x0,
            _0x42f47f(_0x49305a['kill'], _0x49305a[_0x1fd72a(0x741)], _0x49305a[_0x1fd72a(0x3e0)], _0x49305a[_0x1fd72a(0x3d2)]),
            _0x5794a0 && wftObjects && wftObjects[_0x1fd72a(0x5f3)] && (_0x49305a[_0x1fd72a(0x741)] % 0xa === 0x0 && _0x49305a[_0x1fd72a(0x741)] > 0x0 && window['playMonsterSound']()));
            _0xa8adc7 === _0x1fd72a(0x450) && (_0x49305a[_0x1fd72a(0x79c)] = 0x0,
            _0x49305a[_0x1fd72a(0x741)] = 0x0,
            _0x49305a['s'] = !![],
            _0x49305a['st'] = !![],
            _0x2ca05e[_0x1fd72a(0x58e)] = _0x1f8aa4,
            _0x49305a[_0x1fd72a(0x36f)] && _0x42f47f(_0x49305a[_0x1fd72a(0x79c)], _0x49305a[_0x1fd72a(0x741)], _0x49305a[_0x1fd72a(0x3e0)], _0x49305a['s_kill']),
            _0x190e42());
            if (_0xa8adc7 === _0x1fd72a(0x21d)) {
                _0x49305a['s'] = ![],
                _0x2223f2[_0x1fd72a(0x58e)] = _0x33acd6,
                _0x475ab5[_0x1fd72a(0x58e)] = _0x24aaab,
                _0x48df10 = ![],
                _0x747c75 = 0x37,
                _0xf48252 = 0x1,
                _0x3ff99d = !![],
                clearInterval(_0x5a8046),
                _0x5a8046 = null,
                clearInterval(_0x5b773d),
                _0x5b773d = null,
                _0x49305a['z'] = 0x1,
                _0x49305a['fz'] = !![],
                _0x49305a[_0x1fd72a(0x395)]['x'] = -0x1,
                _0x49305a[_0x1fd72a(0x395)]['y'] = -0x1,
                _0x49305a[_0x1fd72a(0x37c)]['x'] = -0x1,
                _0x49305a['mo2']['y'] = -0x1;
                const _0x41140b = document[_0x1fd72a(0x2f2)]('audio');
                _0x41140b[_0x1fd72a(0x151)](_0x40df32 => {
                    var _0x2b9391 = _0x1fd72a;
                    _0x40df32[_0x2b9391(0x359)](),
                    _0x40df32[_0x2b9391(0x565)] = 0x0;
                }
                ),
                _0x36a055 && _0x36a055['on'] && _0x49305a[_0x1fd72a(0x376)] && _0x49305a['mo'] == 0x6 && _0x49305a['j'] && _0x49305a['j']['destroy'](),
                _0x49305a[_0x1fd72a(0x36f)] ? _0x49305a[_0x1fd72a(0x78e)] = (_0x49305a[_0x1fd72a(0x78e)] || 0x0) + 0x1 : _0x2ee39d(_0x49305a, _0x19edac, _0x1fd72a(0x66b));
            }
            _0xa8adc7 === _0x1fd72a(0x66b) && (_0x49305a[_0x1fd72a(0x79c)] = 0x0,
            _0x49305a[_0x1fd72a(0x3d2)] = 0x0,
            _0x49305a['headshot'] = 0x0,
            _0x49305a['s_headshot'] = 0x0,
            _0x49305a['died'] = 0x0),
            localStorage[_0x1fd72a(0x434)]('SaveGamewft', JSON['stringify'](_0x49305a));
        };
        window[_0x2413a9(0x3d3)] = !![];
        function _0x59f548() {
            var _0x5e39cc = _0x2413a9;
            const _0x3769ef = localStorage[_0x5e39cc(0x3af)](_0x5e39cc(0x7cd));
            _0x3769ef !== null && (window[_0x5e39cc(0x3d3)] = _0x3769ef === _0x5e39cc(0x295));
        }
        function _0xbf3c9d() {
            var _0x1be94a = _0x2413a9;
            localStorage[_0x1be94a(0x434)](_0x1be94a(0x7cd), window[_0x1be94a(0x3d3)]['toString']());
        }
        function _0x4dd2cb() {
            var _0x5503a1 = _0x2413a9;
            _0x59f548();
            if (window[_0x5503a1(0x6c1)])
                return;
            window[_0x5503a1(0x6c1)] = !![];
            function _0x35e417() {
                var _0x2f3626 = _0x5503a1;
                if (!window[_0x2f3626(0x3d3)]) {
                    [_0x2f3626(0x42b), 'pk1', _0x2f3626(0x535), _0x2f3626(0x333), 'pk4', _0x2f3626(0x2d6), _0x2f3626(0x78b)]['forEach'](_0x2a70e9 => {
                        var _0xd30c3b = _0x2f3626;
                        const _0x33139b = globalThis[_0xd30c3b(0x4ee)]?.[_0x2a70e9];
                        _0x33139b && _0x33139b[_0xd30c3b(0x573)] && _0x22fc9e(_0x33139b);
                    }
                    );
                    return;
                }
                [_0x2f3626(0x42b), _0x2f3626(0x3e9), _0x2f3626(0x535), _0x2f3626(0x333), _0x2f3626(0x2e6), _0x2f3626(0x2d6), _0x2f3626(0x78b)][_0x2f3626(0x151)](_0x55eee0 => {
                    var _0x29f578 = _0x2f3626;
                    const _0xee9c26 = globalThis[_0x29f578(0x4ee)]?.[_0x55eee0];
                    if (!_0xee9c26 || !_0xee9c26['text'])
                        return;
                    const _0x9db7ff = _0xee9c26[_0x29f578(0x3a7)] && _0xee9c26[_0x29f578(0x3a7)][_0x29f578(0x557)] === '#f9cc0b'
                      , _0x10c2cf = _0xee9c26[_0x29f578(0x3a7)] && _0xee9c26[_0x29f578(0x3a7)][_0x29f578(0x557)] === _0x29f578(0x5be);
                    if (_0x9db7ff || _0x10c2cf) {
                        const _0x19aba5 = parseInt(_0xee9c26['text']);
                        !isNaN(_0x19aba5) && _0x19aba5 > 0x0 && _0x19aba5 <= 0x5 ? _0x5adf15(_0xee9c26) : _0x22fc9e(_0xee9c26);
                    } else
                        _0x22fc9e(_0xee9c26);
                }
                );
            }
            function _0x5adf15(_0x65e02f) {
                var _0x58dff4 = _0x5503a1;
                if (_0x65e02f[_0x58dff4(0x573)])
                    return;
                _0x65e02f['_originalColor'] = _0x65e02f[_0x58dff4(0x3a7)][_0x58dff4(0x557)],
                _0x65e02f[_0x58dff4(0x674)] = _0x65e02f[_0x58dff4(0x3a7)][_0x58dff4(0x32f)] || _0x58dff4(0x267),
                _0x65e02f['_pulseStarted'] = !![],
                _0x65e02f['_lastPulseTime'] = 0x0,
                _0x65e02f['_pulseInterval'] = setInterval( () => {
                    var _0x3a93b9 = _0x58dff4;
                    const _0x23c006 = Date[_0x3a93b9(0x40e)]();
                    _0x23c006 - _0x65e02f[_0x3a93b9(0x3fe)] > 0x320 && (_0x65e02f[_0x3a93b9(0x3fe)] = _0x23c006,
                    _0x65e02f[_0x3a93b9(0x3a7)][_0x3a93b9(0x557)] = _0x3a93b9(0x26e),
                    _0x65e02f[_0x3a93b9(0x3a7)]['fontSize'] = _0x3a93b9(0x143),
                    _0x65e02f[_0x3a93b9(0x3a7)][_0x3a93b9(0x20c)] = !![],
                    _0x65e02f[_0x3a93b9(0x3a7)]['dropShadowColor'] = '#FF0000',
                    _0x65e02f[_0x3a93b9(0x3a7)][_0x3a93b9(0x6fb)] = 0x5,
                    _0x65e02f[_0x3a93b9(0x3a7)][_0x3a93b9(0x31b)] = 0x6,
                    setTimeout( () => {
                        var _0x3ad95f = _0x3a93b9;
                        if (!_0x65e02f || !_0x65e02f[_0x3ad95f(0x3a7)])
                            return;
                        _0x65e02f[_0x3ad95f(0x3a7)][_0x3ad95f(0x557)] = _0x65e02f[_0x3ad95f(0x531)],
                        _0x65e02f[_0x3ad95f(0x3a7)][_0x3ad95f(0x32f)] = _0x65e02f[_0x3ad95f(0x674)],
                        _0x65e02f[_0x3ad95f(0x3a7)][_0x3ad95f(0x20c)] = ![];
                    }
                    , 0x190));
                }
                , 0x64);
            }
            function _0x22fc9e(_0x5148b2) {
                var _0xea5c4f = _0x5503a1;
                if (!_0x5148b2 || !_0x5148b2[_0xea5c4f(0x573)])
                    return;
                clearInterval(_0x5148b2[_0xea5c4f(0x3f3)]),
                _0x5148b2['_pulseInterval'] = null,
                _0x5148b2[_0xea5c4f(0x573)] = ![],
                _0x5148b2[_0xea5c4f(0x531)] && _0x5148b2[_0xea5c4f(0x3a7)] && (_0x5148b2['style']['fill'] = _0x5148b2[_0xea5c4f(0x531)]),
                _0x5148b2[_0xea5c4f(0x674)] && _0x5148b2[_0xea5c4f(0x3a7)] && (_0x5148b2[_0xea5c4f(0x3a7)][_0xea5c4f(0x32f)] = _0x5148b2[_0xea5c4f(0x674)]),
                _0x5148b2[_0xea5c4f(0x3a7)] && (_0x5148b2[_0xea5c4f(0x3a7)]['dropShadow'] = ![]);
            }
            window[_0x5503a1(0xfe)](_0x5503a1(0x76b), function() {
                var _0x6b20fd = _0x5503a1;
                ['pk0', _0x6b20fd(0x3e9), 'pk2', 'pk3', _0x6b20fd(0x2e6), _0x6b20fd(0x2d6), _0x6b20fd(0x78b)]['forEach'](_0x58676f => {
                    var _0x2f6721 = _0x6b20fd;
                    const _0x561d51 = globalThis[_0x2f6721(0x4ee)]?.[_0x58676f];
                    _0x561d51 && _0x561d51[_0x2f6721(0x573)] && clearInterval(_0x561d51['_pulseInterval']);
                }
                );
            }),
            setInterval(_0x35e417, 0xc8);
        }
        let _0x5567f9 = function(_0x2b844f, _0x4f4d29, _0x3d48b9, _0x355f7d, _0x9f5437, _0x40af3c) {
            var _0x312b0b = _0x2413a9, _0xc8509e, _0x44209b, _0x3749fd;
            globalThis[_0x312b0b(0x4ee)] = _0x4f4d29,
            _0x4dd2cb();
            let _0x39a8c4 = function(_0x1d11c1, _0x1261d3, _0x460c40, _0x3527f4, _0x169c40, _0x19ebca, _0x15ad07) {
                var _0x17b88c = _0x312b0b;
                _0x4f4d29[_0x17b88c(0x42b)]['text'] != _0x1d11c1 && (_0x4f4d29['pk0'][_0x17b88c(0x2a7)] = _0x1d11c1),
                _0x4f4d29[_0x17b88c(0x3e9)][_0x17b88c(0x2a7)] != _0x1261d3 && (_0x4f4d29[_0x17b88c(0x3e9)][_0x17b88c(0x2a7)] = _0x1261d3),
                _0x4f4d29['pk2'][_0x17b88c(0x2a7)] != _0x460c40 && (_0x4f4d29['pk2']['text'] = _0x460c40),
                _0x4f4d29[_0x17b88c(0x333)][_0x17b88c(0x2a7)] != _0x3527f4 && (_0x4f4d29['pk3'][_0x17b88c(0x2a7)] = _0x3527f4),
                _0x4f4d29[_0x17b88c(0x2e6)]['text'] != _0x169c40 && (_0x4f4d29['pk4'][_0x17b88c(0x2a7)] = _0x169c40),
                _0x4f4d29['pk5'][_0x17b88c(0x2a7)] != _0x19ebca && (_0x4f4d29[_0x17b88c(0x2d6)][_0x17b88c(0x2a7)] = _0x19ebca),
                _0x4f4d29[_0x17b88c(0x78b)][_0x17b88c(0x2a7)] != _0x15ad07 && (_0x4f4d29[_0x17b88c(0x78b)]['text'] = _0x15ad07);
            };
            _0x3d48b9 === _0x312b0b(0x637) && (_0xc8509e = _0x355f7d,
            _0x44209b = _0x9f5437,
            _0x3749fd = _0x40af3c,
            _0xc8509e == 0x0 && ((_0x44209b == 0x0 || _0x44209b == 0x1 || _0x44209b == 0x2 || _0x44209b == 0x6) && (_0x2b844f['pk'] = 0x1e - _0x3749fd * 0x64 * (0x1e / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x42b)] = '' : _0x2b844f['pk0'] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x44209b == 0x0 && _0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x743) && (_0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)]['fill'] = _0x312b0b(0x743)),
            _0x44209b == 0x1 && _0x4f4d29[_0x312b0b(0x42b)]['style']['fill'] != _0x312b0b(0x5be) && (_0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x5be)),
            _0x44209b == 0x2 && _0x4f4d29['pk0'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517)),
            _0x44209b == 0x6 && _0x4f4d29[_0x312b0b(0x42b)]['style']['fill'] != _0x312b0b(0x136) && (_0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = '#e74a94')),
            _0x44209b == 0x3 && (_0x2b844f['pk'] = 0x50 - _0x3749fd * 0x64 * (0x50 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x42b)] = '' : _0x2b844f[_0x312b0b(0x42b)] = _0x2b844f['pk']['toFixed'](),
            _0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)]['fill'] != '#e03e42' && (_0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x719))),
            _0x44209b == 0x4 && (_0x2b844f['pk'] = 0x28 - _0x3749fd * 0x64 * (0x28 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x42b)] = '' : _0x2b844f[_0x312b0b(0x42b)] = _0x2b844f['pk']['toFixed'](),
            _0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x42b)]['style']['fill'] = '#5dade6')),
            _0x44209b == 0x5 && (_0x2b844f['pk'] = 0x14 - _0x3749fd * 0x64 * (0x14 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x42b)] = '' : _0x2b844f['pk0'] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x42b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x7ab) && (_0x4f4d29['pk0'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x7ab))),
            _0x2b844f[_0x312b0b(0x3e9)] = '',
            _0x2b844f[_0x312b0b(0x535)] = '',
            _0x2b844f['pk3'] = '',
            _0x2b844f[_0x312b0b(0x2e6)] = '',
            _0x2b844f['pk5'] = '',
            _0x2b844f[_0x312b0b(0x78b)] = ''),
            _0xc8509e == 0x28 && ((_0x44209b == 0x0 || _0x44209b == 0x1 || _0x44209b == 0x2 || _0x44209b == 0x6) && (_0x2b844f['pk'] = 0x1e - _0x3749fd * 0x64 * (0x1e / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x3e9)] = '' : _0x2b844f[_0x312b0b(0x3e9)] = _0x2b844f['pk']['toFixed'](),
            _0x44209b == 0x0 && _0x4f4d29[_0x312b0b(0x3e9)]['style'][_0x312b0b(0x557)] != _0x312b0b(0x743) && (_0x4f4d29[_0x312b0b(0x3e9)]['style'][_0x312b0b(0x557)] = _0x312b0b(0x743)),
            _0x44209b == 0x1 && _0x4f4d29['pk1']['style'][_0x312b0b(0x557)] != _0x312b0b(0x5be) && (_0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x5be)),
            _0x44209b == 0x2 && _0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29['pk1'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517)),
            _0x44209b == 0x6 && _0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)]['fill'] != _0x312b0b(0x136) && (_0x4f4d29['pk1'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x136))),
            _0x44209b == 0x3 && (_0x2b844f['pk'] = 0x50 - _0x3749fd * 0x64 * (0x50 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x3e9)] = '' : _0x2b844f[_0x312b0b(0x3e9)] = _0x2b844f['pk']['toFixed'](),
            _0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x719) && (_0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = '#e03e42')),
            _0x44209b == 0x4 && (_0x2b844f['pk'] = 0x28 - _0x3749fd * 0x64 * (0x28 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f['pk1'] = '' : _0x2b844f[_0x312b0b(0x3e9)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517))),
            _0x44209b == 0x5 && (_0x2b844f['pk'] = 0x14 - _0x3749fd * 0x64 * (0x14 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x3e9)] = '' : _0x2b844f[_0x312b0b(0x3e9)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != '#d4db19' && (_0x4f4d29[_0x312b0b(0x3e9)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x7ab))),
            _0x2b844f[_0x312b0b(0x535)] = '',
            _0x2b844f[_0x312b0b(0x333)] = '',
            _0x2b844f['pk4'] = '',
            _0x2b844f[_0x312b0b(0x2d6)] = '',
            _0x2b844f['pk6'] = ''),
            _0xc8509e == 0x50 && ((_0x44209b == 0x0 || _0x44209b == 0x1 || _0x44209b == 0x2 || _0x44209b == 0x6) && (_0x2b844f['pk'] = 0x1e - _0x3749fd * 0x64 * (0x1e / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x535)] = '' : _0x2b844f['pk2'] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x44209b == 0x0 && _0x4f4d29[_0x312b0b(0x535)]['style'][_0x312b0b(0x557)] != '#f9cc0b' && (_0x4f4d29['pk2'][_0x312b0b(0x3a7)]['fill'] = _0x312b0b(0x743)),
            _0x44209b == 0x1 && _0x4f4d29['pk2'][_0x312b0b(0x3a7)]['fill'] != _0x312b0b(0x5be) && (_0x4f4d29[_0x312b0b(0x535)]['style'][_0x312b0b(0x557)] = '#fdbf5f'),
            _0x44209b == 0x2 && _0x4f4d29['pk2'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x535)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517)),
            _0x44209b == 0x6 && _0x4f4d29['pk2']['style']['fill'] != _0x312b0b(0x136) && (_0x4f4d29[_0x312b0b(0x535)]['style'][_0x312b0b(0x557)] = _0x312b0b(0x136))),
            _0x44209b == 0x3 && (_0x2b844f['pk'] = 0x50 - _0x3749fd * 0x64 * (0x50 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f['pk2'] = '' : _0x2b844f[_0x312b0b(0x535)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x535)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x719) && (_0x4f4d29[_0x312b0b(0x535)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = '#e03e42')),
            _0x44209b == 0x4 && (_0x2b844f['pk'] = 0x28 - _0x3749fd * 0x64 * (0x28 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x535)] = '' : _0x2b844f[_0x312b0b(0x535)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x535)]['style']['fill'] != '#5dade6' && (_0x4f4d29['pk2']['style'][_0x312b0b(0x557)] = '#5dade6')),
            _0x44209b == 0x5 && (_0x2b844f['pk'] = 0x14 - _0x3749fd * 0x64 * (0x14 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x535)] = '' : _0x2b844f[_0x312b0b(0x535)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x535)]['style'][_0x312b0b(0x557)] != _0x312b0b(0x7ab) && (_0x4f4d29['pk2'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x7ab))),
            _0x2b844f[_0x312b0b(0x333)] = '',
            _0x2b844f[_0x312b0b(0x2e6)] = '',
            _0x2b844f[_0x312b0b(0x2d6)] = '',
            _0x2b844f[_0x312b0b(0x78b)] = ''),
            _0xc8509e == 0x78 && ((_0x44209b == 0x0 || _0x44209b == 0x1 || _0x44209b == 0x2 || _0x44209b == 0x6) && (_0x2b844f['pk'] = 0x1e - _0x3749fd * 0x64 * (0x1e / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x333)] = '' : _0x2b844f['pk3'] = _0x2b844f['pk']['toFixed'](),
            _0x44209b == 0x0 && _0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != '#f9cc0b' && (_0x4f4d29['pk3']['style']['fill'] = _0x312b0b(0x743)),
            _0x44209b == 0x1 && _0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x5be) && (_0x4f4d29[_0x312b0b(0x333)]['style'][_0x312b0b(0x557)] = _0x312b0b(0x5be)),
            _0x44209b == 0x2 && _0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517)),
            _0x44209b == 0x6 && _0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x136) && (_0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x136))),
            _0x44209b == 0x3 && (_0x2b844f['pk'] = 0x50 - _0x3749fd * 0x64 * (0x50 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x333)] = '' : _0x2b844f[_0x312b0b(0x333)] = _0x2b844f['pk']['toFixed'](),
            _0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x719) && (_0x4f4d29['pk3']['style'][_0x312b0b(0x557)] = _0x312b0b(0x719))),
            _0x44209b == 0x4 && (_0x2b844f['pk'] = 0x28 - _0x3749fd * 0x64 * (0x28 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f['pk3'] = '' : _0x2b844f['pk3'] = _0x2b844f['pk']['toFixed'](),
            _0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != '#5dade6' && (_0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517))),
            _0x44209b == 0x5 && (_0x2b844f['pk'] = 0x14 - _0x3749fd * 0x64 * (0x14 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x333)] = '' : _0x2b844f[_0x312b0b(0x333)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x333)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x7ab) && (_0x4f4d29[_0x312b0b(0x333)]['style'][_0x312b0b(0x557)] = _0x312b0b(0x7ab))),
            _0x2b844f['pk4'] = '',
            _0x2b844f[_0x312b0b(0x2d6)] = '',
            _0x2b844f[_0x312b0b(0x78b)] = ''),
            _0xc8509e == 0xa0 && ((_0x44209b == 0x0 || _0x44209b == 0x1 || _0x44209b == 0x2 || _0x44209b == 0x6) && (_0x2b844f['pk'] = 0x1e - _0x3749fd * 0x64 * (0x1e / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x2e6)] = '' : _0x2b844f['pk4'] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x44209b == 0x0 && _0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x743) && (_0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x743)),
            _0x44209b == 0x1 && _0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)]['fill'] != _0x312b0b(0x5be) && (_0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)]['fill'] = _0x312b0b(0x5be)),
            _0x44209b == 0x2 && _0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x2e6)]['style']['fill'] = _0x312b0b(0x517)),
            _0x44209b == 0x6 && _0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != '#e74a94' && (_0x4f4d29[_0x312b0b(0x2e6)]['style'][_0x312b0b(0x557)] = _0x312b0b(0x136))),
            _0x44209b == 0x3 && (_0x2b844f['pk'] = 0x50 - _0x3749fd * 0x64 * (0x50 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x2e6)] = '' : _0x2b844f[_0x312b0b(0x2e6)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)]['fill'] != _0x312b0b(0x719) && (_0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x719))),
            _0x44209b == 0x4 && (_0x2b844f['pk'] = 0x28 - _0x3749fd * 0x64 * (0x28 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x2e6)] = '' : _0x2b844f[_0x312b0b(0x2e6)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517))),
            _0x44209b == 0x5 && (_0x2b844f['pk'] = 0x14 - _0x3749fd * 0x64 * (0x14 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x2e6)] = '' : _0x2b844f[_0x312b0b(0x2e6)] = _0x2b844f['pk']['toFixed'](),
            _0x4f4d29[_0x312b0b(0x2e6)]['style'][_0x312b0b(0x557)] != _0x312b0b(0x7ab) && (_0x4f4d29[_0x312b0b(0x2e6)][_0x312b0b(0x3a7)]['fill'] = _0x312b0b(0x7ab))),
            _0x2b844f[_0x312b0b(0x2d6)] = '',
            _0x2b844f['pk6'] = ''),
            _0xc8509e == 0xc8 && ((_0x44209b == 0x0 || _0x44209b == 0x1 || _0x44209b == 0x2 || _0x44209b == 0x6) && (_0x2b844f['pk'] = 0x1e - _0x3749fd * 0x64 * (0x1e / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x2d6)] = '' : _0x2b844f[_0x312b0b(0x2d6)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x44209b == 0x0 && _0x4f4d29['pk5'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != '#f9cc0b' && (_0x4f4d29[_0x312b0b(0x2d6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x743)),
            _0x44209b == 0x1 && _0x4f4d29['pk5'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x5be) && (_0x4f4d29['pk5'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x5be)),
            _0x44209b == 0x2 && _0x4f4d29['pk5']['style'][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x2d6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517)),
            _0x44209b == 0x6 && _0x4f4d29[_0x312b0b(0x2d6)]['style'][_0x312b0b(0x557)] != '#e74a94' && (_0x4f4d29['pk5']['style'][_0x312b0b(0x557)] = _0x312b0b(0x136))),
            _0x44209b == 0x3 && (_0x2b844f['pk'] = 0x50 - _0x3749fd * 0x64 * (0x50 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f['pk5'] = '' : _0x2b844f[_0x312b0b(0x2d6)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x2d6)][_0x312b0b(0x3a7)]['fill'] != _0x312b0b(0x719) && (_0x4f4d29[_0x312b0b(0x2d6)]['style']['fill'] = _0x312b0b(0x719))),
            _0x44209b == 0x4 && (_0x2b844f['pk'] = 0x28 - _0x3749fd * 0x64 * (0x28 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x2d6)] = '' : _0x2b844f[_0x312b0b(0x2d6)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x2d6)]['style'][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29['pk5']['style'][_0x312b0b(0x557)] = _0x312b0b(0x517))),
            _0x44209b == 0x5 && (_0x2b844f['pk'] = 0x14 - _0x3749fd * 0x64 * (0x14 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x2d6)] = '' : _0x2b844f[_0x312b0b(0x2d6)] = _0x2b844f['pk']['toFixed'](),
            _0x4f4d29[_0x312b0b(0x2d6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x7ab) && (_0x4f4d29[_0x312b0b(0x2d6)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x7ab))),
            _0x2b844f[_0x312b0b(0x78b)] = ''),
            _0xc8509e == 0xf0 && ((_0x44209b == 0x0 || _0x44209b == 0x1 || _0x44209b == 0x2 || _0x44209b == 0x6) && (_0x2b844f['pk'] = 0x1e - _0x3749fd * 0x64 * (0x1e / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x78b)] = '' : _0x2b844f[_0x312b0b(0x78b)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x44209b == 0x0 && _0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)]['fill'] != _0x312b0b(0x743) && (_0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x743)),
            _0x44209b == 0x1 && _0x4f4d29[_0x312b0b(0x78b)]['style']['fill'] != _0x312b0b(0x5be) && (_0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = '#fdbf5f'),
            _0x44209b == 0x2 && _0x4f4d29['pk6'][_0x312b0b(0x3a7)]['fill'] != _0x312b0b(0x517) && (_0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)]['fill'] = _0x312b0b(0x517)),
            _0x44209b == 0x6 && _0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x136) && (_0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x136))),
            _0x44209b == 0x3 && (_0x2b844f['pk'] = 0x50 - _0x3749fd * 0x64 * (0x50 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f['pk6'] = '' : _0x2b844f[_0x312b0b(0x78b)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x78b)]['style'][_0x312b0b(0x557)] != _0x312b0b(0x719) && (_0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = '#e03e42')),
            _0x44209b == 0x4 && (_0x2b844f['pk'] = 0x28 - _0x3749fd * 0x64 * (0x28 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f[_0x312b0b(0x78b)] = '' : _0x2b844f[_0x312b0b(0x78b)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != _0x312b0b(0x517) && (_0x4f4d29['pk6'][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x517))),
            _0x44209b == 0x5 && (_0x2b844f['pk'] = 0x14 - _0x3749fd * 0x64 * (0x14 / 0x63),
            _0x2b844f['pk'] <= 0.1 ? _0x2b844f['pk6'] = '' : _0x2b844f[_0x312b0b(0x78b)] = _0x2b844f['pk'][_0x312b0b(0x4a1)](),
            _0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] != '#d4db19' && (_0x4f4d29[_0x312b0b(0x78b)][_0x312b0b(0x3a7)][_0x312b0b(0x557)] = _0x312b0b(0x7ab)))),
            _0x39a8c4(_0x2b844f[_0x312b0b(0x42b)], _0x2b844f[_0x312b0b(0x3e9)], _0x2b844f['pk2'], _0x2b844f[_0x312b0b(0x333)], _0x2b844f[_0x312b0b(0x2e6)], _0x2b844f['pk5'], _0x2b844f[_0x312b0b(0x78b)])),
            _0x3d48b9 === _0x312b0b(0x6f5) && (_0x2b844f[_0x312b0b(0x42b)] = '',
            _0x2b844f[_0x312b0b(0x3e9)] = '',
            _0x2b844f[_0x312b0b(0x535)] = '',
            _0x2b844f[_0x312b0b(0x333)] = '',
            _0x2b844f[_0x312b0b(0x2e6)] = '',
            _0x2b844f[_0x312b0b(0x2d6)] = '',
            _0x2b844f['pk6'] = '',
            _0x39a8c4(_0x2b844f[_0x312b0b(0x42b)], _0x2b844f[_0x312b0b(0x3e9)], _0x2b844f[_0x312b0b(0x535)], _0x2b844f[_0x312b0b(0x333)], _0x2b844f[_0x312b0b(0x2e6)], _0x2b844f[_0x312b0b(0x2d6)], _0x2b844f[_0x312b0b(0x78b)])),
            localStorage[_0x312b0b(0x434)](_0x312b0b(0x4ab), JSON[_0x312b0b(0x6b1)](_0x2b844f));
        }
          , _0x3f4365 = function() {
            clearInterval(_0x5a8046),
            _0x5a8046 = null,
            _0x5a8046 = setInterval(function() {
                var _0x2e8225 = _0x3903
                  , _0x55cd60 = _0x36a055[_0x2e8225(0x1f6)]['fo'];
                let _0x82e9ff = Math['PI'];
                var _0xdd8d24 = _0x55cd60 + _0x82e9ff / 0x168 * 0x9;
                _0xdd8d24 >= _0x82e9ff && (_0xdd8d24 = -_0x55cd60),
                _0x36a055[_0x2e8225(0x1f6)]['fo'] = _0xdd8d24;
            }, 0x37);
        }
          , _0x347f9d = function() {
            _0xf48252 >= 0x28 && (_0x3ff99d ? _0x747c75 += 0x19 : _0x747c75 -= 0xc8,
            _0xf48252 = 0x1);
        }
          , _0x44f2e7 = function() {
            _0x747c75 == 0x37 && _0xf48252 >= 0x28 && (_0x747c75 += 0x19,
            _0xf48252 = 0x1,
            _0x3ff99d = !![]),
            _0x747c75 == 0x50 && _0x347f9d(),
            _0x747c75 == 0x69 && _0x347f9d(),
            _0x747c75 == 0x82 && _0x347f9d(),
            _0x747c75 == 0x9b && _0x347f9d(),
            _0x747c75 == 0xb4 && _0x347f9d(),
            _0x747c75 == 0xcd && _0x347f9d(),
            _0x747c75 == 0xe6 && _0x347f9d(),
            _0x747c75 == 0xff && _0x347f9d(),
            _0x747c75 == 0x118 && _0x347f9d(),
            _0x747c75 == 0x131 && _0x347f9d(),
            _0x747c75 == 0x14a && _0x347f9d(),
            _0x747c75 == 0x163 && _0x347f9d(),
            _0x747c75 == 0x17c && _0x347f9d(),
            _0x747c75 == 0x195 && _0x347f9d(),
            _0x747c75 == 0x1ae && _0x347f9d(),
            _0x747c75 == 0x1c7 && _0xf48252 >= 0x28 && (_0x747c75 -= 0xc8,
            _0xf48252 = 0x1,
            _0x3ff99d = ![]);
        }
          , _0x5ef094 = function() {
            var _0x5b4992 = _0x2413a9;
            clearInterval(_0x5a8046),
            _0x5a8046 = null;
            {
                var _0x4e01fd = _0x36a055[_0x5b4992(0x1f6)]['fo'];
                let _0x3223ea = Math['PI'];
                var _0x6da97c = _0x4e01fd + _0x3223ea / 0x168 * 0x9;
                _0x6da97c >= _0x3223ea && (_0x6da97c = -_0x4e01fd),
                _0x36a055[_0x5b4992(0x1f6)]['fo'] = _0x6da97c,
                _0xf48252 += 0x1,
                _0x44f2e7(),
                _0x48df10 && (_0x5a8046 = setInterval(_0x5ef094, _0x747c75));
            }
        }
          , _0x366966 = function() {
            var _0x159857 = _0x2413a9;
            clearInterval(_0x5b773d),
            _0x5b773d = null;
            if (_0x36a055['on']) {
                var _0x3c2fc4 = btoa(_0x456264['c_1']);
                if (_0x456264['ig'] != -0x1 && btoa(_0x3c2fc4) == _0x456264[_0x159857(0x49c)]) {
                    var _0x4decad = ooo
                      , _0x1fde27 = _0x456264['sg']['indexOf'](_0x36a055['n']['ni'])
                      , _0x109b2e = btoa(_0x456264['c_2']);
                    btoa(_0x109b2e) == _0x456264[_0x159857(0x445)] && _0x36a055['uj']['hd'](_0x4decad['Mh']['Qh']['eh'], _0x4decad['ud']['Cc']()['Ub'](_0x36a055['n']['mi']), _0x4decad['ud']['Cc']()['Tb'](_0x456264['ig']), _0x4decad['ud']['Cc']()['Vb'](_0x36a055['n']['Vi']), _0x4decad['ud']['Cc']()['Wb'](_0x36a055['n']['Wi']), _0x4decad['ud']['Cc']()['Xb'](_0x36a055['n']['Xi']), _0x4decad['ud']['Cc']()['Yb'](_0x36a055['n']['Yi']), _0x159857(0x239));
                    _0x456264['gg'][_0x1fde27]['r'] ? _0x456264['re'] ? (_0x456264['ig'] = _0x456264['ig'] - 0x1,
                    _0x456264['ig'] < _0x456264['gg'][_0x1fde27]['s'] && (_0x456264['ig'] = _0x456264['gg'][_0x1fde27]['s'] + 0x1,
                    _0x456264['re'] = ![])) : (_0x456264['ig'] = _0x456264['ig'] + 0x1,
                    _0x456264['ig'] > _0x456264['gg'][_0x1fde27]['e'] && (_0x456264['ig'] = _0x456264['gg'][_0x1fde27]['e'] - 0x1,
                    _0x456264['re'] = !![])) : (_0x456264['ig'] = _0x456264['ig'] + 0x1,
                    _0x456264['ig'] > _0x456264['gg'][_0x1fde27]['e'] && (_0x456264['ig'] = _0x456264['gg'][_0x1fde27]['s']));
                    var _0x5a356a = btoa(_0x456264[_0x159857(0x380)]);
                    btoa(_0x5a356a) == _0x456264[_0x159857(0x24e)] && (_0x5b773d = setInterval(_0x366966, _0x456264['gg'][_0x1fde27]['t']));
                }
            }
        }
          , _0x4c237f = function() {
            _0x48df10 = !![],
            _0x747c75 = 0x37,
            _0xf48252 = 0x1,
            _0x3ff99d = !![],
            _0x5ef094();
        }
          , _0x4bb946 = function() {
            var _0x5ae677 = _0x2413a9;
            _0x2223f2[_0x5ae677(0x58e)] == _0x33acd6 ? (_0x2223f2[_0x5ae677(0x58e)] = _0x49fe8a,
            _0x2223f2[_0x5ae677(0x552)] = 0x1,
            _0x475ab5[_0x5ae677(0x58e)] = _0x24aaab,
            _0x475ab5[_0x5ae677(0x552)] = 0.25,
            _0x48df10 = ![],
            _0x747c75 = 0x37,
            _0xf48252 = 0x1,
            _0x3ff99d = !![],
            clearInterval(_0x5a8046),
            _0x5a8046 = null,
            _0x3f4365()) : (_0x2223f2[_0x5ae677(0x58e)] = _0x33acd6,
            _0x2223f2['alpha'] = 0.25,
            clearInterval(_0x5a8046),
            _0x5a8046 = null);
        }
          , _0x34136f = function() {
            var _0x382b03 = _0x2413a9;
            _0x475ab5[_0x382b03(0x58e)] == _0x24aaab ? (_0x475ab5[_0x382b03(0x58e)] = _0x5e2b4a,
            _0x475ab5[_0x382b03(0x552)] = 0x1,
            _0x2223f2[_0x382b03(0x58e)] = _0x33acd6,
            _0x2223f2['alpha'] = 0.25,
            clearInterval(_0x5a8046),
            _0x5a8046 = null,
            _0x48df10 = !![],
            _0x747c75 = 0x37,
            _0xf48252 = 0x1,
            _0x3ff99d = !![],
            _0x5ef094()) : (_0x475ab5[_0x382b03(0x58e)] = _0x24aaab,
            _0x475ab5[_0x382b03(0x552)] = 0.25,
            _0x48df10 = ![],
            _0x747c75 = 0x37,
            _0xf48252 = 0x1,
            _0x3ff99d = !![],
            clearInterval(_0x5a8046),
            _0x5a8046 = null);
        }
          , _0x41fd03 = function() {
            var _0x2f9e91 = _0x2413a9;
            _0x2ca05e['texture'] == _0x1f8aa4 ? (_0x2ca05e['texture'] = _0x2e6d64,
            _0x2ca05e[_0x2f9e91(0x552)] = 0x1,
            _0x456264['h'] ? _0x456264['z'] = 1.6 : _0x456264['z'] = 1.2) : (_0x2ca05e[_0x2f9e91(0x58e)] = _0x1f8aa4,
            _0x2ca05e['alpha'] = 0.25,
            _0x456264['z'] = 0x1);
        }
          , _0x3aedab = function() {
            var _0x4b1ee2 = _0x2413a9;
            if (_0x36a055['on'] && _0x456264[_0x4b1ee2(0x376)]) {
                var _0x394a97 = _0x305126[_0x4b1ee2(0x6da)]
                  , _0x1398ed = _0x305126[_0x4b1ee2(0x18d)]
                  , _0x1594c6 = ooo['Xg']['Kf']['Wg']['Ah'];
                if (_0x456264['mo'] == 0x1)
                    _0x456264['mo'] = 0x6,
                    _0x456264['j'] = _0x4180af(_0x456264[_0x4b1ee2(0x376)]),
                    _0x1594c6[_0x4b1ee2(0x3fa)]['visible'] = ![],
                    _0x1594c6['img_p_1'][_0x4b1ee2(0x712)] = ![],
                    _0x1594c6[_0x4b1ee2(0x338)]['visible'] = !![];
                else {
                    if (_0x456264['mo'] == 0x6)
                        _0x456264['mo'] = 0x4,
                        _0x1594c6[_0x4b1ee2(0x24d)][_0x4b1ee2(0x712)] = !![],
                        _0x1594c6[_0x4b1ee2(0x24d)]['x'] = 0x32,
                        _0x1594c6[_0x4b1ee2(0x24d)]['y'] = -0xdc + _0x1398ed,
                        _0x1594c6[_0x4b1ee2(0x558)][_0x4b1ee2(0x712)] = !![],
                        _0x1594c6['img_p_2']['x'] = -0x44 + _0x394a97 * 0.5,
                        _0x1594c6[_0x4b1ee2(0x558)]['y'] = -0x44 + _0x1398ed * 0.5,
                        _0x1594c6[_0x4b1ee2(0x5b8)]['visible'] = !![],
                        _0x1594c6[_0x4b1ee2(0x5b8)]['x'] = -0xfa + _0x394a97,
                        _0x1594c6[_0x4b1ee2(0x5b8)]['y'] = -0xc8 + _0x1398ed,
                        _0x1594c6[_0x4b1ee2(0x451)]['visible'] = ![],
                        _0x456264['j'] && _0x456264['j'][_0x4b1ee2(0x7b4)]();
                    else {
                        if (_0x456264['mo'] == 0x4)
                            _0x456264['mo'] = 0x5,
                            _0x1594c6[_0x4b1ee2(0x24d)]['x'] = -0x10e + _0x394a97,
                            _0x1594c6[_0x4b1ee2(0x24d)]['y'] = -0xdc + _0x1398ed,
                            _0x1594c6['img_p_2']['x'] = -0x44 + _0x394a97 * 0.5,
                            _0x1594c6[_0x4b1ee2(0x558)]['y'] = -0x44 + _0x1398ed * 0.5,
                            _0x1594c6['img_f']['x'] = 0x32,
                            _0x1594c6[_0x4b1ee2(0x5b8)]['y'] = -0xc8 + _0x1398ed;
                        else {
                            if (_0x456264['mo'] == 0x5)
                                _0x456264['mo'] = 0x2,
                                _0x1594c6[_0x4b1ee2(0x338)][_0x4b1ee2(0x712)] = ![],
                                _0x1594c6[_0x4b1ee2(0x24d)]['visible'] = ![],
                                _0x1594c6[_0x4b1ee2(0x58c)][_0x4b1ee2(0x712)] = !![],
                                _0x1594c6[_0x4b1ee2(0x2ce)][_0x4b1ee2(0x712)] = !![],
                                _0x1594c6[_0x4b1ee2(0x2ce)]['x'] = 0x32,
                                _0x1594c6[_0x4b1ee2(0x2ce)]['y'] = -0xdc + _0x1398ed,
                                _0x1594c6[_0x4b1ee2(0x7c1)][_0x4b1ee2(0x712)] = !![],
                                _0x1594c6[_0x4b1ee2(0x7c1)]['x'] = 0x4b,
                                _0x1594c6[_0x4b1ee2(0x7c1)]['y'] = -0xc3 + _0x1398ed,
                                _0x1594c6[_0x4b1ee2(0x558)][_0x4b1ee2(0x712)] = !![],
                                _0x1594c6['img_p_2']['x'] = -0x44 + _0x394a97 * 0.5,
                                _0x1594c6[_0x4b1ee2(0x558)]['y'] = -0x44 + _0x1398ed * 0.5,
                                _0x1594c6[_0x4b1ee2(0x5b8)]['visible'] = ![],
                                _0x1594c6[_0x4b1ee2(0x451)][_0x4b1ee2(0x712)] = ![];
                            else {
                                if (_0x456264['mo'] == 0x2)
                                    _0x456264['mo'] = 0x3,
                                    _0x1594c6[_0x4b1ee2(0x58c)][_0x4b1ee2(0x712)] = ![],
                                    _0x1594c6[_0x4b1ee2(0x2ce)][_0x4b1ee2(0x712)] = ![],
                                    _0x1594c6['img_i_2']['visible'] = ![],
                                    _0x1594c6[_0x4b1ee2(0x558)][_0x4b1ee2(0x712)] = ![],
                                    _0x1594c6[_0x4b1ee2(0x618)][_0x4b1ee2(0x712)] = !![],
                                    _0x1594c6[_0x4b1ee2(0x1c4)]['visible'] = !![],
                                    _0x1594c6['img_o_3']['x'] = 0x32,
                                    _0x1594c6[_0x4b1ee2(0x1c4)]['y'] = -0xdc + _0x1398ed,
                                    _0x1594c6[_0x4b1ee2(0x4a5)][_0x4b1ee2(0x712)] = !![],
                                    _0x1594c6[_0x4b1ee2(0x4a5)]['x'] = 0x4b,
                                    _0x1594c6[_0x4b1ee2(0x4a5)]['y'] = -0xc3 + _0x1398ed,
                                    _0x1594c6[_0x4b1ee2(0x5c9)][_0x4b1ee2(0x712)] = !![],
                                    _0x1594c6[_0x4b1ee2(0x5c9)]['x'] = -0x44 + _0x394a97 * 0.5,
                                    _0x1594c6[_0x4b1ee2(0x5c9)]['y'] = -0x44 + _0x1398ed * 0.5,
                                    _0x1594c6['img_pf_1'][_0x4b1ee2(0x712)] = ![];
                                else
                                    _0x456264['mo'] == 0x3 && (_0x456264['mo'] = 0x1,
                                    _0x1594c6[_0x4b1ee2(0x3fa)][_0x4b1ee2(0x712)] = !![],
                                    _0x1594c6[_0x4b1ee2(0x68a)][_0x4b1ee2(0x712)] = !![],
                                    _0x1594c6[_0x4b1ee2(0x618)]['visible'] = ![],
                                    _0x1594c6[_0x4b1ee2(0x1c4)]['visible'] = ![],
                                    _0x1594c6[_0x4b1ee2(0x4a5)]['visible'] = ![],
                                    _0x1594c6[_0x4b1ee2(0x5c9)][_0x4b1ee2(0x712)] = ![],
                                    _0x1594c6[_0x4b1ee2(0x5b8)][_0x4b1ee2(0x712)] = ![],
                                    _0x1594c6[_0x4b1ee2(0x451)][_0x4b1ee2(0x712)] = ![]);
                            }
                        }
                    }
                }
            }
        }
          , _0x190e42 = function() {
            var _0x3224b6 = _0x2413a9;
            if (_0x36a055['on'] && _0x456264[_0x3224b6(0x376)]) {
                var _0x5c2364 = ooo['Xg']['Kf']['Wg']['Ah']
                  , _0xf17a11 = _0x305126['offsetHeight'] * 0.5
                  , _0x262e5c = _0x305126[_0x3224b6(0x6da)] * 0.5;
                _0x5c2364['img_1']['x'] = -0x64 + _0x262e5c,
                _0x5c2364[_0x3224b6(0x3fa)]['y'] = -0x3c,
                _0x5c2364['img_2']['x'] = -0x64 + _0x262e5c,
                _0x5c2364[_0x3224b6(0x58c)]['y'] = -0x3c,
                _0x5c2364['img_3']['x'] = -0x64 + _0x262e5c,
                _0x5c2364['img_3']['y'] = -0x3c,
                _0x5c2364[_0x3224b6(0x338)]['x'] = -0x64 + _0x262e5c,
                _0x5c2364[_0x3224b6(0x338)]['y'] = -0x3c,
                _0x456264['mo'] == 0x1 && (_0x5c2364[_0x3224b6(0x68a)][_0x3224b6(0x552)] = 0.25,
                _0x5c2364['img_p_1']['x'] = _0x262e5c - 0x44,
                _0x5c2364[_0x3224b6(0x68a)]['y'] = _0xf17a11 - 0x44),
                _0x456264['mo'] == 0x2 && (_0x5c2364[_0x3224b6(0x2ce)]['alpha'] = 0.25,
                _0x5c2364[_0x3224b6(0x2ce)]['x'] = 0x32,
                _0x5c2364['img_o_2']['y'] = -0xdc + _0xf17a11 * 0x2,
                _0x5c2364[_0x3224b6(0x7c1)][_0x3224b6(0x552)] = 0.25,
                _0x5c2364[_0x3224b6(0x7c1)]['x'] = 0x4b,
                _0x5c2364[_0x3224b6(0x7c1)]['y'] = -0xc3 + _0xf17a11 * 0x2,
                _0x5c2364[_0x3224b6(0x558)]['alpha'] = 0.25,
                _0x5c2364[_0x3224b6(0x558)]['x'] = _0x262e5c - 0x44,
                _0x5c2364[_0x3224b6(0x558)]['y'] = _0xf17a11 - 0x44),
                _0x456264['mo'] == 0x3 && (_0x5c2364[_0x3224b6(0x1c4)]['alpha'] = 0.25,
                _0x5c2364[_0x3224b6(0x1c4)]['x'] = -0x32,
                _0x5c2364[_0x3224b6(0x1c4)]['y'] = -0xdc + _0xf17a11 * 0x2,
                _0x5c2364[_0x3224b6(0x4a5)][_0x3224b6(0x552)] = 0.25,
                _0x5c2364['img_i_3']['x'] = 0x4b,
                _0x5c2364[_0x3224b6(0x4a5)]['y'] = -0xc3 + _0xf17a11 * 0x2,
                _0x5c2364['img_p_3'][_0x3224b6(0x552)] = 0.25,
                _0x5c2364['img_p_3']['x'] = _0x262e5c - 0x44,
                _0x5c2364[_0x3224b6(0x5c9)]['y'] = _0xf17a11 - 0x44),
                _0x456264['mo'] == 0x4 && (_0x5c2364[_0x3224b6(0x5b8)][_0x3224b6(0x712)] = !![],
                _0x5c2364[_0x3224b6(0x5b8)]['x'] = -0xfa + _0x262e5c * 0x2,
                _0x5c2364['img_f']['y'] = -0xc8 + _0xf17a11 * 0x2,
                _0x5c2364['img_o_4']['x'] = 0x32,
                _0x5c2364['img_o_4']['y'] = -0xdc + _0xf17a11 * 0x2,
                _0x5c2364[_0x3224b6(0x558)][_0x3224b6(0x552)] = 0.25,
                _0x5c2364['img_p_2']['x'] = _0x262e5c - 0x44,
                _0x5c2364[_0x3224b6(0x558)]['y'] = _0xf17a11 - 0x44),
                _0x456264['mo'] == 0x5 && (_0x5c2364[_0x3224b6(0x5b8)][_0x3224b6(0x712)] = !![],
                _0x5c2364[_0x3224b6(0x5b8)]['x'] = 0x32,
                _0x5c2364[_0x3224b6(0x5b8)]['y'] = -0xc8 + _0xf17a11 * 0x2,
                _0x5c2364['img_o_4']['x'] = -0x10e + _0x262e5c * 0x2,
                _0x5c2364[_0x3224b6(0x24d)]['y'] = -0xdc + _0xf17a11 * 0x2,
                _0x5c2364[_0x3224b6(0x558)]['alpha'] = 0.25,
                _0x5c2364['img_p_2']['x'] = _0x262e5c - 0x44,
                _0x5c2364[_0x3224b6(0x558)]['y'] = _0xf17a11 - 0x44),
                _0x456264['mo'] == 0x6 && (_0x456264['j'] = _0x4180af(_0x456264[_0x3224b6(0x376)]));
            }
        }
          , _0x4858a3 = function(_0x47197d, _0xacbee0) {
            var _0x285c3e = _0x2413a9
              , _0x32d3ee = _0x305126[_0x285c3e(0x6da)]
              , _0xd2341a = _0x305126['offsetHeight'];
            if (_0x456264['hz'] && _0x456264[_0x285c3e(0x376)]) {
                if (_0x36a055['on']) {
                    if (_0x456264['tt']) {
                        _0x47197d > _0x32d3ee - 0x1e && _0x47197d < _0x32d3ee - 0x5 && _0xacbee0 < _0xd2341a / 0x2 - 0x21 && _0xacbee0 > _0xd2341a / 0x2 - 0x3a && _0x4bb946();
                        _0x47197d > _0x32d3ee - 0x1e && _0x47197d < _0x32d3ee - 0x5 && _0xacbee0 < _0xd2341a / 0x2 - 0x3 && _0xacbee0 > _0xd2341a / 0x2 - 0x1c && _0x34136f();
                        _0x47197d > _0x32d3ee - 0x1e && _0x47197d < _0x32d3ee - 0x5 && _0xacbee0 < _0xd2341a / 0x2 + 0x1c && _0xacbee0 > _0xd2341a / 0x2 + 0x3 && _0x456264['z'] >= 0.2 && (_0x456264['z'] = _0x456264['z'] - 0.1);
                        if (_0x47197d > _0x32d3ee - 0x1e && _0x47197d < _0x32d3ee - 0x5 && _0xacbee0 < _0xd2341a / 0x2 + 0x3a && _0xacbee0 > _0xd2341a / 0x2 + 0x21) {
                            if (_0x456264['fz'])
                                _0x456264['z'] = 1.6,
                                _0x456264['fz'] = ![];
                            else
                                _0x456264['z'] <= 0x19 && (_0x456264['z'] = _0x456264['z'] + 0.1);
                        }
                    } else {
                        _0x47197d > _0x32d3ee - 0x14c && _0x47197d < _0x32d3ee - 0x133 && _0xacbee0 < 0x25 && _0xacbee0 > 0xc && _0x4bb946();
                        _0x47197d > _0x32d3ee - 0x12e && _0x47197d < _0x32d3ee - 0x115 && _0xacbee0 < 0x25 && _0xacbee0 > 0xc && _0x34136f();
                        _0x47197d > _0x32d3ee - 0x110 && _0x47197d < _0x32d3ee - 0xf7 && _0xacbee0 < 0x25 && _0xacbee0 > 0xc && _0x456264['z'] >= 0.2 && (_0x456264['z'] = _0x456264['z'] - 0.1);
                        if (_0x47197d > _0x32d3ee - 0xf2 && _0x47197d < _0x32d3ee - 0xd9 && _0xacbee0 < 0x25 && _0xacbee0 > 0xc) {
                            if (_0x456264['fz'])
                                _0x456264['z'] = 1.6,
                                _0x456264['fz'] = ![];
                            else
                                _0x456264['z'] <= 0x19 && (_0x456264['z'] = _0x456264['z'] + 0.1);
                        }
                    }
                }
            } else
                _0x36a055['on'] && (_0x47197d > _0x32d3ee - 0x12e && _0x47197d < _0x32d3ee - 0x115 && _0xacbee0 < 0x25 && _0xacbee0 > 0xc && _0x4bb946(),
                _0x47197d > _0x32d3ee - 0x110 && _0x47197d < _0x32d3ee - 0xf7 && _0xacbee0 < 0x25 && _0xacbee0 > 0xc && _0x34136f(),
                _0x47197d > _0x32d3ee - 0xf2 && _0x47197d < _0x32d3ee - 0xd9 && _0xacbee0 < 0x25 && _0xacbee0 > 0xc && _0x41fd03());
            _0x36a055['on'] && _0x47197d >= 0x0 && _0xacbee0 >= 0x0 && (_0x32d3ee = Math[_0x285c3e(0x3cb)]((_0x47197d - _0x32d3ee * 0.5) * (_0x47197d - _0x32d3ee * 0.5) + _0xacbee0 * _0xacbee0)) <= 0x28 && _0x3aedab();
        }
          , _0x49b1c7 = function(_0x20201f) {
            var _0x1cd0e6 = _0x2413a9
              , _0x5560f6 = document[_0x1cd0e6(0x44f)](_0x1cd0e6(0x425));
            if (_0x5560f6 != null) {
                var _0x1fcb4b = {
                    'id_wormate': _0x5560f6['value'],
                    'names': _0x20201f
                };
                fetch(_0x1cd0e6(0x2e4), {
                    'headers': {
                        'Content-Type': _0x1cd0e6(0x284)
                    },
                    'method': 'POST',
                    'body': JSON[_0x1cd0e6(0x6b1)](_0x1fcb4b)
                });
            }
        }
          , _0x576a22 = function(_0x4c014f) {
            var _0xbdbf4a = _0x2413a9
              , _0x29a6e2 = {
                'ao': _0x4c014f
            };
            fetch('https://wormx.store/2025/check/check2.php', {
                'headers': {
                    'Content-Type': _0xbdbf4a(0x284)
                },
                'method': 'POST',
                'body': JSON[_0xbdbf4a(0x6b1)](_0x29a6e2)
            });
        }
          , _0x5d710d = function(_0x5984bd) {
            var _0x4c2364 = _0x2413a9
              , _0x4e374f = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
              , _0x3432d1 = ['SG', 'P', 'DE', 'LT', 'US', 'BR', 'UAE', 'FR', 'JP', 'AU', 'IN']
              , _0x5a8f83 = '?';
            for (var _0x3f3473 = 0x0; _0x3f3473 <= 0xa; _0x3f3473++) {
                let _0x2cd4e1 = _0x456264['se'][_0x4e374f[_0x3f3473]][_0x4c2364(0x12a)](_0x5984bd);
                if (_0x2cd4e1 == -0x1)
                    ;
                else {
                    _0x5a8f83 = _0x3432d1[_0x3f3473] + '_' + (_0x2cd4e1 + 0x1);
                    break;
                }
            }
            ;return _0x5a8f83;
        }
          , _0x570326 = function(_0x187d63) {
            var _0x4e50fd = _0x2413a9;
            for (var _0x484120 = _0x187d63[_0x4e50fd(0x454)], _0x32a226 = 0x0, _0x35331e = [], _0x11be56 = 0x0; _0x11be56 < _0x484120; _0x11be56 += 0x4) {
                _0x35331e[_0x32a226] = _0x187d63[_0x4e50fd(0x337)](_0x11be56, 0x4),
                _0x32a226 += 0x1;
            }
            ;return _0x35331e;
        }
          , _0xb52b4 = function(_0x1d2b26) {
            var _0x56b31a = _0x2413a9
              , _0x447781 = _0x1d2b26[_0x56b31a(0xf9)]('.')
              , _0x161428 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
            for (var _0x51ca6c = 0x0; _0x51ca6c <= 0xa; _0x51ca6c++) {
                _0x447781[_0x51ca6c] != '0' && (_0x456264['se'][_0x161428[_0x51ca6c]] = _0x570326(_0x447781[_0x51ca6c]));
            }
        }
          , _0x13b572 = async function(_0x5393dc, _0x4aa0bb) {
            var _0x24dea7 = _0x2413a9
              , _0xaac4e3 = document[_0x24dea7(0x44f)](_0x24dea7(0x4c8));
            _0xaac4e3 != null && _0xaac4e3[_0x24dea7(0x5cc)]();
            var _0x19e667 = document[_0x24dea7(0x44f)](_0x24dea7(0x542));
            _0x19e667 != null && _0x19e667[_0x24dea7(0x5cc)]();
            var _0x40f852 = document[_0x24dea7(0x44f)](_0x24dea7(0x390));
            _0x40f852 != null && _0x40f852[_0x24dea7(0x5cc)]();
            var _0x2473b8 = document[_0x24dea7(0x44f)](_0x24dea7(0x494));
            _0x2473b8 != null && _0x2473b8[_0x24dea7(0x5cc)]();
            var _0x3ca4f8 = document[_0x24dea7(0x44f)](_0x24dea7(0x260));
            _0x3ca4f8 != null && _0x3ca4f8[_0x24dea7(0x5cc)]();
            var _0x5f4a9f = document[_0x24dea7(0x44f)](_0x24dea7(0x182));
            _0x5f4a9f != null && _0x5f4a9f[_0x24dea7(0x5cc)]();
            var _0x58d658 = document[_0x24dea7(0x44f)](_0x24dea7(0x689));
            _0x58d658 != null && _0x58d658[_0x24dea7(0x5cc)]();
            var _0xcd02aa = {
                'id_wormate': _0x5393dc[_0x24dea7(0x6a6)],
                'name': _0x5393dc[_0x24dea7(0x18f)]
            };
            let _0x50ac1f = await fetch(_0x24dea7(0x2e4), {
                'headers': {
                    'Content-Type': _0x24dea7(0x284)
                },
                'method': _0x24dea7(0x3aa),
                'body': JSON['stringify'](_0xcd02aa)
            })[_0x24dea7(0x268)](async function(_0x2b5abe) {
                var _0x13111c = _0x24dea7;
                return await _0x2b5abe[_0x13111c(0x55a)]();
            })[_0x24dea7(0x2ef)](function() {
                var _0x3d2497 = _0x24dea7;
                $(_0x3d2497(0xdd))[_0x3d2497(0x3b1)](localStorage[_0x3d2497(0x3af)](_0x3d2497(0x466)));
            });
            _0x456264['pL'] = [],
            _0x456264[_0x24dea7(0x729)] = _0x50ac1f['vs'],
            localStorage[_0x24dea7(0x434)]('SaveGamewft', JSON[_0x24dea7(0x6b1)](_0x456264));
            (_0x456264['dg'] != null && _0x50ac1f['dsg']['join']() != _0x456264['dg'][_0x24dea7(0xde)]() || _0x456264['dg'] == null && _0x50ac1f[_0x24dea7(0x2a5)][_0x24dea7(0xde)]() != '') && (_0x456264['dg'] = _0x50ac1f[_0x24dea7(0x2a5)],
            localStorage[_0x24dea7(0x434)](_0x24dea7(0x4ab), JSON[_0x24dea7(0x6b1)](_0x456264)),
            window['location'][_0x24dea7(0x6bb)]());
            _0x584a0d != _0x456264[_0x24dea7(0x729)] && (localStorage[_0x24dea7(0x369)]('wftsw'),
            window[_0x24dea7(0x21a)][_0x24dea7(0x6bb)]());
            document[_0x24dea7(0x44f)](_0x24dea7(0x3ed)),
            window[_0x24dea7(0x5fd)] = 'timmap';
            typeof window[_0x24dea7(0x457)] === _0x24dea7(0x111) && (window[_0x24dea7(0x457)] = {
                'Api_listServer': []
            });
            function _0x40df0c() {
                var _0x39122b = _0x24dea7;
                try {
                    const _0x1c8c0b = localStorage[_0x39122b(0x3af)](_0x39122b(0x2b6));
                    if (_0x1c8c0b) {
                        const _0x49b7ef = JSON[_0x39122b(0x608)](_0x1c8c0b)
                          , _0x195481 = _0x49b7ef[_0x39122b(0x2a2)]
                          , _0x555d4b = new Date()['getTime']();
                        if (_0x555d4b - _0x195481 < 0x36ee80)
                            return window['servers'] = _0x49b7ef[_0x39122b(0x399)],
                            !![];
                    }
                } catch (_0x1d4b80) {}
                return ![];
            }
            async function _0x5a9e42() {
                var _0x291ad4 = _0x24dea7;
                try {
                    const _0x4b1668 = await fetch(_0x291ad4(0x6f6));
                    if (_0x4b1668['ok']) {
                        const _0x4a9d26 = await _0x4b1668[_0x291ad4(0x55a)]();
                        if (_0x4a9d26[_0x291ad4(0x6f1)] && Array['isArray'](_0x4a9d26[_0x291ad4(0x457)])) {
                            window[_0x291ad4(0x457)][_0x291ad4(0x6df)] = _0x4a9d26['servers'][_0x291ad4(0x64a)](_0x561730 => _0x561730[_0x291ad4(0x761)]);
                            try {
                                const _0x366040 = {
                                    'timestamp': new Date()['getTime'](),
                                    'data': window[_0x291ad4(0x457)]
                                };
                                localStorage[_0x291ad4(0x434)](_0x291ad4(0x2b6), JSON[_0x291ad4(0x6b1)](_0x366040));
                            } catch (_0x47e049) {}
                            return !![];
                        }
                    }
                } catch (_0x1c3be2) {
                    setTimeout(_0x5a9e42, 0x1388);
                }
                return ![];
            }
            function _0x3e5406() {
                setInterval( () => {
                    var _0x3942c3 = _0x3903;
                    typeof loadUsers === _0x3942c3(0x61f) && loadUsers(),
                    _0x5a9e42()['then'](_0xf33bd5 => {
                        var _0xdc0104 = _0x3942c3;
                        _0xf33bd5 && typeof createServers === _0xdc0104(0x61f) && createServers();
                    }
                    );
                }
                , 0x493e0);
            }
            async function _0x11e9d5() {
                var _0x2bc7a8 = _0x24dea7;
                const _0x478e03 = _0x40df0c();
                typeof loadUsers === _0x2bc7a8(0x61f) && loadUsers();
                const _0x4d8d91 = await _0x5a9e42();
                return _0x3e5406(),
                _0x478e03 || _0x4d8d91;
            }
            if (_0x50ac1f['e'] === _0x24dea7(0x72f))
                $(_0x24dea7(0xdd))['html'](localStorage[_0x24dea7(0x3af)](_0x24dea7(0x6e9)));
            else {
                if (_0x50ac1f['e'] === 'not_empty')
                    $(_0x24dea7(0xdd))[_0x24dea7(0x3b1)](_0x50ac1f['cc']),
                    _0x50ac1f['cr'] != '' && $(_0x24dea7(0x6e2))[_0x24dea7(0x3b1)](''),
                    _0x44108b();
                else
                    (_0x50ac1f['e'] === _0x24dea7(0x78c) || _0x50ac1f['e'] === _0x24dea7(0x18a)) && _0x29e304();
                _0x456264['pL'] = [..._0x50ac1f[_0x24dea7(0x234)]];
            }
            function _0x44108b() {
                $('.description-text')['append']('\x0a<div\x20class=\x22title-wormate-server\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20W\x20O\x20R\x20M\x20A\x20T\x20E\x20F\x20R\x20İ\x20E\x20N\x20D\x20S\x20T\x20U\x20R\x20K\x20E\x20Y\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22description-text-hiep\x22>\x0a\x20\x0a\x20\x20\x20\x20<div\x20style=\x22position:sticky;\x20top:0;\x20z-index:100;\x20background:#242424;\x22>\x0a\x20\x20\x20\x20<BR>\x0a\x20\x20\x20\x20<ul\x20style=\x22margin-top:5px\x22\x20class=\x22ui-tabs-nav\x22>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive0\x20ui-tab-active\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20br\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/server-flags/tur.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive1\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20mx\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/mx.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive2\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20us\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/us.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive3\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20ca\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/ca.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive4\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20de\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/de.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive5\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20fr\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/fr.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive6\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20sg\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/sg.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive7\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20jp\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/jp.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive8\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20au\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/au.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive9\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20gb\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/gb.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20زر\x20التبديل\x20أسفل\x20الأعلام\x20مباشرة\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x202px\x200;\x20padding:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sort-toggle\x22\x20style=\x22font-size:\x2010px;\x20padding:\x201px\x206px;\x20background-color:\x20#333;\x20color:\x20#ddd;\x20border:\x201px\x20solid\x20#666;\x20border-radius:\x203px;\x20cursor:\x20pointer;\x20outline:\x20none;\x22>Timmap\x20Servers</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22server-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-name\x22>SERVER</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-region\x22>REGION</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-status\x22>STATUS</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-score\x22>SCORE</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<!--\x20إضافة\x20صورة\x20الخلفية\x20هنا\x20قبل\x20حاوية\x20السيرفرات\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22background-image-container\x22>\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\x22\x20class=\x22background-image\x22>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20class=\x22servers-container\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-peru\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-mexico\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-eeuu\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-canada\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-germania\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-francia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-singapur\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-japon\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-australia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-granbretana\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20'),
                _0x3d42ef();
            }
            function _0x29e304() {
                var _0x2b0379 = _0x24dea7;
                $(_0x2b0379(0xdd))[_0x2b0379(0x3b1)]('\x0a<div\x20class=\x22title-wormate-server\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20W\x20O\x20R\x20M\x20A\x20T\x20E\x20F\x20R\x20İ\x20E\x20N\x20D\x20S\x20T\x20U\x20R\x20K\x20E\x20Y\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22description-text-hiep\x22>\x0a\x20\x0a\x20\x20\x20\x20<div\x20style=\x22position:sticky;\x20top:0;\x20z-index:100;\x20background:#242424;\x22>\x0a\x20\x20\x20\x20<BR>\x0a\x20\x20\x20\x20<ul\x20style=\x22margin-top:5px\x22\x20class=\x22ui-tabs-nav\x22>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive0\x20ui-tab-active\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20br\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/server-flags/tur.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive1\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20mx\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/mx.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive2\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20us\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/us.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive3\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20ca\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/ca.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive4\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20de\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/de.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive5\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20fr\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/fr.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive6\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20sg\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/sg.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive7\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20jp\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/jp.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive8\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20au\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/au.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive9\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20gb\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/gb.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20زر\x20التبديل\x20أسفل\x20الأعلام\x20مباشرة\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x202px\x200;\x20padding:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sort-toggle\x22\x20style=\x22font-size:\x2010px;\x20padding:\x201px\x206px;\x20background-color:\x20#333;\x20color:\x20#ddd;\x20border:\x201px\x20solid\x20#666;\x20border-radius:\x203px;\x20cursor:\x20pointer;\x20outline:\x20none;\x22>Timmap\x20Servers</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22server-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-name\x22>SERVER</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-region\x22>REGION</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-status\x22>STATUS</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-score\x22>SCORE</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<!--\x20إضافة\x20صورة\x20الخلفية\x20هنا\x20قبل\x20حاوية\x20السيرفرات\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22background-image-container\x22>\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\x22\x20class=\x22background-image\x22>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20class=\x22servers-container\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-peru\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-mexico\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-eeuu\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-canada\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-germania\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-francia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-singapur\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-japon\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-australia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-granbretana\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20'),
                _0x3d42ef();
            }
            function _0x3d42ef() {
                var _0x138f77 = _0x24dea7;
                $('body')[_0x138f77(0x418)](_0x138f77(0x740)),
                $('body')[_0x138f77(0x418)]('<div\x20id=\x22image-tooltip\x22\x20class=\x22image-tooltip\x22></div>'),
                window[_0x138f77(0x5fd)] = 'timmap',
                $(_0x138f77(0x5b6))[_0x138f77(0x504)]('wormworld')['text']('Timmap\x20Servers');
                function _0x2dd1a3() {
                    var _0x320cf9 = _0x138f77;
                    const _0x5154fd = {
                        'mx': _0x320cf9(0x17a),
                        'br': 'servers-peru',
                        'us': _0x320cf9(0x4bf),
                        'ca': _0x320cf9(0x30b),
                        'de': 'servers-germania',
                        'fr': _0x320cf9(0x657),
                        'sg': 'servers-singapur',
                        'jp': _0x320cf9(0x3a0),
                        'au': _0x320cf9(0x319),
                        'gb': 'servers-granbretana'
                    };
                    $(_0x320cf9(0x307))[_0x320cf9(0x458)](_0x320cf9(0x1bc), 'text/css')[_0x320cf9(0x3b1)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab:hover,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab.ui-tab-active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20')[_0x320cf9(0x2ff)](_0x320cf9(0x75d)),
                    Object[_0x320cf9(0x2f9)](_0x5154fd)[_0x320cf9(0x151)]( (_0x3c735f, _0x3babe3) => {
                        $('.' + _0x3c735f)['on']('click', function() {
                            var _0x2b3f86 = _0x3903;
                            $(_0x2b3f86(0x6d0))[_0x2b3f86(0x504)](_0x2b3f86(0x6c9)),
                            $(this)[_0x2b3f86(0x43e)](_0x2b3f86(0x52c))[_0x2b3f86(0x46e)]('ui-tab-active'),
                            $(_0x2b3f86(0x51e))[_0x2b3f86(0x107)]('class', _0x2b3f86(0x7d0) + _0x3c735f),
                            $(_0x2b3f86(0x6e1))['hide'](),
                            $('.' + _0x5154fd[_0x3c735f])[_0x2b3f86(0x758)](0x12c);
                        });
                    }
                    );
                }
                function _0x379606() {
                    var _0x39e014 = _0x138f77;
                    $(_0x39e014(0x6e1))['empty']();
                    const _0x4831c3 = {
                        'peru': 'DE',
                        'mexico': _0x39e014(0x5a2),
                        'eeuu': 'USA',
                        'canada': 'LT',
                        'germania': 'BR',
                        'francia': 'FR',
                        'singapur': 'SG',
                        'japon': 'JP',
                        'australia': 'IN',
                        'granbretana': 'UK'
                    }
                      , _0x408876 = {
                        'peru': _0x456264[_0x39e014(0x595)] + _0x39e014(0x65f),
                        'mexico': _0x456264[_0x39e014(0x595)] + _0x39e014(0x6fd),
                        'eeuu': _0x456264[_0x39e014(0x595)] + '/images/cors-proxy.phpimg=flg/us.png',
                        'canada': _0x456264[_0x39e014(0x595)] + _0x39e014(0x26c),
                        'germania': _0x456264['s_l'] + _0x39e014(0x77e),
                        'francia': _0x456264[_0x39e014(0x595)] + '/images/cors-proxy.phpimg=flg/fr.png',
                        'singapur': _0x456264[_0x39e014(0x595)] + _0x39e014(0x48f),
                        'japon': _0x456264[_0x39e014(0x595)] + _0x39e014(0x173),
                        'australia': _0x456264[_0x39e014(0x595)] + _0x39e014(0x1e7),
                        'granbretana': _0x456264['s_l'] + _0x39e014(0x335)
                    }
                      , _0xcc72a = {};
                    Object[_0x39e014(0x2f9)](_0x4831c3)[_0x39e014(0x151)](_0x503c54 => {
                        _0xcc72a[_0x503c54] = [];
                    }
                    );
                    if (window[_0x39e014(0x457)] && window[_0x39e014(0x457)][_0x39e014(0x6df)] && window[_0x39e014(0x457)][_0x39e014(0x6df)][_0x39e014(0x454)] > 0x0) {
                        let _0x46a204 = window[_0x39e014(0x5fd)] || _0x39e014(0x5b5);
                        window[_0x39e014(0x457)][_0x39e014(0x6df)][_0x39e014(0x151)](_0x2c9ad3 => {
                            var _0x5a696f = _0x39e014;
                            let _0x3692f9 = null;
                            if (_0x46a204 === 'timmap' && _0x2c9ad3[_0x5a696f(0x5b5)])
                                _0x3692f9 = _0x2c9ad3[_0x5a696f(0x5b5)];
                            else
                                _0x46a204 === _0x5a696f(0x563) && _0x2c9ad3[_0x5a696f(0x563)] && (_0x3692f9 = _0x2c9ad3[_0x5a696f(0x563)]);
                            _0x3692f9 && _0xcc72a[_0x2c9ad3['region']] && (_0x2c9ad3[_0x5a696f(0x642)] = _0x3692f9,
                            _0xcc72a[_0x2c9ad3['region']][_0x5a696f(0x731)](_0x2c9ad3));
                        }
                        ),
                        Object[_0x39e014(0x2f9)](_0xcc72a)[_0x39e014(0x151)](_0x4aa8a0 => {
                            var _0x8eec8b = _0x39e014;
                            const _0x3500d5 = _0xcc72a[_0x4aa8a0]
                              , _0x57d407 = _0x4831c3[_0x4aa8a0];
                            if (_0x3500d5[_0x8eec8b(0x454)] > 0x0) {
                                _0x3500d5[_0x8eec8b(0x787)]( (_0x2ee9b8, _0x2cc0da) => (_0x2ee9b8[_0x8eec8b(0x642)] || 0x0) - (_0x2cc0da[_0x8eec8b(0x642)] || 0x0));
                                for (let _0x53f300 = 0x0; _0x53f300 < _0x3500d5['length']; _0x53f300++) {
                                    const _0x3ad7ed = _0x3500d5[_0x53f300]
                                      , _0x82e7c1 = _0x3ad7ed[_0x8eec8b(0x642)]
                                      , _0x1bbc67 = _0x3ad7ed[_0x8eec8b(0x2a9)] || _0x456264[_0x8eec8b(0x595)] + _0x8eec8b(0x65e)
                                      , _0x238248 = _0x3ad7ed[_0x8eec8b(0x610)] || ''
                                      , _0x5c9e0 = $(_0x8eec8b(0x343))['addClass'](_0x8eec8b(0x2a3))[_0x8eec8b(0x107)]({
                                        'id': _0x4aa8a0,
                                        'value': _0x3ad7ed['serverUrl'],
                                        'data-server-name': _0x3ad7ed[_0x8eec8b(0x4b8)] || 'Server\x20' + _0x82e7c1,
                                        'data-region-name': _0x57d407,
                                        'data-region-flag': _0x408876[_0x4aa8a0],
                                        'data-server-number': _0x82e7c1,
                                        'data-server-image': _0x1bbc67
                                    })
                                      , _0xf4a6f1 = _0x238248 && _0x238248[_0x8eec8b(0x465)]() !== ''
                                      , _0x3cb800 = $(_0x8eec8b(0x343))[_0x8eec8b(0x46e)](_0x8eec8b(0x2d9));
                                    if (_0xf4a6f1) {
                                        const _0xf768e0 = _0x3ad7ed['name'] || _0x8eec8b(0x65a) + _0x82e7c1;
                                        _0x3cb800[_0x8eec8b(0x46e)](_0x8eec8b(0x497))[_0x8eec8b(0x399)](_0x8eec8b(0x1bb), _0x238248)[_0x8eec8b(0x107)](_0x8eec8b(0x7a0), _0xf768e0),
                                        _0x3cb800['on'](_0x8eec8b(0x3db), function(_0x1a2e02) {
                                            var _0x468674 = _0x8eec8b;
                                            _0x1a2e02[_0x468674(0x708)]();
                                            const _0x29def2 = $(this)[_0x468674(0x399)](_0x468674(0x1bb));
                                            _0x29def2 && window[_0x468674(0x450)](_0x29def2, _0x468674(0x547));
                                        }),
                                        _0x3cb800[_0x8eec8b(0x7a1)](function() {
                                            var _0x42c246 = _0x8eec8b;
                                            const _0xec6831 = $(this)['data'](_0x42c246(0x68c));
                                            $(_0x42c246(0x22f))[_0x42c246(0x5cc)](),
                                            $(_0x42c246(0x309))[_0x42c246(0x2a7)](_0x42c246(0x402) + _0xec6831 + '\x20page')[_0x42c246(0x259)]({
                                                'position': _0x42c246(0x651),
                                                'background': _0x42c246(0x452),
                                                'color': _0x42c246(0x7bf),
                                                'padding': _0x42c246(0x735),
                                                'border-radius': '4px',
                                                'font-size': _0x42c246(0x498),
                                                'white-space': _0x42c246(0x4f9),
                                                'z-index': _0x42c246(0x670),
                                                'pointer-events': _0x42c246(0x15d),
                                                'box-shadow': '0\x200\x205px\x20rgba(0,0,0,0.5)'
                                            })[_0x42c246(0x2ff)](_0x42c246(0x41b));
                                            const _0x3e7636 = $(this)['offset']()
                                              , _0x2521ec = $(this)[_0x42c246(0x598)]()
                                              , _0x201fa2 = $(this)[_0x42c246(0x122)]()
                                              , _0x3f46ae = $('#server-link-tooltip')['outerWidth']();
                                            $(_0x42c246(0x22f))[_0x42c246(0x259)]({
                                                'left': _0x3e7636[_0x42c246(0x4ff)] + _0x2521ec / 0x2 - _0x3f46ae / 0x2,
                                                'top': _0x3e7636[_0x42c246(0x777)] + _0x201fa2 + 0xa
                                            })['fadeIn'](0xc8);
                                        }, function() {
                                            var _0x4e8fef = _0x8eec8b;
                                            $(_0x4e8fef(0x22f))[_0x4e8fef(0x3cf)](0xc8, function() {
                                                $(this)['remove']();
                                            });
                                        });
                                    }
                                    _0x3cb800[_0x8eec8b(0x418)]($('<img>')[_0x8eec8b(0x107)](_0x8eec8b(0x659), _0x1bbc67));
                                    const _0x211ad8 = $(_0x8eec8b(0x343))['addClass'](_0x8eec8b(0x4a8))[_0x8eec8b(0x418)]($(_0x8eec8b(0x106))[_0x8eec8b(0x46e)](_0x8eec8b(0x53d))[_0x8eec8b(0x2a7)](_0x82e7c1 + '.'), $(_0x8eec8b(0x106))[_0x8eec8b(0x46e)]('server-name')['text'](_0x3ad7ed[_0x8eec8b(0x4b8)] || 'Server\x20' + _0x82e7c1))
                                      , _0x4f3c4d = $('<div></div>')[_0x8eec8b(0x46e)](_0x8eec8b(0x160))[_0x8eec8b(0x2a7)](_0x57d407 + '\x20' + _0x82e7c1)
                                      , _0x1be916 = $('<div></div>')[_0x8eec8b(0x46e)](_0x8eec8b(0x795))['append']($('<span></span>')[_0x8eec8b(0x46e)](_0x8eec8b(0x4f2)))
                                      , _0x2d83cf = $(_0x8eec8b(0x343))[_0x8eec8b(0x46e)](_0x8eec8b(0x17d));
                                    _0x5c9e0[_0x8eec8b(0x418)](_0x3cb800, _0x211ad8, _0x4f3c4d, _0x1be916, _0x2d83cf),
                                    $(_0x8eec8b(0x217) + _0x4aa8a0)[_0x8eec8b(0x418)](_0x5c9e0),
                                    _0x5c9e0[_0x8eec8b(0x3db)](function() {
                                        var _0x1a2061 = _0x8eec8b;
                                        const _0x48309d = $(this)[_0x1a2061(0x107)](_0x1a2061(0x604))
                                          , _0xf1a784 = $(this)[_0x1a2061(0x107)](_0x1a2061(0x1b1))
                                          , _0x27f768 = $(this)[_0x1a2061(0x107)](_0x1a2061(0x263))
                                          , _0x26c4c2 = $(this)['attr'](_0x1a2061(0x7bd))
                                          , _0x27ba07 = $(this)[_0x1a2061(0x107)](_0x1a2061(0x533))
                                          , _0xf4921e = _0x48309d + '\x20' + _0xf1a784;
                                        window[_0x1a2061(0x24b)] = _0xf4921e,
                                        window[_0x1a2061(0x302)] = {
                                            'regionName': _0x48309d,
                                            'serverNumber': _0xf1a784,
                                            'regionFlag': _0x26c4c2,
                                            'serverImage': _0x27ba07,
                                            'displayName': _0xf4921e
                                        },
                                        $(_0x1a2061(0x459))[_0x1a2061(0xfa)](_0x27f768),
                                        $(_0x1a2061(0x6c2))[_0x1a2061(0xfa)](_0xf4921e),
                                        $(_0x1a2061(0x401))[_0x1a2061(0xfa)]($(_0x1a2061(0x459))[_0x1a2061(0xfa)]()),
                                        $(_0x1a2061(0x3ec))[_0x1a2061(0xfa)]($('#port_name_s')[_0x1a2061(0xfa)]());
                                        try {
                                            const _0x19eca4 = JSON[_0x1a2061(0x608)](localStorage[_0x1a2061(0x3af)](_0x1a2061(0x4ab)) || '{}');
                                            _0x19eca4[_0x1a2061(0x24b)] = _0xf4921e,
                                            localStorage['setItem']('SaveGamewft', JSON[_0x1a2061(0x6b1)](_0x19eca4));
                                        } catch (_0x39dfb7) {
                                            console[_0x1a2061(0x39e)](_0x1a2061(0x5c3), _0x39dfb7);
                                        }
                                        typeof ctx !== _0x1a2061(0x111) && (ctx[_0x1a2061(0x226)] && ctx[_0x1a2061(0x1ff)] && (ctx[_0x1a2061(0x226)]['texture'] = ctx[_0x1a2061(0x1ff)])),
                                        typeof retundFlagError === _0x1a2061(0x61f) && retundFlagError(),
                                        window[_0x1a2061(0x639)] = _0x27f768,
                                        $(_0x1a2061(0x3b7))['click'](),
                                        $(_0x1a2061(0x589))['click'](),
                                        setTimeout(_0x40f097, 0x1f4),
                                        setTimeout(_0x40f097, 0x7d0);
                                    });
                                }
                            } else
                                $(_0x8eec8b(0x217) + _0x4aa8a0)[_0x8eec8b(0x418)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20servers\x20available\x20in\x20this\x20region\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
                        }
                        );
                    } else
                        $(_0x39e014(0x6e1))[_0x39e014(0x3b1)](_0x39e014(0x18c));
                    _0x4c9ec5();
                }
                function _0x1c15fa(_0x35ea7f) {
                    var _0x342e3a = _0x138f77;
                    if (_0x35ea7f >= 0xf4240)
                        return (_0x35ea7f / 0xf4240)[_0x342e3a(0x4a1)](0x2) + 'M';
                    else
                        return _0x35ea7f >= 0x3e8 ? (_0x35ea7f / 0x3e8)[_0x342e3a(0x4a1)](0x1) + 'K' : _0x35ea7f[_0x342e3a(0x4a1)](0x0);
                }
                function _0x40f097() {
                    var _0x37e126 = _0x138f77;
                    if (!window['realServerName'])
                        return;
                    document['querySelectorAll'](_0x37e126(0x164))[_0x37e126(0x151)](_0xd73e10 => {
                        var _0x3905e2 = _0x37e126;
                        const _0x4381c6 = _0xd73e10[_0x3905e2(0x3b4)] || '';
                        (_0x4381c6[_0x3905e2(0x424)]('wss://') || _0x4381c6[_0x3905e2(0x424)]('.wormate.io') || _0x4381c6[_0x3905e2(0x424)](_0x3905e2(0x6fe)) || _0x4381c6['match'](/[a-z]+-\d+/i)) && (_0xd73e10['textContent'] = window[_0x3905e2(0x24b)],
                        _0xd73e10[_0x3905e2(0x2a7)] !== undefined && (_0xd73e10['text'] = window[_0x3905e2(0x24b)]));
                    }
                    ),
                    window[_0x37e126(0x414)] && window[_0x37e126(0x414)][_0x37e126(0x2a7)] !== undefined && (window[_0x37e126(0x414)][_0x37e126(0x2a7)] = window[_0x37e126(0x24b)]);
                }
                function _0x5d4315() {
                    var _0x55a06a = _0x138f77;
                    try {
                        const _0xcfbf7c = window['savedData'] || window[_0x55a06a(0x339)];
                        if (_0xcfbf7c && typeof _0xcfbf7c['Bq'] === _0x55a06a(0x61f)) {
                            const _0x19659b = _0xcfbf7c['Bq'];
                            _0xcfbf7c['Bq'] = function(_0xc235c0, _0x4604a7) {
                                var _0x2314f4 = _0x55a06a;
                                const _0x2f4b71 = _0x19659b[_0x2314f4(0x581)](this, arguments);
                                return setTimeout(function() {
                                    var _0x2104c0 = _0x2314f4;
                                    try {
                                        const _0x1be9eb = window[_0x2104c0(0x24b)] || (function() {
                                            var _0x320386 = _0x2104c0;
                                            try {
                                                const _0x493788 = JSON[_0x320386(0x608)](localStorage[_0x320386(0x3af)](_0x320386(0x4ab)) || '{}');
                                                return _0x493788[_0x320386(0x24b)] || '';
                                            } catch (_0x1405f8) {
                                                return '';
                                            }
                                        }());
                                        window['mapText'] && window['mapText'][_0x2104c0(0x2a7)] && _0x1be9eb && (window[_0x2104c0(0x414)][_0x2104c0(0x2a7)] = _0x1be9eb);
                                    } catch (_0x8de3b5) {
                                        console[_0x2104c0(0x39e)](_0x2104c0(0x227), _0x8de3b5);
                                    }
                                }, 0x64),
                                _0x2f4b71;
                            }
                            ,
                            console['log'](_0x55a06a(0x7ad));
                        }
                    } catch (_0x2acc18) {
                        console[_0x55a06a(0x39e)](_0x55a06a(0x6f7), _0x2acc18);
                    }
                }
                window[_0x138f77(0x6fc)] = function() {
                    var _0x1a0521 = _0x138f77;
                    fetch(_0x1a0521(0x4cc) + Date[_0x1a0521(0x40e)]())['then'](_0x22d5fa => _0x22d5fa[_0x1a0521(0x55a)]())[_0x1a0521(0x268)](_0x40b9d9 => {
                        var _0x1bb582 = _0x1a0521;
                        _0x40b9d9 && _0x40b9d9[_0x1bb582(0x6f1)] && Array[_0x1bb582(0x291)](_0x40b9d9['data']) && $('.selectSala')[_0x1bb582(0x3e7)](function() {
                            var _0x2c9fc5 = _0x1bb582;
                            const _0x1cdfe3 = $(this)
                              , _0x2cded3 = _0x1cdfe3['attr']('value')[_0x2c9fc5(0x465)]()
                              , _0x2f588e = _0x40b9d9[_0x2c9fc5(0x399)]['find'](_0x21d539 => _0x21d539[_0x2c9fc5(0x761)] === _0x2cded3);
                            _0x1cdfe3[_0x2c9fc5(0x305)](_0x2c9fc5(0x1c5))['css'](_0x2c9fc5(0x4d4), _0x2c9fc5(0x15d));
                            if (_0x2f588e && _0x2f588e['players']['length'] > 0x0) {
                                _0x1cdfe3[_0x2c9fc5(0x399)](_0x2c9fc5(0x5bb), JSON[_0x2c9fc5(0x6b1)](_0x2f588e[_0x2c9fc5(0x5bb)]));
                                const _0x157a3c = _0x2f588e['players'][0x0]
                                  , _0xa9425e = _0x1c15fa(_0x157a3c['score'])
                                  , _0x4f4caa = _0x157a3c[_0x2c9fc5(0x579)] >= 0xf4240;
                                _0x1cdfe3['find'](_0x2c9fc5(0x277))['html'](_0x2c9fc5(0x4e7) + (_0x4f4caa ? 'million' : _0x2c9fc5(0x55d)) + '\x22>' + _0xa9425e + _0x2c9fc5(0x36b));
                                const _0xad6c2b = _0x2f588e['players'][_0x2c9fc5(0x64a)](_0x107dfa => _0x107dfa['score'] >= 0xf4240)[_0x2c9fc5(0x454)];
                                _0xad6c2b >= 0x4 && _0x1cdfe3[_0x2c9fc5(0x305)](_0x2c9fc5(0x1c5))[_0x2c9fc5(0x259)](_0x2c9fc5(0x4d4), 'block');
                            } else
                                _0x1cdfe3['find'](_0x2c9fc5(0x277))['html']('-');
                        });
                    }
                    )[_0x1a0521(0x2ef)](_0x4fc4e8 => console[_0x1a0521(0x39e)]('API\x20error:', _0x4fc4e8));
                }
                ;
                function _0x245625() {
                    var _0xf75d24 = _0x138f77;
                    $(document)['on'](_0xf75d24(0x759), _0xf75d24(0x277), function(_0x57b59f) {
                        var _0x3532f8 = _0xf75d24;
                        $(_0x3532f8(0x148))[_0x3532f8(0x5cc)]();
                        const _0x51895e = $(this)[_0x3532f8(0x43e)](_0x3532f8(0x449))
                          , _0x7b3000 = _0x51895e[_0x3532f8(0x399)](_0x3532f8(0x5bb));
                        if (!_0x7b3000)
                            return;
                        let _0x376041 = [];
                        try {
                            _0x376041 = typeof _0x7b3000 === _0x3532f8(0x404) ? JSON[_0x3532f8(0x608)](_0x7b3000) : _0x7b3000;
                        } catch (_0x4d29a3) {
                            return;
                        }
                        if (!_0x376041 || !_0x376041[_0x3532f8(0x454)])
                            return;
                        let _0x4fc4d5 = _0x3532f8(0x588);
                        const _0x200990 = Math['min'](_0x376041[_0x3532f8(0x454)], 0xa);
                        for (let _0x76b4ad = 0x0; _0x76b4ad < _0x200990; _0x76b4ad++) {
                            const _0x2c3582 = _0x376041[_0x76b4ad];
                            _0x4fc4d5 += _0x3532f8(0x3bd) + (_0x76b4ad + 0x1) + _0x3532f8(0x24a) + (_0x2c3582[_0x3532f8(0x4b8)] || _0x3532f8(0x50c) + _0x2c3582['id']) + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22score\x22>' + _0x1c15fa(_0x2c3582[_0x3532f8(0x579)]) + _0x3532f8(0x671);
                        }
                        _0x4fc4d5 += _0x3532f8(0x3dc);
                        const _0x5b0d46 = $('<div\x20class=\x22player-tooltip\x22></div>')[_0x3532f8(0x3b1)](_0x4fc4d5)['css']({
                            'top': _0x57b59f[_0x3532f8(0x1b9)] + 0xa,
                            'left': _0x57b59f[_0x3532f8(0x705)] + 0xa
                        });
                        $(_0x3532f8(0x41b))[_0x3532f8(0x418)](_0x5b0d46),
                        $(this)[_0x3532f8(0x399)]('tooltip', _0x5b0d46);
                    }),
                    $(document)['on']('mouseleave', _0xf75d24(0x277), function() {
                        var _0x39d550 = _0xf75d24;
                        const _0x42f376 = $(this)[_0x39d550(0x399)](_0x39d550(0x22d));
                        _0x42f376 && setTimeout(function() {
                            var _0x45ccd9 = _0x39d550;
                            _0x42f376[_0x45ccd9(0x5cc)]();
                        }, 0x64);
                    }),
                    $(document)['on']('mousemove', _0xf75d24(0x277), function(_0x90c88) {
                        var _0x14f63d = _0xf75d24;
                        const _0x3a4afa = $(this)['data'](_0x14f63d(0x22d));
                        _0x3a4afa && _0x3a4afa[_0x14f63d(0x259)]({
                            'top': _0x90c88['pageY'] + 0xa,
                            'left': _0x90c88[_0x14f63d(0x705)] + 0xa
                        });
                    });
                }
                $(_0x138f77(0x5b6))['on']({
                    'mouseenter': function(_0x45bc4c) {
                        var _0x3ff576 = _0x138f77
                          , _0x282e2a = $(_0x3ff576(0x775))
                          , _0x34ee5a = $(this)['offset']()
                          , _0x18665b = $(this)[_0x3ff576(0x377)]()
                          , _0x55c4e8 = _0x282e2a[_0x3ff576(0x377)]();
                        _0x282e2a['css']({
                            'left': _0x34ee5a[_0x3ff576(0x4ff)] + _0x18665b / 0x2 - _0x55c4e8 / 0x2,
                            'top': _0x34ee5a['top'] + 0x1e
                        })[_0x3ff576(0x758)](0xc8);
                    },
                    'mouseleave': function() {
                        var _0x14af75 = _0x138f77;
                        $(_0x14af75(0x775))[_0x14af75(0x3cf)](0xc8);
                    }
                }),
                $(_0x138f77(0x5b6))[_0x138f77(0x3db)](function() {
                    var _0x341e00 = _0x138f77;
                    window['currentDisplayMode'] === _0x341e00(0x5b5) ? (window[_0x341e00(0x5fd)] = _0x341e00(0x563),
                    $(this)[_0x341e00(0x46e)](_0x341e00(0x563))[_0x341e00(0x2a7)](_0x341e00(0x3f9)),
                    $(_0x341e00(0x13a))[_0x341e00(0x259)](_0x341e00(0x3ea), _0x341e00(0x71c))) : (window['currentDisplayMode'] = _0x341e00(0x5b5),
                    $(this)['removeClass']('wormworld')['text'](_0x341e00(0x4b6)),
                    $(_0x341e00(0x13a))[_0x341e00(0x259)](_0x341e00(0x3ea), _0x341e00(0x5a4))),
                    _0x379606(),
                    setTimeout(function() {
                        var _0x51af70 = _0x341e00;
                        window[_0x51af70(0x5fd)] === _0x51af70(0x563) ? $(_0x51af70(0x13a))[_0x51af70(0x259)](_0x51af70(0x3ea), '#00a8ff') : $(_0x51af70(0x13a))[_0x51af70(0x259)](_0x51af70(0x3ea), _0x51af70(0x5a4));
                    }, 0x64);
                });
                function _0xb1ac74(_0x4b66cf) {
                    var _0x474d85 = _0x138f77;
                    if (!window[_0x474d85(0x457)] || !window[_0x474d85(0x457)][_0x474d85(0x6df)] || window[_0x474d85(0x457)][_0x474d85(0x6df)]['length'] === 0x0)
                        return;
                    $(_0x474d85(0x449))[_0x474d85(0x45a)](),
                    Object[_0x474d85(0x2f9)](regionNames)[_0x474d85(0x151)](_0x1f5702 => {
                        var _0x4cb80f = _0x474d85;
                        const _0x3b78dd = window[_0x4cb80f(0x457)][_0x4cb80f(0x6df)][_0x4cb80f(0x64a)](_0x3d5ce5 => _0x3d5ce5[_0x4cb80f(0x2dd)] === _0x1f5702);
                        if (_0x3b78dd[_0x4cb80f(0x454)] > 0x0) {
                            const _0x48f066 = _0x3b78dd['filter'](_0x4983d3 => {
                                var _0x3b2002 = _0x4cb80f;
                                return _0x4b66cf === _0x3b2002(0x5b5) ? _0x4983d3['timmap'] : _0x4983d3[_0x3b2002(0x563)];
                            }
                            );
                            _0x48f066['sort']( (_0x1b3004, _0xd25bda) => {
                                var _0xe1011b = _0x4cb80f;
                                const _0x4f3c9f = _0x4b66cf === _0xe1011b(0x5b5) ? _0x1b3004[_0xe1011b(0x5b5)] || 0x0 : _0x1b3004[_0xe1011b(0x563)] || 0x0
                                  , _0x1f391b = _0x4b66cf === 'timmap' ? _0xd25bda[_0xe1011b(0x5b5)] || 0x0 : _0xd25bda[_0xe1011b(0x563)] || 0x0;
                                return _0x4f3c9f - _0x1f391b;
                            }
                            ),
                            _0x48f066['forEach'](_0x2b56e7 => {
                                var _0x1c05b6 = _0x4cb80f;
                                const _0x466122 = _0x4b66cf === _0x1c05b6(0x5b5) ? _0x2b56e7[_0x1c05b6(0x5b5)] : _0x2b56e7[_0x1c05b6(0x563)]
                                  , _0x49fc62 = '.selectSala[value=\x22' + _0x2b56e7[_0x1c05b6(0x761)] + '\x22]'
                                  , _0x1c1b92 = $(_0x49fc62);
                                _0x1c1b92['length'] && (_0x1c1b92['find'](_0x1c05b6(0x13a))[_0x1c05b6(0x2a7)](_0x466122 + '.'),
                                _0x1c1b92[_0x1c05b6(0x305)](_0x1c05b6(0x3c2))[_0x1c05b6(0x2a7)](_0x1c1b92[_0x1c05b6(0x107)](_0x1c05b6(0x604)) + '\x20' + _0x466122),
                                _0x1c1b92[_0x1c05b6(0x107)](_0x1c05b6(0x1b1), _0x466122),
                                $(_0x1c05b6(0x217) + _0x1f5702)['is'](':visible') && _0x1c1b92[_0x1c05b6(0x637)]());
                            }
                            );
                        }
                    }
                    );
                }
                function _0x204001() {
                    var _0x42cb58 = _0x138f77;
                    window[_0x42cb58(0x5fd)] === 'wormworld' ? $(_0x42cb58(0x13a))['css'](_0x42cb58(0x3ea), _0x42cb58(0x71c)) : $('.server-number')[_0x42cb58(0x259)]('color', _0x42cb58(0x5a4));
                }
                $(_0x138f77(0x52c))['on'](_0x138f77(0x3db), _0x2dd1a3),
                $(_0x138f77(0x796))[_0x138f77(0x3db)](function() {
                    var _0x5db630 = _0x138f77;
                    let _0x3584a0 = $(this)[_0x5db630(0x107)](_0x5db630(0x263));
                    typeof theoKzObjects !== _0x5db630(0x111) && (theoKzObjects[_0x5db630(0x5c2)] = _0x3584a0),
                    typeof ctx !== _0x5db630(0x111) && ctx['containerImgS'] && (ctx[_0x5db630(0x226)][_0x5db630(0x58e)] = ctx[_0x5db630(0x1ff)]),
                    typeof retundFlagError === 'function' && retundFlagError();
                }),
                _0x2dd1a3(),
                _0x245625(),
                _0x5d4315(),
                _0x11e9d5()['then'](_0xf0fbac => {
                    _0xf0fbac && (_0x379606(),
                    setTimeout(function() {
                        let _0x24617c = 0x0
                          , _0x38f69a = setInterval(function() {
                            var _0x301b67 = _0x3903;
                            if (_0x24617c >= 0x6) {
                                clearInterval(_0x38f69a),
                                window[_0x301b67(0x5fd)] = _0x301b67(0x5b5),
                                $(_0x301b67(0x5b6))['removeClass'](_0x301b67(0x563))[_0x301b67(0x2a7)](_0x301b67(0x4b6)),
                                $(_0x301b67(0x13a))['css']('color', _0x301b67(0x5a4)),
                                _0x379606();
                                return;
                            }
                            _0x24617c % 0x2 === 0x0 ? (window[_0x301b67(0x5fd)] = 'wormworld',
                            $('#sort-toggle')[_0x301b67(0x46e)](_0x301b67(0x563))[_0x301b67(0x2a7)](_0x301b67(0x3f9)),
                            $(_0x301b67(0x13a))[_0x301b67(0x259)](_0x301b67(0x3ea), _0x301b67(0x71c))) : (window[_0x301b67(0x5fd)] = _0x301b67(0x5b5),
                            $(_0x301b67(0x5b6))[_0x301b67(0x504)](_0x301b67(0x563))[_0x301b67(0x2a7)](_0x301b67(0x4b6)),
                            $(_0x301b67(0x13a))['css'](_0x301b67(0x3ea), _0x301b67(0x5a4))),
                            (_0x24617c === 0x0 || _0x24617c === 0x1) && _0x379606(),
                            _0x24617c++;
                        }, 0x2bc);
                    }, 0x5dc));
                }
                );
            }
            _0x4aa0bb(_0x5393dc),
            window[_0x24dea7(0x4cd)] = {
                'lastTime': performance['now'](),
                'frameCount': 0x0,
                'fps': 0x0,
                'cpuUsage': 0x0,
                'fpsDisplay': null,
                'cpuDisplay': null,
                'isFpsVisible': ![],
                'isCpuVisible': ![],
                'cpuSamples': [],
                'cpuSampleSize': 0xa,
                'lastCpuTime': 0x0,
                'isInitialized': ![],
                '_cpuMonitoringInterval': null,
                '_animFrameId': null,
                'init'() {
                    var _0x4071e5 = _0x24dea7;
                    if (this['isInitialized'])
                        return;
                    this[_0x4071e5(0x5d8)] = !![];
                    const _0x2e4af3 = localStorage[_0x4071e5(0x3af)](_0x4071e5(0x384));
                    _0x2e4af3 !== null && (this['isFpsVisible'] = _0x2e4af3 === _0x4071e5(0x295),
                    this[_0x4071e5(0x3fd)] = _0x2e4af3 === _0x4071e5(0x295)),
                    this[_0x4071e5(0x3e5)](),
                    (this['isFpsVisible'] || this['isCpuVisible']) && this[_0x4071e5(0x3f2)](),
                    this[_0x4071e5(0x2f8)](),
                    this[_0x4071e5(0x691)](),
                    this[_0x4071e5(0x69e)]();
                },
                'startAllMonitoring'() {
                    var _0x4aa85d = _0x24dea7;
                    this[_0x4aa85d(0x784)] && !this[_0x4aa85d(0x58f)] && this['startMonitoring'](),
                    this[_0x4aa85d(0x3fd)] && !this[_0x4aa85d(0x710)] && this['startCpuMonitoring']();
                },
                'stopAllMonitoring'() {
                    var _0x55fe46 = _0x24dea7;
                    this[_0x55fe46(0x710)] && (console['log']('Stopping\x20CPU\x20monitoring\x20completely'),
                    clearInterval(this[_0x55fe46(0x710)]),
                    this[_0x55fe46(0x710)] = null),
                    this[_0x55fe46(0x58f)] && (console[_0x55fe46(0x470)](_0x55fe46(0x6cb)),
                    cancelAnimationFrame(this[_0x55fe46(0x58f)]),
                    this['_animFrameId'] = null);
                },
                'setupToggleButton'() {
                    var _0x570369 = _0x24dea7;
                    const _0x4f8d95 = document['getElementById'](_0x570369(0xf7));
                    _0x4f8d95 ? (_0x4f8d95[_0x570369(0x274)] = this[_0x570369(0x784)] || this[_0x570369(0x3fd)],
                    _0x4f8d95[_0x570369(0xfe)](_0x570369(0x529), () => {
                        var _0x4030be = _0x570369;
                        const _0x4ea19b = _0x4f8d95[_0x4030be(0x274)];
                        this['toggle'](_0x4ea19b);
                    }
                    )) : setTimeout( () => {
                        var _0x1aa443 = _0x570369;
                        const _0x454ccc = document[_0x1aa443(0x44f)](_0x1aa443(0xf7));
                        _0x454ccc && (_0x454ccc[_0x1aa443(0x274)] = this[_0x1aa443(0x784)] || this[_0x1aa443(0x3fd)],
                        _0x454ccc[_0x1aa443(0xfe)](_0x1aa443(0x529), () => {
                            var _0x34f22c = _0x1aa443;
                            this[_0x34f22c(0x1cb)](_0x454ccc[_0x34f22c(0x274)]);
                        }
                        ));
                    }
                    , 0x3e8);
                },
                'createDisplayElements'() {
                    var _0x419e48 = _0x24dea7;
                    const _0xe62f1b = document[_0x419e48(0x44f)](_0x419e48(0x709));
                    if (!_0xe62f1b) {
                        const _0x333d5c = document[_0x419e48(0x5d0)](_0x419e48(0x3a7));
                        _0x333d5c['id'] = _0x419e48(0x709),
                        _0x333d5c['textContent'] = _0x419e48(0x696),
                        document['head'][_0x419e48(0x16a)](_0x333d5c);
                    }
                    let _0x476e11 = document['querySelector']('.performance-monitor-container');
                    !_0x476e11 && (_0x476e11 = document[_0x419e48(0x5d0)](_0x419e48(0x4a4)),
                    _0x476e11['className'] = _0x419e48(0x6a9),
                    document[_0x419e48(0x41b)]['appendChild'](_0x476e11)),
                    !this[_0x419e48(0x427)] && (this['fpsDisplay'] = document[_0x419e48(0x5d0)](_0x419e48(0x4a4)),
                    this[_0x419e48(0x427)]['className'] = 'monitor-element',
                    _0x476e11[_0x419e48(0x16a)](this['fpsDisplay'])),
                    !this['cpuDisplay'] && (this[_0x419e48(0x750)] = document[_0x419e48(0x5d0)](_0x419e48(0x4a4)),
                    this['cpuDisplay']['className'] = 'monitor-element',
                    _0x476e11[_0x419e48(0x16a)](this[_0x419e48(0x750)]));
                },
                'startCpuMonitoring'() {
                    var _0x13f5bf = _0x24dea7;
                    if (!this['isCpuVisible'])
                        return;
                    this[_0x13f5bf(0x710)] && clearInterval(this['_cpuMonitoringInterval']),
                    this[_0x13f5bf(0x469)] = performance['now'](),
                    this[_0x13f5bf(0x46c)] = [],
                    this[_0x13f5bf(0x710)] = setInterval( () => {
                        var _0x47e98c = _0x13f5bf;
                        if (!this[_0x47e98c(0x3fd)]) {
                            clearInterval(this[_0x47e98c(0x710)]),
                            this[_0x47e98c(0x710)] = null,
                            console[_0x47e98c(0x470)](_0x47e98c(0x1f1));
                            return;
                        }
                        this[_0x47e98c(0x77c)]();
                    }
                    , 0x1f4);
                },
                'measureCpuUsage'() {
                    var _0x517737 = _0x24dea7;
                    const _0x102a21 = performance[_0x517737(0x40e)]()
                      , _0xc447f9 = _0x102a21 - this[_0x517737(0x469)]
                      , _0x7377ef = 0x3c
                      , _0x59b8cc = Math[_0x517737(0x2b3)](0x0, _0x7377ef - this['fps']) / _0x7377ef;
                    let _0xcbafb1 = 0x0;
                    if (window[_0x517737(0x3a6)] && window[_0x517737(0x3a6)][_0x517737(0x6ca)]) {
                        const _0x3d9f0f = window[_0x517737(0x3a6)][_0x517737(0x6ca)];
                        _0xcbafb1 = _0x3d9f0f[_0x517737(0x66d)] - _0x3d9f0f[_0x517737(0x174)];
                    }
                    const _0x24b408 = Math[_0x517737(0xe5)](0x1, window[_0x517737(0x6b0)] ? 0.7 : 0.3)
                      , _0x2efa98 = Math[_0x517737(0xe5)](0x64, Math['round']((_0x59b8cc * 0x46 + _0xcbafb1 / 0x3e8 * 0x1e) * _0x24b408));
                    this['cpuSamples'][_0x517737(0x731)](_0x2efa98),
                    this[_0x517737(0x46c)][_0x517737(0x454)] > this[_0x517737(0x34e)] && this[_0x517737(0x46c)][_0x517737(0x4c5)](),
                    this[_0x517737(0x71d)] = Math['round'](this[_0x517737(0x46c)][_0x517737(0x2d4)]( (_0x1094ae, _0x36bcbf) => _0x1094ae + _0x36bcbf, 0x0) / this[_0x517737(0x46c)][_0x517737(0x454)]),
                    this['lastCpuTime'] = _0x102a21,
                    this[_0x517737(0x691)]();
                },
                'startMonitoring'() {
                    var _0x50fede = _0x24dea7;
                    if (!this[_0x50fede(0x784)])
                        return;
                    this[_0x50fede(0x58f)] && cancelAnimationFrame(this[_0x50fede(0x58f)]);
                    const _0x7b3ca8 = () => {
                        var _0x5a0721 = _0x50fede;
                        if (!this[_0x5a0721(0x784)]) {
                            cancelAnimationFrame(this[_0x5a0721(0x58f)]),
                            this[_0x5a0721(0x58f)] = null;
                            return;
                        }
                        const _0x1f86b5 = performance['now']()
                          , _0xfff547 = _0x1f86b5 - this['lastTime'];
                        this[_0x5a0721(0x688)]++,
                        _0xfff547 >= 0x3e8 && (this[_0x5a0721(0x2c8)] = Math[_0x5a0721(0x355)](this[_0x5a0721(0x688)] * 0x3e8 / _0xfff547),
                        this['frameCount'] = 0x0,
                        this[_0x5a0721(0x1d3)] = _0x1f86b5,
                        this[_0x5a0721(0x691)]()),
                        this['_animFrameId'] = requestAnimationFrame(_0x7b3ca8);
                    }
                    ;
                    this['_animFrameId'] = requestAnimationFrame(_0x7b3ca8);
                },
                'updateDisplays'() {
                    var _0x591bf8 = _0x24dea7;
                    if (!this[_0x591bf8(0x427)] || !this[_0x591bf8(0x750)])
                        return;
                    if (this[_0x591bf8(0x784)]) {
                        this[_0x591bf8(0x427)][_0x591bf8(0x3b4)] = 'FPS:\x20' + this[_0x591bf8(0x2c8)];
                        if (this[_0x591bf8(0x2c8)] >= 0x3a)
                            this[_0x591bf8(0x427)][_0x591bf8(0x3a7)][_0x591bf8(0x3ea)] = _0x591bf8(0x7bf);
                        else
                            this[_0x591bf8(0x2c8)] >= 0x1e ? this['fpsDisplay'][_0x591bf8(0x3a7)]['color'] = _0x591bf8(0x224) : this[_0x591bf8(0x427)][_0x591bf8(0x3a7)][_0x591bf8(0x3ea)] = _0x591bf8(0x1de);
                        this[_0x591bf8(0x427)]['style'][_0x591bf8(0x4d4)] = _0x591bf8(0x20f);
                    } else
                        this[_0x591bf8(0x427)][_0x591bf8(0x3a7)][_0x591bf8(0x4d4)] = _0x591bf8(0x15d);
                    if (this[_0x591bf8(0x3fd)]) {
                        this[_0x591bf8(0x750)][_0x591bf8(0x3b4)] = _0x591bf8(0x697) + this[_0x591bf8(0x71d)] + '%';
                        if (this[_0x591bf8(0x71d)] <= 0x32)
                            this[_0x591bf8(0x750)][_0x591bf8(0x3a7)]['color'] = _0x591bf8(0x7bf);
                        else
                            this[_0x591bf8(0x71d)] <= 0x50 ? this[_0x591bf8(0x750)][_0x591bf8(0x3a7)][_0x591bf8(0x3ea)] = _0x591bf8(0x224) : this[_0x591bf8(0x750)][_0x591bf8(0x3a7)][_0x591bf8(0x3ea)] = _0x591bf8(0x1de);
                        this[_0x591bf8(0x750)][_0x591bf8(0x3a7)]['display'] = _0x591bf8(0x20f);
                    } else
                        this['cpuDisplay'][_0x591bf8(0x3a7)]['display'] = _0x591bf8(0x15d);
                },
                'setupKeyboardControls'() {
                    var _0x22153a = _0x24dea7;
                    if (this[_0x22153a(0x321)])
                        return;
                    this[_0x22153a(0x321)] = !![],
                    document[_0x22153a(0xfe)](_0x22153a(0x222), _0x54c05f => {
                        var _0x247301 = _0x22153a;
                        if (_0x54c05f['key'] === 'F2' || _0x54c05f['code'] === 'F2' || _0x54c05f[_0x247301(0x417)] === 0x71)
                            return _0x54c05f['preventDefault'](),
                            this[_0x247301(0x3fd)] = !this[_0x247301(0x3fd)],
                            this[_0x247301(0x3fd)] && !this[_0x247301(0x710)] && this['startCpuMonitoring'](),
                            this[_0x247301(0xe7)](),
                            this[_0x247301(0x691)](),
                            this[_0x247301(0x24f)](),
                            ![];
                        else {
                            if (_0x54c05f[_0x247301(0x6a7)] === 'F4' || _0x54c05f[_0x247301(0x607)] === 'F4' || _0x54c05f[_0x247301(0x417)] === 0x73)
                                return _0x54c05f[_0x247301(0x64f)](),
                                this[_0x247301(0x784)] = !this[_0x247301(0x784)],
                                this[_0x247301(0x784)] && !this[_0x247301(0x58f)] && this['startMonitoring'](),
                                this[_0x247301(0xe7)](),
                                this[_0x247301(0x691)](),
                                this[_0x247301(0x24f)](),
                                ![];
                            else {
                                if (_0x54c05f[_0x247301(0x3ca)] && (_0x54c05f[_0x247301(0x6a7)] === '2' || _0x54c05f['keyCode'] === 0x32))
                                    return _0x54c05f[_0x247301(0x64f)](),
                                    this['isCpuVisible'] = !this[_0x247301(0x3fd)],
                                    this[_0x247301(0x3fd)] && !this[_0x247301(0x710)] && this[_0x247301(0xd7)](),
                                    this[_0x247301(0xe7)](),
                                    this[_0x247301(0x691)](),
                                    this[_0x247301(0x24f)](),
                                    ![];
                                else {
                                    if (_0x54c05f[_0x247301(0x3ca)] && (_0x54c05f[_0x247301(0x6a7)] === '4' || _0x54c05f[_0x247301(0x417)] === 0x34))
                                        return _0x54c05f[_0x247301(0x64f)](),
                                        this['isFpsVisible'] = !this[_0x247301(0x784)],
                                        this['isFpsVisible'] && !this[_0x247301(0x58f)] && this[_0x247301(0x515)](),
                                        this[_0x247301(0xe7)](),
                                        this[_0x247301(0x691)](),
                                        this['updateToggleButton'](),
                                        ![];
                                }
                            }
                        }
                    }
                    , !![]);
                },
                'saveSettings'() {
                    var _0x2f9236 = _0x24dea7;
                    const _0x59c5b5 = this[_0x2f9236(0x784)] || this['isCpuVisible'];
                    localStorage[_0x2f9236(0x434)](_0x2f9236(0x384), _0x59c5b5);
                },
                'updateToggleButton'() {
                    var _0x548a57 = _0x24dea7;
                    const _0x1eb57d = document[_0x548a57(0x44f)]('performance-monitor-toggle');
                    _0x1eb57d && (_0x1eb57d[_0x548a57(0x274)] = this[_0x548a57(0x784)] || this[_0x548a57(0x3fd)]);
                },
                'toggle'(_0x92b2a3) {
                    var _0x47e110 = _0x24dea7;
                    typeof _0x92b2a3 !== _0x47e110(0x685) && (_0x92b2a3 = !this['isFpsVisible'] && !this[_0x47e110(0x3fd)]);
                    const _0x1f595d = this[_0x47e110(0x784)]
                      , _0x138cec = this[_0x47e110(0x3fd)];
                    this[_0x47e110(0x784)] = _0x92b2a3,
                    this[_0x47e110(0x3fd)] = _0x92b2a3,
                    this[_0x47e110(0xe7)](),
                    _0x92b2a3 ? (!_0x1f595d && this[_0x47e110(0x784)] && this[_0x47e110(0x515)](),
                    !_0x138cec && this['isCpuVisible'] && this[_0x47e110(0xd7)]()) : this[_0x47e110(0x42a)](),
                    this[_0x47e110(0x691)]();
                },
                'enable'(_0x15dc73) {
                    var _0x364f80 = _0x24dea7;
                    _0x15dc73 ? !this[_0x364f80(0x5d8)] ? this[_0x364f80(0x5dc)]() : this[_0x364f80(0x1cb)](!![]) : this[_0x364f80(0x1cb)](![]);
                }
            },
            $(_0x24dea7(0x74c))[_0x24dea7(0x418)](_0x24dea7(0x189) + _0x24dea7(0x12f) + _0x5393dc[_0x24dea7(0x6a6)] + _0x24dea7(0x5ab) + _0x24dea7(0x76c) + _0x5393dc[_0x24dea7(0x6a6)] + '\x27).then(()=>\x20alert(\x27Your\x20ID\x20' + _0x5393dc[_0x24dea7(0x6a6)] + _0x24dea7(0x125) + '<button\x20id=\x22btn_activate\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#4CAF50;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x20margin-left:\x2010px;\x22\x20onclick=\x22window.open(\x27https://t.me/wormateactivate/\x27,\x20\x27_blank\x27);\x22>Activate</button>' + '<button\x20id=\x22resetScript\x22\x20style=\x22width:\x20120px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#2196F3;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x20margin-left:\x2010px;\x22\x20onclick=\x22resetScript();\x22>Version\x20🔁</button>' + _0x24dea7(0x49d));
            var _0x5e31f0 = '';
            _0x50ac1f['e'] === _0x24dea7(0x73a) && (_0x5e31f0 = _0x24dea7(0x6ab) + _0x50ac1f[_0x24dea7(0x70f)][0x3] + _0x24dea7(0x59f),
            _0x456264[_0x24dea7(0x667)] = _0x50ac1f['sw'] == 0x1);
            _0xb52b4(_0x50ac1f[_0x24dea7(0x4fd)]),
            $(_0x24dea7(0x747))['html'](_0x24dea7(0x2b4) + _0x50ac1f[_0x24dea7(0x70f)][0x4] + _0x24dea7(0x2ee) + _0x50ac1f[_0x24dea7(0x70f)][0x5] + '\x22\x20id=\x22btn_in_t\x22\x20style=\x22display:none;\x22/>' + _0x5e31f0 + _0x24dea7(0x49d)),
            document[_0x24dea7(0x44f)](_0x24dea7(0x542))['addEventListener']('click', function() {
                var _0x25300e = _0x24dea7;
                let _0x2a0dac = document[_0x25300e(0x3e8)][_0x25300e(0x6a3)] || document['documentElement'][_0x25300e(0x3c5)] || document[_0x25300e(0x3e8)][_0x25300e(0x2cb)];
                if (_0x2a0dac && !_0x456264[_0x25300e(0x419)])
                    try {
                        _0x456264[_0x25300e(0x419)] = !![],
                        _0x2a0dac[_0x25300e(0x11d)](document[_0x25300e(0x3e8)]);
                    } catch (_0x2543bd) {}
                else
                    _0x456264[_0x25300e(0x419)] = ![],
                    document[_0x25300e(0x202)]();
            });
            _0x50ac1f['e'] === 'not_empty' && document['getElementById'](_0x24dea7(0x494))['addEventListener'](_0x24dea7(0x3db), function() {
                var _0x607ae8 = _0x24dea7;
                $(_0x607ae8(0x459))[_0x607ae8(0xfa)](_0x456264['pi']),
                $(_0x607ae8(0x6c2))[_0x607ae8(0xfa)](_0x456264['pn']),
                $('#port_id')[_0x607ae8(0xfa)]($(_0x607ae8(0x459))[_0x607ae8(0xfa)]()),
                $('#port_name')[_0x607ae8(0xfa)]($('#port_name_s')[_0x607ae8(0xfa)]()),
                document[_0x607ae8(0x44f)]('mm-action-play')['click']();
            });
            !window[_0x24dea7(0x275)] && (window[_0x24dea7(0x275)] = {
                'eat_animation': 0.0025,
                'smoothCamera': 0.5,
                'PortionSize': 0x2,
                'PortionAura': 1.2,
                'PortionTransparent': 0.8,
                'FoodTransparent': 0.3,
                'FoodSize': 0x2,
                'FoodShadow': 0x2,
                'zoomSpeed': 0.003,
                'soundEnabled': ![],
                'soundVolume': 0x32,
                'soundEffect': _0x24dea7(0x578)
            });
            try {
                const _0x5ae084 = JSON['parse'](localStorage['getItem'](_0x24dea7(0x524)));
                if (_0x5ae084)
                    for (const _0x3b48e7 in _0x5ae084) {
                        wftObjects['hasOwnProperty'](_0x3b48e7) && (wftObjects[_0x3b48e7] = _0x5ae084[_0x3b48e7]);
                    }
            } catch (_0x5c869d) {
                console[_0x24dea7(0x39e)](_0x24dea7(0x3d5), _0x5c869d);
            }
            function _0x15c13c() {
                var _0x420618 = _0x24dea7;
                try {
                    localStorage[_0x420618(0x434)](_0x420618(0x524), JSON[_0x420618(0x6b1)](wftObjects));
                } catch (_0xf2a380) {
                    console[_0x420618(0x39e)](_0x420618(0x51f), _0xf2a380);
                }
            }
            $(_0x24dea7(0x723))[_0x24dea7(0x5cc)](),
            $(_0x24dea7(0x650))['remove']();
            _0x456264[_0x24dea7(0x667)] ? $(_0x24dea7(0x2be) + _0x5393dc[_0x24dea7(0x6a6)] + _0x24dea7(0x50d))[_0x24dea7(0x645)](_0x24dea7(0x42d)) : $(_0x24dea7(0xe1) + _0x50ac1f[_0x24dea7(0x70f)][0x6] + _0x24dea7(0x382))[_0x24dea7(0x645)](_0x24dea7(0x42d));
            function _0x2c43f2() {
                var _0x1574a6 = _0x24dea7;
                const _0x59fca9 = _0x50ac1f['e'] === _0x1574a6(0x73a) || _0x366817;
                if (!_0x59fca9)
                    $('#modal_wft\x20.modal-content')['addClass']('wft-modal')['css']({
                        'max-width': _0x1574a6(0x6bd),
                        'width': _0x1574a6(0x6bd)
                    }),
                    $(_0x1574a6(0x6e8))[_0x1574a6(0x45a)](),
                    $('#modal_wft_body')[_0x1574a6(0x3b1)](_0x1574a6(0x626) + _0x5393dc['userId'] + _0x1574a6(0x746) + _0x5393dc[_0x1574a6(0x6a6)] + _0x1574a6(0x5b4) + _0x5393dc[_0x1574a6(0x6a6)] + '\x20copied!\x27));\x22>Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20الخط\x20الفاصل\x20الأول\x20فقط\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-top:\x201px\x20solid\x20#3a4061;\x20margin:\x2015px\x200;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20طريقة\x20تفعيل\x20الاشتراك\x20الرئيسية\x20-\x20رابط\x20الاتصال\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2010px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:\x20white;\x20margin:\x200\x200\x208px\x200;\x20font-size:\x2016px;\x22>Premium\x20Activation\x20-\x20تفعيل\x20الاشتراك\x20المميز</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://wormatefriendsturkey.com/contact\x22\x20target=\x22_blank\x22\x20style=\x22display:\x20block;\x20background-color:\x20#4CAF50;\x20color:\x20white;\x20padding:\x2012px;\x20text-decoration:\x20none;\x20border-radius:\x206px;\x20font-weight:\x20bold;\x20margin:\x2010px\x20auto;\x20width:\x2080%;\x20max-width:\x20280px;\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.2);\x20transition:\x20all\x200.3s;\x20border:\x202px\x20solid\x20#65d269;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x2016px;\x22>🔗\x20Click\x20Here\x20To\x20Activate</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x2014px;\x20margin-top:\x204px;\x22>اضغط\x20هنا\x20للتفعيل</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20صورة\x20البريميم\x20قبل\x20زر\x20الديسكورد\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x2015px\x20auto\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormx.store/images/cors-proxy.php?img=img/premium_features.png\x22\x20alt=\x22Premium\x20Features\x22\x20style=\x22max-width:\x20150px;\x20height:\x20auto;\x20border-radius:\x204px;\x20display:\x20block;\x20margin:\x200\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20خيار\x20الانضمام\x20للديسكورد\x20كخيار\x20ثانوي\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2010px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://discord.gg/NHWXgJpE\x22\x20target=\x22_blank\x22\x20style=\x22display:\x20inline-block;\x20background-color:\x20#5865F2;\x20color:\x20white;\x20padding:\x208px\x2012px;\x20text-decoration:\x20none;\x20border-radius:\x204px;\x20font-weight:\x20bold;\x20box-shadow:\x200\x202px\x205px\x20rgba(0,0,0,0.2);\x20transition:\x20background-color\x200.3s;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20style=\x22width:\x2016px;\x20height:\x2016px;\x20margin-right:\x206px;\x20display:\x20inline-block;\x20vertical-align:\x20middle;\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M20.317\x204.3698a19.7913\x2019.7913\x200\x2000-4.8851-1.5152.0741.0741\x200\x2000-.0785.0371c-.211.3753-.4447.8648-.6083\x201.2495-1.8447-.2762-3.68-.2762-5.4868\x200-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077\x200\x2000-.0785-.037\x2019.7363\x2019.7363\x200\x2000-4.8852\x201.515.0699.0699\x200\x2000-.0321.0277C.5334\x209.0458-.319\x2013.5799.0992\x2018.0578a.0824.0824\x200\x2000.0312.0561c2.0528\x201.5076\x204.0413\x202.4228\x205.9929\x203.0294a.0777.0777\x200\x2000.0842-.0276c.4616-.6304.8731-1.2952\x201.226-1.9942a.076.076\x200\x2000-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077\x200\x2001-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743\x200\x2001.0776-.0105c3.9278\x201.7933\x208.18\x201.7933\x2012.0614\x200a.0739.0739\x200\x2001.0785.0095c.1202.099.246.1981.3728.2924a.077.077\x200\x2001-.0066.1276\x2012.2986\x2012.2986\x200\x2001-1.873.8914a.0766.0766\x200\x2000-.0407.1067c.3604.698.7719\x201.3628\x201.225\x201.9932a.076.076\x200\x2000.0842.0286c1.961-.6067\x203.9495-1.5219\x206.0023-3.0294a.077.077\x200\x2000.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061\x200\x2000-.0312-.0286zM8.02\x2015.3312c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9555-2.4189\x202.157-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.9555\x202.4189-2.1569\x202.4189zm7.9748\x200c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9554-2.4189\x202.1569-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.946\x202.4189-2.1568\x202.4189Z\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Join\x20Our\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.8em;\x20margin-top:\x202px;\x22>انضم\x20إلى\x20مجتمعنا\x20على\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x208px;\x20color:\x20#aaa;\x20font-size:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20premium\x20features\x20by\x20joining\x20our\x20Discord\x20server\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.9em;\x20margin-top:\x202px;\x22>للحصول\x20على\x20الميزات\x20المميزة\x20عبر\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#ddd;\x20font-size:\x2014px;\x20margin:\x205px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crown\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x20Premium\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');
                else {
                    $(_0x1574a6(0x726))[_0x1574a6(0x504)]('wft-modal'),
                    $(_0x1574a6(0x6e8))[_0x1574a6(0x637)]();
                    const _0x2bdcd4 = $(_0x1574a6(0x616))['data'](_0x1574a6(0x3cd));
                    _0x2bdcd4 ? ($(_0x1574a6(0x5de))[_0x1574a6(0x45a)](),
                    $('#' + _0x2bdcd4 + '-tab')['show']()) : $('#game-settings-tab')[_0x1574a6(0x637)](),
                    !_0x456264[_0x1574a6(0x376)] && $('#mobile-tab-item')['hide']();
                }
            }
            window['openSettingsModal'] = function() {
                var _0x31f14b = _0x24dea7;
                _0x2c43f2(),
                $('#modal_backdrop')[_0x31f14b(0x637)](),
                $(_0x31f14b(0x650))[_0x31f14b(0x259)]({
                    'z-index': '9999',
                    'display': 'block'
                }),
                $(_0x31f14b(0x41b))['css'](_0x31f14b(0x385), 'hidden');
            }
            ,
            window['closeSettingsModal'] = function() {
                var _0x54c02b = _0x24dea7;
                $(_0x54c02b(0x650))[_0x54c02b(0x259)](_0x54c02b(0x4d4), _0x54c02b(0x15d)),
                $(_0x54c02b(0x31a))['hide'](),
                $('body')['css'](_0x54c02b(0x385), '');
            }
            ,
            _0x2c43f2();
            function _0x4f716a() {
                var _0x45388e = _0x24dea7;
                const _0xf562c6 = _0x50ac1f['e'] === _0x45388e(0x73a) || _0x366817;
                !_0xf562c6 ? ($(_0x45388e(0x461))[_0x45388e(0x45a)](),
                $('[id^=\x22div_\x22]')[_0x45388e(0x36d)](_0x45388e(0x3bc))[_0x45388e(0x45a)](),
                $(_0x45388e(0x31f))[_0x45388e(0x43e)](_0x45388e(0x2fb))[_0x45388e(0x45a)](),
                $(_0x45388e(0x5f5))['hide'](),
                $('.switch,\x20.slider-control,\x20.section-title')[_0x45388e(0x45a)](),
                $(_0x45388e(0x5df))[_0x45388e(0x45a)](),
                $(_0x45388e(0x270))['hide'](),
                $('#sound-laser-settings-tab,\x20#sound_effect_selector,\x20#monster_kill_selector,\x20#volume_slider')[_0x45388e(0x45a)](),
                $(_0x45388e(0x41a))[_0x45388e(0x45a)]()) : ($(_0x45388e(0x461))[_0x45388e(0x637)](),
                $('[id^=\x22div_\x22]')[_0x45388e(0x637)](),
                $(_0x45388e(0x31f))[_0x45388e(0x43e)](_0x45388e(0x2fb))['show'](),
                $(_0x45388e(0x5f5))[_0x45388e(0x637)](),
                $(_0x45388e(0x3fb))[_0x45388e(0x637)](),
                $(_0x45388e(0x5df))[_0x45388e(0x637)](),
                $(_0x45388e(0x270))['show'](),
                $(_0x45388e(0x1f4))[_0x45388e(0x637)](),
                $(_0x45388e(0x41a))[_0x45388e(0x637)](),
                !_0x456264[_0x45388e(0x376)] && $(_0x45388e(0x6ea))[_0x45388e(0x45a)]());
            }
            $(document)['ready'](function() {
                var _0x4da9c6 = _0x24dea7;
                setTimeout(function() {
                    _0x4f716a();
                }, 0x64),
                $(_0x4da9c6(0x3ef))[_0x4da9c6(0x3db)](function() {
                    var _0x5d3149 = _0x4da9c6
                      , _0x5b2cf6 = document[_0x5d3149(0x44f)]('id_customer');
                    _0x5b2cf6[_0x5d3149(0x36e)](),
                    _0x5b2cf6[_0x5d3149(0x5ed)](0x0, 0x1869f),
                    navigator[_0x5d3149(0x32b)][_0x5d3149(0x72c)](_0x5b2cf6[_0x5d3149(0x263)]),
                    $(_0x5d3149(0x39a))['html']('' + _0x50ac1f['ccg'][0xe] + '!'),
                    $(_0x5d3149(0x39a))[_0x5d3149(0x259)](_0x5d3149(0xf5), _0x5d3149(0x712)),
                    $(_0x5d3149(0x39a))[_0x5d3149(0x259)](_0x5d3149(0x2e5), '1'),
                    setTimeout(function() {
                        var _0x4aa25d = _0x5d3149;
                        $(_0x4aa25d(0x39a))['css']('visibility', _0x4aa25d(0x6f5)),
                        $(_0x4aa25d(0x39a))[_0x4aa25d(0x259)](_0x4aa25d(0x2e5), '0');
                    }, 0x5dc);
                }),
                document[_0x4da9c6(0x44f)]('resetScript')[_0x4da9c6(0xfe)]('click', async function() {
                    var _0x4047d3 = _0x4da9c6;
                    localStorage[_0x4047d3(0x49e)](),
                    sessionStorage[_0x4047d3(0x49e)]();
                    if (window[_0x4047d3(0x44c)] && indexedDB[_0x4047d3(0x590)]) {
                        let _0x3fc08a = await indexedDB[_0x4047d3(0x590)]();
                        for (let _0x4554c2 of _0x3fc08a) {
                            _0x4554c2[_0x4047d3(0x4b8)] && await indexedDB['deleteDatabase'](_0x4554c2[_0x4047d3(0x4b8)]);
                        }
                    }
                    window[_0x4047d3(0x2bb)] && console[_0x4047d3(0x4e5)]('Web\x20SQL\x20otomatik\x20olarak\x20JavaScript\x20ile\x20temizlenemez.');
                    document['cookie'][_0x4047d3(0xf9)](';')[_0x4047d3(0x151)](function(_0x198554) {
                        var _0x322339 = _0x4047d3;
                        document[_0x322339(0x490)] = _0x198554[_0x322339(0xe3)](/^ +/, '')[_0x322339(0xe3)](/=.*/, _0x322339(0x38d) + new Date(0x0)['toUTCString']() + _0x322339(0x28a));
                    });
                    if (_0x4047d3(0x6b4)in window) {
                        let _0x3e0778 = await caches[_0x4047d3(0x2f9)]();
                        for (let _0x560c64 of _0x3e0778) {
                            await caches[_0x4047d3(0xdf)](_0x560c64);
                        }
                    }
                    if (_0x4047d3(0x5c8)in navigator) {
                        let _0x484e0b = await navigator['serviceWorker'][_0x4047d3(0x139)]();
                        for (let _0x2e63b5 of _0x484e0b) {
                            await _0x2e63b5[_0x4047d3(0x5e7)]();
                        }
                    }
                    localStorage[_0x4047d3(0x369)](_0x4047d3(0x33b)),
                    location[_0x4047d3(0x6bb)]();
                }),
                $('#btn_copy')['hover'](function() {
                    var _0x55df30 = _0x4da9c6;
                    $(_0x55df30(0x39a))[_0x55df30(0x259)](_0x55df30(0xf5), _0x55df30(0x712)),
                    $(_0x55df30(0x39a))[_0x55df30(0x259)](_0x55df30(0x2e5), '1');
                }, function() {
                    var _0x54f825 = _0x4da9c6;
                    $('#myTooltip')[_0x54f825(0x2a7)]() !== _0x50ac1f[_0x54f825(0x70f)][0xe] + '!' && ($(_0x54f825(0x39a))['css'](_0x54f825(0xf5), _0x54f825(0x6f5)),
                    $(_0x54f825(0x39a))['css']('opacity', '0'));
                });
                if (window[_0x4da9c6(0x17e)])
                    return;
                window[_0x4da9c6(0x17e)] = !![],
                $('#op_wft')['off'](_0x4da9c6(0x3db))['on']('click', function(_0x4202e1) {
                    var _0xbc0032 = _0x4da9c6;
                    return _0x4202e1['preventDefault'](),
                    window[_0xbc0032(0x7ca)](),
                    ![];
                });
                var _0x599e57 = $(_0x4da9c6(0x650))
                  , _0x934e3b = _0x599e57['css'](_0x4da9c6(0x4d4));
                $(_0x4da9c6(0x41b))['append'](_0x599e57[_0x4da9c6(0x548)]());
                var _0x5c5763 = $(_0x4da9c6(0x10b))['css']({
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                    'width': _0x4da9c6(0x49a),
                    'height': _0x4da9c6(0x49a),
                    'background-color': _0x4da9c6(0x6ee),
                    'z-index': _0x4da9c6(0x133),
                    'display': _0x4da9c6(0x15d)
                });
                _0x599e57['before'](_0x5c5763);
                function _0xdffd7c() {
                    var _0x9b1e0c = _0x4da9c6;
                    $('#op_wft')[_0x9b1e0c(0x454)] && !$(_0x9b1e0c(0x723))[_0x9b1e0c(0x399)]('hasClickHandler') && $(_0x9b1e0c(0x723))['off']('click')['on'](_0x9b1e0c(0x3db), function(_0x7e6986) {
                        var _0xb40df = _0x9b1e0c;
                        return _0x7e6986[_0xb40df(0x64f)](),
                        window[_0xb40df(0x7ca)](),
                        ![];
                    })[_0x9b1e0c(0x399)]('hasClickHandler', !![]);
                }
                _0xdffd7c(),
                setInterval(_0xdffd7c, 0x1388),
                $(_0x4da9c6(0x1be))[_0x4da9c6(0x44e)]('click')['on'](_0x4da9c6(0x3db), function() {
                    window['closeSettingsModal']();
                }),
                _0x5c5763['on'](_0x4da9c6(0x3db), function() {
                    window['closeSettingsModal']();
                });
            });
            var _0x52fff0 = document[_0x24dea7(0x44f)](_0x24dea7(0x5f4))
              , _0xcbd142 = document[_0x24dea7(0x44f)](_0x24dea7(0x383))
              , _0x4ca3e3 = document[_0x24dea7(0x44f)](_0x24dea7(0x73b))
              , _0x43efe7 = document[_0x24dea7(0x44f)](_0x24dea7(0x662))
              , _0x2d03a8 = document['getElementById'](_0x24dea7(0x57d))
              , _0x1901f7 = document[_0x24dea7(0x44f)]('div_sm')
              , _0x7eb7c5 = document[_0x24dea7(0x44f)](_0x24dea7(0x4b2))
              , _0x2b49fd = document[_0x24dea7(0x44f)](_0x24dea7(0x4aa))
              , _0xd0783e = document['getElementById'](_0x24dea7(0x387))
              , _0x126b08 = document[_0x24dea7(0x44f)](_0x24dea7(0x77d))
              , _0x421fd6 = document['getElementById'](_0x24dea7(0x19f))
              , _0x38a6f5 = [{
                'name': _0x24dea7(0x686),
                'val': 'vn'
            }, {
                'name': _0x24dea7(0x4ca),
                'val': 'th'
            }, {
                'name': 'Cambodia',
                'val': 'kh'
            }, {
                'name': _0x24dea7(0x530),
                'val': 'id'
            }, {
                'name': _0x24dea7(0x518),
                'val': 'sg'
            }, {
                'name': 'Japan',
                'val': 'jp'
            }, {
                'name': 'Mexico',
                'val': 'mx'
            }, {
                'name': _0x24dea7(0x40f),
                'val': 'br'
            }, {
                'name': _0x24dea7(0x53e),
                'val': 'ca'
            }, {
                'name': _0x24dea7(0x559),
                'val': 'de'
            }, {
                'name': _0x24dea7(0x655),
                'val': 'fr'
            }, {
                'name': _0x24dea7(0x575),
                'val': 'gb'
            }, {
                'name': _0x24dea7(0x5f7),
                'val': 'au'
            }, {
                'name': _0x24dea7(0x400),
                'val': 'us'
            }, {
                'name': _0x24dea7(0x15a),
                'val': 'pt'
            }, {
                'name': _0x24dea7(0x28c),
                'val': 'tr'
            }, {
                'name': _0x50ac1f[_0x24dea7(0x70f)][0x24],
                'val': 'iq'
            }];
            let _0x1e1839 = document[_0x24dea7(0x44f)](_0x24dea7(0x70e));
            if (_0x1e1839) {
                for (_0x4aa0bb = 0x0; _0x4aa0bb < _0x38a6f5[_0x24dea7(0x454)]; _0x4aa0bb++) {
                    let _0x116d76 = document[_0x24dea7(0x5d0)](_0x24dea7(0x60c));
                    _0x116d76['value'] = _0x38a6f5[_0x4aa0bb][_0x24dea7(0xfa)],
                    _0x116d76[_0x24dea7(0x2b8)] = _0x38a6f5[_0x4aa0bb][_0x24dea7(0x4b8)],
                    _0x1e1839[_0x24dea7(0x16a)](_0x116d76);
                }
                _0x391bb6 && (_0x1e1839[_0x24dea7(0x263)] = _0x391bb6),
                _0x1e1839[_0x24dea7(0x2f1)] = function() {
                    var _0x228948 = _0x24dea7;
                    let _0x59daad = _0x1e1839[_0x228948(0x263)];
                    _0x391bb6 = _0x59daad,
                    localStorage['setItem'](_0x228948(0x351), _0x59daad);
                    var _0x49597e = {
                        'id_wormate': _0x5393dc[_0x228948(0x6a6)],
                        'country': _0x59daad
                    };
                    fetch(_0x228948(0x5c0), {
                        'headers': {
                            'Content-Type': _0x228948(0x284)
                        },
                        'method': _0x228948(0x3aa),
                        'body': JSON['stringify'](_0x49597e)
                    }),
                    localStorage[_0x228948(0x369)]('wftsw'),
                    window[_0x228948(0x21a)][_0x228948(0x6bb)]();
                }
                ;
            }
            var _0x366817 = ![];
            if (_0x50ac1f['cm'] === '' || _0x50ac1f['cm'] === undefined)
                ;
            else {
                var _0x40f852 = document[_0x24dea7(0x44f)](_0x24dea7(0x390))
                  , _0x18a0fd = document['getElementById']('mm-action-play')
                  , _0x3c80dc = document[_0x24dea7(0x44f)](_0x24dea7(0x634));
                _0x40f852 && (_0x40f852[_0x24dea7(0x3a7)][_0x24dea7(0x4d4)] = _0x24dea7(0x20f),
                _0x40f852[_0x24dea7(0x5ea)] = function() {
                    var _0x5bd8ca = _0x24dea7;
                    _0x3c80dc[_0x5bd8ca(0x263)] = _0x50ac1f['cm'],
                    _0x18a0fd[_0x5bd8ca(0x3db)]();
                }
                ,
                _0x366817 = !![]);
            }
            if (_0x50ac1f['e'] === _0x24dea7(0x72f))
                ;
            else {
                _0x456264['h'] = _0x50ac1f['z'] == 'b',
                _0x456264['hz'] = _0x50ac1f['z'] == 'c';
                if (_0x50ac1f['e'] === _0x24dea7(0x73a) || _0x366817) {
                    var _0x43d79f = ooo['Xg']['Kf']['Wg']['Ah'];
                    _0x52fff0 && (_0x52fff0['style'][_0x24dea7(0x4d4)] = _0x24dea7(0x20f));
                    _0xcbd142 && (_0xcbd142[_0x24dea7(0x3a7)][_0x24dea7(0x4d4)] = _0x24dea7(0x177));
                    $(_0x24dea7(0x5fa))[_0x24dea7(0x458)](_0x24dea7(0x274), _0x456264['flx']),
                    $(_0x24dea7(0x5fa))[_0x24dea7(0x529)](function() {
                        var _0xedc45e = _0x24dea7;
                        _0x456264['flx'] = $(this)[_0xedc45e(0x458)]('checked'),
                        localStorage['setItem'](_0xedc45e(0x4ab), JSON[_0xedc45e(0x6b1)](_0x456264));
                    }),
                    $('#wftspeed')[_0x24dea7(0x458)]('checked', !![]),
                    $('#wftspeed')[_0x24dea7(0x529)](function() {
                        var _0x491752 = _0x24dea7;
                        _0x456264['vp'] = $(this)[_0x491752(0x458)]('checked'),
                        localStorage[_0x491752(0x434)](_0x491752(0x4ab), JSON[_0x491752(0x6b1)](_0x456264));
                    }),
                    $(_0x24dea7(0x3c7))[_0x24dea7(0x458)](_0x24dea7(0x274), _0x456264['cs']),
                    $(_0x24dea7(0x3c7))['change'](function() {
                        var _0x55231b = _0x24dea7;
                        _0x456264['cs'] = $(this)[_0x55231b(0x458)](_0x55231b(0x274)),
                        localStorage[_0x55231b(0x434)]('SaveGamewft', JSON['stringify'](_0x456264));
                    });
                    _0x456264[_0x24dea7(0x376)] ? (_0x2d03a8 && (_0x2d03a8[_0x24dea7(0x3a7)][_0x24dea7(0x4d4)] = _0x24dea7(0x15d)),
                    _0x456264['sc'] = 0x0,
                    _0x456264['wi'] = 0x0) : (_0x2d03a8 && (_0x2d03a8[_0x24dea7(0x3a7)][_0x24dea7(0x4d4)] = _0x24dea7(0x177)),
                    _0x7eb7c5 && (_0x7eb7c5[_0x24dea7(0x263)] = _0x456264['sc'],
                    _0x7eb7c5[_0x24dea7(0x2f1)] = function() {
                        var _0x2e725b = _0x24dea7;
                        _0x456264['sc'] = parseInt(_0x7eb7c5[_0x2e725b(0x263)]),
                        _0x456264['sc'] == 0x1 && (_0x456264['wi'] = screen[_0x2e725b(0x122)] / (screen[_0x2e725b(0x598)] * 0x2)),
                        _0x456264['sc'] == 0x2 && (_0x456264['wi'] = 0x0),
                        localStorage[_0x2e725b(0x434)](_0x2e725b(0x4ab), JSON[_0x2e725b(0x6b1)](_0x456264));
                    }
                    ));
                    _0x1901f7 && (_0x1901f7[_0x24dea7(0x3a7)][_0x24dea7(0x4d4)] = _0x24dea7(0x177));
                    sel_sm && (sel_sm[_0x24dea7(0x263)] = _0x456264['sm'],
                    sel_sm['onchange'] = function() {
                        var _0x175e3b = _0x24dea7;
                        _0x456264['sm'] = parseInt(sel_sm['value']),
                        localStorage['setItem']('SaveGamewft', JSON[_0x175e3b(0x6b1)](_0x456264));
                    }
                    );
                    _0x2b49fd && (_0x2b49fd['style'][_0x24dea7(0x4d4)] = _0x24dea7(0x177));
                    _0xd0783e && (_0xd0783e[_0x24dea7(0x263)] = _0x456264['to'],
                    _0xd0783e[_0x24dea7(0x2f1)] = function() {
                        var _0x1dca72 = _0x24dea7;
                        _0x456264['to'] = parseInt(_0xd0783e[_0x1dca72(0x263)]),
                        localStorage[_0x1dca72(0x434)](_0x1dca72(0x4ab), JSON['stringify'](_0x456264));
                    }
                    );
                    if (_0x1e1839 && _0x1e1839[_0x24dea7(0x263)] == 'iq' && _0x126b08) {
                        _0x126b08['style'][_0x24dea7(0x4d4)] = _0x24dea7(0x177);
                        var _0x4a6df5 = $('#wftiq');
                        _0x4a6df5[_0x24dea7(0x458)](_0x24dea7(0x274), _0x456264['iq']),
                        _0x4a6df5[_0x24dea7(0x529)](function() {
                            var _0x5c92ff = _0x24dea7;
                            this[_0x5c92ff(0x274)] ? _0x456264['iq'] = !![] : _0x456264['iq'] = ![],
                            localStorage[_0x5c92ff(0x434)](_0x5c92ff(0x4ab), JSON[_0x5c92ff(0x6b1)](_0x456264));
                        });
                    } else
                        _0x456264['iq'] = ![],
                        _0x126b08 && (_0x126b08[_0x24dea7(0x3a7)][_0x24dea7(0x4d4)] = _0x24dea7(0x15d));
                    const _0x5bb6e7 = localStorage[_0x24dea7(0x3af)](_0x24dea7(0x384)) === _0x24dea7(0x295);
                    $('#performance-monitor-toggle')['prop']('checked', _0x5bb6e7),
                    $(_0x24dea7(0x342))[_0x24dea7(0x529)](function() {
                        var _0x118910 = _0x24dea7;
                        const _0x678eb7 = $(this)[_0x118910(0x458)]('checked');
                        localStorage[_0x118910(0x434)](_0x118910(0x384), _0x678eb7),
                        window[_0x118910(0x4cd)] && window[_0x118910(0x4cd)][_0x118910(0x1cb)](_0x678eb7);
                    });
                    window[_0x24dea7(0x4cd)] && window[_0x24dea7(0x4cd)][_0x24dea7(0x5dc)]();
                    const _0x81ccd5 = localStorage['getItem'](_0x24dea7(0x7cd)) === 'true' || localStorage['getItem'](_0x24dea7(0x7cd)) === null;
                    $(_0x24dea7(0x74b))[_0x24dea7(0x458)](_0x24dea7(0x274), _0x81ccd5),
                    window[_0x24dea7(0x3d3)] = _0x81ccd5,
                    $(_0x24dea7(0x74b))[_0x24dea7(0x529)](function() {
                        var _0x2afce7 = _0x24dea7;
                        window[_0x2afce7(0x3d3)] = $(this)[_0x2afce7(0x458)](_0x2afce7(0x274)),
                        localStorage[_0x2afce7(0x434)](_0x2afce7(0x7cd), window[_0x2afce7(0x3d3)][_0x2afce7(0xef)]());
                    }),
                    _0x456264[_0x24dea7(0x1bd)] = _0x50ac1f[_0x24dea7(0x391)];
                    _0x421fd6 && (_0x421fd6[_0x24dea7(0x3a7)][_0x24dea7(0x4d4)] = _0x24dea7(0x20f));
                    _0x344dd6(_0x456264, oeo),
                    _0x36a055['on'] = !![];
                    _0x3891b7() ? (_0x456264['tt'] = _0x50ac1f['tt'] == 0x1,
                    _0x43d79f[_0x24dea7(0x3fa)][_0x24dea7(0x712)] = _0x36a055['on'] && _0x456264['mo'] == 0x1,
                    _0x43d79f[_0x24dea7(0x58c)][_0x24dea7(0x712)] = _0x36a055['on'] && _0x456264['mo'] == 0x2,
                    _0x43d79f[_0x24dea7(0x618)]['visible'] = _0x36a055['on'] && _0x456264['mo'] == 0x3,
                    _0x43d79f[_0x24dea7(0x338)]['visible'] = _0x36a055['on'] && (_0x456264['mo'] == 0x4 || _0x456264['mo'] == 0x5 || _0x456264['mo'] == 0x6)) : _0x456264['tt'] = ![];
                    var _0x54f174 = [{
                        'nome': _0x24dea7(0x486),
                        'uri': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x4e4)
                    }, {
                        'nome': _0x24dea7(0x23a),
                        'uri': _0x456264[_0x24dea7(0x595)] + '/get_store.phpitem=bg_sky__6.png'
                    }, {
                        'nome': _0x24dea7(0x704),
                        'uri': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0xec)
                    }, {
                        'nome': _0x24dea7(0x532),
                        'uri': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x360)
                    }, {
                        'nome': _0x24dea7(0x325),
                        'uri': _0x456264[_0x24dea7(0x595)] + '/get_store.phpitem=bg_sky_10.png'
                    }, {
                        'nome': _0x24dea7(0x123),
                        'uri': _0x456264[_0x24dea7(0x595)] + '/get_store.phpitem=bg_sky_9.png'
                    }, {
                        'nome': 'Nebula',
                        'uri': _0x456264['s_l'] + _0x24dea7(0x54f)
                    }, {
                        'nome': 'Bluemist',
                        'uri': _0x456264['s_l'] + '/get_store.phpitem=bg_sky__1.png'
                    }, {
                        'nome': _0x24dea7(0x352),
                        'uri': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x715)
                    }, {
                        'nome': 'Cloudscape',
                        'uri': _0x456264[_0x24dea7(0x595)] + '/get_store.phpitem=bg_sky__5.png'
                    }, {
                        'nome': 'Desert',
                        'uri': _0x456264['s_l'] + _0x24dea7(0x146)
                    }, {
                        'nome': 'Crystalblue\x202',
                        'uri': _0x456264['s_l'] + _0x24dea7(0x621)
                    }];
                    _0x456264[_0x24dea7(0x6ae)] = _0x50ac1f['programmer'];
                    let _0x32f358 = $(_0x24dea7(0x25b));
                    _0x32f358[_0x24dea7(0x454)] > 0x0 && (_0x32f358[_0x24dea7(0x78c)](),
                    _0x54f174['forEach'](function(_0x420212) {
                        var _0x5a8299 = _0x24dea7;
                        const _0x2bb1d5 = _0x456264[_0x5a8299(0x2d0)] === _0x420212[_0x5a8299(0x13c)]
                          , _0x44be18 = $(_0x5a8299(0x4ae) + (_0x2bb1d5 ? _0x5a8299(0x3d7) : '') + '\x22\x20data-bg=\x22' + _0x420212[_0x5a8299(0x13c)] + _0x5a8299(0x60a) + _0x420212[_0x5a8299(0x292)] + _0x5a8299(0x764) + (_0x2bb1d5 ? _0x5a8299(0x54c) : '#333333') + _0x5a8299(0x778) + _0x420212[_0x5a8299(0x13c)] + _0x5a8299(0x593) + _0x420212[_0x5a8299(0x292)] + _0x5a8299(0xd2) + _0x420212[_0x5a8299(0x292)] + _0x5a8299(0x6c0));
                        _0x44be18[_0x5a8299(0x3db)](function() {
                            var _0xc847d7 = _0x5a8299;
                            $(_0xc847d7(0x478))[_0xc847d7(0x504)](_0xc847d7(0x3d7))[_0xc847d7(0x259)](_0xc847d7(0x249), '#333333'),
                            $(this)['addClass'](_0xc847d7(0x3d7))[_0xc847d7(0x259)](_0xc847d7(0x249), '#ffcc00');
                            const _0x4a93a7 = $(this)[_0xc847d7(0x399)]('bg')
                              , _0x28414b = $(this)[_0xc847d7(0x399)](_0xc847d7(0x433));
                            _0x456264[_0xc847d7(0x2d0)] = _0x4a93a7,
                            localStorage[_0xc847d7(0x434)]('SaveGamewft', JSON[_0xc847d7(0x6b1)](_0x456264)),
                            ooo && ooo['ef'] && ooo['ef'][_0xc847d7(0x6ed)] && ooo['ef']['fn_o'] && (ooo['ef'][_0xc847d7(0x6ed)] = new PIXI[(_0xc847d7(0x61d))](ooo['ef']['fn_o'](_0x4a93a7))),
                            $(_0xc847d7(0x3b0))[_0xc847d7(0xfa)](_0x4a93a7);
                        }),
                        _0x32f358['append'](_0x44be18);
                    }));
                    let _0x127a33 = document['getElementById'](_0x24dea7(0x162));
                    if (_0x127a33) {
                        for (_0x4aa0bb = 0x0; _0x4aa0bb < _0x54f174[_0x24dea7(0x454)]; _0x4aa0bb++) {
                            let _0x3187f0 = document[_0x24dea7(0x5d0)]('option');
                            _0x3187f0[_0x24dea7(0x263)] = _0x54f174[_0x4aa0bb][_0x24dea7(0x13c)],
                            _0x3187f0[_0x24dea7(0x480)](_0x24dea7(0x1d9), _0x54f174[_0x4aa0bb][_0x24dea7(0x13c)]),
                            _0x3187f0[_0x24dea7(0x480)](_0x24dea7(0x44b), _0x54f174[_0x4aa0bb][_0x24dea7(0x292)]),
                            _0x3187f0[_0x24dea7(0x2b8)] = _0x54f174[_0x4aa0bb][_0x24dea7(0x292)],
                            _0x127a33[_0x24dea7(0x16a)](_0x3187f0);
                        }
                        _0x456264['c_3'] = _0x50ac1f[_0x24dea7(0x5d7)],
                        _0x127a33['value'] = _0x456264['background'] || _0x54f174[0x0][_0x24dea7(0x13c)],
                        $['fn'][_0x24dea7(0x62a)] && $(_0x24dea7(0x3b0))[_0x24dea7(0x62a)]({
                            'onSelected': function() {
                                var _0x2a3a16 = _0x24dea7;
                                _0x456264['background'] = $('#backgroundArena-value')[_0x2a3a16(0xfa)](),
                                localStorage[_0x2a3a16(0x434)](_0x2a3a16(0x4ab), JSON[_0x2a3a16(0x6b1)](_0x456264));
                                ooo && ooo['ef'] && ooo['ef']['F_bg'] && ooo['ef'][_0x2a3a16(0x27d)] && (ooo['ef'][_0x2a3a16(0x6ed)] = new PIXI['Texture'](ooo['ef']['fn_o'](_0x456264[_0x2a3a16(0x2d0)])));
                                const _0x2f6809 = _0x456264[_0x2a3a16(0x2d0)];
                                $(_0x2a3a16(0x478))['removeClass'](_0x2a3a16(0x3d7))['css'](_0x2a3a16(0x249), '#333333'),
                                $(_0x2a3a16(0x441) + _0x2f6809 + '\x22]')[_0x2a3a16(0x46e)]('active')[_0x2a3a16(0x259)](_0x2a3a16(0x249), _0x2a3a16(0x54c));
                            }
                        });
                    }
                    const _0x2df7eb = [{
                        'name': _0x24dea7(0x381),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x479)
                    }, {
                        'name': _0x24dea7(0x4ea),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x25f)
                    }, {
                        'name': _0x24dea7(0x11c),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x42f)
                    }, {
                        'name': _0x24dea7(0x75a),
                        'url': _0x456264['s_l'] + _0x24dea7(0x66f)
                    }, {
                        'name': _0x24dea7(0x220),
                        'url': _0x456264[_0x24dea7(0x595)] + '/images/cors-proxy.phpimg=cursors/5.png'
                    }, {
                        'name': _0x24dea7(0x362),
                        'url': _0x456264['s_l'] + _0x24dea7(0x6ad)
                    }, {
                        'name': _0x24dea7(0x185),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x6bc)
                    }, {
                        'name': _0x24dea7(0x413),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x6ce)
                    }, {
                        'name': _0x24dea7(0x3f8),
                        'url': _0x456264['s_l'] + '/images/cors-proxy.phpimg=cursors/9.png'
                    }, {
                        'name': _0x24dea7(0x666),
                        'url': _0x456264[_0x24dea7(0x595)] + '/images/cors-proxy.phpimg=cursors/10.png'
                    }, {
                        'name': _0x24dea7(0x73c),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x797)
                    }, {
                        'name': _0x24dea7(0x61a),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x495)
                    }, {
                        'name': _0x24dea7(0x53b),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x349)
                    }, {
                        'name': 'Pink\x20Dolphin\x20Cursor',
                        'url': _0x456264['s_l'] + _0x24dea7(0x468)
                    }, {
                        'name': 'Mushroom\x20Cursor',
                        'url': _0x456264['s_l'] + '/images/cors-proxy.phpimg=cursors/15.png'
                    }, {
                        'name': _0x24dea7(0x3ad),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x176)
                    }, {
                        'name': 'Yellow\x20Cheese\x20Cursor',
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x118)
                    }, {
                        'name': _0x24dea7(0x53a),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x23e)
                    }, {
                        'name': 'White\x20Glove\x20Cursor',
                        'url': _0x456264['s_l'] + '/images/cors-proxy.phpimg=cursors/19.png'
                    }, {
                        'name': 'Red\x20Pepper\x20Cursor',
                        'url': _0x456264[_0x24dea7(0x595)] + '/images/cors-proxy.phpimg=cursors/20.png'
                    }, {
                        'name': _0x24dea7(0x7ce),
                        'url': _0x456264[_0x24dea7(0x595)] + '/images/cors-proxy.phpimg=cursors/21.png'
                    }, {
                        'name': _0x24dea7(0x48b),
                        'url': _0x456264['s_l'] + _0x24dea7(0x252)
                    }, {
                        'name': _0x24dea7(0x20e),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x669)
                    }, {
                        'name': _0x24dea7(0x770),
                        'url': _0x456264['s_l'] + _0x24dea7(0x3d8)
                    }, {
                        'name': _0x24dea7(0x4db),
                        'url': _0x456264['s_l'] + _0x24dea7(0x661)
                    }, {
                        'name': _0x24dea7(0x782),
                        'url': _0x456264['s_l'] + '/images/cors-proxy.phpimg=cursors/26.png'
                    }, {
                        'name': _0x24dea7(0x29a),
                        'url': _0x456264[_0x24dea7(0x595)] + _0x24dea7(0x6de)
                    }, {
                        'name': 'Heart\x20on\x20Stick\x20Cursor',
                        'url': _0x456264[_0x24dea7(0x595)] + '/images/cors-proxy.phpimg=cursors/28.png'
                    }]
                      , _0xb485b1 = localStorage[_0x24dea7(0x3af)](_0x24dea7(0x25e));
                    if (_0xb485b1) {
                        _0x4b764d(_0xb485b1);
                        const _0x56b3be = _0x2df7eb[_0x24dea7(0x305)](_0x385ac1 => _0x385ac1['url'] === _0xb485b1);
                        _0x56b3be && $(_0x24dea7(0x55f))['text'](_0x24dea7(0x28f) + _0x56b3be['name']);
                    }
                    const _0x43cbc1 = $(_0x24dea7(0x3f6));
                    _0x43cbc1[_0x24dea7(0x454)] > 0x0 && (_0x43cbc1[_0x24dea7(0x78c)](),
                    _0x2df7eb[_0x24dea7(0x151)](function(_0x3fb6d6) {
                        var _0x596cff = _0x24dea7;
                        const _0x30b269 = _0xb485b1 === _0x3fb6d6[_0x596cff(0x1bb)]
                          , _0x53f311 = $('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-item\x20' + (_0x30b269 ? 'active' : '') + _0x596cff(0x4bc) + _0x3fb6d6[_0x596cff(0x1bb)] + '\x22\x20title=\x22' + _0x3fb6d6[_0x596cff(0x4b8)] + _0x596cff(0x34b) + (_0x30b269 ? _0x596cff(0x54c) : '#333333') + _0x596cff(0x790) + _0x3fb6d6[_0x596cff(0x1bb)] + _0x596cff(0x593) + _0x3fb6d6[_0x596cff(0x4b8)] + _0x596cff(0x4c3));
                        _0x53f311['click'](function() {
                            var _0x4eb4f0 = _0x596cff;
                            $('.cursor-item')['removeClass']('active')[_0x4eb4f0(0x259)](_0x4eb4f0(0x249), '#333333'),
                            $(this)[_0x4eb4f0(0x46e)](_0x4eb4f0(0x3d7))[_0x4eb4f0(0x259)](_0x4eb4f0(0x249), _0x4eb4f0(0x54c));
                            const _0x3d5d2e = $(this)[_0x4eb4f0(0x399)](_0x4eb4f0(0x33f));
                            localStorage[_0x4eb4f0(0x434)]('selectedCursor', _0x3d5d2e),
                            _0x4b764d(_0x3d5d2e),
                            $(_0x4eb4f0(0x55f))[_0x4eb4f0(0x2a7)](_0x4eb4f0(0x28f) + _0x3fb6d6[_0x4eb4f0(0x4b8)]);
                        }),
                        _0x43cbc1[_0x596cff(0x418)](_0x53f311);
                    }));
                    $('#default-cursor-btn')['click'](function() {
                        var _0x3d3da6 = _0x24dea7;
                        localStorage[_0x3d3da6(0x369)]('selectedCursor'),
                        $(_0x3d3da6(0x29b))[_0x3d3da6(0x259)]('cursor', 'default'),
                        $(_0x3d3da6(0x55f))[_0x3d3da6(0x2a7)](_0x3d3da6(0x1ec)),
                        $(_0x3d3da6(0x246))['removeClass']('active')[_0x3d3da6(0x259)](_0x3d3da6(0x249), _0x3d3da6(0x5bd));
                    });
                    function _0x4b764d(_0xcbef1) {
                        var _0x230723 = _0x24dea7;
                        $(_0x230723(0x29b))['css']({
                            'cursor': 'url(' + _0xcbef1 + _0x230723(0x772)
                        });
                    }
                    _0x456264[_0x24dea7(0x5fe)] = _0x50ac1f[_0x24dea7(0x137)];
                    _0x456264['hz'] && (_0x5c12d0[_0x24dea7(0x117)] = function(_0x4554d4) {
                        var _0xef7f99 = _0x24dea7;
                        !_0x456264[_0xef7f99(0x293)] && (_0x456264['z'] >= 0.5 && _0x456264['z'] <= 0x19 || _0x456264['z'] < 0.5 && _0x4554d4[_0xef7f99(0x725)] < 0x0 || _0x456264['z'] > 0x19 && _0x4554d4[_0xef7f99(0x725)] > 0x0) && (_0x456264['z'] = _0x456264['z'] + _0x4554d4[_0xef7f99(0x725)] * -wftObjects[_0xef7f99(0x36c)],
                        _0x456264['z'] < 0.5 && (_0x456264['z'] = 0.5));
                    }
                    );
                    if (_0x456264[_0x24dea7(0x376)]) {
                        $(_0x24dea7(0x646))[_0x24dea7(0x3b1)](_0x50ac1f['mb']);
                        var _0x536118 = document['getElementById']('joystick_checked')
                          , _0x4c1c12 = document['getElementById']('joystick_color')
                          , _0x417947 = document[_0x24dea7(0x44f)]('joystick_mode')
                          , _0x3bb2aa = document[_0x24dea7(0x44f)](_0x24dea7(0x344))
                          , _0x57fd7b = document[_0x24dea7(0x44f)](_0x24dea7(0x5b0))
                          , _0x201f13 = document[_0x24dea7(0x44f)](_0x24dea7(0x635));
                        _0x536118 && (_0x536118[_0x24dea7(0x2f1)] = function() {
                            _0xa668f8(_0x536118),
                            _0x2ee544(_0x4c1c12),
                            _0x4e4225(_0x417947),
                            _0x22dd30(_0x3bb2aa),
                            _0x586cff(_0x201f13),
                            _0x355d58(_0x57fd7b);
                        }
                        ),
                        _0x4c1c12 && (_0x4c1c12['onchange'] = function() {
                            _0xa668f8(_0x536118),
                            _0x2ee544(_0x4c1c12),
                            _0x4e4225(_0x417947),
                            _0x22dd30(_0x3bb2aa),
                            _0x586cff(_0x201f13),
                            _0x355d58(_0x57fd7b);
                        }
                        ),
                        _0x417947 && (_0x417947[_0x24dea7(0x2f1)] = function() {
                            _0xa668f8(_0x536118),
                            _0x2ee544(_0x4c1c12),
                            _0x4e4225(_0x417947),
                            _0x22dd30(_0x3bb2aa),
                            _0x586cff(_0x201f13),
                            _0x355d58(_0x57fd7b);
                        }
                        ),
                        _0x3bb2aa && (_0x3bb2aa[_0x24dea7(0x2f1)] = function() {
                            _0xa668f8(_0x536118),
                            _0x2ee544(_0x4c1c12),
                            _0x4e4225(_0x417947),
                            _0x22dd30(_0x3bb2aa),
                            _0x586cff(_0x201f13),
                            _0x355d58(_0x57fd7b);
                        }
                        ),
                        _0x57fd7b && (_0x57fd7b[_0x24dea7(0x2f1)] = function() {
                            _0xa668f8(_0x536118),
                            _0x2ee544(_0x4c1c12),
                            _0x4e4225(_0x417947),
                            _0x22dd30(_0x3bb2aa),
                            _0x586cff(_0x201f13),
                            _0x355d58(_0x57fd7b);
                        }
                        ),
                        _0x201f13 && (_0x201f13[_0x24dea7(0x2f1)] = function() {
                            _0xa668f8(_0x536118),
                            _0x2ee544(_0x4c1c12),
                            _0x4e4225(_0x417947),
                            _0x22dd30(_0x3bb2aa),
                            _0x586cff(_0x201f13),
                            _0x355d58(_0x57fd7b);
                        }
                        ),
                        _0x456264[_0x24dea7(0x4c0)] ? ($(_0x24dea7(0x1dc))[_0x24dea7(0xfa)](_0x456264[_0x24dea7(0x4c0)]['checked']),
                        $(_0x24dea7(0x3e3))['val'](_0x456264[_0x24dea7(0x4c0)][_0x24dea7(0x3ea)]),
                        $(_0x24dea7(0x33d))[_0x24dea7(0xfa)](_0x456264['joystick']['mode']),
                        $(_0x24dea7(0x27a))[_0x24dea7(0xfa)](_0x456264[_0x24dea7(0x4c0)][_0x24dea7(0x386)]),
                        $('#joystick_size')[_0x24dea7(0xfa)](_0x456264[_0x24dea7(0x4c0)][_0x24dea7(0x124)]),
                        $('#joystick_pxy')[_0x24dea7(0xfa)](_0x456264[_0x24dea7(0x4c0)][_0x24dea7(0x640)])) : ($(_0x24dea7(0x1dc))[_0x24dea7(0xfa)](!![]),
                        $(_0x24dea7(0x3e3))[_0x24dea7(0xfa)]('red'),
                        $(_0x24dea7(0x33d))[_0x24dea7(0xfa)](_0x24dea7(0x6d7)),
                        $(_0x24dea7(0x27a))[_0x24dea7(0xfa)]('L'),
                        $(_0x24dea7(0x145))[_0x24dea7(0xfa)](0x64),
                        $('#joystick_pxy')[_0x24dea7(0xfa)](0x64)),
                        typeof _0xa668f8 === _0x24dea7(0x61f) && _0x536118 && _0xa668f8(_0x536118),
                        typeof _0x2ee544 === _0x24dea7(0x61f) && _0x4c1c12 && _0x2ee544(_0x4c1c12),
                        typeof _0x4e4225 === _0x24dea7(0x61f) && _0x417947 && _0x4e4225(_0x417947),
                        typeof _0x22dd30 === 'function' && _0x3bb2aa && _0x22dd30(_0x3bb2aa),
                        typeof _0x586cff === _0x24dea7(0x61f) && _0x201f13 && _0x586cff(_0x201f13),
                        typeof _0x355d58 === _0x24dea7(0x61f) && _0x57fd7b && _0x355d58(_0x57fd7b);
                    }
                    function _0x355d58(_0xf13a55) {
                        var _0x406423 = _0x24dea7;
                        !_0x456264[_0x406423(0x4c0)] && (_0x456264[_0x406423(0x4c0)] = {}),
                        _0x456264[_0x406423(0x4c0)][_0x406423(0x124)] = parseInt(_0xf13a55[_0x406423(0x263)]),
                        $(_0x406423(0x5a8))[_0x406423(0x2a7)](_0xf13a55['value']),
                        localStorage[_0x406423(0x434)](_0x406423(0x4ab), JSON[_0x406423(0x6b1)](_0x456264));
                    }
                    function _0x586cff(_0x24b190) {
                        var _0xff4989 = _0x24dea7;
                        !_0x456264[_0xff4989(0x4c0)] && (_0x456264['joystick'] = {}),
                        _0x456264[_0xff4989(0x4c0)][_0xff4989(0x640)] = parseInt(_0x24b190[_0xff4989(0x263)]),
                        $(_0xff4989(0x54a))[_0xff4989(0x2a7)](_0x24b190['value']),
                        localStorage['setItem'](_0xff4989(0x4ab), JSON[_0xff4989(0x6b1)](_0x456264));
                    }
                    typeof _0x2223f2 !== _0x24dea7(0x111) && typeof _0x475ab5 !== _0x24dea7(0x111) && typeof _0x2ca05e !== _0x24dea7(0x111) && (typeof _0x4bb946 === 'function' && _0x2223f2['on'](_0x24dea7(0x553), _0x4bb946),
                    typeof _0x34136f === _0x24dea7(0x61f) && _0x475ab5['on'](_0x24dea7(0x553), _0x34136f),
                    typeof _0x41fd03 === _0x24dea7(0x61f) && _0x2ca05e['on'](_0x24dea7(0x553), _0x41fd03)),
                    _0x456264[_0x24dea7(0xf3)] = _0x50ac1f[_0x24dea7(0x7ba)];
                } else
                    $(_0x24dea7(0x1a0))[_0x24dea7(0x45a)]();
                _0x50ac1f[_0x24dea7(0x77a)] && _0x50ac1f[_0x24dea7(0x77a)] != 'iq' && _0x50ac1f[_0x24dea7(0x77a)] != _0x391bb6 && (localStorage['setItem'](_0x24dea7(0x351), _0x50ac1f[_0x24dea7(0x77a)]),
                localStorage['removeItem'](_0x24dea7(0x73f)),
                window[_0x24dea7(0x21a)][_0x24dea7(0x6bb)]()),
                !_0x391bb6 && localStorage[_0x24dea7(0x434)](_0x24dea7(0x351), 'iq');
            }
            localStorage[_0x24dea7(0x434)](_0x24dea7(0x4ab), JSON['stringify'](_0x456264)),
            $(document)[_0x24dea7(0x72a)](function() {
                var _0x3842d8 = _0x24dea7;
                if ($(_0x3842d8(0x147))[_0x3842d8(0x454)] > 0x0) {
                    $('.sidebar-item')[_0x3842d8(0x3db)](function() {
                        var _0x5298e3 = _0x3842d8;
                        $(_0x5298e3(0x35b))[_0x5298e3(0x504)](_0x5298e3(0x3d7)),
                        $(this)['addClass']('active'),
                        $('.tab-content')['hide']();
                        const _0xa66a3d = $(this)[_0x5298e3(0x399)](_0x5298e3(0x3cd)) + _0x5298e3(0x6aa);
                        $('#' + _0xa66a3d)[_0x5298e3(0x637)]();
                    }),
                    $('#game-settings-tab')[_0x3842d8(0x637)](),
                    $(_0x3842d8(0x5de))[_0x3842d8(0x36d)](_0x3842d8(0x1a7))[_0x3842d8(0x45a)]();
                    !_0x456264[_0x3842d8(0x376)] && $('#mobile-tab-item')[_0x3842d8(0x45a)]();
                    function _0x1b3ce6() {
                        var _0x21c3f0 = _0x3842d8;
                        $(_0x21c3f0(0x330))[_0x21c3f0(0x458)]('checked') ? $(_0x21c3f0(0x178))[_0x21c3f0(0x46e)](_0x21c3f0(0x56a)) : $(_0x21c3f0(0x178))[_0x21c3f0(0x504)]('messages-disabled');
                    }
                    _0x1b3ce6(),
                    $(_0x3842d8(0x145))['on'](_0x3842d8(0x432), function() {
                        var _0x4b6222 = _0x3842d8
                          , _0x2d094f = $(this)['val']();
                        $(_0x4b6222(0x5a8))[_0x4b6222(0x2a7)](_0x2d094f),
                        _0x25f0e7(this);
                    }),
                    $(_0x3842d8(0x5e8))['on']('input', function() {
                        var _0x5a88c5 = _0x3842d8
                          , _0x35a89d = $(this)[_0x5a88c5(0xfa)]();
                        $(_0x5a88c5(0x54a))[_0x5a88c5(0x2a7)](_0x35a89d),
                        _0x1b8fb9(this);
                    }),
                    $(_0x3842d8(0x330))[_0x3842d8(0x529)](function() {
                        var _0x48df8c = _0x3842d8;
                        _0x1b3ce6(),
                        _0x456264['iq'] = $(this)[_0x48df8c(0x458)](_0x48df8c(0x274)),
                        localStorage[_0x48df8c(0x434)](_0x48df8c(0x4ab), JSON[_0x48df8c(0x6b1)](_0x456264));
                    }),
                    $(_0x3842d8(0x5a5))[_0x3842d8(0x529)](function() {
                        var _0x9ce7b3 = _0x3842d8;
                        _0x456264[_0x9ce7b3(0x63e)] = $(this)[_0x9ce7b3(0xfa)](),
                        localStorage[_0x9ce7b3(0x434)](_0x9ce7b3(0x4ab), JSON[_0x9ce7b3(0x6b1)](_0x456264));
                    }),
                    $(_0x3842d8(0x69a))[_0x3842d8(0x529)](function() {
                        var _0x1d6539 = _0x3842d8;
                        _0x456264['headshotMsg'] = $(this)['val'](),
                        localStorage[_0x1d6539(0x434)](_0x1d6539(0x4ab), JSON[_0x1d6539(0x6b1)](_0x456264));
                    }),
                    $(_0x3842d8(0x373))[_0x3842d8(0x529)](function() {
                        var _0x23634e = _0x3842d8;
                        _0x456264['showKillName'] = $(this)[_0x23634e(0x458)](_0x23634e(0x274)),
                        localStorage[_0x23634e(0x434)](_0x23634e(0x4ab), JSON['stringify'](_0x456264));
                    }),
                    $(_0x3842d8(0x668))['change'](function() {
                        var _0x38dca9 = _0x3842d8;
                        _0x456264[_0x38dca9(0x30a)] = $(this)[_0x38dca9(0x458)]('checked'),
                        localStorage[_0x38dca9(0x434)](_0x38dca9(0x4ab), JSON[_0x38dca9(0x6b1)](_0x456264));
                    }),
                    $(_0x3842d8(0x6eb))[_0x3842d8(0x529)](function() {
                        var _0x84a95e = _0x3842d8;
                        _0x456264['killNamePos'] = $(this)[_0x84a95e(0xfa)](),
                        localStorage[_0x84a95e(0x434)](_0x84a95e(0x4ab), JSON['stringify'](_0x456264));
                    }),
                    $(_0x3842d8(0x4b9))[_0x3842d8(0x529)](function() {
                        var _0x19d8ab = _0x3842d8;
                        _0x456264['headshotNamePos'] = $(this)[_0x19d8ab(0xfa)](),
                        localStorage['setItem']('SaveGamewft', JSON[_0x19d8ab(0x6b1)](_0x456264));
                    }),
                    $(_0x3842d8(0x431))['on'](_0x3842d8(0x432), function() {
                        var _0x2756c0 = _0x3842d8;
                        $(this)['val']() !== '' ? (_0x456264[_0x2756c0(0x3a2)] = _0x2756c0(0x16e),
                        _0x456264[_0x2756c0(0x2ba)] = $(this)[_0x2756c0(0xfa)]()) : _0x456264['killMsgType'] = _0x2756c0(0x3eb),
                        localStorage[_0x2756c0(0x434)](_0x2756c0(0x4ab), JSON[_0x2756c0(0x6b1)](_0x456264));
                    }),
                    $(_0x3842d8(0x1c2))['on'](_0x3842d8(0x432), function() {
                        var _0x2a4647 = _0x3842d8;
                        $(this)[_0x2a4647(0xfa)]() !== '' ? (_0x456264[_0x2a4647(0x316)] = _0x2a4647(0x16e),
                        _0x456264[_0x2a4647(0x4bb)] = $(this)[_0x2a4647(0xfa)]()) : _0x456264[_0x2a4647(0x316)] = _0x2a4647(0x3eb),
                        localStorage[_0x2a4647(0x434)](_0x2a4647(0x4ab), JSON[_0x2a4647(0x6b1)](_0x456264));
                    });
                    _0x456264[_0x3842d8(0x63e)] && $(_0x3842d8(0x5a5))['val'](_0x456264[_0x3842d8(0x63e)]);
                    _0x456264[_0x3842d8(0x35c)] && $(_0x3842d8(0x69a))['val'](_0x456264[_0x3842d8(0x35c)]);
                    _0x456264[_0x3842d8(0x3a2)] === _0x3842d8(0x16e) && _0x456264[_0x3842d8(0x2ba)] && $(_0x3842d8(0x431))[_0x3842d8(0xfa)](_0x456264[_0x3842d8(0x2ba)] || '');
                    _0x456264[_0x3842d8(0x316)] === _0x3842d8(0x16e) && _0x456264[_0x3842d8(0x4bb)] && $(_0x3842d8(0x1c2))['val'](_0x456264[_0x3842d8(0x4bb)] || '');
                    $(_0x3842d8(0x373))[_0x3842d8(0x458)]('checked', _0x456264[_0x3842d8(0x39d)] !== ![]),
                    $(_0x3842d8(0x668))['prop'](_0x3842d8(0x274), _0x456264['showHeadshotName'] !== ![]),
                    $(_0x3842d8(0x6eb))[_0x3842d8(0xfa)](_0x456264[_0x3842d8(0x158)] || _0x3842d8(0x683)),
                    $(_0x3842d8(0x4b9))['val'](_0x456264['headshotNamePos'] || _0x3842d8(0x683)),
                    $('#wftsound')['prop']('checked', wftObjects[_0x3842d8(0x5f3)] || _0x456264['vh']),
                    $(_0x3842d8(0x520))[_0x3842d8(0xfa)](wftObjects[_0x3842d8(0x221)] || _0x3842d8(0x578)),
                    $(_0x3842d8(0x230))[_0x3842d8(0xfa)](wftObjects[_0x3842d8(0x15b)] || 0x32),
                    $('#volume_value')[_0x3842d8(0x2a7)](wftObjects[_0x3842d8(0x15b)] || 0x32);
                    let _0x87bf5d = null;
                    function _0x3bf184(_0x11c80e, _0xa4532b) {
                        var _0x13323e = _0x3842d8;
                        _0x87bf5d && (_0x87bf5d[_0x13323e(0x359)](),
                        _0x87bf5d[_0x13323e(0x565)] = 0x0),
                        _0x11c80e['volume'] = _0xa4532b / 0x64,
                        _0x11c80e[_0x13323e(0x565)] = 0x0,
                        _0x11c80e[_0x13323e(0x648)](),
                        _0x87bf5d = _0x11c80e;
                    }
                    $('#wftsound')['prop'](_0x3842d8(0x274), !![]),
                    $('#wftsound')[_0x3842d8(0x529)](function() {
                        var _0x120e1c = _0x3842d8;
                        wftObjects[_0x120e1c(0x5f3)] = $(this)[_0x120e1c(0x458)]('checked'),
                        _0x456264['vh'] = $(this)[_0x120e1c(0x458)](_0x120e1c(0x274)),
                        _0x15c13c(),
                        localStorage[_0x120e1c(0x434)]('SaveGamewft', JSON[_0x120e1c(0x6b1)](_0x456264));
                        if (wftObjects[_0x120e1c(0x5f3)]) {
                            const _0x31a0bb = document[_0x120e1c(0x44f)]('s_h');
                            _0x31a0bb && _0x3bf184(_0x31a0bb, wftObjects[_0x120e1c(0x15b)]);
                        }
                    }),
                    $(_0x3842d8(0x520))[_0x3842d8(0x529)](function() {
                        var _0x357461 = _0x3842d8;
                        wftObjects[_0x357461(0x221)] = $(this)['val'](),
                        _0x15c13c();
                        const _0x1dc7a1 = document['getElementById'](_0x357461(0x7bb));
                        if (_0x1dc7a1) {
                            const _0x55e2fb = _0x1dc7a1[_0x357461(0x439)](_0x357461(0x67a));
                            _0x55e2fb && (_0x55e2fb[_0x357461(0x659)] = wftObjects['soundEffect'],
                            _0x1dc7a1[_0x357461(0x2fa)](),
                            wftObjects['soundEnabled'] && setTimeout( () => {
                                var _0x1fd953 = _0x357461;
                                _0x3bf184(_0x1dc7a1, wftObjects[_0x1fd953(0x15b)]);
                            }
                            , 0x64));
                        }
                    }),
                    $(_0x3842d8(0x1e2))['change'](function() {
                        var _0x479b76 = _0x3842d8;
                        const _0x5a7a84 = $(this)['val']()
                          , _0x28b91a = document['getElementById']('monster_kill_sound');
                        if (_0x28b91a) {
                            const _0xd42d2b = _0x28b91a[_0x479b76(0x439)](_0x479b76(0x67a));
                            _0xd42d2b && (_0xd42d2b[_0x479b76(0x659)] = _0x5a7a84,
                            _0x28b91a[_0x479b76(0x2fa)](),
                            wftObjects[_0x479b76(0x5f3)] && setTimeout( () => {
                                var _0x111e10 = _0x479b76;
                                _0x3bf184(_0x28b91a, wftObjects[_0x111e10(0x15b)]);
                            }
                            , 0x64));
                        }
                        !wftObjects[_0x479b76(0x110)] && (wftObjects['monsterKillSound'] = {}),
                        wftObjects['monsterKillSound'] = _0x5a7a84,
                        _0x15c13c();
                    }),
                    $('#volume_slider')['on'](_0x3842d8(0x432), function() {
                        var _0xb80b32 = _0x3842d8;
                        wftObjects[_0xb80b32(0x15b)] = parseInt($(this)[_0xb80b32(0xfa)]()),
                        $(_0xb80b32(0x2ad))['text'](wftObjects[_0xb80b32(0x15b)]);
                        const _0x1327ab = document[_0xb80b32(0x2f2)](_0xb80b32(0x765));
                        _0x1327ab[_0xb80b32(0x151)](_0x53ef80 => {
                            var _0x51fbdd = _0xb80b32;
                            _0x53ef80[_0x51fbdd(0x364)] = wftObjects[_0x51fbdd(0x15b)] / 0x64;
                        }
                        );
                        if (wftObjects[_0xb80b32(0x5f3)]) {
                            const _0x2a31e0 = document[_0xb80b32(0x44f)](_0xb80b32(0x7bb));
                            _0x2a31e0 && _0x3bf184(_0x2a31e0, wftObjects[_0xb80b32(0x15b)]);
                        }
                        _0x15c13c();
                    });
                    !window['laserOptions'] && (window[_0x3842d8(0x32e)] = {
                        'enabled': _0x456264['ls'] || ![],
                        'color': 0xffd700,
                        'opacity': 0.5,
                        'thickness': 0.1
                    });
                    try {
                        const _0x487031 = JSON['parse'](localStorage[_0x3842d8(0x3af)]('laserOptions'));
                        _0x487031 && (window['laserOptions'] = _0x487031);
                    } catch (_0x5c96da) {
                        console['error'](_0x3842d8(0x5ba), _0x5c96da);
                    }
                    $('#Laserup')['prop'](_0x3842d8(0x274), window[_0x3842d8(0x32e)][_0x3842d8(0x6dc)]);
                    const _0x1de2ea = '#' + window['laserOptions'][_0x3842d8(0x3ea)]['toString'](0x10)['padStart'](0x6, '0');
                    $(_0x3842d8(0x203))['val'](_0x1de2ea),
                    $(_0x3842d8(0x108))[_0x3842d8(0xfa)](window[_0x3842d8(0x32e)][_0x3842d8(0x2e5)] * 0x64),
                    $(_0x3842d8(0x4d9))['text'](Math['round'](window[_0x3842d8(0x32e)][_0x3842d8(0x2e5)] * 0x64)),
                    $('#Laserup')['change'](function() {
                        var _0x557270 = _0x3842d8;
                        window['laserOptions'][_0x557270(0x6dc)] = $(this)[_0x557270(0x458)](_0x557270(0x274)),
                        _0x456264['ls'] = $(this)[_0x557270(0x458)](_0x557270(0x274)),
                        localStorage[_0x557270(0x434)](_0x557270(0x32e), JSON[_0x557270(0x6b1)](window[_0x557270(0x32e)])),
                        localStorage[_0x557270(0x434)](_0x557270(0x4ab), JSON[_0x557270(0x6b1)](_0x456264));
                    }),
                    $(_0x3842d8(0x203))[_0x3842d8(0x529)](function() {
                        var _0x37b53b = _0x3842d8;
                        const _0x356dfa = $(this)[_0x37b53b(0xfa)]();
                        window['laserOptions'][_0x37b53b(0x3ea)] = parseInt(_0x356dfa[_0x37b53b(0xe3)]('#', '0x')),
                        localStorage['setItem'](_0x37b53b(0x32e), JSON[_0x37b53b(0x6b1)](window[_0x37b53b(0x32e)]));
                    }),
                    $(_0x3842d8(0x108))['on'](_0x3842d8(0x432), function() {
                        var _0x5af6b9 = _0x3842d8;
                        const _0x27744f = parseInt($(this)[_0x5af6b9(0xfa)]());
                        window[_0x5af6b9(0x32e)][_0x5af6b9(0x2e5)] = _0x27744f / 0x64,
                        $('#laser_opacity_value')['text'](_0x27744f),
                        localStorage[_0x5af6b9(0x434)](_0x5af6b9(0x32e), JSON['stringify'](window[_0x5af6b9(0x32e)]));
                    }),
                    $(_0x3842d8(0x50e))['click'](function() {
                        var _0x57c12b = _0x3842d8;
                        window[_0x57c12b(0x32e)] = {
                            'enabled': _0x456264['ls'],
                            'color': 0xffd700,
                            'opacity': 0.5,
                            'thickness': 0.1
                        },
                        localStorage[_0x57c12b(0x434)](_0x57c12b(0x32e), JSON[_0x57c12b(0x6b1)](window[_0x57c12b(0x32e)])),
                        $('#laser_color_picker')[_0x57c12b(0xfa)](_0x57c12b(0x487)),
                        $('#laser_opacity_slider')[_0x57c12b(0xfa)](0x32),
                        $(_0x57c12b(0x4d9))[_0x57c12b(0x2a7)](0x32);
                    }),
                    $(document)[_0x3842d8(0x222)](function(_0x23afca) {
                        var _0xf84de7 = _0x3842d8;
                        _0x23afca[_0xf84de7(0x748)] === 0x4c && $(_0xf84de7(0x109))[_0xf84de7(0x458)](_0xf84de7(0x274), !$(_0xf84de7(0x109))['prop'](_0xf84de7(0x274)))[_0xf84de7(0x7c5)](_0xf84de7(0x529));
                        if (_0x23afca['which'] === 0x4f) {
                            let _0x380252 = parseInt($('#laser_opacity_slider')[_0xf84de7(0xfa)]());
                            _0x380252 < 0x64 && $(_0xf84de7(0x108))[_0xf84de7(0xfa)](_0x380252 + 0xa)[_0xf84de7(0x7c5)]('input');
                        }
                        if (_0x23afca[_0xf84de7(0x748)] === 0x50) {
                            let _0x29022c = parseInt($(_0xf84de7(0x108))[_0xf84de7(0xfa)]());
                            _0x29022c > 0xa && $('#laser_opacity_slider')[_0xf84de7(0xfa)](_0x29022c - 0xa)[_0xf84de7(0x7c5)]('input');
                        }
                    }),
                    $(_0x3842d8(0x509))[_0x3842d8(0x458)](_0x3842d8(0x274), wftObjects[_0x3842d8(0x55e)] >= 0x1),
                    $('#spin_fast_slider')[_0x3842d8(0xfa)](wftObjects['smoothCamera']),
                    $(_0x3842d8(0x6be))[_0x3842d8(0x2a7)](wftObjects['smoothCamera']),
                    $(_0x3842d8(0x7b8))[_0x3842d8(0xfa)](wftObjects[_0x3842d8(0x36c)]),
                    $(_0x3842d8(0x644))[_0x3842d8(0x2a7)](wftObjects['zoomSpeed']),
                    $(_0x3842d8(0x42c))[_0x3842d8(0xfa)](wftObjects[_0x3842d8(0x3b8)]),
                    $(_0x3842d8(0x78a))[_0x3842d8(0x2a7)](wftObjects[_0x3842d8(0x3b8)]),
                    $(_0x3842d8(0x120))[_0x3842d8(0xfa)](wftObjects['PortionAura']),
                    $('#portion_aura_value')[_0x3842d8(0x2a7)](wftObjects[_0x3842d8(0x324)]),
                    $(_0x3842d8(0x6db))[_0x3842d8(0xfa)](wftObjects[_0x3842d8(0x4a7)]),
                    $(_0x3842d8(0x59d))[_0x3842d8(0x2a7)](wftObjects[_0x3842d8(0x4a7)]),
                    $(_0x3842d8(0x48e))[_0x3842d8(0xfa)](wftObjects['FoodShadow']),
                    $('#food_shadow_value')[_0x3842d8(0x2a7)](wftObjects['FoodShadow']),
                    $(_0x3842d8(0x509))[_0x3842d8(0x529)](function() {
                        var _0x46463f = _0x3842d8;
                        wftObjects[_0x46463f(0x55e)] = $(this)[_0x46463f(0x458)]('checked') ? 0x1 : 0.0025,
                        _0x15c13c();
                    }),
                    $('#spin_fast_slider')['on'](_0x3842d8(0x432), function() {
                        var _0x233d74 = _0x3842d8;
                        const _0x14c64b = parseFloat($(this)[_0x233d74(0xfa)]());
                        wftObjects['smoothCamera'] = _0x14c64b,
                        $(_0x233d74(0x6be))[_0x233d74(0x2a7)](_0x14c64b),
                        _0x15c13c();
                    }),
                    $(_0x3842d8(0x7b8))['on'](_0x3842d8(0x432), function() {
                        var _0x59e83b = _0x3842d8;
                        const _0x5aa0da = parseFloat($(this)['val']());
                        wftObjects['zoomSpeed'] = _0x5aa0da,
                        $('#zoom_speed_value')[_0x59e83b(0x2a7)](_0x5aa0da),
                        _0x15c13c();
                    }),
                    $(_0x3842d8(0x42c))['on']('input', function() {
                        var _0x17d19f = _0x3842d8;
                        const _0x18c8ce = parseFloat($(this)[_0x17d19f(0xfa)]());
                        wftObjects[_0x17d19f(0x3b8)] = _0x18c8ce,
                        $(_0x17d19f(0x78a))['text'](_0x18c8ce),
                        _0x15c13c();
                    }),
                    $(_0x3842d8(0x120))['on'](_0x3842d8(0x432), function() {
                        var _0x17b43f = _0x3842d8;
                        const _0x412f93 = parseFloat($(this)[_0x17b43f(0xfa)]());
                        wftObjects[_0x17b43f(0x324)] = _0x412f93,
                        $(_0x17b43f(0x571))[_0x17b43f(0x2a7)](_0x412f93),
                        _0x15c13c();
                    }),
                    $(_0x3842d8(0x6db))['on'](_0x3842d8(0x432), function() {
                        var _0x180d5e = _0x3842d8;
                        const _0x5194b2 = parseFloat($(this)[_0x180d5e(0xfa)]());
                        wftObjects[_0x180d5e(0x4a7)] = _0x5194b2,
                        $('#food_size_value')['text'](_0x5194b2),
                        _0x15c13c();
                    }),
                    $('#food_shadow_slider')['on']('input', function() {
                        var _0x55fdd2 = _0x3842d8;
                        const _0x246ef6 = parseFloat($(this)[_0x55fdd2(0xfa)]());
                        wftObjects[_0x55fdd2(0x7a7)] = _0x246ef6,
                        $(_0x55fdd2(0x2f0))[_0x55fdd2(0x2a7)](_0x246ef6),
                        _0x15c13c();
                    }),
                    $(_0x3842d8(0x745))[_0x3842d8(0x3db)](function() {
                        var _0xb8fa49 = _0x3842d8;
                        const _0x3711d0 = $(this)[_0xb8fa49(0x399)](_0xb8fa49(0x29e))
                          , _0x16bd88 = $(this)[_0xb8fa49(0x399)]('default');
                        if (_0x3711d0 && _0x16bd88 !== undefined)
                            switch (_0x3711d0) {
                            case 'spin_fast':
                                $(_0xb8fa49(0x167))['val'](_0x16bd88)[_0xb8fa49(0x7c5)](_0xb8fa49(0x432));
                                break;
                            case _0xb8fa49(0x612):
                                $(_0xb8fa49(0x42c))['val'](_0x16bd88)[_0xb8fa49(0x7c5)](_0xb8fa49(0x432));
                                break;
                            case _0xb8fa49(0x4a0):
                                $(_0xb8fa49(0x120))[_0xb8fa49(0xfa)](_0x16bd88)[_0xb8fa49(0x7c5)](_0xb8fa49(0x432));
                                break;
                            case 'food_size':
                                $(_0xb8fa49(0x6db))[_0xb8fa49(0xfa)](_0x16bd88)[_0xb8fa49(0x7c5)](_0xb8fa49(0x432));
                                break;
                            case _0xb8fa49(0x503):
                                $('#food_shadow_slider')['val'](_0x16bd88)['trigger'](_0xb8fa49(0x432));
                                break;
                            case _0xb8fa49(0x7c8):
                                $(_0xb8fa49(0x7b8))[_0xb8fa49(0xfa)](_0x16bd88)[_0xb8fa49(0x7c5)]('input');
                                break;
                            }
                    });
                    function _0x3a97aa() {
                        const _0x20ba3c = setInterval( () => {
                            var _0x227101 = _0x3903;
                            if (window['utils'] && window[_0x227101(0x514)]['prototype'] && window[_0x227101(0x4ee)] && window[_0x227101(0x4ee)]['prototype'] && window[_0x227101(0x6c5)] && window[_0x227101(0x6c5)][_0x227101(0x551)]) {
                                clearInterval(_0x20ba3c);
                                const _0x35269a = window[_0x227101(0x514)][_0x227101(0x551)]['Qj'];
                                window[_0x227101(0x514)][_0x227101(0x551)]['Qj'] = function(_0x508123, _0x37ca03, _0x18aa76) {
                                    var _0xb00917 = _0x227101;
                                    this['Hj'] = window[_0xb00917(0x7b7)]['ga'](this['Hj'], this['Fj'], _0x37ca03, window['wftObjects'][_0xb00917(0x55e)]),
                                    this['Ij'] = window[_0xb00917(0x7b7)]['ga'](this['Ij'], this['Gj'], _0x37ca03, 0.0025),
                                    this['Nj']['Bg'](this, _0x508123, _0x37ca03, _0x18aa76);
                                }
                                ;
                                const _0x59fd76 = window[_0x227101(0x4ee)][_0x227101(0x551)]['Bg'];
                                window[_0x227101(0x4ee)][_0x227101(0x551)]['Bg'] = function(_0x2343f1, _0x19c2f5, _0x586055, _0x179469) {
                                    var _0x550427 = _0x227101;
                                    if (!_0x179469(_0x2343f1['Hj'], _0x2343f1['Ij'])) {
                                        this['Wh']['Cd']();
                                        return;
                                    }
                                    var _0x2950e3 = _0x2343f1['Kj'] * (0x1 + window['decoder']['pa'](_0x2343f1['Mj'] + _0x19c2f5 / 0xc8) * 0.3);
                                    _0x2343f1['Ej'] ? this['Wh']['Ad'](_0x2343f1['Hj'], _0x2343f1['Ij'], window['wftObjects'][_0x550427(0x3b8)] * _0x2343f1['Jj'], _0x2343f1['Lj'] * 0x1, window[_0x550427(0x275)]['PortionAura'] * _0x2950e3, window['wftObjects'][_0x550427(0x727)] * _0x2343f1['Lj']) : this['Wh']['Ad'](_0x2343f1['Hj'], _0x2343f1['Ij'], window[_0x550427(0x275)]['FoodSize'] * _0x2343f1['Jj'], _0x2343f1['Lj'] * 0x1, window[_0x550427(0x275)][_0x550427(0x7a7)] * _0x2950e3, window[_0x550427(0x275)][_0x550427(0x290)] * _0x2343f1['Lj']);
                                }
                                ;
                                const _0x320bad = window[_0x227101(0x6c5)]['prototype']['ug'];
                                window[_0x227101(0x6c5)][_0x227101(0x551)]['ug'] = function(_0x2df110, _0x133cbb) {
                                    var _0x12af6a = _0x227101;
                                    const _0x40ca13 = _0x320bad[_0x12af6a(0x581)](this, arguments);
                                    if (this['Fh'] && typeof this['Fh']['x'] !== _0x12af6a(0x111) && window['ooo'] && window['ooo']['Mh']) {
                                        const _0x1d8fbd = window[_0x12af6a(0x6ff)]['Mh']['Oh']();
                                        _0x1d8fbd && typeof _0x1d8fbd['_a'] !== 'undefined' && (this['Fh']['x'] = window[_0x12af6a(0x7b7)]['ja'](this['Fh']['x'], _0x1d8fbd['_a'], _0x133cbb, window['wftObjects'][_0x12af6a(0x656)], 33.333));
                                    }
                                    return _0x40ca13;
                                }
                                ,
                                !window[_0x227101(0x1ab)] && (window[_0x227101(0x1ab)] = function(_0x568720, _0x13592f) {
                                    var _0x44fb70 = _0x227101;
                                    if (!document[_0x44fb70(0x44f)](_0x44fb70(0x16f))) {
                                        const _0x1f4121 = document[_0x44fb70(0x5d0)]('div');
                                        _0x1f4121['id'] = _0x44fb70(0x16f),
                                        _0x1f4121[_0x44fb70(0x3a7)][_0x44fb70(0x627)] = _0x44fb70(0x651),
                                        _0x1f4121['style'][_0x44fb70(0x777)] = _0x44fb70(0x296),
                                        _0x1f4121[_0x44fb70(0x3a7)][_0x44fb70(0x4ff)] = '50%',
                                        _0x1f4121[_0x44fb70(0x3a7)][_0x44fb70(0x508)] = 'translate(-50%,\x20-50%)',
                                        _0x1f4121[_0x44fb70(0x3a7)][_0x44fb70(0x3ea)] = _0x13592f ? _0x44fb70(0x4f3) : '#ffcc00',
                                        _0x1f4121[_0x44fb70(0x3a7)]['fontSize'] = '32px',
                                        _0x1f4121[_0x44fb70(0x3a7)][_0x44fb70(0x2f7)] = _0x44fb70(0x2d7),
                                        _0x1f4121[_0x44fb70(0x3a7)]['textShadow'] = _0x44fb70(0x43f),
                                        _0x1f4121[_0x44fb70(0x3a7)]['zIndex'] = '9999',
                                        _0x1f4121[_0x44fb70(0x3a7)][_0x44fb70(0x2e5)] = '0',
                                        _0x1f4121['style'][_0x44fb70(0x6dd)] = 'opacity\x200.3s\x20ease-in-out',
                                        document[_0x44fb70(0x41b)][_0x44fb70(0x16a)](_0x1f4121);
                                    }
                                    const _0x62d130 = _0x13592f ? _0x456264['headshotMsgType'] : _0x456264['killMsgType']
                                      , _0x1980ed = document['getElementById'](_0x44fb70(0x16f));
                                    let _0xa57a35 = ''
                                      , _0x340f56 = _0x13592f ? _0x456264[_0x44fb70(0x30a)] : _0x456264[_0x44fb70(0x39d)]
                                      , _0x20a48b = _0x13592f ? _0x456264[_0x44fb70(0x638)] : _0x456264[_0x44fb70(0x158)];
                                    _0x62d130 === _0x44fb70(0x16e) ? _0xa57a35 = _0x13592f ? _0x456264[_0x44fb70(0x4bb)] : _0x456264[_0x44fb70(0x2ba)] : _0xa57a35 = _0x13592f ? _0x456264[_0x44fb70(0x35c)] : _0x456264['killMsg'];
                                    _0x340f56 && _0x568720 && (_0x20a48b === _0x44fb70(0x5b1) ? _0xa57a35 = _0x568720 + '\x20' + _0xa57a35 : _0xa57a35 = _0xa57a35 + '\x20' + _0x568720);
                                    _0x1980ed[_0x44fb70(0x3b4)] = _0xa57a35,
                                    _0x1980ed[_0x44fb70(0x3a7)][_0x44fb70(0x3ea)] = _0x13592f ? _0x44fb70(0x4f3) : _0x44fb70(0x54c),
                                    _0x1980ed[_0x44fb70(0x3a7)][_0x44fb70(0x2e5)] = '1';
                                    if (_0x13592f && wftObjects[_0x44fb70(0x5f3)]) {
                                        const _0x594580 = document['getElementById'](_0x44fb70(0x7bb));
                                        _0x594580 && (_0x594580[_0x44fb70(0x364)] = wftObjects[_0x44fb70(0x15b)] / 0x64,
                                        _0x594580['currentTime'] = 0x0,
                                        _0x594580['play']());
                                    }
                                    setTimeout(function() {
                                        var _0x375a87 = _0x44fb70;
                                        _0x1980ed[_0x375a87(0x3a7)][_0x375a87(0x2e5)] = '0';
                                    }, 0x7d0);
                                }
                                ),
                                console[_0x227101(0x470)]('WFT\x20Game\x20modifications\x20applied\x20successfully!');
                            }
                        }
                        , 0x3e8);
                    }
                    setTimeout(_0x3a97aa, 0x3e8),
                    window[_0x3842d8(0x367)] = function() {
                        var _0x34a2ca = _0x3842d8;
                        if (wftObjects[_0x34a2ca(0x5f3)]) {
                            const _0x415cbc = document[_0x34a2ca(0x44f)](_0x34a2ca(0x7bb));
                            _0x415cbc && (_0x415cbc[_0x34a2ca(0x364)] = wftObjects['soundVolume'] / 0x64,
                            _0x415cbc[_0x34a2ca(0x565)] = 0x0,
                            _0x415cbc[_0x34a2ca(0x648)]());
                        }
                    }
                    ,
                    $(_0x3842d8(0x694))[_0x3842d8(0x3db)](function() {
                        var _0x1466ab = _0x3842d8;
                        localStorage[_0x1466ab(0x369)](_0x1466ab(0x74f)),
                        localStorage[_0x1466ab(0x369)](_0x1466ab(0x493)),
                        window[_0x1466ab(0x21a)][_0x1466ab(0x6bb)]();
                    }),
                    $(_0x3842d8(0x799))[_0x3842d8(0x529)](function(_0x180c1f) {
                        var _0x5a9212 = _0x3842d8;
                        const _0x3592ef = _0x180c1f[_0x5a9212(0x353)][_0x5a9212(0x205)][0x0];
                        if (_0x3592ef) {
                            const _0x3d08dd = new FileReader();
                            _0x3d08dd[_0x5a9212(0x250)] = function(_0x553a04) {
                                var _0x1d1b0b = _0x5a9212;
                                try {
                                    const _0x37a6c2 = _0x553a04['target']['result'];
                                    JSON['parse'](_0x37a6c2),
                                    _0x37a6c2[_0x1d1b0b(0x12a)](_0x1d1b0b(0x2d3)) !== -0x1 ? localStorage[_0x1d1b0b(0x434)](_0x1d1b0b(0x74f), _0x37a6c2) : localStorage['setItem'](_0x1d1b0b(0x493), _0x37a6c2),
                                    window[_0x1d1b0b(0x21a)][_0x1d1b0b(0x6bb)]();
                                } catch (_0x93ff67) {
                                    console[_0x1d1b0b(0x39e)](_0x1d1b0b(0x2ae), _0x93ff67);
                                }
                            }
                            ,
                            _0x3d08dd[_0x5a9212(0x78f)](_0x3592ef);
                        }
                    });
                }
                window[_0x3842d8(0x4cd)] && setTimeout(function() {
                    var _0x319ce7 = _0x3842d8;
                    window[_0x319ce7(0x4cd)][_0x319ce7(0x5dc)]();
                }, 0x1f4),
                setTimeout( () => {
                    var _0x2d41f = _0x3842d8;
                    window[_0x2d41f(0x420)] && typeof window[_0x2d41f(0x420)][_0x2d41f(0x5dc)] === _0x2d41f(0x61f) && window[_0x2d41f(0x420)]['init']();
                }
                , 0x3e8),
                $(_0x3842d8(0x1f8))['on'](_0x3842d8(0x3db), function() {
                    var _0x5e64a5 = _0x3842d8;
                    window[_0x5e64a5(0x420)] && typeof window['sectorSystem']['initUserInterface'] === 'function' && setTimeout( () => window['sectorSystem'][_0x5e64a5(0x105)](), 0x64);
                });
            });
        };
        Ysw = async function(_0x335da1) {
            var _0x51313a = _0x2413a9
              , _0x5530df = await _0x335da1;
            try {
                _0x456264['gg'] = [],
                _0x456264['sg'] = [];
                var _0x34d32f = 0x0;
                if (_0x2fae16 && (_0x2fae16 = JSON[_0x51313a(0x608)](_0x2fae16))['wear']) {
                    for (var _0x56192d in _0x2fae16[_0x51313a(0x28d)][_0x51313a(0x788)]) {
                        _0x2fae16[_0x51313a(0x28d)][_0x51313a(0x788)][_0x56192d][_0x51313a(0x57c)][_0x51313a(0x103)](_0x51313a(0xf2)) == -0x1 && (_0x2fae16[_0x51313a(0x28d)][_0x51313a(0x788)][_0x56192d][_0x51313a(0x57c)] = _0x51313a(0xf2) + _0x2fae16[_0x51313a(0x28d)][_0x51313a(0x788)][_0x56192d][_0x51313a(0x57c)]['substr'](_0x2fae16[_0x51313a(0x28d)][_0x51313a(0x788)][_0x56192d][_0x51313a(0x57c)]['length'] - _0x456264['c_v'], _0x456264['c_v']) + _0x2fae16[_0x51313a(0x28d)]['textureDict'][_0x56192d][_0x51313a(0x57c)][_0x51313a(0x337)](0x0, _0x2fae16[_0x51313a(0x28d)][_0x51313a(0x788)][_0x56192d][_0x51313a(0x57c)][_0x51313a(0x454)] - _0x456264[_0x51313a(0x410)])),
                        _0x5530df['textureDict'][_0x56192d] = _0x2fae16[_0x51313a(0x28d)][_0x51313a(0x788)][_0x56192d];
                    }
                    ;for (let _0x3304d3 in _0x2fae16[_0x51313a(0x28d)][_0x51313a(0x4ba)]) {
                        _0x5530df['regionDict'][_0x3304d3] = _0x2fae16[_0x51313a(0x28d)]['regionDict'][_0x3304d3],
                        _0x5530df[(_0x56192d = _0x5530df[_0x51313a(0x4ba)][_0x3304d3])[_0x51313a(0x276)]][_0x56192d['id']] = _0x56192d[_0x51313a(0x583)],
                        _0x5530df[_0x56192d[_0x51313a(0x653)]][_0x51313a(0x731)]([_0x56192d['id']]);
                    }
                }
                ;if (_0x385553) {
                    if ((_0x385553 = JSON[_0x51313a(0x608)](_0x385553))['csg']) {
                        var _0x2ebeb3 = 0x0
                          , _0xb659b1 = ![]
                          , _0x2f9d6a = 0x0;
                        for (var _0x538ba9 in _0x385553['csg']['0']) {
                            for (var _0x4d9d64 = _0x385553[_0x51313a(0x567)]['1'][_0x538ba9][_0x51313a(0xf9)]('|'), _0x33c1b2 = 0x0; _0x33c1b2 < _0x4d9d64[_0x51313a(0x454)]; _0x33c1b2++) {
                                _0x5530df[_0x51313a(0x788)]['t_wft_' + (_0x456264['g'] / 0x9 * 0x3e8 + _0x2f9d6a)] = {
                                    'custom': !![],
                                    'file': _0x51313a(0xf2) + _0x4d9d64[_0x33c1b2]['substr'](_0x4d9d64[_0x33c1b2][_0x51313a(0x454)] - _0x456264['c_v'], _0x456264[_0x51313a(0x410)]) + _0x4d9d64[_0x33c1b2][_0x51313a(0x337)](0x0, _0x4d9d64[_0x33c1b2][_0x51313a(0x454)] - _0x456264[_0x51313a(0x410)])
                                },
                                _0x2f9d6a++;
                            }
                            ;var _0x277be6 = _0x385553[_0x51313a(0x567)]['2'][_0x538ba9]
                              , _0xb40655 = 0x0
                              , _0x53fef6 = _0x51313a(0x522)
                              , _0x3dd6a6 = _0x51313a(0x584)
                              , _0x366c89 = 0x0;
                            for (var _0x56192d in _0x277be6) {
                                _0x366c89++;
                            }
                            ;for (var _0x56192d in _0x277be6) {
                                if (_0xb40655 == 0x0) {
                                    var _0x55347e = {
                                        'id': _0x456264['g'] * 0x64 + _0x2ebeb3,
                                        'base': [],
                                        'guest': ![],
                                        'g': ![],
                                        'price': 0x0,
                                        'priceBefore': 0x0,
                                        'nonbuyable': ![],
                                        'prime': _0x51313a(0x2db),
                                        'glow': _0x277be6[_0x56192d]
                                    };
                                    for (var _0x33c1b2 = 0x0; _0x33c1b2 < _0x277be6[_0x56192d][_0x51313a(0x454)]; _0x33c1b2++) {
                                        _0x55347e[_0x51313a(0x1d8)][_0x51313a(0x731)]('s_wft_' + (_0x456264['g'] / 0x9 * 0x3e8 + _0x34d32f) + '_' + (_0x277be6[_0x56192d][_0x51313a(0x454)] - _0x33c1b2));
                                    }
                                    ;_0x5530df[_0x51313a(0x46d)][_0x51313a(0x731)](_0x55347e);
                                    var _0x21964b = _0x456264['sg']['indexOf'](_0x55347e['id']);
                                    _0x21964b == -0x1 && (_0x456264['sg'][_0x51313a(0x731)](_0x55347e['id']),
                                    _0x456264['gg'][_0x51313a(0x731)]({
                                        's': _0x456264['g'] / 0x9 * 0x3e8 + _0x34d32f,
                                        'e': _0x456264['g'] / 0x9 * 0x3e8 + _0x34d32f + _0x366c89 - 0x1,
                                        't': parseInt(_0x385553[_0x51313a(0x567)]['0'][_0x538ba9][_0x51313a(0x337)](0x0, 0x1)) * 0x64,
                                        'r': _0x385553[_0x51313a(0x567)]['0'][_0x538ba9][_0x51313a(0x337)](0x1, 0x1) == '1'
                                    }));
                                    if (_0xb659b1)
                                        for (var _0x36dcaa in _0x5530df[_0x51313a(0x204)]) {
                                            _0x5530df[_0x51313a(0x204)][_0x36dcaa]['id'] == _0x3dd6a6 && _0x5530df['skinGroupArrayDict'][_0x36dcaa][_0x51313a(0x276)][_0x51313a(0x731)](_0x55347e['id']);
                                        }
                                    else
                                        _0x5530df['skinGroupArrayDict'][_0x51313a(0x731)]({
                                            'isCustom': !![],
                                            'id': _0x3dd6a6,
                                            'img': _0x53fef6,
                                            'name': {
                                                'de': _0x3dd6a6,
                                                'en': _0x3dd6a6,
                                                'es': _0x3dd6a6,
                                                'fr': _0x3dd6a6,
                                                'uk': _0x3dd6a6
                                            },
                                            'list': [_0x55347e['id']]
                                        }),
                                        _0xb659b1 = !![];
                                    ;_0x2ebeb3++;
                                }
                                ;var _0x55347e = {
                                    'id': _0x456264['g'] / 0x9 * 0x3e8 + _0x34d32f,
                                    'base': [],
                                    'guest': ![],
                                    'g': !![],
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': ![],
                                    'prime': _0x51313a(0x2db),
                                    'glow': _0x277be6[_0x56192d]
                                };
                                for (var _0x33c1b2 = 0x0; _0x33c1b2 < _0x277be6[_0x56192d]['length']; _0x33c1b2++) {
                                    _0x55347e[_0x51313a(0x1d8)]['push'](_0x51313a(0x3a8) + _0x55347e['id'] + '_' + (_0x277be6[_0x56192d][_0x51313a(0x454)] - _0x33c1b2)),
                                    _0x5530df[_0x51313a(0x4ba)][_0x51313a(0x3a8) + _0x55347e['id'] + '_' + (_0x33c1b2 + 0x1)] = {
                                        'texture': _0x51313a(0x5e1) + _0x55347e['id'],
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x33c1b2 || 0x0) * 0x63,
                                        'y': 0x0
                                    };
                                }
                                ;_0x5530df[_0x51313a(0x46d)][_0x51313a(0x731)](_0x55347e),
                                _0xb40655++,
                                _0x34d32f++;
                            }
                        }
                    } else {
                        var _0x365f15 = []
                          , _0x53fef6 = _0x51313a(0x216);
                        for (let _0x34ef52 in _0x385553) {
                            if (_0x34ef52 != 'img') {
                                _0x385553[_0x34ef52][_0x51313a(0x788)][_0x34ef52][_0x51313a(0x57c)][_0x51313a(0x103)](_0x51313a(0xf2)) == -0x1 && (_0x385553[_0x34ef52][_0x51313a(0x788)][_0x34ef52]['file'] = _0x51313a(0xf2) + _0x385553[_0x34ef52][_0x51313a(0x788)][_0x34ef52]['file'][_0x51313a(0x337)](_0x385553[_0x34ef52][_0x51313a(0x788)][_0x34ef52]['file'][_0x51313a(0x454)] - _0x456264[_0x51313a(0x410)], _0x456264[_0x51313a(0x410)]) + _0x385553[_0x34ef52][_0x51313a(0x788)][_0x34ef52][_0x51313a(0x57c)][_0x51313a(0x337)](0x0, _0x385553[_0x34ef52][_0x51313a(0x788)][_0x34ef52]['file'][_0x51313a(0x454)] - _0x456264[_0x51313a(0x410)]));
                                _0x5530df[_0x51313a(0x788)][_0x34ef52] = _0x385553[_0x34ef52][_0x51313a(0x788)][_0x34ef52];
                                for (let _0x59b9d5 in _0x385553[_0x34ef52][_0x51313a(0x4ba)]) {
                                    _0x5530df[_0x51313a(0x4ba)][_0x59b9d5] = _0x385553[_0x34ef52][_0x51313a(0x4ba)][_0x59b9d5];
                                }
                                ;_0x5530df[_0x51313a(0x46d)][_0x51313a(0x731)](_0x385553[_0x34ef52][_0x51313a(0x5b9)]),
                                _0x365f15['push'](_0x385553[_0x34ef52][_0x51313a(0x5b9)]['id']);
                            } else
                                _0x385553[_0x34ef52] != 'customer' && (_0x53fef6 = _0x385553[_0x34ef52]);
                        }
                        ;_0x5530df[_0x51313a(0x204)]['push']({
                            'isCustom': !![],
                            'id': _0x51313a(0x329),
                            'img': _0x53fef6,
                            'name': {
                                'de': _0x51313a(0x2c4),
                                'en': _0x51313a(0x2c4),
                                'es': 'Customer',
                                'fr': _0x51313a(0x2c4),
                                'uk': _0x51313a(0x2c4)
                            },
                            'list': _0x365f15
                        });
                    }
                }
                ;if (Array[_0x51313a(0x291)](_0x456264['dg']) && _0x456264['dg']['length'] > 0x0)
                    for (var _0x56192d in _0x456264['dg']) {
                        var _0xb09fb7 = _0x456264['dg'][_0x56192d][_0x51313a(0xf9)]('|')
                          , _0x2eaf70 = {
                            'g': _0xb09fb7['0']
                        };
                        await fetch('https://wormx.store/store/check2.php', {
                            'headers': {
                                'Content-Type': _0x51313a(0x284)
                            },
                            'method': _0x51313a(0x3aa),
                            'body': JSON[_0x51313a(0x6b1)](_0x2eaf70)
                        })[_0x51313a(0x268)](async function(_0x3fdc33) {
                            var _0x4658c2 = _0x51313a;
                            _0x3fdc33 = await _0x3fdc33[_0x4658c2(0x55a)](),
                            _0x5530df[_0x4658c2(0x788)][_0x4658c2(0x5e1) + _0xb09fb7['0'] + _0x4658c2(0x755)] = {
                                'custom': !![],
                                'relativePath': _0x3fdc33['csg']['1']['0']
                            };
                            var _0x5478b0 = _0x3fdc33[_0x4658c2(0x567)]['2']['0']
                              , _0xc7cbf6 = 0x0;
                            for (var _0x48b907 in _0x5478b0) {
                                _0xc7cbf6++;
                            }
                            ;_0x456264['sg']['push'](parseInt(_0xb09fb7['1'])),
                            _0x456264['gg'][_0x4658c2(0x731)]({
                                's': _0x456264['g'] / 0x9 * 0x3e8 + _0x34d32f,
                                'e': _0x456264['g'] / 0x9 * 0x3e8 + _0x34d32f + _0xc7cbf6 - 0x1,
                                't': parseInt(_0x3fdc33[_0x4658c2(0x567)]['0']['0'][_0x4658c2(0x337)](0x0, 0x1)) * 0x64,
                                'r': _0x3fdc33[_0x4658c2(0x567)]['0']['0']['substr'](0x1, 0x1) == '1'
                            });
                            var _0x45a837 = 0x0;
                            for (var _0x48b907 in _0x5478b0) {
                                var _0x36f0de = {
                                    'id': _0x456264['g'] / 0x9 * 0x3e8 + _0x34d32f,
                                    'base': [],
                                    'guest': ![],
                                    'g': !![],
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': ![],
                                    'prime': _0x4658c2(0x2db),
                                    'glow': _0x5478b0[_0x48b907]
                                };
                                for (var _0x35c788 = 0x0; _0x35c788 < _0x5478b0[_0x48b907][_0x4658c2(0x454)]; _0x35c788++) {
                                    _0x36f0de['base'][_0x4658c2(0x731)]('s_wft_' + _0x36f0de['id'] + '_' + (_0x5478b0[_0x48b907]['length'] - _0x35c788)),
                                    _0x5530df[_0x4658c2(0x4ba)][_0x4658c2(0x3a8) + _0x36f0de['id'] + '_' + (_0x35c788 + 0x1)] = {
                                        'texture': 't_wft_' + _0xb09fb7['0'] + _0x4658c2(0x755),
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x35c788 || 0x0) * 0x63,
                                        'y': (_0x45a837 || 0x0) * 0x63
                                    };
                                }
                                ;_0x5530df[_0x4658c2(0x46d)][_0x4658c2(0x731)](_0x36f0de),
                                _0x34d32f++,
                                _0x45a837++;
                            }
                        })[_0x51313a(0x2ef)](function(_0x5a22da) {});
                    }
            } catch (_0x4b6e3b) {
                localStorage[_0x51313a(0x369)](_0x51313a(0x74f)),
                localStorage[_0x51313a(0x369)](_0x51313a(0x493)),
                window[_0x51313a(0x21a)][_0x51313a(0x6bb)]();
            }
            ;return _0x5530df;
        }
        ;
        var _0x48138c = ![];
        _0x48138c && (_0x48138c = ![],
        s_h[_0x2413a9(0x359)]()),
        function(_0x433717) {
            var _0x289a6c = _0x2413a9;
            _0x433717['fn'][_0x289a6c(0x62a)] = function(_0x3d161d) {
                var _0xef2c41 = _0x289a6c;
                if (_0x16ce81[_0x3d161d])
                    return _0x16ce81[_0x3d161d]['apply'](this, Array[_0xef2c41(0x551)][_0xef2c41(0x501)][_0xef2c41(0x11d)](arguments, 0x1));
                else {
                    if (typeof _0x3d161d != _0xef2c41(0x44d) && _0x3d161d) {
                        _0x433717['error'](_0xef2c41(0x64e) + _0x3d161d + '\x20does\x20not\x20exists.');
                        return;
                    } else
                        return _0x16ce81[_0xef2c41(0x5dc)][_0xef2c41(0x581)](this, arguments);
                }
            }
            ;
            var _0x16ce81 = {}
              , _0x3375fa = {
                'data': [],
                'keepJSONItemsOnTop': ![],
                'width': 0x64,
                'height': null,
                'background': '#eee',
                'selectText': '',
                'defaultSelectedIndex': null,
                'truncateDescription': !![],
                'imagePosition': _0x289a6c(0x4ff),
                'showSelectedHTML': !![],
                'clickOffToClose': !![],
                'embedCSS': !![],
                'onSelected': function() {}
            };
            function _0x26f6a8(_0x3a8461, _0xba64ef) {
                var _0x49cc07 = _0x289a6c, _0x19cfd8, _0x1a0e04, _0x4059a5, _0x28f113, _0x1644d1 = _0x3a8461[_0x49cc07(0x399)](_0x49cc07(0x57a)), _0x110b93 = _0x3a8461[_0x49cc07(0x305)](_0x49cc07(0x44a)), _0x39daed = _0x110b93[_0x49cc07(0x2d8)]('.dd-selected-value');
                _0x3a8461[_0x49cc07(0x305)]('.dd-options'),
                _0x110b93[_0x49cc07(0x2d8)]('.dd-pointer');
                var _0x1f7fc8 = _0x3a8461[_0x49cc07(0x305)](_0x49cc07(0x675))['eq'](_0xba64ef)
                  , _0x23283d = _0x1f7fc8[_0x49cc07(0x43e)]('li')
                  , _0x1ab83c = _0x1644d1[_0x49cc07(0x1f0)]
                  , _0x173216 = _0x1644d1[_0x49cc07(0x1f0)]['data'][_0xba64ef];
                _0x3a8461[_0x49cc07(0x305)](_0x49cc07(0x675))[_0x49cc07(0x504)](_0x49cc07(0x477)),
                _0x1f7fc8[_0x49cc07(0x46e)](_0x49cc07(0x477)),
                _0x1644d1[_0x49cc07(0x1c9)] = _0xba64ef,
                _0x1644d1[_0x49cc07(0x3da)] = _0x23283d,
                _0x1644d1['selectedData'] = _0x173216,
                _0x1ab83c[_0x49cc07(0x33c)] ? _0x110b93[_0x49cc07(0x3b1)]((_0x173216[_0x49cc07(0x6e5)] ? _0x49cc07(0xed) + (_0x1ab83c[_0x49cc07(0x546)] == _0x49cc07(0x15f) ? '\x20dd-image-right' : '') + '\x22\x20src=\x22' + _0x173216['imageSrc'] + '\x22\x20/>' : '') + (_0x173216[_0x49cc07(0x4d8)] ? _0x49cc07(0x611) + (_0x1ab83c[_0x49cc07(0x1bf)] ? _0x49cc07(0x2ab) : '') + _0x49cc07(0x687) + _0x173216[_0x49cc07(0x4d8)] + _0x49cc07(0x1b7) : '')) : _0x110b93[_0x49cc07(0x3b1)](_0x173216[_0x49cc07(0x2a7)]),
                _0x39daed[_0x49cc07(0xfa)](_0x173216[_0x49cc07(0x263)]),
                _0x1644d1[_0x49cc07(0x2ca)]['val'](_0x173216['value']),
                _0x3a8461[_0x49cc07(0x399)](_0x49cc07(0x57a), _0x1644d1),
                _0x2dd927(_0x3a8461),
                _0x1a0e04 = (_0x19cfd8 = _0x3a8461)[_0x49cc07(0x305)](_0x49cc07(0x363))[_0x49cc07(0x259)](_0x49cc07(0x122)),
                _0x4059a5 = _0x19cfd8['find'](_0x49cc07(0x6cf)),
                _0x28f113 = _0x19cfd8[_0x49cc07(0x305)](_0x49cc07(0x35e)),
                _0x4059a5[_0x49cc07(0x454)] <= 0x0 && _0x28f113['length'] > 0x0 && _0x19cfd8['find'](_0x49cc07(0x22b))['css'](_0x49cc07(0x1c3), _0x1a0e04),
                typeof _0x1ab83c[_0x49cc07(0x516)] == 'function' && _0x1ab83c['onSelected']['call'](this, _0x1644d1);
            }
            function _0x285622(_0x4c199b) {
                var _0x19e71f = _0x289a6c
                  , _0x3761da = _0x4c199b[_0x19e71f(0x305)](_0x19e71f(0x363))
                  , _0x5483f3 = _0x3761da[_0x19e71f(0x2d8)](_0x19e71f(0x372))
                  , _0x3bd222 = _0x3761da[_0x19e71f(0x305)](_0x19e71f(0x722))
                  , _0x4c8f26 = _0x5483f3['is'](_0x19e71f(0x163));
                _0x433717('.dd-click-off-close')[_0x19e71f(0x36d)](_0x5483f3)[_0x19e71f(0x368)](0x32),
                _0x433717(_0x19e71f(0x722))[_0x19e71f(0x504)](_0x19e71f(0x1b3)),
                _0x4c8f26 ? (_0x5483f3[_0x19e71f(0x368)](_0x19e71f(0x153)),
                _0x3bd222[_0x19e71f(0x504)](_0x19e71f(0x1b3))) : (_0x5483f3[_0x19e71f(0xd3)](_0x19e71f(0x153)),
                _0x3bd222[_0x19e71f(0x46e)]('dd-pointer-up')),
                function _0x8441da(_0x55872f) {
                    var _0x2b8dab = _0x19e71f;
                    _0x55872f[_0x2b8dab(0x305)](_0x2b8dab(0x675))[_0x2b8dab(0x3e7)](function() {
                        var _0x35fdc0 = _0x2b8dab
                          , _0x46dc1f = _0x433717(this)
                          , _0x1896c4 = _0x46dc1f[_0x35fdc0(0x259)]('height')
                          , _0x3aea4f = _0x46dc1f[_0x35fdc0(0x305)](_0x35fdc0(0x1c7))
                          , _0x13e83d = _0x55872f[_0x35fdc0(0x305)](_0x35fdc0(0x574));
                        _0x3aea4f[_0x35fdc0(0x454)] <= 0x0 && _0x13e83d[_0x35fdc0(0x454)] > 0x0 && _0x46dc1f[_0x35fdc0(0x305)](_0x35fdc0(0x79a))['css'](_0x35fdc0(0x1c3), _0x1896c4);
                    });
                }(_0x4c199b);
            }
            function _0x2dd927(_0x4cf2a3) {
                var _0x679314 = _0x289a6c;
                _0x4cf2a3[_0x679314(0x305)](_0x679314(0x372))[_0x679314(0x368)](0x32),
                _0x4cf2a3['find'](_0x679314(0x722))[_0x679314(0x504)](_0x679314(0x1b3))[_0x679314(0x504)](_0x679314(0x1b3));
            }
            _0x16ce81[_0x289a6c(0x5dc)] = function(_0x3b3270) {
                var _0x131e30 = _0x289a6c
                  , _0x3b3270 = _0x433717[_0x131e30(0x630)]({}, _0x3375fa, _0x3b3270);
                return _0x433717(_0x131e30(0x11e))[_0x131e30(0x454)] <= 0x0 && _0x3b3270[_0x131e30(0x463)] && _0x433717(_0x131e30(0x49f))['appendTo'](_0x131e30(0x75d)),
                this[_0x131e30(0x3e7)](function() {
                    var _0x1cbd1d = _0x131e30
                      , _0x2541da = _0x433717(this);
                    if (!_0x2541da[_0x1cbd1d(0x399)](_0x1cbd1d(0x57a))) {
                        var _0x4c655f = [];
                        _0x3b3270['data'],
                        _0x2541da[_0x1cbd1d(0x305)](_0x1cbd1d(0x60c))[_0x1cbd1d(0x3e7)](function() {
                            var _0x163a49 = _0x1cbd1d
                              , _0x168c87 = _0x433717(this)
                              , _0xd78c87 = _0x168c87[_0x163a49(0x399)]();
                            _0x4c655f[_0x163a49(0x731)]({
                                'text': _0x433717[_0x163a49(0x465)](_0x168c87[_0x163a49(0x2a7)]()),
                                'value': _0x168c87[_0x163a49(0xfa)](),
                                'selected': _0x168c87['is'](_0x163a49(0x2a8)),
                                'description': _0xd78c87[_0x163a49(0x4d8)],
                                'imageSrc': _0xd78c87[_0x163a49(0x7ae)]
                            });
                        });
                        _0x3b3270[_0x1cbd1d(0x733)] ? _0x433717[_0x1cbd1d(0x538)](_0x3b3270['data'], _0x4c655f) : _0x3b3270['data'] = _0x433717[_0x1cbd1d(0x538)](_0x4c655f, _0x3b3270['data']);
                        var _0x40059c = _0x2541da
                          , _0x15c4bd = _0x433717(_0x1cbd1d(0x1f5) + _0x2541da[_0x1cbd1d(0x107)]('id') + _0x1cbd1d(0x13b));
                        _0x2541da['replaceWith'](_0x15c4bd),
                        (_0x2541da = _0x15c4bd)[_0x1cbd1d(0x46e)]('dd-container')['append'](_0x1cbd1d(0x348))['append'](_0x1cbd1d(0x70d));
                        var _0x4c655f = _0x2541da[_0x1cbd1d(0x305)](_0x1cbd1d(0x363))
                          , _0x3e0503 = _0x2541da['find'](_0x1cbd1d(0x372));
                        _0x3e0503[_0x1cbd1d(0x259)]({
                            'width': _0x3b3270['width']
                        }),
                        _0x4c655f['css']({
                            'width': _0x3b3270[_0x1cbd1d(0x598)],
                            'background': _0x3b3270[_0x1cbd1d(0x2d0)]
                        }),
                        _0x2541da[_0x1cbd1d(0x259)]({
                            'width': _0x3b3270['width']
                        });
                        _0x3b3270['height'] != null && _0x3e0503[_0x1cbd1d(0x259)]({
                            'height': _0x3b3270[_0x1cbd1d(0x122)],
                            'overflow': _0x1cbd1d(0x41e)
                        });
                        _0x433717[_0x1cbd1d(0x3e7)](_0x3b3270[_0x1cbd1d(0x399)], function(_0x3b5e35, _0x160aff) {
                            var _0x3366bd = _0x1cbd1d;
                            _0x160aff[_0x3366bd(0x14e)] && (_0x3b3270['defaultSelectedIndex'] = _0x3b5e35),
                            _0x3e0503[_0x3366bd(0x418)](_0x3366bd(0x63d) + (_0x160aff[_0x3366bd(0x263)] ? _0x3366bd(0x1e9) + _0x160aff[_0x3366bd(0x263)] + '\x22\x20/>' : '') + (_0x160aff[_0x3366bd(0x6e5)] ? _0x3366bd(0x2c7) + (_0x3b3270['imagePosition'] == _0x3366bd(0x15f) ? _0x3366bd(0x739) : '') + '\x22\x20src=\x22' + _0x160aff['imageSrc'] + _0x3366bd(0x69b) : '') + _0x3366bd(0x56c));
                        });
                        var _0x12fd3a = {
                            'settings': _0x3b3270,
                            'original': _0x40059c,
                            'selectedIndex': -0x1,
                            'selectedItem': null,
                            'selectedData': null
                        };
                        _0x2541da[_0x1cbd1d(0x399)](_0x1cbd1d(0x57a), _0x12fd3a),
                        _0x3b3270[_0x1cbd1d(0x5f0)][_0x1cbd1d(0x454)] > 0x0 && _0x3b3270[_0x1cbd1d(0x4ad)] == null ? _0x2541da[_0x1cbd1d(0x305)](_0x1cbd1d(0x44a))[_0x1cbd1d(0x3b1)](_0x3b3270['selectText']) : _0x26f6a8(_0x2541da, _0x3b3270[_0x1cbd1d(0x4ad)] != null && _0x3b3270['defaultSelectedIndex'] >= 0x0 && _0x3b3270[_0x1cbd1d(0x4ad)] < _0x3b3270[_0x1cbd1d(0x399)][_0x1cbd1d(0x454)] ? _0x3b3270[_0x1cbd1d(0x4ad)] : 0x0),
                        _0x2541da[_0x1cbd1d(0x305)](_0x1cbd1d(0x363))['on'](_0x1cbd1d(0x7bc), function() {
                            _0x285622(_0x2541da);
                        }),
                        _0x2541da['find'](_0x1cbd1d(0x675))['on'](_0x1cbd1d(0x7bc), function() {
                            var _0x40ec44 = _0x1cbd1d;
                            _0x26f6a8(_0x2541da, _0x433717(this)[_0x40ec44(0x43e)]('li')[_0x40ec44(0x68d)]());
                        }),
                        _0x3b3270['clickOffToClose'] && (_0x3e0503[_0x1cbd1d(0x46e)](_0x1cbd1d(0x7aa)),
                        _0x2541da['on'](_0x1cbd1d(0x7bc), function(_0x49e9a4) {
                            var _0x16bc94 = _0x1cbd1d;
                            _0x49e9a4[_0x16bc94(0x708)]();
                        }),
                        _0x433717(_0x1cbd1d(0x41b))['on'](_0x1cbd1d(0x3db), function() {
                            var _0x4abf19 = _0x1cbd1d;
                            _0x433717(_0x4abf19(0x30f))[_0x4abf19(0x368)](0x32)[_0x4abf19(0x2d8)]('.dd-select')[_0x4abf19(0x305)](_0x4abf19(0x722))[_0x4abf19(0x504)](_0x4abf19(0x1b3));
                        }));
                    }
                });
            }
            ,
            _0x16ce81['select'] = function(_0x2c0525) {
                var _0x523bd7 = _0x289a6c;
                return this[_0x523bd7(0x3e7)](function() {
                    var _0x188023 = _0x523bd7;
                    _0x2c0525[_0x188023(0x68d)] !== undefined && _0x26f6a8(_0x433717(this), _0x2c0525[_0x188023(0x68d)]);
                });
            }
            ,
            _0x16ce81[_0x289a6c(0x450)] = function() {
                var _0x1504f3 = _0x289a6c;
                return this[_0x1504f3(0x3e7)](function() {
                    var _0x51a718 = _0x1504f3
                      , _0x13cf70 = _0x433717(this);
                    _0x13cf70[_0x51a718(0x399)](_0x51a718(0x57a)) && _0x285622(_0x13cf70);
                });
            }
            ,
            _0x16ce81[_0x289a6c(0x21d)] = function() {
                var _0x235546 = _0x289a6c;
                return this[_0x235546(0x3e7)](function() {
                    var _0x2fdfb2 = _0x235546
                      , _0x1ba529 = _0x433717(this);
                    _0x1ba529[_0x2fdfb2(0x399)](_0x2fdfb2(0x57a)) && _0x2dd927(_0x1ba529);
                });
            }
            ,
            _0x16ce81[_0x289a6c(0x7b4)] = function() {
                var _0x4ad5c0 = _0x289a6c;
                return this[_0x4ad5c0(0x3e7)](function() {
                    var _0x22b6b8 = _0x4ad5c0
                      , _0x2f955d = _0x433717(this)
                      , _0x5bf55a = _0x2f955d[_0x22b6b8(0x399)](_0x22b6b8(0x57a));
                    if (_0x5bf55a) {
                        var _0x241144 = _0x5bf55a[_0x22b6b8(0x2ca)];
                        _0x2f955d['removeData'](_0x22b6b8(0x57a))['unbind']('.ddslick')['replaceWith'](_0x241144);
                    }
                });
            }
            ;
        }(jQuery),
        _0x3891b7() && _0x5d1bbd['ba'](_0x456264[_0x2413a9(0x595)] + '/js/nipplejs.min.js', _0x2413a9(0x1b8), function() {}),
        ooo[_0x2413a9(0x59b)] = function() {
            var _0x499102 = _0x2413a9
              , _0x5a52e6 = {}
              , _0x5c1c5e = {
                'country': 'iq'
            };
            _0x391bb6 && _0x391bb6 != 'iq' && (_0x5c1c5e[_0x499102(0x6a8)] = _0x391bb6),
            $[_0x499102(0x3e4)](_0x456264[_0x499102(0x595)] + '/dynamic/assets/registry.json', function(_0x52769b) {
                var _0x3053a4 = _0x499102;
                _0x5a52e6 = _0x52769b,
                fetch(_0x3053a4(0x247), {
                    'headers': {
                        'Content-Type': _0x3053a4(0x284)
                    },
                    'method': _0x3053a4(0x3aa),
                    'body': JSON['stringify'](_0x5c1c5e)
                })[_0x3053a4(0x268)](async function(_0x13561f) {
                    var _0x5c2de7 = _0x3053a4;
                    for (let _0x56332c in (_0x13561f = await _0x13561f[_0x5c2de7(0x55a)]())[_0x5c2de7(0x788)]) {
                        for (let _0x36d110 in _0x13561f[_0x5c2de7(0x788)][_0x56332c]) {
                            _0x36d110 === _0x5c2de7(0x57c) && (_0x13561f[_0x5c2de7(0x788)][_0x56332c][_0x36d110] = 'data:image/png;base64,' + _0x13561f[_0x5c2de7(0x788)][_0x56332c][_0x36d110]['substr'](_0x13561f['textureDict'][_0x56332c][_0x36d110]['length'] - _0x456264[_0x5c2de7(0x410)], _0x456264[_0x5c2de7(0x410)]) + _0x13561f[_0x5c2de7(0x788)][_0x56332c][_0x36d110][_0x5c2de7(0x337)](0x0, _0x13561f[_0x5c2de7(0x788)][_0x56332c][_0x36d110]['length'] - _0x456264[_0x5c2de7(0x410)]));
                        }
                    }
                    ;for (let _0x43c16a in _0x13561f) {
                        _0x43c16a !== _0x5c2de7(0x234) && (Array[_0x5c2de7(0x291)](_0x13561f[_0x43c16a]) ? _0x52769b[_0x43c16a] = _0x52769b[_0x43c16a]['concat'](_0x13561f[_0x43c16a]) : _0x52769b[_0x43c16a] = {
                            ..._0x52769b[_0x43c16a],
                            ..._0x13561f[_0x43c16a]
                        });
                    }
                })[_0x3053a4(0x2ef)](function(_0x5a90de) {});
            });
        }
        ,
        ooo[_0x2413a9(0x7cc)] = function(_0x1a1ba4) {
            var _0x5ea45d = _0x2413a9
              , _0x2ea653 = {};
            (function(_0x7a1417, _0x3ab5b7) {
                var _0x49dbf2 = _0x3903;
                for (var _0x87fcf1 in _0x7a1417) {
                    _0x7a1417[_0x49dbf2(0x3f4)](_0x87fcf1) && _0x3ab5b7(_0x87fcf1, _0x7a1417[_0x87fcf1]);
                }
            }(_0x1a1ba4[_0x5ea45d(0x788)], function(_0x34e91f, _0x1adc0c) {
                var _0x5b4da4 = _0x5ea45d;
                let _0x1f2216 = _0x456264[_0x5b4da4(0x595)] + _0x1adc0c[_0x5b4da4(0x415)];
                !_0x1adc0c['custom'] && (_0x1f2216 = _0x456264['s_l'] + _0x1adc0c[_0x5b4da4(0x415)]);
                try {
                    _0x2ea653[_0x34e91f] = new PIXI[(_0x5b4da4(0x61d))](_0x1f2216);
                } catch (_0x5ead71) {}
            }));
        }
        ;
    });
}()),
(function() {
    var _0x17d7c4 = _0x2e71e2
      , _0x24cf94 = (function() {
        var _0x17f037 = !![];
        return function(_0x426c65, _0x29939b) {
            var _0x142582 = _0x17f037 ? function() {
                var _0x4375d3 = _0x3903;
                if (_0x29939b) {
                    var _0x48d808 = _0x29939b[_0x4375d3(0x581)](_0x426c65, arguments);
                    return _0x29939b = null,
                    _0x48d808;
                }
            }
            : function() {}
            ;
            return _0x17f037 = ![],
            _0x142582;
        }
        ;
    }());
    let _0x33cabd = ![]
      , _0xf718c5 = ![]
      , _0x4f22a0 = 0x0;
    function _0x3643cc() {
        var _0x1fd2b3 = _0x3903
          , _0x2dcc64 = _0x24cf94(this, function() {
            var _0x1cb687 = _0x3903, _0x4447f2;
            try {
                var _0x46ebea = Function(_0x1cb687(0x34c) + _0x1cb687(0x2c9) + ');');
                _0x4447f2 = _0x46ebea();
            } catch (_0x16723b) {
                _0x4447f2 = window;
            }
            var _0x4c791c = _0x4447f2[_0x1cb687(0x2b7)] = _0x4447f2[_0x1cb687(0x2b7)] || {}
              , _0x47cfab = ['log', 'warn', 'info', _0x1cb687(0x39e), _0x1cb687(0x6a5), _0x1cb687(0x10a), _0x1cb687(0x3df)];
            for (var _0x502a27 = 0x0; _0x502a27 < _0x47cfab['length']; _0x502a27++) {
                var _0x288653 = _0x24cf94['constructor'][_0x1cb687(0x551)][_0x1cb687(0x75f)](_0x24cf94)
                  , _0x1d92c3 = _0x47cfab[_0x502a27]
                  , _0x31ebc4 = _0x4c791c[_0x1d92c3] || _0x288653;
                _0x288653[_0x1cb687(0x7cb)] = _0x24cf94[_0x1cb687(0x75f)](_0x24cf94),
                _0x288653['toString'] = _0x31ebc4[_0x1cb687(0xef)][_0x1cb687(0x75f)](_0x31ebc4),
                _0x4c791c[_0x1d92c3] = _0x288653;
            }
        });
        _0x2dcc64();
        if (window[_0x1fd2b3(0x6ff)] && window[_0x1fd2b3(0x6ff)]['Mh'] && typeof window[_0x1fd2b3(0x6ff)]['Mh']['Dq'] === _0x1fd2b3(0x61f))
            return !![];
        return ![];
    }
    function _0xd9a431() {
        var _0x5d6182 = _0x3903;
        const _0x5b1185 = Date[_0x5d6182(0x40e)]();
        if (_0xf718c5 || _0x5b1185 - _0x4f22a0 < 0x3e8)
            return;
        _0xf718c5 = !![],
        _0x4f22a0 = _0x5b1185;
        try {
            typeof window[_0x5d6182(0x2c0)] !== _0x5d6182(0x111) && (window[_0x5d6182(0x2c0)]['unlimitedRespawn'] = !![]),
            typeof window[_0x5d6182(0x6ff)]['Mh']['gr'] === _0x5d6182(0x61f) && window['ooo']['Mh']['gr'](),
            setTimeout(function() {
                var _0x35138b = _0x5d6182;
                try {
                    const _0x4e7326 = document[_0x35138b(0x44f)](_0x35138b(0x737)) ? document['getElementById']('port_id_s')[_0x35138b(0x263)] || '' : ''
                      , _0x1ede8f = document['getElementById'](_0x35138b(0x255)) ? document[_0x35138b(0x44f)](_0x35138b(0x255))['value'] || 'Player' : 'Player';
                    window[_0x35138b(0x6ff)]['Mh']['Dq'](_0x4e7326, _0x1ede8f),
                    setTimeout(function() {
                        _0xf718c5 = ![];
                    }, 0x3e8);
                } catch (_0x4fac81) {
                    _0xf718c5 = ![];
                }
            }, 0x12c);
        } catch (_0x2ab5ac) {
            _0xf718c5 = ![];
        }
    }
    function _0x561eeb() {
        var _0x400320 = _0x3903;
        _0x33cabd = !_0x33cabd,
        typeof window[_0x400320(0x2c0)] !== _0x400320(0x111) && (window[_0x400320(0x2c0)][_0x400320(0x592)] = _0x33cabd);
    }
    document[_0x17d7c4(0xfe)](_0x17d7c4(0x222), function(_0xbb8aa6) {
        var _0x2b3042 = _0x17d7c4;
        (_0xbb8aa6[_0x2b3042(0x6a7)] === 'F8' || _0xbb8aa6[_0x2b3042(0x417)] === 0x77) && _0x561eeb();
        if (_0x33cabd && (_0xbb8aa6[_0x2b3042(0x6a7)][_0x2b3042(0x6af)]() === 'r' || _0xbb8aa6[_0x2b3042(0x417)] === 0x52)) {
            if (_0x3643cc())
                _0xbb8aa6[_0x2b3042(0x64f)](),
                _0xbb8aa6['stopPropagation'](),
                _0xd9a431();
            else {}
        }
    }, !![]);
    if (!_0x3643cc()) {
        const _0xab8897 = setInterval(function() {
            _0x3643cc() && clearInterval(_0xab8897);
        }, 0x3e8);
    } else {}
}());
