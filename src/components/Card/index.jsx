import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './styles.css';

const SimpleCard = ({
    title,
    subTitle = 'none',
    icon = 'none',
    positionText = 'center',
    content,
}) => {
    return (
        <Card className="cardStyles">
            <CardContent>
                {icon !== 'none' && <image src={icon} />}
                <Typography
                    className="cardTittle"
                    color="textSecondary"
                    align={positionText}
                    gutterBottom
                    style={{ fontSize: 20 }}
                >
                    {title}
                </Typography>
                {subTitle !== 'none' && <Typography
                    className="cardTittle"
                    color="textSecondary"
                    align={positionText}
                    gutterBottom
                >
                    {subTitle}
                </Typography>
                }
                <Typography
                    variant="body2"
                    component="p"
                    align='center'
                >
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SimpleCard;
