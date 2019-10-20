const styles = theme => ({
    root:{
        flexGrow: 1
    },
    paper: {
        textAlign: 'center',
        width: '100%',
        height: '100%',
        elevation: 1,
        padding: 15,
        marginTop: '200px'
    },
    formControl:{
        width: '100%'
    },
    button: {
        width: '100%'
    },
    internalContainer: {
        padding: 20,
        width: '100%',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            width: '70%'
        }
    },
    row: {
        marginBottom: 20
    }
    
    
});
export default styles;