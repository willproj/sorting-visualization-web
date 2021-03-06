import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    margin:{
        marginBottom: theme.spacing(3),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    grid: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
        display:'flex',
        flexDirection:'row',
    },
    sortbutton:{
        marginLeft:theme.spacing(5),
        width:200,
        height:40
    },
    paperfornums:{
        height: 470,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

export default useStyles;