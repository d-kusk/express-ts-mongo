import Repository from '../../utility/Repository';
import { sakeModel } from '../model/sake';
import { resolve } from 'path';

class SakeRepository extends Repository {
    constructor() {
        super(sakeModel);
    }

    public findAll() {
        return sakeModel
            .find({})
            .populate('type impressions.temperature', (err, result) => {
                if (err) {
                    throw err;
                }
                return result;
            });
    }
}

export default SakeRepository;
