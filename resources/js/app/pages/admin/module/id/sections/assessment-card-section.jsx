import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import CollapseComponent from "../components/collapse-component";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: "rotate(0deg)",
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: "rotate(180deg)",
            },
        },
    ],
}));

export default function AssessmentCardSection() {

    const { exam_types } = useSelector((store) => store.booklets);
 
    console.log("exam_types", exam_types);

    return (
        <div className="w-full flex  flex-col gap-5 items-center justify-center">
            {exam_types.map((res, i) => {
                const htmlString = res.direction;
                return (
                    <Card sx={{ minWidth: 645, maxWidth: 645 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="/images/logo.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                            >
                                <div className="text-xl font-black">
                                    Direction
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: htmlString,
                                    }}
                                />
                            </Typography>
                        </CardContent>
                        <CollapseComponent data={res}/>
                    </Card>
                );
            })}
        </div>
    );
}
