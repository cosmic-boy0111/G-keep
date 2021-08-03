import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title:'',
        content:'',
    })

    const inputEvent = (e) =>{
        const {value,name} = e.target;
        setNote((pre)=>{
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        if(note.title !== '' && note.content!== ''){
            props.passNote(note);
        }
        setNote({
            title:'',
            content:'',
        })
    };

    return (
        <div style={{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>

            <form className="mt-2 p-2" style={{
                width:'30%',
                borderRadius:'10px',
                boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                display:'flex',
                flexDirection:'column',
            }}> 
                <input type="text"  className='my-1' autoComplete='off' id="exampleInputEmail1" name='title' value={note.title} onChange={inputEvent} placeholder='Title' style={{
                    outline:'none',
                    border:'none',
                    fontSize:'17px',
                    fontWeight:'bold'
                }}/>
                <textarea  className='my-1' rows='' column='' name='content' value={note.content} onChange={inputEvent} placeholder="Write a Note ...." style={{
                    outline:'none',
                    border:'none',
                    fontSize:'13px',
                }} ></textarea>
                <IconButton aria-label="delete" style={{
                    alignSelf:'flex-end',
                    position:'relative',
                    top:'2rem',
                    boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    backgroundColor:'white'
                }}
                onClick={addEvent}
                >
                    <AddRoundedIcon style={{
                        color:'#d4e157'
                    }}/>
                </IconButton>
            </form>
        </div>
    )
}

export default CreateNote
