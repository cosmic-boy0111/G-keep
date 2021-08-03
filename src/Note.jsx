import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

const Note = (props) => {


    return (
        <div className='note'>
            <h4>{props.title}</h4>
            <p>{props.content} </p>
            <IconButton className='del_btn' onClick={()=>
                props.setAdd(
                    props.add.filter((e,idx)=>{
                        return idx!==props.id;
                    })
                )
            }>
                <DeleteOutlineRoundedIcon style={{color:'#d4e157'}}/>
            </IconButton>
        </div>
    )
}

export default Note
