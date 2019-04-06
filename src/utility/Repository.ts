import mongoose from 'mongoose';

class Repository {
    public modelName: mongoose.Model<mongoose.Document, {}>;

    constructor(modelName: mongoose.Model<mongoose.Document, {}>) {
        this.modelName = modelName;
    }

    public find() {
        return this.modelName.find({}, (err, resulst) => {
            if (err) {
                throw err;
            }
            return resulst;
        });
    }
}

export default Repository;
