import Relation from './relation';

export default class Relations extends Array {
    constructor() {
        super();

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

        this.starterRelation = new Relation(-1, [relations]);
    }
}