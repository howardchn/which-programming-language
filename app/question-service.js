import questions from './questions-db';
import relations from './relations-db';
import results from './results-db';

export default class QuestionService {
    query(id) {
        let relation = this.queryRelation(id);
        let question = this.queryQuestion(relation.qid);
        let answers = null;
        if(relation.answerIds) {
            answers = relation.answerIds.map(rid => this.queryRelation(rid))
                .map(r => { return { rid: r.rid, name: this.queryQuestion(r.qid).name }; });
        }

        return { question, answers };
    }

    result(id) {
        return results.find(r => r.id == id);
    }

    nextId(id) {
        let relation = this.queryRelation(id);
        if(relation.answerIds && relation.answerIds.length > 1) {
            return id;
        } 
        else {
            return relation.answerIds[0];
        }
    }

    queryQuestion(id) {
        let question = questions.find(q => q[0] == id);

        if(question) {
            let [id, name, image] = question;
            return { id, name, image };
        }
        else return null;
    }

    queryRelation(id) {
        let relation = relations.find(r => r[0] == id);
        let [rid, qid, answerIds] = relation;
        return { rid, qid, answerIds };
    }
}