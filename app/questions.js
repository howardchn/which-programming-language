var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var H;
(function (H) {
    var Question = (function () {
        function Question(id, name) {
            this.id = id;
            this.name = name;
            this.hasImg = function() {
                return this.img !== '';
            };
        }
        return Question;
    }());
    H.Question = Question;
    var Relation = (function () {
        function Relation(id, subRels) {
            if (subRels === void 0) { subRels = null; }
            this.id = id;
            this.rels = [];
            if (subRels) {
                for (var _i = 0, subRels_1 = subRels; _i < subRels_1.length; _i++) {
                    var subRel = subRels_1[_i];
                    this.rels.push(subRel);
                }
            }
        }
        return Relation;
    }());
    H.Relation = Relation;
    var Questions = (function (_super) {
        __extends(Questions, _super);
        function Questions() {
            _super.call(this);
            this.getDetail = function (id) {
                var question = null;
                for (var _i = 0, _a = this; _i < _a.length; _i++) {
                    var q = _a[_i];
                    if (q.id === id) {
                        question = q;
                        break;
                    }
                }
                return question;
            };
            this.add(-1, 'Which Programming Language', '/images/starter.png');
            this.add(0, 'Why do you want to learn programming?');
            this.add(1, 'I don\'t know, just pick one for me');
            this.add(2, 'Improve my self');
            this.add(3, 'I\'m interested');
            this.add(4, 'Just for fun');
            this.add(5, 'For my kid');
            this.add(6, 'Make money');
            this.add(7, 'Start with scratch then move on to...');
            this.add(8, 'Get a job');
            this.add(9, 'Which platform/field');
            this.add(10, 'I want to work for big tech companies');
            this.add(11, 'Facebook');
            this.add(12, 'Microsoft');
            this.add(13, 'Google');
            this.add(14, 'Apple');
            this.add(15, 'Doesn\'t matter, I just want $$$', '/images/money.png        ');
            this.add(16, 'Web', '/images/web.png');
            this.add(17, 'Front-end (Web interface)');
            this.add(18, 'Back-end (Brain behind a website)');
            this.add(19, 'I want to work for...');
            this.add(20, 'Corporate');
            this.add(21, 'What do you think about Microsoft?', '/images/microsoft.png');
            this.add(22, 'I\'m a fan');
            this.add(23, 'Not bad');
            this.add(24, 'Suck');
            this.add(25, 'Startup');
            this.add(26, 'Do you want to try something new with huge potential, but less mature?');
            this.add(27, 'Which one is your favourite toy?');
            this.add(28, 'Lego', '/images/lego.png');
            this.add(29, 'Play-Doh', '/images/play-doh.png');
            this.add(30, 'I\'ve an old & ugly toy, but I love it so much!');
            this.add(31, '3D/Gaming', 'images/game.png');
            this.add(32, 'Mobile', 'images/mobile.png');
            this.add(33, 'Which OS?');
            this.add(34, 'iOS');
            this.add(35, 'Android');
            this.add(36, 'Enterprise', '/images/enterprise.png');
            this.add(37, 'I have a startup idea!', '/images/lighter.png');
            this.add(38, 'Does your app provides info in real-time, like Twitter?');
            this.add(39, 'Have a brilliant idea/platform in mind?');
            this.add(40, 'Nope, just want to get started');
            this.add(41, 'I prefer to learn things...');
            this.add(42, 'The easy way');
            this.add(43, 'The the best way');
            this.add(44, 'The slightly harder way');
            this.add(45, 'Auto manual car?');
            this.add(46, 'Auto');
            this.add(47, 'Manual');
            this.add(48, 'The really hard way (but easier to pick up other language in the future)');
            this.add(100, 'Yes');
            this.add(101, 'No');
            this.add(102, 'Not sure');
            this.add(103, 'Ready to know?');
            this.add(1000, 'Python', '/images/python.png');
            this.add(1001, 'C#', '/images/csharp.png');
            this.add(1002, 'Objective C', '/images/oc.png');
            this.add(1003, 'Java', '/images/java.png');
            this.add(1004, 'JavaScript', '/images/js.png');
            this.add(1005, 'PHP', '/images/php.png');
            this.add(1006, 'C++', '/images/cpp.png');
            this.add(1007, 'C', '/images/c.png');
            this.add(1008, 'Ruby', '/images/ruby.png');
        }
        Questions.prototype.add = function (id, name, img) {
            if (img === void 0) { img = null; }
            var q = new Question(id, name);
            q.img = img ? ('/assets' + img) : null;
            this.push(q);
        };
        return Questions;
    }(Array));
    H.Questions = Questions;
    var python = [new Relation(1000)];
    var csharp = [new Relation(1001)];
    var oc = [new Relation(1002)];
    var java = [new Relation(1003)];
    var js = [new Relation(1004)];
    var php = [new Relation(1005)];
    var cpp = [new Relation(1006)];
    var c = [new Relation(1007)];
    var ruby = [new Relation(1008)];
    var rel21 = new Relation(21, [
        new Relation(22, csharp),
        new Relation(23, java),
        new Relation(24, java),
    ]);
    var rel27 = new Relation(27, [
        new Relation(28, python),
        new Relation(29, ruby),
        new Relation(30, php)
    ]);
    var rel26 = new Relation(26, [
        new Relation(100, js),
        new Relation(101, [rel27]),
        new Relation(102, [rel27])
    ]);
    var rel31 = new Relation(31, cpp);
    var rel32 = new Relation(32, [new Relation(33, [
            new Relation(34, oc),
            new Relation(35, java)
        ])]);
    var rel36 = new Relation(36, [rel21]);
    var rel49 = new Relation(9, [rel31, rel32, rel36,
        new Relation(16, [new Relation(38, [
                new Relation(100, js),
                new Relation(101, [rel26])
            ])])
    ]);
    var rel39 = new Relation(39, [
        new Relation(40, [new Relation(41, [
                new Relation(42, python),
                new Relation(43, python),
                new Relation(44, [new Relation(45, [
                        new Relation(46, java),
                        new Relation(47, c)
                    ])]),
                new Relation(48, cpp)
            ])]),
        new Relation(100, [rel49])
    ]);
    var relations = new Relation(0);
    relations.rels.push(new Relation(5, [new Relation(7, [new Relation(103, python)])]));
    relations.rels.push(new Relation(6, [
        new Relation(8, [new Relation(9, [
                new Relation(10, [
                    new Relation(11, python),
                    new Relation(12, csharp),
                    new Relation(13, python),
                    new Relation(14, oc)
                ]),
                new Relation(15, java),
                new Relation(16, [
                    new Relation(17, js),
                    new Relation(18, [new Relation(19, [
                            new Relation(20, [rel21]),
                            new Relation(25, [rel26]),
                        ])])
                ]),
            ])]),
        new Relation(37, [rel49])
    ]));
    relations.rels.push(new Relation(1, python));
    relations.rels.push(new Relation(2, [rel39]));
    relations.rels.push(new Relation(3, [rel39]));
    relations.rels.push(new Relation(4, [rel39]));
    H.starterRelations = new Relation(-1, [relations]);
})(H || (H = {}));

export default H;
//# sourceMappingURL=questions.js.map