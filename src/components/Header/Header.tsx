import { Header as CarbonHeader, HeaderGlobalAction, HeaderGlobalBar, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, HeaderPanel, HeaderSideNavItems, SideNav, SideNavItems, SkipToContent, Stack } from "@carbon/react"

import { Settings } from "@carbon/icons-react"
import ThemeForm from "../ThemeForm/ThemeForm"
import { theme } from "../../App"
import { useState } from "react"

const NAV = {
    MYSELF: {
        href: "#myself",
        value: "Myself"
    },
    EXPERIENCE: {
        href: "#experience",
        value: "Experience"
    },
    GETINTOUCH: {
        href: "#getintouch",
        value: "Get in touch"
    }
}

interface HeaderProps {
    setTheme: React.Dispatch<React.SetStateAction<theme>>
}

const Header = ({ setTheme }: HeaderProps) => {
    const [openSettings, setOpenSettings] = useState(false);
    const [isSideNavExpanded, setIsSideNavExpanded] = useState(false)

    return (
        <CarbonHeader aria-label="Thamjith's personal website">
            <SkipToContent />
            <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={() => setIsSideNavExpanded(!isSideNavExpanded)} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
            <HeaderName href="https://thamjiththaha.com/" prefix="">
                Thamjith Thaha
            </HeaderName>
            <HeaderNavigation aria-label="Thamjith's personal website]">
                <HeaderMenuItem href={NAV.MYSELF.href}>{NAV.MYSELF.value}</HeaderMenuItem>
                <HeaderMenuItem href={NAV.EXPERIENCE.href}>{NAV.EXPERIENCE.value}</HeaderMenuItem>
                <HeaderMenuItem href={NAV.GETINTOUCH.href}>{NAV.GETINTOUCH.value}</HeaderMenuItem>
            </HeaderNavigation>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false} onSideNavBlur={() => setIsSideNavExpanded(!isSideNavExpanded)}>
                <SideNavItems>
                    <HeaderSideNavItems>
                        <HeaderMenuItem href={NAV.MYSELF.href}>{NAV.MYSELF.value}</HeaderMenuItem>
                        <HeaderMenuItem href={NAV.EXPERIENCE.href}>{NAV.EXPERIENCE.value}</HeaderMenuItem>
                        <HeaderMenuItem href={NAV.GETINTOUCH.href}>{NAV.GETINTOUCH.value}</HeaderMenuItem>
                    </HeaderSideNavItems>
                </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
                <HeaderGlobalAction
                    aria-label='Settings'
                    onClick={() => setOpenSettings(!openSettings)}
                    isActive={openSettings}
                >
                    <Settings size={20} />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            <HeaderPanel
                expanded={openSettings}
                href='#settings-panel'
            >
                <Stack gap={2}>
                    <h5>Theme</h5>
                    <ThemeForm setTheme={setTheme}></ThemeForm>
                </Stack>
            </HeaderPanel>
        </CarbonHeader>
    )
}

export default Header