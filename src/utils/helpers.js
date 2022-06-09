
export function calculation( path , stCode ) {
    let pointer = Math.abs( path[0] - stCode );
    let length = path.length;

    for( let i = 1; i < length; i++ ) {

     

        let temp = Math.abs( path[i] - stCode );

        if( temp < pointer ) {
            pointer = temp;
            continue;
        }

        break;
    }

    return pointer;
}

export function sortnear(ride, stCode) {
    return ride.sort( (a, b) =>  {
        let A = a.station_path;
        let B = b.station_path;

        return calculation(A, stCode) - calculation(B, stCode);

    })
}