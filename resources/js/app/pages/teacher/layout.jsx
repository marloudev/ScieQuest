import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { router as route } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setPathname } from "@/app/redux/app-slice";
import { AssignmentInd, AutoStories, CalendarMonth, Diversity1, Diversity3, Engineering, FolderShared, Groups, Groups2, HistoryEdu, PowerSettingsNew, RecentActors, School, SupervisedUserCircle } from "@mui/icons-material";
import LogoutSection from "../_sections/logout-section";
import store from "../store/store";
import { get_user_login_thunk } from "@/app/redux/app-thunk";

const NAVIGATION = [
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        segment: "list-students",
        title: "List of Students",
        icon: <RecentActors />,
    },
    {
        segment: "module",
        title: "Modules",
        icon: <AutoStories />,
    },
    {
        kind: "divider",
    },
    {
        segment: "logout",
        title: "Logout",
        icon: <PowerSettingsNew />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    // colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        // Global styles for background image
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: 'url("/images/background.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    // backgroundColor: 'transparent',  // Make AppBar transparent
                    boxShadow: 'none',  // Remove any shadow
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',   // Make Drawer transparent
                    boxShadow: 'none',  // Remove any shadow
                },
            },
        },
    },
});
function InstructorLayout({ children }, props) {
    const { pathname } = useSelector((state) => state.app);
    const { window } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const { user } = useSelector((state) => state.app);

    const username = user?.fname ? `${user.fname}` : "Guest";

    useEffect(() => {
        store.dispatch(get_user_login_thunk()) 
    }, [])

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                if (path == '/logout') {
                    setOpen(true)
                } else {
                    if (path == '/teacher' || path == '/students/registered' || path == '/students/enrollment') {
                        route.visit(String("/teacher" + path + '?page=1'));
                    } else {
                        route.visit(String("/teacher" + path));
                    }
                    dispatch(setPathname(path));
                }

            },
        };
    }, [pathname]);

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;
    return (
        // preview-start
        <>

            <AppProvider
                navigation={NAVIGATION}
                router={router}
                theme={demoTheme}
                window={demoWindow}
                branding={{
                    logo: <img src="/images/logo.jpg" />,
                    title: "Science Quest",
                }}
            >

                <DashboardLayout>
                    <div className="username-section mt-4 mb-1 px-5 text-2xl text-green-600 items-center justify-end flex" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}>
                        <span><b>Welcome, Teacher {username}</b></span>
                    </div>
                    <LogoutSection open={open} setOpen={setOpen} />
                    <div className="p-4">{children}</div>
                </DashboardLayout>
            </AppProvider>
        </>

        // preview-end
    );
}

InstructorLayout.propTypes = {
    window: PropTypes.func,
};

export default InstructorLayout;
