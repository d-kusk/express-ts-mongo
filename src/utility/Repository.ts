import mongoose from 'mongoose';

class Repository {
    public modelName: mongoose.Model<mongoose.Document, {}>;

    constructor(modelName: mongoose.Model<mongoose.Document, {}>) {
        this.modelName = modelName;
    }

    public findAll() {
        return this.modelName.find({}, (err, resulst) => {
            if (err) {
                throw err;
            }
            return resulst;
        });
    }

    public findById(id: Number) {
        return this.modelName.findById(id, (err, result) => {
            if (err) {
                throw err;
            }
            return result;
        });
    }
}

export default Repository;
