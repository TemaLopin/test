import {Avatar, AvatarGroup, Box, Typography} from "@mui/material";
import {Confirmed} from "../../icons/Confirmed";
import {ButtonProject} from "../Button";
import {RedirectIcon} from "../../icons/Redirect";
import {ArrowTopIcon} from "../../icons/ArrowTop";
import {LocationIcon} from "../../icons/Location";
import {QtyColor} from "../../icons/QtyColor";

export const PageInfo = ({title}: any) => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        flex: '0 1 66%'
    }}>
        <Box sx={{
            background: 'linear-gradient(#09043E 100%, #29208B 100%)',
            height: '170px',
            width: '100%',
            borderRadius: '20px 20px 0 0'
        }}/>

        <Box sx={{background: '#fff', display: 'flex', gap: 2, flexDirection: 'column', p: '0 20px'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 1,
                alignItems: 'center',
                mt: '-54px'
            }}>
                <Box sx={{
                    display: 'flex',
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 140,
                    height: 140,
                    background: '#F8F8F9',
                    borderRadius: "50%"
                }}>
                    <Box
                        component={"img"}
                        src={"/title-img.png"}
                        sx={{
                            width: 114,
                            height: "100%",
                            objectFit: 'cover',
                            borderRadius: "50%"
                        }}
                    />
                    <Box
                        component={"img"}
                        src={"/rus.png"}
                        sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: 30,
                            height: 30,

                        }}
                        />
                </Box>
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#7B7EA5',
                    fontWeight: 500,
                    p: '7px 14px',
                    gap: '4px',
                    borderRadius: '11px',
                    background: '#F8F8F9'
                }}>
                    <ArrowTopIcon/>
                    №2
                </Typography>
            </Box>
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


            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                color: '#9395B8',
                fontSize: 14,
                fontWeight: 500
            }}>
                <Typography variant={"body1"} sx={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <LocationIcon/>
                    Алтайский край
                </Typography>
                <Typography variant={"body1"} sx={{display: 'flex', alignItems: 'center'}}>
                    Грэпплинг
                </Typography>
                <Typography variant={"body1"} sx={{display: 'flex', alignItems: 'center'}}>
                    Греко-римская борьба
                </Typography>
                <Typography variant={"body1"} sx={{display: 'flex', alignItems: 'center'}}>
                    Пляжная борьба
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#9395B8',
                fontSize: 14,
                fontWeight: 500,
                mb: '12px'
            }}>
                <AvatarGroup max={3}>
                    <Avatar sx={{width: 22, height: 22}} src={"/avatar/1.png"}/>
                    <Avatar sx={{width: 22, height: 22}} src={"/avatar/2.png"}/>
                    <Avatar sx={{width: 22, height: 22}} src={"/avatar/3.png"}/>
                </AvatarGroup>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '19px'
                }}>
                    <Typography variant={"body1"} sx={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <Box sx={{color: "#06082C", fontWeight: 500}}>45</Box>
                        Спортсменов
                    </Typography>
                    <Typography variant={"body1"} sx={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <Box sx={{color: "#06082C", fontWeight: 500}}>125</Box>
                        Подписчиков
                    </Typography>
                    <Typography variant={"body1"} sx={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <Box sx={{color: "#06082C", fontWeight: 500}}>12</Box>
                        Лиг
                    </Typography>
                </Box>
            </Box>
            <Box sx={{display: 'flex', gap: '8px', alignItems: 'center', mb: '24px'}}>
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(123, 126, 165, 1)',
                    fontWeight: 600,
                    fontSize: '12px',
                    p: '7px 14px',
                    gap: '4px',
                    borderRadius: '11px',
                    background: '#F8F8F9'
                }}>
                    <QtyColor/>
                    12
                </Typography>
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(123, 126, 165, 1)',
                    fontWeight: 600,
                    fontSize: '12px',
                    p: '7px 14px',
                    gap: '4px',
                    borderRadius: '11px',
                    background: '#F8F8F9'
                }}>
                    <QtyColor/>
                   4
                </Typography>
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(123, 126, 165, 1)',
                    fontWeight: 600,
                    fontSize: '12px',
                    p: '7px 14px',
                    gap: '4px',
                    borderRadius: '11px',
                    background: '#F8F8F9'
                }}>
                    <QtyColor/>
                    19
                </Typography>
            </Box>

            <Box sx={{display: 'flex', gap: '10px'}}>
                <ButtonProject text={"Подписаться"} active={true}/>
                <ButtonProject text={"Подробнее"}/>
                <ButtonProject icon={<RedirectIcon/>}/>
            </Box>

        </Box>
    </Box>
}