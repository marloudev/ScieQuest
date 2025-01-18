import React from "react";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import FillInTheBlankComponent from "./fill-in-the-blank-component";
import IdentificationComponent from "./identification-component";
import MatchingComponent from "./matching-component";
import MultipleChoiceComponent from "./multiple-choice-component";
import TrueOrFalseComponent from "./true-or-false-component";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardContent, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function CollapseComponent({ data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className="w-full flex items-end justify-end">
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon sx={{ fontSize: 40 }}/>
                </ExpandMore>
            </CardActions>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {data.type == "Fill In The Blank" && (
                        <FillInTheBlankComponent />
                    )}
                    {data.type == "Identification" && (
                        <IdentificationComponent />
                    )}
                    {data.type == "Matching" && <MatchingComponent />}
                    {data.type == "Multiple Choice" && (
                        <MultipleChoiceComponent />
                    )}
                    {data.type == "True Or False" && <TrueOrFalseComponent />}
                </CardContent>
            </Collapse>
        </>
    );
}
