import Repository from '../../utility/Repository';
import { sakeTypeModel } from '../model/saketypes';

class SakeTypeRepository extends Repository {
    constructor() {
        super(sakeTypeModel);
    }
}

export default SakeTypeRepository;
