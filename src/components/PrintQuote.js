import React from 'react';
import {Button, Container} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const PrintQuote = (props) => {
    return (
        <div className="printQuote">
            <Container maxWidth="sm"  style={{ backgroundColor: '#cfe8fc', height: 'auto' }} >
                <h1>{props.quotes.text}</h1>
                <p>{props.quotes.author}</p>
                {props.quotes.text ? <Button href={'https://twitter.com/intent/tweet?text=' + props.quotes.text + ' - ' + props.quotes.author} target="_blank"
                        variant="contained"
                        size="small"
                        color="primary"
                        startIcon={<TwitterIcon />}
                    >
                        Tweet
                    </Button>:''}
            </Container>
        </div>
    )
}

export default PrintQuote;