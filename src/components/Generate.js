import React from 'react';
import Button from '@material-ui/core/Button';

const Generate = ({save}) => {

    const generate = (e) => {
        e.preventDefault();
        save();
    }
    return(
            <div className="Generate">
                 <Button variant="outlined" size="small" color="primary" onClick={generate}>Generate New Quote</Button>
           </div>
    )       
}

export default Generate;