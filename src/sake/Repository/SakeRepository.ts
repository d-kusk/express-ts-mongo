import Repository from '../../utility/Repository';
import { sakeModel } from '../model/sake';

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
