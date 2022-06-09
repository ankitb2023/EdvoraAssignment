import { useEffect } from 'react';
import styles from './Filters.module.css';
import { useStore } from '../../Context/Store';
import  { sortnear } from '../../utils/helpers';
export const DropMenu = ({ setMenu }) => {
    var station_code=40;
    const { drop_menu, control } = styles;
    const { getRides,filters, handleFilters } = useStore();
    const ride = sortnear( getRides(), station_code )


    useEffect(() => {

        function handleCLick( { target } ) {
            const menu = document.getElementsByClassName(drop_menu)[0];
            if( !menu.contains( target ) ) {
                setMenu( false );
            }
        }

        function handleKeyboard({ key }) {

            if( key === "Escape" ) {
                setMenu( false );
            }
        }

        document.addEventListener("keydown", handleKeyboard);
        document.addEventListener("click", handleCLick);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
            document.removeEventListener("click", handleCLick);
        }

    }, [ drop_menu, setMenu ]);



    return (
        
        <ul className = { drop_menu } >
            <li>Filters</li>
            
            <li>
                <select 
                onChange = { ({ target }) => handleFilters({ ...filters, state: target.value }) } 
                value = { filters.state } 
                className = { control }>
                    <option value = "">State</option>
                    {
                    ride.map((r,i)=>(
                        
                        <option key = {r.id} value = {r.state}>{r.state}</option>
                    )
             
                       
                
                )
              
                    }
                </select>
            </li>
            
            <li>
                <select 
                onChange = { ({ target }) => handleFilters({ ...filters, city: target.value }) }
                value = { filters.city } 
                className = { control }>
                    <option value = "">City</option>
                  {
                  ride.map((r,i)=>(
                        
                        <option key = {r.id} value = {r.city}>{r.city}</option>
                    )
                  )
                  }
                </select>
            </li>
        </ul>
    );
};