import Repository from '../../utility/Repository';
import { sakeModel } from '../model/sake';

class SakeRepository extends Repository {
    constructor() {
        super(sakeModel);
    }
}

export default SakeRepository;
