import Repository from '../../utility/Repository';
import { temperatureModel } from '../model/temperature';

class TemperatureRepository extends Repository {
    constructor() {
        super(temperatureModel);
    }
}

export default TemperatureRepository;
