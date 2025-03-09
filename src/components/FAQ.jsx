import { Box, useTheme, Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { tokens } from "../theme";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "./Header";

export default function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Get answers to your questions"/>
            
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: What is the purpose of this website?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This website is designed to provide a platform for users to access information 
                        and resources related to the topic of interest.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: How do I get started?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Getting started is easy. Simply click on the "Get Started" button 
                        and follow the prompts to create your account.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: How do I contact support?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        For any questions or concerns, please contact us through the "Contact Us" page.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: How do I reset my password?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Click on the "Forgot Password" link on the login page and follow the prompts 
                        to reset your password.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: Is my data secure on this platform?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, we use industry-standard security measures to protect your data 
                        and ensure privacy.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: Can I access this website on mobile devices?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, our website is fully responsive and optimized for mobile devices.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: Are there any fees for using this platform?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The basic features are free, but we offer premium plans for additional services.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: Can I delete my account?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, you can delete your account from the settings page, 
                        but this action is irreversible.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: How often is the website updated?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We update our website regularly with new features and security enhancements.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Q: How can I report a bug or issue?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can report issues through the "Help & Support" section or 
                        by contacting our support team.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
