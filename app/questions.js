import Question from './question';

class Questions {
    constructor() {
        this.items = [];
    }

    add(id, name, img) {
        if (img === void 0) {
            img = null;
        }
        var q = new Question(id, name);
        q.img = img ? ('/assets' + img) : null;
        this.items.push(q);
    }

    load() {
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

    getDetail(id) {
        return this.items.find(i => i.id === id) || null;
    }
}

export default Questions;