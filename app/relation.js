export default class Relation {
    constructor(id, subRels) {
        if (subRels === void 0) {
            subRels = null;
        }
        this.id = id;
        this.rels = [];
        if (subRels) {
            subRels.forEach(r => this.rels.push(r));
        }
    }
}