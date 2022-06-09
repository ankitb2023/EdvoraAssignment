import { useStore } from '../../Context/Store';
import { Ride } from './Ride';

import  { sortnear} from '../../utils/helpers';



export const Rides = () => {
    const { getRides } = useStore();
    const station_code=40;
    const ride = sortnear(getRides(), station_code )
    
    return (
        <div>
            { ride.length ? ride.map( ( r, i ) => (
                <Ride key = { i } station_code = { station_code } { ...r } /> )) :
                <p>no data</p>
            }
        </div>
    );
};