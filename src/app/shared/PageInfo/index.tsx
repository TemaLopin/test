import {Box, Typography} from "@mui/material";
import {Confirmed} from "../../icons/Confirmed";
import {ButtonProject} from "../Button";
import {RedirectIcon} from "../../icons/Redirect";

export const PageInfo = ({title}: any) => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    }}>
        <Box sx={{
            background: 'linear-gradient(#09043E 100%, #29208B 100%)',
            height: '170px',
            width: '100%',
            borderRadius: '20px 20px 0 0'
        }}/>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 1,
        }}>
            <Box
            component={"img"}
            src={"/title-img.png"}
            sx={{
                width: 115,
                height: 140,
                objectFit: 'cover',
                borderRadius: "50%"
            }}
            >

            </Box>
            <Box>

            </Box>
        </Box>
        <Box sx={{background: '#fff', pt: '102px', display: 'flex', gap: 2, flexDirection: 'column'}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <Typography variant={"h1"} sx={{
                    fontSize: 30,
                    fontWeight: 500,
                    color: '#06082C'
                }}>
                    {title}
                </Typography>
                <Confirmed/>
            </Box>

            <Box sx={{color: '#9395B8', fontSize: 14, fontWeight: 500}}>

            </Box>
            <Box sx={{display: 'flex', gap: '10px'}}>
                <ButtonProject text={"Подписаться"} active={true}/>
                <ButtonProject text={"Подробнее"}/>
                <ButtonProject icon={<RedirectIcon/>}/>
            </Box>
            <Box></Box>
        </Box>
    </Box>
}