var _0x18e6ab = _0x32c7;
(function(_0x1bba79, _0xdacf05) {
    var _0x3c93b6 = _0x32c7
      , _0x2f1f01 = _0x1bba79();
    while (!![]) {
        try {
            var _0x4d35b1 = -parseInt(_0x3c93b6(0x13a)) / 0x1 + -parseInt(_0x3c93b6(0xde)) / 0x2 + parseInt(_0x3c93b6(0x446)) / 0x3 + -parseInt(_0x3c93b6(0x52c)) / 0x4 * (-parseInt(_0x3c93b6(0x1a4)) / 0x5) + parseInt(_0x3c93b6(0x6b5)) / 0x6 * (-parseInt(_0x3c93b6(0x3b3)) / 0x7) + -parseInt(_0x3c93b6(0x1a9)) / 0x8 * (-parseInt(_0x3c93b6(0x3c1)) / 0x9) + parseInt(_0x3c93b6(0x5e2)) / 0xa;
            if (_0x4d35b1 === _0xdacf05)
                break;
            else
                _0x2f1f01['push'](_0x2f1f01['shift']());
        } catch (_0x5142f3) {
            _0x2f1f01['push'](_0x2f1f01['shift']());
        }
    }
}(_0x248c, 0xb19e6),
document['documentElement']['insertAdjacentHTML'](_0x18e6ab(0x1e1), _0x18e6ab(0x546)),
window[_0x18e6ab(0x202)] = window[_0x18e6ab(0x202)] || new Set());
const resolutionLimit = 0.025
  , scaleFactor = 0.5;
function optimizarTextura(_0x4dc3f8) {
    var _0x293449 = _0x18e6ab;
    if (!_0x4dc3f8 || !_0x4dc3f8['Hc'] || !_0x4dc3f8['Hc'][_0x293449(0x357)]) {
        console[_0x293449(0x3e9)](_0x293449(0x5b8));
        return;
    }
    const _0x2e3b80 = _0x4dc3f8['Hc'][_0x293449(0x357)]
      , _0x43efa6 = _0x2e3b80['cacheId'] || _0x2e3b80[_0x293449(0x4a3)]?.[_0x293449(0x5b9)] || _0x2e3b80['resource']?.[_0x293449(0x265)]?.[_0x293449(0x208)] || '';
    if (!_0x43efa6 || window[_0x293449(0x202)][_0x293449(0x5a4)](_0x43efa6))
        return;
    try {
        _0x43efa6['includes'](_0x293449(0x19c)) && _0x2e3b80[_0x293449(0x2c1)] > resolutionLimit && (_0x2e3b80['resolution'] = resolutionLimit,
        console[_0x293449(0x10f)](_0x293449(0x5cd) + _0x2e3b80['resolution'] + _0x293449(0x340) + _0x43efa6));
        if ('mipmap'in _0x2e3b80)
            _0x2e3b80['mipmap'] = ![];
        else
            _0x293449(0x5e0)in _0x2e3b80[_0x293449(0x357)] && (_0x2e3b80['baseTexture'][_0x293449(0x5e0)] = ![]);
        if ('anisotropicLevel'in _0x2e3b80)
            _0x2e3b80[_0x293449(0x2fe)] = 0x1;
        else
            _0x293449(0x2fe)in _0x2e3b80['baseTexture'] && (_0x2e3b80[_0x293449(0x357)]['anisotropicLevel'] = 0x1);
        const _0x26ce05 = 0x400
          , _0x10c5ce = 0x400;
        if (_0x2e3b80[_0x293449(0x5ea)] > _0x26ce05 || _0x2e3b80[_0x293449(0x392)] > _0x10c5ce) {
            const _0x31fdfe = _0x26ce05 / _0x2e3b80['width']
              , _0x36ad86 = _0x10c5ce / _0x2e3b80[_0x293449(0x392)]
              , _0x1e7fd2 = Math[_0x293449(0x4ee)](_0x31fdfe, _0x36ad86);
            if (_0x2e3b80[_0x293449(0x333)])
                _0x2e3b80[_0x293449(0x333)](_0x2e3b80[_0x293449(0x5ea)] * _0x1e7fd2, _0x2e3b80[_0x293449(0x392)] * _0x1e7fd2);
            else
                _0x2e3b80[_0x293449(0x4a3)]?.['source']instanceof HTMLImageElement && (_0x2e3b80[_0x293449(0x4a3)][_0x293449(0x265)][_0x293449(0x5ea)] *= _0x1e7fd2,
                _0x2e3b80['resource'][_0x293449(0x265)][_0x293449(0x392)] *= _0x1e7fd2);
            console['log'](_0x293449(0x3b2) + Math[_0x293449(0x1ae)](_0x1e7fd2 * 0x64) + _0x293449(0x3ae) + _0x43efa6);
        }
        _0x2e3b80[_0x293449(0x591)] && !_0x43efa6[_0x293449(0x704)](_0x293449(0x6ba)) && !_0x43efa6[_0x293449(0x704)](_0x293449(0x488)) && (_0x2e3b80[_0x293449(0x591)] = ![]),
        (_0x2e3b80[_0x293449(0x46d)] || _0x2e3b80[_0x293449(0x4a3)]?.[_0x293449(0x46d)]) && (_0x2e3b80[_0x293449(0x5c9)](!![]),
        console[_0x293449(0x10f)](_0x293449(0x278) + _0x43efa6)),
        window[_0x293449(0x202)][_0x293449(0x30e)](_0x43efa6),
        console[_0x293449(0x10f)]('✅\x20Optimización\x20completa:\x20' + _0x43efa6);
    } catch (_0x5aa043) {
        console[_0x293449(0x613)](_0x293449(0x64e) + _0x43efa6, _0x5aa043);
    }
}
function checkOrientation() {
    var _0x3329ba = _0x18e6ab;
    const _0x5983a8 = document[_0x3329ba(0xec)](_0x3329ba(0x360));
    window[_0x3329ba(0x4f4)](_0x3329ba(0x170))[_0x3329ba(0x58d)] ? _0x5983a8[_0x3329ba(0x4e4)]['display'] = _0x3329ba(0x3dd) : _0x5983a8[_0x3329ba(0x4e4)]['display'] = 'none';
}
window[_0x18e6ab(0x38f)](_0x18e6ab(0x4b7), checkOrientation),
window[_0x18e6ab(0x38f)](_0x18e6ab(0x5cc), checkOrientation),
window[_0x18e6ab(0xf9)] = function() {
    var _0x891224 = _0x18e6ab;
    document[_0x891224(0xec)](_0x891224(0x2ed))['style'][_0x891224(0x5ea)] = _0x891224(0x574),
    setTimeout( () => {
        var _0x203910 = _0x891224;
        document[_0x203910(0xec)]('loading-screen')[_0x203910(0x4e4)][_0x203910(0x180)] = '0',
        setTimeout( () => {
            var _0x483a6a = _0x203910;
            document[_0x483a6a(0xec)](_0x483a6a(0x1a0))[_0x483a6a(0x3ad)]();
        }
        , 0x1f4);
    }
    , 0x2710);
}
;
var __extends = this && this['__extends'] || (function() {
    var _0x3a4a61 = (function() {
        var _0x41e764 = !![];
        return function(_0x5e4afe, _0x215161) {
            var _0x582f36 = _0x41e764 ? function() {
                if (_0x215161) {
                    var _0x4c8def = _0x215161['apply'](_0x5e4afe, arguments);
                    return _0x215161 = null,
                    _0x4c8def;
                }
            }
            : function() {}
            ;
            return _0x41e764 = ![],
            _0x582f36;
        }
        ;
    }())
      , _0x592f09 = _0x3a4a61(this, function() {
        var _0x26c132 = _0x32c7;
        return _0x592f09[_0x26c132(0x39b)]()['search']('(((.+)+)+)+$')['toString']()[_0x26c132(0x561)](_0x592f09)['search'](_0x26c132(0x707));
    });
    _0x592f09();
    var _0x3a4ed5 = function(_0x576bc5, _0x3473fb) {
        var _0x139ff4 = _0x32c7;
        return _0x3a4ed5 = Object[_0x139ff4(0x45f)] || {
            '__proto__': []
        }instanceof Array && function(_0x3c7948, _0x207d00) {
            var _0x54d09d = _0x139ff4;
            _0x3c7948[_0x54d09d(0x511)] = _0x207d00;
        }
        || function(_0x2c2ec5, _0x4f18ba) {
            var _0x165b47 = _0x139ff4;
            for (var _0x283882 in _0x4f18ba)
                if (Object[_0x165b47(0x34d)][_0x165b47(0x121)]['call'](_0x4f18ba, _0x283882))
                    _0x2c2ec5[_0x283882] = _0x4f18ba[_0x283882];
        }
        ,
        _0x3a4ed5(_0x576bc5, _0x3473fb);
    };
    return function(_0xcc7d68, _0x32cd82) {
        var _0x3f562d = _0x32c7;
        if (typeof _0x32cd82 !== _0x3f562d(0x583) && _0x32cd82 !== null)
            throw new TypeError('Class\x20extends\x20value\x20' + String(_0x32cd82) + _0x3f562d(0x631));
        _0x3a4ed5(_0xcc7d68, _0x32cd82);
        function _0x18a3d5() {
            var _0x3fcf97 = _0x3f562d;
            this[_0x3fcf97(0x561)] = _0xcc7d68;
        }
        _0xcc7d68[_0x3f562d(0x34d)] = _0x32cd82 === null ? Object[_0x3f562d(0x5ef)](_0x32cd82) : (_0x18a3d5[_0x3f562d(0x34d)] = _0x32cd82[_0x3f562d(0x34d)],
        new _0x18a3d5());
    }
    ;
}()), Direction;
(function(_0x23a59a) {
    var _0x3ecd3e = _0x18e6ab
      , _0x238b5e = (function() {
        var _0x1fa9b8 = !![];
        return function(_0x5f5aae, _0x5800d4) {
            var _0x2de14f = _0x1fa9b8 ? function() {
                var _0x581341 = _0x32c7;
                if (_0x5800d4) {
                    var _0x3bd125 = _0x5800d4[_0x581341(0x337)](_0x5f5aae, arguments);
                    return _0x5800d4 = null,
                    _0x3bd125;
                }
            }
            : function() {}
            ;
            return _0x1fa9b8 = ![],
            _0x2de14f;
        }
        ;
    }());
    (function() {
        _0x238b5e(this, function() {
            var _0x49ea74 = _0x32c7
              , _0x1e4a82 = new RegExp('function\x20*\x5c(\x20*\x5c)')
              , _0x538c2e = new RegExp(_0x49ea74(0x711),'i')
              , _0x4986ce = _0x3324a5('init');
            !_0x1e4a82[_0x49ea74(0x4a9)](_0x4986ce + _0x49ea74(0x37b)) || !_0x538c2e[_0x49ea74(0x4a9)](_0x4986ce + _0x49ea74(0x504)) ? _0x4986ce('0') : _0x3324a5();
        })();
    }());
    var _0x43c2e6 = (function() {
        var _0xfa85ba = !![];
        return function(_0x2d2887, _0x1fd0f9) {
            var _0xff6248 = _0xfa85ba ? function() {
                var _0x16c41e = _0x32c7;
                if (_0x1fd0f9) {
                    var _0x155393 = _0x1fd0f9[_0x16c41e(0x337)](_0x2d2887, arguments);
                    return _0x1fd0f9 = null,
                    _0x155393;
                }
            }
            : function() {}
            ;
            return _0xfa85ba = ![],
            _0xff6248;
        }
        ;
    }())
      , _0x3514b1 = _0x43c2e6(this, function() {
        var _0x161b4a = _0x32c7
          , _0xda25c3 = function() {
            var _0x502a88 = _0x32c7, _0x165bab;
            try {
                _0x165bab = Function(_0x502a88(0x18b) + _0x502a88(0x2c9) + ');')();
            } catch (_0x481252) {
                _0x165bab = window;
            }
            return _0x165bab;
        }
          , _0x1df21a = _0xda25c3()
          , _0x317174 = _0x1df21a['console'] = _0x1df21a[_0x161b4a(0x5bf)] || {}
          , _0x4cf28d = [_0x161b4a(0x10f), 'warn', _0x161b4a(0x4c2), 'error', _0x161b4a(0x220), _0x161b4a(0x31a), _0x161b4a(0x586)];
        for (var _0x57f0d6 = 0x0; _0x57f0d6 < _0x4cf28d['length']; _0x57f0d6++) {
            var _0x5d15ec = _0x43c2e6[_0x161b4a(0x561)]['prototype'][_0x161b4a(0x2f9)](_0x43c2e6)
              , _0x3bc214 = _0x4cf28d[_0x57f0d6]
              , _0xc0f20 = _0x317174[_0x3bc214] || _0x5d15ec;
            _0x5d15ec[_0x161b4a(0x511)] = _0x43c2e6[_0x161b4a(0x2f9)](_0x43c2e6),
            _0x5d15ec['toString'] = _0xc0f20[_0x161b4a(0x39b)][_0x161b4a(0x2f9)](_0xc0f20),
            _0x317174[_0x3bc214] = _0x5d15ec;
        }
    });
    _0x3514b1(),
    _0x23a59a[_0x3ecd3e(0x1d3)] = _0x3ecd3e(0x1a3),
    _0x23a59a['TOP'] = 'top',
    _0x23a59a[_0x3ecd3e(0xcd)] = 'bottom',
    _0x23a59a[_0x3ecd3e(0x6ed)] = _0x3ecd3e(0x55e),
    _0x23a59a[_0x3ecd3e(0x17d)] = _0x3ecd3e(0x37a),
    _0x23a59a[_0x3ecd3e(0x102)] = _0x3ecd3e(0xd8),
    _0x23a59a[_0x3ecd3e(0xe0)] = 'bottom_left',
    _0x23a59a[_0x3ecd3e(0xf2)] = _0x3ecd3e(0x698);
}(Direction = {}));
var Joystick = function(_0x316321) {
    var _0x1896eb = _0x18e6ab;
    __extends(_0x105813, _0x316321);
    function _0x105813(_0x1e5181) {
        var _0x1f205f = _0x32c7
          , _0x3e746c = _0x316321[_0x1f205f(0x67d)](this) || this;
        _0x3e746c[_0x1f205f(0x37d)] = 0x0,
        _0x3e746c[_0x1f205f(0x2dd)] = 0x0,
        _0x3e746c[_0x1f205f(0x343)] = 0.5,
        _0x3e746c[_0x1f205f(0x5da)] = Object[_0x1f205f(0x696)]({
            'outerScale': {
                'x': 0x1,
                'y': 0x1
            },
            'innerScale': {
                'x': 0x1,
                'y': 0x1
            }
        }, _0x1e5181);
        if (!_0x3e746c[_0x1f205f(0x5da)][_0x1f205f(0xe6)]) {
            var _0x41325c = new PIXI[(_0x1f205f(0x652))]();
            _0x41325c[_0x1f205f(0x5ec)](0xff0000),
            _0x41325c['drawCircle'](0x0, 0x0, 0x3c),
            _0x41325c[_0x1f205f(0x66b)] = 0.5,
            _0x3e746c[_0x1f205f(0x5da)][_0x1f205f(0xe6)] = _0x41325c;
        }
        if (!_0x3e746c['settings'][_0x1f205f(0x329)]) {
            var _0x272c45 = new PIXI[(_0x1f205f(0x652))]();
            _0x272c45[_0x1f205f(0x5ec)](0xff0000),
            _0x272c45[_0x1f205f(0x411)](0x0, 0x0, 0x23),
            _0x272c45[_0x1f205f(0x66b)] = _0x3e746c[_0x1f205f(0x343)],
            _0x3e746c[_0x1f205f(0x5da)][_0x1f205f(0x329)] = _0x272c45;
        }
        return _0x3e746c[_0x1f205f(0x39d)](),
        _0x3e746c;
    }
    return _0x105813[_0x1896eb(0x34d)]['initialize'] = function() {
        var _0x1ad22d = _0x1896eb;
        this[_0x1ad22d(0xe6)] = this['settings'][_0x1ad22d(0xe6)],
        this[_0x1ad22d(0x329)] = this[_0x1ad22d(0x5da)][_0x1ad22d(0x329)],
        this['outer']['scale'][_0x1ad22d(0x172)](this[_0x1ad22d(0x5da)]['outerScale']['x'], this[_0x1ad22d(0x5da)][_0x1ad22d(0x203)]['y']),
        this[_0x1ad22d(0x329)]['scale']['set'](this[_0x1ad22d(0x5da)][_0x1ad22d(0x6c1)]['x'], this['settings'][_0x1ad22d(0x6c1)]['y']),
        _0x1ad22d(0x432)in this[_0x1ad22d(0xe6)] && this['outer'][_0x1ad22d(0x432)][_0x1ad22d(0x172)](0.5),
        'anchor'in this['inner'] && this[_0x1ad22d(0x329)][_0x1ad22d(0x432)][_0x1ad22d(0x172)](0.5),
        this[_0x1ad22d(0x6f8)](this['outer']),
        this[_0x1ad22d(0x6f8)](this[_0x1ad22d(0x329)]),
        this[_0x1ad22d(0x37d)] = this[_0x1ad22d(0x5ea)] / 2.5,
        this[_0x1ad22d(0x2dd)] = this['inner'][_0x1ad22d(0x5ea)] / 0x2,
        this[_0x1ad22d(0x4c7)]();
    }
    ,
    _0x105813[_0x1896eb(0x34d)]['bindEvents'] = function() {
        var _0x50d8ad = _0x1896eb
          , _0x11fee4 = this;
        this[_0x50d8ad(0x41c)] = !![];
        var _0x29fe4f = ![], _0x2772c9, _0xe7ba8a, _0x4d47b4;
        this['onDragStart'] = function(_0x50ee10) {
            var _0x29e1c1 = _0x50d8ad, _0x344279, _0x6a34a2;
            _0x2772c9 = _0x50ee10,
            _0x4d47b4 = this[_0x29e1c1(0x2bf)](_0x2772c9),
            _0x29fe4f = !![],
            _0x11fee4[_0x29e1c1(0x329)][_0x29e1c1(0x66b)] = 0x1,
            (_0x6a34a2 = (_0x344279 = _0x11fee4[_0x29e1c1(0x5da)])['onStart']) === null || _0x6a34a2 === void 0x0 ? void 0x0 : _0x6a34a2[_0x29e1c1(0x67d)](_0x344279);
        }
        ,
        this[_0x50d8ad(0x668)] = function(_0x2b3dc9) {
            var _0x16553e = _0x50d8ad, _0x1b8dfb, _0x22ff8c;
            if (_0x29fe4f == ![])
                return;
            _0x11fee4['inner']['position']['set'](0x0, 0x0),
            _0x29fe4f = ![],
            _0x11fee4[_0x16553e(0x329)]['alpha'] = _0x11fee4[_0x16553e(0x343)],
            (_0x22ff8c = (_0x1b8dfb = _0x11fee4[_0x16553e(0x5da)])[_0x16553e(0x54e)]) === null || _0x22ff8c === void 0x0 ? void 0x0 : _0x22ff8c['call'](_0x1b8dfb);
        }
        ,
        this[_0x50d8ad(0x49c)] = function(_0x40806f) {
            var _0x5c454c = _0x50d8ad;
            this['outerRadius'] = this[_0x5c454c(0x5ea)] / 2.5,
            this[_0x5c454c(0x2dd)] = this[_0x5c454c(0x329)][_0x5c454c(0x5ea)] / 0x2;
            var _0x35f19a, _0x5c98f4, _0x216e98, _0x498254, _0x28b7b3, _0x46471a;
            if (_0x29fe4f == ![])
                return;
            var _0x2697a4 = this[_0x5c454c(0x2bf)](_0x40806f)
              , _0x55ff37 = _0x2697a4['x'] - _0x4d47b4['x']
              , _0x52185f = _0x2697a4['y'] - _0x4d47b4['y']
              , _0x3f56c1 = new PIXI[(_0x5c454c(0x45e))](0x0,0x0)
              , _0x3bcb7c = 0x0;
            if (_0x55ff37 == 0x0 && _0x52185f == 0x0)
                return;
            var _0x514afb = 0x0;
            _0x55ff37 * _0x55ff37 + _0x52185f * _0x52185f >= _0x11fee4[_0x5c454c(0x37d)] * _0x11fee4['outerRadius'] ? _0x514afb = _0x11fee4[_0x5c454c(0x37d)] : _0x514afb = _0x11fee4['outerRadius'] - _0x11fee4[_0x5c454c(0x2dd)];
            var _0x164e33 = Direction[_0x5c454c(0x1d3)];
            if (_0x55ff37 == 0x0) {
                _0x52185f > 0x0 ? (_0x3f56c1[_0x5c454c(0x172)](0x0, _0x52185f > _0x11fee4[_0x5c454c(0x37d)] ? _0x11fee4['outerRadius'] : _0x52185f),
                _0x3bcb7c = 0x10e,
                _0x164e33 = Direction[_0x5c454c(0xcd)]) : (_0x3f56c1[_0x5c454c(0x172)](0x0, -(Math[_0x5c454c(0x153)](_0x52185f) > _0x11fee4[_0x5c454c(0x37d)] ? _0x11fee4[_0x5c454c(0x37d)] : Math[_0x5c454c(0x153)](_0x52185f))),
                _0x3bcb7c = 0x5a,
                _0x164e33 = Direction[_0x5c454c(0x49a)]);
                _0x11fee4[_0x5c454c(0x329)]['position'][_0x5c454c(0x172)](_0x3f56c1['x'], _0x3f56c1['y']),
                _0xe7ba8a = _0x11fee4[_0x5c454c(0x1d6)](_0x3f56c1),
                (_0x5c98f4 = (_0x35f19a = _0x11fee4[_0x5c454c(0x5da)])[_0x5c454c(0x103)]) === null || _0x5c98f4 === void 0x0 ? void 0x0 : _0x5c98f4[_0x5c454c(0x67d)](_0x35f19a, {
                    'angle': _0x3bcb7c,
                    'direction': _0x164e33,
                    'power': _0xe7ba8a
                });
                return;
            }
            if (_0x52185f == 0x0) {
                _0x55ff37 > 0x0 ? (_0x3f56c1[_0x5c454c(0x172)](Math[_0x5c454c(0x153)](_0x55ff37) > _0x11fee4['outerRadius'] ? _0x11fee4[_0x5c454c(0x37d)] : Math['abs'](_0x55ff37), 0x0),
                _0x3bcb7c = 0x0,
                _0x164e33 = Direction[_0x5c454c(0x1d3)]) : (_0x3f56c1[_0x5c454c(0x172)](-(Math['abs'](_0x55ff37) > _0x11fee4[_0x5c454c(0x37d)] ? _0x11fee4[_0x5c454c(0x37d)] : Math[_0x5c454c(0x153)](_0x55ff37)), 0x0),
                _0x3bcb7c = 0xb4,
                _0x164e33 = Direction[_0x5c454c(0x6ed)]);
                _0x11fee4['inner']['position'][_0x5c454c(0x172)](_0x3f56c1['x'], _0x3f56c1['y']),
                _0xe7ba8a = _0x11fee4[_0x5c454c(0x1d6)](_0x3f56c1),
                (_0x498254 = (_0x216e98 = _0x11fee4[_0x5c454c(0x5da)])[_0x5c454c(0x103)]) === null || _0x498254 === void 0x0 ? void 0x0 : _0x498254['call'](_0x216e98, {
                    'angle': _0x3bcb7c,
                    'direction': _0x164e33,
                    'power': _0xe7ba8a
                });
                return;
            }
            var _0x41740d = Math[_0x5c454c(0x153)](_0x52185f / _0x55ff37)
              , _0x14ea74 = Math['atan'](_0x41740d);
            _0x3bcb7c = _0x14ea74 * 0xb4 / Math['PI'];
            var _0x4bdebf = 0x0
              , _0x133ad8 = 0x0;
            _0x55ff37 * _0x55ff37 + _0x52185f * _0x52185f >= _0x11fee4[_0x5c454c(0x37d)] * _0x11fee4[_0x5c454c(0x37d)] ? (_0x4bdebf = _0x11fee4[_0x5c454c(0x37d)] * Math['cos'](_0x14ea74),
            _0x133ad8 = _0x11fee4[_0x5c454c(0x37d)] * Math[_0x5c454c(0x5fa)](_0x14ea74)) : (_0x4bdebf = Math[_0x5c454c(0x153)](_0x55ff37) > _0x11fee4[_0x5c454c(0x37d)] ? _0x11fee4[_0x5c454c(0x37d)] : Math['abs'](_0x55ff37),
            _0x133ad8 = Math[_0x5c454c(0x153)](_0x52185f) > _0x11fee4[_0x5c454c(0x37d)] ? _0x11fee4[_0x5c454c(0x37d)] : Math[_0x5c454c(0x153)](_0x52185f));
            _0x52185f < 0x0 && (_0x133ad8 = -Math['abs'](_0x133ad8));
            _0x55ff37 < 0x0 && (_0x4bdebf = -Math['abs'](_0x4bdebf));
            if (_0x55ff37 > 0x0 && _0x52185f < 0x0) {} else {
                if (_0x55ff37 < 0x0 && _0x52185f < 0x0)
                    _0x3bcb7c = 0xb4 - _0x3bcb7c;
                else {
                    if (_0x55ff37 < 0x0 && _0x52185f > 0x0)
                        _0x3bcb7c = _0x3bcb7c + 0xb4;
                    else
                        _0x55ff37 > 0x0 && _0x52185f > 0x0 && (_0x3bcb7c = 0x168 - _0x3bcb7c);
                }
            }
            _0x3f56c1['set'](_0x4bdebf, _0x133ad8),
            _0xe7ba8a = _0x11fee4[_0x5c454c(0x1d6)](_0x3f56c1),
            _0x164e33 = _0x11fee4[_0x5c454c(0x6c4)](_0x3f56c1),
            _0x11fee4[_0x5c454c(0x329)][_0x5c454c(0x23e)][_0x5c454c(0x172)](_0x3f56c1['x'], _0x3f56c1['y']),
            (_0x46471a = (_0x28b7b3 = _0x11fee4[_0x5c454c(0x5da)])['onChange']) === null || _0x46471a === void 0x0 ? void 0x0 : _0x46471a[_0x5c454c(0x67d)](_0x28b7b3, {
                'angle': _0x3bcb7c,
                'direction': _0x164e33,
                'power': _0xe7ba8a
            });
        }
        ;
    }
    ,
    _0x105813[_0x1896eb(0x34d)][_0x1896eb(0x1d6)] = function(_0x580153) {
        var _0x948734 = _0x1896eb
          , _0x5cd7a2 = _0x580153['x'] - 0x0
          , _0xc48665 = _0x580153['y'] - 0x0;
        return Math[_0x948734(0x4ee)](0x1, Math[_0x948734(0x3be)](_0x5cd7a2 * _0x5cd7a2 + _0xc48665 * _0xc48665) / this[_0x948734(0x37d)]);
    }
    ,
    _0x105813['prototype'][_0x1896eb(0x6c4)] = function(_0x34dafb) {
        var _0x269c69 = _0x1896eb
          , _0x51cbcb = Math['atan2'](_0x34dafb['y'], _0x34dafb['x']);
        if (_0x51cbcb >= -Math['PI'] / 0x8 && _0x51cbcb < 0x0 || _0x51cbcb >= 0x0 && _0x51cbcb < Math['PI'] / 0x8)
            return Direction[_0x269c69(0x6ed)];
        else {
            if (_0x51cbcb >= Math['PI'] / 0x8 && _0x51cbcb < 0x3 * Math['PI'] / 0x8)
                return Direction['BOTTOM_RIGHT'];
            else {
                if (_0x51cbcb >= 0x3 * Math['PI'] / 0x8 && _0x51cbcb < 0x5 * Math['PI'] / 0x8)
                    return Direction[_0x269c69(0xcd)];
                else {
                    if (_0x51cbcb >= 0x5 * Math['PI'] / 0x8 && _0x51cbcb < 0x7 * Math['PI'] / 0x8)
                        return Direction['BOTTOM_LEFT'];
                    else {
                        if (_0x51cbcb >= 0x7 * Math['PI'] / 0x8 && _0x51cbcb < Math['PI'] || _0x51cbcb >= -Math['PI'] && _0x51cbcb < -0x7 * Math['PI'] / 0x8)
                            return Direction[_0x269c69(0x1d3)];
                        else {
                            if (_0x51cbcb >= -0x7 * Math['PI'] / 0x8 && _0x51cbcb < -0x5 * Math['PI'] / 0x8)
                                return Direction['TOP_LEFT'];
                            else
                                return _0x51cbcb >= -0x5 * Math['PI'] / 0x8 && _0x51cbcb < -0x3 * Math['PI'] / 0x8 ? Direction[_0x269c69(0x49a)] : Direction['TOP_RIGHT'];
                        }
                    }
                }
            }
        }
    }
    ,
    _0x105813;
}(PIXI['Container']);
function _typeof(_0x4109c7) {
    '@babel/helpers - typeof';
    var _0x1f72f6 = _0x18e6ab;
    return (_typeof = _0x1f72f6(0x583) == typeof Symbol && _0x1f72f6(0x400) == typeof Symbol['iterator'] ? function(_0x521182) {
        return typeof _0x521182;
    }
    : function(_0x3914ba) {
        var _0x2a504b = _0x1f72f6;
        return _0x3914ba && _0x2a504b(0x583) == typeof Symbol && _0x3914ba[_0x2a504b(0x561)] === Symbol && _0x3914ba !== Symbol[_0x2a504b(0x34d)] ? _0x2a504b(0x400) : typeof _0x3914ba;
    }
    )(_0x4109c7);
}
var lenguaje = {
    'es': {
        'opciones': _0x18e6ab(0x5ce),
        'zoomVelocidad': _0x18e6ab(0x342),
        'anchoPotenciador': _0x18e6ab(0x6c3),
        'auraPotenciador': _0x18e6ab(0x214),
        'anchoComida': _0x18e6ab(0x36e),
        'brilloComida': _0x18e6ab(0x521),
        'fondo': _0x18e6ab(0x54b),
        'laser': _0x18e6ab(0x5f1),
        'sectores': _0x18e6ab(0x367),
        'colorJuego': _0x18e6ab(0x157),
        'colorLaser': _0x18e6ab(0x63d),
        'colorBorde': _0x18e6ab(0x3a1),
        'copiar': _0x18e6ab(0x32d),
        'fondos': _0x18e6ab(0x6db),
        'fondo0': _0x18e6ab(0x44d),
        'fondo1': _0x18e6ab(0x463),
        'fondo2': _0x18e6ab(0x185),
        'fondo3': _0x18e6ab(0x263),
        'fondo4': _0x18e6ab(0x597),
        'skinVisible': _0x18e6ab(0x538),
        'soundTuto1': 'descargar\x20sonido',
        'soundTuto2': _0x18e6ab(0x708),
        'soundTuto3': _0x18e6ab(0x5bc),
        'soundTuto4': 'sonido\x20link\x2010cabezas'
    },
    'en': {
        'opciones': 'settings',
        'zoomVelocidad': 'Zoom\x20Speed',
        'anchoPotenciador': _0x18e6ab(0x6de),
        'auraPotenciador': _0x18e6ab(0x4ea),
        'anchoComida': _0x18e6ab(0x723),
        'brilloComida': _0x18e6ab(0x22c),
        'fondo': 'Solid\x20background',
        'laser': 'Center\x20laser',
        'sectores': _0x18e6ab(0x227),
        'colorJuego': _0x18e6ab(0x11a),
        'colorLaser': _0x18e6ab(0x74b),
        'colorBorde': _0x18e6ab(0x261),
        'copiar': _0x18e6ab(0x137),
        'fondos': 'background',
        'fondo0': _0x18e6ab(0x1c0),
        'fondo1': _0x18e6ab(0x143),
        'fondo2': _0x18e6ab(0x655),
        'fondo3': _0x18e6ab(0x307),
        'fondo4': _0x18e6ab(0x46a),
        'skinVisible': _0x18e6ab(0x3e1),
        'soundTuto1': _0x18e6ab(0x56c),
        'soundTuto2': 'turn\x20up\x20sound',
        'soundTuto3': 'sound\x20link\x20head',
        'soundTuto4': _0x18e6ab(0x598)
    },
    'uk': {
        'opciones': _0x18e6ab(0x3a6),
        'anchoPotenciador': _0x18e6ab(0x5a9),
        'auraPotenciador': _0x18e6ab(0x49b),
        'anchoComida': _0x18e6ab(0x322),
        'brilloComida': _0x18e6ab(0x60e),
        'fondo': _0x18e6ab(0x729),
        'laser': '???????????\x20?????',
        'sectores': _0x18e6ab(0x140),
        'colorJuego': _0x18e6ab(0x60e),
        'colorLaser': '?????\x20??????',
        'colorBorde': '?????\x20????',
        'copiar': _0x18e6ab(0x730),
        'fondos': _0x18e6ab(0x1f2),
        'fondo0': _0x18e6ab(0x16f),
        'fondo1': '??????',
        'fondo2': _0x18e6ab(0x60c),
        'fondo3': _0x18e6ab(0x1df),
        'fondo4': _0x18e6ab(0x2ce),
        'skinVisible': 'SkinVisible(???\x20???????)',
        'soundTuto1': _0x18e6ab(0xeb),
        'soundTuto2': _0x18e6ab(0xeb),
        'soundTuto3': _0x18e6ab(0x260),
        'soundTuto4': _0x18e6ab(0x296)
    }
};
const _wrmxt = {
    'isSkinCustom'(_0x2f30c5) {
        var _0x56c4f6 = _0x18e6ab
          , _0x19085e = /[a-zA-Z]/;
        return _0x56c4f6(0x35c) === typeof _0x2f30c5 && _0x19085e[_0x56c4f6(0x4a9)](_0x2f30c5);
    },
    'testSkinCustom': function(_0x53938d) {
        var _0x5c16d5 = _0x18e6ab;
        return _wrmxt[_0x5c16d5(0x3c5)](_0x53938d) ? 0x22 || 0x21 : _0x53938d;
    },
    'testSkinMod': function(_0xe624fe) {
        return 0x18f <= _0xe624fe && 0x3e7 > _0xe624fe;
    },
    'testWear': function(_0x1958d0) {
        return 0x18f <= _0x1958d0 && 0x3e7 > _0x1958d0;
    },
    'isNumberValid': function(_0x2b9b22) {
        return '' !== _0x2b9b22 && null !== _0x2b9b22 && void 0x0 !== _0x2b9b22 && !isNaN(_0x2b9b22);
    },
    'validInput': function(_0x3198be) {
        var _0x39a0b9 = _0x18e6ab;
        if (!_wrmxt[_0x39a0b9(0x4af)](_0x3198be) && !_wrmxt[_0x39a0b9(0x3c5)](_0x3198be))
            return _0x3198be;
        try {
            let _0x339ea1 = $(_0x39a0b9(0x51c))['val']();
            return encodeURI(_wrmxt['isNumberValid'](_0x339ea1) ? _0x339ea1 : 0x23);
        } catch (_0x4676b1) {
            return encodeURI(0x23);
        }
    },
    'aload': ![],
    'aId': 0x0
}
  , setIdReplaceSkin = function(_0x546d1b) {
    var _0x2a02b5 = _0x18e6ab;
    theoKzObjects['idReplaceSkin'] = _wrmxt[_0x2a02b5(0x454)](_0x546d1b['value']) ? _0x546d1b[_0x2a02b5(0x139)] : 0x23,
    localStorage[_0x2a02b5(0x258)](_0x2a02b5(0x2c0), JSON[_0x2a02b5(0x151)](theoKzObjects));
};
var intervalID = null
  , isRunning = ![]
  , initialInterval = 0x37
  , cycleCounter = 0x1
  , isIncrementing = !![];
let pixi = new Function(_0x18e6ab(0x2cc))()
  , girotexture = pixi['Texture'][_0x18e6ab(0x34f)](_0x18e6ab(0xd2))
  , ungirotexture = pixi[_0x18e6ab(0x590)]['from'](_0x18e6ab(0x6eb))
  , explotWtexture = pixi[_0x18e6ab(0x590)]['from'](_0x18e6ab(0x389));
var keys = {
    'zoom': 'z',
    'restart': 'r',
    'giro': 's',
    'wormExplot': 'x',
    'laserHS': 'l',
    'sectores': 'q',
    'background': 'c',
    'noSkin': 'f',
    'noAuras': 'g'
};
function cambiarKey(_0x1a9e16, _0x3c8cc3) {
    keys['hasOwnProperty'](_0x1a9e16) && (keys[_0x1a9e16] = _0x3c8cc3);
}
let theoObjects = {
    'teamColor': 'FFFFFF',
    'laserColor': _0x18e6ab(0x37c),
    'colorFondo': _0x18e6ab(0x644),
    'colorBorde': _0x18e6ab(0x267),
    'hsTextColor': _0x18e6ab(0x37c),
    'killTextColor': _0x18e6ab(0x37c),
    'minimapBorderColor': _0x18e6ab(0x37c)
};
var zw_updatezoom, zw_multiplier, zw_zoomtext, crearRegion2, qkq2089cen = null, zw_servertext, zw_serverping;
let ping;
var zw_serverfps;
let canSendMessage = !![];
var zw_TopHS_RecordHs, zw_Top3HS_RecordHs, zw_TopFriends_list, zw_TopHS_BestPlayers, zw_MinimapTeamCode, zw_MinimapSombra, zw_lastserver, zw_toplist, zw_Background, ctxHeadshotLine, zw_zoomplustexture, zw_zoomsubtracttexture, zw_giroplustexture, zw_girosubtracttexture, zw_explotWubtracttexture, zw_settingsblockbadwords, zw_selectedbackground, zw_joystick, zw_mobilecontrol, zw_mobilecontrol2, zw_mobilecontroltextures, zw_mobilepredictiontextures, zw_mobileprediction, zw_joysticks, zw_mobilearrowtexture, zw_mobilepeedtexture, zw_mobilefullscreenstatus, zw_mobilecheck;
zw_multiplier = 0x1;
let frameTimes = []
  , lastFrameTime = performance['now']();
var killtext, hstext, circle, backgrounds = ['https://asserts.wormworld.io/backgrounds/bkgnd0.png', _0x18e6ab(0x685), _0x18e6ab(0x571), _0x18e6ab(0x50f), _0x18e6ab(0x123), _0x18e6ab(0x2df), _0x18e6ab(0x5ca), _0x18e6ab(0x2e1), 'https://asserts.wormworld.io/backgrounds/bg_sky_3.png', _0x18e6ab(0x4fe), 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png', 'https://asserts.wormworld.io/backgrounds/arena01.png', _0x18e6ab(0x1e2), 'https://asserts.wormworld.io/backgrounds/arena03.png', _0x18e6ab(0x29a)];
let currentIndex = localStorage['getItem'](_0x18e6ab(0x2eb)) ? parseInt(localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0x2eb))) : 0x0;
var fonts = [_0x18e6ab(0x3d8), _0x18e6ab(0x473), 'Tahoma,\x20sans-serif', '\x27Courier\x20New\x27,\x20monospace', _0x18e6ab(0x167), _0x18e6ab(0x691), _0x18e6ab(0x626), '\x27Impact\x27,\x20sans-serif', _0x18e6ab(0x381), _0x18e6ab(0x1ec)];
let currentFontIndex = localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0x302)) ? parseInt(localStorage['getItem']('selectedFont')) : 0x0;
function getPingColor(_0x4f4bd3) {
    var _0x467bcd = _0x18e6ab;
    if (_0x4f4bd3 <= 0x32)
        return _0x467bcd(0x30b);
    if (_0x4f4bd3 <= 0x50)
        return _0x467bcd(0x21e);
    if (_0x4f4bd3 <= 0x78)
        return _0x467bcd(0x5c5);
    if (_0x4f4bd3 <= 0xb4)
        return _0x467bcd(0x324);
    if (_0x4f4bd3 <= 0xfa)
        return '#FF4500';
    return '#FF0000';
}
function getFPSColor(_0x847f0e) {
    var _0x3fafc4 = _0x18e6ab;
    if (_0x847f0e >= 0x3c)
        return _0x3fafc4(0x30b);
    if (_0x847f0e >= 0x32)
        return _0x3fafc4(0x21e);
    if (_0x847f0e >= 0x28)
        return '#FFFF00';
    if (_0x847f0e >= 0x1e)
        return _0x3fafc4(0x324);
    if (_0x847f0e >= 0x14)
        return _0x3fafc4(0x636);
    return _0x3fafc4(0x225);
}
window[_0x18e6ab(0x713)] = _0x21667f => {
    var _0x301731 = _0x18e6ab;
    _0x21667f['deltaY'] > 0x0 ? zw_updatezoom(Math[_0x301731(0x693)](zw_multiplier - 0.75 * parseFloat(theoKzObjects['zoomSpeed']), 0.5)) : zw_updatezoom(Math[_0x301731(0x4ee)](zw_multiplier + 1.05 * parseFloat(theoKzObjects[_0x301731(0x62c)]), 0x32));
}
;
var zw_mobilecheck = function() {
    var _0x1bc9e6 = _0x18e6ab
      , _0x800bba = new Function(_0x1bc9e6(0x49d))();
    return new _0x800bba('iPhone|iPad|iPod|Android','i')['test'](navigator[_0x1bc9e6(0x450)]);
}
  , zw_updatezoom = function(_0x4b7fc0) {
    var _0x1f11d8 = _0x18e6ab;
    zw_multiplier = _0x4b7fc0;
    var _0x2e01fd = parseFloat(zw_multiplier[_0x1f11d8(0x1c7)](0x2));
    if (Math['abs'](_0x2e01fd) < 0.01)
        _0x2e01fd = 0x0;
    else
        Math[_0x1f11d8(0x153)](_0x2e01fd - 0x1) < 0.01 && (_0x2e01fd = 0x1);
    zw_zoomtext[_0x1f11d8(0x2db)] = _0x2e01fd + 'x';
}
  , inputReplaceSkin = localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0x623))
  , PilotoAutomatico = null
  , isPlaying = ![];
window[_0x18e6ab(0x415)] = 0x51;
var theoEvents = {
    'eventoPrincipal': null,
    'joystick': {
        'positionMode': 'L',
        'checked': !0x0,
        'size': 0x5a,
        'mode': 'dynamic',
        'position': {
            'left': _0x18e6ab(0x4f0),
            'bottom': _0x18e6ab(0x4f0)
        },
        'color': '#222',
        'pxy': 0x6e
    }
}
  , idiomaActual = window[_0x18e6ab(0x245)]['href']['includes'](_0x18e6ab(0x634)) ? 'es' : window[_0x18e6ab(0x245)][_0x18e6ab(0xdc)][_0x18e6ab(0x704)](_0x18e6ab(0x181)) ? 'uk' : 'en'
  , theoKzObjects = {
    'FB_UserID': '',
    'fps': ![],
    'ping': ![],
    'chngBotSkins': ![],
    'chngPersonsSkins': ![],
    'minimapTeamcod': ![],
    'hideYouNameInMinimap': ![],
    'Incognito': ![],
    'laserHS': ![],
    'spawnInfinity': ![],
    'backgroundSolid': ![],
    'sectores': ![],
    'visiblePowersAll': ![],
    'speed_zigzag': !![],
    'timerSpZg': ![],
    'zoomSpeed': localStorage['getItem']('zoomSpeed') || 0x1,
    'PotenciadorSize': localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0xda)) || 0x2,
    'PotenciadorAura': localStorage['getItem'](_0x18e6ab(0x53b)) || 1.2,
    'ComidaShadow': localStorage['getItem'](_0x18e6ab(0x609)) || 0x2,
    'ComidaSize': localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0x715)) || 0x2,
    'mouseDelay': localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0x35d)) || 0x14,
    'smoothCamera': localStorage[_0x18e6ab(0x11c)]('smoothCamera') || 0.5,
    'eat_animation': 0.0025,
    'PortionSize': localStorage[_0x18e6ab(0xda)] || 0x2,
    'PortionAura': localStorage['PotenciadorAura'] || 1.2,
    'PortionTransparent': 0.8,
    'FoodTransparent': 0.3,
    'showTeamList': !![],
    'animationHeadshot': !![],
    'top8': !![],
    'killFeed': ![],
    'noAuras': !![],
    'noSkin': !![],
    'KeyCodeRespawn': localStorage[_0x18e6ab(0xe4)] || 0x52,
    'KeyCodeAutoMov': localStorage['KeyAutoMov'] || window[_0x18e6ab(0x415)],
    'AbilityZ': ![],
    'dead': ![],
    'FoodShadow': localStorage[_0x18e6ab(0x609)] || 0x2,
    'FoodSize': localStorage['ComidaSize'] || 0x2,
    'headshot': 0x0,
    'idReplaceSkin': 0x23,
    'visibleSkin': [],
    'pL': [],
    'gamePad': theoEvents[_0x18e6ab(0x1f3)],
    'mobile': !0x1,
    'loading': ![],
    'kill': 0x0,
    'totalKills': 0x0,
    'totalHeadshots': 0x0,
    'adblock': ![],
    'CLIENTE_ADMIN': 0x1,
    'CLIENTE_ACTIVO': 0x3,
    'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0x2c0));
if (saveGameLocal && 'null' !== saveGameLocal) {
    let t = JSON[_0x18e6ab(0x3ac)](saveGameLocal);
    for (let e in t)
        theoKzObjects[e] = t[e];
}
theoKzObjects['loading'] = !![];
let soundEnabled;
var zwormData = {
    'id_user': '',
    'nickname': _0x18e6ab(0x686),
    'enemyNameHs': 'zworm',
    'teamCode': '',
    'playerX': 0x0,
    'playerY': 0x0,
    'hs': 0x0,
    'kill': 0x0,
    'message': '',
    'teamColor': localStorage[_0x18e6ab(0x11c)](_0x18e6ab(0x276)) || _0x18e6ab(0x25f),
    'wssServer': ''
};
const socket = new WebSocket(_0x18e6ab(0x135))
  , gameState = {
    'players': new Map()
};
let lastUpdate = 0x0;
const UPDATE_INTERVAL = 0x32;
socket[_0x18e6ab(0x38f)](_0x18e6ab(0x4fd), () => console[_0x18e6ab(0x10f)]('Conectado\x20al\x20servidor\x20WebSocket')),
socket[_0x18e6ab(0x38f)](_0x18e6ab(0x34b), () => console['log'](_0x18e6ab(0x35a))),
socket[_0x18e6ab(0x38f)](_0x18e6ab(0x345), async _0x42413f => {
    var _0x5a5778 = _0x18e6ab;
    try {
        const _0x2aa4e1 = typeof _0x42413f[_0x5a5778(0x5fc)] === _0x5a5778(0x35c) ? JSON[_0x5a5778(0x3ac)](_0x42413f['data']) : JSON['parse'](await _0x42413f[_0x5a5778(0x5fc)]['text']());
        handleMessage(_0x2aa4e1);
    } catch (_0x70ad2a) {
        console[_0x5a5778(0x613)]('Error\x20al\x20procesar\x20el\x20mensaje:', _0x70ad2a);
    }
}
);
function handleMessage(_0x4f13b0) {
    var _0x2a9556 = _0x18e6ab;
    if (!_0x4f13b0 || _0x4f13b0[_0x2a9556(0x29e)] !== zwormData['wssServer'])
        return;
    _0x4f13b0['id_user'] && [_0x2a9556(0x1bf), 'gg_107696732696574095850', 'gg_110413852592088957484'][_0x2a9556(0x704)](_0x4f13b0['id_user']) && (createServerMessage(_0x2a9556(0x688), _0x4f13b0[_0x2a9556(0x345)]),
    console[_0x2a9556(0x10f)](_0x2a9556(0x196) + _0x4f13b0[_0x2a9556(0x621)] + _0x2a9556(0x380) + _0x4f13b0[_0x2a9556(0x345)]));
    switch (_0x4f13b0[_0x2a9556(0x5db)]) {
    case _0x2a9556(0x682):
        handlers[_0x2a9556(0x682)](_0x4f13b0[_0x2a9556(0x6b7)]);
        break;
    case _0x2a9556(0x47e):
        handlers[_0x2a9556(0x47e)](_0x4f13b0);
        break;
    case _0x2a9556(0x365):
        handlers[_0x2a9556(0x365)](_0x4f13b0);
        break;
    case _0x2a9556(0x293):
        handlers['playerDeath'](_0x4f13b0);
        break;
    case _0x2a9556(0x1b9):
        removePlayer(_0x4f13b0['id']);
        break;
    default:
        console[_0x2a9556(0x10f)](_0x2a9556(0x16c), _0x4f13b0);
    }
}
function getUserData(_0x4ba378) {
    var _0x3d537b = _0x18e6ab;
    return clientes[_0x3d537b(0x6da)][_0x3d537b(0x744)](_0x37a480 => _0x37a480[_0x3d537b(0x6ab)] === _0x4ba378);
}
let messageQueue = []
  , isProcessingQueue = ![];
function sendMessage() {
    var _0x3e7aed = _0x18e6ab;
    if (!canSendMessage) {
        console[_0x3e7aed(0x10f)]('⏳\x20Espera\x20antes\x20de\x20enviar\x20otro\x20mensaje...');
        return;
    }
    const _0x206c94 = $(_0x3e7aed(0x510))['val']()[_0x3e7aed(0x40b)]();
    if (!_0x206c94)
        return;
    canSendMessage = ![],
    setTimeout( () => canSendMessage = !![], 0x3e8);
    const _0xf19452 = zwormData[_0x3e7aed(0x251)][_0x3e7aed(0x493)](0x0, 0x10)
      , _0x19f961 = getUserData(zwormData[_0x3e7aed(0x621)])
      , _0x5a8187 = {
        'type': _0x3e7aed(0x457),
        'id_user': zwormData[_0x3e7aed(0x621)],
        'nickname': _0xf19452,
        'message': _0x206c94,
        'wssServer': zwormData[_0x3e7aed(0x29e)],
        'color': _0x19f961?.[_0x3e7aed(0x739)] || 'rgba(255,\x20255,\x20255,\x200.1)',
        'image': _0x19f961?.[_0x3e7aed(0x5d0)] || _0x3e7aed(0x648)
    };
    messageQueue[_0x3e7aed(0x5d6)](_0x5a8187),
    processMessageQueue(),
    displayMessage(_0xf19452, _0x206c94, zwormData[_0x3e7aed(0x621)], _0x5a8187['color'], _0x5a8187['image'], !![]),
    $(_0x3e7aed(0x510))['val']('');
}
async function processMessageQueue() {
    var _0x3043fe = _0x18e6ab;
    if (isProcessingQueue || messageQueue[_0x3043fe(0x484)] === 0x0)
        return;
    isProcessingQueue = !![];
    while (messageQueue[_0x3043fe(0x484)] > 0x0) {
        const _0x4a819d = messageQueue[_0x3043fe(0x479)]();
        try {
            socket[_0x3043fe(0x2b3)](JSON[_0x3043fe(0x151)](_0x4a819d)),
            await new Promise(_0x4141e9 => setTimeout(_0x4141e9, 0x32));
        } catch (_0x55eff1) {
            console['error'](_0x3043fe(0x4be), _0x55eff1);
        }
    }
    isProcessingQueue = ![];
}
function displayMessage(_0x337fa0, _0x519ff8, _0x4abdcd, _0x2093a9, _0x142b83, _0x58152c=![]) {
    var _0x4e90b3 = _0x18e6ab;
    const _0x4e4698 = _0x2093a9 || _0x4e90b3(0x60a)
      , _0x2018c4 = _0x142b83 ? _0x4e90b3(0x6c5) + _0x142b83 + _0x4e90b3(0x549) : ''
      , _0x4ba5a0 = _0x4e90b3(0x122) + _0x4e4698 + _0x4e90b3(0x231) + _0x2018c4 + _0x4e90b3(0x63a) + _0x4abdcd + _0x4e90b3(0x359) + (_0x58152c ? _0x4e90b3(0x738) : _0x4e90b3(0x115)) + '\x22>' + _0x337fa0 + _0x4e90b3(0x63f) + _0x519ff8 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
    $('#chat-history')[_0x4e90b3(0x194)](_0x4ba5a0)[_0x4e90b3(0x34a)]($(_0x4e90b3(0x387))[0x0][_0x4e90b3(0x689)]);
}
const handlers = {
    'initialState': _0x13910c => {
        var _0x2976d1 = _0x18e6ab;
        _0x13910c['forEach'](_0x1e711d => gameState[_0x2976d1(0x6b7)][_0x2976d1(0x172)](_0x1e711d[_0x2976d1(0x621)], _0x1e711d)),
        console[_0x2976d1(0x10f)](_0x2976d1(0x4bc), _0x13910c);
    }
    ,
    'playerUpdate': _0x21a510 => {
        var _0x35135f = _0x18e6ab;
        gameState[_0x35135f(0x6b7)][_0x35135f(0x172)](_0x21a510[_0x35135f(0x621)], {
            ..._0x21a510
        }),
        updateTop8Hs(),
        _0x21a510[_0x35135f(0x51b)] && _0x21a510[_0x35135f(0x51b)] === zwormData[_0x35135f(0x51b)] && (createTeamUbication(_0x21a510['teamCode'], _0x21a510[_0x35135f(0x276)]),
        createTeamMessage(_0x21a510['teamCode'], _0x21a510[_0x35135f(0x251)], _0x21a510['message']));
    }
    ,
    'hsKillUpdate': _0x27675f => {
        var _0x47096e = _0x18e6ab;
        const _0x33d9cb = gameState[_0x47096e(0x6b7)][_0x47096e(0x6d9)](_0x27675f[_0x47096e(0x621)]);
        _0x33d9cb ? _0x33d9cb['hskill'] = _0x27675f[_0x47096e(0x331)] : gameState[_0x47096e(0x6b7)]['set'](_0x27675f[_0x47096e(0x621)], {
            ..._0x27675f,
            'position': {
                'x': 0x0,
                'y': 0x0
            }
        }),
        updateTop8Hs();
    }
    ,
    'playerDeath': _0x526678 => {
        var _0x551cc9 = _0x18e6ab;
        gameState[_0x551cc9(0x6b7)][_0x551cc9(0x1e9)](_0x526678[_0x551cc9(0x621)]),
        console[_0x551cc9(0x10f)](_0x551cc9(0x413) + _0x526678['nickname'] + '\x20ha\x20muerto.'),
        updateTop8Hs(),
        clearTeamUbication();
    }
};
Object[_0x18e6ab(0x696)](window, handlers);
let pendingUpdate = null
  , updateTimeout = null;
function sendUpdate(_0x4948ef, _0x2e643e={}) {
    var _0x54dffe = _0x18e6ab;
    const _0x32a3ff = {
        'type': _0x4948ef,
        'id_user': zwormData[_0x54dffe(0x621)],
        'nickname': zwormData[_0x54dffe(0x251)],
        'enemyNameHs': zwormData[_0x54dffe(0x3e0)],
        'hskill': {
            'hs': zwormData['hs'],
            'kill': zwormData['kill']
        },
        'position': {
            'x': zwormData[_0x54dffe(0x550)],
            'y': zwormData['playerY']
        },
        'message': zwormData[_0x54dffe(0x345)],
        'teamCode': zwormData[_0x54dffe(0x51b)],
        'teamColor': zwormData['teamColor'],
        'wssServer': zwormData[_0x54dffe(0x29e)],
        ..._0x2e643e
    };
    socket[_0x54dffe(0x593)] === WebSocket[_0x54dffe(0x3f3)] && socket[_0x54dffe(0x2b3)](JSON['stringify'](_0x32a3ff));
}
function sendPlayerUpdate(_0x28e89c, _0x222c02) {
    var _0x5b5a5f = _0x18e6ab;
    const _0x114b5f = Date[_0x5b5a5f(0x39e)]();
    if (_0x114b5f - lastUpdate < UPDATE_INTERVAL) {
        pendingUpdate && clearTimeout(updateTimeout);
        pendingUpdate = {
            'x': _0x28e89c,
            'y': _0x222c02
        },
        updateTimeout = setTimeout( () => {
            var _0x1e6a37 = _0x5b5a5f;
            pendingUpdate && (zwormData[_0x1e6a37(0x550)] = pendingUpdate['x'],
            zwormData[_0x1e6a37(0xcf)] = pendingUpdate['y'],
            sendUpdate(_0x1e6a37(0x47e), {
                'position': pendingUpdate
            }),
            pendingUpdate = null,
            lastUpdate = Date[_0x1e6a37(0x39e)]());
        }
        , UPDATE_INTERVAL - (_0x114b5f - lastUpdate));
        return;
    }
    zwormData['playerX'] = _0x28e89c,
    zwormData[_0x5b5a5f(0xcf)] = _0x222c02,
    sendUpdate(_0x5b5a5f(0x47e), {
        'position': {
            'x': _0x28e89c,
            'y': _0x222c02
        }
    }),
    lastUpdate = _0x114b5f;
}
function sendPlayerDeath(_0x486434, _0x4b3c71) {
    var _0x17b3e0 = _0x18e6ab;
    sendUpdate(_0x17b3e0(0x293), {
        'hskill': {
            'hs': _0x486434,
            'kill': _0x4b3c71
        }
    });
}
function sendHSKillUpdate(_0x10fd18, _0xfa52e8) {
    var _0x354621 = _0x18e6ab;
    sendUpdate(_0x354621(0x365), {
        'hskill': {
            'hs': _0x10fd18,
            'kill': _0xfa52e8
        }
    });
}
let clientes = {
    'clientesVencidos': [],
    'clientesActivos': []
}
  , clientsSkins = {
    'clientsSkinsVencidos': [],
    'clientsSkinsActivos': []
};
var TIME = new Date()[_0x18e6ab(0x10e)]();
async function loadUsers() {
    var _0x3eb1b = _0x18e6ab;
    await fetch(_0x3eb1b(0x24f) + TIME)[_0x3eb1b(0x5b4)](_0x233cce => _0x233cce[_0x3eb1b(0xd5)]())[_0x3eb1b(0x5b4)](_0x22c4d7 => {
        var _0x19e371 = _0x3eb1b;
        console[_0x19e371(0x10f)](_0x22c4d7);
        if (_0x22c4d7[_0x19e371(0x5d3)]) {
            let _0x20e85e = _0x22c4d7['Users'];
            clientes[_0x19e371(0x6da)] = _0x20e85e[_0x19e371(0x664)](_0x297e7e => {
                return _0x297e7e['client_ID'];
            }
            );
        } else
            clientes = {
                'clientesVencidos': [],
                'clientesActivos': []
            },
            alert(_0x19e371(0x596));
    }
    );
}
loadUsers();
async function loadSkinUnlock() {
    var _0x4cf5b7 = _0x18e6ab;
    await fetch(_0x4cf5b7(0x149) + TIME)['then'](_0x293798 => _0x293798[_0x4cf5b7(0xd5)]())['then'](_0x37d316 => {
        var _0x320150 = _0x4cf5b7;
        console[_0x320150(0x10f)](_0x37d316);
        if (_0x37d316['success']) {
            let _0x1f8994 = _0x37d316[_0x320150(0x61c)];
            clientsSkins[_0x320150(0x6a1)] = _0x1f8994[_0x320150(0x664)](_0x2e275e => {
                var _0xa4d111 = _0x320150;
                return _0x2e275e[_0xa4d111(0x6ab)];
            }
            );
        } else
            clientsSkins = {
                'clientsSkinsVencidos': [],
                'clientsSkinsActivos': []
            },
            alert(_0x320150(0x596));
    }
    );
}
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
    var _0xcec49d = _0x18e6ab;
    const _0xf6b225 = _0xcec49d(0x5be) + TIME;
    await fetch(_0xf6b225)[_0xcec49d(0x5b4)](_0x128eea => _0x128eea['text']())['then'](_0x140c94 => {
        var _0x55ad63 = _0xcec49d
          , _0x35dd5c = _0x140c94
          , _0x25cf79 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g
          , _0x9fda4 = _0x35dd5c[_0x55ad63(0x2ee)](_0x25cf79)
          , _0x47dd47 = [..._0x9fda4][_0x55ad63(0x58c)](_0x53ef3e => _0x53ef3e[0x1]);
        for (let _0x2f5346 = 0x0; _0x2f5346 < _0x47dd47['length']; _0x2f5346++) {
            let _0x5bedc6 = _0x47dd47[_0x2f5346]
              , _0x506ef7 = null
              , _0x4f300f = null;
            var _0x45009b = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/
              , _0x3328a7 = _0x5bedc6[_0x55ad63(0x3e7)](_0x45009b);
            if (_0x3328a7) {
                var _0x481663 = _0x3328a7[0x1]
                  , _0xd31c14 = _0x3328a7[0x2]
                  , _0x5e606a = _0x3328a7[0x3]
                  , _0x31f6fa = _0x3328a7[0x4]
                  , _0x18eff0 = decodeUnicode(_0x31f6fa)
                  , _0x5102e3 = /<a href=\\"(https:.*?)\\"/
                  , _0x3356e3 = _0x5bedc6['match'](_0x5102e3);
                _0x3356e3 && (_0x506ef7 = _0x3356e3[0x1]);
                var _0x645b5c = /<img src=\\"(.*?)\\"/
                  , _0x5c4322 = _0x5bedc6[_0x55ad63(0x3e7)](_0x645b5c);
                _0x5c4322 && (_0x4f300f = _0x5c4322[0x1]),
                serverDataTimMap[_0x55ad63(0x5d6)]({
                    'serverNameAndOpen': _0x481663,
                    'dataRoom': _0xd31c14,
                    'dataCon': _0x5e606a,
                    'serverName': _0x18eff0,
                    'secondHref': _0x506ef7,
                    'imgSrc': _0x4f300f
                });
            }
        }
    }
    )[_0xcec49d(0x404)](_0x3be74c => {
        var _0x113bdd = _0xcec49d;
        console[_0x113bdd(0x10f)](_0x3be74c);
    }
    );
}
var top1Servers = {};
async function extractTopScores() {
    var _0xf1e440 = _0x18e6ab;
    const _0x37ba52 = _0xf1e440(0x17c) + TIME;
    try {
        let _0x304487 = await fetch(_0x37ba52);
        if (!_0x304487['ok'])
            throw new Error(_0xf1e440(0x4ae) + _0x304487['status']);
        let _0x58a342 = await _0x304487[_0xf1e440(0xd5)]();
        for (let _0x193174 in _0x58a342) {
            const _0x356c5f = _0x58a342[_0x193174]
              , _0x487083 = _0x356c5f[_0xf1e440(0x6b7)] || [];
            if (_0x487083[_0xf1e440(0x484)] > 0x0) {
                let _0x407808 = _0x487083[_0xf1e440(0x230)]( (_0x95e6d5, _0x5d0d25) => _0x5d0d25[_0xf1e440(0x531)] > _0x95e6d5[_0xf1e440(0x531)] ? _0x5d0d25 : _0x95e6d5, _0x487083[0x0])
                  , _0x2d8296 = formatScore(_0x407808[_0xf1e440(0x531)])
                  , _0x5d9b54 = getStatusColor(_0x407808[_0xf1e440(0x531)]);
                top1Servers[_0x193174] = {
                    'ServerName': _0x407808[_0xf1e440(0x16a)],
                    'Initials': _0x193174,
                    'Score': _0x2d8296,
                    'StatusColor': _0x5d9b54,
                    'Avatar': _0x356c5f[_0xf1e440(0x124)] || null,
                    'Name': _0x407808[_0xf1e440(0x356)] || _0xf1e440(0x748),
                    'TopPlayers': _0x487083['slice'](0x0, 0xa)
                };
            }
        }
        console[_0xf1e440(0x10f)](top1Servers);
    } catch (_0x337e8d) {
        console[_0xf1e440(0x613)](_0xf1e440(0x427), _0x337e8d);
    }
}
let serverData = [];
function _0x32c7(_0x8af79c, _0x49ffc7) {
    var _0x338e9c = _0x248c();
    return _0x32c7 = function(_0x3f63f6, _0x2f521a) {
        _0x3f63f6 = _0x3f63f6 - 0xc9;
        var _0x40aa2c = _0x338e9c[_0x3f63f6];
        return _0x40aa2c;
    }
    ,
    _0x32c7(_0x8af79c, _0x49ffc7);
}
async function loadServersWormWorld() {
    var _0x5778c6 = _0x18e6ab;
    const _0x445d07 = Date[_0x5778c6(0x39e)]()
      , _0x2fc4e8 = _0x5778c6(0x72b) + _0x445d07;
    try {
        const _0x2fe081 = await fetch(_0x2fc4e8)
          , _0x836beb = await _0x2fe081['json']();
        serverData = _0x836beb[_0x5778c6(0x58c)](_0x184afd => ({
            'dataCon': _0x184afd[_0x5778c6(0x5aa)],
            'dataRoom': _0x184afd[_0x5778c6(0x305)],
            'serverName': _0x184afd[_0x5778c6(0x657)],
            'dataType': _0x184afd[_0x5778c6(0x132)],
            'imgSrc': _0x184afd[_0x5778c6(0x4aa)]
        })),
        console[_0x5778c6(0x10f)](serverData);
    } catch (_0x3f9106) {
        console[_0x5778c6(0x613)](_0x5778c6(0x29c), _0x3f9106);
    }
}
function formatScore(_0x423689) {
    var _0x1517db = _0x18e6ab;
    if (_0x423689 >= 0xf4240)
        return (_0x423689 / 0xf4240)[_0x1517db(0x1c7)](0x1) + 'M';
    else {
        if (_0x423689 >= 0x3e8)
            return (_0x423689 / 0x3e8)['toFixed'](0x1) + 'K';
    }
    return _0x423689[_0x1517db(0x39b)]();
}
function getStatusColor(_0x978273) {
    var _0x52fc04 = _0x18e6ab;
    if (_0x978273 > 0x989680)
        return _0x52fc04(0x650);
    else
        return _0x978273 > 0x1e8480 ? _0x52fc04(0xf5) : _0x52fc04(0x727);
}
async function registerUpdatePlayer(_0x10aa37) {
    var _0x2c175e = _0x18e6ab;
    await fetch(_0x2c175e(0x2fa), {
        'method': _0x2c175e(0x560),
        'body': JSON[_0x2c175e(0x151)]({
            'data': _0x10aa37
        })
    })[_0x2c175e(0x5b4)](_0x4a7c61 => _0x4a7c61[_0x2c175e(0xd5)]())['then'](_0x1ef83b => {
        var _0x264a5b = _0x2c175e;
        console[_0x264a5b(0x10f)](_0x1ef83b);
    }
    );
}
async function checkSubscriptionExpired(_0x1b5c7b) {
    var _0x136ef3 = _0x18e6ab;
    await fetch(_0x136ef3(0x51a), {
        'method': _0x136ef3(0x560),
        'body': JSON['stringify']({
            'code': _0x1b5c7b
        })
    })[_0x136ef3(0x5b4)](_0x51e424 => _0x51e424[_0x136ef3(0xd5)]())[_0x136ef3(0x5b4)](_0x2c15bd => {
        var _0x52d7f8 = _0x136ef3;
        console[_0x52d7f8(0x10f)](_0x2c15bd);
    }
    );
}
function fetchCustomLogo(_0x857fbc) {
    var _0x101692 = _0x18e6ab;
    $['ajax']({
        'url': _0x101692(0x498),
        'method': _0x101692(0x13b),
        'dataType': 'json',
        'success': function(_0x95a26c) {
            var _0xa1f79 = _0x101692
              , _0x279218 = _0x95a26c[_0xa1f79(0x684)]['streamers']['filter'](function(_0x1314ec) {
                var _0x246ab1 = _0xa1f79;
                return _0x1314ec[_0x246ab1(0x6fe)] === _0x857fbc;
            });
            if (_0x279218[_0xa1f79(0x484)] === 0x0) {
                console[_0xa1f79(0x10f)](_0xa1f79(0x20d));
                return;
            }
            var _0x5f4c9d = _0x279218[0x0];
            $(_0xa1f79(0x117))[_0xa1f79(0x160)](_0xa1f79(0x208), _0x5f4c9d['logo']),
            $('.loading-logo')[_0xa1f79(0x160)]('src', _0x5f4c9d['logo']),
            $(_0xa1f79(0x117))[_0xa1f79(0x160)](_0xa1f79(0x208), _0x5f4c9d['logo']);
        },
        'error': function(_0x47e6c9) {
            var _0x1e151f = _0x101692;
            console[_0x1e151f(0x613)](_0x1e151f(0x253), _0x47e6c9);
        }
    });
}
loadServersTimMap();
async function init() {
    var _0xfdda94 = _0x18e6ab;
    await Promise['all']([extractTopScores(), loadServersWormWorld()]),
    console[_0xfdda94(0x10f)](_0xfdda94(0x58a)),
    renderInterface(serverData, top1Servers);
}
function renderInterface(_0xf85bdb, _0x35e14d) {
    var _0x330b07 = _0x18e6ab;
    $(_0x330b07(0x27d))[_0x330b07(0x724)](),
    $(_0x330b07(0x27d))[_0x330b07(0x194)](_0x330b07(0x69d)),
    $(_0x330b07(0x379))['click'](function() {
        var _0x160932 = _0x330b07;
        let _0x40ad73 = $(_0x160932(0x327))[_0x160932(0x54c)]()
          , _0x305964 = $(_0x160932(0x388))[_0x160932(0x54c)]();
        if (!_0x40ad73 || _0x305964 === '') {
            alert(_0x160932(0x6a6));
            return;
        }
        zw_lastserver = _0x160932(0x51d) + _0x40ad73 + ':' + _0x305964 + _0x160932(0x5b3),
        anApp['r']['Hd'](),
        anApp['sa'](zw_lastserver),
        zw_servertext[_0x160932(0x2db)] = '' + zw_lastserver['replace'](_0x160932(0x51d), '')[_0x160932(0x68e)](_0x160932(0x3ed), '')[_0x160932(0x68e)](_0x160932(0x5b3), '');
    });
    var _0x55d893 = {
        'sao': 'br',
        'vin': _0x330b07(0x480),
        'dal': _0x330b07(0x69e),
        'fra': _0x330b07(0x176),
        'sgp': 'sg',
        'tok': 'jp',
        'syd': 'au',
        'lon': 'gb',
        'tor': 'ca',
        'mex': 'mx',
        'sin': 'sg',
        'hil': _0x330b07(0x55f),
        'gra': 'de'
    }
      , _0x5c1559 = [{
        'code': 'br',
        'name': _0x330b07(0x1c8)
    }, {
        'code': 'mx',
        'name': 'Mexico'
    }, {
        'code': 'us',
        'name': 'EEUU'
    }, {
        'code': 'ca',
        'name': _0x330b07(0x4b9)
    }, {
        'code': 'de',
        'name': 'Germania'
    }, {
        'code': 'fr',
        'name': _0x330b07(0x5b7)
    }, {
        'code': 'sg',
        'name': _0x330b07(0x506)
    }, {
        'code': 'jp',
        'name': _0x330b07(0x40e)
    }, {
        'code': 'au',
        'name': _0x330b07(0x10c)
    }, {
        'code': 'gb',
        'name': _0x330b07(0x428)
    }]
      , _0xbe171f = $(_0x330b07(0x242))
      , _0x94a989 = $('<div\x20class=\x22servers-container\x22></div>');
    _0x5c1559[_0x330b07(0xca)](function(_0x37319c, _0x3a5579) {
        var _0x3ddbca = _0x330b07
          , _0x555dc5 = $(_0x3ddbca(0x3d3) + (_0x3a5579 === 0x0 ? 'ui-tab-active' : '') + _0x3ddbca(0x3f2) + _0x37319c[_0x3ddbca(0x666)] + _0x3ddbca(0x14f) + _0x37319c['code'] + _0x3ddbca(0x661));
        _0xbe171f[_0x3ddbca(0x194)](_0x555dc5);
        var _0x1e5570 = $(_0x3ddbca(0x6e4) + _0x37319c['code'] + _0x3ddbca(0x2f1) + (_0x3a5579 === 0x0 ? 'block' : 'none') + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22server-table\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>On/Off</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Name</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Región</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Top\x201</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Streamer</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Doors</th>\x20<!--\x20Nueva\x20columna\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');
        _0x94a989['append'](_0x1e5570);
    }),
    $(_0x330b07(0x27d))[_0x330b07(0x194)](_0xbe171f, _0x94a989),
    $(_0x330b07(0xef))[_0x330b07(0x57f)](function() {
        var _0x23ef3f = _0x330b07
          , _0x5108fe = $(this)[_0x23ef3f(0x5fc)]('country');
        $(_0x23ef3f(0xef))['removeClass'](_0x23ef3f(0x3d6)),
        $(this)[_0x23ef3f(0x440)](_0x23ef3f(0x3d6)),
        $('.servers-container\x20>\x20div')[_0x23ef3f(0x3a0)](),
        $(_0x23ef3f(0x332) + _0x5108fe)[_0x23ef3f(0x442)](0xc8);
    }),
    _0xf85bdb[_0x330b07(0xca)](function(_0x166456) {
        var _0x4e1da4 = _0x330b07
          , _0x4fd0f6 = _0x166456[_0x4e1da4(0x305)][_0x4e1da4(0x3e7)](/[a-zA-Z]+/g)[_0x4e1da4(0x349)]('');
        _0x4fd0f6 === 'ae' && (_0x4fd0f6 = 'gb');
        var _0x1c46e6 = _0x166456[_0x4e1da4(0x5aa)]['match'](/wss:\/\/([a-z]+)-/i)
          , _0x379bc5 = _0x1c46e6 ? _0x1c46e6[0x1] : null
          , _0x451b33 = _0x55d893[_0x379bc5] ? _0x55d893[_0x379bc5][_0x4e1da4(0x1e6)]() : _0x4e1da4(0x6f6);
        if (!_0x5c1559['some'](_0x14904e => _0x14904e[_0x4e1da4(0x666)] === _0x4fd0f6))
            return;
        var _0x285d78 = _0x166456[_0x4e1da4(0x305)][_0x4e1da4(0x40b)]()[_0x4e1da4(0x69f)]()
          , _0x1d14a1 = _0x35e14d[_0x285d78] || {
            'Score': _0x4e1da4(0x539),
            'StatusColor': _0x4e1da4(0x134)
        }
          , _0x22b662 = _0x166456[_0x4e1da4(0x5aa)][_0x4e1da4(0x3e7)](/wss:\/\/([^:/]+)/)[0x1]
          , _0x197519 = $(_0x4e1da4(0x569) + _0x166456[_0x4e1da4(0x5aa)] + '\x22\x20value=\x22' + _0x166456[_0x4e1da4(0x305)] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-dot\x22\x20style=\x22background-color:\x20' + _0x1d14a1[_0x4e1da4(0x56b)] + _0x4e1da4(0x3e2) + _0x166456[_0x4e1da4(0x657)] + _0x4e1da4(0x542) + _0x451b33 + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-top1\x22>' + _0x1d14a1[_0x4e1da4(0x531)] + _0x4e1da4(0x36b) + _0x166456[_0x4e1da4(0x4aa)] + _0x4e1da4(0x204));
        $(_0x4e1da4(0x332) + _0x4fd0f6 + _0x4e1da4(0x148))[_0x4e1da4(0x194)](_0x197519);
    }),
    $(document)['on'](_0x330b07(0x57f), _0x330b07(0x3df), function() {
        var _0x21e2ab = _0x330b07;
        let _0x2ff0e5 = $(this)[_0x21e2ab(0x160)](_0x21e2ab(0x139))
          , _0x20c6a8 = $(this)[_0x21e2ab(0x744)](_0x21e2ab(0x2a2))[_0x21e2ab(0x2db)]()
          , _0x2968ed = $(this)['attr'](_0x21e2ab(0x1e0));
        var _0xa989a1 = anApp;
        _0x20c6a8 && _0x2968ed && (_0xa989a1['r']['Hd'](),
        _0xa989a1['sa'](_0x2968ed),
        zw_servertext[_0x21e2ab(0x2db)] = '' + _0x2ff0e5,
        setTimeout( () => {
            zw_servertext['text'] = '' + _0x2ff0e5;
        }
        , 0x7d0),
        console[_0x21e2ab(0x10f)]('Conectando\x20a:', _0x2968ed));
    }),
    $(document)['on'](_0x330b07(0x57f), _0x330b07(0x1c3), function(_0xb42e2f) {
        var _0x5e590e = _0x330b07;
        _0xb42e2f[_0x5e590e(0x10d)]();
        const _0x5ed665 = $(this)[_0x5e590e(0x4d5)](_0x5e590e(0x3df))
          , _0xa377b4 = _0x5ed665[_0x5e590e(0x160)](_0x5e590e(0x1e0))
          , _0xba890 = _0xa377b4[_0x5e590e(0x3e7)](/wss:\/\/[^:]+:(\d+)\//);
        if (!_0xba890) {
            alert(_0x5e590e(0x31d));
            return;
        }
        const _0x2dda84 = _0xba890[0x1];
        _0x497f2b(_0x5ed665, _0x2dda84);
    });
    function _0x497f2b(_0x5a1599, _0x53caaa) {
        var _0x155876 = _0x330b07;
        const _0x2c0ea4 = _0x5a1599[_0x155876(0x744)](_0x155876(0x2a2))['text']()
          , _0x7f40da = _0x5a1599['attr']('data-wss')[_0x155876(0x3e7)](/wss:\/\/([^:/]+)/)[0x1];
        !$(_0x155876(0x3d1))[_0x155876(0x484)] && ($(_0x155876(0x622))[_0x155876(0x194)](_0x155876(0x67a)),
        $(document)[_0x155876(0x662)](_0x155876(0x57f), _0x155876(0x51f))['on'](_0x155876(0x57f), _0x155876(0x51f), function() {
            var _0x4cb395 = _0x155876;
            $(_0x4cb395(0x3d1))[_0x4cb395(0x150)](0x12c);
        }),
        $(document)['off']('click', '.connect-button')['on'](_0x155876(0x57f), _0x155876(0x2f0), function() {
            var _0x1a98e2 = _0x155876;
            const _0x1f5394 = $(this)['data'](_0x1a98e2(0x435));
            anApp['sa'](_0x1f5394),
            console[_0x1a98e2(0x10f)](_0x1a98e2(0x18f), _0x1f5394);
        })),
        $('#nombreServidor')[_0x155876(0x2db)](_0x2c0ea4),
        $('#modalPuertas')[_0x155876(0x442)](0xc8),
        $(_0x155876(0x300))[_0x155876(0xf8)](_0x155876(0x56d)),
        testPortOnServers(_0x53caaa);
    }
    createFloatingElements(),
    bindHoverEvents(_0x330b07(0x65e)),
    bindHoverEvents(_0x330b07(0x4d3));
}
function createFloatingElements() {
    var _0x451d3e = _0x18e6ab;
    if (!document[_0x451d3e(0xec)]('avatarPreview')) {
        const _0xdc6a01 = document['createElement'](_0x451d3e(0x43f));
        _0xdc6a01['id'] = 'avatarPreview',
        Object[_0x451d3e(0x696)](_0xdc6a01[_0x451d3e(0x4e4)], {
            'position': _0x451d3e(0x575),
            'display': 'none',
            'pointerEvents': 'none',
            'opacity': '0',
            'transition': _0x451d3e(0x732),
            'zIndex': _0x451d3e(0x222)
        });
        const _0x4631d9 = document[_0x451d3e(0x3b1)](_0x451d3e(0x39a));
        _0x4631d9['id'] = _0x451d3e(0x466),
        Object[_0x451d3e(0x696)](_0x4631d9[_0x451d3e(0x4e4)], {
            'width': '100px',
            'height': _0x451d3e(0x3ec),
            'borderRadius': _0x451d3e(0x269),
            'border': _0x451d3e(0x6b1),
            'boxShadow': _0x451d3e(0x69b),
            'backgroundColor': _0x451d3e(0x6d8)
        }),
        _0xdc6a01[_0x451d3e(0x48d)](_0x4631d9),
        document[_0x451d3e(0x622)][_0x451d3e(0x48d)](_0xdc6a01);
    }
    if (!document[_0x451d3e(0xec)](_0x451d3e(0x2e3))) {
        const _0x576f35 = document['createElement'](_0x451d3e(0x43f));
        _0x576f35['id'] = _0x451d3e(0x2e3),
        Object['assign'](_0x576f35[_0x451d3e(0x4e4)], {
            'position': _0x451d3e(0x575),
            'display': 'none',
            'pointerEvents': _0x451d3e(0x1e7),
            'opacity': '0',
            'transition': _0x451d3e(0x732),
            'zIndex': _0x451d3e(0x222),
            'padding': _0x451d3e(0x1b4),
            'borderRadius': _0x451d3e(0x14b),
            'backgroundColor': _0x451d3e(0x6fd),
            'color': _0x451d3e(0x2f6),
            'fontSize': _0x451d3e(0x584),
            'minWidth': '230px',
            'boxShadow': _0x451d3e(0x2d1),
            'fontFamily': _0x451d3e(0x281)
        });
        const _0x4bdde5 = document[_0x451d3e(0x3b1)]('div');
        _0x4bdde5['id'] = _0x451d3e(0x22f),
        _0x576f35[_0x451d3e(0x48d)](_0x4bdde5),
        document['body'][_0x451d3e(0x48d)](_0x576f35);
    }
}
function showAvatar(_0x15498d, _0x4bb637) {
    var _0x298363 = _0x18e6ab;
    _0x4bb637 && ($(_0x298363(0x2a3))[_0x298363(0x160)](_0x298363(0x208), _0x4bb637),
    $(_0x298363(0x47d))[_0x298363(0x72a)]({
        'top': _0x15498d['pageY'] + 0xa + 'px',
        'left': _0x15498d[_0x298363(0x6cc)] + 0xa + 'px',
        'display': _0x298363(0x3dd)
    })[_0x298363(0x73b)](!![], !![])[_0x298363(0x16d)](0xc8, 0x1));
}
function showTop10(_0x457e79, _0x5c9e8e) {
    var _0x4eed42 = _0x18e6ab;
    if (_0x5c9e8e['length'] > 0x0) {
        let _0x5c33f9 = _0x4eed42(0x50e);
        _0x5c33f9 += _0x5c9e8e[_0x4eed42(0x58c)]( (_0x48fd13, _0x2517b7) => {
            var _0xf5185e = _0x4eed42;
            const _0x2b711b = _0x2517b7 === 0x0;
            return _0xf5185e(0x219) + (_0x2b711b ? 'font-weight:bold;\x20color:#ffd700;' : '') + _0xf5185e(0x6a4) + (_0x2b711b ? '⭐️' : _0x2517b7 + 0x1 + '.') + '\x20' + sanitize(_0x48fd13[_0xf5185e(0x356)]) + _0xf5185e(0x2e6) + formatScore(_0x48fd13[_0xf5185e(0x531)]) + _0xf5185e(0x740);
        }
        )['join'](''),
        $(_0x4eed42(0x4e7))['html'](_0x5c33f9);
        const _0x18f1f1 = 0x64;
        $('#top10Preview')['css']({
            'top': _0x457e79[_0x4eed42(0x4db)] + 0xa + _0x18f1f1 + 0xa + 'px',
            'left': _0x457e79[_0x4eed42(0x6cc)] + 0xa + 'px',
            'display': _0x4eed42(0x3dd)
        })[_0x4eed42(0x73b)](!![], !![])[_0x4eed42(0x16d)](0xc8, 0x1);
    }
}
function bindHoverEvents(_0x1cd5ac) {
    var _0xde5d34 = _0x18e6ab;
    $(document)['on'](_0xde5d34(0x3cc), _0x1cd5ac, function(_0x42cfcc) {
        var _0x5807c4 = _0xde5d34;
        const _0x5241aa = $(this)[_0x5807c4(0x4d5)]('tr')['attr'](_0x5807c4(0x139))?.[_0x5807c4(0x40b)]()['toLowerCase']()
          , _0x26dfd2 = top1Servers[_0x5241aa];
        _0x26dfd2 && (showAvatar(_0x42cfcc, _0x26dfd2[_0x5807c4(0xe8)]),
        showTop10(_0x42cfcc, _0x26dfd2[_0x5807c4(0x304)] || []));
    }),
    $(document)['on'](_0xde5d34(0x65a), _0x1cd5ac, function(_0x34dc72) {
        var _0x54ae4f = _0xde5d34;
        const _0x3d4898 = 0x64;
        $(_0x54ae4f(0x47d))[_0x54ae4f(0x72a)]({
            'top': _0x34dc72['pageY'] + 0xa + 'px',
            'left': _0x34dc72[_0x54ae4f(0x6cc)] + 0xa + 'px'
        }),
        $(_0x54ae4f(0x104))['css']({
            'top': _0x34dc72[_0x54ae4f(0x4db)] + 0xa + _0x3d4898 + 0xa + 'px',
            'left': _0x34dc72[_0x54ae4f(0x6cc)] + -0x4b + 'px'
        });
    }),
    $(document)['on']('mouseleave', _0x1cd5ac, function() {
        var _0x2b8cd1 = _0xde5d34;
        $(_0x2b8cd1(0x47d))[_0x2b8cd1(0x73b)](!![], !![])['fadeTo'](0x12c, 0x0, function() {
            var _0x2db48b = _0x2b8cd1;
            $(this)[_0x2db48b(0x3a0)]();
        }),
        $('#top10Preview')[_0x2b8cd1(0x73b)](!![], !![])['fadeTo'](0x12c, 0x0, function() {
            var _0x270052 = _0x2b8cd1;
            $(this)[_0x270052(0x3a0)]();
        });
    });
}
init();
function sanitize(_0x172a59) {
    var _0x426cab = _0x18e6ab;
    return _0x172a59['replace'](/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '')[_0x426cab(0x40b)]();
}
function obtenerImagenPorSeleccion(_0x30e134) {
    var _0x129fce = _0x18e6ab;
    let _0x43737f = '';
    switch (_0x30e134) {
    case '0':
        _0x43737f = _0x129fce(0x71d);
        break;
    case '1':
        _0x43737f = _0x129fce(0x685);
        break;
    case '2':
        _0x43737f = 'https://asserts.wormworld.io/backgrounds/bkgnd9.png';
        break;
    case '3':
        _0x43737f = 'https://asserts.wormworld.io/backgrounds/bkgnd10.png';
        break;
    case '4':
        _0x43737f = _0x129fce(0x123);
        break;
    case '5':
        _0x43737f = _0x129fce(0x2df);
        break;
    case '6':
        _0x43737f = _0x129fce(0x5ca);
        break;
    case '7':
        _0x43737f = _0x129fce(0x2e1);
        break;
    case '8':
        _0x43737f = _0x129fce(0x556);
        break;
    case '9':
        _0x43737f = _0x129fce(0x4fe);
        break;
    case '10':
        _0x43737f = _0x129fce(0x1b2);
        break;
    case '11':
        _0x43737f = 'https://asserts.wormworld.io/backgrounds/arena01.png';
        break;
    case '12':
        _0x43737f = _0x129fce(0x1e2);
        break;
    case '13':
        _0x43737f = _0x129fce(0x6ca);
        break;
    case '14':
        _0x43737f = _0x129fce(0x29a);
        break;
    default:
        console[_0x129fce(0x3e9)](_0x129fce(0x5f3));
    }
    return _0x43737f;
}
function startInterval() {
    clearInterval(intervalID),
    intervalID === null && (intervalID = setInterval(function() {
        var _0x1249c9 = anApp['s']['H']['sk'];
        let _0x5622d3 = Math['PI'];
        var _0x4265d9 = _0x1249c9 + _0x5622d3 / 0x168 * 0x9;
        _0x4265d9 >= _0x5622d3 && (_0x4265d9 = -_0x1249c9),
        anApp['s']['H']['sk'] = _0x4265d9;
    }, 0x37));
}
function adjustInterval() {
    cycleCounter >= 0x28 && (isIncrementing ? initialInterval += 0x19 : initialInterval -= 0x64,
    cycleCounter = 0x1);
}
function controlIntervalAdjustment() {
    initialInterval === 0x37 && cycleCounter >= 0x28 && (initialInterval += 0x19,
    cycleCounter = 0x1,
    isIncrementing = !![]);
    if (initialInterval === 0x50)
        adjustInterval();
    if (initialInterval === 0x69)
        adjustInterval();
    if (initialInterval === 0x82)
        adjustInterval();
    if (initialInterval === 0x9b)
        adjustInterval();
    if (initialInterval === 0xb4)
        adjustInterval();
    if (initialInterval === 0xcd)
        adjustInterval();
    if (initialInterval === 0xe6)
        adjustInterval();
    if (initialInterval === 0xff)
        adjustInterval();
    if (initialInterval === 0x118)
        adjustInterval();
    if (initialInterval === 0x131)
        adjustInterval();
    if (initialInterval === 0x14a)
        adjustInterval();
    if (initialInterval === 0x163)
        adjustInterval();
    if (initialInterval === 0x17c)
        adjustInterval();
    if (initialInterval === 0x195)
        adjustInterval();
    if (initialInterval === 0x1ae)
        adjustInterval();
    initialInterval === 0x1c7 && cycleCounter >= 0x28 && (initialInterval -= 0x64,
    cycleCounter = 0x1,
    isIncrementing = ![]);
}
function manageIntervalCycle() {
    clearInterval(intervalID);
    if (intervalID === null) {
        let _0x4209bf = anApp['s']['H']['sk']
          , _0x26e351 = Math['PI']
          , _0x2a65b7 = _0x4209bf + _0x26e351 / 0x168 * 0x9;
        _0x2a65b7 >= _0x26e351 && (_0x2a65b7 = -_0x4209bf),
        anApp['s']['H']['sk'] = _0x2a65b7,
        cycleCounter += 0x1,
        controlIntervalAdjustment(),
        isRunning && (intervalID = setInterval(manageIntervalCycle, initialInterval));
    }
}
function starAutoCircle() {
    isRunning = !![],
    initialInterval = 0x37,
    cycleCounter = 0x1,
    isIncrementing = !![],
    manageIntervalCycle();
}
const isPremiumUser = localStorage[_0x18e6ab(0x11c)]('premium') === _0x18e6ab(0x1ea)
  , wormxt_5dlrs_Obj = {
    'visiblePowersAll': ![],
    'speed_zigzag': !![]
};
var wormxt_Obj = {
    'laserColor': _0x18e6ab(0x37c),
    'colorFondo': _0x18e6ab(0x644),
    'colorBorde': _0x18e6ab(0x267),
    'laserHS': ![],
    'spawnInfinity': ![],
    'backgroundSolid': ![],
    'sectores': ![],
    'CLIENTE_ADMIN': 0x1,
    'CLIENTE_ACTIVO': 0x3,
    'CLIENTE_INACTIVO': 0x4
};
const showVersionPays = async function(_0xc0506d) {
    var _0x8b5c12 = _0x18e6ab
      , _0x52a900 = clientes[_0x8b5c12(0x6da)][_0x8b5c12(0x744)](function(_0x5d6deb) {
        var _0xfaa05a = _0x8b5c12;
        return _0x5d6deb[_0xfaa05a(0x6ab)] === _0xc0506d[_0xfaa05a(0x111)][_0xfaa05a(0x6b3)];
    });
    if (_0x52a900) {
        console[_0x8b5c12(0x10f)](_0x8b5c12(0x5f6) + _0xc0506d[_0x8b5c12(0x111)]['userId'] + _0x8b5c12(0x4ed));
        const _0x4004e2 = new Date()
          , _0x4d0b4e = new Date(_0x52a900[_0x8b5c12(0x5d5)]);
        _0x4004e2 > _0x4d0b4e ? (console[_0x8b5c12(0x10f)](_0x8b5c12(0x3e8)),
        localStorage[_0x8b5c12(0x258)](_0x8b5c12(0x53e), _0x8b5c12(0x42f))) : (console['log']('La\x20fecha\x20de\x20expiraci�n\x20es\x20v�lida.'),
        settings5dolars(_0x52a900['client_DateExpired']),
        localStorage[_0x8b5c12(0x258)](_0x8b5c12(0x53e), _0x8b5c12(0x1ea)));
    } else
        console[_0x8b5c12(0x10f)]('El\x20ID\x20generado\x20no\x20coincide\x20con\x20ning�n\x20ID\x20almacenado\x20en\x20la\x20base\x20de\x20datos.'),
        localStorage[_0x8b5c12(0x258)](_0x8b5c12(0x53e), _0x8b5c12(0x42f));
};
function setSectorsGame() {
    var _0xfc2dac = _0x18e6ab;
    zw_Background[_0xfc2dac(0x4bf)](),
    zw_Background[_0xfc2dac(0x210)](),
    console[_0xfc2dac(0x10f)](theoObjects['colorFondo']);
    if (theoKzObjects[_0xfc2dac(0x169)])
        zw_Background[_0xfc2dac(0x5ec)]('0x' + theoObjects[_0xfc2dac(0x434)], 0x1),
        zw_Background['lineStyle'](0x1, '0x' + theoObjects[_0xfc2dac(0x29b)], 0x1),
        zw_Background[_0xfc2dac(0x411)](0x0, 0x0, 0x1f4),
        zw_Background[_0xfc2dac(0x308)]();
    else {
        if (theoKzObjects['sectores']) {
            var _0x4f5d62 = 0x0
              , _0x3d408c = 0x0
              , _0x1894a7 = 0x1f4
              , _0x5c14e5 = _0x1894a7
              , _0xde3369 = 0x2 * _0x5c14e5 / 0x5
              , _0x4026ee = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[_0xfc2dac(0x6d1)]('')
              , _0x1e9ae9 = Math['PI'] * 0x2 / 0xa;
            for (var _0x2be14f = 0x0; _0x2be14f < 0x5; _0x2be14f++) {
                for (var _0x5468f8 = 0x0; _0x5468f8 < 0xa; _0x5468f8++) {
                    var _0x306adf = _0x5468f8 * _0x1e9ae9
                      , _0x5a1035 = (_0x5468f8 + 0x1) * _0x1e9ae9
                      , _0x1ce0ad = _0x1894a7 - (_0x2be14f + 0.01) * (_0xde3369 / 0x2)
                      , _0x11893e = _0x4f5d62 + Math[_0xfc2dac(0x19a)](_0x306adf) * _0x1ce0ad
                      , _0x9d4fb3 = _0x3d408c + Math[_0xfc2dac(0x5fa)](_0x306adf) * _0x1ce0ad;
                    zw_Background[_0xfc2dac(0x5ec)]('0x' + theoObjects[_0xfc2dac(0x434)], 0x1),
                    zw_Background[_0xfc2dac(0x12d)](0.5, '0x' + theoObjects[_0xfc2dac(0x29b)], 0x1),
                    zw_Background[_0xfc2dac(0x398)](_0x4f5d62, _0x3d408c),
                    zw_Background['lineTo'](_0x11893e, _0x9d4fb3),
                    zw_Background[_0xfc2dac(0x439)](_0x4f5d62, _0x3d408c, _0x1ce0ad, _0x306adf, _0x5a1035),
                    zw_Background[_0xfc2dac(0x1a8)](_0x4f5d62, _0x3d408c),
                    zw_Background['endFill']();
                    if (_0x2be14f < 0x4) {
                        var _0x26f120 = _0x4026ee[_0x2be14f] + (_0x5468f8 + 0x1);
                        if (!zw_Background['getChildByName'](_0x26f120)) {
                            var _0x17cef7 = new PIXI[(_0xfc2dac(0x25c))]({
                                'fontSize': _0xfc2dac(0x341),
                                'fill': _0xfc2dac(0x15d)
                            })
                              , _0x6ee65a = new PIXI['Text'](_0x26f120,_0x17cef7);
                            _0x6ee65a[_0xfc2dac(0x432)][_0xfc2dac(0x172)](0.5);
                            var _0xc1d39d = _0x306adf + (_0x5a1035 - _0x306adf) / 0x2
                              , _0x8225ab = _0x1ce0ad - _0xde3369 / 0x4
                              , _0x316167 = _0x4f5d62 + Math['cos'](_0xc1d39d) * _0x8225ab
                              , _0x38600f = _0x3d408c + Math[_0xfc2dac(0x5fa)](_0xc1d39d) * _0x8225ab;
                            _0x6ee65a[_0xfc2dac(0x23e)][_0xfc2dac(0x172)](_0x316167, _0x38600f),
                            _0x6ee65a[_0xfc2dac(0x283)] = _0x26f120,
                            zw_Background[_0xfc2dac(0x6f8)](_0x6ee65a);
                        }
                    }
                }
            }
        } else
            zw_Background[_0xfc2dac(0x4bf)](),
            zw_Background[_0xfc2dac(0x210)](),
            zw_Background[_0xfc2dac(0x12d)](0x1, 0xff0000, 0x1),
            zw_Background[_0xfc2dac(0x411)](0x0, 0x0, 0x1f4),
            zw_Background[_0xfc2dac(0x308)]();
    }
}
function decodeUnicode(_0x24bd47) {
    var _0xe240b0 = _0x18e6ab;
    return _0x24bd47[_0xe240b0(0x68e)](/\\u[\dA-F]{4}/gi, function(_0x5a3a4f) {
        var _0x471b2c = _0xe240b0;
        return String[_0x471b2c(0x637)](parseInt(_0x5a3a4f['replace'](/\\u/, ''), 0x10));
    })[_0xe240b0(0x68e)](/\\u[0-9A-F]{2}/g, function(_0x1fec88) {
        var _0x16b00e = _0xe240b0;
        return String[_0x16b00e(0x637)](parseInt(_0x1fec88[_0x16b00e(0x68e)](/\\u/, ''), 0x10));
    });
}
const settings5dolars = async function(_0x36d868) {
    var _0x141b23 = _0x18e6ab
      , _0x1d2f3e = $(_0x141b23(0x495));
    addMinicolor(_0x1d2f3e[0x1], 'gameColorGroup', _0x141b23(0x52b), _0x141b23(0x434), theoObjects[_0x141b23(0x434)]),
    addMinicolor(_0x1d2f3e[0x1], 'borderColorGroup', _0x141b23(0x512), _0x141b23(0x29b), theoObjects[_0x141b23(0x29b)]),
    addMinicolor(_0x1d2f3e[0x1], 'laserColorGroup', 'LASER', _0x141b23(0x1f9), theoObjects[_0x141b23(0x1f9)]),
    addMinicolor(_0x1d2f3e[0x1], 'hsTextColorGroup', _0x141b23(0x3fe), _0x141b23(0x614), theoObjects[_0x141b23(0x614)]),
    addMinicolor(_0x1d2f3e[0x1], _0x141b23(0x5a6), _0x141b23(0x5a0), _0x141b23(0x5c1), theoObjects[_0x141b23(0x5c1)]),
    addMinicolor(_0x1d2f3e[0x1], _0x141b23(0xcc), _0x141b23(0x5f0), 'minimapBorderColor', theoObjects[_0x141b23(0x568)]),
    wormxt_5dlrs_Obj[_0x141b23(0x6b6)] = ![],
    wormxt_5dlrs_Obj[_0x141b23(0x4c1)] = !![],
    $(_0x141b23(0x6d0))[_0x141b23(0x194)](_0x141b23(0x193)),
    $('#user_config')['on'](_0x141b23(0x57f), function() {
        var _0x322fa6 = _0x141b23;
        $(_0x322fa6(0x34c))['css'](_0x322fa6(0x23e), 'absolute')[_0x322fa6(0x72a)](_0x322fa6(0x665), _0x322fa6(0x3dd)),
        giroActive = ![],
        toggleGiro();
    });
    let _0x146193 = localStorage[_0x141b23(0x11c)](_0x141b23(0x118)), _0x56e48c;
    if (_0x146193 === _0x141b23(0x1ea))
        _0x56e48c = !![],
        theoKzObjects[_0x141b23(0x118)] = !![];
    else
        _0x146193 === _0x141b23(0x42f) ? (_0x56e48c = ![],
        theoKzObjects[_0x141b23(0x118)] = ![]) : _0x56e48c = theoKzObjects[_0x141b23(0x118)];
    let _0x1ba70e = localStorage[_0x141b23(0x11c)](_0x141b23(0x51e)), _0x4c8406;
    if (_0x1ba70e === _0x141b23(0x1ea))
        _0x4c8406 = !![],
        theoKzObjects[_0x141b23(0x43b)] = !![];
    else
        _0x1ba70e === 'false' ? (_0x4c8406 = ![],
        theoKzObjects[_0x141b23(0x43b)] = ![]) : _0x4c8406 = theoKzObjects[_0x141b23(0x43b)];
    $('#settings-backgroundSolid-switch')[_0x141b23(0x1ba)](_0x141b23(0x3b8), wormxt_Obj[_0x141b23(0x169)]),
    $(_0x141b23(0x6ff))['on']('click', function() {
        var _0x516e3a = _0x141b23;
        this['checked'] ? (wormxt_Obj[_0x516e3a(0x169)] = !![],
        setSectorsGame()) : (wormxt_Obj[_0x516e3a(0x169)] = ![],
        setSectorsGame());
    }),
    $(_0x141b23(0x2ab))['on'](_0x141b23(0x600), function() {
        var _0x184276 = _0x141b23;
        theoKzObjects[_0x184276(0x43b)] = $(this)['is'](_0x184276(0x616)),
        localStorage[_0x184276(0x258)]('showAnimationHeadshot', theoKzObjects[_0x184276(0x43b)]),
        console['log'](_0x184276(0x22a), theoKzObjects[_0x184276(0x43b)]);
    }),
    $(_0x141b23(0x330))['on'](_0x141b23(0x600), function() {
        var _0x1cc349 = _0x141b23;
        theoKzObjects[_0x1cc349(0x118)] = $(this)['is'](':checked'),
        localStorage['setItem'](_0x1cc349(0x118), theoKzObjects['showTeamList']),
        console[_0x1cc349(0x10f)](_0x1cc349(0x22a), theoKzObjects[_0x1cc349(0x118)]);
    }),
    $('#clossed_Setings')['on']('click', function() {
        var _0x2cc0c0 = _0x141b23;
        $(_0x2cc0c0(0x34c))['css']('display', 'none'),
        giroActive = !![],
        toggleGiro();
    });
    function _0x35eacd(_0x2f7208, _0x2a4edd, _0x53abaf) {
        var _0x1e74b2 = _0x141b23;
        $(_0x2f7208)['on'](_0x1e74b2(0x504), function() {
            var _0x131d0a = _0x1e74b2;
            wormxt_Obj[_0x2a4edd] = $(this)[_0x131d0a(0x54c)](),
            localStorage[_0x131d0a(0x258)](_0x53abaf, $(this)[_0x131d0a(0x54c)]()),
            console[_0x131d0a(0x10f)](_0x131d0a(0x683), localStorage['getItem'](_0x53abaf));
        });
    }
    let _0x2c78cf = $(_0x141b23(0x4a1))
      , _0x10a549 = $(_0x141b23(0x353));
    for (let _0x340102 = 0x1; _0x340102 < 0x2a; _0x340102++) {
        const _0x403f7b = 'https://deltav4.gitlab.io/v7/assets/cursors/cursor_' + _0x340102[_0x141b23(0x39b)]()[_0x141b23(0x23f)](0x2, '0') + _0x141b23(0x57a)
          , _0x46ef34 = _0x340102 === 0x1 ? _0x141b23(0x2c5) : ''
          , _0x59ad02 = $(_0x141b23(0x33f))[_0x141b23(0x160)]({
            'src': _0x403f7b,
            'data-cursor': _0x403f7b,
            'alt': _0x141b23(0x3eb) + _0x340102
        })
          , _0x3f8998 = $(_0x141b23(0x5d9))[_0x141b23(0x440)](_0x141b23(0xd3))[_0x141b23(0x440)](_0x46ef34)[_0x141b23(0x194)](_0x59ad02);
        _0x10a549['append'](_0x3f8998);
    }
    _0x2c78cf[_0x141b23(0x194)](_0x10a549),
    $(_0x141b23(0x529))['append'](_0x2c78cf),
    $(_0x141b23(0x272))[_0x141b23(0x728)](_0x141b23(0x74c));
    const _0x4e2a75 = 0x14
      , _0x5cc082 = $(_0x141b23(0x313));
    for (let _0x4c97c0 = 0x0; _0x4c97c0 < _0x4e2a75; _0x4c97c0++) {
        let _0x133d7f = $('<div>')[_0x141b23(0x440)](_0x141b23(0x437));
        _0x133d7f['css']({
            'left': Math[_0x141b23(0x197)]() * window['innerWidth'] + 'px',
            'top': Math[_0x141b23(0x197)]() * window[_0x141b23(0x173)] + 'px',
            'animationDuration': 0x2 + Math[_0x141b23(0x197)]() + _0x141b23(0x468) + (0x5 + Math['random']() * 0xa) + 's'
        });
    }
    $('.profile-info')[_0x141b23(0x2f5)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22premium-badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20⭐\x20Premium\x20⭐\x20<br>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Expire:\x20<span\x20id=\x22premium-expiration\x22>' + _0x36d868 + _0x141b23(0x2b4)),
    $('.hotkey-container')['append']('\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Zoom</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22zoom-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Replay</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22restart-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Explote</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22wormExplot-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>LaserHS</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22laserHSkey-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Sectors</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sectores-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Background</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22background-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Giro</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22giro-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>No\x20Skins</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22noSkin-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>No\x20Auras</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22noAuras-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),
    $(_0x141b23(0x200))[_0x141b23(0x54c)](keys[_0x141b23(0x4e2)]),
    $('#restart-key')['val'](keys[_0x141b23(0x585)]),
    $('#laserHSkey-key')['val'](keys[_0x141b23(0xfe)]),
    $(_0x141b23(0x65b))[_0x141b23(0x54c)](keys[_0x141b23(0x1ca)]),
    $(_0x141b23(0x628))[_0x141b23(0x54c)](keys['giro']),
    $('#noSkin-key')[_0x141b23(0x54c)](keys[_0x141b23(0x412)]),
    $(_0x141b23(0x48c))[_0x141b23(0x54c)](keys[_0x141b23(0x1db)]),
    $(_0x141b23(0x6ef))[_0x141b23(0x54c)](keys['sectores']),
    $(_0x141b23(0x284))[_0x141b23(0x54c)](keys[_0x141b23(0x30c)]),
    $(_0x141b23(0x292))['on'](_0x141b23(0x57f), function() {
        var _0x505fcb = _0x141b23;
        $(_0x505fcb(0x292))[_0x505fcb(0x440)](_0x505fcb(0x2c5)),
        $(_0x505fcb(0x48b))[_0x505fcb(0x726)](_0x505fcb(0x2c5)),
        $(_0x505fcb(0x4e3))[_0x505fcb(0x710)](),
        $(_0x505fcb(0x3f5))['hide']();
    }),
    $('.key-input')[_0x141b23(0x13f)](function(_0x1feeb0) {
        var _0x121e0a = _0x141b23;
        _0x1feeb0[_0x121e0a(0x10d)]();
    }),
    $(_0x141b23(0x70c))[_0x141b23(0x5a8)](function(_0x2f69c0) {
        var _0x2b3f7a = _0x141b23;
        _0x2f69c0[_0x2b3f7a(0x6dc)]();
        var _0x7297cc = _0x2f69c0['key'][_0x2b3f7a(0x69f)]();
        $(this)[_0x2b3f7a(0x54c)](_0x7297cc);
        var _0x394f83 = $(this)[_0x2b3f7a(0x160)]('id');
        switch (_0x394f83) {
        case _0x2b3f7a(0x6c7):
            cambiarKey('zoom', _0x7297cc);
            break;
        case _0x2b3f7a(0x2e2):
            cambiarKey(_0x2b3f7a(0x585), _0x7297cc);
            break;
        case _0x2b3f7a(0x2de):
            cambiarKey(_0x2b3f7a(0x1ca), _0x7297cc);
            break;
        case _0x2b3f7a(0x4f3):
            cambiarKey(_0x2b3f7a(0xfe), _0x7297cc);
            break;
        case _0x2b3f7a(0x514):
            cambiarKey(_0x2b3f7a(0x646), _0x7297cc);
            break;
        case 'noSkin-key':
            cambiarKey(_0x2b3f7a(0x412), _0x7297cc);
            break;
        case 'noAuras-key':
            cambiarKey(_0x2b3f7a(0x1db), _0x7297cc);
            break;
        case 'sectores-key':
            cambiarKey(_0x2b3f7a(0x367), _0x7297cc);
            break;
        case _0x2b3f7a(0x566):
            cambiarKey('background', _0x7297cc);
            break;
        }
        $(this)[_0x2b3f7a(0x12c)]();
    }),
    $(_0x141b23(0x3f5))[_0x141b23(0x194)](_0x10a549),
    $('.cursor-box')['on'](_0x141b23(0x57f), function() {
        var _0x25afc7 = _0x141b23
          , _0x58667b = $(this)[_0x25afc7(0x744)](_0x25afc7(0x39a))['attr']('src');
        $('body,\x20button,\x20input,\x20a,\x20textarea,\x20select,\x20div,\x20span,\x20p')[_0x25afc7(0x72a)]({
            'cursor': _0x25afc7(0x1c9) + _0x58667b + _0x25afc7(0x690)
        }),
        $(_0x25afc7(0x612))[_0x25afc7(0x726)](_0x25afc7(0x2c5)),
        $(this)[_0x25afc7(0x440)](_0x25afc7(0x2c5));
    }),
    $(_0x141b23(0x301))[_0x141b23(0xf8)](_0x141b23(0x5f9) + _0x36d868 + _0x141b23(0x61b)),
    $(_0x141b23(0x4e9))[_0x141b23(0x54c)](_0x141b23(0x108)),
    $('#sound-10hs')[_0x141b23(0x54c)](_0x141b23(0x6f0)),
    zw_hssound = new Audio($('#sound-hs')[_0x141b23(0x54c)]()),
    zw_laughsound = new Audio($(_0x141b23(0x233))[_0x141b23(0x54c)]()),
    $(_0x141b23(0x4e9))['on']('input', function() {
        var _0x5c012c = _0x141b23;
        zw_hssound[_0x5c012c(0x208)] = $(this)[_0x5c012c(0x54c)]();
    }),
    $(_0x141b23(0x233))['on']('input', function() {
        var _0x5a8bc1 = _0x141b23;
        zw_laughsound['src'] = $(this)[_0x5a8bc1(0x54c)]();
    }),
    $(_0x141b23(0x6d6))['after'](_0x141b23(0x2b1) + '<input\x20type=\x22checkbox\x22\x20id=\x22settings-laserHS-switch\x22>' + _0x141b23(0x1dd) + lenguaje[idiomaActual][_0x141b23(0x1ed)] + _0x141b23(0x61b) + _0x141b23(0x746) + _0x141b23(0x2b1) + _0x141b23(0x26c) + _0x141b23(0x6c0) + lenguaje[idiomaActual][_0x141b23(0x367)] + '</span>' + _0x141b23(0x746) + _0x141b23(0x2b1) + _0x141b23(0x5c2) + _0x141b23(0x156) + _0x141b23(0x746) + _0x141b23(0x2b1) + '<input\x20type=\x22checkbox\x22\x20id=\x22settings-Speed_ZigZag-switch\x22>' + _0x141b23(0x22e) + _0x141b23(0x746) + _0x141b23(0x2aa) + _0x141b23(0x2f4) + _0x141b23(0x50b) + _0x141b23(0x4cb) + lenguaje[idiomaActual]['colorJuego'] + _0x141b23(0x530) + '</div>' + _0x141b23(0x2f4) + _0x141b23(0x24c) + '<span\x20class=\x22names_settings\x22\x20id=\x22colorLaser\x22>\x20' + lenguaje[idiomaActual]['colorLaser'] + '\x20</span>' + _0x141b23(0x746) + '<div\x20class=\x22container\x22>' + _0x141b23(0x6cb) + '<span\x20class=\x22names_settings\x22\x20id=\x22colorBorde\x22>\x20' + lenguaje[idiomaActual][_0x141b23(0x29b)] + _0x141b23(0x61b) + '</div>');
    const _0x6b6669 = {
        'color_paletRGB': _0x2ebd2b => wormxt_Obj[_0x141b23(0x434)] = _0x2ebd2b,
        'color_palet': _0x25b6a2 => wormxt_Obj['laserColor'] = _0x25b6a2,
        'color_palet2': _0x4446ce => wormxt_Obj[_0x141b23(0x29b)] = _0x4446ce
    };
    $(_0x141b23(0x10b))['change'](function() {
        var _0x303378 = _0x141b23;
        const _0x4d8299 = $(this)[_0x303378(0x160)]('id')
          , _0x119604 = $(this)[_0x303378(0x54c)]()['replace']('#', '');
        setSectorsGame(),
        console[_0x303378(0x10f)]('Recibiendo\x20el\x20color\x20reemplazado\x20para\x20' + _0x4d8299 + ':\x20' + _0x119604),
        _0x6b6669[_0x4d8299] && _0x6b6669[_0x4d8299](_0x119604),
        setSectorsGame();
    }),
    wormxt_5dlrs_Obj[_0x141b23(0x6b6)] = ![],
    $(_0x141b23(0x2fd))['prop'](_0x141b23(0x3b8), wormxt_5dlrs_Obj[_0x141b23(0x6b6)]),
    $(_0x141b23(0x2fd))['on'](_0x141b23(0x57f), function() {
        var _0x4ac8ef = _0x141b23;
        this[_0x4ac8ef(0x3b8)] ? wormxt_5dlrs_Obj[_0x4ac8ef(0x6b6)] = !![] : wormxt_5dlrs_Obj[_0x4ac8ef(0x6b6)] = ![];
    }),
    wormxt_5dlrs_Obj['speed_zigzag'] = !![],
    $('#settings-Speed_ZigZag-switch')[_0x141b23(0x1ba)](_0x141b23(0x3b8), wormxt_5dlrs_Obj[_0x141b23(0x4c1)]),
    $('#settings-Speed_ZigZag-switch')['on'](_0x141b23(0x57f), function() {
        var _0x5a8bda = _0x141b23;
        this[_0x5a8bda(0x3b8)] ? wormxt_5dlrs_Obj[_0x5a8bda(0x4c1)] = !![] : wormxt_5dlrs_Obj[_0x5a8bda(0x4c1)] = ![];
    }),
    $(_0x141b23(0x577))[_0x141b23(0x1ba)]('checked', wormxt_Obj[_0x141b23(0xfe)]),
    $(_0x141b23(0x577))['on']('click', function() {
        var _0x5da21b = _0x141b23;
        this[_0x5da21b(0x3b8)] ? wormxt_Obj[_0x5da21b(0xfe)] = !![] : wormxt_Obj[_0x5da21b(0xfe)] = ![];
    }),
    $(_0x141b23(0x120))['prop'](_0x141b23(0x3b8), wormxt_Obj['interactive']),
    $(_0x141b23(0x120))['on'](_0x141b23(0x57f), function() {
        var _0x3b0980 = _0x141b23;
        if (this[_0x3b0980(0x3b8)])
            zw_explotWubtracttexture[_0x3b0980(0x41c)] = ![];
        else {}
    }),
    $(_0x141b23(0x599))[_0x141b23(0x1ba)](_0x141b23(0x3b8), wormxt_Obj[_0x141b23(0x367)]),
    $(_0x141b23(0x599))['on'](_0x141b23(0x57f), function() {
        var _0x565075 = _0x141b23;
        this[_0x565075(0x3b8)] ? (wormxt_Obj['sectores'] = !![],
        setSectorsGame()) : (wormxt_Obj[_0x565075(0x367)] = ![],
        setSectorsGame());
    });
};
var TIME = new Date()[_0x18e6ab(0x10e)]()
  , linkCSS = _0x18e6ab(0x3c8) + TIME
  , unlockSkinsExecuted = ![]
  , unlockSkinsPrivate = async function(_0x1369f7) {
    var _0x29c2e3 = _0x18e6ab;
    if (unlockSkinsExecuted) {
        console[_0x29c2e3(0x10f)]('unlockSkinsPrivate\x20ya\x20fue\x20ejecutada\x20anteriormente.');
        return;
    }
    unlockSkinsExecuted = !![];
    var _0x14013e = _0x1369f7['u']['si'][_0x29c2e3(0x6b3)]
      , _0x4566b8 = clientsSkins['clientsSkinsActivos'][_0x29c2e3(0x744)](_0x5fd295 => _0x5fd295['client_ID'] === _0x14013e);
    if (_0x4566b8 && _0x4566b8[_0x29c2e3(0x64f)]) {
        console[_0x29c2e3(0x10f)](_0x4566b8);
        const _0x3b846b = new Date()
          , _0x155332 = new Date(_0x4566b8[_0x29c2e3(0x5d5)]);
        if (_0x3b846b > _0x155332)
            console[_0x29c2e3(0x10f)]('La\x20fecha\x20de\x20skins\x20expiración\x20ha\x20vencido.');
        else {
            console[_0x29c2e3(0x10f)]('La\x20fecha\x20de\x20skins\x20expiración\x20es\x20válida.');
            let _0x26e474 = Array['isArray'](_0x4566b8[_0x29c2e3(0x64f)]) ? _0x4566b8[_0x29c2e3(0x64f)] : [_0x4566b8[_0x29c2e3(0x64f)]];
            _0x26e474[_0x29c2e3(0xca)](_0x3aab26 => {
                var _0x3baf49 = _0x29c2e3;
                let _0xa32896 = theoKzObjects[_0x3baf49(0x237)][_0x3baf49(0x744)](_0x464432 => _0x464432['id'] === _0x3aab26);
                _0xa32896 && (_0xa32896[_0x3baf49(0x12a)] = ![]);
            }
            ),
            console[_0x29c2e3(0x10f)]('Skins\x20privadas\x20desbloqueadas\x20para\x20el\x20usuario\x20' + _0x14013e + ':', _0x26e474);
        }
    } else
        console[_0x29c2e3(0x10f)](_0x29c2e3(0x3af) + _0x14013e + '.');
};
let giroActive = ![];
function toggleGiro() {
    var _0x23f423 = _0x18e6ab;
    giroActive ? (zw_girosubtracttexture[_0x23f423(0x25d)] = ungirotexture,
    zw_girosubtracttexture[_0x23f423(0x66b)] = 0.25,
    console[_0x23f423(0x10f)]('Giro\x20deactivated'),
    isRunning = ![],
    initialInterval = 0x37,
    cycleCounter = 0x1,
    isIncrementing = !![],
    clearInterval(intervalID),
    intervalID = null) : (zw_girosubtracttexture[_0x23f423(0x66b)] = 0.75,
    console[_0x23f423(0x10f)]('Giro\x20activated'),
    startInterval(),
    isRunning = !![]),
    giroActive = !giroActive;
}
const showServer2 = async function(_0x3779ff) {
    var _0x140698 = _0x18e6ab;
    updateBackground(),
    fetchCustomLogo(_0x3779ff['u']['si'][_0x140698(0x6b3)]),
    zwormData[_0x140698(0x621)] = _0x3779ff['u']['si']['userId'],
    loadStylesheet(linkCSS),
    loadStylesheet(_0x140698(0x55c)),
    console[_0x140698(0x10f)](_0x3779ff, _0x3779ff['u']['si'][_0x140698(0x6b3)]),
    zw_hssound = new Audio('https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3'),
    zw_laughsound = new Audio(_0x140698(0x6f0)),
    zw_explotWubtracttexture = new pixi[(_0x140698(0x3e5))](),
    (zw_explotWubtracttexture['texture'] = explotWtexture,
    zw_explotWubtracttexture['interactive'] = !![]),
    zw_explotWubtracttexture[_0x140698(0x2a4)] = !![],
    zw_explotWubtracttexture['x'] = -0x2d,
    zw_explotWubtracttexture['y'] = 0xa,
    zw_explotWubtracttexture[_0x140698(0x66b)] = 0.25;
    function _0x7be71c() {
        var _0x1f2e05 = _0x140698;
        zw_explotWubtracttexture[_0x1f2e05(0x41c)] = ![];
        var _0x5c1046 = 0x2710
          , _0x5d6127 = 0x1
          , _0x198bb3 = 0.25
          , _0x33d8aa = 0x64
          , _0x402dd2 = (_0x5d6127 - _0x198bb3) / _0x33d8aa
          , _0x142be1 = 0x0
          , _0xf26e2d = setInterval(function() {
            var _0x49d311 = _0x1f2e05
              , _0x33638c = _0x5d6127 - _0x402dd2 * _0x142be1;
            zw_explotWubtracttexture[_0x49d311(0x66b)] = _0x33638c,
            _0x142be1++,
            _0x142be1 > _0x33d8aa && (clearInterval(_0xf26e2d),
            zw_explotWubtracttexture[_0x49d311(0x66b)] = _0x198bb3,
            zw_explotWubtracttexture[_0x49d311(0x41c)] = !![]);
        }, _0x5c1046 / _0x33d8aa);
    }
    zw_explotWubtracttexture['on']('mouseup', function() {
        _0x7be71c();
        const _0x5bf7a7 = new Uint8Array([NaN, NaN]);
        anApp['o']['Wb'](_0x5bf7a7),
        setTimeout( () => {
            var _0x100a99 = _0x32c7;
            let _0x42b261 = zw_lastserver;
            $('.overlay-2')[_0x100a99(0x72a)]('position', _0x100a99(0x65c)),
            _0x42b261 && (anApp['r']['Hd'](),
            anApp['sa'](_0x42b261));
        }
        , 0x3e8);
    }),
    zw_girosubtracttexture = new pixi[(_0x140698(0x3e5))](),
    (zw_girosubtracttexture[_0x140698(0x25d)] = ungirotexture,
    zw_girosubtracttexture[_0x140698(0x41c)] = !![]),
    zw_girosubtracttexture[_0x140698(0x2a4)] = !![],
    zw_girosubtracttexture['x'] = -0xa,
    zw_girosubtracttexture['y'] = 0xa,
    zw_girosubtracttexture['alpha'] = 0.25,
    zw_girosubtracttexture['on']('mouseup', function() {
        toggleGiro();
    });
    if (zw_mobilecheck()) {
        zw_girosubtracttexture['x'] = -0x5a,
        zw_explotWubtracttexture['x'] = -0x87,
        zw_explotWubtracttexture['y'] = 0xa;
        let _0x547e9e = new Function(_0x140698(0x2cc))()
          , _0x3f56a2 = _0x547e9e[_0x140698(0x590)][_0x140698(0x34f)](_0x140698(0x502))
          , _0x2f2554 = _0x547e9e[_0x140698(0x590)]['from'](_0x140698(0x1ff));
        zw_zoomplustexture = new _0x547e9e[(_0x140698(0x3e5))](),
        (zw_zoomplustexture[_0x140698(0x25d)] = _0x3f56a2,
        zw_zoomplustexture[_0x140698(0x41c)] = !![]),
        zw_zoomplustexture['buttonMode'] = !![],
        zw_zoomplustexture['x'] = -0xa,
        zw_zoomplustexture['y'] = 0xa,
        zw_zoomplustexture['alpha'] = 0.25,
        zw_zoomplustexture['on'](_0x140698(0x489), function() {
            var _0x30a44d = _0x140698;
            zw_updatezoom(Math[_0x30a44d(0x4ee)](zw_multiplier + 0.25, 0x32));
        }),
        zw_zoomsubtracttexture = new _0x547e9e['Sprite'](),
        (zw_zoomsubtracttexture[_0x140698(0x25d)] = _0x2f2554,
        zw_zoomsubtracttexture[_0x140698(0x41c)] = !![]),
        zw_zoomsubtracttexture[_0x140698(0x2a4)] = !![],
        zw_zoomsubtracttexture['x'] = -0x2b,
        zw_zoomsubtracttexture['y'] = 0xa,
        zw_zoomsubtracttexture[_0x140698(0x66b)] = 0.25,
        zw_zoomsubtracttexture['on'](_0x140698(0x489), function() {
            var _0x25cefb = _0x140698;
            zw_updatezoom(Math[_0x25cefb(0x693)](zw_multiplier - 0.25, 0.25));
        });
    }
    $(_0x140698(0x321))[_0x140698(0x728)](_0x140698(0x280));
    var _0x2d2fbf = function() {
        var _0x5e6709 = _0x140698;
        $(_0x5e6709(0x405))[_0x5e6709(0x72a)]('display', _0x5e6709(0x1e7))[_0x5e6709(0x54c)](''),
        $(_0x5e6709(0x321))[_0x5e6709(0x536)]();
    }
      , _0xd5a26f = function() {
        var _0x4a00b9 = _0x140698;
        let _0xfe01b0 = $(_0x4a00b9(0x405))['val']();
        $['trim'](_0xfe01b0) !== '' && (console[_0x4a00b9(0x10f)](_0x4a00b9(0x2d2), _0xfe01b0),
        zwormData[_0x4a00b9(0x345)] = _0xfe01b0,
        setTimeout( () => {
            var _0x553d11 = _0x4a00b9;
            zwormData[_0x553d11(0x345)] = '';
        }
        , 0x5dc));
    };
    $('#chatInput')['on'](_0x140698(0x13f), function(_0x19f115) {
        var _0x5c869d = _0x140698;
        if (_0x19f115[_0x5c869d(0x2b7)] === _0x5c869d(0x483))
            _0xd5a26f(),
            _0x2d2fbf();
        else
            _0x19f115['key'] === _0x5c869d(0x391) && _0x2d2fbf();
    }),
    $('#mm-action-play')[_0x140698(0xf8)]('<i\x20class=\x22material-icons\x22>play_circle_filled</i><span>PLAY</span>'),
    $(_0x140698(0x5b6))[_0x140698(0xf8)]('<i\x20class=\x22material-icons\x22>settings</i>'),
    $(_0x140698(0x714))['html'](_0x140698(0xfd)),
    $(_0x140698(0x2ba))[_0x140698(0xf8)]('<i\x20class=\x22material-icons\x22>store</i>'),
    $(_0x140698(0x59a))[_0x140698(0xf8)](_0x140698(0x725)),
    $(_0x140698(0x48b))['on']('click', function() {
        var _0x2cd7ff = _0x140698;
        $(_0x2cd7ff(0x48b))[_0x2cd7ff(0x440)](_0x2cd7ff(0x2c5)),
        $(_0x2cd7ff(0x292))[_0x2cd7ff(0x726)]('active'),
        $(_0x2cd7ff(0x3f5))[_0x2cd7ff(0x710)](),
        $(_0x2cd7ff(0x4e3))['hide']();
    }),
    $(_0x140698(0x272))['replaceWith']('<canvas\x20id=\x22background-canvas\x22></canvas>'),
    $('#game-view')['append']('<img\x20class=\x22worm_1\x22\x20src=\x22https://i.imgur.com/iekrYYm.png\x22><span\x20class=\x22Worm_cerca\x22></span>'),
    $(_0x140698(0x6d0))[_0x140698(0x194)](_0x140698(0x69a)),
    $('#aqnvgcpz05orkobh')['replaceWith'](_0x140698(0x317)),
    $(_0x140698(0x528))['on'](_0x140698(0x57f), function() {
        var _0x2cc739 = _0x140698;
        window[_0x2cc739(0x4fd)](_0x2cc739(0x320), _0x2cc739(0x700));
    }),
    $(_0x140698(0x19b))['replaceWith'](''),
    $(_0x140698(0xf0))[_0x140698(0x3ad)](),
    $(_0x140698(0x705))[_0x140698(0x3ad)](),
    $(_0x140698(0x117))[_0x140698(0x160)](_0x140698(0x208), _0x140698(0x625)),
    $(_0x140698(0x639))['attr'](_0x140698(0x208), _0x140698(0x625)),
    $(_0x140698(0x4a2))['remove'](),
    $(_0x140698(0x3fd))[_0x140698(0x3ad)](),
    $('#mm-action-play,\x20#zwplayagain,\x20#final-replay')['click'](function() {
        var _0x2b6501 = _0x140698;
        $(_0x2b6501(0x384))['css']('position', _0x2b6501(0x65c));
    }),
    $(_0x140698(0x59a))[_0x140698(0x57f)](function() {
        var _0xdc1281 = _0x140698;
        $('#settings-menu')['css']({
            'display': _0xdc1281(0x6a5),
            'opacity': '1'
        });
    }),
    $(_0x140698(0xe2))['click'](function() {
        var _0x243dda = _0x140698;
        $(_0x243dda(0x5e5))[_0x243dda(0x72a)](_0x243dda(0x180), '0');
    }),
    $('#mm-skin-next')['click'](function() {
        var _0x459a75 = _0x140698;
        $('#mm-skin-canv')['addClass'](_0x459a75(0x6d7)),
        setTimeout(function() {
            var _0x573b91 = _0x459a75;
            $(_0x573b91(0x138))[_0x573b91(0x726)](_0x573b91(0x6d7));
        }, 0x15e);
    }),
    $(_0x140698(0x6fb))[_0x140698(0x57f)](function() {
        var _0xdb86bc = _0x140698;
        $(_0xdb86bc(0x138))['addClass'](_0xdb86bc(0x6d7)),
        setTimeout(function() {
            var _0xa78c8b = _0xdb86bc;
            $(_0xa78c8b(0x138))[_0xa78c8b(0x726)](_0xa78c8b(0x6d7));
        }, 0x15e);
    });
    const _0x1b4807 = [_0x140698(0x73d), _0x140698(0x138), _0x140698(0x5b6), '#mm-leaders', _0x140698(0x2ba), _0x140698(0x545)];
    $(_0x1b4807['join'](',\x20'))['click'](function() {
        var _0x1e35d2 = _0x140698;
        $(_0x1e35d2(0x5e5))['css']({
            'display': _0x1e35d2(0x1e7),
            'opacity': '0'
        });
    });
    const _0x4e4188 = [_0x140698(0x285), _0x140698(0x5b6), _0x140698(0x714), '#mm-store', _0x140698(0x59a)];
    _0x4e4188[_0x140698(0xca)](function(_0xba5dd6) {
        $(_0xba5dd6)['hover'](function() {
            var _0x2bb3bb = _0x32c7;
            $(this)[_0x2bb3bb(0x72a)]({
                'box-shadow': _0x2bb3bb(0xd0)
            });
        }, function() {
            var _0x1e7ac9 = _0x32c7;
            $(this)[_0x1e7ac9(0x72a)]({
                'box-shadow': _0x1e7ac9(0x3fa)
            });
        });
    }),
    $(_0x140698(0x4d0))['replaceWith'](''),
    $(_0x140698(0x1af))[_0x140698(0x2f5)](_0x140698(0x3d2)),
    $(_0x140698(0x565))[_0x140698(0x2f5)](_0x140698(0x1c1)),
    $(_0x140698(0x117))['on'](_0x140698(0x57f), function() {
        var _0x3d75a3 = _0x140698
          , _0x1a81bc = prompt(_0x3d75a3(0x445));
        if (_0x1a81bc === 'W')
            $('.mm-logo')[_0x3d75a3(0x2db)]('Loading.'),
            setTimeout( () => {
                var _0x4d8a76 = _0x3d75a3;
                $('.mm-logo')[_0x4d8a76(0x2db)](_0x4d8a76(0x43e)),
                setTimeout( () => {
                    var _0x47f35f = _0x4d8a76;
                    $('.mm-logo')[_0x47f35f(0x2db)](_0x47f35f(0x17a)),
                    setTimeout( () => {
                        var _0x30c7f1 = _0x47f35f;
                        $(_0x30c7f1(0x117))[_0x30c7f1(0x2db)](_0x30c7f1(0x4d2));
                    }
                    , 0x7d0);
                }
                , 0x5dc);
            }
            , 0x3e8),
            $('.servers-peru')['html'](''),
            $(_0x3d75a3(0x4a0))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x49e))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x59f))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x186))[_0x3d75a3(0xf8)](''),
            $('.servers-francia')[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x355))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0xd1))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x41d))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x6c8))[_0x3d75a3(0xf8)](''),
            setTimeout( () => {
                var _0x44eed7 = _0x3d75a3;
                for (a = 0x0; a < serverData['length']; a++) {
                    var _0x468a9d = serverData[a][_0x44eed7(0x5aa)]
                      , _0x3e07be = serverData[a][_0x44eed7(0x305)]
                      , _0x4e8e74 = serverData[a]['serverName']
                      , _0x39029f = 'https://xd.com'
                      , _0x5f56c7 = serverData[a][_0x44eed7(0x4aa)];
                    let _0x1ecf3b = _0x44eed7(0x5d4) + _0x5f56c7 + _0x44eed7(0x396)
                      , _0x571e05 = _0x3e07be['match'](/[a-zA-Z]+/g)[_0x44eed7(0x349)]('')
                      , _0xb7ad8e = document[_0x44eed7(0x3b1)]('p');
                    _0xb7ad8e[_0x44eed7(0x139)] = _0x468a9d,
                    _0xb7ad8e[_0x44eed7(0x372)] = _0x4e8e74;
                    let _0x362d10 = document[_0x44eed7(0x3b1)](_0x44eed7(0x43f));
                    _0x362d10[_0x44eed7(0x61e)](_0x44eed7(0x191), _0x44eed7(0x4f7));
                    if (_0x571e05 == 'br')
                        $(_0x44eed7(0x5e6))[_0x44eed7(0x194)](_0x362d10),
                        $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                        $(_0xb7ad8e)[_0x44eed7(0x194)](_0x1ecf3b);
                    else {
                        if (_0x571e05 == 'mx')
                            $(_0x44eed7(0x4a0))['append'](_0x362d10),
                            $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                            $(_0xb7ad8e)[_0x44eed7(0x194)](_0x1ecf3b);
                        else {
                            if (_0x571e05 == 'us')
                                $(_0x44eed7(0x49e))[_0x44eed7(0x194)](_0x362d10),
                                $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                                $(_0xb7ad8e)['append'](_0x1ecf3b);
                            else {
                                if (_0x571e05 == 'ca')
                                    $(_0x44eed7(0x59f))[_0x44eed7(0x194)](_0x362d10),
                                    $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                                    $(_0xb7ad8e)[_0x44eed7(0x194)](_0x1ecf3b);
                                else {
                                    if (_0x571e05 == 'de')
                                        $(_0x44eed7(0x186))['append'](_0x362d10),
                                        $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                                        $(_0xb7ad8e)[_0x44eed7(0x194)](_0x1ecf3b);
                                    else {
                                        if (_0x571e05 == 'fr')
                                            $('.servers-francia')[_0x44eed7(0x194)](_0x362d10),
                                            $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                                            $(_0xb7ad8e)['append'](_0x1ecf3b);
                                        else {
                                            if (_0x571e05 == 'sg')
                                                $('.servers-singapur')['append'](_0x362d10),
                                                $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                                                $(_0xb7ad8e)['append'](_0x1ecf3b);
                                            else {
                                                if (_0x571e05 == 'jp')
                                                    $(_0x44eed7(0xd1))[_0x44eed7(0x194)](_0x362d10),
                                                    $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                                                    $(_0xb7ad8e)[_0x44eed7(0x194)](_0x1ecf3b);
                                                else {
                                                    if (_0x571e05 == 'au')
                                                        $('.servers-australia')[_0x44eed7(0x194)](_0x362d10),
                                                        $(_0x362d10)[_0x44eed7(0x194)](_0xb7ad8e),
                                                        $(_0xb7ad8e)[_0x44eed7(0x194)](_0x1ecf3b);
                                                    else
                                                        _0x571e05 == 'ae' && ($(_0x44eed7(0x6c8))[_0x44eed7(0x194)](_0x362d10),
                                                        $(_0x362d10)['append'](_0xb7ad8e),
                                                        $(_0xb7ad8e)[_0x44eed7(0x194)](_0x1ecf3b));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    $(_0xb7ad8e)[_0x44eed7(0x160)](_0x44eed7(0x191), _0x44eed7(0x594)),
                    $(_0xb7ad8e)[_0x44eed7(0x160)](_0x44eed7(0x139), _0x3e07be),
                    $(_0xb7ad8e)['attr'](_0x44eed7(0x4ff), _0x468a9d),
                    $(_0xb7ad8e)['click'](function() {
                        var _0x59a0ef = _0x44eed7;
                        $(_0x59a0ef(0x384))[_0x59a0ef(0x72a)]('position', 'static');
                        let _0x201e90 = $(this)[_0x59a0ef(0x160)]('data-con');
                        console[_0x59a0ef(0x10f)](_0x201e90),
                        _0x201e90 && (_0x3779ff['r']['Hd'](),
                        _0x3779ff['sa'](_0x201e90),
                        zw_servertext['text'] = $(this)['text'](),
                        console[_0x59a0ef(0x10f)]($(this)[_0x59a0ef(0x2db)]()));
                    });
                }
            }
            , 0xbb8);
        else
            _0x1a81bc === 'T' ? ($(_0x3d75a3(0x117))[_0x3d75a3(0x2db)](_0x3d75a3(0x395)),
            setTimeout( () => {
                var _0x50c5b6 = _0x3d75a3;
                $(_0x50c5b6(0x117))[_0x50c5b6(0x2db)]('Loading..'),
                setTimeout( () => {
                    var _0x489850 = _0x50c5b6;
                    $('.mm-logo')[_0x489850(0x2db)](_0x489850(0x17a)),
                    setTimeout( () => {
                        var _0x7899d0 = _0x489850;
                        $('.mm-logo')[_0x7899d0(0x2db)](_0x7899d0(0x526));
                    }
                    , 0x7d0);
                }
                , 0x5dc);
            }
            , 0x3e8),
            $(_0x3d75a3(0x5e6))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x4a0))['html'](''),
            $(_0x3d75a3(0x49e))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x59f))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x186))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x6e1))['html'](''),
            $(_0x3d75a3(0x355))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0xd1))[_0x3d75a3(0xf8)](''),
            $(_0x3d75a3(0x41d))[_0x3d75a3(0xf8)](''),
            $('.servers-granbretana')[_0x3d75a3(0xf8)](''),
            setTimeout( () => {
                var _0x695c9d = _0x3d75a3;
                for (a = 0x0; a < serverDataTimMap[_0x695c9d(0x484)]; a++) {
                    var _0x197584 = serverDataTimMap[a][_0x695c9d(0x5aa)]
                      , _0x54d483 = serverDataTimMap[a][_0x695c9d(0x305)]
                      , _0x37e018 = serverDataTimMap[a]['serverName']
                      , _0x5c2423 = serverDataTimMap[a][_0x695c9d(0x4aa)]
                      , _0x4dc80f = serverDataTimMap[a][_0x695c9d(0x56a)];
                    let _0xa856d4 = _0x54d483['match'](/[a-zA-Z]+/g)['join']('')
                      , _0x8724b8 = document[_0x695c9d(0x3b1)]('p');
                    _0x8724b8[_0x695c9d(0x139)] = _0x197584;
                    let _0x2577d8 = _0x695c9d(0x5d4) + _0x5c2423 + _0x695c9d(0x396)
                      , _0x1eea34 = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
                    _0x1eea34[_0x695c9d(0x4a9)](_0x2577d8) ? _0x2577d8 = _0x2577d8[_0x695c9d(0x68e)](_0x1eea34, '') : _0x2577d8;
                    let _0x429559 = _0x695c9d(0x14d)
                      , _0x4ed55e = /<span style=\\"(.*?)"><\\\/span>/;
                    _0x4ed55e['test'](_0x37e018) ? _0x37e018 = _0x37e018[_0x695c9d(0x68e)](_0x4ed55e, _0x429559) : _0x37e018;
                    _0x8724b8[_0x695c9d(0x372)] = _0x37e018;
                    let _0x145c82 = document[_0x695c9d(0x3b1)](_0x695c9d(0x43f));
                    _0x145c82['setAttribute'](_0x695c9d(0x191), _0x695c9d(0x4f7));
                    if (_0xa856d4 == 'BR')
                        $(_0x695c9d(0x5e6))[_0x695c9d(0x194)](_0x145c82),
                        $(_0x145c82)[_0x695c9d(0x194)](_0x8724b8),
                        $(_0x8724b8)['append'](_0x2577d8);
                    else {
                        if (_0xa856d4 == 'MX')
                            $(_0x695c9d(0x4a0))[_0x695c9d(0x194)](_0x145c82),
                            $(_0x145c82)[_0x695c9d(0x194)](_0x8724b8),
                            $(_0x8724b8)[_0x695c9d(0x194)](_0x2577d8);
                        else {
                            if (_0xa856d4 == 'US')
                                $('.servers-eeuu')[_0x695c9d(0x194)](_0x145c82),
                                $(_0x145c82)[_0x695c9d(0x194)](_0x8724b8),
                                $(_0x8724b8)['append'](_0x2577d8);
                            else {
                                if (_0xa856d4 == 'CA')
                                    $(_0x695c9d(0x59f))['append'](_0x145c82),
                                    $(_0x145c82)['append'](_0x8724b8),
                                    $(_0x8724b8)[_0x695c9d(0x194)](_0x2577d8);
                                else {
                                    if (_0xa856d4 == 'DE')
                                        $('.servers-germania')[_0x695c9d(0x194)](_0x145c82),
                                        $(_0x145c82)[_0x695c9d(0x194)](_0x8724b8),
                                        $(_0x8724b8)[_0x695c9d(0x194)](_0x2577d8);
                                    else {
                                        if (_0xa856d4 == 'FR')
                                            $(_0x695c9d(0x6e1))['append'](_0x145c82),
                                            $(_0x145c82)[_0x695c9d(0x194)](_0x8724b8),
                                            $(_0x8724b8)[_0x695c9d(0x194)](_0x2577d8);
                                        else {
                                            if (_0xa856d4 == 'SG')
                                                $(_0x695c9d(0x355))[_0x695c9d(0x194)](_0x145c82),
                                                $(_0x145c82)['append'](_0x8724b8),
                                                $(_0x8724b8)['append'](_0x2577d8);
                                            else {
                                                if (_0xa856d4 == 'JP')
                                                    $(_0x695c9d(0xd1))[_0x695c9d(0x194)](_0x145c82),
                                                    $(_0x145c82)[_0x695c9d(0x194)](_0x8724b8),
                                                    $(_0x8724b8)[_0x695c9d(0x194)](_0x2577d8);
                                                else {
                                                    if (_0xa856d4 == 'AU')
                                                        $('.servers-australia')['append'](_0x145c82),
                                                        $(_0x145c82)[_0x695c9d(0x194)](_0x8724b8),
                                                        $(_0x8724b8)['append'](_0x2577d8);
                                                    else
                                                        _0xa856d4 == 'AE' && ($(_0x695c9d(0x6c8))[_0x695c9d(0x194)](_0x145c82),
                                                        $(_0x145c82)['append'](_0x8724b8),
                                                        $(_0x8724b8)['append'](_0x2577d8));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    $(_0x8724b8)[_0x695c9d(0x160)](_0x695c9d(0x191), _0x695c9d(0x594)),
                    $(_0x8724b8)['attr'](_0x695c9d(0x139), _0x54d483),
                    $(_0x8724b8)[_0x695c9d(0x160)]('data-con', _0x197584),
                    $(_0x8724b8)[_0x695c9d(0x57f)](function() {
                        var _0x1b8eb4 = _0x695c9d;
                        $(_0x1b8eb4(0x384))[_0x1b8eb4(0x72a)](_0x1b8eb4(0x23e), 'static');
                        let _0x4e7e4e = $(this)[_0x1b8eb4(0x160)](_0x1b8eb4(0x4ff))
                          , _0x27e161 = $(this)[_0x1b8eb4(0x160)](_0x1b8eb4(0x139));
                        console[_0x1b8eb4(0x10f)](_0x27e161),
                        _0x4e7e4e && (_0x3779ff['r']['Hd'](),
                        _0x3779ff['sa'](_0x4e7e4e));
                    });
                }
            }
            , 0xbb8)) : alert(_0x3d75a3(0x1ab));
    });
}
  , ctx = {
    'fontStyle': {
        'blanco': new PIXI[(_0x18e6ab(0x25c))]({
            'align': _0x18e6ab(0x291),
            'fill': _0x18e6ab(0x717),
            'fontSize': 0xc,
            'lineJoin': 'round',
            'stroke': '#FFF',
            'strokeThickness': 0x1,
            'whiteSpace': _0x18e6ab(0x31e),
            'wordWrap': !![]
        })
    }
};
function _0x248c() {
    var _0x5b6225 = ['loading\x20advertisement', '#FF4500', 'fromCharCode', '_init', '.loading-logo', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20id=\x22', 'aliases', '<span\x20class=\x22tooltip\x22>', 'color\x20del\x20laser', 'wssCode', ':</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', '#707070', 'tint', '(^|\x5cs)', 'cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=', '0D0400', 'slice', 'giro', 'pivot', 'default_icon.png', 'https://i.imgur.com/VPkrI9l.png', 'https://i.imgur.com/4ccZ556.png', 'list', '#idkopyala', '/getUserData', '❌\x20Error\x20al\x20optimizar\x20textura:\x20', 'Client_VisibleSkinPrivate', 'green', '0xFFFFFF', 'Graphics', 'server-message-toast', 'visible', 'Blue', 'skinGroupArrayDict', 'serverName', 'clock_ad', 'aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==', 'mousemove', '#wormExplot-key', 'static', 'updatePacketInterval', '.server-top1', 'show', '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-coins-close\x22>', '\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'off', 'ActiveX5', 'filter', 'display', 'code', 'keys', 'onDragEnd', 'fra-e.wormate.io', 'tfc', 'alpha', 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js', '#settings-view', 'index.game.popup.menu.leaders.tab', 'waw-a.wormate.io', 'main', 'month', 'gsi:then', 'lowercase', 'pop', '#tooltipTop8', '//apis.google.com/js/api:client.js', '#store-buy-coins_125000', 'ZWORM\x20SETTINGS', 'util.time.days', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modalPuertas\x22\x20style=\x22position:fixed;\x20top:20%;\x20left:50%;\x20transform:translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:20px;\x20z-index:9999;\x20display:none;\x20background-color:\x20rgb(78\x2078\x20114\x20/\x2075%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x20border:\x202px\x20solid\x20#252535;\x20color:\x20white;\x20font-family:\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20400px;\x20overflow-y:\x20auto;\x20min-width:\x20300px;\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modalCloseBtn\x22\x20style=\x22position:\x20absolute;\x20top:\x205px;\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x20cursor:\x20pointer;\x20color:\x20#fff;\x22>✖</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modalTitle\x22\x20style=\x22font-size:\x2016px;\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x20text-align:\x20center;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔓\x20Open\x20doors\x20available\x20for:\x20<span\x20id=\x22nombreServidor\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22resultadoPuertas\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#loading-worm-a', 'atan2', 'call', 'eyesDict', 'querySelector', 'RmxvYXQ', ';path=/', 'initialState', 'Valor\x20guardado\x20en\x20localStorage:', 'allstreamers', 'https://asserts.wormworld.io/backgrounds/bkgnd8.png', 'zworm', 'timerSpZg', '[Zworm\x20OWNER]', 'scrollHeight', 'backgroundColor', 'target=\x22_black\x22\x20href', '00000', 'nombres2', 'replace', 'gra-a.wormate.io', '),\x20auto', '\x27Times\x20New\x20Roman\x27,\x20serif', ';\x22\x20onclick=\x22openColorPanel(\x27', 'max', 'sin-d.wormate.io', 'GLASSES', 'assign', 'https://i.imgur.com/ZFifUoX.png', 'bottom_right', '#store-buy-coins_3250', '<span\x20id=\x22ping\x22></span>', '0\x200\x2010px\x20rgba(0,0,0,0.5)', 'requestFullscreen', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22containerDoorsServers\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22optionSelect\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-a.wormate.io\x22>sao-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22mum-a.wormate.io\x22>mum-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dxb-a.wormate.io\x22>dxb-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-e.wormate.io\x22>fra-e</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-d.wormate.io\x22>fra-d</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-c.wormate.io\x22>fra-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-b.wormate.io\x22>fra-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22waw-a.wormate.io\x22>waw-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dal-b.wormate.io\x22>dal-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22vin-a.wormate.io\x22>vin-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dal-a.wormate.io\x22>dal-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-c.wormate.io\x22>sao-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22bhs-a.wormate.io\x22>bhs-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-b.wormate.io\x22>sao-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22hil-a.wormate.io\x22>hil-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22syd-a.wormate.io\x22>syd-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-g.wormate.io\x22>sin-g</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22gra-a.wormate.io\x22>gra-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-i.wormate.io\x22>sin-i</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-h.wormate.io\x22>sin-h</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-f.wormate.io\x22>sin-f</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-c.wormate.io\x22>sin-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-b.wormate.io\x22>sin-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-a.wormate.io\x22>sin-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22tok-b.wormate.io\x22>tok-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-d.wormate.io\x22>sin-d</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-e.wormate.io\x22>sin-e</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22numberInput\x22\x20min=\x220\x22\x20placeholder=\x22ROOM\x20NUMBER\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22connectButton\x22>CONNECT</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'Dallas\x20-\x20EEUU', 'toLowerCase', 'done', 'clientsSkinsActivos', 'data-letterCase', 'Top\x201\x20actualizado:', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'flex', 'Por\x20favor,\x20selecciona\x20una\x20opción\x20y\x20escribe\x20un\x20número\x20antes\x20de\x20conectar.', 'Team\x20Code\x20updated:', '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-close\x22>', 'className', '_text', 'client_ID', '\x22\x20value=\x22', 'year', 'containerHsRec3', '#final-replay', 'V1JBUF9NT0RFUw==', '2px\x20solid\x20#fff', 'backgroundImage', 'userId', '#store-view-prev', '6edhpix', 'visiblePowersAll', 'players', 'fontStyle', 'UmVuZGVyZXI=', 'atlas', 'beforeend', 'index.game.popup.menu.settings.tab', 'onreadystatechange', 'pow', 'pointsContainer', '<span\x20class=\x22names_settings\x22\x20id=\x22sectores\x22>\x20', 'innerScale', 'https://i.imgur.com/iqKabEA.png', 'ancho\x20del\x20potenciador', 'getDirection', '<img\x20src=\x22', 'onclose', 'zoom-key', '.servers-granbretana', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'https://asserts.wormworld.io/backgrounds/arena03.png', '<input\x20id=\x22color_palet2\x22\x20type=\x22color\x22\x20value=\x22#01D9CC\x22>', 'pageX', '#mm-advice-cont', 'https://i.imgur.com/gvMlosm.png', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22\x20style=\x22', '#game-view', 'split', 'index.game.main.menu.unlockSkins.comeAndPlay', 'Wormy\x20Error:\x20', 'host', 'xxxEmojiType', '#settings5dolars', 'cambio-skin2', '#1a1a1a', 'get', 'clientesActivos', 'fondos', 'preventDefault', 'file', 'booster\x20width', '/dynamic/assets/revision.json', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22><div\x20class=\x22ball\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '.servers-francia', '.v1', 'gg_', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-', 'cachedScaleY', 'sort', 'index.game.floating.wellDone', 'X2_TYPE', 'onclick', 'description', 'https://i.imgur.com/12MgJyy.png', 'nameText', 'RIGHT', '#profile-stat-kills', '#sectores-key', 'https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3', '.toaster-consent-close', '\x22\x20style=\x22margin-left:\x2010px;\x22>Connect</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'values', '\x22><img\x20src=\x22data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\x22><span>', '#toggleKillFeed', 'Desconocido', 'https://wormate.io/images/og-share-img-new.jpg', 'addChild', 'mouthUnknown', '#mm-player-level', '#mm-skin-prev', '//connect.facebook.net/', 'rgba(30,\x2030,\x2040,\x200.95)', 'id_game', '#settings-backgroundSolid-switch', '_blank', 'LASER\x20HS', '/images/guest-avatar-xmas2022.png', 'toast-top-center', 'includes', '#mm-skin-next\x20svg', 'innerWidth', '(((.+)+)+)+$', 'subir\x20sonido', '/images/bg-obstacle.png', 'hypot', 'hideYouNameInMinimap', '.key-input', 'TEAM2', 'index.game.toaster.continue', 'coins_1250', 'toggle', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', '<input\x20id=\x22', 'onwheel', '#mm-leaders', 'ComidaSize', '\x27)\x22></div>', '#FFF', ':</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sound-hs\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22Enter\x20sound\x20URL\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', 'baseVal', 'ssss', '\x20\x20\x20\x20\x20\x20', 'removeChild', 'https://asserts.wormworld.io/backgrounds/bkgnd0.png', 'not', 'facebook', 'a1_', 'kills', 'Friends', 'size\x20of\x20food', 'empty', '<i\x20class=\x22material-icons\x22>manage_accounts</i>', 'removeClass', 'red', 'after', '???????\x20???', 'css', 'https://zwormextenstion.com/wormExtension/api/servers/wormworld.php?v=', '#login-view', '#markup-wrap', 'Ej\x20(gorra?)', 'MLb', '?????????', '#skins-view', 'opacity\x200.3s\x20ease', 'containerImgTest', 'zw-toplist', 'Origin:', 'zw_msg', 'AudioState', 'lightblue', 'color', 'getAuthResponse', 'stop', '<input\x20type=\x22checkbox\x22\x20id=\x22toggleKillFeed\x22\x20/>', '#mm-player-info', '#adbl-4', '</span>\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22toaster-consent-accepted-link\x22\x20href=\x22/privacy-policy\x22>', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'mmm', 'Arial', '\x20ms</strong>', 'find', 'fail', '</div>', 'index.game.antiadblocker.msg3', '(unknown)', 'top8', '<div\x20id=\x22notifications-menu\x22\x20class=\x22menu\x22>Preferencias\x20de\x20notificaciones</div>', 'laser\x20color', '<div\x20id=\x22firefly-container\x22></div>', '#popup-menu-label', 'save\x20gm:\x20', 'forEach', '#ff0999', 'minimapBorderColorGroup', 'BOTTOM', '#popup-menu-coins-val', 'playerY', 'inset\x200\x200\x2020px\x20rgba(255,\x20255,\x20255,\x200.5),\x200\x200\x2020px\x20rgba(255,\x20255,\x20255,\x200.2)', '.servers-japon', 'https://i.imgur.com/0aN5Zek.png', 'cursor-box\x20icon-selector__item', 'fillText', 'json', 'touches', '<input\x20type=\x22text\x22\x20id=\x22teamCodeInput\x22\x20placeholder=\x22Enter\x20team\x20code\x22\x20/>', 'top_right', 'geolocation', 'PotenciadorSize', 'glassesDict', 'href', '_config', '1554558xWXfYd', '<option\x20value=\x228\x22>8</option>', 'BOTTOM_LEFT', 'format', '#popup-menu-back', 'isFinite', 'KeyRespawn', '#popup-delete-account-container', 'outer', 'WormSkinData', 'Avatar', 'fontFamily', 'swing', '???????????\x20????', 'getElementById', 'canvastext', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22sound-button\x22\x20onclick=\x22window.open(\x27https://www.myinstants.com/en/index/us/\x27,\x20\x27_blank\x27)\x22>Go\x20to\x20Sound\x20Tutorial\x201</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', '.ui-tabs-tab', '#mm-skin-prev\x20svg', 'xXx10', 'BOTTOM_RIGHT', '\x20-\x20', 'indexOf', 'orange', 'vin-a.wormate.io', '#profile-experience-val', 'html', 'onload', 'Web\x20SQL\x20no\x20se\x20puede\x20eliminar\x20automáticamente\x20desde\x20JavaScript.', '#final-score', 'latitude', '<i\x20class=\x22material-icons\x22>leaderboard</i>', 'laserHS', 'classPrefix', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22\x20style=\x22color:\x20yellow;\x22>PUT\x20YOUR\x20NAME\x20FOR\x20TEAM\x20LIST:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22teamNickname\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22ENTER\x20YOUR\x20NAME\x20FOR\x20FRIENDS\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '.ui-tab', 'TOP_RIGHT', 'onChange', '#top10Preview', 'data-control', 'event', '\x22\x20style=\x22background-color:\x20', 'https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3', 'background-position', 'onerror', '#color_paletRGB,\x20#color_palet,\x20#color_palet2', 'Australia', 'stopPropagation', 'getTime', 'log', 'bhs-a.wormate.io', 'user_data', 'emoji', 'dal-b.wormate.io', '.tooltip', 'white', '&gh=', '.mm-logo', 'showTeamList', 'index.game.antiadblocker.msg4', 'game\x20color', '<option\x20value=\x2213\x22>', 'getItem', '.\x20\x20', '..\x209\x20..', 'guest', '#settings-interactive-switch', 'hasOwnProperty', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-message\x22\x20style=\x22background:\x20', 'https://asserts.wormworld.io/backgrounds/bkgnd6.png', 'avatar', '<div\x20id=\x22user-section\x22\x20class=\x22settings-section\x22>', 'index.game.antiadblocker.msg1', 'O3ZhcnlpbmcgdmVjMiA=', 'If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20the\x20top\x208\x20players.', 'cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg', 'nonbuyable', 'debu', 'blur', 'lineStyle', 'scale', 'index.game.popup.menu.wear.tab', 'chngPersonsSkins', 'teamDict', 'dataType', 'soundTuto4', 'gray', 'wss://zworm.xyz:9800', 'mouseY', 'copy', '#mm-skin-canv', 'value', '1337057sHukgC', 'GET', 'byLevel', 'coins_7000', 'LDEuMCkpLnh5LDAuMCwxLjApO30=', 'keydown', '???????', '&nickname=', '_request', 'Green', 'Error:\x20ctx.teamsContainer\x20is\x20not\x20defined.', '.option.toggle[data-option=\x27backgroundSolid\x27]\x20.box', '\x20recibido\x20por\x20el\x20jugador\x20', 'ENV', '\x20tbody', 'https://zwormextenstion.com/wormExtension/api/skinsActived.php?v=', 'https://i.imgur.com/0G8cFtP.png', '8px', 'MzI', '<span\x20style=\x22background-color:\x20#4dff00;width:\x2012px;height:\x2012px;border-radius:\x2012px;margin-top:\x204px;float:\x20right;\x22></span>', 'setInt16', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20', 'fadeOut', 'stringify', 'sin-c.wormate.io', 'abs', '#toaster-stack', 'mouseout', '<span\x20class=\x22names_settings\x22>\x20:\x20Show\x20All\x20Power-Ups</span>', 'color\x20del\x20juego', 'TWVzaA==', 'pressed', '</a>\x20\x20\x20\x20</div>\x20\x20\x20\x20<div\x20class=\x22toaster-consent-close\x22>', 'X10_TYPE', 'minicolors', '0x00243E', 'ZW_', 'serviceWorker', 'attr', '<div\x20id=\x22', '#profile-stat-registrationDate', 'O3VuaWZvcm0gdmVjNCA=', 'en_US', 'soundTuto2', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fill\x22\x20style=\x22width:\x20', '\x27Georgia\x27,\x20serif', '0000', 'backgroundSolid', 'ServerName', ')\x20del\x20equipo\x20', 'Mensaje\x20desconocido:', 'fadeTo', '.options-list\x20>\x20div[category=\x22teams\x22]', '??\x20?????????????', '(orientation:\x20portrait)', 'openDatabase', 'set', 'innerHeight', 'changeFont', 'document', 'Frankfurt\x20-\x20Alemania', '\x27,\x20change\x20in\x20(ms)\x20', 'U3ByaXRl', 'keyCode', 'Loading...', '#store-buy-coins_1250', 'https://zworm.xyz:3305/data?v=', 'TOP_LEFT', 'js$2', '#withdraw-consent-no', 'opacity', '/uk', 'smoothCamera', 'titleRec2', 'fn_o', 'espacio\x202', '.servers-germania', 'mouseover', '#withdraw-consent-yes', 'TEAM\x20LIST', 'https://i.imgur.com/WqWsDfi.png', 'return\x20(function()\x20', 'aipAABC', 'ARENA', '<option\x20value=\x221\x22>', 'Conectando\x20a:', 'cachedTexture', 'class', '#mm-player-avatar', '<i\x20class=\x22material-icons\x22\x20\x20id=\x22user_config\x22\x20style=\x22position:\x20absolute;background-color:\x20transparent;border-radius:\x205px;\x22>menu</i>', 'append', 'portionDict', 'Servidor\x20', 'random', 'charAt', 'PropertyManager', 'cos', '#social-buttons', '100300_portions.png', 'floor', 'async', '<div\x20class=\x22option\x20colorpicker\x22>', 'loading-screen', '<select\x20id=\x22zwtop\x22>', '.options-list\x20>\x20div[category=\x22theme\x22]', 'left', '4433995LtUquQ', '</option>', '#stretch-box', 'zMg==', 'lineTo', '8RJqEvP', 'fps', 'Ingresa\x20\x27W\x27\x20o\x20\x27T\x27\x20para\x20continuar.', 'gameMode', 'price', 'round', '#fullscreen', 'wrapMode', 'xXx2', 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png', 'testSkinCustom', '10px', '{1}', '/images/lens.png', 'databases', 'emit', 'playerDisconnect', 'prop', '#mm-action-login', '#leaders-button-highscore', '.servers-container\x20>\x20div', 'index.game.toaster.consent.text', 'gg_107164783301809303612', 'default', '<i\x20class=\x22material-icons\x22>replay</i>', 'ping', '.btn-check-ports', 'R3JhcGhpY3M=', '#leaders-button-kills', 'nodes', 'toFixed', 'Peru', 'url(', 'wormExplot', 'miniclip', 'this\x20is\x20null\x20or\x20not\x20defined', 'addAsyncTest', 'game-wrap', '..\x207\x20..', 'I18N_MESSAGES', 'webkitRequestFullscreen', '&glassesId=', 'LEFT', 'fondo3', '#wear-item-price', 'getPower', 'backgroundPreview', 'UkVQRUFU', 'head', 'app', 'noAuras', '\x22\x20min=\x22', '<span\x20class=\x22names_settings\x22\x20id=\x22laser\x22>\x20', 'border-color', '?????', 'data-wss', 'afterbegin', 'https://asserts.wormworld.io/backgrounds/arena02.png', 'revision', 'aHR0cHM6Ly96d29ybWV4dGVuc3Rpb24uY29tL3dvcm1FeHRlbnNpb24vZ2FtZS5qcw==', 'getGlobalPosition', 'toUpperCase', 'none', '#skin-group-description-text', 'delete', 'true', 'flx', '\x27Trebuchet\x20MS\x27,\x20sans-serif', 'laser', 'concat', 'WHITE', 'ptc', '\x22/></span><span>', '????', 'joystick', '<option\x20value=\x223\x22>', '<span\x20id=\x22zw-settings-version\x22\x20class=\x22settings-line\x22></span>', 'server_url', 'https://i.imgur.com/mHp0ozi.png', 'O2dsX1Bvc2l0aW9uPXZlYzQoKA==', 'laserColor', 'blanco', 'glassesUnknown', '#tooltipKillFeed', 'UElYSQ==', 'pause', 'https://i.imgur.com/4JZUa1u.png', '#zoom-key', 'coins_125000', '_alreadyScaledWormTextures', 'outerScale', '\x22\x20class=\x22streamer-image\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-check-ports\x22>📡📶</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'index.game.result.placeInBoard', '#top8List', 'Top\x20', 'src', '#ffffff', 'soundTuto3', 'WearSkinData', 'R2VvbWV0cnk=', 'No\x20hay\x20streamers\x20online.', 'skinId_A:\x20', 'while\x20(true)\x20{}', 'clear', 'u6_', '<label\x20for=\x22toggleKillFeed\x22>Show\x20Kill\x20Feed</label>', ':</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sound-10hs\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22Enter\x20secondary\x20sound\x20URL\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Botón\x20para\x20activar/desactivar\x20el\x20sonido\x20de\x20headshots\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>Headshot\x20Sound:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22toggle-sound\x22\x20class=\x22sound-button\x22>Disable\x20Sound</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🏆\x20Nueva\x20sección:\x20Equipos\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22teams\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>TEAM\x20CODE:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22teamCodeInput\x22\x20\x20class=\x22sounds-input\x22\x20placeholder=\x22ENTER\x20YOUR\x20CODE\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🎨\x20Nueva\x20sección:\x20Skins\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22skins\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>Skin\x20Original:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22width:\x2060px\x22\x20type=\x22text\x22\x20name=\x22inputReplaceSkin\x22\x20\x20class=\x22sounds-input\x22\x20\x20id=\x22inputReplaceSkin\x22\x20value=\x2235\x22\x20maxlength=\x224\x22\x20onchange=\x22setIdReplaceSkin(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22streamers\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22streamers-section\x22\x20style=\x22display:\x20none;\x20padding:\x2010px;\x22>\x0a\x20\x20\x20\x20<h2>Lista\x20de\x20Streamers</h2>\x0a\x20\x20\x20\x20<div\x20id=\x22streamers-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x20inlive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x201</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>Twitch</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x202</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>YouTube</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x20inlive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x203</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>Facebook</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sección\x20de\x20Streamers\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'aura\x20del\x20potenciador', 'EYES', 'eat_animation', 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css', 'tabindex', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;\x20justify-content:space-between;\x20margin:\x204px\x200;\x20', 'cookie', '{0}', '#store-go-wear-button', 'player', '#ADFF2F', 'onopen', 'exception', '#adbl-2', '9999', 'customFormat', '<option\x20value=\x221\x22>1</option>', '#FF0000', 'index.game.popup.menu.store.locked', 'sectors', '1eaom01c3pxu9wd3', '#final-message', 'Mostrar\x20lista\x20de\x20amigos:', '#adbl-continue', 'food\x20shine', 'account_type', '<span\x20class=\x22names_settings\x22>\x20:\x20Show\x20Speed&Zigzag</span>', 'top10List', 'reduce', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'index.game.popup.menu.consent.tab', '#sound-10hs', 'coins', 'regDate', '#wear-view', 'idSkin', 'sin-g.wormate.io', 'HAT', 'getImageData', 'clientY', 'Textil', 'aId', 'position', 'padStart', '<div\x20style=\x22border-color:', 'gsi:l', '<ul\x20class=\x22ui-tabs-nav\x22></ul>', 'preroll', 'Error\x20al\x20construir\x20la\x20URL\x20del\x20script\x20', 'location', '#mm-skin-over', 'soundTuto1', '<div\x20class=\x22popup-sep\x22></div>', 'index.game.toaster.consent.link', 'fra-d.wormate.io', 'mouthVariantArray', '<input\x20id=\x22color_palet\x22\x20type=\x22color\x22\x20value=\x22#00243E\x22>', 'Socket\x20closed', 'minimapTeamcod', 'https://zwormextenstion.com/wormExtension/api/clients.php?v=', '#markup-footer', 'nickname', '#wear-hats-button', 'Error\x20al\x20obtener\x20los\x20datos:', 'abilityDict', 'xxx10', 'game-cont', '#00B2ED', 'setItem', 'xxx2', 'urlRequest:\x20', '#store-buy-button', 'TextStyle', 'texture', 'offsetHeight', '0xffffff', '????\x20???\x20??????', 'border\x20color', 'QURE', 'azul', 'fondo1', 'source', 'eventoPrincipal', 'FF0000', '#adbl-continue\x20span', '50%', '<option\x20value=\x224\x22>4</option>', 'link', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-sectores-switch\x22>', 'Arena\x202', '#wear-eyes-button', 'GAME\x20JS\x202023\x20BY\x20SWYKZ', 'de_DE', 'onDragStart', '#background-canvas', 'translate(-50%,\x20-50%)\x20scale(', 'Current\x20track\x20\x27', 'uk_UA', 'teamColor', '\x22\x20data-option=\x22', '🗑️\x20Textura\x20destruida\x20por\x20estado\x20inválido:\x20', '#mm-player-exp-bar', 'ID:\x20', 'init', 'hasClass', '.description-text', 'v8.0', 'dA:\x20FAIL', '<input\x20type=\x22text\x22\x20id=\x22chatInput\x22\x20style=\x22display:\x20none;\x20position:\x20absolute;\x22\x20placeholder=\x22Escribe\x20tu\x20mensaje...\x22\x20/>', 'Segoe\x20UI,\x20sans-serif', 'https://i.imgur.com/NKAyYa8.png', 'name', '#background-key', '#mm-action-play', 'data-format', 'https://i.imgur.com/LvJ1RxC.png', 'querySelectorAll', '#popup-logout-container', 'data-country-name', '❌\x20Cerrado', 'touchstart', 'webkitExitFullscreen', 'xXxLupaZ', '#zw-settings-id', 'If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20kills\x20in\x20real\x20time.', 'center', '#hotkeys-icon', 'playerDeath', 'canvas', 'byKillsAndHeadShots', '????\x20???\x2010\x20?????', 'aipAABS', 'isArray', '#profile-avatar', 'https://asserts.wormworld.io/backgrounds/arena04.png', 'colorBorde', 'Error\x20al\x20cargar\x20los\x20servidores:', 'skinId', 'wssServer', '<option\x20value=\x2210\x22>10</option>', 'index.game.social.shareResult.messNorm', 'use\x20strict', '.server-name', '#avatarImage', 'buttonMode', '#preview_', '<select\x20id=\x22arkaplan\x22>', 'isSignedIn', '#profile-stat-totalTimeSpent', 'X_x2', '<div\x20id=\x22display_color\x22>', '#showAnimationHeadshot', 'latency', '#wear-mouths-button', 'hover', 'URL\x20decodificada:', 'toUTCString', '<div\x20class=\x22settings-checkbox\x22>', 'Sky\x20Purp', 'send', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'addTest', 'gger', 'key', 'INCOGNITO', 'totalPlayTimeSec', '#mm-store', 'shadowOffsetY', 'SHOW\x20PING', 'O2F0dHJpYnV0ZSB2ZWMyIA==', 'dA:\x20NO', 'toLocal', 'SaveGameXT', 'resolution', '#wear-locked-bar-text', 'coins_16000', 'textureDict', 'active', 'base', '.toaster-levelup-close', 'X_x10', '{}.constructor(\x22return\x20this\x22)(\x20)', 'prerollCount', '#mm-menu-cont', 'return\x20PIXI;', 'sin-b.wormate.io', '??????\x203', 'loop', '\x20at\x20', '0\x200\x2010px\x20rgba(0,0,0,0.6)', 'Mensaje\x20enviado:', 'propertyList', '..\x208\x20..', 'sessionsPlayed', 'game', 'expToNext', 'zwset', 'cloneNode', ')...\x0a', 'text', '\x22></div>', 'innerRadius', 'wormExplot-key', 'https://asserts.wormworld.io/backgrounds/bkgnd11.png', '#final-continue', 'https://asserts.wormworld.io/backgrounds/bg_sky_2.png', 'restart-key', 'top10Preview', 'options', '100%\x20200%', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'team_2', 'tuNewScore', 'eyesVariantArray', 'classList', 'selectedBackground', '#coins-view', 'progress-bar', 'matchAll', '<option\x20value=\x229\x22>9</option>', '.connect-button', '\x22\x20style=\x22display:\x20', '#loading-worm-c', '<div\x20class=\x22settings-line\x22>', '<div\x20class=\x22container\x22>', 'prepend', '#fff', '&mouthId=', 'titleRec3', 'bind', 'https://swykz.theoxt.com/api/users/register_update_player.php', 'glow', '</select>', '#settings-notAbilityAll-switch', 'anisotropicLevel', '..\x2010\x20..', '#resultadoPuertas', '#mm-event-text', 'selectedFont', '\x22\x20class=\x22toaster\x20toaster-levelup\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-levelup-img\x22\x20alt=\x22Wormate\x20Level\x20Up\x20Star\x22\x20src=\x22/images/level-star.svg\x22\x20/>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-val\x22>', 'TopPlayers', 'dataRoom', 'indexedDB', 'Blue\x20Black', 'endFill', '<div\x20id=\x22wormtr-settings-view\x22\x20class=\x22base-popup-view\x22\x20style=\x22opacity:\x201;\x22>', '/images/bg-pattern-pow2-TEAM2.png', '#00FF00', 'background', 'unregister', 'add', 'killFeed', 'region', 'stateObject', 'flexx', '#firefly-container', '#wear-description-text', 'Enable\x20Sound', 'data-inline', '\x0a\x20\x20\x20\x20<div\x20id=\x22premium-panel\x22\x20style=\x22box-shadow:\x20rgba(0,\x200,\x200,\x200.5)\x200px\x201px\x201px\x200px;\x20background-color:\x20transparent;\x20border-radius:\x208px;\x20padding:\x2020px;\x20text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:\x20#fff;\x22>Get\x20the\x20Premium\x20Version!</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#f9f9f9;\x22>Access\x20exclusive\x20benefits\x20by\x20purchasing\x20the\x20premium\x20version.\x20Dedicated\x20support,\x20more\x20options,\x20and\x20much\x20more.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#fff;\x20font-weight:\x20bold;\x22>Advertise\x20with\x20more\x20visibility\x20and\x20reach\x20more\x20customers!</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Button\x20to\x20redirect\x20to\x20Discord\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22buy-premium\x22\x20style=\x22background-color:\x20#7289da;\x20color:\x20white;\x20padding:\x2010px\x2020px;\x20border:\x20none;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Buy\x20on\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'getRegistrations', 'createElementNS', 'table', 'ActiveEmoji', 'Kg==', 'Puerto\x20no\x20válido', 'normal', 'start\x20pSC:\x20', 'https://discord.gg/sJ5R95Rc6Z', '#game-canvas', '??????\x20???', 'Load\x20GM:\x20', '#FFA500', 'Socket\x20error', 'https://i.imgur.com/9ui2KwE.png', '#optionSelect', 'save\x20sPN:\x20', 'inner', 'popup', 'Nflex', 'loading', 'copiar', '#results-view', 'shadowOffsetX', '#showTeamList', 'hskill', '.servers-', 'setSize', 'xxxLupatype', '.toaster-coins-close', 'keyup', 'apply', 'index.game.toaster.consent.iAccept', '#please-wait-view', '#wear-view-canv', 'coins_50000', '#store-groups', '#profile-experience-bar', 'application/json', '<img>', '):\x20', '15px', 'Zoom\x20Velocidad', 'innerAlphaStandby', 'WRAP_MODES', 'message', 'getContext', 'runtimeHash', '#store-item-price', 'join', 'scrollTop', 'close', '#settings-container2,\x20#clossed_Setings', 'prototype', 'text/css', 'from', 'google', 'gsi:s', 'offsetWidth', '<div\x20class=\x22icon-selector\x22></div>', '\x22><img\x20src=\x22data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\x22><span>', '.servers-singapur', 'Name', 'baseTexture', 'radius', '\x22\x20style=\x22color:\x20', 'Desconectado\x20del\x20servidor\x20WebSocket', 'Load\x20sPN:\x20', 'string', 'mouseDelay', 'step', 'mum-a.wormate.io', 'rotate-gif', 'nodeName', 'dead', '<li><strong>❌\x20No\x20se\x20encontraron\x20puertas\x20abiertas.</strong></li>', 'https://i.imgur.com/K7UPjJJ.jpg', 'hsKillUpdate', 'https://wormate.io', 'sectores', 'velocidad', 'skin', 'teamColorGroup', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22', 'Arena\x204', '#1eaom01c3pxu9wd3', 'ancho\x20de\x20la\x20comida', '#toggleTop8', '</span></a>', 'dHJhbnNsYXRpb25NYXRyaXg=', 'innerHTML', '#profile-stat-gamesPlayed', '#FF4544', 'https://cdn.socket.io/4.4.1/socket.io.min.js', 'VGV4dA==', 'distance', 'FOOD\x20SHADOW', '#connectButton', 'top_left', 'chain', 'FFFFFF', 'outerRadius', 'script', 'Error\x20al\x20realizar\x20la\x20solicitud\x20GET:', '\x20ha\x20enviado\x20un\x20mensaje:\x20', '\x27Lucida\x20Console\x27,\x20monospace', '<span\x20class=\x22settings-label\x22>Top</span>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22connect-button\x22\x20data-server=\x22', '.overlay-2', '</div></div>', '----------☠️---------', '#chat-history', '#numberInput', 'https://i.imgur.com/DbWbUxD.png', 'toast-info', 'coords', '<option\x20value=\x227\x22>', 'enableJSClass', 'aipS', 'addEventListener', '.pwrups', 'Escape', 'height', 'https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap', 'sha256', 'Loading.', '\x22\x20\x20\x20\x20style=\x22margin-left:\x20100px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>', '5000', 'moveTo', '#store-locked-bar', 'img', 'toString', '&nbsp;', 'initialize', 'now', 'SIZE\x20FOOD', 'hide', 'color\x20del\x20borde', 'enableClasses', 'undefined', 'Incognito', '<label\x20for=\x22toggleTop8\x22>Show\x20Top\x208</label>', '????????????', 'angleBetween', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20toggle\x20', 'anApp', 'Top\x20HS\x20(👑)', 'visibilitychange', 'parse', 'remove', '%):\x20', 'No\x20se\x20encontraron\x20skins\x20privadas\x20para\x20el\x20usuario\x20', 'facebook-jssdk', 'createElement', '🔧\x20Imagen\x20escalada\x20(', '8209131WyYyOr', 'onmessage', '#FFFFFF', 'longitude', '#mm-skin-next', 'checked', 'transparent', 'mm-params-nickname', '#teamCodeInput', 'mouseX', 'CLAMP', 'sqrt', 'setTime', '\x22\x20max=\x22', '9903753ehsnRu', 'ActiveX10', 'KnZlYzMo', 'color:\x20yellow;', 'isSkinCustom', '#wear-glasses-button', 'fondo2', 'https://zwormextenstion.com/wormExtension/css/style2.css?v=', 'M🧁', 'devicePixelRatio', 'cachedScaleX', 'mouseenter', '%;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22', '<option\x20value=\x225\x22>5</option>', 'arraybuffer', 'xxx5', '#modalPuertas', '<i\x20class=\x22material-icons\x22>fullscreen</i>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20', '<ul></ul>', 'shared', 'ui-tab-active', 'V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==', 'Arial,\x20sans-serif', 'svg', 'websockets', 'showPlayerNames', 'CLOSING', 'block', 'div[category=\x27', '.server-row', 'enemyNameHs', 'SkinVisible(For\x20public)', ';\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-name\x22\x20>', 'hatDict', 'fb_', 'Sprite', '<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-tw\x22\x20target=\x22_blank\x22\x20href=\x22http://twitter.com/intent/tweet?status=', 'match', 'La\x20fecha\x20de\x20expiraci�n\x20ha\x20vencido.', 'warn', 'background-color', 'Cursor\x20', '100px', '.wormate.io', '#adbl-3', 'U2hhZGVy', '2NA==', 'SKIN', '\x22\x20data-country=\x22', 'OPEN', '\x20/\x20', '#user-section', 'https://i.imgur.com/Hg3sKn0.png', 'aload', '<input\x20style=\x22width:\x2060px\x22\x20type=\x22text\x22\x20name=\x22inputReplaceSkin\x22\x20id=\x22inputReplaceSkin\x22\x20value=\x2235\x22\x20maxlength=\x224\x22\x20onchange=\x22setIdReplaceSkin(this)\x22>', 'username', '0\x201px\x201px\x200\x20rgba(0,0,0,.5)', 'ltmolilci1iurq1i', 'index.game.popup.menu.skins.tab', '#mm-coins-box\x20.mm-coins-img', 'HS\x20TEXT', '#store-buy-coins_50000', 'symbol', 'error-view', 'cHJvamVjdGlvbk1hdHJpeA==', 'nombre', 'catch', '#chatInput', 'textDict', 'disposing\x20prev\x20texture:\x20', '<option\x20value=\x2211\x22>', 'OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t', 'aqnvgcpz05orkobh', 'trim', '.v4', '<span\x20id=\x22zw-settings-id\x22\x20class=\x22settings-label\x22>ID:\x20</span>', 'Japon', '&type=', 'clipboard', 'drawCircle', 'noSkin', 'El\x20jugador\x20', 'iSI:\x20', 'keyMove', '\x22\x20class=\x22toaster\x20toaster-coins\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-coins-img\x22\x20alt=\x22Wormate\x20Coin\x22\x20src=\x22/images/coin_320.png\x22\x20/>\x20\x20\x20\x20<div\x20class=\x22toaster-coins-val\x22>+', '<option\x20value=\x2212\x22>', 'clientX', 'ActiveX2', 'deleteDatabase', 'Mensaje\x20enviado\x20por\x20', 'interactive', '.servers-australia', 'aipC', '<option\x20value=\x226\x22>6</option>', 'init2\x20pSC:\x20', 'volume', '/pub/wuid/', '#store-go-coins-button', '200%\x20200%', 'Modernizr', 'index.game.popup.menu.delete.tab', 'Error\x20fetching\x20server\x20data:', 'Granbretana', 'replaceAll', '.option.toggle[data-option=\x27sectores\x27]\x20.box', 'N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+.\x20.+osYYyso+-.osyQSs6662NyW.63\x20yW:`+QQ+\x20-Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63\x20yW:+Ss:.-+Ss:`M-3.M`\x20.YyySYys32`QSs.2``-Hh-32sH-66\x20`..3\x20`..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3\x20oS/`Sso`3\x20ohy6oH.3..6\x20-Hh.\x20-+Qs/\x20N\x20/W+62`Wo:Ss32Sso.MMmd+.3syy`\x20.-`\x20:Y+3+Ss//Q+3\x20+H`32sHhsyHho6-Hh`:S+--+S+N2+W`\x20`+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6\x20Hh`So3`SsN3oHhs-sHhsoW/\x20`Sso:-:Q.hM-2ymmh.\x20/Yo`3\x20sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3\x20+Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3\x20oYy:Q/3\x20`Q.\x20-W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3\x20ohdh/`+So:3\x20.+S/`/oo:6.+s+`\x20`+yyo`3\x20+yQYs:\x20+oo..shy.\x20-+oSo/.\x20NN', '#settings-kufur-isim', 'isConsentGiven', 'rel', 'false', '.tab.material-button,\x20.options-list\x20>\x20div', 'd29ybWF0ZS1pb185NzB4MjUw', 'anchor', 'fr_FR', 'colorFondo', 'server', 'index.game.social.shareResult.caption', 'firefly', '&eyesId=', 'arc', 'sortableChildren', 'animationHeadshot', 'fondo4', 'dxb-a.wormate.io', 'Loading..', 'div', 'addClass', '#store-buy-coins_16000', 'fadeIn', 'ID\x20copiado:\x20', 'mouthId', 'Extension\x20\x27W\x27\x20or\x20\x27T\x27:', '3190872Afsmoz', 'documentElement', 'consented', '#markup-header', 'Socket\x20send\x20error:\x20', 'index.game.result.title', 'nonbuyableCause', 'por\x20defecto', '#0094D7', 'comiste\x20otro\x20potenciador', 'userAgent', '</span><span><img\x20src=\x22', 'touchmove', 'connected', 'isNumberValid', 'xXx5', 'portion', 'chatMessage', 'sao-a.wormate.io', '<span\x20id=\x22hotkeys-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22hotkeys-menu\x22>keyboard</span>', '1000', '{2}', 'I18N_LANG', 'https://i.imgur.com/IqQGK58.png', 'Point', 'setPrototypeOf', 'spawnInfinity', 'authResponse', 'msRequestFullscreen', 'espacio', 'getCurrentPosition', '.value', 'avatarImage', '#killFeed', 's,\x20', '\x20🌎)', 'Blue\x20Light', 'data-position', '/sdk.js', 'destroyed', 'containerHsRec2', 'sao-b.wormate.io', 'syd-a.wormate.io', '.option.toggle[data-option=\x27laserHS\x27]\x20.box', 'iman', 'Verdana,\x20sans-serif', '<span\x20id=\x22help-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22help-menu\x22>help_outline</span>', 'YOUR\x20COLOR\x20IN\x20MAP', 'render', 'movimiento', 'id_token', 'shift', 'top1Point', 'exitFullscreen', 'children', '#avatarPreview', 'playerUpdate', '#withdraw-consent-view', 'Virginia\x20-\x20EEUU', 'tap', 'sgp2', 'Enter', 'length', 'fondo0', 'rotation', '/start?gameMode=', 'sprite', 'mouseup', 'index.game.toaster.levelup', '#user-icon', '#noAuras-key', 'appendChild', 'antiadblocker', 'util.time.sec', 'atan', '#delete-account-view', 'shadowBlur', 'substring', '#popup-logout', 'div[category=\x27theme\x27]', '#avatarUrl', 'Dj\x20(boca)', 'https://swykz.theoxt.com/api/streming.php', 'AbilitySkinData', 'TOP', '?????\x20???????????', 'onDragMove', 'return\x20RegExp;', '.servers-eeuu', 'FLEXIBLE_TYPE', '.servers-mexico', '<div\x20class=\x22cursor-menu\x22></div>', '#mm-coins-buy\x20span', 'resource', 'mouthDict', 'unshift', '<option\x20value=\x220\x22>', 'u3_', 'reload', 'test', 'imgSrc', 'size', 'UmVjdGFuZ2xl', 'mousedown', 'HTTP\x20error!\x20Status:\x20', 'testSkinMod', '<option\x20value=\x226\x22>', 'index.game.result.place.i', 'avatarUrl', 'splice', 'changeBackground', 'JDHnkHtYwyXyVgG9', 'index.game.result.share', 'load', 'relativePath', 'Canada', '/images/bg-pattern-pow2-ARENA.png', 'draw', 'Estado\x20inicial\x20recibido:', '<span\x20id=\x22user-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22user-menu\x22>account_circle</span>', 'Error\x20enviando\x20mensaje:', 'removeChildren', 'tooltip', 'speed_zigzag', 'info', '<option\x20value=\x229\x22>', '/pub/leaders', 'teams', 'No\x20hay\x20jugadores\x20disponibles\x20para\x20actualizar\x20el\x20top\x201.', 'bindEvents', 'dotFormat', 'no-js(\x5cs|$)', '\x0a🔍\x20Probando\x20servidores\x20Wormate.io\x20(puerto\x20', '<span\x20class=\x22names_settings\x22\x20\x20id=\x22colorJuego\x22\x20>\x20', 'sin-i.wormate.io', '<div\x20class=\x22name\x22>', 'hitArea', '#main-menu-view', '.mm-merchant-cont', 'hardwareConcurrency', 'WormWorld', '.server-status', '<input\x20type=\x22checkbox\x22\x20id=\x22toggleTop8\x22\x20/>', 'closest', 'OA==', '.Worm_cerca', 'shadowColor', 'idReplaceSkin', 'Text', 'pageY', 'getElementsByTagName', 'scrollTo', '\x22\x20step=\x22', '<div\x20id=\x22help-menu\x22\x20class=\x22menu\x22>Ayuda\x20y\x20soporte</div>', 'Sky\x20Violet', 'lo:fb', 'zoom', '#hotkeys-section', 'style', 'addAttribute', 'origin', '#top10List', '/images/linelogo-xmas2022.png', '#sound-hs', 'power\x20up\x20glow', 'index.game.result.tryHit', 'SHOW\x20KILL\x20FEED', '\x20coincide\x20con\x20un\x20ID\x20almacenado\x20en\x20la\x20base\x20de\x20datos.', 'min', 'eyesId', '110px', 'status', '</button>', 'laserHSkey-key', 'matchMedia', 'update', '#delete-account-no', 'conteiner', 'hue', 'caches', 'SHOW\x20FPS', '#f97a1d', 'linear', 'open', 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png', 'data-con', 'msExitFullscreen', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22value\x22>', 'https://i.imgur.com/kGjR9yf.png', 'O3VuaWZvcm0gc2FtcGxlcjJEIA==', 'input', 'padEnd', 'Singapur', '#wear-buy-button', 'substr', '\x22\x20class=\x22toaster\x20toaster-consent-accepted\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-consent-accepted-logo\x22\x20src=\x22', 'ru_RU', '<input\x20id=\x22color_paletRGB\x22\x20type=\x22color\x22\x20value=\x22#000A11\x22>', 'u5_', 'isBuyer', '<div\x20style=\x22font-size:14px;\x20font-weight:bold;\x20text-align:center;\x20margin-bottom:8px;\x22>🏆\x20Top\x2010\x20🏆</div><hr\x20style=\x22border-color:#444;\x22>', 'https://asserts.wormworld.io/backgrounds/bkgnd10.png', '#chat-input', '__proto__', 'BORDE\x20GAME', '\x20https://wormate.io/\x20#wormate\x20#wormateio', 'giro-key', '#profile-username', 'comidax2', ':nth-child(', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22sound-button\x22\x20onclick=\x22window.open(\x27https://catbox.moe/\x27,\x20\x27_blank\x27)\x22>Go\x20to\x20Sound\x20Tutorial\x202</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', 'yyy', 'https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php', 'teamCode', '#inputReplaceSkin', 'wss://', 'showAnimationHeadshot', '#modalCloseBtn', 'action', 'brillo\x20de\x20la\x20comida', '#mm-player-exp-val', 'byHighScore', 'https://zwormextenstion.com/wormExtension/api/skins/skins.php', '<option\x20value=\x2210\x22>', 'Tim\x20Map', 'MAGNETIC_TYPE', '#buy-premium', '.options-list.ps\x20div[category=\x22cursor\x22]', '<span\x20class=\x22settings_span\x22\x20>', 'GAME', '4QIjrih', 'logout', 'O3ZlYzQgdl9jb2xvcl9taXg9', 'startsWith', '\x20</span>', 'Score', 'eyesUnknown', 'CHANGE\x20SKINS\x20TO\x20Z\x20WORM', 'TEAM_DEFAULT', 'skinVisible', 'focus', 'fill', 'SkinVisible(Para\x20publico)', '???', 'tok-b.wormate.io', 'PotenciadorAura', 'hil-a.wormate.io', '\x20ms', 'premium', '.options-list\x20>\x20div[category=\x22controls\x22]', 'O3VuaWZvcm0gdmVjMiA=', '⚠️\x20Advertencia:\x20No\x20se\x20encontró\x20el\x20elemento\x20\x27teamNickname\x27.', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-region\x22>', 'inline-block', '</span></div>', '#mm-coins-box', '\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Preloader\x20en\x20pantalla\x20completa\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.fixed-background\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.5s\x20ease-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Imagen\x20de\x20fondo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.background-image\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20url(\x27https://i.imgur.com/oXntzBc.jpeg\x27)\x20no-repeat\x20center\x20center/cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-position:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20blur(5px)\x20opacity(1.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Estilos\x20del\x20logo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20pulse\x204s\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2070px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Animación\x20de\x20pulso\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(2);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20transform:\x20scale(2.1);\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(2);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Barra\x20de\x20carga\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x2010s\x20linear;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20GIF\x20de\x20rotación\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.rotate-gif\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x20/*\x20Oculto\x20por\x20defecto\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Corazones\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.hearts\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one,\x20.two,\x20.three,\x20.four,\x20.five\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(-45deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:before,\x20.one:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.two:before,\x20.two:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.three:before,\x20.three:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.four:before,\x20.four:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.five:before,\x20.five:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:before,\x20.two:before,\x20.three:before,\x20.four:before,\x20.five:before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:after,\x20.two:after,\x20.three:after,\x20.four:after,\x20.five:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Animación\x20de\x20los\x20corazones\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20heart\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0)\x20rotate(-45deg)\x20scale(0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-150px)\x20rotate(-45deg)\x20scale(1.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one\x20{\x20animation:\x20heart\x201s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.two\x20{\x20animation:\x20heart\x202s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.three\x20{\x20animation:\x20heart\x201.5s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.four\x20{\x20animation:\x20heart\x202.3s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.five\x20{\x20animation:\x20heart\x201.7s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20</style>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22fixed-background\x22\x20id=\x22loading-screen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-image\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/jXzoG5D.png\x22\x20alt=\x22server\x20logo\x22\x20class=\x22logo\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hearts\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22one\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22two\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22three\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22four\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22five\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22\x20id=\x22progress-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20GIF\x20de\x20rotación\x20para\x20móviles\x20en\x20vertical\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/CVpwetK.gif\x22\x20alt=\x22Rotar\x20el\x20dispositivo\x22\x20class=\x22rotate-gif\x22\x20id=\x22rotate-gif\x22>\x0a\x20\x20\x20\x20</div>\x0a', 'imgTest_desactived', 'index.game.popup.menu.coins.tab', '\x22\x20alt=\x22User\x20Icon\x22\x20style=\x22width:\x2020px;\x20height:\x2020px;\x20margin-right:\x205px;\x20border-radius:\x2050%;\x22>', 'play', 'fondo\x20Solido', 'val', 'pointermove', 'onEnd', '<br/>', 'playerX', '&skinId=', 'TIMER\x20SPEED\x20AND\x20ZIGZAG', '#FFD500', 'angle', 'stylesheet', 'https://asserts.wormworld.io/backgrounds/bg_sky_3.png', 'teamNickname', '/deleteAccount', 'fade\x20OUT\x20', '<option\x20value=\x222\x22>2</option>', '000', 'https://fonts.googleapis.com/icon?family=Material+Icons', '</li>', 'right', 'Honolulu\x20-\x20Hawái,\x20EEUU', 'POST', 'constructor', 'x_emoji', '#leaders-button-level', 'insertAdjacentHTML', '#zwplayagain', 'background-key', 'es_ES', 'minimapBorderColor', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22server-row\x22\x20data-wss=\x22', 'secondHref', 'StatusColor', 'download\x20sounds', '🔄\x20Testing\x20...', 'hatId', '#settings-sfx-enabled-switch', 'highScore', 'https://asserts.wormworld.io/backgrounds/bkgnd9.png', '<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-fb\x22\x20target=\x22_blank\x22\x20href=\x22https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=', '<div\x20id=\x22mm-zw-settings\x22\x20style=\x22\x22>Settings</div>', '100%', 'absolute', 'index.game.popup.menu.store.tab', '#settings-laserHS-switch', 'pointerId', '<strong>🏆\x20Best\x20server:\x20', '.cur', 'setInt8', 'parent', 'Cell:', '#wear-view-next', 'click', 'Sky\x20Blue', 'musicEnabled', '_complete', 'function', '12px', 'restart', 'trace', '#popup-login-gg', '#unl6wj4czdl84o9b', 'O3VuaWZvcm0gbWF0MyA=', 'Todo\x20listo', '300', 'map', 'matches', 'validInput', 'currentTime', 'Texture', 'isPowerOfTwo', 'Config', 'readyState', 'selectSala', 'writeText', 'An\x20error\x20occurred\x20while\x20loading\x20clients', 'espacio\x203', 'sound\x20link\x2010heads', '#settings-sectores-switch', '#mm-zw-settings', '\x20-\x20Ping:\x20', '<span\x20class=\x22tooltip\x22\x20id=\x22tooltipTop8\x22\x20style=\x22display:\x20none;\x22>If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20the\x20top\x208\x20players.</span>', '=;expires=', 'signOut', '.servers-canada', 'KILL\x20TEXT', 'Socket\x20opened', 'gsi:c', 'SW50', 'has', '/buyProperty?id=', 'killTextColorGroup', 'Q29udGFpbmVy', 'keypress', '??????\x20???????????', 'dataCon', 'ActiveZlupa', '..\x201\x20..', 'ZOOM\x20SPEED', 'touchend', 'label', 'aradian', 'onOpen', '#settings-music-enabled-switch', '/wormy', 'then', 'accessToken', '#mm-settings', 'Francia', '⚠️\x20Textura\x20inválida\x20o\x20sin\x20baseTexture.', 'url', 'X_x5', '#mm-coins-val', 'sonido\x20link\x20cabeza', '#final-caption', 'https://zwormextenstion.com/wormExtension/api/serversTimMap.php?v=', 'console', 'VISIBLE\x20SPEED\x20AND\x20ZIGZAG', 'killTextColor', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-notAbilityAll-switch\x22>', 'dA:\x20OK', '#idcopiar', '#FFFF00', 'index.game.main.menu.unlockSkins.share', 'text/javascript', '#preview_teamColor', 'destroy', 'https://asserts.wormworld.io/backgrounds/bg_sky_1.png', 'Error:\x20ctx.pointsContainer\x20no\x20est�\x20definido.', 'resize', '🛠️\x20Resolución\x20ajustada\x20(', 'opciones', 'Container', 'image', '<option\x20value=\x2214\x22>', '<span\x20class=\x22settings-label\x22>', 'success', '<a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', 'client_DateExpired', 'push', 'glassesId', '.options-list\x20>\x20div[category=\x22game\x22]', '<div>', 'settings', 'type', '#store-locked-bar-text', 'Premium\x20Feature', '#teamColor', 'portionUnknown', 'mipmap', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22settings-menu\x22\x20style=\x22display:\x20flex;\x20opacity:\x200;\x20z-index:\x202;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22navigation\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x20active\x22\x20category=\x22profile\x22\x20\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>person</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Profile</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22game\x22\x20\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>games</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Game</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22theme\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>palette</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Theme</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20id=\x22button-inputs\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#hotkeysModal\x22\x20category=\x22controls\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>keyboard</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Controls</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22cursor\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>mouse</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Cursor</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22sound\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>volume_up</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Sound</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🏆\x20Nueva\x20pestaña:\x20Equipos\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22teams\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>group</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Teams</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🎨\x20Nueva\x20pestaña:\x20Skins\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22skins\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>brush</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Skins</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🎨\x20Nueva\x20pestaña:\x20Stremers\x20\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22streamers\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>live_tv</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Live</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22options-list\x20ps\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22game\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>SELECT\x20BACKGROUND</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22prevBackground\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeBackground(-1)\x22>❮</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22backgroundPreview\x22\x20class=\x22background-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22nextBackground\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeBackground(1)\x22>❯</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>SELECT\x20FONT\x20IN\x20GAME</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22prevFont\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeFont(-1)\x22>❮</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22fontPreview\x22\x20class=\x22font-preview\x22>AaBbCc</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22nextFont\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeFont(1)\x22>❯</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22theme\x22\x20class=\x22\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22controls\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-container\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22profile\x22\x20class=\x22active\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Imagen\x20de\x20perfil\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-picture\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/gUysDha.png\x22\x20id=\x22avatarUrl\x22\x20alt=\x22Profile\x20Picture\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Datos\x20del\x20usuario\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>User\x20Profile</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--p><strong>Nombre:</strong>\x20<span\x20id=\x22username\x22>Usuario</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Email:</strong>\x20<span\x20id=\x22useremail\x22>usuario@email.com</span></p-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Contenedor\x20del\x20ID\x20con\x20botón\x20para\x20copiar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-id-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22idperfil\x22>ID:\x20<span\x20id=\x22userid\x22></span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22idcopiar\x22\x20class=\x22copy-button\x22>Copy\x20ID</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22resetScript\x22\x20class=\x22reset-button\x22>Change\x20Version</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22cursor\x22\x20class=\x22\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22sound\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Contenedor\x20de\x20enlaces\x20con\x20botones\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-inputs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', '9637550ysGwOG', '<div\x20id=\x22hotkeys-menu\x22\x20class=\x22menu\x22>Configuración\x20de\x20teclas\x20rápidas</div>', 'adblock', '#settings-menu', '.servers-peru', 'Premium', '#delete-account-yes', '#popup-delete-account', 'width', 'resetScript', 'beginFill', '#profile-stat-headshots', 'MOUTH', 'create', 'MINIMAP\x20BORDER', 'laser\x20de\x20cabeza', 'O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo', 'Valor\x20no\x20v�lido,\x20se\x20utilizar�\x20una\x20imagen\x20por\x20defecto.', 'bestSurvivalTimeSec', 'iterator', 'El\x20ID\x20', '_start', 'BACKGROUND\x20SOLID', '<span\x20style=\x27color:\x20#98928a;\x27\x20class=\x27settings_span\x27>EXP:\x20', 'sin', 'VISIBLE\x20ALL\x20POWER\x20UPS', 'data', 'ZOOM_TYPE', 'consent_state_2', 'index.game.popup.menu.profile.tab', 'change', 'X_xxlupa', 'coins_3250', 'prime', 'index.game.antiadblocker.continue', 'hex', 'PortionSkinData', '<div\x20id=\x22final-replay\x22>Replay</div>', '<span\x20class=\x22tooltip\x22\x20id=\x22tooltipKillFeed\x22\x20style=\x22display:\x20none;\x22>If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20kills\x20in\x20real\x20time.</span>', 'ComidaShadow', 'rgba(255,\x20255,\x20255,\x200.1)', 'outerHeight', '??????\x202', 'zw-background', '?????\x20???', 'blendMode', 'category', 'index.game.result.your', '.cursor-box', 'error', 'hsTextColor', 'zIndex', ':checked', 'skinArrayDict', 'black', 'duration', 'colorDict', '</span>', 'Users', 'visibleSkin', 'setAttribute', '#final-share-fb', 'teamsContainer', 'id_user', 'body', 'inputReplaceSkin', '..\x205\x20..', 'https://i.imgur.com/jXzoG5D.png', '\x27Comic\x20Sans\x20MS\x27,\x20cursive', 'Arena\x201', '#giro-key', 'WLp', 'charCodeAt', 'bold', 'zoomSpeed', 'Equipos\x20/\x20Teams', '</span><span>', '#popup-menu-coins-box', 'attach', '\x20is\x20not\x20a\x20constructor\x20or\x20null', 'comidax10', '<div\x20class=\x22color-preview\x22\x20id=\x22preview_', '/es'];
    _0x248c = function() {
        return _0x5b6225;
    }
    ;
    return _0x248c();
}
timeFontColors = [_0x18e6ab(0x553), '#FFC75A', '#00B2ED', _0x18e6ab(0x374), _0x18e6ab(0x44e), '#CCCF81', _0x18e6ab(0xcb)],
timeFontColors2 = ['#51a913', _0x18e6ab(0x4fb), _0x18e6ab(0x257), _0x18e6ab(0x374), '#0094D7', '#CCCF81', _0x18e6ab(0xcb)];
for (let index = 0x0; index < timeFontColors[_0x18e6ab(0x484)]; index++) {
    let color = timeFontColors[index];
    ctx[_0x18e6ab(0x6b8)][_0x18e6ab(0x66a) + index] = new PIXI['TextStyle']({
        'align': _0x18e6ab(0x291),
        'fill': color,
        'fontSize': 0x19,
        'lineJoin': _0x18e6ab(0x1ae),
        'whiteSpace': 'normal',
        'wordWrap': !![],
        'dropShadow': !![],
        'dropShadowBlur': 0x6,
        'fontWeight': _0x18e6ab(0x62b)
    });
}
ctx['ptc'] = {};
const portionTimes = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
for (let i = 0x0; i < portionTimes[_0x18e6ab(0x484)]; i++) {
    let name = 'clock_ad' + i;
    ctx[_0x18e6ab(0x1f0)][name] = new PIXI[(_0x18e6ab(0x4da))](portionTimes[i],ctx[_0x18e6ab(0x6b8)]['tfc' + i]),
    ctx[_0x18e6ab(0x1f0)][name]['y'] = 0x3d;
}
ctx[_0x18e6ab(0x547)] = PIXI[_0x18e6ab(0x590)]['fromImage'](_0x18e6ab(0x364)),
ctx[_0x18e6ab(0x733)] = new PIXI[(_0x18e6ab(0x3e5))](ctx[_0x18e6ab(0x547)]),
ctx[_0x18e6ab(0x733)][_0x18e6ab(0x432)][_0x18e6ab(0x172)](0.5),
ctx[_0x18e6ab(0x733)]['x'] = window[_0x18e6ab(0x706)] / 0x2,
ctx['containerImgTest']['y'] = window['innerHeight'] / 0x2,
ctx[_0x18e6ab(0x733)][_0x18e6ab(0x66b)] = 0.3,
ctx[_0x18e6ab(0x6bf)] = new PIXI[(_0x18e6ab(0x5cf))]();
const createCircle = function() {
    var _0xd9c301 = _0x18e6ab;
    const _0xac8187 = 0xff0000;
    if (!window[_0xd9c301(0x38b)] || typeof window[_0xd9c301(0x38b)]['playerX'] === 'undefined' || typeof window['coords']['playerY'] === _0xd9c301(0x3a3)) {
        console[_0xd9c301(0x613)]('Error:\x20window.coords\x20no\x20est�\x20definido\x20correctamente\x20o\x20no\x20contiene\x20playerX\x20y\x20playerY.');
        return;
    }
    let _0x46ad0c = _0xd9c301(0x2e7);
    !ctx[_0x46ad0c] && (ctx[_0x46ad0c] = new PIXI[(_0xd9c301(0x652))](),
    ctx[_0x46ad0c][_0xd9c301(0x615)] = 0x2,
    ctx[_0x46ad0c][_0xd9c301(0x66b)] = 0.9,
    ctx[_0x46ad0c]['beginFill'](_0xac8187),
    ctx[_0x46ad0c][_0xd9c301(0x411)](0x0, 0x0, 0.06 * 0x28),
    ctx[_0x46ad0c][_0xd9c301(0x308)](),
    ctx[_0x46ad0c][_0xd9c301(0x12d)](0x1, _0xd9c301(0x618)),
    ctx[_0x46ad0c]['drawCircle'](0x0, 0x0, 0.06 * 0x28),
    ctx[_0x46ad0c][_0xd9c301(0x308)]()),
    ctx[_0x46ad0c]['x'] = window[_0xd9c301(0x38b)][_0xd9c301(0x550)],
    ctx[_0x46ad0c]['y'] = window[_0xd9c301(0x38b)][_0xd9c301(0xcf)],
    ctx['pointsContainer'] ? ctx[_0xd9c301(0x6bf)][_0xd9c301(0x6f8)](ctx[_0x46ad0c]) : console[_0xd9c301(0x613)](_0xd9c301(0x5cb));
};
ctx[_0x18e6ab(0x620)] = new PIXI[(_0x18e6ab(0x5cf))]();
var createServerMessage = function(_0x13c2bc, _0x284c6b) {
    var _0x3d41ed = _0x18e6ab;
    if (_0x284c6b[_0x3d41ed(0x40b)]() === '')
        return;
    toastr[_0x3d41ed(0x2e4)] = {
        'closeButton': ![],
        'debug': ![],
        'newestOnTop': !![],
        'progressBar': !![],
        'positionClass': _0x3d41ed(0x703),
        'preventDuplicates': !![],
        'onclick': null,
        'showDuration': _0x3d41ed(0x58b),
        'hideDuration': '1000',
        'timeOut': '5000',
        'extendedTimeOut': _0x3d41ed(0x45a),
        'showEasing': _0x3d41ed(0xea),
        'hideEasing': _0x3d41ed(0x4fc),
        'showMethod': _0x3d41ed(0x442),
        'hideMethod': _0x3d41ed(0x150),
        'toastClass': _0x3d41ed(0x653)
    },
    toastr[_0x3d41ed(0x5d3)](_0x284c6b, _0x13c2bc, {
        'iconClass': _0x3d41ed(0x38a)
    });
}
  , createTeamMessage = function(_0x2fa280, _0x5b3380, _0x1a089e) {
    var _0x12b942 = _0x18e6ab;
    if (_0x1a089e[_0x12b942(0x40b)]() === '')
        return;
    gameState[_0x12b942(0x6b7)][_0x12b942(0xca)]( (_0x388f24, _0x1d8498) => {
        var _0x570440 = _0x12b942;
        if (_0x388f24[_0x570440(0x51b)] === _0x2fa280 && _0x388f24[_0x570440(0x251)] !== _0x5b3380) {
            let _0x3d0bd7 = _0x388f24[_0x570440(0x251)]['length'] > 0xc ? _0x388f24['nickname'][_0x570440(0x645)](0x0, 0xc) : _0x388f24[_0x570440(0x251)];
            toastr[_0x570440(0x2e4)] = {
                'closeButton': ![],
                'debug': ![],
                'newestOnTop': !![],
                'progressBar': !![],
                'positionClass': _0x570440(0x703),
                'preventDuplicates': !![],
                'onclick': null,
                'showDuration': _0x570440(0x58b),
                'hideDuration': _0x570440(0x45a),
                'timeOut': _0x570440(0x397),
                'extendedTimeOut': _0x570440(0x45a),
                'showEasing': _0x570440(0xea),
                'hideEasing': _0x570440(0x4fc),
                'showMethod': _0x570440(0x442),
                'hideMethod': _0x570440(0x150)
            },
            toastr['success']('' + _0x1a089e, '' + _0x5b3380, {
                'iconClass': _0x570440(0x38a)
            }),
            console[_0x570440(0x10f)](_0x570440(0x41b) + _0x5b3380 + _0x570440(0x146) + _0x3d0bd7 + '\x20(' + _0x1d8498 + _0x570440(0x16b) + _0x2fa280);
        }
    }
    );
}
  , createTeamUbication = function(_0x1e1f2d, _0x1ba19f) {
    var _0x38dd00 = _0x18e6ab;
    updateTeamTable(gameState, _0x1e1f2d),
    gameState['players'][_0x38dd00(0xca)]( (_0x2157f1, _0x318edd) => {
        var _0x548eeb = _0x38dd00;
        if (_0x2157f1[_0x548eeb(0x51b)] === _0x1e1f2d) {
            let _0x21d2ba = _0x2157f1['teamColor'] || _0x1ba19f
              , _0x420d66 = _0x2157f1[_0x548eeb(0x251)][_0x548eeb(0x68e)](/\u3164/g, '')[_0x548eeb(0x68e)](/ZW_\d+$/, '')[_0x548eeb(0x40b)]();
            if (!ctx[_0x318edd]) {
                ctx[_0x318edd] = new PIXI[(_0x548eeb(0x652))](),
                ctx[_0x318edd][_0x548eeb(0x615)] = 0x2,
                ctx[_0x318edd][_0x548eeb(0x66b)] = 0.9,
                ctx[_0x548eeb(0x620)][_0x548eeb(0x6f8)](ctx[_0x318edd]);
                let _0x3d323f = new PIXI[(_0x548eeb(0x4da))](_0x420d66,{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xe,
                    'fill': _0x21d2ba,
                    'stroke': 0x0,
                    'strokeThickness': 0x2
                });
                _0x3d323f[_0x548eeb(0x432)][_0x548eeb(0x172)](0.5),
                _0x3d323f[_0x548eeb(0x654)] = ![],
                _0x3d323f['y'] = -0xf,
                ctx[_0x318edd]['addChild'](_0x3d323f),
                ctx[_0x318edd][_0x548eeb(0x4ce)] = new PIXI['Circle'](0x0,0x0,0.12 * 0x14),
                ctx[_0x318edd]['interactive'] = !![],
                ctx[_0x318edd]['buttonMode'] = !![],
                ctx[_0x318edd]['on'](_0x548eeb(0x187), () => {
                    var _0x1ebfca = _0x548eeb;
                    _0x3d323f[_0x1ebfca(0x654)] = !![];
                }
                ),
                ctx[_0x318edd]['on'](_0x548eeb(0x155), () => {
                    var _0x3e018a = _0x548eeb;
                    _0x3d323f[_0x3e018a(0x654)] = ![];
                }
                ),
                ctx[_0x318edd]['on'](_0x548eeb(0x489), () => {
                    var _0x3631e0 = _0x548eeb;
                    _0x3d323f[_0x3631e0(0x654)] = !_0x3d323f['visible'];
                }
                ),
                ctx[_0x318edd]['on']('touchend', () => {
                    var _0x16131f = _0x548eeb;
                    _0x3d323f[_0x16131f(0x654)] = !_0x3d323f[_0x16131f(0x654)];
                }
                ),
                ctx[_0x318edd][_0x548eeb(0x6ec)] = _0x3d323f;
            }
            ctx[_0x318edd]['clear'](),
            ctx[_0x318edd][_0x548eeb(0x5ec)](_0x21d2ba),
            ctx[_0x318edd][_0x548eeb(0x411)](0x0, 0x0, 0.12 * 0x14),
            ctx[_0x318edd][_0x548eeb(0x308)](),
            ctx[_0x318edd]['lineStyle'](0x1, 0x0),
            ctx[_0x318edd][_0x548eeb(0x411)](0x0, 0x0, 0.12 * 0x14),
            ctx[_0x318edd][_0x548eeb(0x308)](),
            ctx[_0x318edd]['x'] = _0x2157f1[_0x548eeb(0x23e)]['x'],
            ctx[_0x318edd]['y'] = _0x2157f1[_0x548eeb(0x23e)]['y'],
            ctx[_0x318edd][_0x548eeb(0x6ec)]['y'] = -0xf,
            ctx[_0x318edd][_0x548eeb(0x6ec)][_0x548eeb(0x2db)] !== _0x420d66 && (ctx[_0x318edd]['nameText'][_0x548eeb(0x2db)] = _0x420d66),
            ctx[_0x318edd][_0x548eeb(0x6ec)]['style'][_0x548eeb(0x537)] !== _0x21d2ba && (ctx[_0x318edd]['nameText'][_0x548eeb(0x4e4)][_0x548eeb(0x537)] = _0x21d2ba);
        }
    }
    );
}
  , clearTeamUbication = function() {
    var _0x4d68cd = _0x18e6ab;
    ctx[_0x4d68cd(0x620)] ? Object[_0x4d68cd(0x667)](ctx)[_0x4d68cd(0xca)](_0x3fad8a => {
        var _0x5acdfe = _0x4d68cd;
        ctx[_0x3fad8a]instanceof PIXI['Graphics'] && ctx[_0x3fad8a][_0x5acdfe(0x57c)] === ctx['teamsContainer'] && (ctx[_0x5acdfe(0x620)][_0x5acdfe(0x71c)](ctx[_0x3fad8a]),
        ctx[_0x3fad8a]['destroy'](!![]),
        delete ctx[_0x3fad8a]),
        ctx[_0x3fad8a + _0x5acdfe(0x6aa)] && ctx[_0x3fad8a + _0x5acdfe(0x6aa)][_0x5acdfe(0x57c)] === ctx['teamsContainer'] && (ctx[_0x5acdfe(0x620)][_0x5acdfe(0x71c)](ctx[_0x3fad8a + _0x5acdfe(0x6aa)]),
        ctx[_0x3fad8a + '_text']['destroy'](!![]),
        delete ctx[_0x3fad8a + _0x5acdfe(0x6aa)]);
    }
    ) : console['error'](_0x4d68cd(0x144));
};
ctx['titleRec2'] = new PIXI['Text'](_0x18e6ab(0x722),ctx[_0x18e6ab(0x6b8)][_0x18e6ab(0x1fa)]),
ctx[_0x18e6ab(0x183)]['y'] = -0x5,
ctx[_0x18e6ab(0x46e)] = new PIXI['Container'](),
ctx[_0x18e6ab(0x46e)]['x'] = 0x1e,
ctx[_0x18e6ab(0x46e)]['y'] = 0xaa;
let playersTexts = [];
for (let index = 0x0; index < 0x5; index++) {
    let wallBounce = index + 0x1
      , deltaCoordinate = new PIXI[(_0x18e6ab(0x4da))](wallBounce + '.',ctx[_0x18e6ab(0x6b8)][_0x18e6ab(0x1fa)]);
    deltaCoordinate['x'] = 0x0,
    deltaCoordinate['y'] = 0xd * wallBounce,
    ctx[_0x18e6ab(0x46e)][_0x18e6ab(0x6f8)](deltaCoordinate);
    let playerNameText = new PIXI[(_0x18e6ab(0x4da))]('--',{
        'fill': '#FFFFFF',
        'fontSize': 0xc
    });
    playerNameText['x'] = 0xf,
    playerNameText['y'] = 0xd * wallBounce,
    ctx[_0x18e6ab(0x46e)][_0x18e6ab(0x6f8)](playerNameText),
    playersTexts[_0x18e6ab(0x5d6)](playerNameText);
}
ctx[_0x18e6ab(0x46e)]['addChild'](ctx[_0x18e6ab(0x183)]);
function updatePlayerTable(_0x4b14d8) {
    var _0x1c7765 = _0x18e6ab;
    const _0x49f052 = _0x4b14d8['players']
      , _0x2a89cf = Array[_0x1c7765(0x34f)](_0x49f052[_0x1c7765(0x6f3)]())
      , _0x12e540 = _0x2a89cf[_0x1c7765(0x664)](_0x2aa9ea => _0x2aa9ea[_0x1c7765(0x51b)] === zwormData[_0x1c7765(0x51b)]);
    playersTexts[_0x1c7765(0xca)]( (_0xfe8d84, _0x57824e) => {
        var _0x789278 = _0x1c7765;
        if (_0x12e540[_0x57824e]) {
            let _0x3e0391 = _0x12e540[_0x57824e];
            _0xfe8d84[_0x789278(0x2db)] = _0x3e0391[_0x789278(0x251)][_0x789278(0x493)](0x0, 0x14),
            _0xfe8d84[_0x789278(0x4e4)][_0x789278(0x537)] = _0x3e0391[_0x789278(0x276)];
        } else
            _0xfe8d84[_0x789278(0x2db)] = '--',
            _0xfe8d84[_0x789278(0x4e4)]['fill'] = _0x789278(0x3b5);
    }
    );
}
zw_TopFriends_list = new PIXI[(_0x18e6ab(0x5cf))](),
zw_TopFriends_list['x'] = 0x50,
zw_TopFriends_list['y'] = 0xb9;
const titleTextfriendlist = new PIXI[(_0x18e6ab(0x4da))](_0x18e6ab(0x189),{
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffffff,
    'fontWeight': 'bold'
});
titleTextfriendlist['x'] = 0xa,
titleTextfriendlist['y'] = -0x5,
zw_TopFriends_list[_0x18e6ab(0x6f8)](titleTextfriendlist);
const dividerfriendlist = new PIXI[(_0x18e6ab(0x652))]();
dividerfriendlist['lineStyle'](0x2, 0xffffff, 0x1),
dividerfriendlist['moveTo'](-0xf, 0xf),
dividerfriendlist[_0x18e6ab(0x1a8)](0x50, 0xf),
dividerfriendlist['x'] = 0x5,
zw_TopFriends_list[_0x18e6ab(0x6f8)](dividerfriendlist);
function updateTeamTable(_0x3a5229, _0x3fceb9) {
    var _0x1eafd3 = _0x18e6ab;
    for (let _0x109e72 = zw_TopFriends_list[_0x1eafd3(0x47c)][_0x1eafd3(0x484)] - 0x1; _0x109e72 >= 0x0; _0x109e72--) {
        let _0x2059cf = zw_TopFriends_list[_0x1eafd3(0x47c)][_0x109e72];
        _0x2059cf !== titleTextfriendlist && _0x2059cf !== dividerfriendlist && zw_TopFriends_list[_0x1eafd3(0x71c)](_0x2059cf);
    }
    let _0x205483 = 0x0;
    const _0xa9487b = 0xa;
    _0x3a5229['players'][_0x1eafd3(0xca)]( (_0x1d6957, _0x15c7e5) => {
        var _0x417973 = _0x1eafd3;
        if (_0x1d6957[_0x417973(0x51b)] === _0x3fceb9 && _0x1d6957['wssCode'] === zwormData[_0x417973(0x63e)]) {
            let _0x37350b = cleanNickname(_0x1d6957[_0x417973(0x251)])
              , _0x287270 = /[\u0600-\u06FF]/[_0x417973(0x4a9)](_0x37350b);
            const _0x3d18ea = new PIXI['Text'](_0x205483 + 0x1 + '.\x20' + _0x37350b,{
                'fontFamily': fonts[currentFontIndex],
                'fontSize': 0xc,
                'fill': _0x1d6957['teamColor'] || 0xffffff,
                'stroke': 0x0,
                'strokeThickness': 0x2,
                'align': _0x287270 ? _0x417973(0x55e) : _0x417973(0x1a3)
            });
            _0x3d18ea['x'] = -0x32,
            _0x3d18ea['y'] = 0x14 + _0x205483 * 0xf,
            zw_TopFriends_list['addChild'](_0x3d18ea),
            _0x205483++;
            if (_0x205483 >= _0xa9487b)
                return;
        }
    }
    );
}
zw_TopHS_RecordHs = new PIXI[(_0x18e6ab(0x5cf))](),
zw_TopHS_RecordHs['x'] = -0x37,
zw_TopHS_RecordHs['y'] = 0x73;
const titleText = new PIXI[(_0x18e6ab(0x4da))](_0x18e6ab(0x3aa),{
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffd700,
    'fontWeight': _0x18e6ab(0x62b)
});
titleText['x'] = 0xa,
titleText['y'] = -0x5,
zw_TopHS_RecordHs['addChild'](titleText);
const divider = new PIXI['Graphics']();
divider[_0x18e6ab(0x12d)](0x2, 0xffffff, 0x1),
divider[_0x18e6ab(0x398)](0x0, 0xf),
divider[_0x18e6ab(0x1a8)](0x50, 0xf),
divider['x'] = 0x5,
zw_TopHS_RecordHs['addChild'](divider),
zw_Top3HS_RecordHs = new PIXI[(_0x18e6ab(0x5cf))](),
zw_Top3HS_RecordHs['y'] = 0x19;
const titleText3hs = new PIXI[(_0x18e6ab(0x4da))]('Top\x203\x20HS\x20(👑)',{
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffd700,
    'fontWeight': _0x18e6ab(0x62b)
});
titleText3hs['x'] = 0xa,
titleText3hs['y'] = -0x5,
zw_Top3HS_RecordHs['addChild'](titleText3hs);
const divider3hs = new PIXI[(_0x18e6ab(0x652))]();
divider3hs[_0x18e6ab(0x12d)](0x2, 0xffffff, 0x1),
divider3hs[_0x18e6ab(0x398)](0x0, 0xf),
divider3hs[_0x18e6ab(0x1a8)](0x50, 0xf),
divider3hs['x'] = 0x5,
zw_Top3HS_RecordHs[_0x18e6ab(0x6f8)](divider3hs);
var playerTexts = [];
const cleanNickname = _0x174d07 => {
    var _0xef3d58 = _0x18e6ab;
    return _0x174d07[_0xef3d58(0x68e)](/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '')[_0xef3d58(0x40b)]();
}
  , updateTop8Hs = function() {
    var _0x5b0bba = _0x18e6ab;
    const _0x1aad69 = Array[_0x5b0bba(0x34f)](gameState['players'][_0x5b0bba(0x6f3)]())
      , _0x3008cc = _0x1aad69[_0x5b0bba(0x664)](_0x28b761 => _0x28b761['hskill']['hs'] > 0x0 && _0x28b761['nickname'][_0x5b0bba(0x40b)]() !== '');
    let _0x217ee5 = _0x3008cc['some'](_0x4461bd => _0x4461bd[_0x5b0bba(0x251)] === zwormData[_0x5b0bba(0x251)]);
    !_0x217ee5 && zwormData['hs'] > 0x0 && _0x3008cc[_0x5b0bba(0x5d6)]({
        'nickname': zwormData[_0x5b0bba(0x251)],
        'hskill': {
            'hs': zwormData['hs']
        },
        'teamColor': zwormData[_0x5b0bba(0x276)]
    });
    if (_0x3008cc[_0x5b0bba(0x484)] === 0x0)
        return;
    _0x3008cc[_0x5b0bba(0x6e6)]( (_0x534d01, _0x54aaca) => _0x54aaca[_0x5b0bba(0x331)]['hs'] - _0x534d01[_0x5b0bba(0x331)]['hs']);
    for (let _0x455ddc = zw_TopHS_RecordHs[_0x5b0bba(0x47c)]['length'] - 0x1; _0x455ddc >= 0x0; _0x455ddc--) {
        let _0x5c3032 = zw_TopHS_RecordHs[_0x5b0bba(0x47c)][_0x455ddc];
        _0x5c3032 !== titleText && _0x5c3032 !== divider && zw_TopHS_RecordHs[_0x5b0bba(0x71c)](_0x5c3032);
    }
    playerTexts['length'] = 0x0;
    const _0x1940c5 = 0xc8;
    for (let _0x41ed7c = 0x0; _0x41ed7c < Math['min'](_0x3008cc['length'], 0x6); _0x41ed7c++) {
        let _0x41b1b3 = _0x3008cc[_0x41ed7c]
          , _0x1ddebf = cleanNickname(_0x41b1b3[_0x5b0bba(0x251)])
          , _0x55d2d8 = /[\u0600-\u06FF]/[_0x5b0bba(0x4a9)](_0x1ddebf)
          , _0x4d13e7 = _0x1ddebf[_0x5b0bba(0x505)](0xf, '\x20')
          , _0x4f3362 = ('☠️\x20' + _0x41b1b3[_0x5b0bba(0x331)]['hs'])['padStart'](0x6, '\x20')
          , _0x5b893d = new PIXI[(_0x5b0bba(0x4da))](_0x41ed7c + 0x1 + _0x5b0bba(0x11d) + _0x4d13e7 + _0x5b0bba(0xf3) + _0x4f3362 + '\x20☠️',{
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0xa,
            'fill': _0x41b1b3[_0x5b0bba(0x276)] || 0xffffff,
            'stroke': 0x0,
            'strokeThickness': 0x2,
            'align': _0x55d2d8 ? _0x5b0bba(0x55e) : _0x5b0bba(0x1a3),
            'wordWrap': !![],
            'wordWrapWidth': _0x1940c5,
            'breakWords': !![]
        });
        _0x5b893d['x'] = 0xa,
        _0x5b893d['y'] = 0x14 + _0x41ed7c * 0xf,
        playerTexts[_0x5b0bba(0x5d6)](_0x5b893d),
        zw_TopHS_RecordHs[_0x5b0bba(0x6f8)](_0x5b893d);
    }
    zw_Top3HS_RecordHs['y'] = 0x1e + playerTexts[_0x5b0bba(0x484)] * 0xf;
}
  , colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff]
  , textStyle = {
    'align': _0x18e6ab(0x291),
    'fontSize': 0xc,
    'lineJoin': _0x18e6ab(0x1ae),
    'strokeThickness': 0x1,
    'whiteSpace': _0x18e6ab(0x31e),
    'wordWrap': !![]
};
ctx[_0x18e6ab(0x2f8)] = new PIXI[(_0x18e6ab(0x4da))](_0x18e6ab(0x386),ctx[_0x18e6ab(0x6b8)][_0x18e6ab(0x1fa)]),
ctx[_0x18e6ab(0x2f8)]['y'] = -0x5,
ctx['titleRec3']['x'] = 0xa,
ctx[_0x18e6ab(0x6ae)] = new PIXI[(_0x18e6ab(0x5cf))](),
ctx[_0x18e6ab(0x6ae)]['x'] = -0x37,
ctx['containerHsRec3']['y'] = 0x118;
for (let index = 0x0; index < 0x8; index++) {
    let wallBounce = index + 0x1
      , deltaCoordinate = new PIXI['Text']('\x20',ctx[_0x18e6ab(0x6b8)][_0x18e6ab(0x1fa)]);
    deltaCoordinate['x'] = index >= 0x9 ? -0x5 : 0x0,
    deltaCoordinate['y'] = 0xd * wallBounce,
    ctx[_0x18e6ab(0x6ae)][_0x18e6ab(0x6f8)](deltaCoordinate);
    let playerNameText = new PIXI[(_0x18e6ab(0x4da))]('--',{
        'fill': _0x18e6ab(0x30b),
        ...textStyle
    });
    playerNameText['x'] = index >= 0x9 ? -0x5 : 0x0,
    playerNameText['y'] = 0xd * wallBounce,
    ctx[_0x18e6ab(0x6ae)][_0x18e6ab(0x6f8)](playerNameText);
    let playerName2Text = new PIXI[(_0x18e6ab(0x4da))]('?',{
        'fill': colors[index % colors['length']],
        ...textStyle
    });
    playerName2Text['x'] = 0x46,
    playerName2Text['y'] = 0xd * wallBounce;
    let playerHsText = new PIXI['Text']('--',{
        'fill': _0x18e6ab(0x225),
        ...textStyle
    });
    playerHsText['x'] = 0x7d,
    playerHsText['y'] = 0xd * wallBounce,
    ctx[_0x18e6ab(0x6ae)][_0x18e6ab(0x6f8)](playerHsText);
}
ctx[_0x18e6ab(0x6ae)][_0x18e6ab(0x6f8)](ctx[_0x18e6ab(0x2f8)]);
var createTop1InMinimap = function(_0x39cf74) {
    var _0x54b7ab = _0x18e6ab;
    if (_0x39cf74 && _0x39cf74[_0x54b7ab(0x23e)]) {
        let _0x1cd0dc = 0xfff000;
        !ctx['top1Point'] && (ctx[_0x54b7ab(0x47a)] = new PIXI[(_0x54b7ab(0x652))](),
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x615)] = 0x2,
        ctx[_0x54b7ab(0x47a)]['alpha'] = 0.9,
        ctx[_0x54b7ab(0x620)] ? ctx[_0x54b7ab(0x620)][_0x54b7ab(0x6f8)](ctx[_0x54b7ab(0x47a)]) : console['error'](_0x54b7ab(0x144)));
        ctx['top1Point']['clear'](),
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x5ec)](_0x1cd0dc),
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x411)](0x0, 0x0, 0.06 * 0x28),
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x308)](),
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x12d)](0x1, 0xff0000),
        ctx[_0x54b7ab(0x47a)]['drawCircle'](0x0, 0x0, 0.06 * 0x28),
        ctx['top1Point'][_0x54b7ab(0x308)](),
        ctx[_0x54b7ab(0x47a)]['shadow'] = !![],
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x4d8)] = 0xff0000,
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x492)] = 0xf,
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x32f)] = 0x0,
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x2bb)] = 0x0;
        const _0x2e6309 = new PIXI[(_0x54b7ab(0x4da))]('👑',{
            'fontFamily': _0x54b7ab(0x742),
            'fontSize': 0xa,
            'fill': 0xffffff,
            'align': 'center'
        });
        _0x2e6309['x'] = -_0x2e6309[_0x54b7ab(0x5ea)] / 0x2,
        _0x2e6309['y'] = -_0x2e6309[_0x54b7ab(0x392)] / 0x2,
        ctx[_0x54b7ab(0x47a)][_0x54b7ab(0x6f8)](_0x2e6309),
        ctx[_0x54b7ab(0x47a)]['x'] = _0x39cf74[_0x54b7ab(0x23e)]['x'],
        ctx[_0x54b7ab(0x47a)]['y'] = _0x39cf74[_0x54b7ab(0x23e)]['y'],
        console['log'](_0x54b7ab(0x6a3), _0x39cf74[_0x54b7ab(0x403)]);
    } else
        console[_0x54b7ab(0x613)](_0x54b7ab(0x4c6));
};
const updateHeadshotHistory = function(_0x4d882c) {
    var _0x56a588 = _0x18e6ab;
    for (let _0x2001f4 = 0x0; _0x2001f4 < 0x8; _0x2001f4++) {
        ctx['containerHsRec3']['children'][0x3 * _0x2001f4 + 0x1] && (ctx[_0x56a588(0x6ae)][_0x56a588(0x47c)][0x3 * _0x2001f4 + 0x1][_0x56a588(0x2db)] = _0x4d882c[_0x2001f4]['nombre2']),
        ctx['containerHsRec3']['children'][0x3 * _0x2001f4 + 0x3] && (ctx[_0x56a588(0x6ae)][_0x56a588(0x47c)][0x3 * _0x2001f4 + 0x2]['text'] = _0x4d882c[_0x2001f4][_0x56a588(0x3e0)]);
    }
};
function assignPtcValues(_0x23cf04, _0x564f25, _0x25474d) {
    var _0x31075e = _0x18e6ab;
    let _0x242347 = portionTimes[_0x564f25] - parseInt((0.99 == _0x25474d ? 0x1 : _0x25474d) * portionTimes[_0x564f25] / 0x1)
      , _0x4d9e93 = _0x31075e(0x658) + _0x564f25;
    _0x23cf04['Tf'][_0x564f25][_0x31075e(0x6f8)](ctx[_0x31075e(0x1f0)][_0x4d9e93]),
    ctx[_0x31075e(0x1f0)][_0x4d9e93] && (ctx[_0x31075e(0x1f0)][_0x4d9e93]['x'] = _0x242347 >= 0x64 ? 0xb : _0x242347 >= 0xa ? 0x12 : 0x1a,
    ctx[_0x31075e(0x1f0)][_0x4d9e93][_0x31075e(0x2db)] = _0x242347);
}
function account() {
    var _0x159c4b = _0x18e6ab;
    $('.servers-container\x20>\x20div')['hide'](),
    $('.ui-tab')['on'](_0x159c4b(0x57f), function() {
        var _0x1d3183 = _0x159c4b
          , _0x136855 = $(this)[_0x1d3183(0x160)](_0x1d3183(0x28a));
        $(_0x1d3183(0x101))['removeClass'](_0x1d3183(0x3d6)),
        $(this)[_0x1d3183(0x440)](_0x1d3183(0x3d6)),
        $(_0x1d3183(0x1bd))[_0x1d3183(0x3a0)](),
        $(_0x1d3183(0x332) + _0x136855[_0x1d3183(0x69f)]())[_0x1d3183(0x442)](0xc8),
        $('.servers-container\x20>\x20div')[_0x1d3183(0x71e)](_0x1d3183(0x332) + _0x136855[_0x1d3183(0x69f)]())['fadeOut'](0x64);
    });
}
function obtieneUSER() {
    var _0xf9f1e3 = _0x18e6ab
      , _0x5d8b81 = {}
      , _0x5dc355 = {};
    window[_0xf9f1e3(0x6e9)] = function() {
        var _0x2471c1 = _0xf9f1e3;
        _0x5dc355 = window[_0x2471c1(0x1c6)];
        if (_0x5dc355 && Object[_0x2471c1(0x667)](_0x5dc355)['length'] > 0x0) {
            console[_0x2471c1(0x10f)](_0x5dc355);
            if (_0x5dc355) {
                var _0x33f626 = window[_0x2471c1(0x3bc)] - _0x5dc355['qj']['If']['x']
                  , _0x137b71 = window[_0x2471c1(0x136)] - _0x5dc355['qj']['If']['y']
                  , _0x13c572 = _0x5dc355['Mb']['ad']
                  , _0x18b9b9 = Math[_0x2471c1(0x3be)](_0x33f626 * _0x33f626 + _0x137b71 * _0x137b71);
                console[_0x2471c1(0x10f)](_0x2471c1(0x57d), _0x5dc355, 'nickname:\x20', _0x13c572, 'Distance:', _0x18b9b9);
            }
        }
    }
    ;
}
;function loadScript2(_0x3cf2fe, _0x1742eb=!![]) {
    return new Promise( (_0x254108, _0x5e29af) => {
        var _0x11e761 = _0x32c7
          , _0x3d70fc = document[_0x11e761(0x3b1)](_0x11e761(0x37e));
        _0x3d70fc[_0x11e761(0x5db)] = _0x11e761(0x5c7),
        _0x3d70fc['src'] = _0x3cf2fe,
        _0x3d70fc['defer'] = _0x1742eb,
        _0x3d70fc[_0x11e761(0xf9)] = _0x254108,
        _0x3d70fc[_0x11e761(0x10a)] = _0x5e29af,
        document['head']['appendChild'](_0x3d70fc);
    }
    );
}
function loadStylesheet(_0x2735f6) {
    return new Promise( (_0xfa93ff, _0x4aa910) => {
        var _0x2fd9b6 = _0x32c7
          , _0x36af68 = document[_0x2fd9b6(0x3b1)](_0x2fd9b6(0x26b));
        _0x36af68[_0x2fd9b6(0x42e)] = _0x2fd9b6(0x555),
        _0x36af68['type'] = _0x2fd9b6(0x34e),
        _0x36af68[_0x2fd9b6(0xdc)] = _0x2735f6,
        _0x36af68['onload'] = _0xfa93ff,
        _0x36af68['onerror'] = _0x4aa910,
        document[_0x2fd9b6(0x1d9)][_0x2fd9b6(0x48d)](_0x36af68);
    }
    );
}
loadStylesheet(_0x18e6ab(0x393)),
loadScript2('https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js', !![]),
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css'),
loadScript2(_0x18e6ab(0x375)),
loadScript2(_0x18e6ab(0x66c)),
loadStylesheet(_0x18e6ab(0x217)),
_0x18e6ab(0x2a1);
var _typeof = _0x18e6ab(0x583) == typeof Symbol && _0x18e6ab(0x400) == typeof Symbol[_0x18e6ab(0x5f5)] ? function(_0xa86753) {
    return typeof _0xa86753;
}
: function(_0x5bb7bd) {
    var _0x38d2f6 = _0x18e6ab;
    return _0x5bb7bd && _0x38d2f6(0x583) == typeof Symbol && _0x5bb7bd[_0x38d2f6(0x561)] === Symbol && _0x5bb7bd !== Symbol['prototype'] ? _0x38d2f6(0x400) : typeof _0x5bb7bd;
}
, GoogleAuth;
!(function() {
    var _0x33f28a = _0x18e6ab;
    try {
        console[_0x33f28a(0x10f)](function(_0x26abd1, _0x24d4ad) {
            var _0x5e5aef = _0x33f28a;
            for (var _0x8f526d = 0x0; _0x8f526d < _0x24d4ad['length']; _0x8f526d += 0x2)
                _0x26abd1 = _0x26abd1[_0x5e5aef(0x429)](_0x24d4ad[_0x8f526d], _0x24d4ad[_0x8f526d + 0x1]);
            return _0x26abd1;
        }(_0x33f28a(0x42b), ['W', 'hhhh', 'Q', _0x33f28a(0x71a), 'M', _0x33f28a(0x741), 'Y', _0x33f28a(0x519), 'H', 'hh', 'S', 'ss', '6', _0x33f28a(0x71b), '3', '\x20\x20\x20', '2', '\x20\x20', 'N', '\x0a']));
    } catch (_0x1a6aa7) {}
}()),
window[_0x18e6ab(0x38f)](_0x18e6ab(0x4b7), function() {
    var _0x43e338 = _0x18e6ab;
    function _0x48d61a() {
        var _0x4bc113 = _0x32c7;
        return function(_0x415ade, _0x444dbf, _0x3745f2) {
            var _0x1382fa = _0x32c7;
            function _0x42ec89(_0x10d9f0, _0x13aea5) {
                var _0xb9801e = _0x32c7;
                return (void 0x0 === _0x10d9f0 ? _0xb9801e(0x3a3) : _typeof(_0x10d9f0)) === _0x13aea5;
            }
            function _0xec3faa() {
                var _0x1d798b = _0x32c7;
                return 'function' != typeof _0x444dbf[_0x1d798b(0x3b1)] ? _0x444dbf[_0x1d798b(0x3b1)](arguments[0x0]) : _0x3991a6 ? _0x444dbf[_0x1d798b(0x319)][_0x1d798b(0x67d)](_0x444dbf, 'http://www.w3.org/2000/svg', arguments[0x0]) : _0x444dbf[_0x1d798b(0x3b1)][_0x1d798b(0x337)](_0x444dbf, arguments);
            }
            var _0x590f6c = []
              , _0x2ddf4a = []
              , _0x538445 = {
                '_version': '3.3.1',
                '_config': {
                    'classPrefix': '',
                    'enableClasses': !0x0,
                    'enableJSClass': !0x0,
                    'usePrefixes': !0x0
                },
                '_q': [],
                'on': function(_0x456bbc, _0x3b5e48) {
                    var _0x114675 = this;
                    setTimeout(function() {
                        _0x3b5e48(_0x114675[_0x456bbc]);
                    }, 0x0);
                },
                'addTest': function(_0x52dcaf, _0x35b93b, _0x18e717) {
                    var _0x568261 = _0x32c7;
                    _0x2ddf4a[_0x568261(0x5d6)]({
                        'name': _0x52dcaf,
                        'fn': _0x35b93b,
                        'options': _0x18e717
                    });
                },
                'addAsyncTest': function(_0x103db3) {
                    var _0x4dcfd8 = _0x32c7;
                    _0x2ddf4a[_0x4dcfd8(0x5d6)]({
                        'name': null,
                        'fn': _0x103db3
                    });
                }
            }
              , _0x20a1b6 = function() {};
            _0x20a1b6['prototype'] = _0x538445,
            _0x20a1b6 = new _0x20a1b6();
            var _0x28b2fe = !0x1;
            try {
                _0x28b2fe = 'WebSocket'in _0x415ade && 0x2 === _0x415ade['WebSocket'][_0x1382fa(0x3dc)];
            } catch (_0x3ce314) {}
            _0x20a1b6[_0x1382fa(0x2b5)](_0x1382fa(0x3da), _0x28b2fe);
            var _0xfcd9b = _0x444dbf[_0x1382fa(0x447)]
              , _0x3991a6 = _0x1382fa(0x3d9) === _0xfcd9b[_0x1382fa(0x361)][_0x1382fa(0x69f)]();
            _0x20a1b6[_0x1382fa(0x2b5)](_0x1382fa(0x294), function() {
                var _0x1b13f2 = _0x1382fa
                  , _0x422909 = _0xec3faa(_0x1b13f2(0x294));
                return !(!_0x422909['getContext'] || !_0x422909[_0x1b13f2(0x346)]('2d'));
            }),
            _0x20a1b6[_0x1382fa(0x2b5)](_0x1382fa(0xed), function() {
                var _0x1b9a4e = _0x1382fa;
                return !0x1 !== _0x20a1b6[_0x1b9a4e(0x294)] && _0x1b9a4e(0x583) == typeof _0xec3faa(_0x1b9a4e(0x294))[_0x1b9a4e(0x346)]('2d')[_0x1b9a4e(0xd4)];
            }),
            (function() {
                var _0x4d123b = _0x1382fa, _0x570fd5, _0x23878f, _0x52ed6b, _0x19c147, _0x17b0d8, _0x49a6e5, _0x215d11;
                for (var _0x5244e0 in _0x2ddf4a)
                    if (_0x2ddf4a[_0x4d123b(0x121)](_0x5244e0)) {
                        if (_0x570fd5 = [],
                        _0x23878f = _0x2ddf4a[_0x5244e0],
                        _0x23878f[_0x4d123b(0x283)] && (_0x570fd5[_0x4d123b(0x5d6)](_0x23878f[_0x4d123b(0x283)][_0x4d123b(0x69f)]()),
                        _0x23878f[_0x4d123b(0x2e4)] && _0x23878f[_0x4d123b(0x2e4)][_0x4d123b(0x63b)] && _0x23878f[_0x4d123b(0x2e4)][_0x4d123b(0x63b)][_0x4d123b(0x484)])) {
                            for (_0x52ed6b = 0x0; _0x52ed6b < _0x23878f[_0x4d123b(0x2e4)][_0x4d123b(0x63b)]['length']; _0x52ed6b++)
                                _0x570fd5[_0x4d123b(0x5d6)](_0x23878f[_0x4d123b(0x2e4)][_0x4d123b(0x63b)][_0x52ed6b]['toLowerCase']());
                        }
                        for (_0x19c147 = _0x42ec89(_0x23878f['fn'], _0x4d123b(0x583)) ? _0x23878f['fn']() : _0x23878f['fn'],
                        _0x17b0d8 = 0x0; _0x17b0d8 < _0x570fd5[_0x4d123b(0x484)]; _0x17b0d8++)
                            _0x49a6e5 = _0x570fd5[_0x17b0d8],
                            _0x215d11 = _0x49a6e5[_0x4d123b(0x6d1)]('.'),
                            0x1 === _0x215d11['length'] ? _0x20a1b6[_0x215d11[0x0]] = _0x19c147 : (!_0x20a1b6[_0x215d11[0x0]] || _0x20a1b6[_0x215d11[0x0]]instanceof Boolean || (_0x20a1b6[_0x215d11[0x0]] = new Boolean(_0x20a1b6[_0x215d11[0x0]])),
                            _0x20a1b6[_0x215d11[0x0]][_0x215d11[0x1]] = _0x19c147),
                            _0x590f6c[_0x4d123b(0x5d6)]((_0x19c147 ? '' : 'no-') + _0x215d11['join']('-'));
                    }
            }()),
            function(_0x4defb2) {
                var _0x154ba7 = _0x1382fa
                  , _0x338d9a = _0xfcd9b[_0x154ba7(0x6a9)]
                  , _0x284943 = _0x20a1b6[_0x154ba7(0xdd)][_0x154ba7(0xff)] || '';
                if (_0x3991a6 && (_0x338d9a = _0x338d9a['baseVal']),
                _0x20a1b6['_config'][_0x154ba7(0x38d)]) {
                    var _0x5d0c50 = new RegExp(_0x154ba7(0x642) + _0x284943 + _0x154ba7(0x4c9));
                    _0x338d9a = _0x338d9a[_0x154ba7(0x68e)](_0x5d0c50, '$1' + _0x284943 + _0x154ba7(0x17e));
                }
                _0x20a1b6[_0x154ba7(0xdd)][_0x154ba7(0x3a2)] && (_0x338d9a += '\x20' + _0x284943 + _0x4defb2[_0x154ba7(0x349)]('\x20' + _0x284943),
                _0x3991a6 ? _0xfcd9b[_0x154ba7(0x6a9)][_0x154ba7(0x719)] = _0x338d9a : _0xfcd9b['className'] = _0x338d9a);
            }(_0x590f6c),
            delete _0x538445['addTest'],
            delete _0x538445[_0x1382fa(0x1cd)];
            for (var _0x5c5e6b = 0x0; _0x5c5e6b < _0x20a1b6['_q'][_0x1382fa(0x484)]; _0x5c5e6b++)
                _0x20a1b6['_q'][_0x5c5e6b]();
            _0x415ade[_0x1382fa(0x425)] = _0x20a1b6;
        }(window, document),
        Modernizr[_0x4bc113(0x3da)] && Modernizr[_0x4bc113(0x294)] && Modernizr[_0x4bc113(0xed)];
    }
    if (document['getElementById'](_0x43e338(0x1ce))[_0x43e338(0x4e4)][_0x43e338(0x665)] = _0x43e338(0x3dd),
    !_0x48d61a())
        return void (document[_0x43e338(0xec)](_0x43e338(0x401))[_0x43e338(0x4e4)]['display'] = _0x43e338(0x3dd));
    !(function() {
        var _0x53c3f2 = _0x43e338;
        function _0x242785() {
            var _0x1a85dc = _0x32c7;
            return window[_0x1a85dc(0x3a9)] = _0xe9bd03;
        }
        function _0x252acc(_0x3c1a7c) {
            var _0x189aed = _0x32c7;
            const _0x1e9026 = _0x3c1a7c + '='
              , _0x2ce3fb = document[_0x189aed(0x21a)][_0x189aed(0x6d1)](';');
            for (let _0x68e760 = 0x0; _0x68e760 < _0x2ce3fb['length']; _0x68e760++) {
                let _0x3330be = _0x2ce3fb[_0x68e760];
                while (_0x3330be[_0x189aed(0x198)](0x0) === '\x20') {
                    _0x3330be = _0x3330be[_0x189aed(0x493)](0x1);
                }
                if (_0x3330be[_0x189aed(0xf4)](_0x1e9026) === 0x0)
                    return _0x3330be[_0x189aed(0x493)](_0x1e9026[_0x189aed(0x484)], _0x3330be[_0x189aed(0x484)]);
            }
            return '';
        }
        function _0x339953(_0x12fecf, _0x21baa4, _0x229398) {
            var _0x1fa087 = _0x32c7
              , _0x2f6a93 = new Date();
            _0x2f6a93[_0x1fa087(0x3bf)](_0x2f6a93['getTime']() + 0x5265c00 * _0x229398);
            var _0x143274 = 'expires=' + _0x2f6a93['toUTCString']();
            document[_0x1fa087(0x21a)] = _0x12fecf + '=' + _0x21baa4 + ';\x20' + _0x143274 + ';\x20path=/';
        }
        function _0x817213(_0x18c233) {
            var _0x205dfd = _0x32c7;
            return window[_0x205dfd(0x1d0)][_0x18c233];
        }
        function _0x25c081(_0x2d56e8) {
            return _0x2d56e8[_0x439e9f] ? _0x2d56e8[_0x439e9f] : _0x2d56e8['en'] ? _0x2d56e8['en'] : _0x2d56e8['x'];
        }
        function _0xe2cbd9(_0x290543) {
            var _0x126198 = _0x32c7
              , _0x2e23da = (Math['floor'](_0x290543) % 0x3c)[_0x126198(0x39b)]()
              , _0xcb196f = (Math['floor'](_0x290543 / 0x3c) % 0x3c)[_0x126198(0x39b)]()
              , _0x301e1f = (Math[_0x126198(0x19d)](_0x290543 / 0xe10) % 0x18)[_0x126198(0x39b)]()
              , _0x4382ac = Math['floor'](_0x290543 / 0x15180)[_0x126198(0x39b)]()
              , _0x4f4187 = _0x817213(_0x126198(0x679))
              , _0x3e3309 = _0x817213('util.time.hours')
              , _0x5c4b77 = _0x817213('util.time.min')
              , _0x53fb81 = _0x817213(_0x126198(0x48f));
            return _0x4382ac > 0x0 ? _0x4382ac + '\x20' + _0x4f4187 + '\x20' + _0x301e1f + '\x20' + _0x3e3309 + '\x20' + _0xcb196f + '\x20' + _0x5c4b77 + '\x20' + _0x2e23da + '\x20' + _0x53fb81 : _0x301e1f > 0x0 ? _0x301e1f + '\x20' + _0x3e3309 + '\x20' + _0xcb196f + '\x20' + _0x5c4b77 + '\x20' + _0x2e23da + '\x20' + _0x53fb81 : _0xcb196f > 0x0 ? _0xcb196f + '\x20' + _0x5c4b77 + '\x20' + _0x2e23da + '\x20' + _0x53fb81 : _0x2e23da + '\x20' + _0x53fb81;
        }
        function _0x3d57e1(_0x2223a4) {
            var _0x3bd530 = _0x32c7;
            return _0x2223a4[_0x3bd530(0x704)]('href') ? _0x2223a4['replaceAll'](_0x3bd530(0xdc), _0x3bd530(0x68b)) : _0x2223a4;
        }
        function _0x194abc(_0x315869, _0x651c5f, _0x4cbeb2) {
            var _0x3ee4ac = _0x32c7
              , _0x49751d = document[_0x3ee4ac(0x3b1)](_0x3ee4ac(0x37e))
              , _0xd58354 = !0x0;
            _0x651c5f && (_0x49751d['id'] = _0x651c5f),
            _0x49751d['async'] = _0x3ee4ac(0x19e),
            _0x49751d[_0x3ee4ac(0x5db)] = _0x3ee4ac(0x5c7),
            _0x49751d[_0x3ee4ac(0x208)] = _0x315869,
            _0x4cbeb2 && (_0x49751d[_0x3ee4ac(0xf9)] = _0x49751d[_0x3ee4ac(0x6bd)] = function() {
                var _0x340b24 = _0x3ee4ac;
                _0xd58354 = !0x1;
                try {
                    _0x4cbeb2();
                } catch (_0x4e051c) {
                    console[_0x340b24(0x10f)](_0x4e051c);
                }
                _0x49751d[_0x340b24(0xf9)] = _0x49751d[_0x340b24(0x6bd)] = null;
            }
            ),
            (document[_0x3ee4ac(0x1d9)] || document[_0x3ee4ac(0x4dc)](_0x3ee4ac(0x1d9))[0x0])['appendChild'](_0x49751d);
        }
        function _0xaa2971(_0x10d820, _0x1648d1) {
            var _0x4259c6 = _0x32c7
              , _0x9ab244 = _0x1648d1;
            return _0x9ab244[_0x4259c6(0x34d)] = Object[_0x4259c6(0x5ef)](_0x10d820['prototype']),
            _0x9ab244['prototype'][_0x4259c6(0x561)] = _0x9ab244,
            _0x9ab244[_0x4259c6(0x57c)] = _0x10d820,
            _0x9ab244;
        }
        function _0x187188(_0x2a6900) {
            return _0x2a6900 %= _0x25862f,
            _0x2a6900 < 0x0 ? _0x2a6900 + _0x25862f : _0x2a6900;
        }
        function _0x237658(_0x396901, _0x2b60cf, _0x4b46ea) {
            return _0x4e116c(_0x4b46ea, _0x396901, _0x2b60cf);
        }
        function _0x4e116c(_0x4b03f0, _0x6d9be6, _0x8c64aa) {
            var _0x3e6bc9 = _0x32c7;
            return _0x4b03f0 > _0x8c64aa ? _0x8c64aa : _0x4b03f0 < _0x6d9be6 ? _0x6d9be6 : Number[_0x3e6bc9(0xe3)](_0x4b03f0) ? _0x4b03f0 : 0.5 * (_0x6d9be6 + _0x8c64aa);
        }
        function _0x2e7269(_0x53ddf1, _0x499832, _0x20c4c4, _0x5f5929) {
            var _0x277d2e = _0x32c7;
            return _0x499832 > _0x53ddf1 ? Math[_0x277d2e(0x4ee)](_0x499832, _0x53ddf1 + _0x20c4c4 * _0x5f5929) : Math[_0x277d2e(0x693)](_0x499832, _0x53ddf1 - _0x20c4c4 * _0x5f5929);
        }
        function _0x3bf98e(_0x2e56e6, _0x5541d2, _0xc2071e, _0x1f97cc, _0x3b54c2) {
            var _0x271952 = _0x32c7;
            return _0x5541d2 + (_0x2e56e6 - _0x5541d2) * Math[_0x271952(0x6be)](0x1 - _0x1f97cc, _0xc2071e / _0x3b54c2);
        }
        function _0xbb626a(_0x2af626, _0x27e4ea, _0x240dba) {
            return _0x2af626 * (0x1 - _0x240dba) + _0x27e4ea * _0x240dba;
        }
        function _0x217444(_0x263b0d, _0x433251, _0x20a23c, _0x3a3c12) {
            var _0x1b0beb = _0x32c7
              , _0x372b83 = _0x20a23c
              , _0x3dc6b1 = _0x433251
              , _0x137400 = _0x433251 + _0x3a3c12;
            if (null == _0x263b0d)
                throw new TypeError(_0x1b0beb(0x1cc));
            var _0x368649 = _0x263b0d[_0x1b0beb(0x484)] >>> 0x0
              , _0x3df9d1 = _0x372b83 >> 0x0
              , _0x4b550e = _0x3df9d1 < 0x0 ? Math[_0x1b0beb(0x693)](_0x368649 + _0x3df9d1, 0x0) : Math[_0x1b0beb(0x4ee)](_0x3df9d1, _0x368649)
              , _0x1e93af = _0x3dc6b1 >> 0x0
              , _0x231156 = _0x1e93af < 0x0 ? Math[_0x1b0beb(0x693)](_0x368649 + _0x1e93af, 0x0) : Math['min'](_0x1e93af, _0x368649)
              , _0x4b5c5f = void 0x0 === _0x137400 ? _0x368649 : _0x137400 >> 0x0
              , _0x43af4d = _0x4b5c5f < 0x0 ? Math[_0x1b0beb(0x693)](_0x368649 + _0x4b5c5f, 0x0) : Math[_0x1b0beb(0x4ee)](_0x4b5c5f, _0x368649)
              , _0x28a2b0 = Math[_0x1b0beb(0x4ee)](_0x43af4d - _0x231156, _0x368649 - _0x4b550e)
              , _0x9fb043 = 0x1;
            for (_0x231156 < _0x4b550e && _0x4b550e < _0x231156 + _0x28a2b0 && (_0x9fb043 = -0x1,
            _0x231156 += _0x28a2b0 - 0x1,
            _0x4b550e += _0x28a2b0 - 0x1); _0x28a2b0 > 0x0; )
                _0x231156 in _0x263b0d ? _0x263b0d[_0x4b550e] = _0x263b0d[_0x231156] : delete _0x263b0d[_0x4b550e],
                _0x231156 += _0x9fb043,
                _0x4b550e += _0x9fb043,
                _0x28a2b0--;
            return _0x263b0d;
        }
        function _0x171c27(_0x5f19d9) {
            return _0x5f19d9['getContext']('2d');
        }
        function _0x27d3f0(_0x116f44) {
            var _0x4f1f00 = _0x32c7;
            null != _0x116f44[_0x4f1f00(0x57c)] && _0x116f44[_0x4f1f00(0x57c)]['removeChild'](_0x116f44);
        }
        function _0x27c6f7(_0x371b80) {
            var _0x3d79d7 = _0x32c7;
            return _0x371b80[parseInt(Math['random']() * _0x371b80[_0x3d79d7(0x484)])];
        }
        function _0x1868dc() {
            var _0x43ec3d = _0x32c7;
            return Math[_0x43ec3d(0x197)]()[_0x43ec3d(0x39b)](0x24)[_0x43ec3d(0x493)](0x2, 0xf);
        }
        function _0x1c9266(_0x1fb17f, _0x5bd800, _0x5c4cf2) {
            var _0x4e1642 = _0x32c7
              , _0x3ddaad = (0x1 - Math[_0x4e1642(0x153)](0x2 * _0x5c4cf2 - 0x1)) * _0x5bd800
              , _0x8f8353 = _0x3ddaad * (0x1 - Math[_0x4e1642(0x153)](_0x1fb17f / 0x3c % 0x2 - 0x1))
              , _0x5e3b7f = _0x5c4cf2 - _0x3ddaad / 0x2;
            return 0x0 <= _0x1fb17f && _0x1fb17f < 0x3c ? [_0x5e3b7f + _0x3ddaad, _0x5e3b7f + _0x8f8353, _0x5e3b7f + 0x0] : 0x3c <= _0x1fb17f && _0x1fb17f < 0x78 ? [_0x5e3b7f + _0x8f8353, _0x5e3b7f + _0x3ddaad, _0x5e3b7f + 0x0] : 0x78 <= _0x1fb17f && _0x1fb17f < 0xb4 ? [_0x5e3b7f + 0x0, _0x5e3b7f + _0x3ddaad, _0x5e3b7f + _0x8f8353] : 0xb4 <= _0x1fb17f && _0x1fb17f < 0xf0 ? [_0x5e3b7f + 0x0, _0x5e3b7f + _0x8f8353, _0x5e3b7f + _0x3ddaad] : 0xf0 <= _0x1fb17f && _0x1fb17f < 0x12c ? [_0x5e3b7f + _0x8f8353, _0x5e3b7f + 0x0, _0x5e3b7f + _0x3ddaad] : [_0x5e3b7f + _0x3ddaad, _0x5e3b7f + 0x0, _0x5e3b7f + _0x8f8353];
        }
        function _0x3a9c07() {
            var _0x11a902 = _0x32c7;
            function _0x2123dc() {
                var _0xb2d98b = _0x32c7;
                let _0x11e39c = theoKzObjects[_0xb2d98b(0x5e4)] ? 0x1 : 0x5;
                $('#adbl-1')['text'](_0x817213(_0xb2d98b(0x126))),
                $(_0xb2d98b(0x221))[_0xb2d98b(0x2db)](_0x817213('index.game.antiadblocker.msg2')),
                $(_0xb2d98b(0x3ee))[_0xb2d98b(0x2db)](_0x817213(_0xb2d98b(0x747))),
                $('#adbl-4')[_0xb2d98b(0x2db)](_0x817213(_0xb2d98b(0x119))[_0xb2d98b(0x68e)](_0xb2d98b(0x21b), 0xa)),
                $(_0xb2d98b(0x268))['text'](_0x817213(_0xb2d98b(0x604))),
                $(_0xb2d98b(0x22b))['hide'](),
                $('#' + _0x35a27d)['fadeIn'](0x1f4);
                for (var _0x81deab = _0x11e39c, _0x44ae6f = 0x0; _0x44ae6f < _0x11e39c; _0x44ae6f++)
                    setTimeout(function() {
                        var _0x2023dc = _0xb2d98b;
                        if (_0x81deab--,
                        $(_0x2023dc(0x73e))[_0x2023dc(0x2db)](_0x817213(_0x2023dc(0x119))[_0x2023dc(0x68e)](_0x2023dc(0x21b), _0x81deab)),
                        0x0 === _0x81deab) {
                            console[_0x2023dc(0x10f)](_0x2023dc(0x18c));
                            try {
                                ga(_0x2023dc(0x2b3), _0x2023dc(0x106), _0x2023dc(0x48e), window[_0x2023dc(0x347)] + _0x2023dc(0x582));
                            } catch (_0x571e15) {}
                            $(_0x2023dc(0x22b))['fadeIn'](0xc8);
                        }
                    }, 0x3e8 * (_0x44ae6f + 0x1));
            }
            var _0x42ea0d = !0x1
              , _0x9f22f = function() {}
              , _0x2133b6 = {}
              , _0x35a27d = _0x11a902(0x4b5);
            return $('#adbl-continue')[_0x11a902(0x57f)](function() {
                $('#' + _0x35a27d)['fadeOut'](0x1f4),
                _0x9f22f(!0x1);
            }),
            _0x2133b6['a'] = function(_0x164f86) {
                var _0x51bb98 = _0x11a902;
                if (_0x9f22f = _0x164f86,
                !_0x42ea0d)
                    try {
                        aiptag['cmd'][_0x51bb98(0x21d)]['push'](function() {
                            var _0x13ee5a = _0x51bb98;
                            aiptag['adplayer'] = new aipPlayer({
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': !0x0,
                                'AD_CENTERPLAYER': !0x1,
                                'LOADING_TEXT': _0x13ee5a(0x635),
                                'PREROLL_ELEM': function() {
                                    var _0x7eaa9f = _0x13ee5a;
                                    return document['getElementById'](_0x7eaa9f(0x228));
                                },
                                'AIP_COMPLETE': function(_0x3d79ca) {
                                    var _0x4ae0f5 = _0x13ee5a;
                                    console[_0x4ae0f5(0x10f)](_0x4ae0f5(0x41e)),
                                    _0x9f22f(!0x0),
                                    $(_0x4ae0f5(0x36d))[_0x4ae0f5(0x3a0)](),
                                    $('#' + _0x35a27d)[_0x4ae0f5(0x3a0)]();
                                    try {
                                        ga(_0x4ae0f5(0x2b3), _0x4ae0f5(0x106), _0x4ae0f5(0x243), window['runtimeHash'] + _0x4ae0f5(0x582));
                                    } catch (_0x5b0709) {}
                                },
                                'AIP_REMOVE': function() {}
                            });
                        }),
                        _0x42ea0d = !0x0;
                    } catch (_0x23bbad) {}
            }
            ,
            _0x2133b6['b'] = function() {
                var _0x369b8f = _0x11a902;
                if (void 0x0 !== aiptag['adplayer']) {
                    console[_0x369b8f(0x10f)](_0x369b8f(0x38e));
                    try {
                        ga('send', _0x369b8f(0x106), 'preroll', window[_0x369b8f(0x347)] + _0x369b8f(0x142));
                    } catch (_0x9dcad5) {}
                    _0x2123dc();
                } else {
                    console[_0x369b8f(0x10f)](_0x369b8f(0x297));
                    try {
                        ga('send', 'event', _0x369b8f(0x48e), window[_0x369b8f(0x347)] + _0x369b8f(0x5f7));
                    } catch (_0xb62751) {}
                    _0x2123dc();
                }
            }
            ,
            _0x2133b6;
        }
        function _0x3c992e(_0x132a76, _0x5bd34e) {
            return {
                'a': function() {},
                'c': function() {}
            };
        }
        function _0xda5d33() {
            function _0x26c81c(_0x2170b4) {
                var _0x4df498 = _0x32c7
                  , _0x19f00b = _0x2170b4 + 0x25 * Math[_0x4df498(0x19d)](0xffff * Math[_0x4df498(0x197)]());
                _0x339953(_0x2ff145['d'], _0x19f00b, 0x1e);
            }
            function _0x1d60db() {
                return parseInt(_0x252acc(_0x2ff145['d'])) % 0x25;
            }
            return (function() {
                var _0x9679fc = _0x32c7
                  , _0x1c016a = _0x1d60db();
                console['log']('init1\x20pSC:\x20' + _0x1c016a);
                !(_0x1c016a >= 0x0 && _0x1c016a < _0x4c8c71['e']) && (_0x1c016a = Math['max'](0x0, _0x4c8c71['e'] - 0x2),
                console[_0x9679fc(0x10f)](_0x9679fc(0x420) + _0x1c016a));
                var _0x159e70 = {};
                _0xe9bd03 = _0x159e70,
                _0x159e70['f'] = _0x4c8c71,
                _0x159e70['g'] = ![],
                _0x159e70['i'] = Date['now'](),
                _0x159e70['j'] = 0x0,
                _0x159e70['k'] = 0x0,
                _0x159e70['l'] = null,
                _0x159e70['m'] = _0x166c32,
                _0x159e70['n'] = _0x439e9f,
                _0x159e70['o'] = null,
                _0x159e70['p'] = null,
                _0x159e70['q'] = null,
                _0x159e70['r'] = null,
                _0x159e70['s'] = null,
                _0x159e70['t'] = null,
                _0x159e70['u'] = null;
                try {
                    navigator && navigator[_0x9679fc(0xd9)] && navigator['geolocation'][_0x9679fc(0x464)](function(_0x50a13e) {
                        var _0x322ecd = _0x9679fc;
                        if (void 0x0 !== _0x50a13e[_0x322ecd(0x38b)]) {
                            var _0x48b2f6 = _0x50a13e['coords'];
                            void 0x0 !== _0x48b2f6[_0x322ecd(0xfc)] && void 0x0 !== _0x48b2f6['longitude'] && (_0x159e70['l'] = _0x50a13e);
                        }
                    }, function(_0x243683) {});
                } catch (_0x16a72e) {}
                return _0x159e70['v'] = function() {
                    _0x159e70['p'] = new _0x4b4fb2(),
                    _0x159e70['q'] = new _0x29d47a(),
                    _0x159e70['r'] = new _0x424e28(),
                    _0x159e70['s'] = new _0x39b4ee(),
                    _0x159e70['t'] = new _0x409ded(),
                    _0x159e70['u'] = new _0x5a7047(),
                    _0x159e70['o'] = new _0xb7de2b(),
                    _0x159e70['o']['z'] = new _0x26ddff(_0x159e70['o']),
                    _0x159e70['a']();
                }
                ,
                _0x159e70['a'] = function() {
                    var _0x16938d = _0x9679fc;
                    try {
                        ga('send', _0x16938d(0x106), _0x16938d(0x1da), window[_0x16938d(0x347)] + _0x16938d(0x638));
                    } catch (_0x3767fc) {}
                    _0x159e70['o']['A'] = function() {
                        _0x159e70['o']['B']();
                    }
                    ,
                    _0x159e70['o']['C'] = function() {
                        var _0xc7a036 = _0x16938d
                          , _0x2287bb = _0x159e70['s']['F']['D']();
                        try {
                            ga(_0xc7a036(0x2b3), _0xc7a036(0x106), 'game', window['runtimeHash'] + _0xc7a036(0x5f7), _0x2287bb);
                        } catch (_0x161adc) {}
                        _0x159e70['r']['G'](_0x424e28[_0xc7a036(0x737)]['H']),
                        _0x159e70['s']['I'](_0x159e70['s']['H']['J']());
                    }
                    ,
                    _0x159e70['o']['B'] = function() {
                        var _0x6c8e9c = _0x16938d;
                        try {
                            ga(_0x6c8e9c(0x2b3), _0x6c8e9c(0x106), _0x6c8e9c(0x2d6), window['runtimeHash'] + '_end');
                        } catch (_0x9e5cb7) {}
                        $(_0x6c8e9c(0x622))[_0x6c8e9c(0x392)]() >= 0x1ae && _0x159e70['f']['K']['c'](),
                        _0x159e70['p']['L'](),
                        (function() {
                            var _0x13b695 = _0x6c8e9c
                              , _0x971291 = Math[_0x13b695(0x19d)](_0x159e70['o']['N']['M'])
                              , _0x328527 = _0x159e70['o']['O'];
                            _0x159e70['u']['P']() ? _0x159e70['u']['Q'](function() {
                                _0x159e70['R'](_0x971291, _0x328527);
                            }) : _0x159e70['R'](_0x971291, _0x328527);
                        }());
                    }
                    ,
                    _0x159e70['o']['S'] = function(_0x338e30) {
                        _0x338e30(_0x159e70['s']['H']['T'](), _0x159e70['s']['H']['U']());
                    }
                    ,
                    _0x159e70['u']['V'](function() {
                        var _0x1730ed = _0x16938d;
                        if (_0x159e70['p']['W'] && (_0x159e70['r']['G'](_0x424e28[_0x1730ed(0x737)]['F']),
                        _0x159e70['s']['I'](_0x159e70['s']['F'])),
                        _0x159e70['u']['P']())
                            try {
                                var _0x31b641 = _0x159e70['u']['X']();
                                ga(_0x1730ed(0x172), _0x1730ed(0x6b3), _0x31b641);
                            } catch (_0x559b4d) {}
                        _0x159e70['Y']() && _0x159e70['u']['P']() && !_0x159e70['u']['Z']() ? (_0x159e70['$'](![], ![]),
                        _0x159e70['s']['aa']['_'](new _0x107dbe())) : _0x159e70['ba'](!![]);
                    }),
                    _0x159e70['p']['ca'](function() {
                        var _0x24bf4f = _0x16938d;
                        _0x159e70['r']['G'](_0x424e28[_0x24bf4f(0x737)]['F']),
                        _0x159e70['s']['I'](_0x159e70['s']['F']);
                    }),
                    _0x159e70['q']['a'](function() {
                        _0x159e70['o']['a'](),
                        _0x159e70['r']['a'](),
                        _0x159e70['s']['a'](),
                        _0x159e70['t']['a'](),
                        _0x159e70['p']['a'](),
                        _0x159e70['u']['a'](),
                        _0x159e70['Y']() && !_0x159e70['Z']() ? _0x159e70['s']['aa']['_'](new _0x107dbe()) : _0x159e70['ba'](!![]);
                    });
                }
                ,
                _0x159e70['da'] = function(_0x4e8cba) {
                    var _0x375b61 = _0x9679fc;
                    if (_0x159e70['u']['P']()) {
                        var _0x118e2d = _0x159e70['u']['ea']();
                        $[_0x375b61(0x6d9)](_0x2fc5c7 + '/pub/wuid/' + _0x118e2d + '/consent/change?value=' + encodeURI(_0x4e8cba), function(_0x5da3f2) {});
                    }
                }
                ,
                _0x159e70['fa'] = function(_0x3f828b) {
                    var _0x3b4775 = _0x9679fc
                      , _0x28c29f = _0x159e70['u']['ea']()
                      , _0x5c853b = _0x159e70['s']['F']['D']()
                      , _0x180877 = _0x159e70['s']['F']['ga']()
                      , _0x37eaa9 = _0x159e70['t']['ha'](_0x7e1770['ia'])
                      , _0x566401 = _0x159e70['t']['ha'](_0x7e1770['ja'])
                      , _0x1988c4 = _0x159e70['t']['ha'](_0x7e1770['ka'])
                      , _0x305092 = _0x159e70['t']['ha'](_0x7e1770['la'])
                      , _0x2e5f71 = _0x159e70['t']['ha'](_0x7e1770['ma'])
                      , _0x1c98ec = 0x0;
                    if (null != _0x159e70['l']) {
                        var _0x43bbc1 = _0x159e70['l'][_0x3b4775(0x38b)][_0x3b4775(0xfc)]
                          , _0x35b840 = _0x159e70['l']['coords'][_0x3b4775(0x3b6)];
                        _0x1c98ec = 0x1 | Math[_0x3b4775(0x693)](0x0, Math[_0x3b4775(0x4ee)](0x7fff, (_0x43bbc1 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math[_0x3b4775(0x693)](0x0, Math[_0x3b4775(0x4ee)](0xffff, (_0x35b840 + 0xb4) / 0x168 * 0x10000)) << 0x10;
                    }
                    _wrmxt[_0x3b4775(0x1b3)](_0x37eaa9);
                    let _0x52358e = _0x3b4775(0x15e) + (0x270f < _0x37eaa9 ? _0x3b4775(0x168) : _0x37eaa9['toString']()[_0x3b4775(0x23f)](0x4, 0x0)) + (0x1869f < _0x2e5f71 ? _0x3b4775(0x68c) : _0x2e5f71[_0x3b4775(0x39b)]()[_0x3b4775(0x23f)](0x5, 0x0));
                    _0x180877 = (0x20 <= _0x180877[_0x3b4775(0x484)] ? _0x180877[_0x3b4775(0x508)](0x0, 0x10) : _0x180877[_0x3b4775(0x508)](0x0, 0x10)['padEnd'](0x10)) + _0x52358e,
                    _0x180877 = _0x180877['trim']()[_0x3b4775(0x68e)](/\s/g, 'ㅤ'),
                    console['log'](_0x180877);
                    theoKzObjects[_0x3b4775(0x3a4)] && (_0x180877 = '');
                    var _0x49f8ef = document[_0x3b4775(0xec)](_0x3b4775(0x557));
                    if (_0x49f8ef !== null) {
                        var _0x178cc8 = _0x49f8ef[_0x3b4775(0x139)];
                        theoKzObjects[_0x3b4775(0x70b)] ? zwormData[_0x3b4775(0x251)] = _0x178cc8 : zwormData[_0x3b4775(0x251)] = _0x180877;
                    } else
                        console[_0x3b4775(0x3e9)](_0x3b4775(0x541));
                    var _0x99fe79 = _0x2fc5c7 + _0x3b4775(0x422) + _0x28c29f + _0x3b4775(0x487) + encodeURI(_0x5c853b) + _0x3b4775(0x116) + _0x1c98ec + _0x3b4775(0x141) + encodeURI(_0x180877) + _0x3b4775(0x551) + _wrmxt[_0x3b4775(0x58e)](_0x37eaa9) + _0x3b4775(0x438) + encodeURI(_0x566401) + _0x3b4775(0x2f7) + encodeURI(_0x1988c4) + _0x3b4775(0x1d2) + encodeURI(_0x305092) + '&hatId=' + encodeURI(_0x2e5f71);
                    console[_0x3b4775(0x10f)](_0x3b4775(0x25a) + _0x99fe79),
                    $[_0x3b4775(0x6d9)](_0x99fe79, function(_0x543c6f) {
                        var _0x4611f0 = _0x3b4775
                          , _0x13f58a = _0x543c6f[_0x4611f0(0x1f6)];
                        _0x3f828b(_0x13f58a);
                    });
                }
                ,
                _0x159e70['na'] = function() {
                    var _0x36e543 = _0x9679fc;
                    _0x1c016a++,
                    console['log'](_0x36e543(0x31f) + _0x1c016a),
                    !_0x159e70['f']['oa'] && _0x1c016a >= _0x159e70['f']['e'] ? (_0x159e70['s']['I'](_0x159e70['s']['pa']),
                    _0x159e70['r']['G'](_0x424e28['AudioState']['qa']),
                    _0x159e70['f']['ra']['b']()) : (_0x26c81c(_0x1c016a),
                    _0x159e70['sa'](),
                    zw_servertext[_0x36e543(0x2db)] = '');
                }
                ,
                _0x159e70['sa'] = function(_0x1a57b6) {
                    var _0x5c58f7 = _0x9679fc;
                    zw_killcount = 0x0,
                    zw_hscount = 0x0;
                    if (_0x159e70['o']['ta']()) {
                        _0x159e70['s']['I'](_0x159e70['s']['ua']),
                        _0x159e70['r']['G'](_0x424e28['AudioState']['ua']);
                        var _0x576c65 = _0x159e70['s']['F']['D']();
                        _0x339953(_0x2ff145['va'], _0x576c65, 0x1e),
                        console[_0x5c58f7(0x10f)](_0x5c58f7(0xc9) + _0x576c65);
                        var _0x5a2925 = _0x159e70['s']['xa']['wa']();
                        if (_0x339953(_0x2ff145['ya'], _0x5a2925, 0x1e),
                        console['log'](_0x5c58f7(0x328) + _0x5a2925),
                        _0x159e70['u']['P']())
                            _0x159e70['fa'](function(_0x9f63db) {
                                var _0x44e4ba = _0x5c58f7;
                                zw_lastserver = _0x1a57b6 ? _0x1a57b6 : _0x9f63db,
                                zwormData['wssServer'] = zw_lastserver,
                                zw_servertext['text'] = '' + zw_lastserver['replace'](_0x44e4ba(0x51d), '')['replace']('.wormate.io', '')[_0x44e4ba(0x68e)](_0x44e4ba(0x5b3), ''),
                                _0x159e70['o']['za'](_0x1a57b6 || _0x9f63db, _0x159e70['u']['ea']());
                            });
                        else {
                            var _0x36be9e = _0x159e70['s']['F']['ga']();
                            _0x339953(_0x2ff145['Aa'], _0x36be9e, 0x1e);
                            var _0x2b58d5 = _0x159e70['t']['ha'](_0x7e1770['ia']);
                            _0x339953(_0x2ff145['Ba'], _0x2b58d5, 0x1e),
                            _0x159e70['fa'](function(_0x23ee0b) {
                                var _0x4a2c51 = _0x5c58f7;
                                zw_lastserver = _0x1a57b6 ? _0x1a57b6 : _0x23ee0b,
                                zwormData[_0x4a2c51(0x29e)] = zw_lastserver,
                                zw_servertext['text'] = '' + zw_lastserver['replace'](_0x4a2c51(0x51d), '')['replace'](_0x4a2c51(0x3ed), '')[_0x4a2c51(0x68e)](_0x4a2c51(0x5b3), ''),
                                _0x159e70['o']['Ca'](_0x1a57b6 || _0x23ee0b, _0x36be9e, _0x2b58d5);
                            });
                        }
                    }
                }
                ,
                _0x159e70['R'] = function(_0x33785c, _0x4bf1ee) {
                    var _0x3e4cbf = _0x159e70['s']['F']['ga']();
                    _0x159e70['s']['H']['Da'](_0x33785c, _0x4bf1ee, _0x3e4cbf),
                    _0x159e70['r']['G'](_0x424e28['AudioState']['Ea']),
                    _0x159e70['s']['I'](_0x159e70['s']['H']['Fa']());
                }
                ,
                _0x159e70['Ga'] = function() {
                    if (!_0x159e70['Ha']())
                        return _0x159e70['t']['Ia']();
                    var _0x45643a = parseInt(_0x252acc(_0x2ff145['Ba']));
                    return null != _0x45643a && _0x159e70['t']['Ja'](_0x45643a, _0x7e1770['ia']) ? _0x45643a : _0x159e70['t']['Ia']();
                }
                ,
                _0x159e70['Ka'] = function(_0x313702) {
                    _0x339953(_0x2ff145['La'], !!_0x313702, 0x708);
                }
                ,
                _0x159e70['Ha'] = function() {
                    var _0x55b3d9 = _0x9679fc;
                    return _0x55b3d9(0x1ea) === _0x252acc(_0x2ff145['La']);
                }
                ,
                _0x159e70['ba'] = function(_0x100082) {
                    var _0x2cde4c = _0x9679fc;
                    if (_0x100082 != _0x159e70['g']) {
                        _0x159e70['g'] = _0x100082;
                        var _0x3a5816 = _0x3a5816 || {};
                        _0x3a5816[_0x2cde4c(0x448)] = _0x100082,
                        _0x3a5816['gdprConsent'] = _0x100082,
                        _0x159e70['f']['Ma']['a'](),
                        _0x159e70['f']['K']['a'](),
                        _0x159e70['f']['ra']['a'](function(_0x3741d7) {
                            _0x3741d7 && _0x26c81c(_0x1c016a = 0x0),
                            _0x159e70['sa']();
                        });
                    }
                }
                ,
                _0x159e70['$'] = function(_0x162551, _0x100a6c) {
                    var _0x387877 = _0x9679fc;
                    _0x339953(_0x2ff145['Na'], _0x162551 ? _0x387877(0x1ea) : _0x387877(0x42f)),
                    _0x100a6c && _0x159e70['da'](_0x162551),
                    _0x159e70['ba'](_0x162551);
                }
                ,
                _0x159e70['Z'] = function() {
                    switch (_0x252acc(_0x2ff145['Na'])) {
                    case 'true':
                        return !![];
                    default:
                        return ![];
                    }
                }
                ,
                _0x159e70['Y'] = function() {
                    var _0x46b406 = _0x9679fc;
                    try {
                        return !!window['isIPInEEA'] || !(null == _0x159e70['l'] || !_0x21d188['Oa'](_0x159e70['l']['coords'][_0x46b406(0xfc)], _0x159e70['l'][_0x46b406(0x38b)][_0x46b406(0x3b6)]));
                    } catch (_0x3da410) {
                        return !![];
                    }
                }
                ,
                _0x159e70['Pa'] = function(_0x4e9a35) {
                    var _0x453217 = _0x9679fc;
                    const _0x1985db = performance[_0x453217(0x39e)]();
                    _0x159e70['j'] = _0x1985db,
                    _0x159e70['k'] = _0x4e9a35,
                    _0x159e70['o']['Qa'](_0x1985db, _0x4e9a35),
                    _0x159e70['s']['Qa'](_0x1985db, _0x4e9a35),
                    _0x159e70['i'] = _0x1985db;
                }
                ,
                _0x159e70['Ra'] = function() {
                    _0x159e70['s']['Ra']();
                }
                ,
                _0x159e70;
            }());
        }
        function _0xb7de2b() {
            var _0x20877d = {
                'Sa': 0x0,
                'Ta': 0x1,
                'Ua': 0x2,
                'Va': 0x3
            }
              , _0x50972f = {};
            return _0x50972f['Wa'] = 0x1e,
            _0x50972f['Xa'] = new Float32Array(0x64),
            _0x50972f['Ya'] = 0x0,
            _0x50972f['Za'] = 0x0,
            _0x50972f['$a'] = 0x0,
            _0x50972f['_a'] = 0x0,
            _0x50972f['ab'] = 0x0,
            _0x50972f['bb'] = 0x0,
            _0x50972f['cb'] = _0x20877d['Sa'],
            _0x50972f['db'] = null,
            _0x50972f['eb'] = 0x12c,
            _0x50972f['C'] = function() {}
            ,
            _0x50972f['B'] = function() {}
            ,
            _0x50972f['S'] = function() {}
            ,
            _0x50972f['A'] = function() {}
            ,
            _0x50972f['fb'] = new _0x5e7405(),
            _0x50972f['z'] = null,
            _0x50972f['N'] = null,
            _0x50972f['gb'] = {},
            _0x50972f['hb'] = {},
            _0x50972f['ib'] = 12.5,
            _0x50972f['jb'] = 0x28,
            _0x50972f['kb'] = 0x1,
            _0x50972f['lb'] = -0x1,
            _0x50972f['mb'] = 0x1,
            _0x50972f['nb'] = 0x1,
            _0x50972f['ob'] = -0x1,
            _0x50972f['pb'] = -0x1,
            _0x50972f['qb'] = 0x1,
            _0x50972f['rb'] = 0x1,
            _0x50972f['sb'] = -0x1,
            _0x50972f['O'] = 0x1f4,
            _0x50972f['tb'] = 0x1f4,
            _0x50972f['fb']['ub'] = 0x1f4,
            _0x50972f['N'] = new _0x268d93(_0x50972f['fb']),
            _0x50972f['a'] = function() {
                var _0x1c10f6 = _0x32c7;
                _0x50972f['N']['vb'](_0x242785()['s']['H']['wb']);
                let _0x517884 = setInterval(function() {
                    _0x50972f['S'](function(_0x5d66ed, _0x4e98aa) {
                        _0x50972f['xb'](_0x5d66ed, _0x4e98aa);
                    });
                }, theoKzObjects[_0x1c10f6(0x35d)]);
                _0x50972f['updatePacketInterval'] = function(_0x7d4468) {
                    var _0x194332 = _0x1c10f6;
                    clearInterval(_0x517884),
                    theoKzObjects[_0x194332(0x35d)] = _0x7d4468,
                    _0x517884 = setInterval(function() {
                        _0x50972f['S'](function(_0x57020d, _0x3c0f54) {
                            console['log'](_0x57020d, _0x3c0f54),
                            _0x50972f['xb'](_0x57020d, _0x3c0f54);
                        });
                    }, theoKzObjects[_0x194332(0x35d)]);
                }
                ;
            }
            ,
            _0x50972f['yb'] = function(_0x2707ad, _0x4dc6df, _0x14f3f4, _0x1bab2d) {
                _0x50972f['lb'] = _0x2707ad,
                _0x50972f['mb'] = _0x4dc6df,
                _0x50972f['nb'] = _0x14f3f4,
                _0x50972f['ob'] = _0x1bab2d,
                _0x50972f['zb']();
            }
            ,
            _0x50972f['Ab'] = function(_0x1510a8) {
                _0x50972f['kb'] = _0x1510a8,
                _0x50972f['zb']();
            }
            ,
            _0x50972f['zb'] = function() {
                _0x50972f['pb'] = _0x50972f['lb'] - _0x50972f['kb'],
                _0x50972f['qb'] = _0x50972f['mb'] + _0x50972f['kb'],
                _0x50972f['rb'] = _0x50972f['nb'] - _0x50972f['kb'],
                _0x50972f['sb'] = _0x50972f['ob'] + _0x50972f['kb'];
            }
            ,
            _0x50972f['Qa'] = function(_0x28cab5, _0x266a03) {
                var _0x32170a = _0x32c7;
                _0x266a03 = Math[_0x32170a(0x4ee)](Math[_0x32170a(0x693)](0x1, _0x266a03), 0x64),
                _0x50972f['$a'] += _0x266a03,
                _0x50972f['Za'] -= 0.2 * _0x50972f['Ya'] * _0x266a03,
                _0x50972f['z']['Bb']();
                _0x50972f['db'] != null && (_0x50972f['cb'] === _0x20877d['Ua'] || _0x50972f['cb'] === _0x20877d['Va']) && (_0x50972f['Cb'](_0x28cab5, _0x266a03),
                _0x50972f['jb'] = 0x4 + _0x50972f['ib'] * _0x50972f['N']['Db']);
                const _0x1b933d = 0x3e8 / _0x266a03;
                let _0x43da21 = 0x0;
                for (let _0xb9959b = 0x0; _0xb9959b < _0x50972f['Xa'][_0x32170a(0x484)] - 0x1; _0xb9959b++) {
                    _0x50972f['Xa'][_0xb9959b] = _0x50972f['Xa'][_0xb9959b + 0x1],
                    _0x43da21 += _0x50972f['Xa'][_0xb9959b];
                }
                _0x50972f['Xa'][_0x50972f['Xa']['length'] - 0x1] = _0x1b933d,
                _0x50972f['Wa'] = (_0x43da21 + _0x1b933d) / _0x50972f['Xa'][_0x32170a(0x484)];
            }
            ,
            _0x50972f['Eb'] = function(_0xde6975, _0x24aca0) {
                return _0xde6975 > _0x50972f['pb'] && _0xde6975 < _0x50972f['qb'] && _0x24aca0 > _0x50972f['rb'] && _0x24aca0 < _0x50972f['sb'];
            }
            ,
            _0x50972f['Cb'] = function(_0x5f2a4d, _0x3eaca0) {
                var _0x3defa5 = _0x50972f['$a'] + _0x50972f['Za']
                  , _0x412faf = (_0x3defa5 - _0x50972f['_a']) / (_0x50972f['ab'] - _0x50972f['_a']);
                _0x50972f['N']['Fb'](_0x5f2a4d, _0x3eaca0),
                _0x50972f['N']['Gb'](_0x5f2a4d, _0x3eaca0, _0x412faf, _0x50972f['Eb']);
                var _0x4c1438 = 0x0, _0x18f208;
                for (_0x18f208 in _0x50972f['hb']) {
                    var _0x3d72bd = _0x50972f['hb'][_0x18f208];
                    _0x3d72bd['Fb'](_0x5f2a4d, _0x3eaca0),
                    _0x3d72bd['Gb'](_0x5f2a4d, _0x3eaca0, _0x412faf, _0x50972f['Eb']),
                    _0x3d72bd['Hb'] && _0x3d72bd['Db'] > _0x4c1438 && (_0x4c1438 = _0x3d72bd['Db']),
                    !(_0x3d72bd['Ib'] || !(_0x3d72bd['Jb'] < 0.005) && _0x3d72bd['Hb']) && (_0x3d72bd['Kb'](),
                    delete _0x50972f['hb'][_0x3d72bd['Mb']['Lb']]);
                }
                _0x50972f['Ab'](0x3 * _0x4c1438);
                var _0x38a2a4;
                for (_0x38a2a4 in _0x50972f['gb']) {
                    var _0x5af940 = _0x50972f['gb'][_0x38a2a4];
                    _0x5af940['Fb'](_0x5f2a4d, _0x3eaca0),
                    _0x5af940['Gb'](_0x5f2a4d, _0x3eaca0, _0x50972f['Eb']),
                    _0x5af940['Nb'] && (_0x5af940['Jb'] < 0.005 || !_0x50972f['Eb'](_0x5af940['Ob'], _0x5af940['Pb'])) && (_0x5af940['Kb'](),
                    delete _0x50972f['gb'][_0x5af940['Mb']['Lb']]);
                }
            }
            ,
            _0x50972f['Qb'] = function(_0xa80851, _0x32eb21) {
                _0x50972f['cb'] === _0x20877d['Ta'] && (_0x50972f['cb'] = _0x20877d['Ua'],
                _0x50972f['C']());
                var _0x4b7051 = _0x242785()['j'];
                _0x50972f['bb'] = _0xa80851;
                0x0 === _0xa80851 ? (_0x50972f['_a'] = _0x4b7051 - 0x5f,
                _0x50972f['ab'] = _0x4b7051,
                _0x50972f['$a'] = _0x50972f['_a'],
                _0x50972f['Za'] = 0x0) : (_0x50972f['_a'] = _0x50972f['ab'],
                _0x50972f['ab'] = _0x50972f['ab'] + _0x32eb21);
                var _0x2b42ea = _0x50972f['$a'] + _0x50972f['Za'];
                _0x50972f['Ya'] = (_0x2b42ea - _0x50972f['_a']) / (_0x50972f['ab'] - _0x50972f['_a']);
            }
            ,
            _0x50972f['Rb'] = function() {
                if (_0x50972f['cb'] === _0x20877d['Ta'] || _0x50972f['cb'] === _0x20877d['Ua']) {
                    _0x50972f['cb'] = _0x20877d['Va'];
                    var _0x290156 = _0x50972f['db'];
                    setTimeout(function() {
                        _0x50972f['cb'] === _0x20877d['Va'] && (_0x50972f['cb'] = _0x20877d['Sa']),
                        null != _0x290156 && _0x290156 === _0x50972f['db'] && (_0x50972f['db']['close'](),
                        _0x50972f['db'] = null);
                    }, 0x1388),
                    _0x50972f['B']();
                }
            }
            ,
            _0x50972f['ta'] = function() {
                var _0x39c64f = _0x32c7;
                return _0x50972f['cb'] !== _0x20877d['Ua'] && (_0x50972f['cb'] = _0x20877d['Ta'],
                _0x50972f['z']['Sb'](),
                _0x50972f['gb'] = {},
                _0x50972f['hb'] = {},
                _0x50972f['N']['Tb'](),
                null != _0x50972f['db'] && (_0x50972f['db'][_0x39c64f(0x34b)](),
                _0x50972f['db'] = null),
                !![]);
            }
            ,
            _0x50972f['Ub'] = function() {
                _0x50972f['db'] = null,
                _0x50972f['z']['Sb'](),
                _0x50972f['cb'] !== _0x20877d['Va'] && _0x50972f['A'](),
                _0x50972f['cb'] = _0x20877d['Sa'];
            }
            ,
            _0x50972f['za'] = function(_0x3289c3, _0x4925c5) {
                _0x50972f['Vb'](_0x3289c3, function() {
                    var _0x51dca0 = _0x32c7;
                    console[_0x51dca0(0x10f)](_0x4925c5);
                    if (wormxt_Obj[_0x51dca0(0x460)]) {
                        var _0x43a4b2 = document[_0x51dca0(0xec)](_0x51dca0(0x3ba))[_0x51dca0(0x139)]
                          , _0x25bf68 = 0x80
                          , _0xff2d = Math[_0x51dca0(0x4ee)](0x20, _0x43a4b2[_0x51dca0(0x484)])
                          , _0x2924e6 = new ArrayBuffer(0x7 + 0x2 * _0xff2d)
                          , _0x4a054c = new DataView(_0x2924e6)
                          , _0x2b2b92 = 0x0;
                        _0x4a054c[_0x51dca0(0x57b)](_0x2b2b92, 0x81),
                        _0x2b2b92 = _0x2b2b92 + 0x1,
                        _0x4a054c[_0x51dca0(0x14e)](_0x2b2b92, 0xaf0),
                        _0x2b2b92 = _0x2b2b92 + 0x2,
                        _0x4a054c[_0x51dca0(0x57b)](_0x2b2b92, 0x0),
                        _0x2b2b92 = _0x2b2b92 + 0x1,
                        _0x4a054c['setInt16'](_0x2b2b92, _0x25bf68),
                        _0x2b2b92 = _0x2b2b92 + 0x2,
                        _0x4a054c[_0x51dca0(0x57b)](_0x2b2b92, _0xff2d),
                        _0x2b2b92++;
                        var _0x57c16d = 0x0;
                        for (; _0x57c16d < _0xff2d; _0x57c16d++) {
                            _0x4a054c[_0x51dca0(0x14e)](_0x2b2b92, _0x43a4b2[_0x51dca0(0x62a)](_0x57c16d)),
                            _0x2b2b92 = _0x2b2b92 + 0x2;
                        }
                        _0x50972f['Wb'](_0x2924e6);
                    } else {
                        var _0xff2d = Math[_0x51dca0(0x4ee)](0x800, _0x4925c5['length'])
                          , _0x2924e6 = new ArrayBuffer(0x6 + 0x2 * _0xff2d)
                          , _0x32600e = new DataView(_0x2924e6)
                          , _0x2b2b92 = 0x0;
                        _0x32600e[_0x51dca0(0x57b)](_0x2b2b92, 0x81),
                        _0x2b2b92 = _0x2b2b92 + 0x1,
                        _0x32600e['setInt16'](_0x2b2b92, 0xaf0),
                        _0x2b2b92 = _0x2b2b92 + 0x2,
                        _0x32600e[_0x51dca0(0x57b)](_0x2b2b92, 0x1),
                        _0x2b2b92 = _0x2b2b92 + 0x1,
                        _0x32600e[_0x51dca0(0x14e)](_0x2b2b92, _0xff2d),
                        _0x2b2b92 = _0x2b2b92 + 0x2;
                        var _0x57c16d = 0x0;
                        for (; _0x57c16d < _0xff2d; _0x57c16d++) {
                            _0x32600e[_0x51dca0(0x14e)](_0x2b2b92, _0x4925c5['charCodeAt'](_0x57c16d)),
                            _0x2b2b92 = _0x2b2b92 + 0x2;
                        }
                        _0x50972f['Wb'](_0x2924e6);
                    }
                });
            }
            ,
            _0x50972f['Ca'] = function(_0xebc309, _0x56e638, _0x5d732e) {
                _0x50972f['Vb'](_0xebc309, function() {
                    var _0x24f049 = _0x32c7
                      , _0x1b3396 = Math[_0x24f049(0x4ee)](0x20, _0x56e638[_0x24f049(0x484)])
                      , _0x392fdf = new ArrayBuffer(0x7 + 0x2 * _0x1b3396)
                      , _0x7edb17 = new DataView(_0x392fdf)
                      , _0x1e6806 = 0x0;
                    _0x7edb17[_0x24f049(0x57b)](_0x1e6806, 0x81),
                    _0x1e6806 = _0x1e6806 + 0x1,
                    _0x7edb17['setInt16'](_0x1e6806, 0xaf0),
                    _0x1e6806 = _0x1e6806 + 0x2,
                    _0x7edb17['setInt8'](_0x1e6806, 0x0),
                    _0x1e6806 = _0x1e6806 + 0x1,
                    _0x7edb17[_0x24f049(0x14e)](_0x1e6806, _0x5d732e),
                    _0x1e6806 = _0x1e6806 + 0x2,
                    _0x7edb17[_0x24f049(0x57b)](_0x1e6806, _0x1b3396),
                    _0x1e6806++;
                    var _0xa23863 = 0x0;
                    for (; _0xa23863 < _0x1b3396; _0xa23863++) {
                        _0x7edb17['setInt16'](_0x1e6806, _0x56e638[_0x24f049(0x62a)](_0xa23863)),
                        _0x1e6806 = _0x1e6806 + 0x2;
                    }
                    _0x50972f['Wb'](_0x392fdf),
                    console[_0x24f049(0x10f)](_0x392fdf);
                });
            }
            ,
            _0x50972f['Wb'] = function(_0x5a0ccd) {
                var _0x36d492 = _0x32c7;
                try {
                    null != _0x50972f['db'] && _0x50972f['db'][_0x36d492(0x593)] === WebSocket[_0x36d492(0x3f3)] && _0x50972f['db']['send'](_0x5a0ccd);
                } catch (_0x5432be) {
                    console[_0x36d492(0x10f)](_0x36d492(0x44a) + _0x5432be),
                    _0x50972f['Ub']();
                }
            }
            ,
            _0x50972f['xb'] = function(_0x239871, _0xcf202e) {
                var _0x1bd116 = _0x32c7
                  , _0x22b33e = _0xcf202e ? 0x80 : 0x0
                  , _0x58938f = _0x187188(_0x239871) / _0x25862f * 0x80 & 0x7f
                  , _0x2ab50e = 0xff & (_0x22b33e | _0x58938f);
                if (_0x50972f['eb'] !== _0x2ab50e) {
                    var _0xa71fee = new ArrayBuffer(0x1);
                    new DataView(_0xa71fee)[_0x1bd116(0x57b)](0x0, _0x2ab50e),
                    _0x50972f['Wb'](_0xa71fee),
                    _0x50972f['eb'] = _0x2ab50e;
                }
            }
            ,
            _0x50972f['Vb'] = function(_0x500834, _0x45ff48) {
                var _0x24e6ac = _0x32c7
                  , _0x14fdb8 = _0x50972f['db'] = new WebSocket(_0x500834);
                _0x14fdb8['binaryType'] = _0x24e6ac(0x3cf),
                window[_0x24e6ac(0x5b1)] = _0x14fdb8[_0x24e6ac(0x21f)] = function() {
                    var _0x4519a9 = _0x24e6ac;
                    _0x50972f['db'] === _0x14fdb8 && (console['log'](_0x4519a9(0x5a1)),
                    _0x45ff48()),
                    isPlaying = !![];
                }
                ,
                window[_0x24e6ac(0x6c6)] = _0x14fdb8[_0x24e6ac(0x6c6)] = function() {
                    var _0x2c68a5 = _0x24e6ac;
                    _wrmxt[_0x2c68a5(0x3f7)] = ![],
                    _0x50972f['db'] === _0x14fdb8 && (console[_0x2c68a5(0x10f)](_0x2c68a5(0x24d)),
                    _0x50972f['Ub']()),
                    isPlaying = ![];
                }
                ,
                _0x14fdb8['onerror'] = function(_0x14d70e) {
                    var _0x247881 = _0x24e6ac;
                    console[_0x247881(0x10f)](_0x14d70e[_0x247881(0x5fc)]),
                    _0x50972f['db'] === _0x14fdb8 && (console['log'](_0x247881(0x325)),
                    _0x50972f['Ub']()),
                    isPlaying = ![];
                }
                ,
                _0x14fdb8[_0x24e6ac(0x3b4)] = function(_0x48e0da) {
                    var _0x1d8edb = _0x24e6ac;
                    _0x50972f['db'] === _0x14fdb8 && _0x50972f['z']['Xb'](_0x48e0da[_0x1d8edb(0x5fc)]);
                }
                ;
            }
            ,
            _0x50972f;
        }
        var _0x1068d2 = _0x53c3f2(0x4e8)
          , _0x5144a4 = _0x53c3f2(0x702)
          , _0x3e158d = /iPad|iPhone|iPod/['test'](navigator[_0x53c3f2(0x450)]) && !window['MSStream']
          , _0x2fc5c7 = atob('aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=')
          , _0x50ed72 = atob(_0x53c3f2(0x659))
          , _0x439e9f = window[_0x53c3f2(0x45c)];
        _0x439e9f || (_0x439e9f = 'en');
        var _0x166c32 = void 0x0;
        switch (_0x439e9f) {
        case 'uk':
            _0x166c32 = _0x53c3f2(0x275);
            break;
        case 'de':
            _0x166c32 = _0x53c3f2(0x270);
            break;
        case 'fr':
            _0x166c32 = _0x53c3f2(0x433);
            break;
        case 'ru':
            _0x166c32 = _0x53c3f2(0x50a);
            break;
        case 'es':
            _0x166c32 = _0x53c3f2(0x567);
            break;
        default:
            _0x166c32 = _0x53c3f2(0x164);
        }
        moment['locale'](_0x166c32);
        var _0x3880bf = !0x1
          , _0xe9bd03 = void 0x0
          , _0x55f583 = (function() {
            var _0x59f045 = _0x53c3f2
              , _0x2ae964 = {
                'Yb': eval(atob(_0x59f045(0x1fd)))
            }
              , _0x149eaa = _0x2ae964['Yb'][atob('QkxFTkRfTU9ERVM=')]
              , _0x5f4281 = _0x2ae964['Yb'][atob(_0x59f045(0x6b0))];
            return {
                'Zb': _0x2ae964['Yb'][atob(_0x59f045(0x5a7))],
                '$b': _0x2ae964['Yb'][atob('QmFzZVRleHR1cmU=')],
                '_b': _0x2ae964['Yb'][atob('VGV4dHVyZQ==')],
                'ac': _0x2ae964['Yb'][atob(_0x59f045(0x6b9))],
                'bc': _0x2ae964['Yb'][atob(_0x59f045(0x1c4))],
                'cc': _0x2ae964['Yb'][atob(_0x59f045(0x3ef))],
                'dc': _0x2ae964['Yb'][atob(_0x59f045(0x4ac))],
                'ec': _0x2ae964['Yb'][atob(_0x59f045(0x178))],
                'fc': _0x2ae964['Yb'][atob(_0x59f045(0x376))],
                'gc': _0x2ae964['Yb'][atob(_0x59f045(0x20c))],
                'hc': _0x2ae964['Yb'][atob(_0x59f045(0x158))],
                'ic': {
                    'jc': _0x149eaa[atob(_0x59f045(0x262))]
                },
                'kc': {
                    'lc': _0x5f4281[atob(_0x59f045(0x1d8))],
                    'CLAMP': _0x2ae964['Yb'][_0x59f045(0x344)][_0x59f045(0x3bd)]
                }
            };
        }())
          , _0x25862f = 0x2 * Math['PI'];
        !(function() {
            var _0x500ec1 = _0x53c3f2
              , _0x384a7d = 'Z2V0'
              , _0x9fc482 = '='
              , _0x1aa7d7 = _0x384a7d + _0x500ec1(0x5a3)
              , _0x2b2b49 = _0x384a7d + _0x500ec1(0x680)
              , _0x9d9057 = [atob(_0x1aa7d7 + _0x500ec1(0x4d6)), atob(_0x1aa7d7 + 'MTY' + _0x9fc482), atob(_0x1aa7d7 + _0x500ec1(0x14c) + _0x9fc482), atob(_0x2b2b49 + _0x500ec1(0x1a7)), atob(_0x2b2b49 + _0x500ec1(0x3f0))];
            DataView[_0x500ec1(0x34d)]['mc'] = function(_0x59a393) {
                return this[_0x9d9057[0x0]](_0x59a393);
            }
            ,
            DataView[_0x500ec1(0x34d)]['nc'] = function(_0x1cbfb8) {
                return this[_0x9d9057[0x1]](_0x1cbfb8);
            }
            ,
            DataView[_0x500ec1(0x34d)]['oc'] = function(_0x2d9eb6) {
                return this[_0x9d9057[0x2]](_0x2d9eb6);
            }
            ,
            DataView['prototype']['pc'] = function(_0x46c143) {
                return this[_0x9d9057[0x3]](_0x46c143);
            }
            ,
            DataView[_0x500ec1(0x34d)]['qc'] = function(_0x302241) {
                return this[_0x9d9057[0x4]](_0x302241);
            }
            ;
        }());
        var _0x5bdf7a = (function() {
            var _0x3598e2 = _0x53c3f2;
            function _0xf13d9f(_0x5a5b6f) {
                this['rc'] = _0x5a5b6f,
                this['sc'] = !0x1,
                this['tc'] = 0x1;
            }
            return _0xf13d9f['VELOCITY_TYPE'] = 0x0,
            _0xf13d9f[_0x3598e2(0x49f)] = 0x1,
            _0xf13d9f[_0x3598e2(0x527)] = 0x2,
            _0xf13d9f[_0x3598e2(0x5fd)] = 0x6,
            _0xf13d9f['X2_TYPE'] = 0x3,
            _0xf13d9f['X5_TYPE'] = 0x4,
            _0xf13d9f[_0x3598e2(0x15b)] = 0x5,
            _0xf13d9f;
        }())
          , _0x4b4fb2 = (function() {
            var _0x58b480 = _0x53c3f2;
            function _0x4040e3() {
                this['uc'] = [],
                this['vc'] = {},
                this['wc'] = null,
                this['xc'] = _0x28aa8c['yc']();
            }
            function _0x23b6a2(_0x2ca3f9, _0x488f33) {
                var _0x1cf506 = _0x32c7;
                for (var _0x28fabe in _0x2ca3f9)
                    _0x2ca3f9[_0x1cf506(0x121)](_0x28fabe) && _0x488f33(_0x28fabe, _0x2ca3f9[_0x28fabe]);
            }
            return _0x4040e3['prototype']['a'] = function() {
                this['L']();
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['W'] = function() {
                return null != this['wc'];
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['zc'] = function() {
                var _0x3a9fcb = _0x58b480;
                return null != this['wc'] ? this['wc'][_0x3a9fcb(0x1e3)] : -0x1;
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['Ac'] = function() {
                return this['wc'];
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['L'] = function() {
                var _0x5c9136 = _0x58b480
                  , _0x19e47e = this;
                $['get'](_0x50ed72 + _0x5c9136(0x6df), function(_0x325e0f) {
                    _0x325e0f > _0x19e47e['zc']() && _0x19e47e['Bc']();
                });
            }
            ,
            _0x4040e3['prototype']['Bc'] = function() {
                var _0x1da88c = _0x58b480
                  , _0x2ed778 = this;
                $['ajax']({
                    'type': _0x1da88c(0x560),
                    'url': _0x1da88c(0x524),
                    'data': JSON[_0x1da88c(0x151)]({
                        'reason': 0x1
                    }),
                    'contentType': _0x1da88c(0x33e),
                    'success': function(_0x4b8a5a) {
                        var _0x3f0b3a = _0x1da88c;
                        theoKzObjects['visibleSkin'] = _0x4b8a5a[_0x3f0b3a(0x61d)],
                        delete _0x4b8a5a[_0x3f0b3a(0x61d)],
                        theoKzObjects['pL'] = _0x4b8a5a[_0x3f0b3a(0x2d3)],
                        theoKzObjects['idSkin'] = _0x4b8a5a[_0x3f0b3a(0x617)],
                        _0x4b8a5a[_0x3f0b3a(0x1e3)] > _0x2ed778['zc']() && _0x2ed778['Cc'](_0x4b8a5a),
                        unlockSkinsPrivate(anApp);
                    },
                    'error': function(_0x31c21e, _0x59a808, _0x3c9dee) {
                        var _0x1833b9 = _0x1da88c;
                        console[_0x1833b9(0x613)](_0x1833b9(0x37f), _0x3c9dee);
                    }
                });
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['ca'] = function(_0x1bd205) {
                var _0x182538 = _0x58b480;
                this['uc'][_0x182538(0x5d6)](_0x1bd205);
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['Dc'] = function() {
                return this['xc'];
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['Ec'] = function() {
                var _0x22a6e1 = _0x58b480;
                for (var _0x984429 = 0x0; _0x984429 < this['uc'][_0x22a6e1(0x484)]; _0x984429++)
                    this['uc'][_0x984429]();
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['Fc'] = function(_0xf6997b, _0x46bef9) {
                if (!(_0xf6997b['revision'] <= this['zc']())) {
                    var _0x1093f6 = _0x46bef9;
                    _0x23b6a2(this['vc'], function(_0x1f8356, _0x2ef847) {
                        var _0x2e10fb = _0x32c7
                          , _0x25e019 = _0x1093f6[_0x1f8356];
                        null != _0x25e019 && _0x2ef847['Gc'] === _0x25e019['Gc'] || (print(_0x2e10fb(0x407) + _0x1f8356 + _0x2e10fb(0x2d0) + _0x2ef847['Gc']),
                        _0x2ef847['Hc'][_0x2e10fb(0x5c9)]());
                    }),
                    this['vc'] = _0x1093f6,
                    this['wc'] = _0xf6997b,
                    this['xc'] = _0x28aa8c['Ic'](this['wc'], this['vc']),
                    this['Ec']();
                }
            }
            ,
            _0x4040e3[_0x58b480(0x34d)]['Cc'] = function(_0x1ee1e1) {
                var _0x164dde = _0x58b480
                  , _0x361bff = {}
                  , _0x5a942f = []
                  , _0x203a88 = []
                  , _0x3e1134 = 0x0;
                for (var _0x53992d in _0x1ee1e1[_0x164dde(0x2c4)]) {
                    if (_0x1ee1e1['textureDict'][_0x164dde(0x121)](_0x53992d)) {
                        var _0x493a15 = _0x1ee1e1[_0x164dde(0x2c4)][_0x53992d]
                          , _0x205ecf = _0x493a15['isCustom']
                          , _0x38460a = _0x205ecf ? _0x493a15[_0x164dde(0x4b8)] : _0x50ed72 + _0x493a15[_0x164dde(0x4b8)]
                          , _0x231c13 = _0x493a15['fileSize']
                          , _0x347148 = _0x493a15[_0x164dde(0x394)]
                          , _0x28682c = {
                            'id': _0x53992d,
                            'path': _0x38460a,
                            'fileSize': _0x231c13,
                            'sha256': _0x347148
                        };
                        _0x5a942f[_0x164dde(0x5d6)](_0x28682c),
                        _0x203a88['push'](_0x28682c),
                        _0x3e1134 += _0x231c13;
                        var _0x38460a = _0x493a15['relativePath'];
                        !_0x493a15['isCustom'] && (_0x38460a = _0x50ed72 + _0x493a15[_0x164dde(0x4b8)]);
                        try {
                            _0x361bff[_0x53992d] = new _0x492163(_0x38460a,_0x55f583['$b'][_0x164dde(0x34f)](_0x493a15[_0x164dde(0x6dd)] || _0x38460a));
                        } catch (_0x34ae81) {
                            console[_0x164dde(0x10f)](_0x38460a);
                        }
                    }
                }
                this['Fc'](_0x1ee1e1, _0x361bff);
            }
            ,
            _0x4040e3;
        }())
          , _0x28aa8c = (function() {
            var _0x41194a = _0x53c3f2;
            function _0xc5457c() {
                this['Jc'] = null,
                this['Kc'] = null,
                this['Lc'] = null,
                this['Mc'] = null,
                this['Nc'] = null,
                this['Oc'] = null,
                this['Pc'] = null,
                this['Qc'] = null,
                this['Rc'] = null,
                this['Sc'] = null,
                this['Tc'] = null,
                this['Uc'] = null,
                this['Vc'] = null,
                this['Wc'] = null,
                this['Xc'] = null,
                this['Yc'] = null;
            }
            function _0x39bc08(_0x1540d2, _0x4a1942) {
                for (var _0x58a1d1 in _0x1540d2)
                    _0x1540d2['hasOwnProperty'](_0x58a1d1) && _0x4a1942(_0x58a1d1, _0x1540d2[_0x58a1d1]);
            }
            return _0xc5457c['yc'] = function() {
                var _0x12825a = _0x32c7
                  , _0x3d220c = new _0x28aa8c();
                return _0x3d220c['Jc'] = {},
                _0x3d220c['Kc'] = {
                    'Zc': null,
                    '$c': null
                },
                _0x3d220c['Lc'] = {},
                _0x3d220c['Mc'] = {
                    'Zc': null
                },
                _0x3d220c['Nc'] = {},
                _0x3d220c['Oc'] = {
                    '_c': _0x12825a(0x3b5),
                    'Zc': [],
                    '$c': []
                },
                _0x3d220c['Pc'] = {},
                _0x3d220c['Qc'] = {
                    'ad': {},
                    'bd': _0x3d220c['Oc'],
                    'cd': _0x3d220c['Kc']
                },
                _0x3d220c['Rc'] = {},
                _0x3d220c['Sc'] = {
                    'Zc': []
                },
                _0x3d220c['Tc'] = {},
                _0x3d220c['Uc'] = {
                    'Zc': []
                },
                _0x3d220c['Vc'] = {},
                _0x3d220c['Wc'] = {
                    'Zc': []
                },
                _0x3d220c['Xc'] = {},
                _0x3d220c['Yc'] = {
                    'Zc': []
                },
                _0x3d220c;
            }
            ,
            _0xc5457c['Ic'] = function(_0x2f76f7, _0x494700) {
                var _0x22d55d = _0x32c7
                  , _0x3e1aa8 = new _0x28aa8c()
                  , _0x107622 = {};
                _0x39bc08(_0x2f76f7[_0x22d55d(0x61a)], function(_0x1349f8, _0x2f0faf) {
                    _0x107622[_0x1349f8] = _0x2f0faf;
                });
                var _0x2814ae = {};
                _0x39bc08(_0x2f76f7['regionDict'], function(_0x289559, _0x3415c1) {
                    var _0x4850a7 = _0x22d55d;
                    _0x2814ae[_0x289559] = new _0x6b666(_0x494700[_0x3415c1[_0x4850a7(0x25d)]]['Hc'],_0x3415c1['x'],_0x3415c1['y'],_0x3415c1['w'],_0x3415c1['h'],_0x3415c1['px'],_0x3415c1['py'],_0x3415c1['pw'],_0x3415c1['ph']);
                }),
                _0x3e1aa8['Nc'] = {};
                for (var _0x1081ec = 0x0; _0x1081ec < _0x2f76f7[_0x22d55d(0x617)][_0x22d55d(0x484)]; _0x1081ec++) {
                    var _0x4c2e77 = _0x2f76f7[_0x22d55d(0x617)][_0x1081ec];
                    _0x3e1aa8['Nc'][_0x4c2e77['id']] = new _0x28aa8c[(_0x22d55d(0xe7))]('#' + _0x107622[_0x4c2e77['prime']],_0x4c2e77[_0x22d55d(0x2c6)]['map'](function(_0x1bc80d) {
                        return _0x2814ae[_0x1bc80d];
                    }),_0x4c2e77[_0x22d55d(0x2fb)]['map'](function(_0x5637f7) {
                        return _0x2814ae[_0x5637f7];
                    }));
                }
                var _0xbe63f6 = _0x2f76f7['skinUnknown'];
                _0x3e1aa8['Oc'] = new _0x28aa8c[(_0x22d55d(0xe7))]('#' + _0x107622[_0xbe63f6[_0x22d55d(0x603)]],_0xbe63f6['base'][_0x22d55d(0x58c)](function(_0x441f9f) {
                    return _0x2814ae[_0x441f9f];
                }),_0xbe63f6[_0x22d55d(0x2fb)]['map'](function(_0x13ee52) {
                    return _0x2814ae[_0x13ee52];
                })),
                _0x3e1aa8['Rc'] = {},
                _0x39bc08(_0x2f76f7[_0x22d55d(0x67e)], function(_0x1b5e57, _0x56d243) {
                    var _0xb578af = _0x22d55d;
                    _0x1b5e57 = parseInt(_0x1b5e57),
                    _0x3e1aa8['Rc'][_0x1b5e57] = new _0x28aa8c[(_0xb578af(0x20b))](_0x56d243[_0xb578af(0x2c6)]['map'](function(_0x2904fe) {
                        var _0x32bb3d = _0xb578af;
                        return _0x2814ae[_0x2904fe[_0x32bb3d(0x310)]];
                    }));
                }),
                _0x3e1aa8['Sc'] = new _0x28aa8c[(_0x22d55d(0x20b))](_0x2f76f7[_0x22d55d(0x532)][_0x22d55d(0x2c6)][_0x22d55d(0x58c)](function(_0x572e10) {
                    var _0x2cbaf1 = _0x22d55d;
                    return _0x2814ae[_0x572e10[_0x2cbaf1(0x310)]];
                })),
                _0x3e1aa8['Tc'] = {},
                _0x39bc08(_0x2f76f7[_0x22d55d(0x4a4)], function(_0x4f50a3, _0x3ff5c3) {
                    var _0x10f6ea = _0x22d55d;
                    _0x4f50a3 = parseInt(_0x4f50a3),
                    _0x3e1aa8['Tc'][_0x4f50a3] = new _0x28aa8c['WearSkinData'](_0x3ff5c3[_0x10f6ea(0x2c6)]['map'](function(_0x17b9eb) {
                        var _0x395328 = _0x10f6ea;
                        return _0x2814ae[_0x17b9eb[_0x395328(0x310)]];
                    }));
                }),
                _0x3e1aa8['Uc'] = new _0x28aa8c[(_0x22d55d(0x20b))](_0x2f76f7[_0x22d55d(0x6f9)][_0x22d55d(0x2c6)][_0x22d55d(0x58c)](function(_0x946f25) {
                    var _0x46bc44 = _0x22d55d;
                    return _0x2814ae[_0x946f25[_0x46bc44(0x310)]];
                })),
                _0x3e1aa8['Vc'] = {},
                _0x39bc08(_0x2f76f7[_0x22d55d(0xdb)], function(_0x2e3380, _0x28e116) {
                    var _0x1823fe = _0x22d55d;
                    _0x2e3380 = parseInt(_0x2e3380),
                    _0x3e1aa8['Vc'][_0x2e3380] = new _0x28aa8c[(_0x1823fe(0x20b))](_0x28e116['base']['map'](function(_0x25fc14) {
                        var _0x58d054 = _0x1823fe;
                        return _0x2814ae[_0x25fc14[_0x58d054(0x310)]];
                    }));
                }),
                _0x3e1aa8['Wc'] = new _0x28aa8c[(_0x22d55d(0x20b))](_0x2f76f7[_0x22d55d(0x1fb)][_0x22d55d(0x2c6)][_0x22d55d(0x58c)](function(_0x564d13) {
                    var _0x53c214 = _0x22d55d;
                    return _0x2814ae[_0x564d13[_0x53c214(0x310)]];
                })),
                _0x3e1aa8['Xc'] = {},
                _0x39bc08(_0x2f76f7[_0x22d55d(0x3e3)], function(_0x5d184b, _0x242466) {
                    var _0x18528a = _0x22d55d;
                    _0x5d184b = parseInt(_0x5d184b),
                    _0x3e1aa8['Xc'][_0x5d184b] = new _0x28aa8c[(_0x18528a(0x20b))](_0x242466[_0x18528a(0x2c6)][_0x18528a(0x58c)](function(_0x4ec0bb) {
                        var _0x307330 = _0x18528a;
                        return _0x2814ae[_0x4ec0bb[_0x307330(0x310)]];
                    }));
                }),
                _0x3e1aa8['Yc'] = new _0x28aa8c[(_0x22d55d(0x20b))](_0x2f76f7['hatUnknown'][_0x22d55d(0x2c6)]['map'](function(_0x57f6c3) {
                    return _0x2814ae[_0x57f6c3['region']];
                })),
                _0x3e1aa8['Jc'] = {},
                _0x39bc08(_0x2f76f7[_0x22d55d(0x195)], function(_0x2c34ef, _0xf417f2) {
                    var _0x4f2835 = _0x22d55d;
                    _0x2c34ef = parseInt(_0x2c34ef),
                    _0x3e1aa8['Jc'][_0x2c34ef] = new _0x28aa8c[(_0x4f2835(0x606))](_0x2814ae[_0xf417f2[_0x4f2835(0x2c6)]],_0x2814ae[_0xf417f2[_0x4f2835(0x2fb)]]);
                });
                var _0x1eee6f = _0x2f76f7[_0x22d55d(0x5df)];
                _0x3e1aa8['Kc'] = new _0x28aa8c[(_0x22d55d(0x606))](_0x2814ae[_0x1eee6f[_0x22d55d(0x2c6)]],_0x2814ae[_0x1eee6f['glow']]),
                _0x3e1aa8['Lc'] = {},
                _0x39bc08(_0x2f76f7[_0x22d55d(0x254)], function(_0x5ae66d, _0x2fbb37) {
                    var _0xa8da1b = _0x22d55d;
                    _0x5ae66d = parseInt(_0x5ae66d),
                    _0x3e1aa8['Lc'][_0x5ae66d] = new _0x28aa8c['AbilitySkinData'](_0x2814ae[_0x2fbb37[_0xa8da1b(0x2c6)]]);
                });
                var _0x3eeded = _0x2f76f7['abilityUnknown'];
                return _0x3e1aa8['Mc'] = new _0x28aa8c[(_0x22d55d(0x499))](_0x2814ae[_0x3eeded['base']]),
                _0x3e1aa8['Pc'] = {},
                _0x39bc08(_0x2f76f7[_0x22d55d(0x131)], function(_0x315273, _0x138ce8) {
                    var _0x2829b7 = _0x22d55d;
                    _0x315273 = parseInt(_0x315273),
                    _0x3e1aa8['Pc'][_0x315273] = new _0x28aa8c['TeamSkinData'](_0x138ce8[_0x2829b7(0x283)],new _0x28aa8c[(_0x2829b7(0xe7))]('#' + _0x107622[_0x138ce8[_0x2829b7(0x369)][_0x2829b7(0x603)]],[],_0x138ce8['skin'][_0x2829b7(0x2fb)]['map'](function(_0x291ed9) {
                        return _0x2814ae[_0x291ed9];
                    })),new _0x28aa8c['PortionSkinData']([],_0x2814ae[_0x138ce8[_0x2829b7(0x456)][_0x2829b7(0x2fb)]]));
                }),
                _0x3e1aa8['Qc'] = new _0x28aa8c['TeamSkinData']({},_0x3e1aa8['Oc'],_0x3e1aa8['Kc']),
                _0x3e1aa8;
            }
            ,
            _0xc5457c[_0x41194a(0x34d)]['dd'] = function(_0x263978) {
                var _0x94e0dc = _0x41194a
                  , _0x10a2a9 = this['Nc'][_0x263978];
                return _0x10a2a9 && (Array[_0x94e0dc(0x298)](_0x10a2a9['$c']) && _0x10a2a9['$c'][_0x94e0dc(0xca)](_0x91276e => optimizarTextura(_0x91276e)),
                Array['isArray'](_0x10a2a9['Zc']) && _0x10a2a9['Zc'][_0x94e0dc(0xca)](_0x4ba34c => optimizarTextura(_0x4ba34c))),
                _0x10a2a9 || this['Oc'];
            }
            ,
            _0xc5457c['prototype']['ed'] = function(_0x59317b) {
                var _0x56e5c8 = this['Pc'][_0x59317b];
                return _0x56e5c8 || this['Qc'];
            }
            ,
            _0xc5457c[_0x41194a(0x34d)]['fd'] = function(_0x6ca87f) {
                var _0x21eb43 = this['Rc'][_0x6ca87f];
                return _0x21eb43 || this['Sc'];
            }
            ,
            _0xc5457c[_0x41194a(0x34d)]['gd'] = function(_0x564356) {
                var _0x2f9980 = this['Tc'][_0x564356];
                return _0x2f9980 || this['Uc'];
            }
            ,
            _0xc5457c[_0x41194a(0x34d)]['hd'] = function(_0x822031) {
                var _0x3f92bf = this['Vc'][_0x822031];
                return _0x3f92bf || this['Wc'];
            }
            ,
            _0xc5457c[_0x41194a(0x34d)]['jd'] = function(_0x5b819e) {
                var _0x1abd59 = this['Xc'][_0x5b819e];
                return _0x1abd59 || this['Yc'];
            }
            ,
            _0xc5457c[_0x41194a(0x34d)]['kd'] = function(_0x37ce42) {
                var _0x4a64f0 = this['Jc'][_0x37ce42];
                if (_0x4a64f0) {
                    if (_0x4a64f0['$c'])
                        optimizarTextura(_0x4a64f0['$c']);
                    if (_0x4a64f0['Zc'])
                        optimizarTextura(_0x4a64f0['Zc']);
                }
                return _0x4a64f0 || this['Kc'];
            }
            ,
            _0xc5457c[_0x41194a(0x34d)]['ld'] = function(_0x289293) {
                var _0x961e01 = this['Lc'][_0x289293];
                return _0x961e01 || this['Mc'];
            }
            ,
            _0xc5457c['TeamSkinData'] = (function() {
                function _0x4370a0(_0x1aff6c, _0x36bdc9, _0x194f3d) {
                    this['ad'] = _0x1aff6c,
                    this['bd'] = _0x36bdc9,
                    this['cd'] = _0x194f3d;
                }
                return _0x4370a0;
            }()),
            _0xc5457c[_0x41194a(0xe7)] = (function() {
                function _0x12cdf7(_0xf3a7ac, _0x189204, _0x3077e0) {
                    this['_c'] = _0xf3a7ac,
                    this['Zc'] = _0x189204,
                    this['$c'] = _0x3077e0;
                }
                return _0x12cdf7;
            }()),
            _0xc5457c['WearSkinData'] = (function() {
                function _0x287a5d(_0x4bbbbf) {
                    this['Zc'] = _0x4bbbbf;
                }
                return _0x287a5d;
            }()),
            _0xc5457c[_0x41194a(0x606)] = (function() {
                function _0x51cd06(_0x5df1f9, _0x4e9016) {
                    this['Zc'] = _0x5df1f9,
                    this['$c'] = _0x4e9016;
                }
                return _0x51cd06;
            }()),
            _0xc5457c[_0x41194a(0x499)] = (function() {
                function _0x5dbdb3(_0x393dcc) {
                    this['Zc'] = _0x393dcc;
                }
                return _0x5dbdb3;
            }()),
            _0xc5457c;
        }())
          , _0x424e28 = (function() {
            var _0x566763 = _0x53c3f2;
            function _0x3b8633() {
                var _0x9f5b5f = _0x32c7;
                this['md'] = _0x424e28[_0x9f5b5f(0x737)]['ua'],
                this['nd'] = !0x1,
                this['od'] = !0x1,
                this['pd'] = null,
                this['qd'] = null;
            }
            _0x3b8633[_0x566763(0x34d)]['a'] = function() {}
            ,
            _0x3b8633['prototype']['rd'] = function(_0x36ad2d) {
                this['od'] = _0x36ad2d;
            }
            ,
            _0x3b8633[_0x566763(0x34d)]['G'] = function(_0x137333) {
                this['md'] = _0x137333,
                this['sd']();
            }
            ,
            _0x3b8633['prototype']['td'] = function(_0x45ea94) {
                this['nd'] = _0x45ea94,
                this['sd']();
            }
            ,
            _0x3b8633[_0x566763(0x34d)]['sd'] = function() {}
            ,
            _0x3b8633['prototype']['ud'] = function(_0x3bfaf3, _0x5795de) {
                var _0x512745 = _0x566763;
                if (!_0x242785()['p']['W'])
                    return null;
                var _0xf74161 = _0x3bfaf3[_0x5795de];
                return null == _0xf74161 || 0x0 == _0xf74161[_0x512745(0x484)] ? null : _0xf74161[Math[_0x512745(0x19d)](Math[_0x512745(0x197)]() * _0xf74161[_0x512745(0x484)])][_0x512745(0x2d9)]();
            }
            ,
            _0x3b8633['prototype']['vd'] = function(_0xcaaad1, _0x4095a2, _0x2e0961) {
                var _0x489f26 = _0x566763;
                if (this['od'] && !(_0x2e0961 <= 0x0)) {
                    var _0x595ac6 = this['ud'](_0xcaaad1, _0x4095a2);
                    null != _0x595ac6 && (_0x595ac6['volume'] = Math[_0x489f26(0x4ee)](0x1, _0x2e0961),
                    _0x595ac6['play']());
                }
            }
            ,
            _0x3b8633[_0x566763(0x34d)]['wd'] = function(_0x2a886a, _0x5a583f) {
                this['md']['xd'] && this['vd'](app['q']['yd'], _0x2a886a, _0x5a583f);
            }
            ,
            _0x3b8633[_0x566763(0x34d)]['zd'] = function(_0x4a4975, _0x119901) {
                this['md']['Ad'] && this['vd'](app['q']['Bd'], _0x4a4975, _0x119901);
            }
            ,
            _0x3b8633[_0x566763(0x34d)]['Cd'] = function() {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Dd'] = function() {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Ed'] = function() {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Fd'] = function() {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Gd'] = function() {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Hd'] = function() {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Id'] = function(_0xed0069, _0x20f93f, _0xf37391) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Jd'] = function(_0x1b80ca) {}
            ,
            _0x3b8633['prototype']['Kd'] = function(_0x573cf2) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Ld'] = function(_0x69639b) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Md'] = function(_0x49ef5d) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Nd'] = function(_0x354365) {}
            ,
            _0x3b8633['prototype']['Od'] = function(_0x2c6df8) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Pd'] = function(_0x3da31a) {}
            ,
            _0x3b8633['prototype']['Qd'] = function(_0x39d925) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Rd'] = function(_0x5f1314) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Sd'] = function(_0x2669e6) {}
            ,
            _0x3b8633['prototype']['Td'] = function(_0x436228) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Ud'] = function(_0x43090f) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Vd'] = function(_0x489d09) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Wd'] = function(_0xbc6b22) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Xd'] = function(_0x513987, _0x4c6c58) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Yd'] = function(_0x52a199) {}
            ,
            _0x3b8633[_0x566763(0x34d)]['Zd'] = function(_0xb0972a, _0x1deadf, _0x791a21) {}
            ;
            var _0x5c74c9 = ((function() {
                var _0xcc2dfe = _0x566763;
                function _0xe2b7bb(_0x5497c4) {
                    var _0x4d5b2d = _0x32c7;
                    this['$d'] = new _0x5c74c9(_0x5497c4,0.5),
                    this['$d']['_d'][_0x4d5b2d(0x2cf)] = !0x0,
                    this['ae'] = !0x1;
                }
                _0xe2b7bb[_0xcc2dfe(0x34d)]['be'] = function(_0x24d741) {
                    _0x24d741 ? this['b']() : this['ce']();
                }
                ,
                _0xe2b7bb[_0xcc2dfe(0x34d)]['b'] = function() {
                    this['ae'] || (this['ae'] = !0x0,
                    this['$d']['de'] = 0x0,
                    this['$d']['ee'](0x5dc, 0x64));
                }
                ,
                _0xe2b7bb[_0xcc2dfe(0x34d)]['ce'] = function() {
                    this['ae'] && (this['ae'] = !0x1,
                    this['$d']['fe'](0x5dc, 0x64));
                }
                ;
            }()),
            (function() {
                var _0x24e1a7 = _0x566763;
                function _0x10b7b0(_0x29bc03) {
                    this['ge'] = _0x29bc03['map'](function(_0x645842) {
                        return new _0x5c74c9(_0x645842,0.4);
                    }),
                    _0x11ee8e(this['ge'], 0x0, this['ge']['length']),
                    this['he'] = null,
                    this['ie'] = 0x0,
                    this['ae'] = !0x1,
                    this['je'] = 0x2710;
                }
                function _0x11ee8e(_0x16bbb4, _0x56ac52, _0x20a3b7) {
                    var _0x5737c3 = _0x32c7;
                    for (var _0x2b8999 = _0x20a3b7 - 0x1; _0x2b8999 > _0x56ac52; _0x2b8999--) {
                        var _0x2df91b = _0x56ac52 + Math[_0x5737c3(0x19d)](Math['random']() * (_0x2b8999 - _0x56ac52 + 0x1))
                          , _0x37e829 = _0x16bbb4[_0x2b8999];
                        _0x16bbb4[_0x2b8999] = _0x16bbb4[_0x2df91b],
                        _0x16bbb4[_0x2df91b] = _0x37e829;
                    }
                }
                _0x10b7b0[_0x24e1a7(0x34d)]['be'] = function(_0x2082cf) {
                    _0x2082cf ? this['b']() : this['ce']();
                }
                ,
                _0x10b7b0[_0x24e1a7(0x34d)]['b'] = function() {
                    this['ae'] || (this['ae'] = !0x0,
                    this['ke'](0x5dc));
                }
                ,
                _0x10b7b0[_0x24e1a7(0x34d)]['ce'] = function() {
                    this['ae'] && (this['ae'] = !0x1,
                    null != this['he'] && this['he']['fe'](0x320, 0x32));
                }
                ,
                _0x10b7b0[_0x24e1a7(0x34d)]['ke'] = function(_0x14fba6) {
                    var _0x5b8c46 = _0x24e1a7;
                    if (this['ae']) {
                        null == this['he'] && (this['he'] = this['le']()),
                        this['he']['_d'][_0x5b8c46(0x58f)] + this['je'] / 0x3e8 > this['he']['_d'][_0x5b8c46(0x619)] && (this['he'] = this['le'](),
                        this['he']['_d'][_0x5b8c46(0x58f)] = 0x0),
                        console['log'](_0x5b8c46(0x274) + this['he']['_d'][_0x5b8c46(0x208)] + _0x5b8c46(0x177) + (0x3e8 * (this['he']['_d'][_0x5b8c46(0x619)] - this['he']['_d'][_0x5b8c46(0x58f)]) - this['je'])),
                        this['he']['de'] = 0x0,
                        this['he']['ee'](_0x14fba6, 0x64);
                        var _0xc056c2 = 0x3e8 * (this['he']['_d'][_0x5b8c46(0x619)] - this['he']['_d']['currentTime']) - this['je']
                          , _0x4ef3ec = this
                          , _0x379ad2 = setTimeout(function() {
                            _0x4ef3ec['ae'] && _0x379ad2 == _0x4ef3ec['ie'] && (_0x4ef3ec['he']['fe'](_0x4ef3ec['je'], 0x64),
                            _0x4ef3ec['he'] = _0x4ef3ec['le'](),
                            _0x4ef3ec['he']['_d']['currentTime'] = 0x0,
                            _0x4ef3ec['ke'](_0x4ef3ec['je']));
                        }, _0xc056c2);
                        this['ie'] = _0x379ad2;
                    }
                }
                ,
                _0x10b7b0[_0x24e1a7(0x34d)]['le'] = function() {
                    var _0x3892de = _0x24e1a7
                      , _0x3c5e99 = this['ge'][0x0]
                      , _0x1a369f = Math[_0x3892de(0x693)](0x1, this['ge']['length'] / 0x2);
                    return _0x11ee8e(this['ge'], _0x1a369f, this['ge']['length']),
                    this['ge'][_0x3892de(0x5d6)](this['ge']['shift']()),
                    _0x3c5e99;
                }
                ;
            }()),
            (function() {
                var _0x1583f6 = _0x566763;
                function _0x1aeade(_0x51f1de, _0x5a285d) {
                    var _0x2e4d73 = _0x32c7;
                    this['_d'] = _0x51f1de,
                    this['me'] = _0x5a285d,
                    this['de'] = 0x0,
                    _0x51f1de[_0x2e4d73(0x421)] = 0x0,
                    this['ne'] = 0x0,
                    this['oe'] = !0x1;
                }
                return _0x1aeade[_0x1583f6(0x34d)]['ee'] = function(_0x4aebfd, _0x127297) {
                    var _0x2d1c3a = _0x1583f6;
                    console[_0x2d1c3a(0x10f)]('fade\x20IN\x20' + this['_d'][_0x2d1c3a(0x208)]),
                    this['pe'](!0x0, _0x4aebfd, _0x127297);
                }
                ,
                _0x1aeade['prototype']['fe'] = function(_0xe971c3, _0x3cdbd0) {
                    var _0xbd6224 = _0x1583f6;
                    console[_0xbd6224(0x10f)](_0xbd6224(0x559) + this['_d'][_0xbd6224(0x208)]),
                    this['pe'](!0x1, _0xe971c3, _0x3cdbd0);
                }
                ,
                _0x1aeade[_0x1583f6(0x34d)]['pe'] = function(_0x4e0b58, _0x50488b, _0x10f3ad) {
                    var _0x387461 = _0x1583f6;
                    this['oe'] && clearInterval(this['ne']);
                    var _0x3257f6 = this
                      , _0x393dd9 = 0x1 / (_0x50488b / _0x10f3ad)
                      , _0x4c69d2 = setInterval(function() {
                        var _0x2da2d6 = _0x32c7;
                        if (_0x3257f6['oe'] && _0x4c69d2 != _0x3257f6['ne'])
                            return void clearInterval(_0x4c69d2);
                        _0x4e0b58 ? (_0x3257f6['de'] = Math['min'](0x1, _0x3257f6['de'] + _0x393dd9),
                        _0x3257f6['_d']['volume'] = _0x3257f6['de'] * _0x3257f6['me'],
                        _0x3257f6['de'] >= 0x1 && (_0x3257f6['oe'] = !0x1,
                        clearInterval(_0x4c69d2))) : (_0x3257f6['de'] = Math[_0x2da2d6(0x693)](0x0, _0x3257f6['de'] - _0x393dd9),
                        _0x3257f6['_d']['volume'] = _0x3257f6['de'] * _0x3257f6['me'],
                        _0x3257f6['de'] <= 0x0 && (_0x3257f6['_d'][_0x2da2d6(0x1fe)](),
                        _0x3257f6['oe'] = !0x1,
                        clearInterval(_0x4c69d2)));
                    }, _0x10f3ad);
                    this['oe'] = !0x0,
                    this['ne'] = _0x4c69d2,
                    this['_d'][_0x387461(0x54a)]();
                }
                ,
                _0x1aeade;
            }()));
            return _0x3b8633['AudioState'] = {
                'ua': {
                    'qe': !0x1,
                    're': !0x1,
                    'Ad': !0x0,
                    'xd': !0x1
                },
                'F': {
                    'qe': !0x1,
                    're': !0x0,
                    'Ad': !0x0,
                    'xd': !0x1
                },
                'H': {
                    'qe': !0x0,
                    're': !0x1,
                    'Ad': !0x1,
                    'xd': !0x0
                },
                'Ea': {
                    'qe': !0x1,
                    're': !0x1,
                    'Ad': !0x0,
                    'xd': !0x1
                },
                'qa': {
                    'qe': !0x1,
                    're': !0x1,
                    'Ad': !0x1,
                    'xd': !0x1
                }
            },
            _0x3b8633;
        }())
          , _0x47e7b1 = (function() {
            var _0x5ab96f = _0x53c3f2;
            function _0x567014(_0x4e298e) {
                var _0x14a4ec = _0x32c7;
                this['se'] = _0x4e298e,
                this['te'] = _0x4e298e[_0x14a4ec(0x6d9)]()[0x0],
                this['ue'] = new _0x55f583['ac']({
                    'view': this['te'],
                    'backgroundColor': _0xea6e67,
                    'antialias': !0x0
                }),
                this['ve'] = new _0x55f583['Zb'](),
                this['ve'][_0x14a4ec(0x43a)] = !0x0,
                this['we'] = [],
                this['xe'] = [],
                this['ye'] = [],
                this['a']();
            }
            var _0xea6e67 = 0x0
              , _0xda99c3 = function(_0x474133, _0x5d550f) {
                var _0x5c66ab = _0x32c7;
                return _0x474133 + Math[_0x5c66ab(0x197)](_0x5d550f - _0x474133);
            }
              , _0x4b4bfd = function(_0x3d3b60) {
                var _0x1a33bf = _0x32c7;
                return _0x3d3b60 >= 0x0 ? Math[_0x1a33bf(0x19a)](_0x3d3b60 % _0x25862f) : Math[_0x1a33bf(0x19a)](_0x3d3b60 % _0x25862f + _0x25862f);
            }
              , _0x713263 = function(_0x535996) {
                var _0x482ed3 = _0x32c7;
                return _0x535996 >= 0x0 ? Math[_0x482ed3(0x5fa)](_0x535996 % _0x25862f) : Math[_0x482ed3(0x5fa)](_0x535996 % _0x25862f + _0x25862f);
            }
              , _0xc0c8a9 = [{
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 0x1,
                'De': 0x2,
                'Ee': 0xff66aa
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 1.5,
                'De': 1.5,
                'Ee': 0xff8888
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 0x2,
                'De': 0x1,
                'Ee': 0xffaa66
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 0x3,
                'De': 0x2,
                'Ee': 0xaaff66
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 2.5,
                'De': 2.5,
                'Ee': 0x88ff88
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 0x2,
                'De': 0x3,
                'Ee': 0x66ffaa
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 0x5,
                'De': 0x4,
                'Ee': 0x66aaff
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 4.5,
                'De': 4.5,
                'Ee': 0x8888ff
            }, {
                'ze': _0xda99c3(0x0, _0x25862f),
                'Ae': _0xda99c3(0x0, _0x25862f),
                'Be': _0xda99c3(0.1, 0.5),
                'Ce': 0x4,
                'De': 0x5,
                'Ee': 0xaa66ff
            }];
            return _0x567014[_0x5ab96f(0x34d)]['a'] = function() {
                var _0x2c7127 = _0x5ab96f
                  , _0x39a94d = _0x242785();
                this['ue']['backgroundColor'] = _0xea6e67,
                this['we'] = new Array(_0xc0c8a9[_0x2c7127(0x484)]);
                for (var _0x27c03e = 0x0; _0x27c03e < this['we'][_0x2c7127(0x484)]; _0x27c03e++) {
                    this['we'][_0x27c03e] = new _0x55f583['ec'](),
                    this['we'][_0x27c03e][_0x2c7127(0x25d)] = _0x39a94d['q']['Fe'],
                    this['we'][_0x27c03e]['anchor'][_0x2c7127(0x172)](0.5),
                    this['we'][_0x27c03e][_0x2c7127(0x615)] = 0x1;
                }
                this['xe'] = new Array(_0x39a94d['q']['Ge'][_0x2c7127(0x484)]);
                for (var _0x3405c9 = 0x0; _0x3405c9 < this['xe'][_0x2c7127(0x484)]; _0x3405c9++) {
                    this['xe'][_0x3405c9] = new _0x55f583['ec'](),
                    this['xe'][_0x3405c9]['texture'] = _0x39a94d['q']['Ge'][_0x3405c9],
                    this['xe'][_0x3405c9]['anchor']['set'](0.5),
                    this['xe'][_0x3405c9][_0x2c7127(0x615)] = 0x2,
                    this['ve'][_0x2c7127(0x6f8)](this['xe'][_0x3405c9]);
                }
                this['ye'] = new Array(this['xe']['length']);
                for (var _0x1d1f03 = 0x0; _0x1d1f03 < this['ye']['length']; _0x1d1f03++) {
                    this['ye'][_0x1d1f03] = {
                        'He': Math[_0x2c7127(0x197)](),
                        'Ie': Math[_0x2c7127(0x197)](),
                        'Je': Math[_0x2c7127(0x197)](),
                        'Ke': Math[_0x2c7127(0x197)]()
                    };
                }
                this['Ra']();
            }
            ,
            _0x567014['sc'] = !0x1,
            _0x567014['Le'] = function(_0x77d39) {
                _0x567014['sc'] = _0x77d39;
            }
            ,
            _0x567014[_0x5ab96f(0x34d)]['Ra'] = function() {
                var _0x511c9f = _0x5ab96f
                  , _0x52aff2 = window[_0x511c9f(0x3ca)] ? window[_0x511c9f(0x3ca)] : 0x1
                  , _0x2385fd = this['se']['width']()
                  , _0x414d3f = this['se'][_0x511c9f(0x392)]();
                this['ue'][_0x511c9f(0x5cc)](_0x2385fd, _0x414d3f),
                this['ue']['resolution'] = _0x52aff2,
                this['te'][_0x511c9f(0x5ea)] = _0x52aff2 * _0x2385fd,
                this['te']['height'] = _0x52aff2 * _0x414d3f;
                for (var _0x2d1db1 = 0.8 * Math[_0x511c9f(0x693)](_0x2385fd, _0x414d3f), _0x46d01e = 0x0; _0x46d01e < this['we']['length']; _0x46d01e++)
                    this['we'][_0x46d01e][_0x511c9f(0x5ea)] = _0x2d1db1,
                    this['we'][_0x46d01e][_0x511c9f(0x392)] = _0x2d1db1;
            }
            ,
            _0x567014['prototype']['Pa'] = function(_0x1820ba, _0x302653) {
                var _0x390fcf = _0x5ab96f;
                if (_0x567014['sc']) {
                    for (var _0x9829ad = _0x1820ba / 0x3e8, _0x23e4bf = _0x302653 / 0x3e8, _0x2bab21 = this['se'][_0x390fcf(0x5ea)](), _0x1a4815 = this['se']['height'](), _0x4ee2b8 = 0x0; _0x4ee2b8 < this['we'][_0x390fcf(0x484)]; _0x4ee2b8++) {
                        var _0x2f48b1 = _0xc0c8a9[_0x4ee2b8 % _0xc0c8a9[_0x390fcf(0x484)]]
                          , _0x1d91ba = this['we'][_0x4ee2b8]
                          , _0x5bcda8 = _0x4b4bfd(_0x2f48b1['Ce'] * (0.08 * _0x9829ad) + _0x2f48b1['Ae'])
                          , _0x48effe = _0x713263(_0x2f48b1['De'] * (0.08 * _0x9829ad))
                          , _0x27aa02 = 0.2 + 0.2 * _0x4b4bfd(_0x2f48b1['Ae'] + _0x2f48b1['Be'] * _0x9829ad);
                        _0x1d91ba[_0x390fcf(0x641)] = _0x2f48b1['Ee'],
                        _0x1d91ba[_0x390fcf(0x66b)] = _0x27aa02,
                        _0x1d91ba['position'][_0x390fcf(0x172)](_0x2bab21 * (0.2 + 0.5 * (_0x5bcda8 + 0x1) * 0.6), _0x1a4815 * (0.1 + 0.5 * (_0x48effe + 0x1) * 0.8));
                    }
                    for (var _0x18d302 = 0.05 * Math[_0x390fcf(0x693)](_0x2bab21, _0x1a4815), _0x2c175c = 0x0; _0x2c175c < this['xe'][_0x390fcf(0x484)]; _0x2c175c++) {
                        var _0x63731f = this['ye'][_0x2c175c]
                          , _0x3a0ddf = this['xe'][_0x2c175c]
                          , _0x45398d = _0x25862f * _0x2c175c / this['xe'][_0x390fcf(0x484)] + _0x63731f['He'];
                        _0x63731f['Ke'] += _0x63731f['Ie'] * _0x23e4bf,
                        _0x63731f['Ke'] > 1.3 && (_0x63731f['He'] = Math[_0x390fcf(0x197)]() * _0x25862f,
                        _0x63731f['Ie'] = 0.66 * (0.09 + 0.07 * Math[_0x390fcf(0x197)]()),
                        _0x63731f['Je'] = 0.15 + 0.7 * Math[_0x390fcf(0x197)](),
                        _0x63731f['Ke'] = -0.3);
                        var _0x30ae9b = _0x63731f['Je'] + 0.03 * Math[_0x390fcf(0x5fa)](0x6 * Math[_0x390fcf(0x5fa)](_0x45398d + 0.48 * _0x9829ad))
                          , _0x3526ed = _0x63731f['Ke']
                          , _0x309908 = _0x4e116c(Math[_0x390fcf(0x5fa)](Math['PI'] * _0x3526ed), 0.1, 0x1)
                          , _0x535bf2 = 0.5 * (0.4 + 0.5 * (0x1 + Math['sin'](_0x45398d + 0.12 * _0x9829ad)) * 1.2)
                          , _0x796019 = _0x45398d + 0x2 * _0x63731f['Ie'] * _0x9829ad;
                        _0x3a0ddf['alpha'] = _0x309908,
                        _0x3a0ddf['position'][_0x390fcf(0x172)](_0x2bab21 * _0x30ae9b, _0x1a4815 * _0x3526ed),
                        _0x3a0ddf['rotation'] = _0x796019;
                        var _0x502dd5 = _0x3a0ddf[_0x390fcf(0x25d)][_0x390fcf(0x5ea)] / _0x3a0ddf[_0x390fcf(0x25d)][_0x390fcf(0x392)];
                        _0x3a0ddf[_0x390fcf(0x5ea)] = _0x535bf2 * _0x18d302,
                        _0x3a0ddf[_0x390fcf(0x392)] = _0x535bf2 * _0x18d302 * _0x502dd5;
                    }
                    this['ue'][_0x390fcf(0x476)](this['ve'], null, !0x0);
                }
            }
            ,
            _0x567014;
        }())
          , _0x2ff145 = (function() {
            var _0xc51c77 = _0x53c3f2;
            function _0x13b842() {}
            return _0x13b842['Na'] = _0xc51c77(0x5fe),
            _0x13b842['ya'] = _0xc51c77(0x3db),
            _0x13b842['Me'] = _0xc51c77(0x581),
            _0x13b842['Ne'] = 'sfxEnabled',
            _0x13b842['Oe'] = _0xc51c77(0x22d),
            _0x13b842['va'] = _0xc51c77(0x1ac),
            _0x13b842['Aa'] = 'nickname',
            _0x13b842['Ba'] = _0xc51c77(0x369),
            _0x13b842['d'] = _0xc51c77(0x2ca),
            _0x13b842['La'] = _0xc51c77(0x3d5),
            _0x13b842;
        }())
          , _0x21d188 = (function() {
            function _0x3d2a45(_0x122351, _0x4aac42, _0x11fb64) {
                var _0x5c99e2 = _0x32c7;
                for (var _0x44eed4 = !0x1, _0x4fa5be = _0x11fb64[_0x5c99e2(0x484)], _0x1fa06e = 0x0, _0x2fd98c = _0x4fa5be - 0x1; _0x1fa06e < _0x4fa5be; _0x2fd98c = _0x1fa06e++)
                    _0x11fb64[_0x1fa06e][0x1] > _0x4aac42 != _0x11fb64[_0x2fd98c][0x1] > _0x4aac42 && _0x122351 < (_0x11fb64[_0x2fd98c][0x0] - _0x11fb64[_0x1fa06e][0x0]) * (_0x4aac42 - _0x11fb64[_0x1fa06e][0x1]) / (_0x11fb64[_0x2fd98c][0x1] - _0x11fb64[_0x1fa06e][0x1]) + _0x11fb64[_0x1fa06e][0x0] && (_0x44eed4 = !_0x44eed4);
                return _0x44eed4;
            }
            var _0x346d06 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
                'Oa': function(_0x404bfa, _0x9fcd1f) {
                    return _0x3d2a45(_0x9fcd1f, _0x404bfa, _0x346d06);
                }
            };
        }())
          , _0x537ff9 = (function() {
            var _0x2134b9 = _0x53c3f2;
            function _0x4435b4(_0x4d4f4d) {
                var _0x428141 = _0x32c7
                  , _0xd61946 = void 0x0;
                _0xd61946 = _0x4d4f4d > 0x0 ? '+' + Math[_0x428141(0x19d)](_0x4d4f4d) : _0x4d4f4d < 0x0 ? '-' + Math[_0x428141(0x19d)](_0x4d4f4d) : '0';
                var _0x2660ec = Math[_0x428141(0x4ee)](1.5, 0.5 + _0x4d4f4d / 0x258)
                  , _0x3487d7 = void 0x0;
                if (_0x4d4f4d < 0x1)
                    _0x3487d7 = _0x428141(0x651);
                else {
                    if (_0x4d4f4d < 0x1e) {
                        var _0x1113bf = (_0x4d4f4d - 0x1) / 0x1d;
                        _0x3487d7 = _0x1b4882(0x1 * (0x1 - _0x1113bf) + 0.96 * _0x1113bf, 0x1 * (0x1 - _0x1113bf) + 0.82 * _0x1113bf, 0x1 * (0x1 - _0x1113bf) + 0x0 * _0x1113bf);
                    } else {
                        if (_0x4d4f4d < 0x12c) {
                            var _0xe0e042 = (_0x4d4f4d - 0x1e) / 0x10e;
                            _0x3487d7 = _0x1b4882(0.96 * (0x1 - _0xe0e042) + 0.93 * _0xe0e042, 0.82 * (0x1 - _0xe0e042) + 0.34 * _0xe0e042, 0x0 * (0x1 - _0xe0e042) + 0.25 * _0xe0e042);
                        } else {
                            if (_0x4d4f4d < 0x2bc) {
                                var _0x36c134 = (_0x4d4f4d - 0x12c) / 0x190;
                                _0x3487d7 = _0x1b4882(0.93 * (0x1 - _0x36c134) + 0.98 * _0x36c134, 0.34 * (0x1 - _0x36c134) + 0x0 * _0x36c134, 0.25 * (0x1 - _0x36c134) + 0.98 * _0x36c134);
                            } else
                                _0x3487d7 = _0x1b4882(0.98, 0x0, 0.98);
                        }
                    }
                }
                var _0x5c833b = Math[_0x428141(0x197)]()
                  , _0x9d765f = 0x1 + 0.5 * Math[_0x428141(0x197)]();
                return new _0x14dc39(_0xd61946,_0x3487d7,!![],0.5,_0x2660ec,_0x5c833b,_0x9d765f);
            }
            function _0x35ca9e(_0x1ec646, _0x3ff9af) {
                var _0x146ecf = void 0x0
                  , _0x476ce6 = void 0x0;
                return _0x3ff9af ? (_0x146ecf = 1.3,
                _0x476ce6 = _0x1b4882(0.93, 0.34, 0.25)) : (_0x146ecf = 1.1,
                _0x476ce6 = _0x1b4882(0.96, 0.82, 0x0)),
                new _0x14dc39(_0x1ec646,_0x476ce6,!![],0.5,_0x146ecf,0.5,0.7);
            }
            function _0x1b4882(_0x32b4c6, _0x34caa1, _0xa842e5) {
                return ((0xff * _0x32b4c6 & 0xff) << 0x10) + ((0xff * _0x34caa1 & 0xff) << 0x8) + (0xff * _0xa842e5 & 0xff);
            }
            var _0x45ff58 = _0xaa2971(_0x55f583['Zb'], function() {
                var _0x5497c0 = _0x32c7;
                _0x55f583['Zb'][_0x5497c0(0x67d)](this),
                this['Pe'] = [],
                this['Qe'] = 0x0;
            });
            _0x45ff58[_0x2134b9(0x34d)]['Re'] = function(_0x568e0b) {
                var _0x53cb7a = _0x2134b9;
                if (this['Qe'] += _0x568e0b,
                this['Qe'] >= 0x1) {
                    var _0x278add = Math[_0x53cb7a(0x19d)](this['Qe']);
                    this['Qe'] -= _0x278add;
                    var _0x2290cb = _0x4435b4(_0x278add);
                    this[_0x53cb7a(0x6f8)](_0x2290cb),
                    this['Pe'][_0x53cb7a(0x5d6)](_0x2290cb);
                }
            }
            ,
            _0x45ff58[_0x2134b9(0x34d)]['Se'] = function(_0x328d21) {
                var _0x3efe99 = _0x2134b9;
                if (_0x328d21) {
                    zw_hscount += 0x1,
                    zwormData['hs'] = zw_hscount;
                    !(zw_hscount % 0xa) ? soundEnabled && zw_laughsound[_0x3efe99(0x54a)]() : soundEnabled && zw_hssound[_0x3efe99(0x54a)]();
                    var _0x45cbab = _0x35ca9e(zwormData[_0x3efe99(0x251)][_0x3efe99(0x493)](0x0, 0x10) + '-☠️-' + zwormData['enemyNameHs'][_0x3efe99(0x493)](0x0, 0x10), !![]);
                    this[_0x3efe99(0x6f8)](_0x45cbab),
                    this['Pe'][_0x3efe99(0x5d6)](_0x45cbab);
                } else {
                    zw_killcount += 0x1;
                    var _0x45cbab = _0x35ca9e(_0x817213(_0x3efe99(0x6e7)) + '✨', ![]);
                    this[_0x3efe99(0x6f8)](_0x45cbab),
                    this['Pe']['push'](_0x45cbab);
                }
            }
            ,
            _0x45ff58[_0x2134b9(0x34d)]['Te'] = function(_0xd8072a, _0x2966da) {
                var _0xbb7eb3 = _0x2134b9
                  , _0x31e2ab = _0x242785()['s']['H']['wb']
                  , _0x119415 = _0x31e2ab['ue'][_0xbb7eb3(0x5ea)] / _0x31e2ab['ue'][_0xbb7eb3(0x2c1)]
                  , _0x1f769a = _0x31e2ab['ue'][_0xbb7eb3(0x392)] / _0x31e2ab['ue'][_0xbb7eb3(0x2c1)]
                  , _0x45cbef = 0x0;
                for (; _0x45cbef < this['Pe']['length']; ) {
                    var _0x2904da = this['Pe'][_0x45cbef];
                    _0x2904da['Ue'] = _0x2904da['Ue'] + _0x2966da / 0x7d0 * _0x2904da['Ve'],
                    _0x2904da['We'] = _0x2904da['We'] + _0x2966da / 0x7d0 * _0x2904da['Xe'],
                    _0x2904da['alpha'] = 0.5 * Math[_0xbb7eb3(0x5fa)](Math['PI'] * _0x2904da['We']),
                    _0x2904da[_0xbb7eb3(0x12e)][_0xbb7eb3(0x172)](_0x2904da['Ue']),
                    _0x2904da['position']['x'] = _0x119415 * (0.25 + 0.5 * _0x2904da['Ye']),
                    _0x2904da[_0xbb7eb3(0x23e)]['y'] = _0x2904da['Ze'] ? _0x1f769a * (0x1 - 0.5 * (0x1 + _0x2904da['We'])) : _0x1f769a * (0x1 - 0.5 * (0x0 + _0x2904da['We'])),
                    _0x2904da['We'] > 0x1 && (_0x27d3f0(_0x2904da),
                    this['Pe'][_0xbb7eb3(0x4b3)](_0x45cbef, 0x1),
                    _0x45cbef--),
                    _0x45cbef++;
                }
            }
            ;
            var _0x14dc39 = (function() {
                return _0xaa2971(_0x55f583['fc'], function(_0x5d853c, _0x393d76, _0x2117de, _0x7d1bcc, _0x57ac3d, _0x74b143, _0x35df5b) {
                    var _0x431dcf = _0x32c7;
                    _0x55f583['fc'][_0x431dcf(0x67d)](this, _0x5d853c, {
                        'fill': _0x393d76,
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0x24
                    }),
                    this['anchor'][_0x431dcf(0x172)](0.5),
                    this['Ze'] = _0x2117de,
                    this['Ue'] = _0x7d1bcc,
                    this['Ve'] = _0x57ac3d,
                    this['Ye'] = _0x74b143,
                    this['We'] = 0x0,
                    this['Xe'] = _0x35df5b;
                });
            }());
            return _0x45ff58;
        }())
          , _0x492163 = (function() {
            function _0x3e3b3c(_0x1ed0b7, _0x32aa2a) {
                this['Gc'] = _0x1ed0b7,
                this['Hc'] = _0x32aa2a;
            }
            return _0x3e3b3c;
        }())
          , _0x283aa5 = {
            '$e': 0x0,
            '_e': 0x10
        }
          , _0x5e7405 = (function() {
            var _0x161fbe = _0x53c3f2;
            function _0x2041b2() {
                this['af'] = _0x283aa5['$e'],
                this['bf'] = 0x0,
                this['ub'] = 0x1f4,
                this['cf'] = 0xfa0,
                this['df'] = 0x1b58;
            }
            return _0x2041b2[_0x161fbe(0x534)] = 0x0,
            _0x2041b2[_0x161fbe(0x34d)]['ef'] = function() {
                return 1.02 * this['ub'];
            }
            ,
            _0x2041b2;
        }())
          , _0x3f0eb9 = (function() {
            var _0x1b985d = _0x53c3f2;
            function _0x289c82(_0x441138) {
                var _0x3fe62d = _0x32c7;
                this['se'] = _0x441138,
                this['te'] = _0x441138['get']()[0x0],
                this['ue'] = new _0x55f583['ac']({
                    'view': this['te'],
                    'backgroundColor': _0x13a457,
                    'antialias': !![]
                }),
                this['ve'] = new _0x55f583['Zb'](),
                this['ve'][_0x3fe62d(0x43a)] = !![],
                this['ve'][_0x3fe62d(0x41c)] = !![],
                this['ve']['interactiveChildren'] = !![],
                this['ff'] = Math[_0x3fe62d(0x19d)](0x168 * Math['random']()),
                this['gf'] = 0x0,
                this['hf'] = 0x0,
                this['if'] = 0xf,
                this['jf'] = 0.5,
                this['kf'] = 0x0,
                this['lf'] = new _0x3dd22e(),
                this['mf'] = new _0x55f583['bc'](),
                this['nf'] = new _0x55f583['Zb'](),
                this['pf'] = new _0x55f583['Zb'](),
                this['pf'][_0x3fe62d(0x43a)] = !![],
                this['qf'] = new _0x55f583['Zb'](),
                this['rf'] = new _0x55f583['Zb'](),
                this['rf'][_0x3fe62d(0x43a)] = !![],
                this['sf'] = new _0x55f583['Zb'](),
                this['tf'] = new _0x4a0295(),
                this['uf'] = new _0x7d8f44(),
                this['vf'] = new _0x14d5a0(),
                this['wf'] = new _0x537ff9(),
                this['xf'] = new _0x55f583['ec'](),
                this['yf'] = {
                    'x': 0x0,
                    'y': 0x0
                },
                this['a']();
            }
            var _0x13a457 = 0x0;
            _0x289c82[_0x1b985d(0x34d)]['a'] = function() {
                var _0x4dfb09 = _0x1b985d;
                zw_joysticks = [],
                zw_joystick = -0x1,
                zw_servertext = new _0x55f583['fc']('',{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xc,
                    'fill': _0x4dfb09(0x209),
                    'align': _0x4dfb09(0x291)
                }),
                zw_servertext['x'] = 0x19,
                zw_serverping = new _0x55f583['fc']('',{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xc,
                    'fill': _0x4dfb09(0x209),
                    'align': _0x4dfb09(0x291)
                }),
                zw_serverping['x'] = 0x55,
                zw_serverfps = new _0x55f583['fc']('',{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xc,
                    'fill': _0x4dfb09(0x209),
                    'align': _0x4dfb09(0x291)
                }),
                zw_serverfps['x'] = 0x82;
                if (zw_mobilecheck()) {
                    zw_joysticks[0x0] = new Joystick({
                        'onChange': _0x41eaea => {
                            var _0x42022 = _0x4dfb09;
                            _0x41eaea['aradian'] = _0x41eaea[_0x42022(0x554)] * (Math['PI'] / 0xb4),
                            anApp['s']['H']['sk'] = _0x41eaea[_0x42022(0x5b0)] <= Math['PI'] ? -0x1 * _0x41eaea[_0x42022(0x5b0)] : Math['PI'] - (_0x41eaea[_0x42022(0x5b0)] - Math['PI']);
                        }
                    }),
                    zw_joysticks[0x0][_0x4dfb09(0x654)] = ![],
                    zw_joysticks[0x1] = new Joystick({
                        'outer': _0x55f583['ec']['from']('https://i.imgur.com/UKIZZmr.png'),
                        'inner': _0x55f583['ec']['from'](_0x4dfb09(0x45d)),
                        'onChange': _0x182f2e => {
                            var _0x48bedc = _0x4dfb09;
                            _0x182f2e[_0x48bedc(0x5b0)] = _0x182f2e[_0x48bedc(0x554)] * (Math['PI'] / 0xb4),
                            anApp['s']['H']['sk'] = _0x182f2e[_0x48bedc(0x5b0)] <= Math['PI'] ? -0x1 * _0x182f2e['aradian'] : Math['PI'] - (_0x182f2e[_0x48bedc(0x5b0)] - Math['PI']);
                        }
                    }),
                    zw_joysticks[0x1][_0x4dfb09(0x654)] = ![],
                    zw_joysticks[0x2] = new Joystick({
                        'outer': _0x55f583['ec'][_0x4dfb09(0x34f)](_0x4dfb09(0x3f6)),
                        'inner': _0x55f583['ec'][_0x4dfb09(0x34f)](_0x4dfb09(0x697)),
                        'onChange': _0xc696cf => {
                            var _0x5a32f1 = _0x4dfb09;
                            _0xc696cf[_0x5a32f1(0x5b0)] = _0xc696cf[_0x5a32f1(0x554)] * (Math['PI'] / 0xb4),
                            anApp['s']['H']['sk'] = _0xc696cf[_0x5a32f1(0x5b0)] <= Math['PI'] ? -0x1 * _0xc696cf[_0x5a32f1(0x5b0)] : Math['PI'] - (_0xc696cf['aradian'] - Math['PI']);
                        }
                    }),
                    zw_joysticks[0x2][_0x4dfb09(0x654)] = ![];
                    for (let _0x91afb5 = 0x0; _0x91afb5 < zw_joysticks['length']; _0x91afb5++) {
                        this['rf'][_0x4dfb09(0x6f8)](zw_joysticks[_0x91afb5]);
                    }
                }
                zw_zoomtext = new _0x55f583['fc']('',{
                    'align': _0x4dfb09(0x291),
                    'fill': _0x4dfb09(0x2f6),
                    'fontSize': 0xc,
                    'lineJoin': _0x4dfb09(0x1ae),
                    'whiteSpace': _0x4dfb09(0x31e),
                    'wordWrap': !![],
                    'fontWeight': 'bold'
                }),
                zw_zoomtext['x'] = 0x64,
                zw_zoomtext['y'] = 0x5a,
                this['rf']['addChild'](zw_zoomtext),
                this['ue'][_0x4dfb09(0x68a)] = _0x13a457,
                this['lf']['zf'][_0x4dfb09(0x615)] = 0xa,
                this['ve'][_0x4dfb09(0x6f8)](this['lf']['zf']),
                zw_Background = new _0x55f583['bc'](),
                zw_Background['zIndex'] = 0x14,
                this['ve']['addChild'](zw_Background),
                ctxHeadshotLine = new _0x55f583['bc'](),
                ctxHeadshotLine[_0x4dfb09(0x615)] = 0x14,
                this['ve'][_0x4dfb09(0x6f8)](ctxHeadshotLine),
                this['mf'][_0x4dfb09(0x615)] = 0x14,
                this['ve']['addChild'](this['mf']),
                this['nf'][_0x4dfb09(0x615)] = 0x1388,
                this['ve'][_0x4dfb09(0x6f8)](this['nf']),
                this['pf'][_0x4dfb09(0x615)] = 0x13ec,
                this['ve'][_0x4dfb09(0x6f8)](this['pf']),
                this['qf'][_0x4dfb09(0x615)] = 0x2710,
                this['ve'][_0x4dfb09(0x6f8)](this['qf']),
                this['xf'][_0x4dfb09(0x25d)] = _0x242785()['q']['Af'],
                this['xf'][_0x4dfb09(0x432)][_0x4dfb09(0x172)](0.5),
                this['xf'][_0x4dfb09(0x615)] = 0x1,
                this['rf'][_0x4dfb09(0x6f8)](this['xf']),
                this['sf'][_0x4dfb09(0x66b)] = 0.6,
                this['sf'][_0x4dfb09(0x615)] = 0x2,
                this['rf'][_0x4dfb09(0x6f8)](this['sf']),
                this['wf'][_0x4dfb09(0x615)] = 0x3,
                this['rf']['addChild'](this['wf']),
                this['tf']['alpha'] = 0.8,
                this['tf'][_0x4dfb09(0x615)] = 0x4,
                this['rf']['addChild'](this['tf']),
                this['uf'][_0x4dfb09(0x615)] = 0x5,
                this['rf'][_0x4dfb09(0x6f8)](this['uf']),
                this['vf'][_0x4dfb09(0x615)] = 0x6,
                this['rf']['addChild'](this['vf']),
                this['Ra']();
            }
            ,
            _0x289c82['prototype']['Ra'] = function() {
                var _0x31322e = _0x1b985d
                  , _0x34211a = window[_0x31322e(0x3ca)] ? window['devicePixelRatio'] : 0x1
                  , _0x593848 = this['se']['width']()
                  , _0x55c007 = this['se']['height']();
                this['ue'][_0x31322e(0x5cc)](_0x593848, _0x55c007),
                this['ue']['resolution'] = _0x34211a,
                this['te']['width'] = _0x34211a * _0x593848,
                this['te'][_0x31322e(0x392)] = _0x34211a * _0x55c007,
                this['jf'] = Math[_0x31322e(0x4ee)](Math['min'](_0x593848, _0x55c007), 0.625 * Math[_0x31322e(0x693)](_0x593848, _0x55c007)),
                this['xf'][_0x31322e(0x23e)]['x'] = _0x593848 / 0x2,
                this['xf'][_0x31322e(0x23e)]['y'] = _0x55c007 / 0x2,
                this['xf'][_0x31322e(0x5ea)] = _0x593848,
                this['xf']['height'] = _0x55c007,
                this['tf'][_0x31322e(0x23e)]['x'] = 0x3c,
                this['tf'][_0x31322e(0x23e)]['y'] = 0x3c,
                this['uf'][_0x31322e(0x23e)]['x'] = 0x6e,
                this['uf'][_0x31322e(0x23e)]['y'] = 0xa,
                this['vf'][_0x31322e(0x23e)]['x'] = _0x593848 - 0xe1,
                this['vf'][_0x31322e(0x23e)]['y'] = 0x1,
                this['tf']['addChild'](ctx[_0x31322e(0x6bf)]),
                this['tf'][_0x31322e(0x6f8)](ctx['teamsContainer']),
                theoKzObjects[_0x31322e(0x749)] ? this['tf'][_0x31322e(0x6f8)](zw_TopHS_RecordHs) : _0x27d3f0(zw_TopHS_RecordHs),
                theoKzObjects[_0x31322e(0x30f)] ? this['tf']['addChild'](ctx[_0x31322e(0x6ae)]) : _0x27d3f0(ctx[_0x31322e(0x6ae)]);
            }
            ,
            _0x289c82[_0x1b985d(0x34d)]['Te'] = function(_0x21d5b0, _0x25df88) {
                var _0x555fe4 = _0x1b985d
                  , _0x3f4f26 = _0x242785();
                this['if'] = 0xf,
                this['nf'][_0x555fe4(0x4bf)](),
                this['pf'][_0x555fe4(0x4bf)](),
                this['qf']['removeChildren'](),
                this['sf'][_0x555fe4(0x4bf)](),
                this['lf']['Bf'](_0x21d5b0['af'] == _0x283aa5['$e'] ? _0x3f4f26['q']['Cf'] : _0x3f4f26['q']['Df']),
                theoKzObjects && theoKzObjects[_0x555fe4(0x169)] || theoKzObjects[_0x555fe4(0x367)] ? setSectorsGame() : (zw_Background[_0x555fe4(0x4bf)](),
                zw_Background[_0x555fe4(0x210)](),
                zw_Background[_0x555fe4(0x12d)](0x1, 0xff0000, 0x1),
                zw_Background[_0x555fe4(0x411)](0x0, 0x0, 0x1f4),
                zw_Background['endFill']()),
                this['vf']['Ef'] = _0x25df88,
                this['sf'][_0x555fe4(0x654)] = _0x25df88;
            }
            ,
            _0x289c82[_0x1b985d(0x34d)]['Pa'] = function(_0x51a1c6, _0x333d1c) {
                var _0x229900 = _0x1b985d;
                if (this['ue'][_0x229900(0x5ea)] <= 0x5)
                    return;
                const _0x3cd821 = _0x242785()
                  , _0x5e9bc3 = _0x3cd821['o']['N']
                  , _0x45c4e5 = this['ue'][_0x229900(0x5ea)] / this['ue'][_0x229900(0x2c1)]
                  , _0x225a67 = this['ue'][_0x229900(0x392)] / this['ue'][_0x229900(0x2c1)];
                this['if'] = _0x2e7269(this['if'], _0x3cd821['o']['jb'], _0x333d1c, 0.002);
                const _0x572afa = this['if'] * zw_multiplier
                  , _0x512399 = this['jf'] / _0x572afa
                  , _0x13e789 = _0x5e9bc3['Ff'][_0x5bdf7a[_0x229900(0x5fd)]]
                  , _0x31291e = _0x13e789 && _0x13e789['sc'];
                this['kf'] = _0x237658(0x0, 0x1, this['kf'] + _0x333d1c / 0x3e8 * (0.1 * (_0x31291e ? 0x1 : 0x0) - this['kf'])),
                this['xf'][_0x229900(0x66b)] = this['kf'],
                this['ff'] = (this['ff'] + 0.01 * _0x333d1c) % 0x168,
                this['gf'] = Math['sin'](_0x51a1c6 / 0x4b0 * 0x2 * Math['PI']);
                const _0x335c56 = _0x5e9bc3['Gf']();
                this['yf']['x'] = _0x3bf98e(this['yf']['x'], _0x335c56['x'], _0x333d1c, theoKzObjects[_0x229900(0x182)], 33.333),
                this['yf']['y'] = _0x3bf98e(this['yf']['y'], _0x335c56['y'], _0x333d1c, 0.5, 33.333);
                const _0x8677c5 = _0x45c4e5 / (0x2 * _0x512399)
                  , _0x138679 = _0x225a67 / (0x2 * _0x512399);
                _0x3cd821['o']['yb'](this['yf']['x'] - 1.3 * _0x8677c5, this['yf']['x'] + 1.3 * _0x8677c5, this['yf']['y'] - 1.3 * _0x138679, this['yf']['y'] + 1.3 * _0x138679),
                this['lf']['Te'](this['yf']['x'], this['yf']['y'], 0x2 * _0x8677c5, 0x2 * _0x138679);
                const _0x674202 = _0x3cd821['o']['fb']['ub'];
                this['ve'][_0x229900(0x12e)][_0x229900(0x172)](_0x512399),
                this['ve']['position'][_0x229900(0x172)](_0x45c4e5 / 0x2 - this['yf']['x'] * _0x512399, _0x225a67 / 0x2 - this['yf']['y'] * _0x512399);
                theoKzObjects[_0x229900(0x362)] && (window[_0x229900(0x38b)] = {
                    'playerX': this['tf']['Jf'][_0x229900(0x23e)]['x'],
                    'playerY': this['tf']['Jf']['position']['y']
                });
                zwormData[_0x229900(0x550)] = this['tf']['Jf'][_0x229900(0x23e)]['x'],
                zwormData[_0x229900(0xcf)] = this['tf']['Jf']['position']['y'];
                theoKzObjects[_0x229900(0xfe)] ? (ctxHeadshotLine['clear'](),
                ctxHeadshotLine[_0x229900(0x12d)](0.1, '0x' + theoObjects[_0x229900(0x1f9)], 0x1),
                ctxHeadshotLine[_0x229900(0x398)](_0x335c56['x'], _0x335c56['y']),
                ctxHeadshotLine[_0x229900(0x1a8)](0x0, 0x0),
                ctxHeadshotLine[_0x229900(0x308)]()) : ctxHeadshotLine[_0x229900(0x210)]();
                const _0x476ffc = Math[_0x229900(0x70a)](_0x335c56['x'], _0x335c56['y']);
                if (_0x476ffc > _0x674202 - 0xa) {
                    this['hf'] = _0x237658(0x0, 0x1, 0x1 + (_0x476ffc - _0x674202) / 0xa);
                    const _0x2747e2 = this['ff'] * 0x2 * Math['PI'] / 0x168
                      , _0x151902 = Math['cos'](_0x2747e2)
                      , _0x39e774 = Math[_0x229900(0x5fa)](_0x2747e2)
                      , _0x3d121d = _0x151902 * (0x1 - this['hf']) + 0x1 * this['hf']
                      , _0x32b761 = _0x39e774 * (0x1 - this['hf'])
                      , _0x5dca1d = (Math[_0x229900(0x67c)](_0x32b761, _0x3d121d) + 0x2 * Math['PI']) % (0x2 * Math['PI']) * (0x168 / (0x2 * Math['PI']))
                      , _0x51cf03 = this['hf'] * (0.5 + 0.5 * this['gf'])
                      , _0x308fdb = _0x1c9266(Math[_0x229900(0x19d)](_0x5dca1d), 0x1, 0.75 - 0.25 * this['hf']);
                    this['lf']['Hf'](_0x308fdb[0x0], _0x308fdb[0x1], _0x308fdb[0x2], 0.1 + 0.2 * _0x51cf03);
                } else {
                    this['hf'] = 0x0;
                    const _0xa72339 = _0x1c9266(Math[_0x229900(0x19d)](this['ff']), 0x1, 0.75);
                    this['lf']['Hf'](_0xa72339[0x0], _0xa72339[0x1], _0xa72339[0x2], 0.1);
                }
                for (let _0x561f2b = 0x0; _0x561f2b < this['sf'][_0x229900(0x47c)][_0x229900(0x484)]; _0x561f2b++) {
                    const _0x3686e6 = this['sf'][_0x229900(0x47c)][_0x561f2b];
                    _0x3686e6['If'] && (_0x3686e6[_0x229900(0x23e)]['x'] = _0x45c4e5 / 0x2 - (this['yf']['x'] - _0x3686e6['If']['x']) * _0x512399,
                    _0x3686e6['position']['y'] = _0x225a67 / 0x2 - (this['yf']['y'] - _0x3686e6['If']['y']) * _0x512399);
                }
                this['tf']['Jf'][_0x229900(0x23e)]['x'] = _0x335c56['x'] / _0x674202 * this['tf']['Kf'],
                this['tf']['Jf'][_0x229900(0x23e)]['y'] = _0x335c56['y'] / _0x674202 * this['tf']['Kf'],
                this['tf'][_0x229900(0x629)][_0x229900(0x23e)]['x'] = -0x19 - this['tf'][_0x229900(0x629)][_0x229900(0x5ea)] / 0x2,
                this['tf'][_0x229900(0x629)][_0x229900(0x2db)] = parseInt(zw_hscount),
                this['tf']['WLp'][_0x229900(0x4e4)]['fill'] = '0x' + theoObjects[_0x229900(0x614)],
                this['tf'][_0x229900(0x72f)][_0x229900(0x23e)]['x'] = 0x19 - this['tf'][_0x229900(0x72f)]['width'] / 0x2,
                this['tf'][_0x229900(0x72f)][_0x229900(0x2db)] = parseInt(zw_killcount),
                this['tf']['MLb'][_0x229900(0x4e4)][_0x229900(0x537)] = '0x' + theoObjects[_0x229900(0x5c1)],
                this['uf']['Qa'](_0x51a1c6),
                this['wf']['Te'](_0x51a1c6, _0x333d1c),
                this['ue'][_0x229900(0x476)](this['ve'], null, !![]),
                this['ue']['render'](this['rf'], null, ![]);
                const _0x47423d = performance[_0x229900(0x39e)]()
                  , _0x1c2d75 = _0x47423d - lastFrameTime;
                lastFrameTime = _0x47423d;
                const _0x47eeaf = 0x3e8 / _0x1c2d75;
                frameTimes[_0x229900(0x5d6)](_0x47eeaf);
                if (frameTimes[_0x229900(0x484)] > 0x14)
                    frameTimes[_0x229900(0x479)]();
                const _0x184225 = Math[_0x229900(0x1ae)](frameTimes['reduce']( (_0x53e9d2, _0x10d16e) => _0x53e9d2 + _0x10d16e, 0x0) / frameTimes[_0x229900(0x484)]);
                zw_serverfps[_0x229900(0x2db)] = _0x184225 + '\x20FPS',
                zw_serverfps[_0x229900(0x4e4)][_0x229900(0x537)] = getFPSColor(_0x184225),
                hstext[_0x229900(0x4e4)][_0x229900(0x537)] = '0x' + theoObjects[_0x229900(0x614)],
                killtext['style'][_0x229900(0x537)] = '0x' + theoObjects[_0x229900(0x5c1)],
                circle[_0x229900(0x641)] = '0x' + theoObjects[_0x229900(0x568)];
            }
            ,
            _0x289c82[_0x1b985d(0x34d)]['Lf'] = function(_0x1f00ac, _0x5c3625) {
                var _0x2af2ad = _0x1b985d;
                _0x5c3625['Of']['Nf']['Mf']()[_0x2af2ad(0x615)] = (_0x1f00ac + 0x80000000) / 0x100000000 * 0x1388,
                this['nf'][_0x2af2ad(0x6f8)](_0x5c3625['Of']['Pf']['Mf']()),
                this['pf']['addChild'](_0x5c3625['Of']['Nf']['Mf']());
            }
            ,
            _0x289c82[_0x1b985d(0x34d)]['Qf'] = function(_0x547481, _0x516db3, _0x53202b, _0x47a76f, _0x4f035d) {
                var _0x34234b = _0x1b985d;
                $(_0x34234b(0x4d7))[_0x34234b(0x2db)]('\x20:\x20' + _0x53202b[_0x34234b(0x2db)]),
                _0x516db3['Rf'][_0x34234b(0x615)] = _0x242785()['o']['fb']['bf'] ? 0x0 : 0xa + (_0x547481 + 0x8000) / 0x10000 * 0x1388,
                this['qf'][_0x34234b(0x6f8)](_0x516db3['Rf']),
                _0x547481 != _0x242785()['o']['fb']['bf'] && (this['sf'][_0x34234b(0x6f8)](_0x53202b),
                this['sf'][_0x34234b(0x6f8)](_0x47a76f),
                this['sf']['addChild'](_0x4f035d)),
                _0x53202b[_0x34234b(0x2db)] === _0x242785()['o']['N']['Mb']['ad'] && (_0x53202b[_0x34234b(0x2db)] = 'ㅤ'),
                this['sf'][_0x34234b(0x6f8)](_0x53202b),
                this['sf'][_0x34234b(0x6f8)](_0x47a76f),
                this['sf'][_0x34234b(0x6f8)](_0x4f035d);
            }
            ;
            var _0x4a0295 = (function() {
                return _0xaa2971(_0x55f583['Zb'], function() {
                    var _0x5577ea = _0x32c7;
                    _0x55f583['Zb'][_0x5577ea(0x67d)](this),
                    this['Kf'] = 0x28,
                    this['Sf'] = new _0x55f583['ec'](),
                    this['Sf'][_0x5577ea(0x432)][_0x5577ea(0x172)](0.5),
                    this['Jf'] = new _0x55f583['bc'](),
                    circle = new _0x55f583['bc'](),
                    circle[_0x5577ea(0x5ec)]('black', 0.4),
                    circle[_0x5577ea(0x411)](0x0, 0x0, this['Kf']),
                    circle['endFill'](),
                    circle[_0x5577ea(0x12d)](0x2, 0xe3d2d2),
                    circle[_0x5577ea(0x411)](0x0, 0x0, this['Kf']),
                    circle[_0x5577ea(0x398)](0x0, -this['Kf']),
                    circle[_0x5577ea(0x1a8)](0x0, +this['Kf']),
                    circle[_0x5577ea(0x398)](-this['Kf'], 0x0),
                    circle['lineTo'](+this['Kf'], 0x0),
                    circle['endFill'](),
                    this['Sf'][_0x5577ea(0x66b)] = 0.5,
                    this['Jf'][_0x5577ea(0x615)] = 0x2,
                    this['Jf'][_0x5577ea(0x66b)] = 0.9,
                    this['Jf']['beginFill'](zwormData[_0x5577ea(0x276)]),
                    this['Jf']['drawCircle'](0x0, 0x0, 0.12 * this['Kf']),
                    this['Jf'][_0x5577ea(0x308)](),
                    this['Jf']['lineStyle'](0x1, 'black'),
                    this['Jf'][_0x5577ea(0x411)](0x0, 0x0, 0.12 * this['Kf']),
                    this['Jf'][_0x5577ea(0x308)](),
                    this[_0x5577ea(0x6f8)](circle),
                    this[_0x5577ea(0x6f8)](this['Sf']),
                    this[_0x5577ea(0x6f8)](this['Jf']),
                    zw_MinimapSombra = new _0x55f583['ec'](),
                    zw_MinimapSombra[_0x5577ea(0x432)]['set'](0.5),
                    zw_MinimapSombra[_0x5577ea(0x66b)] = 0.5,
                    zw_MinimapTeamCode = new _0x55f583['bc'](),
                    zw_MinimapTeamCode['beginFill'](_0x5577ea(0x618), 0.4),
                    zw_MinimapTeamCode[_0x5577ea(0x411)](0x0, 0x0, 0x28),
                    zw_MinimapTeamCode[_0x5577ea(0x308)](),
                    zw_MinimapTeamCode[_0x5577ea(0x12d)](0x2, 0xe3d2d2),
                    zw_MinimapTeamCode[_0x5577ea(0x411)](0x0, 0x0, 0x28),
                    zw_MinimapTeamCode[_0x5577ea(0x398)](0x0, -0x28),
                    zw_MinimapTeamCode[_0x5577ea(0x1a8)](0x0, +0x28),
                    zw_MinimapTeamCode[_0x5577ea(0x398)](-0x28, 0x0),
                    zw_MinimapTeamCode['lineTo'](+0x28, 0x0),
                    zw_MinimapTeamCode[_0x5577ea(0x308)](),
                    zw_MinimapTeamCode['y'] = 0xdc,
                    zw_MinimapTeamCode['x'] = 0x96,
                    zw_MinimapTeamCode['addChild'](zw_MinimapSombra),
                    console['log'](this['Kf']),
                    hstext = new _0x55f583['fc']('HS',{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0x10,
                        'fill': '0x' + theoObjects[_0x5577ea(0x614)],
                        'align': _0x5577ea(0x291)
                    }),
                    hstext[_0x5577ea(0x23e)]['y'] = 0x32,
                    hstext[_0x5577ea(0x23e)]['x'] = -0x23,
                    killtext = new _0x55f583['fc']('KILL',{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0x10,
                        'fill': '0x' + theoObjects[_0x5577ea(0x5c1)],
                        'align': _0x5577ea(0x291)
                    }),
                    killtext[_0x5577ea(0x23e)]['y'] = 0x32,
                    killtext[_0x5577ea(0x23e)]['x'] = 0xa,
                    this['addChild'](hstext),
                    this[_0x5577ea(0x6f8)](killtext),
                    zw_killcount = 0x0,
                    zw_hscount = 0x0,
                    this['WLp'] = new _0x55f583['fc']('',{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xe,
                        'fill': '#FFFFFF',
                        'align': _0x5577ea(0x291)
                    }),
                    this[_0x5577ea(0x629)][_0x5577ea(0x23e)]['y'] = 0x43,
                    this['WLp'][_0x5577ea(0x23e)]['x'] = -0x2d,
                    this['MLb'] = new _0x55f583['fc']('',{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xe,
                        'fill': _0x5577ea(0x3b5),
                        'align': 'center'
                    }),
                    this[_0x5577ea(0x72f)][_0x5577ea(0x23e)]['y'] = 0x43,
                    this[_0x5577ea(0x72f)]['position']['x'] = 0x14,
                    this[_0x5577ea(0x6f8)](this[_0x5577ea(0x629)]),
                    this[_0x5577ea(0x6f8)](this[_0x5577ea(0x72f)]);
                    let _0x46fcb2 = new _0x55f583['_b'](_0x55f583['$b'][_0x5577ea(0x34f)](_0x5577ea(0x649)))
                      , _0x1a4414 = new _0x55f583['ec']();
                    _0x1a4414[_0x5577ea(0x25d)] = _0x46fcb2,
                    _0x1a4414['width'] = 0x64,
                    _0x1a4414[_0x5577ea(0x392)] = 0x64,
                    _0x1a4414['x'] = -0x32,
                    _0x1a4414['y'] = -0x32,
                    this['addChild'](_0x1a4414);
                    let _0x5f1cad = new _0x55f583['ec']();
                    _0x5f1cad['texture'] = _0x46fcb2,
                    _0x5f1cad[_0x5577ea(0x5ea)] = 0x64,
                    _0x5f1cad[_0x5577ea(0x392)] = 0x64,
                    _0x5f1cad['x'] = -0x32,
                    _0x5f1cad['y'] = -0x32,
                    zw_MinimapTeamCode[_0x5577ea(0x6f8)](_0x5f1cad);
                    if (zw_mobilecheck()) {
                        var _0x1ffee6 = document[_0x5577ea(0xec)](_0x5577ea(0x256));
                        zw_mobilecontrol = 0x0,
                        zw_mobilecontrol2 = -0x1,
                        zw_mobileprediction = 0x0,
                        zw_mobilecontroltextures = [],
                        zw_mobilepredictiontextures = [],
                        zw_mobilecontroltextures[0x0] = new _0x55f583['ec'][(_0x5577ea(0x34f))]('https://i.imgur.com/aOyOob6.png'),
                        zw_mobilecontroltextures[0x0][_0x5577ea(0x5ea)] = 0x50,
                        zw_mobilecontroltextures[0x0]['height'] = 0x28,
                        zw_mobilecontroltextures[0x0]['x'] = -0x64 + _0x1ffee6[_0x5577ea(0x352)] * 0.5,
                        zw_mobilecontroltextures[0x0]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x0]['on'](_0x5577ea(0x481), () => {
                            var _0x1d8364 = _0x5577ea;
                            zw_mobilecontrol++,
                            zw_joystick = 0x0,
                            zw_mobileprediction = -0x1;
                            for (let _0x47c063 = 0x0; _0x47c063 < zw_mobilepredictiontextures[_0x1d8364(0x484)]; _0x47c063++) {
                                zw_mobilepredictiontextures[_0x47c063][_0x1d8364(0x654)] = ![];
                            }
                            for (let _0x29dfd7 = 0x0; _0x29dfd7 < zw_mobilecontroltextures[_0x1d8364(0x484)]; _0x29dfd7++) {
                                zw_mobilecontroltextures[_0x29dfd7][_0x1d8364(0x654)] = zw_mobilecontrol === _0x29dfd7;
                            }
                        }
                        ),
                        zw_mobilecontroltextures[0x1] = new _0x55f583['ec'][(_0x5577ea(0x34f))](_0x5577ea(0x326)),
                        zw_mobilecontroltextures[0x1]['width'] = 0x50,
                        zw_mobilecontroltextures[0x1]['height'] = 0x28,
                        zw_mobilecontroltextures[0x1]['x'] = -0x64 + _0x1ffee6['offsetWidth'] * 0.5,
                        zw_mobilecontroltextures[0x1]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x1][_0x5577ea(0x654)] = ![],
                        zw_mobilecontroltextures[0x1]['on'](_0x5577ea(0x481), () => {
                            var _0x2005a4 = _0x5577ea;
                            if (zw_mobilecontrol2 !== 0x1) {
                                zw_mobilecontrol2++;
                                zw_mobilecontrol2 === 0x0 && (zw_mobilearrowtexture['x'] = 0xf,
                                zw_mobilepeedtexture['x'] = -0xfa + _0x1ffee6[_0x2005a4(0x352)],
                                zw_mobilearrowtexture[_0x2005a4(0x654)] = !![],
                                zw_mobilepeedtexture[_0x2005a4(0x654)] = !![]);
                                zw_mobilecontrol2 === 0x1 && (zw_mobilearrowtexture['x'] = -0xfa + _0x1ffee6[_0x2005a4(0x352)],
                                zw_mobilepeedtexture['x'] = 0xf);
                                zw_mobileprediction = 0x1,
                                zw_joystick = -0x1;
                                for (let _0x1b7462 = 0x0; _0x1b7462 < zw_mobilepredictiontextures['length']; _0x1b7462++) {
                                    zw_mobilepredictiontextures[_0x1b7462][_0x2005a4(0x654)] = zw_mobileprediction === _0x1b7462;
                                }
                                return;
                            }
                            zw_mobilearrowtexture['visible'] = ![],
                            zw_mobilepeedtexture[_0x2005a4(0x654)] = ![],
                            zw_joystick = 0x1,
                            zw_mobilecontrol++;
                            for (let _0x4cbfbf = 0x0; _0x4cbfbf < zw_mobilecontroltextures[_0x2005a4(0x484)]; _0x4cbfbf++) {
                                zw_mobilecontroltextures[_0x4cbfbf]['visible'] = zw_mobilecontrol === _0x4cbfbf;
                            }
                        }
                        ),
                        zw_mobilecontroltextures[0x2] = new _0x55f583['ec'][(_0x5577ea(0x34f))](_0x5577ea(0x282)),
                        zw_mobilecontroltextures[0x2][_0x5577ea(0x5ea)] = 0x50,
                        zw_mobilecontroltextures[0x2][_0x5577ea(0x392)] = 0x28,
                        zw_mobilecontroltextures[0x2]['x'] = -0x64 + _0x1ffee6[_0x5577ea(0x352)] * 0.5,
                        zw_mobilecontroltextures[0x2]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x2][_0x5577ea(0x654)] = ![],
                        zw_mobilecontroltextures[0x2]['on'](_0x5577ea(0x481), () => {
                            var _0x1af3b1 = _0x5577ea;
                            zw_mobilecontrol++,
                            zw_mobileprediction = 0x2,
                            zw_joystick = 0x2;
                            for (let _0x5721e1 = 0x0; _0x5721e1 < zw_mobilepredictiontextures[_0x1af3b1(0x484)]; _0x5721e1++) {
                                zw_mobilepredictiontextures[_0x5721e1][_0x1af3b1(0x654)] = zw_mobileprediction === _0x5721e1;
                            }
                            for (let _0x2c2339 = 0x0; _0x2c2339 < zw_mobilecontroltextures['length']; _0x2c2339++) {
                                zw_mobilecontroltextures[_0x2c2339]['visible'] = zw_mobilecontrol === _0x2c2339;
                            }
                        }
                        ),
                        zw_mobilecontroltextures[0x3] = new _0x55f583['ec']['from']('https://i.imgur.com/n1jVrwm.png'),
                        zw_mobilecontroltextures[0x3][_0x5577ea(0x5ea)] = 0x50,
                        zw_mobilecontroltextures[0x3][_0x5577ea(0x392)] = 0x28,
                        zw_mobilecontroltextures[0x3]['x'] = -0x64 + _0x1ffee6[_0x5577ea(0x352)] * 0.5,
                        zw_mobilecontroltextures[0x3]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x3][_0x5577ea(0x654)] = ![],
                        zw_mobilecontroltextures[0x3]['on'](_0x5577ea(0x481), () => {
                            var _0xd17cce = _0x5577ea;
                            zw_mobilecontrol = 0x0,
                            zw_mobilecontrol2 = -0x1,
                            zw_mobileprediction = 0x0,
                            zw_joystick = -0x1;
                            for (let _0x1e73e0 = 0x0; _0x1e73e0 < zw_mobilepredictiontextures[_0xd17cce(0x484)]; _0x1e73e0++) {
                                zw_mobilepredictiontextures[_0x1e73e0][_0xd17cce(0x654)] = zw_mobileprediction === _0x1e73e0;
                            }
                            for (let _0x1f52f8 = 0x0; _0x1f52f8 < zw_mobilecontroltextures[_0xd17cce(0x484)]; _0x1f52f8++) {
                                zw_mobilecontroltextures[_0x1f52f8][_0xd17cce(0x654)] = zw_mobilecontrol === _0x1f52f8;
                            }
                        }
                        ),
                        zw_mobilepredictiontextures[0x0] = new _0x55f583['ec']['from'](_0x5577ea(0x64a)),
                        zw_mobilepredictiontextures[0x0][_0x5577ea(0x5ea)] = 0x10,
                        zw_mobilepredictiontextures[0x0][_0x5577ea(0x392)] = 0x10,
                        zw_mobilepredictiontextures[0x0]['x'] = 0x0,
                        zw_mobilepredictiontextures[0x0]['y'] = 0x0,
                        zw_mobilepredictiontextures[0x0][_0x5577ea(0x66b)] = 0x0,
                        zw_mobilepredictiontextures[0x1] = new _0x55f583['ec'][(_0x5577ea(0x34f))]('https://i.imgur.com/hUVCdUv.png'),
                        zw_mobilepredictiontextures[0x1][_0x5577ea(0x5ea)] = 0x10,
                        zw_mobilepredictiontextures[0x1][_0x5577ea(0x392)] = 0x10,
                        zw_mobilepredictiontextures[0x1]['x'] = 0x0,
                        zw_mobilepredictiontextures[0x1]['y'] = 0x0,
                        zw_mobilepredictiontextures[0x1][_0x5577ea(0x654)] = ![],
                        zw_mobilepredictiontextures[0x2] = new _0x55f583['ec'][(_0x5577ea(0x34f))](_0x5577ea(0x18a)),
                        zw_mobilepredictiontextures[0x2][_0x5577ea(0x5ea)] = 0x10,
                        zw_mobilepredictiontextures[0x2][_0x5577ea(0x392)] = 0x10,
                        zw_mobilepredictiontextures[0x2]['x'] = 0x0,
                        zw_mobilepredictiontextures[0x2]['y'] = 0x0,
                        zw_mobilepredictiontextures[0x2]['visible'] = ![],
                        zw_mobilearrowtexture = new _0x55f583['ec'][(_0x5577ea(0x34f))](_0x5577ea(0x1f7)),
                        zw_mobilearrowtexture[_0x5577ea(0x5ea)] = 0x64,
                        zw_mobilearrowtexture[_0x5577ea(0x392)] = 0x64,
                        zw_mobilearrowtexture['x'] = 0xf,
                        zw_mobilearrowtexture['y'] = -0xd2 + _0x1ffee6[_0x5577ea(0x25e)],
                        zw_mobilearrowtexture['visible'] = ![],
                        zw_mobilepeedtexture = new _0x55f583['ec'][(_0x5577ea(0x34f))](_0x5577ea(0x14a)),
                        zw_mobilepeedtexture[_0x5577ea(0x5ea)] = 0x50,
                        zw_mobilepeedtexture[_0x5577ea(0x392)] = 0x50,
                        zw_mobilepeedtexture['x'] = -0xfa + _0x1ffee6['offsetWidth'],
                        zw_mobilepeedtexture['y'] = -0xc8 + _0x1ffee6[_0x5577ea(0x25e)],
                        zw_mobilepeedtexture[_0x5577ea(0x654)] = ![],
                        zw_mobilepeedtexture[_0x5577ea(0x66b)] = 0.5,
                        this[_0x5577ea(0x6f8)](zw_mobilearrowtexture),
                        this[_0x5577ea(0x6f8)](zw_mobilepeedtexture);
                        for (let _0x4b5a10 = 0x0; _0x4b5a10 < zw_mobilecontroltextures[_0x5577ea(0x484)]; _0x4b5a10++) {
                            this[_0x5577ea(0x6f8)](zw_mobilecontroltextures[_0x4b5a10]);
                        }
                        for (let _0x1a7b9c = 0x0; _0x1a7b9c < zw_mobilepredictiontextures['length']; _0x1a7b9c++) {
                            this['addChild'](zw_mobilepredictiontextures[_0x1a7b9c]);
                        }
                    }
                });
            }())
              , _0x7d8f44 = (function() {
                var _0x3efed6 = _0x1b985d
                  , _0x5383c8 = _0xaa2971(_0x55f583['Zb'], function() {
                    var _0x1caff2 = _0x32c7;
                    _0x55f583['Zb'][_0x1caff2(0x67d)](this),
                    this['Tf'] = {};
                });
                _0x5383c8['prototype']['Qa'] = function(_0x545027) {
                    var _0x3de076 = _0x32c7, _0x16e759 = 0.5 + 0.5 * Math['cos'](_0x25862f * (_0x545027 / 0x3e8 / 1.6)), _0x341eb8;
                    for (_0x341eb8 in this['Tf']) {
                        var _0x88aece = this['Tf'][_0x341eb8]
                          , _0x226549 = _0x88aece['Uf'];
                        _0x88aece[_0x3de076(0x66b)] = 0x1 - _0x226549 + _0x226549 * _0x16e759;
                    }
                }
                ,
                _0x5383c8[_0x3efed6(0x34d)]['Te'] = function(_0x5ca2d5) {
                    var _0x55df24 = _0x3efed6, _0x242328;
                    for (_0x242328 in this['Tf']) {
                        !(null != _0x5ca2d5[_0x242328] && _0x5ca2d5[_0x242328]['sc']) && (_0x27d3f0(this['Tf'][_0x242328]),
                        delete this['Tf'][_0x242328]);
                    }
                    var _0x26e159 = 0x0, _0x444b25;
                    for (_0x444b25 in _0x5ca2d5) {
                        var _0x31c19c = _0x5ca2d5[_0x444b25];
                        if (_0x31c19c['sc']) {
                            var _0x2a39af = this['Tf'][_0x444b25];
                            if (!_0x2a39af) {
                                var _0x6e888f = _0x242785()['p']['Dc']()['ld'](_0x31c19c['rc'])['Zc'];
                                _0x2a39af = new _0x5b35ed(),
                                _0x2a39af['texture'] = _0x6e888f['Hc'],
                                _0x2a39af[_0x55df24(0x5ea)] = 0x28,
                                _0x2a39af[_0x55df24(0x392)] = 0x28,
                                this['Tf'][_0x444b25] = _0x2a39af,
                                this[_0x55df24(0x6f8)](_0x2a39af);
                            }
                            assignPtcValues(this, _0x444b25, _0x31c19c['tc']),
                            _0x2a39af['Uf'] = _0x31c19c['tc'],
                            _0x2a39af[_0x55df24(0x23e)]['x'] = _0x26e159,
                            _0x26e159 = _0x26e159 + 0x28;
                        }
                    }
                }
                ;
                var _0x5b35ed = (function() {
                    return _0xaa2971(_0x55f583['ec'], function() {
                        _0x55f583['ec']['call'](this),
                        this['Uf'] = 0x0;
                    });
                }());
                return _0x5383c8;
            }())
              , _0x14d5a0 = (function() {
                var _0x4a2a9f = _0x1b985d
                  , _0x5e716b = _0xaa2971(_0x55f583['Zb'], function() {
                    var _0x1cac69 = _0x32c7;
                    _0x55f583['Zb'][_0x1cac69(0x67d)](this),
                    this['Ef'] = !![],
                    this['Vf'] = 0xc,
                    this['Wf'] = 0x9,
                    this['Pe'] = [];
                    var _0x4c4cb2 = 0x0;
                    for (; _0x4c4cb2 < 0xe; _0x4c4cb2++) {
                        this['Xf']();
                    }
                });
                _0x5e716b[_0x4a2a9f(0x34d)]['Te'] = function(_0x32af75) {
                    var _0x2dd4fd = _0x4a2a9f;
                    zw_zoomplustexture && this[_0x2dd4fd(0x6f8)](zw_zoomplustexture);
                    zw_zoomsubtracttexture && this['addChild'](zw_zoomsubtracttexture);
                    zw_girosubtracttexture && this['addChild'](zw_girosubtracttexture);
                    zw_explotWubtracttexture && this[_0x2dd4fd(0x6f8)](zw_explotWubtracttexture);
                    zw_servertext['text'] !== '' && (this['addChild'](zw_servertext),
                    theoKzObjects[_0x2dd4fd(0x24e)] ? this[_0x2dd4fd(0x6f8)](zw_TopFriends_list) : this[_0x2dd4fd(0x71c)](zw_TopFriends_list));
                    if (zwormData && gameState['players'][_0x2dd4fd(0x4ab)] > 0x0)
                        sendPlayerUpdate(zwormData[_0x2dd4fd(0x550)], zwormData[_0x2dd4fd(0xcf)]);
                    else {}
                    var _0xbb4b63 = _0x242785()
                      , _0xa9f05 = _0xbb4b63['o']['fb']['af'] == _0x283aa5['_e']
                      , _0x4bcfdc = 0x0
                      , _0x532b2a = 0x0;
                    _0x532b2a >= this['Pe'][_0x2dd4fd(0x484)] && this['Xf']();
                    this['Pe'][_0x532b2a]['Yf'](0x1, _0x2dd4fd(0x115)),
                    this['Pe'][_0x532b2a]['Zf']('', zw_servertext[_0x2dd4fd(0x2db)] === '' ? _0x2dd4fd(0x207) + zw_toplist : '', '('[_0x2dd4fd(0x1ee)](_0xbb4b63['o']['tb'], _0x2dd4fd(0x469))),
                    this['Pe'][_0x532b2a][_0x2dd4fd(0x23e)]['y'] = _0x4bcfdc,
                    _0x4bcfdc = _0x4bcfdc + this['Vf'],
                    _0x532b2a = _0x532b2a + 0x1;
                    _0x32af75['$f'][_0x2dd4fd(0x484)] > 0x0 && (_0x4bcfdc = _0x4bcfdc + this['Wf']);
                    var _0x3d8761 = 0x0;
                    for (; _0x3d8761 < _0x32af75['$f'][_0x2dd4fd(0x484)]; _0x3d8761++) {
                        var _0x5968ff = _0x32af75['$f'][_0x3d8761]
                          , _0x4fc01b = _0xbb4b63['p']['Dc']()['ed'](_0x5968ff['_f']);
                        _0x532b2a >= this['Pe']['length'] && this['Xf'](),
                        this['Pe'][_0x532b2a]['Yf'](0.8, _0x4fc01b['bd']['_c']),
                        console[_0x2dd4fd(0x10f)](_0x4fc01b),
                        this['Pe'][_0x532b2a]['Zf']('' + (_0x3d8761 + 0x1), _0x2dd4fd(0x62d), '' + Math[_0x2dd4fd(0x19d)](_0x5968ff['M'])),
                        this['Pe'][_0x532b2a][_0x2dd4fd(0x23e)]['y'] = _0x4bcfdc,
                        _0x4bcfdc = _0x4bcfdc + this['Vf'],
                        _0x532b2a = _0x532b2a + 0x1;
                    }
                    _0x32af75['ag'][_0x2dd4fd(0x484)] > 0x0 && (_0x4bcfdc = _0x4bcfdc + this['Wf']);
                    var _0x325daa = 0x0;
                    for (; _0x325daa < _0x32af75['ag'][_0x2dd4fd(0x484)]; _0x325daa++) {
                        var _0x799536 = _0x32af75['ag'][_0x325daa]
                          , _0x422838 = _0xbb4b63['o']['fb']['bf'] == _0x799536['bg']
                          , _0x269507 = void 0x0
                          , _0x4a2b9f = void 0x0;
                        if (_0x422838)
                            _0x269507 = _0x2dd4fd(0x115),
                            _0x4a2b9f = _0xbb4b63['o']['N']['Mb']['ad'];
                        else {
                            var _0x1c6ec4 = _0xbb4b63['o']['hb'][_0x799536['bg']];
                            null != _0x1c6ec4 ? (_0x269507 = _0xa9f05 ? _0xbb4b63['p']['Dc']()['ed'](_0x1c6ec4['Mb']['cg'])['bd']['_c'] : _0xbb4b63['p']['Dc']()['dd'](_0x1c6ec4['Mb']['dg'])['_c'],
                            _0x4a2b9f = this['Ef'] ? _0x1c6ec4['Mb']['ad'] : '---') : (_0x269507 = _0x2dd4fd(0x134),
                            _0x4a2b9f = '?');
                        }
                        _0x422838 && (_0x4bcfdc = _0x4bcfdc + this['Wf']);
                        _0x532b2a >= this['Pe'][_0x2dd4fd(0x484)] && this['Xf']();
                        this['Pe'][_0x532b2a]['Yf'](_0x422838 ? 0x1 : 0.8, _0x269507);
                        _0xbb4b63['o']['O'] === _0x532b2a && this['Pe'][_0x532b2a]['Yf'](0x1, _0x2dd4fd(0x115));
                        var _0x2438e8 = Math[_0x2dd4fd(0x19d)](_0x799536['M']);
                        _0x2438e8['customFormat'](),
                        this['Pe'][_0x532b2a]['Zf']('' + (_0x325daa + 0x1), _0x4a2b9f, '' + _0x2438e8[_0x2dd4fd(0x223)]()),
                        this['Pe'][_0x532b2a][_0x2dd4fd(0x23e)]['y'] = _0x4bcfdc,
                        _0x4bcfdc = _0x4bcfdc + this['Vf'],
                        _0x532b2a = _0x532b2a + 0x1,
                        _0x422838 && (_0x4bcfdc = _0x4bcfdc + this['Wf']);
                    }
                    _0xbb4b63['o']['O'] > _0x32af75['ag'][_0x2dd4fd(0x484)] && (_0x4bcfdc = _0x4bcfdc + this['Wf'],
                    _0x532b2a >= this['Pe'][_0x2dd4fd(0x484)] && this['Xf'](),
                    this['Pe'][_0x532b2a]['Yf'](0x1, _0x2dd4fd(0x3b5)),
                    window[_0x2dd4fd(0x2e8)] = Math[_0x2dd4fd(0x19d)](_0xbb4b63['o']['N']['M']),
                    window[_0x2dd4fd(0x2e8)][_0x2dd4fd(0x223)](),
                    this['Pe'][_0x532b2a]['Zf']('' + _0xbb4b63['o']['O'], _0xbb4b63['o']['N']['Mb']['ad'], '' + window[_0x2dd4fd(0x2e8)]['customFormat']()),
                    this['Pe'][_0x532b2a][_0x2dd4fd(0x23e)]['y'] = _0x4bcfdc,
                    _0x4bcfdc = _0x4bcfdc + this['Vf'],
                    _0x532b2a = _0x532b2a + 0x1,
                    _0x4bcfdc = _0x4bcfdc + this['Wf']);
                    for (; this['Pe']['length'] > _0x532b2a; ) {
                        _0x27d3f0(this['Pe'][_0x2dd4fd(0x674)]());
                    }
                }
                ,
                _0x5e716b[_0x4a2a9f(0x34d)]['Xf'] = function() {
                    var _0x2dfe20 = _0x4a2a9f
                      , _0x548fad = new _0x38b2c7();
                    _0x548fad[_0x2dfe20(0x23e)]['y'] = 0x0,
                    this['Pe'][_0x2dfe20(0x484)] > 0x0 && (_0x548fad[_0x2dfe20(0x23e)]['y'] = this['Pe'][this['Pe'][_0x2dfe20(0x484)] - 0x1][_0x2dfe20(0x23e)]['y'] + this['Vf']),
                    this['Pe']['push'](_0x548fad),
                    this[_0x2dfe20(0x6f8)](_0x548fad);
                }
                ;
                var _0x38b2c7 = (function() {
                    var _0x39eba3 = _0x4a2a9f
                      , _0x278b91 = _0xaa2971(_0x55f583['Zb'], function() {
                        var _0x21001c = _0x32c7;
                        _0x55f583['Zb']['call'](this),
                        this['eg'] = new _0x55f583['fc']('',{
                            'dropShadow': ![],
                            'dropShadowBlur': 0x5,
                            'dropShadowColor': _0x21001c(0x640),
                            'dropShadowDistance': 0x3,
                            'fontFamily': fonts[currentFontIndex],
                            'fontSize': 0xc,
                            'fill': _0x21001c(0x115)
                        }),
                        this['eg'][_0x21001c(0x432)]['x'] = 0x1,
                        this['eg'][_0x21001c(0x23e)]['x'] = 0x1e,
                        this[_0x21001c(0x6f8)](this['eg']),
                        this['fg'] = new _0x55f583['fc']('',{
                            'dropShadow': ![],
                            'dropShadowBlur': 0x5,
                            'dropShadowColor': _0x21001c(0x640),
                            'dropShadowDistance': 0x3,
                            'fontFamily': fonts[currentFontIndex],
                            'fontSize': 0xc,
                            'fill': _0x21001c(0x115)
                        }),
                        this['fg']['anchor']['x'] = 0x0,
                        this['fg'][_0x21001c(0x23e)]['x'] = 0x23,
                        this['addChild'](this['fg']),
                        this['gg'] = new _0x55f583['fc']('',{
                            'dropShadow': ![],
                            'dropShadowBlur': 0x5,
                            'dropShadowColor': _0x21001c(0x640),
                            'dropShadowDistance': 0x3,
                            'fontFamily': fonts[currentFontIndex],
                            'fontSize': 0xc,
                            'fill': _0x21001c(0x115)
                        }),
                        this['gg']['anchor']['x'] = 0x1,
                        this['gg'][_0x21001c(0x23e)]['x'] = 0xdc,
                        this[_0x21001c(0x6f8)](this['gg']);
                    });
                    return _0x278b91[_0x39eba3(0x34d)]['Zf'] = function(_0x273559, _0x2f121d, _0x476af2) {
                        var _0x1e6cce = _0x39eba3;
                        this['eg']['text'] = _0x273559,
                        this['gg']['text'] = _0x476af2;
                        var _0x53cec6 = _0x2f121d;
                        this['fg'][_0x1e6cce(0x2db)] = _0x53cec6;
                        for (; this['fg'][_0x1e6cce(0x5ea)] > 0x64; ) {
                            _0x53cec6 = _0x53cec6['substring'](0x0, _0x53cec6[_0x1e6cce(0x484)] - 0x1),
                            this['fg'][_0x1e6cce(0x2db)] = _0x53cec6 + '..';
                        }
                    }
                    ,
                    _0x278b91[_0x39eba3(0x34d)]['Yf'] = function(_0x365ff4, _0x2a68f0) {
                        var _0x50be98 = _0x39eba3;
                        this['eg'][_0x50be98(0x66b)] = _0x365ff4,
                        this['eg'][_0x50be98(0x4e4)][_0x50be98(0x537)] = _0x2a68f0,
                        this['fg'][_0x50be98(0x66b)] = _0x365ff4,
                        this['fg']['style']['fill'] = _0x2a68f0,
                        this['gg'][_0x50be98(0x66b)] = _0x365ff4,
                        this['gg'][_0x50be98(0x4e4)][_0x50be98(0x537)] = _0x2a68f0;
                    }
                    ,
                    _0x278b91;
                }());
                return _0x5e716b;
            }());
            return _0x289c82;
        }())
          , _0x26ddff = (function() {
            var _0x42f8ff = _0x53c3f2;
            function _0x5414b0(_0x403fe5) {
                this['o'] = _0x403fe5,
                this['hg'] = [],
                this['ig'] = 0x0;
            }
            _0x5414b0[_0x42f8ff(0x34d)]['Xb'] = function(_0x3ceb78) {
                var _0x2b57d0 = _0x42f8ff;
                this['hg'][_0x2b57d0(0x5d6)](new DataView(_0x3ceb78));
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['Sb'] = function() {
                this['hg'] = [],
                this['ig'] = 0x0;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['Bb'] = function() {
                var _0x1074bf = _0x42f8ff;
                if (this['hg'][_0x1074bf(0x484)] === 0x0)
                    return;
                let _0x581226 = navigator[_0x1074bf(0x4d1)] ? Math['max'](0x5, navigator['hardwareConcurrency']) : 0xa;
                const _0xcbac75 = () => {
                    var _0x292ff6 = _0x1074bf;
                    let _0x56dcf5 = 0x0;
                    const _0x2ddc91 = performance[_0x292ff6(0x39e)]()
                      , _0xfb911b = 0x6;
                    while (_0x56dcf5 < _0x581226 && this['hg'][_0x292ff6(0x484)] > 0x0) {
                        const _0x35c404 = this['hg'][_0x292ff6(0x479)]();
                        try {
                            this['jg'](_0x35c404);
                        } catch (_0xbc9961) {
                            console[_0x292ff6(0x10f)]('DataReader\x20error:\x20' + _0xbc9961);
                        }
                        _0x56dcf5++;
                        if (performance[_0x292ff6(0x39e)]() - _0x2ddc91 > _0xfb911b)
                            break;
                    }
                    this['hg'][_0x292ff6(0x484)] > 0x0 && setTimeout(_0xcbac75, 0x0);
                }
                ;
                _0xcbac75();
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['jg'] = function(_0x31e31e) {
                switch (0xff & _0x31e31e['mc'](0x0)) {
                case 0x0:
                    return void this['kg'](_0x31e31e, 0x1);
                case 0x1:
                    return void this['lg'](_0x31e31e, 0x1);
                case 0x2:
                    return void this['mg'](_0x31e31e, 0x1);
                case 0x3:
                    return void this['ng'](_0x31e31e, 0x1);
                case 0x4:
                    return void this['og'](_0x31e31e, 0x1);
                case 0x5:
                    return void this['pg'](_0x31e31e, 0x1);
                }
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['kg'] = function(_0x475500, _0x318971) {
                var _0x2bd8c1 = _0x42f8ff;
                console[_0x2bd8c1(0x10f)]('sgp1'),
                this['o']['fb']['af'] = _0x475500['mc'](_0x318971),
                _0x318971 = _0x318971 + 0x1;
                var _0x317495 = _0x475500['nc'](_0x318971);
                return _0x318971 = _0x318971 + 0x2,
                this['o']['fb']['bf'] = _0x317495,
                this['o']['N']['Mb']['Lb'] = _0x317495,
                this['o']['fb']['ub'] = _0x475500['pc'](_0x318971),
                _0x318971 = _0x318971 + 0x4,
                this['o']['fb']['cf'] = _0x475500['pc'](_0x318971),
                _0x318971 = _0x318971 + 0x4,
                this['o']['fb']['df'] = _0x475500['pc'](_0x318971),
                _0x318971 = _0x318971 + 0x4,
                _0x242785()['s']['H']['wb']['Te'](this['o']['fb'], _0x242785()['s']['xa']['wa']()),
                console[_0x2bd8c1(0x10f)](_0x2bd8c1(0x482)),
                _0x318971;
            }
            ,
            _0x5414b0['prototype']['lg'] = function(_0x2ac9d1, _0x3c9730) {
                var _0x21d298 = this['ig']++
                  , _0x25f353 = _0x2ac9d1['nc'](_0x3c9730);
                _0x3c9730 += 0x2;
                var _0x11418e = void 0x0;
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0x11746c = 0x0; _0x11746c < _0x11418e; _0x11746c++)
                    _0x3c9730 = this['sg'](_0x2ac9d1, _0x3c9730);
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0x580007 = 0x0; _0x580007 < _0x11418e; _0x580007++)
                    _0x3c9730 = this['tg'](_0x2ac9d1, _0x3c9730);
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0x234911 = 0x0; _0x234911 < _0x11418e; _0x234911++)
                    _0x3c9730 = this['ug'](_0x2ac9d1, _0x3c9730);
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0xa64b71 = 0x0; _0xa64b71 < _0x11418e; _0xa64b71++)
                    _0x3c9730 = this['vg'](_0x2ac9d1, _0x3c9730);
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0x405a5f = 0x0; _0x405a5f < _0x11418e; _0x405a5f++)
                    _0x3c9730 = this['wg'](_0x2ac9d1, _0x3c9730);
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0x5c0e69 = 0x0; _0x5c0e69 < _0x11418e; _0x5c0e69++)
                    _0x3c9730 = this['xg'](_0x2ac9d1, _0x3c9730);
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0x2bb5dc = 0x0; _0x2bb5dc < _0x11418e; _0x2bb5dc++)
                    _0x3c9730 = this['yg'](_0x2ac9d1, _0x3c9730);
                _0x11418e = this['qg'](_0x2ac9d1, _0x3c9730),
                _0x3c9730 += this['rg'](_0x11418e);
                for (var _0x1dbc87 = 0x0; _0x1dbc87 < _0x11418e; _0x1dbc87++)
                    _0x3c9730 = this['zg'](_0x2ac9d1, _0x3c9730);
                return _0x21d298 > 0x0 && (_0x3c9730 = this['Ag'](_0x2ac9d1, _0x3c9730)),
                this['o']['Qb'](_0x21d298, _0x25f353),
                _0x3c9730;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['vg'] = function(_0x2d7bc4, _0xbe7aac) {
                var _0xe47e3 = _0x42f8ff
                  , _0x170b2b = new _0x268d93[(_0xe47e3(0x592))]();
                _0x170b2b['Lb'] = _0x2d7bc4['nc'](_0xbe7aac),
                _0xbe7aac = _0xbe7aac + 0x2,
                _0x170b2b['cg'] = this['o']['fb']['af'] == _0x283aa5['_e'] ? _0x2d7bc4['mc'](_0xbe7aac++) : _0x5e7405[_0xe47e3(0x534)],
                _0x170b2b['dg'] = _0x2d7bc4['nc'](_0xbe7aac);
                let _0x2cb43d = _0xbe7aac;
                _0xbe7aac = _0xbe7aac + 0x2,
                _0x170b2b['Bg'] = _0x2d7bc4['nc'](_0xbe7aac);
                let _0x4cb916 = _0xbe7aac;
                _0xbe7aac = _0xbe7aac + 0x2,
                _0x170b2b['Cg'] = _0x2d7bc4['nc'](_0xbe7aac);
                let _0x12d457 = _0xbe7aac;
                _0xbe7aac = _0xbe7aac + 0x2,
                _0x170b2b['Dg'] = _0x2d7bc4['nc'](_0xbe7aac);
                let _0x191b92 = _0xbe7aac;
                _0xbe7aac = _0xbe7aac + 0x2,
                _0x170b2b['Eg'] = _0x2d7bc4['nc'](_0xbe7aac);
                let _0x1f85c5 = _0xbe7aac;
                _0xbe7aac = _0xbe7aac + 0x2;
                var _0x534077 = _0x2d7bc4['mc'](_0xbe7aac);
                _0xbe7aac = _0xbe7aac + 0x1;
                var _0x2c4f4d = ''
                  , _0x6064e1 = 0x0;
                for (; _0x6064e1 < _0x534077; _0x6064e1++) {
                    _0x2c4f4d = _0x2c4f4d + String[_0xe47e3(0x637)](_0x2d7bc4['nc'](_0xbe7aac)),
                    _0xbe7aac = _0xbe7aac + 0x2;
                }
                if (0xd2 < _0xbe7aac)
                    for (let _0x581859 in this['o']['hb']) {
                        if (theoKzObjects['chngBotSkins']) {
                            var _0x385ade = this['o']['hb'][_0x581859]['Mb']['dg'];
                            if (_0x385ade >= 0x20 && _0x385ade <= 0x23) {
                                var _0x4b586e = Math[_0xe47e3(0x19d)](Math['random']() * 0x31) + 0x5dc;
                                this['o']['hb'][_0x581859]['Mb']['dg'] = _0x4b586e;
                            }
                        }
                        if (theoKzObjects[_0xe47e3(0x130)]) {
                            if (/^(.+?)@(.+)/[_0xe47e3(0x4a9)](this['o']['hb'][_0x581859]['Mb']['ad'])) {
                                const _0x46d788 = this['o']['hb'][_0x581859]['Mb']['dg'];
                                if (_0x46d788 >= 0x20 && _0x46d788 <= 0x23) {
                                    const _0xe5ca40 = Math[_0xe47e3(0x19d)](Math['random']() * 0x31) + 0x5dc;
                                    this['o']['hb'][_0x581859]['Mb']['dg'] = _0xe5ca40;
                                }
                            }
                            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/[_0xe47e3(0x4a9)](this['o']['hb'][_0x581859]['Mb']['ad'])) {
                                const _0x33c14c = this['o']['hb'][_0x581859]['Mb']['dg'];
                                if (_0x33c14c >= 0x20 && _0x33c14c <= 0x23) {
                                    const _0x8c9c72 = Math[_0xe47e3(0x19d)](Math[_0xe47e3(0x197)]() * 0x31) + 0x5dc;
                                    this['o']['hb'][_0x581859]['Mb']['dg'] = _0x8c9c72;
                                }
                            }
                        }
                        if (/^(.{16})(ZW_\d{9})$/[_0xe47e3(0x4a9)](this['o']['hb'][_0x581859]['Mb']['ad'])) {
                            console[_0xe47e3(0x10f)]('nombre:\x20' + this['o']['hb'][_0x581859]['Mb']['ad']);
                            var _0x4b8f58 = this['o']['hb'][_0x581859]['Mb']['ad']['substr'](-0xa);
                            let _0x1197c3 = _0x4b8f58[_0xe47e3(0x508)](0x1, 0x4);
                            console[_0xe47e3(0x10f)](_0xe47e3(0x20e) + _0x1197c3);
                            let _0x3dd0c0 = _0x4b8f58['substr'](0x5, 0x5)
                              , _0x22e5eb = _0x4b8f58[_0xe47e3(0x508)](0x6, 0x3)
                              , _0x5c2de9 = _0x4b8f58[_0xe47e3(0x508)](0x9, 0x3);
                            _0xe47e3(0x168) !== _0x1197c3 && -0x1 !== theoKzObjects[_0xe47e3(0x61d)][_0xe47e3(0xf4)](parseInt(_0x1197c3)) && (this['o']['hb'][_0x581859]['Mb']['dg'] = parseInt(_0x1197c3)),
                            _0xe47e3(0x68c) !== _0x3dd0c0 && (this['o']['hb'][_0x581859]['Mb']['Eg'] = parseInt(_0x3dd0c0)),
                            _0xe47e3(0x55b) !== _0x22e5eb && (this['o']['hb'][_0x581859]['Mb']['Bg'] = parseInt(_0x22e5eb)),
                            _0xe47e3(0x55b) !== _0x5c2de9 && (this['o']['hb'][_0x581859]['Mb']['Cg'] = parseInt(_0x5c2de9));
                        }
                    }
                _0x242785()['o']['N']['Mb']['Lb'] === _0x170b2b['Lb'] && (_0x170b2b['dg'] = theoKzObjects?.[_0xe47e3(0x199)]?.['rh'] ?? 0x0,
                _0x170b2b['Bg'] = theoKzObjects?.['PropertyManager']?.['sh'] ?? 0x0,
                _0x170b2b['Cg'] = theoKzObjects?.[_0xe47e3(0x199)]?.['th'] ?? 0x0,
                _0x170b2b['Dg'] = theoKzObjects?.[_0xe47e3(0x199)]?.['uh'] ?? 0x0,
                _0x170b2b['Eg'] = theoKzObjects?.[_0xe47e3(0x199)]?.['vh'] ?? 0x0,
                _0x2d7bc4[_0xe47e3(0x14e)](_0x2cb43d, _0x170b2b['dg']),
                _0x2d7bc4[_0xe47e3(0x14e)](_0x4cb916, _0x170b2b['Bg']),
                _0x2d7bc4[_0xe47e3(0x14e)](_0x12d457, _0x170b2b['Cg']),
                _0x2d7bc4[_0xe47e3(0x14e)](_0x191b92, _0x170b2b['Dg']),
                _0x2d7bc4[_0xe47e3(0x14e)](_0x1f85c5, _0x170b2b['Eg']),
                _wrmxt[_0xe47e3(0x3f7)] = !![],
                _wrmxt[_0xe47e3(0x23d)] = _0x2cb43d);
                if (_0x170b2b['ad'] = _0x2c4f4d,
                this['o']['fb']['bf'] === _0x170b2b['Lb'])
                    this['o']['N']['Fg'](_0x170b2b),
                    _0x170b2b['Mb'] = _0x170b2b['Lb'],
                    _0x170b2b['bd'] = _0x170b2b['ad'];
                else {
                    var _0x3080a1 = this['o']['hb'][_0x170b2b['Lb']];
                    null != _0x3080a1 && _0x3080a1['Kb']();
                    var _0xf8e1b8 = new _0x268d93(this['o']['fb']);
                    _0xf8e1b8['vb'](_0x242785()['s']['H']['wb']),
                    this['o']['hb'][_0x170b2b['Lb']] = _0xf8e1b8,
                    _0xf8e1b8['Fg'](_0x170b2b);
                }
                return _0xbe7aac;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['wg'] = function(_0x11ea60, _0x50f9be) {
                var _0x5439a9 = _0x42f8ff
                  , _0x528581 = _0x11ea60['nc'](_0x50f9be);
                _0x50f9be += 0x2;
                var _0x1e6022 = _0x11ea60['mc'](_0x50f9be);
                _0x50f9be++;
                var _0x409d7e = !!(0x1 & _0x1e6022)
                  , _0x434a73 = !!(0x2 & _0x1e6022)
                  , _0x314067 = 0x0;
                _0x409d7e && (_0x314067 = _0x11ea60['nc'](_0x50f9be),
                _0x50f9be += 0x2);
                var _0x117062 = this['Gg'](_0x528581);
                if (void 0x0 === _0x117062)
                    return _0x50f9be;
                if (_0x117062['Ib'] = ![],
                !_0x117062['Hb'])
                    return _0x50f9be;
                var _0x2184cf = this['Gg'](_0x528581);
                if (_0x409d7e && (void 0x0 !== _0x2184cf && _0x2184cf['Hb'])) {
                    if (_0x314067 === this['o']['fb']['bf']) {
                        var _0x1a1417 = this['o']['N']['Gf']()
                          , _0x45a5f3 = _0x117062['Hg'](_0x1a1417['x'], _0x1a1417['y']);
                        _0x434a73 === !![] && (zwormData['enemyNameHs'] = _0x117062['Mb']['ad']),
                        Math[_0x5439a9(0x693)](0x0, 0x1 - _0x45a5f3[_0x5439a9(0x377)] / (0.5 * this['o']['jb'])),
                        _0x45a5f3[_0x5439a9(0x377)] < 0.5 * this['o']['jb'] && _0x242785()['s']['H']['wb']['wf']['Se'](_0x434a73);
                    } else {
                        if (_0x528581 === this['o']['fb']['bf']) {} else {
                            var _0x3eaacc = this['o']['N']['Gf']()
                              , _0x4109a0 = _0x117062['Hg'](_0x3eaacc['x'], _0x3eaacc['y']);
                            Math[_0x5439a9(0x693)](0x0, 0x1 - _0x4109a0[_0x5439a9(0x377)] / (0.5 * this['o']['jb']));
                        }
                    }
                } else {
                    if (_0x528581 === this['o']['fb']['bf']) {} else {
                        var _0x20c467 = this['o']['N']['Gf']()
                          , _0x1ee3ea = _0x117062['Hg'](_0x20c467['x'], _0x20c467['y']);
                        Math[_0x5439a9(0x693)](0x0, 0x1 - _0x1ee3ea[_0x5439a9(0x377)] / (0.5 * this['o']['jb']));
                    }
                }
                return _0x50f9be;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['zg'] = function(_0x5936f8, _0x167bda) {
                var _0x54ed04 = _0x42f8ff
                  , _0x19e1bc = _0x5936f8['nc'](_0x167bda);
                _0x167bda += 0x2;
                var _0x3301a5 = _0x19e1bc === this['o']['fb']['bf'] ? null : this['o']['hb'][_0x19e1bc]
                  , _0x50073e = _0x5936f8['mc'](_0x167bda);
                _0x167bda += 0x1;
                var _0x2f1a12 = !!(0x1 & _0x50073e);
                if (!!(0x2 & _0x50073e)) {
                    var _0x4ea153 = _0x5936f8['pc'](_0x167bda);
                    _0x167bda += 0x4,
                    _0x3301a5 && _0x3301a5['Ig'](_0x4ea153);
                }
                var _0x5c4c91 = this['Jg'](_0x5936f8['mc'](_0x167bda++), _0x5936f8['mc'](_0x167bda++), _0x5936f8['mc'](_0x167bda++))
                  , _0x57e9a4 = this['Jg'](_0x5936f8['mc'](_0x167bda++), _0x5936f8['mc'](_0x167bda++), _0x5936f8['mc'](_0x167bda++));
                if (_0x3301a5) {
                    _0x3301a5['Kg'](_0x5c4c91, _0x57e9a4, _0x2f1a12);
                    var _0x12cf32 = this['o']['N']['Gf']()
                      , _0x5ea402 = _0x3301a5['Gf']()
                      , _0x434880 = Math[_0x54ed04(0x693)](0x0, 0x1 - Math[_0x54ed04(0x70a)](_0x12cf32['x'] - _0x5ea402['x'], _0x12cf32['y'] - _0x5ea402['y']) / (0.5 * this['o']['jb']));
                    _0x242785()['r']['Zd'](_0x434880, _0x19e1bc, _0x2f1a12);
                }
                var _0x2b31d0 = this['qg'](_0x5936f8, _0x167bda);
                if (_0x167bda += this['rg'](_0x2b31d0),
                _0x3301a5) {
                    var _0x2fa181;
                    for (_0x2fa181 in _0x3301a5['Ff']) {
                        var _0xc47a6 = _0x3301a5['Ff'][_0x2fa181];
                        _0xc47a6 && (_0xc47a6['sc'] = ![]);
                    }
                }
                var _0x553a38 = 0x0;
                for (; _0x553a38 < _0x2b31d0; _0x553a38++) {
                    var _0x3d4514 = _0x5936f8['mc'](_0x167bda);
                    _0x167bda++;
                    var _0x526e28 = _0x5936f8['mc'](_0x167bda);
                    if (_0x167bda++,
                    _0x3301a5) {
                        var _0x459b9d = _0x3301a5['Ff'][_0x3d4514];
                        !_0x459b9d && (_0x459b9d = _0x3301a5['Ff'][_0x3d4514] = new _0x5bdf7a(_0x3d4514)),
                        _0x459b9d['sc'] = !![],
                        _0x459b9d['tc'] = Math['min'](0x1, Math[_0x54ed04(0x693)](0x0, _0x526e28 / 0x64));
                    }
                }
                return _0x167bda;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['Ag'] = function(_0x3fc174, _0x2e1f3b) {
                var _0x3e6fb2 = _0x42f8ff
                  , _0x5ce5f4 = this['o']['N']
                  , _0x42a1d8 = _0x3fc174['mc'](_0x2e1f3b);
                _0x2e1f3b += 0x1;
                var _0x336f08 = !!(0x1 & _0x42a1d8)
                  , _0x23068b = !!(0x2 & _0x42a1d8)
                  , _0x5197c2 = !!(0x4 & _0x42a1d8);
                if (_0x23068b) {
                    var _0x27b7ca = _0x5ce5f4['M'];
                    _0x5ce5f4['Ig'](_0x3fc174['pc'](_0x2e1f3b)),
                    _0x2e1f3b += 0x4,
                    _0x27b7ca = _0x5ce5f4['M'] - _0x27b7ca,
                    _0x27b7ca > 0x0 && _0x242785()['s']['H']['wb']['wf']['Re'](_0x27b7ca);
                }
                _0x5197c2 && (this['o']['ib'] = _0x3fc174['pc'](_0x2e1f3b),
                _0x2e1f3b += 0x4);
                var _0x28315d = this['Jg'](_0x3fc174['mc'](_0x2e1f3b++), _0x3fc174['mc'](_0x2e1f3b++), _0x3fc174['mc'](_0x2e1f3b++))
                  , _0x59dd57 = this['Jg'](_0x3fc174['mc'](_0x2e1f3b++), _0x3fc174['mc'](_0x2e1f3b++), _0x3fc174['mc'](_0x2e1f3b++));
                _0x5ce5f4['Kg'](_0x28315d, _0x59dd57, _0x336f08),
                _0x242785()['r']['Zd'](0.5, this['o']['fb']['bf'], _0x336f08);
                var _0x1acb71 = this['qg'](_0x3fc174, _0x2e1f3b);
                _0x2e1f3b += this['rg'](_0x1acb71);
                for (var _0x1f1ac8 in _0x5ce5f4['Ff']) {
                    var _0x4cd544 = _0x5ce5f4['Ff'][_0x1f1ac8];
                    _0x4cd544 && (_0x4cd544['sc'] = !0x1);
                }
                for (var _0x22c3c0 = 0x0; _0x22c3c0 < _0x1acb71; _0x22c3c0++) {
                    var _0x12c21f = _0x3fc174['mc'](_0x2e1f3b);
                    _0x2e1f3b++;
                    var _0x34ab4b = _0x3fc174['mc'](_0x2e1f3b);
                    _0x2e1f3b++;
                    var _0x577948 = _0x5ce5f4['Ff'][_0x12c21f];
                    _0x577948 || (_0x577948 = new _0x5bdf7a(_0x12c21f),
                    _0x5ce5f4['Ff'][_0x12c21f] = _0x577948),
                    _0x577948['sc'] = !0x0,
                    _0x577948['tc'] = Math[_0x3e6fb2(0x4ee)](0x1, Math['max'](0x0, _0x34ab4b / 0x64));
                }
                _0x242785()['s']['H']['wb']['uf']['Te'](_0x5ce5f4['Ff']);
            }
            ,
            _0x5414b0['prototype']['xg'] = function(_0x52e435, _0x529fd7) {
                var _0x5268e6 = _0x42f8ff
                  , _0x364915 = this
                  , _0x946082 = _0x52e435['nc'](_0x529fd7);
                _0x529fd7 += 0x2;
                var _0x4ee085 = this['Gg'](_0x946082)
                  , _0x15ee16 = _0x52e435['pc'](_0x529fd7);
                _0x529fd7 += 0x4;
                var _0x5702f2 = [];
                for (var _0x417326 in _0x4ee085['Ff']) {
                    if (0x0 == _0x417326)
                        _0x5702f2[_0x5268e6(0x5d6)](_0x5268e6(0x368)),
                        $('.v0')[_0x5268e6(0x442)]();
                    else {
                        if (0x1 == _0x417326)
                            _0x5702f2[_0x5268e6(0x5d6)](_0x5268e6(0x477)),
                            $(_0x5268e6(0x6e2))[_0x5268e6(0x442)]();
                        else {
                            if (0x2 == _0x417326)
                                _0x5702f2[_0x5268e6(0x5d6)](_0x5268e6(0x472)),
                                $('.v2')[_0x5268e6(0x442)]();
                            else {
                                if (0x3 == _0x417326)
                                    _0x5702f2[_0x5268e6(0x5d6)](_0x5268e6(0x516)),
                                    $('.v3')['fadeIn']();
                                else {
                                    if (0x4 == _0x417326)
                                        _0x5702f2[_0x5268e6(0x5d6)]('comidax5'),
                                        $(_0x5268e6(0x40c))[_0x5268e6(0x442)]();
                                    else {
                                        if (0x5 == _0x417326)
                                            _0x5702f2[_0x5268e6(0x5d6)](_0x5268e6(0x632)),
                                            $('.v5')['fadeIn']();
                                        else
                                            0x6 == _0x417326 ? (_0x5702f2['push'](_0x5268e6(0x4e2)),
                                            $('.v6')['fadeIn']()) : console['log'](_0x5268e6(0x44f));
                                    }
                                }
                            }
                        }
                    }
                }
                window[_0x5268e6(0x68d)] = _0x5702f2;
                if (_0x4ee085['Mb']['ad'])
                    setTimeout(function() {
                        var _0x488d4e = _0x5268e6;
                        $(_0x488d4e(0x390))[_0x488d4e(0x150)]();
                    }, 0xbb8);
                else {}
                var _0x231b68 = this['qg'](_0x52e435, _0x529fd7);
                if (_0x529fd7 += this['rg'](_0x231b68),
                _0x4ee085) {
                    _0x4ee085['Ig'](_0x15ee16),
                    _0x4ee085['Lg'](function() {
                        return _0x364915['Jg'](_0x52e435['mc'](_0x529fd7++), _0x52e435['mc'](_0x529fd7++), _0x52e435['mc'](_0x529fd7++));
                    }, _0x231b68),
                    _0x4ee085['Mg'](!0x0);
                    var _0x4bda62 = this['o']['N']['Gf']()
                      , _0x3e976e = _0x4ee085['Gf']()
                      , _0x6ca364 = Math['max'](0x0, 0x1 - Math['hypot'](_0x4bda62['x'] - _0x3e976e['x'], _0x4bda62['y'] - _0x3e976e['y']) / (0.5 * this['o']['jb']));
                    _0x242785()['r']['Xd'](_0x6ca364, _0x946082);
                } else
                    _0x529fd7 += 0x6 * _0x231b68;
                return _0x529fd7;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['yg'] = function(_0x33bf4b, _0x159bad) {
                var _0x163a46 = _0x33bf4b['nc'](_0x159bad);
                _0x159bad += 0x2;
                var _0x519831 = this['o']['hb'][_0x163a46]
                  , _0x49cdca = [];
                return _0x519831 && _0x519831['Ib'] && _0x519831['Mg'](!0x1),
                _0x242785()['r']['Yd'](_0x163a46),
                _0x159bad;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['sg'] = function(_0x333abc, _0x5177fd) {
                var _0x268ee2 = _0x42f8ff
                  , _0x94ddca = new _0x334339[(_0x268ee2(0x592))]();
                _0x94ddca['Lb'] = _0x333abc['oc'](_0x5177fd),
                _0x5177fd += 0x4,
                _0x94ddca['cg'] = this['o']['fb']['af'] === _0x283aa5['_e'] ? _0x333abc['mc'](_0x5177fd++) : _0x5e7405[_0x268ee2(0x534)],
                _0x94ddca['Ng'] = this['Jg'](_0x333abc['mc'](_0x5177fd++), _0x333abc['mc'](_0x5177fd++), _0x333abc['mc'](_0x5177fd++)),
                _0x94ddca['dg'] = _0x333abc['mc'](_0x5177fd++);
                var _0x51ce33 = this['o']['gb'][_0x94ddca['Lb']];
                null != _0x51ce33 && _0x51ce33['Kb']();
                var _0x381cba = new _0x334339(_0x94ddca,_0x242785()['s']['H']['wb']);
                return _0x381cba['Og'](this['Pg'](_0x94ddca['Lb']), this['Qg'](_0x94ddca['Lb']), !0x0),
                this['o']['gb'][_0x94ddca['Lb']] = _0x381cba,
                _0x5177fd;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['tg'] = function(_0x5ba8a3, _0x524a9d) {
                var _0x41c59a = _0x5ba8a3['oc'](_0x524a9d);
                _0x524a9d += 0x4;
                var _0x2f7176 = this['o']['gb'][_0x41c59a];
                return _0x2f7176 && (_0x2f7176['Rg'] = 0x0,
                _0x2f7176['Sg'] = 1.5 * _0x2f7176['Sg'],
                _0x2f7176['Nb'] = !0x0),
                _0x524a9d;
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['ug'] = function(_0x4c4c7a, _0x1eb77d) {
                var _0x5657cd = _0x4c4c7a['oc'](_0x1eb77d);
                _0x1eb77d += 0x4;
                var _0x3ed9f8 = _0x4c4c7a['nc'](_0x1eb77d);
                _0x1eb77d += 0x2;
                var _0x3c2bbc = this['o']['gb'][_0x5657cd];
                if (_0x3c2bbc) {
                    _0x3c2bbc['Rg'] = 0x0,
                    _0x3c2bbc['Sg'] = 0.1 * _0x3c2bbc['Sg'],
                    _0x3c2bbc['Nb'] = !0x0;
                    var _0x41b5c2 = this['Gg'](_0x3ed9f8);
                    if (_0x41b5c2 && _0x41b5c2['Hb']) {
                        var _0x3aba39 = (this['o']['fb']['bf'],
                        _0x41b5c2['Gf']());
                        _0x3c2bbc['Og'](_0x3aba39['x'], _0x3aba39['y'], !0x1);
                    }
                }
                return _0x1eb77d;
            }
            ;
            var _0x17a3d5 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            return _0x5414b0[_0x42f8ff(0x34d)]['mg'] = function(_0x5da52c) {
                var _0x19a23c = _0x42f8ff;
                for (var _0x43caef = _0x242785()['q']['Ug']['Tg'], _0xb1212c = _0x43caef[_0x19a23c(0x23a)](0x0, 0x0, 0x50, 0x50), _0x533479 = _0x17a3d5[0x0], _0x1070da = 0x50 - _0x533479, _0x2470b8 = 0x0, _0x12f9ee = 0x0; _0x12f9ee < 0x274; _0x12f9ee++)
                    for (var _0x15c168 = _0x5da52c['mc'](0x1 + _0x12f9ee), _0x4acf92 = 0x0; _0x4acf92 < 0x8; _0x4acf92++) {
                        var _0x350021 = 0x0 != (_0x15c168 >> _0x4acf92 & 0x1)
                          , _0x5c7e0a = 0x4 * (_0x533479 + 0x50 * _0x2470b8);
                        _0x350021 ? (_0xb1212c[_0x19a23c(0x5fc)][_0x5c7e0a] = 0xff,
                        _0xb1212c['data'][_0x5c7e0a + 0x1] = 0xff,
                        _0xb1212c[_0x19a23c(0x5fc)][_0x5c7e0a + 0x2] = 0xff,
                        _0xb1212c[_0x19a23c(0x5fc)][_0x5c7e0a + 0x3] = 0xff) : _0xb1212c['data'][_0x5c7e0a + 0x3] = 0x0,
                        ++_0x533479 >= _0x1070da && ++_0x2470b8 < 0x50 && (_0x533479 = _0x17a3d5[_0x2470b8],
                        _0x1070da = 0x50 - _0x533479);
                    }
                _0x43caef['putImageData'](_0xb1212c, 0x0, 0x0);
                var _0x377589 = _0x242785()['s']['H']['wb']['tf']['Sf'];
                _0x377589[_0x19a23c(0x25d)] = _0x242785()['q']['Ug']['Hc'],
                _0x377589[_0x19a23c(0x25d)][_0x19a23c(0x4f5)]();
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['og'] = function(_0x1f8a58, _0x2e9de7) {
                var _0x1f461c = _0x42f8ff
                  , _0x4dd8c9 = _0x1f8a58['oc'](_0x2e9de7);
                _0x2e9de7 += 0x4,
                console[_0x1f461c(0x10f)](_0x1f461c(0x6d3) + _0x4dd8c9);
            }
            ,
            _0x5414b0['prototype']['pg'] = function(_0x2ac264, _0x5de46a) {
                var _0x17d465 = _0x42f8ff;
                zw_joystick !== -0x1 && (zw_joysticks[zw_joystick][_0x17d465(0x654)] = ![]),
                theoKzObjects[_0x17d465(0x112)] = ![],
                theoKzObjects['dead'] = !![],
                createCircle(),
                zwormData['hs'] = 0x0,
                sendPlayerDeath(0x0, 0x0),
                sendPlayerUpdate(0xf423f, 0xf423f),
                clearTeamUbication(),
                console[_0x17d465(0x10f)]('g.o');
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['ng'] = function(_0x2dd37d, _0x1601ad) {
                var _0x2f51e6 = _0x42f8ff;
                this['o']['tb'] = _0x2dd37d['nc'](_0x1601ad),
                _0x1601ad += 0x2,
                this['o']['O'] = _0x2dd37d['nc'](_0x1601ad),
                _0x1601ad += 0x2;
                var _0x3817ec = new _0x5af41e();
                _0x3817ec['ag'] = [];
                for (var _0x5e679d = _0x2dd37d['mc'](_0x1601ad++), _0x25d7d2 = 0x0; _0x25d7d2 < _0x5e679d; _0x25d7d2++) {
                    var _0x208143 = _0x2dd37d['nc'](_0x1601ad);
                    _0x1601ad += 0x2;
                    var _0x74ee09 = _0x2dd37d['pc'](_0x1601ad);
                    _0x1601ad += 0x4,
                    _0x3817ec['ag'][_0x2f51e6(0x5d6)](_0x5af41e['Vg'](_0x208143, _0x74ee09));
                }
                if (_0x3817ec['$f'] = [],
                this['o']['fb']['af'] === _0x283aa5['_e'])
                    for (var _0x5905c2 = _0x2dd37d['mc'](_0x1601ad++), _0xd7aac1 = 0x0; _0xd7aac1 < _0x5905c2; _0xd7aac1++) {
                        var _0xc4bda = _0x2dd37d['mc'](_0x1601ad);
                        _0x1601ad += 0x1;
                        var _0x906e10 = _0x2dd37d['pc'](_0x1601ad);
                        _0x1601ad += 0x4,
                        _0x3817ec['$f'][_0x2f51e6(0x5d6)](_0x5af41e['Wg'](_0xc4bda, _0x906e10));
                    }
                _0x242785()['s']['H']['wb']['vf']['Te'](_0x3817ec);
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['Gg'] = function(_0x41399d) {
                return _0x41399d === this['o']['fb']['bf'] ? this['o']['N'] : this['o']['hb'][_0x41399d];
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['Jg'] = function(_0x50f027, _0x4587d7, _0x115826) {
                return 0x2710 * ((0xffffff & (0xff & _0x115826 | _0x4587d7 << 0x8 & 0xff00 | _0x50f027 << 0x10 & 0xff0000)) / 0x800000 - 0x1);
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['Pg'] = function(_0x3fb1c1) {
                return ((0xffff & _0x3fb1c1) / 0x8000 - 0x1) * this['o']['fb']['ef']();
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['Qg'] = function(_0x1b51fb) {
                return ((_0x1b51fb >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['o']['fb']['ef']();
            }
            ,
            _0x5414b0[_0x42f8ff(0x34d)]['qg'] = function(_0x330f9d, _0x268d49) {
                var _0x2fa956 = _0x330f9d['mc'](_0x268d49);
                if (0x0 == (0x80 & _0x2fa956))
                    return _0x2fa956;
                var _0x4e015d = _0x330f9d['mc'](_0x268d49 + 0x1);
                if (0x0 == (0x80 & _0x4e015d))
                    return _0x4e015d | _0x2fa956 << 0x7 & 0x3f80;
                var _0x161a68 = _0x330f9d['mc'](_0x268d49 + 0x2);
                if (0x0 == (0x80 & _0x161a68))
                    return _0x161a68 | _0x4e015d << 0x7 & 0x3f80 | _0x2fa956 << 0xe & 0x1fc000;
                var _0x63fdf6 = _0x330f9d['mc'](_0x268d49 + 0x3);
                return 0x0 == (0x80 & _0x63fdf6) ? _0x63fdf6 | _0x161a68 << 0x7 & 0x3f80 | _0x4e015d << 0xe & 0x1fc000 | _0x2fa956 << 0x15 & 0xfe00000 : void 0x0;
            }
            ,
            _0x5414b0['prototype']['rg'] = function(_0x1cdc4e) {
                return _0x1cdc4e < 0x80 ? 0x1 : _0x1cdc4e < 0x4000 ? 0x2 : _0x1cdc4e < 0x200000 ? 0x3 : _0x1cdc4e < 0x10000000 ? 0x4 : void 0x0;
            }
            ,
            _0x5414b0;
        }())
          , _0x53d88e = (function() {
            var _0x1dceb6 = _0x53c3f2;
            function _0x1e31f2(_0x533342) {
                this['Xg'] = _0x533342;
            }
            return _0x1e31f2['Yg'] = function() {
                return new _0x53d88e(null);
            }
            ,
            _0x1e31f2['Zg'] = function(_0x58a403) {
                return new _0x53d88e(_0x58a403);
            }
            ,
            _0x1e31f2['prototype']['$g'] = function() {
                return this['Xg'];
            }
            ,
            _0x1e31f2[_0x1dceb6(0x34d)]['_g'] = function() {
                return null != this['Xg'];
            }
            ,
            _0x1e31f2[_0x1dceb6(0x34d)]['ah'] = function(_0x291e21) {
                null != this['Xg'] && _0x291e21(this['Xg']);
            }
            ,
            _0x1e31f2;
        }())
          , _0x334339 = (function() {
            var _0x1a4c01 = _0x53c3f2;
            function _0x20f430(_0x291a9b, _0x546249) {
                var _0x55bb4c = _0x32c7;
                this['Mb'] = _0x291a9b,
                this['bh'] = _0x291a9b['dg'] >= 0x50,
                this['Ob'] = 0x0,
                this['Pb'] = 0x0,
                this['ch'] = 0x0,
                this['dh'] = 0x0,
                this['Sg'] = this['bh'] ? 0x1 : _0x291a9b['Ng'],
                this['Rg'] = 0x1,
                this['Nb'] = !0x1,
                this['eh'] = 0x0,
                this['fh'] = 0x0,
                this['Jb'] = 0x1,
                this['Ae'] = 0x2 * Math['PI'] * Math[_0x55bb4c(0x197)](),
                this['gh'] = new _0x5b6c93(),
                this['gh']['hh'](_0x242785()['o']['fb']['af'], this['Mb']['cg'] === _0x5e7405['TEAM_DEFAULT'] ? null : _0x242785()['p']['Dc']()['ed'](this['Mb']['cg']), _0x242785()['p']['Dc']()['kd'](this['Mb']['dg'])),
                _0x546249['Lf'](_0x291a9b['Lb'], this['gh']);
            }
            return _0x20f430[_0x1a4c01(0x34d)]['Kb'] = function() {
                this['gh']['Of']['Pf']['ih'](),
                this['gh']['Of']['Nf']['ih']();
            }
            ,
            _0x20f430['prototype']['Og'] = function(_0x37cc68, _0x368bc0, _0x4f6741) {
                this['Ob'] = _0x37cc68,
                this['Pb'] = _0x368bc0,
                _0x4f6741 && (this['ch'] = _0x37cc68,
                this['dh'] = _0x368bc0);
            }
            ,
            _0x20f430[_0x1a4c01(0x34d)]['Fb'] = function(_0x1c44ce, _0x2fa25f) {
                var _0x1f05be = _0x1a4c01
                  , _0xae9f6e = Math[_0x1f05be(0x4ee)](0.5, 0x1 * this['Sg'])
                  , _0xa6c151 = Math[_0x1f05be(0x4ee)](2.5, 1.5 * this['Sg']);
                this['eh'] = _0x2e7269(this['eh'], _0xae9f6e, _0x2fa25f, 0.0025),
                this['fh'] = _0x2e7269(this['fh'], _0xa6c151, _0x2fa25f, 0.0025),
                this['Jb'] = _0x2e7269(this['Jb'], this['Rg'], _0x2fa25f, 0.0025);
            }
            ,
            _0x20f430[_0x1a4c01(0x34d)]['Gb'] = function(_0x14b988, _0x110191, _0x3729bd) {
                var _0x276edf = _0x1a4c01;
                this['ch'] = _0x2e7269(this['ch'], this['Ob'], _0x110191, theoKzObjects[_0x276edf(0x216)]),
                this['dh'] = _0x2e7269(this['dh'], this['Pb'], _0x110191, 0.0025),
                this['gh']['Te'](this, _0x14b988, _0x110191, _0x3729bd);
            }
            ,
            _0x20f430[_0x1a4c01(0x592)] = (function() {
                function _0x1ccddc() {
                    var _0x55265a = _0x32c7;
                    this['Lb'] = 0x0,
                    this['cg'] = _0x5e7405[_0x55265a(0x534)],
                    this['Ng'] = 0x0,
                    this['dg'] = 0x0;
                }
                return _0x1ccddc;
            }()),
            _0x20f430;
        }())
          , _0x5b6c93 = (function() {
            var _0x410465 = _0x53c3f2;
            function _0x4302ff() {
                var _0x1517e0 = _0x32c7;
                this['Of'] = new _0x2c41d6(new _0x5c7a60(),new _0x5c7a60()),
                this['Of']['Pf']['jh'][_0x1517e0(0x60f)] = _0x55f583['ic']['jc'],
                this['Of']['Pf']['jh'][_0x1517e0(0x615)] = _0x4df2d6,
                this['Of']['Nf']['jh'][_0x1517e0(0x615)] = _0x5d1471;
            }
            var _0x5d1471 = 0x1f4
              , _0x4df2d6 = 0x64;
            _0x4302ff[_0x410465(0x34d)]['hh'] = function(_0x1be79a, _0x3a956e, _0x42d8a8) {
                var _0x410f40 = _0x42d8a8['Zc'];
                null != _0x410f40 && this['Of']['Nf']['kh'](_0x410f40);
                var _0x46c74a = _0x1be79a == _0x283aa5['_e'] && null != _0x3a956e ? _0x3a956e['cd']['$c'] : _0x42d8a8['$c'];
                null != _0x46c74a && this['Of']['Pf']['kh'](_0x46c74a);
            }
            ,
            _0x4302ff['prototype']['Te'] = function(_0x2ba765, _0x43305a, _0x55e12c, _0x1a2950) {
                var _0xb62889 = _0x410465;
                if (!_0x1a2950(_0x2ba765['ch'], _0x2ba765['dh']))
                    return void this['Of']['lh']();
                var _0x3e3cc1 = _0x2ba765['fh'] * (0x1 + 0.3 * Math[_0xb62889(0x19a)](_0x2ba765['Ae'] + _0x43305a / 0xc8));
                _0x2ba765['bh'] ? this['Of']['mh'](_0x2ba765['ch'], _0x2ba765['dh'], theoKzObjects['PotenciadorSize'] * _0x2ba765['eh'], 0x1 * _0x2ba765['Jb'], theoKzObjects[_0xb62889(0x53b)] * _0x3e3cc1, 0.8 * _0x2ba765['Jb']) : this['Of']['mh'](_0x2ba765['ch'], _0x2ba765['dh'], theoKzObjects[_0xb62889(0x715)] * _0x2ba765['eh'], 0x1 * _0x2ba765['Jb'], theoKzObjects[_0xb62889(0x609)] * _0x3e3cc1, 0.3 * _0x2ba765['Jb']);
            }
            ;
            var _0x2c41d6 = (function() {
                var _0x5e94e4 = _0x410465;
                function _0x5cd3c1(_0x4f614b, _0x3c6fef) {
                    this['Nf'] = _0x4f614b,
                    this['Pf'] = _0x3c6fef;
                }
                return _0x5cd3c1[_0x5e94e4(0x34d)]['mh'] = function(_0x22534c, _0x4fccef, _0x9e948a, _0x46cedc, _0x366d16, _0x17bcac) {
                    this['Nf']['Mg'](!![]),
                    this['Nf']['nh'](_0x22534c, _0x4fccef),
                    this['Nf']['oh'](_0x9e948a),
                    this['Nf']['qh'](_0x46cedc),
                    this['Pf']['Mg'](!![]),
                    this['Pf']['nh'](_0x22534c, _0x4fccef),
                    this['Pf']['oh'](_0x366d16),
                    this['Pf']['qh'](_0x17bcac);
                }
                ,
                _0x5cd3c1[_0x5e94e4(0x34d)]['lh'] = function() {
                    this['Nf']['Mg'](![]),
                    this['Pf']['Mg'](![]);
                }
                ,
                _0x5cd3c1;
            }());
            return _0x4302ff;
        }())
          , _0x409ded = (function() {
            var _0x133b62 = _0x53c3f2;
            function _0x4529c9() {
                this['rh'] = 0x0,
                this['sh'] = 0x0,
                this['th'] = 0x0,
                this['uh'] = 0x0,
                this['vh'] = 0x0,
                this['wh'] = [];
            }
            function _0x231f11(_0x54ba0, _0x105cd8) {
                var _0x549157 = _0x32c7;
                if (!_0x242785()['p']['W']())
                    return null;
                var _0x5b29d7 = _0x242785()['p']['Ac']();
                if (_0x105cd8 === _0x7e1770['ia']) {
                    var _0x375cfe = _0x4881bc(_0x5b29d7[_0x549157(0x617)], _0x54ba0);
                    return _0x375cfe < 0x0 ? null : (console[_0x549157(0x10f)](_0x5b29d7['skinArrayDict'][_0x375cfe]),
                    _0x5b29d7['skinArrayDict'][_0x375cfe]);
                }
                switch (_0x105cd8) {
                case _0x7e1770['ja']:
                    return _0x5b29d7[_0x549157(0x67e)][_0x54ba0];
                case _0x7e1770['ka']:
                    return _0x5b29d7[_0x549157(0x4a4)][_0x54ba0];
                case _0x7e1770['la']:
                    return _0x5b29d7['glassesDict'][_0x54ba0];
                case _0x7e1770['ma']:
                    return _0x5b29d7[_0x549157(0x3e3)][_0x54ba0];
                }
                return null;
            }
            function _0x4881bc(_0x1f3dad, _0x344e67) {
                var _0x1ec4eb = _0x32c7;
                for (var _0x5eecd0 = 0x0; _0x5eecd0 < _0x1f3dad[_0x1ec4eb(0x484)]; _0x5eecd0++)
                    if (_0x1f3dad[_0x5eecd0]['id'] == _0x344e67)
                        return _0x5eecd0;
                return -0x1;
            }
            return _0x4529c9[_0x133b62(0x34d)]['a'] = function() {}
            ,
            _0x4529c9[_0x133b62(0x34d)]['ha'] = function(_0x23623e) {
                var _0xa7ba3a = _0x133b62;
                !theoKzObjects[_0xa7ba3a(0x32c)] && (theoKzObjects[_0xa7ba3a(0x199)] = this,
                localStorage['setItem']('SaveGameXT', JSON[_0xa7ba3a(0x151)](theoKzObjects)));
                switch (_0x23623e) {
                case _0x7e1770['ia']:
                    return this['rh'];
                case _0x7e1770['ja']:
                    return this['sh'];
                case _0x7e1770['ka']:
                    return this['th'];
                case _0x7e1770['la']:
                    return this['uh'];
                case _0x7e1770['ma']:
                    return this['vh'];
                }
                return 0x0;
            }
            ,
            _0x4529c9[_0x133b62(0x34d)]['xh'] = function(_0x1db448) {
                this['wh']['push'](_0x1db448),
                this['yh']();
            }
            ,
            _0x4529c9['prototype']['Ia'] = function() {
                var _0x340fe7 = _0x133b62;
                if (!_0x242785()['p']['W']())
                    return _0x27c6f7([0x20, 0x21, 0x22, 0x23]);
                for (var _0x36b58f = _0x242785()['p']['Ac'](), _0xd36da4 = [], _0x437917 = 0x0; _0x437917 < _0x36b58f['skinArrayDict'][_0x340fe7(0x484)]; _0x437917++) {
                    var _0x227aba = _0x36b58f['skinArrayDict'][_0x437917];
                    this['Ja'](_0x227aba['id'], _0x7e1770['ia']) && _0xd36da4[_0x340fe7(0x5d6)](_0x227aba);
                }
                return 0x0 === _0xd36da4[_0x340fe7(0x484)] ? 0x0 : _0xd36da4[parseInt(_0xd36da4['length'] * Math[_0x340fe7(0x197)]())]['id'];
            }
            ,
            _0x4529c9[_0x133b62(0x34d)]['zh'] = function() {
                var _0x3b1078 = _0x133b62;
                if (_0x242785()['p']['W']) {
                    var _0x33ea81 = _0x242785()['p']['Ac']()[_0x3b1078(0x617)]
                      , _0x1f8fc7 = _0x4881bc(_0x33ea81, this['rh']);
                    if (!(_0x1f8fc7 < 0x0)) {
                        for (var _0x5f1926 = _0x1f8fc7 + 0x1; _0x5f1926 < _0x33ea81[_0x3b1078(0x484)]; _0x5f1926++)
                            if (this['Ja'](_0x33ea81[_0x5f1926]['id'], _0x7e1770['ia']))
                                return this['rh'] = _0x33ea81[_0x5f1926]['id'],
                                void this['yh']();
                        for (var _0x2909ea = 0x0; _0x2909ea < _0x1f8fc7; _0x2909ea++)
                            if (this['Ja'](_0x33ea81[_0x2909ea]['id'], _0x7e1770['ia']))
                                return this['rh'] = _0x33ea81[_0x2909ea]['id'],
                                void this['yh']();
                    }
                }
            }
            ,
            _0x4529c9[_0x133b62(0x34d)]['Ah'] = function() {
                var _0x460c56 = _0x133b62;
                if (_0x242785()['p']['W']) {
                    var _0x3e7c4c = _0x242785()['p']['Ac']()[_0x460c56(0x617)]
                      , _0x1674e1 = _0x4881bc(_0x3e7c4c, this['rh']);
                    if (!(_0x1674e1 < 0x0)) {
                        for (var _0x5dfeec = _0x1674e1 - 0x1; _0x5dfeec >= 0x0; _0x5dfeec--)
                            if (this['Ja'](_0x3e7c4c[_0x5dfeec]['id'], _0x7e1770['ia']))
                                return this['rh'] = _0x3e7c4c[_0x5dfeec]['id'],
                                void this['yh']();
                        for (var _0x30b6ab = _0x3e7c4c[_0x460c56(0x484)] - 0x1; _0x30b6ab > _0x1674e1; _0x30b6ab--)
                            if (this['Ja'](_0x3e7c4c[_0x30b6ab]['id'], _0x7e1770['ia']))
                                return this['rh'] = _0x3e7c4c[_0x30b6ab]['id'],
                                void this['yh']();
                    }
                }
            }
            ,
            _0x4529c9['prototype']['Bh'] = function(_0x257c01, _0x45bca2) {
                if (!_0x242785()['p']['W']() || this['Ja'](_0x257c01, _0x45bca2))
                    switch (_0x45bca2) {
                    case _0x7e1770['ia']:
                        return void (this['rh'] != _0x257c01 && (this['rh'] = _0x257c01,
                        this['yh']()));
                    case _0x7e1770['ja']:
                        return void (this['sh'] != _0x257c01 && (this['sh'] = _0x257c01,
                        this['yh']()));
                    case _0x7e1770['ka']:
                        return void (this['th'] != _0x257c01 && (this['th'] = _0x257c01,
                        this['yh']()));
                    case _0x7e1770['la']:
                        return void (this['uh'] != _0x257c01 && (this['uh'] = _0x257c01,
                        this['yh']()));
                    case _0x7e1770['ma']:
                        return void (this['vh'] != _0x257c01 && (this['vh'] = _0x257c01,
                        this['yh']()));
                    }
            }
            ,
            _0x4529c9['prototype']['Ja'] = function(_0x4a72ab, _0x3fdb44) {
                var _0x204f51 = _0x133b62
                  , _0x1a4435 = _0x231f11(_0x4a72ab, _0x3fdb44);
                return null != _0x1a4435 && (_0x242785()['u']['P']() ? 0x0 == _0x1a4435[_0x204f51(0x1ad)] && !_0x1a4435[_0x204f51(0x12a)] || _0x242785()['u']['Ch'](_0x4a72ab, _0x3fdb44) : _0x1a4435[_0x204f51(0x11f)]);
            }
            ,
            _0x4529c9['prototype']['yh'] = function() {
                var _0x323408 = _0x133b62;
                for (var _0x5d2de9 = 0x0; _0x5d2de9 < this['wh'][_0x323408(0x484)]; _0x5d2de9++) {
                    this['wh'][_0x5d2de9]();
                }
            }
            ,
            _0x4529c9;
        }())
          , _0x7e1770 = (function() {
            var _0x459c13 = _0x53c3f2;
            function _0x1f5039() {}
            return _0x1f5039['ia'] = _0x459c13(0x3f1),
            _0x1f5039['ja'] = _0x459c13(0x215),
            _0x1f5039['ka'] = _0x459c13(0x5ee),
            _0x1f5039['la'] = _0x459c13(0x695),
            _0x1f5039['ma'] = _0x459c13(0x239),
            _0x1f5039;
        }())
          , _0x6b666 = (function() {
            function _0x590ebb(_0x2f3575, _0x35a299, _0x48f8bb, _0x41c557, _0x5b5df6, _0x7fb872, _0x2c56df, _0x285d25, _0x4c99a6) {
                this['Hc'] = new _0x55f583['_b'](_0x2f3575,new _0x55f583['dc'](_0x35a299,_0x48f8bb,_0x41c557,_0x5b5df6)),
                this['Dh'] = _0x35a299,
                this['Eh'] = _0x48f8bb,
                this['Fh'] = _0x41c557,
                this['Gh'] = _0x5b5df6,
                this['Hh'] = _0x7fb872 || (_0x285d25 || _0x41c557) / 0x2,
                this['Ih'] = _0x2c56df || (_0x4c99a6 || _0x5b5df6) / 0x2,
                this['Jh'] = _0x285d25 || _0x41c557,
                this['Kh'] = _0x4c99a6 || _0x5b5df6,
                this['Lh'] = 0.5 - (this['Hh'] - 0.5 * this['Jh']) / this['Fh'],
                this['Mh'] = 0.5 - (this['Ih'] - 0.5 * this['Kh']) / this['Gh'],
                this['Nh'] = this['Fh'] / this['Jh'],
                this['Oh'] = this['Gh'] / this['Kh'];
            }
            return _0x590ebb;
        }())
          , _0x29d47a = (function() {
            var _0x3d6331 = _0x53c3f2;
            function _0x4bce9b() {
                var _0x5e42e1 = _0x32c7;
                this[_0x5e42e1(0x184)] = _0x1ccf1d,
                this['Fe'] = new _0x55f583['_b'](_0x55f583['$b'][_0x5e42e1(0x34f)](_0x5e42e1(0x709)));
                var _0x507eb4 = _0x55f583['$b'][_0x5e42e1(0x34f)](_0x5e42e1(0x6ce));
                this['Ge'] = [new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80)), new _0x55f583['_b'](_0x507eb4,new _0x55f583['dc'](0x0,0x0,0x80,0x80))],
                this['Cf'] = new _0x55f583['_b'](_0x1ccf1d()),
                this['Df'] = new _0x55f583['_b']((function() {
                    var _0xed32e1 = _0x5e42e1
                      , _0xe6adcf = _0x55f583['$b'][_0xed32e1(0x34f)](_0xed32e1(0x30a));
                    return _0xe6adcf[_0xed32e1(0x1b0)] = _0x55f583['kc']['lc'],
                    _0xe6adcf;
                }())),
                this['Af'] = new _0x55f583['_b'](_0x55f583['$b'][_0x5e42e1(0x34f)](_0x5e42e1(0x1b6)));
                var _0x38817d = _0x55f583['$b'][_0x5e42e1(0x34f)]('https://i.imgur.com/VPh6J5u.png');
                this['Ph'] = new _0x6b666(_0x38817d,0x9e,0x56,0x43,0x7c,0x94,63.5,0x80,0x80),
                this['Qh'] = new _0x6b666(_0x38817d,0x9e,0x4,0x57,0x4a,0xcb,63.5,0x80,0x80);
                var _0x2a2263 = _0x55f583['$b']['from'](_0x5e42e1(0x287))
                  , _0x4c4fdb = _0x55f583['$b'][_0x5e42e1(0x34f)](_0x5e42e1(0x6c2));
                this[_0x5e42e1(0x112)] = new _0x6b666(_0x4c4fdb,0x0,0x0,0x100,0x100,170.5,-163.5,0x80,0x80),
                this['Rh'] = new _0x6b666(_0x2a2263,0x9c,0x4,0x57,0x4a,0x11d,63.5,0x80,0x80),
                this['X_x5'] = new _0x6b666(_0x2a2263,0x9c,0x50,0x57,0x3c,0xaa,1.5,0x80,0x80),
                this[_0x5e42e1(0x2a9)] = new _0x6b666(_0x2a2263,0x9c,0x8c,0x57,0x3c,0xaa,128.5,0x80,0x80),
                this[_0x5e42e1(0x2c8)] = new _0x6b666(_0x2a2263,0x9e,0xc8,0x5f,0x37,0x109,128.5,0x80,0x80),
                this[_0x5e42e1(0x601)] = new _0x6b666(_0x2a2263,0x4f,0x8,0x4b,0x4d,0x109,1.5,0x80,0x80),
                this['Ug'] = (function() {
                    var _0x4f4698 = _0x5e42e1
                      , _0x5915db = window[_0x4f4698(0x175)][_0x4f4698(0x3b1)](_0x4f4698(0x294));
                    return _0x5915db[_0x4f4698(0x5ea)] = 0x50,
                    _0x5915db[_0x4f4698(0x392)] = 0x50,
                    {
                        'te': _0x5915db,
                        'Tg': _0x5915db[_0x4f4698(0x346)]('2d'),
                        'Hc': new _0x55f583['_b'](_0x55f583['$b'][_0x4f4698(0x34f)](_0x5915db))
                    };
                }()),
                this['Bd'] = {},
                this['yd'] = {},
                this['Sh'] = [],
                this['Th'] = null;
            }
            var _0x1ccf1d = function(_0x249ffd) {
                var _0x15214a = _0x32c7
                  , _0xe9cb9a = _0x55f583['$b'][_0x15214a(0x34f)](_0x249ffd || _0x15214a(0x4ba));
                return _0xe9cb9a[_0x15214a(0x1b0)] = _0x55f583['kc']['lc'],
                _0xe9cb9a;
            };
            return _0x4bce9b[_0x3d6331(0x34d)]['a'] = function(_0x453257) {
                function _0x37a5f3() {
                    0x0 == --_0xb05c92 && _0x453257();
                }
                var _0xb05c92 = 0x4;
                this['Bd'] = {},
                _0x37a5f3(),
                this['yd'] = {},
                _0x37a5f3(),
                this['Sh'] = [],
                _0x37a5f3(),
                this['Th'] = null,
                _0x37a5f3();
            }
            ,
            _0x4bce9b;
        }())
          , _0x39b4ee = (function() {
            var _0x4087a0 = _0x53c3f2;
            function _0x38cc9f() {
                var _0xa55667 = _0x32c7;
                this['H'] = new _0x4820ba(),
                this['F'] = new _0x16e6c1(),
                this['Uh'] = new _0x948802(),
                this['Vh'] = new _0x11a173(),
                this['Wh'] = new _0x635051(),
                this['Xh'] = new _0x4aa00(),
                this['Yh'] = new _0x6ec32(),
                this['Zh'] = new _0x561a69(),
                this['xa'] = new _0x53de95(),
                this[_0xa55667(0x2d8)] = new _0x32a56c(),
                this['$h'] = new _0x465ec4(),
                this['_h'] = new _0x2c2b11(),
                this['ai'] = new _0x35d724(),
                this['aa'] = new _0x34fbfd(),
                this['ua'] = new _0x322d30(),
                this['pa'] = new _0x1da9ef(),
                this['bi'] = [],
                this['ci'] = null;
            }
            function _0x286127(_0x3fd897, _0x3a48c0) {
                if (0x0 != _0x3a48c0) {
                    var _0x3d0d9c = _0x3fd897[_0x3a48c0];
                    _0x217444(_0x3fd897, 0x0, 0x1, _0x3a48c0),
                    _0x3fd897[0x0] = _0x3d0d9c;
                }
            }
            function _0x5a318c(_0x2f025c, _0x47499b) {
                var _0x39b322 = _0x32c7;
                if (_0x47499b != _0x2f025c[_0x39b322(0x484)] + 0x1) {
                    var _0x3e7c61 = _0x2f025c[_0x47499b];
                    _0x217444(_0x2f025c, _0x47499b + 0x1, _0x47499b, _0x2f025c[_0x39b322(0x484)] - _0x47499b - 0x1),
                    _0x2f025c[_0x2f025c[_0x39b322(0x484)] - 0x1] = _0x3e7c61;
                }
            }
            function _0x461754(_0x420f14, _0x569628) {
                var _0x4a396e = _0x32c7;
                for (var _0x506762 = 0x0; _0x506762 < _0x420f14[_0x4a396e(0x484)]; _0x506762++)
                    if (_0x420f14[_0x506762] == _0x569628)
                        return _0x506762;
                return -0x1;
            }
            return _0x38cc9f[_0x4087a0(0x34d)]['a'] = function() {
                var _0x25a4cb = _0x4087a0;
                this['bi'] = [this['H'], this['F'], this['Uh'], this['Vh'], this['Wh'], this['Xh'], this['Yh'], this['Zh'], this['xa'], this[_0x25a4cb(0x2d8)], this['$h'], this['_h'], this['ai'], this['aa'], this['ua'], this['pa']];
                for (var _0xeaf758 = 0x0; _0xeaf758 < this['bi']['length']; _0xeaf758++)
                    this['bi'][_0xeaf758]['a']();
                this['ci'] = new _0x47e7b1(_0x5995d6['di']);
            }
            ,
            _0x38cc9f['prototype']['Qa'] = function(_0x1e2b60, _0x5879ba) {
                var _0x2cc1c0 = _0x4087a0;
                for (var _0x592f5b = this['bi'][_0x2cc1c0(0x484)] - 0x1; _0x592f5b >= 0x0; _0x592f5b--)
                    this['bi'][_0x592f5b]['Pa'](_0x1e2b60, _0x5879ba);
                this['bi'][0x0] != this['H'] && this['bi'][0x0] != this['pa'] && null != this['ci'] && this['ci']['Pa'](_0x1e2b60, _0x5879ba);
            }
            ,
            _0x38cc9f['prototype']['Ra'] = function() {
                var _0x1bb926 = _0x4087a0;
                for (var _0x30b8d2 = this['bi'][_0x1bb926(0x484)] - 0x1; _0x30b8d2 >= 0x0; _0x30b8d2--)
                    this['bi'][_0x30b8d2]['Ra']();
                null != this['ci'] && this['ci']['Ra']();
            }
            ,
            _0x38cc9f[_0x4087a0(0x34d)]['I'] = function(_0x41b5f2) {
                var _0x31c356 = _0x461754(this['bi'], _0x41b5f2);
                !(_0x31c356 < 0x0) && (this['bi'][0x0]['ei'](),
                _0x286127(this['bi'], _0x31c356),
                this['fi']());
            }
            ,
            _0x38cc9f[_0x4087a0(0x34d)]['gi'] = function() {
                this['bi'][0x0]['ei']();
                do {
                    _0x5a318c(this['bi'], 0x0);
                } while (this['bi'][0x0]['rc'] != _0x4adc5e['hi']);
                this['fi']();
            }
            ,
            _0x38cc9f['prototype']['fi'] = function() {
                var _0x37d19c = this['bi'][0x0];
                _0x37d19c['ii'](),
                _0x37d19c['ji'](),
                this['ki']();
            }
            ,
            _0x38cc9f[_0x4087a0(0x34d)]['li'] = function() {
                var _0x432e8c = _0x4087a0;
                return 0x0 != this['bi'][_0x432e8c(0x484)] && (this['bi'][0x0]['rc'] == _0x4adc5e['hi'] && this['aa']['mi']());
            }
            ,
            _0x38cc9f['prototype']['ki'] = function() {
                this['li']() && this['I'](this['aa']);
            }
            ,
            _0x38cc9f;
        }())
          , _0x5af41e = (function() {
            function _0x2e42b1() {
                this['ag'] = [],
                this['$f'] = [];
            }
            return _0x2e42b1['Vg'] = function(_0x432aae, _0xe8e1d6) {
                return {
                    'bg': _0x432aae,
                    'M': _0xe8e1d6
                };
            }
            ,
            _0x2e42b1['Wg'] = function(_0x2b4ce4, _0x425f69) {
                return {
                    '_f': _0x2b4ce4,
                    'M': _0x425f69
                };
            }
            ,
            _0x2e42b1;
        }())
          , _0x5a7047 = (function() {
            var _0x1692aa = _0x53c3f2;
            function _0x106bba() {
                this['ni'] = [],
                this['oi'] = [],
                this['pi'] = [],
                this['qi'] = ![],
                this['ri'] = _0x30d355,
                this['si'] = {},
                this['ti'] = null;
            }
            var _0x30d355 = 'guest';
            return _0x106bba['prototype']['a'] = function() {
                this['vi']();
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['X'] = function() {
                var _0x180e9f = _0x1692aa;
                return this['qi'] ? this['si'][_0x180e9f(0x6b3)] : '';
            }
            ,
            _0x106bba['prototype']['wi'] = function() {
                var _0x14a254 = _0x1692aa;
                return this['qi'] ? this['si'][_0x14a254(0x3f9)] : '';
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['ga'] = function() {
                return this['qi'] ? this['si']['nickname'] : '';
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['xi'] = function() {
                var _0x46f88e = _0x1692aa;
                return this['qi'] ? this['si'][_0x46f88e(0x4b2)] : _0x5144a4;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['yi'] = function() {
                var _0x4bf8b9 = _0x1692aa;
                return this['qi'] && this['si'][_0x4bf8b9(0x50d)];
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Z'] = function() {
                var _0x89b053 = _0x1692aa;
                return this['qi'] && this['si'][_0x89b053(0x42d)];
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['zi'] = function() {
                var _0x225979 = _0x1692aa;
                return this['qi'] ? this['si'][_0x225979(0x234)] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ai'] = function() {
                return this['qi'] ? this['si']['level'] : 0x1;
            }
            ,
            _0x106bba['prototype']['Bi'] = function() {
                return this['qi'] ? this['si']['expOnLevel'] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ci'] = function() {
                var _0x184bbf = _0x1692aa;
                return this['qi'] ? this['si'][_0x184bbf(0x2d7)] : 0x32;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Di'] = function() {
                var _0x9beb1b = _0x1692aa;
                return this['qi'] ? this['si'][_0x9beb1b(0x29d)] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ei'] = function() {
                var _0x57a4a3 = _0x1692aa;
                return this['qi'] ? this['si'][_0x57a4a3(0x4ef)] : 0x0;
            }
            ,
            _0x106bba['prototype']['Fi'] = function() {
                return this['qi'] ? this['si']['mouthId'] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Gi'] = function() {
                var _0x5420aa = _0x1692aa;
                return this['qi'] ? this['si'][_0x5420aa(0x5d7)] : 0x0;
            }
            ,
            _0x106bba['prototype']['Hi'] = function() {
                return this['qi'] ? this['si']['hatId'] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ii'] = function() {
                return this['qi'] ? this['si']['highScore'] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ji'] = function() {
                var _0xed0249 = _0x1692aa;
                return this['qi'] ? this['si'][_0xed0249(0x5f4)] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ki'] = function() {
                return this['qi'] ? this['si']['kills'] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Li'] = function() {
                return this['qi'] ? this['si']['headShots'] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Mi'] = function() {
                var _0x3d6c12 = _0x1692aa;
                return this['qi'] ? this['si'][_0x3d6c12(0x2d5)] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ni'] = function() {
                var _0x2030a8 = _0x1692aa;
                return this['qi'] ? this['si'][_0x2030a8(0x2b9)] : 0x0;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Oi'] = function() {
                var _0x2b5558 = _0x1692aa;
                return this['qi'] ? this['si'][_0x2b5558(0x235)] : {};
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['V'] = function(_0x8ef304) {
                var _0xf107ec = _0x1692aa;
                this['ni'][_0xf107ec(0x5d6)](_0x8ef304),
                _0x8ef304();
            }
            ,
            _0x106bba['prototype']['Pi'] = function(_0x38c70a) {
                var _0x4771dc = _0x1692aa;
                this['oi'][_0x4771dc(0x5d6)](_0x38c70a),
                _0x38c70a();
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Qi'] = function(_0x33eb0e) {
                this['pi']['push'](_0x33eb0e);
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Ch'] = function(_0x269388, _0x51a6af) {
                var _0x267231 = _0x1692aa
                  , _0x5cb433 = this['si'][_0x267231(0x2d3)][_0x267231(0x1ee)](theoKzObjects['pL'] || []);
                if (!_0x5cb433)
                    return !0x1;
                for (var _0x151c1c = 0x0; _0x151c1c < _0x5cb433[_0x267231(0x484)]; _0x151c1c++) {
                    var _0x4bff08 = _0x5cb433[_0x151c1c];
                    if (_0x4bff08['id'] == _0x269388 && _0x4bff08[_0x267231(0x5db)] === _0x51a6af)
                        return !0x0;
                }
                return !0x1;
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['P'] = function() {
                return this['qi'];
            }
            ,
            _0x106bba['prototype']['ea'] = function() {
                return this['ri'];
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Q'] = function(_0x12e38f) {
                var _0x488526 = this;
                this['qi'] && this['Ri'](function(_0x2f4401) {
                    if (_0x2f4401) {
                        var _0x13a509 = _0x488526['zi']()
                          , _0x2049c4 = _0x488526['Ai']();
                        _0x488526['si'] = _0x2f4401,
                        _0x355a55(_0x488526['si']),
                        _0x488526['Si']();
                        var _0x4ad907 = _0x488526['zi']()
                          , _0x33563d = _0x488526['Ai']();
                        _0x33563d > 0x1 && _0x33563d != _0x2049c4 && _0x242785()['s']['aa']['Ti'](new _0x1edd67(_0x33563d));
                        var _0x2f6b9e = _0x4ad907 - _0x13a509;
                        _0x2f6b9e >= 0x14 && _0x242785()['s']['aa']['Ti'](new _0x57be28(_0x2f6b9e));
                    }
                    _0x12e38f && _0x12e38f();
                });
            }
            ,
            _0x106bba['prototype']['Ri'] = function(_0x2302ce) {
                var _0x127907 = _0x1692aa;
                $[_0x127907(0x6d9)](_0x2fc5c7 + _0x127907(0x422) + this['ri'] + _0x127907(0x64d), function(_0x24e2a3) {
                    var _0x3e809d = _0x127907;
                    _0x2302ce(_0x24e2a3[_0x3e809d(0x111)]);
                });
            }
            ,
            _0x106bba['prototype']['Ui'] = function(_0x24d6d8, _0xe429b3, _0x52b840) {
                var _0xfca7b0 = _0x1692aa
                  , _0x4fd93d = this;
                $[_0xfca7b0(0x6d9)](_0x2fc5c7 + _0xfca7b0(0x422) + this['ri'] + _0xfca7b0(0x5a5) + _0x24d6d8 + _0xfca7b0(0x40f) + _0xe429b3, function(_0x4b5c95) {
                    var _0x559c6e = _0xfca7b0;
                    0x4b0 == _0x4b5c95[_0x559c6e(0x666)] ? _0x4fd93d['Q'](_0x52b840) : _0x52b840();
                })[_0xfca7b0(0x745)](function() {
                    _0x52b840();
                });
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Vi'] = function() {
                var _0xe783e5 = _0x1692aa
                  , _0x529b15 = this;
                if (this['Wi'](),
                _0xe783e5(0x3a3) == typeof FB)
                    return void this['Xi']();
                FB['getLoginStatus'](function(_0x2f768d) {
                    var _0x3765df = _0xe783e5;
                    if ('connected' === _0x2f768d['status'])
                        return void (_0x2f768d[_0x3765df(0x461)] && _0x2f768d[_0x3765df(0x461)][_0x3765df(0x5b5)] ? _0x529b15['Yi'](_0x3765df(0x71f), 'fb_' + _0x2f768d[_0x3765df(0x461)][_0x3765df(0x5b5)]) : _0x529b15['Xi']());
                    FB['login'](function(_0x3b3e59) {
                        var _0x126206 = _0x3765df;
                        _0x126206(0x453) === _0x3b3e59[_0x126206(0x4f1)] && _0x3b3e59['authResponse'] && _0x3b3e59[_0x126206(0x461)][_0x126206(0x5b5)] ? _0x529b15['Yi'](_0x126206(0x71f), _0x126206(0x3e4) + _0x3b3e59[_0x126206(0x461)][_0x126206(0x5b5)]) : _0x529b15['Xi']();
                    });
                });
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Zi'] = function() {
                var _0x2cabf6 = _0x1692aa
                  , _0x5a8b12 = this;
                this['Wi']();
                if (typeof GoogleAuth === _0x2cabf6(0x3a3)) {
                    this['Xi']();
                    return;
                }
                console[_0x2cabf6(0x10f)](_0x2cabf6(0x241)),
                GoogleAuth[_0x2cabf6(0x5b4)](function() {
                    var _0x4cfbbd = _0x2cabf6;
                    console[_0x4cfbbd(0x10f)](_0x4cfbbd(0x672));
                    if (GoogleAuth['isSignedIn']['get']()) {
                        console[_0x4cfbbd(0x10f)]('gsi:sil');
                        var _0x444d00 = GoogleAuth['currentUser'][_0x4cfbbd(0x6d9)]();
                        _0x5a8b12['Yi'](_0x4cfbbd(0x350), _0x4cfbbd(0x6e3) + _0x444d00['getAuthResponse']()[_0x4cfbbd(0x478)]);
                        return;
                    }
                    GoogleAuth['signIn']()[_0x4cfbbd(0x5b4)](function(_0x35e401) {
                        var _0x59ffb9 = _0x4cfbbd;
                        if (typeof _0x35e401['error'] !== 'undefined') {
                            console[_0x59ffb9(0x10f)]('gsi:e:\x20' + _0x35e401['error']),
                            _0x5a8b12['Xi']();
                            return;
                        }
                        _0x35e401[_0x59ffb9(0x2a7)]() ? (console[_0x59ffb9(0x10f)](_0x59ffb9(0x351)),
                        _0x5a8b12['Yi'](_0x59ffb9(0x350), _0x59ffb9(0x6e3) + _0x35e401[_0x59ffb9(0x73a)]()['id_token'])) : (console['log'](_0x59ffb9(0x5a2)),
                        _0x5a8b12['Xi']());
                    });
                });
            }
            ,
            _0x106bba['prototype']['Wi'] = function() {
                var _0x3e937e = _0x1692aa;
                console[_0x3e937e(0x10f)](_0x3e937e(0x414) + this['qi']);
                var _0x511220 = this['ri']
                  , _0x1e2cf9 = this['ti'];
                this['qi'] = ![],
                this['ri'] = _0x30d355,
                this['si'] = {},
                this['ti'] = null,
                _0x339953(_0x2ff145['Oe'], '', 0x3c);
                switch (_0x1e2cf9) {
                case _0x3e937e(0x71f):
                    this['$i']();
                    break;
                case 'google':
                    this['_i']();
                }
                _0x511220 !== this['ri'] ? this['aj']() : this['Si']();
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['bj'] = function() {
                var _0x3068bf = _0x1692aa;
                console[_0x3068bf(0x10f)]('dA'),
                this['qi'] && $[_0x3068bf(0x6d9)](_0x2fc5c7 + _0x3068bf(0x422) + this['ri'] + _0x3068bf(0x558), function(_0x257a3d) {
                    var _0x2175e8 = _0x3068bf;
                    0x4b0 === _0x257a3d[_0x2175e8(0x666)] ? console[_0x2175e8(0x10f)](_0x2175e8(0x5c3)) : console[_0x2175e8(0x10f)](_0x2175e8(0x2be));
                })['fail'](function() {
                    var _0x13a6a8 = _0x3068bf;
                    console['log'](_0x13a6a8(0x27f));
                });
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['vi'] = function() {
                var _0x5e6e3c = _0x1692aa;
                console['log']('rs');
                var _0x5381ba = _0x252acc(_0x2ff145['Oe'])
                  , _0x3caa0b = this;
                'facebook' == _0x5381ba ? (console[_0x5e6e3c(0x10f)]('rs:fb'),
                function _0x3d4594() {
                    'undefined' != typeof FB ? _0x3caa0b['Vi']() : setTimeout(_0x3d4594, 0x64);
                }()) : _0x5e6e3c(0x350) == _0x5381ba ? (console[_0x5e6e3c(0x10f)]('rs:gg'),
                function _0x221fb8() {
                    void 0x0 !== GoogleAuth ? _0x3caa0b['Zi']() : setTimeout(_0x221fb8, 0x64);
                }()) : (console[_0x5e6e3c(0x10f)]('rs:lo'),
                this['Wi']());
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['aj'] = function() {
                var _0x4b9f56 = 0x0;
                for (; _0x4b9f56 < this['ni']['length']; _0x4b9f56++) {
                    this['ni'][_0x4b9f56]();
                }
                this['Si']();
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Si'] = function() {
                var _0x133c10 = _0x1692aa
                  , _0x14db39 = 0x0;
                for (; _0x14db39 < this['oi'][_0x133c10(0x484)]; _0x14db39++) {
                    this['oi'][_0x14db39]();
                }
                var _0x561ca3 = this['pi'];
                this['pi'] = [];
                var _0x3bd771 = 0x0;
                for (; _0x3bd771 < _0x561ca3[_0x133c10(0x484)]; _0x3bd771++) {
                    _0x561ca3[_0x3bd771]();
                }
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['Yi'] = function(_0x120dd4, _0x52d6d8) {
                var _0x16831b = _0x1692aa
                  , _0x30b95c = this;
                $[_0x16831b(0x6d9)](_0x2fc5c7 + _0x16831b(0x422) + _0x52d6d8 + '/login', function(_0x32ba01) {
                    var _0x2ba31f = _0x16831b;
                    if (_0x32ba01 && _0x32ba01[_0x2ba31f(0x111)]) {
                        checkSubscriptionExpired(_0x32ba01[_0x2ba31f(0x111)][_0x2ba31f(0x6b3)]),
                        registerUpdatePlayer(_0x32ba01['user_data']),
                        _0x355a55(_0x32ba01['user_data']);
                        var _0x43c9c8 = this['ri'];
                        _0x30b95c['qi'] = !![],
                        _0x30b95c['ri'] = _0x52d6d8,
                        _0x30b95c['si'] = _0x32ba01[_0x2ba31f(0x111)],
                        _0x30b95c['ti'] = _0x120dd4,
                        _0x339953(_0x2ff145['Oe'], _0x30b95c['ti'], 0x3c),
                        console[_0x2ba31f(0x10f)](_0x30b95c),
                        showServer2(_0xe9bd03),
                        showVersionPays(_0x32ba01),
                        zw_userId = _0x32ba01[_0x2ba31f(0x111)][_0x2ba31f(0x6b3)],
                        $('#userid')[_0x2ba31f(0x2db)](zw_userId),
                        $(_0x2ba31f(0x496))['attr']('src', _0x32ba01['user_data'][_0x2ba31f(0x4b2)]),
                        $(_0x2ba31f(0x28f))['text'](_0x2ba31f(0x27a) + zw_userId),
                        theoKzObjects[_0x2ba31f(0x32c)] = ![],
                        _0x43c9c8 !== _0x52d6d8 ? _0x30b95c['aj']() : _0x30b95c['Si']();
                    } else
                        _0x30b95c['Xi']();
                })['fail'](function() {
                    _0x30b95c['Xi']();
                });
            }
            ,
            _0x106bba['prototype']['Xi'] = function() {
                this['Wi']();
            }
            ,
            _0x106bba[_0x1692aa(0x34d)]['$i'] = function() {
                var _0x18d796 = _0x1692aa;
                console[_0x18d796(0x10f)](_0x18d796(0x4e1)),
                FB[_0x18d796(0x52d)](function() {});
            }
            ,
            _0x106bba['prototype']['_i'] = function() {
                var _0x2c2d5c = _0x1692aa;
                console[_0x2c2d5c(0x10f)]('lo:gg'),
                GoogleAuth[_0x2c2d5c(0x59e)]();
            }
            ,
            _0x106bba;
        }())
          , _0x3dd22e = (function() {
            var _0x2d9577 = _0x53c3f2;
            function _0x21632f() {
                var _0x16c30a = _0x32c7;
                this['cj'] = {},
                this['cj'][_0x494af4] = [0x1, 0.5, 0.25, 0.5],
                this['cj'][_0x23c4b5] = _0x55f583['_b'][_0x16c30a(0x1ef)],
                this['cj'][_0x1384b2] = [0x0, 0x0],
                this['cj'][_0x52ae09] = [0x0, 0x0];
                var _0x41a2a6 = _0x55f583['cc'][_0x16c30a(0x34f)](_0x4278e2, _0xbe8016, this['cj']);
                this['zf'] = new _0x55f583['hc'](_0x33fda0,_0x41a2a6);
            }
            var _0x3c935c = _0x2d9577(0x720) + _0x1868dc()
              , _0x21f2ad = 'a2_' + _0x1868dc()
              , _0x1e5312 = atob(_0x2d9577(0x371))
              , _0x269ff1 = atob(_0x2d9577(0x402))
              , _0x494af4 = _0x2d9577(0x4a7) + _0x1868dc()
              , _0x23c4b5 = 'u4_' + _0x1868dc()
              , _0x1384b2 = _0x2d9577(0x50c) + _0x1868dc()
              , _0x52ae09 = _0x2d9577(0x211) + _0x1868dc()
              , _0x4e81b5 = 'v1_' + _0x1868dc()
              , _0x33fda0 = new _0x55f583['gc']()[_0x2d9577(0x4e5)](_0x3c935c, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x2d9577(0x4e5)](_0x21f2ad, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)
              , _0x4278e2 = atob(_0x2d9577(0x129)) + _0x3c935c + atob(_0x2d9577(0x2bd)) + _0x21f2ad + atob(_0x2d9577(0x589)) + _0x1e5312 + atob(_0x2d9577(0x589)) + _0x269ff1 + atob(_0x2d9577(0x127)) + _0x4e81b5 + atob('O3ZvaWQgbWFpbigpew==') + _0x4e81b5 + atob('PQ==') + _0x21f2ad + atob(_0x2d9577(0x1f8)) + _0x269ff1 + atob(_0x2d9577(0x31c)) + _0x1e5312 + atob(_0x2d9577(0x3c3)) + _0x3c935c + atob(_0x2d9577(0x13e))
              , _0xbe8016 = atob(_0x2d9577(0x643)) + _0x4e81b5 + atob(_0x2d9577(0x163)) + _0x494af4 + atob(_0x2d9577(0x503)) + _0x23c4b5 + atob(_0x2d9577(0x540)) + _0x1384b2 + atob(_0x2d9577(0x540)) + _0x52ae09 + atob('O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9') + _0x4e81b5 + atob(_0x2d9577(0x31c)) + _0x1384b2 + atob('Kw==') + _0x52ae09 + atob(_0x2d9577(0x52e)) + _0x494af4 + atob(_0x2d9577(0x5f2)) + _0x23c4b5 + atob('LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=');
            return _0x21632f[_0x2d9577(0x34d)]['Hf'] = function(_0x1426ab, _0x307165, _0x546465, _0x23d64d) {
                var _0x4ecb21 = this['cj'][_0x494af4];
                _0x4ecb21[0x0] = _0x1426ab,
                _0x4ecb21[0x1] = _0x307165,
                _0x4ecb21[0x2] = _0x546465,
                _0x4ecb21[0x3] = _0x23d64d;
            }
            ,
            _0x21632f[_0x2d9577(0x34d)]['Bf'] = function(_0xff8fc8) {
                this['cj'][_0x23c4b5] = _0xff8fc8;
            }
            ,
            _0x21632f['prototype']['Te'] = function(_0xeebb20, _0x514669, _0x339a63, _0x48a819) {
                var _0x1becfc = _0x2d9577;
                this['zf'][_0x1becfc(0x23e)]['x'] = _0xeebb20,
                this['zf']['position']['y'] = _0x514669,
                this['zf'][_0x1becfc(0x12e)]['x'] = _0x339a63,
                this['zf'][_0x1becfc(0x12e)]['y'] = _0x48a819;
                var _0x2b8daa = this['cj'][_0x1384b2];
                _0x2b8daa[0x0] = 0.2520615384615385 * _0x339a63,
                _0x2b8daa[0x1] = 0.4357063736263738 * _0x48a819;
                var _0x5ccd1f = this['cj'][_0x52ae09];
                _0x5ccd1f[0x0] = 0.2520615384615385 * _0xeebb20,
                _0x5ccd1f[0x1] = 0.4357063736263738 * _0x514669;
            }
            ,
            _0x21632f;
        }())
          , _0x5c7a60 = (function() {
            var _0x521993 = _0x53c3f2;
            function _0x428435() {
                var _0x59283a = _0x32c7;
                this['jh'] = new _0x55f583['ec'](),
                this['dj'] = 0x0,
                this['ej'] = 0x0,
                this[_0x59283a(0x190)] = null,
                this[_0x59283a(0x3cb)] = 0x0,
                this['cachedScaleY'] = 0x0;
            }
            return _0x428435[_0x521993(0x34d)]['kh'] = function(_0x145c6d) {
                var _0x1ff670 = _0x521993;
                if (this[_0x1ff670(0x190)] !== _0x145c6d['Hc']) {
                    this['cachedTexture'] = _0x145c6d['Hc'],
                    this['jh'][_0x1ff670(0x25d)] = _0x145c6d['Hc'],
                    this['jh'][_0x1ff670(0x432)]['set'](_0x145c6d['Lh'], _0x145c6d['Mh']);
                    const _0x37a33d = _0x145c6d['Hc'][_0x1ff670(0x5ea)]
                      , _0x42d398 = _0x145c6d['Hc'][_0x1ff670(0x392)]
                      , _0x56a8c9 = _0x145c6d['Nh'] / _0x37a33d
                      , _0x54e41d = _0x145c6d['Oh'] / _0x42d398;
                    (this[_0x1ff670(0x3cb)] !== _0x56a8c9 || this[_0x1ff670(0x6e5)] !== _0x54e41d) && (this['dj'] = _0x56a8c9,
                    this['ej'] = _0x54e41d,
                    this['jh'][_0x1ff670(0x12e)]['set'](_0x56a8c9, _0x54e41d),
                    this[_0x1ff670(0x3cb)] = _0x56a8c9,
                    this[_0x1ff670(0x6e5)] = _0x54e41d);
                }
            }
            ,
            _0x428435['prototype']['oh'] = function(_0xb085a5) {
                var _0x12725a = _0x521993;
                const _0x4f4d3a = this['dj'] * _0xb085a5
                  , _0x47bb45 = this['ej'] * _0xb085a5;
                (this['jh'][_0x12725a(0x12e)]['x'] !== _0x4f4d3a || this['jh'][_0x12725a(0x12e)]['y'] !== _0x47bb45) && this['jh'][_0x12725a(0x12e)][_0x12725a(0x172)](_0x4f4d3a, _0x47bb45);
            }
            ,
            _0x428435[_0x521993(0x34d)]['fj'] = function(_0x40a151) {
                var _0x32aa0b = _0x521993;
                this['jh'][_0x32aa0b(0x486)] = _0x40a151;
            }
            ,
            _0x428435['prototype']['nh'] = function(_0x209575, _0x3ce173) {
                var _0x30f692 = _0x521993;
                this['jh'][_0x30f692(0x23e)][_0x30f692(0x172)](_0x209575, _0x3ce173);
            }
            ,
            _0x428435['prototype']['Mg'] = function(_0x253304) {
                var _0x340a16 = _0x521993;
                this['jh'][_0x340a16(0x654)] = _0x253304;
            }
            ,
            _0x428435[_0x521993(0x34d)]['gj'] = function() {
                var _0x16614c = _0x521993;
                return this['jh'][_0x16614c(0x654)];
            }
            ,
            _0x428435[_0x521993(0x34d)]['qh'] = function(_0x5a1dbf) {
                var _0x556829 = _0x521993;
                this['jh'][_0x556829(0x66b)] = _0x5a1dbf;
            }
            ,
            _0x428435[_0x521993(0x34d)]['Mf'] = function() {
                return this['jh'];
            }
            ,
            _0x428435[_0x521993(0x34d)]['ih'] = function() {
                _0x27d3f0(this['jh']);
            }
            ,
            _0x428435;
        }())
          , _0x250753 = (function() {
            var _0x54d997 = _0x53c3f2;
            function _0xede57c() {
                var _0x491164 = _0x32c7;
                this['jh'] = new PIXI[(_0x491164(0x652))](),
                this[_0x491164(0x358)] = 0.3;
            }
            return _0xede57c['prototype']['kh'] = function(_0xda9f18) {
                var _0x2dfc5e = _0x32c7;
                const {color: color=0xffffff, radius: radius=0.3} = _0xda9f18;
                this['jh']['clear'](),
                this['jh'][_0x2dfc5e(0x5ec)](color),
                this['jh'][_0x2dfc5e(0x411)](0x0, 0x0, radius),
                this['jh'][_0x2dfc5e(0x308)](),
                this[_0x2dfc5e(0x358)] = radius,
                this['jh']['scale'][_0x2dfc5e(0x172)](0x1, 0x1);
            }
            ,
            _0xede57c['prototype']['oh'] = function(_0x2977c2) {
                var _0x42a6d5 = _0x32c7;
                this['jh'][_0x42a6d5(0x12e)]['set'](_0x2977c2, _0x2977c2);
            }
            ,
            _0xede57c['prototype']['fj'] = function(_0x56825c) {
                var _0x561565 = _0x32c7;
                this['jh'][_0x561565(0x486)] = _0x56825c;
            }
            ,
            _0xede57c[_0x54d997(0x34d)]['nh'] = function(_0x8cdefd, _0x27e06f) {
                var _0x4c8fd1 = _0x54d997;
                this['jh'][_0x4c8fd1(0x23e)][_0x4c8fd1(0x172)](_0x8cdefd, _0x27e06f);
            }
            ,
            _0xede57c[_0x54d997(0x34d)]['Mg'] = function(_0x519235) {
                var _0x117bd6 = _0x54d997;
                this['jh'][_0x117bd6(0x654)] = _0x519235;
            }
            ,
            _0xede57c['prototype']['gj'] = function() {
                var _0x3aeb83 = _0x54d997;
                return this['jh'][_0x3aeb83(0x654)];
            }
            ,
            _0xede57c[_0x54d997(0x34d)]['qh'] = function(_0x3adf55) {
                var _0x58437b = _0x54d997;
                this['jh'][_0x58437b(0x66b)] = _0x3adf55;
            }
            ,
            _0xede57c['prototype']['Mf'] = function() {
                return this['jh'];
            }
            ,
            _0xede57c[_0x54d997(0x34d)]['ih'] = function() {
                _0x27d3f0(this['jh']);
            }
            ,
            _0xede57c;
        }())
          , _0x268d93 = (function() {
            var _0x3fb874 = _0x53c3f2;
            function _0x3e18b9(_0x2aff50) {
                var _0x89a21 = _0x32c7;
                this['fb'] = _0x2aff50,
                this['Mb'] = new _0x268d93[(_0x89a21(0x592))](),
                this['Hb'] = !0x1,
                this['Ib'] = !0x0,
                this['hj'] = !0x1,
                this['Db'] = 0x0,
                this['ij'] = 0x0,
                this['Jb'] = 0x1,
                this['jj'] = 0x0,
                this['M'] = 0x0,
                this['Ff'] = {},
                this['kj'] = 0x0,
                this['lj'] = new Float32Array(0x2 * _0x310a0f),
                this['mj'] = new Float32Array(0x2 * _0x310a0f),
                this['nj'] = new Float32Array(0x2 * _0x310a0f),
                this['oj'] = null,
                this['pj'] = null,
                this['qj'] = null,
                this['b'] = null,
                this[_0x89a21(0x736)] = null,
                this['Tb']();
            }
            var _0x310a0f = 0xc8;
            return _0x3e18b9[_0x3fb874(0x34d)]['Kb'] = function() {
                var _0x227a2f = _0x3fb874;
                null != this['pj'] && _0x27d3f0(this['pj']['Rf']),
                null != this['qj'] && _0x27d3f0(this['qj']),
                this['b'] != null && _0x27d3f0(this['b']),
                this[_0x227a2f(0x736)] != null && _0x27d3f0(this['zw_msg']);
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Tb'] = function() {
                this['Ig'](0.25),
                this['Mb']['ad'] = '',
                this['Ib'] = !![],
                this['Ff'] = {},
                this['Mg'](![]);
            }
            ,
            _0x3e18b9['prototype']['Fg'] = function(_0x325014) {
                this['Mb'] = _0x325014,
                this['rj'](this['Hb']);
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Mg'] = function(_0x54173b) {
                var _0x37da55 = this['Hb'];
                this['Hb'] = _0x54173b,
                this['rj'](_0x37da55);
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Ig'] = function(_0x455142) {
                var _0x9432d7 = _0x3fb874;
                this['M'] = 0x32 * _0x455142;
                var _0x269e9c = _0x455142;
                _0x455142 > this['fb']['cf'] && (_0x269e9c = Math[_0x9432d7(0x490)]((_0x455142 - this['fb']['cf']) / this['fb']['df']) * this['fb']['df'] + this['fb']['cf']);
                var _0xf34816 = Math[_0x9432d7(0x3be)](0x4 * Math['pow'](0x5 * _0x269e9c, 0.707106781186548) + 0x19)
                  , _0x2ed8e2 = Math[_0x9432d7(0x4ee)](_0x310a0f, Math[_0x9432d7(0x693)](0x3, 0x5 * (_0xf34816 - 0x5) + 0x1))
                  , _0x3bedcf = this['kj'];
                if (this['Db'] = 0.025 * (0x5 + 0.9 * _0xf34816),
                this['kj'] = Math[_0x9432d7(0x19d)](_0x2ed8e2),
                this['ij'] = _0x2ed8e2 - this['kj'],
                _0x3bedcf > 0x0 && _0x3bedcf < this['kj']) {
                    for (var _0x30aeb5 = this['lj'][0x2 * _0x3bedcf - 0x2], _0x3085bd = this['lj'][0x2 * _0x3bedcf - 0x1], _0x2117d2 = this['mj'][0x2 * _0x3bedcf - 0x2], _0x349969 = this['mj'][0x2 * _0x3bedcf - 0x1], _0x162c86 = this['nj'][0x2 * _0x3bedcf - 0x2], _0x5effec = this['nj'][0x2 * _0x3bedcf - 0x1], _0x1bf32b = _0x3bedcf; _0x1bf32b < this['kj']; _0x1bf32b++)
                        this['lj'][0x2 * _0x1bf32b] = _0x30aeb5,
                        this['lj'][0x2 * _0x1bf32b + 0x1] = _0x3085bd,
                        this['mj'][0x2 * _0x1bf32b] = _0x2117d2,
                        this['mj'][0x2 * _0x1bf32b + 0x1] = _0x349969,
                        this['nj'][0x2 * _0x1bf32b] = _0x162c86,
                        this['nj'][0x2 * _0x1bf32b + 0x1] = _0x5effec;
                }
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Lg'] = function(_0x8ab3fc, _0x110b97) {
                this['kj'] = _0x110b97;
                for (var _0x25fbb6 = 0x0; _0x25fbb6 < this['kj']; _0x25fbb6++)
                    this['lj'][0x2 * _0x25fbb6] = this['mj'][0x2 * _0x25fbb6] = this['nj'][0x2 * _0x25fbb6] = _0x8ab3fc(),
                    this['lj'][0x2 * _0x25fbb6 + 0x1] = this['mj'][0x2 * _0x25fbb6 + 0x1] = this['nj'][0x2 * _0x25fbb6 + 0x1] = _0x8ab3fc();
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Kg'] = function(_0x51a905, _0x47ca7f, _0x31253f) {
                this['hj'] = _0x31253f;
                for (var _0x4769bf = 0x0; _0x4769bf < this['kj']; _0x4769bf++)
                    this['lj'][0x2 * _0x4769bf] = this['mj'][0x2 * _0x4769bf],
                    this['lj'][0x2 * _0x4769bf + 0x1] = this['mj'][0x2 * _0x4769bf + 0x1];
                var _0x16d499 = _0x51a905 - this['mj'][0x0]
                  , _0x3e4c76 = _0x47ca7f - this['mj'][0x1];
                this['sj'](_0x16d499, _0x3e4c76, this['kj'], this['mj']);
            }
            ,
            _0x3e18b9['prototype']['sj'] = function(_0x1cc89f, _0x58b4c2, _0x34bbba, _0x30a737) {
                var _0x35db75 = _0x3fb874
                  , _0x3b0f43 = Math[_0x35db75(0x70a)](_0x1cc89f, _0x58b4c2);
                if (!(_0x3b0f43 <= 0x0)) {
                    var _0x2fded8 = _0x30a737[0x0]
                      , _0xd5705d = void 0x0;
                    _0x30a737[0x0] += _0x1cc89f;
                    var _0x49da1e = _0x30a737[0x1]
                      , _0xa48a8a = void 0x0;
                    _0x30a737[0x1] += _0x58b4c2;
                    for (var _0x301a0b = this['Db'] / (this['Db'] + _0x3b0f43), _0x534040 = 0x1 - 0x2 * _0x301a0b, _0x50300e = 0x1, _0x5d7b2c = _0x34bbba - 0x1; _0x50300e < _0x5d7b2c; _0x50300e++)
                        _0xd5705d = _0x30a737[0x2 * _0x50300e],
                        _0x30a737[0x2 * _0x50300e] = _0x30a737[0x2 * _0x50300e - 0x2] * _0x534040 + (_0xd5705d + _0x2fded8) * _0x301a0b,
                        _0x2fded8 = _0xd5705d,
                        _0xa48a8a = _0x30a737[0x2 * _0x50300e + 0x1],
                        _0x30a737[0x2 * _0x50300e + 0x1] = _0x30a737[0x2 * _0x50300e - 0x1] * _0x534040 + (_0xa48a8a + _0x49da1e) * _0x301a0b,
                        _0x49da1e = _0xa48a8a;
                    _0x301a0b = this['ij'] * this['Db'] / (this['ij'] * this['Db'] + _0x3b0f43),
                    _0x534040 = 0x1 - 0x2 * _0x301a0b,
                    _0x30a737[0x2 * _0x34bbba - 0x2] = _0x30a737[0x2 * _0x34bbba - 0x4] * _0x534040 + (_0x30a737[0x2 * _0x34bbba - 0x2] + _0x2fded8) * _0x301a0b,
                    _0x30a737[0x2 * _0x34bbba - 0x1] = _0x30a737[0x2 * _0x34bbba - 0x3] * _0x534040 + (_0x30a737[0x2 * _0x34bbba - 0x1] + _0x49da1e) * _0x301a0b;
                }
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Gf'] = function() {
                return {
                    'x': this['nj'][0x0],
                    'y': this['nj'][0x1]
                };
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Hg'] = function(_0x149b49, _0x4254c6) {
                var _0x1454c7 = _0x3fb874;
                for (var _0x2ef8ac = 0xf4240, _0x2de6dd = _0x149b49, _0x277630 = _0x4254c6, _0x4e20ef = 0x0; _0x4e20ef < this['kj']; _0x4e20ef++) {
                    var _0x395f06 = this['nj'][0x2 * _0x4e20ef]
                      , _0x4059b8 = this['nj'][0x2 * _0x4e20ef + 0x1]
                      , _0x4dbc12 = Math[_0x1454c7(0x70a)](_0x149b49 - _0x395f06, _0x4254c6 - _0x4059b8);
                    _0x4dbc12 < _0x2ef8ac && (_0x2ef8ac = _0x4dbc12,
                    _0x2de6dd = _0x395f06,
                    _0x277630 = _0x4059b8);
                }
                return {
                    'x': _0x2de6dd,
                    'y': _0x277630,
                    'distance': _0x2ef8ac
                };
            }
            ,
            _0x3e18b9['prototype']['vb'] = function(_0x5e08ca) {
                this['oj'] = _0x5e08ca;
            }
            ,
            _0x3e18b9['prototype']['Fb'] = function(_0x400e61, _0x1b5d77) {
                var _0x5bc02b = _0x3fb874;
                this['Jb'] = _0x2e7269(this['Jb'], this['Ib'] ? this['hj'] ? 0.9 + 0.1 * Math[_0x5bc02b(0x19a)](_0x400e61 / 0x190 * Math['PI']) : 0x1 : 0x0, _0x1b5d77, 0x1 / 0x320),
                this['jj'] = _0x2e7269(this['jj'], this['Ib'] ? this['hj'] ? 0x1 : 0x0 : 0x1, _0x1b5d77, 0.0025),
                null != this['pj'] && (this['pj']['Rf']['alpha'] = this['Jb']),
                null != this['qj'] && (this['qj']['alpha'] = this['Jb']);
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['Gb'] = function(_0x3b762f, _0x3a3d89, _0x237c3c, _0x2a35a3) {
                var _0x1ffe30 = _0x3fb874;
                if (this['Hb'] && this['Ib']) {
                    var _0xba1873 = Math[_0x1ffe30(0x6be)](0.11112, _0x3a3d89 / 0x5f)
                      , _0x1dd525 = 0x0;
                    for (; _0x1dd525 < this['kj']; _0x1dd525++) {
                        var _0x269238 = _0xbb626a(this['lj'][0x2 * _0x1dd525], this['mj'][0x2 * _0x1dd525], _0x237c3c)
                          , _0x2f568c = _0xbb626a(this['lj'][0x2 * _0x1dd525 + 0x1], this['mj'][0x2 * _0x1dd525 + 0x1], _0x237c3c);
                        this['nj'][0x2 * _0x1dd525] = _0xbb626a(_0x269238, this['nj'][0x2 * _0x1dd525], _0xba1873),
                        this['nj'][0x2 * _0x1dd525 + 0x1] = _0xbb626a(_0x2f568c, this['nj'][0x2 * _0x1dd525 + 0x1], _0xba1873);
                    }
                }
                if (this['pj'] != null && this['Hb'] && this['pj']['tj'](this, _0x3b762f, _0x3a3d89, _0x2a35a3),
                this['qj'] != null && (this['qj']['If']['x'] = this['nj'][0x0],
                this['qj']['If']['y'] = this['nj'][0x1] - 0x3 * this['Db']),
                this['b'] != null) {
                    var _0x14e0f6;
                    for (_0x14e0f6 in (this['b']['x'] = this['qj'][_0x1ffe30(0x23e)]['x'],
                    this['b']['y'] = this['qj'][_0x1ffe30(0x23e)]['y'] + 0x1,
                    this['b']['he'])) {
                        !(this['Ff'][_0x14e0f6] != null && this['Ff'][_0x14e0f6]['sc']) && (this['b']['removeChild'](this['b']['he'][_0x14e0f6]),
                        delete this['b']['he'][_0x14e0f6]);
                    }
                    var _0x1dae65, _0x3b0de6 = 0x0;
                    for (_0x1dae65 in (c = 0x0,
                    this['Ff'])) {
                        if (_0x1dae65 !== '0' && _0x1dae65 !== '1')
                            continue;
                        if (_0x3a3d89 = this['Ff'][_0x1dae65]) {
                            if (_0x3a3d89['sc'] && theoKzObjects[_0x1ffe30(0x687)]) {
                                var _0x41b5e8 = this['b']['he'][_0x1dae65];
                                if (!_0x41b5e8) {
                                    const _0x46812f = portionTimes[_0x1dae65]
                                      , _0x32ba49 = timeFontColors2[_0x1dae65];
                                    let _0x9b3b50 = _0x3a3d89['tc'];
                                    if (_0x9b3b50 === 0.99)
                                        _0x9b3b50 = 0x1;
                                    let _0x51b3a8 = _0x46812f - parseInt(_0x9b3b50 * _0x46812f);
                                    _0x41b5e8 = new PIXI[(_0x1ffe30(0x4da))](_0x51b3a8,{
                                        'align': _0x1ffe30(0x291),
                                        'fill': _0x32ba49,
                                        'fontSize': 0x14,
                                        'lineJoin': _0x1ffe30(0x1ae),
                                        'whiteSpace': _0x1ffe30(0x31e),
                                        'wordWrap': !![],
                                        'dropShadow': !![],
                                        'dropShadowBlur': 0x6,
                                        'fontWeight': _0x1ffe30(0x62b)
                                    }),
                                    this['b']['he'][_0x1dae65] = _0x41b5e8,
                                    this['b'][_0x1ffe30(0x6f8)](_0x41b5e8);
                                }
                                const _0xb0aeef = portionTimes[_0x1dae65];
                                let _0x1380f5 = _0x3a3d89['tc'];
                                if (_0x1380f5 === 0.99)
                                    _0x1380f5 = 0x1;
                                let _0x348df1 = _0xb0aeef - parseInt(_0x1380f5 * _0xb0aeef);
                                _0x41b5e8[_0x1ffe30(0x2db)] = _0x348df1,
                                _0x41b5e8['x'] = _0x3b0de6,
                                _0x41b5e8['y'] = 0x0,
                                _0x3b0de6 += _0x41b5e8[_0x1ffe30(0x5ea)] + 0xa;
                            }
                        }
                    }
                    this['b'][_0x1ffe30(0x647)]['x'] = 0.5 * this['b'][_0x1ffe30(0x5ea)],
                    this['b'][_0x1ffe30(0x647)]['y'] = this['b'][_0x1ffe30(0x392)];
                }
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['rj'] = function(_0x4ae416) {
                var _0x27f6ac = _0x3fb874;
                this['Hb'] ? !_0x4ae416 && this['uj']() : (null != this['pj'] && _0x27d3f0(this['pj']['Rf']),
                null != this['qj'] && _0x27d3f0(this['qj']),
                this['b'] != null && _0x27d3f0(this['b']),
                this[_0x27f6ac(0x736)] != null && _0x27d3f0(this['zw_msg']));
            }
            ,
            _0x3e18b9[_0x3fb874(0x34d)]['uj'] = function() {
                var _0x2dead4 = _0x3fb874
                  , _0xcf7ab7 = _0x242785();
                null == this['pj'] ? this['pj'] = new _0x4c9b08() : _0x27d3f0(this['pj']['Rf']),
                this['pj']['hh'](_0xcf7ab7['o']['fb']['af'], _0xcf7ab7['p']['Dc']()['ed'](this['Mb']['cg']), _0xcf7ab7['p']['Dc']()['dd'](this['Mb']['dg']), _0xcf7ab7['p']['Dc']()['fd'](this['Mb']['Bg']), _0xcf7ab7['p']['Dc']()['gd'](this['Mb']['Cg']), _0xcf7ab7['p']['Dc']()['hd'](this['Mb']['Dg']), _0xcf7ab7['p']['Dc']()['jd'](this['Mb']['Eg'])),
                null == this['qj'] ? (this['qj'] = new _0x100bb6(''),
                this['qj'][_0x2dead4(0x4e4)][_0x2dead4(0xe9)] = fonts[currentFontIndex],
                this['qj'][_0x2dead4(0x432)][_0x2dead4(0x172)](0.5)) : _0x27d3f0(this['qj']),
                this['b'] == null ? (this['b'] = new _0x55f583['Zb'](),
                this['b']['he'] = {}) : _0x27d3f0(this['b']),
                this[_0x2dead4(0x736)] == null ? this['zw_msg'] = new _0x55f583['Zb']() : _0x27d3f0(this[_0x2dead4(0x736)]),
                this['qj']['style']['fontSize'] = 0xe,
                this['qj'][_0x2dead4(0x4e4)][_0x2dead4(0x537)] = _0xcf7ab7['p']['Dc']()['dd'](this['Mb']['dg'])['_c'],
                this['qj'][_0x2dead4(0x2db)] = this['Mb']['ad'],
                this['oj']['Qf'](this['Mb']['Lb'], this['pj'], this['qj'], this['b'], this[_0x2dead4(0x736)]);
            }
            ,
            _0x3e18b9[_0x3fb874(0x592)] = (function() {
                function _0x5e88bf() {
                    var _0x2403d6 = _0x32c7;
                    this['Lb'] = 0x0,
                    this['cg'] = _0x5e7405[_0x2403d6(0x534)],
                    this['dg'] = 0x0,
                    this['Bg'] = 0x0,
                    this['Cg'] = 0x0,
                    this['Dg'] = 0x0,
                    this['Eg'] = 0x0,
                    this['ad'] = '';
                }
                return _0x5e88bf;
            }()),
            _0x3e18b9;
        }())
          , _0x100bb6 = (function() {
            return _0xaa2971(_0x55f583['fc'], function(_0xae4827, _0x3aa16b, _0x412b8e) {
                var _0xb9a071 = _0x32c7;
                _0x55f583['fc'][_0xb9a071(0x67d)](this, _0xae4827, _0x3aa16b, _0x412b8e),
                this['If'] = {
                    'x': 0x0,
                    'y': 0x0
                };
            });
        }())
          , _0x4c9b08 = (function() {
            var _0x10a334 = _0x53c3f2;
            function _0x1c4c86() {
                var _0xa71db8 = _0x32c7;
                this['Rf'] = new _0x55f583['Zb'](),
                this['Rf'][_0xa71db8(0x43a)] = !0x0,
                this['vj'] = new _0xbffe31(),
                this['vj'][_0xa71db8(0x615)] = _0x225cd2 * (0x2 * (_0x3ea8d2 + 0x1) + 0x1 + 0x3),
                this['wj'] = 0x0,
                this['xj'] = new Array(_0x3ea8d2),
                this['xj'][0x0] = this['yj'](0x0, new _0x5c7a60(), new _0x5c7a60());
                for (let _0x3bd643 = 0x0; _0x3bd643 < _0x3ea8d2; _0x3bd643++) {
                    this['xj'][_0x3bd643] = this['yj'](_0x3bd643, new _0x5c7a60(), new _0x5c7a60());
                }
                this['zj'] = 0x0,
                this['Aj'] = 0x0,
                this['Bj'] = 0x0;
            }
            var _0x225cd2 = 0.001
              , _0x3ea8d2 = 0x31d
              , _0x546b0b = 0.1 * Math['PI']
              , _0x4335bc = -0.06640625
              , _0x9583d3 = 0.84375
              , _0x5e8129 = 0.2578125
              , _0x2be47c = -0.03515625
              , _0x53e589 = -0.0625
              , _0x16368a = 0.5625
              , _0x12378b = 0x3 * _0x4335bc + _0x9583d3
              , _0x4c7377 = _0x5e8129 - 0x3 * _0x4335bc
              , _0x336d34 = _0x4335bc + _0x2be47c
              , _0x342f2 = 0.375
              , _0x4257c9 = 0.75
              , _0x482a4c = _0x53e589 + _0x53e589
              , _0xcce173 = 0x3 * _0x2be47c + _0x5e8129
              , _0x41788c = _0x9583d3 - 0x3 * _0x2be47c
              , _0x3fe122 = _0x2be47c + _0x4335bc;
            _0x1c4c86[_0x10a334(0x34d)]['yj'] = function(_0x4c9ccb, _0x2e0057, _0x90ba37) {
                var _0x2dc7e5 = _0x10a334
                  , _0x1c654c = new _0x414d8d(_0x2e0057,_0x90ba37);
                const _0x4049a6 = _0x225cd2 * (0x2 * (_0x3ea8d2 - _0x4c9ccb) + 0x1 + 0x3)
                  , _0x2892b4 = _0x225cd2 * (0x2 * (_0x3ea8d2 - _0x4c9ccb) - 0x2 + 0x3);
                return _0x2e0057['jh']['zIndex'] = _0x4049a6,
                _0x90ba37['jh'][_0x2dc7e5(0x615)] = _0x2892b4,
                _0x1c654c;
            }
            ,
            _0x1c4c86[_0x10a334(0x34d)]['hh'] = function(_0x5711a0, _0x3d99b1, _0x58a790, _0x63a5e8, _0x142576, _0x137c4f, _0x3d145b) {
                var _0x56d7fc = _0x10a334
                  , _0x37586e = _0x58a790['Zc']
                  , _0x4b7baf = _0x5711a0 == _0x283aa5['_e'] ? _0x3d99b1['bd']['$c'] : _0x58a790['$c'];
                _0x37586e[_0x56d7fc(0x484)] && _0x4b7baf['length'] && this['xj']['forEach']( (_0x4e7518, _0x2648dc) => {
                    var _0x251eb3 = _0x56d7fc;
                    _0x4e7518['Nf']['kh'](_0x37586e[_0x2648dc % _0x37586e['length']]),
                    _0x4e7518['Pf']['kh'](_0x4b7baf[_0x2648dc % _0x4b7baf[_0x251eb3(0x484)]]);
                }
                ),
                this['vj']['hh'](_0x63a5e8, _0x142576, _0x137c4f, _0x3d145b);
            }
            ;
            var _0xbffe31 = (function() {
                var _0x4d2ba7 = _0x10a334
                  , _0x5ceb3b = _0xaa2971(_0x55f583['Zb'], function() {
                    var _0x5ad279 = _0x32c7;
                    _0x55f583['Zb'][_0x5ad279(0x67d)](this),
                    this['sortableChildren'] = !![],
                    this['Cj'] = [],
                    this['Dj'] = [],
                    this['Ej'] = [],
                    this['Fj'] = [],
                    this['Gj'] = new _0x55f583['Zb'](),
                    this['Hj'] = [];
                    for (var _0x84ca11 = 0x0; _0x84ca11 < 0x4; _0x84ca11++) {
                        var _0x594817 = new _0x5c7a60();
                        _0x594817['kh'](_0x242785()['q']['Ph']),
                        this['Gj'][_0x5ad279(0x6f8)](_0x594817['jh']),
                        this['Hj'][_0x5ad279(0x5d6)](_0x594817);
                    }
                    this['Gj'][_0x5ad279(0x615)] = 0.0011,
                    this[_0x5ad279(0x6f8)](this['Gj']),
                    this['Ij'](),
                    this['Jj'] = new _0x5c7a60(),
                    this['Jj']['kh'](_0x242785()['q']['Qh']),
                    this['Jj']['jh']['zIndex'] = 0.001,
                    this['addChild'](this['Jj']['jh']),
                    this['Kj'](),
                    this[_0x5ad279(0x1eb)] = new _0x5c7a60(),
                    this[_0x5ad279(0x1eb)]['kh'](_0x242785()['q']['Rh']),
                    this['flx']['jh']['zIndex'] = 0.001,
                    this[_0x5ad279(0x6f8)](this[_0x5ad279(0x1eb)]['jh']),
                    this[_0x5ad279(0x312)](),
                    this['xxx5'] = new _0x5c7a60(),
                    this[_0x5ad279(0x3d0)]['kh'](_0x242785()['q'][_0x5ad279(0x5ba)]),
                    this[_0x5ad279(0x3d0)]['jh']['zIndex'] = 0.001,
                    this['addChild'](this[_0x5ad279(0x3d0)]['jh']),
                    this['xXx5'](),
                    this[_0x5ad279(0x259)] = new _0x5c7a60(),
                    this['xxx2']['kh'](_0x242785()['q']['X_x2']),
                    this[_0x5ad279(0x259)]['jh'][_0x5ad279(0x615)] = 0.001,
                    this[_0x5ad279(0x6f8)](this[_0x5ad279(0x259)]['jh']),
                    this['xXx2'](),
                    this[_0x5ad279(0x255)] = new _0x5c7a60(),
                    this[_0x5ad279(0x255)]['kh'](_0x242785()['q']['X_x10']),
                    this[_0x5ad279(0x255)]['jh']['zIndex'] = 0.001,
                    this[_0x5ad279(0x6f8)](this['xxx10']['jh']),
                    this[_0x5ad279(0xf1)](),
                    this[_0x5ad279(0x334)] = new _0x5c7a60(),
                    this['xxxLupatype']['kh'](_0x242785()['q'][_0x5ad279(0x601)]),
                    this[_0x5ad279(0x334)]['jh'][_0x5ad279(0x615)] = 0.001,
                    this['addChild'](this['xxxLupatype']['jh']),
                    this[_0x5ad279(0x28e)](),
                    this[_0x5ad279(0x6d5)] = new _0x5c7a60(),
                    this[_0x5ad279(0x6d5)]['kh'](_0x242785()['q'][_0x5ad279(0x112)]),
                    this[_0x5ad279(0x6d5)]['jh'][_0x5ad279(0x615)] = 0.001,
                    this[_0x5ad279(0x6f8)](this[_0x5ad279(0x6d5)]['jh']),
                    this[_0x5ad279(0x562)]();
                });
                return _0x5ceb3b[_0x4d2ba7(0x34d)]['hh'] = function(_0x42ac51, _0x42554c, _0x281812, _0x5e40f9) {
                    this['Lj'](0.002, this['Cj'], _0x42ac51['Zc']),
                    this['Lj'](0.003, this['Dj'], _0x42554c['Zc']),
                    this['Lj'](0.004, this['Fj'], _0x5e40f9['Zc']),
                    this['Lj'](0.005, this['Ej'], _0x281812['Zc']);
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)]['Lj'] = function(_0x3c5f0f, _0x3d920e, _0x13037c) {
                    var _0x436572 = _0x4d2ba7;
                    const _0x4cd49a = _0x13037c['length']
                      , _0x4ff246 = _0x3d920e[_0x436572(0x484)];
                    for (let _0x2b85e0 = _0x4ff246; _0x2b85e0 < _0x4cd49a; _0x2b85e0++) {
                        const _0x5654e3 = new _0x5c7a60();
                        _0x3d920e[_0x436572(0x5d6)](_0x5654e3),
                        this[_0x436572(0x6f8)](_0x5654e3['Mf']());
                    }
                    for (let _0x4a749d = _0x4ff246; _0x4a749d > _0x4cd49a; _0x4a749d--) {
                        _0x3d920e[_0x436572(0x674)]()['ih']();
                    }
                    let _0x102f92 = _0x3c5f0f;
                    for (let _0x3d3f8d = 0x0; _0x3d3f8d < _0x4cd49a; _0x3d3f8d++) {
                        _0x102f92 += 0.0001;
                        const _0x3a1ef5 = _0x3d920e[_0x3d3f8d];
                        _0x3a1ef5['kh'](_0x13037c[_0x3d3f8d]),
                        _0x3a1ef5['jh'][_0x436572(0x615)] = _0x102f92;
                    }
                }
                ,
                _0x5ceb3b['prototype']['mh'] = function(_0x28c938, _0x5470d7, _0x33f834, _0x58babd) {
                    var _0x36986b = _0x4d2ba7;
                    this[_0x36986b(0x654)] = !![],
                    this[_0x36986b(0x23e)][_0x36986b(0x172)](_0x28c938, _0x5470d7),
                    this[_0x36986b(0x486)] = _0x58babd,
                    [this['Cj'], this['Dj'], this['Ej'], this['Fj']][_0x36986b(0xca)]( (_0x52a8a6, _0x299fd4) => {
                        var _0xda255e = _0x36986b;
                        const _0x4ec7ad = ['Cj\x20(ojos)', _0xda255e(0x497), _0xda255e(0x72e), 'Fj\x20(otros)'][_0x299fd4];
                        _0x52a8a6[_0xda255e(0xca)](_0x5a0dae => _0x5a0dae['oh'](_0x33f834));
                    }
                    );
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)]['lh'] = function() {
                    var _0x164044 = _0x4d2ba7;
                    this[_0x164044(0x654)] = !0x1;
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)]['Mj'] = function(_0x2040db, _0x4599fa, _0x26c8eb, _0x15f1ce) {
                    var _0x3728ea = _0x4d2ba7;
                    this['Gj'][_0x3728ea(0x654)] = !![];
                    var _0x613369 = _0x26c8eb / 0x3e8
                      , _0x27ebcc = 0x1 / this['Hj'][_0x3728ea(0x484)];
                    for (var _0xba82d2 = 0x0; _0xba82d2 < this['Hj'][_0x3728ea(0x484)]; _0xba82d2++) {
                        var _0x59d8fe = 0x1 - (_0x613369 + _0x27ebcc * _0xba82d2) % 0x1;
                        this['Hj'][_0xba82d2]['jh'][_0x3728ea(0x66b)] = 0x1 - _0x59d8fe,
                        this['Hj'][_0xba82d2]['oh'](_0x4599fa * (0.5 + 4.5 * _0x59d8fe));
                    }
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)]['Ij'] = function() {
                    var _0x3c865f = _0x4d2ba7;
                    this['Gj'][_0x3c865f(0x654)] = !0x1;
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)]['Nj'] = function(_0x41faae, _0xc52c0e, _0x31892e, _0x4e416c) {
                    var _0xd9fda1 = _0x4d2ba7;
                    this['Jj']['jh'][_0xd9fda1(0x654)] = !![],
                    this['Jj']['jh']['alpha'] = _0x2e7269(this['Jj']['jh'][_0xd9fda1(0x66b)], _0x41faae['hj'] ? 0.9 : 0.2, _0x4e416c, 0.0025),
                    this['Jj']['oh'](_0xc52c0e);
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0x32b)] = function(_0x41ac1b, _0x3cbcc5, _0xe27295, _0x4f7fb7) {
                    var _0x15cbfc = _0x4d2ba7;
                    this[_0x15cbfc(0x1eb)]['jh'][_0x15cbfc(0x654)] = !![],
                    this['flx']['oh'](_0x3cbcc5);
                }
                ,
                _0x5ceb3b['prototype'][_0x4d2ba7(0x312)] = function() {
                    var _0x41a57b = _0x4d2ba7;
                    this[_0x41a57b(0x1eb)]['jh'][_0x41a57b(0x654)] = ![];
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0x663)] = function(_0xce9387, _0x857bb7, _0x29dcd5, _0x2b9078) {
                    var _0x36e3b6 = _0x4d2ba7;
                    this['xxx5']['jh'][_0x36e3b6(0x654)] = !![],
                    this[_0x36e3b6(0x3d0)]['jh']['alpha'] = _0x2e7269(this['Jj']['jh'][_0x36e3b6(0x66b)], _0xce9387['hj'] ? 0.9 : 0.2, _0x2b9078, 0.0025),
                    this[_0x36e3b6(0x3d0)]['oh'](_0x857bb7);
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)]['xXx5'] = function() {
                    var _0x2bdddb = _0x4d2ba7;
                    this[_0x2bdddb(0x3d0)]['jh'][_0x2bdddb(0x654)] = ![];
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0x31b)] = function(_0x57cdd3, _0x24a915, _0x3f38d8, _0x49284e) {
                    var _0x54e198 = _0x4d2ba7;
                    this[_0x54e198(0x6d5)]['jh'][_0x54e198(0x654)] = !![],
                    this[_0x54e198(0x6d5)]['oh'](_0x24a915);
                }
                ,
                _0x5ceb3b['prototype']['x_emoji'] = function() {
                    this['xxxEmojiType']['jh']['visible'] = ![];
                }
                ,
                _0x5ceb3b['prototype'][_0x4d2ba7(0x419)] = function(_0xb95af3, _0x413429, _0x527624, _0x2252a3) {
                    var _0x422463 = _0x4d2ba7;
                    this[_0x422463(0x259)]['jh'][_0x422463(0x654)] = !![],
                    this['xxx2']['jh'][_0x422463(0x66b)] = _0x2e7269(this['Jj']['jh'][_0x422463(0x66b)], _0xb95af3['hj'] ? 0.9 : 0.2, _0x2252a3, 0.0025),
                    this[_0x422463(0x259)]['oh'](_0x413429);
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0x1b1)] = function() {
                    var _0x59fd8e = _0x4d2ba7;
                    this[_0x59fd8e(0x259)]['jh'][_0x59fd8e(0x654)] = ![];
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0x3c2)] = function(_0x57932e, _0x16f6aa, _0x13704e, _0x4fac41) {
                    var _0x4d966a = _0x4d2ba7;
                    this['xxx10']['jh'][_0x4d966a(0x654)] = !![],
                    this[_0x4d966a(0x255)]['jh'][_0x4d966a(0x66b)] = _0x2e7269(this['Jj']['jh'][_0x4d966a(0x66b)], _0x57932e['hj'] ? 0.9 : 0.2, _0x4fac41, 0.0025),
                    this['xxx10']['oh'](_0x16f6aa);
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0xf1)] = function() {
                    var _0xf908c3 = _0x4d2ba7;
                    this['xxx10']['jh'][_0xf908c3(0x654)] = ![];
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0x5ab)] = function(_0x331da4, _0x29d64e, _0x44d085, _0xa44b30) {
                    var _0x23a954 = _0x4d2ba7;
                    this['xxxLupatype']['jh'][_0x23a954(0x654)] = !![],
                    this[_0x23a954(0x334)]['jh'][_0x23a954(0x66b)] = _0x2e7269(this['Jj']['jh'][_0x23a954(0x66b)], _0x331da4['hj'] ? 0.9 : 0.2, _0xa44b30, 0.0025),
                    this[_0x23a954(0x334)]['oh'](_0x29d64e);
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)][_0x4d2ba7(0x28e)] = function() {
                    var _0x3d9c74 = _0x4d2ba7;
                    this[_0x3d9c74(0x334)]['jh'][_0x3d9c74(0x654)] = ![];
                }
                ,
                _0x5ceb3b[_0x4d2ba7(0x34d)]['Kj'] = function() {
                    var _0x44fe2f = _0x4d2ba7;
                    this['Jj']['jh'][_0x44fe2f(0x654)] = !0x1;
                }
                ,
                _0x5ceb3b;
            }());
            _0x1c4c86[_0x10a334(0x34d)]['Oj'] = function(_0x56f350) {
                return this['Aj'] + this['Bj'] * Math['sin'](_0x56f350 * _0x546b0b - this['zj']);
            }
            ,
            _0x1c4c86[_0x10a334(0x34d)]['tj'] = function(_0x44714a, _0x3bfe32, _0x3f2611, _0x14ae38) {
                var _0xbf951f = _0x10a334;
                const _0x4c8870 = 0x2 * _0x44714a['Db']
                  , _0x5da44b = _0x44714a['nj']
                  , _0x5a043a = _0x44714a['kj']
                  , _0x6c8d09 = 0x4 * _0x5a043a - 0x3;
                this['zj'] = _0x3bfe32 / 0x190 * Math['PI'],
                this['Aj'] = 1.5 * _0x4c8870,
                this['Bj'] = 0.1 * _0x4c8870 * _0x44714a['jj'];
                let _0x145c36 = _0x5da44b[0x0], _0x43d8f2 = _0x5da44b[0x1], _0x58eae6, _0x3668c7, _0x43d054, _0x5a7351;
                if (_0x14ae38(_0x145c36, _0x43d8f2)) {
                    _0x58eae6 = _0x5da44b[0x2],
                    _0x3668c7 = _0x5da44b[0x3],
                    _0x43d054 = _0x5da44b[0x4],
                    _0x5a7351 = _0x5da44b[0x5];
                    const _0x347a78 = Math[_0xbf951f(0x67c)](_0x5a7351 + 0x2 * _0x43d8f2 - 0x3 * _0x3668c7, _0x43d054 + 0x2 * _0x145c36 - 0x3 * _0x58eae6)
                      , _0x2dfff4 = _0x414d8d[_0xbf951f(0x3a7)];
                    this['vj']['mh'](_0x145c36, _0x43d8f2, _0x4c8870, _0x347a78),
                    this['xj'][0x0]['mh'](_0x145c36, _0x43d8f2, _0x4c8870, this['Oj'](0x0), _0x347a78),
                    this['xj'][0x1]['mh'](_0x12378b * _0x145c36 + _0x4c7377 * _0x58eae6 + _0x336d34 * _0x43d054, _0x12378b * _0x43d8f2 + _0x4c7377 * _0x3668c7 + _0x336d34 * _0x5a7351, _0x4c8870, this['Oj'](0x1), _0x2dfff4(this['xj'][0x0], this['xj'][0x2])),
                    this['xj'][0x2]['mh'](_0x342f2 * _0x145c36 + _0x4257c9 * _0x58eae6 + _0x482a4c * _0x43d054, _0x342f2 * _0x43d8f2 + _0x4257c9 * _0x3668c7 + _0x482a4c * _0x5a7351, _0x4c8870, this['Oj'](0x2), _0x2dfff4(this['xj'][0x1], this['xj'][0x3])),
                    this['xj'][0x3]['mh'](_0xcce173 * _0x145c36 + _0x41788c * _0x58eae6 + _0x3fe122 * _0x43d054, _0xcce173 * _0x43d8f2 + _0x41788c * _0x3668c7 + _0x3fe122 * _0x5a7351, _0x4c8870, this['Oj'](0x3), _0x2dfff4(this['xj'][0x2], this['xj'][0x4]));
                } else {
                    for (let _0x4a4e = 0x0; _0x4a4e < 0x4; _0x4a4e++)
                        this['xj'][_0x4a4e]['lh']();
                    this['vj']['lh']();
                }
                let _0x47f77f = 0x4;
                const _0x586f67 = 0x2 * _0x5a043a - 0x4;
                for (let _0x1c6fb3 = 0x2; _0x1c6fb3 < _0x586f67; _0x1c6fb3 += 0x2) {
                    _0x145c36 = _0x5da44b[_0x1c6fb3],
                    _0x43d8f2 = _0x5da44b[_0x1c6fb3 + 0x1];
                    const _0x4db18c = _0x14ae38(_0x145c36, _0x43d8f2);
                    if (_0x4db18c) {
                        const _0x33fd07 = _0x5da44b[_0x1c6fb3 - 0x2]
                          , _0x42ae23 = _0x5da44b[_0x1c6fb3 - 0x1];
                        _0x58eae6 = _0x5da44b[_0x1c6fb3 + 0x2],
                        _0x3668c7 = _0x5da44b[_0x1c6fb3 + 0x3],
                        _0x43d054 = _0x5da44b[_0x1c6fb3 + 0x4],
                        _0x5a7351 = _0x5da44b[_0x1c6fb3 + 0x5],
                        this['xj'][_0x47f77f]['mh'](_0x145c36, _0x43d8f2, _0x4c8870, this['Oj'](_0x47f77f), _0x414d8d[_0xbf951f(0x3a7)](this['xj'][_0x47f77f - 0x1], this['xj'][_0x47f77f + 0x1])),
                        _0x47f77f++,
                        this['xj'][_0x47f77f]['mh'](_0x4335bc * _0x33fd07 + _0x9583d3 * _0x145c36 + _0x5e8129 * _0x58eae6 + _0x2be47c * _0x43d054, _0x4335bc * _0x42ae23 + _0x9583d3 * _0x43d8f2 + _0x5e8129 * _0x3668c7 + _0x2be47c * _0x5a7351, _0x4c8870, this['Oj'](_0x47f77f), _0x414d8d[_0xbf951f(0x3a7)](this['xj'][_0x47f77f - 0x1], this['xj'][_0x47f77f + 0x1])),
                        _0x47f77f++,
                        this['xj'][_0x47f77f]['mh'](_0x53e589 * _0x33fd07 + _0x16368a * _0x145c36 + _0x16368a * _0x58eae6 + _0x53e589 * _0x43d054, _0x53e589 * _0x42ae23 + _0x16368a * _0x43d8f2 + _0x16368a * _0x3668c7 + _0x53e589 * _0x5a7351, _0x4c8870, this['Oj'](_0x47f77f), _0x414d8d[_0xbf951f(0x3a7)](this['xj'][_0x47f77f - 0x1], this['xj'][_0x47f77f + 0x1])),
                        _0x47f77f++,
                        this['xj'][_0x47f77f]['mh'](_0x2be47c * _0x33fd07 + _0x5e8129 * _0x145c36 + _0x9583d3 * _0x58eae6 + _0x4335bc * _0x43d054, _0x2be47c * _0x42ae23 + _0x5e8129 * _0x43d8f2 + _0x9583d3 * _0x3668c7 + _0x4335bc * _0x5a7351, _0x4c8870, this['Oj'](_0x47f77f), _0x414d8d[_0xbf951f(0x3a7)](this['xj'][_0x47f77f - 0x1], this['xj'][_0x47f77f + 0x1])),
                        _0x47f77f++;
                    } else {
                        for (let _0x52c278 = 0x0; _0x52c278 < 0x4; _0x52c278++)
                            this['xj'][_0x47f77f++]['lh']();
                    }
                }
                const _0x1395bf = 0x2 * _0x5a043a - 0x4;
                _0x145c36 = _0x5da44b[_0x1395bf],
                _0x43d8f2 = _0x5da44b[_0x1395bf + 0x1];
                if (_0x14ae38(_0x145c36, _0x43d8f2)) {
                    const _0x24277b = _0x5da44b[_0x1395bf - 0x2]
                      , _0x2ef608 = _0x5da44b[_0x1395bf - 0x1];
                    _0x58eae6 = _0x5da44b[_0x1395bf + 0x2],
                    _0x3668c7 = _0x5da44b[_0x1395bf + 0x3];
                    const _0xd1afe4 = this['Oj'][_0xbf951f(0x2f9)](this)
                      , _0x311548 = _0x414d8d['angleBetween'];
                    this['xj'][_0x6c8d09 - 0x5]['mh'](_0x145c36, _0x43d8f2, _0x4c8870, _0xd1afe4(_0x6c8d09 - 0x5), _0x311548(this['xj'][_0x6c8d09 - 0x6], this['xj'][_0x6c8d09 - 0x4])),
                    this['xj'][_0x6c8d09 - 0x4]['mh'](_0x3fe122 * _0x24277b + _0x41788c * _0x145c36 + _0xcce173 * _0x58eae6, _0x3fe122 * _0x2ef608 + _0x41788c * _0x43d8f2 + _0xcce173 * _0x3668c7, _0x4c8870, _0xd1afe4(_0x6c8d09 - 0x4), _0x311548(this['xj'][_0x6c8d09 - 0x5], this['xj'][_0x6c8d09 - 0x3])),
                    this['xj'][_0x6c8d09 - 0x3]['mh'](_0x482a4c * _0x24277b + _0x4257c9 * _0x145c36 + _0x342f2 * _0x58eae6, _0x482a4c * _0x2ef608 + _0x4257c9 * _0x43d8f2 + _0x342f2 * _0x3668c7, _0x4c8870, _0xd1afe4(_0x6c8d09 - 0x3), _0x311548(this['xj'][_0x6c8d09 - 0x4], this['xj'][_0x6c8d09 - 0x2])),
                    this['xj'][_0x6c8d09 - 0x2]['mh'](_0x336d34 * _0x24277b + _0x4c7377 * _0x145c36 + _0x12378b * _0x58eae6, _0x336d34 * _0x2ef608 + _0x4c7377 * _0x43d8f2 + _0x12378b * _0x3668c7, _0x4c8870, _0xd1afe4(_0x6c8d09 - 0x2), _0x311548(this['xj'][_0x6c8d09 - 0x3], this['xj'][_0x6c8d09 - 0x1])),
                    this['xj'][_0x6c8d09 - 0x1]['mh'](_0x58eae6, _0x3668c7, _0x4c8870, _0xd1afe4(_0x6c8d09 - 0x1), _0x311548(this['xj'][_0x6c8d09 - 0x2], this['xj'][_0x6c8d09 - 0x1]));
                } else {
                    for (let _0x4288b4 = _0x6c8d09 - 0x5; _0x4288b4 <= _0x6c8d09 - 0x1; _0x4288b4++)
                        this['xj'][_0x4288b4]['lh']();
                }
                if (this['wj'] === 0x0 && _0x6c8d09 > 0x0)
                    this['Rf'][_0xbf951f(0x6f8)](this['vj']);
                if (this['wj'] > 0x0 && _0x6c8d09 === 0x0)
                    _0x27d3f0(this['vj']);
                while (this['wj'] < _0x6c8d09) {
                    const _0x366ec2 = this['xj'][this['wj']];
                    this['Rf'][_0xbf951f(0x6f8)](_0x366ec2['Nf']['Mf']()),
                    this['Rf']['addChild'](_0x366ec2['Pf']['Mf']()),
                    this['wj']++;
                }
                while (this['wj'] > _0x6c8d09) {
                    this['wj']--;
                    const _0x2892a7 = this['xj'][this['wj']];
                    _0x2892a7['Pf']['ih'](),
                    _0x2892a7['Nf']['ih']();
                }
                const _0x245a20 = theoKzObjects[_0xbf951f(0x112)] && _0x44714a?.['Mb']?.['Mb'];
                if (_0x245a20)
                    this['vj'][_0xbf951f(0x31b)](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611);
                else
                    this['vj'][_0xbf951f(0x562)]();
                const _0x49220b = this['xj'][0x0]['gj']();
                if (!_0x49220b) {
                    this['vj']['Ij'](),
                    this['vj']['Kj'](),
                    this['vj'][_0xbf951f(0x312)](),
                    this['vj'][_0xbf951f(0x1b1)](),
                    this['vj'][_0xbf951f(0x455)](),
                    this['vj'][_0xbf951f(0xf1)](),
                    this['vj'][_0xbf951f(0x28e)]();
                    return;
                }
                const _0x3c7c2d = _0x44714a['Ff']
                  , _0x338ad3 = _0x3c7c2d[_0x5bdf7a['MAGNETIC_TYPE']]
                  , _0x166038 = _0x3c7c2d[_0x5bdf7a['VELOCITY_TYPE']]
                  , _0x2fdea3 = _0x3c7c2d[_0x5bdf7a[_0xbf951f(0x49f)]]
                  , _0x5a952f = _0x3c7c2d[_0x5bdf7a[_0xbf951f(0x6e8)]]
                  , _0x1c38a2 = _0x3c7c2d[_0x5bdf7a['X5_TYPE']]
                  , _0x1f6649 = _0x3c7c2d[_0x5bdf7a[_0xbf951f(0x15b)]]
                  , _0x20917b = _0x3c7c2d[_0x5bdf7a['ZOOM_TYPE']];
                _0x338ad3?.['sc'] ? this['vj']['Mj'](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611) : this['vj']['Ij'](),
                _0x166038?.['sc'] ? this['vj']['Nj'](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611) : this['vj']['Kj'](),
                theoKzObjects['speed_zigzag'] && _0x2fdea3?.['sc'] ? this['vj'][_0xbf951f(0x32b)](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611) : this['vj']['flexx'](),
                theoKzObjects[_0xbf951f(0x6b6)] ? (_0x5a952f?.['sc'] ? this['vj']['ActiveX2'](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611) : this['vj']['xXx2'](),
                _0x1c38a2?.['sc'] ? this['vj']['ActiveX5'](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611) : this['vj']['xXx5'](),
                _0x1f6649?.['sc'] ? this['vj'][_0xbf951f(0x3c2)](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611) : this['vj'][_0xbf951f(0xf1)](),
                _0x20917b?.['sc'] ? this['vj'][_0xbf951f(0x5ab)](_0x44714a, _0x4c8870, _0x3bfe32, _0x3f2611) : this['vj'][_0xbf951f(0x28e)]()) : (this['vj'][_0xbf951f(0x1b1)](),
                this['vj'][_0xbf951f(0x455)](),
                this['vj'][_0xbf951f(0xf1)](),
                this['vj'][_0xbf951f(0x28e)]());
            }
            ;
            var _0x414d8d = (function() {
                var _0x50c299 = _0x10a334;
                function _0x480896(_0x59631d, _0x170fb8) {
                    this['Nf'] = _0x59631d,
                    this['Nf']['Mg'](!0x1),
                    this['Pf'] = _0x170fb8,
                    this['Pf']['Mg'](!0x1);
                }
                return _0x480896[_0x50c299(0x34d)]['mh'] = function(_0x470fc9, _0x13e67a, _0x3542b9, _0x37e9b3, _0x4c6592) {
                    var _0x30ff95 = _0x50c299;
                    this['Nf']['Mg'](theoKzObjects[_0x30ff95(0x412)]),
                    this['Nf']['nh'](_0x470fc9, _0x13e67a),
                    this['Nf']['oh'](_0x3542b9),
                    this['Nf']['fj'](_0x4c6592),
                    this['Pf']['Mg'](theoKzObjects['noAuras']),
                    this['Pf']['nh'](_0x470fc9, _0x13e67a),
                    this['Pf']['oh'](_0x37e9b3),
                    this['Pf']['fj'](_0x4c6592);
                }
                ,
                _0x480896[_0x50c299(0x34d)]['lh'] = function() {
                    this['Nf']['Mg'](!0x1),
                    this['Pf']['Mg'](!0x1);
                }
                ,
                _0x480896[_0x50c299(0x34d)]['gj'] = function() {
                    return this['Nf']['gj']();
                }
                ,
                _0x480896[_0x50c299(0x3a7)] = function(_0x133ead, _0x381f77) {
                    var _0x17f616 = _0x50c299;
                    return Math['atan2'](_0x133ead['Nf']['jh'][_0x17f616(0x23e)]['y'] - _0x381f77['Nf']['jh'][_0x17f616(0x23e)]['y'], _0x133ead['Nf']['jh'][_0x17f616(0x23e)]['x'] - _0x381f77['Nf']['jh'][_0x17f616(0x23e)]['x']);
                }
                ,
                _0x480896;
            }());
            return _0x1c4c86;
        }())
          , _0x362552 = (function() {
            var _0x49b9d0 = _0x53c3f2;
            function _0x22762b(_0x35cff6) {
                var _0x182ea2 = _0x32c7;
                this['se'] = _0x35cff6,
                this['te'] = _0x35cff6[_0x182ea2(0x6d9)]()[0x0],
                this['ue'] = new _0x55f583['ac']({
                    'view': this['te'],
                    'transparent': !0x0
                }),
                this['sc'] = !0x1,
                this['Pj'] = new _0x4c9b08(),
                this['Pj']['Rf'][_0x182ea2(0x6f8)](this['Pj']['vj']),
                this['Qj'] = 0x0,
                this['Rj'] = 0x0,
                this['Ng'] = 0x1,
                this['rh'] = 0x0,
                this['sh'] = 0x0,
                this['th'] = 0x0,
                this['uh'] = 0x0,
                this['vh'] = 0x0,
                this['Sj'] = !0x1,
                this['Tj'] = !0x1,
                this['Uj'] = !0x1,
                this['Vj'] = !0x1,
                this['Wj'] = !0x1,
                this['Xj'] = !0x1,
                this['Yj'] = !0x1,
                this['Zj'] = !0x1,
                this['$j'] = !0x1,
                this['_j'] = !0x1,
                this['Ra'](),
                this['Fb']();
                var _0x25fece = this;
                _0x242785()['p']['ca'](function() {
                    _0x242785()['p']['W']() && _0x25fece['Fb']();
                });
            }
            return _0x22762b['prototype']['Fb'] = function() {
                var _0x3e1f4e = _0x242785();
                this['Pj']['hh'](_0x283aa5['$e'], null, _0x3e1f4e['p']['Dc']()['dd'](this['rh']), _0x3e1f4e['p']['Dc']()['fd'](this['sh']), _0x3e1f4e['p']['Dc']()['gd'](this['th']), _0x3e1f4e['p']['Dc']()['hd'](this['uh']), _0x3e1f4e['p']['Dc']()['jd'](this['vh']));
            }
            ,
            _0x22762b[_0x49b9d0(0x34d)]['Le'] = function(_0xa67225) {
                this['sc'] = _0xa67225;
            }
            ,
            _0x22762b[_0x49b9d0(0x34d)]['ak'] = function(_0x107077, _0x2fa951, _0xeb511e) {
                this['rh'] = _0x107077,
                this['Sj'] = _0x2fa951,
                this['Xj'] = _0xeb511e,
                this['Fb']();
            }
            ,
            _0x22762b[_0x49b9d0(0x34d)]['bk'] = function(_0x8cd060, _0x5c328f, _0x4697d0) {
                this['sh'] = _0x8cd060,
                this['Tj'] = _0x5c328f,
                this['Yj'] = _0x4697d0,
                this['Fb']();
            }
            ,
            _0x22762b['prototype']['ck'] = function(_0x2296c7, _0x42b08a, _0x36ff80) {
                this['th'] = _0x2296c7,
                this['Uj'] = _0x42b08a,
                this['Zj'] = _0x36ff80,
                this['Fb']();
            }
            ,
            _0x22762b[_0x49b9d0(0x34d)]['dk'] = function(_0x38579a, _0x4cb5f1, _0x5c8e49) {
                this['uh'] = _0x38579a,
                this['Vj'] = _0x4cb5f1,
                this['$j'] = _0x5c8e49,
                this['Fb']();
            }
            ,
            _0x22762b[_0x49b9d0(0x34d)]['ek'] = function(_0x52ba22, _0xafe4bf, _0x50fb2f) {
                this['vh'] = _0x52ba22,
                this['Wj'] = _0xafe4bf,
                this['_j'] = _0x50fb2f,
                this['Fb']();
            }
            ,
            _0x22762b[_0x49b9d0(0x34d)]['Ra'] = function() {
                var _0x3e67e7 = _0x49b9d0
                  , _0x3b17f7 = window['devicePixelRatio'] ? window[_0x3e67e7(0x3ca)] : 0x1;
                this['Qj'] = this['se'][_0x3e67e7(0x5ea)](),
                this['Rj'] = this['se'][_0x3e67e7(0x392)](),
                this['ue']['resize'](this['Qj'], this['Rj']),
                this['ue']['resolution'] = _0x3b17f7,
                this['te']['width'] = _0x3b17f7 * this['Qj'],
                this['te'][_0x3e67e7(0x392)] = _0x3b17f7 * this['Rj'],
                this['Ng'] = this['Rj'] / 0x4;
                var _0xff901b = _0x237658(0x1, this['Pj']['xj'][_0x3e67e7(0x484)], 0x2 * Math[_0x3e67e7(0x19d)](this['Qj'] / this['Ng']) - 0x5);
                if (this['Pj']['wj'] != _0xff901b) {
                    for (var _0x31f7a0 = _0xff901b; _0x31f7a0 < this['Pj']['xj'][_0x3e67e7(0x484)]; _0x31f7a0++)
                        this['Pj']['xj'][_0x31f7a0]['lh']();
                    for (; this['Pj']['wj'] < _0xff901b; )
                        this['Pj']['Rf']['addChild'](this['Pj']['xj'][this['Pj']['wj']]['Nf']['Mf']()),
                        this['Pj']['Rf'][_0x3e67e7(0x6f8)](this['Pj']['xj'][this['Pj']['wj']]['Pf']['Mf']()),
                        this['Pj']['wj'] += 0x1;
                    for (; this['Pj']['wj'] > _0xff901b; )
                        this['Pj']['wj'] -= 0x1,
                        this['Pj']['xj'][this['Pj']['wj']]['Pf']['ih'](),
                        this['Pj']['xj'][this['Pj']['wj']]['Nf']['ih']();
                }
            }
            ,
            _0x22762b['prototype']['Pa'] = function() {
                var _0x36c60e = _0x49b9d0;
                if (this['sc']) {
                    if (_0x242785()['p']['W']) {
                        for (var _0x4f7ec1 = Date[_0x36c60e(0x39e)](), _0x27a970 = _0x4f7ec1 / 0xc8, _0x3a1d52 = Math['sin'](_0x27a970), _0x6b728b = this['Ng'], _0x3a2018 = 1.5 * this['Ng'], _0x42114a = this['Qj'] - 0.5 * (this['Qj'] - 0.5 * _0x6b728b * (this['Pj']['wj'] - 0x1)), _0x4a4d29 = 0.5 * this['Rj'], _0x4f873c = 0x0, _0xa26cb1 = 0x0, _0x108d53 = -0x1; _0x108d53 < this['Pj']['wj']; _0x108d53++) {
                            var _0x54790b = _0x108d53
                              , _0x5c3927 = Math[_0x36c60e(0x19a)](0x1 * _0x54790b / 0xc * Math['PI'] - _0x27a970) * (0x1 - Math[_0x36c60e(0x6be)](0x10, -0x1 * _0x54790b / 0xc));
                            if (_0x108d53 >= 0x0) {
                                var _0x23e6e7 = _0x42114a + -0.5 * _0x6b728b * _0x54790b
                                  , _0x51d3e8 = _0x4a4d29 + 0.5 * _0x6b728b * _0x5c3927
                                  , _0x3f1769 = 0x2 * _0x6b728b
                                  , _0x30e1cd = 0x2 * _0x3a2018
                                  , _0x3f0968 = Math[_0x36c60e(0x67c)](_0xa26cb1 - _0x5c3927, _0x54790b - _0x4f873c);
                                0x0 == _0x108d53 && this['Pj']['vj']['mh'](_0x23e6e7, _0x51d3e8, _0x3f1769, _0x3f0968),
                                this['Pj']['xj'][_0x108d53]['mh'](_0x23e6e7, _0x51d3e8, _0x3f1769, _0x30e1cd, _0x3f0968);
                                var _0x502e59 = this['Sj'] ? this['Xj'] ? 0.4 + 0.2 * _0x3a1d52 : 0.9 + 0.1 * _0x3a1d52 : this['Xj'] ? 0.4 : 0x1;
                                this['Pj']['xj'][_0x108d53]['Nf']['qh'](_0x502e59),
                                this['Pj']['xj'][_0x108d53]['Pf']['qh'](_0x502e59);
                            }
                            _0x4f873c = _0x54790b,
                            _0xa26cb1 = _0x5c3927;
                        }
                        for (var _0x2e7ce6 = 0x0; _0x2e7ce6 < this['Pj']['vj']['Cj'][_0x36c60e(0x484)]; _0x2e7ce6++) {
                            var _0x3204dd = this['Tj'] ? this['Yj'] ? 0.4 + 0.2 * _0x3a1d52 : 0.9 + 0.1 * _0x3a1d52 : this['Yj'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Cj'][_0x2e7ce6]['qh'](_0x3204dd);
                        }
                        for (var _0x285f47 = 0x0; _0x285f47 < this['Pj']['vj']['Dj']['length']; _0x285f47++) {
                            var _0x452d0a = this['Uj'] ? this['Zj'] ? 0.4 + 0.2 * _0x3a1d52 : 0.9 + 0.1 * _0x3a1d52 : this['Zj'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Dj'][_0x285f47]['qh'](_0x452d0a);
                        }
                        for (var _0x7d4ee0 = 0x0; _0x7d4ee0 < this['Pj']['vj']['Ej'][_0x36c60e(0x484)]; _0x7d4ee0++) {
                            var _0x19ce6b = this['Vj'] ? this['$j'] ? 0.4 + 0.2 * _0x3a1d52 : 0.9 + 0.1 * _0x3a1d52 : this['$j'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Ej'][_0x7d4ee0]['qh'](_0x19ce6b);
                        }
                        for (var _0x348457 = 0x0; _0x348457 < this['Pj']['vj']['Fj'][_0x36c60e(0x484)]; _0x348457++) {
                            var _0x30f1ca = this['Wj'] ? this['_j'] ? 0.4 + 0.2 * _0x3a1d52 : 0.9 + 0.1 * _0x3a1d52 : this['_j'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Fj'][_0x348457]['qh'](_0x30f1ca);
                        }
                        this['ue'][_0x36c60e(0x476)](this['Pj']['Rf']);
                    }
                }
            }
            ,
            _0x22762b;
        }())
          , _0x5995d6 = (function() {
            var _0x5e2736 = _0x53c3f2;
            function _0x1ecfe7(_0x4fc126) {
                this['rc'] = _0x4fc126;
            }
            return _0x1ecfe7['fk'] = $('#game-view'),
            _0x1ecfe7['gk'] = $(_0x5e2736(0x32e)),
            _0x1ecfe7['hk'] = $(_0x5e2736(0x4cf)),
            _0x1ecfe7['ik'] = $('#popup-view'),
            _0x1ecfe7['jk'] = $('#toaster-view'),
            _0x1ecfe7['kk'] = $('#loading-view'),
            _0x1ecfe7['lk'] = $(_0x5e2736(0x1a6)),
            _0x1ecfe7['mk'] = $(_0x5e2736(0x321)),
            _0x1ecfe7['di'] = $(_0x5e2736(0x272)),
            _0x1ecfe7['nk'] = $(_0x5e2736(0x19b)),
            _0x1ecfe7['ok'] = $(_0x5e2736(0x72d)),
            _0x1ecfe7['prototype']['a'] = function() {}
            ,
            _0x1ecfe7[_0x5e2736(0x34d)]['ii'] = function() {}
            ,
            _0x1ecfe7[_0x5e2736(0x34d)]['ji'] = function() {}
            ,
            _0x1ecfe7['prototype']['ei'] = function() {}
            ,
            _0x1ecfe7[_0x5e2736(0x34d)]['Ra'] = function() {}
            ,
            _0x1ecfe7['prototype']['Pa'] = function(_0x355de6, _0x585697) {}
            ,
            _0x1ecfe7;
        }())
          , _0x4820ba = (function() {
            var _0x115e89 = _0x53c3f2;
            function _0x3bda0e(_0x571e7a, _0x1a72fe, _0x400f41, _0x2b1253, _0x1fa061, _0x48a83e) {
                var _0x57ca6b = _0x32c7
                  , _0x4983f6 = '<div><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20x=\x220\x22\x20y=\x220\x22\x20viewBox=\x220\x200\x20456\x20456\x22\x20xml:space=\x22preserve\x22><rect\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22456\x22\x20height=\x22456\x22\x20fill=\x22#F7941D\x22/><path\x20d=\x22M242.7\x20456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9\x2035.6-79.5\x2079.5-79.5h62v64.6h-44.4c-13.9\x200-25.3\x2011.3-25.3\x2025.3v50h68.5l-9.5\x2071.9h-59.1V456z\x22\x20fill=\x22#fff\x22/></svg><span>' + _0x571e7a + '</span></div>'
                  , _0x4d559b = $(_0x4983f6);
                return _0x4d559b[_0x57ca6b(0x57f)](function() {
                    var _0x5da321 = _0x57ca6b;
                    _0x5da321(0x3a3) != typeof FB && void 0x0 !== FB['ui'] && FB['ui']({
                        'method': 'feed',
                        'display': _0x5da321(0x32a),
                        'link': _0x1a72fe,
                        'name': _0x400f41,
                        'caption': _0x2b1253,
                        'description': _0x1fa061,
                        'picture': _0x48a83e
                    }, function() {});
                }),
                _0x4d559b;
            }
            var _0x1c1b77 = $(_0x115e89(0x5bd))
              , _0x21c546 = $(_0x115e89(0x2e0))
              , _0x4f9ccf = $('#congrats-bg')
              , _0x1c3361 = $(_0x115e89(0x588))
              , _0xa6875f = ($('#congrats'),
            $(_0x115e89(0x61f)))
              , _0x53f2a7 = $(_0x115e89(0x229))
              , _0xf93059 = $(_0x115e89(0xfb))
              , _0x80582d = $('#final-place')
              , _0x54591d = $('#final-board')
              , _0x21a006 = _0xaa2971(_0x5995d6, function() {
                var _0x47487c = _0x115e89;
                _0x5995d6[_0x47487c(0x67d)](this, _0x4adc5e['pk']);
                var _0x4d7fea = this
                  , _0x2b9f3e = _0x242785()
                  , _0x21cc0a = _0x5995d6['mk']['get']()[0x0];
                console[_0x47487c(0x10f)]('sSE=' + _0x4c8c71['qk']),
                _0x1c1b77[_0x47487c(0x2db)](_0x817213(_0x47487c(0x44b))),
                _0x21c546['text'](_0x817213('index.game.result.continue')),
                _0x21c546[_0x47487c(0x57f)](function() {
                    var _0x3eeeb5 = _0x47487c;
                    _0x2b9f3e['r']['Cd'](),
                    _0x2b9f3e['r']['G'](_0x424e28[_0x3eeeb5(0x737)]['F']),
                    _0x2b9f3e['s']['I'](_0x2b9f3e['s']['F']);
                }),
                $(_0x47487c(0x321))[_0x47487c(0x160)](_0x47487c(0x218), 0x0)[_0x47487c(0x536)](),
                $(_0x47487c(0x321))[_0x47487c(0x57f)](),
                $(_0x47487c(0x321))[_0x47487c(0x5a8)](function(_0x53b137) {
                    var _0x32d90f = _0x47487c;
                    console[_0x32d90f(0x10f)](_0x53b137);
                    if (_0x53b137['target']['type'] === _0x32d90f(0x2db))
                        return;
                    _0x53b137[_0x32d90f(0x2b7)][_0x32d90f(0x69f)]() === keys['zoom'] && zw_updatezoom(0x1);
                    if (_0x53b137[_0x32d90f(0x2b7)][_0x32d90f(0x69f)]() === keys[_0x32d90f(0x585)]) {
                        let _0x4b4698 = zw_lastserver;
                        $(_0x32d90f(0x384))[_0x32d90f(0x72a)](_0x32d90f(0x23e), _0x32d90f(0x65c)),
                        _0x4b4698 && (anApp['r']['Hd'](),
                        anApp['sa'](_0x4b4698));
                    }
                    if (_0x53b137[_0x32d90f(0x2b7)][_0x32d90f(0x69f)]() === keys[_0x32d90f(0x1ca)]) {
                        const _0xb56c36 = new Uint8Array([NaN, NaN]);
                        anApp['o']['Wb'](_0xb56c36),
                        setTimeout( () => {
                            var _0x17021e = _0x32d90f;
                            let _0x547d6c = zw_lastserver;
                            $(_0x17021e(0x384))['css'](_0x17021e(0x23e), _0x17021e(0x65c)),
                            _0x547d6c && (anApp['r']['Hd'](),
                            anApp['sa'](_0x547d6c));
                        }
                        , 0x3e8);
                    }
                    _0x53b137[_0x32d90f(0x2b7)]['toLowerCase']() === keys['laserHS'] && $(_0x32d90f(0x471))[_0x32d90f(0x57f)](),
                    _0x53b137['key'][_0x32d90f(0x69f)]() === keys['sectores'] && ($(_0x32d90f(0x42a))[_0x32d90f(0x57f)](),
                    setSectorsGame()),
                    _0x53b137['key']['toLowerCase']() === keys[_0x32d90f(0x30c)] && ($(_0x32d90f(0x145))[_0x32d90f(0x57f)](),
                    setSectorsGame()),
                    _0x53b137['key'][_0x32d90f(0x69f)]() === keys['noSkin'] && (theoKzObjects['noSkin'] = !theoKzObjects[_0x32d90f(0x412)]),
                    _0x53b137['key'][_0x32d90f(0x69f)]() === keys['noAuras'] && (theoKzObjects[_0x32d90f(0x1db)] = !theoKzObjects[_0x32d90f(0x1db)]),
                    _0x53b137['key'][_0x32d90f(0x69f)]() === keys[_0x32d90f(0x646)] && (isRunning ? (isRunning = ![],
                    initialInterval = 0x37,
                    cycleCounter = 0x1,
                    isIncrementing = !![],
                    clearInterval(intervalID),
                    intervalID = null,
                    zw_girosubtracttexture['texture'] = ungirotexture,
                    zw_girosubtracttexture[_0x32d90f(0x66b)] = 0.25) : (zw_girosubtracttexture['alpha'] = 0.75,
                    startInterval(),
                    isRunning = !![]));
                }),
                $(_0x47487c(0x321))['keydown'](function(_0x50eddb) {
                    var _0x4f21d6 = _0x47487c;
                    _0x50eddb[_0x4f21d6(0x2b7)] === _0x4f21d6(0x483) && _0x3ebbf8();
                    0x20 == _0x50eddb[_0x4f21d6(0x179)] && (_0x4d7fea['rk'] = !![]);
                    0x31 == _0x50eddb[_0x4f21d6(0x179)] && (theoKzObjects['emoji'] = !![],
                    setTimeout( () => {
                        var _0x19a532 = _0x4f21d6;
                        theoKzObjects[_0x19a532(0x112)] = ![];
                    }
                    , 0x7d0));
                    if (0x36 == _0x50eddb['keyCode']) {}
                })[_0x47487c(0x336)](function(_0x592700) {
                    var _0x49744e = _0x47487c;
                    0x20 == _0x592700[_0x49744e(0x179)] && (_0x4d7fea['rk'] = ![]);
                });
                var _0x3ebbf8 = function() {
                    var _0x3821d0 = _0x47487c;
                    $(_0x3821d0(0x405))[_0x3821d0(0x72a)](_0x3821d0(0x665), _0x3821d0(0x3dd))[_0x3821d0(0x536)]();
                };
                _0x21cc0a[_0x47487c(0x38f)](_0x47487c(0x28c), function(_0x566837) {
                    var _0x38c23c = _0x47487c;
                    (_0x566837 = _0x566837 || window[_0x38c23c(0x106)]) && (_0x4d7fea['rk'] = _0x566837[_0x38c23c(0xd6)][_0x38c23c(0x484)] >= 0x2),
                    _0x566837['preventDefault']();
                }, !![]),
                _0x21cc0a[_0x47487c(0x38f)](_0x47487c(0x5ae), function(_0x278bac) {
                    (_0x278bac = _0x278bac || window['event']) && (_0x4d7fea['rk'] = _0x278bac['touches']['length'] >= 0x2);
                }, !![]),
                _0x21cc0a[_0x47487c(0x38f)](_0x47487c(0x65a), function(_0x23e31d) {
                    var _0x569066 = _0x47487c;
                    _0x23e31d = _0x23e31d || window[_0x569066(0x106)] && typeof _0x23e31d[_0x569066(0x418)] !== 'undefined';
                    if (_0x23e31d && !isRunning) {
                        var _0x24d014 = _0x23e31d[_0x569066(0x418)]
                          , _0x13cef1 = _0x23e31d['clientY'];
                        window[_0x569066(0x3bc)] = _0x24d014,
                        window[_0x569066(0x136)] = _0x13cef1,
                        _0x4d7fea['sk'] = Math[_0x569066(0x67c)](_0x13cef1 - 0.5 * _0x21cc0a[_0x569066(0x25e)], _0x24d014 - 0.5 * _0x21cc0a['offsetWidth']);
                    }
                }, !![]),
                _0x21cc0a[_0x47487c(0x38f)](_0x47487c(0x4ad), function(_0x482661) {
                    _0x4d7fea['rk'] = !![];
                }, !![]),
                _0x21cc0a[_0x47487c(0x38f)]('mouseup', function(_0x156d37) {
                    _0x4d7fea['rk'] = ![];
                }, !![]);
                if (zw_mobilecheck()) {
                    var _0x377a34, _0x503871 = -0x1;
                    _0x21cc0a[_0x47487c(0x38f)](_0x47487c(0x452), function(_0x2f32ca) {
                        var _0x445823 = _0x47487c;
                        if (_0x2f32ca = _0x2f32ca || window['event']) {
                            _0x2f32ca = _0x2f32ca[_0x445823(0xd6)][0x0];
                            var _0x483992 = 0.5 * _0x21cc0a[_0x445823(0x352)]
                              , _0x5a5dc = 0.5 * _0x21cc0a['offsetHeight']
                              , _0x11dbbe = 0x6e;
                            zw_mobilearrowtexture['visible'] && (_0x483992 = zw_mobilearrowtexture['x'] + 0x6e,
                            _0x5a5dc = zw_mobilearrowtexture['y'] + 0x6e);
                            zw_joystick === -0x1 && (_0x4d7fea['sk'] = Math[_0x445823(0x67c)](_0x2f32ca[_0x445823(0x4db)] - _0x5a5dc, _0x2f32ca['pageX'] - _0x483992));
                            if (zw_mobileprediction != -0x1) {
                                var _0xffae5b = Math[_0x445823(0x3be)]((_0x483992 - _0x2f32ca[_0x445823(0x6cc)]) * (_0x483992 - _0x2f32ca['pageX']) + (_0x5a5dc - _0x2f32ca[_0x445823(0x4db)]) * (_0x5a5dc - _0x2f32ca[_0x445823(0x4db)]));
                                zw_mobilepredictiontextures[zw_mobileprediction]['x'] = 0.5 * _0x21cc0a[_0x445823(0x352)] + (_0xffae5b < _0x11dbbe ? _0xffae5b : _0x11dbbe) * Math[_0x445823(0x19a)](_0x4d7fea['sk']) - 0x44,
                                zw_mobilepredictiontextures[zw_mobileprediction]['y'] = 0.5 * _0x21cc0a[_0x445823(0x25e)] + (_0xffae5b < _0x11dbbe ? _0xffae5b : _0x11dbbe) * Math[_0x445823(0x5fa)](_0x4d7fea['sk']) - 0x44,
                                zw_mobilepredictiontextures[zw_mobileprediction]['alpha'] = 0x1;
                            }
                        }
                    }, !0x0),
                    _0x21cc0a[_0x47487c(0x38f)](_0x47487c(0x5ae), function(_0x364137) {
                        var _0x65b827 = _0x47487c;
                        zw_mobileprediction != -0x1 && (zw_mobilepredictiontextures[zw_mobileprediction][_0x65b827(0x66b)] = 0.25),
                        _0x364137 && _0x503871 === -0x1 && (_0x4d7fea['rk'] = _0x364137[_0x65b827(0xd6)]['length'] >= 0x2);
                    }, !0x0),
                    _0x21cc0a[_0x47487c(0x38f)]('pointerdown', function(_0x350389) {
                        var _0x1f84b0 = _0x47487c;
                        let _0x5d9d3b = zw_zoomplustexture[_0x1f84b0(0x1e5)](), _0x2ac97a = zw_zoomsubtracttexture[_0x1f84b0(0x1e5)](), _0x27eaa, _0x346383;
                        zw_girosubtracttexture !== undefined && zw_explotWubtracttexture !== undefined && (_0x27eaa = zw_girosubtracttexture[_0x1f84b0(0x1e5)](),
                        _0x346383 = zw_explotWubtracttexture[_0x1f84b0(0x1e5)]());
                        let _0x144a7c = zw_mobilecontroltextures[zw_mobilecontrol][_0x1f84b0(0x1e5)]()
                          , _0x26a698 = zw_mobilepeedtexture[_0x1f84b0(0x1e5)]();
                        if (_0x346383 !== undefined && _0x27eaa !== undefined) {
                            if (_0x350389['clientX'] > _0x346383['x'] && _0x350389['clientX'] <= _0x346383['x'] + zw_explotWubtracttexture['width'] && _0x350389[_0x1f84b0(0x23b)] > _0x346383['y'] && _0x350389[_0x1f84b0(0x23b)] <= _0x346383['y'] + zw_explotWubtracttexture['height']) {
                                zw_explotWubtracttexture[_0x1f84b0(0x1b8)]('mouseup');
                                return;
                            }
                            if (_0x350389[_0x1f84b0(0x418)] > _0x27eaa['x'] && _0x350389['clientX'] <= _0x27eaa['x'] + zw_girosubtracttexture[_0x1f84b0(0x5ea)] && _0x350389[_0x1f84b0(0x23b)] > _0x27eaa['y'] && _0x350389['clientY'] <= _0x27eaa['y'] + zw_girosubtracttexture['height']) {
                                zw_girosubtracttexture[_0x1f84b0(0x1b8)](_0x1f84b0(0x489));
                                return;
                            }
                        }
                        if (_0x350389[_0x1f84b0(0x418)] > _0x5d9d3b['x'] && _0x350389[_0x1f84b0(0x418)] <= _0x5d9d3b['x'] + zw_zoomplustexture[_0x1f84b0(0x5ea)] && _0x350389[_0x1f84b0(0x23b)] > _0x5d9d3b['y'] && _0x350389[_0x1f84b0(0x23b)] <= _0x5d9d3b['y'] + zw_zoomplustexture[_0x1f84b0(0x392)]) {
                            zw_zoomplustexture[_0x1f84b0(0x1b8)](_0x1f84b0(0x489));
                            return;
                        }
                        if (_0x350389[_0x1f84b0(0x418)] > _0x2ac97a['x'] && _0x350389[_0x1f84b0(0x418)] <= _0x2ac97a['x'] + zw_zoomsubtracttexture[_0x1f84b0(0x5ea)] && _0x350389[_0x1f84b0(0x23b)] > _0x2ac97a['y'] && _0x350389['clientY'] <= _0x2ac97a['y'] + zw_zoomsubtracttexture[_0x1f84b0(0x392)]) {
                            zw_zoomsubtracttexture[_0x1f84b0(0x1b8)](_0x1f84b0(0x489));
                            return;
                        }
                        if (_0x350389['clientX'] > _0x144a7c['x'] && _0x350389[_0x1f84b0(0x418)] <= _0x144a7c['x'] + zw_mobilecontroltextures[zw_mobilecontrol]['width'] && _0x350389[_0x1f84b0(0x23b)] > _0x144a7c['y'] && _0x350389[_0x1f84b0(0x23b)] <= _0x144a7c['y'] + zw_mobilecontroltextures[zw_mobilecontrol][_0x1f84b0(0x392)]) {
                            zw_mobilecontroltextures[zw_mobilecontrol][_0x1f84b0(0x1b8)](_0x1f84b0(0x481));
                            return;
                        }
                        if (zw_mobilepeedtexture['visible'] && _0x350389[_0x1f84b0(0x418)] > _0x26a698['x'] && _0x350389['clientX'] <= _0x26a698['x'] + zw_mobilepeedtexture['width'] && _0x350389[_0x1f84b0(0x23b)] > _0x26a698['y'] && _0x350389['clientY'] <= _0x26a698['y'] + zw_mobilepeedtexture[_0x1f84b0(0x392)]) {
                            _0x503871 = _0x350389[_0x1f84b0(0x578)],
                            _0x4d7fea['rk'] = !![],
                            zw_mobilepeedtexture[_0x1f84b0(0x66b)] = 0x1;
                            return;
                        }
                        zw_joystick !== -0x1 && (!zw_joysticks[zw_joystick]['visible'] && (_0x377a34 = _0x350389[_0x1f84b0(0x578)],
                        zw_joysticks[zw_joystick]['x'] = _0x350389[_0x1f84b0(0x418)],
                        zw_joysticks[zw_joystick]['y'] = _0x350389[_0x1f84b0(0x23b)],
                        zw_joysticks[zw_joystick][_0x1f84b0(0x654)] = !![],
                        zw_joysticks[zw_joystick][_0x1f84b0(0x271)](_0x350389)));
                    }, !0x0),
                    _0x21cc0a[_0x47487c(0x38f)]('pointerup', function(_0x5e9e35) {
                        var _0xd0aa42 = _0x47487c;
                        _0x5e9e35[_0xd0aa42(0x578)] == _0x503871 && (_0x4d7fea['rk'] = ![],
                        _0x503871 = -0x1,
                        zw_mobilepeedtexture[_0xd0aa42(0x66b)] = 0.5),
                        _0x5e9e35[_0xd0aa42(0x578)] == _0x377a34 && (zw_joystick !== -0x1 && (zw_joysticks[zw_joystick][_0xd0aa42(0x654)] = ![],
                        zw_joysticks[zw_joystick][_0xd0aa42(0x668)](_0x5e9e35)));
                    }, !0x0),
                    _0x21cc0a['addEventListener'](_0x47487c(0x54d), function(_0x39db5f) {
                        var _0x2c96ff = _0x47487c;
                        _0x39db5f['pointerId'] == _0x377a34 && (zw_joystick !== -0x1 && zw_joysticks[zw_joystick][_0x2c96ff(0x49c)](_0x39db5f));
                    }, !0x0);
                }
                this['wb'] = new _0x3f0eb9(_0x5995d6['mk']),
                this['cb'] = _0x19ba24['J'],
                this['sk'] = 0x0,
                this['rk'] = ![],
                theoEvents[_0x47487c(0x266)] = _0x4d7fea;
            });
            _0x21a006[_0x115e89(0x34d)]['a'] = function() {}
            ,
            _0x21a006['prototype']['ii'] = function() {
                var _0x4396fa = _0x115e89;
                this['cb'] == _0x19ba24['J'] ? (_0x5995d6['fk'][_0x4396fa(0x73b)](),
                _0x5995d6['fk']['fadeIn'](0x1f4),
                _0x5995d6['gk']['stop'](),
                _0x5995d6['gk'][_0x4396fa(0x150)](0x1),
                _0x5995d6['hk'][_0x4396fa(0x73b)](),
                _0x5995d6['hk'][_0x4396fa(0x150)](0x32),
                _0x5995d6['ik'][_0x4396fa(0x73b)](),
                _0x5995d6['ik']['fadeOut'](0x32),
                _0x5995d6['jk'][_0x4396fa(0x73b)](),
                _0x5995d6['jk'][_0x4396fa(0x150)](0x32),
                _0x5995d6['kk'][_0x4396fa(0x73b)](),
                _0x5995d6['kk']['fadeOut'](0x32),
                _0x5995d6['lk'][_0x4396fa(0x73b)](),
                _0x5995d6['lk'][_0x4396fa(0x150)](0x1),
                _0x5995d6['di'][_0x4396fa(0x73b)](),
                _0x5995d6['di'][_0x4396fa(0x150)](0x32),
                _0x47e7b1['Le'](![]),
                _0x5995d6['nk'][_0x4396fa(0x73b)](),
                _0x5995d6['nk'][_0x4396fa(0x150)](0x32),
                _0x5995d6['ok'][_0x4396fa(0x73b)](),
                _0x5995d6['ok']['fadeOut'](0x32)) : (_0x5995d6['fk'][_0x4396fa(0x73b)](),
                _0x5995d6['fk'][_0x4396fa(0x442)](0x1f4),
                _0x5995d6['gk'][_0x4396fa(0x73b)](),
                _0x5995d6['gk'][_0x4396fa(0x442)](0x1f4),
                _0x5995d6['hk'][_0x4396fa(0x73b)](),
                _0x5995d6['hk'][_0x4396fa(0x150)](0x32),
                _0x5995d6['ik'][_0x4396fa(0x73b)](),
                _0x5995d6['ik'][_0x4396fa(0x150)](0x32),
                _0x5995d6['jk'][_0x4396fa(0x73b)](),
                _0x5995d6['jk'][_0x4396fa(0x150)](0x32),
                _0x5995d6['kk'][_0x4396fa(0x73b)](),
                _0x5995d6['kk'][_0x4396fa(0x150)](0x32),
                _0x5995d6['lk'][_0x4396fa(0x73b)](),
                _0x5995d6['lk'][_0x4396fa(0x150)](0x1),
                _0x5995d6['di'][_0x4396fa(0x73b)](),
                _0x5995d6['di'][_0x4396fa(0x150)](0x32),
                _0x47e7b1['Le'](![]),
                _0x5995d6['nk'][_0x4396fa(0x73b)](),
                _0x5995d6['nk']['fadeOut'](0x32),
                _0x5995d6['ok']['stop'](),
                _0x5995d6['ok'][_0x4396fa(0x150)](0x32));
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['J'] = function() {
                return this['cb'] = _0x19ba24['J'],
                this;
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['Fa'] = function() {
                var _0x400246 = _0x115e89;
                return console[_0x400246(0x10f)]('re'),
                (_0x4f9ccf['hide'](),
                setTimeout(function() {
                    var _0x394dd2 = _0x400246;
                    console[_0x394dd2(0x10f)]('fi_bg'),
                    _0x4f9ccf[_0x394dd2(0x442)](0x64);
                }, 0x64),
                _0x1c3361['hide'](),
                setTimeout(function() {
                    console['log']('fi_aw'),
                    _0x1c3361['fadeIn'](0x64);
                }, 0x64),
                this['cb'] = _0x19ba24['Fa'],
                this);
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['ji'] = function() {
                this['rk'] = ![],
                this['wb']['Ra'](),
                this['cb'] == _0x19ba24['Fa'] && _0x242785()['r']['Gd']();
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['Ra'] = function() {
                this['wb']['Ra']();
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['Pa'] = function(_0x5468b2, _0x3cf10b) {
                this['wb']['Pa'](_0x5468b2, _0x3cf10b);
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['Da'] = function(_0x335d3d, _0x42c718, _0x319a85) {
                var _0x24bb8d = _0x115e89
                  , _0x530a1c = void 0x0
                  , _0x28f21f = void 0x0
                  , _0x2a7e94 = void 0x0;
                if (_0x42c718 >= 0x1 && _0x42c718 <= 0xa ? (_0x530a1c = _0x817213(_0x24bb8d(0x4b1) + _0x42c718),
                _0x28f21f = _0x817213(_0x24bb8d(0x205)),
                _0x2a7e94 = _0x817213('index.game.social.shareResult.messGood')[_0x24bb8d(0x68e)](_0x24bb8d(0x21b), _0x319a85)[_0x24bb8d(0x68e)]('{1}', _0x335d3d)[_0x24bb8d(0x68e)](_0x24bb8d(0x45b), _0x530a1c)) : (_0x530a1c = '',
                _0x28f21f = _0x817213(_0x24bb8d(0x4eb)),
                _0x2a7e94 = _0x817213(_0x24bb8d(0x2a0))['replace'](_0x24bb8d(0x21b), _0x319a85)[_0x24bb8d(0x68e)](_0x24bb8d(0x1b5), _0x335d3d)),
                _0x53f2a7[_0x24bb8d(0xf8)](_0x817213(_0x24bb8d(0x611))),
                _0xf93059['html'](_0x335d3d),
                _0x80582d['html'](_0x530a1c),
                _0x54591d[_0x24bb8d(0xf8)](_0x28f21f),
                _0x4c8c71['qk']) {
                    var _0xd6d3f7 = _0x817213(_0x24bb8d(0x4b6));
                    _0x817213(_0x24bb8d(0x436)),
                    _0xa6875f[_0x24bb8d(0x724)]()[_0x24bb8d(0x194)](_0x3bda0e(_0xd6d3f7, _0x24bb8d(0x366), 'wormate.io', _0x2a7e94, _0x2a7e94, _0x24bb8d(0x6f7)));
                }
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['T'] = function() {
                return this['sk'];
            }
            ,
            _0x21a006[_0x115e89(0x34d)]['U'] = function() {
                return this['rk'];
            }
            ;
            var _0x19ba24 = {
                'J': 0x0,
                'Fa': 0x1
            };
            return _0x21a006;
        }())
          , _0x322d30 = (function() {
            var _0x1b03ab = _0x53c3f2
              , _0x2e7bd9 = $(_0x1b03ab(0x67b))
              , _0x3d3ac4 = $('#loading-worm-b')
              , _0x4ab56f = $(_0x1b03ab(0x2f2))
              , _0x3d1454 = ['100%\x20100%', _0x1b03ab(0x2e5), '200%\x20100%', _0x1b03ab(0x424)]
              , _0x46ada7 = _0xaa2971(_0x5995d6, function() {
                var _0x1ac688 = _0x1b03ab;
                _0x5995d6[_0x1ac688(0x67d)](this, _0x4adc5e['pk']);
            });
            return _0x46ada7[_0x1b03ab(0x34d)]['a'] = function() {}
            ,
            _0x46ada7['prototype']['ii'] = function() {
                var _0x43010b = _0x1b03ab;
                _0x5995d6['fk'][_0x43010b(0x73b)](),
                _0x5995d6['fk']['fadeOut'](0x32),
                _0x5995d6['gk'][_0x43010b(0x73b)](),
                _0x5995d6['gk'][_0x43010b(0x150)](0x32),
                _0x5995d6['hk']['stop'](),
                _0x5995d6['hk']['fadeOut'](0x32),
                _0x5995d6['ik'][_0x43010b(0x73b)](),
                _0x5995d6['ik']['fadeOut'](0x32),
                _0x5995d6['jk']['stop'](),
                _0x5995d6['jk'][_0x43010b(0x150)](0x32),
                _0x5995d6['kk']['stop'](),
                _0x5995d6['kk'][_0x43010b(0x442)](0x1f4),
                _0x5995d6['lk']['stop'](),
                _0x5995d6['lk'][_0x43010b(0x442)](0x1),
                _0x5995d6['di']['stop'](),
                _0x5995d6['di'][_0x43010b(0x442)](0x1f4),
                _0x47e7b1['Le'](!0x0),
                _0x5995d6['nk']['stop'](),
                _0x5995d6['nk'][_0x43010b(0x150)](0x32),
                _0x5995d6['ok']['stop'](),
                _0x5995d6['ok']['fadeOut'](0x32);
            }
            ,
            _0x46ada7[_0x1b03ab(0x34d)]['ji'] = function() {
                this['tk']();
            }
            ,
            _0x46ada7['prototype']['tk'] = function() {
                var _0x4ab1d8 = _0x1b03ab;
                _0x2e7bd9['css']('background-position', _0x4ab1d8(0x2e5));
                for (var _0xb4042b = 0x0; _0xb4042b < _0x3d1454[_0x4ab1d8(0x484)]; _0xb4042b++) {
                    var _0x1f848a = Math[_0x4ab1d8(0x19d)](Math['random']() * _0x3d1454[_0x4ab1d8(0x484)])
                      , _0xe9a122 = _0x3d1454[_0xb4042b];
                    _0x3d1454[_0xb4042b] = _0x3d1454[_0x1f848a],
                    _0x3d1454[_0x1f848a] = _0xe9a122;
                }
                _0x2e7bd9['css'](_0x4ab1d8(0x109), _0x3d1454[0x0]),
                _0x3d3ac4[_0x4ab1d8(0x72a)]('background-position', _0x3d1454[0x1]),
                _0x4ab56f[_0x4ab1d8(0x72a)](_0x4ab1d8(0x109), _0x3d1454[0x2]);
            }
            ,
            _0x46ada7;
        }())
          , _0x16e6c1 = (function() {
            var _0x32a70b = _0x53c3f2
              , _0x41d045 = ($('#mm-event-text'),
            $(_0x32a70b(0x138)))
              , _0x5586e4 = $(_0x32a70b(0x6fb))
              , _0xba83b9 = $(_0x32a70b(0x3b7))
              , _0x2a346b = $(_0x32a70b(0x246))
              , _0x160ea8 = $('#mm-skin-over-button-list')
              , _0x2a682b = $('#mm-params-nickname')
              , _0x3494b3 = $('#mm-params-game-mode')
              , _0x3eceb8 = $('#mm-action-buttons')
              , _0x4605da = $('#mm-action-play')
              , _0x339950 = $('#mm-action-guest')
              , _0x220db5 = $(_0x32a70b(0x1bb))
              , _0x3b2334 = $(_0x32a70b(0x73d))
              , _0x2eca70 = $(_0x32a70b(0x2ba))
              , _0x22f24c = $(_0x32a70b(0x714))
              , _0x2beb88 = $('#mm-settings')
              , _0x3f0e39 = $(_0x32a70b(0x545))
              , _0x19431a = $(_0x32a70b(0x192))
              , _0x39cb69 = $('#mm-player-username')
              , _0x260032 = $(_0x32a70b(0x5bb))
              , _0x11d5e1 = $(_0x32a70b(0x279))
              , _0x5c139e = $(_0x32a70b(0x522))
              , _0x220175 = $(_0x32a70b(0x6fa))
              , _0x25825d = _0xaa2971(_0x5995d6, function() {
                var _0x45d955 = _0x32a70b;
                _0x5995d6[_0x45d955(0x67d)](this, _0x4adc5e['hi']);
                var _0x913353 = _0x242785();
                this['uk'] = new _0x362552(_0x41d045),
                _0x3494b3[_0x45d955(0x57f)](function() {
                    _0x913353['r']['Cd']();
                }),
                _0x41d045['click'](function() {
                    _0x913353['u']['P']() && (_0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s']['$h']));
                }),
                _0x5586e4[_0x45d955(0x57f)](function() {
                    _0x913353['r']['Cd'](),
                    _0x913353['t']['Ah']();
                }),
                _0xba83b9[_0x45d955(0x57f)](function() {
                    _0x913353['r']['Cd'](),
                    _0x913353['t']['zh']();
                }),
                _0x2a682b[_0x45d955(0x5a8)](function(_0x462d7a) {
                    var _0x1b3b95 = _0x45d955;
                    0xd == _0x462d7a[_0x1b3b95(0x179)] && _0x913353['na']();
                }),
                _0x4605da[_0x45d955(0x57f)](function() {
                    _0x913353['r']['Cd'](),
                    _0x913353['na']();
                }),
                _0x339950[_0x45d955(0x57f)](function() {
                    _0x913353['r']['Cd'](),
                    _0x913353['na']();
                }),
                _0x220db5[_0x45d955(0x57f)](function() {
                    _0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s']['Zh']);
                }),
                _0x2beb88['click'](function() {
                    _0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s']['xa']);
                }),
                _0x3b2334[_0x45d955(0x57f)](function() {
                    _0x913353['u']['P']() && (_0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s']['Yh']));
                }),
                _0x22f24c[_0x45d955(0x57f)](function() {
                    _0x913353['u']['P']() && (_0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s']['Xh']));
                }),
                _0x2eca70['click'](function() {
                    _0x913353['u']['P']() && (_0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s']['_h']));
                }),
                _0x3f0e39['click'](function() {
                    _0x913353['u']['P']() && (_0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s']['Wh']));
                }),
                this['vk'](),
                this['wk'](),
                $(_0x45d955(0x2e0))[_0x45d955(0x728)](_0x45d955(0x607)),
                $(_0x45d955(0x6af))[_0x45d955(0x57f)](function() {
                    let _0x3524b9 = zw_lastserver;
                    _0x3524b9 && (anApp['r']['Hd'](),
                    anApp['sa'](_0x3524b9));
                }),
                _0x2eca70[_0x45d955(0x728)](_0x45d955(0x573));
                let _0x129502 = $(_0x45d955(0x6cd));
                _0x129502[_0x45d955(0xf8)]('<div\x20id=\x22mm-advice-cont\x22><button\x20value=\x22FULL\x20SCREEN\x22\x20id=\x22fullscreen\x22\x20style=\x22display:\x20inline;\x20margin:\x2015px\x20auto;width:50%;height:\x2053px;\x22>FULL\x20SCREEN</button><button\x20value=\x22Replay\x22\x20id=\x22zwplayagain\x22\x20style=\x22display:\x20inline;\x20margin:\x2015px\x20auto;width:50%;height:\x2053px;\x22>REPLAY</button></div>'),
                $(_0x45d955(0x565))[_0x45d955(0x57f)](function() {
                    let _0xca0e79 = zw_lastserver;
                    _0xca0e79 && (anApp['r']['Hd'](),
                    anApp['sa'](_0xca0e79));
                }),
                $(_0x45d955(0x1af))[_0x45d955(0x57f)](function() {
                    var _0x2d5382 = _0x45d955;
                    if (zw_mobilefullscreenstatus) {
                        if (document[_0x2d5382(0x47b)])
                            document[_0x2d5382(0x47b)]();
                        else {
                            if (document[_0x2d5382(0x28d)])
                                document[_0x2d5382(0x28d)]();
                            else {
                                if (document[_0x2d5382(0x500)])
                                    document[_0x2d5382(0x500)]();
                                else
                                    document['body'][_0x2d5382(0x28d)] && document[_0x2d5382(0x622)]['webkitExitFullscreen']();
                            }
                        }
                        zw_mobilefullscreenstatus = ![];
                    } else {
                        if (document[_0x2d5382(0x447)][_0x2d5382(0x69c)])
                            document['documentElement'][_0x2d5382(0x69c)]();
                        else {
                            if (document['documentElement'][_0x2d5382(0x1d1)])
                                document[_0x2d5382(0x447)][_0x2d5382(0x1d1)]();
                            else {
                                if (document['documentElement'][_0x2d5382(0x462)])
                                    document[_0x2d5382(0x447)][_0x2d5382(0x462)]();
                                else
                                    document[_0x2d5382(0x622)][_0x2d5382(0x1d1)] && document[_0x2d5382(0x622)][_0x2d5382(0x1d1)]();
                            }
                        }
                        zw_mobilefullscreenstatus = !![];
                    }
                }),
                $(_0x45d955(0x59a))['click'](function() {
                    var _0x244704 = _0x45d955;
                    _0x913353['u']['P']() && (_0x913353['r']['Cd'](),
                    _0x913353['s']['I'](_0x913353['s'][_0x244704(0x2d8)]));
                });
                var _0x337bbf = _0x252acc(_0x2ff145['va']);
                _0x45d955(0x18d) != _0x337bbf && _0x45d955(0x70d) != _0x337bbf && (_0x337bbf = _0x45d955(0x18d)),
                _0x3494b3[_0x45d955(0x54c)](_0x337bbf),
                console[_0x45d955(0x10f)](_0x45d955(0x323) + _0x337bbf);
            });
            return _0x25825d[_0x32a70b(0x34d)]['a'] = function() {
                var _0x20cf4c = _0x242785()
                  , _0x2a9539 = this;
                _0x20cf4c['u']['V'](function() {
                    _0x20cf4c['s']['F']['xk']();
                }),
                _0x20cf4c['u']['Pi'](function() {
                    _0x20cf4c['u']['P']() ? (_0x20cf4c['t']['Bh'](_0x20cf4c['u']['Di'](), _0x7e1770['ia']),
                    _0x20cf4c['t']['Bh'](_0x20cf4c['u']['Ei'](), _0x7e1770['ja']),
                    _0x20cf4c['t']['Bh'](_0x20cf4c['u']['Fi'](), _0x7e1770['ka']),
                    _0x20cf4c['t']['Bh'](_0x20cf4c['u']['Gi'](), _0x7e1770['la']),
                    _0x20cf4c['t']['Bh'](_0x20cf4c['u']['Hi'](), _0x7e1770['ma'])) : (_0x20cf4c['t']['Bh'](_0x20cf4c['Ga'](), _0x7e1770['ia']),
                    _0x20cf4c['t']['Bh'](0x0, _0x7e1770['ja']),
                    _0x20cf4c['t']['Bh'](0x0, _0x7e1770['ka']),
                    _0x20cf4c['t']['Bh'](0x0, _0x7e1770['la']),
                    _0x20cf4c['t']['Bh'](0x0, _0x7e1770['ma']));
                }),
                _0x20cf4c['u']['Pi'](function() {
                    var _0x5c084f = _0x32c7;
                    _0x4605da[_0x5c084f(0x710)](_0x20cf4c['u']['P']()),
                    _0x220db5[_0x5c084f(0x710)](!_0x20cf4c['u']['P']()),
                    _0x339950[_0x5c084f(0x710)](!_0x20cf4c['u']['P']()),
                    _0x22f24c[_0x5c084f(0x710)](_0x20cf4c['u']['P']()),
                    _0x2eca70[_0x5c084f(0x710)](_0x20cf4c['u']['P']()),
                    _0x3f0e39['toggle'](_0x20cf4c['u']['P']()),
                    _0x20cf4c['u']['P']() ? (_0x2a346b[_0x5c084f(0x3a0)](),
                    _0x39cb69[_0x5c084f(0xf8)](_0x20cf4c['u']['wi']()),
                    _0x19431a['attr'](_0x5c084f(0x208), _0x20cf4c['u']['xi']()),
                    _0x260032['html'](_0x20cf4c['u']['zi']()),
                    _0x11d5e1[_0x5c084f(0x5ea)](0x64 * _0x20cf4c['u']['Bi']() / _0x20cf4c['u']['Ci']() + '%'),
                    _0x5c139e['html'](_0x20cf4c['u']['Bi']() + _0x5c084f(0x3f4) + _0x20cf4c['u']['Ci']()),
                    _0x220175[_0x5c084f(0xf8)](_0x20cf4c['u']['Ai']()),
                    _0x2a682b['val'](_0x20cf4c['u']['ga']())) : (_0x2a346b['toggle'](_0x4c8c71['qk'] && !_0x20cf4c['Ha']()),
                    _0x39cb69[_0x5c084f(0xf8)](_0x39cb69[_0x5c084f(0x5fc)](_0x5c084f(0x11f))),
                    _0x19431a['attr']('src', _0x5144a4),
                    _0x260032[_0x5c084f(0xf8)]('10'),
                    _0x11d5e1[_0x5c084f(0x5ea)]('0'),
                    _0x5c139e['html'](''),
                    _0x220175[_0x5c084f(0xf8)](0x1),
                    _0x2a682b[_0x5c084f(0x54c)](_0x252acc(_0x2ff145['Aa'])));
                }),
                _0x20cf4c['t']['xh'](function() {
                    _0x2a9539['uk']['ak'](_0x20cf4c['t']['ha'](_0x7e1770['ia']), !0x1, !0x1),
                    _0x2a9539['uk']['bk'](_0x20cf4c['t']['ha'](_0x7e1770['ja']), !0x1, !0x1),
                    _0x2a9539['uk']['ck'](_0x20cf4c['t']['ha'](_0x7e1770['ka']), !0x1, !0x1),
                    _0x2a9539['uk']['dk'](_0x20cf4c['t']['ha'](_0x7e1770['la']), !0x1, !0x1),
                    _0x2a9539['uk']['ek'](_0x20cf4c['t']['ha'](_0x7e1770['ma']), !0x1, !0x1);
                });
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['ii'] = function() {
                var _0x5dfcb7 = _0x32a70b;
                _0x5995d6['fk'][_0x5dfcb7(0x73b)](),
                _0x5995d6['fk']['fadeOut'](0x32),
                _0x5995d6['gk'][_0x5dfcb7(0x73b)](),
                _0x5995d6['gk'][_0x5dfcb7(0x150)](0x32),
                _0x5995d6['hk'][_0x5dfcb7(0x73b)](),
                _0x5995d6['hk'][_0x5dfcb7(0x442)](0x1f4),
                _0x5995d6['ik'][_0x5dfcb7(0x73b)](),
                _0x5995d6['ik'][_0x5dfcb7(0x150)](0x32),
                _0x5995d6['jk'][_0x5dfcb7(0x73b)](),
                _0x5995d6['jk'][_0x5dfcb7(0x150)](0x32),
                _0x5995d6['kk'][_0x5dfcb7(0x73b)](),
                _0x5995d6['kk']['fadeOut'](0x32),
                _0x5995d6['lk']['stop'](),
                _0x5995d6['lk'][_0x5dfcb7(0x442)](0x1),
                _0x5995d6['di'][_0x5dfcb7(0x73b)](),
                _0x5995d6['di'][_0x5dfcb7(0x442)](0x1f4),
                _0x47e7b1['Le'](!0x0),
                _0x5995d6['nk']['stop'](),
                _0x5995d6['nk'][_0x5dfcb7(0x442)](0x1f4),
                _0x5995d6['ok'][_0x5dfcb7(0x73b)](),
                _0x5995d6['ok']['fadeIn'](0x1f4);
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['ji'] = function() {
                _0x242785()['r']['Dd'](),
                this['uk']['Le'](!0x0);
            }
            ,
            _0x25825d['prototype']['ei'] = function() {
                this['uk']['Le'](!0x1);
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['Ra'] = function() {
                this['uk']['Ra']();
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['Pa'] = function(_0x24f078, _0x4b5fc2) {
                this['uk']['Pa']();
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['ga'] = function() {
                var _0x59597e = _0x32a70b;
                return _0x2a682b[_0x59597e(0x54c)]();
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['D'] = function() {
                var _0x44ec2c = _0x32a70b;
                return _0x3494b3[_0x44ec2c(0x54c)]();
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['xk'] = function() {
                var _0x59d697 = _0x32a70b;
                _0x3eceb8[_0x59d697(0x65f)]();
            }
            ,
            _0x25825d[_0x32a70b(0x34d)]['vk'] = function() {
                var _0x356d2a = _0x32a70b
                  , _0xa2014 = $(_0x356d2a(0x6cd))[_0x356d2a(0x47c)]()
                  , _0x49d503 = 0x0;
                setInterval(function() {
                    var _0x5205ee = _0x356d2a;
                    _0xa2014['eq'](_0x49d503)[_0x5205ee(0x150)](0x1f4, function() {
                        var _0x4a34a3 = _0x5205ee;
                        ++_0x49d503 >= _0xa2014[_0x4a34a3(0x484)] && (_0x49d503 = 0x0),
                        _0xa2014['eq'](_0x49d503)[_0x4a34a3(0x442)](0x1f4)['css'](_0x4a34a3(0x665), _0x4a34a3(0x543));
                    });
                }, 0xbb8);
            }
            ,
            _0x25825d['prototype']['wk'] = function() {
                var _0x114de4 = _0x32a70b;
                function _0x45e2b1() {
                    _0x3f0089['Ka'](!0x0),
                    setTimeout(function() {
                        var _0x257bc9 = _0x32c7;
                        _0x2a346b[_0x257bc9(0x3a0)]();
                    }, 0xbb8);
                }
                var _0x3f0089 = _0x242785();
                if (_0x4c8c71['qk'] && !_0x3f0089['Ha']()) {
                    _0x2a346b[_0x114de4(0x65f)]();
                    var _0x2b90e7 = _0x817213(_0x114de4(0x5c6))
                      , _0xd63ffd = encodeURIComponent(_0x817213(_0x114de4(0x6d2)) + _0x114de4(0x513))
                      , _0x2c6672 = encodeURIComponent(_0x817213(_0x114de4(0x6d2)));
                    _0x160ea8[_0x114de4(0x194)]($(_0x114de4(0x3e6) + _0xd63ffd + _0x114de4(0x6f4) + _0x2b90e7 + '</span></a>')[_0x114de4(0x57f)](_0x45e2b1)),
                    _0x160ea8['append']($(_0x114de4(0x572) + _0x2c6672 + _0x114de4(0x354) + _0x2b90e7 + _0x114de4(0x370))[_0x114de4(0x57f)](_0x45e2b1));
                }
            }
            ,
            _0x25825d;
        }())
          , _0x1da9ef = (function() {
            var _0x2171c2 = _0x53c3f2
              , _0x5d0b83 = _0xaa2971(_0x5995d6, function() {
                _0x5995d6['call'](this, _0x4adc5e['pk']);
            });
            return _0x5d0b83[_0x2171c2(0x34d)]['a'] = function() {}
            ,
            _0x5d0b83[_0x2171c2(0x34d)]['ii'] = function() {
                var _0x24fed6 = _0x2171c2;
                _0x5995d6['fk'][_0x24fed6(0x73b)](),
                _0x5995d6['fk']['fadeOut'](0x32),
                _0x5995d6['gk'][_0x24fed6(0x73b)](),
                _0x5995d6['gk'][_0x24fed6(0x150)](0x32),
                _0x5995d6['hk']['stop'](),
                _0x5995d6['hk'][_0x24fed6(0x150)](0x32),
                _0x5995d6['ik'][_0x24fed6(0x73b)](),
                _0x5995d6['ik']['fadeOut'](0x32),
                _0x5995d6['jk'][_0x24fed6(0x73b)](),
                _0x5995d6['jk'][_0x24fed6(0x150)](0x32),
                _0x5995d6['kk'][_0x24fed6(0x73b)](),
                _0x5995d6['kk'][_0x24fed6(0x150)](0x32),
                _0x5995d6['lk'][_0x24fed6(0x73b)](),
                _0x5995d6['lk']['fadeOut'](0x1),
                _0x5995d6['di'][_0x24fed6(0x73b)](),
                _0x5995d6['di'][_0x24fed6(0x150)](0x32),
                _0x47e7b1['Le'](!0x1),
                _0x5995d6['nk'][_0x24fed6(0x73b)](),
                _0x5995d6['nk'][_0x24fed6(0x150)](0x32),
                _0x5995d6['ok'][_0x24fed6(0x73b)](),
                _0x5995d6['ok']['fadeOut'](0x32);
            }
            ,
            _0x5d0b83;
        }())
          , _0x34fbfd = (function() {
            var _0x30b617 = _0x53c3f2
              , _0x5e0d67 = $(_0x30b617(0x154))
              , _0x399140 = _0xaa2971(_0x5995d6, function() {
                var _0x355747 = _0x30b617;
                _0x5995d6[_0x355747(0x67d)](this, _0x4adc5e['pk']),
                this['yk'] = [],
                this['zk'] = null;
            });
            return _0x399140['prototype']['a'] = function() {}
            ,
            _0x399140[_0x30b617(0x34d)]['ii'] = function() {
                var _0x5e9083 = _0x30b617;
                _0x5995d6['fk'][_0x5e9083(0x73b)](),
                _0x5995d6['fk']['fadeOut'](0x32),
                _0x5995d6['gk'][_0x5e9083(0x73b)](),
                _0x5995d6['gk'][_0x5e9083(0x150)](0x32),
                _0x5995d6['hk'][_0x5e9083(0x73b)](),
                _0x5995d6['hk']['fadeOut'](0x32),
                _0x5995d6['ik'][_0x5e9083(0x73b)](),
                _0x5995d6['ik'][_0x5e9083(0x150)](0x32),
                _0x5995d6['jk']['stop'](),
                _0x5995d6['jk'][_0x5e9083(0x442)](0x1f4),
                _0x5995d6['kk'][_0x5e9083(0x73b)](),
                _0x5995d6['kk'][_0x5e9083(0x150)](0x32),
                _0x5995d6['lk']['stop'](),
                _0x5995d6['lk'][_0x5e9083(0x442)](0x1),
                _0x5995d6['di'][_0x5e9083(0x73b)](),
                _0x5995d6['di']['fadeIn'](0x1f4),
                _0x47e7b1['Le'](!0x0),
                _0x5995d6['nk'][_0x5e9083(0x73b)](),
                _0x5995d6['nk'][_0x5e9083(0x150)](0x32),
                _0x5995d6['ok'][_0x5e9083(0x73b)](),
                _0x5995d6['ok'][_0x5e9083(0x442)](0x1f4);
            }
            ,
            _0x399140[_0x30b617(0x34d)]['ji'] = function() {
                this['Ak']();
            }
            ,
            _0x399140['prototype']['mi'] = function() {
                var _0x1602ea = _0x30b617;
                return null != this['zk'] || this['yk'][_0x1602ea(0x484)] > 0x0;
            }
            ,
            _0x399140[_0x30b617(0x34d)]['_'] = function(_0x10cc9e) {
                var _0x579f91 = _0x30b617;
                this['yk'][_0x579f91(0x4a5)](_0x10cc9e),
                setTimeout(function() {
                    _0x242785()['s']['ki']();
                }, 0x0);
            }
            ,
            _0x399140[_0x30b617(0x34d)]['Ti'] = function(_0x1edd26) {
                this['yk']['push'](_0x1edd26),
                setTimeout(function() {
                    _0x242785()['s']['ki']();
                }, 0x0);
            }
            ,
            _0x399140['prototype']['Ak'] = function() {
                var _0x5592a0 = _0x30b617
                  , _0xe78e1e = this;
                if (null == this['zk']) {
                    if (0x0 == this['yk'][_0x5592a0(0x484)])
                        return void _0x242785()['s']['gi']();
                    var _0x1b23b1 = this['yk'][_0x5592a0(0x479)]();
                    this['zk'] = _0x1b23b1;
                    var _0x25a1e2 = _0x1b23b1['Bk']();
                    _0x25a1e2[_0x5592a0(0x3a0)](),
                    _0x25a1e2[_0x5592a0(0x442)](0x12c),
                    _0x5e0d67[_0x5592a0(0x194)](_0x25a1e2),
                    _0x1b23b1['Ck'] = function() {
                        var _0x15ee4c = _0x5592a0;
                        _0x25a1e2[_0x15ee4c(0x150)](0x12c),
                        setTimeout(function() {
                            var _0x1ffec0 = _0x15ee4c;
                            _0x25a1e2[_0x1ffec0(0x3ad)]();
                        }, 0x12c),
                        _0xe78e1e['zk'] == _0x1b23b1 && (_0xe78e1e['zk'] = null),
                        _0xe78e1e['Ak']();
                    }
                    ,
                    _0x1b23b1['ji']();
                }
            }
            ,
            _0x399140;
        }())
          , _0x4adc5e = {
            'pk': 0x0,
            'hi': 0x1
        }
          , _0x5ce8a9 = (function() {
            var _0x1ac6bd = _0x53c3f2
              , _0x42d406 = $(_0x1ac6bd(0x74d))
              , _0x1e6366 = $(_0x1ac6bd(0x62f))
              , _0x29e6de = $(_0x1ac6bd(0xce));
            $(_0x1ac6bd(0xe2))[_0x1ac6bd(0x57f)](function() {
                var _0x1eecc2 = _0x242785();
                _0x1eecc2['r']['Cd'](),
                _0x1eecc2['s']['gi']();
            }),
            _0x1e6366[_0x1ac6bd(0x57f)](function() {
                var _0x2c0a80 = _0x242785();
                _0x2c0a80['u']['P']() && (_0x2c0a80['r']['Cd'](),
                _0x2c0a80['s']['I'](_0x2c0a80['s']['Wh']));
            });
            var _0x33ed8b = _0xaa2971(_0x5995d6, function(_0x3bdc66, _0x5eb997) {
                _0x5995d6['call'](this, _0x4adc5e['hi']),
                this['ad'] = _0x3bdc66,
                this['Dk'] = _0x5eb997;
            })
              , _0x3069b1 = _0x1ac6bd(0x5e1) + lenguaje[idiomaActual][_0x1ac6bd(0x247)] + _0x1ac6bd(0xee) + lenguaje[idiomaActual][_0x1ac6bd(0x165)] + _0x1ac6bd(0x518) + lenguaje[idiomaActual][_0x1ac6bd(0x20a)] + _0x1ac6bd(0x718) + lenguaje[idiomaActual][_0x1ac6bd(0x133)] + _0x1ac6bd(0x213);
            $(_0x1ac6bd(0x66d))[_0x1ac6bd(0x728)](_0x3069b1),
            $('.tab.material-button')['on'](_0x1ac6bd(0x57f), function() {
                var _0x49c560 = _0x1ac6bd
                  , _0x22e661 = $(this)[_0x49c560(0x160)](_0x49c560(0x610));
                if ($(this)[_0x49c560(0x27c)]('active'))
                    return;
                $(_0x49c560(0x430))[_0x49c560(0x726)]('active'),
                $(this)['addClass'](_0x49c560(0x2c5)),
                $(_0x49c560(0x3de) + _0x22e661 + '\x27]')[_0x49c560(0x440)](_0x49c560(0x2c5));
            }),
            document[_0x1ac6bd(0xec)](_0x1ac6bd(0x5eb))[_0x1ac6bd(0x38f)](_0x1ac6bd(0x57f), async function() {
                var _0x3d1512 = _0x1ac6bd;
                localStorage[_0x3d1512(0x210)](),
                sessionStorage[_0x3d1512(0x210)]();
                if (window[_0x3d1512(0x306)]) {
                    const _0x1170d7 = await indexedDB[_0x3d1512(0x1b7)]();
                    _0x1170d7['forEach'](_0x5a190f => indexedDB[_0x3d1512(0x41a)](_0x5a190f[_0x3d1512(0x283)]));
                }
                window[_0x3d1512(0x171)] && console[_0x3d1512(0x3e9)](_0x3d1512(0xfa));
                document[_0x3d1512(0x21a)][_0x3d1512(0x6d1)](';')['forEach'](function(_0x10e972) {
                    var _0x1d5fb8 = _0x3d1512;
                    document['cookie'] = _0x10e972[_0x1d5fb8(0x68e)](/^ +/, '')[_0x1d5fb8(0x68e)](/=.*/, _0x1d5fb8(0x59d) + new Date()[_0x1d5fb8(0x2b0)]() + _0x1d5fb8(0x681));
                });
                _0x3d1512(0x4f9)in window && caches['keys']()[_0x3d1512(0x5b4)](function(_0x4ffad4) {
                    var _0xd19470 = _0x3d1512;
                    for (let _0x37c109 of _0x4ffad4)
                        caches[_0xd19470(0x1e9)](_0x37c109);
                });
                if ('serviceWorker'in navigator) {
                    const _0x1d362b = await navigator[_0x3d1512(0x15f)][_0x3d1512(0x318)]();
                    for (let _0x4bc959 of _0x1d362b) {
                        await _0x4bc959[_0x3d1512(0x30d)]();
                    }
                }
                localStorage['removeItem']('scriptSeleccionado'),
                location[_0x3d1512(0x4a8)]();
            }),
            soundEnabled = !![],
            $('#toggle-sound')[_0x1ac6bd(0x57f)](function() {
                var _0x43d81f = _0x1ac6bd;
                soundEnabled = !soundEnabled,
                $(this)[_0x43d81f(0x2db)](soundEnabled ? 'Disable\x20Sound' : _0x43d81f(0x315));
            }),
            $(_0x1ac6bd(0x5c4))[_0x1ac6bd(0x57f)](function() {
                var _0x1a82ef = _0x1ac6bd;
                navigator[_0x1a82ef(0x410)]['writeText'](zw_userId),
                alert(_0x1a82ef(0x443) + zw_userId);
            }),
            window[_0x1ac6bd(0x4b4)] = function(_0xb32365) {
                var _0x1f4ab6 = _0x1ac6bd;
                let _0x3d9f71 = localStorage[_0x1f4ab6(0x11c)](_0x1f4ab6(0x2eb));
                currentIndex = _0x3d9f71 !== null ? parseInt(_0x3d9f71) : 0x0,
                currentIndex = (currentIndex + _0xb32365 + backgrounds['length']) % backgrounds[_0x1f4ab6(0x484)],
                updateBackground(currentIndex);
            }
            ,
            window[_0x1ac6bd(0x174)] = function(_0x4ed66c) {
                var _0xdfbc39 = _0x1ac6bd;
                currentFontIndex = (currentFontIndex + _0x4ed66c + fonts['length']) % fonts[_0xdfbc39(0x484)],
                updateFont();
            }
            ,
            updateFont();
            const _0x50c922 = [{
                'id': _0x1ac6bd(0x1c2),
                'label': _0x1ac6bd(0x4fa),
                'category': 'game',
                'tooltip': ''
            }, {
                'id': _0x1ac6bd(0x1aa),
                'label': _0x1ac6bd(0x2bc),
                'category': 'game',
                'tooltip': ''
            }, {
                'id': 'chngBotSkins',
                'label': 'CHANGE\x20BOT\x20&\x20PEOPLE\x20TO\x20BASIC\x20SKINS',
                'category': _0x1ac6bd(0x2d6),
                'tooltip': ''
            }, {
                'id': _0x1ac6bd(0x130),
                'label': _0x1ac6bd(0x533),
                'category': _0x1ac6bd(0x2d6),
                'tooltip': ''
            }, {
                'id': _0x1ac6bd(0x749),
                'label': 'SHOW\x20TOP\x20HS',
                'category': _0x1ac6bd(0x2d6),
                'tooltip': _0x1ac6bd(0x128)
            }, {
                'id': _0x1ac6bd(0x30f),
                'label': _0x1ac6bd(0x4ec),
                'category': _0x1ac6bd(0x2d6),
                'tooltip': _0x1ac6bd(0x290)
            }, {
                'id': _0x1ac6bd(0x24e),
                'label': 'SHOW\x20TEAM\x20LIST',
                'category': _0x1ac6bd(0x4c5),
                'tooltip': ''
            }]
              , _0x356a3c = [{
                'name': _0x1ac6bd(0x5ad),
                'id': _0x1ac6bd(0x62c),
                'min': 0.1,
                'max': 0xf,
                'step': 0.1,
                'category': _0x1ac6bd(0x2d6),
                'tooltip': ''
            }]
              , _0x3ff542 = {
                'game': document[_0x1ac6bd(0x67f)](_0x1ac6bd(0x5d8)),
                'teams': document[_0x1ac6bd(0x67f)](_0x1ac6bd(0x16e)),
                'theme': document[_0x1ac6bd(0x67f)](_0x1ac6bd(0x1a2)),
                'controls': document['querySelector'](_0x1ac6bd(0x53f))
            };
            if (isPremiumUser) {
                _0x50c922[_0x1ac6bd(0x5d6)]({
                    'id': 'Incognito',
                    'label': _0x1ac6bd(0x2b8),
                    'category': 'game',
                    'tooltip': _0x1ac6bd(0x5dd)
                }, {
                    'id': _0x1ac6bd(0xfe),
                    'label': _0x1ac6bd(0x701),
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': _0x1ac6bd(0x5dd)
                }, {
                    'id': _0x1ac6bd(0x169),
                    'label': _0x1ac6bd(0x5f8),
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': 'Premium\x20Feature'
                }, {
                    'id': _0x1ac6bd(0x367),
                    'label': 'SECTORS',
                    'category': 'game',
                    'tooltip': 'Premium\x20Feature'
                }, {
                    'id': _0x1ac6bd(0x4c1),
                    'label': _0x1ac6bd(0x5c0),
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': 'Premium\x20Feature'
                }, {
                    'id': _0x1ac6bd(0x687),
                    'label': _0x1ac6bd(0x552),
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': 'Premium\x20Feature'
                }, {
                    'id': _0x1ac6bd(0x6b6),
                    'label': _0x1ac6bd(0x5fb),
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': _0x1ac6bd(0x5dd)
                }, {
                    'id': _0x1ac6bd(0x70b),
                    'label': 'SHOW\x20YOUR\x20NAME\x20FOR\x20TEAM\x20LIST',
                    'category': _0x1ac6bd(0x4c5),
                    'tooltip': _0x1ac6bd(0x5dd)
                });
                const _0xc065d3 = _0x1ac6bd(0x100);
                _0x3ff542[_0x1ac6bd(0x4c5)]['insertAdjacentHTML']('beforeend', _0xc065d3),
                _0x356a3c[_0x1ac6bd(0x5d6)]({
                    'name': 'BOOSTER\x20SIZE',
                    'id': _0x1ac6bd(0xda),
                    'min': 0x1,
                    'max': 0x6,
                    'step': 0x1,
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': _0x1ac6bd(0x5dd)
                }, {
                    'name': 'AURA\x20THE\x20BOOSTER',
                    'id': _0x1ac6bd(0x53b),
                    'min': 1.2,
                    'max': 3.2,
                    'step': 0.2,
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': _0x1ac6bd(0x5dd)
                }, {
                    'name': _0x1ac6bd(0x378),
                    'id': _0x1ac6bd(0x609),
                    'min': 0.5,
                    'max': 0x3,
                    'step': 0.5,
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': _0x1ac6bd(0x5dd)
                }, {
                    'name': _0x1ac6bd(0x39f),
                    'id': 'ComidaSize',
                    'min': 0.5,
                    'max': 0x3,
                    'step': 0.5,
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': 'Premium\x20Feature'
                }, {
                    'name': 'MOUSE\x20DELAY',
                    'id': 'mouseDelay',
                    'min': 0xa,
                    'max': 0x14,
                    'step': 0x1,
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': _0x1ac6bd(0x5dd)
                }, {
                    'name': 'SMOOTH\x20CAMERA',
                    'id': _0x1ac6bd(0x182),
                    'min': 0.1,
                    'max': 0.9,
                    'step': 0.1,
                    'category': _0x1ac6bd(0x2d6),
                    'tooltip': _0x1ac6bd(0x5dd)
                });
            }
            _0x356a3c[_0x1ac6bd(0xca)](_0x25bb84 => {
                var _0x39c0ac = _0x1ac6bd;
                const _0x31eb68 = parseFloat(theoKzObjects[_0x25bb84['id']])
                  , _0x43cade = document['createElement'](_0x39c0ac(0x43f));
                _0x43cade[_0x39c0ac(0x6a9)] = 'option\x20range',
                _0x43cade[_0x39c0ac(0x372)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22\x20style=\x22' + (_0x25bb84['tooltip'][_0x39c0ac(0x704)](_0x39c0ac(0x5e7)) ? _0x39c0ac(0x3c4) : '') + '\x22>' + _0x25bb84[_0x39c0ac(0x283)] + _0x39c0ac(0x501) + _0x31eb68 + _0x39c0ac(0x166) + (_0x31eb68 - _0x25bb84[_0x39c0ac(0x4ee)]) / (_0x25bb84[_0x39c0ac(0x693)] - _0x25bb84[_0x39c0ac(0x4ee)]) * 0x64 + _0x39c0ac(0x3cd) + _0x25bb84['id'] + _0x39c0ac(0x1dc) + _0x25bb84[_0x39c0ac(0x4ee)] + _0x39c0ac(0x3c0) + _0x25bb84['max'] + _0x39c0ac(0x4de) + _0x25bb84[_0x39c0ac(0x35e)] + _0x39c0ac(0x6ac) + _0x31eb68 + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
                const _0xc1934a = _0x43cade[_0x39c0ac(0x67f)](_0x39c0ac(0x504))
                  , _0x580709 = _0x43cade[_0x39c0ac(0x67f)](_0x39c0ac(0x465))
                  , _0x5975d5 = _0x43cade[_0x39c0ac(0x67f)]('.fill');
                _0xc1934a[_0x39c0ac(0x38f)](_0x39c0ac(0x504), () => {
                    var _0xb45906 = _0x39c0ac;
                    _0x580709['textContent'] = _0xc1934a[_0xb45906(0x139)],
                    _0x5975d5['style'][_0xb45906(0x5ea)] = (_0xc1934a[_0xb45906(0x139)] - _0x25bb84['min']) / (_0x25bb84[_0xb45906(0x693)] - _0x25bb84[_0xb45906(0x4ee)]) * 0x64 + '%',
                    theoKzObjects[_0x25bb84['id']] = _0xc1934a[_0xb45906(0x139)],
                    localStorage[_0xb45906(0x258)](_0x25bb84['id'], _0xc1934a[_0xb45906(0x139)]),
                    _0x25bb84['id'] === 'mouseDelay' && anApp['o'][_0xb45906(0x65d)](parseInt(_0xc1934a[_0xb45906(0x139)]));
                }
                ),
                _0x3ff542[_0x25bb84['category']][_0x39c0ac(0x48d)](_0x43cade);
            }
            ),
            _0x50c922[_0x1ac6bd(0xca)](_0x30beae => {
                var _0x2a5cb3 = _0x1ac6bd;
                const _0x1d8486 = localStorage[_0x2a5cb3(0x11c)](_0x30beae['id']) === 'true'
                  , _0x2632e4 = _0x2a5cb3(0x3a8) + (_0x1d8486 ? 'on' : '') + _0x2a5cb3(0x277) + _0x30beae['id'] + _0x2a5cb3(0x6cf) + (_0x30beae[_0x2a5cb3(0x4c0)][_0x2a5cb3(0x704)]('Premium') ? _0x2a5cb3(0x3c4) : '') + '\x22>' + _0x30beae[_0x2a5cb3(0x5af)] + _0x2a5cb3(0x6e0) + (_0x30beae[_0x2a5cb3(0x4c0)] ? _0x2a5cb3(0x63c) + _0x30beae[_0x2a5cb3(0x4c0)] + _0x2a5cb3(0x61b) : '') + _0x2a5cb3(0x6c9);
                _0x3ff542[_0x30beae[_0x2a5cb3(0x610)]][_0x2a5cb3(0x564)](_0x2a5cb3(0x6bb), _0x2632e4);
            }
            ),
            document[_0x1ac6bd(0x288)]('.box')[_0x1ac6bd(0xca)](_0x503810 => {
                var _0x386e11 = _0x1ac6bd;
                _0x503810['addEventListener'](_0x386e11(0x57f), function(_0x5d18d8) {
                    var _0x43b459 = _0x386e11;
                    _0x5d18d8[_0x43b459(0x10d)]();
                    const _0x35f7d9 = this['parentElement']
                      , _0x456e2f = _0x35f7d9['getAttribute']('data-option')
                      , _0x17bfee = !_0x35f7d9[_0x43b459(0x2ea)]['contains']('on');
                    _0x35f7d9[_0x43b459(0x2ea)]['toggle']('on', _0x17bfee),
                    theoKzObjects[_0x456e2f] = _0x17bfee,
                    localStorage[_0x43b459(0x258)](_0x456e2f, _0x17bfee);
                    const _0x2628c9 = _0x35f7d9[_0x43b459(0x67f)](_0x43b459(0x114));
                    if (_0x2628c9)
                        _0x2628c9[_0x43b459(0x4e4)]['display'] = _0x17bfee ? _0x43b459(0x3dd) : 'none';
                    console[_0x43b459(0x10f)](_0x456e2f + '\x20changed\x20to', _0x17bfee);
                });
            }
            );
            var _0x1cf53e = $('div[category=\x27theme\x27]');
            addMinicolor(_0x1cf53e[0x1], _0x1ac6bd(0x36a), _0x1ac6bd(0x475), _0x1ac6bd(0x276), theoObjects[_0x1ac6bd(0x276)]),
            $('#teamColor')['on'](_0x1ac6bd(0x504), function() {
                var _0x1f837c = _0x1ac6bd;
                let _0xa73b5f = $(this)[_0x1f837c(0x54c)]();
                $(_0x1f837c(0x5c8))[_0x1f837c(0x72a)]('background-color', _0xa73b5f),
                localStorage[_0x1f837c(0x258)](_0x1f837c(0x276), zwormData[_0x1f837c(0x276)]),
                zwormData[_0x1f837c(0x276)] = '0x' + _0xa73b5f[_0x1f837c(0x493)](0x1),
                console[_0x1f837c(0x10f)](zwormData[_0x1f837c(0x276)]);
            });
            let _0xd2842 = localStorage['getItem'](_0x1ac6bd(0x276));
            _0xd2842 && (zwormData[_0x1ac6bd(0x276)] = _0xd2842,
            $(_0x1ac6bd(0x5c8))[_0x1ac6bd(0x72a)]('background-color', '#' + _0xd2842[_0x1ac6bd(0x493)](0x2)),
            $(_0x1ac6bd(0x5de))[_0x1ac6bd(0x54c)]('#' + _0xd2842[_0x1ac6bd(0x493)](0x2)));
            var _0x5014fb = _0x1ac6bd(0x309) + '<div\x20class=\x22settings-icons\x22>' + _0x1ac6bd(0x4bd) + _0x1ac6bd(0x459) + '<span\x20id=\x22settings-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22settings-menu\x22>settings</span>' + '<span\x20id=\x22notifications-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22notifications-menu\x22>notifications</span>' + _0x1ac6bd(0x474) + _0x1ac6bd(0x746) + '<div\x20id=\x22user-menu\x22\x20class=\x22menu\x22>Opciones\x20de\x20usuario</div>' + _0x1ac6bd(0x5e3) + '<div\x20id=\x22settings-menu\x22\x20class=\x22menu\x22>Ajustes\x20generales</div>' + _0x1ac6bd(0x74a) + _0x1ac6bd(0x4df) + _0x1ac6bd(0x125) + '<div\x20class=\x22settings-line\x22>' + _0x1ac6bd(0x40d) + '<button\x20id=\x22idkopyala\x22>' + lenguaje[idiomaActual]['copiar'] + _0x1ac6bd(0x4f2) + _0x1ac6bd(0x746) + _0x1ac6bd(0x248) + _0x1ac6bd(0x2f3) + _0x1ac6bd(0x4d4) + _0x1ac6bd(0x3a5) + _0x1ac6bd(0x59c) + '</div>' + _0x1ac6bd(0x2f3) + _0x1ac6bd(0x73c) + _0x1ac6bd(0x212) + _0x1ac6bd(0x608) + _0x1ac6bd(0x746) + _0x1ac6bd(0x248) + _0x1ac6bd(0x2f3) + '<span\x20class=\x22settings-label\x22>You\x20Color\x20Map:\x20</span>' + '<input\x20type=\x22color\x22\x20id=\x22colorPicker\x22\x20/>' + _0x1ac6bd(0x746) + _0x1ac6bd(0x248) + _0x1ac6bd(0x2f3) + '<span\x20class=\x22settings-label\x22>Team\x20Code:\x20</span>' + _0x1ac6bd(0xd7) + '</div>' + _0x1ac6bd(0x248) + _0x1ac6bd(0x2f3) + _0x1ac6bd(0x5d2) + lenguaje[idiomaActual][_0x1ac6bd(0x6db)] + _0x1ac6bd(0x61b) + _0x1ac6bd(0x2a6) + _0x1ac6bd(0x4a6) + lenguaje[idiomaActual][_0x1ac6bd(0x485)] + '</option>' + _0x1ac6bd(0x18e) + lenguaje[idiomaActual][_0x1ac6bd(0x264)] + _0x1ac6bd(0x1a5) + '<option\x20value=\x222\x22>' + lenguaje[idiomaActual][_0x1ac6bd(0x3c7)] + '</option>' + _0x1ac6bd(0x1f4) + lenguaje[idiomaActual][_0x1ac6bd(0x1d4)] + _0x1ac6bd(0x1a5) + '<option\x20value=\x224\x22>' + lenguaje[idiomaActual][_0x1ac6bd(0x43c)] + _0x1ac6bd(0x1a5) + '<option\x20value=\x225\x22>' + _0x1ac6bd(0x23c) + _0x1ac6bd(0x1a5) + _0x1ac6bd(0x4b0) + _0x1ac6bd(0x580) + '</option>' + _0x1ac6bd(0x38c) + _0x1ac6bd(0x2b2) + '</option>' + '<option\x20value=\x228\x22>' + _0x1ac6bd(0x4e0) + '</option>' + _0x1ac6bd(0x4c3) + 'Sky\x20Orange' + _0x1ac6bd(0x1a5) + _0x1ac6bd(0x525) + 'Sky\x20Write' + _0x1ac6bd(0x1a5) + _0x1ac6bd(0x408) + _0x1ac6bd(0x627) + _0x1ac6bd(0x1a5) + _0x1ac6bd(0x417) + _0x1ac6bd(0x26d) + _0x1ac6bd(0x1a5) + _0x1ac6bd(0x11b) + 'Arena\x203' + _0x1ac6bd(0x1a5) + _0x1ac6bd(0x5d1) + _0x1ac6bd(0x36c) + _0x1ac6bd(0x1a5) + _0x1ac6bd(0x2fc) + _0x1ac6bd(0x746) + _0x1ac6bd(0x248) + _0x1ac6bd(0x2f3) + _0x1ac6bd(0x382) + _0x1ac6bd(0x1a1) + _0x1ac6bd(0x224) + _0x1ac6bd(0x55a) + '<option\x20value=\x223\x22>3</option>' + _0x1ac6bd(0x26a) + _0x1ac6bd(0x3ce) + _0x1ac6bd(0x41f) + '<option\x20value=\x227\x22>7</option>' + _0x1ac6bd(0xdf) + _0x1ac6bd(0x2ef) + _0x1ac6bd(0x29f) + '</select>' + '</div>' + _0x1ac6bd(0x248) + _0x1ac6bd(0x2f3) + _0x1ac6bd(0x52a) + lenguaje[idiomaActual][_0x1ac6bd(0x535)] + _0x1ac6bd(0x61b) + _0x1ac6bd(0x3f8) + _0x1ac6bd(0x746) + _0x1ac6bd(0x248) + _0x1ac6bd(0x1f5) + _0x1ac6bd(0x746) + _0x1ac6bd(0x746);
            let _0x5a4809 = localStorage[_0x1ac6bd(0x11c)](_0x1ac6bd(0x749)) === _0x1ac6bd(0x1ea) ? !![] : localStorage[_0x1ac6bd(0x11c)](_0x1ac6bd(0x749)) === _0x1ac6bd(0x42f) ? ![] : theoKzObjects[_0x1ac6bd(0x749)]
              , _0x2207e6 = localStorage[_0x1ac6bd(0x11c)](_0x1ac6bd(0x30f)) === 'true' ? !![] : localStorage[_0x1ac6bd(0x11c)]('killFeed') === _0x1ac6bd(0x42f) ? ![] : theoKzObjects['killFeed'];
            $(_0x1ac6bd(0x36f))[_0x1ac6bd(0x1ba)](_0x1ac6bd(0x3b8), _0x5a4809),
            $('#toggleKillFeed')[_0x1ac6bd(0x1ba)](_0x1ac6bd(0x3b8), _0x2207e6),
            $(_0x1ac6bd(0x206))[_0x1ac6bd(0x710)](_0x5a4809),
            $('#killFeed')[_0x1ac6bd(0x710)](_0x2207e6);
            (localStorage[_0x1ac6bd(0x11c)]('top8') === 'true' || localStorage[_0x1ac6bd(0x11c)](_0x1ac6bd(0x749)) === _0x1ac6bd(0x42f)) && (theoKzObjects[_0x1ac6bd(0x749)] = _0x5a4809,
            localStorage[_0x1ac6bd(0x258)](_0x1ac6bd(0x749), _0x5a4809));
            (localStorage['getItem'](_0x1ac6bd(0x30f)) === _0x1ac6bd(0x1ea) || localStorage[_0x1ac6bd(0x11c)](_0x1ac6bd(0x30f)) === _0x1ac6bd(0x42f)) && (theoKzObjects[_0x1ac6bd(0x30f)] = _0x2207e6,
            localStorage['setItem'](_0x1ac6bd(0x30f), _0x2207e6));
            $(_0x1ac6bd(0x36f))['on'](_0x1ac6bd(0x600), function() {
                var _0x130e6f = _0x1ac6bd;
                theoKzObjects[_0x130e6f(0x749)] = this[_0x130e6f(0x3b8)],
                $(_0x130e6f(0x206))[_0x130e6f(0x710)](this[_0x130e6f(0x3b8)]),
                localStorage[_0x130e6f(0x258)](_0x130e6f(0x749), theoKzObjects['top8']);
            }),
            $(_0x1ac6bd(0x6f5))['on'](_0x1ac6bd(0x600), function() {
                var _0x1e7fd8 = _0x1ac6bd;
                theoKzObjects[_0x1e7fd8(0x30f)] = this[_0x1e7fd8(0x3b8)],
                $(_0x1e7fd8(0x467))[_0x1e7fd8(0x710)](this[_0x1e7fd8(0x3b8)]),
                localStorage[_0x1e7fd8(0x258)](_0x1e7fd8(0x30f), theoKzObjects[_0x1e7fd8(0x30f)]);
            }),
            $(_0x1ac6bd(0x36f))['hover'](function() {
                var _0x50e067 = _0x1ac6bd;
                $('#tooltipTop8')[_0x50e067(0x442)]();
            }, function() {
                var _0x35a3e4 = _0x1ac6bd;
                $(_0x35a3e4(0x675))['fadeOut']();
            }),
            $(_0x1ac6bd(0x6f5))[_0x1ac6bd(0x2ae)](function() {
                var _0x1d02fd = _0x1ac6bd;
                $(_0x1d02fd(0x1fc))['fadeIn']();
            }, function() {
                var _0x190ce2 = _0x1ac6bd;
                $(_0x190ce2(0x1fc))[_0x190ce2(0x150)]();
            }),
            $(_0x1ac6bd(0x3bb))['on'](_0x1ac6bd(0x504), function() {
                var _0x12ff07 = _0x1ac6bd;
                zwormData['teamCode'] = $(this)[_0x12ff07(0x54c)](),
                localStorage[_0x12ff07(0x258)](_0x12ff07(0x51b), zwormData[_0x12ff07(0x51b)]),
                console[_0x12ff07(0x10f)](_0x12ff07(0x6a7), zwormData[_0x12ff07(0x51b)]);
            });
            let _0xc1345 = localStorage[_0x1ac6bd(0x11c)]('teamCode');
            _0xc1345 && (zwormData[_0x1ac6bd(0x51b)] = _0xc1345,
            $(_0x1ac6bd(0x3bb))['val'](_0xc1345));
            zw_selectedbackground = 0x0,
            zw_toplist = 0xa;
            var _0x72ecf = $('#arkaplan')
              , _0x2cd5f8 = $('#zwtop')
              , _0x1c0b68 = localStorage[_0x1ac6bd(0x11c)](_0x1ac6bd(0x60d));
            if (_0x1c0b68) {
                var _0x1514d7 = parseInt(_0x1c0b68);
                _0x72ecf[_0x1ac6bd(0x54c)](_0x1514d7),
                zw_selectedbackground = _0x1514d7;
            }
            const _0x524ec5 = localStorage[_0x1ac6bd(0x11c)]('zw-toplist');
            if (_0x524ec5) {
                const _0x148431 = parseInt(_0x524ec5);
                zw_toplist = _0x148431;
            }
            let _0x5e14e8 = _wrmxt[_0x1ac6bd(0x454)](theoKzObjects[_0x1ac6bd(0x4d9)]);
            if (_0x5e14e8)
                $(_0x1ac6bd(0x51c))[_0x1ac6bd(0x54c)](theoKzObjects['idReplaceSkin']);
            else {
                let _0xf3fa47 = $('#inputReplaceSkin')[_0x1ac6bd(0x54c)]();
                _0x5e14e8 = _wrmxt['isNumberValid'](_0xf3fa47),
                theoKzObjects[_0x1ac6bd(0x4d9)] = _0x5e14e8 ? _0xf3fa47 : 0x23;
            }
            ;return _0x2cd5f8['val'](zw_toplist),
            _0x72ecf[_0x1ac6bd(0x600)](function(_0x51b2f2) {
                var _0x20496d = _0x1ac6bd;
                zw_selectedbackground = this[_0x20496d(0x139)];
                var _0x909583 = obtenerImagenPorSeleccion(zw_selectedbackground);
                _0x909583 && (anApp['q']['Cf'] = new PIXI[(_0x20496d(0x590))](anApp['q']['fn_o'](_0x909583))),
                localStorage['setItem'](_0x20496d(0x60d), this[_0x20496d(0x139)][_0x20496d(0x39b)]());
            }),
            _0x2cd5f8[_0x1ac6bd(0x600)](function(_0x1fa513) {
                var _0x3f858a = _0x1ac6bd;
                zw_toplist = this[_0x3f858a(0x139)],
                localStorage[_0x3f858a(0x258)](_0x3f858a(0x734), this[_0x3f858a(0x139)][_0x3f858a(0x39b)]());
            }),
            $(_0x1ac6bd(0x64c))[_0x1ac6bd(0x57f)](function() {
                var _0x5c3000 = _0x1ac6bd;
                navigator['clipboard'][_0x5c3000(0x595)](zw_userId);
            }),
            (_0x33ed8b[_0x1ac6bd(0x34d)]['a'] = function() {
                var _0x1c51b1 = _0x1ac6bd;
                if (_0x33ed8b[_0x1c51b1(0x57c)][_0x1c51b1(0x34d)]['a'][_0x1c51b1(0x67d)](this),
                !_0x33ed8b['Ek']) {
                    _0x33ed8b['Ek'] = !0x0;
                    var _0x66eac2 = _0x242785();
                    _0x66eac2['u']['Pi'](function() {
                        var _0x251e69 = _0x1c51b1;
                        _0x66eac2['u']['P']() ? _0x29e6de[_0x251e69(0xf8)](_0x66eac2['u']['zi']()) : _0x29e6de[_0x251e69(0xf8)]('0');
                    });
                }
            }
            ,
            _0x33ed8b['Fk'] = $(_0x1ac6bd(0x2ec)),
            _0x33ed8b['Gk'] = $('#leaders-view'),
            _0x33ed8b['Hk'] = $('#profile-view'),
            _0x33ed8b['Ik'] = $(_0x1ac6bd(0x66d)),
            _0x33ed8b['Jk'] = $(_0x1ac6bd(0x72c)),
            _0x33ed8b['Kk'] = $(_0x1ac6bd(0x731)),
            _0x33ed8b['Lk'] = $('#store-view'),
            _0x33ed8b[_0x1ac6bd(0x2d8)] = $('#wormtr-settings-view'),
            _0x33ed8b['Mk'] = $(_0x1ac6bd(0x236)),
            _0x33ed8b['Nk'] = $(_0x1ac6bd(0x47f)),
            _0x33ed8b['Ok'] = $(_0x1ac6bd(0x491)),
            _0x33ed8b['Pk'] = $(_0x1ac6bd(0x339)),
            _0x33ed8b['prototype']['ii'] = function() {
                var _0x1cea1b = _0x1ac6bd;
                _0x5995d6['fk'][_0x1cea1b(0x73b)](),
                _0x5995d6['fk'][_0x1cea1b(0x150)](0xc8),
                _0x5995d6['gk'][_0x1cea1b(0x73b)](),
                _0x5995d6['gk'][_0x1cea1b(0x150)](0xc8),
                _0x5995d6['hk'][_0x1cea1b(0x73b)](),
                _0x5995d6['hk'][_0x1cea1b(0x150)](0xc8),
                _0x5995d6['ik'][_0x1cea1b(0x73b)](),
                _0x5995d6['ik'][_0x1cea1b(0x442)](0xc8),
                _0x5995d6['jk'][_0x1cea1b(0x73b)](),
                _0x5995d6['jk']['fadeOut'](0xc8),
                _0x5995d6['kk'][_0x1cea1b(0x73b)](),
                _0x5995d6['kk']['fadeOut'](0xc8),
                _0x5995d6['nk'][_0x1cea1b(0x73b)](),
                _0x5995d6['nk'][_0x1cea1b(0x442)](0xc8),
                _0x5995d6['ok'][_0x1cea1b(0x73b)](),
                _0x5995d6['ok'][_0x1cea1b(0x442)](0xc8),
                _0x42d406[_0x1cea1b(0xf8)](this['ad']),
                _0x1e6366[_0x1cea1b(0x710)](this['Dk']),
                this['Qk'](),
                this['Rk']();
            }
            ,
            _0x33ed8b['prototype']['Rk'] = function() {}
            ,
            _0x33ed8b[_0x1ac6bd(0x34d)]['Sk'] = function() {
                var _0x3ac23b = _0x1ac6bd;
                _0x5ce8a9['Pk'][_0x3ac23b(0x73b)](),
                _0x5ce8a9['Pk'][_0x3ac23b(0x442)](0x12c);
            }
            ,
            _0x33ed8b[_0x1ac6bd(0x34d)]['Qk'] = function() {
                var _0x5c48f6 = _0x1ac6bd;
                _0x5ce8a9['Pk'][_0x5c48f6(0x73b)](),
                _0x5ce8a9['Pk'][_0x5c48f6(0x150)](0x12c);
            }
            ,
            _0x33ed8b);
        }())
          , _0x635051 = (function() {
            var _0x12a3c7 = _0x53c3f2
              , _0x35fdea = $(_0x12a3c7(0x677))
              , _0x5ac361 = $(_0x12a3c7(0x3ff))
              , _0x4e3511 = $(_0x12a3c7(0x441))
              , _0x339c34 = $('#store-buy-coins_7000')
              , _0xdc8b10 = $(_0x12a3c7(0x699))
              , _0x2c3c38 = $(_0x12a3c7(0x17b))
              , _0x404ea2 = _0xaa2971(_0x5ce8a9, function() {
                var _0x12eb97 = _0x12a3c7;
                _0x5ce8a9[_0x12eb97(0x67d)](this, _0x817213(_0x12eb97(0x548)), !0x1);
                var _0x1c691d = _0x242785()
                  , _0x56ca02 = this;
                _0x35fdea[_0x12eb97(0x57f)](function() {
                    var _0x363e38 = _0x12eb97;
                    _0x1c691d['r']['Cd'](),
                    _0x56ca02['Tk'](_0x363e38(0x201));
                }),
                _0x5ac361['click'](function() {
                    var _0x53ec0d = _0x12eb97;
                    _0x1c691d['r']['Cd'](),
                    _0x56ca02['Tk'](_0x53ec0d(0x33b));
                }),
                _0x4e3511['click'](function() {
                    var _0x1c4244 = _0x12eb97;
                    _0x1c691d['r']['Cd'](),
                    _0x56ca02['Tk'](_0x1c4244(0x2c3));
                }),
                _0x339c34[_0x12eb97(0x57f)](function() {
                    var _0x2b58e6 = _0x12eb97;
                    _0x1c691d['r']['Cd'](),
                    _0x56ca02['Tk'](_0x2b58e6(0x13d));
                }),
                _0xdc8b10[_0x12eb97(0x57f)](function() {
                    var _0x125da7 = _0x12eb97;
                    _0x1c691d['r']['Cd'](),
                    _0x56ca02['Tk'](_0x125da7(0x602));
                }),
                _0x2c3c38['click'](function() {
                    var _0x2322b8 = _0x12eb97;
                    _0x1c691d['r']['Cd'](),
                    _0x56ca02['Tk'](_0x2322b8(0x70f));
                });
            });
            return _0x404ea2['prototype']['a'] = function() {
                var _0x10cff7 = _0x12a3c7;
                _0x404ea2[_0x10cff7(0x57c)][_0x10cff7(0x34d)]['a']['call'](this);
            }
            ,
            _0x404ea2[_0x12a3c7(0x34d)]['Rk'] = function() {
                var _0x5395bb = _0x12a3c7;
                _0x5ce8a9['Fk'][_0x5395bb(0x73b)](),
                _0x5ce8a9['Fk'][_0x5395bb(0x442)](0xc8),
                _0x5ce8a9['Gk'][_0x5395bb(0x73b)](),
                _0x5ce8a9['Gk'][_0x5395bb(0x150)](0x32),
                _0x5ce8a9['Hk']['stop'](),
                _0x5ce8a9['Hk'][_0x5395bb(0x150)](0x32),
                _0x5ce8a9['Jk'][_0x5395bb(0x73b)](),
                _0x5ce8a9['Jk']['fadeOut'](0x32),
                _0x5ce8a9['Ik']['stop'](),
                _0x5ce8a9['Ik'][_0x5395bb(0x150)](0x32),
                _0x5ce8a9['Kk']['stop'](),
                _0x5ce8a9['Kk']['fadeOut'](0x32),
                _0x5ce8a9['Lk']['stop'](),
                _0x5ce8a9['Lk'][_0x5395bb(0x150)](0x32),
                _0x5ce8a9['Mk']['stop'](),
                _0x5ce8a9['Mk']['fadeOut'](0x32),
                _0x5ce8a9['zwset'][_0x5395bb(0x73b)](),
                _0x5ce8a9[_0x5395bb(0x2d8)][_0x5395bb(0x150)](0x32),
                _0x5ce8a9['Nk'][_0x5395bb(0x73b)](),
                _0x5ce8a9['Nk'][_0x5395bb(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x5395bb(0x73b)](),
                _0x5ce8a9['Ok'][_0x5395bb(0x150)](0x32);
            }
            ,
            _0x404ea2[_0x12a3c7(0x34d)]['ji'] = function() {
                _0x242785()['r']['Dd']();
            }
            ,
            _0x404ea2['prototype']['Tk'] = function(_0x559fae) {}
            ,
            _0x404ea2;
        }())
          , _0x4aa00 = (function() {
            var _0x659fd1 = _0x53c3f2
              , _0x223ea3 = $('#highscore-table')
              , _0x516152 = $(_0x659fd1(0x563))
              , _0x26a2dc = $(_0x659fd1(0x1bc))
              , _0x5b1586 = $(_0x659fd1(0x1c5))
              , _0x4f158d = _0xaa2971(_0x5ce8a9, function() {
                var _0x1d6f3a = _0x659fd1;
                _0x5ce8a9['call'](this, _0x817213(_0x1d6f3a(0x66e)), !0x0);
                var _0x4d326d = _0x242785()
                  , _0x224850 = this;
                this['Uk'] = {},
                this['Vk'] = {
                    'Wk': {
                        'Xk': _0x516152,
                        'Yk': _0x1d6f3a(0x13c)
                    },
                    'Zk': {
                        'Xk': _0x26a2dc,
                        'Yk': _0x1d6f3a(0x523)
                    },
                    '$k': {
                        'Xk': _0x5b1586,
                        'Yk': _0x1d6f3a(0x295)
                    }
                },
                _0x516152['click'](function() {
                    _0x4d326d['r']['Cd'](),
                    _0x224850['_k'](_0x224850['Vk']['Wk']);
                }),
                _0x26a2dc[_0x1d6f3a(0x57f)](function() {
                    _0x4d326d['r']['Cd'](),
                    _0x224850['_k'](_0x224850['Vk']['Zk']);
                }),
                _0x5b1586[_0x1d6f3a(0x57f)](function() {
                    _0x4d326d['r']['Cd'](),
                    _0x224850['_k'](_0x224850['Vk']['$k']);
                });
            });
            return _0x4f158d['prototype']['a'] = function() {
                var _0x22c1db = _0x659fd1;
                _0x4f158d[_0x22c1db(0x57c)][_0x22c1db(0x34d)]['a'][_0x22c1db(0x67d)](this);
            }
            ,
            _0x4f158d[_0x659fd1(0x34d)]['Rk'] = function() {
                var _0x36c820 = _0x659fd1;
                _0x5ce8a9['Fk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Fk'][_0x36c820(0x150)](0x32),
                _0x5ce8a9['Gk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Gk'][_0x36c820(0x442)](0xc8),
                _0x5ce8a9['Hk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Hk']['fadeOut'](0x32),
                _0x5ce8a9['Jk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Jk'][_0x36c820(0x150)](0x32),
                _0x5ce8a9['Ik'][_0x36c820(0x73b)](),
                _0x5ce8a9['Ik']['fadeOut'](0x32),
                _0x5ce8a9['Kk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Kk'][_0x36c820(0x150)](0x32),
                _0x5ce8a9['Lk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Lk'][_0x36c820(0x150)](0x32),
                _0x5ce8a9['Mk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Mk'][_0x36c820(0x150)](0x32),
                _0x5ce8a9[_0x36c820(0x2d8)]['stop'](),
                _0x5ce8a9['zwset'][_0x36c820(0x150)](0x32),
                _0x5ce8a9['Nk'][_0x36c820(0x73b)](),
                _0x5ce8a9['Nk'][_0x36c820(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x36c820(0x73b)](),
                _0x5ce8a9['Ok'][_0x36c820(0x150)](0x32);
            }
            ,
            _0x4f158d[_0x659fd1(0x34d)]['ji'] = function() {
                var _0x569b85 = _0x659fd1;
                _0x242785()['r']['Dd']();
                var _0x42708b = this;
                this['Sk'](),
                $[_0x569b85(0x6d9)](_0x2fc5c7 + _0x569b85(0x4c4), function(_0x55795a) {
                    _0x42708b['Uk'] = _0x55795a,
                    _0x42708b['_k'](null != _0x42708b['al'] ? _0x42708b['al'] : _0x42708b['Vk']['Wk']),
                    _0x42708b['Qk']();
                })[_0x569b85(0x6a0)](function() {
                    _0x42708b['Qk']();
                });
            }
            ,
            _0x4f158d[_0x659fd1(0x34d)]['_k'] = function(_0x6b2f44) {
                var _0x225fb4 = _0x659fd1;
                this['al'] = _0x6b2f44;
                for (var _0x14b1dc in this['Vk'])
                    if (this['Vk'][_0x225fb4(0x121)](_0x14b1dc)) {
                        var _0x9c2f32 = this['Vk'][_0x14b1dc];
                        _0x9c2f32['Xk'][_0x225fb4(0x726)](_0x225fb4(0x159));
                    }
                this['al']['Xk'][_0x225fb4(0x440)](_0x225fb4(0x159));
                for (var _0x18ef57 = this['Uk'][this['al']['Yk']], _0x1f5c5d = '', _0xdd11fd = 0x0; _0xdd11fd < _0x18ef57[_0x225fb4(0x484)]; _0xdd11fd++) {
                    var _0x184c37 = _0x18ef57[_0xdd11fd];
                    _0x1f5c5d += '<div\x20class=\x22table-row\x22><span>' + (_0xdd11fd + 0x1) + _0x225fb4(0x451) + _0x184c37['avatarUrl'] + _0x225fb4(0x1f1) + _0x184c37[_0x225fb4(0x3f9)] + _0x225fb4(0x62e) + _0x184c37['level'] + '</span><span>' + _0x184c37[_0x225fb4(0x570)] + _0x225fb4(0x62e) + _0x184c37['headShots'] + _0x225fb4(0x3f4) + _0x184c37[_0x225fb4(0x721)] + _0x225fb4(0x544);
                }
                _0x223ea3['empty'](),
                _0x223ea3[_0x225fb4(0x194)](_0x1f5c5d);
            }
            ,
            _0x4f158d;
        }())
          , _0x561a69 = (function() {
            var _0x5d16ff = _0x53c3f2
              , _0x2a343a = $(_0x5d16ff(0x587))
              , _0x52664a = $('#popup-login-fb')
              , _0x1ed021 = _0xaa2971(_0x5ce8a9, function() {
                var _0x51e40f = _0x5d16ff;
                _0x5ce8a9[_0x51e40f(0x67d)](this, _0x817213('index.game.popup.menu.login.tab'), !0x1);
                var _0x4fcb45 = _0x242785()
                  , _0x231b15 = this;
                _0x2a343a[_0x51e40f(0x57f)](function() {
                    _0x4fcb45['r']['Cd'](),
                    _0x231b15['Sk'](),
                    _0x4fcb45['u']['Qi'](function() {
                        _0x231b15['Qk']();
                    }),
                    setTimeout(function() {
                        _0x231b15['Qk']();
                    }, 0x2710),
                    _0x4fcb45['u']['Zi']();
                }),
                _0x52664a[_0x51e40f(0x57f)](function() {
                    _0x4fcb45['r']['Cd'](),
                    _0x231b15['Sk'](),
                    _0x4fcb45['u']['Qi'](function() {
                        _0x231b15['Qk']();
                    }),
                    setTimeout(function() {
                        _0x231b15['Qk']();
                    }, 0x2710),
                    _0x4fcb45['u']['Vi']();
                });
            });
            return _0x1ed021['prototype']['a'] = function() {
                var _0x9199c2 = _0x5d16ff;
                _0x1ed021[_0x9199c2(0x57c)][_0x9199c2(0x34d)]['a'][_0x9199c2(0x67d)](this);
            }
            ,
            _0x1ed021['prototype']['Rk'] = function() {
                var _0x2d63e3 = _0x5d16ff;
                _0x5ce8a9['Fk'][_0x2d63e3(0x73b)](),
                _0x5ce8a9['Fk'][_0x2d63e3(0x150)](0x32),
                _0x5ce8a9['Gk']['stop'](),
                _0x5ce8a9['Gk'][_0x2d63e3(0x150)](0x32),
                _0x5ce8a9['Hk']['stop'](),
                _0x5ce8a9['Hk'][_0x2d63e3(0x150)](0x32),
                _0x5ce8a9['Jk'][_0x2d63e3(0x73b)](),
                _0x5ce8a9['Jk']['fadeIn'](0xc8),
                _0x5ce8a9['Ik']['stop'](),
                _0x5ce8a9['Ik'][_0x2d63e3(0x150)](0x32),
                _0x5ce8a9['Kk'][_0x2d63e3(0x73b)](),
                _0x5ce8a9['Kk']['fadeOut'](0x32),
                _0x5ce8a9['Lk'][_0x2d63e3(0x73b)](),
                _0x5ce8a9['Lk'][_0x2d63e3(0x150)](0x32),
                _0x5ce8a9['Mk'][_0x2d63e3(0x73b)](),
                _0x5ce8a9['Mk'][_0x2d63e3(0x150)](0x32),
                _0x5ce8a9[_0x2d63e3(0x2d8)][_0x2d63e3(0x73b)](),
                _0x5ce8a9[_0x2d63e3(0x2d8)][_0x2d63e3(0x150)](0x32),
                _0x5ce8a9['Nk'][_0x2d63e3(0x73b)](),
                _0x5ce8a9['Nk']['fadeOut'](0x32),
                _0x5ce8a9['Ok']['stop'](),
                _0x5ce8a9['Ok']['fadeOut'](0x32);
            }
            ,
            _0x1ed021[_0x5d16ff(0x34d)]['ji'] = function() {
                _0x242785()['r']['Dd']();
            }
            ,
            _0x1ed021;
        }())
          , _0x6ec32 = (function() {
            var _0x3f54fd = _0x53c3f2
              , _0x4c0277 = $(_0x3f54fd(0x299))
              , _0x5d1d7d = $(_0x3f54fd(0x515))
              , _0x285da6 = $(_0x3f54fd(0x33d))
              , _0x19e73b = $(_0x3f54fd(0xf7))
              , _0x855f38 = $('#profile-level')
              , _0x2a9fbf = $('#profile-stat-highScore')
              , _0x237d4c = $('#profile-stat-bestSurvivalTime')
              , _0xa28562 = $(_0x3f54fd(0x6ee))
              , _0x20ce44 = $(_0x3f54fd(0x5ed))
              , _0x3b31d6 = $(_0x3f54fd(0x373))
              , _0xc92e9 = $(_0x3f54fd(0x2a8))
              , _0x584126 = $(_0x3f54fd(0x162))
              , _0x28ae22 = _0xaa2971(_0x5ce8a9, function() {
                var _0x488108 = _0x3f54fd;
                _0x5ce8a9[_0x488108(0x67d)](this, _0x817213(_0x488108(0x5ff)), !0x0);
            });
            return _0x28ae22[_0x3f54fd(0x34d)]['a'] = function() {
                var _0x17d085 = _0x3f54fd;
                _0x28ae22['parent'][_0x17d085(0x34d)]['a'][_0x17d085(0x67d)](this);
            }
            ,
            _0x28ae22[_0x3f54fd(0x34d)]['Rk'] = function() {
                var _0x85595e = _0x3f54fd;
                _0x5ce8a9['Fk']['stop'](),
                _0x5ce8a9['Fk'][_0x85595e(0x150)](0x32),
                _0x5ce8a9['Gk'][_0x85595e(0x73b)](),
                _0x5ce8a9['Gk'][_0x85595e(0x150)](0x32),
                _0x5ce8a9['Hk'][_0x85595e(0x73b)](),
                _0x5ce8a9['Hk'][_0x85595e(0x442)](0xc8),
                _0x5ce8a9['Jk'][_0x85595e(0x73b)](),
                _0x5ce8a9['Jk'][_0x85595e(0x150)](0x32),
                _0x5ce8a9['Ik'][_0x85595e(0x73b)](),
                _0x5ce8a9['Ik']['fadeOut'](0x32),
                _0x5ce8a9['Kk'][_0x85595e(0x73b)](),
                _0x5ce8a9['Kk'][_0x85595e(0x150)](0x32),
                _0x5ce8a9['Lk'][_0x85595e(0x73b)](),
                _0x5ce8a9['Lk']['fadeOut'](0x32),
                _0x5ce8a9['Mk']['stop'](),
                _0x5ce8a9['Mk'][_0x85595e(0x150)](0x32),
                _0x5ce8a9[_0x85595e(0x2d8)]['stop'](),
                _0x5ce8a9[_0x85595e(0x2d8)][_0x85595e(0x150)](0x32),
                _0x5ce8a9['Nk'][_0x85595e(0x73b)](),
                _0x5ce8a9['Nk'][_0x85595e(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x85595e(0x73b)](),
                _0x5ce8a9['Ok'][_0x85595e(0x150)](0x32);
            }
            ,
            _0x28ae22[_0x3f54fd(0x34d)]['ji'] = function() {
                var _0x317fd7 = _0x3f54fd
                  , _0x40ba43 = _0x242785();
                _0x40ba43['r']['Dd']();
                var _0x98ff72 = _0x40ba43['u']['Oi']()
                  , _0x353b68 = moment([_0x98ff72[_0x317fd7(0x6ad)], _0x98ff72[_0x317fd7(0x671)] - 0x1, _0x98ff72['day']])[_0x317fd7(0xe1)]('LL');
                _0x5d1d7d[_0x317fd7(0xf8)](_0x40ba43['u']['wi']()),
                _0x4c0277['attr'](_0x317fd7(0x208), _0x40ba43['u']['xi']()),
                _0x285da6['width'](0x64 * _0x40ba43['u']['Bi']() / _0x40ba43['u']['Ci']() + '%'),
                _0x19e73b['html'](_0x40ba43['u']['Bi']() + '\x20/\x20' + _0x40ba43['u']['Ci']()),
                _0x855f38[_0x317fd7(0xf8)](_0x40ba43['u']['Ai']()),
                _0x2a9fbf[_0x317fd7(0xf8)](_0x40ba43['u']['Ii']()),
                _0x237d4c[_0x317fd7(0xf8)](_0xe2cbd9(_0x40ba43['u']['Ji']())),
                _0xa28562[_0x317fd7(0xf8)](_0x40ba43['u']['Ki']()),
                _0x20ce44[_0x317fd7(0xf8)](_0x40ba43['u']['Li']()),
                _0x3b31d6[_0x317fd7(0xf8)](_0x40ba43['u']['Mi']()),
                _0xc92e9['html'](_0xe2cbd9(_0x40ba43['u']['Ni']())),
                _0x584126['html'](_0x353b68);
            }
            ,
            _0x28ae22;
        }())
          , _0x53de95 = (function() {
            var _0x31c599 = _0x53c3f2
              , _0x13bbfc = $(_0x31c599(0x5b2))
              , _0x5d56f2 = $(_0x31c599(0x56f))
              , _0x4d3e00 = $('#settings-show-names-switch')
              , _0x273009 = $(_0x31c599(0x494))
              , _0x48c404 = $(_0x31c599(0x289))
              , _0x552f1d = $(_0x31c599(0x5e9))
              , _0x26051c = $(_0x31c599(0xe5))
              , _0x948511 = $('#popup-withdraw-consent')
              , _0x599a3f = _0xaa2971(_0x5ce8a9, function() {
                var _0x1ddc04 = _0x31c599;
                _0x5ce8a9[_0x1ddc04(0x67d)](this, _0x817213(_0x1ddc04(0x6bc)), !0x1);
                var _0x5d45b7 = this
                  , _0x4b379d = _0x242785();
                _0x13bbfc['click'](function() {
                    var _0x257935 = _0x1ddc04
                      , _0x33e30b = !!_0x13bbfc[_0x257935(0x1ba)](_0x257935(0x3b8));
                    _0x339953(_0x2ff145['Me'], _0x33e30b, 0x1e),
                    _0x4b379d['r']['td'](_0x33e30b),
                    _0x4b379d['r']['Cd']();
                }),
                _0x5d56f2[_0x1ddc04(0x57f)](function() {
                    var _0x2c90da = _0x1ddc04
                      , _0x4d41b1 = !!_0x5d56f2['prop'](_0x2c90da(0x3b8));
                    _0x339953(_0x2ff145['Ne'], _0x4d41b1, 0x1e),
                    _0x4b379d['r']['rd'](_0x4d41b1),
                    _0x4b379d['r']['Cd']();
                }),
                _0x4d3e00[_0x1ddc04(0x57f)](function() {
                    _0x4b379d['r']['Cd']();
                }),
                _0x273009['click'](function() {
                    _0x4b379d['r']['Cd'](),
                    _0x5d45b7['Sk'](),
                    setTimeout(function() {
                        _0x5d45b7['Qk']();
                    }, 0x7d0),
                    _0x4b379d['u']['Wi']();
                }),
                _0x552f1d[_0x1ddc04(0x57f)](function() {
                    _0x4b379d['u']['P']() ? (_0x4b379d['r']['Cd'](),
                    _0x4b379d['s']['I'](_0x4b379d['s']['Vh'])) : _0x4b379d['r']['Hd']();
                }),
                _0x948511[_0x1ddc04(0x57f)](function() {
                    _0x4b379d['Y']() ? (_0x4b379d['r']['Cd'](),
                    _0x4b379d['s']['I'](_0x4b379d['s']['Uh'])) : _0x4b379d['r']['Hd']();
                });
            });
            return _0x599a3f[_0x31c599(0x34d)]['a'] = function() {
                var _0x166414 = _0x31c599;
                _0x599a3f[_0x166414(0x57c)][_0x166414(0x34d)]['a'][_0x166414(0x67d)](this);
                var _0x5a0903 = _0x242785()
                  , _0x26cc0e = void 0x0;
                switch (_0x252acc(_0x2ff145['Me'])) {
                case _0x166414(0x42f):
                    _0x26cc0e = !0x1;
                    break;
                default:
                    _0x26cc0e = !0x0;
                }
                _0x13bbfc[_0x166414(0x1ba)](_0x166414(0x3b8), _0x26cc0e),
                _0x5a0903['r']['td'](_0x26cc0e);
                var _0x54ce5e = void 0x0;
                switch (_0x252acc(_0x2ff145['Ne'])) {
                case _0x166414(0x42f):
                    _0x54ce5e = !0x1;
                    break;
                default:
                    _0x54ce5e = !0x0;
                }
                _0x5d56f2[_0x166414(0x1ba)]('checked', _0x54ce5e),
                _0x5a0903['r']['rd'](_0x54ce5e);
                var _0x585287 = void 0x0;
                switch (_0x252acc(_0x2ff145['ya'])) {
                case _0x166414(0x42f):
                    _0x585287 = !0x1;
                    break;
                default:
                    _0x585287 = !0x0;
                }
                console[_0x166414(0x10f)](_0x166414(0x35b) + _0x585287),
                _0x4d3e00[_0x166414(0x1ba)]('checked', _0x585287),
                _0x5a0903['u']['V'](function() {
                    var _0x2d8229 = _0x166414;
                    _0x48c404[_0x2d8229(0x710)](_0x5a0903['u']['P']()),
                    _0x26051c['toggle'](_0x5a0903['u']['P']());
                });
            }
            ,
            _0x599a3f[_0x31c599(0x34d)]['Rk'] = function() {
                var _0x1592af = _0x31c599;
                _0x5ce8a9['Fk']['stop'](),
                _0x5ce8a9['Fk'][_0x1592af(0x150)](0x32),
                _0x5ce8a9['Gk'][_0x1592af(0x73b)](),
                _0x5ce8a9['Gk']['fadeOut'](0x32),
                _0x5ce8a9['Hk'][_0x1592af(0x73b)](),
                _0x5ce8a9['Hk'][_0x1592af(0x150)](0x32),
                _0x5ce8a9['Jk'][_0x1592af(0x73b)](),
                _0x5ce8a9['Jk'][_0x1592af(0x150)](0x32),
                _0x5ce8a9['Ik'][_0x1592af(0x73b)](),
                _0x5ce8a9['Ik'][_0x1592af(0x442)](0xc8),
                _0x5ce8a9['Kk'][_0x1592af(0x73b)](),
                _0x5ce8a9['Kk'][_0x1592af(0x150)](0x32),
                _0x5ce8a9['Lk'][_0x1592af(0x73b)](),
                _0x5ce8a9['Lk'][_0x1592af(0x150)](0x32),
                _0x5ce8a9['Mk'][_0x1592af(0x73b)](),
                _0x5ce8a9['Mk'][_0x1592af(0x150)](0x32),
                _0x5ce8a9['zwset'][_0x1592af(0x73b)](),
                _0x5ce8a9[_0x1592af(0x2d8)][_0x1592af(0x150)](0x32),
                _0x5ce8a9['Nk'][_0x1592af(0x73b)](),
                _0x5ce8a9['Nk'][_0x1592af(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x1592af(0x73b)](),
                _0x5ce8a9['Ok']['fadeOut'](0x32);
            }
            ,
            _0x599a3f[_0x31c599(0x34d)]['ji'] = function() {
                var _0x5b1e51 = _0x31c599
                  , _0x410dce = _0x242785();
                _0x410dce['r']['Dd'](),
                _0x410dce['Y']() ? _0x948511[_0x5b1e51(0x65f)]() : _0x948511[_0x5b1e51(0x3a0)]();
            }
            ,
            _0x599a3f[_0x31c599(0x34d)]['wa'] = function() {
                var _0x5cd440 = _0x31c599;
                return _0x4d3e00[_0x5cd440(0x1ba)](_0x5cd440(0x3b8));
            }
            ,
            _0x599a3f;
        }())
          , _0x465ec4 = (function() {
            var _0x3c583a = _0x53c3f2
              , _0x410f0a = $('#store-view-canv')
              , _0x2a28b0 = $('#skin-description-text')
              , _0x2da10b = $(_0x3c583a(0x1e8))
              , _0x4b9506 = $(_0x3c583a(0x399))
              , _0x1359d4 = $(_0x3c583a(0x5dc))
              , _0x2bddbf = $(_0x3c583a(0x25b))
              , _0x21c4ee = $(_0x3c583a(0x348))
              , _0x13ba14 = $(_0x3c583a(0x33c))
              , _0x311da2 = $(_0x3c583a(0x6b4))
              , _0x487ff5 = $('#store-view-next')
              , _0x35e4ff = _0xaa2971(_0x5ce8a9, function() {
                var _0x5142b1 = _0x3c583a;
                _0x5ce8a9[_0x5142b1(0x67d)](this, _0x817213(_0x5142b1(0x3fc)), !0x0);
                var _0x4e3893 = this
                  , _0xe2fe36 = _0x242785();
                this['bl'] = null,
                this['cl'] = [],
                this['dl'] = {},
                this['el'] = new _0x362552(_0x410f0a),
                _0x2bddbf[_0x5142b1(0x57f)](function() {
                    _0xe2fe36['r']['Cd'](),
                    _0x4e3893['fl']();
                }),
                _0x311da2[_0x5142b1(0x57f)](function() {
                    _0xe2fe36['r']['Cd'](),
                    _0x4e3893['bl']['gl']();
                }),
                _0x487ff5[_0x5142b1(0x57f)](function() {
                    _0xe2fe36['r']['Cd'](),
                    _0x4e3893['bl']['hl']();
                });
            });
            _0x35e4ff[_0x3c583a(0x34d)]['a'] = function() {
                var _0x5d1b40 = _0x3c583a;
                _0x35e4ff[_0x5d1b40(0x57c)][_0x5d1b40(0x34d)]['a']['call'](this);
                var _0x44f442 = this
                  , _0x408aab = _0x242785();
                _0x408aab['p']['ca'](function() {
                    var _0x10f5fc = _0x5d1b40
                      , _0x4d6823 = _0x408aab['p']['Ac']();
                    if (null != _0x4d6823) {
                        _0x44f442['cl'] = [];
                        for (var _0xa77bb5 = 0x0; _0xa77bb5 < _0x4d6823[_0x10f5fc(0x656)][_0x10f5fc(0x484)]; _0xa77bb5++)
                            _0x44f442['cl'][_0x10f5fc(0x5d6)](new _0x2e495f(_0x44f442,_0x4d6823[_0x10f5fc(0x656)][_0xa77bb5]));
                        _0x44f442['dl'] = {};
                        for (var _0x4d0245 = 0x0; _0x4d0245 < _0x4d6823['skinArrayDict'][_0x10f5fc(0x484)]; _0x4d0245++) {
                            var _0x9789ac = _0x4d6823[_0x10f5fc(0x617)][_0x4d0245];
                            _0x44f442['dl'][_0x9789ac['id']] = _0x9789ac;
                        }
                    }
                }),
                this['il'](!0x1),
                _0x408aab['t']['xh'](function() {
                    _0x44f442['il'](!0x1);
                });
            }
            ,
            _0x35e4ff[_0x3c583a(0x34d)]['Rk'] = function() {
                var _0x179a22 = _0x3c583a;
                _0x5ce8a9['Fk']['stop'](),
                _0x5ce8a9['Fk'][_0x179a22(0x150)](0x32),
                _0x5ce8a9['Gk']['stop'](),
                _0x5ce8a9['Gk'][_0x179a22(0x150)](0x32),
                _0x5ce8a9['Hk'][_0x179a22(0x73b)](),
                _0x5ce8a9['Hk']['fadeOut'](0x32),
                _0x5ce8a9['Jk'][_0x179a22(0x73b)](),
                _0x5ce8a9['Jk'][_0x179a22(0x150)](0x32),
                _0x5ce8a9['Ik'][_0x179a22(0x73b)](),
                _0x5ce8a9['Ik'][_0x179a22(0x150)](0x32),
                _0x5ce8a9['Kk'][_0x179a22(0x73b)](),
                _0x5ce8a9['Kk'][_0x179a22(0x442)](0xc8),
                _0x5ce8a9['Lk']['stop'](),
                _0x5ce8a9['Lk'][_0x179a22(0x150)](0x32),
                _0x5ce8a9['Mk']['stop'](),
                _0x5ce8a9['Mk']['fadeOut'](0x32),
                _0x5ce8a9['zwset'][_0x179a22(0x73b)](),
                _0x5ce8a9['zwset'][_0x179a22(0x150)](0x32),
                _0x5ce8a9['Nk'][_0x179a22(0x73b)](),
                _0x5ce8a9['Nk'][_0x179a22(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x179a22(0x73b)](),
                _0x5ce8a9['Ok']['fadeOut'](0x32);
            }
            ,
            _0x35e4ff[_0x3c583a(0x34d)]['ji'] = function() {
                _0x242785()['r']['Dd'](),
                this['jl'](),
                this['el']['Le'](!0x0);
            }
            ,
            _0x35e4ff[_0x3c583a(0x34d)]['ei'] = function() {
                this['el']['Le'](!0x1);
            }
            ,
            _0x35e4ff['prototype']['Ra'] = function() {
                this['el']['Ra']();
            }
            ,
            _0x35e4ff['prototype']['Pa'] = function(_0x24d069, _0x5bd7b2) {
                this['el']['Pa']();
            }
            ,
            _0x35e4ff['prototype']['jl'] = function() {
                var _0x1af668 = _0x3c583a
                  , _0xe97c1f = this
                  , _0xb48b2c = this
                  , _0x3cee02 = _0x242785();
                _0x13ba14[_0x1af668(0x724)]();
                for (var _0x27ae8f = 0x0; _0x27ae8f < this['cl'][_0x1af668(0x484)]; _0x27ae8f++)
                    !function(_0x2ba04b) {
                        var _0x559aeb = _0x1af668
                          , _0x4277a7 = _0xe97c1f['cl'][_0x2ba04b]
                          , _0x594a06 = document[_0x559aeb(0x3b1)]('li');
                        _0x13ba14[_0x559aeb(0x194)](_0x594a06);
                        var _0x4aa25a = $(_0x594a06);
                        _0x4aa25a['html'](_0x4277a7['kl']()),
                        _0x4aa25a[_0x559aeb(0x57f)](function() {
                            _0x3cee02['r']['Cd'](),
                            _0xb48b2c['ll'](_0x4277a7);
                        }),
                        _0x4277a7['ml'] = _0x4aa25a;
                    }(_0x27ae8f);
                if (this['cl'][_0x1af668(0x484)] > 0x0) {
                    for (var _0x476f8c = _0x3cee02['t']['ha'](_0x7e1770['ia']), _0x27ae8f = 0x0; _0x27ae8f < this['cl'][_0x1af668(0x484)]; _0x27ae8f++)
                        for (var _0x34885f = this['cl'][_0x27ae8f], _0x5a0ea8 = _0x34885f['nl'][_0x1af668(0x64b)], _0x533b04 = 0x0; _0x533b04 < _0x5a0ea8[_0x1af668(0x484)]; _0x533b04++)
                            if (_0x5a0ea8[_0x533b04] == _0x476f8c)
                                return _0x34885f['ol'] = _0x533b04,
                                void this['ll'](_0x34885f);
                    this['ll'](this['cl'][0x0]);
                }
            }
            ,
            _0x35e4ff[_0x3c583a(0x34d)]['ll'] = function(_0x15208c) {
                var _0x5cca60 = _0x3c583a;
                if (this['bl'] != _0x15208c) {
                    var _0x35933e = _0x242785();
                    if (this['bl'] = _0x15208c,
                    _0x13ba14['children']()[_0x5cca60(0x726)]('pressed'),
                    this['bl']['ml'] && this['bl']['ml']['addClass']('pressed'),
                    _0x2da10b[_0x5cca60(0xf8)](''),
                    null != _0x15208c['nl']) {
                        var _0x488888 = _0x35933e['p']['Ac']()[_0x5cca60(0x406)][_0x15208c['nl']['description']];
                        null != _0x488888 && _0x2da10b[_0x5cca60(0xf8)](_0x3d57e1(_0x25c081(_0x488888)));
                    }
                    this['il'](!0x0);
                }
            }
            ,
            _0x35e4ff['prototype']['pl'] = function() {
                return null == this['bl'] ? _0x53d88e['Yg']() : this['bl']['ql']();
            }
            ,
            _0x35e4ff['prototype']['fl'] = function() {
                var _0xaffa4a = this;
                this['pl']()['ah'](function(_0x11641a) {
                    _0xaffa4a['rl'](_0x11641a);
                });
            }
            ,
            _0x35e4ff[_0x3c583a(0x34d)]['rl'] = function(_0x2e71cf) {
                var _0xd342f2 = _0x3c583a
                  , _0x5c5ccb = this
                  , _0x12d167 = _0x242785()
                  , _0xc7b8f5 = this['dl'][_0x2e71cf][_0xd342f2(0x1ad)];
                if (!(_0x12d167['u']['zi']() < _0xc7b8f5)) {
                    this['Sk']();
                    var _0xddf446 = _0x12d167['t']['ha'](_0x7e1770['ia'])
                      , _0x28c2d3 = _0x12d167['t']['ha'](_0x7e1770['ja'])
                      , _0x37f1a5 = _0x12d167['t']['ha'](_0x7e1770['ka'])
                      , _0x6b1450 = _0x12d167['t']['ha'](_0x7e1770['la'])
                      , _0x366364 = _0x12d167['t']['ha'](_0x7e1770['ma']);
                    _0x12d167['u']['Ui'](_0x2e71cf, _0x7e1770['ia'], function() {
                        _0x12d167['t']['Bh'](_0xddf446, _0x7e1770['ia']),
                        _0x12d167['t']['Bh'](_0x28c2d3, _0x7e1770['ja']),
                        _0x12d167['t']['Bh'](_0x37f1a5, _0x7e1770['ka']),
                        _0x12d167['t']['Bh'](_0x6b1450, _0x7e1770['la']),
                        _0x12d167['t']['Bh'](_0x366364, _0x7e1770['ma']),
                        _0x12d167['u']['Ch'](_0x2e71cf, _0x7e1770['ia']) && _0x12d167['t']['Bh'](_0x2e71cf, _0x7e1770['ia']),
                        _0x5c5ccb['Qk']();
                    });
                }
            }
            ,
            _0x35e4ff[_0x3c583a(0x34d)]['il'] = function(_0x53453c) {
                var _0x5b5b64 = _0x3c583a
                  , _0x37c59d = _0x242785();
                this['el']['bk'](_0x37c59d['t']['ha'](_0x7e1770['ja']), !0x1, !0x1),
                this['el']['ck'](_0x37c59d['t']['ha'](_0x7e1770['ka']), !0x1, !0x1),
                this['el']['dk'](_0x37c59d['t']['ha'](_0x7e1770['la']), !0x1, !0x1),
                this['el']['ek'](_0x37c59d['t']['ha'](_0x7e1770['ma']), !0x1, !0x1);
                var _0x214a50 = this['pl']();
                if (_0x214a50['_g']()) {
                    var _0x4db401 = _0x214a50['$g']()
                      , _0x1a3566 = this['dl'][_0x4db401]
                      , _0x2188ff = ![];
                    if (_0x37c59d['t']['Ja'](_0x4db401, _0x7e1770['ia']))
                        _0x4b9506[_0x5b5b64(0x3a0)](),
                        _0x2bddbf[_0x5b5b64(0x3a0)]();
                    else {
                        if (null == _0x1a3566 || 0x1 == _0x1a3566[_0x5b5b64(0x12a)]) {
                            _0x2188ff = !![],
                            _0x4b9506['show'](),
                            _0x2bddbf[_0x5b5b64(0x3a0)](),
                            _0x1359d4[_0x5b5b64(0x2db)](_0x817213(_0x5b5b64(0x226)));
                            if (null != _0x1a3566 && _0x1a3566['nonbuyable'] && null != _0x1a3566[_0x5b5b64(0x44c)]) {
                                var _0x15ac51 = _0x37c59d['p']['Ac']()['textDict'][_0x1a3566[_0x5b5b64(0x44c)]];
                                null != _0x15ac51 && _0x1359d4[_0x5b5b64(0x2db)](_0x25c081(_0x15ac51));
                            }
                        } else
                            _0x4b9506[_0x5b5b64(0x3a0)](),
                            _0x2bddbf[_0x5b5b64(0x65f)](),
                            _0x21c4ee[_0x5b5b64(0xf8)](_0x1a3566[_0x5b5b64(0x1ad)]);
                    }
                    _0x2a28b0['html'](_0x5b5b64(0x27a) + _0x4db401 + '\x20TYPE:\x20' + _0x7e1770['ia']);
                    if (null != _0x1a3566 && null != _0x1a3566[_0x5b5b64(0x6ea)]) {
                        var _0xff5474 = _0x37c59d['p']['Ac']()[_0x5b5b64(0x406)][_0x1a3566[_0x5b5b64(0x6ea)]];
                        null != _0xff5474 && _0x2a28b0[_0x5b5b64(0xf8)](_0x3d57e1(_0x25c081(_0xff5474)));
                    }
                    this['el']['ak'](_0x4db401, !![], _0x2188ff),
                    _0x53453c && _0x37c59d['t']['Bh'](_0x4db401, _0x7e1770['ia']);
                }
            }
            ;
            var _0x2e495f = (function() {
                var _0x530b74 = _0x3c583a;
                function _0x43416f(_0x190f47, _0x390b8f) {
                    this['sl'] = _0x190f47,
                    this['ol'] = 0x0,
                    this['nl'] = _0x390b8f;
                }
                return _0x43416f[_0x530b74(0x34d)]['gl'] = function() {
                    var _0x72b061 = _0x530b74;
                    --this['ol'] < 0x0 && (this['ol'] = this['nl'][_0x72b061(0x64b)][_0x72b061(0x484)] - 0x1),
                    this['sl']['il'](!0x0);
                }
                ,
                _0x43416f[_0x530b74(0x34d)]['hl'] = function() {
                    var _0x368f1c = _0x530b74;
                    ++this['ol'] >= this['nl'][_0x368f1c(0x64b)][_0x368f1c(0x484)] && (this['ol'] = 0x0),
                    this['sl']['il'](!0x0);
                }
                ,
                _0x43416f[_0x530b74(0x34d)]['kl'] = function() {
                    var _0xbe904e = _0x530b74;
                    let _0x4e1ef4 = _0x25c081(this['nl']['name']);
                    return console['log'](this['nl']),
                    this['nl'][_0xbe904e(0x39a)] && (_0x4e1ef4 = _0xbe904e(0x6c5) + this['nl'][_0xbe904e(0x39a)] + '\x22\x20height=\x2243\x22\x20width=\x22180\x22\x20/>'),
                    _0x4e1ef4;
                }
                ,
                _0x43416f[_0x530b74(0x34d)]['ql'] = function() {
                    var _0x42cc97 = _0x530b74;
                    return this['ol'] >= this['nl']['list'][_0x42cc97(0x484)] ? _0x53d88e['Yg']() : _0x53d88e['Zg'](this['nl'][_0x42cc97(0x64b)][this['ol']]);
                }
                ,
                _0x43416f;
            }());
            return _0x35e4ff;
        }())
          , _0x2c2b11 = (function() {
            var _0x37ac01 = _0x53c3f2
              , _0x4c0037 = $(_0x37ac01(0x423))
              , _0x45b188 = $('#store-go-skins-button')
              , _0x2f332d = $(_0x37ac01(0x21c))
              , _0x1d72f9 = _0xaa2971(_0x5ce8a9, function() {
                var _0x5ef5ba = _0x37ac01;
                _0x5ce8a9[_0x5ef5ba(0x67d)](this, _0x817213(_0x5ef5ba(0x576)), !0x0);
                var _0x998752 = _0x242785();
                _0x4c0037[_0x5ef5ba(0x57f)](function() {
                    _0x998752['r']['Cd'](),
                    _0x998752['s']['I'](_0x998752['s']['Wh']);
                }),
                _0x45b188[_0x5ef5ba(0x57f)](function() {
                    _0x998752['r']['Cd'](),
                    _0x998752['s']['I'](_0x998752['s']['$h']);
                }),
                _0x2f332d[_0x5ef5ba(0x57f)](function() {
                    _0x998752['r']['Cd'](),
                    _0x998752['s']['I'](_0x998752['s']['ai']);
                });
            });
            return _0x1d72f9[_0x37ac01(0x34d)]['a'] = function() {
                var _0x7bdebe = _0x37ac01;
                _0x1d72f9[_0x7bdebe(0x57c)][_0x7bdebe(0x34d)]['a'][_0x7bdebe(0x67d)](this);
            }
            ,
            _0x1d72f9[_0x37ac01(0x34d)]['Rk'] = function() {
                var _0x3b8060 = _0x37ac01;
                _0x5ce8a9['Fk'][_0x3b8060(0x73b)](),
                _0x5ce8a9['Fk'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9['Gk'][_0x3b8060(0x73b)](),
                _0x5ce8a9['Gk'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9['Hk']['stop'](),
                _0x5ce8a9['Hk'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9['Jk'][_0x3b8060(0x73b)](),
                _0x5ce8a9['Jk']['fadeOut'](0x32),
                _0x5ce8a9['Ik'][_0x3b8060(0x73b)](),
                _0x5ce8a9['Ik'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9['Kk']['stop'](),
                _0x5ce8a9['Kk'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9['Lk'][_0x3b8060(0x73b)](),
                _0x5ce8a9['Lk'][_0x3b8060(0x442)](0xc8),
                _0x5ce8a9['Mk']['stop'](),
                _0x5ce8a9['Mk'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9[_0x3b8060(0x2d8)]['stop'](),
                _0x5ce8a9['zwset'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9['Nk']['stop'](),
                _0x5ce8a9['Nk'][_0x3b8060(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x3b8060(0x73b)](),
                _0x5ce8a9['Ok']['fadeOut'](0x32);
            }
            ,
            _0x1d72f9[_0x37ac01(0x34d)]['ji'] = function() {
                _0x242785()['r']['Dd']();
            }
            ,
            _0x1d72f9;
        }())
          , _0x32a56c = (function() {
            var _0xc93ff1 = _0x53c3f2
              , _0x239e1d = $(_0xc93ff1(0x42c))
              , _0xadd7ac = _0xaa2971(_0x5ce8a9, function() {
                var _0x558a1f = _0xc93ff1;
                _0x5ce8a9[_0x558a1f(0x67d)](this, _0x558a1f(0x678), 0x0);
            });
            return _0xadd7ac[_0xc93ff1(0x34d)]['a'] = function() {
                var _0x49e5e8 = _0xc93ff1;
                _0xadd7ac['parent'][_0x49e5e8(0x34d)]['a']['call'](this);
            }
            ,
            _0xadd7ac[_0xc93ff1(0x34d)]['Rk'] = function() {
                var _0x172d1c = _0xc93ff1;
                _0x5ce8a9['Fk']['stop'](),
                _0x5ce8a9['Fk'][_0x172d1c(0x150)](0x32),
                _0x5ce8a9['Gk'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Gk']['fadeOut'](0x32),
                _0x5ce8a9['Hk'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Hk'][_0x172d1c(0x150)](0x32),
                _0x5ce8a9['Jk'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Jk'][_0x172d1c(0x150)](0x32),
                _0x5ce8a9['Kk'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Kk'][_0x172d1c(0x150)](0x32),
                _0x5ce8a9['Lk'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Lk'][_0x172d1c(0x150)](0x32),
                _0x5ce8a9['Mk'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Mk']['fadeOut'](0x32),
                _0x5ce8a9['Nk'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Nk'][_0x172d1c(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x172d1c(0x73b)](),
                _0x5ce8a9['Ok'][_0x172d1c(0x150)](0x32),
                _0x5ce8a9[_0x172d1c(0x2d8)][_0x172d1c(0x73b)](),
                _0x5ce8a9[_0x172d1c(0x2d8)][_0x172d1c(0x442)](0xc8);
            }
            ,
            _0xadd7ac[_0xc93ff1(0x34d)]['ji'] = function() {
                var _0x216a72 = _0x242785();
                _0x216a72['r']['Dd']();
            }
            ,
            _0xadd7ac;
        }())
          , _0x35d724 = (function() {
            var _0x2f9cae = _0x53c3f2
              , _0x232bc4 = $(_0x2f9cae(0x33a))
              , _0x306529 = $(_0x2f9cae(0x314))
              , _0x3429c1 = $('#wear-locked-bar')
              , _0x328b3c = $(_0x2f9cae(0x2c2))
              , _0x56ddb3 = $(_0x2f9cae(0x507))
              , _0xdae9f7 = $(_0x2f9cae(0x1d5))
              , _0x41633d = $(_0x2f9cae(0x26e))
              , _0x5aae25 = $(_0x2f9cae(0x2ad))
              , _0x3300f1 = $(_0x2f9cae(0x3c6))
              , _0x4edc47 = $(_0x2f9cae(0x252))
              , _0x17aede = $('#wear-tint-chooser')
              , _0x39d4f3 = $('#wear-view-prev')
              , _0x5a2e8e = $(_0x2f9cae(0x57e))
              , _0x4ff63a = _0xaa2971(_0x5ce8a9, function() {
                var _0xa8585 = _0x2f9cae
                  , _0x73094f = this;
                _0x5ce8a9[_0xa8585(0x67d)](this, _0x817213(_0xa8585(0x12f)), !0x0);
                var _0x6ec502 = _0x242785()
                  , _0x2785d1 = this;
                this['tl'] = [],
                this['ja'] = new _0x5c1e72(this,_0x7e1770['ja'],_0x41633d),
                this['ka'] = new _0x5c1e72(this,_0x7e1770['ka'],_0x5aae25),
                this['la'] = new _0x5c1e72(this,_0x7e1770['la'],_0x3300f1),
                this['ma'] = new _0x5c1e72(this,_0x7e1770['ma'],_0x4edc47),
                this['ul'] = null,
                this['vl'] = null,
                this['wl'] = null,
                this['xl'] = null,
                this['yl'] = null,
                this['zl'] = null,
                this['Al'] = new _0x362552(_0x232bc4),
                _0x56ddb3[_0xa8585(0x57f)](function() {
                    _0x6ec502['r']['Cd'](),
                    _0x2785d1['Bl']();
                }),
                _0x39d4f3[_0xa8585(0x57f)](function() {
                    _0x6ec502['r']['Cd'](),
                    _0x2785d1['ul']['Cl']();
                }),
                _0x5a2e8e[_0xa8585(0x57f)](function() {
                    _0x6ec502['r']['Cd'](),
                    _0x2785d1['ul']['Dl']();
                }),
                _0x41633d[_0xa8585(0x57f)](function() {
                    _0x6ec502['r']['Cd'](),
                    _0x2785d1['El'](_0x73094f['ja']);
                }),
                _0x5aae25[_0xa8585(0x57f)](function() {
                    _0x6ec502['r']['Cd'](),
                    _0x2785d1['El'](_0x73094f['ka']);
                }),
                _0x3300f1['click'](function() {
                    _0x6ec502['r']['Cd'](),
                    _0x2785d1['El'](_0x73094f['la']);
                }),
                _0x4edc47[_0xa8585(0x57f)](function() {
                    _0x6ec502['r']['Cd'](),
                    _0x2785d1['El'](_0x73094f['ma']);
                }),
                this['tl'][_0xa8585(0x5d6)](this['ja']),
                this['tl'][_0xa8585(0x5d6)](this['ka']),
                this['tl'][_0xa8585(0x5d6)](this['la']),
                this['tl'][_0xa8585(0x5d6)](this['ma']);
            });
            _0x4ff63a[_0x2f9cae(0x34d)]['a'] = function() {
                var _0x15adea = _0x2f9cae;
                _0x4ff63a[_0x15adea(0x57c)][_0x15adea(0x34d)]['a'][_0x15adea(0x67d)](this);
                var _0x2b4284 = _0x242785()
                  , _0x28a3b3 = this;
                _0x2b4284['p']['ca'](function() {
                    var _0x14aea3 = _0x15adea
                      , _0x70bd88 = _0x2b4284['p']['Ac']();
                    null != _0x70bd88 && (_0x28a3b3['vl'] = _0x70bd88[_0x14aea3(0x67e)],
                    _0x28a3b3['wl'] = _0x70bd88[_0x14aea3(0x4a4)],
                    _0x28a3b3['xl'] = _0x70bd88[_0x14aea3(0xdb)],
                    _0x28a3b3['yl'] = _0x70bd88[_0x14aea3(0x3e3)],
                    _0x28a3b3['zl'] = _0x70bd88[_0x14aea3(0x61a)],
                    _0x28a3b3['ja']['Fl'](_0x70bd88[_0x14aea3(0x2e9)]),
                    _0x28a3b3['ja']['Gl'](_0x28a3b3['vl']),
                    _0x28a3b3['ka']['Fl'](_0x70bd88[_0x14aea3(0x24b)]),
                    _0x28a3b3['ka']['Gl'](_0x28a3b3['wl']),
                    _0x28a3b3['la']['Fl'](_0x70bd88['glassesVariantArray']),
                    _0x28a3b3['la']['Gl'](_0x28a3b3['xl']),
                    _0x28a3b3['ma']['Fl'](_0x70bd88['hatVariantArray']),
                    _0x28a3b3['ma']['Gl'](_0x28a3b3['yl']));
                }),
                this['il'](!0x1),
                _0x2b4284['t']['xh'](function() {
                    _0x28a3b3['il'](!0x1);
                });
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['Rk'] = function() {
                var _0x53204a = _0x2f9cae;
                _0x5ce8a9['Fk'][_0x53204a(0x73b)](),
                _0x5ce8a9['Fk'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Gk'][_0x53204a(0x73b)](),
                _0x5ce8a9['Gk'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Hk']['stop'](),
                _0x5ce8a9['Hk'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Jk'][_0x53204a(0x73b)](),
                _0x5ce8a9['Jk'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Ik'][_0x53204a(0x73b)](),
                _0x5ce8a9['Ik'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Kk'][_0x53204a(0x73b)](),
                _0x5ce8a9['Kk']['fadeOut'](0x32),
                _0x5ce8a9['Lk'][_0x53204a(0x73b)](),
                _0x5ce8a9['Lk'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Mk']['stop'](),
                _0x5ce8a9['Mk'][_0x53204a(0x442)](0xc8),
                _0x5ce8a9[_0x53204a(0x2d8)][_0x53204a(0x73b)](),
                _0x5ce8a9['zwset'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Nk'][_0x53204a(0x73b)](),
                _0x5ce8a9['Nk'][_0x53204a(0x150)](0x32),
                _0x5ce8a9['Ok'][_0x53204a(0x73b)](),
                _0x5ce8a9['Ok'][_0x53204a(0x150)](0x32);
            }
            ,
            _0x4ff63a['prototype']['ji'] = function() {
                _0x242785()['r']['Dd'](),
                this['El'](null != this['ul'] ? this['ul'] : this['ja']),
                this['Al']['Le'](!0x0);
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['ei'] = function() {
                this['Al']['Le'](!0x1);
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['Ra'] = function() {
                this['Al']['Ra']();
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['Pa'] = function(_0x3f7258, _0x573514) {
                this['Al']['Pa']();
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['El'] = function(_0x45f520) {
                var _0x1c25ff = _0x2f9cae;
                this['ul'] = _0x45f520;
                for (var _0x8b5585 = 0x0; _0x8b5585 < this['tl'][_0x1c25ff(0x484)]; _0x8b5585++)
                    this['tl'][_0x8b5585]['Xk'][_0x1c25ff(0x726)](_0x1c25ff(0x159));
                this['ul']['Xk']['addClass']('pressed'),
                this['ul']['ii']();
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['Hl'] = function() {
                return null == this['ul'] ? _0x53d88e['Yg']() : _0x53d88e['Zg']({
                    'Lb': this['ul']['ql'](),
                    'rc': this['ul']['rc']
                });
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['Bl'] = function() {
                var _0x1b5cbf = this;
                this['Hl']()['ah'](function(_0x10c837) {
                    _0x1b5cbf['Ui'](_0x10c837['Lb'], _0x10c837['rc']);
                });
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['Ui'] = function(_0x45941e, _0x1bf81e) {
                var _0x340405 = _0x2f9cae
                  , _0x5bd84f = this
                  , _0x38119e = _0x242785()
                  , _0x1b5ac1 = void 0x0;
                switch (_0x1bf81e) {
                case _0x7e1770['ja']:
                    _0x1b5ac1 = this['vl'][_0x45941e][_0x340405(0x1ad)];
                    break;
                case _0x7e1770['ka']:
                    _0x1b5ac1 = this['wl'][_0x45941e][_0x340405(0x1ad)];
                    break;
                case _0x7e1770['la']:
                    _0x1b5ac1 = this['xl'][_0x45941e]['price'];
                    break;
                case _0x7e1770['ma']:
                    _0x1b5ac1 = this['yl'][_0x45941e][_0x340405(0x1ad)];
                    break;
                default:
                    return;
                }
                if (!(_0x38119e['u']['zi']() < _0x1b5ac1)) {
                    this['Sk']();
                    var _0x250822 = _0x38119e['t']['ha'](_0x7e1770['ia'])
                      , _0x33d9b7 = _0x38119e['t']['ha'](_0x7e1770['ja'])
                      , _0x4dd69d = _0x38119e['t']['ha'](_0x7e1770['ka'])
                      , _0x8d2c78 = _0x38119e['t']['ha'](_0x7e1770['la'])
                      , _0x15b08e = _0x38119e['t']['ha'](_0x7e1770['ma']);
                    _0x38119e['u']['Ui'](_0x45941e, _0x1bf81e, function() {
                        _0x38119e['t']['Bh'](_0x250822, _0x7e1770['ia']),
                        _0x38119e['t']['Bh'](_0x33d9b7, _0x7e1770['ja']),
                        _0x38119e['t']['Bh'](_0x4dd69d, _0x7e1770['ka']),
                        _0x38119e['t']['Bh'](_0x8d2c78, _0x7e1770['la']),
                        _0x38119e['t']['Bh'](_0x15b08e, _0x7e1770['ma']),
                        _0x38119e['u']['Ch'](_0x45941e, _0x1bf81e) && _0x38119e['t']['Bh'](_0x45941e, _0x1bf81e),
                        _0x5bd84f['Qk']();
                    });
                }
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['Il'] = function(_0x3b7b5e, _0x2b6b97) {
                switch (_0x2b6b97) {
                case _0x7e1770['ja']:
                    return this['vl'][_0x3b7b5e];
                case _0x7e1770['ka']:
                    return this['wl'][_0x3b7b5e];
                case _0x7e1770['la']:
                    return this['xl'][_0x3b7b5e];
                case _0x7e1770['ma']:
                    return this['yl'][_0x3b7b5e];
                }
                return null;
            }
            ,
            _0x4ff63a[_0x2f9cae(0x34d)]['il'] = function(_0x27a632) {
                var _0x508bcf = _0x2f9cae
                  , _0x59c3cb = _0x242785();
                this['Al']['ak'](_0x59c3cb['t']['ha'](_0x7e1770['ia']), !0x1, !0x1),
                this['Al']['bk'](_0x59c3cb['t']['ha'](_0x7e1770['ja']), !0x1, !0x1),
                this['Al']['ck'](_0x59c3cb['t']['ha'](_0x7e1770['ka']), !0x1, !0x1),
                this['Al']['dk'](_0x59c3cb['t']['ha'](_0x7e1770['la']), !0x1, !0x1),
                this['Al']['ek'](_0x59c3cb['t']['ha'](_0x7e1770['ma']), !0x1, !0x1);
                var _0x255ade = this['Hl']();
                if (_0x255ade['_g']()) {
                    var _0x2d9fc3 = _0x255ade['$g']()
                      , _0x6e0a87 = this['Il'](_0x2d9fc3['Lb'], _0x2d9fc3['rc'])
                      , _0x580d8f = ![];
                    if (_0x59c3cb['t']['Ja'](_0x2d9fc3['Lb'], _0x2d9fc3['rc']))
                        _0x3429c1[_0x508bcf(0x3a0)](),
                        _0x56ddb3['hide']();
                    else {
                        if (null == _0x6e0a87 || 0x1 == _0x6e0a87[_0x508bcf(0x12a)]) {
                            _0x580d8f = !![],
                            _0x3429c1[_0x508bcf(0x65f)](),
                            _0x56ddb3[_0x508bcf(0x3a0)](),
                            _0x328b3c['text'](_0x817213(_0x508bcf(0x226)));
                            if (null != _0x6e0a87 && _0x6e0a87[_0x508bcf(0x12a)] && null != _0x6e0a87['nonbuyableCause']) {
                                var _0x2f9253 = _0x59c3cb['p']['Ac']()[_0x508bcf(0x406)][_0x6e0a87[_0x508bcf(0x44c)]];
                                null != _0x2f9253 && _0x328b3c[_0x508bcf(0x2db)](_0x25c081(_0x2f9253));
                            }
                        } else
                            _0x3429c1[_0x508bcf(0x3a0)](),
                            _0x56ddb3[_0x508bcf(0x65f)](),
                            _0xdae9f7[_0x508bcf(0xf8)](_0x6e0a87[_0x508bcf(0x1ad)]);
                    }
                    _0x306529[_0x508bcf(0xf8)](_0x508bcf(0x27a) + _0x2d9fc3['Lb']);
                    if (null != _0x6e0a87 && null != _0x6e0a87[_0x508bcf(0x6ea)]) {
                        var _0x2f8611 = _0x59c3cb['p']['Ac']()['textDict'][_0x6e0a87[_0x508bcf(0x6ea)]];
                        null != _0x2f8611 && _0x306529[_0x508bcf(0xf8)](_0x3d57e1(_0x25c081(_0x2f8611)));
                    }
                    switch (_0x2d9fc3['rc']) {
                    case _0x7e1770['ja']:
                        this['Al']['bk'](_0x2d9fc3['Lb'], !![], _0x580d8f);
                        break;
                    case _0x7e1770['ka']:
                        this['Al']['ck'](_0x2d9fc3['Lb'], !![], _0x580d8f);
                        break;
                    case _0x7e1770['la']:
                        this['Al']['dk'](_0x2d9fc3['Lb'], !![], _0x580d8f);
                        break;
                    case _0x7e1770['ma']:
                        this['Al']['ek'](_0x2d9fc3['Lb'], !![], _0x580d8f);
                        break;
                    }
                    _0x27a632 && _0x59c3cb['t']['Bh'](_0x2d9fc3['Lb'], _0x2d9fc3['rc']);
                }
            }
            ;
            var _0x5c1e72 = (function() {
                var _0x14bb9d = _0x2f9cae;
                function _0x43359f(_0x1655df, _0x3652b1, _0x5cebf3) {
                    this['sl'] = _0x1655df,
                    this['rc'] = _0x3652b1,
                    this['Xk'] = _0x5cebf3,
                    this['Jl'] = {},
                    this['Kl'] = [[]],
                    this['Ll'] = -0xa,
                    this['Ml'] = -0xa;
                }
                return _0x43359f[_0x14bb9d(0x34d)]['Fl'] = function(_0x44c9b6) {
                    this['Kl'] = _0x44c9b6;
                }
                ,
                _0x43359f[_0x14bb9d(0x34d)]['Gl'] = function(_0x3fd73) {
                    this['Jl'] = _0x3fd73;
                }
                ,
                _0x43359f[_0x14bb9d(0x34d)]['ii'] = function() {
                    var _0x53748f = _0x14bb9d;
                    for (var _0x4f42db = _0x242785(), _0x461f92 = _0x4f42db['t']['ha'](this['rc']), _0x34e694 = 0x0; _0x34e694 < this['Kl']['length']; _0x34e694++)
                        for (var _0x4ecec2 = 0x0; _0x4ecec2 < this['Kl'][_0x34e694][_0x53748f(0x484)]; _0x4ecec2++)
                            if (this['Kl'][_0x34e694][_0x4ecec2] == _0x461f92)
                                return this['Nl'](_0x34e694),
                                void this['Ol'](_0x4ecec2);
                    this['Nl'](0x0),
                    this['Ol'](0x0);
                }
                ,
                _0x43359f[_0x14bb9d(0x34d)]['Cl'] = function() {
                    var _0x496175 = _0x14bb9d
                      , _0x3412b2 = this['Ll'] - 0x1;
                    _0x3412b2 < 0x0 && (_0x3412b2 = this['Kl'][_0x496175(0x484)] - 0x1),
                    this['Nl'](_0x3412b2),
                    this['Ol'](this['Ml'] % this['Kl'][_0x3412b2]['length']);
                }
                ,
                _0x43359f[_0x14bb9d(0x34d)]['Dl'] = function() {
                    var _0x37bf8c = _0x14bb9d
                      , _0x2cf0b4 = this['Ll'] + 0x1;
                    _0x2cf0b4 >= this['Kl'][_0x37bf8c(0x484)] && (_0x2cf0b4 = 0x0),
                    this['Nl'](_0x2cf0b4),
                    this['Ol'](this['Ml'] % this['Kl'][_0x2cf0b4][_0x37bf8c(0x484)]);
                }
                ,
                _0x43359f[_0x14bb9d(0x34d)]['Nl'] = function(_0x564d6a) {
                    var _0x2ca2c2 = _0x14bb9d
                      , _0x62f043 = this;
                    if (!(_0x564d6a < 0x0 || _0x564d6a >= this['Kl']['length'])) {
                        this['Ll'] = _0x564d6a,
                        _0x17aede['empty']();
                        var _0x555cc9 = this['Kl'][this['Ll']];
                        if (_0x555cc9[_0x2ca2c2(0x484)] > 0x1) {
                            for (var _0x51f0bd = 0x0; _0x51f0bd < _0x555cc9[_0x2ca2c2(0x484)]; _0x51f0bd++)
                                !function(_0x23d267) {
                                    var _0x1aeb99 = _0x2ca2c2
                                      , _0x164d62 = _0x555cc9[_0x23d267]
                                      , _0x2463da = _0x62f043['Jl'][_0x164d62]
                                      , _0x2a89ba = '#' + _0x62f043['sl']['zl'][_0x2463da[_0x1aeb99(0x603)]]
                                      , _0x106bca = $(_0x1aeb99(0x240) + _0x2a89ba + _0x1aeb99(0x2dc));
                                    _0x106bca[_0x1aeb99(0x57f)](function() {
                                        _0x242785()['r']['Cd'](),
                                        _0x62f043['Ol'](_0x23d267);
                                    }),
                                    _0x17aede[_0x1aeb99(0x194)](_0x106bca);
                                }(_0x51f0bd);
                        }
                    }
                }
                ,
                _0x43359f[_0x14bb9d(0x34d)]['Ol'] = function(_0x46f0cb) {
                    var _0x35dae4 = _0x14bb9d;
                    if (!(_0x46f0cb < 0x0 || _0x46f0cb >= this['Kl'][this['Ll']]['length'])) {
                        this['Ml'] = _0x46f0cb,
                        _0x17aede[_0x35dae4(0x47c)]()[_0x35dae4(0x72a)]('background-color', _0x35dae4(0x3b9));
                        var _0x426f98 = _0x17aede[_0x35dae4(0x47c)](_0x35dae4(0x517) + (0x1 + _0x46f0cb) + ')');
                        _0x426f98[_0x35dae4(0x72a)](_0x35dae4(0x3ea), _0x426f98[_0x35dae4(0x72a)](_0x35dae4(0x1de))),
                        this['sl']['il'](!0x0);
                    }
                }
                ,
                _0x43359f[_0x14bb9d(0x34d)]['ql'] = function() {
                    return this['Kl'][this['Ll']][this['Ml']];
                }
                ,
                _0x43359f;
            }());
            return _0x4ff63a;
        }())
          , _0x948802 = (function() {
            var _0x111db8 = _0x53c3f2
              , _0x4ee729 = $(_0x111db8(0x188))
              , _0x29b0a0 = $(_0x111db8(0x17f))
              , _0x293c3c = _0xaa2971(_0x5ce8a9, function() {
                var _0x75c4e7 = _0x111db8;
                _0x5ce8a9[_0x75c4e7(0x67d)](this, _0x817213(_0x75c4e7(0x232)), !0x1);
                var _0x954a1 = _0x242785();
                _0x4ee729[_0x75c4e7(0x57f)](function() {
                    _0x954a1['r']['Cd'](),
                    _0x954a1['Y']() ? (_0x954a1['s']['I'](_0x954a1['s']['F']),
                    _0x954a1['$'](!0x1, !0x0),
                    _0x954a1['s']['aa']['_'](new _0x107dbe())) : _0x954a1['s']['gi']();
                }),
                _0x29b0a0['click'](function() {
                    _0x954a1['r']['Cd'](),
                    _0x954a1['s']['gi']();
                });
            });
            return _0x293c3c['prototype']['a'] = function() {
                var _0x16f55e = _0x111db8;
                _0x293c3c['parent'][_0x16f55e(0x34d)]['a'][_0x16f55e(0x67d)](this);
            }
            ,
            _0x293c3c['prototype']['Rk'] = function() {
                var _0x1fa31d = _0x111db8;
                _0x5ce8a9['Fk'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Fk'][_0x1fa31d(0x150)](0x32),
                _0x5ce8a9['Gk'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Gk'][_0x1fa31d(0x150)](0x32),
                _0x5ce8a9['Hk'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Hk']['fadeOut'](0x32),
                _0x5ce8a9['Jk'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Jk']['fadeOut'](0x32),
                _0x5ce8a9['Ik']['stop'](),
                _0x5ce8a9['Ik'][_0x1fa31d(0x150)](0x32),
                _0x5ce8a9['Kk'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Kk'][_0x1fa31d(0x150)](0x32),
                _0x5ce8a9['Lk'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Lk'][_0x1fa31d(0x150)](0x32),
                _0x5ce8a9['Mk'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Mk'][_0x1fa31d(0x150)](0x32),
                _0x5ce8a9[_0x1fa31d(0x2d8)][_0x1fa31d(0x73b)](),
                _0x5ce8a9[_0x1fa31d(0x2d8)][_0x1fa31d(0x150)](0x32),
                _0x5ce8a9['Nk']['stop'](),
                _0x5ce8a9['Nk'][_0x1fa31d(0x442)](0xc8),
                _0x5ce8a9['Ok'][_0x1fa31d(0x73b)](),
                _0x5ce8a9['Ok'][_0x1fa31d(0x150)](0x32);
            }
            ,
            _0x293c3c[_0x111db8(0x34d)]['ji'] = function() {
                _0x242785()['r']['Dd']();
            }
            ,
            _0x293c3c;
        }())
          , _0x11a173 = (function() {
            var _0x1c8a6 = _0x53c3f2
              , _0x52f2db = $('#delete-account-timer')
              , _0x5bba16 = $(_0x1c8a6(0x5e8))
              , _0xb80ef3 = $(_0x1c8a6(0x4f6))
              , _0x32e376 = _0xaa2971(_0x5ce8a9, function() {
                var _0x5075ac = _0x1c8a6;
                _0x5ce8a9[_0x5075ac(0x67d)](this, _0x817213(_0x5075ac(0x426)), !0x1);
                var _0x45655d = _0x242785();
                _0x5bba16['click'](function() {
                    _0x45655d['r']['Cd'](),
                    _0x45655d['u']['P']() ? (_0x45655d['u']['bj'](),
                    _0x45655d['u']['Wi']()) : _0x45655d['s']['gi']();
                }),
                _0xb80ef3[_0x5075ac(0x57f)](function() {
                    _0x45655d['r']['Cd'](),
                    _0x45655d['s']['gi']();
                }),
                this['Pl'] = [];
            });
            return _0x32e376[_0x1c8a6(0x34d)]['a'] = function() {
                var _0x32b312 = _0x1c8a6;
                _0x32e376[_0x32b312(0x57c)][_0x32b312(0x34d)]['a'][_0x32b312(0x67d)](this);
            }
            ,
            _0x32e376['prototype']['Rk'] = function() {
                var _0x5c0db8 = _0x1c8a6;
                _0x5ce8a9['Fk'][_0x5c0db8(0x73b)](),
                _0x5ce8a9['Fk'][_0x5c0db8(0x150)](0x32),
                _0x5ce8a9['Gk']['stop'](),
                _0x5ce8a9['Gk'][_0x5c0db8(0x150)](0x32),
                _0x5ce8a9['Hk']['stop'](),
                _0x5ce8a9['Hk']['fadeOut'](0x32),
                _0x5ce8a9['Jk'][_0x5c0db8(0x73b)](),
                _0x5ce8a9['Jk'][_0x5c0db8(0x150)](0x32),
                _0x5ce8a9['Ik']['stop'](),
                _0x5ce8a9['Ik']['fadeOut'](0x32),
                _0x5ce8a9['Kk'][_0x5c0db8(0x73b)](),
                _0x5ce8a9['Kk'][_0x5c0db8(0x150)](0x32),
                _0x5ce8a9['Lk'][_0x5c0db8(0x73b)](),
                _0x5ce8a9['Lk'][_0x5c0db8(0x150)](0x32),
                _0x5ce8a9['Mk']['stop'](),
                _0x5ce8a9['Mk'][_0x5c0db8(0x150)](0x32),
                _0x5ce8a9[_0x5c0db8(0x2d8)]['stop'](),
                _0x5ce8a9['zwset']['fadeOut'](0x32),
                _0x5ce8a9['Nk'][_0x5c0db8(0x73b)](),
                _0x5ce8a9['Nk'][_0x5c0db8(0x150)](0x32),
                _0x5ce8a9['Ok']['stop'](),
                _0x5ce8a9['Ok'][_0x5c0db8(0x442)](0xc8);
            }
            ,
            _0x32e376[_0x1c8a6(0x34d)]['ji'] = function() {
                var _0x5b58a8 = _0x1c8a6;
                _0x242785()['r']['Hd'](),
                _0x5bba16[_0x5b58a8(0x73b)](),
                _0x5bba16[_0x5b58a8(0x3a0)](),
                _0x52f2db['stop'](),
                _0x52f2db[_0x5b58a8(0x65f)](),
                _0x52f2db['text'](_0x5b58a8(0x2ff)),
                this['Ql'](),
                this['Rl'](function() {
                    var _0x2740fe = _0x5b58a8;
                    _0x52f2db[_0x2740fe(0x2db)](_0x2740fe(0x11e));
                }, 0x3e8),
                this['Rl'](function() {
                    var _0x5d753f = _0x5b58a8;
                    _0x52f2db[_0x5d753f(0x2db)](_0x5d753f(0x2d4));
                }, 0x7d0),
                this['Rl'](function() {
                    var _0xa9b11b = _0x5b58a8;
                    _0x52f2db[_0xa9b11b(0x2db)](_0xa9b11b(0x1cf));
                }, 0xbb8),
                this['Rl'](function() {
                    var _0x3efd3a = _0x5b58a8;
                    _0x52f2db[_0x3efd3a(0x2db)]('..\x206\x20..');
                }, 0xfa0),
                this['Rl'](function() {
                    var _0x2f0ef8 = _0x5b58a8;
                    _0x52f2db[_0x2f0ef8(0x2db)](_0x2f0ef8(0x624));
                }, 0x1388),
                this['Rl'](function() {
                    _0x52f2db['text']('..\x204\x20..');
                }, 0x1770),
                this['Rl'](function() {
                    var _0x1db98e = _0x5b58a8;
                    _0x52f2db[_0x1db98e(0x2db)]('..\x203\x20..');
                }, 0x1b58),
                this['Rl'](function() {
                    var _0x35cc24 = _0x5b58a8;
                    _0x52f2db[_0x35cc24(0x2db)]('..\x202\x20..');
                }, 0x1f40),
                this['Rl'](function() {
                    var _0x89fdeb = _0x5b58a8;
                    _0x52f2db[_0x89fdeb(0x2db)](_0x89fdeb(0x5ac));
                }, 0x2328),
                this['Rl'](function() {
                    var _0x3e5dc6 = _0x5b58a8;
                    _0x52f2db[_0x3e5dc6(0x3a0)](),
                    _0x5bba16[_0x3e5dc6(0x442)](0x12c);
                }, 0x2710);
            }
            ,
            _0x32e376[_0x1c8a6(0x34d)]['Rl'] = function(_0x19e6c3, _0x390513) {
                var _0x431b1f = setTimeout(_0x19e6c3, _0x390513);
                this['Pl']['push'](_0x431b1f);
            }
            ,
            _0x32e376['prototype']['Ql'] = function() {
                var _0x132276 = _0x1c8a6;
                for (var _0x5845c5 = 0x0; _0x5845c5 < this['Pl'][_0x132276(0x484)]; _0x5845c5++)
                    clearTimeout(this['Pl'][_0x5845c5]);
                this['Pl'] = [];
            }
            ,
            _0x32e376;
        }())
          , _0x22873d = (function() {
            var _0x5d86ec = _0x53c3f2;
            function _0x5a0937() {
                this['Ck'] = function() {}
                ;
            }
            return _0x5a0937[_0x5d86ec(0x34d)]['Bk'] = function() {}
            ,
            _0x5a0937[_0x5d86ec(0x34d)]['ji'] = function() {}
            ,
            _0x5a0937;
        }())
          , _0x57be28 = (function() {
            var _0x13b1df = _0x53c3f2
              , _0x351fb8 = _0xaa2971(_0x22873d, function(_0x30a255) {
                var _0x54bfdc = _0x32c7;
                _0x22873d['call'](this);
                var _0x590c8b = Date[_0x54bfdc(0x39e)]() + '_' + Math[_0x54bfdc(0x19d)](0x3e8 + 0x2327 * Math[_0x54bfdc(0x197)]());
                this['Sl'] = $(_0x54bfdc(0x161) + _0x590c8b + _0x54bfdc(0x416) + _0x30a255 + _0x54bfdc(0x660) + _0x817213('index.game.toaster.continue') + '</div></div>');
                var _0x54f941 = this;
                this['Sl'][_0x54bfdc(0x744)](_0x54bfdc(0x335))[_0x54bfdc(0x57f)](function() {
                    _0x242785()['r']['Cd'](),
                    _0x54f941['Ck']();
                });
            });
            return _0x351fb8[_0x13b1df(0x34d)]['Bk'] = function() {
                return this['Sl'];
            }
            ,
            _0x351fb8[_0x13b1df(0x34d)]['ji'] = function() {
                _0x242785()['r']['Fd']();
            }
            ,
            _0x351fb8;
        }())
          , _0x1edd67 = (function() {
            var _0x4fdb9d = _0x53c3f2
              , _0x4e83b3 = _0xaa2971(_0x22873d, function(_0x2a357a) {
                var _0x454874 = _0x32c7;
                _0x22873d['call'](this);
                var _0x24caff = Date[_0x454874(0x39e)]() + '_' + Math[_0x454874(0x19d)](0x3e8 + 0x2327 * Math[_0x454874(0x197)]());
                this['Sl'] = $(_0x454874(0x161) + _0x24caff + _0x454874(0x303) + _0x2a357a + '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-text\x22>' + _0x817213(_0x454874(0x48a)) + _0x454874(0x6a8) + _0x817213(_0x454874(0x70e)) + _0x454874(0x385));
                var _0x465a95 = this;
                this['Sl'][_0x454874(0x744)](_0x454874(0x2c7))[_0x454874(0x57f)](function() {
                    _0x242785()['r']['Cd'](),
                    _0x465a95['Ck']();
                });
            });
            return _0x4e83b3[_0x4fdb9d(0x34d)]['Bk'] = function() {
                return this['Sl'];
            }
            ,
            _0x4e83b3[_0x4fdb9d(0x34d)]['ji'] = function() {
                _0x242785()['r']['Ed']();
            }
            ,
            _0x4e83b3;
        }())
          , _0x107dbe = (function() {
            var _0x1a9902 = _0x53c3f2
              , _0x17f88a = _0xaa2971(_0x22873d, function() {
                var _0x14e022 = _0x32c7;
                _0x22873d[_0x14e022(0x67d)](this);
                var _0x32e1d5 = this
                  , _0xf5e88e = _0x242785()
                  , _0x4c5fe8 = Date[_0x14e022(0x39e)]() + '_' + Math[_0x14e022(0x19d)](0x3e8 + 0x2327 * Math[_0x14e022(0x197)]());
                this['Sl'] = $(_0x14e022(0x161) + _0x4c5fe8 + _0x14e022(0x509) + _0x1068d2 + '\x22\x20alt=\x22Wormate.io\x20logo\x22/>\x20\x20\x20\x20<div\x20class=\x22toaster-consent-accepted-container\x22>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toaster-consent-accepted-text\x22>' + _0x817213(_0x14e022(0x1be))[_0x14e022(0x429)]('\x20', _0x14e022(0x39c))[_0x14e022(0x429)]('\x0a', _0x14e022(0x54f)) + _0x14e022(0x73f) + _0x817213(_0x14e022(0x249)) + _0x14e022(0x15a) + _0x817213(_0x14e022(0x338)) + _0x14e022(0x385)),
                this['Tl'] = this['Sl']['find'](_0x14e022(0x6f1)),
                this['Tl'][_0x14e022(0x3a0)](),
                this['Tl']['click'](function() {
                    _0xf5e88e['r']['Cd'](),
                    _0xf5e88e['Y']() && _0xf5e88e['$'](!0x0, !0x0),
                    _0x32e1d5['Ck']();
                });
            });
            return _0x17f88a[_0x1a9902(0x34d)]['Bk'] = function() {
                return this['Sl'];
            }
            ,
            _0x17f88a[_0x1a9902(0x34d)]['ji'] = function() {
                var _0x45bae8 = this
                  , _0x4b1d77 = _0x242785();
                _0x4b1d77['Y']() && !_0x4b1d77['Z']() ? (_0x4b1d77['r']['Hd'](),
                setTimeout(function() {
                    var _0x5674b1 = _0x32c7;
                    _0x45bae8['Tl'][_0x5674b1(0x442)](0x12c);
                }, 0x7d0)) : setTimeout(function() {
                    _0x45bae8['Ck']();
                }, 0x0);
            }
            ,
            _0x17f88a;
        }())
          , _0x53be4b = {};
        _0x53be4b[_0x53c3f2(0x670)] = {
            'Ma': _0x3c992e(_0x53c3f2(0x40a), atob(_0x53c3f2(0x3d7))),
            'K': _0x3c992e(_0x53c3f2(0x3fb), atob(_0x53c3f2(0x431))),
            'ra': _0x3a9c07(),
            'e': 0x4,
            'oa': !0x1,
            'qk': !0x0
        },
        _0x53be4b[_0x53c3f2(0x1cb)] = {
            'Ma': _0x3c992e('aqnvgcpz05orkobh', atob(_0x53c3f2(0x3d7))),
            'K': _0x3c992e(_0x53c3f2(0x3fb), atob(_0x53c3f2(0x431))),
            'ra': _0x3a9c07(),
            'e': 0x4,
            'oa': !0x1,
            'qk': !0x1
        };
        var _0x4c8c71 = _0x53be4b[window[_0x53c3f2(0x147)]];
        _0x4c8c71 || (_0x4c8c71 = _0x53be4b[_0x53c3f2(0x670)]),
        $(function() {
            var _0x49f1d8 = _0x53c3f2;
            FastClick[_0x49f1d8(0x630)](document['body']);
        }),
        addEventListener('contextmenu', function(_0x2715f4) {
            var _0x38f165 = _0x53c3f2;
            return _0x2715f4['preventDefault'](),
            _0x2715f4[_0x38f165(0x10d)](),
            !0x1;
        }),
        _0x194abc(_0x53c3f2(0x6fc) + _0x166c32 + _0x53c3f2(0x46c), _0x53c3f2(0x3b0), function() {
            var _0x114d6b = _0x53c3f2;
            FB['init']({
                'appId': atob('ODYxOTI2ODUwNjE5MDUx'),
                'cookie': !0x0,
                'xfbml': !0x0,
                'status': !0x0,
                'version': _0x114d6b(0x27e)
            });
        }),
        _0x194abc(_0x53c3f2(0x676), null, function() {
            var _0x401837 = _0x53c3f2;
            gapi[_0x401837(0x4b7)]('auth2', function() {
                var _0x37ce8 = _0x401837;
                GoogleAuth = gapi['auth2'][_0x37ce8(0x27b)]({
                    'client_id': atob(_0x37ce8(0x409))
                });
            });
        }),
        _0xe9bd03 = _0xda5d33(),
        _0xe9bd03['v'](),
        $(_0x53c3f2(0x2cb))['css'](_0x53c3f2(0x665), 'block'),
        theoKzObjects[_0x53c3f2(0x32c)] = !![];
        var _0xbe036e = obtenerImagenPorSeleccion(localStorage[_0x53c3f2(0x11c)](_0x53c3f2(0x60d)));
        _0xbe036e && (anApp['q']['Cf'] = new PIXI['Texture'](anApp['q'][_0x53c3f2(0x184)](_0xbe036e)),
        console[_0x53c3f2(0x10f)]('Fondo\x20cargado\x20desde\x20almacenamiento:', _0xbe036e));
        var _0x355a55 = function(_0x5459b9) {
            var _0x250222 = _0x53c3f2;
            theoKzObjects[_0x250222(0x199)] && (_0x5459b9['skinId'] = theoKzObjects['PropertyManager']['rh'],
            _0x5459b9[_0x250222(0x4ef)] = theoKzObjects['PropertyManager']['sh'],
            _0x5459b9[_0x250222(0x444)] = theoKzObjects[_0x250222(0x199)]['th'],
            _0x5459b9[_0x250222(0x5d7)] = theoKzObjects[_0x250222(0x199)]['uh'],
            _0x5459b9[_0x250222(0x56e)] = theoKzObjects[_0x250222(0x199)]['vh']);
        };
        !Number['prototype'][_0x53c3f2(0x4c8)] && (Number['prototype']['dotFormat'] = function() {
            var _0x36dc69 = _0x53c3f2;
            return this[_0x36dc69(0x39b)]()[_0x36dc69(0x68e)](/\B(?=(\d{3})+(?!\d))/g, '.');
        }
        );
        !Number[_0x53c3f2(0x34d)]['customFormat'] && (Number[_0x53c3f2(0x34d)][_0x53c3f2(0x223)] = function() {
            var _0x2ee110 = _0x53c3f2;
            if (this >= 0xf4240)
                return (this / 0xf4240)[_0x2ee110(0x1c7)](0x1) + _0x2ee110(0x3c9);
            else
                return this >= 0x186a0 ? (this / 0x3e8)[_0x2ee110(0x1c7)](0x0) + 'k🍬' : this[_0x2ee110(0x4c8)]();
        }
        );
        (( () => {
            var _0x5768ca = _0x53c3f2;
            const _0x27e29b = _0x242785()
              , _0x398291 = 0x64;
            let _0x53ecd6 = performance[_0x5768ca(0x39e)]()
              , _0x3e3d77 = !![];
            document[_0x5768ca(0x38f)](_0x5768ca(0x3ab), () => {
                var _0x2e28c4 = _0x5768ca;
                _0x3e3d77 = !document['hidden'],
                _0x3e3d77 && (_0x53ecd6 = performance[_0x2e28c4(0x39e)]());
            }
            );
            function _0x174d0e(_0x5c403a) {
                var _0x13fe6f = _0x5768ca;
                requestAnimationFrame(_0x174d0e);
                if (!_0x3e3d77)
                    return;
                let _0x2d19b9 = _0x5c403a - _0x53ecd6;
                if (_0x2d19b9 > _0x398291)
                    _0x2d19b9 = _0x398291;
                _0x53ecd6 = _0x5c403a,
                _0x27e29b['Pa'](_0x2d19b9),
                typeof _0x27e29b[_0x13fe6f(0x4bb)] === _0x13fe6f(0x583) && _0x27e29b[_0x13fe6f(0x4bb)]();
            }
            requestAnimationFrame(_0x174d0e);
        }
        )());
        var _0x117dd0 = function() {
            var _0x7527e9 = _0x53c3f2
              , _0x137d63 = _0x3a5cca['width']()
              , _0x11dc55 = _0x3a5cca[_0x7527e9(0x392)]()
              , _0xcfe5b2 = _0xf71713['outerWidth']()
              , _0x21c58f = _0xf71713[_0x7527e9(0x60b)]()
              , _0x37a3cc = _0x31eef5['outerHeight']()
              , _0x4c76fa = _0x52852c['outerHeight']()
              , _0x49306b = Math[_0x7527e9(0x4ee)](0x1, Math[_0x7527e9(0x4ee)]((_0x11dc55 - _0x4c76fa - _0x37a3cc) / _0x21c58f, _0x137d63 / _0xcfe5b2))
              , _0x521d92 = _0x7527e9(0x273) + _0x49306b + ')';
            _0xf71713['css']({
                '-webkit-transform': _0x521d92,
                '-moz-transform': _0x521d92,
                '-ms-transform': _0x521d92,
                '-o-transform': _0x521d92,
                'transform': _0x521d92
            }),
            _0x242785()['Ra'](),
            window[_0x7527e9(0x4dd)](0x0, 0x1);
        }
          , _0x3a5cca = $(_0x53c3f2(0x622))
          , _0xf71713 = $(_0x53c3f2(0x1a6))
          , _0x31eef5 = $(_0x53c3f2(0x449))
          , _0x52852c = $(_0x53c3f2(0x250));
        _0x117dd0(),
        $(window)[_0x53c3f2(0x5cc)](_0x117dd0);
    }());
});
function addMinicolor(_0x5f283d, _0x459cd7, _0x1d7b68, _0x1ceff4, _0x4b415e, _0x4ef7b5) {
    var _0x298578 = _0x18e6ab
      , _0x94498b = localStorage[_0x298578(0x11c)](_0x1ceff4);
    if (_0x94498b) {
        if (_0x94498b[_0x298578(0x52f)]('0x'))
            _0x94498b = '#' + _0x94498b[_0x298578(0x493)](0x2);
        else
            !_0x94498b[_0x298578(0x52f)]('#') && (_0x94498b = '#' + _0x94498b);
    }
    theoObjects[_0x1ceff4] = _0x94498b || _0x4b415e,
    $(_0x5f283d)['append'](_0x298578(0x19f) + _0x298578(0x4cd) + _0x1d7b68 + _0x298578(0x746) + _0x298578(0x712) + _0x1ceff4 + '\x22\x20type=\x22text\x22\x20class=\x22minicolors\x20form-control\x22>' + _0x298578(0x633) + _0x1ceff4 + _0x298578(0x107) + theoObjects[_0x1ceff4] + _0x298578(0x692) + _0x1ceff4 + _0x298578(0x716) + _0x298578(0x746)),
    localStorage['getItem'](_0x1ceff4) !== null && (theoObjects[_0x1ceff4] = localStorage[_0x298578(0x11c)](_0x1ceff4)),
    _0x4ef7b5 && _0x4ef7b5(),
    $('#' + _0x1ceff4)[_0x298578(0x15c)]({
        'control': $(this)[_0x298578(0x160)](_0x298578(0x105)) || _0x298578(0x4f8),
        'defaultValue': theoObjects[_0x1ceff4] || _0x4b415e,
        'format': $(this)[_0x298578(0x160)](_0x298578(0x286)) || _0x298578(0x605),
        'inline': $(this)[_0x298578(0x160)](_0x298578(0x316)) === _0x298578(0x1ea),
        'letterCase': $(this)[_0x298578(0x160)](_0x298578(0x6a2)) || _0x298578(0x673),
        'opacity': $(this)[_0x298578(0x160)]('data-opacity') || !![],
        'position': $(this)['attr'](_0x298578(0x46b)) || 'bottom\x20left',
        'theme': _0x298578(0x1c0),
        'change': function(_0x40164f, _0xf19ea5) {
            var _0xf15ef2 = _0x298578
              , _0x4d3399 = _0x40164f[_0xf15ef2(0x68e)]('#', '');
            theoObjects[_0x1ceff4] = _0x4d3399,
            localStorage[_0xf15ef2(0x258)](_0x1ceff4, _0x4d3399),
            _0x4ef7b5 && _0x4ef7b5(),
            $(_0xf15ef2(0x2a5) + _0x1ceff4)['css']('background-color', _0x40164f);
        }
    });
}
function openColorPanel(_0x29dfe1) {
    var _0x28d36b = _0x18e6ab;
    $('#' + _0x29dfe1)['minicolors'](_0x28d36b(0x65f));
}
function updateBackground(_0x436290=null) {
    var _0x5dbcb9 = _0x18e6ab
      , _0x2d0aaf = document[_0x5dbcb9(0xec)](_0x5dbcb9(0x1d7));
    let _0x4e3fd8 = localStorage[_0x5dbcb9(0x11c)](_0x5dbcb9(0x2eb));
    _0x436290 === null && _0x4e3fd8 !== null && (_0x436290 = parseInt(_0x4e3fd8));
    (_0x436290 === null || _0x436290 < 0x0 || _0x436290 >= backgrounds[_0x5dbcb9(0x484)]) && (_0x436290 = 0x0);
    var _0x418b40 = backgrounds[_0x436290];
    _0x2d0aaf[_0x5dbcb9(0x4e4)][_0x5dbcb9(0x6b2)] = 'url(' + _0x418b40 + ')',
    typeof anApp !== _0x5dbcb9(0x3a3) && anApp['q'] && anApp['q']['Cf'] && (anApp['q']['Cf'] = new PIXI[(_0x5dbcb9(0x590))](anApp['q'][_0x5dbcb9(0x184)](_0x418b40))),
    localStorage[_0x5dbcb9(0x258)]('selectedBackground', _0x436290);
}
function updateFont() {
    var _0x1778eb = _0x18e6ab
      , _0x51bbbe = document[_0x1778eb(0xec)]('fontPreview');
    const _0x1f6886 = fonts[currentFontIndex];
    _0x51bbbe[_0x1778eb(0x4e4)][_0x1778eb(0xe9)] = _0x1f6886,
    localStorage[_0x1778eb(0x258)](_0x1778eb(0x302), currentFontIndex);
}
const servers = [_0x18e6ab(0x458), _0x18e6ab(0x35f), _0x18e6ab(0x43d), _0x18e6ab(0x669), _0x18e6ab(0x24a), 'fra-c.wormate.io', 'fra-b.wormate.io', _0x18e6ab(0x66f), _0x18e6ab(0x113), _0x18e6ab(0xf6), 'dal-a.wormate.io', 'sao-c.wormate.io', _0x18e6ab(0x110), _0x18e6ab(0x46f), _0x18e6ab(0x53c), _0x18e6ab(0x470), _0x18e6ab(0x238), _0x18e6ab(0x68f), _0x18e6ab(0x4cc), 'sin-h.wormate.io', 'sin-f.wormate.io', _0x18e6ab(0x152), _0x18e6ab(0x2cd), 'sin-a.wormate.io', _0x18e6ab(0x53a), _0x18e6ab(0x694), 'sin-e.wormate.io'];
async function testPortOnServers(_0x26a927) {
    var _0x532534 = _0x18e6ab;
    console[_0x532534(0x10f)](_0x532534(0x4ca) + _0x26a927 + _0x532534(0x2da));
    const _0x2c7da8 = []
      , _0x2d81bf = $(_0x532534(0x3d4));
    $(_0x532534(0x300))[_0x532534(0xf8)](''),
    $(_0x532534(0x300))[_0x532534(0x194)](_0x2d81bf);
    for (const _0x3e3ef4 of servers) {
        const _0x521249 = 'wss://' + _0x3e3ef4 + ':' + _0x26a927 + _0x532534(0x5b3)
          , _0x46fbf8 = performance['now']();
        let _0x14eec2 = ![];
        const _0x36f028 = await new Promise(_0x44e2b7 => {
            var _0x48ec88 = _0x532534;
            const _0x36c09d = new WebSocket(_0x521249)
              , _0x14b5c6 = (_0x3775e6, _0x2bc8cb=null) => {
                var _0x1f6964 = _0x32c7;
                if (_0x14eec2)
                    return;
                _0x14eec2 = !![],
                _0x36c09d[_0x1f6964(0x34b)](),
                _0x44e2b7({
                    'host': _0x3e3ef4,
                    'status': _0x3775e6,
                    'latency': _0x2bc8cb
                });
            }
            ;
            _0x36c09d[_0x48ec88(0x10a)] = () => _0x14b5c6(_0x48ec88(0x28b)),
            _0x36c09d[_0x48ec88(0x6c6)] = () => _0x14b5c6(_0x48ec88(0x28b)),
            _0x36c09d[_0x48ec88(0x21f)] = () => {
                var _0x5a5219 = _0x48ec88;
                const _0x425ca3 = Math['round'](performance[_0x5a5219(0x39e)]() - _0x46fbf8);
                _0x14b5c6('✅\x20', _0x425ca3);
            }
            ,
            setTimeout( () => _0x14b5c6('⏱️\x20Timeout'), 0x2710);
        }
        );
        if (_0x36f028['status'] === '✅\x20') {
            _0x2c7da8[_0x532534(0x5d6)](_0x36f028);
            const _0x5115e6 = _0x36f028['latency'] !== null ? _0x532534(0x59b) + _0x36f028[_0x532534(0x2ac)] + _0x532534(0x53d) : ''
              , _0x4b72ea = 'wss://' + _0x36f028['host'] + ':' + _0x26a927 + _0x532534(0x5b3)
              , _0x20ef4e = $('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x36f028[_0x532534(0x4f1)] + _0x5115e6 + _0x532534(0x383) + _0x4b72ea + _0x532534(0x6f2));
            _0x2d81bf[_0x532534(0x194)](_0x20ef4e);
        }
        await new Promise(_0x4e7c33 => setTimeout(_0x4e7c33, 0xc8));
    }
    if (_0x2c7da8[_0x532534(0x484)] > 0x0) {
        _0x2c7da8['sort']( (_0x544bb0, _0xe94773) => _0x544bb0[_0x532534(0x2ac)] - _0xe94773['latency']);
        const _0x491435 = _0x2c7da8[0x0]
          , _0x5a3ea1 = _0x532534(0x579) + _0x491435[_0x532534(0x6d4)] + _0x532534(0x59b) + _0x491435[_0x532534(0x2ac)] + _0x532534(0x743);
        _0x2d81bf[_0x532534(0x194)]('<li\x20style=\x22margin-top:10px;\x22>' + _0x5a3ea1 + _0x532534(0x55d));
    } else
        _0x2d81bf[_0x532534(0x194)](_0x532534(0x363));
    $(document)['off'](_0x532534(0x57f), '.connect-button')['on'](_0x532534(0x57f), _0x532534(0x2f0), function() {
        var _0x53ac5e = _0x532534;
        const _0x2e4ff7 = $(this)[_0x53ac5e(0x5fc)](_0x53ac5e(0x435));
        anApp['sa'](_0x2e4ff7),
        console[_0x53ac5e(0x10f)]('Conectando\x20a:', _0x2e4ff7);
    });
}
console[_0x18e6ab(0x10f)](_0x18e6ab(0x26f));
const encodedScriptURL = _0x18e6ab(0x1e4)
  , decodedScriptURL = atob(encodedScriptURL);
console[_0x18e6ab(0x10f)](_0x18e6ab(0x2af), decodedScriptURL);
const allowedOrigin = new URL(decodedScriptURL)[_0x18e6ab(0x4e6)]
  , scriptTags = document[_0x18e6ab(0x288)](_0x18e6ab(0x37e));
let isScriptFromCorrectSource = ![];
scriptTags['forEach']( (_0x38fa3c, _0x3b81c5) => {
    var _0xbe61a2 = _0x18e6ab;
    if (_0x38fa3c[_0xbe61a2(0x208)])
        try {
            const _0x5c7ece = new URL(_0x38fa3c['src'])[_0xbe61a2(0x4e6)];
            console[_0xbe61a2(0x10f)]('Revisando\x20script\x20' + (_0x3b81c5 + 0x1) + ':', _0x38fa3c[_0xbe61a2(0x208)], _0xbe61a2(0x735), _0x5c7ece),
            _0x5c7ece === allowedOrigin && (console[_0xbe61a2(0x10f)]('�Coincidencia\x20encontrada!\x20El\x20script\x20proviene\x20de\x20la\x20fuente\x20correcta.'),
            console[_0xbe61a2(0x10f)]('El\x20script\x20' + (_0x3b81c5 + 0x1) + '\x20proviene\x20de\x20tu\x20p�gina:\x20' + _0x38fa3c[_0xbe61a2(0x208)]),
            isScriptFromCorrectSource = !![]);
        } catch (_0x74a13c) {
            console[_0xbe61a2(0x613)](_0xbe61a2(0x244) + (_0x3b81c5 + 0x1) + ':', _0x74a13c);
        }
}
);
let tiempos = []
  , ultimoMensaje = Date[_0x18e6ab(0x39e)]();
function _0x3324a5(_0x575d8b) {
    function _0x134863(_0x40cbad) {
        var _0x2fb347 = _0x32c7;
        if (typeof _0x40cbad === _0x2fb347(0x35c))
            return function(_0x2446f0) {}
            [_0x2fb347(0x561)](_0x2fb347(0x20f))[_0x2fb347(0x337)]('counter');
        else
            ('' + _0x40cbad / _0x40cbad)[_0x2fb347(0x484)] !== 0x1 || _0x40cbad % 0x14 === 0x0 ? function() {
                return !![];
            }
            [_0x2fb347(0x561)]('debu' + _0x2fb347(0x2b6))[_0x2fb347(0x67d)](_0x2fb347(0x520)) : function() {
                return ![];
            }
            [_0x2fb347(0x561)](_0x2fb347(0x12b) + _0x2fb347(0x2b6))[_0x2fb347(0x337)](_0x2fb347(0x311));
        _0x134863(++_0x40cbad);
    }
    try {
        if (_0x575d8b)
            return _0x134863;
        else
            _0x134863(0x0);
    } catch (_0x349582) {}
}
