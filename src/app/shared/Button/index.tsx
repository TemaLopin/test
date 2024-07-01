import {Button} from "@mui/material";

export const ButtonProject = ({icon = null, text, active = false}: any) => {
    return <Button sx={{
        color: !active ? '#06082C' : '#fff',
        fontSize: 14,
        fontWeight: 500,
        p: text ? '10px 24px' : '12px',
        borderRadius: '10px',
        minWidth: 'max-content',
        textTransform: 'capitalize',
        background: !active ? '#EEF0F7' : '#06082C'
    }}
                   variant={"text"}>
        {icon}
        {text}
    </Button>
}